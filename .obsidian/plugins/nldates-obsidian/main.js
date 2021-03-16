'use strict';

var obsidian = require('obsidian');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var obsidian__default = /*#__PURE__*/_interopDefaultLegacy(obsidian);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var main = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });




var DEFAULT_DAILY_NOTE_FORMAT = "YYYY-MM-DD";
var DEFAULT_WEEKLY_NOTE_FORMAT = "gggg-[W]ww";
var DEFAULT_MONTHLY_NOTE_FORMAT = "YYYY-MM";

function shouldUsePeriodicNotesSettings(periodicity) {
    var _a, _b;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var periodicNotes = window.app.plugins.getPlugin("periodic-notes");
    return periodicNotes && ((_b = (_a = periodicNotes.settings) === null || _a === void 0 ? void 0 : _a[periodicity]) === null || _b === void 0 ? void 0 : _b.enabled);
}
/**
 * Read the user settings for the `daily-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getDailyNoteSettings() {
    var _a, _b, _c, _d;
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var _e = window.app, internalPlugins = _e.internalPlugins, plugins = _e.plugins;
        if (shouldUsePeriodicNotesSettings("daily")) {
            var _f = ((_b = (_a = plugins.getPlugin("periodic-notes")) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.daily) || {}, format_1 = _f.format, folder_1 = _f.folder, template_1 = _f.template;
            return {
                format: format_1 || DEFAULT_DAILY_NOTE_FORMAT,
                folder: (folder_1 === null || folder_1 === void 0 ? void 0 : folder_1.trim()) || "",
                template: (template_1 === null || template_1 === void 0 ? void 0 : template_1.trim()) || "",
            };
        }
        var _g = ((_d = (_c = internalPlugins.getPluginById("daily-notes")) === null || _c === void 0 ? void 0 : _c.instance) === null || _d === void 0 ? void 0 : _d.options) || {}, folder = _g.folder, format = _g.format, template = _g.template;
        return {
            format: format || DEFAULT_DAILY_NOTE_FORMAT,
            folder: (folder === null || folder === void 0 ? void 0 : folder.trim()) || "",
            template: (template === null || template === void 0 ? void 0 : template.trim()) || "",
        };
    }
    catch (err) {
        console.info("No custom daily note settings found!", err);
    }
}
/**
 * Read the user settings for the `weekly-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getWeeklyNoteSettings() {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var pluginManager = window.app.plugins;
        var calendarSettings = (_a = pluginManager.getPlugin("calendar")) === null || _a === void 0 ? void 0 : _a.options;
        var periodicNotesSettings = (_c = (_b = pluginManager.getPlugin("periodic-notes")) === null || _b === void 0 ? void 0 : _b.settings) === null || _c === void 0 ? void 0 : _c.weekly;
        if (shouldUsePeriodicNotesSettings("weekly")) {
            return {
                format: periodicNotesSettings.format || DEFAULT_WEEKLY_NOTE_FORMAT,
                folder: ((_d = periodicNotesSettings.folder) === null || _d === void 0 ? void 0 : _d.trim()) || "",
                template: ((_e = periodicNotesSettings.template) === null || _e === void 0 ? void 0 : _e.trim()) || "",
            };
        }
        var settings = calendarSettings || {};
        return {
            format: settings.weeklyNoteFormat || DEFAULT_WEEKLY_NOTE_FORMAT,
            folder: ((_f = settings.weeklyNoteFolder) === null || _f === void 0 ? void 0 : _f.trim()) || "",
            template: ((_g = settings.weeklyNoteTemplate) === null || _g === void 0 ? void 0 : _g.trim()) || "",
        };
    }
    catch (err) {
        console.info("No custom weekly note settings found!", err);
    }
}
/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getMonthlyNoteSettings() {
    var _a, _b, _c, _d;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var pluginManager = window.app.plugins;
    try {
        var settings = (shouldUsePeriodicNotesSettings("monthly") &&
            ((_b = (_a = pluginManager.getPlugin("periodic-notes")) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.monthly)) ||
            {};
        return {
            format: settings.format || DEFAULT_MONTHLY_NOTE_FORMAT,
            folder: ((_c = settings.folder) === null || _c === void 0 ? void 0 : _c.trim()) || "",
            template: ((_d = settings.template) === null || _d === void 0 ? void 0 : _d.trim()) || "",
        };
    }
    catch (err) {
        console.info("No custom monthly note settings found!", err);
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * dateUID is a way of weekly identifying daily/weekly/monthly notes.
 * They are prefixed with the granularity to avoid ambiguity.
 */
function getDateUID(date, granularity) {
    if (granularity === void 0) { granularity = "day"; }
    var ts = date.clone().startOf(granularity).format();
    return granularity + "-" + ts;
}
function removeEscapedCharacters(format) {
    return format.replace(/\[[^\]]*\]/g, ""); // remove everything within brackets
}
function xor(a, b) {
    return (a || b) && !(a && b);
}
/**
 * XXX: When parsing dates that contain both week numbers and months,
 * Moment choses to ignore the week numbers. For the week dateUID, we
 * want the opposite behavior. Strip the MMM from the format to patch.
 */
function isFormatAmbiguous(format, granularity) {
    if (granularity === "week") {
        var cleanFormat = removeEscapedCharacters(format);
        return (/w{1,2}/i.test(cleanFormat) &&
            xor(/M{1,4}/.test(cleanFormat), /D{1,4}/.test(cleanFormat)));
    }
    return false;
}
function getDateFromFile(file, granularity) {
    var getSettings = {
        day: getDailyNoteSettings,
        week: getWeeklyNoteSettings,
        month: getMonthlyNoteSettings,
    };
    var format = getSettings[granularity]().format.split("/").pop();
    var noteDate = window.moment(file.basename, format, true);
    if (!noteDate.isValid()) {
        return null;
    }
    if (isFormatAmbiguous(format, granularity)) {
        if (granularity === "week") {
            var cleanFormat = removeEscapedCharacters(format);
            if (/w{1,2}/i.test(cleanFormat)) {
                return window.moment(file.basename, 
                // If format contains week, remove day & month formatting
                format.replace(/M{1,4}/g, "").replace(/D{1,4}/g, ""), false);
            }
        }
    }
    return noteDate;
}

function ensureFolderExists(path$1) {
    return __awaiter(this, void 0, void 0, function () {
        var dirs, dir;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dirs = path$1.split("/");
                    dirs.pop(); // remove basename
                    dir = "";
                    _a.label = 1;
                case 1:
                    if (!dirs.length) return [3 /*break*/, 4];
                    dir = path__default['default'].join(dir, dirs.shift()).replace(/\\/g, "/");
                    if (!!window.app.vault.getAbstractFileByPath(dir)) return [3 /*break*/, 3];
                    return [4 /*yield*/, window.app.vault.createFolder(dir)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getNotePath(directory, filename) {
    return __awaiter(this, void 0, void 0, function () {
        var path$1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!filename.endsWith(".md")) {
                        filename += ".md";
                    }
                    path$1 = obsidian__default['default'].normalizePath(path__default['default'].join(directory, filename));
                    return [4 /*yield*/, ensureFolderExists(path$1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, path$1];
            }
        });
    });
}
function getTemplateContents(template) {
    return __awaiter(this, void 0, void 0, function () {
        var app, metadataCache, vault, templatePath, templateFile, contents, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = window.app;
                    metadataCache = app.metadataCache, vault = app.vault;
                    templatePath = obsidian__default['default'].normalizePath(template);
                    if (templatePath === "/") {
                        return [2 /*return*/, Promise.resolve("")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    templateFile = metadataCache.getFirstLinkpathDest(templatePath, "");
                    return [4 /*yield*/, vault.cachedRead(templateFile)];
                case 2:
                    contents = _a.sent();
                    return [2 /*return*/, contents];
                case 3:
                    err_1 = _a.sent();
                    console.error("Failed to read the daily note template '" + templatePath + "'", err_1);
                    new obsidian__default['default'].Notice("Failed to read the daily note template");
                    return [2 /*return*/, ""];
                case 4: return [2 /*return*/];
            }
        });
    });
}

var DailyNotesFolderMissingError = /** @class */ (function (_super) {
    __extends(DailyNotesFolderMissingError, _super);
    function DailyNotesFolderMissingError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DailyNotesFolderMissingError;
}(Error));
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
function createDailyNote(date) {
    return __awaiter(this, void 0, void 0, function () {
        var app, vault, moment, _a, template, format, folder, templateContents, filename, normalizedPath, createdFile, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    app = window.app;
                    vault = app.vault;
                    moment = window.moment;
                    _a = getDailyNoteSettings(), template = _a.template, format = _a.format, folder = _a.folder;
                    return [4 /*yield*/, getTemplateContents(template)];
                case 1:
                    templateContents = _b.sent();
                    filename = date.format(format);
                    return [4 /*yield*/, getNotePath(folder, filename)];
                case 2:
                    normalizedPath = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, vault.create(normalizedPath, templateContents
                            .replace(/{{\s*(date|time)\s*:(.*?)}}/gi, function (_, _timeOrDate, momentFormat) {
                            var now = moment();
                            return date
                                .set({
                                hour: now.get("hour"),
                                minute: now.get("minute"),
                                second: now.get("second"),
                            })
                                .format(momentFormat.trim());
                        })
                            .replace(/{{\s*date\s*}}/gi, filename)
                            .replace(/{{\s*time\s*}}/gi, moment().format("HH:mm"))
                            .replace(/{{\s*title\s*}}/gi, filename))];
                case 4:
                    createdFile = _b.sent();
                    return [2 /*return*/, createdFile];
                case 5:
                    err_1 = _b.sent();
                    console.error("Failed to create file: '" + normalizedPath + "'", err_1);
                    new obsidian__default['default'].Notice("Unable to create new file.");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getDailyNote(date, dailyNotes) {
    var _a;
    return (_a = dailyNotes[getDateUID(date, "day")]) !== null && _a !== void 0 ? _a : null;
}
function getAllDailyNotes() {
    /**
     * Find all daily notes in the daily note folder
     */
    var vault = window.app.vault;
    var folder = getDailyNoteSettings().folder;
    var dailyNotesFolder = vault.getAbstractFileByPath(obsidian__default['default'].normalizePath(folder));
    if (!dailyNotesFolder) {
        throw new DailyNotesFolderMissingError("Failed to find daily notes folder");
    }
    var dailyNotes = {};
    obsidian__default['default'].Vault.recurseChildren(dailyNotesFolder, function (note) {
        if (note instanceof obsidian__default['default'].TFile) {
            var date = getDateFromFile(note, "day");
            if (date) {
                var dateString = getDateUID(date, "day");
                dailyNotes[dateString] = note;
            }
        }
    });
    return dailyNotes;
}

var WeeklyNotesFolderMissingError = /** @class */ (function (_super) {
    __extends(WeeklyNotesFolderMissingError, _super);
    function WeeklyNotesFolderMissingError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WeeklyNotesFolderMissingError;
}(Error));
function getDaysOfWeek() {
    var moment = window.moment;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var weekStart = moment.localeData()._week.dow;
    var daysOfWeek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
    ];
    while (weekStart) {
        daysOfWeek.push(daysOfWeek.shift());
        weekStart--;
    }
    return daysOfWeek;
}
function getDayOfWeekNumericalValue(dayOfWeekName) {
    return getDaysOfWeek().indexOf(dayOfWeekName.toLowerCase());
}
function createWeeklyNote(date) {
    return __awaiter(this, void 0, void 0, function () {
        var vault, _a, template, format, folder, templateContents, filename, normalizedPath, createdFile, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    vault = window.app.vault;
                    _a = getWeeklyNoteSettings(), template = _a.template, format = _a.format, folder = _a.folder;
                    return [4 /*yield*/, getTemplateContents(template)];
                case 1:
                    templateContents = _b.sent();
                    filename = date.format(format);
                    return [4 /*yield*/, getNotePath(folder, filename)];
                case 2:
                    normalizedPath = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, vault.create(normalizedPath, templateContents
                            .replace(/{{\s*(date|time)\s*:(.*?)}}/gi, function (_, _timeOrDate, momentFormat) {
                            var now = window.moment();
                            return date
                                .set({
                                hour: now.get("hour"),
                                minute: now.get("minute"),
                                second: now.get("second"),
                            })
                                .format(momentFormat.trim());
                        })
                            .replace(/{{\s*title\s*}}/gi, filename)
                            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
                            .replace(/{{\s*(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\s*:(.*?)}}/gi, function (_, dayOfWeek, momentFormat) {
                            var day = getDayOfWeekNumericalValue(dayOfWeek);
                            return date.weekday(day).format(momentFormat.trim());
                        }))];
                case 4:
                    createdFile = _b.sent();
                    return [2 /*return*/, createdFile];
                case 5:
                    err_1 = _b.sent();
                    console.error("Failed to create file: '" + normalizedPath + "'", err_1);
                    new obsidian__default['default'].Notice("Unable to create new file.");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getWeeklyNote(date, weeklyNotes) {
    var _a;
    return (_a = weeklyNotes[getDateUID(date, "week")]) !== null && _a !== void 0 ? _a : null;
}
function getAllWeeklyNotes() {
    var vault = window.app.vault;
    var folder = getWeeklyNoteSettings().folder;
    var weeklyNotesFolder = vault.getAbstractFileByPath(obsidian__default['default'].normalizePath(folder));
    if (!weeklyNotesFolder) {
        throw new WeeklyNotesFolderMissingError("Failed to find weekly notes folder");
    }
    var weeklyNotes = {};
    obsidian__default['default'].Vault.recurseChildren(weeklyNotesFolder, function (note) {
        if (note instanceof obsidian__default['default'].TFile) {
            var date = getDateFromFile(note, "week");
            if (date) {
                var dateString = getDateUID(date, "week");
                weeklyNotes[dateString] = note;
            }
        }
    });
    return weeklyNotes;
}

var MonthlyNotesFolderMissingError = /** @class */ (function (_super) {
    __extends(MonthlyNotesFolderMissingError, _super);
    function MonthlyNotesFolderMissingError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MonthlyNotesFolderMissingError;
}(Error));
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
function createMonthlyNote(date) {
    return __awaiter(this, void 0, void 0, function () {
        var vault, _a, template, format, folder, templateContents, filename, normalizedPath, createdFile, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    vault = window.app.vault;
                    _a = getMonthlyNoteSettings(), template = _a.template, format = _a.format, folder = _a.folder;
                    return [4 /*yield*/, getTemplateContents(template)];
                case 1:
                    templateContents = _b.sent();
                    filename = date.format(format);
                    return [4 /*yield*/, getNotePath(folder, filename)];
                case 2:
                    normalizedPath = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, vault.create(normalizedPath, templateContents
                            .replace(/{{\s*(date|time)\s*:(.*?)}}/gi, function (_, _timeOrDate, momentFormat) {
                            var now = window.moment();
                            return date
                                .set({
                                hour: now.get("hour"),
                                minute: now.get("minute"),
                                second: now.get("second"),
                            })
                                .format(momentFormat.trim());
                        })
                            .replace(/{{\s*date\s*}}/gi, filename)
                            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
                            .replace(/{{\s*title\s*}}/gi, filename))];
                case 4:
                    createdFile = _b.sent();
                    return [2 /*return*/, createdFile];
                case 5:
                    err_1 = _b.sent();
                    console.error("Failed to create file: '" + normalizedPath + "'", err_1);
                    new obsidian__default['default'].Notice("Unable to create new file.");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getMonthlyNote(date, monthlyNotes) {
    var _a;
    return (_a = monthlyNotes[getDateUID(date, "month")]) !== null && _a !== void 0 ? _a : null;
}
function getAllMonthlyNotes() {
    var vault = window.app.vault;
    var folder = getMonthlyNoteSettings().folder;
    var monthlyNotesFolder = vault.getAbstractFileByPath(obsidian__default['default'].normalizePath(folder));
    if (!monthlyNotesFolder) {
        throw new MonthlyNotesFolderMissingError("Failed to find monthly notes folder");
    }
    var monthlyNotes = {};
    obsidian__default['default'].Vault.recurseChildren(monthlyNotesFolder, function (note) {
        if (note instanceof obsidian__default['default'].TFile) {
            var date = getDateFromFile(note, "month");
            if (date) {
                var dateString = getDateUID(date, "month");
                monthlyNotes[dateString] = note;
            }
        }
    });
    return monthlyNotes;
}

function appHasDailyNotesPluginLoaded() {
    var _a, _b;
    var app = window.app;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var dailyNotesPlugin = app.internalPlugins.plugins["daily-notes"];
    if (dailyNotesPlugin && dailyNotesPlugin.enabled) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && ((_b = (_a = periodicNotes.settings) === null || _a === void 0 ? void 0 : _a.daily) === null || _b === void 0 ? void 0 : _b.enabled);
}
/**
 * XXX: "Weekly Notes" live in either the Calendar plugin or the periodic-notes plugin.
 * Check both until the weekly notes feature is removed from the Calendar plugin.
 */
function appHasWeeklyNotesPluginLoaded() {
    var _a, _b;
    var app = window.app;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (app.plugins.getPlugin("calendar")) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && ((_b = (_a = periodicNotes.settings) === null || _a === void 0 ? void 0 : _a.weekly) === null || _b === void 0 ? void 0 : _b.enabled);
}
function appHasMonthlyNotesPluginLoaded() {
    var _a, _b;
    var app = window.app;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && ((_b = (_a = periodicNotes.settings) === null || _a === void 0 ? void 0 : _a.monthly) === null || _b === void 0 ? void 0 : _b.enabled);
}

exports.DEFAULT_DAILY_NOTE_FORMAT = DEFAULT_DAILY_NOTE_FORMAT;
exports.DEFAULT_MONTHLY_NOTE_FORMAT = DEFAULT_MONTHLY_NOTE_FORMAT;
exports.DEFAULT_WEEKLY_NOTE_FORMAT = DEFAULT_WEEKLY_NOTE_FORMAT;
exports.appHasDailyNotesPluginLoaded = appHasDailyNotesPluginLoaded;
exports.appHasMonthlyNotesPluginLoaded = appHasMonthlyNotesPluginLoaded;
exports.appHasWeeklyNotesPluginLoaded = appHasWeeklyNotesPluginLoaded;
exports.createDailyNote = createDailyNote;
exports.createMonthlyNote = createMonthlyNote;
exports.createWeeklyNote = createWeeklyNote;
exports.getAllDailyNotes = getAllDailyNotes;
exports.getAllMonthlyNotes = getAllMonthlyNotes;
exports.getAllWeeklyNotes = getAllWeeklyNotes;
exports.getDailyNote = getDailyNote;
exports.getDailyNoteSettings = getDailyNoteSettings;
exports.getDateFromFile = getDateFromFile;
exports.getDateUID = getDateUID;
exports.getMonthlyNote = getMonthlyNote;
exports.getMonthlyNoteSettings = getMonthlyNoteSettings;
exports.getTemplateContents = getTemplateContents;
exports.getWeeklyNote = getWeeklyNote;
exports.getWeeklyNoteSettings = getWeeklyNoteSettings;
});

var pattern = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchAnyPattern = exports.extractTerms = exports.repeatedTimeunitPattern = void 0;
function repeatedTimeunitPattern(prefix, singleTimeunitPattern) {
    const singleTimeunitPatternNoCapture = singleTimeunitPattern.replace(/\((?!\?)/g, "(?:");
    return `${prefix}${singleTimeunitPatternNoCapture}\\s*(?:,?\\s{0,5}${singleTimeunitPatternNoCapture}){0,10}`;
}
exports.repeatedTimeunitPattern = repeatedTimeunitPattern;
function extractTerms(dictionary) {
    let keys;
    if (dictionary instanceof Array) {
        keys = [...dictionary];
    }
    else if (dictionary instanceof Map) {
        keys = Array.from(dictionary.keys());
    }
    else {
        keys = Object.keys(dictionary);
    }
    return keys;
}
exports.extractTerms = extractTerms;
function matchAnyPattern(dictionary) {
    const joinedTerms = extractTerms(dictionary)
        .sort((a, b) => b.length - a.length)
        .join("|")
        .replace(/\./g, "\\.");
    return `(?:${joinedTerms})`;
}
exports.matchAnyPattern = matchAnyPattern;
});

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return +(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else {var i=t.name;M[i]=t,r=i;}return !n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t);}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},$.$utils=function(){return g},$.isValid=function(){return !("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])};}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});
});

var years = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findYearClosestToRef = exports.findMostLikelyADYear = void 0;
const dayjs_1 = __importDefault(dayjs_min);
function findMostLikelyADYear(yearNumber) {
    if (yearNumber < 100) {
        if (yearNumber > 50) {
            yearNumber = yearNumber + 1900;
        }
        else {
            yearNumber = yearNumber + 2000;
        }
    }
    return yearNumber;
}
exports.findMostLikelyADYear = findMostLikelyADYear;
function findYearClosestToRef(refDate, day, month) {
    const refMoment = dayjs_1.default(refDate);
    let dateMoment = refMoment;
    dateMoment = dateMoment.month(month - 1);
    dateMoment = dateMoment.date(day);
    dateMoment = dateMoment.year(refMoment.year());
    const nextYear = dateMoment.add(1, "y");
    const lastYear = dateMoment.add(-1, "y");
    if (Math.abs(nextYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
        dateMoment = nextYear;
    }
    else if (Math.abs(lastYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
        dateMoment = lastYear;
    }
    return dateMoment.year();
}
exports.findYearClosestToRef = findYearClosestToRef;
});

var constants$5 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTimeUnits = exports.TIME_UNITS_PATTERN = exports.parseYear = exports.YEAR_PATTERN = exports.parseOrdinalNumberPattern = exports.ORDINAL_NUMBER_PATTERN = exports.parseNumberPattern = exports.NUMBER_PATTERN = exports.TIME_UNIT_DICTIONARY = exports.ORDINAL_WORD_DICTIONARY = exports.INTEGER_WORD_DICTIONARY = exports.MONTH_DICTIONARY = exports.FULL_MONTH_NAME_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;


exports.WEEKDAY_DICTIONARY = {
    sunday: 0,
    sun: 0,
    "sun.": 0,
    monday: 1,
    mon: 1,
    "mon.": 1,
    tuesday: 2,
    tue: 2,
    "tue.": 2,
    wednesday: 3,
    wed: 3,
    "wed.": 3,
    thursday: 4,
    thurs: 4,
    "thurs.": 4,
    thur: 4,
    "thur.": 4,
    thu: 4,
    "thu.": 4,
    friday: 5,
    fri: 5,
    "fri.": 5,
    saturday: 6,
    sat: 6,
    "sat.": 6,
};
exports.FULL_MONTH_NAME_DICTIONARY = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
};
exports.MONTH_DICTIONARY = Object.assign(Object.assign({}, exports.FULL_MONTH_NAME_DICTIONARY), { jan: 1, "jan.": 1, feb: 2, "feb.": 2, mar: 3, "mar.": 3, apr: 4, "apr.": 4, jun: 6, "jun.": 6, jul: 7, "jul.": 7, aug: 8, "aug.": 8, sep: 9, "sep.": 9, sept: 9, "sept.": 9, oct: 10, "oct.": 10, nov: 11, "nov.": 11, dec: 12, "dec.": 12 });
exports.INTEGER_WORD_DICTIONARY = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
};
exports.ORDINAL_WORD_DICTIONARY = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19,
    twentieth: 20,
    "twenty first": 21,
    "twenty-first": 21,
    "twenty second": 22,
    "twenty-second": 22,
    "twenty third": 23,
    "twenty-third": 23,
    "twenty fourth": 24,
    "twenty-fourth": 24,
    "twenty fifth": 25,
    "twenty-fifth": 25,
    "twenty sixth": 26,
    "twenty-sixth": 26,
    "twenty seventh": 27,
    "twenty-seventh": 27,
    "twenty eighth": 28,
    "twenty-eighth": 28,
    "twenty ninth": 29,
    "twenty-ninth": 29,
    "thirtieth": 30,
    "thirty first": 31,
    "thirty-first": 31,
};
exports.TIME_UNIT_DICTIONARY = {
    sec: "second",
    second: "second",
    seconds: "second",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minutes: "minute",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    hour: "hour",
    hours: "hour",
    day: "d",
    days: "d",
    week: "week",
    weeks: "week",
    month: "month",
    months: "month",
    y: "year",
    yr: "year",
    year: "year",
    years: "year",
};
exports.NUMBER_PATTERN = `(?:${pattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s*an?)?|an?(?:\\s*few)?|few|several|a?\\s*couple\\s*(?:of)?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (exports.INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return exports.INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "a" || num === "an") {
        return 1;
    }
    else if (num.match(/few/)) {
        return 3;
    }
    else if (num.match(/half/)) {
        return 0.5;
    }
    else if (num.match(/couple/)) {
        return 2;
    }
    else if (num.match(/several/)) {
        return 7;
    }
    return parseFloat(num);
}
exports.parseNumberPattern = parseNumberPattern;
exports.ORDINAL_NUMBER_PATTERN = `(?:${pattern.matchAnyPattern(exports.ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    if (exports.ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return exports.ORDINAL_WORD_DICTIONARY[num];
    }
    num = num.replace(/(?:st|nd|rd|th)$/i, "");
    return parseInt(num);
}
exports.parseOrdinalNumberPattern = parseOrdinalNumberPattern;
exports.YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:BE|AD|BC)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
    if (/BE/i.test(match)) {
        match = match.replace(/BE/i, "");
        return parseInt(match) - 543;
    }
    if (/BC/i.test(match)) {
        match = match.replace(/BC/i, "");
        return -parseInt(match);
    }
    if (/AD/i.test(match)) {
        match = match.replace(/AD/i, "");
        return parseInt(match);
    }
    const rawYearNumber = parseInt(match);
    return years.findMostLikelyADYear(rawYearNumber);
}
exports.parseYear = parseYear;
const SINGLE_TIME_UNIT_PATTERN = `(${exports.NUMBER_PATTERN})\\s{0,5}(${pattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
exports.TIME_UNITS_PATTERN = pattern.repeatedTimeunitPattern(`(?:(?:about|around)\\s*)?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
exports.parseTimeUnits = parseTimeUnits;
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = exports.TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
});

var quarterOfYear = createCommonjsModule(function (module, exports) {
!function(t,n){module.exports=n();}(commonjsGlobal,function(){var t="month",n="quarter";return function(r,i){var e=i.prototype;e.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var u=e.add;e.add=function(r,i){return r=Number(r),this.$utils().p(i)===n?this.add(3*r,t):u.bind(this)(r,i)};var s=e.startOf;e.startOf=function(r,i){var e=this.$utils(),u=!!e.u(i)||i;if(e.p(r)===n){var a=this.quarter()-1;return u?this.month(3*a).startOf(t).startOf("day"):this.month(3*a+2).endOf(t).endOf("day")}return s.bind(this)(r,i)};}});
});

var dayjs = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.implySimilarTime = exports.assignSimilarTime = exports.assignSimilarDate = exports.assignTheNextDay = void 0;
function assignTheNextDay(component, targetDayJs) {
    targetDayJs = targetDayJs.add(1, "day");
    assignSimilarDate(component, targetDayJs);
    implySimilarTime(component, targetDayJs);
}
exports.assignTheNextDay = assignTheNextDay;
function assignSimilarDate(component, targetDayJs) {
    component.assign("day", targetDayJs.date());
    component.assign("month", targetDayJs.month() + 1);
    component.assign("year", targetDayJs.year());
}
exports.assignSimilarDate = assignSimilarDate;
function assignSimilarTime(component, targetDayJs) {
    component.assign("hour", targetDayJs.hour());
    component.assign("minute", targetDayJs.minute());
    component.assign("second", targetDayJs.second());
    component.assign("millisecond", targetDayJs.millisecond());
    component.assign("timezoneOffset", targetDayJs.utcOffset());
}
exports.assignSimilarTime = assignSimilarTime;
function implySimilarTime(component, targetDayJs) {
    component.imply("hour", targetDayJs.hour());
    component.imply("minute", targetDayJs.minute());
    component.imply("second", targetDayJs.second());
    component.imply("millisecond", targetDayJs.millisecond());
    component.imply("timezoneOffset", targetDayJs.utcOffset());
}
exports.implySimilarTime = implySimilarTime;
});

var results = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingResult = exports.ParsingComponents = void 0;
const quarterOfYear_1 = __importDefault(quarterOfYear);
const dayjs_1 = __importDefault(dayjs_min);

dayjs_1.default.extend(quarterOfYear_1.default);
class ParsingComponents {
    constructor(refDate, knownComponents) {
        this.knownValues = {};
        this.impliedValues = {};
        if (knownComponents) {
            for (const key in knownComponents) {
                this.knownValues[key] = knownComponents[key];
            }
        }
        const refDayJs = dayjs_1.default(refDate);
        this.imply("day", refDayJs.date());
        this.imply("month", refDayJs.month() + 1);
        this.imply("year", refDayJs.year());
        this.imply("hour", 12);
        this.imply("minute", 0);
        this.imply("second", 0);
        this.imply("millisecond", 0);
    }
    get(component) {
        if (component in this.knownValues) {
            return this.knownValues[component];
        }
        if (component in this.impliedValues) {
            return this.impliedValues[component];
        }
        return null;
    }
    date() {
        return this.dayjs().toDate();
    }
    isCertain(component) {
        return component in this.knownValues;
    }
    getCertainComponents() {
        return Object.keys(this.knownValues);
    }
    imply(component, value) {
        if (component in this.knownValues) {
            return this;
        }
        this.impliedValues[component] = value;
        return this;
    }
    assign(component, value) {
        this.knownValues[component] = value;
        delete this.impliedValues[component];
        return this;
    }
    delete(component) {
        delete this.knownValues[component];
        delete this.impliedValues[component];
    }
    clone() {
        const component = new ParsingComponents(new Date());
        component.knownValues = {};
        component.impliedValues = {};
        for (const key in this.knownValues) {
            component.knownValues[key] = this.knownValues[key];
        }
        for (const key in this.impliedValues) {
            component.impliedValues[key] = this.impliedValues[key];
        }
        return component;
    }
    isOnlyDate() {
        return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
    }
    isOnlyTime() {
        return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
    }
    isOnlyWeekdayComponent() {
        return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
    }
    isOnlyDayMonthComponent() {
        return this.isCertain("day") && this.isCertain("month") && !this.isCertain("year");
    }
    isValidDate() {
        let dateMoment = this.dayjs();
        if (this.isCertain("timezoneOffset")) {
            const adjustTimezoneOffset = this.get("timezoneOffset") - dateMoment.utcOffset();
            dateMoment = dateMoment.add(adjustTimezoneOffset, "minute");
        }
        if (dateMoment.get("year") != this.get("year"))
            return false;
        if (dateMoment.get("month") != this.get("month") - 1)
            return false;
        if (dateMoment.get("date") != this.get("day"))
            return false;
        if (this.get("hour") != null && dateMoment.get("hour") != this.get("hour"))
            return false;
        if (this.get("minute") != null && dateMoment.get("minute") != this.get("minute"))
            return false;
        return true;
    }
    dayjs() {
        let result = dayjs_1.default();
        result = result.year(this.get("year"));
        result = result.month(this.get("month") - 1);
        result = result.date(this.get("day"));
        result = result.hour(this.get("hour"));
        result = result.minute(this.get("minute"));
        result = result.second(this.get("second"));
        result = result.millisecond(this.get("millisecond"));
        const currentTimezoneOffset = result.utcOffset();
        const targetTimezoneOffset = this.get("timezoneOffset") !== null ? this.get("timezoneOffset") : currentTimezoneOffset;
        const adjustTimezoneOffset = targetTimezoneOffset - currentTimezoneOffset;
        result = result.add(-adjustTimezoneOffset, "minute");
        return result;
    }
    toString() {
        return `[ParsingComponents {knownValues: ${JSON.stringify(this.knownValues)}, impliedValues: ${JSON.stringify(this.impliedValues)}}]`;
    }
    static createRelativeFromRefDate(refDate, fragments) {
        let date = dayjs_1.default(refDate);
        for (const key in fragments) {
            date = date.add(fragments[key], key);
        }
        const components = new ParsingComponents(refDate);
        if (fragments["hour"] || fragments["minute"] || fragments["second"]) {
            dayjs.assignSimilarTime(components, date);
            dayjs.assignSimilarDate(components, date);
        }
        else {
            dayjs.implySimilarTime(components, date);
            if (fragments["d"]) {
                components.assign("day", date.date());
                components.assign("month", date.month() + 1);
                components.assign("year", date.year());
            }
            else {
                if (fragments["week"]) {
                    components.imply("weekday", date.day());
                }
                components.imply("day", date.date());
                if (fragments["month"]) {
                    components.assign("month", date.month() + 1);
                    components.assign("year", date.year());
                }
                else {
                    components.imply("month", date.month() + 1);
                    if (fragments["year"]) {
                        components.assign("year", date.year());
                    }
                    else {
                        components.imply("year", date.year());
                    }
                }
            }
        }
        return components;
    }
}
exports.ParsingComponents = ParsingComponents;
class ParsingResult {
    constructor(refDate, index, text, start, end) {
        this.refDate = refDate;
        this.index = index;
        this.text = text;
        this.start = start || new ParsingComponents(this.refDate);
        this.end = end;
    }
    clone() {
        const result = new ParsingResult(this.refDate, this.index, this.text);
        result.start = this.start ? this.start.clone() : null;
        result.end = this.end ? this.end.clone() : null;
        return result;
    }
    date() {
        return this.start.date();
    }
    toString() {
        return `[ParsingResult {index: ${this.index}, text: '${this.text}', ...}]`;
    }
}
exports.ParsingResult = ParsingResult;
});

var AbstractParserWithWordBoundary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractParserWithWordBoundaryChecking = void 0;
class AbstractParserWithWordBoundaryChecking {
    constructor() {
        this.cachedInnerPattern = null;
        this.cachedPattern = null;
    }
    pattern(context) {
        const innerPattern = this.innerPattern(context);
        if (innerPattern == this.cachedInnerPattern) {
            return this.cachedPattern;
        }
        this.cachedPattern = new RegExp(`(\\W|^)${innerPattern.source}`, innerPattern.flags);
        this.cachedInnerPattern = innerPattern;
        return this.cachedPattern;
    }
    extract(context, match) {
        const header = match[1];
        match.index = match.index + header.length;
        match[0] = match[0].substring(header.length);
        for (let i = 2; i < match.length; i++) {
            match[i - 1] = match[i];
        }
        return this.innerExtract(context, match);
    }
}
exports.AbstractParserWithWordBoundaryChecking = AbstractParserWithWordBoundaryChecking;
});

var ENTimeUnitWithinFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



const PATTERN_WITH_PREFIX = new RegExp(`(?:within|in|for)\\s*` +
    `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${constants$5.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_WITHOUT_PREFIX = new RegExp(`(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${constants$5.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitWithinFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return context.option.forwardDate ? PATTERN_WITHOUT_PREFIX : PATTERN_WITH_PREFIX;
    }
    innerExtract(context, match) {
        const timeUnits = constants$5.parseTimeUnits(match[1]);
        return results.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports.default = ENTimeUnitWithinFormatParser;
});

var ENMonthNameLittleEndianParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


const constants_2 = constants$5;
const constants_3 = constants$5;


const PATTERN = new RegExp("(?:on\\s*?)?" +
    `(${constants_3.ORDINAL_NUMBER_PATTERN})` +
    "(?:\\s*" +
    "(?:to|\\-|\\–|until|through|till|\\s)\\s*" +
    `(${constants_3.ORDINAL_NUMBER_PATTERN})` +
    ")?" +
    "(?:-|/|\\s*(?:of)?\\s*)" +
    "(" +
    pattern.matchAnyPattern(constants$5.MONTH_DICTIONARY) +
    ")" +
    "(?:" +
    "(?:-|/|,?\\s*)" +
    `(${constants_2.YEAR_PATTERN}(?![^\\s]\\d))` +
    ")?" +
    "(?=\\W|$)", "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class ENMonthNameLittleEndianParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = constants$5.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = constants_3.parseOrdinalNumberPattern(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = constants_3.parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
exports.default = ENMonthNameLittleEndianParser;
});

var ENMonthNameMiddleEndianParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


const constants_2 = constants$5;
const constants_3 = constants$5;


const PATTERN = new RegExp(`(${pattern.matchAnyPattern(constants$5.MONTH_DICTIONARY)})` +
    "(?:-|/|\\s*,?\\s*)" +
    `(${constants_2.ORDINAL_NUMBER_PATTERN})(?!\\s*(?:am|pm))\\s*` +
    "(?:" +
    "(?:to|\\-)\\s*" +
    `(${constants_2.ORDINAL_NUMBER_PATTERN})\\s*` +
    ")?" +
    "(?:" +
    "(?:-|/|\\s*,?\\s*)" +
    `(${constants_3.YEAR_PATTERN})` +
    ")?" +
    "(?=\\W|$)(?!\\:\\d)", "i");
const MONTH_NAME_GROUP = 1;
const DATE_GROUP = 2;
const DATE_TO_GROUP = 3;
const YEAR_GROUP = 4;
class ENMonthNameMiddleEndianParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = constants$5.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = constants_2.parseOrdinalNumberPattern(match[DATE_GROUP]);
        if (day > 31) {
            return null;
        }
        const components = context.createParsingComponents({
            day: day,
            month: month,
        });
        if (match[YEAR_GROUP]) {
            const year = constants_3.parseYear(match[YEAR_GROUP]);
            components.assign("year", year);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, day, month);
            components.imply("year", year);
        }
        if (!match[DATE_TO_GROUP]) {
            return components;
        }
        const endDate = constants_2.parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
        const result = context.createParsingResult(match.index, match[0]);
        result.start = components;
        result.end = components.clone();
        result.end.assign("day", endDate);
        return result;
    }
}
exports.default = ENMonthNameMiddleEndianParser;
});

var ENMonthNameParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



const constants_2 = constants$5;

const PATTERN = new RegExp(`((?:in)\\s*)?` +
    `(${pattern.matchAnyPattern(constants$5.MONTH_DICTIONARY)})` +
    `\\s*` +
    `(?:` +
    `[,-]?\\s*(${constants_2.YEAR_PATTERN})?` +
    ")?" +
    "(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
const PREFIX_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const YEAR_GROUP = 3;
class ENMonthNameParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const monthName = match[MONTH_NAME_GROUP].toLowerCase();
        if (match[0].length <= 3 && !constants$5.FULL_MONTH_NAME_DICTIONARY[monthName]) {
            return null;
        }
        const result = context.createParsingResult(match.index + (match[PREFIX_GROUP] || "").length, match.index + match[0].length);
        result.start.imply("day", 1);
        const month = constants$5.MONTH_DICTIONARY[monthName];
        result.start.assign("month", month);
        if (match[YEAR_GROUP]) {
            const year = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", year);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, 1, month);
            result.start.imply("year", year);
        }
        return result;
    }
}
exports.default = ENMonthNameParser;
});

var ENCasualYearMonthDayParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



const PATTERN = new RegExp(`([0-9]{4})[\\.\\/\\s]` +
    `(?:(${pattern.matchAnyPattern(constants$5.MONTH_DICTIONARY)})|([0-9]{1,2}))[\\.\\/\\s]` +
    `([0-9]{1,2})` +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const MONTH_NUMBER_GROUP = 3;
const DATE_NUMBER_GROUP = 4;
class ENCasualYearMonthDayParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = match[MONTH_NUMBER_GROUP]
            ? parseInt(match[MONTH_NUMBER_GROUP])
            : constants$5.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        if (month < 1 || month > 12) {
            return null;
        }
        const year = parseInt(match[YEAR_NUMBER_GROUP]);
        const day = parseInt(match[DATE_NUMBER_GROUP]);
        return {
            day: day,
            month: month,
            year: year,
        };
    }
}
exports.default = ENCasualYearMonthDayParser;
});

var ENSlashMonthFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

const PATTERN = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})" + "", "i");
const MONTH_GROUP = 1;
const YEAR_GROUP = 2;
class ENSlashMonthFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const year = parseInt(match[YEAR_GROUP]);
        const month = parseInt(match[MONTH_GROUP]);
        return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
    }
}
exports.default = ENSlashMonthFormatParser;
});

var AbstractTimeExpressionParser_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTimeExpressionParser = void 0;

const dayjs_1 = __importDefault(dayjs_min);
function primaryTimePattern(primaryPrefix, primarySuffix) {
    return new RegExp("(^|\\s|T)" +
        `${primaryPrefix}` +
        "(\\d{1,4})" +
        "(?:" +
        "(?:\\.|\\:|\\：)" +
        "(\\d{1,2})" +
        "(?:" +
        "(?:\\:|\\：)" +
        "(\\d{2})" +
        "(?:\\.(\\d{1,6}))?" +
        ")?" +
        ")?" +
        "(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?" +
        `${primarySuffix}`, "i");
}
function followingTimePatten(followingPhase, followingSuffix) {
    return new RegExp(`^(${followingPhase})` +
        "(\\d{1,4})" +
        "(?:" +
        "(?:\\.|\\:|\\：)" +
        "(\\d{1,2})" +
        "(?:" +
        "(?:\\.|\\:|\\：)" +
        "(\\d{1,2})(?:\\.(\\d{1,6}))?" +
        ")?" +
        ")?" +
        "(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?" +
        `${followingSuffix}`, "i");
}
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const MILLI_SECOND_GROUP = 5;
const AM_PM_HOUR_GROUP = 6;
class AbstractTimeExpressionParser {
    constructor(strictMode = false) {
        this.cachedPrimaryPrefix = null;
        this.cachedPrimarySuffix = null;
        this.cachedPrimaryTimePattern = null;
        this.cachedFollowingPhase = null;
        this.cachedFollowingSuffix = null;
        this.cachedFollowingTimePatten = null;
        this.strictMode = strictMode;
    }
    primarySuffix() {
        return "(?=\\W|$)";
    }
    followingSuffix() {
        return "(?=\\W|$)";
    }
    pattern(context) {
        return this.getPrimaryTimePatternThroughCache();
    }
    extract(context, match) {
        const refDate = dayjs_1.default(context.refDate);
        const result = context.createParsingResult(match.index + match[1].length, match[0].substring(match[1].length));
        result.start.imply("day", refDate.date());
        result.start.imply("month", refDate.month() + 1);
        result.start.imply("year", refDate.year());
        result.start = this.extractPrimaryTimeComponents(context, match);
        if (!result.start) {
            match.index += match[0].length;
            return null;
        }
        const remainingText = context.text.substring(match.index + match[0].length);
        const followingPattern = this.getFollowingTimePatternThroughCache();
        match = followingPattern.exec(remainingText);
        if (!match ||
            match[0].match(/^\s*([+-])\s*\d{3,4}$/)) {
            return this.checkAndReturnWithoutFollowingPattern(result);
        }
        result.end = this.extractFollowingTimeComponents(context, match, result);
        if (result.end) {
            if (result.end) {
                result.text += match[0];
            }
        }
        return result;
    }
    extractPrimaryTimeComponents(context, match, strict = false) {
        const components = context.createParsingComponents();
        let hour = 0;
        let minute = 0;
        let meridiem = null;
        hour = parseInt(match[HOUR_GROUP]);
        if (match[MINUTE_GROUP] != null) {
            if (match[MINUTE_GROUP].length == 1 && !match[AM_PM_HOUR_GROUP]) {
                return null;
            }
            minute = parseInt(match[MINUTE_GROUP]);
        }
        else if (hour > 100) {
            if (this.strictMode) {
                return null;
            }
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (minute >= 60 || hour > 24) {
            return null;
        }
        if (hour > 12) {
            meridiem = dist.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = dist.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                }
            }
            if (ampm == "p") {
                meridiem = dist.Meridiem.PM;
                if (hour != 12) {
                    hour += 12;
                }
            }
        }
        components.assign("hour", hour);
        components.assign("minute", minute);
        if (meridiem !== null) {
            components.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                components.imply("meridiem", dist.Meridiem.AM);
            }
            else {
                components.imply("meridiem", dist.Meridiem.PM);
            }
        }
        if (match[MILLI_SECOND_GROUP] != null) {
            const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
            if (millisecond >= 1000)
                return null;
            components.assign("millisecond", millisecond);
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            components.assign("second", second);
        }
        return components;
    }
    extractFollowingTimeComponents(context, match, result) {
        const components = context.createParsingComponents();
        if (match[MILLI_SECOND_GROUP] != null) {
            const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
            if (millisecond >= 1000)
                return null;
            components.assign("millisecond", millisecond);
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            components.assign("second", second);
        }
        let hour = parseInt(match[HOUR_GROUP]);
        let minute = 0;
        let meridiem = -1;
        if (match[MINUTE_GROUP] != null) {
            minute = parseInt(match[MINUTE_GROUP]);
        }
        else if (hour > 100) {
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (minute >= 60 || hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = dist.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12) {
                return null;
            }
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = dist.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                    if (!components.isCertain("day")) {
                        components.imply("day", components.get("day") + 1);
                    }
                }
            }
            if (ampm == "p") {
                meridiem = dist.Meridiem.PM;
                if (hour != 12)
                    hour += 12;
            }
            if (!result.start.isCertain("meridiem")) {
                if (meridiem == dist.Meridiem.AM) {
                    result.start.imply("meridiem", dist.Meridiem.AM);
                    if (result.start.get("hour") == 12) {
                        result.start.assign("hour", 0);
                    }
                }
                else {
                    result.start.imply("meridiem", dist.Meridiem.PM);
                    if (result.start.get("hour") != 12) {
                        result.start.assign("hour", result.start.get("hour") + 12);
                    }
                }
            }
        }
        components.assign("hour", hour);
        components.assign("minute", minute);
        if (meridiem >= 0) {
            components.assign("meridiem", meridiem);
        }
        else {
            const startAtPM = result.start.isCertain("meridiem") && result.start.get("hour") > 12;
            if (startAtPM) {
                if (result.start.get("hour") - 12 > hour) {
                    components.imply("meridiem", dist.Meridiem.AM);
                }
                else if (hour <= 12) {
                    components.assign("hour", hour + 12);
                    components.assign("meridiem", dist.Meridiem.PM);
                }
            }
            else if (hour > 12) {
                components.imply("meridiem", dist.Meridiem.PM);
            }
            else if (hour <= 12) {
                components.imply("meridiem", dist.Meridiem.AM);
            }
        }
        if (components.date().getTime() < result.start.date().getTime()) {
            components.imply("day", components.get("day") + 1);
        }
        return components;
    }
    checkAndReturnWithoutFollowingPattern(result) {
        if (result.text.match(/^\d$/)) {
            return null;
        }
        const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)$/);
        if (endingWithNumbers) {
            const endingNumbers = endingWithNumbers[1];
            if (this.strictMode) {
                return null;
            }
            if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
                return null;
            }
            const endingNumberVal = parseInt(endingNumbers);
            if (endingNumberVal > 24) {
                return null;
            }
        }
        return result;
    }
    getPrimaryTimePatternThroughCache() {
        const primaryPrefix = this.primaryPrefix();
        const primarySuffix = this.primarySuffix();
        if (this.cachedPrimaryPrefix === primaryPrefix && this.cachedPrimarySuffix === primarySuffix) {
            return this.cachedPrimaryTimePattern;
        }
        this.cachedPrimaryTimePattern = primaryTimePattern(primaryPrefix, primarySuffix);
        this.cachedPrimaryPrefix = primaryPrefix;
        this.cachedPrimarySuffix = primarySuffix;
        return this.cachedPrimaryTimePattern;
    }
    getFollowingTimePatternThroughCache() {
        const followingPhase = this.followingPhase();
        const followingSuffix = this.followingSuffix();
        if (this.cachedFollowingPhase === followingPhase && this.cachedFollowingSuffix === followingSuffix) {
            return this.cachedFollowingTimePatten;
        }
        this.cachedFollowingTimePatten = followingTimePatten(followingPhase, followingSuffix);
        this.cachedFollowingPhase = followingPhase;
        this.cachedFollowingSuffix = followingSuffix;
        return this.cachedFollowingTimePatten;
    }
}
exports.AbstractTimeExpressionParser = AbstractTimeExpressionParser;
});

var ENTimeExpressionParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


class ENTimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    constructor(strictMode) {
        super(strictMode);
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|to|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:at|from)\\s*)??";
    }
    primarySuffix() {
        return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?=\\W|$)";
    }
    extractPrimaryTimeComponents(context, match) {
        const components = super.extractPrimaryTimeComponents(context, match);
        if (components) {
            if (match[0].endsWith("night")) {
                const hour = components.get("hour");
                if (hour >= 6 && hour < 12) {
                    components.assign("hour", components.get("hour") + 12);
                    components.assign("meridiem", dist.Meridiem.PM);
                }
                else if (hour < 6) {
                    components.assign("meridiem", dist.Meridiem.AM);
                }
            }
            if (match[0].endsWith("afternoon")) {
                components.assign("meridiem", dist.Meridiem.PM);
                const hour = components.get("hour");
                if (hour >= 0 && hour <= 6) {
                    components.assign("hour", components.get("hour") + 12);
                }
            }
            if (match[0].endsWith("morning")) {
                components.assign("meridiem", dist.Meridiem.AM);
                const hour = components.get("hour");
                if (hour < 12) {
                    components.assign("hour", components.get("hour"));
                }
            }
        }
        return components;
    }
}
exports.default = ENTimeExpressionParser;
});

var timeunits = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImpliedTimeUnits = exports.reverseTimeUnits = void 0;
function reverseTimeUnits(timeUnits) {
    const reversed = {};
    for (const key in timeUnits) {
        reversed[key] = -timeUnits[key];
    }
    return reversed;
}
exports.reverseTimeUnits = reverseTimeUnits;
function addImpliedTimeUnits(components, timeUnits) {
    const output = components.clone();
    let date = components.dayjs();
    for (const key in timeUnits) {
        date = date.add(timeUnits[key], key);
    }
    if ("day" in timeUnits || "d" in timeUnits || "week" in timeUnits || "month" in timeUnits || "year" in timeUnits) {
        output.imply("day", date.date());
        output.imply("month", date.month() + 1);
        output.imply("year", date.year());
    }
    if ("second" in timeUnits || "minute" in timeUnits || "hour" in timeUnits) {
        output.imply("second", date.second());
        output.imply("minute", date.minute());
        output.imply("hour", date.hour());
    }
    return output;
}
exports.addImpliedTimeUnits = addImpliedTimeUnits;
});

var ENTimeUnitAgoFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




const PATTERN = new RegExp("" + "(" + constants$5.TIME_UNITS_PATTERN + ")" + "(?:ago|before|earlier)(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp("" + "(" + constants$5.TIME_UNITS_PATTERN + ")" + "ago(?=(?:\\W|$))", "i");
class ENTimeUnitAgoFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN : PATTERN;
    }
    innerExtract(context, match) {
        const timeUnits = constants$5.parseTimeUnits(match[1]);
        const outputTimeUnits = timeunits.reverseTimeUnits(timeUnits);
        return results.ParsingComponents.createRelativeFromRefDate(context.refDate, outputTimeUnits);
    }
}
exports.default = ENTimeUnitAgoFormatParser;
});

var ENTimeUnitLaterFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



const PATTERN = new RegExp("" + "(" + constants$5.TIME_UNITS_PATTERN + ")" + "(later|after|from now|henceforth|forward|out)" + "(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp("" + "(" + constants$5.TIME_UNITS_PATTERN + ")" + "(later|from now)" + "(?=(?:\\W|$))", "i");
const GROUP_NUM_TIMEUNITS = 1;
class ENTimeUnitLaterFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN : PATTERN;
    }
    innerExtract(context, match) {
        const fragments = constants$5.parseTimeUnits(match[GROUP_NUM_TIMEUNITS]);
        return results.ParsingComponents.createRelativeFromRefDate(context.refDate, fragments);
    }
}
exports.default = ENTimeUnitLaterFormatParser;
});

var abstractRefiners = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergingRefiner = exports.Filter = void 0;
class Filter {
    refine(context, results) {
        return results.filter((r) => this.isValid(context, r));
    }
}
exports.Filter = Filter;
class MergingRefiner {
    refine(context, results) {
        if (results.length < 2) {
            return results;
        }
        const mergedResults = [];
        let curResult = results[0];
        let nextResult = null;
        for (let i = 1; i < results.length; i++) {
            nextResult = results[i];
            const textBetween = context.text.substring(curResult.index + curResult.text.length, nextResult.index);
            if (!this.shouldMergeResults(textBetween, curResult, nextResult, context)) {
                mergedResults.push(curResult);
                curResult = nextResult;
            }
            else {
                const left = curResult;
                const right = nextResult;
                const mergedResult = this.mergeResults(textBetween, left, right, context);
                context.debug(() => {
                    console.log(`${this.constructor.name} merged ${left} and ${right} into ${mergedResult}`);
                });
                curResult = mergedResult;
            }
        }
        if (curResult != null) {
            mergedResults.push(curResult);
        }
        return mergedResults;
    }
}
exports.MergingRefiner = MergingRefiner;
});

var AbstractMergeDateRangeRefiner_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class AbstractMergeDateRangeRefiner extends abstractRefiners.MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        return !currentResult.end && !nextResult.end && textBetween.match(this.patternBetween()) != null;
    }
    mergeResults(textBetween, fromResult, toResult) {
        if (!fromResult.start.isOnlyWeekdayComponent() && !toResult.start.isOnlyWeekdayComponent()) {
            toResult.start.getCertainComponents().forEach((key) => {
                if (!fromResult.start.isCertain(key)) {
                    fromResult.start.assign(key, toResult.start.get(key));
                }
            });
            fromResult.start.getCertainComponents().forEach((key) => {
                if (!toResult.start.isCertain(key)) {
                    toResult.start.assign(key, fromResult.start.get(key));
                }
            });
        }
        if (fromResult.start.date().getTime() > toResult.start.date().getTime()) {
            let fromMoment = fromResult.start.dayjs();
            let toMoment = toResult.start.dayjs();
            if (fromResult.start.isOnlyWeekdayComponent() && fromMoment.add(-7, "days").isBefore(toMoment)) {
                fromMoment = fromMoment.add(-7, "days");
                fromResult.start.imply("day", fromMoment.date());
                fromResult.start.imply("month", fromMoment.month() + 1);
                fromResult.start.imply("year", fromMoment.year());
            }
            else if (toResult.start.isOnlyWeekdayComponent() && toMoment.add(7, "days").isAfter(fromMoment)) {
                toMoment = toMoment.add(7, "days");
                toResult.start.imply("day", toMoment.date());
                toResult.start.imply("month", toMoment.month() + 1);
                toResult.start.imply("year", toMoment.year());
            }
            else {
                [toResult, fromResult] = [fromResult, toResult];
            }
        }
        const result = fromResult.clone();
        result.start = fromResult.start;
        result.end = toResult.start;
        result.index = Math.min(fromResult.index, toResult.index);
        if (fromResult.index < toResult.index) {
            result.text = fromResult.text + textBetween + toResult.text;
        }
        else {
            result.text = toResult.text + textBetween + fromResult.text;
        }
        return result;
    }
}
exports.default = AbstractMergeDateRangeRefiner;
});

var ENMergeDateRangeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateRangeRefiner_1$1 = __importDefault(AbstractMergeDateRangeRefiner_1);
class ENMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1$1.default {
    patternBetween() {
        return /^\s*(to|-)\s*$/i;
    }
}
exports.default = ENMergeDateRangeRefiner;
});

var mergingCalculation = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeDateTimeComponent = exports.mergeDateTimeResult = void 0;

function mergeDateTimeResult(dateResult, timeResult) {
    const result = dateResult.clone();
    const beginDate = dateResult.start;
    const beginTime = timeResult.start;
    result.start = mergeDateTimeComponent(beginDate, beginTime);
    if (dateResult.end != null || timeResult.end != null) {
        const endDate = dateResult.end == null ? dateResult.start : dateResult.end;
        const endTime = timeResult.end == null ? timeResult.start : timeResult.end;
        const endDateTime = mergeDateTimeComponent(endDate, endTime);
        if (dateResult.end == null && endDateTime.date().getTime() < result.start.date().getTime()) {
            if (endDateTime.isCertain("day")) {
                endDateTime.assign("day", endDateTime.get("day") + 1);
            }
            else {
                endDateTime.imply("day", endDateTime.get("day") + 1);
            }
        }
        result.end = endDateTime;
    }
    return result;
}
exports.mergeDateTimeResult = mergeDateTimeResult;
function mergeDateTimeComponent(dateComponent, timeComponent) {
    const dateTimeComponent = dateComponent.clone();
    if (timeComponent.isCertain("hour")) {
        dateTimeComponent.assign("hour", timeComponent.get("hour"));
        dateTimeComponent.assign("minute", timeComponent.get("minute"));
        if (timeComponent.isCertain("second")) {
            dateTimeComponent.assign("second", timeComponent.get("second"));
            if (timeComponent.isCertain("millisecond")) {
                dateTimeComponent.assign("millisecond", timeComponent.get("millisecond"));
            }
            else {
                dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
            }
        }
        else {
            dateTimeComponent.imply("second", timeComponent.get("second"));
            dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
        }
    }
    else {
        dateTimeComponent.imply("hour", timeComponent.get("hour"));
        dateTimeComponent.imply("minute", timeComponent.get("minute"));
        dateTimeComponent.imply("second", timeComponent.get("second"));
        dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
    }
    if (timeComponent.isCertain("timezoneOffset")) {
        dateTimeComponent.assign("timezoneOffset", timeComponent.get("timezoneOffset"));
    }
    if (timeComponent.isCertain("meridiem")) {
        dateTimeComponent.assign("meridiem", timeComponent.get("meridiem"));
    }
    else if (timeComponent.get("meridiem") != null && dateTimeComponent.get("meridiem") == null) {
        dateTimeComponent.imply("meridiem", timeComponent.get("meridiem"));
    }
    if (dateTimeComponent.get("meridiem") == dist.Meridiem.PM && dateTimeComponent.get("hour") < 12) {
        if (timeComponent.isCertain("hour")) {
            dateTimeComponent.assign("hour", dateTimeComponent.get("hour") + 12);
        }
        else {
            dateTimeComponent.imply("hour", dateTimeComponent.get("hour") + 12);
        }
    }
    return dateTimeComponent;
}
exports.mergeDateTimeComponent = mergeDateTimeComponent;
});

var AbstractMergeDateTimeRefiner = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


class ENMergeDateTimeRefiner extends abstractRefiners.MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        return (((currentResult.start.isOnlyDate() && nextResult.start.isOnlyTime()) ||
            (nextResult.start.isOnlyDate() && currentResult.start.isOnlyTime())) &&
            textBetween.match(this.patternBetween()) != null);
    }
    mergeResults(textBetween, currentResult, nextResult) {
        const result = currentResult.start.isOnlyDate()
            ? mergingCalculation.mergeDateTimeResult(currentResult, nextResult)
            : mergingCalculation.mergeDateTimeResult(nextResult, currentResult);
        result.index = currentResult.index;
        result.text = currentResult.text + textBetween + nextResult.text;
        return result;
    }
}
exports.default = ENMergeDateTimeRefiner;
});

var ENMergeDateTimeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateTimeRefiner_1 = __importDefault(AbstractMergeDateTimeRefiner);
class ENMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(T|at|after|before|on|of|,|-)?\\s*$");
    }
}
exports.default = ENMergeDateTimeRefiner;
});

var ExtractTimezoneAbbrRefiner_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
const TIMEZONE_NAME_PATTERN = new RegExp("^\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
const DEFAULT_TIMEZONE_ABBR_MAP = {
    ACDT: 630,
    ACST: 570,
    ADT: -180,
    AEDT: 660,
    AEST: 600,
    AFT: 270,
    AKDT: -480,
    AKST: -540,
    ALMT: 360,
    AMST: -180,
    AMT: -240,
    ANAST: 720,
    ANAT: 720,
    AQTT: 300,
    ART: -180,
    AST: -240,
    AWDT: 540,
    AWST: 480,
    AZOST: 0,
    AZOT: -60,
    AZST: 300,
    AZT: 240,
    BNT: 480,
    BOT: -240,
    BRST: -120,
    BRT: -180,
    BST: 60,
    BTT: 360,
    CAST: 480,
    CAT: 120,
    CCT: 390,
    CDT: -300,
    CEST: 120,
    CET: 60,
    CHADT: 825,
    CHAST: 765,
    CKT: -600,
    CLST: -180,
    CLT: -240,
    COT: -300,
    CST: -360,
    CVT: -60,
    CXT: 420,
    ChST: 600,
    DAVT: 420,
    EASST: -300,
    EAST: -360,
    EAT: 180,
    ECT: -300,
    EDT: -240,
    EEST: 180,
    EET: 120,
    EGST: 0,
    EGT: -60,
    EST: -300,
    ET: -300,
    FJST: 780,
    FJT: 720,
    FKST: -180,
    FKT: -240,
    FNT: -120,
    GALT: -360,
    GAMT: -540,
    GET: 240,
    GFT: -180,
    GILT: 720,
    GMT: 0,
    GST: 240,
    GYT: -240,
    HAA: -180,
    HAC: -300,
    HADT: -540,
    HAE: -240,
    HAP: -420,
    HAR: -360,
    HAST: -600,
    HAT: -90,
    HAY: -480,
    HKT: 480,
    HLV: -210,
    HNA: -240,
    HNC: -360,
    HNE: -300,
    HNP: -480,
    HNR: -420,
    HNT: -150,
    HNY: -540,
    HOVT: 420,
    ICT: 420,
    IDT: 180,
    IOT: 360,
    IRDT: 270,
    IRKST: 540,
    IRKT: 540,
    IRST: 210,
    IST: 330,
    JST: 540,
    KGT: 360,
    KRAST: 480,
    KRAT: 480,
    KST: 540,
    KUYT: 240,
    LHDT: 660,
    LHST: 630,
    LINT: 840,
    MAGST: 720,
    MAGT: 720,
    MART: -510,
    MAWT: 300,
    MDT: -360,
    MESZ: 120,
    MEZ: 60,
    MHT: 720,
    MMT: 390,
    MSD: 240,
    MSK: 240,
    MST: -420,
    MUT: 240,
    MVT: 300,
    MYT: 480,
    NCT: 660,
    NDT: -90,
    NFT: 690,
    NOVST: 420,
    NOVT: 360,
    NPT: 345,
    NST: -150,
    NUT: -660,
    NZDT: 780,
    NZST: 720,
    OMSST: 420,
    OMST: 420,
    PDT: -420,
    PET: -300,
    PETST: 720,
    PETT: 720,
    PGT: 600,
    PHOT: 780,
    PHT: 480,
    PKT: 300,
    PMDT: -120,
    PMST: -180,
    PONT: 660,
    PST: -480,
    PT: -480,
    PWT: 540,
    PYST: -180,
    PYT: -240,
    RET: 240,
    SAMT: 240,
    SAST: 120,
    SBT: 660,
    SCT: 240,
    SGT: 480,
    SRT: -180,
    SST: -660,
    TAHT: -600,
    TFT: 300,
    TJT: 300,
    TKT: 780,
    TLT: 540,
    TMT: 300,
    TVT: 720,
    ULAT: 480,
    UTC: 0,
    UYST: -120,
    UYT: -180,
    UZT: 300,
    VET: -210,
    VLAST: 660,
    VLAT: 660,
    VUT: 660,
    WAST: 120,
    WAT: 60,
    WEST: 60,
    WESZ: 60,
    WET: 0,
    WEZ: 0,
    WFT: 720,
    WGST: -120,
    WGT: -180,
    WIB: 420,
    WIT: 540,
    WITA: 480,
    WST: 780,
    WT: 0,
    YAKST: 600,
    YAKT: 600,
    YAPT: 600,
    YEKST: 360,
    YEKT: 360,
};
class ExtractTimezoneAbbrRefiner {
    constructor(timezoneOverrides) {
        this.timezone = Object.assign(Object.assign({}, DEFAULT_TIMEZONE_ABBR_MAP), timezoneOverrides);
    }
    refine(context, results) {
        var _a;
        const timezoneOverrides = (_a = context.option.timezones) !== null && _a !== void 0 ? _a : {};
        results.forEach((result) => {
            var _a, _b;
            const suffix = context.text.substring(result.index + result.text.length);
            const match = TIMEZONE_NAME_PATTERN.exec(suffix);
            if (!match) {
                return;
            }
            const timezoneAbbr = match[1].toUpperCase();
            const extractedTimezoneOffset = (_b = (_a = timezoneOverrides[timezoneAbbr]) !== null && _a !== void 0 ? _a : this.timezone[timezoneAbbr]) !== null && _b !== void 0 ? _b : null;
            if (extractedTimezoneOffset === null) {
                return;
            }
            context.debug(() => {
                console.log(`Extracting timezone: '${timezoneAbbr}' into : ${extractedTimezoneOffset}`);
            });
            const currentTimezoneOffset = result.start.get("timezoneOffset");
            if (currentTimezoneOffset !== null && extractedTimezoneOffset != currentTimezoneOffset) {
                return;
            }
            result.text += match[0];
            if (!result.start.isCertain("timezoneOffset")) {
                result.start.assign("timezoneOffset", extractedTimezoneOffset);
            }
            if (result.end != null && !result.end.isCertain("timezoneOffset")) {
                result.end.assign("timezoneOffset", extractedTimezoneOffset);
            }
        });
        return results;
    }
}
exports.default = ExtractTimezoneAbbrRefiner;
});

var ExtractTimezoneOffsetRefiner_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
const TIMEZONE_OFFSET_PATTERN = new RegExp("^\\s*(?:(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?", "i");
const TIMEZONE_OFFSET_SIGN_GROUP = 1;
const TIMEZONE_OFFSET_HOUR_OFFSET_GROUP = 2;
const TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP = 3;
class ExtractTimezoneOffsetRefiner {
    refine(context, results) {
        results.forEach(function (result) {
            if (result.start.isCertain("timezoneOffset")) {
                return;
            }
            const suffix = context.text.substring(result.index + result.text.length);
            const match = TIMEZONE_OFFSET_PATTERN.exec(suffix);
            if (!match) {
                return;
            }
            context.debug(() => {
                console.log(`Extracting timezone: '${match[0]}' into : ${result}`);
            });
            const hourOffset = parseInt(match[TIMEZONE_OFFSET_HOUR_OFFSET_GROUP]);
            const minuteOffset = parseInt(match[TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP] || "0");
            let timezoneOffset = hourOffset * 60 + minuteOffset;
            if (match[TIMEZONE_OFFSET_SIGN_GROUP] === "-") {
                timezoneOffset = -timezoneOffset;
            }
            if (result.end != null) {
                result.end.assign("timezoneOffset", timezoneOffset);
            }
            result.start.assign("timezoneOffset", timezoneOffset);
            result.text += match[0];
        });
        return results;
    }
}
exports.default = ExtractTimezoneOffsetRefiner;
});

var OverlapRemovalRefiner_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
class OverlapRemovalRefiner {
    refine(context, results) {
        if (results.length < 2) {
            return results;
        }
        const filteredResults = [];
        let prevResult = results[0];
        for (let i = 1; i < results.length; i++) {
            const result = results[i];
            if (result.index < prevResult.index + prevResult.text.length) {
                if (result.text.length > prevResult.text.length) {
                    prevResult = result;
                }
            }
            else {
                filteredResults.push(prevResult);
                prevResult = result;
            }
        }
        if (prevResult != null) {
            filteredResults.push(prevResult);
        }
        return filteredResults;
    }
}
exports.default = OverlapRemovalRefiner;
});

var ForwardDateRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(dayjs_min);
class ForwardDateRefiner {
    refine(context, results) {
        if (!context.option.forwardDate) {
            return results;
        }
        results.forEach(function (result) {
            let refMoment = dayjs_1.default(context.refDate);
            if (result.start.isOnlyDayMonthComponent() && refMoment.isAfter(result.start.dayjs())) {
                for (let i = 0; i < 3 && refMoment.isAfter(result.start.dayjs()); i++) {
                    result.start.imply("year", result.start.get("year") + 1);
                    context.debug(() => {
                        console.log(`Forward yearly adjusted for ${result} (${result.start})`);
                    });
                    if (result.end && !result.end.isCertain("year")) {
                        result.end.imply("year", result.end.get("year") + 1);
                        context.debug(() => {
                            console.log(`Forward yearly adjusted for ${result} (${result.end})`);
                        });
                    }
                }
            }
            if (result.start.isOnlyWeekdayComponent() && refMoment.isAfter(result.start.dayjs())) {
                if (refMoment.day() > result.start.get("weekday")) {
                    refMoment = refMoment.day(result.start.get("weekday") + 7);
                }
                else {
                    refMoment = refMoment.day(result.start.get("weekday"));
                }
                result.start.imply("day", refMoment.date());
                result.start.imply("month", refMoment.month() + 1);
                result.start.imply("year", refMoment.year());
                context.debug(() => {
                    console.log(`Forward weekly adjusted for ${result} (${result.start})`);
                });
                if (result.end && result.end.isOnlyWeekdayComponent()) {
                    if (refMoment.day() > result.end.get("weekday")) {
                        refMoment = refMoment.day(result.end.get("weekday") + 7);
                    }
                    else {
                        refMoment = refMoment.day(result.end.get("weekday"));
                    }
                    result.end.imply("day", refMoment.date());
                    result.end.imply("month", refMoment.month() + 1);
                    result.end.imply("year", refMoment.year());
                    context.debug(() => {
                        console.log(`Forward weekly adjusted for ${result} (${result.end})`);
                    });
                }
            }
        });
        return results;
    }
}
exports.default = ForwardDateRefiner;
});

var UnlikelyFormatFilter_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class UnlikelyFormatFilter extends abstractRefiners.Filter {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    isValid(context, result) {
        if (result.text.replace(" ", "").match(/^\d*(\.\d*)?$/)) {
            context.debug(() => {
                console.log(`Removing unlikely result '${result.text}'`);
            });
            return false;
        }
        if (!result.start.isValidDate()) {
            context.debug(() => {
                console.log(`Removing invalid result: ${result} (${result.start})`);
            });
            return false;
        }
        if (result.end && !result.end.isValidDate()) {
            context.debug(() => {
                console.log(`Removing invalid result: ${result} (${result.end})`);
            });
            return false;
        }
        if (this.strictMode) {
            return this.isStrictModeValid(context, result);
        }
        return true;
    }
    isStrictModeValid(context, result) {
        if (result.start.isOnlyWeekdayComponent()) {
            context.debug(() => {
                console.log(`(Strict) Removing weekday only component: ${result} (${result.end})`);
            });
            return false;
        }
        if (result.start.isOnlyTime() && (!result.start.isCertain("hour") || !result.start.isCertain("minute"))) {
            context.debug(() => {
                console.log(`(Strict) Removing uncertain time component: ${result} (${result.end})`);
            });
            return false;
        }
        return true;
    }
}
exports.default = UnlikelyFormatFilter;
});

var ISOFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

const PATTERN = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})" +
    "(?:T" +
    "([0-9]{1,2}):([0-9]{1,2})" +
    "(?:" +
    ":([0-9]{1,2})(?:\\.(\\d{1,4}))?" +
    ")?" +
    "(?:" +
    "Z|([+-]\\d{2}):?(\\d{2})?" +
    ")?" +
    ")?" +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NUMBER_GROUP = 2;
const DATE_NUMBER_GROUP = 3;
const HOUR_NUMBER_GROUP = 4;
const MINUTE_NUMBER_GROUP = 5;
const SECOND_NUMBER_GROUP = 6;
const MILLISECOND_NUMBER_GROUP = 7;
const TZD_HOUR_OFFSET_GROUP = 8;
const TZD_MINUTE_OFFSET_GROUP = 9;
class ISOFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const components = {};
        components["year"] = parseInt(match[YEAR_NUMBER_GROUP]);
        components["month"] = parseInt(match[MONTH_NUMBER_GROUP]);
        components["day"] = parseInt(match[DATE_NUMBER_GROUP]);
        if (match[HOUR_NUMBER_GROUP] != null) {
            components["hour"] = parseInt(match[HOUR_NUMBER_GROUP]);
            components["minute"] = parseInt(match[MINUTE_NUMBER_GROUP]);
            if (match[SECOND_NUMBER_GROUP] != null) {
                components["second"] = parseInt(match[SECOND_NUMBER_GROUP]);
            }
            if (match[MILLISECOND_NUMBER_GROUP] != null) {
                components["millisecond"] = parseInt(match[MILLISECOND_NUMBER_GROUP]);
            }
            if (match[TZD_HOUR_OFFSET_GROUP] == null) {
                components["timezoneOffset"] = 0;
            }
            else {
                const hourOffset = parseInt(match[TZD_HOUR_OFFSET_GROUP]);
                let minuteOffset = 0;
                if (match[TZD_MINUTE_OFFSET_GROUP] != null) {
                    minuteOffset = parseInt(match[TZD_MINUTE_OFFSET_GROUP]);
                }
                let offset = hourOffset * 60;
                if (offset < 0) {
                    offset -= minuteOffset;
                }
                else {
                    offset += minuteOffset;
                }
                components["timezoneOffset"] = offset;
            }
        }
        return components;
    }
}
exports.default = ISOFormatParser;
});

var MergeWeekdayComponentRefiner_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class MergeWeekdayComponentRefiner extends abstractRefiners.MergingRefiner {
    mergeResults(textBetween, currentResult, nextResult) {
        const newResult = nextResult.clone();
        newResult.index = currentResult.index;
        newResult.text = currentResult.text + textBetween + newResult.text;
        newResult.start.assign("weekday", currentResult.start.get("weekday"));
        if (newResult.end) {
            newResult.end.assign("weekday", currentResult.start.get("weekday"));
        }
        return newResult;
    }
    shouldMergeResults(textBetween, currentResult, nextResult) {
        const weekdayThenNormalDate = currentResult.start.isOnlyWeekdayComponent() &&
            !currentResult.start.isCertain("hour") &&
            nextResult.start.isCertain("day");
        return weekdayThenNormalDate && textBetween.match(/^,?\s*$/) != null;
    }
}
exports.default = MergeWeekdayComponentRefiner;
});

var configurations = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.includeCommonConfiguration = void 0;
const ExtractTimezoneAbbrRefiner_1$1 = __importDefault(ExtractTimezoneAbbrRefiner_1);
const ExtractTimezoneOffsetRefiner_1$1 = __importDefault(ExtractTimezoneOffsetRefiner_1);
const OverlapRemovalRefiner_1$1 = __importDefault(OverlapRemovalRefiner_1);
const ForwardDateRefiner_1$1 = __importDefault(ForwardDateRefiner_1);
const UnlikelyFormatFilter_1$1 = __importDefault(UnlikelyFormatFilter_1);
const ISOFormatParser_1$1 = __importDefault(ISOFormatParser_1);
const MergeWeekdayComponentRefiner_1$1 = __importDefault(MergeWeekdayComponentRefiner_1);
function includeCommonConfiguration(configuration, strictMode = false) {
    configuration.parsers.unshift(new ISOFormatParser_1$1.default());
    configuration.refiners.unshift(new MergeWeekdayComponentRefiner_1$1.default());
    configuration.refiners.unshift(new ExtractTimezoneAbbrRefiner_1$1.default());
    configuration.refiners.unshift(new ExtractTimezoneOffsetRefiner_1$1.default());
    configuration.refiners.unshift(new OverlapRemovalRefiner_1$1.default());
    configuration.refiners.push(new ForwardDateRefiner_1$1.default());
    configuration.refiners.push(new UnlikelyFormatFilter_1$1.default(strictMode));
    return configuration;
}
exports.includeCommonConfiguration = includeCommonConfiguration;
});

var casualReferences = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tonight = exports.tomorrow = exports.yesterday = exports.today = exports.now = void 0;

const dayjs_1 = __importDefault(dayjs_min);


function now(refDate) {
    const targetDate = dayjs_1.default(refDate);
    const component = new results.ParsingComponents(refDate, {});
    dayjs.assignSimilarDate(component, targetDate);
    dayjs.assignSimilarTime(component, targetDate);
    return component;
}
exports.now = now;
function today(refDate) {
    const targetDate = dayjs_1.default(refDate);
    const component = new results.ParsingComponents(refDate, {});
    dayjs.assignSimilarDate(component, targetDate);
    dayjs.implySimilarTime(component, targetDate);
    return component;
}
exports.today = today;
function yesterday(refDate) {
    let targetDate = dayjs_1.default(refDate);
    const component = new results.ParsingComponents(refDate, {});
    targetDate = targetDate.add(-1, "day");
    dayjs.assignSimilarDate(component, targetDate);
    dayjs.implySimilarTime(component, targetDate);
    return component;
}
exports.yesterday = yesterday;
function tomorrow(refDate) {
    const targetDate = dayjs_1.default(refDate);
    const component = new results.ParsingComponents(refDate, {});
    dayjs.assignTheNextDay(component, targetDate);
    return component;
}
exports.tomorrow = tomorrow;
function tonight(refDate, implyHour = 22) {
    const targetDate = dayjs_1.default(refDate);
    const component = new results.ParsingComponents(refDate, {});
    component.imply("hour", implyHour);
    component.imply("meridiem", dist.Meridiem.PM);
    dayjs.assignSimilarDate(component, targetDate);
    return component;
}
exports.tonight = tonight;
});

var ENCasualDateParser_1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(dayjs_min);


const references = __importStar(casualReferences);
class ENCasualDateParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(now|today|tonight|tomorrow|tmr|yesterday|last\s*night)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        let targetDate = dayjs_1.default(context.refDate);
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "now":
                return references.now(context.refDate);
            case "today":
                return references.today(context.refDate);
            case "yesterday":
                return references.yesterday(context.refDate);
            case "tomorrow":
            case "tmr":
                return references.tomorrow(context.refDate);
            case "tonight":
                return references.tonight(context.refDate);
            default:
                if (lowerText.match(/last\s*night/)) {
                    if (targetDate.hour() > 6) {
                        targetDate = targetDate.add(-1, "day");
                    }
                    dayjs.assignSimilarDate(component, targetDate);
                    component.imply("hour", 0);
                }
                break;
        }
        return component;
    }
}
exports.default = ENCasualDateParser;
});

var ENCasualTimeParser_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });


const dayjs_1 = __importDefault(dayjs_min);

class ENCasualTimeParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(?:this)?\s*(morning|afternoon|evening|night|midnight|noon)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs_1.default(context.refDate);
        const component = context.createParsingComponents();
        switch (match[1].toLowerCase()) {
            case "afternoon":
                component.imply("meridiem", dist.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "evening":
            case "night":
                component.imply("meridiem", dist.Meridiem.PM);
                component.imply("hour", 20);
                break;
            case "midnight":
                dayjs.assignTheNextDay(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;
            case "morning":
                component.imply("meridiem", dist.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "noon":
                component.imply("meridiem", dist.Meridiem.AM);
                component.imply("hour", 12);
                break;
        }
        return component;
    }
}
exports.default = ENCasualTimeParser;
});

var weeks = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDayJSClosestWeekday = exports.toDayJSWeekday = void 0;
const dayjs_1 = __importDefault(dayjs_min);
function toDayJSWeekday(refDate, offset, modifier) {
    if (!modifier) {
        return toDayJSClosestWeekday(refDate, offset);
    }
    let date = dayjs_1.default(refDate);
    switch (modifier) {
        case "this":
            date = date.day(offset);
            break;
        case "next":
            date = date.day(offset + 7);
            break;
        case "last":
            date = date.day(offset - 7);
            break;
    }
    return date;
}
exports.toDayJSWeekday = toDayJSWeekday;
function toDayJSClosestWeekday(refDate, offset) {
    let date = dayjs_1.default(refDate);
    const refOffset = date.day();
    if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
        date = date.day(offset - 7);
    }
    else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
        date = date.day(offset + 7);
    }
    else {
        date = date.day(offset);
    }
    return date;
}
exports.toDayJSClosestWeekday = toDayJSClosestWeekday;
});

var ENWeekdayParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:on\\s*?)?" +
    "(?:(this|last|past|next)\\s*)?" +
    `(${pattern.matchAnyPattern(constants$5.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(this|last|past|next)\\s*week)?" +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class ENWeekdayParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants$5.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord == "last" || modifierWord == "past") {
            modifier = "last";
        }
        else if (modifierWord == "next") {
            modifier = "next";
        }
        else if (modifierWord == "this") {
            modifier = "this";
        }
        const date = weeks.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports.default = ENWeekdayParser;
});

var ENRelativeDateFormatParser_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });


const dayjs_1 = __importDefault(dayjs_min);


const PATTERN = new RegExp(`(this|next|last|past)\\s*(${pattern.matchAnyPattern(constants$5.TIME_UNIT_DICTIONARY)})(?=\\s*)` + "(?=\\W|$)", "i");
const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class ENRelativeDateFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
        const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
        const timeunit = constants$5.TIME_UNIT_DICTIONARY[unitWord];
        if (modifier == "next") {
            const timeUnits = {};
            timeUnits[timeunit] = 1;
            return results.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
        }
        if (modifier == "last" || modifier == "past") {
            const timeUnits = {};
            timeUnits[timeunit] = -1;
            return results.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
        }
        const components = context.createParsingComponents();
        let date = dayjs_1.default(context.refDate);
        if (unitWord.match(/week/i)) {
            date = date.add(-date.get("d"), "d");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.imply("year", date.year());
        }
        else if (unitWord.match(/month/i)) {
            date = date.add(-date.date() + 1, "d");
            components.imply("day", date.date());
            components.assign("year", date.year());
            components.assign("month", date.month() + 1);
        }
        else if (unitWord.match(/year/i)) {
            date = date.add(-date.date() + 1, "d");
            date = date.add(-date.month(), "month");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.assign("year", date.year());
        }
        return components;
    }
}
exports.default = ENRelativeDateFormatParser;
});

var chrono$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingContext = exports.Chrono = void 0;


class Chrono {
    constructor(configuration) {
        configuration = configuration || en.createCasualConfiguration();
        this.parsers = [...configuration.parsers];
        this.refiners = [...configuration.refiners];
    }
    clone() {
        return new Chrono({
            parsers: [...this.parsers],
            refiners: [...this.refiners],
        });
    }
    parseDate(text, referenceDate, option) {
        const results = this.parse(text, referenceDate, option);
        return results.length > 0 ? results[0].start.date() : null;
    }
    parse(text, referenceDate, option) {
        const context = new ParsingContext(text, referenceDate || new Date(), option || {});
        let results = [];
        this.parsers.forEach((parser) => {
            const parsedResults = Chrono.executeParser(context, parser);
            results = results.concat(parsedResults);
        });
        results.sort((a, b) => {
            return a.index - b.index;
        });
        this.refiners.forEach(function (refiner) {
            results = refiner.refine(context, results);
        });
        return results;
    }
    static executeParser(context, parser) {
        const results$1 = [];
        const pattern = parser.pattern(context);
        const originalText = context.text;
        let remainingText = context.text;
        let match = pattern.exec(remainingText);
        while (match) {
            const index = match.index + originalText.length - remainingText.length;
            match.index = index;
            const result = parser.extract(context, match);
            if (!result) {
                remainingText = originalText.substring(match.index + 1);
                match = pattern.exec(remainingText);
                continue;
            }
            let parsedResult = null;
            if (result instanceof results.ParsingResult) {
                parsedResult = result;
            }
            else if (result instanceof results.ParsingComponents) {
                parsedResult = context.createParsingResult(match.index, match[0]);
                parsedResult.start = result;
            }
            else {
                parsedResult = context.createParsingResult(match.index, match[0], result);
            }
            context.debug(() => console.log(`${parser.constructor.name} extracted result ${parsedResult}`));
            results$1.push(parsedResult);
            remainingText = originalText.substring(index + parsedResult.text.length);
            match = pattern.exec(remainingText);
        }
        return results$1;
    }
}
exports.Chrono = Chrono;
class ParsingContext {
    constructor(text, refDate, option) {
        this.text = text;
        this.refDate = refDate;
        this.option = option;
    }
    createParsingComponents(components) {
        return new results.ParsingComponents(this.refDate, components);
    }
    createParsingResult(index, textOrEndIndex, startComponents, endComponents) {
        const text = typeof textOrEndIndex === "string" ? textOrEndIndex : this.text.substring(index, textOrEndIndex);
        const start = startComponents ? this.createParsingComponents(startComponents) : null;
        const end = endComponents ? this.createParsingComponents(endComponents) : null;
        return new results.ParsingResult(this.refDate, index, text, start, end);
    }
    debug(block) {
        if (this.option.debug) {
            if (this.option.debug instanceof Function) {
                this.option.debug(block);
            }
            else {
                const handler = this.option.debug;
                handler.debug(block);
            }
        }
    }
}
exports.ParsingContext = ParsingContext;
});

var SlashDateFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

const PATTERN = new RegExp("([^\\d]|^)" +
    "([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})" +
    "(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?" +
    "(\\W|$)", "i");
const OPENING_GROUP = 1;
const ENDING_GROUP = 5;
const FIRST_NUMBERS_GROUP = 2;
const SECOND_NUMBERS_GROUP = 3;
const YEAR_GROUP = 4;
class SlashDateFormatParser {
    constructor(littleEndian) {
        this.groupNumberMonth = littleEndian ? SECOND_NUMBERS_GROUP : FIRST_NUMBERS_GROUP;
        this.groupNumberDay = littleEndian ? FIRST_NUMBERS_GROUP : SECOND_NUMBERS_GROUP;
    }
    pattern() {
        return PATTERN;
    }
    extract(context, match) {
        if (match[OPENING_GROUP] == "/" || match[ENDING_GROUP] == "/") {
            match.index += match[0].length;
            return;
        }
        const index = match.index + match[OPENING_GROUP].length;
        const text = match[0].substr(match[OPENING_GROUP].length, match[0].length - match[OPENING_GROUP].length - match[ENDING_GROUP].length);
        if (text.match(/^\d\.\d$/) || text.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) {
            return;
        }
        if (!match[YEAR_GROUP] && match[0].indexOf("/") < 0) {
            return;
        }
        const result = context.createParsingResult(index, text);
        let month = parseInt(match[this.groupNumberMonth]);
        let day = parseInt(match[this.groupNumberDay]);
        if (month < 1 || month > 12) {
            if (month > 12) {
                if (day >= 1 && day <= 12 && month <= 31) {
                    [day, month] = [month, day];
                }
                else {
                    return null;
                }
            }
        }
        if (day < 1 || day > 31) {
            return null;
        }
        result.start.assign("day", day);
        result.start.assign("month", month);
        if (match[YEAR_GROUP]) {
            const rawYearNumber = parseInt(match[YEAR_GROUP]);
            const year = years.findMostLikelyADYear(rawYearNumber);
            result.start.assign("year", year);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        return result;
    }
}
exports.default = SlashDateFormatParser;
});

var ENTimeUnitCasualRelativeFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




class ENTimeUnitCasualRelativeFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp(`(this|last|past|next|\\+|-)\\s*(${constants$5.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
    }
    innerExtract(context, match) {
        const prefix = match[1].toLowerCase();
        let timeUnits = constants$5.parseTimeUnits(match[2]);
        switch (prefix) {
            case "last":
            case "past":
            case "-":
                timeUnits = timeunits.reverseTimeUnits(timeUnits);
                break;
        }
        return results.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports.default = ENTimeUnitCasualRelativeFormatParser;
});

var en = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.GB = exports.strict = exports.casual = void 0;
const ENTimeUnitWithinFormatParser_1$1 = __importDefault(ENTimeUnitWithinFormatParser_1);
const ENMonthNameLittleEndianParser_1$1 = __importDefault(ENMonthNameLittleEndianParser_1);
const ENMonthNameMiddleEndianParser_1$1 = __importDefault(ENMonthNameMiddleEndianParser_1);
const ENMonthNameParser_1$1 = __importDefault(ENMonthNameParser_1);
const ENCasualYearMonthDayParser_1$1 = __importDefault(ENCasualYearMonthDayParser_1);
const ENSlashMonthFormatParser_1$1 = __importDefault(ENSlashMonthFormatParser_1);
const ENTimeExpressionParser_1$1 = __importDefault(ENTimeExpressionParser_1);
const ENTimeUnitAgoFormatParser_1$1 = __importDefault(ENTimeUnitAgoFormatParser_1);
const ENTimeUnitLaterFormatParser_1$1 = __importDefault(ENTimeUnitLaterFormatParser_1);
const ENMergeDateRangeRefiner_1$1 = __importDefault(ENMergeDateRangeRefiner_1);
const ENMergeDateTimeRefiner_1$1 = __importDefault(ENMergeDateTimeRefiner_1);

const ENCasualDateParser_1$1 = __importDefault(ENCasualDateParser_1);
const ENCasualTimeParser_1$1 = __importDefault(ENCasualTimeParser_1);
const ENWeekdayParser_1$1 = __importDefault(ENWeekdayParser_1);
const ENRelativeDateFormatParser_1$1 = __importDefault(ENRelativeDateFormatParser_1);

const SlashDateFormatParser_1$1 = __importDefault(SlashDateFormatParser_1);
const ENTimeUnitCasualRelativeFormatParser_1$1 = __importDefault(ENTimeUnitCasualRelativeFormatParser_1);
exports.casual = new chrono$1.Chrono(createCasualConfiguration(false));
exports.strict = new chrono$1.Chrono(createConfiguration(true, false));
exports.GB = new chrono$1.Chrono(createConfiguration(false, true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = false) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new ENCasualDateParser_1$1.default());
    option.parsers.unshift(new ENCasualTimeParser_1$1.default());
    option.parsers.unshift(new ENMonthNameParser_1$1.default());
    option.parsers.unshift(new ENRelativeDateFormatParser_1$1.default());
    option.parsers.unshift(new ENTimeUnitCasualRelativeFormatParser_1$1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = false) {
    return configurations.includeCommonConfiguration({
        parsers: [
            new SlashDateFormatParser_1$1.default(littleEndian),
            new ENTimeUnitWithinFormatParser_1$1.default(),
            new ENMonthNameLittleEndianParser_1$1.default(),
            new ENMonthNameMiddleEndianParser_1$1.default(),
            new ENWeekdayParser_1$1.default(),
            new ENCasualYearMonthDayParser_1$1.default(),
            new ENSlashMonthFormatParser_1$1.default(),
            new ENTimeExpressionParser_1$1.default(strictMode),
            new ENTimeUnitAgoFormatParser_1$1.default(strictMode),
            new ENTimeUnitLaterFormatParser_1$1.default(strictMode),
        ],
        refiners: [new ENMergeDateTimeRefiner_1$1.default(), new ENMergeDateRangeRefiner_1$1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;
});

var DETimeExpressionParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


class DETimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:um|von)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|bis)\\s*";
    }
    primarySuffix() {
        return "(?:\\s*uhr)?(?:\\s*(?:morgens|vormittags|nachmittags|abends|nachts))?(?=\\W|$)";
    }
    extractPrimaryTimeComponents(context, match) {
        const components = super.extractPrimaryTimeComponents(context, match);
        if (components) {
            if (match[0].endsWith("morgens") || match[0].endsWith("vormittags")) {
                components.assign("meridiem", dist.Meridiem.AM);
                const hour = components.get("hour");
                if (hour < 12) {
                    components.assign("hour", components.get("hour"));
                }
            }
            if (match[0].endsWith("nachmittags") || match[0].endsWith("abends") || match[0].endsWith("nachts")) {
                components.assign("meridiem", dist.Meridiem.PM);
                const hour = components.get("hour");
                if (hour < 12) {
                    components.assign("hour", components.get("hour") + 12);
                }
            }
        }
        return components;
    }
}
exports.default = DETimeExpressionParser;
});

var constants$4 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTimeUnits = exports.TIME_UNITS_PATTERN = exports.parseYear = exports.YEAR_PATTERN = exports.parseNumberPattern = exports.NUMBER_PATTERN = exports.TIME_UNIT_DICTIONARY = exports.INTEGER_WORD_DICTIONARY = exports.MONTH_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;


exports.WEEKDAY_DICTIONARY = {
    "sonntag": 0,
    "so": 0,
    "montag": 1,
    "mo": 1,
    "dienstag": 2,
    "di": 2,
    "mittwoch": 3,
    "mi": 3,
    "donnerstag": 4,
    "do": 4,
    "freitag": 5,
    "fr": 5,
    "samstag": 6,
    "sa": 6,
};
exports.MONTH_DICTIONARY = {
    "januar": 1,
    "jan": 1,
    "jan.": 1,
    "februar": 2,
    "feb": 2,
    "feb.": 2,
    "märz": 3,
    "maerz": 3,
    "mär": 3,
    "mär.": 3,
    "mrz": 3,
    "mrz.": 3,
    "april": 4,
    "apr": 4,
    "apr.": 4,
    "mai": 5,
    "juni": 6,
    "jun": 6,
    "jun.": 6,
    "juli": 7,
    "jul": 7,
    "jul.": 7,
    "august": 8,
    "aug": 8,
    "aug.": 8,
    "september": 9,
    "sep": 9,
    "sep.": 9,
    "sept": 9,
    "sept.": 9,
    "oktober": 10,
    "okt": 10,
    "okt.": 10,
    "november": 11,
    "nov": 11,
    "nov.": 11,
    "dezember": 12,
    "dez": 12,
    "dez.": 12,
};
exports.INTEGER_WORD_DICTIONARY = {
    "eins": 1,
    "zwei": 2,
    "drei": 3,
    "vier": 4,
    "fünf": 5,
    "fuenf": 5,
    "sechs": 6,
    "sieben": 7,
    "acht": 8,
    "neun": 9,
    "zehn": 10,
    "elf": 11,
    "zwölf": 12,
    "zwoelf": 12,
};
exports.TIME_UNIT_DICTIONARY = {
    sec: "second",
    second: "second",
    seconds: "second",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minutes: "minute",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    hour: "hour",
    hours: "hour",
    day: "d",
    days: "d",
    week: "week",
    weeks: "week",
    month: "month",
    months: "month",
    y: "year",
    yr: "year",
    year: "year",
    years: "year",
};
exports.NUMBER_PATTERN = `(?:${pattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s*an?)?|an?(?:\\s*few)?|few|several|a?\\s*couple\\s*(?:of)?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (exports.INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return exports.INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "a" || num === "an") {
        return 1;
    }
    else if (num.match(/few/)) {
        return 3;
    }
    else if (num.match(/half/)) {
        return 0.5;
    }
    else if (num.match(/couple/)) {
        return 2;
    }
    else if (num.match(/several/)) {
        return 7;
    }
    return parseFloat(num);
}
exports.parseNumberPattern = parseNumberPattern;
exports.YEAR_PATTERN = `(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*C(?:hr)?\\.?)?)`;
function parseYear(match) {
    if (/v/i.test(match)) {
        return -parseInt(match.replace(/[^0-9]+/gi, ""));
    }
    if (/n/i.test(match)) {
        return parseInt(match.replace(/[^0-9]+/gi, ""));
    }
    const rawYearNumber = parseInt(match);
    return years.findMostLikelyADYear(rawYearNumber);
}
exports.parseYear = parseYear;
const SINGLE_TIME_UNIT_PATTERN = `(${exports.NUMBER_PATTERN})\\s{0,5}(${pattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
exports.TIME_UNITS_PATTERN = pattern.repeatedTimeunitPattern("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
exports.parseTimeUnits = parseTimeUnits;
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = exports.TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
});

var DEWeekdayParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:a[mn]\\s*?)?" +
    "(?:(diese[mn]|letzte[mn]|n(?:ä|ae)chste[mn])\\s*)?" +
    `(${pattern.matchAnyPattern(constants$4.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(diese|letzte|n(?:ä|ae)chste)\\s*woche)?" +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const SUFFIX_GROUP = 3;
const WEEKDAY_GROUP = 2;
class DEWeekdayParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants$4.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[SUFFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord.match(/letzte/)) {
            modifier = "last";
        }
        else if (modifierWord.match(/chste/)) {
            modifier = "next";
        }
        else if (modifierWord.match(/diese/)) {
            modifier = "this";
        }
        const date = weeks.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports.default = DEWeekdayParser;
});

var DEMergeDateRangeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateRangeRefiner_1$1 = __importDefault(AbstractMergeDateRangeRefiner_1);
class DEMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1$1.default {
    patternBetween() {
        return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
    }
}
exports.default = DEMergeDateRangeRefiner;
});

var DEMergeDateTimeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateTimeRefiner_1 = __importDefault(AbstractMergeDateTimeRefiner);
class DEMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(T|um|am|,|-)?\\s*$");
    }
}
exports.default = DEMergeDateTimeRefiner;
});

var DECasualTimeParser_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(dayjs_min);




class DECasualTimeParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs_1.default(context.refDate);
        const timeKeywordPattern = match[2].toLowerCase();
        const component = context.createParsingComponents();
        dayjs.implySimilarTime(component, targetDate);
        return DECasualTimeParser.extractTimeComponents(component, timeKeywordPattern);
    }
    static extractTimeComponents(component, timeKeywordPattern) {
        switch (timeKeywordPattern) {
            case "morgen":
                component.imply("hour", 6);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", dist.Meridiem.AM);
                break;
            case "vormittag":
                component.imply("hour", 9);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", dist.Meridiem.AM);
                break;
            case "mittag":
            case "mittags":
                component.imply("hour", 12);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", dist.Meridiem.AM);
                break;
            case "nachmittag":
                component.imply("hour", 15);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", dist.Meridiem.PM);
                break;
            case "abend":
                component.imply("hour", 18);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", dist.Meridiem.PM);
                break;
            case "nacht":
                component.imply("hour", 22);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", dist.Meridiem.PM);
                break;
            case "mitternacht":
                if (component.get("hour") > 1) {
                    component = timeunits.addImpliedTimeUnits(component, { "day": 1 });
                }
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", dist.Meridiem.AM);
                break;
        }
        return component;
    }
}
exports.default = DECasualTimeParser;
});

var DECasualDateParser_1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(dayjs_min);


const DECasualTimeParser_1$1 = __importDefault(DECasualTimeParser_1);
const references = __importStar(casualReferences);
const PATTERN = new RegExp(`(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)` +
    `(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const TIME_GROUP = 2;
class DECasualDateParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return PATTERN;
    }
    innerExtract(context, match) {
        let targetDate = dayjs_1.default(context.refDate);
        const dateKeyword = (match[DATE_GROUP] || "").toLowerCase();
        const timeKeyword = (match[TIME_GROUP] || "").toLowerCase();
        let component = context.createParsingComponents();
        switch (dateKeyword) {
            case "jetzt":
                component = references.now(context.refDate);
                break;
            case "heute":
                component = references.today(context.refDate);
                break;
            case "morgen":
                dayjs.assignTheNextDay(component, targetDate);
                break;
            case "übermorgen":
            case "uebermorgen":
                targetDate = targetDate.add(1, "day");
                dayjs.assignTheNextDay(component, targetDate);
                break;
            case "gestern":
                targetDate = targetDate.add(-1, "day");
                dayjs.assignSimilarDate(component, targetDate);
                dayjs.implySimilarTime(component, targetDate);
                break;
            case "vorgestern":
                targetDate = targetDate.add(-2, "day");
                dayjs.assignSimilarDate(component, targetDate);
                dayjs.implySimilarTime(component, targetDate);
                break;
            default:
                if (dateKeyword.match(/letzte\s*nacht/)) {
                    if (targetDate.hour() > 6) {
                        targetDate = targetDate.add(-1, "day");
                    }
                    dayjs.assignSimilarDate(component, targetDate);
                    component.imply("hour", 0);
                }
                break;
        }
        if (timeKeyword) {
            component = DECasualTimeParser_1$1.default.extractTimeComponents(component, timeKeyword);
        }
        return component;
    }
}
exports.default = DECasualDateParser;
});

var DEMonthNameLittleEndianParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


const constants_2 = constants$4;


const PATTERN = new RegExp("(?:am\\s*?)?" +
    "(?:den\\s*?)?" +
    `([0-9]{1,2})\\.` +
    `(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*` +
    `(${pattern.matchAnyPattern(constants$4.MONTH_DICTIONARY)})` +
    `(?:(?:-|/|,?\\s*)(${constants_2.YEAR_PATTERN}(?![^\\s]\\d)))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class DEMonthNameLittleEndianParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = constants$4.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = parseInt(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = parseInt(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
exports.default = DEMonthNameLittleEndianParser;
});

var de = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;


const SlashDateFormatParser_1$1 = __importDefault(SlashDateFormatParser_1);
const ISOFormatParser_1$1 = __importDefault(ISOFormatParser_1);
const DETimeExpressionParser_1$1 = __importDefault(DETimeExpressionParser_1);
const DEWeekdayParser_1$1 = __importDefault(DEWeekdayParser_1);
const DEMergeDateRangeRefiner_1$1 = __importDefault(DEMergeDateRangeRefiner_1);
const DEMergeDateTimeRefiner_1$1 = __importDefault(DEMergeDateTimeRefiner_1);
const DECasualDateParser_1$1 = __importDefault(DECasualDateParser_1);
const DECasualTimeParser_1$1 = __importDefault(DECasualTimeParser_1);
const DEMonthNameLittleEndianParser_1$1 = __importDefault(DEMonthNameLittleEndianParser_1);
exports.casual = new chrono$1.Chrono(createCasualConfiguration());
exports.strict = new chrono$1.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new DECasualTimeParser_1$1.default());
    option.parsers.unshift(new DECasualDateParser_1$1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = true) {
    return configurations.includeCommonConfiguration({
        parsers: [
            new ISOFormatParser_1$1.default(),
            new SlashDateFormatParser_1$1.default(littleEndian),
            new DETimeExpressionParser_1$1.default(),
            new DEMonthNameLittleEndianParser_1$1.default(),
            new DEWeekdayParser_1$1.default(),
        ],
        refiners: [new DEMergeDateRangeRefiner_1$1.default(), new DEMergeDateTimeRefiner_1$1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;
});

var FRCasualDateParser_1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(dayjs_min);



const references = __importStar(casualReferences);
class FRCasualDateParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        let targetDate = dayjs_1.default(context.refDate);
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "maintenant":
                return references.now(context.refDate);
            case "aujourd'hui":
                return references.today(context.refDate);
            case "hier":
                return references.yesterday(context.refDate);
            case "demain":
                return references.tomorrow(context.refDate);
            default:
                if (lowerText.match(/cette\s*nuit/)) {
                    dayjs.assignSimilarDate(component, targetDate);
                    component.imply("hour", 22);
                    component.imply("meridiem", dist.Meridiem.PM);
                }
                else if (lowerText.match(/la\s*veille/)) {
                    targetDate = targetDate.add(-1, "day");
                    dayjs.assignSimilarDate(component, targetDate);
                    component.imply("hour", 0);
                }
        }
        return component;
    }
}
exports.default = FRCasualDateParser;
});

var FRCasualTimeParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


class FRCasualTimeParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const suffixLower = match[2].toLowerCase();
        const component = context.createParsingComponents();
        switch (suffixLower) {
            case "après-midi":
            case "aprem":
                component.imply("hour", 14);
                component.imply("minute", 0);
                component.imply("meridiem", dist.Meridiem.PM);
                break;
            case "soir":
                component.imply("hour", 18);
                component.imply("minute", 0);
                component.imply("meridiem", dist.Meridiem.PM);
                break;
            case "matin":
                component.imply("hour", 8);
                component.imply("minute", 0);
                component.imply("meridiem", dist.Meridiem.AM);
                break;
            case "a midi":
                component.imply("hour", 12);
                component.imply("minute", 0);
                component.imply("meridiem", dist.Meridiem.AM);
                break;
            case "à minuit":
                component.imply("hour", 0);
                component.imply("meridiem", dist.Meridiem.AM);
                break;
        }
        return component;
    }
}
exports.default = FRCasualTimeParser;
});

var FRTimeExpressionParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class FRTimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:[àa])\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*";
    }
    extractPrimaryTimeComponents(context, match) {
        if (match[0].match(/^\s*\d{4}\s*$/)) {
            return null;
        }
        return super.extractPrimaryTimeComponents(context, match);
    }
}
exports.default = FRTimeExpressionParser;
});

var FRMergeDateTimeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateTimeRefiner_1 = __importDefault(AbstractMergeDateTimeRefiner);
class FRMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(T|à|a|vers|de|,|-)?\\s*$");
    }
}
exports.default = FRMergeDateTimeRefiner;
});

var FRMergeDateRangeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateRangeRefiner_1$1 = __importDefault(AbstractMergeDateRangeRefiner_1);
class FRMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1$1.default {
    patternBetween() {
        return /^\s*(à|a|-)\s*$/i;
    }
}
exports.default = FRMergeDateRangeRefiner;
});

var constants$3 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTimeUnits = exports.TIME_UNITS_PATTERN = exports.parseYear = exports.YEAR_PATTERN = exports.parseOrdinalNumberPattern = exports.ORDINAL_NUMBER_PATTERN = exports.parseNumberPattern = exports.NUMBER_PATTERN = exports.TIME_UNIT_DICTIONARY = exports.INTEGER_WORD_DICTIONARY = exports.MONTH_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;

exports.WEEKDAY_DICTIONARY = {
    "dimanche": 0,
    "dim": 0,
    "lundi": 1,
    "lun": 1,
    "mardi": 2,
    "mar": 2,
    "mercredi": 3,
    "mer": 3,
    "jeudi": 4,
    "jeu": 4,
    "vendredi": 5,
    "ven": 5,
    "samedi": 6,
    "sam": 6,
};
exports.MONTH_DICTIONARY = {
    "janvier": 1,
    "jan": 1,
    "jan.": 1,
    "février": 2,
    "fév": 2,
    "fév.": 2,
    "fevrier": 2,
    "fev": 2,
    "fev.": 2,
    "mars": 3,
    "mar": 3,
    "mar.": 3,
    "avril": 4,
    "avr": 4,
    "avr.": 4,
    "mai": 5,
    "juin": 6,
    "jun": 6,
    "juillet": 7,
    "juil": 7,
    "jul": 7,
    "jul.": 7,
    "août": 8,
    "aout": 8,
    "septembre": 9,
    "sep": 9,
    "sep.": 9,
    "sept": 9,
    "sept.": 9,
    "octobre": 10,
    "oct": 10,
    "oct.": 10,
    "novembre": 11,
    "nov": 11,
    "nov.": 11,
    "décembre": 12,
    "decembre": 12,
    "dec": 12,
    "dec.": 12,
};
exports.INTEGER_WORD_DICTIONARY = {
    "un": 1,
    "deux": 2,
    "trois": 3,
    "quatre": 4,
    "cinq": 5,
    "six": 6,
    "sept": 7,
    "huit": 8,
    "neuf": 9,
    "dix": 10,
    "onze": 11,
    "douze": 12,
    "treize": 13,
};
exports.TIME_UNIT_DICTIONARY = {
    "sec": "second",
    "seconde": "second",
    "secondes": "second",
    "min": "minute",
    "mins": "minute",
    "minute": "minute",
    "minutes": "minute",
    "h": "hour",
    "hr": "hour",
    "hrs": "hour",
    "heure": "hour",
    "heures": "hour",
    "jour": "d",
    "jours": "d",
    "semaine": "week",
    "semaines": "week",
    "mois": "month",
    "trimestre": "quarter",
    "trimestres": "quarter",
    "ans": "year",
    "année": "year",
    "années": "year",
};
exports.NUMBER_PATTERN = `(?:${pattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|une?|quelques?|demi-?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (exports.INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return exports.INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "une" || num === "un") {
        return 1;
    }
    else if (num.match(/quelques?/)) {
        return 3;
    }
    else if (num.match(/demi-?/)) {
        return 0.5;
    }
    return parseFloat(num);
}
exports.parseNumberPattern = parseNumberPattern;
exports.ORDINAL_NUMBER_PATTERN = `(?:[0-9]{1,2}(?:er)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    num = num.replace(/(?:er)$/i, "");
    return parseInt(num);
}
exports.parseOrdinalNumberPattern = parseOrdinalNumberPattern;
exports.YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:AC|AD|p\\.\\s*C(?:hr?)?\\.\\s*n\\.)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
    if (/AC/i.test(match)) {
        match = match.replace(/BC/i, "");
        return -parseInt(match);
    }
    if (/AD/i.test(match) || /C/i.test(match)) {
        match = match.replace(/[^\d]+/i, "");
        return parseInt(match);
    }
    let yearNumber = parseInt(match);
    if (yearNumber < 100) {
        if (yearNumber > 50) {
            yearNumber = yearNumber + 1900;
        }
        else {
            yearNumber = yearNumber + 2000;
        }
    }
    return yearNumber;
}
exports.parseYear = parseYear;
const SINGLE_TIME_UNIT_PATTERN = `(${exports.NUMBER_PATTERN})\\s{0,5}(${pattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
exports.TIME_UNITS_PATTERN = pattern.repeatedTimeunitPattern("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
exports.parseTimeUnits = parseTimeUnits;
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = exports.TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
});

var FRWeekdayParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:(?:ce)\\s*)?" +
    `(${pattern.matchAnyPattern(constants$3.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(dernier|prochain)\\s*)?" +
    "(?=\\W|\\d|$)", "i");
const WEEKDAY_GROUP = 1;
const POSTFIX_GROUP = 2;
class FRWeekdayParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants$3.WEEKDAY_DICTIONARY[dayOfWeek];
        if (offset === undefined) {
            return null;
        }
        let suffix = match[POSTFIX_GROUP];
        suffix = suffix || "";
        suffix = suffix.toLowerCase();
        let modifier = null;
        if (suffix == "dernier") {
            modifier = "last";
        }
        else if (suffix == "prochain") {
            modifier = "next";
        }
        const date = weeks.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports.default = FRWeekdayParser;
});

var FRSpecificTimeExpressionParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

const FIRST_REG_PATTERN = new RegExp("(^|\\s|T)" +
    "(?:(?:[àa])\\s*)?" +
    "(\\d{1,2})(?:h|:)?" +
    "(?:(\\d{1,2})(?:m|:)?)?" +
    "(?:(\\d{1,2})(?:s|:)?)?" +
    "(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?" +
    "(?=\\W|$)", "i");
const SECOND_REG_PATTERN = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*" +
    "(\\d{1,2})(?:h|:)?" +
    "(?:(\\d{1,2})(?:m|:)?)?" +
    "(?:(\\d{1,2})(?:s|:)?)?" +
    "(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?" +
    "(?=\\W|$)", "i");
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const AM_PM_HOUR_GROUP = 5;
class FRSpecificTimeExpressionParser {
    pattern(context) {
        return FIRST_REG_PATTERN;
    }
    extract(context, match) {
        const result = context.createParsingResult(match.index + match[1].length, match[0].substring(match[1].length));
        if (result.text.match(/^\d{4}$/)) {
            match.index += match[0].length;
            return null;
        }
        result.start = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), match);
        if (!result.start) {
            match.index += match[0].length;
            return null;
        }
        const remainingText = context.text.substring(match.index + match[0].length);
        const secondMatch = SECOND_REG_PATTERN.exec(remainingText);
        if (secondMatch) {
            result.end = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), secondMatch);
            if (result.end) {
                result.text += secondMatch[0];
            }
        }
        return result;
    }
    static extractTimeComponent(extractingComponents, match) {
        let hour = 0;
        let minute = 0;
        let meridiem = null;
        hour = parseInt(match[HOUR_GROUP]);
        if (match[MINUTE_GROUP] != null) {
            minute = parseInt(match[MINUTE_GROUP]);
        }
        if (minute >= 60 || hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = dist.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = dist.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                }
            }
            if (ampm == "p") {
                meridiem = dist.Meridiem.PM;
                if (hour != 12) {
                    hour += 12;
                }
            }
        }
        extractingComponents.assign("hour", hour);
        extractingComponents.assign("minute", minute);
        if (meridiem !== null) {
            extractingComponents.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                extractingComponents.imply("meridiem", dist.Meridiem.AM);
            }
            else {
                extractingComponents.imply("meridiem", dist.Meridiem.PM);
            }
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            extractingComponents.assign("second", second);
        }
        return extractingComponents;
    }
}
exports.default = FRSpecificTimeExpressionParser;
});

var FRMonthNameLittleEndianParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


const constants_2 = constants$3;
const constants_3 = constants$3;


const PATTERN = new RegExp("(?:on\\s*?)?" +
    `(${constants_3.ORDINAL_NUMBER_PATTERN})` +
    `(?:\\s*(?:au|\\-|\\–|jusqu'au?|\\s)\\s*(${constants_3.ORDINAL_NUMBER_PATTERN}))?` +
    `(?:-|/|\\s*(?:de)?\\s*)` +
    `(${pattern.matchAnyPattern(constants$3.MONTH_DICTIONARY)})` +
    `(?:(?:-|/|,?\\s*)(${constants_2.YEAR_PATTERN}(?![^\\s]\\d)))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class FRMonthNameLittleEndianParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = constants$3.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = constants_3.parseOrdinalNumberPattern(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = constants_3.parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
exports.default = FRMonthNameLittleEndianParser;
});

var FRTimeUnitAgoFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




class FRTimeUnitAgoFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    constructor() {
        super();
    }
    innerPattern() {
        return new RegExp(`il y a\\s*(${constants$3.TIME_UNITS_PATTERN})(?=(?:\\W|$))`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = constants$3.parseTimeUnits(match[1]);
        const outputTimeUnits = timeunits.reverseTimeUnits(timeUnits);
        return results.ParsingComponents.createRelativeFromRefDate(context.refDate, outputTimeUnits);
    }
}
exports.default = FRTimeUnitAgoFormatParser;
});

var FRTimeUnitWithinFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



class FRTimeUnitWithinFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp(`(?:dans|en|pour|pendant)\\s*(${constants$3.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = constants$3.parseTimeUnits(match[1]);
        return results.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports.default = FRTimeUnitWithinFormatParser;
});

var FRTimeUnitRelativeFormatParser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });





class FRTimeUnitAgoFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    constructor() {
        super();
    }
    innerPattern() {
        return new RegExp(`(?:les?|la|l'|du|des?)\\s*` +
            `(${constants$3.NUMBER_PATTERN})?` +
            `(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?` +
            `\\s*(${pattern.matchAnyPattern(constants$3.TIME_UNIT_DICTIONARY)})` +
            `(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?`, "i");
    }
    innerExtract(context, match) {
        const num = match[1] ? constants$3.parseNumberPattern(match[1]) : 1;
        const unit = constants$3.TIME_UNIT_DICTIONARY[match[3].toLowerCase()];
        let timeUnits = {};
        timeUnits[unit] = num;
        let modifier = match[2] || match[4] || "";
        modifier = modifier.toLowerCase();
        if (!modifier) {
            return;
        }
        if (/derni[eè]re?s?/.test(modifier) || /pass[ée]e?s?/.test(modifier) || /pr[ée]c[ée]dents?/.test(modifier)) {
            timeUnits = timeunits.reverseTimeUnits(timeUnits);
        }
        return results.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports.default = FRTimeUnitAgoFormatParser;
});

var fr = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;


const FRCasualDateParser_1$1 = __importDefault(FRCasualDateParser_1);
const FRCasualTimeParser_1$1 = __importDefault(FRCasualTimeParser_1);
const SlashDateFormatParser_1$1 = __importDefault(SlashDateFormatParser_1);
const FRTimeExpressionParser_1$1 = __importDefault(FRTimeExpressionParser_1);
const FRMergeDateTimeRefiner_1$1 = __importDefault(FRMergeDateTimeRefiner_1);
const FRMergeDateRangeRefiner_1$1 = __importDefault(FRMergeDateRangeRefiner_1);
const FRWeekdayParser_1$1 = __importDefault(FRWeekdayParser_1);
const FRSpecificTimeExpressionParser_1$1 = __importDefault(FRSpecificTimeExpressionParser_1);
const FRMonthNameLittleEndianParser_1$1 = __importDefault(FRMonthNameLittleEndianParser_1);
const FRTimeUnitAgoFormatParser_1$1 = __importDefault(FRTimeUnitAgoFormatParser_1);
const FRTimeUnitWithinFormatParser_1$1 = __importDefault(FRTimeUnitWithinFormatParser_1);
const FRTimeUnitRelativeFormatParser_1 = __importDefault(FRTimeUnitRelativeFormatParser);
exports.casual = new chrono$1.Chrono(createCasualConfiguration());
exports.strict = new chrono$1.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new FRCasualDateParser_1$1.default());
    option.parsers.unshift(new FRCasualTimeParser_1$1.default());
    option.parsers.unshift(new FRTimeUnitRelativeFormatParser_1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = true) {
    return configurations.includeCommonConfiguration({
        parsers: [
            new SlashDateFormatParser_1$1.default(littleEndian),
            new FRMonthNameLittleEndianParser_1$1.default(),
            new FRTimeExpressionParser_1$1.default(),
            new FRSpecificTimeExpressionParser_1$1.default(),
            new FRTimeUnitAgoFormatParser_1$1.default(),
            new FRTimeUnitWithinFormatParser_1$1.default(),
            new FRWeekdayParser_1$1.default(),
        ],
        refiners: [new FRMergeDateTimeRefiner_1$1.default(), new FRMergeDateRangeRefiner_1$1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;
});

var constants$2 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHankaku = void 0;
function toHankaku(text) {
    return String(text)
        .replace(/\u2019/g, "\u0027")
        .replace(/\u201D/g, "\u0022")
        .replace(/\u3000/g, "\u0020")
        .replace(/\uFFE5/g, "\u00A5")
        .replace(/[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g, alphaNum);
}
exports.toHankaku = toHankaku;
function alphaNum(token) {
    return String.fromCharCode(token.charCodeAt(0) - 65248);
}
});

var JPStandardParser_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });


const dayjs_1 = __importDefault(dayjs_min);
const PATTERN = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
const SPECIAL_YEAR_GROUP = 1;
const TYPICAL_YEAR_GROUP = 2;
const ERA_GROUP = 3;
const YEAR_NUMBER_GROUP = 4;
const MONTH_GROUP = 5;
const DAY_GROUP = 6;
class JPStandardParser {
    pattern() {
        return PATTERN;
    }
    extract(context, match) {
        const month = parseInt(constants$2.toHankaku(match[MONTH_GROUP]));
        const day = parseInt(constants$2.toHankaku(match[DAY_GROUP]));
        const components = context.createParsingComponents({
            day: day,
            month: month,
        });
        if (match[SPECIAL_YEAR_GROUP] && match[SPECIAL_YEAR_GROUP].match("同|今|本")) {
            const moment = dayjs_1.default(context.refDate);
            components.assign("year", moment.year());
        }
        if (match[TYPICAL_YEAR_GROUP]) {
            const yearNumText = match[YEAR_NUMBER_GROUP];
            let year = yearNumText == "元" ? 1 : parseInt(constants$2.toHankaku(yearNumText));
            if (match[ERA_GROUP] == "令和") {
                year += 2018;
            }
            else if (match[ERA_GROUP] == "平成") {
                year += 1988;
            }
            else if (match[ERA_GROUP] == "昭和") {
                year += 1925;
            }
            components.assign("year", year);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, day, month);
            components.imply("year", year);
        }
        return components;
    }
}
exports.default = JPStandardParser;
});

var JPMergeDateRangeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateRangeRefiner_1$1 = __importDefault(AbstractMergeDateRangeRefiner_1);
class JPMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1$1.default {
    patternBetween() {
        return /^\s*(から|ー|-)\s*$/i;
    }
}
exports.default = JPMergeDateRangeRefiner;
});

var JPCasualDateParser_1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(dayjs_min);

const references = __importStar(casualReferences);
const PATTERN = /今日|当日|昨日|明日|今夜|今夕|今晩|今朝/i;
class JPCasualDateParser {
    pattern() {
        return PATTERN;
    }
    extract(context, match) {
        const text = match[0];
        const date = dayjs_1.default(context.refDate);
        const components = context.createParsingComponents();
        switch (text) {
            case "昨日":
                return references.yesterday(context.refDate);
            case "明日":
                return references.tomorrow(context.refDate);
            case "今日":
            case "当日":
                return references.today(context.refDate);
        }
        if (text == "今夜" || text == "今夕" || text == "今晩") {
            components.imply("hour", 22);
            components.assign("meridiem", dist.Meridiem.PM);
        }
        else if (text.match("今朝")) {
            components.imply("hour", 6);
            components.assign("meridiem", dist.Meridiem.AM);
        }
        components.assign("day", date.date());
        components.assign("month", date.month() + 1);
        components.assign("year", date.year());
        return components;
    }
}
exports.default = JPCasualDateParser;
});

var ja = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;
const JPStandardParser_1$1 = __importDefault(JPStandardParser_1);
const JPMergeDateRangeRefiner_1$1 = __importDefault(JPMergeDateRangeRefiner_1);
const JPCasualDateParser_1$1 = __importDefault(JPCasualDateParser_1);

exports.casual = new chrono$1.Chrono(createCasualConfiguration());
exports.strict = new chrono$1.Chrono(createConfiguration());
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration() {
    const option = createConfiguration();
    option.parsers.unshift(new JPCasualDateParser_1$1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration() {
    return {
        parsers: [new JPStandardParser_1$1.default()],
        refiners: [new JPMergeDateRangeRefiner_1$1.default()],
    };
}
exports.createConfiguration = createConfiguration;
});

var constants$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseYear = exports.YEAR_PATTERN = exports.MONTH_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;
exports.WEEKDAY_DICTIONARY = {
    "domingo": 0,
    "dom": 0,
    "segunda": 1,
    "segunda-feira": 1,
    "seg": 1,
    "terça": 2,
    "terça-feira": 2,
    "ter": 2,
    "quarta": 3,
    "quarta-feira": 3,
    "qua": 3,
    "quinta": 4,
    "quinta-feira": 4,
    "qui": 4,
    "sexta": 5,
    "sexta-feira": 5,
    "sex": 5,
    "sábado": 6,
    "sabado": 6,
    "sab": 6,
};
exports.MONTH_DICTIONARY = {
    "janeiro": 1,
    "jan": 1,
    "jan.": 1,
    "fevereiro": 2,
    "fev": 2,
    "fev.": 2,
    "março": 3,
    "mar": 3,
    "mar.": 3,
    "abril": 4,
    "abr": 4,
    "abr.": 4,
    "maio": 5,
    "mai": 5,
    "mai.": 5,
    "junho": 6,
    "jun": 6,
    "jun.": 6,
    "julho": 7,
    "jul": 7,
    "jul.": 7,
    "agosto": 8,
    "ago": 8,
    "ago.": 8,
    "setembro": 9,
    "set": 9,
    "set.": 9,
    "outubro": 10,
    "out": 10,
    "out.": 10,
    "novembro": 11,
    "nov": 11,
    "nov.": 11,
    "dezembro": 12,
    "dez": 12,
    "dez.": 12,
};
exports.YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
function parseYear(match) {
    if (match.match(/^[0-9]{1,4}$/)) {
        let yearNumber = parseInt(match);
        if (yearNumber < 100) {
            if (yearNumber > 50) {
                yearNumber = yearNumber + 1900;
            }
            else {
                yearNumber = yearNumber + 2000;
            }
        }
        return yearNumber;
    }
    if (match.match(/a\.?\s*c\.?/i)) {
        match = match.replace(/a\.?\s*c\.?/i, "");
        return -parseInt(match);
    }
    return parseInt(match);
}
exports.parseYear = parseYear;
});

var PTWeekdayParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:(este|esta|passado|pr[oó]ximo)\\s*)?" +
    `(${pattern.matchAnyPattern(constants$1.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(este|esta|passado|pr[óo]ximo)\\s*semana)?" +
    "(?=\\W|\\d|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class PTWeekdayParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants$1.WEEKDAY_DICTIONARY[dayOfWeek];
        if (offset === undefined) {
            return null;
        }
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let norm = prefix || postfix || "";
        norm = norm.toLowerCase();
        let modifier = null;
        if (norm == "passado") {
            modifier = "this";
        }
        else if (norm == "próximo" || norm == "proximo") {
            modifier = "next";
        }
        else if (norm == "este") {
            modifier = "this";
        }
        const date = weeks.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports.default = PTWeekdayParser;
});

var PTTimeExpressionParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class PTTimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:ao?|às?|das|da|de|do)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:o)?|\\?)\\s*";
    }
}
exports.default = PTTimeExpressionParser;
});

var PTMergeDateTimeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateTimeRefiner_1 = __importDefault(AbstractMergeDateTimeRefiner);
class PTMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(?:,|à)?\\s*$");
    }
}
exports.default = PTMergeDateTimeRefiner;
});

var PTMergeDateRangeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateRangeRefiner_1$1 = __importDefault(AbstractMergeDateRangeRefiner_1);
class PTMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1$1.default {
    patternBetween() {
        return /^\s*(?:-)\s*$/i;
    }
}
exports.default = PTMergeDateRangeRefiner;
});

var PTMonthNameLittleEndianParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


const constants_2 = constants$1;


const PATTERN = new RegExp(`([0-9]{1,2})(?:º|ª|°)?` +
    "(?:\\s*(?:desde|de|\\-|\\–|ao?|\\s)\\s*([0-9]{1,2})(?:º|ª|°)?)?\\s*(?:de)?\\s*" +
    `(?:-|/|\\s*(?:de|,)?\\s*)` +
    `(${pattern.matchAnyPattern(constants$1.MONTH_DICTIONARY)})` +
    `(?:\\s*(?:de|,)?\\s*(${constants_2.YEAR_PATTERN}))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class PTMonthNameLittleEndianParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = constants$1.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = parseInt(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = parseInt(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
exports.default = PTMonthNameLittleEndianParser;
});

var PTCasualDateParser_1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });

const references = __importStar(casualReferences);
class PTCasualDateParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "agora":
                return references.now(context.refDate);
            case "hoje":
                return references.today(context.refDate);
            case "amanha":
            case "amanhã":
                return references.tomorrow(context.refDate);
            case "ontem":
                return references.yesterday(context.refDate);
        }
        return component;
    }
}
exports.default = PTCasualDateParser;
});

var PTCasualTimeParser_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });



const dayjs_2 = __importDefault(dayjs_min);
class PTCasualTimeParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(?:esta\s*)?(manha|manhã|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs_2.default(context.refDate);
        const component = context.createParsingComponents();
        switch (match[1].toLowerCase()) {
            case "tarde":
                component.imply("meridiem", dist.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "noite":
                component.imply("meridiem", dist.Meridiem.PM);
                component.imply("hour", 22);
                break;
            case "manha":
            case "manhã":
                component.imply("meridiem", dist.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "meia-noite":
                dayjs.assignTheNextDay(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;
            case "meio-dia":
                component.imply("meridiem", dist.Meridiem.AM);
                component.imply("hour", 12);
                break;
        }
        return component;
    }
}
exports.default = PTCasualTimeParser;
});

var pt = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;


const SlashDateFormatParser_1$1 = __importDefault(SlashDateFormatParser_1);
const PTWeekdayParser_1$1 = __importDefault(PTWeekdayParser_1);
const PTTimeExpressionParser_1$1 = __importDefault(PTTimeExpressionParser_1);
const PTMergeDateTimeRefiner_1$1 = __importDefault(PTMergeDateTimeRefiner_1);
const PTMergeDateRangeRefiner_1$1 = __importDefault(PTMergeDateRangeRefiner_1);
const PTMonthNameLittleEndianParser_1$1 = __importDefault(PTMonthNameLittleEndianParser_1);
const PTCasualDateParser_1$1 = __importDefault(PTCasualDateParser_1);
const PTCasualTimeParser_1$1 = __importDefault(PTCasualTimeParser_1);
exports.casual = new chrono$1.Chrono(createCasualConfiguration());
exports.strict = new chrono$1.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.push(new PTCasualDateParser_1$1.default());
    option.parsers.push(new PTCasualTimeParser_1$1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = true) {
    return configurations.includeCommonConfiguration({
        parsers: [
            new SlashDateFormatParser_1$1.default(littleEndian),
            new PTWeekdayParser_1$1.default(),
            new PTTimeExpressionParser_1$1.default(),
            new PTMonthNameLittleEndianParser_1$1.default(),
        ],
        refiners: [new PTMergeDateTimeRefiner_1$1.default(), new PTMergeDateRangeRefiner_1$1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;
});

var NLMergeDateRangeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateRangeRefiner_1$1 = __importDefault(AbstractMergeDateRangeRefiner_1);
class NLMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1$1.default {
    patternBetween() {
        return /^\s*(tot|-)\s*$/i;
    }
}
exports.default = NLMergeDateRangeRefiner;
});

var NLMergeDateTimeRefiner_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMergeDateTimeRefiner_1 = __importDefault(AbstractMergeDateTimeRefiner);
class NLMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(om|na|voor|in de|,|-)?\\s*$");
    }
}
exports.default = NLMergeDateTimeRefiner;
});

var NLCasualDateParser_1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });

const references = __importStar(casualReferences);
class NLCasualDateParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "nu":
                return references.now(context.refDate);
            case "vandaag":
                return references.today(context.refDate);
            case "morgen":
            case "morgend":
                return references.tomorrow(context.refDate);
            case "gisteren":
                return references.yesterday(context.refDate);
        }
        return component;
    }
}
exports.default = NLCasualDateParser;
});

var NLCasualTimeParser_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });


const dayjs_1 = __importDefault(dayjs_min);

const DAY_GROUP = 1;
const MOMENT_GROUP = 2;
class NLCasualTimeParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs_1.default(context.refDate);
        const component = context.createParsingComponents();
        if (match[DAY_GROUP] === "deze") {
            component.assign("day", context.refDate.getDate());
            component.assign("month", context.refDate.getMonth() + 1);
            component.assign("year", context.refDate.getFullYear());
        }
        switch (match[MOMENT_GROUP].toLowerCase()) {
            case "namiddag":
            case "'s namiddags":
                component.imply("meridiem", dist.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "avond":
            case "'s avonds'":
                component.imply("meridiem", dist.Meridiem.PM);
                component.imply("hour", 20);
                break;
            case "middernacht":
                dayjs.assignTheNextDay(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;
            case "ochtend":
            case "'s ochtends":
                component.imply("meridiem", dist.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "middag":
            case "'s middags":
                component.imply("meridiem", dist.Meridiem.AM);
                component.imply("hour", 12);
                break;
        }
        return component;
    }
}
exports.default = NLCasualTimeParser;
});

var constants = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTimeUnits = exports.TIME_UNITS_PATTERN = exports.parseYear = exports.YEAR_PATTERN = exports.parseOrdinalNumberPattern = exports.ORDINAL_NUMBER_PATTERN = exports.parseNumberPattern = exports.NUMBER_PATTERN = exports.TIME_UNIT_DICTIONARY = exports.ORDINAL_WORD_DICTIONARY = exports.INTEGER_WORD_DICTIONARY = exports.MONTH_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;


exports.WEEKDAY_DICTIONARY = {
    zondag: 0,
    zon: 0,
    "zon.": 0,
    zo: 0,
    "zo.": 0,
    maandag: 1,
    ma: 1,
    "ma.": 1,
    dinsdag: 2,
    din: 2,
    "din.": 2,
    di: 2,
    "di.": 2,
    woensdag: 3,
    woe: 3,
    "woe.": 3,
    wo: 3,
    "wo.": 3,
    donderdag: 4,
    dond: 4,
    "dond.": 4,
    do: 4,
    "do.": 4,
    vrijdag: 5,
    vrij: 5,
    "vrij.": 5,
    vr: 5,
    "vr.": 5,
    zaterdag: 6,
    zat: 6,
    "zat.": 6,
    "za": 6,
    "za.": 6,
};
exports.MONTH_DICTIONARY = {
    januari: 1,
    jan: 1,
    "jan.": 1,
    februari: 2,
    feb: 2,
    "feb.": 2,
    maart: 3,
    mar: 3,
    "mar.": 3,
    april: 4,
    apr: 4,
    "apr.": 4,
    mei: 5,
    juni: 6,
    jun: 6,
    "jun.": 6,
    juli: 7,
    jul: 7,
    "jul.": 7,
    augustus: 8,
    aug: 8,
    "aug.": 8,
    september: 9,
    sep: 9,
    "sep.": 9,
    sept: 9,
    "sept.": 9,
    oktober: 10,
    okt: 10,
    "okt.": 10,
    november: 11,
    nov: 11,
    "nov.": 11,
    december: 12,
    dec: 12,
    "dec.": 12,
};
exports.INTEGER_WORD_DICTIONARY = {
    een: 1,
    twee: 2,
    drie: 3,
    vier: 4,
    vijf: 5,
    zes: 6,
    zeven: 7,
    acht: 8,
    negen: 9,
    tien: 10,
    elf: 11,
    twaalf: 12,
};
exports.ORDINAL_WORD_DICTIONARY = {
    eerste: 1,
    tweede: 2,
    derde: 3,
    vierde: 4,
    vijfde: 5,
    zesde: 6,
    zevende: 7,
    achtste: 8,
    negende: 9,
    tiende: 10,
    elfde: 11,
    twaalfde: 12,
    dertiende: 13,
    veertiende: 14,
    vijftiende: 15,
    zestiende: 16,
    zeventiende: 17,
    achttiende: 18,
    negentiende: 19,
    twintigste: 20,
    "eenentwintigste": 21,
    "tweeëntwintigste": 22,
    "drieentwintigste": 23,
    "vierentwintigste": 24,
    "vijfentwintigste": 25,
    "zesentwintigste": 26,
    "zevenentwintigste": 27,
    "achtentwintig": 28,
    "negenentwintig": 29,
    "dertigste": 30,
    "eenendertigste": 31,
};
exports.TIME_UNIT_DICTIONARY = {
    sec: "second",
    second: "second",
    seconden: "second",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minuten: "minute",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    uur: "hour",
    uren: "hour",
    dag: "d",
    dagen: "d",
    week: "week",
    weken: "week",
    maand: "month",
    maanden: "month",
    jaar: "year",
    jr: "year",
    jaren: "year",
};
exports.NUMBER_PATTERN = `(?:${pattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|een?|halve?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (exports.INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return exports.INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "een") {
        return 1;
    }
    else if (num.match(/halve?/)) {
        return 0.5;
    }
    return parseFloat(num);
}
exports.parseNumberPattern = parseNumberPattern;
exports.ORDINAL_NUMBER_PATTERN = `(?:${pattern.matchAnyPattern(exports.ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:ste|de)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    if (exports.ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return exports.ORDINAL_WORD_DICTIONARY[num];
    }
    num = num.replace(/(?:ste|de)$/i, "");
    return parseInt(num);
}
exports.parseOrdinalNumberPattern = parseOrdinalNumberPattern;
exports.YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
    if (/voor Christus/i.test(match)) {
        match = match.replace(/voor Christus/i, "");
        return -parseInt(match);
    }
    if (/na Christus/i.test(match)) {
        match = match.replace(/na Christus/i, "");
        return parseInt(match);
    }
    const rawYearNumber = parseInt(match);
    return years.findMostLikelyADYear(rawYearNumber);
}
exports.parseYear = parseYear;
const SINGLE_TIME_UNIT_PATTERN = `(${exports.NUMBER_PATTERN})\\s{0,5}(${pattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
exports.TIME_UNITS_PATTERN = pattern.repeatedTimeunitPattern(`(?:(?:binnen|in)\\s*)?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
exports.parseTimeUnits = parseTimeUnits;
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = exports.TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
});

var NLTimeUnitWithinFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



class NLTimeUnitWithinFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp(`(?:binnen|in|binnen de|voor)\\s*` + "(" + constants.TIME_UNITS_PATTERN + ")" + `(?=\\W|$)`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = constants.parseTimeUnits(match[1]);
        return results.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports.default = NLTimeUnitWithinFormatParser;
});

var NLWeekdayParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:op\\s*?)?" +
    "(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?" +
    `(${pattern.matchAnyPattern(constants.WEEKDAY_DICTIONARY)})` +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class NLWeekdayParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord == "vorige") {
            modifier = "last";
        }
        else if (modifierWord == "volgende") {
            modifier = "next";
        }
        else if (modifierWord == "deze") {
            modifier = "this";
        }
        const date = weeks.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports.default = NLWeekdayParser;
});

var NLMonthNameMiddleEndianParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


const constants_2 = constants;
const constants_3 = constants;


const PATTERN = new RegExp("(?:on\\s*?)?" +
    `(${constants_2.ORDINAL_NUMBER_PATTERN})` +
    "(?:\\s*" +
    "(?:tot|\\-|\\–|until|through|till|\\s)\\s*" +
    `(${constants_2.ORDINAL_NUMBER_PATTERN})` +
    ")?" +
    "(?:-|/|\\s*(?:of)?\\s*)" +
    "(" +
    pattern.matchAnyPattern(constants.MONTH_DICTIONARY) +
    ")" +
    "(?:" +
    "(?:-|/|,?\\s*)" +
    `(${constants_3.YEAR_PATTERN}(?![^\\s]\\d))` +
    ")?" +
    "(?=\\W|$)", "i");
const MONTH_NAME_GROUP = 3;
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const YEAR_GROUP = 4;
class NLMonthNameMiddleEndianParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = constants.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = constants_2.parseOrdinalNumberPattern(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        const components = context.createParsingComponents({
            day: day,
            month: month,
        });
        if (match[YEAR_GROUP]) {
            const year = constants_3.parseYear(match[YEAR_GROUP]);
            components.assign("year", year);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, day, month);
            components.imply("year", year);
        }
        if (!match[DATE_TO_GROUP]) {
            return components;
        }
        const endDate = constants_2.parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
        const result = context.createParsingResult(match.index, match[0]);
        result.start = components;
        result.end = components.clone();
        result.end.assign("day", endDate);
        return result;
    }
}
exports.default = NLMonthNameMiddleEndianParser;
});

var NLMonthNameParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



const constants_2 = constants;

const PATTERN = new RegExp(`(${pattern.matchAnyPattern(constants.MONTH_DICTIONARY)})` +
    `\\s*` +
    `(?:` +
    `[,-]?\\s*(${constants_2.YEAR_PATTERN})?` +
    ")?" +
    "(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
const MONTH_NAME_GROUP = 1;
const YEAR_GROUP = 2;
class NLMonthNameParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const components = context.createParsingComponents();
        components.imply("day", 1);
        const monthName = match[MONTH_NAME_GROUP];
        const month = constants.MONTH_DICTIONARY[monthName.toLowerCase()];
        components.assign("month", month);
        if (match[YEAR_GROUP]) {
            const year = constants_2.parseYear(match[YEAR_GROUP]);
            components.assign("year", year);
        }
        else {
            const year = years.findYearClosestToRef(context.refDate, 1, month);
            components.imply("year", year);
        }
        return components;
    }
}
exports.default = NLMonthNameParser;
});

var NLSlashMonthFormatParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

const PATTERN = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})" + "", "i");
const MONTH_GROUP = 1;
const YEAR_GROUP = 2;
class NLSlashMonthFormatParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const year = parseInt(match[YEAR_GROUP]);
        const month = parseInt(match[MONTH_GROUP]);
        return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
    }
}
exports.default = NLSlashMonthFormatParser;
});

var NLTimeExpressionParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class NLTimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:om)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|om|\\?)\\s*";
    }
    extractPrimaryTimeComponents(context, match) {
        if (match[0].match(/^\s*\d{4}\s*$/)) {
            return null;
        }
        return super.extractPrimaryTimeComponents(context, match);
    }
}
exports.default = NLTimeExpressionParser;
});

var NLCasualYearMonthDayParser_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



const PATTERN = new RegExp(`([0-9]{4})[\\.\\/\\s]` +
    `(?:(${pattern.matchAnyPattern(constants.MONTH_DICTIONARY)})|([0-9]{1,2}))[\\.\\/\\s]` +
    `([0-9]{1,2})` +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const MONTH_NUMBER_GROUP = 3;
const DATE_NUMBER_GROUP = 4;
class NLCasualYearMonthDayParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = match[MONTH_NUMBER_GROUP]
            ? parseInt(match[MONTH_NUMBER_GROUP])
            : constants.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        if (month < 1 || month > 12) {
            return null;
        }
        const year = parseInt(match[YEAR_NUMBER_GROUP]);
        const day = parseInt(match[DATE_NUMBER_GROUP]);
        return {
            day: day,
            month: month,
            year: year,
        };
    }
}
exports.default = NLCasualYearMonthDayParser;
});

var NLCasualDateTimeParser_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });



const dayjs_2 = __importDefault(dayjs_min);
const DATE_GROUP = 1;
const TIME_OF_DAY_GROUP = 2;
class NLCasualDateTimeParser extends AbstractParserWithWordBoundary.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const dateText = match[DATE_GROUP].toLowerCase();
        const timeText = match[TIME_OF_DAY_GROUP].toLowerCase();
        const component = context.createParsingComponents();
        const targetDate = dayjs_2.default(context.refDate);
        switch (dateText) {
            case "gisteren":
                dayjs.assignSimilarDate(component, targetDate.add(-1, "day"));
                break;
            case "van":
                dayjs.assignSimilarDate(component, targetDate);
                break;
            case "morgen":
                dayjs.assignTheNextDay(component, targetDate);
                break;
        }
        switch (timeText) {
            case "ochtend":
                component.imply("meridiem", dist.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "middag":
                component.imply("meridiem", dist.Meridiem.AM);
                component.imply("hour", 12);
                break;
            case "namiddag":
                component.imply("meridiem", dist.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "avond":
                component.imply("meridiem", dist.Meridiem.PM);
                component.imply("hour", 20);
                break;
        }
        return component;
    }
}
exports.default = NLCasualDateTimeParser;
});

var nl = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;


const NLMergeDateRangeRefiner_1$1 = __importDefault(NLMergeDateRangeRefiner_1);
const NLMergeDateTimeRefiner_1$1 = __importDefault(NLMergeDateTimeRefiner_1);
const NLCasualDateParser_1$1 = __importDefault(NLCasualDateParser_1);
const NLCasualTimeParser_1$1 = __importDefault(NLCasualTimeParser_1);
const SlashDateFormatParser_1$1 = __importDefault(SlashDateFormatParser_1);
const NLTimeUnitWithinFormatParser_1$1 = __importDefault(NLTimeUnitWithinFormatParser_1);
const NLWeekdayParser_1$1 = __importDefault(NLWeekdayParser_1);
const NLMonthNameMiddleEndianParser_1$1 = __importDefault(NLMonthNameMiddleEndianParser_1);
const NLMonthNameParser_1$1 = __importDefault(NLMonthNameParser_1);
const NLSlashMonthFormatParser_1$1 = __importDefault(NLSlashMonthFormatParser_1);
const NLTimeExpressionParser_1$1 = __importDefault(NLTimeExpressionParser_1);
const NLCasualYearMonthDayParser_1$1 = __importDefault(NLCasualYearMonthDayParser_1);
const NLCasualDateTimeParser_1$1 = __importDefault(NLCasualDateTimeParser_1);
exports.casual = new chrono$1.Chrono(createCasualConfiguration());
exports.strict = new chrono$1.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new NLCasualDateParser_1$1.default());
    option.parsers.unshift(new NLCasualTimeParser_1$1.default());
    option.parsers.unshift(new NLCasualDateTimeParser_1$1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = true) {
    return configurations.includeCommonConfiguration({
        parsers: [
            new SlashDateFormatParser_1$1.default(littleEndian),
            new NLMonthNameMiddleEndianParser_1$1.default(),
            new NLMonthNameParser_1$1.default(),
            new NLTimeExpressionParser_1$1.default(),
            new NLTimeUnitWithinFormatParser_1$1.default(),
            new NLSlashMonthFormatParser_1$1.default(),
            new NLWeekdayParser_1$1.default(),
            new NLCasualYearMonthDayParser_1$1.default(),
        ],
        refiners: [new NLMergeDateTimeRefiner_1$1.default(), new NLMergeDateRangeRefiner_1$1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;
});

var dist = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = exports.parse = exports.casual = exports.strict = exports.nl = exports.pt = exports.ja = exports.fr = exports.de = exports.Meridiem = exports.Chrono = exports.en = void 0;
const en$1 = __importStar(en);
exports.en = en$1;

Object.defineProperty(exports, "Chrono", { enumerable: true, get: function () { return chrono$1.Chrono; } });
(function (Meridiem) {
    Meridiem[Meridiem["AM"] = 0] = "AM";
    Meridiem[Meridiem["PM"] = 1] = "PM";
})(exports.Meridiem || (exports.Meridiem = {}));
const de$1 = __importStar(de);
exports.de = de$1;
const fr$1 = __importStar(fr);
exports.fr = fr$1;
const ja$1 = __importStar(ja);
exports.ja = ja$1;
const pt$1 = __importStar(pt);
exports.pt = pt$1;
const nl$1 = __importStar(nl);
exports.nl = nl$1;
exports.strict = en$1.strict;
exports.casual = en$1.casual;
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
});

var chrono = /*@__PURE__*/getDefaultExportFromCjs(dist);

var getLastDayOfMonth = function (y, m) {
    return new Date(y, m, 0).getDate();
};
var custom = chrono.casual.clone();
custom.parsers.push({
    pattern: function () {
        return /\bChristmas\b/i;
    },
    extract: function (context, match) {
        return {
            day: 25,
            month: 12,
        };
    },
});
var NaturalLanguageDates = /** @class */ (function (_super) {
    __extends(NaturalLanguageDates, _super);
    function NaturalLanguageDates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NaturalLanguageDates.prototype.onInit = function () { };
    NaturalLanguageDates.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Loading natural language date parser plugin");
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addCommand({
                            id: "nlp-dates",
                            name: "Parse natural language date",
                            callback: function () { return _this.onTrigger("replace"); },
                            hotkeys: [],
                        });
                        this.addCommand({
                            id: "nlp-dates-link",
                            name: "Parse natural language date (as link)",
                            callback: function () { return _this.onTrigger("link"); },
                            hotkeys: [],
                        });
                        this.addCommand({
                            id: "nlp-date-clean",
                            name: "Parse natural language date (as plain text)",
                            callback: function () { return _this.onTrigger("clean"); },
                            hotkeys: [],
                        });
                        this.addCommand({
                            id: "nlp-parse-time",
                            name: "Parse natural language time",
                            callback: function () { return _this.onTrigger("time"); },
                            hotkeys: [],
                        });
                        this.addCommand({
                            id: "nlp-now",
                            name: "Insert the current date and time",
                            callback: function () { return _this.getNowCommand(); },
                            hotkeys: [],
                        });
                        this.addCommand({
                            id: "nlp-today",
                            name: "Insert the current date",
                            callback: function () { return _this.getDateCommand(); },
                            hotkeys: [],
                        });
                        this.addCommand({
                            id: "nlp-time",
                            name: "Insert the current time",
                            callback: function () { return _this.getTimeCommand(); },
                            hotkeys: [],
                        });
                        this.addCommand({
                            id: "nlp-picker",
                            name: "Date picker",
                            checkCallback: function (checking) {
                                var leaf = _this.app.workspace.activeLeaf;
                                if (leaf) {
                                    if (!checking) {
                                        new ParseMomentModal(_this.app, _this).open();
                                    }
                                    return true;
                                }
                                return false;
                            },
                            hotkeys: [],
                        });
                        this.addSettingTab(new NLDSettingsTab(this.app, this));
                        this.registerObsidianProtocolHandler("nldates", this.actionHandler.bind(this));
                        return [2 /*return*/];
                }
            });
        });
    };
    NaturalLanguageDates.prototype.onunload = function () {
        console.log("Unloading natural language date parser plugin");
    };
    NaturalLanguageDates.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    NaturalLanguageDates.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NaturalLanguageDates.prototype.getParsedDate = function (selectedText) {
        var nextDateMatch = selectedText.match(/next\s([\w]+)/i);
        var lastDayOfMatch = selectedText.match(/(last day of|end of)\s*([^\n\r]*)/i);
        var midOf = selectedText.match(/mid\s([\w]+)/i);
        if (nextDateMatch && nextDateMatch[1] === "week") {
            return custom.parseDate("next " + this.settings.weekStart, new Date(), {
                forwardDate: true,
            });
        }
        else if (nextDateMatch && nextDateMatch[1] === "month") {
            var thisMonth = custom.parseDate("this month", new Date(), {
                forwardDate: true,
            });
            return custom.parseDate(selectedText, thisMonth, {
                forwardDate: true,
            });
        }
        else if (nextDateMatch && nextDateMatch[1] === "year") {
            var thisYear = custom.parseDate("this year", new Date(), {
                forwardDate: true,
            });
            return custom.parseDate(selectedText, thisYear, {
                forwardDate: true,
            });
        }
        else if (lastDayOfMatch) {
            var tempDate = custom.parse(lastDayOfMatch[2]);
            var year = tempDate[0].start.get("year"), month = tempDate[0].start.get("month");
            var lastDay = getLastDayOfMonth(year, month);
            return custom.parseDate(year + "-" + month + "-" + lastDay, new Date(), {
                forwardDate: true,
            });
        }
        else if (midOf) {
            return custom.parseDate(midOf[1] + " 15th", new Date(), {
                forwardDate: true,
            });
        }
        else {
            return custom.parseDate(selectedText, new Date(), {});
        }
    };
    NaturalLanguageDates.prototype.getSelectedText = function (editor) {
        if (editor.somethingSelected()) {
            return editor.getSelection();
        }
        else {
            var wordBoundaries = this.getWordBoundaries(editor);
            editor.getDoc().setSelection(wordBoundaries.start, wordBoundaries.end);
            return editor.getSelection();
        }
    };
    NaturalLanguageDates.prototype.getWordBoundaries = function (editor) {
        var cursor = editor.getCursor();
        var line = cursor.line;
        var word = editor.findWordAt({
            line: line,
            ch: cursor.ch
        });
        var wordStart = word.anchor.ch;
        var wordEnd = word.head.ch;
        return {
            start: {
                line: line,
                ch: wordStart
            },
            end: {
                line: line,
                ch: wordEnd
            },
        };
    };
    NaturalLanguageDates.prototype.getMoment = function (date) {
        return window.moment(date);
    };
    NaturalLanguageDates.prototype.getFormattedDate = function (date) {
        var formattedDate = this.getMoment(date).format(this.settings.format);
        return formattedDate;
    };
    NaturalLanguageDates.prototype.getFormattedTime = function (date) {
        var formattedTime = this.getMoment(date).format(this.settings.timeFormat);
        return formattedTime;
    };
    /*
    @param dateString: A string that contains a date in natural language, e.g. today, tomorrow, next week
    @returns NLDResult: An object containing the date, a cloned Moment and the formatted string.
  
    */
    NaturalLanguageDates.prototype.parseDate = function (dateString) {
        var date = this.getParsedDate(dateString);
        var formattedDate = this.getFormattedDate(date);
        if (formattedDate === "Invalid date") {
            console.debug("Input date " + dateString + " can't be parsed by nldates");
        }
        var result = {
            formattedString: formattedDate,
            date: date,
            moment: this.getMoment(date),
        };
        return result;
    };
    NaturalLanguageDates.prototype.parseTime = function (dateString) {
        var date = this.getParsedDate(dateString);
        var formattedTime = this.getFormattedTime(date);
        if (formattedTime === "Invalid date") {
            console.debug("Input date " + dateString + " can't be parsed by nldates");
        }
        var result = {
            formattedString: formattedTime,
            date: date,
            moment: this.getMoment(date),
        };
        return result;
    };
    NaturalLanguageDates.prototype.onTrigger = function (mode) {
        var activeLeaf = this.app.workspace.activeLeaf;
        var editor = activeLeaf.view.sourceMode.cmEditor;
        var cursor = editor.getCursor();
        var selectedText = this.getSelectedText(editor);
        var date = this.parseDate(selectedText);
        if (!date.moment.isValid()) {
            editor.setCursor({
                line: cursor.line,
                ch: cursor.ch
            });
        }
        else {
            //mode == "replace"
            var newStr = "[[" + date.formattedString + "]]";
            if (mode == "link") {
                newStr = "[" + selectedText + "](" + date.formattedString + ")";
            }
            else if (mode == "clean") {
                newStr = "" + date.formattedString;
            }
            else if (mode == "time") {
                var time = this.parseTime(selectedText);
                newStr = "" + time.formattedString;
            }
            editor.replaceSelection(newStr);
            this.adjustCursor(editor, cursor, newStr, selectedText);
            editor.focus();
        }
    };
    NaturalLanguageDates.prototype.adjustCursor = function (editor, cursor, newStr, oldStr) {
        var cursorOffset = newStr.length - oldStr.length;
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch + cursorOffset
        });
    };
    NaturalLanguageDates.prototype.getNowCommand = function () {
        var activeLeaf = this.app.workspace.activeLeaf;
        var editor = activeLeaf.view.sourceMode.cmEditor;
        editor.replaceSelection(this.getMoment(new Date()).format("" + this.settings.format + this.settings.separator + this.settings.timeFormat));
    };
    NaturalLanguageDates.prototype.getDateCommand = function () {
        var activeLeaf = this.app.workspace.activeLeaf;
        var editor = activeLeaf.view.sourceMode.cmEditor;
        editor.replaceSelection(this.getMoment(new Date()).format(this.settings.format));
    };
    NaturalLanguageDates.prototype.getTimeCommand = function () {
        var activeLeaf = this.app.workspace.activeLeaf;
        var editor = activeLeaf.view.sourceMode.cmEditor;
        editor.replaceSelection(this.getMoment(new Date()).format(this.settings.timeFormat));
    };
    NaturalLanguageDates.prototype.insertDateString = function (dateString, editor, cursor) {
        editor.replaceSelection(dateString);
    };
    NaturalLanguageDates.prototype.getDateRange = function () { };
    NaturalLanguageDates.prototype.actionHandler = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var date, workspace, dailyNote, leaf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = this.parseDate(params.day);
                        console.log(date);
                        workspace = this.app.workspace;
                        if (!date.moment.isValid()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getDailyNote(date.moment)];
                    case 1:
                        dailyNote = _a.sent();
                        leaf = workspace.splitActiveLeaf();
                        return [4 /*yield*/, leaf.openFile(dailyNote)];
                    case 2:
                        _a.sent();
                        workspace.setActiveLeaf(leaf);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NaturalLanguageDates.prototype.getDailyNote = function (date) {
        // Borrowed from the Slated plugin:
        // https://github.com/tgrosinger/slated-obsidian/blob/main/src/vault.ts#L17
        var desiredNote = main.getDailyNote(date, main.getAllDailyNotes());
        if (desiredNote) {
            console.log("Note exists");
            return Promise.resolve(desiredNote);
        }
        else {
            console.log("Creating daily note");
            return Promise.resolve(main.createDailyNote(date));
        }
    };
    return NaturalLanguageDates;
}(obsidian.Plugin));
var DEFAULT_SETTINGS = {
    format: "YYYY-MM-DD",
    timeFormat: "HH:mm",
    separator: " ",
    weekStart: "Monday",
    modalToggleTime: false,
    modalToggleLink: false,
    modalMomentFormat: "YYYY-MM-DD HH:mm",
};
var NLDSettingsTab = /** @class */ (function (_super) {
    __extends(NLDSettingsTab, _super);
    function NLDSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    NLDSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        new obsidian.Setting(containerEl)
            .setName("Date format")
            .setDesc("Output format for parsed dates")
            .addMomentFormat(function (text) {
            return text
                .setDefaultFormat("YYYY-MM-DD")
                .setValue(_this.plugin.settings.format)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (value === "") {
                                this.plugin.settings.format = "YYYY-MM-DD";
                            }
                            else {
                                this.plugin.settings.format = value.trim();
                            }
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Week starts on")
            .setDesc("Which day to consider as the start of the week")
            .addDropdown(function (day) {
            return day
                .addOption("Monday", "Monday")
                .addOption("Sunday", "Sunday")
                .setValue(_this.plugin.settings.weekStart)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.weekStart = value.trim();
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        containerEl.createEl("h3", {
            text: "Hotkey formatting settings"
        });
        new obsidian.Setting(containerEl)
            .setName("Time format")
            .setDesc("Format for the hotkeys that include the current time")
            .addMomentFormat(function (text) {
            return text
                .setDefaultFormat("HH:mm")
                .setValue(_this.plugin.settings.timeFormat)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (value === "") {
                                this.plugin.settings.timeFormat = "HH:mm";
                            }
                            else {
                                this.plugin.settings.timeFormat = value.trim();
                            }
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Separator")
            .setDesc("Separator between date and time for entries that have both")
            .addText(function (text) {
            return text
                .setPlaceholder("Separator is empty")
                .setValue(_this.plugin.settings.separator)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.separator = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return NLDSettingsTab;
}(obsidian.PluginSettingTab));
var ParseMomentModal = /** @class */ (function (_super) {
    __extends(ParseMomentModal, _super);
    function ParseMomentModal(app, plugin) {
        var _this = _super.call(this, app) || this;
        _this.parsedDateString = "";
        _this.plugin = plugin;
        _this.activeView = _this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!_this.activeView)
            return _this;
        _this.activeEditor = _this.activeView.sourceMode.cmEditor;
        _this.activeCursor = _this.activeEditor.getCursor();
        return _this;
    }
    ParseMomentModal.prototype.onOpen = function () {
        var _this = this;
        var contentEl = this.contentEl;
        contentEl.appendText("Date: ");
        var inputDateField = new obsidian.TextComponent(contentEl).setPlaceholder("Date");
        contentEl.createEl("br");
        contentEl.appendText("Format: ");
        var momentFormatField = new obsidian.MomentFormatComponent(contentEl)
            .setDefaultFormat("YYYY-MM-DD HH:mm")
            .setValue(this.plugin.settings.modalMomentFormat)
            .onChange(function (value) {
            _this.plugin.settings.modalMomentFormat = value ? value : "YYYY-MM-DD HH:mm";
            _this.plugin.saveSettings();
        });
        contentEl.createEl("br");
        contentEl.appendText("Add as link?");
        var toggleLink = new obsidian.ToggleComponent(contentEl)
            .setValue(this.plugin.settings.modalToggleLink)
            .onChange(function (value) {
            _this.plugin.settings.modalToggleLink = value;
            _this.plugin.saveSettings();
        });
        contentEl.createEl("br");
        new obsidian.ButtonComponent(contentEl)
            .setButtonText("Insert date")
            .onClick(function () {
            var parsedDate = _this.plugin.parseDate(inputDateField.getValue());
            _this.parsedDateString = parsedDate.moment.format(momentFormatField.getValue());
            if (!parsedDate.moment.isValid())
                _this.parsedDateString = "";
            if (toggleLink.getValue() && _this.parsedDateString !== "")
                _this.parsedDateString = "[[" + _this.parsedDateString + "]]";
            _this.activeEditor.focus();
            _this.activeEditor.setCursor(_this.activeCursor);
            _this.plugin.insertDateString(_this.parsedDateString, _this.activeEditor, _this.activeCursor);
            _this.close();
        });
        inputDateField.inputEl.focus();
    };
    ParseMomentModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    return ParseMomentModal;
}(obsidian.Modal));

module.exports = NaturalLanguageDates;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9vYnNpZGlhbi1kYWlseS1ub3Rlcy1pbnRlcmZhY2UvZGlzdC9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvdXRpbHMvcGF0dGVybi5qcyIsIm5vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9jYWxjdWxhdGlvbi95ZWFycy5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZW4vY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9xdWFydGVyT2ZZZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvdXRpbHMvZGF5anMuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9yZXN1bHRzLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3BhcnNlcnMvRU5DYXN1YWxZZWFyTW9udGhEYXlQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3BhcnNlcnMvRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVFeHByZXNzaW9uUGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvdXRpbHMvdGltZXVuaXRzLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvY29tbW9uL2Fic3RyYWN0UmVmaW5lcnMuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvY2FsY3VsYXRpb24vbWVyZ2luZ0NhbGN1bGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VEYXRlVGltZVJlZmluZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9jb21tb24vcmVmaW5lcnMvRm9yd2FyZERhdGVSZWZpbmVyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvY29tbW9uL3JlZmluZXJzL1VubGlrZWx5Rm9ybWF0RmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvY29tbW9uL3BhcnNlcnMvSVNPRm9ybWF0UGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvY29tbW9uL3JlZmluZXJzL01lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9jb25maWd1cmF0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2NvbW1vbi9jYXN1YWxSZWZlcmVuY2VzLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9lbi9wYXJzZXJzL0VOQ2FzdWFsRGF0ZVBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZW4vcGFyc2Vycy9FTkNhc3VhbFRpbWVQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9jYWxjdWxhdGlvbi93ZWVrcy5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZW4vcGFyc2Vycy9FTldlZWtkYXlQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3BhcnNlcnMvRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9jaHJvbm8uanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9jb21tb24vcGFyc2Vycy9TbGFzaERhdGVGb3JtYXRQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9lbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZGUvcGFyc2Vycy9ERVRpbWVFeHByZXNzaW9uUGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9kZS9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2RlL3BhcnNlcnMvREVXZWVrZGF5UGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9kZS9yZWZpbmVycy9ERU1lcmdlRGF0ZVJhbmdlUmVmaW5lci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZGUvcmVmaW5lcnMvREVNZXJnZURhdGVUaW1lUmVmaW5lci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZGUvcGFyc2Vycy9ERUNhc3VhbFRpbWVQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2RlL3BhcnNlcnMvREVDYXN1YWxEYXRlUGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9kZS9wYXJzZXJzL0RFTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9kZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZnIvcGFyc2Vycy9GUkNhc3VhbERhdGVQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2ZyL3BhcnNlcnMvRlJDYXN1YWxUaW1lUGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9mci9wYXJzZXJzL0ZSVGltZUV4cHJlc3Npb25QYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2ZyL3JlZmluZXJzL0ZSTWVyZ2VEYXRlVGltZVJlZmluZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2ZyL3JlZmluZXJzL0ZSTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9mci9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2ZyL3BhcnNlcnMvRlJXZWVrZGF5UGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9mci9wYXJzZXJzL0ZSU3BlY2lmaWNUaW1lRXhwcmVzc2lvblBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZnIvcGFyc2Vycy9GUk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvZnIvcGFyc2Vycy9GUlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9mci9wYXJzZXJzL0ZSVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2ZyL3BhcnNlcnMvRlJUaW1lVW5pdFJlbGF0aXZlRm9ybWF0UGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9mci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvamEvY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9qYS9wYXJzZXJzL0pQU3RhbmRhcmRQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL2phL3JlZmluZXJzL0pQTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9qYS9wYXJzZXJzL0pQQ2FzdWFsRGF0ZVBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvamEvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL3B0L2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvcHQvcGFyc2Vycy9QVFdlZWtkYXlQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL3B0L3BhcnNlcnMvUFRUaW1lRXhwcmVzc2lvblBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvcHQvcmVmaW5lcnMvUFRNZXJnZURhdGVUaW1lUmVmaW5lci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvcHQvcmVmaW5lcnMvUFRNZXJnZURhdGVSYW5nZVJlZmluZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL3B0L3BhcnNlcnMvUFRNb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL3B0L3BhcnNlcnMvUFRDYXN1YWxEYXRlUGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9wdC9wYXJzZXJzL1BUQ2FzdWFsVGltZVBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvcHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL25sL3JlZmluZXJzL05MTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9ubC9yZWZpbmVycy9OTE1lcmdlRGF0ZVRpbWVSZWZpbmVyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9ubC9wYXJzZXJzL05MQ2FzdWFsRGF0ZVBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvbmwvcGFyc2Vycy9OTENhc3VhbFRpbWVQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL25sL2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvbmwvcGFyc2Vycy9OTFRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9ubC9wYXJzZXJzL05MV2Vla2RheVBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvbmwvcGFyc2Vycy9OTE1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvbmwvcGFyc2Vycy9OTE1vbnRoTmFtZVBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvbmwvcGFyc2Vycy9OTFNsYXNoTW9udGhGb3JtYXRQYXJzZXIuanMiLCJub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9sb2NhbGVzL25sL3BhcnNlcnMvTkxUaW1lRXhwcmVzc2lvblBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvbmwvcGFyc2Vycy9OTENhc3VhbFllYXJNb250aERheVBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2xvY2FsZXMvbmwvcGFyc2Vycy9OTENhc3VhbERhdGVUaW1lUGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvbG9jYWxlcy9ubC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2luZGV4LmpzIiwic3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgb2JzaWRpYW4gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbnZhciBERUZBVUxUX0RBSUxZX05PVEVfRk9STUFUID0gXCJZWVlZLU1NLUREXCI7XG52YXIgREVGQVVMVF9XRUVLTFlfTk9URV9GT1JNQVQgPSBcImdnZ2ctW1ddd3dcIjtcbnZhciBERUZBVUxUX01PTlRITFlfTk9URV9GT1JNQVQgPSBcIllZWVktTU1cIjtcblxuZnVuY3Rpb24gc2hvdWxkVXNlUGVyaW9kaWNOb3Rlc1NldHRpbmdzKHBlcmlvZGljaXR5KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHZhciBwZXJpb2RpY05vdGVzID0gd2luZG93LmFwcC5wbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpO1xuICAgIHJldHVybiBwZXJpb2RpY05vdGVzICYmICgoX2IgPSAoX2EgPSBwZXJpb2RpY05vdGVzLnNldHRpbmdzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbcGVyaW9kaWNpdHldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZW5hYmxlZCk7XG59XG4vKipcbiAqIFJlYWQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBgZGFpbHktbm90ZXNgIHBsdWdpblxuICogdG8ga2VlcCBiZWhhdmlvciBvZiBjcmVhdGluZyBhIG5ldyBub3RlIGluLXN5bmMuXG4gKi9cbmZ1bmN0aW9uIGdldERhaWx5Tm90ZVNldHRpbmdzKCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB2YXIgX2UgPSB3aW5kb3cuYXBwLCBpbnRlcm5hbFBsdWdpbnMgPSBfZS5pbnRlcm5hbFBsdWdpbnMsIHBsdWdpbnMgPSBfZS5wbHVnaW5zO1xuICAgICAgICBpZiAoc2hvdWxkVXNlUGVyaW9kaWNOb3Rlc1NldHRpbmdzKFwiZGFpbHlcIikpIHtcbiAgICAgICAgICAgIHZhciBfZiA9ICgoX2IgPSAoX2EgPSBwbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0dGluZ3MpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kYWlseSkgfHwge30sIGZvcm1hdF8xID0gX2YuZm9ybWF0LCBmb2xkZXJfMSA9IF9mLmZvbGRlciwgdGVtcGxhdGVfMSA9IF9mLnRlbXBsYXRlO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdF8xIHx8IERFRkFVTFRfREFJTFlfTk9URV9GT1JNQVQsXG4gICAgICAgICAgICAgICAgZm9sZGVyOiAoZm9sZGVyXzEgPT09IG51bGwgfHwgZm9sZGVyXzEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvbGRlcl8xLnRyaW0oKSkgfHwgXCJcIixcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKHRlbXBsYXRlXzEgPT09IG51bGwgfHwgdGVtcGxhdGVfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVtcGxhdGVfMS50cmltKCkpIHx8IFwiXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBfZyA9ICgoX2QgPSAoX2MgPSBpbnRlcm5hbFBsdWdpbnMuZ2V0UGx1Z2luQnlJZChcImRhaWx5LW5vdGVzXCIpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5zdGFuY2UpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5vcHRpb25zKSB8fCB7fSwgZm9sZGVyID0gX2cuZm9sZGVyLCBmb3JtYXQgPSBfZy5mb3JtYXQsIHRlbXBsYXRlID0gX2cudGVtcGxhdGU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCB8fCBERUZBVUxUX0RBSUxZX05PVEVfRk9STUFULFxuICAgICAgICAgICAgZm9sZGVyOiAoZm9sZGVyID09PSBudWxsIHx8IGZvbGRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9sZGVyLnRyaW0oKSkgfHwgXCJcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiAodGVtcGxhdGUgPT09IG51bGwgfHwgdGVtcGxhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRlbXBsYXRlLnRyaW0oKSkgfHwgXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmluZm8oXCJObyBjdXN0b20gZGFpbHkgbm90ZSBzZXR0aW5ncyBmb3VuZCFcIiwgZXJyKTtcbiAgICB9XG59XG4vKipcbiAqIFJlYWQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBgd2Vla2x5LW5vdGVzYCBwbHVnaW5cbiAqIHRvIGtlZXAgYmVoYXZpb3Igb2YgY3JlYXRpbmcgYSBuZXcgbm90ZSBpbi1zeW5jLlxuICovXG5mdW5jdGlvbiBnZXRXZWVrbHlOb3RlU2V0dGluZ3MoKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHZhciBwbHVnaW5NYW5hZ2VyID0gd2luZG93LmFwcC5wbHVnaW5zO1xuICAgICAgICB2YXIgY2FsZW5kYXJTZXR0aW5ncyA9IChfYSA9IHBsdWdpbk1hbmFnZXIuZ2V0UGx1Z2luKFwiY2FsZW5kYXJcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vcHRpb25zO1xuICAgICAgICB2YXIgcGVyaW9kaWNOb3Rlc1NldHRpbmdzID0gKF9jID0gKF9iID0gcGx1Z2luTWFuYWdlci5nZXRQbHVnaW4oXCJwZXJpb2RpYy1ub3Rlc1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldHRpbmdzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Mud2Vla2x5O1xuICAgICAgICBpZiAoc2hvdWxkVXNlUGVyaW9kaWNOb3Rlc1NldHRpbmdzKFwid2Vla2x5XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvcm1hdDogcGVyaW9kaWNOb3Rlc1NldHRpbmdzLmZvcm1hdCB8fCBERUZBVUxUX1dFRUtMWV9OT1RFX0ZPUk1BVCxcbiAgICAgICAgICAgICAgICBmb2xkZXI6ICgoX2QgPSBwZXJpb2RpY05vdGVzU2V0dGluZ3MuZm9sZGVyKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudHJpbSgpKSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoKF9lID0gcGVyaW9kaWNOb3Rlc1NldHRpbmdzLnRlbXBsYXRlKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UudHJpbSgpKSB8fCBcIlwiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2V0dGluZ3MgPSBjYWxlbmRhclNldHRpbmdzIHx8IHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybWF0OiBzZXR0aW5ncy53ZWVrbHlOb3RlRm9ybWF0IHx8IERFRkFVTFRfV0VFS0xZX05PVEVfRk9STUFULFxuICAgICAgICAgICAgZm9sZGVyOiAoKF9mID0gc2V0dGluZ3Mud2Vla2x5Tm90ZUZvbGRlcikgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLnRyaW0oKSkgfHwgXCJcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiAoKF9nID0gc2V0dGluZ3Mud2Vla2x5Tm90ZVRlbXBsYXRlKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cudHJpbSgpKSB8fCBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIk5vIGN1c3RvbSB3ZWVrbHkgbm90ZSBzZXR0aW5ncyBmb3VuZCFcIiwgZXJyKTtcbiAgICB9XG59XG4vKipcbiAqIFJlYWQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBgcGVyaW9kaWMtbm90ZXNgIHBsdWdpblxuICogdG8ga2VlcCBiZWhhdmlvciBvZiBjcmVhdGluZyBhIG5ldyBub3RlIGluLXN5bmMuXG4gKi9cbmZ1bmN0aW9uIGdldE1vbnRobHlOb3RlU2V0dGluZ3MoKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgdmFyIHBsdWdpbk1hbmFnZXIgPSB3aW5kb3cuYXBwLnBsdWdpbnM7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gKHNob3VsZFVzZVBlcmlvZGljTm90ZXNTZXR0aW5ncyhcIm1vbnRobHlcIikgJiZcbiAgICAgICAgICAgICgoX2IgPSAoX2EgPSBwbHVnaW5NYW5hZ2VyLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0dGluZ3MpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tb250aGx5KSkgfHxcbiAgICAgICAgICAgIHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybWF0OiBzZXR0aW5ncy5mb3JtYXQgfHwgREVGQVVMVF9NT05USExZX05PVEVfRk9STUFULFxuICAgICAgICAgICAgZm9sZGVyOiAoKF9jID0gc2V0dGluZ3MuZm9sZGVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudHJpbSgpKSB8fCBcIlwiLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICgoX2QgPSBzZXR0aW5ncy50ZW1wbGF0ZSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRyaW0oKSkgfHwgXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmluZm8oXCJObyBjdXN0b20gbW9udGhseSBub3RlIHNldHRpbmdzIGZvdW5kIVwiLCBlcnIpO1xuICAgIH1cbn1cblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XG5cbi8qKlxuICogZGF0ZVVJRCBpcyBhIHdheSBvZiB3ZWVrbHkgaWRlbnRpZnlpbmcgZGFpbHkvd2Vla2x5L21vbnRobHkgbm90ZXMuXG4gKiBUaGV5IGFyZSBwcmVmaXhlZCB3aXRoIHRoZSBncmFudWxhcml0eSB0byBhdm9pZCBhbWJpZ3VpdHkuXG4gKi9cbmZ1bmN0aW9uIGdldERhdGVVSUQoZGF0ZSwgZ3JhbnVsYXJpdHkpIHtcbiAgICBpZiAoZ3JhbnVsYXJpdHkgPT09IHZvaWQgMCkgeyBncmFudWxhcml0eSA9IFwiZGF5XCI7IH1cbiAgICB2YXIgdHMgPSBkYXRlLmNsb25lKCkuc3RhcnRPZihncmFudWxhcml0eSkuZm9ybWF0KCk7XG4gICAgcmV0dXJuIGdyYW51bGFyaXR5ICsgXCItXCIgKyB0cztcbn1cbmZ1bmN0aW9uIHJlbW92ZUVzY2FwZWRDaGFyYWN0ZXJzKGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvXFxbW15cXF1dKlxcXS9nLCBcIlwiKTsgLy8gcmVtb3ZlIGV2ZXJ5dGhpbmcgd2l0aGluIGJyYWNrZXRzXG59XG5mdW5jdGlvbiB4b3IoYSwgYikge1xuICAgIHJldHVybiAoYSB8fCBiKSAmJiAhKGEgJiYgYik7XG59XG4vKipcbiAqIFhYWDogV2hlbiBwYXJzaW5nIGRhdGVzIHRoYXQgY29udGFpbiBib3RoIHdlZWsgbnVtYmVycyBhbmQgbW9udGhzLFxuICogTW9tZW50IGNob3NlcyB0byBpZ25vcmUgdGhlIHdlZWsgbnVtYmVycy4gRm9yIHRoZSB3ZWVrIGRhdGVVSUQsIHdlXG4gKiB3YW50IHRoZSBvcHBvc2l0ZSBiZWhhdmlvci4gU3RyaXAgdGhlIE1NTSBmcm9tIHRoZSBmb3JtYXQgdG8gcGF0Y2guXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybWF0QW1iaWd1b3VzKGZvcm1hdCwgZ3JhbnVsYXJpdHkpIHtcbiAgICBpZiAoZ3JhbnVsYXJpdHkgPT09IFwid2Vla1wiKSB7XG4gICAgICAgIHZhciBjbGVhbkZvcm1hdCA9IHJlbW92ZUVzY2FwZWRDaGFyYWN0ZXJzKGZvcm1hdCk7XG4gICAgICAgIHJldHVybiAoL3d7MSwyfS9pLnRlc3QoY2xlYW5Gb3JtYXQpICYmXG4gICAgICAgICAgICB4b3IoL017MSw0fS8udGVzdChjbGVhbkZvcm1hdCksIC9EezEsNH0vLnRlc3QoY2xlYW5Gb3JtYXQpKSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldERhdGVGcm9tRmlsZShmaWxlLCBncmFudWxhcml0eSkge1xuICAgIHZhciBnZXRTZXR0aW5ncyA9IHtcbiAgICAgICAgZGF5OiBnZXREYWlseU5vdGVTZXR0aW5ncyxcbiAgICAgICAgd2VlazogZ2V0V2Vla2x5Tm90ZVNldHRpbmdzLFxuICAgICAgICBtb250aDogZ2V0TW9udGhseU5vdGVTZXR0aW5ncyxcbiAgICB9O1xuICAgIHZhciBmb3JtYXQgPSBnZXRTZXR0aW5nc1tncmFudWxhcml0eV0oKS5mb3JtYXQuc3BsaXQoXCIvXCIpLnBvcCgpO1xuICAgIHZhciBub3RlRGF0ZSA9IHdpbmRvdy5tb21lbnQoZmlsZS5iYXNlbmFtZSwgZm9ybWF0LCB0cnVlKTtcbiAgICBpZiAoIW5vdGVEYXRlLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGlzRm9ybWF0QW1iaWd1b3VzKGZvcm1hdCwgZ3JhbnVsYXJpdHkpKSB7XG4gICAgICAgIGlmIChncmFudWxhcml0eSA9PT0gXCJ3ZWVrXCIpIHtcbiAgICAgICAgICAgIHZhciBjbGVhbkZvcm1hdCA9IHJlbW92ZUVzY2FwZWRDaGFyYWN0ZXJzKGZvcm1hdCk7XG4gICAgICAgICAgICBpZiAoL3d7MSwyfS9pLnRlc3QoY2xlYW5Gb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5tb21lbnQoZmlsZS5iYXNlbmFtZSwgXG4gICAgICAgICAgICAgICAgLy8gSWYgZm9ybWF0IGNvbnRhaW5zIHdlZWssIHJlbW92ZSBkYXkgJiBtb250aCBmb3JtYXR0aW5nXG4gICAgICAgICAgICAgICAgZm9ybWF0LnJlcGxhY2UoL017MSw0fS9nLCBcIlwiKS5yZXBsYWNlKC9EezEsNH0vZywgXCJcIiksIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm90ZURhdGU7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZUZvbGRlckV4aXN0cyhwYXRoJDEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkaXJzLCBkaXI7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGRpcnMgPSBwYXRoJDEuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICBkaXJzLnBvcCgpOyAvLyByZW1vdmUgYmFzZW5hbWVcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXJzLmxlbmd0aCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGRpciA9IHBhdGguam9pbihkaXIsIGRpcnMuc2hpZnQoKSkucmVwbGFjZSgvXFxcXC9nLCBcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGRpcikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3aW5kb3cuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihkaXIpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Tm90ZVBhdGgoZGlyZWN0b3J5LCBmaWxlbmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhdGgkMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlbmFtZS5lbmRzV2l0aChcIi5tZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgKz0gXCIubWRcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoJDEgPSBvYnNpZGlhbi5ub3JtYWxpemVQYXRoKHBhdGguam9pbihkaXJlY3RvcnksIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGVuc3VyZUZvbGRlckV4aXN0cyhwYXRoJDEpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHBhdGgkMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0VGVtcGxhdGVDb250ZW50cyh0ZW1wbGF0ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFwcCwgbWV0YWRhdGFDYWNoZSwgdmF1bHQsIHRlbXBsYXRlUGF0aCwgdGVtcGxhdGVGaWxlLCBjb250ZW50cywgZXJyXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGFwcCA9IHdpbmRvdy5hcHA7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhQ2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZSwgdmF1bHQgPSBhcHAudmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUGF0aCA9IG9ic2lkaWFuLm5vcm1hbGl6ZVBhdGgodGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGVQYXRoID09PSBcIi9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVzb2x2ZShcIlwiKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVGaWxlID0gbWV0YWRhdGFDYWNoZS5nZXRGaXJzdExpbmtwYXRoRGVzdCh0ZW1wbGF0ZVBhdGgsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB2YXVsdC5jYWNoZWRSZWFkKHRlbXBsYXRlRmlsZSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBjb250ZW50c107XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byByZWFkIHRoZSBkYWlseSBub3RlIHRlbXBsYXRlICdcIiArIHRlbXBsYXRlUGF0aCArIFwiJ1wiLCBlcnJfMSk7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoXCJGYWlsZWQgdG8gcmVhZCB0aGUgZGFpbHkgbm90ZSB0ZW1wbGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFwiXCJdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxudmFyIERhaWx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERhaWx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGFpbHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gRGFpbHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcjtcbn0oRXJyb3IpKTtcbi8qKlxuICogVGhpcyBmdW5jdGlvbiBtaW1pY3MgdGhlIGJlaGF2aW9yIG9mIHRoZSBkYWlseS1ub3RlcyBwbHVnaW5cbiAqIHNvIGl0IHdpbGwgcmVwbGFjZSB7e2RhdGV9fSwge3t0aXRsZX19LCBhbmQge3t0aW1lfX0gd2l0aCB0aGVcbiAqIGZvcm1hdHRlZCB0aW1lc3RhbXAuXG4gKlxuICogTm90ZTogaXQgaGFzIGFuIGFkZGVkIGJvbnVzIHRoYXQgaXQncyBub3QgJ3RvZGF5JyBzcGVjaWZpYy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGFpbHlOb3RlKGRhdGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcHAsIHZhdWx0LCBtb21lbnQsIF9hLCB0ZW1wbGF0ZSwgZm9ybWF0LCBmb2xkZXIsIHRlbXBsYXRlQ29udGVudHMsIGZpbGVuYW1lLCBub3JtYWxpemVkUGF0aCwgY3JlYXRlZEZpbGUsIGVycl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBhcHAgPSB3aW5kb3cuYXBwO1xuICAgICAgICAgICAgICAgICAgICB2YXVsdCA9IGFwcC52YXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50ID0gd2luZG93Lm1vbWVudDtcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBnZXREYWlseU5vdGVTZXR0aW5ncygpLCB0ZW1wbGF0ZSA9IF9hLnRlbXBsYXRlLCBmb3JtYXQgPSBfYS5mb3JtYXQsIGZvbGRlciA9IF9hLmZvbGRlcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0VGVtcGxhdGVDb250ZW50cyh0ZW1wbGF0ZSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb250ZW50cyA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBkYXRlLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXROb3RlUGF0aChmb2xkZXIsIGZpbGVuYW1lKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkUGF0aCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFszLCA1LCAsIDZdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdmF1bHQuY3JlYXRlKG5vcm1hbGl6ZWRQYXRoLCB0ZW1wbGF0ZUNvbnRlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKihkYXRlfHRpbWUpXFxzKjooLio/KX19L2dpLCBmdW5jdGlvbiAoXywgX3RpbWVPckRhdGUsIG1vbWVudEZvcm1hdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBtb21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cjogbm93LmdldChcImhvdXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogbm93LmdldChcIm1pbnV0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiBub3cuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQobW9tZW50Rm9ybWF0LnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccypkYXRlXFxzKn19L2dpLCBmaWxlbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGltZVxccyp9fS9naSwgbW9tZW50KCkuZm9ybWF0KFwiSEg6bW1cIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpdGxlXFxzKn19L2dpLCBmaWxlbmFtZSkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRGaWxlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY3JlYXRlZEZpbGVdO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGZpbGU6ICdcIiArIG5vcm1hbGl6ZWRQYXRoICsgXCInXCIsIGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShcIlVuYWJsZSB0byBjcmVhdGUgbmV3IGZpbGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREYWlseU5vdGUoZGF0ZSwgZGFpbHlOb3Rlcykge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gZGFpbHlOb3Rlc1tnZXREYXRlVUlEKGRhdGUsIFwiZGF5XCIpXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGdldEFsbERhaWx5Tm90ZXMoKSB7XG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgZGFpbHkgbm90ZXMgaW4gdGhlIGRhaWx5IG5vdGUgZm9sZGVyXG4gICAgICovXG4gICAgdmFyIHZhdWx0ID0gd2luZG93LmFwcC52YXVsdDtcbiAgICB2YXIgZm9sZGVyID0gZ2V0RGFpbHlOb3RlU2V0dGluZ3MoKS5mb2xkZXI7XG4gICAgdmFyIGRhaWx5Tm90ZXNGb2xkZXIgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob2JzaWRpYW4ubm9ybWFsaXplUGF0aChmb2xkZXIpKTtcbiAgICBpZiAoIWRhaWx5Tm90ZXNGb2xkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IERhaWx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IoXCJGYWlsZWQgdG8gZmluZCBkYWlseSBub3RlcyBmb2xkZXJcIik7XG4gICAgfVxuICAgIHZhciBkYWlseU5vdGVzID0ge307XG4gICAgb2JzaWRpYW4uVmF1bHQucmVjdXJzZUNoaWxkcmVuKGRhaWx5Tm90ZXNGb2xkZXIsIGZ1bmN0aW9uIChub3RlKSB7XG4gICAgICAgIGlmIChub3RlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gZ2V0RGF0ZUZyb21GaWxlKG5vdGUsIFwiZGF5XCIpO1xuICAgICAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZVN0cmluZyA9IGdldERhdGVVSUQoZGF0ZSwgXCJkYXlcIik7XG4gICAgICAgICAgICAgICAgZGFpbHlOb3Rlc1tkYXRlU3RyaW5nXSA9IG5vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGFpbHlOb3Rlcztcbn1cblxudmFyIFdlZWtseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhXZWVrbHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBXZWVrbHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gV2Vla2x5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3I7XG59KEVycm9yKSk7XG5mdW5jdGlvbiBnZXREYXlzT2ZXZWVrKCkge1xuICAgIHZhciBtb21lbnQgPSB3aW5kb3cubW9tZW50O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgdmFyIHdlZWtTdGFydCA9IG1vbWVudC5sb2NhbGVEYXRhKCkuX3dlZWsuZG93O1xuICAgIHZhciBkYXlzT2ZXZWVrID0gW1xuICAgICAgICBcInN1bmRheVwiLFxuICAgICAgICBcIm1vbmRheVwiLFxuICAgICAgICBcInR1ZXNkYXlcIixcbiAgICAgICAgXCJ3ZWRuZXNkYXlcIixcbiAgICAgICAgXCJ0aHVyc2RheVwiLFxuICAgICAgICBcImZyaWRheVwiLFxuICAgICAgICBcInNhdHVyZGF5XCIsXG4gICAgXTtcbiAgICB3aGlsZSAod2Vla1N0YXJ0KSB7XG4gICAgICAgIGRheXNPZldlZWsucHVzaChkYXlzT2ZXZWVrLnNoaWZ0KCkpO1xuICAgICAgICB3ZWVrU3RhcnQtLTtcbiAgICB9XG4gICAgcmV0dXJuIGRheXNPZldlZWs7XG59XG5mdW5jdGlvbiBnZXREYXlPZldlZWtOdW1lcmljYWxWYWx1ZShkYXlPZldlZWtOYW1lKSB7XG4gICAgcmV0dXJuIGdldERheXNPZldlZWsoKS5pbmRleE9mKGRheU9mV2Vla05hbWUudG9Mb3dlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVXZWVrbHlOb3RlKGRhdGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YXVsdCwgX2EsIHRlbXBsYXRlLCBmb3JtYXQsIGZvbGRlciwgdGVtcGxhdGVDb250ZW50cywgZmlsZW5hbWUsIG5vcm1hbGl6ZWRQYXRoLCBjcmVhdGVkRmlsZSwgZXJyXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHZhdWx0ID0gd2luZG93LmFwcC52YXVsdDtcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBnZXRXZWVrbHlOb3RlU2V0dGluZ3MoKSwgdGVtcGxhdGUgPSBfYS50ZW1wbGF0ZSwgZm9ybWF0ID0gX2EuZm9ybWF0LCBmb2xkZXIgPSBfYS5mb2xkZXI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFRlbXBsYXRlQ29udGVudHModGVtcGxhdGUpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29udGVudHMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZGF0ZS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0Tm90ZVBhdGgoZm9sZGVyLCBmaWxlbmFtZSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFBhdGggPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMywgNSwgLCA2XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHZhdWx0LmNyZWF0ZShub3JtYWxpemVkUGF0aCwgdGVtcGxhdGVDb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyooZGF0ZXx0aW1lKVxccyo6KC4qPyl9fS9naSwgZnVuY3Rpb24gKF8sIF90aW1lT3JEYXRlLCBtb21lbnRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gd2luZG93Lm1vbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyOiBub3cuZ2V0KFwiaG91clwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiBub3cuZ2V0KFwibWludXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6IG5vdy5nZXQoXCJzZWNvbmRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChtb21lbnRGb3JtYXQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpdGxlXFxzKn19L2dpLCBmaWxlbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGltZVxccyp9fS9naSwgd2luZG93Lm1vbWVudCgpLmZvcm1hdChcIkhIOm1tXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyooc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpXFxzKjooLio/KX19L2dpLCBmdW5jdGlvbiAoXywgZGF5T2ZXZWVrLCBtb21lbnRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF5ID0gZ2V0RGF5T2ZXZWVrTnVtZXJpY2FsVmFsdWUoZGF5T2ZXZWVrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS53ZWVrZGF5KGRheSkuZm9ybWF0KG1vbWVudEZvcm1hdC50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRGaWxlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY3JlYXRlZEZpbGVdO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGZpbGU6ICdcIiArIG5vcm1hbGl6ZWRQYXRoICsgXCInXCIsIGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShcIlVuYWJsZSB0byBjcmVhdGUgbmV3IGZpbGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRXZWVrbHlOb3RlKGRhdGUsIHdlZWtseU5vdGVzKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSB3ZWVrbHlOb3Rlc1tnZXREYXRlVUlEKGRhdGUsIFwid2Vla1wiKV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XG59XG5mdW5jdGlvbiBnZXRBbGxXZWVrbHlOb3RlcygpIHtcbiAgICB2YXIgdmF1bHQgPSB3aW5kb3cuYXBwLnZhdWx0O1xuICAgIHZhciBmb2xkZXIgPSBnZXRXZWVrbHlOb3RlU2V0dGluZ3MoKS5mb2xkZXI7XG4gICAgdmFyIHdlZWtseU5vdGVzRm9sZGVyID0gdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG9ic2lkaWFuLm5vcm1hbGl6ZVBhdGgoZm9sZGVyKSk7XG4gICAgaWYgKCF3ZWVrbHlOb3Rlc0ZvbGRlcikge1xuICAgICAgICB0aHJvdyBuZXcgV2Vla2x5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IoXCJGYWlsZWQgdG8gZmluZCB3ZWVrbHkgbm90ZXMgZm9sZGVyXCIpO1xuICAgIH1cbiAgICB2YXIgd2Vla2x5Tm90ZXMgPSB7fTtcbiAgICBvYnNpZGlhbi5WYXVsdC5yZWN1cnNlQ2hpbGRyZW4od2Vla2x5Tm90ZXNGb2xkZXIsIGZ1bmN0aW9uIChub3RlKSB7XG4gICAgICAgIGlmIChub3RlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gZ2V0RGF0ZUZyb21GaWxlKG5vdGUsIFwid2Vla1wiKTtcbiAgICAgICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGVTdHJpbmcgPSBnZXREYXRlVUlEKGRhdGUsIFwid2Vla1wiKTtcbiAgICAgICAgICAgICAgICB3ZWVrbHlOb3Rlc1tkYXRlU3RyaW5nXSA9IG5vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gd2Vla2x5Tm90ZXM7XG59XG5cbnZhciBNb250aGx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1vbnRobHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNb250aGx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE1vbnRobHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcjtcbn0oRXJyb3IpKTtcbi8qKlxuICogVGhpcyBmdW5jdGlvbiBtaW1pY3MgdGhlIGJlaGF2aW9yIG9mIHRoZSBkYWlseS1ub3RlcyBwbHVnaW5cbiAqIHNvIGl0IHdpbGwgcmVwbGFjZSB7e2RhdGV9fSwge3t0aXRsZX19LCBhbmQge3t0aW1lfX0gd2l0aCB0aGVcbiAqIGZvcm1hdHRlZCB0aW1lc3RhbXAuXG4gKlxuICogTm90ZTogaXQgaGFzIGFuIGFkZGVkIGJvbnVzIHRoYXQgaXQncyBub3QgJ3RvZGF5JyBzcGVjaWZpYy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlTW9udGhseU5vdGUoZGF0ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhdWx0LCBfYSwgdGVtcGxhdGUsIGZvcm1hdCwgZm9sZGVyLCB0ZW1wbGF0ZUNvbnRlbnRzLCBmaWxlbmFtZSwgbm9ybWFsaXplZFBhdGgsIGNyZWF0ZWRGaWxlLCBlcnJfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdmF1bHQgPSB3aW5kb3cuYXBwLnZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBfYSA9IGdldE1vbnRobHlOb3RlU2V0dGluZ3MoKSwgdGVtcGxhdGUgPSBfYS50ZW1wbGF0ZSwgZm9ybWF0ID0gX2EuZm9ybWF0LCBmb2xkZXIgPSBfYS5mb2xkZXI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFRlbXBsYXRlQ29udGVudHModGVtcGxhdGUpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29udGVudHMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZGF0ZS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0Tm90ZVBhdGgoZm9sZGVyLCBmaWxlbmFtZSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFBhdGggPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMywgNSwgLCA2XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHZhdWx0LmNyZWF0ZShub3JtYWxpemVkUGF0aCwgdGVtcGxhdGVDb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyooZGF0ZXx0aW1lKVxccyo6KC4qPyl9fS9naSwgZnVuY3Rpb24gKF8sIF90aW1lT3JEYXRlLCBtb21lbnRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gd2luZG93Lm1vbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyOiBub3cuZ2V0KFwiaG91clwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiBub3cuZ2V0KFwibWludXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6IG5vdy5nZXQoXCJzZWNvbmRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChtb21lbnRGb3JtYXQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKmRhdGVcXHMqfX0vZ2ksIGZpbGVuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0aW1lXFxzKn19L2dpLCB3aW5kb3cubW9tZW50KCkuZm9ybWF0KFwiSEg6bW1cIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpdGxlXFxzKn19L2dpLCBmaWxlbmFtZSkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRGaWxlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY3JlYXRlZEZpbGVdO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGZpbGU6ICdcIiArIG5vcm1hbGl6ZWRQYXRoICsgXCInXCIsIGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShcIlVuYWJsZSB0byBjcmVhdGUgbmV3IGZpbGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRNb250aGx5Tm90ZShkYXRlLCBtb250aGx5Tm90ZXMpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIChfYSA9IG1vbnRobHlOb3Rlc1tnZXREYXRlVUlEKGRhdGUsIFwibW9udGhcIildKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9udGhseU5vdGVzKCkge1xuICAgIHZhciB2YXVsdCA9IHdpbmRvdy5hcHAudmF1bHQ7XG4gICAgdmFyIGZvbGRlciA9IGdldE1vbnRobHlOb3RlU2V0dGluZ3MoKS5mb2xkZXI7XG4gICAgdmFyIG1vbnRobHlOb3Rlc0ZvbGRlciA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChvYnNpZGlhbi5ub3JtYWxpemVQYXRoKGZvbGRlcikpO1xuICAgIGlmICghbW9udGhseU5vdGVzRm9sZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBNb250aGx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IoXCJGYWlsZWQgdG8gZmluZCBtb250aGx5IG5vdGVzIGZvbGRlclwiKTtcbiAgICB9XG4gICAgdmFyIG1vbnRobHlOb3RlcyA9IHt9O1xuICAgIG9ic2lkaWFuLlZhdWx0LnJlY3Vyc2VDaGlsZHJlbihtb250aGx5Tm90ZXNGb2xkZXIsIGZ1bmN0aW9uIChub3RlKSB7XG4gICAgICAgIGlmIChub3RlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gZ2V0RGF0ZUZyb21GaWxlKG5vdGUsIFwibW9udGhcIik7XG4gICAgICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlU3RyaW5nID0gZ2V0RGF0ZVVJRChkYXRlLCBcIm1vbnRoXCIpO1xuICAgICAgICAgICAgICAgIG1vbnRobHlOb3Rlc1tkYXRlU3RyaW5nXSA9IG5vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbW9udGhseU5vdGVzO1xufVxuXG5mdW5jdGlvbiBhcHBIYXNEYWlseU5vdGVzUGx1Z2luTG9hZGVkKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgdmFyIGFwcCA9IHdpbmRvdy5hcHA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB2YXIgZGFpbHlOb3Rlc1BsdWdpbiA9IGFwcC5pbnRlcm5hbFBsdWdpbnMucGx1Z2luc1tcImRhaWx5LW5vdGVzXCJdO1xuICAgIGlmIChkYWlseU5vdGVzUGx1Z2luICYmIGRhaWx5Tm90ZXNQbHVnaW4uZW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB2YXIgcGVyaW9kaWNOb3RlcyA9IGFwcC5wbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpO1xuICAgIHJldHVybiBwZXJpb2RpY05vdGVzICYmICgoX2IgPSAoX2EgPSBwZXJpb2RpY05vdGVzLnNldHRpbmdzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGFpbHkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5lbmFibGVkKTtcbn1cbi8qKlxuICogWFhYOiBcIldlZWtseSBOb3Rlc1wiIGxpdmUgaW4gZWl0aGVyIHRoZSBDYWxlbmRhciBwbHVnaW4gb3IgdGhlIHBlcmlvZGljLW5vdGVzIHBsdWdpbi5cbiAqIENoZWNrIGJvdGggdW50aWwgdGhlIHdlZWtseSBub3RlcyBmZWF0dXJlIGlzIHJlbW92ZWQgZnJvbSB0aGUgQ2FsZW5kYXIgcGx1Z2luLlxuICovXG5mdW5jdGlvbiBhcHBIYXNXZWVrbHlOb3Rlc1BsdWdpbkxvYWRlZCgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHZhciBhcHAgPSB3aW5kb3cuYXBwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgaWYgKGFwcC5wbHVnaW5zLmdldFBsdWdpbihcImNhbGVuZGFyXCIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHZhciBwZXJpb2RpY05vdGVzID0gYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik7XG4gICAgcmV0dXJuIHBlcmlvZGljTm90ZXMgJiYgKChfYiA9IChfYSA9IHBlcmlvZGljTm90ZXMuc2V0dGluZ3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS53ZWVrbHkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5lbmFibGVkKTtcbn1cbmZ1bmN0aW9uIGFwcEhhc01vbnRobHlOb3Rlc1BsdWdpbkxvYWRlZCgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHZhciBhcHAgPSB3aW5kb3cuYXBwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgdmFyIHBlcmlvZGljTm90ZXMgPSBhcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJwZXJpb2RpYy1ub3Rlc1wiKTtcbiAgICByZXR1cm4gcGVyaW9kaWNOb3RlcyAmJiAoKF9iID0gKF9hID0gcGVyaW9kaWNOb3Rlcy5zZXR0aW5ncykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1vbnRobHkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5lbmFibGVkKTtcbn1cblxuZXhwb3J0cy5ERUZBVUxUX0RBSUxZX05PVEVfRk9STUFUID0gREVGQVVMVF9EQUlMWV9OT1RFX0ZPUk1BVDtcbmV4cG9ydHMuREVGQVVMVF9NT05USExZX05PVEVfRk9STUFUID0gREVGQVVMVF9NT05USExZX05PVEVfRk9STUFUO1xuZXhwb3J0cy5ERUZBVUxUX1dFRUtMWV9OT1RFX0ZPUk1BVCA9IERFRkFVTFRfV0VFS0xZX05PVEVfRk9STUFUO1xuZXhwb3J0cy5hcHBIYXNEYWlseU5vdGVzUGx1Z2luTG9hZGVkID0gYXBwSGFzRGFpbHlOb3Rlc1BsdWdpbkxvYWRlZDtcbmV4cG9ydHMuYXBwSGFzTW9udGhseU5vdGVzUGx1Z2luTG9hZGVkID0gYXBwSGFzTW9udGhseU5vdGVzUGx1Z2luTG9hZGVkO1xuZXhwb3J0cy5hcHBIYXNXZWVrbHlOb3Rlc1BsdWdpbkxvYWRlZCA9IGFwcEhhc1dlZWtseU5vdGVzUGx1Z2luTG9hZGVkO1xuZXhwb3J0cy5jcmVhdGVEYWlseU5vdGUgPSBjcmVhdGVEYWlseU5vdGU7XG5leHBvcnRzLmNyZWF0ZU1vbnRobHlOb3RlID0gY3JlYXRlTW9udGhseU5vdGU7XG5leHBvcnRzLmNyZWF0ZVdlZWtseU5vdGUgPSBjcmVhdGVXZWVrbHlOb3RlO1xuZXhwb3J0cy5nZXRBbGxEYWlseU5vdGVzID0gZ2V0QWxsRGFpbHlOb3RlcztcbmV4cG9ydHMuZ2V0QWxsTW9udGhseU5vdGVzID0gZ2V0QWxsTW9udGhseU5vdGVzO1xuZXhwb3J0cy5nZXRBbGxXZWVrbHlOb3RlcyA9IGdldEFsbFdlZWtseU5vdGVzO1xuZXhwb3J0cy5nZXREYWlseU5vdGUgPSBnZXREYWlseU5vdGU7XG5leHBvcnRzLmdldERhaWx5Tm90ZVNldHRpbmdzID0gZ2V0RGFpbHlOb3RlU2V0dGluZ3M7XG5leHBvcnRzLmdldERhdGVGcm9tRmlsZSA9IGdldERhdGVGcm9tRmlsZTtcbmV4cG9ydHMuZ2V0RGF0ZVVJRCA9IGdldERhdGVVSUQ7XG5leHBvcnRzLmdldE1vbnRobHlOb3RlID0gZ2V0TW9udGhseU5vdGU7XG5leHBvcnRzLmdldE1vbnRobHlOb3RlU2V0dGluZ3MgPSBnZXRNb250aGx5Tm90ZVNldHRpbmdzO1xuZXhwb3J0cy5nZXRUZW1wbGF0ZUNvbnRlbnRzID0gZ2V0VGVtcGxhdGVDb250ZW50cztcbmV4cG9ydHMuZ2V0V2Vla2x5Tm90ZSA9IGdldFdlZWtseU5vdGU7XG5leHBvcnRzLmdldFdlZWtseU5vdGVTZXR0aW5ncyA9IGdldFdlZWtseU5vdGVTZXR0aW5ncztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tYXRjaEFueVBhdHRlcm4gPSBleHBvcnRzLmV4dHJhY3RUZXJtcyA9IGV4cG9ydHMucmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4gPSB2b2lkIDA7XG5mdW5jdGlvbiByZXBlYXRlZFRpbWV1bml0UGF0dGVybihwcmVmaXgsIHNpbmdsZVRpbWV1bml0UGF0dGVybikge1xuICAgIGNvbnN0IHNpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZSA9IHNpbmdsZVRpbWV1bml0UGF0dGVybi5yZXBsYWNlKC9cXCgoPyFcXD8pL2csIFwiKD86XCIpO1xuICAgIHJldHVybiBgJHtwcmVmaXh9JHtzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmV9XFxcXHMqKD86LD9cXFxcc3swLDV9JHtzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmV9KXswLDEwfWA7XG59XG5leHBvcnRzLnJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuID0gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm47XG5mdW5jdGlvbiBleHRyYWN0VGVybXMoZGljdGlvbmFyeSkge1xuICAgIGxldCBrZXlzO1xuICAgIGlmIChkaWN0aW9uYXJ5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAga2V5cyA9IFsuLi5kaWN0aW9uYXJ5XTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGljdGlvbmFyeSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICBrZXlzID0gQXJyYXkuZnJvbShkaWN0aW9uYXJ5LmtleXMoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoZGljdGlvbmFyeSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufVxuZXhwb3J0cy5leHRyYWN0VGVybXMgPSBleHRyYWN0VGVybXM7XG5mdW5jdGlvbiBtYXRjaEFueVBhdHRlcm4oZGljdGlvbmFyeSkge1xuICAgIGNvbnN0IGpvaW5lZFRlcm1zID0gZXh0cmFjdFRlcm1zKGRpY3Rpb25hcnkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgICAgICAuam9pbihcInxcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuXCIpO1xuICAgIHJldHVybiBgKD86JHtqb2luZWRUZXJtc30pYDtcbn1cbmV4cG9ydHMubWF0Y2hBbnlQYXR0ZXJuID0gbWF0Y2hBbnlQYXR0ZXJuO1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6dC5kYXlqcz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cIm1pbGxpc2Vjb25kXCIsZT1cInNlY29uZFwiLG49XCJtaW51dGVcIixyPVwiaG91clwiLGk9XCJkYXlcIixzPVwid2Vla1wiLHU9XCJtb250aFwiLGE9XCJxdWFydGVyXCIsbz1cInllYXJcIixmPVwiZGF0ZVwiLGg9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbXjAtOV0qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLGM9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLGQ9e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sJD1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGw9e3M6JCx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrJChyLDIsXCIwXCIpK1wiOlwiKyQoaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocix1KSxzPW4taTwwLGE9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLHUpO3JldHVybisoLShyKyhuLWkpLyhzP2ktYTphLWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbihoKXtyZXR1cm57TTp1LHk6byx3OnMsZDppLEQ6ZixoOnIsbTpuLHM6ZSxtczp0LFE6YX1baF18fFN0cmluZyhofHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LHk9XCJlblwiLE09e307TVt5XT1kO3ZhciBtPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgU30sRD1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIHk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpTVt0XSYmKHI9dCksZSYmKE1bdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO01baV09dCxyPWl9cmV0dXJuIW4mJnImJih5PXIpLHJ8fCFuJiZ5fSx2PWZ1bmN0aW9uKHQsZSl7aWYobSh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IFMobil9LGc9bDtnLmw9RCxnLmk9bSxnLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdih0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIFM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkKHQpe3RoaXMuJEw9RCh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciAkPWQucHJvdG90eXBlO3JldHVybiAkLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoZy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGgpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sJC5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sJC4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gZ30sJC5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuIShcIkludmFsaWQgRGF0ZVwiPT09dGhpcy4kZC50b1N0cmluZygpKX0sJC5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj12KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LCQuaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB2KHQpPHRoaXMuc3RhcnRPZihlKX0sJC5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHYodCl9LCQuJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBnLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSwkLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSwkLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LCQuc3RhcnRPZj1mdW5jdGlvbih0LGEpe3ZhciBoPXRoaXMsYz0hIWcudShhKXx8YSxkPWcucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIG49Zy53KGguJHU/RGF0ZS5VVEMoaC4keSxlLHQpOm5ldyBEYXRlKGguJHksZSx0KSxoKTtyZXR1cm4gYz9uOm4uZW5kT2YoaSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZy53KGgudG9EYXRlKClbdF0uYXBwbHkoaC50b0RhdGUoXCJzXCIpLChjP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLGgpfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxEPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goZCl7Y2FzZSBvOnJldHVybiBjPyQoMSwwKTokKDMxLDExKTtjYXNlIHU6cmV0dXJuIGM/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugczp2YXIgdj10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsUz0oeTx2P3krNzp5KS12O3JldHVybiAkKGM/bS1TOm0rKDYtUyksTSk7Y2FzZSBpOmNhc2UgZjpyZXR1cm4gbChEK1wiSG91cnNcIiwwKTtjYXNlIHI6cmV0dXJuIGwoRCtcIk1pbnV0ZXNcIiwxKTtjYXNlIG46cmV0dXJuIGwoRCtcIlNlY29uZHNcIiwyKTtjYXNlIGU6cmV0dXJuIGwoRCtcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LCQuZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sJC4kc2V0PWZ1bmN0aW9uKHMsYSl7dmFyIGgsYz1nLnAocyksZD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0oaD17fSxoW2ldPWQrXCJEYXRlXCIsaFtmXT1kK1wiRGF0ZVwiLGhbdV09ZCtcIk1vbnRoXCIsaFtvXT1kK1wiRnVsbFllYXJcIixoW3JdPWQrXCJIb3Vyc1wiLGhbbl09ZCtcIk1pbnV0ZXNcIixoW2VdPWQrXCJTZWNvbmRzXCIsaFt0XT1kK1wiTWlsbGlzZWNvbmRzXCIsaClbY10sbD1jPT09aT90aGlzLiREKyhhLXRoaXMuJFcpOmE7aWYoYz09PXV8fGM9PT1vKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGYsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGYsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LCQuc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LCQuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW2cucCh0KV0oKX0sJC5hZGQ9ZnVuY3Rpb24odCxhKXt2YXIgZixoPXRoaXM7dD1OdW1iZXIodCk7dmFyIGM9Zy5wKGEpLGQ9ZnVuY3Rpb24oZSl7dmFyIG49dihoKTtyZXR1cm4gZy53KG4uZGF0ZShuLmRhdGUoKStNYXRoLnJvdW5kKGUqdCkpLGgpfTtpZihjPT09dSlyZXR1cm4gdGhpcy5zZXQodSx0aGlzLiRNK3QpO2lmKGM9PT1vKXJldHVybiB0aGlzLnNldChvLHRoaXMuJHkrdCk7aWYoYz09PWkpcmV0dXJuIGQoMSk7aWYoYz09PXMpcmV0dXJuIGQoNyk7dmFyICQ9KGY9e30sZltuXT02ZTQsZltyXT0zNmU1LGZbZV09MWUzLGYpW2NdfHwxLGw9dGhpcy4kZC5nZXRUaW1lKCkrdCokO3JldHVybiBnLncobCx0aGlzKX0sJC5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSwkLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm5cIkludmFsaWQgRGF0ZVwiO3ZhciBuPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixyPWcueih0aGlzKSxpPXRoaXMuJGxvY2FsZSgpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89aS53ZWVrZGF5cyxmPWkubW9udGhzLGg9ZnVuY3Rpb24odCxyLGkscyl7cmV0dXJuIHQmJih0W3JdfHx0KGUsbikpfHxpW3JdLnN1YnN0cigwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBnLnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9aS5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Zy5zKGErMSwyLFwiMFwiKSxNTU06aChpLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Zy5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChpLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChpLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpnLnMocywyLFwiMFwiKSxoOmQoMSksaGg6ZCgyKSxhOiQocyx1LCEwKSxBOiQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpnLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpnLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Zy5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6cn07cmV0dXJuIG4ucmVwbGFjZShjLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV8fGxbdF18fHIucmVwbGFjZShcIjpcIixcIlwiKX0pfSwkLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSwkLmRpZmY9ZnVuY3Rpb24odCxmLGgpe3ZhciBjLGQ9Zy5wKGYpLCQ9dih0KSxsPTZlNCooJC51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSx5PXRoaXMtJCxNPWcubSh0aGlzLCQpO3JldHVybiBNPShjPXt9LGNbb109TS8xMixjW3VdPU0sY1thXT1NLzMsY1tzXT0oeS1sKS82MDQ4ZTUsY1tpXT0oeS1sKS84NjRlNSxjW3JdPXkvMzZlNSxjW25dPXkvNmU0LGNbZV09eS8xZTMsYylbZF18fHksaD9NOmcuYShNKX0sJC5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKHUpLiREfSwkLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gTVt0aGlzLiRMXX0sJC5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj1EKHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LCQuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gZy53KHRoaXMuJGQsdGhpcyl9LCQudG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sJC50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LCQudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSwkLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sZH0oKSxwPVMucHJvdG90eXBlO3JldHVybiB2LnByb3RvdHlwZT1wLFtbXCIkbXNcIix0XSxbXCIkc1wiLGVdLFtcIiRtXCIsbl0sW1wiJEhcIixyXSxbXCIkV1wiLGldLFtcIiRNXCIsdV0sW1wiJHlcIixvXSxbXCIkRFwiLGZdXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3BbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pLHYuZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsUyx2KSx0LiRpPSEwKSx2fSx2LmxvY2FsZT1ELHYuaXNEYXlqcz1tLHYudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gdigxZTMqdCl9LHYuZW49TVt5XSx2LkxzPU0sdi5wPXt9LHZ9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5maW5kWWVhckNsb3Nlc3RUb1JlZiA9IGV4cG9ydHMuZmluZE1vc3RMaWtlbHlBRFllYXIgPSB2b2lkIDA7XG5jb25zdCBkYXlqc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkYXlqc1wiKSk7XG5mdW5jdGlvbiBmaW5kTW9zdExpa2VseUFEWWVhcih5ZWFyTnVtYmVyKSB7XG4gICAgaWYgKHllYXJOdW1iZXIgPCAxMDApIHtcbiAgICAgICAgaWYgKHllYXJOdW1iZXIgPiA1MCkge1xuICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAxOTAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAyMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB5ZWFyTnVtYmVyO1xufVxuZXhwb3J0cy5maW5kTW9zdExpa2VseUFEWWVhciA9IGZpbmRNb3N0TGlrZWx5QURZZWFyO1xuZnVuY3Rpb24gZmluZFllYXJDbG9zZXN0VG9SZWYocmVmRGF0ZSwgZGF5LCBtb250aCkge1xuICAgIGNvbnN0IHJlZk1vbWVudCA9IGRheWpzXzEuZGVmYXVsdChyZWZEYXRlKTtcbiAgICBsZXQgZGF0ZU1vbWVudCA9IHJlZk1vbWVudDtcbiAgICBkYXRlTW9tZW50ID0gZGF0ZU1vbWVudC5tb250aChtb250aCAtIDEpO1xuICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50LmRhdGUoZGF5KTtcbiAgICBkYXRlTW9tZW50ID0gZGF0ZU1vbWVudC55ZWFyKHJlZk1vbWVudC55ZWFyKCkpO1xuICAgIGNvbnN0IG5leHRZZWFyID0gZGF0ZU1vbWVudC5hZGQoMSwgXCJ5XCIpO1xuICAgIGNvbnN0IGxhc3RZZWFyID0gZGF0ZU1vbWVudC5hZGQoLTEsIFwieVwiKTtcbiAgICBpZiAoTWF0aC5hYnMobmV4dFllYXIuZGlmZihyZWZNb21lbnQpKSA8IE1hdGguYWJzKGRhdGVNb21lbnQuZGlmZihyZWZNb21lbnQpKSkge1xuICAgICAgICBkYXRlTW9tZW50ID0gbmV4dFllYXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKE1hdGguYWJzKGxhc3RZZWFyLmRpZmYocmVmTW9tZW50KSkgPCBNYXRoLmFicyhkYXRlTW9tZW50LmRpZmYocmVmTW9tZW50KSkpIHtcbiAgICAgICAgZGF0ZU1vbWVudCA9IGxhc3RZZWFyO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZU1vbWVudC55ZWFyKCk7XG59XG5leHBvcnRzLmZpbmRZZWFyQ2xvc2VzdFRvUmVmID0gZmluZFllYXJDbG9zZXN0VG9SZWY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VUaW1lVW5pdHMgPSBleHBvcnRzLlRJTUVfVU5JVFNfUEFUVEVSTiA9IGV4cG9ydHMucGFyc2VZZWFyID0gZXhwb3J0cy5ZRUFSX1BBVFRFUk4gPSBleHBvcnRzLnBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSBleHBvcnRzLk9SRElOQUxfTlVNQkVSX1BBVFRFUk4gPSBleHBvcnRzLnBhcnNlTnVtYmVyUGF0dGVybiA9IGV4cG9ydHMuTlVNQkVSX1BBVFRFUk4gPSBleHBvcnRzLlRJTUVfVU5JVF9ESUNUSU9OQVJZID0gZXhwb3J0cy5PUkRJTkFMX1dPUkRfRElDVElPTkFSWSA9IGV4cG9ydHMuSU5URUdFUl9XT1JEX0RJQ1RJT05BUlkgPSBleHBvcnRzLk1PTlRIX0RJQ1RJT05BUlkgPSBleHBvcnRzLkZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZID0gZXhwb3J0cy5XRUVLREFZX0RJQ1RJT05BUlkgPSB2b2lkIDA7XG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvcGF0dGVyblwiKTtcbmNvbnN0IHllYXJzXzEgPSByZXF1aXJlKFwiLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIik7XG5leHBvcnRzLldFRUtEQVlfRElDVElPTkFSWSA9IHtcbiAgICBzdW5kYXk6IDAsXG4gICAgc3VuOiAwLFxuICAgIFwic3VuLlwiOiAwLFxuICAgIG1vbmRheTogMSxcbiAgICBtb246IDEsXG4gICAgXCJtb24uXCI6IDEsXG4gICAgdHVlc2RheTogMixcbiAgICB0dWU6IDIsXG4gICAgXCJ0dWUuXCI6IDIsXG4gICAgd2VkbmVzZGF5OiAzLFxuICAgIHdlZDogMyxcbiAgICBcIndlZC5cIjogMyxcbiAgICB0aHVyc2RheTogNCxcbiAgICB0aHVyczogNCxcbiAgICBcInRodXJzLlwiOiA0LFxuICAgIHRodXI6IDQsXG4gICAgXCJ0aHVyLlwiOiA0LFxuICAgIHRodTogNCxcbiAgICBcInRodS5cIjogNCxcbiAgICBmcmlkYXk6IDUsXG4gICAgZnJpOiA1LFxuICAgIFwiZnJpLlwiOiA1LFxuICAgIHNhdHVyZGF5OiA2LFxuICAgIHNhdDogNixcbiAgICBcInNhdC5cIjogNixcbn07XG5leHBvcnRzLkZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZID0ge1xuICAgIGphbnVhcnk6IDEsXG4gICAgZmVicnVhcnk6IDIsXG4gICAgbWFyY2g6IDMsXG4gICAgYXByaWw6IDQsXG4gICAgbWF5OiA1LFxuICAgIGp1bmU6IDYsXG4gICAganVseTogNyxcbiAgICBhdWd1c3Q6IDgsXG4gICAgc2VwdGVtYmVyOiA5LFxuICAgIG9jdG9iZXI6IDEwLFxuICAgIG5vdmVtYmVyOiAxMSxcbiAgICBkZWNlbWJlcjogMTIsXG59O1xuZXhwb3J0cy5NT05USF9ESUNUSU9OQVJZID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleHBvcnRzLkZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZKSwgeyBqYW46IDEsIFwiamFuLlwiOiAxLCBmZWI6IDIsIFwiZmViLlwiOiAyLCBtYXI6IDMsIFwibWFyLlwiOiAzLCBhcHI6IDQsIFwiYXByLlwiOiA0LCBqdW46IDYsIFwianVuLlwiOiA2LCBqdWw6IDcsIFwianVsLlwiOiA3LCBhdWc6IDgsIFwiYXVnLlwiOiA4LCBzZXA6IDksIFwic2VwLlwiOiA5LCBzZXB0OiA5LCBcInNlcHQuXCI6IDksIG9jdDogMTAsIFwib2N0LlwiOiAxMCwgbm92OiAxMSwgXCJub3YuXCI6IDExLCBkZWM6IDEyLCBcImRlYy5cIjogMTIgfSk7XG5leHBvcnRzLklOVEVHRVJfV09SRF9ESUNUSU9OQVJZID0ge1xuICAgIG9uZTogMSxcbiAgICB0d286IDIsXG4gICAgdGhyZWU6IDMsXG4gICAgZm91cjogNCxcbiAgICBmaXZlOiA1LFxuICAgIHNpeDogNixcbiAgICBzZXZlbjogNyxcbiAgICBlaWdodDogOCxcbiAgICBuaW5lOiA5LFxuICAgIHRlbjogMTAsXG4gICAgZWxldmVuOiAxMSxcbiAgICB0d2VsdmU6IDEyLFxufTtcbmV4cG9ydHMuT1JESU5BTF9XT1JEX0RJQ1RJT05BUlkgPSB7XG4gICAgZmlyc3Q6IDEsXG4gICAgc2Vjb25kOiAyLFxuICAgIHRoaXJkOiAzLFxuICAgIGZvdXJ0aDogNCxcbiAgICBmaWZ0aDogNSxcbiAgICBzaXh0aDogNixcbiAgICBzZXZlbnRoOiA3LFxuICAgIGVpZ2h0aDogOCxcbiAgICBuaW50aDogOSxcbiAgICB0ZW50aDogMTAsXG4gICAgZWxldmVudGg6IDExLFxuICAgIHR3ZWxmdGg6IDEyLFxuICAgIHRoaXJ0ZWVudGg6IDEzLFxuICAgIGZvdXJ0ZWVudGg6IDE0LFxuICAgIGZpZnRlZW50aDogMTUsXG4gICAgc2l4dGVlbnRoOiAxNixcbiAgICBzZXZlbnRlZW50aDogMTcsXG4gICAgZWlnaHRlZW50aDogMTgsXG4gICAgbmluZXRlZW50aDogMTksXG4gICAgdHdlbnRpZXRoOiAyMCxcbiAgICBcInR3ZW50eSBmaXJzdFwiOiAyMSxcbiAgICBcInR3ZW50eS1maXJzdFwiOiAyMSxcbiAgICBcInR3ZW50eSBzZWNvbmRcIjogMjIsXG4gICAgXCJ0d2VudHktc2Vjb25kXCI6IDIyLFxuICAgIFwidHdlbnR5IHRoaXJkXCI6IDIzLFxuICAgIFwidHdlbnR5LXRoaXJkXCI6IDIzLFxuICAgIFwidHdlbnR5IGZvdXJ0aFwiOiAyNCxcbiAgICBcInR3ZW50eS1mb3VydGhcIjogMjQsXG4gICAgXCJ0d2VudHkgZmlmdGhcIjogMjUsXG4gICAgXCJ0d2VudHktZmlmdGhcIjogMjUsXG4gICAgXCJ0d2VudHkgc2l4dGhcIjogMjYsXG4gICAgXCJ0d2VudHktc2l4dGhcIjogMjYsXG4gICAgXCJ0d2VudHkgc2V2ZW50aFwiOiAyNyxcbiAgICBcInR3ZW50eS1zZXZlbnRoXCI6IDI3LFxuICAgIFwidHdlbnR5IGVpZ2h0aFwiOiAyOCxcbiAgICBcInR3ZW50eS1laWdodGhcIjogMjgsXG4gICAgXCJ0d2VudHkgbmludGhcIjogMjksXG4gICAgXCJ0d2VudHktbmludGhcIjogMjksXG4gICAgXCJ0aGlydGlldGhcIjogMzAsXG4gICAgXCJ0aGlydHkgZmlyc3RcIjogMzEsXG4gICAgXCJ0aGlydHktZmlyc3RcIjogMzEsXG59O1xuZXhwb3J0cy5USU1FX1VOSVRfRElDVElPTkFSWSA9IHtcbiAgICBzZWM6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbWluOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnM6IFwibWludXRlXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgaDogXCJob3VyXCIsXG4gICAgaHI6IFwiaG91clwiLFxuICAgIGhyczogXCJob3VyXCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIGRheTogXCJkXCIsXG4gICAgZGF5czogXCJkXCIsXG4gICAgd2VlazogXCJ3ZWVrXCIsXG4gICAgd2Vla3M6IFwid2Vla1wiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgeTogXCJ5ZWFyXCIsXG4gICAgeXI6IFwieWVhclwiLFxuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbn07XG5leHBvcnRzLk5VTUJFUl9QQVRURVJOID0gYCg/OiR7cGF0dGVybl8xLm1hdGNoQW55UGF0dGVybihleHBvcnRzLklOVEVHRVJfV09SRF9ESUNUSU9OQVJZKX18WzAtOV0rfFswLTldK1xcXFwuWzAtOV0rfGhhbGYoPzpcXFxccyphbj8pP3xhbj8oPzpcXFxccypmZXcpP3xmZXd8c2V2ZXJhbHxhP1xcXFxzKmNvdXBsZVxcXFxzKig/Om9mKT8pYDtcbmZ1bmN0aW9uIHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaCkge1xuICAgIGNvbnN0IG51bSA9IG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGV4cG9ydHMuSU5URUdFUl9XT1JEX0RJQ1RJT05BUllbbnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLklOVEVHRVJfV09SRF9ESUNUSU9OQVJZW251bV07XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bSA9PT0gXCJhXCIgfHwgbnVtID09PSBcImFuXCIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvZmV3LykpIHtcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvaGFsZi8pKSB7XG4gICAgICAgIHJldHVybiAwLjU7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvY291cGxlLykpIHtcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvc2V2ZXJhbC8pKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0pO1xufVxuZXhwb3J0cy5wYXJzZU51bWJlclBhdHRlcm4gPSBwYXJzZU51bWJlclBhdHRlcm47XG5leHBvcnRzLk9SRElOQUxfTlVNQkVSX1BBVFRFUk4gPSBgKD86JHtwYXR0ZXJuXzEubWF0Y2hBbnlQYXR0ZXJuKGV4cG9ydHMuT1JESU5BTF9XT1JEX0RJQ1RJT05BUlkpfXxbMC05XXsxLDJ9KD86c3R8bmR8cmR8dGgpPylgO1xuZnVuY3Rpb24gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaCkge1xuICAgIGxldCBudW0gPSBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChleHBvcnRzLk9SRElOQUxfV09SRF9ESUNUSU9OQVJZW251bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5PUkRJTkFMX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH1cbiAgICBudW0gPSBudW0ucmVwbGFjZSgvKD86c3R8bmR8cmR8dGgpJC9pLCBcIlwiKTtcbiAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbn1cbmV4cG9ydHMucGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm47XG5leHBvcnRzLllFQVJfUEFUVEVSTiA9IGAoPzpbMS05XVswLTldezAsM31cXFxccyooPzpCRXxBRHxCQyl8WzEtMl1bMC05XXszfXxbNS05XVswLTldKWA7XG5mdW5jdGlvbiBwYXJzZVllYXIobWF0Y2gpIHtcbiAgICBpZiAoL0JFL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9CRS9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoKSAtIDU0MztcbiAgICB9XG4gICAgaWYgKC9CQy9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvQkMvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiAtcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cbiAgICBpZiAoL0FEL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9BRC9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoKTtcbiAgICB9XG4gICAgY29uc3QgcmF3WWVhck51bWJlciA9IHBhcnNlSW50KG1hdGNoKTtcbiAgICByZXR1cm4geWVhcnNfMS5maW5kTW9zdExpa2VseUFEWWVhcihyYXdZZWFyTnVtYmVyKTtcbn1cbmV4cG9ydHMucGFyc2VZZWFyID0gcGFyc2VZZWFyO1xuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOID0gYCgke2V4cG9ydHMuTlVNQkVSX1BBVFRFUk59KVxcXFxzezAsNX0oJHtwYXR0ZXJuXzEubWF0Y2hBbnlQYXR0ZXJuKGV4cG9ydHMuVElNRV9VTklUX0RJQ1RJT05BUlkpfSlcXFxcc3swLDV9YDtcbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUkVHRVggPSBuZXcgUmVnRXhwKFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiwgXCJpXCIpO1xuZXhwb3J0cy5USU1FX1VOSVRTX1BBVFRFUk4gPSBwYXR0ZXJuXzEucmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oYCg/Oig/OmFib3V0fGFyb3VuZClcXFxccyopP2AsIFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTik7XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0cyh0aW1ldW5pdFRleHQpIHtcbiAgICBjb25zdCBmcmFnbWVudHMgPSB7fTtcbiAgICBsZXQgcmVtYWluaW5nVGV4dCA9IHRpbWV1bml0VGV4dDtcbiAgICBsZXQgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIGNvbGxlY3REYXRlVGltZUZyYWdtZW50KGZyYWdtZW50cywgbWF0Y2gpO1xuICAgICAgICByZW1haW5pbmdUZXh0ID0gcmVtYWluaW5nVGV4dC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudHM7XG59XG5leHBvcnRzLnBhcnNlVGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHM7XG5mdW5jdGlvbiBjb2xsZWN0RGF0ZVRpbWVGcmFnbWVudChmcmFnbWVudHMsIG1hdGNoKSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VOdW1iZXJQYXR0ZXJuKG1hdGNoWzFdKTtcbiAgICBjb25zdCB1bml0ID0gZXhwb3J0cy5USU1FX1VOSVRfRElDVElPTkFSWVttYXRjaFsyXS50b0xvd2VyQ2FzZSgpXTtcbiAgICBmcmFnbWVudHNbdW5pdF0gPSBudW07XG59XG4iLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTp0LmRheWpzX3BsdWdpbl9xdWFydGVyT2ZZZWFyPW4oKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibW9udGhcIixuPVwicXVhcnRlclwiO3JldHVybiBmdW5jdGlvbihyLGkpe3ZhciBlPWkucHJvdG90eXBlO2UucXVhcnRlcj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kdXRpbHMoKS51KHQpP01hdGguY2VpbCgodGhpcy5tb250aCgpKzEpLzMpOnRoaXMubW9udGgodGhpcy5tb250aCgpJTMrMyoodC0xKSl9O3ZhciB1PWUuYWRkO2UuYWRkPWZ1bmN0aW9uKHIsaSl7cmV0dXJuIHI9TnVtYmVyKHIpLHRoaXMuJHV0aWxzKCkucChpKT09PW4/dGhpcy5hZGQoMypyLHQpOnUuYmluZCh0aGlzKShyLGkpfTt2YXIgcz1lLnN0YXJ0T2Y7ZS5zdGFydE9mPWZ1bmN0aW9uKHIsaSl7dmFyIGU9dGhpcy4kdXRpbHMoKSx1PSEhZS51KGkpfHxpO2lmKGUucChyKT09PW4pe3ZhciBhPXRoaXMucXVhcnRlcigpLTE7cmV0dXJuIHU/dGhpcy5tb250aCgzKmEpLnN0YXJ0T2YodCkuc3RhcnRPZihcImRheVwiKTp0aGlzLm1vbnRoKDMqYSsyKS5lbmRPZih0KS5lbmRPZihcImRheVwiKX1yZXR1cm4gcy5iaW5kKHRoaXMpKHIsaSl9fX0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmltcGx5U2ltaWxhclRpbWUgPSBleHBvcnRzLmFzc2lnblNpbWlsYXJUaW1lID0gZXhwb3J0cy5hc3NpZ25TaW1pbGFyRGF0ZSA9IGV4cG9ydHMuYXNzaWduVGhlTmV4dERheSA9IHZvaWQgMDtcbmZ1bmN0aW9uIGFzc2lnblRoZU5leHREYXkoY29tcG9uZW50LCB0YXJnZXREYXlKcykge1xuICAgIHRhcmdldERheUpzID0gdGFyZ2V0RGF5SnMuYWRkKDEsIFwiZGF5XCIpO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF5SnMpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG59XG5leHBvcnRzLmFzc2lnblRoZU5leHREYXkgPSBhc3NpZ25UaGVOZXh0RGF5O1xuZnVuY3Rpb24gYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXlKcykge1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJkYXlcIiwgdGFyZ2V0RGF5SnMuZGF0ZSgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibW9udGhcIiwgdGFyZ2V0RGF5SnMubW9udGgoKSArIDEpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJ5ZWFyXCIsIHRhcmdldERheUpzLnllYXIoKSk7XG59XG5leHBvcnRzLmFzc2lnblNpbWlsYXJEYXRlID0gYXNzaWduU2ltaWxhckRhdGU7XG5mdW5jdGlvbiBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERheUpzKSB7XG4gICAgY29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgdGFyZ2V0RGF5SnMuaG91cigpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibWludXRlXCIsIHRhcmdldERheUpzLm1pbnV0ZSgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwic2Vjb25kXCIsIHRhcmdldERheUpzLnNlY29uZCgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgdGFyZ2V0RGF5SnMubWlsbGlzZWNvbmQoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRhcmdldERheUpzLnV0Y09mZnNldCgpKTtcbn1cbmV4cG9ydHMuYXNzaWduU2ltaWxhclRpbWUgPSBhc3NpZ25TaW1pbGFyVGltZTtcbmZ1bmN0aW9uIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXlKcykge1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGFyZ2V0RGF5SnMuaG91cigpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGFyZ2V0RGF5SnMubWludXRlKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0YXJnZXREYXlKcy5zZWNvbmQoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGFyZ2V0RGF5SnMubWlsbGlzZWNvbmQoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwidGltZXpvbmVPZmZzZXRcIiwgdGFyZ2V0RGF5SnMudXRjT2Zmc2V0KCkpO1xufVxuZXhwb3J0cy5pbXBseVNpbWlsYXJUaW1lID0gaW1wbHlTaW1pbGFyVGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXJzaW5nUmVzdWx0ID0gZXhwb3J0cy5QYXJzaW5nQ29tcG9uZW50cyA9IHZvaWQgMDtcbmNvbnN0IHF1YXJ0ZXJPZlllYXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anMvcGx1Z2luL3F1YXJ0ZXJPZlllYXJcIikpO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY29uc3QgZGF5anNfMiA9IHJlcXVpcmUoXCIuL3V0aWxzL2RheWpzXCIpO1xuZGF5anNfMS5kZWZhdWx0LmV4dGVuZChxdWFydGVyT2ZZZWFyXzEuZGVmYXVsdCk7XG5jbGFzcyBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3RydWN0b3IocmVmRGF0ZSwga25vd25Db21wb25lbnRzKSB7XG4gICAgICAgIHRoaXMua25vd25WYWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pbXBsaWVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChrbm93bkNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGtub3duQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMua25vd25WYWx1ZXNba2V5XSA9IGtub3duQ29tcG9uZW50c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZkRheUpzID0gZGF5anNfMS5kZWZhdWx0KHJlZkRhdGUpO1xuICAgICAgICB0aGlzLmltcGx5KFwiZGF5XCIsIHJlZkRheUpzLmRhdGUoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtb250aFwiLCByZWZEYXlKcy5tb250aCgpICsgMSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJ5ZWFyXCIsIHJlZkRheUpzLnllYXIoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJob3VyXCIsIDEyKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIH1cbiAgICBnZXQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMuaW1wbGllZFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXlqcygpLnRvRGF0ZSgpO1xuICAgIH1cbiAgICBpc0NlcnRhaW4oY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcztcbiAgICB9XG4gICAgZ2V0Q2VydGFpbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmtub3duVmFsdWVzKTtcbiAgICB9XG4gICAgaW1wbHkoY29tcG9uZW50LCB2YWx1ZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhc3NpZ24oY29tcG9uZW50LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmtub3duVmFsdWVzW2NvbXBvbmVudF0gPSB2YWx1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVsZXRlKGNvbXBvbmVudCkge1xuICAgICAgICBkZWxldGUgdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICBkZWxldGUgdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMobmV3IERhdGUoKSk7XG4gICAgICAgIGNvbXBvbmVudC5rbm93blZhbHVlcyA9IHt9O1xuICAgICAgICBjb21wb25lbnQuaW1wbGllZFZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQua25vd25WYWx1ZXNba2V5XSA9IHRoaXMua25vd25WYWx1ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmltcGxpZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5pbXBsaWVkVmFsdWVzW2tleV0gPSB0aGlzLmltcGxpZWRWYWx1ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbiAgICBpc09ubHlEYXRlKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDZXJ0YWluKFwiaG91clwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJtaW51dGVcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwic2Vjb25kXCIpO1xuICAgIH1cbiAgICBpc09ubHlUaW1lKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDZXJ0YWluKFwid2Vla2RheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibW9udGhcIik7XG4gICAgfVxuICAgIGlzT25seVdlZWtkYXlDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2VydGFpbihcIndlZWtkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwiZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpO1xuICAgIH1cbiAgICBpc09ubHlEYXlNb250aENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDZXJ0YWluKFwiZGF5XCIpICYmIHRoaXMuaXNDZXJ0YWluKFwibW9udGhcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwieWVhclwiKTtcbiAgICB9XG4gICAgaXNWYWxpZERhdGUoKSB7XG4gICAgICAgIGxldCBkYXRlTW9tZW50ID0gdGhpcy5kYXlqcygpO1xuICAgICAgICBpZiAodGhpcy5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgY29uc3QgYWRqdXN0VGltZXpvbmVPZmZzZXQgPSB0aGlzLmdldChcInRpbWV6b25lT2Zmc2V0XCIpIC0gZGF0ZU1vbWVudC51dGNPZmZzZXQoKTtcbiAgICAgICAgICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50LmFkZChhZGp1c3RUaW1lem9uZU9mZnNldCwgXCJtaW51dGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVNb21lbnQuZ2V0KFwieWVhclwiKSAhPSB0aGlzLmdldChcInllYXJcIikpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkYXRlTW9tZW50LmdldChcIm1vbnRoXCIpICE9IHRoaXMuZ2V0KFwibW9udGhcIikgLSAxKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZGF0ZU1vbWVudC5nZXQoXCJkYXRlXCIpICE9IHRoaXMuZ2V0KFwiZGF5XCIpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nZXQoXCJob3VyXCIpICE9IG51bGwgJiYgZGF0ZU1vbWVudC5nZXQoXCJob3VyXCIpICE9IHRoaXMuZ2V0KFwiaG91clwiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KFwibWludXRlXCIpICE9IG51bGwgJiYgZGF0ZU1vbWVudC5nZXQoXCJtaW51dGVcIikgIT0gdGhpcy5nZXQoXCJtaW51dGVcIikpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBkYXlqcygpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRheWpzXzEuZGVmYXVsdCgpO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQueWVhcih0aGlzLmdldChcInllYXJcIikpO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQubW9udGgodGhpcy5nZXQoXCJtb250aFwiKSAtIDEpO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuZGF0ZSh0aGlzLmdldChcImRheVwiKSk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5ob3VyKHRoaXMuZ2V0KFwiaG91clwiKSk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5taW51dGUodGhpcy5nZXQoXCJtaW51dGVcIikpO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2Vjb25kKHRoaXMuZ2V0KFwic2Vjb25kXCIpKTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1pbGxpc2Vjb25kKHRoaXMuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZXpvbmVPZmZzZXQgPSByZXN1bHQudXRjT2Zmc2V0KCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFRpbWV6b25lT2Zmc2V0ID0gdGhpcy5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKSAhPT0gbnVsbCA/IHRoaXMuZ2V0KFwidGltZXpvbmVPZmZzZXRcIikgOiBjdXJyZW50VGltZXpvbmVPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGFkanVzdFRpbWV6b25lT2Zmc2V0ID0gdGFyZ2V0VGltZXpvbmVPZmZzZXQgLSBjdXJyZW50VGltZXpvbmVPZmZzZXQ7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5hZGQoLWFkanVzdFRpbWV6b25lT2Zmc2V0LCBcIm1pbnV0ZVwiKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgW1BhcnNpbmdDb21wb25lbnRzIHtrbm93blZhbHVlczogJHtKU09OLnN0cmluZ2lmeSh0aGlzLmtub3duVmFsdWVzKX0sIGltcGxpZWRWYWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5pbXBsaWVkVmFsdWVzKX19XWA7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVSZWxhdGl2ZUZyb21SZWZEYXRlKHJlZkRhdGUsIGZyYWdtZW50cykge1xuICAgICAgICBsZXQgZGF0ZSA9IGRheWpzXzEuZGVmYXVsdChyZWZEYXRlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZnJhZ21lbnRzKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoZnJhZ21lbnRzW2tleV0sIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZEYXRlKTtcbiAgICAgICAgaWYgKGZyYWdtZW50c1tcImhvdXJcIl0gfHwgZnJhZ21lbnRzW1wibWludXRlXCJdIHx8IGZyYWdtZW50c1tcInNlY29uZFwiXSkge1xuICAgICAgICAgICAgZGF5anNfMi5hc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGRheWpzXzIuYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXlqc18yLmltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBpZiAoZnJhZ21lbnRzW1wiZFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnRzW1wid2Vla1wiXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwid2Vla2RheVwiLCBkYXRlLmRheSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50c1tcIm1vbnRoXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudHNbXCJ5ZWFyXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbmV4cG9ydHMuUGFyc2luZ0NvbXBvbmVudHMgPSBQYXJzaW5nQ29tcG9uZW50cztcbmNsYXNzIFBhcnNpbmdSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHJlZkRhdGUsIGluZGV4LCB0ZXh0LCBzdGFydCwgZW5kKSB7XG4gICAgICAgIHRoaXMucmVmRGF0ZSA9IHJlZkRhdGU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0IHx8IG5ldyBQYXJzaW5nQ29tcG9uZW50cyh0aGlzLnJlZkRhdGUpO1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQYXJzaW5nUmVzdWx0KHRoaXMucmVmRGF0ZSwgdGhpcy5pbmRleCwgdGhpcy50ZXh0KTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gdGhpcy5zdGFydCA/IHRoaXMuc3RhcnQuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLmVuZCA/IHRoaXMuZW5kLmNsb25lKCkgOiBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydC5kYXRlKCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFtQYXJzaW5nUmVzdWx0IHtpbmRleDogJHt0aGlzLmluZGV4fSwgdGV4dDogJyR7dGhpcy50ZXh0fScsIC4uLn1dYDtcbiAgICB9XG59XG5leHBvcnRzLlBhcnNpbmdSZXN1bHQgPSBQYXJzaW5nUmVzdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nID0gdm9pZCAwO1xuY2xhc3MgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlZElubmVyUGF0dGVybiA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FjaGVkUGF0dGVybiA9IG51bGw7XG4gICAgfVxuICAgIHBhdHRlcm4oY29udGV4dCkge1xuICAgICAgICBjb25zdCBpbm5lclBhdHRlcm4gPSB0aGlzLmlubmVyUGF0dGVybihjb250ZXh0KTtcbiAgICAgICAgaWYgKGlubmVyUGF0dGVybiA9PSB0aGlzLmNhY2hlZElubmVyUGF0dGVybikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlZFBhdHRlcm4gPSBuZXcgUmVnRXhwKGAoXFxcXFd8Xikke2lubmVyUGF0dGVybi5zb3VyY2V9YCwgaW5uZXJQYXR0ZXJuLmZsYWdzKTtcbiAgICAgICAgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4gPSBpbm5lclBhdHRlcm47XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFBhdHRlcm47XG4gICAgfVxuICAgIGV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbWF0Y2hbMV07XG4gICAgICAgIG1hdGNoLmluZGV4ID0gbWF0Y2guaW5kZXggKyBoZWFkZXIubGVuZ3RoO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnN1YnN0cmluZyhoZWFkZXIubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBtYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWF0Y2hbaSAtIDFdID0gbWF0Y2hbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKTtcbiAgICB9XG59XG5leHBvcnRzLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nID0gQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IHJlc3VsdHNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9yZXN1bHRzXCIpO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3QgUEFUVEVSTl9XSVRIX1BSRUZJWCA9IG5ldyBSZWdFeHAoYCg/OndpdGhpbnxpbnxmb3IpXFxcXHMqYCArXG4gICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke2NvbnN0YW50c18xLlRJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLCBcImlcIik7XG5jb25zdCBQQVRURVJOX1dJVEhPVVRfUFJFRklYID0gbmV3IFJlZ0V4cChgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7Y29uc3RhbnRzXzEuVElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNsYXNzIEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQub3B0aW9uLmZvcndhcmREYXRlID8gUEFUVEVSTl9XSVRIT1VUX1BSRUZJWCA6IFBBVFRFUk5fV0lUSF9QUkVGSVg7XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBjb25zdGFudHNfMS5wYXJzZVRpbWVVbml0cyhtYXRjaFsxXSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmRGF0ZShjb250ZXh0LnJlZkRhdGUsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgeWVhcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiKTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IGNvbnN0YW50c18yID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IGNvbnN0YW50c18zID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IHBhdHRlcm5fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCIpO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoPzpvblxcXFxzKj8pP1wiICtcbiAgICBgKCR7Y29uc3RhbnRzXzMuT1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pYCArXG4gICAgXCIoPzpcXFxccypcIiArXG4gICAgXCIoPzp0b3xcXFxcLXxcXFxc4oCTfHVudGlsfHRocm91Z2h8dGlsbHxcXFxccylcXFxccypcIiArXG4gICAgYCgke2NvbnN0YW50c18zLk9SRElOQUxfTlVNQkVSX1BBVFRFUk59KWAgK1xuICAgIFwiKT9cIiArXG4gICAgXCIoPzotfC98XFxcXHMqKD86b2YpP1xcXFxzKilcIiArXG4gICAgXCIoXCIgK1xuICAgIHBhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWSkgK1xuICAgIFwiKVwiICtcbiAgICBcIig/OlwiICtcbiAgICBcIig/Oi18L3wsP1xcXFxzKilcIiArXG4gICAgYCgke2NvbnN0YW50c18yLllFQVJfUEFUVEVSTn0oPyFbXlxcXFxzXVxcXFxkKSlgICtcbiAgICBcIik/XCIgK1xuICAgIFwiKD89XFxcXFd8JClcIiwgXCJpXCIpO1xuY29uc3QgREFURV9HUk9VUCA9IDE7XG5jb25zdCBEQVRFX1RPX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAzO1xuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5jbGFzcyBFTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gY29uc3RhbnRzXzMucGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX0dST1VQXSk7XG4gICAgICAgIGlmIChkYXkgPiAzMSkge1xuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoW0RBVEVfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJkYXlcIiwgZGF5KTtcbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyTnVtYmVyID0gY29uc3RhbnRzXzIucGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHllYXJzXzEuZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCBlbmREYXRlID0gY29uc3RhbnRzXzMucGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX1RPX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuZW5kID0gcmVzdWx0LnN0YXJ0LmNsb25lKCk7XG4gICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcImRheVwiLCBlbmREYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB5ZWFyc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgY29uc3RhbnRzXzIgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgY29uc3RhbnRzXzMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7cGF0dGVybl8xLm1hdGNoQW55UGF0dGVybihjb25zdGFudHNfMS5NT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgXCIoPzotfC98XFxcXHMqLD9cXFxccyopXCIgK1xuICAgIGAoJHtjb25zdGFudHNfMi5PUkRJTkFMX05VTUJFUl9QQVRURVJOfSkoPyFcXFxccyooPzphbXxwbSkpXFxcXHMqYCArXG4gICAgXCIoPzpcIiArXG4gICAgXCIoPzp0b3xcXFxcLSlcXFxccypcIiArXG4gICAgYCgke2NvbnN0YW50c18yLk9SRElOQUxfTlVNQkVSX1BBVFRFUk59KVxcXFxzKmAgK1xuICAgIFwiKT9cIiArXG4gICAgXCIoPzpcIiArXG4gICAgXCIoPzotfC98XFxcXHMqLD9cXFxccyopXCIgK1xuICAgIGAoJHtjb25zdGFudHNfMy5ZRUFSX1BBVFRFUk59KWAgK1xuICAgIFwiKT9cIiArXG4gICAgXCIoPz1cXFxcV3wkKSg/IVxcXFw6XFxcXGQpXCIsIFwiaVwiKTtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAxO1xuY29uc3QgREFURV9HUk9VUCA9IDI7XG5jb25zdCBEQVRFX1RPX0dST1VQID0gMztcbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuY2xhc3MgRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gY29uc3RhbnRzXzIucGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX0dST1VQXSk7XG4gICAgICAgIGlmIChkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoe1xuICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBjb25zdGFudHNfMy5wYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHllYXJzXzEuZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWF0Y2hbREFURV9UT19HUk9VUF0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBjb25zdGFudHNfMi5wYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfVE9fR1JPVVBdKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IGNvbXBvbmVudHM7XG4gICAgICAgIHJlc3VsdC5lbmQgPSBjb21wb25lbnRzLmNsb25lKCk7XG4gICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwiZGF5XCIsIGVuZERhdGUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCB5ZWFyc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCIpO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5jb25zdCBjb25zdGFudHNfMiA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKCg/OmluKVxcXFxzKik/YCArXG4gICAgYCgke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgIGBcXFxccypgICtcbiAgICBgKD86YCArXG4gICAgYFssLV0/XFxcXHMqKCR7Y29uc3RhbnRzXzIuWUVBUl9QQVRURVJOfSk/YCArXG4gICAgXCIpP1wiICtcbiAgICBcIig/PVteXFxcXHNcXFxcd118XFxcXHMrW14wLTldfFxcXFxzKyR8JClcIiwgXCJpXCIpO1xuY29uc3QgUFJFRklYX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAyO1xuY29uc3QgWUVBUl9HUk9VUCA9IDM7XG5jbGFzcyBFTk1vbnRoTmFtZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lID0gbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKG1hdGNoWzBdLmxlbmd0aCA8PSAzICYmICFjb25zdGFudHNfMS5GVUxMX01PTlRIX05BTUVfRElDVElPTkFSWVttb250aE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXggKyAobWF0Y2hbUFJFRklYX0dST1VQXSB8fCBcIlwiKS5sZW5ndGgsIG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIDEpO1xuICAgICAgICBjb25zdCBtb250aCA9IGNvbnN0YW50c18xLk1PTlRIX0RJQ1RJT05BUllbbW9udGhOYW1lXTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKTtcbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gY29uc3RhbnRzXzIucGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHllYXJzXzEuZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCAxLCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRU5Nb250aE5hbWVQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IHBhdHRlcm5fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCIpO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYChbMC05XXs0fSlbXFxcXC5cXFxcL1xcXFxzXWAgK1xuICAgIGAoPzooJHtwYXR0ZXJuXzEubWF0Y2hBbnlQYXR0ZXJuKGNvbnN0YW50c18xLk1PTlRIX0RJQ1RJT05BUlkpfSl8KFswLTldezEsMn0pKVtcXFxcLlxcXFwvXFxcXHNdYCArXG4gICAgYChbMC05XXsxLDJ9KWAgK1xuICAgIFwiKD89XFxcXFd8JClcIiwgXCJpXCIpO1xuY29uc3QgWUVBUl9OVU1CRVJfR1JPVVAgPSAxO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDI7XG5jb25zdCBNT05USF9OVU1CRVJfR1JPVVAgPSAzO1xuY29uc3QgREFURV9OVU1CRVJfR1JPVVAgPSA0O1xuY2xhc3MgRU5DYXN1YWxZZWFyTW9udGhEYXlQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gbWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXVxuICAgICAgICAgICAgPyBwYXJzZUludChtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdKVxuICAgICAgICAgICAgOiBjb25zdGFudHNfMS5NT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChtYXRjaFtZRUFSX05VTUJFUl9HUk9VUF0pO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZUludChtYXRjaFtEQVRFX05VTUJFUl9HUk9VUF0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVOQ2FzdWFsWWVhck1vbnRoRGF5UGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcIihbMC05XXwwWzEtOV18MVswMTJdKS8oWzAtOV17NH0pXCIgKyBcIlwiLCBcImlcIik7XG5jb25zdCBNT05USF9HUk9VUCA9IDE7XG5jb25zdCBZRUFSX0dST1VQID0gMjtcbmNsYXNzIEVOU2xhc2hNb250aEZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChtYXRjaFtNT05USF9HUk9VUF0pO1xuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpLmltcGx5KFwiZGF5XCIsIDEpLmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKS5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVOU2xhc2hNb250aEZvcm1hdFBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyID0gdm9pZCAwO1xuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi8uLi9pbmRleFwiKTtcbmNvbnN0IGRheWpzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRheWpzXCIpKTtcbmZ1bmN0aW9uIHByaW1hcnlUaW1lUGF0dGVybihwcmltYXJ5UHJlZml4LCBwcmltYXJ5U3VmZml4KSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoXnxcXFxcc3xUKVwiICtcbiAgICAgICAgYCR7cHJpbWFyeVByZWZpeH1gICtcbiAgICAgICAgXCIoXFxcXGR7MSw0fSlcIiArXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICBcIig/OlxcXFwufFxcXFw6fFxcXFzvvJopXCIgK1xuICAgICAgICBcIihcXFxcZHsxLDJ9KVwiICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgIFwiKD86XFxcXDp8XFxcXO+8milcIiArXG4gICAgICAgIFwiKFxcXFxkezJ9KVwiICtcbiAgICAgICAgXCIoPzpcXFxcLihcXFxcZHsxLDZ9KSk/XCIgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/OlxcXFxzKihhXFxcXC5tXFxcXC58cFxcXFwubVxcXFwufGFtP3xwbT8pKT9cIiArXG4gICAgICAgIGAke3ByaW1hcnlTdWZmaXh9YCwgXCJpXCIpO1xufVxuZnVuY3Rpb24gZm9sbG93aW5nVGltZVBhdHRlbihmb2xsb3dpbmdQaGFzZSwgZm9sbG93aW5nU3VmZml4KSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4oJHtmb2xsb3dpbmdQaGFzZX0pYCArXG4gICAgICAgIFwiKFxcXFxkezEsNH0pXCIgK1xuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgXCIoPzpcXFxcLnxcXFxcOnxcXFxc77yaKVwiICtcbiAgICAgICAgXCIoXFxcXGR7MSwyfSlcIiArXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICBcIig/OlxcXFwufFxcXFw6fFxcXFzvvJopXCIgK1xuICAgICAgICBcIihcXFxcZHsxLDJ9KSg/OlxcXFwuKFxcXFxkezEsNn0pKT9cIiArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD86XFxcXHMqKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC58YW0/fHBtPykpP1wiICtcbiAgICAgICAgYCR7Zm9sbG93aW5nU3VmZml4fWAsIFwiaVwiKTtcbn1cbmNvbnN0IEhPVVJfR1JPVVAgPSAyO1xuY29uc3QgTUlOVVRFX0dST1VQID0gMztcbmNvbnN0IFNFQ09ORF9HUk9VUCA9IDQ7XG5jb25zdCBNSUxMSV9TRUNPTkRfR1JPVVAgPSA1O1xuY29uc3QgQU1fUE1fSE9VUl9HUk9VUCA9IDY7XG5jbGFzcyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpY3RNb2RlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5U3VmZml4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm4gPSBudWxsO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1BoYXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdTdWZmaXggPSBudWxsO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW4gPSBudWxsO1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBzdHJpY3RNb2RlO1xuICAgIH1cbiAgICBwcmltYXJ5U3VmZml4KCkge1xuICAgICAgICByZXR1cm4gXCIoPz1cXFxcV3wkKVwiO1xuICAgIH1cbiAgICBmb2xsb3dpbmdTdWZmaXgoKSB7XG4gICAgICAgIHJldHVybiBcIig/PVxcXFxXfCQpXCI7XG4gICAgfVxuICAgIHBhdHRlcm4oY29udGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcmltYXJ5VGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKTtcbiAgICB9XG4gICAgZXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCByZWZEYXRlID0gZGF5anNfMS5kZWZhdWx0KGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCArIG1hdGNoWzFdLmxlbmd0aCwgbWF0Y2hbMF0uc3Vic3RyaW5nKG1hdGNoWzFdLmxlbmd0aCkpO1xuICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgcmVmRGF0ZS5kYXRlKCkpO1xuICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtb250aFwiLCByZWZEYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCByZWZEYXRlLnllYXIoKSk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgIGlmICghcmVzdWx0LnN0YXJ0KSB7XG4gICAgICAgICAgICBtYXRjaC5pbmRleCArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW1haW5pbmdUZXh0ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1BhdHRlcm4gPSB0aGlzLmdldEZvbGxvd2luZ1RpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCk7XG4gICAgICAgIG1hdGNoID0gZm9sbG93aW5nUGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgICAgICBpZiAoIW1hdGNoIHx8XG4gICAgICAgICAgICBtYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezMsNH0kLykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrQW5kUmV0dXJuV2l0aG91dEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5leHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gsIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQuZW5kKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gsIHN0cmljdCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGxldCBob3VyID0gMDtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IDA7XG4gICAgICAgIGxldCBtZXJpZGllbSA9IG51bGw7XG4gICAgICAgIGhvdXIgPSBwYXJzZUludChtYXRjaFtIT1VSX0dST1VQXSk7XG4gICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdLmxlbmd0aCA9PSAxICYmICFtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQobWF0Y2hbTUlOVVRFX0dST1VQXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaG91ciA+IDEwMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWludXRlID0gaG91ciAlIDEwMDtcbiAgICAgICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKGhvdXIgLyAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW51dGUgPj0gNjAgfHwgaG91ciA+IDI0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICBtZXJpZGllbSA9IGluZGV4XzEuTWVyaWRpZW0uUE07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChob3VyID4gMTIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCBhbXBtID0gbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF1bMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChhbXBtID09IFwiYVwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBpbmRleF8xLk1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbXBtID09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBpbmRleF8xLk1lcmlkaWVtLlBNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyKTtcbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgbWludXRlKTtcbiAgICAgICAgaWYgKG1lcmlkaWVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIG1lcmlkaWVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWlsbGlzZWNvbmQgPSBwYXJzZUludChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdLnN1YnN0cmluZygwLCAzKSk7XG4gICAgICAgICAgICBpZiAobWlsbGlzZWNvbmQgPj0gMTAwMClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFtTRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IHBhcnNlSW50KG1hdGNoW1NFQ09ORF9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHNlY29uZCA+PSA2MClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuICAgIGV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGlmIChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXS5zdWJzdHJpbmcoMCwgMykpO1xuICAgICAgICAgICAgaWYgKG1pbGxpc2Vjb25kID49IDEwMDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBwYXJzZUludChtYXRjaFtTRUNPTkRfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmQgPj0gNjApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBzZWNvbmQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQobWF0Y2hbSE9VUl9HUk9VUF0pO1xuICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgbGV0IG1lcmlkaWVtID0gLTE7XG4gICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KG1hdGNoW01JTlVURV9HUk9VUF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhvdXIgPiAxMDApIHtcbiAgICAgICAgICAgIG1pbnV0ZSA9IGhvdXIgJSAxMDA7XG4gICAgICAgICAgICBob3VyID0gTWF0aC5mbG9vcihob3VyIC8gMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWludXRlID49IDYwIHx8IGhvdXIgPiAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXIgPj0gMTIpIHtcbiAgICAgICAgICAgIG1lcmlkaWVtID0gaW5kZXhfMS5NZXJpZGllbS5QTTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYW1wbSA9IG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcImFcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gaW5kZXhfMS5NZXJpZGllbS5BTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRzLmlzQ2VydGFpbihcImRheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBjb21wb25lbnRzLmdldChcImRheVwiKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IGluZGV4XzEuTWVyaWRpZW0uUE07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgIT0gMTIpXG4gICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSkge1xuICAgICAgICAgICAgICAgIGlmIChtZXJpZGllbSA9PSBpbmRleF8xLk1lcmlkaWVtLkFNKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgPT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiaG91clwiLCByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91cik7XG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIG1pbnV0ZSk7XG4gICAgICAgIGlmIChtZXJpZGllbSA+PSAwKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIG1lcmlkaWVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QXRQTSA9IHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSAmJiByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSA+IDEyO1xuICAgICAgICAgICAgaWYgKHN0YXJ0QXRQTSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSAtIDEyID4gaG91cikge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhvdXIgPD0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGhvdXIgKyAxMik7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaG91ciA8PSAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9uZW50cy5kYXRlKCkuZ2V0VGltZSgpIDwgcmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgY29tcG9uZW50cy5nZXQoXCJkYXlcIikgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG4gICAgY2hlY2tBbmRSZXR1cm5XaXRob3V0Rm9sbG93aW5nUGF0dGVybihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbmRpbmdXaXRoTnVtYmVycyA9IHJlc3VsdC50ZXh0Lm1hdGNoKC9bXlxcZDouXShcXGRbXFxkLl0rKSQvKTtcbiAgICAgICAgaWYgKGVuZGluZ1dpdGhOdW1iZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJzID0gZW5kaW5nV2l0aE51bWJlcnNbMV07XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVycy5pbmNsdWRlcyhcIi5cIikgJiYgIWVuZGluZ051bWJlcnMubWF0Y2goL1xcZChcXC5cXGR7Mn0pKyQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyVmFsID0gcGFyc2VJbnQoZW5kaW5nTnVtYmVycyk7XG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVyVmFsID4gMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBnZXRQcmltYXJ5VGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKSB7XG4gICAgICAgIGNvbnN0IHByaW1hcnlQcmVmaXggPSB0aGlzLnByaW1hcnlQcmVmaXgoKTtcbiAgICAgICAgY29uc3QgcHJpbWFyeVN1ZmZpeCA9IHRoaXMucHJpbWFyeVN1ZmZpeCgpO1xuICAgICAgICBpZiAodGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID09PSBwcmltYXJ5UHJlZml4ICYmIHRoaXMuY2FjaGVkUHJpbWFyeVN1ZmZpeCA9PT0gcHJpbWFyeVN1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuID0gcHJpbWFyeVRpbWVQYXR0ZXJuKHByaW1hcnlQcmVmaXgsIHByaW1hcnlTdWZmaXgpO1xuICAgICAgICB0aGlzLmNhY2hlZFByaW1hcnlQcmVmaXggPSBwcmltYXJ5UHJlZml4O1xuICAgICAgICB0aGlzLmNhY2hlZFByaW1hcnlTdWZmaXggPSBwcmltYXJ5U3VmZml4O1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm47XG4gICAgfVxuICAgIGdldEZvbGxvd2luZ1RpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCkge1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdQaGFzZSA9IHRoaXMuZm9sbG93aW5nUGhhc2UoKTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nU3VmZml4ID0gdGhpcy5mb2xsb3dpbmdTdWZmaXgoKTtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkRm9sbG93aW5nUGhhc2UgPT09IGZvbGxvd2luZ1BoYXNlICYmIHRoaXMuY2FjaGVkRm9sbG93aW5nU3VmZml4ID09PSBmb2xsb3dpbmdTdWZmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuID0gZm9sbG93aW5nVGltZVBhdHRlbihmb2xsb3dpbmdQaGFzZSwgZm9sbG93aW5nU3VmZml4KTtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdQaGFzZSA9IGZvbGxvd2luZ1BoYXNlO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9IGZvbGxvd2luZ1N1ZmZpeDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbjtcbiAgICB9XG59XG5leHBvcnRzLkFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIgPSBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpbmRleF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2luZGV4XCIpO1xuY29uc3QgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlcl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXJcIik7XG5jbGFzcyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlcl8xLkFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0cmljdE1vZGUpIHtcbiAgICAgICAgc3VwZXIoc3RyaWN0TW9kZSk7XG4gICAgfVxuICAgIGZvbGxvd2luZ1BoYXNlKCkge1xuICAgICAgICByZXR1cm4gXCJcXFxccyooPzpcXFxcLXxcXFxc4oCTfFxcXFx+fFxcXFzjgJx8dG98XFxcXD8pXFxcXHMqXCI7XG4gICAgfVxuICAgIHByaW1hcnlQcmVmaXgoKSB7XG4gICAgICAgIHJldHVybiBcIig/Oig/OmF0fGZyb20pXFxcXHMqKT8/XCI7XG4gICAgfVxuICAgIHByaW1hcnlTdWZmaXgoKSB7XG4gICAgICAgIHJldHVybiBcIig/OlxcXFxzKig/Om9cXFxcVypjbG9ja3xhdFxcXFxzKm5pZ2h0fGluXFxcXHMqdGhlXFxcXHMqKD86bW9ybmluZ3xhZnRlcm5vb24pKSk/KD89XFxcXFd8JClcIjtcbiAgICB9XG4gICAgZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gc3VwZXIuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJuaWdodFwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPj0gNiAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaG91ciA8IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJhZnRlcm5vb25cIikpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPj0gMCAmJiBob3VyIDw9IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJtb3JuaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVOVGltZUV4cHJlc3Npb25QYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWRkSW1wbGllZFRpbWVVbml0cyA9IGV4cG9ydHMucmV2ZXJzZVRpbWVVbml0cyA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzKSB7XG4gICAgY29uc3QgcmV2ZXJzZWQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgcmV2ZXJzZWRba2V5XSA9IC10aW1lVW5pdHNba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHJldmVyc2VkO1xufVxuZXhwb3J0cy5yZXZlcnNlVGltZVVuaXRzID0gcmV2ZXJzZVRpbWVVbml0cztcbmZ1bmN0aW9uIGFkZEltcGxpZWRUaW1lVW5pdHMoY29tcG9uZW50cywgdGltZVVuaXRzKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gY29tcG9uZW50cy5jbG9uZSgpO1xuICAgIGxldCBkYXRlID0gY29tcG9uZW50cy5kYXlqcygpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRpbWVVbml0cykge1xuICAgICAgICBkYXRlID0gZGF0ZS5hZGQodGltZVVuaXRzW2tleV0sIGtleSk7XG4gICAgfVxuICAgIGlmIChcImRheVwiIGluIHRpbWVVbml0cyB8fCBcImRcIiBpbiB0aW1lVW5pdHMgfHwgXCJ3ZWVrXCIgaW4gdGltZVVuaXRzIHx8IFwibW9udGhcIiBpbiB0aW1lVW5pdHMgfHwgXCJ5ZWFyXCIgaW4gdGltZVVuaXRzKSB7XG4gICAgICAgIG91dHB1dC5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICB9XG4gICAgaWYgKFwic2Vjb25kXCIgaW4gdGltZVVuaXRzIHx8IFwibWludXRlXCIgaW4gdGltZVVuaXRzIHx8IFwiaG91clwiIGluIHRpbWVVbml0cykge1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJzZWNvbmRcIiwgZGF0ZS5zZWNvbmQoKSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcIm1pbnV0ZVwiLCBkYXRlLm1pbnV0ZSgpKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwiaG91clwiLCBkYXRlLmhvdXIoKSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5leHBvcnRzLmFkZEltcGxpZWRUaW1lVW5pdHMgPSBhZGRJbXBsaWVkVGltZVVuaXRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCByZXN1bHRzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcmVzdWx0c1wiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IHRpbWV1bml0c18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0c1wiKTtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFwiXCIgKyBcIihcIiArIGNvbnN0YW50c18xLlRJTUVfVU5JVFNfUEFUVEVSTiArIFwiKVwiICsgXCIoPzphZ298YmVmb3JlfGVhcmxpZXIpKD89KD86XFxcXFd8JCkpXCIsIFwiaVwiKTtcbmNvbnN0IFNUUklDVF9QQVRURVJOID0gbmV3IFJlZ0V4cChcIlwiICsgXCIoXCIgKyBjb25zdGFudHNfMS5USU1FX1VOSVRTX1BBVFRFUk4gKyBcIilcIiArIFwiYWdvKD89KD86XFxcXFd8JCkpXCIsIFwiaVwiKTtcbmNsYXNzIEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBzdHJpY3RNb2RlO1xuICAgIH1cbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmljdE1vZGUgPyBTVFJJQ1RfUEFUVEVSTiA6IFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBjb25zdGFudHNfMS5wYXJzZVRpbWVVbml0cyhtYXRjaFsxXSk7XG4gICAgICAgIGNvbnN0IG91dHB1dFRpbWVVbml0cyA9IHRpbWV1bml0c18xLnJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNfMS5QYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZEYXRlKGNvbnRleHQucmVmRGF0ZSwgb3V0cHV0VGltZVVuaXRzKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCByZXN1bHRzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcmVzdWx0c1wiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFwiXCIgKyBcIihcIiArIGNvbnN0YW50c18xLlRJTUVfVU5JVFNfUEFUVEVSTiArIFwiKVwiICsgXCIobGF0ZXJ8YWZ0ZXJ8ZnJvbSBub3d8aGVuY2Vmb3J0aHxmb3J3YXJkfG91dClcIiArIFwiKD89KD86XFxcXFd8JCkpXCIsIFwiaVwiKTtcbmNvbnN0IFNUUklDVF9QQVRURVJOID0gbmV3IFJlZ0V4cChcIlwiICsgXCIoXCIgKyBjb25zdGFudHNfMS5USU1FX1VOSVRTX1BBVFRFUk4gKyBcIilcIiArIFwiKGxhdGVyfGZyb20gbm93KVwiICsgXCIoPz0oPzpcXFxcV3wkKSlcIiwgXCJpXCIpO1xuY29uc3QgR1JPVVBfTlVNX1RJTUVVTklUUyA9IDE7XG5jbGFzcyBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBzdHJpY3RNb2RlO1xuICAgIH1cbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmljdE1vZGUgPyBTVFJJQ1RfUEFUVEVSTiA6IFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBmcmFnbWVudHMgPSBjb25zdGFudHNfMS5wYXJzZVRpbWVVbml0cyhtYXRjaFtHUk9VUF9OVU1fVElNRVVOSVRTXSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmRGF0ZShjb250ZXh0LnJlZkRhdGUsIGZyYWdtZW50cyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lcmdpbmdSZWZpbmVyID0gZXhwb3J0cy5GaWx0ZXIgPSB2b2lkIDA7XG5jbGFzcyBGaWx0ZXIge1xuICAgIHJlZmluZShjb250ZXh0LCByZXN1bHRzKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcigocikgPT4gdGhpcy5pc1ZhbGlkKGNvbnRleHQsIHIpKTtcbiAgICB9XG59XG5leHBvcnRzLkZpbHRlciA9IEZpbHRlcjtcbmNsYXNzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dCwgcmVzdWx0cykge1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHRzID0gW107XG4gICAgICAgIGxldCBjdXJSZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICBsZXQgbmV4dFJlc3VsdCA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV4dFJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgICBjb25zdCB0ZXh0QmV0d2VlbiA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoY3VyUmVzdWx0LmluZGV4ICsgY3VyUmVzdWx0LnRleHQubGVuZ3RoLCBuZXh0UmVzdWx0LmluZGV4KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1clJlc3VsdCwgbmV4dFJlc3VsdCwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjdXJSZXN1bHQgPSBuZXh0UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IGN1clJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodCA9IG5leHRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0ID0gdGhpcy5tZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGxlZnQsIHJpZ2h0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBtZXJnZWQgJHtsZWZ0fSBhbmQgJHtyaWdodH0gaW50byAke21lcmdlZFJlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjdXJSZXN1bHQgPSBtZXJnZWRSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1clJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2VkUmVzdWx0cztcbiAgICB9XG59XG5leHBvcnRzLk1lcmdpbmdSZWZpbmVyID0gTWVyZ2luZ1JlZmluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGFic3RyYWN0UmVmaW5lcnNfMSA9IHJlcXVpcmUoXCIuLi9hYnN0cmFjdFJlZmluZXJzXCIpO1xuY2xhc3MgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIgZXh0ZW5kcyBhYnN0cmFjdFJlZmluZXJzXzEuTWVyZ2luZ1JlZmluZXIge1xuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gIWN1cnJlbnRSZXN1bHQuZW5kICYmICFuZXh0UmVzdWx0LmVuZCAmJiB0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpICE9IG51bGw7XG4gICAgfVxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgZnJvbVJlc3VsdCwgdG9SZXN1bHQpIHtcbiAgICAgICAgaWYgKCFmcm9tUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiAhdG9SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5nZXRDZXJ0YWluQ29tcG9uZW50cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZnJvbVJlc3VsdC5zdGFydC5pc0NlcnRhaW4oa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmFzc2lnbihrZXksIHRvUmVzdWx0LnN0YXJ0LmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuZ2V0Q2VydGFpbkNvbXBvbmVudHMoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRvUmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmFzc2lnbihrZXksIGZyb21SZXN1bHQuc3RhcnQuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tUmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkgPiB0b1Jlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBsZXQgZnJvbU1vbWVudCA9IGZyb21SZXN1bHQuc3RhcnQuZGF5anMoKTtcbiAgICAgICAgICAgIGxldCB0b01vbWVudCA9IHRvUmVzdWx0LnN0YXJ0LmRheWpzKCk7XG4gICAgICAgICAgICBpZiAoZnJvbVJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgZnJvbU1vbWVudC5hZGQoLTcsIFwiZGF5c1wiKS5pc0JlZm9yZSh0b01vbWVudCkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTW9tZW50ID0gZnJvbU1vbWVudC5hZGQoLTcsIFwiZGF5c1wiKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIGZyb21Nb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgZnJvbU1vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgZnJvbU1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIHRvTW9tZW50LmFkZCg3LCBcImRheXNcIikuaXNBZnRlcihmcm9tTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIHRvTW9tZW50ID0gdG9Nb21lbnQuYWRkKDcsIFwiZGF5c1wiKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCB0b01vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgdG9Nb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB0b01vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgW3RvUmVzdWx0LCBmcm9tUmVzdWx0XSA9IFtmcm9tUmVzdWx0LCB0b1Jlc3VsdF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnJvbVJlc3VsdC5jbG9uZSgpO1xuICAgICAgICByZXN1bHQuc3RhcnQgPSBmcm9tUmVzdWx0LnN0YXJ0O1xuICAgICAgICByZXN1bHQuZW5kID0gdG9SZXN1bHQuc3RhcnQ7XG4gICAgICAgIHJlc3VsdC5pbmRleCA9IE1hdGgubWluKGZyb21SZXN1bHQuaW5kZXgsIHRvUmVzdWx0LmluZGV4KTtcbiAgICAgICAgaWYgKGZyb21SZXN1bHQuaW5kZXggPCB0b1Jlc3VsdC5pbmRleCkge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBmcm9tUmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIHRvUmVzdWx0LnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCA9IHRvUmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIGZyb21SZXN1bHQudGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXJcIikpO1xuY2xhc3MgRU5NZXJnZURhdGVSYW5nZVJlZmluZXIgZXh0ZW5kcyBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xLmRlZmF1bHQge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCkge1xuICAgICAgICByZXR1cm4gL15cXHMqKHRvfC0pXFxzKiQvaTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tZXJnZURhdGVUaW1lQ29tcG9uZW50ID0gZXhwb3J0cy5tZXJnZURhdGVUaW1lUmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9pbmRleFwiKTtcbmZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVSZXN1bHQoZGF0ZVJlc3VsdCwgdGltZVJlc3VsdCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGRhdGVSZXN1bHQuY2xvbmUoKTtcbiAgICBjb25zdCBiZWdpbkRhdGUgPSBkYXRlUmVzdWx0LnN0YXJ0O1xuICAgIGNvbnN0IGJlZ2luVGltZSA9IHRpbWVSZXN1bHQuc3RhcnQ7XG4gICAgcmVzdWx0LnN0YXJ0ID0gbWVyZ2VEYXRlVGltZUNvbXBvbmVudChiZWdpbkRhdGUsIGJlZ2luVGltZSk7XG4gICAgaWYgKGRhdGVSZXN1bHQuZW5kICE9IG51bGwgfHwgdGltZVJlc3VsdC5lbmQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlbmREYXRlID0gZGF0ZVJlc3VsdC5lbmQgPT0gbnVsbCA/IGRhdGVSZXN1bHQuc3RhcnQgOiBkYXRlUmVzdWx0LmVuZDtcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IHRpbWVSZXN1bHQuZW5kID09IG51bGwgPyB0aW1lUmVzdWx0LnN0YXJ0IDogdGltZVJlc3VsdC5lbmQ7XG4gICAgICAgIGNvbnN0IGVuZERhdGVUaW1lID0gbWVyZ2VEYXRlVGltZUNvbXBvbmVudChlbmREYXRlLCBlbmRUaW1lKTtcbiAgICAgICAgaWYgKGRhdGVSZXN1bHQuZW5kID09IG51bGwgJiYgZW5kRGF0ZVRpbWUuZGF0ZSgpLmdldFRpbWUoKSA8IHJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBpZiAoZW5kRGF0ZVRpbWUuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgZW5kRGF0ZVRpbWUuYXNzaWduKFwiZGF5XCIsIGVuZERhdGVUaW1lLmdldChcImRheVwiKSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kRGF0ZVRpbWUuaW1wbHkoXCJkYXlcIiwgZW5kRGF0ZVRpbWUuZ2V0KFwiZGF5XCIpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmVuZCA9IGVuZERhdGVUaW1lO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5tZXJnZURhdGVUaW1lUmVzdWx0ID0gbWVyZ2VEYXRlVGltZVJlc3VsdDtcbmZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoZGF0ZUNvbXBvbmVudCwgdGltZUNvbXBvbmVudCkge1xuICAgIGNvbnN0IGRhdGVUaW1lQ29tcG9uZW50ID0gZGF0ZUNvbXBvbmVudC5jbG9uZSgpO1xuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcImhvdXJcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0aW1lQ29tcG9uZW50LmdldChcImhvdXJcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuICAgICAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJzZWNvbmRcIikpIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG4gICAgICAgICAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJtaWxsaXNlY29uZFwiKSkge1xuICAgICAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwiaG91clwiLCB0aW1lQ29tcG9uZW50LmdldChcImhvdXJcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbnV0ZVwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICB9XG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKSk7XG4gICAgfVxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcIm1lcmlkaWVtXCIpKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcIm1lcmlkaWVtXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpICE9IG51bGwgJiYgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgPT0gbnVsbCkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikpO1xuICAgIH1cbiAgICBpZiAoZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgPT0gaW5kZXhfMS5NZXJpZGllbS5QTSAmJiBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpIDwgMTIpIHtcbiAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwiaG91clwiKSkge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGVUaW1lQ29tcG9uZW50O1xufVxuZXhwb3J0cy5tZXJnZURhdGVUaW1lQ29tcG9uZW50ID0gbWVyZ2VEYXRlVGltZUNvbXBvbmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYWJzdHJhY3RSZWZpbmVyc18xID0gcmVxdWlyZShcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIik7XG5jb25zdCBtZXJnaW5nQ2FsY3VsYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9jYWxjdWxhdGlvbi9tZXJnaW5nQ2FsY3VsYXRpb25cIik7XG5jbGFzcyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgYWJzdHJhY3RSZWZpbmVyc18xLk1lcmdpbmdSZWZpbmVyIHtcbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuICgoKGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpICYmIG5leHRSZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpKSB8fFxuICAgICAgICAgICAgKG5leHRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpICYmIGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpKSkgJiZcbiAgICAgICAgICAgIHRleHRCZXR3ZWVuLm1hdGNoKHRoaXMucGF0dGVybkJldHdlZW4oKSkgIT0gbnVsbCk7XG4gICAgfVxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKVxuICAgICAgICAgICAgPyBtZXJnaW5nQ2FsY3VsYXRpb25fMS5tZXJnZURhdGVUaW1lUmVzdWx0KGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpXG4gICAgICAgICAgICA6IG1lcmdpbmdDYWxjdWxhdGlvbl8xLm1lcmdlRGF0ZVRpbWVSZXN1bHQobmV4dFJlc3VsdCwgY3VycmVudFJlc3VsdCk7XG4gICAgICAgIHJlc3VsdC5pbmRleCA9IGN1cnJlbnRSZXN1bHQuaW5kZXg7XG4gICAgICAgIHJlc3VsdC50ZXh0ID0gY3VycmVudFJlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyBuZXh0UmVzdWx0LnRleHQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRU5NZXJnZURhdGVUaW1lUmVmaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lclwiKSk7XG5jbGFzcyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lcl8xLmRlZmF1bHQge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5cXFxccyooVHxhdHxhZnRlcnxiZWZvcmV8b258b2Z8LHwtKT9cXFxccyokXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVOTWVyZ2VEYXRlVGltZVJlZmluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRJTUVaT05FX05BTUVfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXCg/KFtBLVpdezIsNH0pXFxcXCk/KD89XFxcXFd8JClcIiwgXCJpXCIpO1xuY29uc3QgREVGQVVMVF9USU1FWk9ORV9BQkJSX01BUCA9IHtcbiAgICBBQ0RUOiA2MzAsXG4gICAgQUNTVDogNTcwLFxuICAgIEFEVDogLTE4MCxcbiAgICBBRURUOiA2NjAsXG4gICAgQUVTVDogNjAwLFxuICAgIEFGVDogMjcwLFxuICAgIEFLRFQ6IC00ODAsXG4gICAgQUtTVDogLTU0MCxcbiAgICBBTE1UOiAzNjAsXG4gICAgQU1TVDogLTE4MCxcbiAgICBBTVQ6IC0yNDAsXG4gICAgQU5BU1Q6IDcyMCxcbiAgICBBTkFUOiA3MjAsXG4gICAgQVFUVDogMzAwLFxuICAgIEFSVDogLTE4MCxcbiAgICBBU1Q6IC0yNDAsXG4gICAgQVdEVDogNTQwLFxuICAgIEFXU1Q6IDQ4MCxcbiAgICBBWk9TVDogMCxcbiAgICBBWk9UOiAtNjAsXG4gICAgQVpTVDogMzAwLFxuICAgIEFaVDogMjQwLFxuICAgIEJOVDogNDgwLFxuICAgIEJPVDogLTI0MCxcbiAgICBCUlNUOiAtMTIwLFxuICAgIEJSVDogLTE4MCxcbiAgICBCU1Q6IDYwLFxuICAgIEJUVDogMzYwLFxuICAgIENBU1Q6IDQ4MCxcbiAgICBDQVQ6IDEyMCxcbiAgICBDQ1Q6IDM5MCxcbiAgICBDRFQ6IC0zMDAsXG4gICAgQ0VTVDogMTIwLFxuICAgIENFVDogNjAsXG4gICAgQ0hBRFQ6IDgyNSxcbiAgICBDSEFTVDogNzY1LFxuICAgIENLVDogLTYwMCxcbiAgICBDTFNUOiAtMTgwLFxuICAgIENMVDogLTI0MCxcbiAgICBDT1Q6IC0zMDAsXG4gICAgQ1NUOiAtMzYwLFxuICAgIENWVDogLTYwLFxuICAgIENYVDogNDIwLFxuICAgIENoU1Q6IDYwMCxcbiAgICBEQVZUOiA0MjAsXG4gICAgRUFTU1Q6IC0zMDAsXG4gICAgRUFTVDogLTM2MCxcbiAgICBFQVQ6IDE4MCxcbiAgICBFQ1Q6IC0zMDAsXG4gICAgRURUOiAtMjQwLFxuICAgIEVFU1Q6IDE4MCxcbiAgICBFRVQ6IDEyMCxcbiAgICBFR1NUOiAwLFxuICAgIEVHVDogLTYwLFxuICAgIEVTVDogLTMwMCxcbiAgICBFVDogLTMwMCxcbiAgICBGSlNUOiA3ODAsXG4gICAgRkpUOiA3MjAsXG4gICAgRktTVDogLTE4MCxcbiAgICBGS1Q6IC0yNDAsXG4gICAgRk5UOiAtMTIwLFxuICAgIEdBTFQ6IC0zNjAsXG4gICAgR0FNVDogLTU0MCxcbiAgICBHRVQ6IDI0MCxcbiAgICBHRlQ6IC0xODAsXG4gICAgR0lMVDogNzIwLFxuICAgIEdNVDogMCxcbiAgICBHU1Q6IDI0MCxcbiAgICBHWVQ6IC0yNDAsXG4gICAgSEFBOiAtMTgwLFxuICAgIEhBQzogLTMwMCxcbiAgICBIQURUOiAtNTQwLFxuICAgIEhBRTogLTI0MCxcbiAgICBIQVA6IC00MjAsXG4gICAgSEFSOiAtMzYwLFxuICAgIEhBU1Q6IC02MDAsXG4gICAgSEFUOiAtOTAsXG4gICAgSEFZOiAtNDgwLFxuICAgIEhLVDogNDgwLFxuICAgIEhMVjogLTIxMCxcbiAgICBITkE6IC0yNDAsXG4gICAgSE5DOiAtMzYwLFxuICAgIEhORTogLTMwMCxcbiAgICBITlA6IC00ODAsXG4gICAgSE5SOiAtNDIwLFxuICAgIEhOVDogLTE1MCxcbiAgICBITlk6IC01NDAsXG4gICAgSE9WVDogNDIwLFxuICAgIElDVDogNDIwLFxuICAgIElEVDogMTgwLFxuICAgIElPVDogMzYwLFxuICAgIElSRFQ6IDI3MCxcbiAgICBJUktTVDogNTQwLFxuICAgIElSS1Q6IDU0MCxcbiAgICBJUlNUOiAyMTAsXG4gICAgSVNUOiAzMzAsXG4gICAgSlNUOiA1NDAsXG4gICAgS0dUOiAzNjAsXG4gICAgS1JBU1Q6IDQ4MCxcbiAgICBLUkFUOiA0ODAsXG4gICAgS1NUOiA1NDAsXG4gICAgS1VZVDogMjQwLFxuICAgIExIRFQ6IDY2MCxcbiAgICBMSFNUOiA2MzAsXG4gICAgTElOVDogODQwLFxuICAgIE1BR1NUOiA3MjAsXG4gICAgTUFHVDogNzIwLFxuICAgIE1BUlQ6IC01MTAsXG4gICAgTUFXVDogMzAwLFxuICAgIE1EVDogLTM2MCxcbiAgICBNRVNaOiAxMjAsXG4gICAgTUVaOiA2MCxcbiAgICBNSFQ6IDcyMCxcbiAgICBNTVQ6IDM5MCxcbiAgICBNU0Q6IDI0MCxcbiAgICBNU0s6IDI0MCxcbiAgICBNU1Q6IC00MjAsXG4gICAgTVVUOiAyNDAsXG4gICAgTVZUOiAzMDAsXG4gICAgTVlUOiA0ODAsXG4gICAgTkNUOiA2NjAsXG4gICAgTkRUOiAtOTAsXG4gICAgTkZUOiA2OTAsXG4gICAgTk9WU1Q6IDQyMCxcbiAgICBOT1ZUOiAzNjAsXG4gICAgTlBUOiAzNDUsXG4gICAgTlNUOiAtMTUwLFxuICAgIE5VVDogLTY2MCxcbiAgICBOWkRUOiA3ODAsXG4gICAgTlpTVDogNzIwLFxuICAgIE9NU1NUOiA0MjAsXG4gICAgT01TVDogNDIwLFxuICAgIFBEVDogLTQyMCxcbiAgICBQRVQ6IC0zMDAsXG4gICAgUEVUU1Q6IDcyMCxcbiAgICBQRVRUOiA3MjAsXG4gICAgUEdUOiA2MDAsXG4gICAgUEhPVDogNzgwLFxuICAgIFBIVDogNDgwLFxuICAgIFBLVDogMzAwLFxuICAgIFBNRFQ6IC0xMjAsXG4gICAgUE1TVDogLTE4MCxcbiAgICBQT05UOiA2NjAsXG4gICAgUFNUOiAtNDgwLFxuICAgIFBUOiAtNDgwLFxuICAgIFBXVDogNTQwLFxuICAgIFBZU1Q6IC0xODAsXG4gICAgUFlUOiAtMjQwLFxuICAgIFJFVDogMjQwLFxuICAgIFNBTVQ6IDI0MCxcbiAgICBTQVNUOiAxMjAsXG4gICAgU0JUOiA2NjAsXG4gICAgU0NUOiAyNDAsXG4gICAgU0dUOiA0ODAsXG4gICAgU1JUOiAtMTgwLFxuICAgIFNTVDogLTY2MCxcbiAgICBUQUhUOiAtNjAwLFxuICAgIFRGVDogMzAwLFxuICAgIFRKVDogMzAwLFxuICAgIFRLVDogNzgwLFxuICAgIFRMVDogNTQwLFxuICAgIFRNVDogMzAwLFxuICAgIFRWVDogNzIwLFxuICAgIFVMQVQ6IDQ4MCxcbiAgICBVVEM6IDAsXG4gICAgVVlTVDogLTEyMCxcbiAgICBVWVQ6IC0xODAsXG4gICAgVVpUOiAzMDAsXG4gICAgVkVUOiAtMjEwLFxuICAgIFZMQVNUOiA2NjAsXG4gICAgVkxBVDogNjYwLFxuICAgIFZVVDogNjYwLFxuICAgIFdBU1Q6IDEyMCxcbiAgICBXQVQ6IDYwLFxuICAgIFdFU1Q6IDYwLFxuICAgIFdFU1o6IDYwLFxuICAgIFdFVDogMCxcbiAgICBXRVo6IDAsXG4gICAgV0ZUOiA3MjAsXG4gICAgV0dTVDogLTEyMCxcbiAgICBXR1Q6IC0xODAsXG4gICAgV0lCOiA0MjAsXG4gICAgV0lUOiA1NDAsXG4gICAgV0lUQTogNDgwLFxuICAgIFdTVDogNzgwLFxuICAgIFdUOiAwLFxuICAgIFlBS1NUOiA2MDAsXG4gICAgWUFLVDogNjAwLFxuICAgIFlBUFQ6IDYwMCxcbiAgICBZRUtTVDogMzYwLFxuICAgIFlFS1Q6IDM2MCxcbn07XG5jbGFzcyBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lciB7XG4gICAgY29uc3RydWN0b3IodGltZXpvbmVPdmVycmlkZXMpIHtcbiAgICAgICAgdGhpcy50aW1lem9uZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9USU1FWk9ORV9BQkJSX01BUCksIHRpbWV6b25lT3ZlcnJpZGVzKTtcbiAgICB9XG4gICAgcmVmaW5lKGNvbnRleHQsIHJlc3VsdHMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCB0aW1lem9uZU92ZXJyaWRlcyA9IChfYSA9IGNvbnRleHQub3B0aW9uLnRpbWV6b25lcykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBUSU1FWk9ORV9OQU1FX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRpbWV6b25lQWJiciA9IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCA9IChfYiA9IChfYSA9IHRpbWV6b25lT3ZlcnJpZGVzW3RpbWV6b25lQWJicl0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMudGltZXpvbmVbdGltZXpvbmVBYmJyXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChleHRyYWN0ZWRUaW1lem9uZU9mZnNldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFeHRyYWN0aW5nIHRpbWV6b25lOiAnJHt0aW1lem9uZUFiYnJ9JyBpbnRvIDogJHtleHRyYWN0ZWRUaW1lem9uZU9mZnNldH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWV6b25lT2Zmc2V0ID0gcmVzdWx0LnN0YXJ0LmdldChcInRpbWV6b25lT2Zmc2V0XCIpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUaW1lem9uZU9mZnNldCAhPT0gbnVsbCAmJiBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCAhPSBjdXJyZW50VGltZXpvbmVPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwgJiYgIXJlc3VsdC5lbmQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEV4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCJeXFxcXHMqKD86KD86R01UfFVUQylcXFxccz8pPyhbKy1dKShcXFxcZHsxLDJ9KSg/Ojo/KFxcXFxkezJ9KSk/XCIsIFwiaVwiKTtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9TSUdOX0dST1VQID0gMTtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9IT1VSX09GRlNFVF9HUk9VUCA9IDI7XG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfTUlOVVRFX09GRlNFVF9HUk9VUCA9IDM7XG5jbGFzcyBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dCwgcmVzdWx0cykge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gVElNRVpPTkVfT0ZGU0VUX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFeHRyYWN0aW5nIHRpbWV6b25lOiAnJHttYXRjaFswXX0nIGludG8gOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgaG91ck9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RJTUVaT05FX09GRlNFVF9IT1VSX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgY29uc3QgbWludXRlT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX01JTlVURV9PRkZTRVRfR1JPVVBdIHx8IFwiMFwiKTtcbiAgICAgICAgICAgIGxldCB0aW1lem9uZU9mZnNldCA9IGhvdXJPZmZzZXQgKiA2MCArIG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgIGlmIChtYXRjaFtUSU1FWk9ORV9PRkZTRVRfU0lHTl9HUk9VUF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgdGltZXpvbmVPZmZzZXQgPSAtdGltZXpvbmVPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBPdmVybGFwUmVtb3ZhbFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0LCByZXN1bHRzKSB7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUmVzdWx0cyA9IFtdO1xuICAgICAgICBsZXQgcHJldlJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaW5kZXggPCBwcmV2UmVzdWx0LmluZGV4ICsgcHJldlJlc3VsdC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudGV4dC5sZW5ndGggPiBwcmV2UmVzdWx0LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRSZXN1bHRzLnB1c2gocHJldlJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcHJldlJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChwcmV2UmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE92ZXJsYXBSZW1vdmFsUmVmaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY2xhc3MgRm9yd2FyZERhdGVSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dCwgcmVzdWx0cykge1xuICAgICAgICBpZiAoIWNvbnRleHQub3B0aW9uLmZvcndhcmREYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgbGV0IHJlZk1vbWVudCA9IGRheWpzXzEuZGVmYXVsdChjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlEYXlNb250aENvbXBvbmVudCgpICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMyAmJiByZWZNb21lbnQuaXNBZnRlcihyZXN1bHQuc3RhcnQuZGF5anMoKSk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHJlc3VsdC5zdGFydC5nZXQoXCJ5ZWFyXCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEZvcndhcmQgeWVhcmx5IGFkanVzdGVkIGZvciAke3Jlc3VsdH0gKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICYmICFyZXN1bHQuZW5kLmlzQ2VydGFpbihcInllYXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJ5ZWFyXCIsIHJlc3VsdC5lbmQuZ2V0KFwieWVhclwiKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEZvcndhcmQgeWVhcmx5IGFkanVzdGVkIGZvciAke3Jlc3VsdH0gKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKSkge1xuICAgICAgICAgICAgICAgIGlmIChyZWZNb21lbnQuZGF5KCkgPiByZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpICsgNyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIHJlZk1vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIHJlZk1vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCByZWZNb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEZvcndhcmQgd2Vla2x5IGFkanVzdGVkIGZvciAke3Jlc3VsdH0gKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiByZXN1bHQuZW5kLmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmTW9tZW50LmRheSgpID4gcmVzdWx0LmVuZC5nZXQoXCJ3ZWVrZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSArIDcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheShyZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJkYXlcIiwgcmVmTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJtb250aFwiLCByZWZNb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwieWVhclwiLCByZWZNb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRm9yd2FyZCB3ZWVrbHkgYWRqdXN0ZWQgZm9yICR7cmVzdWx0fSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRm9yd2FyZERhdGVSZWZpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhYnN0cmFjdFJlZmluZXJzXzEgPSByZXF1aXJlKFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiKTtcbmNsYXNzIFVubGlrZWx5Rm9ybWF0RmlsdGVyIGV4dGVuZHMgYWJzdHJhY3RSZWZpbmVyc18xLkZpbHRlciB7XG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBzdHJpY3RNb2RlO1xuICAgIH1cbiAgICBpc1ZhbGlkKGNvbnRleHQsIHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnRleHQucmVwbGFjZShcIiBcIiwgXCJcIikubWF0Y2goL15cXGQqKFxcLlxcZCopPyQvKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdCAnJHtyZXN1bHQudGV4dH0nYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc1ZhbGlkRGF0ZSgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgaW52YWxpZCByZXN1bHQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgIXJlc3VsdC5lbmQuaXNWYWxpZERhdGUoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIGludmFsaWQgcmVzdWx0OiAke3Jlc3VsdH0gKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1N0cmljdE1vZGVWYWxpZChjb250ZXh0LCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc1N0cmljdE1vZGVWYWxpZChjb250ZXh0LCByZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAoU3RyaWN0KSBSZW1vdmluZyB3ZWVrZGF5IG9ubHkgY29tcG9uZW50OiAke3Jlc3VsdH0gKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSAmJiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJob3VyXCIpIHx8ICFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwibWludXRlXCIpKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYChTdHJpY3QpIFJlbW92aW5nIHVuY2VydGFpbiB0aW1lIGNvbXBvbmVudDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gVW5saWtlbHlGb3JtYXRGaWx0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoWzAtOV17NH0pXFxcXC0oWzAtOV17MSwyfSlcXFxcLShbMC05XXsxLDJ9KVwiICtcbiAgICBcIig/OlRcIiArXG4gICAgXCIoWzAtOV17MSwyfSk6KFswLTldezEsMn0pXCIgK1xuICAgIFwiKD86XCIgK1xuICAgIFwiOihbMC05XXsxLDJ9KSg/OlxcXFwuKFxcXFxkezEsNH0pKT9cIiArXG4gICAgXCIpP1wiICtcbiAgICBcIig/OlwiICtcbiAgICBcIlp8KFsrLV1cXFxcZHsyfSk6PyhcXFxcZHsyfSk/XCIgK1xuICAgIFwiKT9cIiArXG4gICAgXCIpP1wiICtcbiAgICBcIig/PVxcXFxXfCQpXCIsIFwiaVwiKTtcbmNvbnN0IFlFQVJfTlVNQkVSX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDI7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBIT1VSX05VTUJFUl9HUk9VUCA9IDQ7XG5jb25zdCBNSU5VVEVfTlVNQkVSX0dST1VQID0gNTtcbmNvbnN0IFNFQ09ORF9OVU1CRVJfR1JPVVAgPSA2O1xuY29uc3QgTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQID0gNztcbmNvbnN0IFRaRF9IT1VSX09GRlNFVF9HUk9VUCA9IDg7XG5jb25zdCBUWkRfTUlOVVRFX09GRlNFVF9HUk9VUCA9IDk7XG5jbGFzcyBJU09Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgY29tcG9uZW50c1tcInllYXJcIl0gPSBwYXJzZUludChtYXRjaFtZRUFSX05VTUJFUl9HUk9VUF0pO1xuICAgICAgICBjb21wb25lbnRzW1wibW9udGhcIl0gPSBwYXJzZUludChtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgY29tcG9uZW50c1tcImRheVwiXSA9IHBhcnNlSW50KG1hdGNoW0RBVEVfTlVNQkVSX0dST1VQXSk7XG4gICAgICAgIGlmIChtYXRjaFtIT1VSX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcG9uZW50c1tcImhvdXJcIl0gPSBwYXJzZUludChtYXRjaFtIT1VSX05VTUJFUl9HUk9VUF0pO1xuICAgICAgICAgICAgY29tcG9uZW50c1tcIm1pbnV0ZVwiXSA9IHBhcnNlSW50KG1hdGNoW01JTlVURV9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChtYXRjaFtTRUNPTkRfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1tcInNlY29uZFwiXSA9IHBhcnNlSW50KG1hdGNoW1NFQ09ORF9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFtNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW1wibWlsbGlzZWNvbmRcIl0gPSBwYXJzZUludChtYXRjaFtNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfSE9VUl9PRkZTRVRfR1JPVVBdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW1widGltZXpvbmVPZmZzZXRcIl0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91ck9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RaRF9IT1VSX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgICAgIGxldCBtaW51dGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfTUlOVVRFX09GRlNFVF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUWkRfTUlOVVRFX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gaG91ck9mZnNldCAqIDYwO1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCAtPSBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gbWludXRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW1widGltZXpvbmVPZmZzZXRcIl0gPSBvZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSVNPRm9ybWF0UGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhYnN0cmFjdFJlZmluZXJzXzEgPSByZXF1aXJlKFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiKTtcbmNsYXNzIE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIgZXh0ZW5kcyBhYnN0cmFjdFJlZmluZXJzXzEuTWVyZ2luZ1JlZmluZXIge1xuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdCkge1xuICAgICAgICBjb25zdCBuZXdSZXN1bHQgPSBuZXh0UmVzdWx0LmNsb25lKCk7XG4gICAgICAgIG5ld1Jlc3VsdC5pbmRleCA9IGN1cnJlbnRSZXN1bHQuaW5kZXg7XG4gICAgICAgIG5ld1Jlc3VsdC50ZXh0ID0gY3VycmVudFJlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyBuZXdSZXN1bHQudGV4dDtcbiAgICAgICAgbmV3UmVzdWx0LnN0YXJ0LmFzc2lnbihcIndlZWtkYXlcIiwgY3VycmVudFJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgaWYgKG5ld1Jlc3VsdC5lbmQpIHtcbiAgICAgICAgICAgIG5ld1Jlc3VsdC5lbmQuYXNzaWduKFwid2Vla2RheVwiLCBjdXJyZW50UmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdSZXN1bHQ7XG4gICAgfVxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdCkge1xuICAgICAgICBjb25zdCB3ZWVrZGF5VGhlbk5vcm1hbERhdGUgPSBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJlxuICAgICAgICAgICAgIWN1cnJlbnRSZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwiaG91clwiKSAmJlxuICAgICAgICAgICAgbmV4dFJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJkYXlcIik7XG4gICAgICAgIHJldHVybiB3ZWVrZGF5VGhlbk5vcm1hbERhdGUgJiYgdGV4dEJldHdlZW4ubWF0Y2goL14sP1xccyokLykgIT0gbnVsbDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uID0gdm9pZCAwO1xuY29uc3QgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXJcIikpO1xuY29uc3QgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyXCIpKTtcbmNvbnN0IE92ZXJsYXBSZW1vdmFsUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXJcIikpO1xuY29uc3QgRm9yd2FyZERhdGVSZWZpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tbW9uL3JlZmluZXJzL0ZvcndhcmREYXRlUmVmaW5lclwiKSk7XG5jb25zdCBVbmxpa2VseUZvcm1hdEZpbHRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbW1vbi9yZWZpbmVycy9Vbmxpa2VseUZvcm1hdEZpbHRlclwiKSk7XG5jb25zdCBJU09Gb3JtYXRQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21tb24vcGFyc2Vycy9JU09Gb3JtYXRQYXJzZXJcIikpO1xuY29uc3QgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbW1vbi9yZWZpbmVycy9NZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyXCIpKTtcbmZ1bmN0aW9uIGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24sIHN0cmljdE1vZGUgPSBmYWxzZSkge1xuICAgIGNvbmZpZ3VyYXRpb24ucGFyc2Vycy51bnNoaWZ0KG5ldyBJU09Gb3JtYXRQYXJzZXJfMS5kZWZhdWx0KCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lcl8xLmRlZmF1bHQoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lcl8xLmRlZmF1bHQoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyXzEuZGVmYXVsdCgpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcl8xLmRlZmF1bHQoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBGb3J3YXJkRGF0ZVJlZmluZXJfMS5kZWZhdWx0KCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgVW5saWtlbHlGb3JtYXRGaWx0ZXJfMS5kZWZhdWx0KHN0cmljdE1vZGUpKTtcbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbn1cbmV4cG9ydHMuaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24gPSBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50b25pZ2h0ID0gZXhwb3J0cy50b21vcnJvdyA9IGV4cG9ydHMueWVzdGVyZGF5ID0gZXhwb3J0cy50b2RheSA9IGV4cG9ydHMubm93ID0gdm9pZCAwO1xuY29uc3QgcmVzdWx0c18xID0gcmVxdWlyZShcIi4uL3Jlc3VsdHNcIik7XG5jb25zdCBkYXlqc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkYXlqc1wiKSk7XG5jb25zdCBkYXlqc18yID0gcmVxdWlyZShcIi4uL3V0aWxzL2RheWpzXCIpO1xuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9pbmRleFwiKTtcbmZ1bmN0aW9uIG5vdyhyZWZEYXRlKSB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzXzEuZGVmYXVsdChyZWZEYXRlKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgcmVzdWx0c18xLlBhcnNpbmdDb21wb25lbnRzKHJlZkRhdGUsIHt9KTtcbiAgICBkYXlqc18yLmFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgZGF5anNfMi5hc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5leHBvcnRzLm5vdyA9IG5vdztcbmZ1bmN0aW9uIHRvZGF5KHJlZkRhdGUpIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anNfMS5kZWZhdWx0KHJlZkRhdGUpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMocmVmRGF0ZSwge30pO1xuICAgIGRheWpzXzIuYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBkYXlqc18yLmltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZXhwb3J0cy50b2RheSA9IHRvZGF5O1xuZnVuY3Rpb24geWVzdGVyZGF5KHJlZkRhdGUpIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzXzEuZGVmYXVsdChyZWZEYXRlKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgcmVzdWx0c18xLlBhcnNpbmdDb21wb25lbnRzKHJlZkRhdGUsIHt9KTtcbiAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQoLTEsIFwiZGF5XCIpO1xuICAgIGRheWpzXzIuYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBkYXlqc18yLmltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZXhwb3J0cy55ZXN0ZXJkYXkgPSB5ZXN0ZXJkYXk7XG5mdW5jdGlvbiB0b21vcnJvdyhyZWZEYXRlKSB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzXzEuZGVmYXVsdChyZWZEYXRlKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgcmVzdWx0c18xLlBhcnNpbmdDb21wb25lbnRzKHJlZkRhdGUsIHt9KTtcbiAgICBkYXlqc18yLmFzc2lnblRoZU5leHREYXkoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZXhwb3J0cy50b21vcnJvdyA9IHRvbW9ycm93O1xuZnVuY3Rpb24gdG9uaWdodChyZWZEYXRlLCBpbXBseUhvdXIgPSAyMikge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqc18xLmRlZmF1bHQocmVmRGF0ZSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IHJlc3VsdHNfMS5QYXJzaW5nQ29tcG9uZW50cyhyZWZEYXRlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uUE0pO1xuICAgIGRheWpzXzIuYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZXhwb3J0cy50b25pZ2h0ID0gdG9uaWdodDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkYXlqc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkYXlqc1wiKSk7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCBkYXlqc18yID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL2RheWpzXCIpO1xuY29uc3QgcmVmZXJlbmNlcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXNcIikpO1xuY2xhc3MgRU5DYXN1YWxEYXRlUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybihjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAvKG5vd3x0b2RheXx0b25pZ2h0fHRvbW9ycm93fHRtcnx5ZXN0ZXJkYXl8bGFzdFxccypuaWdodCkoPz1cXFd8JCkvaTtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGxldCB0YXJnZXREYXRlID0gZGF5anNfMS5kZWZhdWx0KGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgIGNvbnN0IGxvd2VyVGV4dCA9IG1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgc3dpdGNoIChsb3dlclRleHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJub3dcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy5ub3coY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgIGNhc2UgXCJ0b2RheVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiByZWZlcmVuY2VzLnRvZGF5KGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgICAgICBjYXNlIFwieWVzdGVyZGF5XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZXMueWVzdGVyZGF5KGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgICAgICBjYXNlIFwidG9tb3Jyb3dcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ0bXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy50b21vcnJvdyhjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICAgICAgY2FzZSBcInRvbmlnaHRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy50b25pZ2h0KGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChsb3dlclRleHQubWF0Y2goL2xhc3RcXHMqbmlnaHQvKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RGF0ZS5ob3VyKCkgPiA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQoLTEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRheWpzXzIuYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFTkNhc3VhbERhdGVQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGluZGV4XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW5kZXhcIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCBkYXlqc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkYXlqc1wiKSk7XG5jb25zdCBkYXlqc18yID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL2RheWpzXCIpO1xuY2xhc3MgRU5DYXN1YWxUaW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIC8oPzp0aGlzKT9cXHMqKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHR8bWlkbmlnaHR8bm9vbikoPz1cXFd8JCkvaTtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqc18xLmRlZmF1bHQoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBzd2l0Y2ggKG1hdGNoWzFdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJhZnRlcm5vb25cIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDE1KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJldmVuaW5nXCI6XG4gICAgICAgICAgICBjYXNlIFwibmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDIwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaWRuaWdodFwiOlxuICAgICAgICAgICAgICAgIGRheWpzXzIuYXNzaWduVGhlTmV4dERheShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb3JuaW5nXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCA2KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJub29uXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAxMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFTkNhc3VhbFRpbWVQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudG9EYXlKU0Nsb3Nlc3RXZWVrZGF5ID0gZXhwb3J0cy50b0RheUpTV2Vla2RheSA9IHZvaWQgMDtcbmNvbnN0IGRheWpzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRheWpzXCIpKTtcbmZ1bmN0aW9uIHRvRGF5SlNXZWVrZGF5KHJlZkRhdGUsIG9mZnNldCwgbW9kaWZpZXIpIHtcbiAgICBpZiAoIW1vZGlmaWVyKSB7XG4gICAgICAgIHJldHVybiB0b0RheUpTQ2xvc2VzdFdlZWtkYXkocmVmRGF0ZSwgb2Zmc2V0KTtcbiAgICB9XG4gICAgbGV0IGRhdGUgPSBkYXlqc18xLmRlZmF1bHQocmVmRGF0ZSk7XG4gICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgICBjYXNlIFwidGhpc1wiOlxuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuZGF5KG9mZnNldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmRheShvZmZzZXQgKyA3KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuZGF5KG9mZnNldCAtIDcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xufVxuZXhwb3J0cy50b0RheUpTV2Vla2RheSA9IHRvRGF5SlNXZWVrZGF5O1xuZnVuY3Rpb24gdG9EYXlKU0Nsb3Nlc3RXZWVrZGF5KHJlZkRhdGUsIG9mZnNldCkge1xuICAgIGxldCBkYXRlID0gZGF5anNfMS5kZWZhdWx0KHJlZkRhdGUpO1xuICAgIGNvbnN0IHJlZk9mZnNldCA9IGRhdGUuZGF5KCk7XG4gICAgaWYgKE1hdGguYWJzKG9mZnNldCAtIDcgLSByZWZPZmZzZXQpIDwgTWF0aC5hYnMob2Zmc2V0IC0gcmVmT2Zmc2V0KSkge1xuICAgICAgICBkYXRlID0gZGF0ZS5kYXkob2Zmc2V0IC0gNyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKE1hdGguYWJzKG9mZnNldCArIDcgLSByZWZPZmZzZXQpIDwgTWF0aC5hYnMob2Zmc2V0IC0gcmVmT2Zmc2V0KSkge1xuICAgICAgICBkYXRlID0gZGF0ZS5kYXkob2Zmc2V0ICsgNyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkYXRlID0gZGF0ZS5kYXkob2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG59XG5leHBvcnRzLnRvRGF5SlNDbG9zZXN0V2Vla2RheSA9IHRvRGF5SlNDbG9zZXN0V2Vla2RheTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCB3ZWVrc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3dlZWtzXCIpO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoPzooPzpcXFxcLHxcXFxcKHxcXFxc77yIKVxcXFxzKik/XCIgK1xuICAgIFwiKD86b25cXFxccyo/KT9cIiArXG4gICAgXCIoPzoodGhpc3xsYXN0fHBhc3R8bmV4dClcXFxccyopP1wiICtcbiAgICBgKCR7cGF0dGVybl8xLm1hdGNoQW55UGF0dGVybihjb25zdGFudHNfMS5XRUVLREFZX0RJQ1RJT05BUlkpfSlgICtcbiAgICBcIig/OlxcXFxzKig/OlxcXFwsfFxcXFwpfFxcXFzvvIkpKT9cIiArXG4gICAgXCIoPzpcXFxccyoodGhpc3xsYXN0fHBhc3R8bmV4dClcXFxccyp3ZWVrKT9cIiArXG4gICAgXCIoPz1cXFxcV3wkKVwiLCBcImlcIik7XG5jb25zdCBQUkVGSVhfR1JPVVAgPSAxO1xuY29uc3QgV0VFS0RBWV9HUk9VUCA9IDI7XG5jb25zdCBQT1NURklYX0dST1VQID0gMztcbmNsYXNzIEVOV2Vla2RheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gbWF0Y2hbV0VFS0RBWV9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY29uc3RhbnRzXzEuV0VFS0RBWV9ESUNUSU9OQVJZW2RheU9mV2Vla107XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoW1BSRUZJWF9HUk9VUF07XG4gICAgICAgIGNvbnN0IHBvc3RmaXggPSBtYXRjaFtQT1NURklYX0dST1VQXTtcbiAgICAgICAgbGV0IG1vZGlmaWVyV29yZCA9IHByZWZpeCB8fCBwb3N0Zml4O1xuICAgICAgICBtb2RpZmllcldvcmQgPSBtb2RpZmllcldvcmQgfHwgXCJcIjtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBtb2RpZmllciA9IG51bGw7XG4gICAgICAgIGlmIChtb2RpZmllcldvcmQgPT0gXCJsYXN0XCIgfHwgbW9kaWZpZXJXb3JkID09IFwicGFzdFwiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwibGFzdFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGlmaWVyV29yZCA9PSBcIm5leHRcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcIm5leHRcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RpZmllcldvcmQgPT0gXCJ0aGlzXCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJ0aGlzXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZSA9IHdlZWtzXzEudG9EYXlKU1dlZWtkYXkoY29udGV4dC5yZWZEYXRlLCBvZmZzZXQsIG1vZGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRcbiAgICAgICAgICAgIC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpXG4gICAgICAgICAgICAuYXNzaWduKFwid2Vla2RheVwiLCBvZmZzZXQpXG4gICAgICAgICAgICAuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpXG4gICAgICAgICAgICAuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKVxuICAgICAgICAgICAgLmltcGx5KFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRU5XZWVrZGF5UGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCByZXN1bHRzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcmVzdWx0c1wiKTtcbmNvbnN0IGRheWpzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRheWpzXCIpKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IHBhdHRlcm5fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCIpO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCh0aGlzfG5leHR8bGFzdHxwYXN0KVxcXFxzKigke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oY29uc3RhbnRzXzEuVElNRV9VTklUX0RJQ1RJT05BUlkpfSkoPz1cXFxccyopYCArIFwiKD89XFxcXFd8JClcIiwgXCJpXCIpO1xuY29uc3QgTU9ESUZJRVJfV09SRF9HUk9VUCA9IDE7XG5jb25zdCBSRUxBVElWRV9XT1JEX0dST1VQID0gMjtcbmNsYXNzIEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBtb2RpZmllciA9IG1hdGNoW01PRElGSUVSX1dPUkRfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHVuaXRXb3JkID0gbWF0Y2hbUkVMQVRJVkVfV09SRF9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdGltZXVuaXQgPSBjb25zdGFudHNfMS5USU1FX1VOSVRfRElDVElPTkFSWVt1bml0V29yZF07XG4gICAgICAgIGlmIChtb2RpZmllciA9PSBcIm5leHRcIikge1xuICAgICAgICAgICAgY29uc3QgdGltZVVuaXRzID0ge307XG4gICAgICAgICAgICB0aW1lVW5pdHNbdGltZXVuaXRdID0gMTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmRGF0ZShjb250ZXh0LnJlZkRhdGUsIHRpbWVVbml0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGlmaWVyID09IFwibGFzdFwiIHx8IG1vZGlmaWVyID09IFwicGFzdFwiKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSB7fTtcbiAgICAgICAgICAgIHRpbWVVbml0c1t0aW1ldW5pdF0gPSAtMTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmRGF0ZShjb250ZXh0LnJlZkRhdGUsIHRpbWVVbml0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlqc18xLmRlZmF1bHQoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgaWYgKHVuaXRXb3JkLm1hdGNoKC93ZWVrL2kpKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUuZ2V0KFwiZFwiKSwgXCJkXCIpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5pdFdvcmQubWF0Y2goL21vbnRoL2kpKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUuZGF0ZSgpICsgMSwgXCJkXCIpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bml0V29yZC5tYXRjaCgveWVhci9pKSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLmRhdGUoKSArIDEsIFwiZFwiKTtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5tb250aCgpLCBcIm1vbnRoXCIpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBhcnNpbmdDb250ZXh0ID0gZXhwb3J0cy5DaHJvbm8gPSB2b2lkIDA7XG5jb25zdCByZXN1bHRzXzEgPSByZXF1aXJlKFwiLi9yZXN1bHRzXCIpO1xuY29uc3QgZW5fMSA9IHJlcXVpcmUoXCIuL2xvY2FsZXMvZW5cIik7XG5jbGFzcyBDaHJvbm8ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb24gfHwgZW5fMS5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKCk7XG4gICAgICAgIHRoaXMucGFyc2VycyA9IFsuLi5jb25maWd1cmF0aW9uLnBhcnNlcnNdO1xuICAgICAgICB0aGlzLnJlZmluZXJzID0gWy4uLmNvbmZpZ3VyYXRpb24ucmVmaW5lcnNdO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDaHJvbm8oe1xuICAgICAgICAgICAgcGFyc2VyczogWy4uLnRoaXMucGFyc2Vyc10sXG4gICAgICAgICAgICByZWZpbmVyczogWy4uLnRoaXMucmVmaW5lcnNdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFyc2VEYXRlKHRleHQsIHJlZmVyZW5jZURhdGUsIG9wdGlvbikge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5wYXJzZSh0ZXh0LCByZWZlcmVuY2VEYXRlLCBvcHRpb24pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5sZW5ndGggPiAwID8gcmVzdWx0c1swXS5zdGFydC5kYXRlKCkgOiBudWxsO1xuICAgIH1cbiAgICBwYXJzZSh0ZXh0LCByZWZlcmVuY2VEYXRlLCBvcHRpb24pIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBQYXJzaW5nQ29udGV4dCh0ZXh0LCByZWZlcmVuY2VEYXRlIHx8IG5ldyBEYXRlKCksIG9wdGlvbiB8fCB7fSk7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMucGFyc2Vycy5mb3JFYWNoKChwYXJzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJlc3VsdHMgPSBDaHJvbm8uZXhlY3V0ZVBhcnNlcihjb250ZXh0LCBwYXJzZXIpO1xuICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KHBhcnNlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZmluZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlZmluZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZWZpbmVyLnJlZmluZShjb250ZXh0LCByZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBzdGF0aWMgZXhlY3V0ZVBhcnNlcihjb250ZXh0LCBwYXJzZXIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gcGFyc2VyLnBhdHRlcm4oY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IGNvbnRleHQudGV4dDtcbiAgICAgICAgbGV0IHJlbWFpbmluZ1RleHQgPSBjb250ZXh0LnRleHQ7XG4gICAgICAgIGxldCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4ICsgb3JpZ2luYWxUZXh0Lmxlbmd0aCAtIHJlbWFpbmluZ1RleHQubGVuZ3RoO1xuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlci5leHRyYWN0KGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVtYWluaW5nVGV4dCA9IG9yaWdpbmFsVGV4dC5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwYXJzZWRSZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIHJlc3VsdHNfMS5QYXJzaW5nUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgcmVzdWx0c18xLlBhcnNpbmdDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0LnN0YXJ0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4gY29uc29sZS5sb2coYCR7cGFyc2VyLmNvbnN0cnVjdG9yLm5hbWV9IGV4dHJhY3RlZCByZXN1bHQgJHtwYXJzZWRSZXN1bHR9YCkpO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHBhcnNlZFJlc3VsdCk7XG4gICAgICAgICAgICByZW1haW5pbmdUZXh0ID0gb3JpZ2luYWxUZXh0LnN1YnN0cmluZyhpbmRleCArIHBhcnNlZFJlc3VsdC50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG5leHBvcnRzLkNocm9ubyA9IENocm9ubztcbmNsYXNzIFBhcnNpbmdDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCByZWZEYXRlLCBvcHRpb24pIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5yZWZEYXRlID0gcmVmRGF0ZTtcbiAgICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgfVxuICAgIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHModGhpcy5yZWZEYXRlLCBjb21wb25lbnRzKTtcbiAgICB9XG4gICAgY3JlYXRlUGFyc2luZ1Jlc3VsdChpbmRleCwgdGV4dE9yRW5kSW5kZXgsIHN0YXJ0Q29tcG9uZW50cywgZW5kQ29tcG9uZW50cykge1xuICAgICAgICBjb25zdCB0ZXh0ID0gdHlwZW9mIHRleHRPckVuZEluZGV4ID09PSBcInN0cmluZ1wiID8gdGV4dE9yRW5kSW5kZXggOiB0aGlzLnRleHQuc3Vic3RyaW5nKGluZGV4LCB0ZXh0T3JFbmRJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRDb21wb25lbnRzID8gdGhpcy5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhzdGFydENvbXBvbmVudHMpIDogbnVsbDtcbiAgICAgICAgY29uc3QgZW5kID0gZW5kQ29tcG9uZW50cyA/IHRoaXMuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoZW5kQ29tcG9uZW50cykgOiBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IHJlc3VsdHNfMS5QYXJzaW5nUmVzdWx0KHRoaXMucmVmRGF0ZSwgaW5kZXgsIHRleHQsIHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgICBkZWJ1ZyhibG9jaykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb24uZGVidWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5kZWJ1ZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24uZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMub3B0aW9uLmRlYnVnO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5QYXJzaW5nQ29udGV4dCA9IFBhcnNpbmdDb250ZXh0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB5ZWFyc18xID0gcmVxdWlyZShcIi4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCIpO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoW15cXFxcZF18XilcIiArXG4gICAgXCIoWzAtM117MCwxfVswLTldezF9KVtcXFxcL1xcXFwuXFxcXC1dKFswLTNdezAsMX1bMC05XXsxfSlcIiArXG4gICAgXCIoPzpbXFxcXC9cXFxcLlxcXFwtXShbMC05XXs0fXxbMC05XXsyfSkpP1wiICtcbiAgICBcIihcXFxcV3wkKVwiLCBcImlcIik7XG5jb25zdCBPUEVOSU5HX0dST1VQID0gMTtcbmNvbnN0IEVORElOR19HUk9VUCA9IDU7XG5jb25zdCBGSVJTVF9OVU1CRVJTX0dST1VQID0gMjtcbmNvbnN0IFNFQ09ORF9OVU1CRVJTX0dST1VQID0gMztcbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuY2xhc3MgU2xhc2hEYXRlRm9ybWF0UGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgdGhpcy5ncm91cE51bWJlck1vbnRoID0gbGl0dGxlRW5kaWFuID8gU0VDT05EX05VTUJFUlNfR1JPVVAgOiBGSVJTVF9OVU1CRVJTX0dST1VQO1xuICAgICAgICB0aGlzLmdyb3VwTnVtYmVyRGF5ID0gbGl0dGxlRW5kaWFuID8gRklSU1RfTlVNQkVSU19HUk9VUCA6IFNFQ09ORF9OVU1CRVJTX0dST1VQO1xuICAgIH1cbiAgICBwYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgZXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBpZiAobWF0Y2hbT1BFTklOR19HUk9VUF0gPT0gXCIvXCIgfHwgbWF0Y2hbRU5ESU5HX0dST1VQXSA9PSBcIi9cIikge1xuICAgICAgICAgICAgbWF0Y2guaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFtPUEVOSU5HX0dST1VQXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRleHQgPSBtYXRjaFswXS5zdWJzdHIobWF0Y2hbT1BFTklOR19HUk9VUF0ubGVuZ3RoLCBtYXRjaFswXS5sZW5ndGggLSBtYXRjaFtPUEVOSU5HX0dST1VQXS5sZW5ndGggLSBtYXRjaFtFTkRJTkdfR1JPVVBdLmxlbmd0aCk7XG4gICAgICAgIGlmICh0ZXh0Lm1hdGNoKC9eXFxkXFwuXFxkJC8pIHx8IHRleHQubWF0Y2goL15cXGRcXC5cXGR7MSwyfVxcLlxcZHsxLDJ9XFxzKiQvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWF0Y2hbWUVBUl9HUk9VUF0gJiYgbWF0Y2hbMF0uaW5kZXhPZihcIi9cIikgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KGluZGV4LCB0ZXh0KTtcbiAgICAgICAgbGV0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hbdGhpcy5ncm91cE51bWJlck1vbnRoXSk7XG4gICAgICAgIGxldCBkYXkgPSBwYXJzZUludChtYXRjaFt0aGlzLmdyb3VwTnVtYmVyRGF5XSk7XG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgaWYgKG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF5ID49IDEgJiYgZGF5IDw9IDEyICYmIG1vbnRoIDw9IDMxKSB7XG4gICAgICAgICAgICAgICAgICAgIFtkYXksIG1vbnRoXSA9IFttb250aCwgZGF5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImRheVwiLCBkYXkpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd1llYXJOdW1iZXIgPSBwYXJzZUludChtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0geWVhcnNfMS5maW5kTW9zdExpa2VseUFEWWVhcihyYXdZZWFyTnVtYmVyKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHllYXJzXzEuZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTbGFzaERhdGVGb3JtYXRQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IHJlc3VsdHNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9yZXN1bHRzXCIpO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3QgdGltZXVuaXRzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvdGltZXVuaXRzXCIpO1xuY2xhc3MgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYCh0aGlzfGxhc3R8cGFzdHxuZXh0fFxcXFwrfC0pXFxcXHMqKCR7Y29uc3RhbnRzXzEuVElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSBjb25zdGFudHNfMS5wYXJzZVRpbWVVbml0cyhtYXRjaFsyXSk7XG4gICAgICAgIHN3aXRjaCAocHJlZml4KSB7XG4gICAgICAgICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICAgICAgY2FzZSBcInBhc3RcIjpcbiAgICAgICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgICAgICAgdGltZVVuaXRzID0gdGltZXVuaXRzXzEucmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmRGF0ZShjb250ZXh0LnJlZkRhdGUsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUNvbmZpZ3VyYXRpb24gPSBleHBvcnRzLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24gPSBleHBvcnRzLnBhcnNlRGF0ZSA9IGV4cG9ydHMucGFyc2UgPSBleHBvcnRzLkdCID0gZXhwb3J0cy5zdHJpY3QgPSBleHBvcnRzLmNhc3VhbCA9IHZvaWQgMDtcbmNvbnN0IEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0VOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXJcIikpO1xuY29uc3QgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyXCIpKTtcbmNvbnN0IEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlclwiKSk7XG5jb25zdCBFTk1vbnRoTmFtZVBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVQYXJzZXJcIikpO1xuY29uc3QgRU5DYXN1YWxZZWFyTW9udGhEYXlQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0VOQ2FzdWFsWWVhck1vbnRoRGF5UGFyc2VyXCIpKTtcbmNvbnN0IEVOU2xhc2hNb250aEZvcm1hdFBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyXCIpKTtcbmNvbnN0IEVOVGltZUV4cHJlc3Npb25QYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0VOVGltZUV4cHJlc3Npb25QYXJzZXJcIikpO1xuY29uc3QgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlclwiKSk7XG5jb25zdCBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0VOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlclwiKSk7XG5jb25zdCBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlZmluZXJzL0VOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXCIpKTtcbmNvbnN0IEVOTWVyZ2VEYXRlVGltZVJlZmluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZWZpbmVycy9FTk1lcmdlRGF0ZVRpbWVSZWZpbmVyXCIpKTtcbmNvbnN0IGNvbmZpZ3VyYXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vY29uZmlndXJhdGlvbnNcIik7XG5jb25zdCBFTkNhc3VhbERhdGVQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0VOQ2FzdWFsRGF0ZVBhcnNlclwiKSk7XG5jb25zdCBFTkNhc3VhbFRpbWVQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0VOQ2FzdWFsVGltZVBhcnNlclwiKSk7XG5jb25zdCBFTldlZWtkYXlQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0VOV2Vla2RheVBhcnNlclwiKSk7XG5jb25zdCBFTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXJcIikpO1xuY29uc3QgY2hyb25vXzEgPSByZXF1aXJlKFwiLi4vLi4vY2hyb25vXCIpO1xuY29uc3QgU2xhc2hEYXRlRm9ybWF0UGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbW1vbi9wYXJzZXJzL1NsYXNoRGF0ZUZvcm1hdFBhcnNlclwiKSk7XG5jb25zdCBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0VOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlclwiKSk7XG5leHBvcnRzLmNhc3VhbCA9IG5ldyBjaHJvbm9fMS5DaHJvbm8oY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbihmYWxzZSkpO1xuZXhwb3J0cy5zdHJpY3QgPSBuZXcgY2hyb25vXzEuQ2hyb25vKGNyZWF0ZUNvbmZpZ3VyYXRpb24odHJ1ZSwgZmFsc2UpKTtcbmV4cG9ydHMuR0IgPSBuZXcgY2hyb25vXzEuQ2hyb25vKGNyZWF0ZUNvbmZpZ3VyYXRpb24oZmFsc2UsIHRydWUpKTtcbmZ1bmN0aW9uIHBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbikge1xuICAgIHJldHVybiBleHBvcnRzLmNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuZXhwb3J0cy5wYXJzZURhdGUgPSBwYXJzZURhdGU7XG5mdW5jdGlvbiBjcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKGxpdHRsZUVuZGlhbiA9IGZhbHNlKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlQ29uZmlndXJhdGlvbihmYWxzZSwgbGl0dGxlRW5kaWFuKTtcbiAgICBvcHRpb24ucGFyc2Vycy51bnNoaWZ0KG5ldyBFTkNhc3VhbERhdGVQYXJzZXJfMS5kZWZhdWx0KCkpO1xuICAgIG9wdGlvbi5wYXJzZXJzLnVuc2hpZnQobmV3IEVOQ2FzdWFsVGltZVBhcnNlcl8xLmRlZmF1bHQoKSk7XG4gICAgb3B0aW9uLnBhcnNlcnMudW5zaGlmdChuZXcgRU5Nb250aE5hbWVQYXJzZXJfMS5kZWZhdWx0KCkpO1xuICAgIG9wdGlvbi5wYXJzZXJzLnVuc2hpZnQobmV3IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyXzEuZGVmYXVsdCgpKTtcbiAgICBvcHRpb24ucGFyc2Vycy51bnNoaWZ0KG5ldyBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXJfMS5kZWZhdWx0KCkpO1xuICAgIHJldHVybiBvcHRpb247XG59XG5leHBvcnRzLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24gPSBjcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uO1xuZnVuY3Rpb24gY3JlYXRlQ29uZmlndXJhdGlvbihzdHJpY3RNb2RlID0gdHJ1ZSwgbGl0dGxlRW5kaWFuID0gZmFsc2UpIHtcbiAgICByZXR1cm4gY29uZmlndXJhdGlvbnNfMS5pbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbih7XG4gICAgICAgIHBhcnNlcnM6IFtcbiAgICAgICAgICAgIG5ldyBTbGFzaERhdGVGb3JtYXRQYXJzZXJfMS5kZWZhdWx0KGxpdHRsZUVuZGlhbiksXG4gICAgICAgICAgICBuZXcgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcl8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgIG5ldyBFTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlcl8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgIG5ldyBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlcl8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgIG5ldyBFTldlZWtkYXlQYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgRU5DYXN1YWxZZWFyTW9udGhEYXlQYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgbmV3IEVOVGltZUV4cHJlc3Npb25QYXJzZXJfMS5kZWZhdWx0KHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXJfMS5kZWZhdWx0KHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlcl8xLmRlZmF1bHQoc3RyaWN0TW9kZSksXG4gICAgICAgIF0sXG4gICAgICAgIHJlZmluZXJzOiBbbmV3IEVOTWVyZ2VEYXRlVGltZVJlZmluZXJfMS5kZWZhdWx0KCksIG5ldyBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xLmRlZmF1bHQoKV0sXG4gICAgfSwgc3RyaWN0TW9kZSk7XG59XG5leHBvcnRzLmNyZWF0ZUNvbmZpZ3VyYXRpb24gPSBjcmVhdGVDb25maWd1cmF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlclwiKTtcbmNvbnN0IGluZGV4XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW5kZXhcIik7XG5jbGFzcyBERVRpbWVFeHByZXNzaW9uUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlcl8xLkFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIge1xuICAgIHByaW1hcnlQcmVmaXgoKSB7XG4gICAgICAgIHJldHVybiBcIig/Oig/OnVtfHZvbilcXFxccyopP1wiO1xuICAgIH1cbiAgICBmb2xsb3dpbmdQaGFzZSgpIHtcbiAgICAgICAgcmV0dXJuIFwiXFxcXHMqKD86XFxcXC18XFxcXOKAk3xcXFxcfnxcXFxc44CcfGJpcylcXFxccypcIjtcbiAgICB9XG4gICAgcHJpbWFyeVN1ZmZpeCgpIHtcbiAgICAgICAgcmV0dXJuIFwiKD86XFxcXHMqdWhyKT8oPzpcXFxccyooPzptb3JnZW5zfHZvcm1pdHRhZ3N8bmFjaG1pdHRhZ3N8YWJlbmRzfG5hY2h0cykpPyg/PVxcXFxXfCQpXCI7XG4gICAgfVxuICAgIGV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHN1cGVyLmV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICBpZiAoY29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwibW9yZ2Vuc1wiKSB8fCBtYXRjaFswXS5lbmRzV2l0aChcInZvcm1pdHRhZ3NcIikpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgY29tcG9uZW50cy5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJuYWNobWl0dGFnc1wiKSB8fCBtYXRjaFswXS5lbmRzV2l0aChcImFiZW5kc1wiKSB8fCBtYXRjaFswXS5lbmRzV2l0aChcIm5hY2h0c1wiKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IERFVGltZUV4cHJlc3Npb25QYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VUaW1lVW5pdHMgPSBleHBvcnRzLlRJTUVfVU5JVFNfUEFUVEVSTiA9IGV4cG9ydHMucGFyc2VZZWFyID0gZXhwb3J0cy5ZRUFSX1BBVFRFUk4gPSBleHBvcnRzLnBhcnNlTnVtYmVyUGF0dGVybiA9IGV4cG9ydHMuTlVNQkVSX1BBVFRFUk4gPSBleHBvcnRzLlRJTUVfVU5JVF9ESUNUSU9OQVJZID0gZXhwb3J0cy5JTlRFR0VSX1dPUkRfRElDVElPTkFSWSA9IGV4cG9ydHMuTU9OVEhfRElDVElPTkFSWSA9IGV4cG9ydHMuV0VFS0RBWV9ESUNUSU9OQVJZID0gdm9pZCAwO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5jb25zdCB5ZWFyc18xID0gcmVxdWlyZShcIi4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCIpO1xuZXhwb3J0cy5XRUVLREFZX0RJQ1RJT05BUlkgPSB7XG4gICAgXCJzb25udGFnXCI6IDAsXG4gICAgXCJzb1wiOiAwLFxuICAgIFwibW9udGFnXCI6IDEsXG4gICAgXCJtb1wiOiAxLFxuICAgIFwiZGllbnN0YWdcIjogMixcbiAgICBcImRpXCI6IDIsXG4gICAgXCJtaXR0d29jaFwiOiAzLFxuICAgIFwibWlcIjogMyxcbiAgICBcImRvbm5lcnN0YWdcIjogNCxcbiAgICBcImRvXCI6IDQsXG4gICAgXCJmcmVpdGFnXCI6IDUsXG4gICAgXCJmclwiOiA1LFxuICAgIFwic2Ftc3RhZ1wiOiA2LFxuICAgIFwic2FcIjogNixcbn07XG5leHBvcnRzLk1PTlRIX0RJQ1RJT05BUlkgPSB7XG4gICAgXCJqYW51YXJcIjogMSxcbiAgICBcImphblwiOiAxLFxuICAgIFwiamFuLlwiOiAxLFxuICAgIFwiZmVicnVhclwiOiAyLFxuICAgIFwiZmViXCI6IDIsXG4gICAgXCJmZWIuXCI6IDIsXG4gICAgXCJtw6RyelwiOiAzLFxuICAgIFwibWFlcnpcIjogMyxcbiAgICBcIm3DpHJcIjogMyxcbiAgICBcIm3DpHIuXCI6IDMsXG4gICAgXCJtcnpcIjogMyxcbiAgICBcIm1yei5cIjogMyxcbiAgICBcImFwcmlsXCI6IDQsXG4gICAgXCJhcHJcIjogNCxcbiAgICBcImFwci5cIjogNCxcbiAgICBcIm1haVwiOiA1LFxuICAgIFwianVuaVwiOiA2LFxuICAgIFwianVuXCI6IDYsXG4gICAgXCJqdW4uXCI6IDYsXG4gICAgXCJqdWxpXCI6IDcsXG4gICAgXCJqdWxcIjogNyxcbiAgICBcImp1bC5cIjogNyxcbiAgICBcImF1Z3VzdFwiOiA4LFxuICAgIFwiYXVnXCI6IDgsXG4gICAgXCJhdWcuXCI6IDgsXG4gICAgXCJzZXB0ZW1iZXJcIjogOSxcbiAgICBcInNlcFwiOiA5LFxuICAgIFwic2VwLlwiOiA5LFxuICAgIFwic2VwdFwiOiA5LFxuICAgIFwic2VwdC5cIjogOSxcbiAgICBcIm9rdG9iZXJcIjogMTAsXG4gICAgXCJva3RcIjogMTAsXG4gICAgXCJva3QuXCI6IDEwLFxuICAgIFwibm92ZW1iZXJcIjogMTEsXG4gICAgXCJub3ZcIjogMTEsXG4gICAgXCJub3YuXCI6IDExLFxuICAgIFwiZGV6ZW1iZXJcIjogMTIsXG4gICAgXCJkZXpcIjogMTIsXG4gICAgXCJkZXouXCI6IDEyLFxufTtcbmV4cG9ydHMuSU5URUdFUl9XT1JEX0RJQ1RJT05BUlkgPSB7XG4gICAgXCJlaW5zXCI6IDEsXG4gICAgXCJ6d2VpXCI6IDIsXG4gICAgXCJkcmVpXCI6IDMsXG4gICAgXCJ2aWVyXCI6IDQsXG4gICAgXCJmw7xuZlwiOiA1LFxuICAgIFwiZnVlbmZcIjogNSxcbiAgICBcInNlY2hzXCI6IDYsXG4gICAgXCJzaWViZW5cIjogNyxcbiAgICBcImFjaHRcIjogOCxcbiAgICBcIm5ldW5cIjogOSxcbiAgICBcInplaG5cIjogMTAsXG4gICAgXCJlbGZcIjogMTEsXG4gICAgXCJ6d8O2bGZcIjogMTIsXG4gICAgXCJ6d29lbGZcIjogMTIsXG59O1xuZXhwb3J0cy5USU1FX1VOSVRfRElDVElPTkFSWSA9IHtcbiAgICBzZWM6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbWluOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnM6IFwibWludXRlXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgaDogXCJob3VyXCIsXG4gICAgaHI6IFwiaG91clwiLFxuICAgIGhyczogXCJob3VyXCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIGRheTogXCJkXCIsXG4gICAgZGF5czogXCJkXCIsXG4gICAgd2VlazogXCJ3ZWVrXCIsXG4gICAgd2Vla3M6IFwid2Vla1wiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgeTogXCJ5ZWFyXCIsXG4gICAgeXI6IFwieWVhclwiLFxuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbn07XG5leHBvcnRzLk5VTUJFUl9QQVRURVJOID0gYCg/OiR7cGF0dGVybl8xLm1hdGNoQW55UGF0dGVybihleHBvcnRzLklOVEVHRVJfV09SRF9ESUNUSU9OQVJZKX18WzAtOV0rfFswLTldK1xcXFwuWzAtOV0rfGhhbGYoPzpcXFxccyphbj8pP3xhbj8oPzpcXFxccypmZXcpP3xmZXd8c2V2ZXJhbHxhP1xcXFxzKmNvdXBsZVxcXFxzKig/Om9mKT8pYDtcbmZ1bmN0aW9uIHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaCkge1xuICAgIGNvbnN0IG51bSA9IG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGV4cG9ydHMuSU5URUdFUl9XT1JEX0RJQ1RJT05BUllbbnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLklOVEVHRVJfV09SRF9ESUNUSU9OQVJZW251bV07XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bSA9PT0gXCJhXCIgfHwgbnVtID09PSBcImFuXCIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvZmV3LykpIHtcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvaGFsZi8pKSB7XG4gICAgICAgIHJldHVybiAwLjU7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvY291cGxlLykpIHtcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvc2V2ZXJhbC8pKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0pO1xufVxuZXhwb3J0cy5wYXJzZU51bWJlclBhdHRlcm4gPSBwYXJzZU51bWJlclBhdHRlcm47XG5leHBvcnRzLllFQVJfUEFUVEVSTiA9IGAoPzpbMC05XXsxLDR9KD86XFxcXHMqW3ZuXVxcXFwuP1xcXFxzKkMoPzpocik/XFxcXC4/KT8pYDtcbmZ1bmN0aW9uIHBhcnNlWWVhcihtYXRjaCkge1xuICAgIGlmICgvdi9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIHJldHVybiAtcGFyc2VJbnQobWF0Y2gucmVwbGFjZSgvW14wLTldKy9naSwgXCJcIikpO1xuICAgIH1cbiAgICBpZiAoL24vaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2gucmVwbGFjZSgvW14wLTldKy9naSwgXCJcIikpO1xuICAgIH1cbiAgICBjb25zdCByYXdZZWFyTnVtYmVyID0gcGFyc2VJbnQobWF0Y2gpO1xuICAgIHJldHVybiB5ZWFyc18xLmZpbmRNb3N0TGlrZWx5QURZZWFyKHJhd1llYXJOdW1iZXIpO1xufVxuZXhwb3J0cy5wYXJzZVllYXIgPSBwYXJzZVllYXI7XG5jb25zdCBTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4gPSBgKCR7ZXhwb3J0cy5OVU1CRVJfUEFUVEVSTn0pXFxcXHN7MCw1fSgke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oZXhwb3J0cy5USU1FX1VOSVRfRElDVElPTkFSWSl9KVxcXFxzezAsNX1gO1xuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9SRUdFWCA9IG5ldyBSZWdFeHAoU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOLCBcImlcIik7XG5leHBvcnRzLlRJTUVfVU5JVFNfUEFUVEVSTiA9IHBhdHRlcm5fMS5yZXBlYXRlZFRpbWV1bml0UGF0dGVybihcIlwiLCBTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4pO1xuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdHModGltZXVuaXRUZXh0KSB7XG4gICAgY29uc3QgZnJhZ21lbnRzID0ge307XG4gICAgbGV0IHJlbWFpbmluZ1RleHQgPSB0aW1ldW5pdFRleHQ7XG4gICAgbGV0IG1hdGNoID0gU0lOR0xFX1RJTUVfVU5JVF9SRUdFWC5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICBjb2xsZWN0RGF0ZVRpbWVGcmFnbWVudChmcmFnbWVudHMsIG1hdGNoKTtcbiAgICAgICAgcmVtYWluaW5nVGV4dCA9IHJlbWFpbmluZ1RleHQuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgIG1hdGNoID0gU0lOR0xFX1RJTUVfVU5JVF9SRUdFWC5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnRzO1xufVxuZXhwb3J0cy5wYXJzZVRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzO1xuZnVuY3Rpb24gY29sbGVjdERhdGVUaW1lRnJhZ21lbnQoZnJhZ21lbnRzLCBtYXRjaCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaFsxXSk7XG4gICAgY29uc3QgdW5pdCA9IGV4cG9ydHMuVElNRV9VTklUX0RJQ1RJT05BUllbbWF0Y2hbMl0udG9Mb3dlckNhc2UoKV07XG4gICAgZnJhZ21lbnRzW3VuaXRdID0gbnVtO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IHdlZWtzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2FsY3VsYXRpb24vd2Vla3NcIik7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcIig/Oig/OlxcXFwsfFxcXFwofFxcXFzvvIgpXFxcXHMqKT9cIiArXG4gICAgXCIoPzphW21uXVxcXFxzKj8pP1wiICtcbiAgICBcIig/OihkaWVzZVttbl18bGV0enRlW21uXXxuKD86w6R8YWUpY2hzdGVbbW5dKVxcXFxzKik/XCIgK1xuICAgIGAoJHtwYXR0ZXJuXzEubWF0Y2hBbnlQYXR0ZXJuKGNvbnN0YW50c18xLldFRUtEQVlfRElDVElPTkFSWSl9KWAgK1xuICAgIFwiKD86XFxcXHMqKD86XFxcXCx8XFxcXCl8XFxcXO+8iSkpP1wiICtcbiAgICBcIig/OlxcXFxzKihkaWVzZXxsZXR6dGV8big/OsOkfGFlKWNoc3RlKVxcXFxzKndvY2hlKT9cIiArXG4gICAgXCIoPz1cXFxcV3wkKVwiLCBcImlcIik7XG5jb25zdCBQUkVGSVhfR1JPVVAgPSAxO1xuY29uc3QgU1VGRklYX0dST1VQID0gMztcbmNvbnN0IFdFRUtEQVlfR1JPVVAgPSAyO1xuY2xhc3MgREVXZWVrZGF5UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBkYXlPZldlZWsgPSBtYXRjaFtXRUVLREFZX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBjb25zdGFudHNfMS5XRUVLREFZX0RJQ1RJT05BUllbZGF5T2ZXZWVrXTtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbWF0Y2hbUFJFRklYX0dST1VQXTtcbiAgICAgICAgY29uc3QgcG9zdGZpeCA9IG1hdGNoW1NVRkZJWF9HUk9VUF07XG4gICAgICAgIGxldCBtb2RpZmllcldvcmQgPSBwcmVmaXggfHwgcG9zdGZpeDtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkIHx8IFwiXCI7XG4gICAgICAgIG1vZGlmaWVyV29yZCA9IG1vZGlmaWVyV29yZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgbW9kaWZpZXIgPSBudWxsO1xuICAgICAgICBpZiAobW9kaWZpZXJXb3JkLm1hdGNoKC9sZXR6dGUvKSkge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcImxhc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RpZmllcldvcmQubWF0Y2goL2Noc3RlLykpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJuZXh0XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kaWZpZXJXb3JkLm1hdGNoKC9kaWVzZS8pKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwidGhpc1wiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGUgPSB3ZWVrc18xLnRvRGF5SlNXZWVrZGF5KGNvbnRleHQucmVmRGF0ZSwgb2Zmc2V0LCBtb2RpZmllcik7XG4gICAgICAgIHJldHVybiBjb250ZXh0XG4gICAgICAgICAgICAuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKVxuICAgICAgICAgICAgLmFzc2lnbihcIndlZWtkYXlcIiwgb2Zmc2V0KVxuICAgICAgICAgICAgLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKVxuICAgICAgICAgICAgLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSlcbiAgICAgICAgICAgIC5pbXBseShcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IERFV2Vla2RheVBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXCIpKTtcbmNsYXNzIERFTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXJfMS5kZWZhdWx0IHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKihiaXMoPzpcXHMqKD86YW18enVtKSk/fC0pXFxzKiQvaTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBERU1lcmdlRGF0ZVJhbmdlUmVmaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lclwiKSk7XG5jbGFzcyBERU1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lcl8xLmRlZmF1bHQge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5cXFxccyooVHx1bXxhbXwsfC0pP1xcXFxzKiRcIik7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gREVNZXJnZURhdGVUaW1lUmVmaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9pbmRleFwiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IGRheWpzXzIgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvZGF5anNcIik7XG5jb25zdCB0aW1ldW5pdHNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy90aW1ldW5pdHNcIik7XG5jbGFzcyBERUNhc3VhbFRpbWVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIC8oZGllc2VuKT9cXHMqKG1vcmdlbnx2b3JtaXR0YWd8bWl0dGFncz98bmFjaG1pdHRhZ3xhYmVuZHxuYWNodHxtaXR0ZXJuYWNodCkoPz1cXFd8JCkvaTtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqc18xLmRlZmF1bHQoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgY29uc3QgdGltZUtleXdvcmRQYXR0ZXJuID0gbWF0Y2hbMl0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBkYXlqc18yLmltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICAgICAgcmV0dXJuIERFQ2FzdWFsVGltZVBhcnNlci5leHRyYWN0VGltZUNvbXBvbmVudHMoY29tcG9uZW50LCB0aW1lS2V5d29yZFBhdHRlcm4pO1xuICAgIH1cbiAgICBzdGF0aWMgZXh0cmFjdFRpbWVDb21wb25lbnRzKGNvbXBvbmVudCwgdGltZUtleXdvcmRQYXR0ZXJuKSB7XG4gICAgICAgIHN3aXRjaCAodGltZUtleXdvcmRQYXR0ZXJuKSB7XG4gICAgICAgICAgICBjYXNlIFwibW9yZ2VuXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCA2KTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInZvcm1pdHRhZ1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgOSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaXR0YWdcIjpcbiAgICAgICAgICAgIGNhc2UgXCJtaXR0YWdzXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAxMik7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJuYWNobWl0dGFnXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAxNSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhYmVuZFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMTgpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibmFjaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDIyKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1pdHRlcm5hY2h0XCI6XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXQoXCJob3VyXCIpID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSB0aW1ldW5pdHNfMS5hZGRJbXBsaWVkVGltZVVuaXRzKGNvbXBvbmVudCwgeyBcImRheVwiOiAxIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBERUNhc3VhbFRpbWVQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3QgZGF5anNfMiA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9kYXlqc1wiKTtcbmNvbnN0IERFQ2FzdWFsVGltZVBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RFQ2FzdWFsVGltZVBhcnNlclwiKSk7XG5jb25zdCByZWZlcmVuY2VzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vY2FzdWFsUmVmZXJlbmNlc1wiKSk7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKGpldHp0fGhldXRlfG1vcmdlbnzDvGJlcm1vcmdlbnx1ZWJlcm1vcmdlbnxnZXN0ZXJufHZvcmdlc3Rlcm58bGV0enRlXFxcXHMqbmFjaHQpYCArXG4gICAgYCg/OlxcXFxzKihtb3JnZW58dm9ybWl0dGFnfG1pdHRhZ3M/fG5hY2htaXR0YWd8YWJlbmR8bmFjaHR8bWl0dGVybmFjaHQpKT9gICtcbiAgICBgKD89XFxcXFd8JClgLCBcImlcIik7XG5jb25zdCBEQVRFX0dST1VQID0gMTtcbmNvbnN0IFRJTUVfR1JPVVAgPSAyO1xuY2xhc3MgREVDYXN1YWxEYXRlUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybihjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgbGV0IHRhcmdldERhdGUgPSBkYXlqc18xLmRlZmF1bHQoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgY29uc3QgZGF0ZUtleXdvcmQgPSAobWF0Y2hbREFURV9HUk9VUF0gfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdGltZUtleXdvcmQgPSAobWF0Y2hbVElNRV9HUk9VUF0gfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgc3dpdGNoIChkYXRlS2V5d29yZCkge1xuICAgICAgICAgICAgY2FzZSBcImpldHp0XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy5ub3coY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoZXV0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9kYXkoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb3JnZW5cIjpcbiAgICAgICAgICAgICAgICBkYXlqc18yLmFzc2lnblRoZU5leHREYXkoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCLDvGJlcm1vcmdlblwiOlxuICAgICAgICAgICAgY2FzZSBcInVlYmVybW9yZ2VuXCI6XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKDEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgICAgIGRheWpzXzIuYXNzaWduVGhlTmV4dERheShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdlc3Rlcm5cIjpcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQoLTEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgICAgIGRheWpzXzIuYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICAgICAgICAgICAgICBkYXlqc18yLmltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2b3JnZXN0ZXJuXCI6XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0yLCBcImRheVwiKTtcbiAgICAgICAgICAgICAgICBkYXlqc18yLmFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgICAgICAgICAgICAgZGF5anNfMi5pbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChkYXRlS2V5d29yZC5tYXRjaCgvbGV0enRlXFxzKm5hY2h0LykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldERhdGUuaG91cigpID4gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYXlqc18yLmFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lS2V5d29yZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gREVDYXN1YWxUaW1lUGFyc2VyXzEuZGVmYXVsdC5leHRyYWN0VGltZUNvbXBvbmVudHMoY29tcG9uZW50LCB0aW1lS2V5d29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBERUNhc3VhbERhdGVQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHllYXJzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIik7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBjb25zdGFudHNfMiA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFwiKD86YW1cXFxccyo/KT9cIiArXG4gICAgXCIoPzpkZW5cXFxccyo/KT9cIiArXG4gICAgYChbMC05XXsxLDJ9KVxcXFwuYCArXG4gICAgYCg/OlxcXFxzKig/OmJpcyg/OlxcXFxzKig/OmFtfHp1bSkpP3xcXFxcLXxcXFxc4oCTfFxcXFxzKVxcXFxzKihbMC05XXsxLDJ9KVxcXFwuPyk/XFxcXHMqYCArXG4gICAgYCgke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgIGAoPzooPzotfC98LD9cXFxccyopKCR7Y29uc3RhbnRzXzIuWUVBUl9QQVRURVJOfSg/IVteXFxcXHNdXFxcXGQpKSk/YCArXG4gICAgYCg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgREFURV9HUk9VUCA9IDE7XG5jb25zdCBEQVRFX1RPX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAzO1xuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5jbGFzcyBERU1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gcGFyc2VJbnQobWF0Y2hbREFURV9HUk9VUF0pO1xuICAgICAgICBpZiAoZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFtEQVRFX0dST1VQXS5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiZGF5XCIsIGRheSk7XG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhck51bWJlciA9IGNvbnN0YW50c18yLnBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB5ZWFyc18xLmZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFtEQVRFX1RPX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBhcnNlSW50KG1hdGNoW0RBVEVfVE9fR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5lbmQgPSByZXN1bHQuc3RhcnQuY2xvbmUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwiZGF5XCIsIGVuZERhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gREVNb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlQ29uZmlndXJhdGlvbiA9IGV4cG9ydHMuY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbiA9IGV4cG9ydHMucGFyc2VEYXRlID0gZXhwb3J0cy5wYXJzZSA9IGV4cG9ydHMuc3RyaWN0ID0gZXhwb3J0cy5jYXN1YWwgPSB2b2lkIDA7XG5jb25zdCBjb25maWd1cmF0aW9uc18xID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZ3VyYXRpb25zXCIpO1xuY29uc3QgY2hyb25vXzEgPSByZXF1aXJlKFwiLi4vLi4vY2hyb25vXCIpO1xuY29uc3QgU2xhc2hEYXRlRm9ybWF0UGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbW1vbi9wYXJzZXJzL1NsYXNoRGF0ZUZvcm1hdFBhcnNlclwiKSk7XG5jb25zdCBJU09Gb3JtYXRQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tbW9uL3BhcnNlcnMvSVNPRm9ybWF0UGFyc2VyXCIpKTtcbmNvbnN0IERFVGltZUV4cHJlc3Npb25QYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0RFVGltZUV4cHJlc3Npb25QYXJzZXJcIikpO1xuY29uc3QgREVXZWVrZGF5UGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9ERVdlZWtkYXlQYXJzZXJcIikpO1xuY29uc3QgREVNZXJnZURhdGVSYW5nZVJlZmluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZWZpbmVycy9ERU1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiKSk7XG5jb25zdCBERU1lcmdlRGF0ZVRpbWVSZWZpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVmaW5lcnMvREVNZXJnZURhdGVUaW1lUmVmaW5lclwiKSk7XG5jb25zdCBERUNhc3VhbERhdGVQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0RFQ2FzdWFsRGF0ZVBhcnNlclwiKSk7XG5jb25zdCBERUNhc3VhbFRpbWVQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0RFQ2FzdWFsVGltZVBhcnNlclwiKSk7XG5jb25zdCBERU1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvREVNb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXJcIikpO1xuZXhwb3J0cy5jYXN1YWwgPSBuZXcgY2hyb25vXzEuQ2hyb25vKGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24oKSk7XG5leHBvcnRzLnN0cmljdCA9IG5ldyBjaHJvbm9fMS5DaHJvbm8oY3JlYXRlQ29uZmlndXJhdGlvbih0cnVlKSk7XG5mdW5jdGlvbiBwYXJzZSh0ZXh0LCByZWYsIG9wdGlvbikge1xuICAgIHJldHVybiBleHBvcnRzLmNhc3VhbC5wYXJzZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jYXN1YWwucGFyc2VEYXRlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbmV4cG9ydHMucGFyc2VEYXRlID0gcGFyc2VEYXRlO1xuZnVuY3Rpb24gY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbihsaXR0bGVFbmRpYW4gPSB0cnVlKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlQ29uZmlndXJhdGlvbihmYWxzZSwgbGl0dGxlRW5kaWFuKTtcbiAgICBvcHRpb24ucGFyc2Vycy51bnNoaWZ0KG5ldyBERUNhc3VhbFRpbWVQYXJzZXJfMS5kZWZhdWx0KCkpO1xuICAgIG9wdGlvbi5wYXJzZXJzLnVuc2hpZnQobmV3IERFQ2FzdWFsRGF0ZVBhcnNlcl8xLmRlZmF1bHQoKSk7XG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbiA9IGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb247XG5mdW5jdGlvbiBjcmVhdGVDb25maWd1cmF0aW9uKHN0cmljdE1vZGUgPSB0cnVlLCBsaXR0bGVFbmRpYW4gPSB0cnVlKSB7XG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25zXzEuaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24oe1xuICAgICAgICBwYXJzZXJzOiBbXG4gICAgICAgICAgICBuZXcgSVNPRm9ybWF0UGFyc2VyXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgbmV3IFNsYXNoRGF0ZUZvcm1hdFBhcnNlcl8xLmRlZmF1bHQobGl0dGxlRW5kaWFuKSxcbiAgICAgICAgICAgIG5ldyBERVRpbWVFeHByZXNzaW9uUGFyc2VyXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgbmV3IERFTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgbmV3IERFV2Vla2RheVBhcnNlcl8xLmRlZmF1bHQoKSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVmaW5lcnM6IFtuZXcgREVNZXJnZURhdGVSYW5nZVJlZmluZXJfMS5kZWZhdWx0KCksIG5ldyBERU1lcmdlRGF0ZVRpbWVSZWZpbmVyXzEuZGVmYXVsdCgpXSxcbiAgICB9LCBzdHJpY3RNb2RlKTtcbn1cbmV4cG9ydHMuY3JlYXRlQ29uZmlndXJhdGlvbiA9IGNyZWF0ZUNvbmZpZ3VyYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9pbmRleFwiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IGRheWpzXzIgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvZGF5anNcIik7XG5jb25zdCByZWZlcmVuY2VzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vY2FzdWFsUmVmZXJlbmNlc1wiKSk7XG5jbGFzcyBGUkNhc3VhbERhdGVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIC8obWFpbnRlbmFudHxhdWpvdXJkJ2h1aXxkZW1haW58aGllcnxjZXR0ZVxccypudWl0fGxhXFxzKnZlaWxsZSkoPz1cXFd8JCkvaTtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGxldCB0YXJnZXREYXRlID0gZGF5anNfMS5kZWZhdWx0KGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgIGNvbnN0IGxvd2VyVGV4dCA9IG1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgc3dpdGNoIChsb3dlclRleHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJtYWludGVuYW50XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZXMubm93KGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgICAgICBjYXNlIFwiYXVqb3VyZCdodWlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy50b2RheShjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICAgICAgY2FzZSBcImhpZXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy55ZXN0ZXJkYXkoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgIGNhc2UgXCJkZW1haW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy50b21vcnJvdyhjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAobG93ZXJUZXh0Lm1hdGNoKC9jZXR0ZVxccypudWl0LykpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5anNfMi5hc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDIyKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxvd2VyVGV4dC5tYXRjaCgvbGFcXHMqdmVpbGxlLykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGF5anNfMi5hc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEZSQ2FzdWFsRGF0ZVBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9pbmRleFwiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNsYXNzIEZSQ2FzdWFsVGltZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oY29udGV4dCkge1xuICAgICAgICByZXR1cm4gLyhjZXQ/KT9cXHMqKG1hdGlufHNvaXJ8YXByw6hzLW1pZGl8YXByZW18YSBtaWRpfMOgIG1pbnVpdCkoPz1cXFd8JCkvaTtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHN1ZmZpeExvd2VyID0gbWF0Y2hbMl0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBzd2l0Y2ggKHN1ZmZpeExvd2VyKSB7XG4gICAgICAgICAgICBjYXNlIFwiYXByw6hzLW1pZGlcIjpcbiAgICAgICAgICAgIGNhc2UgXCJhcHJlbVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMTQpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzb2lyXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAxOCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1hdGluXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCA4KTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYSBtaWRpXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAxMik7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIsOgIG1pbnVpdFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBGUkNhc3VhbFRpbWVQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuY2xhc3MgRlJUaW1lRXhwcmVzc2lvblBhcnNlciBleHRlbmRzIEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXJfMS5BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIHtcbiAgICBwcmltYXJ5UHJlZml4KCkge1xuICAgICAgICByZXR1cm4gXCIoPzooPzpbw6BhXSlcXFxccyopP1wiO1xuICAgIH1cbiAgICBmb2xsb3dpbmdQaGFzZSgpIHtcbiAgICAgICAgcmV0dXJuIFwiXFxcXHMqKD86XFxcXC18XFxcXOKAk3xcXFxcfnxcXFxc44CcfFvDoGFdfFxcXFw/KVxcXFxzKlwiO1xuICAgIH1cbiAgICBleHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXlxccypcXGR7NH1cXHMqJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRlJUaW1lRXhwcmVzc2lvblBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lclwiKSk7XG5jbGFzcyBGUk1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lcl8xLmRlZmF1bHQge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5cXFxccyooVHzDoHxhfHZlcnN8ZGV8LHwtKT9cXFxccyokXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEZSTWVyZ2VEYXRlVGltZVJlZmluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiKSk7XG5jbGFzcyBGUk1lcmdlRGF0ZVJhbmdlUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEuZGVmYXVsdCB7XG4gICAgcGF0dGVybkJldHdlZW4oKSB7XG4gICAgICAgIHJldHVybiAvXlxccyoow6B8YXwtKVxccyokL2k7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRlJNZXJnZURhdGVSYW5nZVJlZmluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VUaW1lVW5pdHMgPSBleHBvcnRzLlRJTUVfVU5JVFNfUEFUVEVSTiA9IGV4cG9ydHMucGFyc2VZZWFyID0gZXhwb3J0cy5ZRUFSX1BBVFRFUk4gPSBleHBvcnRzLnBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSBleHBvcnRzLk9SRElOQUxfTlVNQkVSX1BBVFRFUk4gPSBleHBvcnRzLnBhcnNlTnVtYmVyUGF0dGVybiA9IGV4cG9ydHMuTlVNQkVSX1BBVFRFUk4gPSBleHBvcnRzLlRJTUVfVU5JVF9ESUNUSU9OQVJZID0gZXhwb3J0cy5JTlRFR0VSX1dPUkRfRElDVElPTkFSWSA9IGV4cG9ydHMuTU9OVEhfRElDVElPTkFSWSA9IGV4cG9ydHMuV0VFS0RBWV9ESUNUSU9OQVJZID0gdm9pZCAwO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5leHBvcnRzLldFRUtEQVlfRElDVElPTkFSWSA9IHtcbiAgICBcImRpbWFuY2hlXCI6IDAsXG4gICAgXCJkaW1cIjogMCxcbiAgICBcImx1bmRpXCI6IDEsXG4gICAgXCJsdW5cIjogMSxcbiAgICBcIm1hcmRpXCI6IDIsXG4gICAgXCJtYXJcIjogMixcbiAgICBcIm1lcmNyZWRpXCI6IDMsXG4gICAgXCJtZXJcIjogMyxcbiAgICBcImpldWRpXCI6IDQsXG4gICAgXCJqZXVcIjogNCxcbiAgICBcInZlbmRyZWRpXCI6IDUsXG4gICAgXCJ2ZW5cIjogNSxcbiAgICBcInNhbWVkaVwiOiA2LFxuICAgIFwic2FtXCI6IDYsXG59O1xuZXhwb3J0cy5NT05USF9ESUNUSU9OQVJZID0ge1xuICAgIFwiamFudmllclwiOiAxLFxuICAgIFwiamFuXCI6IDEsXG4gICAgXCJqYW4uXCI6IDEsXG4gICAgXCJmw6l2cmllclwiOiAyLFxuICAgIFwiZsOpdlwiOiAyLFxuICAgIFwiZsOpdi5cIjogMixcbiAgICBcImZldnJpZXJcIjogMixcbiAgICBcImZldlwiOiAyLFxuICAgIFwiZmV2LlwiOiAyLFxuICAgIFwibWFyc1wiOiAzLFxuICAgIFwibWFyXCI6IDMsXG4gICAgXCJtYXIuXCI6IDMsXG4gICAgXCJhdnJpbFwiOiA0LFxuICAgIFwiYXZyXCI6IDQsXG4gICAgXCJhdnIuXCI6IDQsXG4gICAgXCJtYWlcIjogNSxcbiAgICBcImp1aW5cIjogNixcbiAgICBcImp1blwiOiA2LFxuICAgIFwianVpbGxldFwiOiA3LFxuICAgIFwianVpbFwiOiA3LFxuICAgIFwianVsXCI6IDcsXG4gICAgXCJqdWwuXCI6IDcsXG4gICAgXCJhb8O7dFwiOiA4LFxuICAgIFwiYW91dFwiOiA4LFxuICAgIFwic2VwdGVtYnJlXCI6IDksXG4gICAgXCJzZXBcIjogOSxcbiAgICBcInNlcC5cIjogOSxcbiAgICBcInNlcHRcIjogOSxcbiAgICBcInNlcHQuXCI6IDksXG4gICAgXCJvY3RvYnJlXCI6IDEwLFxuICAgIFwib2N0XCI6IDEwLFxuICAgIFwib2N0LlwiOiAxMCxcbiAgICBcIm5vdmVtYnJlXCI6IDExLFxuICAgIFwibm92XCI6IDExLFxuICAgIFwibm92LlwiOiAxMSxcbiAgICBcImTDqWNlbWJyZVwiOiAxMixcbiAgICBcImRlY2VtYnJlXCI6IDEyLFxuICAgIFwiZGVjXCI6IDEyLFxuICAgIFwiZGVjLlwiOiAxMixcbn07XG5leHBvcnRzLklOVEVHRVJfV09SRF9ESUNUSU9OQVJZID0ge1xuICAgIFwidW5cIjogMSxcbiAgICBcImRldXhcIjogMixcbiAgICBcInRyb2lzXCI6IDMsXG4gICAgXCJxdWF0cmVcIjogNCxcbiAgICBcImNpbnFcIjogNSxcbiAgICBcInNpeFwiOiA2LFxuICAgIFwic2VwdFwiOiA3LFxuICAgIFwiaHVpdFwiOiA4LFxuICAgIFwibmV1ZlwiOiA5LFxuICAgIFwiZGl4XCI6IDEwLFxuICAgIFwib256ZVwiOiAxMSxcbiAgICBcImRvdXplXCI6IDEyLFxuICAgIFwidHJlaXplXCI6IDEzLFxufTtcbmV4cG9ydHMuVElNRV9VTklUX0RJQ1RJT05BUlkgPSB7XG4gICAgXCJzZWNcIjogXCJzZWNvbmRcIixcbiAgICBcInNlY29uZGVcIjogXCJzZWNvbmRcIixcbiAgICBcInNlY29uZGVzXCI6IFwic2Vjb25kXCIsXG4gICAgXCJtaW5cIjogXCJtaW51dGVcIixcbiAgICBcIm1pbnNcIjogXCJtaW51dGVcIixcbiAgICBcIm1pbnV0ZVwiOiBcIm1pbnV0ZVwiLFxuICAgIFwibWludXRlc1wiOiBcIm1pbnV0ZVwiLFxuICAgIFwiaFwiOiBcImhvdXJcIixcbiAgICBcImhyXCI6IFwiaG91clwiLFxuICAgIFwiaHJzXCI6IFwiaG91clwiLFxuICAgIFwiaGV1cmVcIjogXCJob3VyXCIsXG4gICAgXCJoZXVyZXNcIjogXCJob3VyXCIsXG4gICAgXCJqb3VyXCI6IFwiZFwiLFxuICAgIFwiam91cnNcIjogXCJkXCIsXG4gICAgXCJzZW1haW5lXCI6IFwid2Vla1wiLFxuICAgIFwic2VtYWluZXNcIjogXCJ3ZWVrXCIsXG4gICAgXCJtb2lzXCI6IFwibW9udGhcIixcbiAgICBcInRyaW1lc3RyZVwiOiBcInF1YXJ0ZXJcIixcbiAgICBcInRyaW1lc3RyZXNcIjogXCJxdWFydGVyXCIsXG4gICAgXCJhbnNcIjogXCJ5ZWFyXCIsXG4gICAgXCJhbm7DqWVcIjogXCJ5ZWFyXCIsXG4gICAgXCJhbm7DqWVzXCI6IFwieWVhclwiLFxufTtcbmV4cG9ydHMuTlVNQkVSX1BBVFRFUk4gPSBgKD86JHtwYXR0ZXJuXzEubWF0Y2hBbnlQYXR0ZXJuKGV4cG9ydHMuSU5URUdFUl9XT1JEX0RJQ1RJT05BUlkpfXxbMC05XSt8WzAtOV0rXFxcXC5bMC05XSt8dW5lP3xxdWVscXVlcz98ZGVtaS0/KWA7XG5mdW5jdGlvbiBwYXJzZU51bWJlclBhdHRlcm4obWF0Y2gpIHtcbiAgICBjb25zdCBudW0gPSBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChleHBvcnRzLklOVEVHRVJfV09SRF9ESUNUSU9OQVJZW251bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5JTlRFR0VSX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH1cbiAgICBlbHNlIGlmIChudW0gPT09IFwidW5lXCIgfHwgbnVtID09PSBcInVuXCIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvcXVlbHF1ZXM/LykpIHtcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bS5tYXRjaCgvZGVtaS0/LykpIHtcbiAgICAgICAgcmV0dXJuIDAuNTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtKTtcbn1cbmV4cG9ydHMucGFyc2VOdW1iZXJQYXR0ZXJuID0gcGFyc2VOdW1iZXJQYXR0ZXJuO1xuZXhwb3J0cy5PUkRJTkFMX05VTUJFUl9QQVRURVJOID0gYCg/OlswLTldezEsMn0oPzplcik/KWA7XG5mdW5jdGlvbiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoKSB7XG4gICAgbGV0IG51bSA9IG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgbnVtID0gbnVtLnJlcGxhY2UoLyg/OmVyKSQvaSwgXCJcIik7XG4gICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG59XG5leHBvcnRzLnBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuO1xuZXhwb3J0cy5ZRUFSX1BBVFRFUk4gPSBgKD86WzEtOV1bMC05XXswLDN9XFxcXHMqKD86QUN8QUR8cFxcXFwuXFxcXHMqQyg/OmhyPyk/XFxcXC5cXFxccypuXFxcXC4pfFsxLTJdWzAtOV17M318WzUtOV1bMC05XSlgO1xuZnVuY3Rpb24gcGFyc2VZZWFyKG1hdGNoKSB7XG4gICAgaWYgKC9BQy9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvQkMvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiAtcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cbiAgICBpZiAoL0FEL2kudGVzdChtYXRjaCkgfHwgL0MvaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL1teXFxkXSsvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiBwYXJzZUludChtYXRjaCk7XG4gICAgfVxuICAgIGxldCB5ZWFyTnVtYmVyID0gcGFyc2VJbnQobWF0Y2gpO1xuICAgIGlmICh5ZWFyTnVtYmVyIDwgMTAwKSB7XG4gICAgICAgIGlmICh5ZWFyTnVtYmVyID4gNTApIHtcbiAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyTnVtYmVyICsgMTkwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyTnVtYmVyICsgMjAwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geWVhck51bWJlcjtcbn1cbmV4cG9ydHMucGFyc2VZZWFyID0gcGFyc2VZZWFyO1xuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOID0gYCgke2V4cG9ydHMuTlVNQkVSX1BBVFRFUk59KVxcXFxzezAsNX0oJHtwYXR0ZXJuXzEubWF0Y2hBbnlQYXR0ZXJuKGV4cG9ydHMuVElNRV9VTklUX0RJQ1RJT05BUlkpfSlcXFxcc3swLDV9YDtcbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUkVHRVggPSBuZXcgUmVnRXhwKFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiwgXCJpXCIpO1xuZXhwb3J0cy5USU1FX1VOSVRTX1BBVFRFUk4gPSBwYXR0ZXJuXzEucmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oXCJcIiwgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOKTtcbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXRzKHRpbWV1bml0VGV4dCkge1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IHt9O1xuICAgIGxldCByZW1haW5pbmdUZXh0ID0gdGltZXVuaXRUZXh0O1xuICAgIGxldCBtYXRjaCA9IFNJTkdMRV9USU1FX1VOSVRfUkVHRVguZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgY29sbGVjdERhdGVUaW1lRnJhZ21lbnQoZnJhZ21lbnRzLCBtYXRjaCk7XG4gICAgICAgIHJlbWFpbmluZ1RleHQgPSByZW1haW5pbmdUZXh0LnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICBtYXRjaCA9IFNJTkdMRV9USU1FX1VOSVRfUkVHRVguZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50cztcbn1cbmV4cG9ydHMucGFyc2VUaW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cztcbmZ1bmN0aW9uIGNvbGxlY3REYXRlVGltZUZyYWdtZW50KGZyYWdtZW50cywgbWF0Y2gpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZU51bWJlclBhdHRlcm4obWF0Y2hbMV0pO1xuICAgIGNvbnN0IHVuaXQgPSBleHBvcnRzLlRJTUVfVU5JVF9ESUNUSU9OQVJZW21hdGNoWzJdLnRvTG93ZXJDYXNlKCldO1xuICAgIGZyYWdtZW50c1t1bml0XSA9IG51bTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCB3ZWVrc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3dlZWtzXCIpO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoPzooPzpcXFxcLHxcXFxcKHxcXFxc77yIKVxcXFxzKik/XCIgK1xuICAgIFwiKD86KD86Y2UpXFxcXHMqKT9cIiArXG4gICAgYCgke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oY29uc3RhbnRzXzEuV0VFS0RBWV9ESUNUSU9OQVJZKX0pYCArXG4gICAgXCIoPzpcXFxccyooPzpcXFxcLHxcXFxcKXxcXFxc77yJKSk/XCIgK1xuICAgIFwiKD86XFxcXHMqKGRlcm5pZXJ8cHJvY2hhaW4pXFxcXHMqKT9cIiArXG4gICAgXCIoPz1cXFxcV3xcXFxcZHwkKVwiLCBcImlcIik7XG5jb25zdCBXRUVLREFZX0dST1VQID0gMTtcbmNvbnN0IFBPU1RGSVhfR1JPVVAgPSAyO1xuY2xhc3MgRlJXZWVrZGF5UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBkYXlPZldlZWsgPSBtYXRjaFtXRUVLREFZX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBjb25zdGFudHNfMS5XRUVLREFZX0RJQ1RJT05BUllbZGF5T2ZXZWVrXTtcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3VmZml4ID0gbWF0Y2hbUE9TVEZJWF9HUk9VUF07XG4gICAgICAgIHN1ZmZpeCA9IHN1ZmZpeCB8fCBcIlwiO1xuICAgICAgICBzdWZmaXggPSBzdWZmaXgudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IG1vZGlmaWVyID0gbnVsbDtcbiAgICAgICAgaWYgKHN1ZmZpeCA9PSBcImRlcm5pZXJcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcImxhc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdWZmaXggPT0gXCJwcm9jaGFpblwiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwibmV4dFwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGUgPSB3ZWVrc18xLnRvRGF5SlNXZWVrZGF5KGNvbnRleHQucmVmRGF0ZSwgb2Zmc2V0LCBtb2RpZmllcik7XG4gICAgICAgIHJldHVybiBjb250ZXh0XG4gICAgICAgICAgICAuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKVxuICAgICAgICAgICAgLmFzc2lnbihcIndlZWtkYXlcIiwgb2Zmc2V0KVxuICAgICAgICAgICAgLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKVxuICAgICAgICAgICAgLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSlcbiAgICAgICAgICAgIC5pbXBseShcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEZSV2Vla2RheVBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9pbmRleFwiKTtcbmNvbnN0IEZJUlNUX1JFR19QQVRURVJOID0gbmV3IFJlZ0V4cChcIihefFxcXFxzfFQpXCIgK1xuICAgIFwiKD86KD86W8OgYV0pXFxcXHMqKT9cIiArXG4gICAgXCIoXFxcXGR7MSwyfSkoPzpofDopP1wiICtcbiAgICBcIig/OihcXFxcZHsxLDJ9KSg/Om18Oik/KT9cIiArXG4gICAgXCIoPzooXFxcXGR7MSwyfSkoPzpzfDopPyk/XCIgK1xuICAgIFwiKD86XFxcXHMqKEFcXFxcLk1cXFxcLnxQXFxcXC5NXFxcXC58QU0/fFBNPykpP1wiICtcbiAgICBcIig/PVxcXFxXfCQpXCIsIFwiaVwiKTtcbmNvbnN0IFNFQ09ORF9SRUdfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCJeXFxcXHMqKFxcXFwtfFxcXFzigJN8XFxcXH58XFxcXOOAnHxbw6BhXXxcXFxcPylcXFxccypcIiArXG4gICAgXCIoXFxcXGR7MSwyfSkoPzpofDopP1wiICtcbiAgICBcIig/OihcXFxcZHsxLDJ9KSg/Om18Oik/KT9cIiArXG4gICAgXCIoPzooXFxcXGR7MSwyfSkoPzpzfDopPyk/XCIgK1xuICAgIFwiKD86XFxcXHMqKEFcXFxcLk1cXFxcLnxQXFxcXC5NXFxcXC58QU0/fFBNPykpP1wiICtcbiAgICBcIig/PVxcXFxXfCQpXCIsIFwiaVwiKTtcbmNvbnN0IEhPVVJfR1JPVVAgPSAyO1xuY29uc3QgTUlOVVRFX0dST1VQID0gMztcbmNvbnN0IFNFQ09ORF9HUk9VUCA9IDQ7XG5jb25zdCBBTV9QTV9IT1VSX0dST1VQID0gNTtcbmNsYXNzIEZSU3BlY2lmaWNUaW1lRXhwcmVzc2lvblBhcnNlciB7XG4gICAgcGF0dGVybihjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBGSVJTVF9SRUdfUEFUVEVSTjtcbiAgICB9XG4gICAgZXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXggKyBtYXRjaFsxXS5sZW5ndGgsIG1hdGNoWzBdLnN1YnN0cmluZyhtYXRjaFsxXS5sZW5ndGgpKTtcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkezR9JC8pKSB7XG4gICAgICAgICAgICBtYXRjaC5pbmRleCArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc3RhcnQgPSBGUlNwZWNpZmljVGltZUV4cHJlc3Npb25QYXJzZXIuZXh0cmFjdFRpbWVDb21wb25lbnQocmVzdWx0LnN0YXJ0LmNsb25lKCksIG1hdGNoKTtcbiAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQpIHtcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBTRUNPTkRfUkVHX1BBVFRFUk4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgaWYgKHNlY29uZE1hdGNoKSB7XG4gICAgICAgICAgICByZXN1bHQuZW5kID0gRlJTcGVjaWZpY1RpbWVFeHByZXNzaW9uUGFyc2VyLmV4dHJhY3RUaW1lQ29tcG9uZW50KHJlc3VsdC5zdGFydC5jbG9uZSgpLCBzZWNvbmRNYXRjaCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IHNlY29uZE1hdGNoWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBleHRyYWN0VGltZUNvbXBvbmVudChleHRyYWN0aW5nQ29tcG9uZW50cywgbWF0Y2gpIHtcbiAgICAgICAgbGV0IGhvdXIgPSAwO1xuICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgbGV0IG1lcmlkaWVtID0gbnVsbDtcbiAgICAgICAgaG91ciA9IHBhcnNlSW50KG1hdGNoW0hPVVJfR1JPVVBdKTtcbiAgICAgICAgaWYgKG1hdGNoW01JTlVURV9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQobWF0Y2hbTUlOVVRFX0dST1VQXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbnV0ZSA+PSA2MCB8fCBob3VyID4gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3VyID49IDEyKSB7XG4gICAgICAgICAgICBtZXJpZGllbSA9IGluZGV4XzEuTWVyaWRpZW0uUE07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChob3VyID4gMTIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCBhbXBtID0gbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF1bMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChhbXBtID09IFwiYVwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBpbmRleF8xLk1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbXBtID09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBpbmRleF8xLk1lcmlkaWVtLlBNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4dHJhY3RpbmdDb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91cik7XG4gICAgICAgIGV4dHJhY3RpbmdDb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBtaW51dGUpO1xuICAgICAgICBpZiAobWVyaWRpZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGV4dHJhY3RpbmdDb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIG1lcmlkaWVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBleHRyYWN0aW5nQ29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXh0cmFjdGluZ0NvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBwYXJzZUludChtYXRjaFtTRUNPTkRfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmQgPj0gNjApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBleHRyYWN0aW5nQ29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXh0cmFjdGluZ0NvbXBvbmVudHM7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRlJTcGVjaWZpY1RpbWVFeHByZXNzaW9uUGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB5ZWFyc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgY29uc3RhbnRzXzIgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgY29uc3RhbnRzXzMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcIig/Om9uXFxcXHMqPyk/XCIgK1xuICAgIGAoJHtjb25zdGFudHNfMy5PUkRJTkFMX05VTUJFUl9QQVRURVJOfSlgICtcbiAgICBgKD86XFxcXHMqKD86YXV8XFxcXC18XFxcXOKAk3xqdXNxdSdhdT98XFxcXHMpXFxcXHMqKCR7Y29uc3RhbnRzXzMuT1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pKT9gICtcbiAgICBgKD86LXwvfFxcXFxzKig/OmRlKT9cXFxccyopYCArXG4gICAgYCgke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgIGAoPzooPzotfC98LD9cXFxccyopKCR7Y29uc3RhbnRzXzIuWUVBUl9QQVRURVJOfSg/IVteXFxcXHNdXFxcXGQpKSk/YCArXG4gICAgYCg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgREFURV9HUk9VUCA9IDE7XG5jb25zdCBEQVRFX1RPX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAzO1xuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5jbGFzcyBGUk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gY29uc3RhbnRzXzMucGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX0dST1VQXSk7XG4gICAgICAgIGlmIChkYXkgPiAzMSkge1xuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoW0RBVEVfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJkYXlcIiwgZGF5KTtcbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyTnVtYmVyID0gY29uc3RhbnRzXzIucGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHllYXJzXzEuZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCBlbmREYXRlID0gY29uc3RhbnRzXzMucGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX1RPX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuZW5kID0gcmVzdWx0LnN0YXJ0LmNsb25lKCk7XG4gICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcImRheVwiLCBlbmREYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEZSTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCByZXN1bHRzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcmVzdWx0c1wiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IHRpbWV1bml0c18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0c1wiKTtcbmNsYXNzIEZSVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYGlsIHkgYVxcXFxzKigke2NvbnN0YW50c18xLlRJTUVfVU5JVFNfUEFUVEVSTn0pKD89KD86XFxcXFd8JCkpYCwgXCJpXCIpO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgdGltZVVuaXRzID0gY29uc3RhbnRzXzEucGFyc2VUaW1lVW5pdHMobWF0Y2hbMV0pO1xuICAgICAgICBjb25zdCBvdXRwdXRUaW1lVW5pdHMgPSB0aW1ldW5pdHNfMS5yZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cyk7XG4gICAgICAgIHJldHVybiByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmRGF0ZShjb250ZXh0LnJlZkRhdGUsIG91dHB1dFRpbWVVbml0cyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRlJUaW1lVW5pdEFnb0Zvcm1hdFBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgcmVzdWx0c18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3Jlc3VsdHNcIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jbGFzcyBGUlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYCg/OmRhbnN8ZW58cG91cnxwZW5kYW50KVxcXFxzKigke2NvbnN0YW50c18xLlRJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLCBcImlcIik7XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBjb25zdGFudHNfMS5wYXJzZVRpbWVVbml0cyhtYXRjaFsxXSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmRGF0ZShjb250ZXh0LnJlZkRhdGUsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRlJUaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgcmVzdWx0c18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3Jlc3VsdHNcIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCB0aW1ldW5pdHNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy90aW1ldW5pdHNcIik7XG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiKTtcbmNsYXNzIEZSVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYCg/Omxlcz98bGF8bCd8ZHV8ZGVzPylcXFxccypgICtcbiAgICAgICAgICAgIGAoJHtjb25zdGFudHNfMS5OVU1CRVJfUEFUVEVSTn0pP2AgK1xuICAgICAgICAgICAgYCg/OlxcXFxzKihwcm9jaGFpbmU/cz98ZGVybmlbZcOoXXJlP3M/fHBhc3Nbw6llXWU/cz98cHJbw6llXWNbw6llXWRlbnRzP3xzdWl2YW50ZT9zPykpP2AgK1xuICAgICAgICAgICAgYFxcXFxzKigke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oY29uc3RhbnRzXzEuVElNRV9VTklUX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgICAgIGAoPzpcXFxccyoocHJvY2hhaW5lP3M/fGRlcm5pW2XDqF1yZT9zP3xwYXNzW8OpZV1lP3M/fHByW8OpZV1jW8OpZV1kZW50cz98c3VpdmFudGU/cz8pKT9gLCBcImlcIik7XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBudW0gPSBtYXRjaFsxXSA/IGNvbnN0YW50c18xLnBhcnNlTnVtYmVyUGF0dGVybihtYXRjaFsxXSkgOiAxO1xuICAgICAgICBjb25zdCB1bml0ID0gY29uc3RhbnRzXzEuVElNRV9VTklUX0RJQ1RJT05BUllbbWF0Y2hbM10udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSB7fTtcbiAgICAgICAgdGltZVVuaXRzW3VuaXRdID0gbnVtO1xuICAgICAgICBsZXQgbW9kaWZpZXIgPSBtYXRjaFsyXSB8fCBtYXRjaFs0XSB8fCBcIlwiO1xuICAgICAgICBtb2RpZmllciA9IG1vZGlmaWVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghbW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL2Rlcm5pW2XDqF1yZT9zPy8udGVzdChtb2RpZmllcikgfHwgL3Bhc3Nbw6llXWU/cz8vLnRlc3QobW9kaWZpZXIpIHx8IC9wclvDqWVdY1vDqWVdZGVudHM/Ly50ZXN0KG1vZGlmaWVyKSkge1xuICAgICAgICAgICAgdGltZVVuaXRzID0gdGltZXVuaXRzXzEucmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmRGF0ZShjb250ZXh0LnJlZkRhdGUsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRlJUaW1lVW5pdEFnb0Zvcm1hdFBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVDb25maWd1cmF0aW9uID0gZXhwb3J0cy5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uID0gZXhwb3J0cy5wYXJzZURhdGUgPSBleHBvcnRzLnBhcnNlID0gZXhwb3J0cy5zdHJpY3QgPSBleHBvcnRzLmNhc3VhbCA9IHZvaWQgMDtcbmNvbnN0IGNvbmZpZ3VyYXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vY29uZmlndXJhdGlvbnNcIik7XG5jb25zdCBjaHJvbm9fMSA9IHJlcXVpcmUoXCIuLi8uLi9jaHJvbm9cIik7XG5jb25zdCBGUkNhc3VhbERhdGVQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0ZSQ2FzdWFsRGF0ZVBhcnNlclwiKSk7XG5jb25zdCBGUkNhc3VhbFRpbWVQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0ZSQ2FzdWFsVGltZVBhcnNlclwiKSk7XG5jb25zdCBTbGFzaERhdGVGb3JtYXRQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tbW9uL3BhcnNlcnMvU2xhc2hEYXRlRm9ybWF0UGFyc2VyXCIpKTtcbmNvbnN0IEZSVGltZUV4cHJlc3Npb25QYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0ZSVGltZUV4cHJlc3Npb25QYXJzZXJcIikpO1xuY29uc3QgRlJNZXJnZURhdGVUaW1lUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlZmluZXJzL0ZSTWVyZ2VEYXRlVGltZVJlZmluZXJcIikpO1xuY29uc3QgRlJNZXJnZURhdGVSYW5nZVJlZmluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZWZpbmVycy9GUk1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiKSk7XG5jb25zdCBGUldlZWtkYXlQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0ZSV2Vla2RheVBhcnNlclwiKSk7XG5jb25zdCBGUlNwZWNpZmljVGltZUV4cHJlc3Npb25QYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL0ZSU3BlY2lmaWNUaW1lRXhwcmVzc2lvblBhcnNlclwiKSk7XG5jb25zdCBGUk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvRlJNb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXJcIikpO1xuY29uc3QgRlJUaW1lVW5pdEFnb0Zvcm1hdFBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvRlJUaW1lVW5pdEFnb0Zvcm1hdFBhcnNlclwiKSk7XG5jb25zdCBGUlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9GUlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyXCIpKTtcbmNvbnN0IEZSVGltZVVuaXRSZWxhdGl2ZUZvcm1hdFBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvRlJUaW1lVW5pdFJlbGF0aXZlRm9ybWF0UGFyc2VyXCIpKTtcbmV4cG9ydHMuY2FzdWFsID0gbmV3IGNocm9ub18xLkNocm9ubyhjcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKCkpO1xuZXhwb3J0cy5zdHJpY3QgPSBuZXcgY2hyb25vXzEuQ2hyb25vKGNyZWF0ZUNvbmZpZ3VyYXRpb24odHJ1ZSkpO1xuZnVuY3Rpb24gcGFyc2UodGV4dCwgcmVmLCBvcHRpb24pIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jYXN1YWwucGFyc2UodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2VEYXRlKHRleHQsIHJlZiwgb3B0aW9uKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY2FzdWFsLnBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG5leHBvcnRzLnBhcnNlRGF0ZSA9IHBhcnNlRGF0ZTtcbmZ1bmN0aW9uIGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24obGl0dGxlRW5kaWFuID0gdHJ1ZSkge1xuICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZUNvbmZpZ3VyYXRpb24oZmFsc2UsIGxpdHRsZUVuZGlhbik7XG4gICAgb3B0aW9uLnBhcnNlcnMudW5zaGlmdChuZXcgRlJDYXN1YWxEYXRlUGFyc2VyXzEuZGVmYXVsdCgpKTtcbiAgICBvcHRpb24ucGFyc2Vycy51bnNoaWZ0KG5ldyBGUkNhc3VhbFRpbWVQYXJzZXJfMS5kZWZhdWx0KCkpO1xuICAgIG9wdGlvbi5wYXJzZXJzLnVuc2hpZnQobmV3IEZSVGltZVVuaXRSZWxhdGl2ZUZvcm1hdFBhcnNlcl8xLmRlZmF1bHQoKSk7XG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbiA9IGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb247XG5mdW5jdGlvbiBjcmVhdGVDb25maWd1cmF0aW9uKHN0cmljdE1vZGUgPSB0cnVlLCBsaXR0bGVFbmRpYW4gPSB0cnVlKSB7XG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25zXzEuaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24oe1xuICAgICAgICBwYXJzZXJzOiBbXG4gICAgICAgICAgICBuZXcgU2xhc2hEYXRlRm9ybWF0UGFyc2VyXzEuZGVmYXVsdChsaXR0bGVFbmRpYW4pLFxuICAgICAgICAgICAgbmV3IEZSTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgbmV3IEZSVGltZUV4cHJlc3Npb25QYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgRlJTcGVjaWZpY1RpbWVFeHByZXNzaW9uUGFyc2VyXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgbmV3IEZSVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgRlJUaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcl8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgIG5ldyBGUldlZWtkYXlQYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgIF0sXG4gICAgICAgIHJlZmluZXJzOiBbbmV3IEZSTWVyZ2VEYXRlVGltZVJlZmluZXJfMS5kZWZhdWx0KCksIG5ldyBGUk1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xLmRlZmF1bHQoKV0sXG4gICAgfSwgc3RyaWN0TW9kZSk7XG59XG5leHBvcnRzLmNyZWF0ZUNvbmZpZ3VyYXRpb24gPSBjcmVhdGVDb25maWd1cmF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvSGFua2FrdSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHRvSGFua2FrdSh0ZXh0KSB7XG4gICAgcmV0dXJuIFN0cmluZyh0ZXh0KVxuICAgICAgICAucmVwbGFjZSgvXFx1MjAxOS9nLCBcIlxcdTAwMjdcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcdTIwMUQvZywgXCJcXHUwMDIyXCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXHUzMDAwL2csIFwiXFx1MDAyMFwiKVxuICAgICAgICAucmVwbGFjZSgvXFx1RkZFNS9nLCBcIlxcdTAwQTVcIilcbiAgICAgICAgLnJlcGxhY2UoL1tcXHVGRjAxXFx1RkYwMy1cXHVGRjA2XFx1RkYwOFxcdUZGMDlcXHVGRjBDLVxcdUZGMTlcXHVGRjFDLVxcdUZGMUZcXHVGRjIxLVxcdUZGM0JcXHVGRjNEXFx1RkYzRlxcdUZGNDEtXFx1RkY1QlxcdUZGNURcXHVGRjVFXS9nLCBhbHBoYU51bSk7XG59XG5leHBvcnRzLnRvSGFua2FrdSA9IHRvSGFua2FrdTtcbmZ1bmN0aW9uIGFscGhhTnVtKHRva2VuKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodG9rZW4uY2hhckNvZGVBdCgwKSAtIDY1MjQ4KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgeWVhcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiKTtcbmNvbnN0IGRheWpzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRheWpzXCIpKTtcbmNvbnN0IFBBVFRFUk4gPSAvKD86KD86KFvlkIzku4rmnKxdKXwoKOaYreWSjHzlubPmiJB85Luk5ZKMKT8oWzAtOe+8kC3vvJldezEsNH185YWDKSkp5bm0XFxzKik/KFswLTnvvJAt77yZXXsxLDJ9KeaciFxccyooWzAtOe+8kC3vvJldezEsMn0p5pelL2k7XG5jb25zdCBTUEVDSUFMX1lFQVJfR1JPVVAgPSAxO1xuY29uc3QgVFlQSUNBTF9ZRUFSX0dST1VQID0gMjtcbmNvbnN0IEVSQV9HUk9VUCA9IDM7XG5jb25zdCBZRUFSX05VTUJFUl9HUk9VUCA9IDQ7XG5jb25zdCBNT05USF9HUk9VUCA9IDU7XG5jb25zdCBEQVlfR1JPVVAgPSA2O1xuY2xhc3MgSlBTdGFuZGFyZFBhcnNlciB7XG4gICAgcGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChjb25zdGFudHNfMS50b0hhbmtha3UobWF0Y2hbTU9OVEhfR1JPVVBdKSk7XG4gICAgICAgIGNvbnN0IGRheSA9IHBhcnNlSW50KGNvbnN0YW50c18xLnRvSGFua2FrdShtYXRjaFtEQVlfR1JPVVBdKSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHtcbiAgICAgICAgICAgIGRheTogZGF5LFxuICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1hdGNoW1NQRUNJQUxfWUVBUl9HUk9VUF0gJiYgbWF0Y2hbU1BFQ0lBTF9ZRUFSX0dST1VQXS5tYXRjaChcIuWQjHzku4p85pysXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBtb21lbnQgPSBkYXlqc18xLmRlZmF1bHQoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBtb21lbnQueWVhcigpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbVFlQSUNBTF9ZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhck51bVRleHQgPSBtYXRjaFtZRUFSX05VTUJFUl9HUk9VUF07XG4gICAgICAgICAgICBsZXQgeWVhciA9IHllYXJOdW1UZXh0ID09IFwi5YWDXCIgPyAxIDogcGFyc2VJbnQoY29uc3RhbnRzXzEudG9IYW5rYWt1KHllYXJOdW1UZXh0KSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hbRVJBX0dST1VQXSA9PSBcIuS7pOWSjFwiKSB7XG4gICAgICAgICAgICAgICAgeWVhciArPSAyMDE4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbRVJBX0dST1VQXSA9PSBcIuW5s+aIkFwiKSB7XG4gICAgICAgICAgICAgICAgeWVhciArPSAxOTg4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbRVJBX0dST1VQXSA9PSBcIuaYreWSjFwiKSB7XG4gICAgICAgICAgICAgICAgeWVhciArPSAxOTI1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHllYXJzXzEuZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEpQU3RhbmRhcmRQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiKSk7XG5jbGFzcyBKUE1lcmdlRGF0ZVJhbmdlUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEuZGVmYXVsdCB7XG4gICAgcGF0dGVybkJldHdlZW4oKSB7XG4gICAgICAgIHJldHVybiAvXlxccyoo44GL44KJfOODvHwtKVxccyokL2k7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSlBNZXJnZURhdGVSYW5nZVJlZmluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9pbmRleFwiKTtcbmNvbnN0IHJlZmVyZW5jZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9jYXN1YWxSZWZlcmVuY2VzXCIpKTtcbmNvbnN0IFBBVFRFUk4gPSAv5LuK5pelfOW9k+aXpXzmmKjml6V85piO5pelfOS7iuWknHzku4rlpJV85LuK5pmpfOS7iuacnS9pO1xuY2xhc3MgSlBDYXN1YWxEYXRlUGFyc2VyIHtcbiAgICBwYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgZXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gbWF0Y2hbMF07XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXlqc18xLmRlZmF1bHQoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgICAgICBjYXNlIFwi5pio5pelXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZXMueWVzdGVyZGF5KGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgICAgICBjYXNlIFwi5piO5pelXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZXMudG9tb3Jyb3coY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgIGNhc2UgXCLku4rml6VcIjpcbiAgICAgICAgICAgIGNhc2UgXCLlvZPml6VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy50b2RheShjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXh0ID09IFwi5LuK5aScXCIgfHwgdGV4dCA9PSBcIuS7iuWklVwiIHx8IHRleHQgPT0gXCLku4rmmalcIikge1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImhvdXJcIiwgMjIpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLlBNKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXh0Lm1hdGNoKFwi5LuK5pydXCIpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiaG91clwiLCA2KTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBKUENhc3VhbERhdGVQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlQ29uZmlndXJhdGlvbiA9IGV4cG9ydHMuY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbiA9IGV4cG9ydHMucGFyc2VEYXRlID0gZXhwb3J0cy5wYXJzZSA9IGV4cG9ydHMuc3RyaWN0ID0gZXhwb3J0cy5jYXN1YWwgPSB2b2lkIDA7XG5jb25zdCBKUFN0YW5kYXJkUGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9KUFN0YW5kYXJkUGFyc2VyXCIpKTtcbmNvbnN0IEpQTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVmaW5lcnMvSlBNZXJnZURhdGVSYW5nZVJlZmluZXJcIikpO1xuY29uc3QgSlBDYXN1YWxEYXRlUGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9KUENhc3VhbERhdGVQYXJzZXJcIikpO1xuY29uc3QgY2hyb25vXzEgPSByZXF1aXJlKFwiLi4vLi4vY2hyb25vXCIpO1xuZXhwb3J0cy5jYXN1YWwgPSBuZXcgY2hyb25vXzEuQ2hyb25vKGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24oKSk7XG5leHBvcnRzLnN0cmljdCA9IG5ldyBjaHJvbm9fMS5DaHJvbm8oY3JlYXRlQ29uZmlndXJhdGlvbigpKTtcbmZ1bmN0aW9uIHBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbikge1xuICAgIHJldHVybiBleHBvcnRzLmNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuZXhwb3J0cy5wYXJzZURhdGUgPSBwYXJzZURhdGU7XG5mdW5jdGlvbiBjcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKCkge1xuICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICBvcHRpb24ucGFyc2Vycy51bnNoaWZ0KG5ldyBKUENhc3VhbERhdGVQYXJzZXJfMS5kZWZhdWx0KCkpO1xuICAgIHJldHVybiBvcHRpb247XG59XG5leHBvcnRzLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24gPSBjcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uO1xuZnVuY3Rpb24gY3JlYXRlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJzZXJzOiBbbmV3IEpQU3RhbmRhcmRQYXJzZXJfMS5kZWZhdWx0KCldLFxuICAgICAgICByZWZpbmVyczogW25ldyBKUE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xLmRlZmF1bHQoKV0sXG4gICAgfTtcbn1cbmV4cG9ydHMuY3JlYXRlQ29uZmlndXJhdGlvbiA9IGNyZWF0ZUNvbmZpZ3VyYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VZZWFyID0gZXhwb3J0cy5ZRUFSX1BBVFRFUk4gPSBleHBvcnRzLk1PTlRIX0RJQ1RJT05BUlkgPSBleHBvcnRzLldFRUtEQVlfRElDVElPTkFSWSA9IHZvaWQgMDtcbmV4cG9ydHMuV0VFS0RBWV9ESUNUSU9OQVJZID0ge1xuICAgIFwiZG9taW5nb1wiOiAwLFxuICAgIFwiZG9tXCI6IDAsXG4gICAgXCJzZWd1bmRhXCI6IDEsXG4gICAgXCJzZWd1bmRhLWZlaXJhXCI6IDEsXG4gICAgXCJzZWdcIjogMSxcbiAgICBcInRlcsOnYVwiOiAyLFxuICAgIFwidGVyw6dhLWZlaXJhXCI6IDIsXG4gICAgXCJ0ZXJcIjogMixcbiAgICBcInF1YXJ0YVwiOiAzLFxuICAgIFwicXVhcnRhLWZlaXJhXCI6IDMsXG4gICAgXCJxdWFcIjogMyxcbiAgICBcInF1aW50YVwiOiA0LFxuICAgIFwicXVpbnRhLWZlaXJhXCI6IDQsXG4gICAgXCJxdWlcIjogNCxcbiAgICBcInNleHRhXCI6IDUsXG4gICAgXCJzZXh0YS1mZWlyYVwiOiA1LFxuICAgIFwic2V4XCI6IDUsXG4gICAgXCJzw6FiYWRvXCI6IDYsXG4gICAgXCJzYWJhZG9cIjogNixcbiAgICBcInNhYlwiOiA2LFxufTtcbmV4cG9ydHMuTU9OVEhfRElDVElPTkFSWSA9IHtcbiAgICBcImphbmVpcm9cIjogMSxcbiAgICBcImphblwiOiAxLFxuICAgIFwiamFuLlwiOiAxLFxuICAgIFwiZmV2ZXJlaXJvXCI6IDIsXG4gICAgXCJmZXZcIjogMixcbiAgICBcImZldi5cIjogMixcbiAgICBcIm1hcsOnb1wiOiAzLFxuICAgIFwibWFyXCI6IDMsXG4gICAgXCJtYXIuXCI6IDMsXG4gICAgXCJhYnJpbFwiOiA0LFxuICAgIFwiYWJyXCI6IDQsXG4gICAgXCJhYnIuXCI6IDQsXG4gICAgXCJtYWlvXCI6IDUsXG4gICAgXCJtYWlcIjogNSxcbiAgICBcIm1haS5cIjogNSxcbiAgICBcImp1bmhvXCI6IDYsXG4gICAgXCJqdW5cIjogNixcbiAgICBcImp1bi5cIjogNixcbiAgICBcImp1bGhvXCI6IDcsXG4gICAgXCJqdWxcIjogNyxcbiAgICBcImp1bC5cIjogNyxcbiAgICBcImFnb3N0b1wiOiA4LFxuICAgIFwiYWdvXCI6IDgsXG4gICAgXCJhZ28uXCI6IDgsXG4gICAgXCJzZXRlbWJyb1wiOiA5LFxuICAgIFwic2V0XCI6IDksXG4gICAgXCJzZXQuXCI6IDksXG4gICAgXCJvdXR1YnJvXCI6IDEwLFxuICAgIFwib3V0XCI6IDEwLFxuICAgIFwib3V0LlwiOiAxMCxcbiAgICBcIm5vdmVtYnJvXCI6IDExLFxuICAgIFwibm92XCI6IDExLFxuICAgIFwibm92LlwiOiAxMSxcbiAgICBcImRlemVtYnJvXCI6IDEyLFxuICAgIFwiZGV6XCI6IDEyLFxuICAgIFwiZGV6LlwiOiAxMixcbn07XG5leHBvcnRzLllFQVJfUEFUVEVSTiA9IFwiWzAtOV17MSw0fSg/IVteXFxcXHNdXFxcXGQpKD86XFxcXHMqW2F8ZF1cXFxcLj9cXFxccypjXFxcXC4/fFxcXFxzKmFcXFxcLj9cXFxccypkXFxcXC4/KT9cIjtcbmZ1bmN0aW9uIHBhcnNlWWVhcihtYXRjaCkge1xuICAgIGlmIChtYXRjaC5tYXRjaCgvXlswLTldezEsNH0kLykpIHtcbiAgICAgICAgbGV0IHllYXJOdW1iZXIgPSBwYXJzZUludChtYXRjaCk7XG4gICAgICAgIGlmICh5ZWFyTnVtYmVyIDwgMTAwKSB7XG4gICAgICAgICAgICBpZiAoeWVhck51bWJlciA+IDUwKSB7XG4gICAgICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAxOTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAyMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5ZWFyTnVtYmVyO1xuICAgIH1cbiAgICBpZiAobWF0Y2gubWF0Y2goL2FcXC4/XFxzKmNcXC4/L2kpKSB7XG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvYVxcLj9cXHMqY1xcLj8vaSwgXCJcIik7XG4gICAgICAgIHJldHVybiAtcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2gpO1xufVxuZXhwb3J0cy5wYXJzZVllYXIgPSBwYXJzZVllYXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IHBhdHRlcm5fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCIpO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3Qgd2Vla3NfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi93ZWVrc1wiKTtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFwiKD86KD86XFxcXCx8XFxcXCh8XFxcXO+8iClcXFxccyopP1wiICtcbiAgICBcIig/Oihlc3RlfGVzdGF8cGFzc2Fkb3xwcltvw7NdeGltbylcXFxccyopP1wiICtcbiAgICBgKCR7cGF0dGVybl8xLm1hdGNoQW55UGF0dGVybihjb25zdGFudHNfMS5XRUVLREFZX0RJQ1RJT05BUlkpfSlgICtcbiAgICBcIig/OlxcXFxzKig/OlxcXFwsfFxcXFwpfFxcXFzvvIkpKT9cIiArXG4gICAgXCIoPzpcXFxccyooZXN0ZXxlc3RhfHBhc3NhZG98cHJbw7NvXXhpbW8pXFxcXHMqc2VtYW5hKT9cIiArXG4gICAgXCIoPz1cXFxcV3xcXFxcZHwkKVwiLCBcImlcIik7XG5jb25zdCBQUkVGSVhfR1JPVVAgPSAxO1xuY29uc3QgV0VFS0RBWV9HUk9VUCA9IDI7XG5jb25zdCBQT1NURklYX0dST1VQID0gMztcbmNsYXNzIFBUV2Vla2RheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gbWF0Y2hbV0VFS0RBWV9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY29uc3RhbnRzXzEuV0VFS0RBWV9ESUNUSU9OQVJZW2RheU9mV2Vla107XG4gICAgICAgIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJlZml4ID0gbWF0Y2hbUFJFRklYX0dST1VQXTtcbiAgICAgICAgY29uc3QgcG9zdGZpeCA9IG1hdGNoW1BPU1RGSVhfR1JPVVBdO1xuICAgICAgICBsZXQgbm9ybSA9IHByZWZpeCB8fCBwb3N0Zml4IHx8IFwiXCI7XG4gICAgICAgIG5vcm0gPSBub3JtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBtb2RpZmllciA9IG51bGw7XG4gICAgICAgIGlmIChub3JtID09IFwicGFzc2Fkb1wiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwidGhpc1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vcm0gPT0gXCJwcsOzeGltb1wiIHx8IG5vcm0gPT0gXCJwcm94aW1vXCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJuZXh0XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9ybSA9PSBcImVzdGVcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcInRoaXNcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlID0gd2Vla3NfMS50b0RheUpTV2Vla2RheShjb250ZXh0LnJlZkRhdGUsIG9mZnNldCwgbW9kaWZpZXIpO1xuICAgICAgICByZXR1cm4gY29udGV4dFxuICAgICAgICAgICAgLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKClcbiAgICAgICAgICAgIC5hc3NpZ24oXCJ3ZWVrZGF5XCIsIG9mZnNldClcbiAgICAgICAgICAgIC5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSlcbiAgICAgICAgICAgIC5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpXG4gICAgICAgICAgICAuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQVFdlZWtkYXlQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuY2xhc3MgUFRUaW1lRXhwcmVzc2lvblBhcnNlciBleHRlbmRzIEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXJfMS5BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIHtcbiAgICBwcmltYXJ5UHJlZml4KCkge1xuICAgICAgICByZXR1cm4gXCIoPzooPzphbz98w6BzP3xkYXN8ZGF8ZGV8ZG8pXFxcXHMqKT9cIjtcbiAgICB9XG4gICAgZm9sbG93aW5nUGhhc2UoKSB7XG4gICAgICAgIHJldHVybiBcIlxcXFxzKig/OlxcXFwtfFxcXFzigJN8XFxcXH58XFxcXOOAnHxhKD86byk/fFxcXFw/KVxcXFxzKlwiO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFBUVGltZUV4cHJlc3Npb25QYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXJcIikpO1xuY2xhc3MgUFRNZXJnZURhdGVUaW1lUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXJfMS5kZWZhdWx0IHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeXFxcXHMqKD86LHzDoCk/XFxcXHMqJFwiKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQVE1lcmdlRGF0ZVRpbWVSZWZpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXJcIikpO1xuY2xhc3MgUFRNZXJnZURhdGVSYW5nZVJlZmluZXIgZXh0ZW5kcyBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xLmRlZmF1bHQge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCkge1xuICAgICAgICByZXR1cm4gL15cXHMqKD86LSlcXHMqJC9pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFBUTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB5ZWFyc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgY29uc3RhbnRzXzIgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKFswLTldezEsMn0pKD86wrp8wqp8wrApP2AgK1xuICAgIFwiKD86XFxcXHMqKD86ZGVzZGV8ZGV8XFxcXC18XFxcXOKAk3xhbz98XFxcXHMpXFxcXHMqKFswLTldezEsMn0pKD86wrp8wqp8wrApPyk/XFxcXHMqKD86ZGUpP1xcXFxzKlwiICtcbiAgICBgKD86LXwvfFxcXFxzKig/OmRlfCwpP1xcXFxzKilgICtcbiAgICBgKCR7cGF0dGVybl8xLm1hdGNoQW55UGF0dGVybihjb25zdGFudHNfMS5NT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgYCg/OlxcXFxzKig/OmRlfCwpP1xcXFxzKigke2NvbnN0YW50c18yLllFQVJfUEFUVEVSTn0pKT9gICtcbiAgICBgKD89XFxcXFd8JClgLCBcImlcIik7XG5jb25zdCBEQVRFX0dST1VQID0gMTtcbmNvbnN0IERBVEVfVE9fR1JPVVAgPSAyO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDM7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcbmNsYXNzIFBUTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBjb25zdGFudHNfMS5NT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZUludChtYXRjaFtEQVRFX0dST1VQXSk7XG4gICAgICAgIGlmIChkYXkgPiAzMSkge1xuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoW0RBVEVfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJkYXlcIiwgZGF5KTtcbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyTnVtYmVyID0gY29uc3RhbnRzXzIucGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHllYXJzXzEuZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCBlbmREYXRlID0gcGFyc2VJbnQobWF0Y2hbREFURV9UT19HUk9VUF0pO1xuICAgICAgICAgICAgcmVzdWx0LmVuZCA9IHJlc3VsdC5zdGFydC5jbG9uZSgpO1xuICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJkYXlcIiwgZW5kRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQVE1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCByZWZlcmVuY2VzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vY2FzdWFsUmVmZXJlbmNlc1wiKSk7XG5jbGFzcyBQVENhc3VhbERhdGVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIC8oYWdvcmF8aG9qZXxhbWFuaGF8YW1hbmjDo3xvbnRlbSkoPz1cXFd8JCkvaTtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyVGV4dCA9IG1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgc3dpdGNoIChsb3dlclRleHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJhZ29yYVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiByZWZlcmVuY2VzLm5vdyhjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICAgICAgY2FzZSBcImhvamVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy50b2RheShjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICAgICAgY2FzZSBcImFtYW5oYVwiOlxuICAgICAgICAgICAgY2FzZSBcImFtYW5ow6NcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy50b21vcnJvdyhjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICAgICAgY2FzZSBcIm9udGVtXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZXMueWVzdGVyZGF5KGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQVENhc3VhbERhdGVQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGluZGV4XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW5kZXhcIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCBkYXlqc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL2RheWpzXCIpO1xuY29uc3QgZGF5anNfMiA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY2xhc3MgUFRDYXN1YWxUaW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIC8oPzplc3RhXFxzKik/KG1hbmhhfG1hbmjDo3x0YXJkZXxtZWlhLW5vaXRlfG1laW8tZGlhfG5vaXRlKSg/PVxcV3wkKS9pO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzXzIuZGVmYXVsdChjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIHN3aXRjaCAobWF0Y2hbMV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBcInRhcmRlXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAxNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibm9pdGVcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDIyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtYW5oYVwiOlxuICAgICAgICAgICAgY2FzZSBcIm1hbmjDo1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgNik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVpYS1ub2l0ZVwiOlxuICAgICAgICAgICAgICAgIGRheWpzXzEuYXNzaWduVGhlTmV4dERheShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZWlvLWRpYVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMTIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUFRDYXN1YWxUaW1lUGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUNvbmZpZ3VyYXRpb24gPSBleHBvcnRzLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24gPSBleHBvcnRzLnBhcnNlRGF0ZSA9IGV4cG9ydHMucGFyc2UgPSBleHBvcnRzLnN0cmljdCA9IGV4cG9ydHMuY2FzdWFsID0gdm9pZCAwO1xuY29uc3QgY29uZmlndXJhdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWd1cmF0aW9uc1wiKTtcbmNvbnN0IGNocm9ub18xID0gcmVxdWlyZShcIi4uLy4uL2Nocm9ub1wiKTtcbmNvbnN0IFNsYXNoRGF0ZUZvcm1hdFBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21tb24vcGFyc2Vycy9TbGFzaERhdGVGb3JtYXRQYXJzZXJcIikpO1xuY29uc3QgUFRXZWVrZGF5UGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9QVFdlZWtkYXlQYXJzZXJcIikpO1xuY29uc3QgUFRUaW1lRXhwcmVzc2lvblBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvUFRUaW1lRXhwcmVzc2lvblBhcnNlclwiKSk7XG5jb25zdCBQVE1lcmdlRGF0ZVRpbWVSZWZpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVmaW5lcnMvUFRNZXJnZURhdGVUaW1lUmVmaW5lclwiKSk7XG5jb25zdCBQVE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlZmluZXJzL1BUTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXCIpKTtcbmNvbnN0IFBUTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9QVE1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlclwiKSk7XG5jb25zdCBQVENhc3VhbERhdGVQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL1BUQ2FzdWFsRGF0ZVBhcnNlclwiKSk7XG5jb25zdCBQVENhc3VhbFRpbWVQYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZXJzL1BUQ2FzdWFsVGltZVBhcnNlclwiKSk7XG5leHBvcnRzLmNhc3VhbCA9IG5ldyBjaHJvbm9fMS5DaHJvbm8oY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbigpKTtcbmV4cG9ydHMuc3RyaWN0ID0gbmV3IGNocm9ub18xLkNocm9ubyhjcmVhdGVDb25maWd1cmF0aW9uKHRydWUpKTtcbmZ1bmN0aW9uIHBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbikge1xuICAgIHJldHVybiBleHBvcnRzLmNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuZXhwb3J0cy5wYXJzZURhdGUgPSBwYXJzZURhdGU7XG5mdW5jdGlvbiBjcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKGxpdHRsZUVuZGlhbiA9IHRydWUpIHtcbiAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVDb25maWd1cmF0aW9uKGZhbHNlLCBsaXR0bGVFbmRpYW4pO1xuICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IFBUQ2FzdWFsRGF0ZVBhcnNlcl8xLmRlZmF1bHQoKSk7XG4gICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgUFRDYXN1YWxUaW1lUGFyc2VyXzEuZGVmYXVsdCgpKTtcbiAgICByZXR1cm4gb3B0aW9uO1xufVxuZXhwb3J0cy5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uID0gY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbjtcbmZ1bmN0aW9uIGNyZWF0ZUNvbmZpZ3VyYXRpb24oc3RyaWN0TW9kZSA9IHRydWUsIGxpdHRsZUVuZGlhbiA9IHRydWUpIHtcbiAgICByZXR1cm4gY29uZmlndXJhdGlvbnNfMS5pbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbih7XG4gICAgICAgIHBhcnNlcnM6IFtcbiAgICAgICAgICAgIG5ldyBTbGFzaERhdGVGb3JtYXRQYXJzZXJfMS5kZWZhdWx0KGxpdHRsZUVuZGlhbiksXG4gICAgICAgICAgICBuZXcgUFRXZWVrZGF5UGFyc2VyXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgbmV3IFBUVGltZUV4cHJlc3Npb25QYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgUFRNb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgIF0sXG4gICAgICAgIHJlZmluZXJzOiBbbmV3IFBUTWVyZ2VEYXRlVGltZVJlZmluZXJfMS5kZWZhdWx0KCksIG5ldyBQVE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xLmRlZmF1bHQoKV0sXG4gICAgfSwgc3RyaWN0TW9kZSk7XG59XG5leHBvcnRzLmNyZWF0ZUNvbmZpZ3VyYXRpb24gPSBjcmVhdGVDb25maWd1cmF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXJcIikpO1xuY2xhc3MgTkxNZXJnZURhdGVSYW5nZVJlZmluZXIgZXh0ZW5kcyBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xLmRlZmF1bHQge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCkge1xuICAgICAgICByZXR1cm4gL15cXHMqKHRvdHwtKVxccyokL2k7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTkxNZXJnZURhdGVSYW5nZVJlZmluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXJcIikpO1xuY2xhc3MgTkxNZXJnZURhdGVUaW1lUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXJfMS5kZWZhdWx0IHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeXFxcXHMqKG9tfG5hfHZvb3J8aW4gZGV8LHwtKT9cXFxccyokXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE5MTWVyZ2VEYXRlVGltZVJlZmluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3QgcmVmZXJlbmNlcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXNcIikpO1xuY2xhc3MgTkxDYXN1YWxEYXRlUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybihjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAvKG51fHZhbmRhYWd8bW9yZ2VufG1vcmdlbmR8Z2lzdGVyZW4pKD89XFxXfCQpL2k7XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBsb3dlclRleHQgPSBtYXRjaFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIHN3aXRjaCAobG93ZXJUZXh0KSB7XG4gICAgICAgICAgICBjYXNlIFwibnVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlcy5ub3coY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgIGNhc2UgXCJ2YW5kYWFnXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZXMudG9kYXkoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgIGNhc2UgXCJtb3JnZW5cIjpcbiAgICAgICAgICAgIGNhc2UgXCJtb3JnZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZXMudG9tb3Jyb3coY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgIGNhc2UgXCJnaXN0ZXJlblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiByZWZlcmVuY2VzLnllc3RlcmRheShjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTkxDYXN1YWxEYXRlUGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpbmRleF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2luZGV4XCIpO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY29uc3QgZGF5anNfMiA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9kYXlqc1wiKTtcbmNvbnN0IERBWV9HUk9VUCA9IDE7XG5jb25zdCBNT01FTlRfR1JPVVAgPSAyO1xuY2xhc3MgTkxDYXN1YWxUaW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIC8oZGV6ZSk/XFxzKihuYW1pZGRhZ3xhdm9uZHxtaWRkZXJuYWNodHxvY2h0ZW5kfG1pZGRhZ3wncyBtaWRkYWdzfCdzIGF2b25kc3wncyBvY2h0ZW5kcykoPz1cXFd8JCkvaTtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqc18xLmRlZmF1bHQoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBpZiAobWF0Y2hbREFZX0dST1VQXSA9PT0gXCJkZXplXCIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hc3NpZ24oXCJkYXlcIiwgY29udGV4dC5yZWZEYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnQuYXNzaWduKFwibW9udGhcIiwgY29udGV4dC5yZWZEYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hc3NpZ24oXCJ5ZWFyXCIsIGNvbnRleHQucmVmRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1hdGNoW01PTUVOVF9HUk9VUF0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWlkZGFnXCI6XG4gICAgICAgICAgICBjYXNlIFwiJ3MgbmFtaWRkYWdzXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAxNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYXZvbmRcIjpcbiAgICAgICAgICAgIGNhc2UgXCIncyBhdm9uZHMnXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAyMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWlkZGVybmFjaHRcIjpcbiAgICAgICAgICAgICAgICBkYXlqc18yLmFzc2lnblRoZU5leHREYXkoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib2NodGVuZFwiOlxuICAgICAgICAgICAgY2FzZSBcIidzIG9jaHRlbmRzXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCA2KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaWRkYWdcIjpcbiAgICAgICAgICAgIGNhc2UgXCIncyBtaWRkYWdzXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAxMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBOTENhc3VhbFRpbWVQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VUaW1lVW5pdHMgPSBleHBvcnRzLlRJTUVfVU5JVFNfUEFUVEVSTiA9IGV4cG9ydHMucGFyc2VZZWFyID0gZXhwb3J0cy5ZRUFSX1BBVFRFUk4gPSBleHBvcnRzLnBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSBleHBvcnRzLk9SRElOQUxfTlVNQkVSX1BBVFRFUk4gPSBleHBvcnRzLnBhcnNlTnVtYmVyUGF0dGVybiA9IGV4cG9ydHMuTlVNQkVSX1BBVFRFUk4gPSBleHBvcnRzLlRJTUVfVU5JVF9ESUNUSU9OQVJZID0gZXhwb3J0cy5PUkRJTkFMX1dPUkRfRElDVElPTkFSWSA9IGV4cG9ydHMuSU5URUdFUl9XT1JEX0RJQ1RJT05BUlkgPSBleHBvcnRzLk1PTlRIX0RJQ1RJT05BUlkgPSBleHBvcnRzLldFRUtEQVlfRElDVElPTkFSWSA9IHZvaWQgMDtcbmNvbnN0IHBhdHRlcm5fMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9wYXR0ZXJuXCIpO1xuY29uc3QgeWVhcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiKTtcbmV4cG9ydHMuV0VFS0RBWV9ESUNUSU9OQVJZID0ge1xuICAgIHpvbmRhZzogMCxcbiAgICB6b246IDAsXG4gICAgXCJ6b24uXCI6IDAsXG4gICAgem86IDAsXG4gICAgXCJ6by5cIjogMCxcbiAgICBtYWFuZGFnOiAxLFxuICAgIG1hOiAxLFxuICAgIFwibWEuXCI6IDEsXG4gICAgZGluc2RhZzogMixcbiAgICBkaW46IDIsXG4gICAgXCJkaW4uXCI6IDIsXG4gICAgZGk6IDIsXG4gICAgXCJkaS5cIjogMixcbiAgICB3b2Vuc2RhZzogMyxcbiAgICB3b2U6IDMsXG4gICAgXCJ3b2UuXCI6IDMsXG4gICAgd286IDMsXG4gICAgXCJ3by5cIjogMyxcbiAgICBkb25kZXJkYWc6IDQsXG4gICAgZG9uZDogNCxcbiAgICBcImRvbmQuXCI6IDQsXG4gICAgZG86IDQsXG4gICAgXCJkby5cIjogNCxcbiAgICB2cmlqZGFnOiA1LFxuICAgIHZyaWo6IDUsXG4gICAgXCJ2cmlqLlwiOiA1LFxuICAgIHZyOiA1LFxuICAgIFwidnIuXCI6IDUsXG4gICAgemF0ZXJkYWc6IDYsXG4gICAgemF0OiA2LFxuICAgIFwiemF0LlwiOiA2LFxuICAgIFwiemFcIjogNixcbiAgICBcInphLlwiOiA2LFxufTtcbmV4cG9ydHMuTU9OVEhfRElDVElPTkFSWSA9IHtcbiAgICBqYW51YXJpOiAxLFxuICAgIGphbjogMSxcbiAgICBcImphbi5cIjogMSxcbiAgICBmZWJydWFyaTogMixcbiAgICBmZWI6IDIsXG4gICAgXCJmZWIuXCI6IDIsXG4gICAgbWFhcnQ6IDMsXG4gICAgbWFyOiAzLFxuICAgIFwibWFyLlwiOiAzLFxuICAgIGFwcmlsOiA0LFxuICAgIGFwcjogNCxcbiAgICBcImFwci5cIjogNCxcbiAgICBtZWk6IDUsXG4gICAganVuaTogNixcbiAgICBqdW46IDYsXG4gICAgXCJqdW4uXCI6IDYsXG4gICAganVsaTogNyxcbiAgICBqdWw6IDcsXG4gICAgXCJqdWwuXCI6IDcsXG4gICAgYXVndXN0dXM6IDgsXG4gICAgYXVnOiA4LFxuICAgIFwiYXVnLlwiOiA4LFxuICAgIHNlcHRlbWJlcjogOSxcbiAgICBzZXA6IDksXG4gICAgXCJzZXAuXCI6IDksXG4gICAgc2VwdDogOSxcbiAgICBcInNlcHQuXCI6IDksXG4gICAgb2t0b2JlcjogMTAsXG4gICAgb2t0OiAxMCxcbiAgICBcIm9rdC5cIjogMTAsXG4gICAgbm92ZW1iZXI6IDExLFxuICAgIG5vdjogMTEsXG4gICAgXCJub3YuXCI6IDExLFxuICAgIGRlY2VtYmVyOiAxMixcbiAgICBkZWM6IDEyLFxuICAgIFwiZGVjLlwiOiAxMixcbn07XG5leHBvcnRzLklOVEVHRVJfV09SRF9ESUNUSU9OQVJZID0ge1xuICAgIGVlbjogMSxcbiAgICB0d2VlOiAyLFxuICAgIGRyaWU6IDMsXG4gICAgdmllcjogNCxcbiAgICB2aWpmOiA1LFxuICAgIHplczogNixcbiAgICB6ZXZlbjogNyxcbiAgICBhY2h0OiA4LFxuICAgIG5lZ2VuOiA5LFxuICAgIHRpZW46IDEwLFxuICAgIGVsZjogMTEsXG4gICAgdHdhYWxmOiAxMixcbn07XG5leHBvcnRzLk9SRElOQUxfV09SRF9ESUNUSU9OQVJZID0ge1xuICAgIGVlcnN0ZTogMSxcbiAgICB0d2VlZGU6IDIsXG4gICAgZGVyZGU6IDMsXG4gICAgdmllcmRlOiA0LFxuICAgIHZpamZkZTogNSxcbiAgICB6ZXNkZTogNixcbiAgICB6ZXZlbmRlOiA3LFxuICAgIGFjaHRzdGU6IDgsXG4gICAgbmVnZW5kZTogOSxcbiAgICB0aWVuZGU6IDEwLFxuICAgIGVsZmRlOiAxMSxcbiAgICB0d2FhbGZkZTogMTIsXG4gICAgZGVydGllbmRlOiAxMyxcbiAgICB2ZWVydGllbmRlOiAxNCxcbiAgICB2aWpmdGllbmRlOiAxNSxcbiAgICB6ZXN0aWVuZGU6IDE2LFxuICAgIHpldmVudGllbmRlOiAxNyxcbiAgICBhY2h0dGllbmRlOiAxOCxcbiAgICBuZWdlbnRpZW5kZTogMTksXG4gICAgdHdpbnRpZ3N0ZTogMjAsXG4gICAgXCJlZW5lbnR3aW50aWdzdGVcIjogMjEsXG4gICAgXCJ0d2Vlw6tudHdpbnRpZ3N0ZVwiOiAyMixcbiAgICBcImRyaWVlbnR3aW50aWdzdGVcIjogMjMsXG4gICAgXCJ2aWVyZW50d2ludGlnc3RlXCI6IDI0LFxuICAgIFwidmlqZmVudHdpbnRpZ3N0ZVwiOiAyNSxcbiAgICBcInplc2VudHdpbnRpZ3N0ZVwiOiAyNixcbiAgICBcInpldmVuZW50d2ludGlnc3RlXCI6IDI3LFxuICAgIFwiYWNodGVudHdpbnRpZ1wiOiAyOCxcbiAgICBcIm5lZ2VuZW50d2ludGlnXCI6IDI5LFxuICAgIFwiZGVydGlnc3RlXCI6IDMwLFxuICAgIFwiZWVuZW5kZXJ0aWdzdGVcIjogMzEsXG59O1xuZXhwb3J0cy5USU1FX1VOSVRfRElDVElPTkFSWSA9IHtcbiAgICBzZWM6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZGVuOiBcInNlY29uZFwiLFxuICAgIG1pbjogXCJtaW51dGVcIixcbiAgICBtaW5zOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVuOiBcIm1pbnV0ZVwiLFxuICAgIGg6IFwiaG91clwiLFxuICAgIGhyOiBcImhvdXJcIixcbiAgICBocnM6IFwiaG91clwiLFxuICAgIHV1cjogXCJob3VyXCIsXG4gICAgdXJlbjogXCJob3VyXCIsXG4gICAgZGFnOiBcImRcIixcbiAgICBkYWdlbjogXCJkXCIsXG4gICAgd2VlazogXCJ3ZWVrXCIsXG4gICAgd2VrZW46IFwid2Vla1wiLFxuICAgIG1hYW5kOiBcIm1vbnRoXCIsXG4gICAgbWFhbmRlbjogXCJtb250aFwiLFxuICAgIGphYXI6IFwieWVhclwiLFxuICAgIGpyOiBcInllYXJcIixcbiAgICBqYXJlbjogXCJ5ZWFyXCIsXG59O1xuZXhwb3J0cy5OVU1CRVJfUEFUVEVSTiA9IGAoPzoke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oZXhwb3J0cy5JTlRFR0VSX1dPUkRfRElDVElPTkFSWSl9fFswLTldK3xbMC05XStcXFxcLlswLTldK3xlZW4/fGhhbHZlPylgO1xuZnVuY3Rpb24gcGFyc2VOdW1iZXJQYXR0ZXJuKG1hdGNoKSB7XG4gICAgY29uc3QgbnVtID0gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZXhwb3J0cy5JTlRFR0VSX1dPUkRfRElDVElPTkFSWVtudW1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuSU5URUdFUl9XT1JEX0RJQ1RJT05BUllbbnVtXTtcbiAgICB9XG4gICAgZWxzZSBpZiAobnVtID09PSBcImVlblwiKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBlbHNlIGlmIChudW0ubWF0Y2goL2hhbHZlPy8pKSB7XG4gICAgICAgIHJldHVybiAwLjU7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSk7XG59XG5leHBvcnRzLnBhcnNlTnVtYmVyUGF0dGVybiA9IHBhcnNlTnVtYmVyUGF0dGVybjtcbmV4cG9ydHMuT1JESU5BTF9OVU1CRVJfUEFUVEVSTiA9IGAoPzoke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oZXhwb3J0cy5PUkRJTkFMX1dPUkRfRElDVElPTkFSWSl9fFswLTldezEsMn0oPzpzdGV8ZGUpPylgO1xuZnVuY3Rpb24gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaCkge1xuICAgIGxldCBudW0gPSBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChleHBvcnRzLk9SRElOQUxfV09SRF9ESUNUSU9OQVJZW251bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5PUkRJTkFMX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH1cbiAgICBudW0gPSBudW0ucmVwbGFjZSgvKD86c3RlfGRlKSQvaSwgXCJcIik7XG4gICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG59XG5leHBvcnRzLnBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuO1xuZXhwb3J0cy5ZRUFSX1BBVFRFUk4gPSBgKD86WzEtOV1bMC05XXswLDN9XFxcXHMqKD86dm9vciBDaHJpc3R1c3xuYSBDaHJpc3R1cyl8WzEtMl1bMC05XXszfXxbNS05XVswLTldKWA7XG5mdW5jdGlvbiBwYXJzZVllYXIobWF0Y2gpIHtcbiAgICBpZiAoL3Zvb3IgQ2hyaXN0dXMvaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL3Zvb3IgQ2hyaXN0dXMvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiAtcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cbiAgICBpZiAoL25hIENocmlzdHVzL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9uYSBDaHJpc3R1cy9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoKTtcbiAgICB9XG4gICAgY29uc3QgcmF3WWVhck51bWJlciA9IHBhcnNlSW50KG1hdGNoKTtcbiAgICByZXR1cm4geWVhcnNfMS5maW5kTW9zdExpa2VseUFEWWVhcihyYXdZZWFyTnVtYmVyKTtcbn1cbmV4cG9ydHMucGFyc2VZZWFyID0gcGFyc2VZZWFyO1xuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOID0gYCgke2V4cG9ydHMuTlVNQkVSX1BBVFRFUk59KVxcXFxzezAsNX0oJHtwYXR0ZXJuXzEubWF0Y2hBbnlQYXR0ZXJuKGV4cG9ydHMuVElNRV9VTklUX0RJQ1RJT05BUlkpfSlcXFxcc3swLDV9YDtcbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUkVHRVggPSBuZXcgUmVnRXhwKFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiwgXCJpXCIpO1xuZXhwb3J0cy5USU1FX1VOSVRTX1BBVFRFUk4gPSBwYXR0ZXJuXzEucmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oYCg/Oig/OmJpbm5lbnxpbilcXFxccyopP2AsIFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTik7XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0cyh0aW1ldW5pdFRleHQpIHtcbiAgICBjb25zdCBmcmFnbWVudHMgPSB7fTtcbiAgICBsZXQgcmVtYWluaW5nVGV4dCA9IHRpbWV1bml0VGV4dDtcbiAgICBsZXQgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIGNvbGxlY3REYXRlVGltZUZyYWdtZW50KGZyYWdtZW50cywgbWF0Y2gpO1xuICAgICAgICByZW1haW5pbmdUZXh0ID0gcmVtYWluaW5nVGV4dC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudHM7XG59XG5leHBvcnRzLnBhcnNlVGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHM7XG5mdW5jdGlvbiBjb2xsZWN0RGF0ZVRpbWVGcmFnbWVudChmcmFnbWVudHMsIG1hdGNoKSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VOdW1iZXJQYXR0ZXJuKG1hdGNoWzFdKTtcbiAgICBjb25zdCB1bml0ID0gZXhwb3J0cy5USU1FX1VOSVRfRElDVElPTkFSWVttYXRjaFsyXS50b0xvd2VyQ2FzZSgpXTtcbiAgICBmcmFnbWVudHNbdW5pdF0gPSBudW07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IHJlc3VsdHNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9yZXN1bHRzXCIpO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY2xhc3MgTkxUaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGAoPzpiaW5uZW58aW58YmlubmVuIGRlfHZvb3IpXFxcXHMqYCArIFwiKFwiICsgY29uc3RhbnRzXzEuVElNRV9VTklUU19QQVRURVJOICsgXCIpXCIgKyBgKD89XFxcXFd8JClgLCBcImlcIik7XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBjb25zdGFudHNfMS5wYXJzZVRpbWVVbml0cyhtYXRjaFsxXSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzXzEuUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmRGF0ZShjb250ZXh0LnJlZkRhdGUsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTkxUaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vbmwvY29uc3RhbnRzXCIpO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCB3ZWVrc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3dlZWtzXCIpO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoPzooPzpcXFxcLHxcXFxcKHxcXFxc77yIKVxcXFxzKik/XCIgK1xuICAgIFwiKD86b3BcXFxccyo/KT9cIiArXG4gICAgXCIoPzooZGV6ZXx2b3JpZ2V8dm9sZ2VuZGUpXFxcXHMqKD86d2Vla1xcXFxzKik/KT9cIiArXG4gICAgYCgke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oY29uc3RhbnRzXzEuV0VFS0RBWV9ESUNUSU9OQVJZKX0pYCArXG4gICAgXCIoPz1cXFxcV3wkKVwiLCBcImlcIik7XG5jb25zdCBQUkVGSVhfR1JPVVAgPSAxO1xuY29uc3QgV0VFS0RBWV9HUk9VUCA9IDI7XG5jb25zdCBQT1NURklYX0dST1VQID0gMztcbmNsYXNzIE5MV2Vla2RheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gbWF0Y2hbV0VFS0RBWV9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY29uc3RhbnRzXzEuV0VFS0RBWV9ESUNUSU9OQVJZW2RheU9mV2Vla107XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoW1BSRUZJWF9HUk9VUF07XG4gICAgICAgIGNvbnN0IHBvc3RmaXggPSBtYXRjaFtQT1NURklYX0dST1VQXTtcbiAgICAgICAgbGV0IG1vZGlmaWVyV29yZCA9IHByZWZpeCB8fCBwb3N0Zml4O1xuICAgICAgICBtb2RpZmllcldvcmQgPSBtb2RpZmllcldvcmQgfHwgXCJcIjtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBtb2RpZmllciA9IG51bGw7XG4gICAgICAgIGlmIChtb2RpZmllcldvcmQgPT0gXCJ2b3JpZ2VcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcImxhc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RpZmllcldvcmQgPT0gXCJ2b2xnZW5kZVwiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwibmV4dFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGlmaWVyV29yZCA9PSBcImRlemVcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcInRoaXNcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlID0gd2Vla3NfMS50b0RheUpTV2Vla2RheShjb250ZXh0LnJlZkRhdGUsIG9mZnNldCwgbW9kaWZpZXIpO1xuICAgICAgICByZXR1cm4gY29udGV4dFxuICAgICAgICAgICAgLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKClcbiAgICAgICAgICAgIC5hc3NpZ24oXCJ3ZWVrZGF5XCIsIG9mZnNldClcbiAgICAgICAgICAgIC5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSlcbiAgICAgICAgICAgIC5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpXG4gICAgICAgICAgICAuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBOTFdlZWtkYXlQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHllYXJzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIik7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBjb25zdGFudHNfMiA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBjb25zdGFudHNfMyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFwiKD86b25cXFxccyo/KT9cIiArXG4gICAgYCgke2NvbnN0YW50c18yLk9SRElOQUxfTlVNQkVSX1BBVFRFUk59KWAgK1xuICAgIFwiKD86XFxcXHMqXCIgK1xuICAgIFwiKD86dG90fFxcXFwtfFxcXFzigJN8dW50aWx8dGhyb3VnaHx0aWxsfFxcXFxzKVxcXFxzKlwiICtcbiAgICBgKCR7Y29uc3RhbnRzXzIuT1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pYCArXG4gICAgXCIpP1wiICtcbiAgICBcIig/Oi18L3xcXFxccyooPzpvZik/XFxcXHMqKVwiICtcbiAgICBcIihcIiArXG4gICAgcGF0dGVybl8xLm1hdGNoQW55UGF0dGVybihjb25zdGFudHNfMS5NT05USF9ESUNUSU9OQVJZKSArXG4gICAgXCIpXCIgK1xuICAgIFwiKD86XCIgK1xuICAgIFwiKD86LXwvfCw/XFxcXHMqKVwiICtcbiAgICBgKCR7Y29uc3RhbnRzXzMuWUVBUl9QQVRURVJOfSg/IVteXFxcXHNdXFxcXGQpKWAgK1xuICAgIFwiKT9cIiArXG4gICAgXCIoPz1cXFxcV3wkKVwiLCBcImlcIik7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMztcbmNvbnN0IERBVEVfR1JPVVAgPSAxO1xuY29uc3QgREFURV9UT19HUk9VUCA9IDI7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcbmNsYXNzIE5MTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBtb250aCA9IGNvbnN0YW50c18xLk1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGNvbnN0IGRheSA9IGNvbnN0YW50c18yLnBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9HUk9VUF0pO1xuICAgICAgICBpZiAoZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFtEQVRFX0dST1VQXS5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyh7XG4gICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGNvbnN0YW50c18zLnBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0geWVhcnNfMS5maW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtYXRjaFtEQVRFX1RPX0dST1VQXSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IGNvbnN0YW50c18yLnBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9UT19HUk9VUF0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gY29tcG9uZW50cztcbiAgICAgICAgcmVzdWx0LmVuZCA9IGNvbXBvbmVudHMuY2xvbmUoKTtcbiAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJkYXlcIiwgZW5kRGF0ZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTkxNb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IHllYXJzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIik7XG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiKTtcbmNvbnN0IGNvbnN0YW50c18yID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtwYXR0ZXJuXzEubWF0Y2hBbnlQYXR0ZXJuKGNvbnN0YW50c18xLk1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICBgXFxcXHMqYCArXG4gICAgYCg/OmAgK1xuICAgIGBbLC1dP1xcXFxzKigke2NvbnN0YW50c18yLllFQVJfUEFUVEVSTn0pP2AgK1xuICAgIFwiKT9cIiArXG4gICAgXCIoPz1bXlxcXFxzXFxcXHddfFxcXFxzK1teMC05XXxcXFxccyskfCQpXCIsIFwiaVwiKTtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAxO1xuY29uc3QgWUVBUl9HUk9VUCA9IDI7XG5jbGFzcyBOTE1vbnRoTmFtZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCAxKTtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lID0gbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF07XG4gICAgICAgIGNvbnN0IG1vbnRoID0gY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWVttb250aE5hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBjb25zdGFudHNfMi5wYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHllYXJzXzEuZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCAxLCBtb250aCk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBOTE1vbnRoTmFtZVBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCIpO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoWzAtOV18MFsxLTldfDFbMDEyXSkvKFswLTldezR9KVwiICsgXCJcIiwgXCJpXCIpO1xuY29uc3QgTU9OVEhfR1JPVVAgPSAxO1xuY29uc3QgWUVBUl9HUk9VUCA9IDI7XG5jbGFzcyBOTFNsYXNoTW9udGhGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMS5BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hbTU9OVEhfR1JPVVBdKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKS5pbXBseShcImRheVwiLCAxKS5hc3NpZ24oXCJtb250aFwiLCBtb250aCkuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBOTFNsYXNoTW9udGhGb3JtYXRQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuY2xhc3MgTkxUaW1lRXhwcmVzc2lvblBhcnNlciBleHRlbmRzIEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXJfMS5BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIHtcbiAgICBwcmltYXJ5UHJlZml4KCkge1xuICAgICAgICByZXR1cm4gXCIoPzooPzpvbSlcXFxccyopP1wiO1xuICAgIH1cbiAgICBmb2xsb3dpbmdQaGFzZSgpIHtcbiAgICAgICAgcmV0dXJuIFwiXFxcXHMqKD86XFxcXC18XFxcXOKAk3xcXFxcfnxcXFxc44CcfG9tfFxcXFw/KVxcXFxzKlwiO1xuICAgIH1cbiAgICBleHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXlxccypcXGR7NH1cXHMqJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTkxUaW1lRXhwcmVzc2lvblBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIik7XG5jb25zdCBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIik7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKFswLTldezR9KVtcXFxcLlxcXFwvXFxcXHNdYCArXG4gICAgYCg/Oigke3BhdHRlcm5fMS5tYXRjaEFueVBhdHRlcm4oY29uc3RhbnRzXzEuTU9OVEhfRElDVElPTkFSWSl9KXwoWzAtOV17MSwyfSkpW1xcXFwuXFxcXC9cXFxcc11gICtcbiAgICBgKFswLTldezEsMn0pYCArXG4gICAgXCIoPz1cXFxcV3wkKVwiLCBcImlcIik7XG5jb25zdCBZRUFSX05VTUJFUl9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDQ7XG5jbGFzcyBOTENhc3VhbFllYXJNb250aERheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xLkFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbW9udGggPSBtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdXG4gICAgICAgICAgICA/IHBhcnNlSW50KG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF0pXG4gICAgICAgICAgICA6IGNvbnN0YW50c18xLk1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KG1hdGNoW1lFQVJfTlVNQkVSX0dST1VQXSk7XG4gICAgICAgIGNvbnN0IGRheSA9IHBhcnNlSW50KG1hdGNoW0RBVEVfTlVNQkVSX0dST1VQXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTkxDYXN1YWxZZWFyTW9udGhEYXlQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiKTtcbmNvbnN0IGluZGV4XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW5kZXhcIik7XG5jb25zdCBkYXlqc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL2RheWpzXCIpO1xuY29uc3QgZGF5anNfMiA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY29uc3QgREFURV9HUk9VUCA9IDE7XG5jb25zdCBUSU1FX09GX0RBWV9HUk9VUCA9IDI7XG5jbGFzcyBOTENhc3VhbERhdGVUaW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEuQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybihjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAvKGdpc3RlcmVufG1vcmdlbnx2YW4pKG9jaHRlbmR8bWlkZGFnfG5hbWlkZGFnfGF2b25kfG5hY2h0KSg/PVxcV3wkKS9pO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgZGF0ZVRleHQgPSBtYXRjaFtEQVRFX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB0aW1lVGV4dCA9IG1hdGNoW1RJTUVfT0ZfREFZX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqc18yLmRlZmF1bHQoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgc3dpdGNoIChkYXRlVGV4dCkge1xuICAgICAgICAgICAgY2FzZSBcImdpc3RlcmVuXCI6XG4gICAgICAgICAgICAgICAgZGF5anNfMS5hc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmFuXCI6XG4gICAgICAgICAgICAgICAgZGF5anNfMS5hc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1vcmdlblwiOlxuICAgICAgICAgICAgICAgIGRheWpzXzEuYXNzaWduVGhlTmV4dERheShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGltZVRleHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJvY2h0ZW5kXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCA2KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaWRkYWdcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBpbmRleF8xLk1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDEyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJuYW1pZGRhZ1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIGluZGV4XzEuTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMTUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImF2b25kXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgaW5kZXhfMS5NZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAyMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBOTENhc3VhbERhdGVUaW1lUGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUNvbmZpZ3VyYXRpb24gPSBleHBvcnRzLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24gPSBleHBvcnRzLnBhcnNlRGF0ZSA9IGV4cG9ydHMucGFyc2UgPSBleHBvcnRzLnN0cmljdCA9IGV4cG9ydHMuY2FzdWFsID0gdm9pZCAwO1xuY29uc3QgY29uZmlndXJhdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWd1cmF0aW9uc1wiKTtcbmNvbnN0IGNocm9ub18xID0gcmVxdWlyZShcIi4uLy4uL2Nocm9ub1wiKTtcbmNvbnN0IE5MTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVmaW5lcnMvTkxNZXJnZURhdGVSYW5nZVJlZmluZXJcIikpO1xuY29uc3QgTkxNZXJnZURhdGVUaW1lUmVmaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlZmluZXJzL05MTWVyZ2VEYXRlVGltZVJlZmluZXJcIikpO1xuY29uc3QgTkxDYXN1YWxEYXRlUGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9OTENhc3VhbERhdGVQYXJzZXJcIikpO1xuY29uc3QgTkxDYXN1YWxUaW1lUGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9OTENhc3VhbFRpbWVQYXJzZXJcIikpO1xuY29uc3QgU2xhc2hEYXRlRm9ybWF0UGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbW1vbi9wYXJzZXJzL1NsYXNoRGF0ZUZvcm1hdFBhcnNlclwiKSk7XG5jb25zdCBOTFRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9OTFRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyXCIpKTtcbmNvbnN0IE5MV2Vla2RheVBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvTkxXZWVrZGF5UGFyc2VyXCIpKTtcbmNvbnN0IE5MTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9OTE1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlclwiKSk7XG5jb25zdCBOTE1vbnRoTmFtZVBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvTkxNb250aE5hbWVQYXJzZXJcIikpO1xuY29uc3QgTkxTbGFzaE1vbnRoRm9ybWF0UGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2Vycy9OTFNsYXNoTW9udGhGb3JtYXRQYXJzZXJcIikpO1xuY29uc3QgTkxUaW1lRXhwcmVzc2lvblBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvTkxUaW1lRXhwcmVzc2lvblBhcnNlclwiKSk7XG5jb25zdCBOTENhc3VhbFllYXJNb250aERheVBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvTkxDYXN1YWxZZWFyTW9udGhEYXlQYXJzZXJcIikpO1xuY29uc3QgTkxDYXN1YWxEYXRlVGltZVBhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlcnMvTkxDYXN1YWxEYXRlVGltZVBhcnNlclwiKSk7XG5leHBvcnRzLmNhc3VhbCA9IG5ldyBjaHJvbm9fMS5DaHJvbm8oY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbigpKTtcbmV4cG9ydHMuc3RyaWN0ID0gbmV3IGNocm9ub18xLkNocm9ubyhjcmVhdGVDb25maWd1cmF0aW9uKHRydWUpKTtcbmZ1bmN0aW9uIHBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbikge1xuICAgIHJldHVybiBleHBvcnRzLmNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuZXhwb3J0cy5wYXJzZURhdGUgPSBwYXJzZURhdGU7XG5mdW5jdGlvbiBjcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKGxpdHRsZUVuZGlhbiA9IHRydWUpIHtcbiAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVDb25maWd1cmF0aW9uKGZhbHNlLCBsaXR0bGVFbmRpYW4pO1xuICAgIG9wdGlvbi5wYXJzZXJzLnVuc2hpZnQobmV3IE5MQ2FzdWFsRGF0ZVBhcnNlcl8xLmRlZmF1bHQoKSk7XG4gICAgb3B0aW9uLnBhcnNlcnMudW5zaGlmdChuZXcgTkxDYXN1YWxUaW1lUGFyc2VyXzEuZGVmYXVsdCgpKTtcbiAgICBvcHRpb24ucGFyc2Vycy51bnNoaWZ0KG5ldyBOTENhc3VhbERhdGVUaW1lUGFyc2VyXzEuZGVmYXVsdCgpKTtcbiAgICByZXR1cm4gb3B0aW9uO1xufVxuZXhwb3J0cy5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uID0gY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbjtcbmZ1bmN0aW9uIGNyZWF0ZUNvbmZpZ3VyYXRpb24oc3RyaWN0TW9kZSA9IHRydWUsIGxpdHRsZUVuZGlhbiA9IHRydWUpIHtcbiAgICByZXR1cm4gY29uZmlndXJhdGlvbnNfMS5pbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbih7XG4gICAgICAgIHBhcnNlcnM6IFtcbiAgICAgICAgICAgIG5ldyBTbGFzaERhdGVGb3JtYXRQYXJzZXJfMS5kZWZhdWx0KGxpdHRsZUVuZGlhbiksXG4gICAgICAgICAgICBuZXcgTkxNb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgTkxNb250aE5hbWVQYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgTkxUaW1lRXhwcmVzc2lvblBhcnNlcl8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgIG5ldyBOTFRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgbmV3IE5MU2xhc2hNb250aEZvcm1hdFBhcnNlcl8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgIG5ldyBOTFdlZWtkYXlQYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgTkxDYXN1YWxZZWFyTW9udGhEYXlQYXJzZXJfMS5kZWZhdWx0KCksXG4gICAgICAgIF0sXG4gICAgICAgIHJlZmluZXJzOiBbbmV3IE5MTWVyZ2VEYXRlVGltZVJlZmluZXJfMS5kZWZhdWx0KCksIG5ldyBOTE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xLmRlZmF1bHQoKV0sXG4gICAgfSwgc3RyaWN0TW9kZSk7XG59XG5leHBvcnRzLmNyZWF0ZUNvbmZpZ3VyYXRpb24gPSBjcmVhdGVDb25maWd1cmF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VEYXRlID0gZXhwb3J0cy5wYXJzZSA9IGV4cG9ydHMuY2FzdWFsID0gZXhwb3J0cy5zdHJpY3QgPSBleHBvcnRzLm5sID0gZXhwb3J0cy5wdCA9IGV4cG9ydHMuamEgPSBleHBvcnRzLmZyID0gZXhwb3J0cy5kZSA9IGV4cG9ydHMuTWVyaWRpZW0gPSBleHBvcnRzLkNocm9ubyA9IGV4cG9ydHMuZW4gPSB2b2lkIDA7XG5jb25zdCBlbiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9sb2NhbGVzL2VuXCIpKTtcbmV4cG9ydHMuZW4gPSBlbjtcbmNvbnN0IGNocm9ub18xID0gcmVxdWlyZShcIi4vY2hyb25vXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2hyb25vXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjaHJvbm9fMS5DaHJvbm87IH0gfSk7XG52YXIgTWVyaWRpZW07XG4oZnVuY3Rpb24gKE1lcmlkaWVtKSB7XG4gICAgTWVyaWRpZW1bTWVyaWRpZW1bXCJBTVwiXSA9IDBdID0gXCJBTVwiO1xuICAgIE1lcmlkaWVtW01lcmlkaWVtW1wiUE1cIl0gPSAxXSA9IFwiUE1cIjtcbn0pKE1lcmlkaWVtID0gZXhwb3J0cy5NZXJpZGllbSB8fCAoZXhwb3J0cy5NZXJpZGllbSA9IHt9KSk7XG5jb25zdCBkZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9sb2NhbGVzL2RlXCIpKTtcbmV4cG9ydHMuZGUgPSBkZTtcbmNvbnN0IGZyID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2xvY2FsZXMvZnJcIikpO1xuZXhwb3J0cy5mciA9IGZyO1xuY29uc3QgamEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbG9jYWxlcy9qYVwiKSk7XG5leHBvcnRzLmphID0gamE7XG5jb25zdCBwdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9sb2NhbGVzL3B0XCIpKTtcbmV4cG9ydHMucHQgPSBwdDtcbmNvbnN0IG5sID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2xvY2FsZXMvbmxcIikpO1xuZXhwb3J0cy5ubCA9IG5sO1xuZXhwb3J0cy5zdHJpY3QgPSBlbi5zdHJpY3Q7XG5leHBvcnRzLmNhc3VhbCA9IGVuLmNhc3VhbDtcbmZ1bmN0aW9uIHBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbikge1xuICAgIHJldHVybiBleHBvcnRzLmNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuZXhwb3J0cy5wYXJzZURhdGUgPSBwYXJzZURhdGU7XG4iLCJpbXBvcnQge1xyXG4gIEFwcCxcclxuICBNb2RhbCxcclxuICBNb21lbnRGb3JtYXRDb21wb25lbnQsXHJcbiAgUGx1Z2luLFxyXG4gIFBsdWdpblNldHRpbmdUYWIsXHJcbiAgU2V0dGluZyxcclxuICBUZXh0Q29tcG9uZW50LFxyXG4gIEJ1dHRvbkNvbXBvbmVudCxcclxuICBNYXJrZG93blZpZXcsXHJcbiAgVG9nZ2xlQ29tcG9uZW50LFxyXG59IGZyb20gXCJvYnNpZGlhblwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVEYWlseU5vdGUsXHJcbiAgZ2V0QWxsRGFpbHlOb3RlcyxcclxuICBnZXREYWlseU5vdGUsXHJcbn0gZnJvbSBcIm9ic2lkaWFuLWRhaWx5LW5vdGVzLWludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IGNocm9ubyBmcm9tIFwiY2hyb25vLW5vZGVcIjtcclxuXHJcbnZhciBnZXRMYXN0RGF5T2ZNb250aCA9IGZ1bmN0aW9uICh5OiBhbnksIG06IGFueSkge1xyXG4gIHJldHVybiBuZXcgRGF0ZSh5LCBtLCAwKS5nZXREYXRlKCk7XHJcbn07XHJcblxyXG5jb25zdCBjdXN0b20gPSBjaHJvbm8uY2FzdWFsLmNsb25lKCk7XHJcblxyXG5jdXN0b20ucGFyc2Vycy5wdXNoKHtcclxuICBwYXR0ZXJuOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gL1xcYkNocmlzdG1hc1xcYi9pO1xyXG4gIH0sXHJcbiAgZXh0cmFjdDogKGNvbnRleHQ6IGFueSwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRheTogMjUsXHJcbiAgICAgIG1vbnRoOiAxMixcclxuICAgIH07XHJcbiAgfSxcclxufSk7XHJcblxyXG5pbnRlcmZhY2UgTkxEUmVzdWx0IHtcclxuICBmb3JtYXR0ZWRTdHJpbmc6IHN0cmluZztcclxuICBkYXRlOiBEYXRlO1xyXG4gIG1vbWVudDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXR1cmFsTGFuZ3VhZ2VEYXRlcyBleHRlbmRzIFBsdWdpbiB7XHJcbiAgc2V0dGluZ3M6IE5MRFNldHRpbmdzO1xyXG5cclxuICBvbkluaXQoKSB7fVxyXG5cclxuICBhc3luYyBvbmxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgbmF0dXJhbCBsYW5ndWFnZSBkYXRlIHBhcnNlciBwbHVnaW5cIik7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcIm5scC1kYXRlc1wiLFxyXG4gICAgICBuYW1lOiBcIlBhcnNlIG5hdHVyYWwgbGFuZ3VhZ2UgZGF0ZVwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5vblRyaWdnZXIoXCJyZXBsYWNlXCIpLFxyXG4gICAgICBob3RrZXlzOiBbXSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcIm5scC1kYXRlcy1saW5rXCIsXHJcbiAgICAgIG5hbWU6IFwiUGFyc2UgbmF0dXJhbCBsYW5ndWFnZSBkYXRlIChhcyBsaW5rKVwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5vblRyaWdnZXIoXCJsaW5rXCIpLFxyXG4gICAgICBob3RrZXlzOiBbXSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcIm5scC1kYXRlLWNsZWFuXCIsXHJcbiAgICAgIG5hbWU6IFwiUGFyc2UgbmF0dXJhbCBsYW5ndWFnZSBkYXRlIChhcyBwbGFpbiB0ZXh0KVwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5vblRyaWdnZXIoXCJjbGVhblwiKSxcclxuICAgICAgaG90a2V5czogW10sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogXCJubHAtcGFyc2UtdGltZVwiLFxyXG4gICAgICBuYW1lOiBcIlBhcnNlIG5hdHVyYWwgbGFuZ3VhZ2UgdGltZVwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5vblRyaWdnZXIoXCJ0aW1lXCIpLFxyXG4gICAgICBob3RrZXlzOiBbXSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcIm5scC1ub3dcIixcclxuICAgICAgbmFtZTogXCJJbnNlcnQgdGhlIGN1cnJlbnQgZGF0ZSBhbmQgdGltZVwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5nZXROb3dDb21tYW5kKCksXHJcbiAgICAgIGhvdGtleXM6IFtdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwibmxwLXRvZGF5XCIsXHJcbiAgICAgIG5hbWU6IFwiSW5zZXJ0IHRoZSBjdXJyZW50IGRhdGVcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuZ2V0RGF0ZUNvbW1hbmQoKSxcclxuICAgICAgaG90a2V5czogW10sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogXCJubHAtdGltZVwiLFxyXG4gICAgICBuYW1lOiBcIkluc2VydCB0aGUgY3VycmVudCB0aW1lXCIsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLmdldFRpbWVDb21tYW5kKCksXHJcbiAgICAgIGhvdGtleXM6IFtdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwibmxwLXBpY2tlclwiLFxyXG4gICAgICBuYW1lOiBcIkRhdGUgcGlja2VyXCIsXHJcbiAgICAgIGNoZWNrQ2FsbGJhY2s6IChjaGVja2luZzogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGxldCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XHJcbiAgICAgICAgaWYgKGxlYWYpIHtcclxuICAgICAgICAgIGlmICghY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgbmV3IFBhcnNlTW9tZW50TW9kYWwodGhpcy5hcHAsIHRoaXMpLm9wZW4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhvdGtleXM6IFtdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBOTERTZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJPYnNpZGlhblByb3RvY29sSGFuZGxlcihcIm5sZGF0ZXNcIiwgdGhpcy5hY3Rpb25IYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgb251bmxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlVubG9hZGluZyBuYXR1cmFsIGxhbmd1YWdlIGRhdGUgcGFyc2VyIHBsdWdpblwiKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpXHJcbiAgfVxyXG5cclxuICBnZXRQYXJzZWREYXRlKHNlbGVjdGVkVGV4dDogc3RyaW5nKTogRGF0ZSB7XHJcbiAgICB2YXIgbmV4dERhdGVNYXRjaCA9IHNlbGVjdGVkVGV4dC5tYXRjaCgvbmV4dFxccyhbXFx3XSspL2kpO1xyXG4gICAgdmFyIGxhc3REYXlPZk1hdGNoID0gc2VsZWN0ZWRUZXh0Lm1hdGNoKFxyXG4gICAgICAvKGxhc3QgZGF5IG9mfGVuZCBvZilcXHMqKFteXFxuXFxyXSopL2lcclxuICAgICk7XHJcbiAgICB2YXIgbWlkT2YgPSBzZWxlY3RlZFRleHQubWF0Y2goL21pZFxccyhbXFx3XSspL2kpO1xyXG5cclxuICAgIGlmIChuZXh0RGF0ZU1hdGNoICYmIG5leHREYXRlTWF0Y2hbMV0gPT09IFwid2Vla1wiKSB7XHJcbiAgICAgIHJldHVybiBjdXN0b20ucGFyc2VEYXRlKGBuZXh0ICR7dGhpcy5zZXR0aW5ncy53ZWVrU3RhcnR9YCwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgIGZvcndhcmREYXRlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobmV4dERhdGVNYXRjaCAmJiBuZXh0RGF0ZU1hdGNoWzFdID09PSBcIm1vbnRoXCIpIHtcclxuICAgICAgdmFyIHRoaXNNb250aCA9IGN1c3RvbS5wYXJzZURhdGUoXCJ0aGlzIG1vbnRoXCIsIG5ldyBEYXRlKCksIHtcclxuICAgICAgICBmb3J3YXJkRGF0ZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjdXN0b20ucGFyc2VEYXRlKHNlbGVjdGVkVGV4dCwgdGhpc01vbnRoLCB7XHJcbiAgICAgICAgZm9yd2FyZERhdGU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChuZXh0RGF0ZU1hdGNoICYmIG5leHREYXRlTWF0Y2hbMV0gPT09IFwieWVhclwiKSB7XHJcbiAgICAgIHZhciB0aGlzWWVhciA9IGN1c3RvbS5wYXJzZURhdGUoXCJ0aGlzIHllYXJcIiwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgIGZvcndhcmREYXRlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGN1c3RvbS5wYXJzZURhdGUoc2VsZWN0ZWRUZXh0LCB0aGlzWWVhciwge1xyXG4gICAgICAgIGZvcndhcmREYXRlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobGFzdERheU9mTWF0Y2gpIHtcclxuICAgICAgdmFyIHRlbXBEYXRlID0gY3VzdG9tLnBhcnNlKGxhc3REYXlPZk1hdGNoWzJdKTtcclxuICAgICAgdmFyIHllYXIgPSB0ZW1wRGF0ZVswXS5zdGFydC5nZXQoXCJ5ZWFyXCIpLFxyXG4gICAgICAgIG1vbnRoID0gdGVtcERhdGVbMF0uc3RhcnQuZ2V0KFwibW9udGhcIik7XHJcbiAgICAgIHZhciBsYXN0RGF5ID0gZ2V0TGFzdERheU9mTW9udGgoeWVhciwgbW9udGgpO1xyXG4gICAgICByZXR1cm4gY3VzdG9tLnBhcnNlRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2xhc3REYXl9YCwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgIGZvcndhcmREYXRlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobWlkT2YpIHtcclxuICAgICAgcmV0dXJuIGN1c3RvbS5wYXJzZURhdGUoYCR7bWlkT2ZbMV19IDE1dGhgLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgZm9yd2FyZERhdGU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGN1c3RvbS5wYXJzZURhdGUoc2VsZWN0ZWRUZXh0LCBuZXcgRGF0ZSgpLCB7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFRleHQoZWRpdG9yOiBhbnkpIHtcclxuICAgIGlmIChlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKSkge1xyXG4gICAgICByZXR1cm4gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHdvcmRCb3VuZGFyaWVzID0gdGhpcy5nZXRXb3JkQm91bmRhcmllcyhlZGl0b3IpO1xyXG4gICAgICBlZGl0b3IuZ2V0RG9jKCkuc2V0U2VsZWN0aW9uKHdvcmRCb3VuZGFyaWVzLnN0YXJ0LCB3b3JkQm91bmRhcmllcy5lbmQpO1xyXG4gICAgICByZXR1cm4gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V29yZEJvdW5kYXJpZXMoZWRpdG9yOiBhbnkpIHtcclxuICAgIHZhciBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKCk7XHJcbiAgICB2YXIgbGluZSA9IGN1cnNvci5saW5lO1xyXG4gICAgdmFyIHdvcmQgPSBlZGl0b3IuZmluZFdvcmRBdCh7XHJcbiAgICAgIGxpbmU6IGxpbmUsXHJcbiAgICAgIGNoOiBjdXJzb3IuY2hcclxuICAgIH0pO1xyXG4gICAgdmFyIHdvcmRTdGFydCA9IHdvcmQuYW5jaG9yLmNoO1xyXG4gICAgdmFyIHdvcmRFbmQgPSB3b3JkLmhlYWQuY2g7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhcnQ6IHtcclxuICAgICAgICBsaW5lOiBsaW5lLFxyXG4gICAgICAgIGNoOiB3b3JkU3RhcnRcclxuICAgICAgfSxcclxuICAgICAgZW5kOiB7XHJcbiAgICAgICAgbGluZTogbGluZSxcclxuICAgICAgICBjaDogd29yZEVuZFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldE1vbWVudChkYXRlOiBEYXRlKTogYW55IHtcclxuICAgIHJldHVybiAod2luZG93IGFzIGFueSkubW9tZW50KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgIHZhciBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRNb21lbnQoZGF0ZSkuZm9ybWF0KHRoaXMuc2V0dGluZ3MuZm9ybWF0KTtcclxuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0dGVkVGltZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgIHZhciBmb3JtYXR0ZWRUaW1lID0gdGhpcy5nZXRNb21lbnQoZGF0ZSkuZm9ybWF0KHRoaXMuc2V0dGluZ3MudGltZUZvcm1hdCk7XHJcbiAgICByZXR1cm4gZm9ybWF0dGVkVGltZTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgQHBhcmFtIGRhdGVTdHJpbmc6IEEgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBkYXRlIGluIG5hdHVyYWwgbGFuZ3VhZ2UsIGUuZy4gdG9kYXksIHRvbW9ycm93LCBuZXh0IHdlZWtcclxuICBAcmV0dXJucyBOTERSZXN1bHQ6IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBkYXRlLCBhIGNsb25lZCBNb21lbnQgYW5kIHRoZSBmb3JtYXR0ZWQgc3RyaW5nLlxyXG5cclxuICAqL1xyXG4gIHBhcnNlRGF0ZShkYXRlU3RyaW5nOiBzdHJpbmcpOiBOTERSZXN1bHQge1xyXG4gICAgbGV0IGRhdGUgPSB0aGlzLmdldFBhcnNlZERhdGUoZGF0ZVN0cmluZyk7XHJcbiAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKTtcclxuICAgIGlmIChmb3JtYXR0ZWREYXRlID09PSBcIkludmFsaWQgZGF0ZVwiKSB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoXCJJbnB1dCBkYXRlIFwiICsgZGF0ZVN0cmluZyArIFwiIGNhbid0IGJlIHBhcnNlZCBieSBubGRhdGVzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgIGZvcm1hdHRlZFN0cmluZzogZm9ybWF0dGVkRGF0ZSxcclxuICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAgbW9tZW50OiB0aGlzLmdldE1vbWVudChkYXRlKSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcGFyc2VUaW1lKGRhdGVTdHJpbmc6IHN0cmluZyk6IE5MRFJlc3VsdCB7XHJcbiAgICBsZXQgZGF0ZSA9IHRoaXMuZ2V0UGFyc2VkRGF0ZShkYXRlU3RyaW5nKTtcclxuICAgIGxldCBmb3JtYXR0ZWRUaW1lID0gdGhpcy5nZXRGb3JtYXR0ZWRUaW1lKGRhdGUpO1xyXG4gICAgaWYgKGZvcm1hdHRlZFRpbWUgPT09IFwiSW52YWxpZCBkYXRlXCIpIHtcclxuICAgICAgY29uc29sZS5kZWJ1ZyhcIklucHV0IGRhdGUgXCIgKyBkYXRlU3RyaW5nICsgXCIgY2FuJ3QgYmUgcGFyc2VkIGJ5IG5sZGF0ZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgZm9ybWF0dGVkU3RyaW5nOiBmb3JtYXR0ZWRUaW1lLFxyXG4gICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICBtb21lbnQ6IHRoaXMuZ2V0TW9tZW50KGRhdGUpLFxyXG4gICAgfTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBvblRyaWdnZXIobW9kZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgYWN0aXZlTGVhZjogYW55ID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XHJcbiAgICBsZXQgZWRpdG9yID0gYWN0aXZlTGVhZi52aWV3LnNvdXJjZU1vZGUuY21FZGl0b3I7XHJcbiAgICB2YXIgY3Vyc29yID0gZWRpdG9yLmdldEN1cnNvcigpO1xyXG4gICAgdmFyIHNlbGVjdGVkVGV4dCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KGVkaXRvcik7XHJcblxyXG4gICAgbGV0IGRhdGUgPSB0aGlzLnBhcnNlRGF0ZShzZWxlY3RlZFRleHQpO1xyXG5cclxuICAgIGlmICghZGF0ZS5tb21lbnQuaXNWYWxpZCgpKSB7XHJcbiAgICAgIGVkaXRvci5zZXRDdXJzb3Ioe1xyXG4gICAgICAgIGxpbmU6IGN1cnNvci5saW5lLFxyXG4gICAgICAgIGNoOiBjdXJzb3IuY2hcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL21vZGUgPT0gXCJyZXBsYWNlXCJcclxuICAgICAgdmFyIG5ld1N0ciA9IGBbWyR7ZGF0ZS5mb3JtYXR0ZWRTdHJpbmd9XV1gO1xyXG5cclxuICAgICAgaWYgKG1vZGUgPT0gXCJsaW5rXCIpIHtcclxuICAgICAgICBuZXdTdHIgPSBgWyR7c2VsZWN0ZWRUZXh0fV0oJHtkYXRlLmZvcm1hdHRlZFN0cmluZ30pYDtcclxuICAgICAgfSBlbHNlIGlmIChtb2RlID09IFwiY2xlYW5cIikge1xyXG4gICAgICAgIG5ld1N0ciA9IGAke2RhdGUuZm9ybWF0dGVkU3RyaW5nfWA7XHJcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PSBcInRpbWVcIikge1xyXG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5wYXJzZVRpbWUoc2VsZWN0ZWRUZXh0KTtcclxuXHJcbiAgICAgICAgbmV3U3RyID0gYCR7dGltZS5mb3JtYXR0ZWRTdHJpbmd9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24obmV3U3RyKTtcclxuICAgICAgdGhpcy5hZGp1c3RDdXJzb3IoZWRpdG9yLCBjdXJzb3IsIG5ld1N0ciwgc2VsZWN0ZWRUZXh0KTtcclxuICAgICAgZWRpdG9yLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGp1c3RDdXJzb3IoZWRpdG9yOiBhbnksIGN1cnNvcjogYW55LCBuZXdTdHI6IHN0cmluZywgb2xkU3RyOiBzdHJpbmcpIHtcclxuICAgIHZhciBjdXJzb3JPZmZzZXQgPSBuZXdTdHIubGVuZ3RoIC0gb2xkU3RyLmxlbmd0aDtcclxuICAgIGVkaXRvci5zZXRDdXJzb3Ioe1xyXG4gICAgICBsaW5lOiBjdXJzb3IubGluZSxcclxuICAgICAgY2g6IGN1cnNvci5jaCArIGN1cnNvck9mZnNldFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXROb3dDb21tYW5kKCkge1xyXG4gICAgbGV0IGFjdGl2ZUxlYWY6IGFueSA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xyXG4gICAgbGV0IGVkaXRvciA9IGFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xyXG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oXHJcbiAgICAgIHRoaXMuZ2V0TW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdChcclxuICAgICAgICBgJHt0aGlzLnNldHRpbmdzLmZvcm1hdH0ke3RoaXMuc2V0dGluZ3Muc2VwYXJhdG9yfSR7dGhpcy5zZXR0aW5ncy50aW1lRm9ybWF0fWBcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldERhdGVDb21tYW5kKCkge1xyXG4gICAgbGV0IGFjdGl2ZUxlYWY6IGFueSA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xyXG4gICAgbGV0IGVkaXRvciA9IGFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xyXG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oXHJcbiAgICAgIHRoaXMuZ2V0TW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCh0aGlzLnNldHRpbmdzLmZvcm1hdClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lQ29tbWFuZCgpIHtcclxuICAgIGxldCBhY3RpdmVMZWFmOiBhbnkgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZjtcclxuICAgIGxldCBlZGl0b3IgPSBhY3RpdmVMZWFmLnZpZXcuc291cmNlTW9kZS5jbUVkaXRvcjtcclxuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKFxyXG4gICAgICB0aGlzLmdldE1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQodGhpcy5zZXR0aW5ncy50aW1lRm9ybWF0KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGluc2VydERhdGVTdHJpbmcoZGF0ZVN0cmluZzogc3RyaW5nLCBlZGl0b3I6IGFueSwgY3Vyc29yOiBhbnkpIHtcclxuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGRhdGVTdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZVJhbmdlKCkge31cclxuXHJcbiAgYXN5bmMgYWN0aW9uSGFuZGxlcihwYXJhbXM6IGFueSkge1xyXG5cclxuICAgIGxldCBkYXRlID0gdGhpcy5wYXJzZURhdGUocGFyYW1zLmRheSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRlKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgd29ya3NwYWNlXHJcbiAgICB9ID0gdGhpcy5hcHA7XHJcblxyXG4gICAgaWYgKGRhdGUubW9tZW50LmlzVmFsaWQoKSkge1xyXG4gICAgICBsZXQgZGFpbHlOb3RlID0gYXdhaXQgdGhpcy5nZXREYWlseU5vdGUoZGF0ZS5tb21lbnQpO1xyXG4gICAgICBjb25zdCBsZWFmID0gd29ya3NwYWNlLnNwbGl0QWN0aXZlTGVhZigpO1xyXG4gICAgICBhd2FpdCBsZWFmLm9wZW5GaWxlKGRhaWx5Tm90ZSk7XHJcblxyXG4gICAgICB3b3Jrc3BhY2Uuc2V0QWN0aXZlTGVhZihsZWFmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldERhaWx5Tm90ZShkYXRlOiBhbnkpIHtcclxuICAgIC8vIEJvcnJvd2VkIGZyb20gdGhlIFNsYXRlZCBwbHVnaW46XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGdyb3Npbmdlci9zbGF0ZWQtb2JzaWRpYW4vYmxvYi9tYWluL3NyYy92YXVsdC50cyNMMTdcclxuICAgIGNvbnN0IGRlc2lyZWROb3RlID0gZ2V0RGFpbHlOb3RlKGRhdGUsIGdldEFsbERhaWx5Tm90ZXMoKSk7XHJcbiAgICBpZiAoZGVzaXJlZE5vdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJOb3RlIGV4aXN0c1wiKVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlc2lyZWROb3RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgZGFpbHkgbm90ZVwiKVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNyZWF0ZURhaWx5Tm90ZShkYXRlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuaW50ZXJmYWNlIE5MRFNldHRpbmdzIHtcclxuICBmb3JtYXQ6IHN0cmluZztcclxuICB0aW1lRm9ybWF0OiBzdHJpbmc7XHJcbiAgc2VwYXJhdG9yOiBzdHJpbmc7XHJcbiAgd2Vla1N0YXJ0OiBzdHJpbmc7XHJcbiAgbW9kYWxUb2dnbGVUaW1lOiBib29sZWFuO1xyXG4gIG1vZGFsVG9nZ2xlTGluazogYm9vbGVhbjtcclxuICBtb2RhbE1vbWVudEZvcm1hdDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBOTERTZXR0aW5ncyA9IHtcclxuICBmb3JtYXQ6IFwiWVlZWS1NTS1ERFwiLFxyXG4gIHRpbWVGb3JtYXQ6IFwiSEg6bW1cIixcclxuICBzZXBhcmF0b3I6IFwiIFwiLFxyXG4gIHdlZWtTdGFydDogXCJNb25kYXlcIixcclxuICBtb2RhbFRvZ2dsZVRpbWU6IGZhbHNlLFxyXG4gIG1vZGFsVG9nZ2xlTGluazogZmFsc2UsXHJcbiAgbW9kYWxNb21lbnRGb3JtYXQ6IFwiWVlZWS1NTS1ERCBISDptbVwiLFxyXG59XHJcblxyXG5jbGFzcyBOTERTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG4gIHBsdWdpbjogTmF0dXJhbExhbmd1YWdlRGF0ZXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE5hdHVyYWxMYW5ndWFnZURhdGVzKSB7XHJcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICB9XHJcblxyXG5cclxuICBkaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgbGV0IHtcclxuICAgICAgY29udGFpbmVyRWxcclxuICAgIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKFwiRGF0ZSBmb3JtYXRcIilcclxuICAgICAgLnNldERlc2MoXCJPdXRwdXQgZm9ybWF0IGZvciBwYXJzZWQgZGF0ZXNcIilcclxuICAgICAgLmFkZE1vbWVudEZvcm1hdCgodGV4dCkgPT5cclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgLnNldERlZmF1bHRGb3JtYXQoXCJZWVlZLU1NLUREXCIpXHJcbiAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmZvcm1hdClcclxuICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZm9ybWF0ID0gXCJZWVlZLU1NLUREXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5mb3JtYXQgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAuc2V0TmFtZShcIldlZWsgc3RhcnRzIG9uXCIpXHJcbiAgICAgIC5zZXREZXNjKFwiV2hpY2ggZGF5IHRvIGNvbnNpZGVyIGFzIHRoZSBzdGFydCBvZiB0aGUgd2Vla1wiKVxyXG4gICAgICAuYWRkRHJvcGRvd24oKGRheSkgPT5cclxuICAgICAgICBkYXlcclxuICAgICAgICAuYWRkT3B0aW9uKFwiTW9uZGF5XCIsIFwiTW9uZGF5XCIpXHJcbiAgICAgICAgLmFkZE9wdGlvbihcIlN1bmRheVwiLCBcIlN1bmRheVwiKVxyXG4gICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy53ZWVrU3RhcnQpXHJcbiAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Mud2Vla1N0YXJ0ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHtcclxuICAgICAgdGV4dDogXCJIb3RrZXkgZm9ybWF0dGluZyBzZXR0aW5nc1wiXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoXCJUaW1lIGZvcm1hdFwiKVxyXG4gICAgICAuc2V0RGVzYyhcIkZvcm1hdCBmb3IgdGhlIGhvdGtleXMgdGhhdCBpbmNsdWRlIHRoZSBjdXJyZW50IHRpbWVcIilcclxuICAgICAgLmFkZE1vbWVudEZvcm1hdCgodGV4dCkgPT5cclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgLnNldERlZmF1bHRGb3JtYXQoXCJISDptbVwiKVxyXG4gICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aW1lRm9ybWF0KVxyXG4gICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aW1lRm9ybWF0ID0gXCJISDptbVwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGltZUZvcm1hdCA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKFwiU2VwYXJhdG9yXCIpXHJcbiAgICAgIC5zZXREZXNjKFwiU2VwYXJhdG9yIGJldHdlZW4gZGF0ZSBhbmQgdGltZSBmb3IgZW50cmllcyB0aGF0IGhhdmUgYm90aFwiKVxyXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiU2VwYXJhdG9yIGlzIGVtcHR5XCIpXHJcbiAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNlcGFyYXRvcilcclxuICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZXBhcmF0b3IgPSB2YWx1ZTtcclxuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQYXJzZU1vbWVudE1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG4gIHBhcnNlZERhdGVTdHJpbmcgPSBcIlwiO1xyXG4gIGFjdGl2ZVZpZXc6IE1hcmtkb3duVmlldztcclxuICBhY3RpdmVFZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yO1xyXG4gIGFjdGl2ZUN1cnNvcjogQ29kZU1pcnJvci5Qb3NpdGlvbjtcclxuICBwbHVnaW46IE5hdHVyYWxMYW5ndWFnZURhdGVzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBOYXR1cmFsTGFuZ3VhZ2VEYXRlcykge1xyXG4gICAgc3VwZXIoYXBwKTtcclxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgdGhpcy5hY3RpdmVWaWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuICAgIGlmICghdGhpcy5hY3RpdmVWaWV3KSByZXR1cm47XHJcbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuYWN0aXZlVmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xyXG4gICAgdGhpcy5hY3RpdmVDdXJzb3IgPSB0aGlzLmFjdGl2ZUVkaXRvci5nZXRDdXJzb3IoKTtcclxuICB9XHJcblxyXG4gIG9uT3BlbigpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIGNvbnRlbnRFbFxyXG4gICAgfSA9IHRoaXM7XHJcblxyXG4gICAgY29udGVudEVsLmFwcGVuZFRleHQoXCJEYXRlOiBcIik7XHJcblxyXG4gICAgbGV0IGlucHV0RGF0ZUZpZWxkID0gbmV3IFRleHRDb21wb25lbnQoY29udGVudEVsKS5zZXRQbGFjZWhvbGRlcihcIkRhdGVcIik7XHJcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoXCJiclwiKTtcclxuICAgIGNvbnRlbnRFbC5hcHBlbmRUZXh0KFwiRm9ybWF0OiBcIik7XHJcblxyXG4gICAgbGV0IG1vbWVudEZvcm1hdEZpZWxkID0gbmV3IE1vbWVudEZvcm1hdENvbXBvbmVudChjb250ZW50RWwpXHJcbiAgICAgIC5zZXREZWZhdWx0Rm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbVwiKVxyXG4gICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubW9kYWxNb21lbnRGb3JtYXQpXHJcbiAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb2RhbE1vbWVudEZvcm1hdCA9IHZhbHVlID8gdmFsdWUgOiBcIllZWVktTU0tREQgSEg6bW1cIjtcclxuICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKFwiYnJcIik7XHJcblxyXG4gICAgY29udGVudEVsLmFwcGVuZFRleHQoXCJBZGQgYXMgbGluaz9cIik7XHJcbiAgICBsZXQgdG9nZ2xlTGluayA9IG5ldyBUb2dnbGVDb21wb25lbnQoY29udGVudEVsKVxyXG4gICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubW9kYWxUb2dnbGVMaW5rKVxyXG4gICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubW9kYWxUb2dnbGVMaW5rID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKFwiYnJcIik7XHJcblxyXG4gICAgbGV0IGlucHV0QnV0dG9uID0gbmV3IEJ1dHRvbkNvbXBvbmVudChjb250ZW50RWwpXHJcbiAgICAgIC5zZXRCdXR0b25UZXh0KFwiSW5zZXJ0IGRhdGVcIilcclxuICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgIGxldCBwYXJzZWREYXRlID0gdGhpcy5wbHVnaW4ucGFyc2VEYXRlKGlucHV0RGF0ZUZpZWxkLmdldFZhbHVlKCkpO1xyXG4gICAgICAgIHRoaXMucGFyc2VkRGF0ZVN0cmluZyA9IHBhcnNlZERhdGUubW9tZW50LmZvcm1hdChcclxuICAgICAgICAgIG1vbWVudEZvcm1hdEZpZWxkLmdldFZhbHVlKClcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghcGFyc2VkRGF0ZS5tb21lbnQuaXNWYWxpZCgpKSB0aGlzLnBhcnNlZERhdGVTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0b2dnbGVMaW5rLmdldFZhbHVlKCkgJiYgdGhpcy5wYXJzZWREYXRlU3RyaW5nICE9PSBcIlwiKVxyXG4gICAgICAgICAgdGhpcy5wYXJzZWREYXRlU3RyaW5nID0gYFtbJHt0aGlzLnBhcnNlZERhdGVTdHJpbmd9XV1gO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRWRpdG9yLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVFZGl0b3Iuc2V0Q3Vyc29yKHRoaXMuYWN0aXZlQ3Vyc29yKTtcclxuICAgICAgICB0aGlzLnBsdWdpbi5pbnNlcnREYXRlU3RyaW5nKFxyXG4gICAgICAgICAgdGhpcy5wYXJzZWREYXRlU3RyaW5nLFxyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFZGl0b3IsXHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUN1cnNvclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICAgIGlucHV0RGF0ZUZpZWxkLmlucHV0RWwuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xvc2UoKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICBjb250ZW50RWxcclxuICAgIH0gPSB0aGlzO1xyXG4gICAgY29udGVudEVsLmVtcHR5KCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwYXRoIiwib2JzaWRpYW4iLCJ0aGlzIiwicmVxdWlyZSQkMCIsInBhdHRlcm5fMSIsInllYXJzXzEiLCJyZXF1aXJlJCQxIiwiZGF5anNfMiIsImNvbnN0YW50c18xIiwiQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XzEiLCJyZXN1bHRzXzEiLCJpbmRleF8xIiwidGltZXVuaXRzXzEiLCJhYnN0cmFjdFJlZmluZXJzXzEiLCJBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xIiwibWVyZ2luZ0NhbGN1bGF0aW9uXzEiLCJFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lcl8xIiwiRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lcl8xIiwiT3ZlcmxhcFJlbW92YWxSZWZpbmVyXzEiLCJyZXF1aXJlJCQyIiwiRm9yd2FyZERhdGVSZWZpbmVyXzEiLCJyZXF1aXJlJCQzIiwiVW5saWtlbHlGb3JtYXRGaWx0ZXJfMSIsInJlcXVpcmUkJDQiLCJJU09Gb3JtYXRQYXJzZXJfMSIsInJlcXVpcmUkJDUiLCJNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyXzEiLCJyZXF1aXJlJCQ2Iiwid2Vla3NfMSIsImVuXzEiLCJyZXN1bHRzIiwiRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcl8xIiwiRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXJfMSIsIkVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyXzEiLCJFTk1vbnRoTmFtZVBhcnNlcl8xIiwiRU5DYXN1YWxZZWFyTW9udGhEYXlQYXJzZXJfMSIsIkVOU2xhc2hNb250aEZvcm1hdFBhcnNlcl8xIiwiRU5UaW1lRXhwcmVzc2lvblBhcnNlcl8xIiwiRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlcl8xIiwicmVxdWlyZSQkNyIsIkVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlcl8xIiwicmVxdWlyZSQkOCIsIkVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEiLCJyZXF1aXJlJCQ5IiwiRU5NZXJnZURhdGVUaW1lUmVmaW5lcl8xIiwicmVxdWlyZSQkMTAiLCJFTkNhc3VhbERhdGVQYXJzZXJfMSIsInJlcXVpcmUkJDExIiwiRU5DYXN1YWxUaW1lUGFyc2VyXzEiLCJyZXF1aXJlJCQxMiIsIkVOV2Vla2RheVBhcnNlcl8xIiwicmVxdWlyZSQkMTMiLCJFTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlcl8xIiwicmVxdWlyZSQkMTQiLCJTbGFzaERhdGVGb3JtYXRQYXJzZXJfMSIsInJlcXVpcmUkJDE1IiwiRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyXzEiLCJyZXF1aXJlJCQxNiIsImNocm9ub18xIiwiY29uZmlndXJhdGlvbnNfMSIsIkRFQ2FzdWFsVGltZVBhcnNlcl8xIiwiREVUaW1lRXhwcmVzc2lvblBhcnNlcl8xIiwiREVXZWVrZGF5UGFyc2VyXzEiLCJERU1lcmdlRGF0ZVJhbmdlUmVmaW5lcl8xIiwiREVNZXJnZURhdGVUaW1lUmVmaW5lcl8xIiwiREVDYXN1YWxEYXRlUGFyc2VyXzEiLCJERU1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlcl8xIiwiRlJDYXN1YWxEYXRlUGFyc2VyXzEiLCJGUkNhc3VhbFRpbWVQYXJzZXJfMSIsIkZSVGltZUV4cHJlc3Npb25QYXJzZXJfMSIsIkZSTWVyZ2VEYXRlVGltZVJlZmluZXJfMSIsIkZSTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEiLCJGUldlZWtkYXlQYXJzZXJfMSIsIkZSU3BlY2lmaWNUaW1lRXhwcmVzc2lvblBhcnNlcl8xIiwiRlJNb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXJfMSIsIkZSVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXJfMSIsIkZSVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXJfMSIsIkpQU3RhbmRhcmRQYXJzZXJfMSIsIkpQTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEiLCJKUENhc3VhbERhdGVQYXJzZXJfMSIsImRheWpzXzEiLCJQVFdlZWtkYXlQYXJzZXJfMSIsIlBUVGltZUV4cHJlc3Npb25QYXJzZXJfMSIsIlBUTWVyZ2VEYXRlVGltZVJlZmluZXJfMSIsIlBUTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEiLCJQVE1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlcl8xIiwiUFRDYXN1YWxEYXRlUGFyc2VyXzEiLCJQVENhc3VhbFRpbWVQYXJzZXJfMSIsIk5MTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXzEiLCJOTE1lcmdlRGF0ZVRpbWVSZWZpbmVyXzEiLCJOTENhc3VhbERhdGVQYXJzZXJfMSIsIk5MQ2FzdWFsVGltZVBhcnNlcl8xIiwiTkxUaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcl8xIiwiTkxXZWVrZGF5UGFyc2VyXzEiLCJOTE1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlcl8xIiwiTkxNb250aE5hbWVQYXJzZXJfMSIsIk5MU2xhc2hNb250aEZvcm1hdFBhcnNlcl8xIiwiTkxUaW1lRXhwcmVzc2lvblBhcnNlcl8xIiwiTkxDYXN1YWxZZWFyTW9udGhEYXlQYXJzZXJfMSIsIk5MQ2FzdWFsRGF0ZVRpbWVQYXJzZXJfMSIsImVuIiwiZGUiLCJmciIsImphIiwicHQiLCJubCIsImdldERhaWx5Tm90ZSIsImdldEFsbERhaWx5Tm90ZXMiLCJjcmVhdGVEYWlseU5vdGUiLCJQbHVnaW4iLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiIsIk1hcmtkb3duVmlldyIsIlRleHRDb21wb25lbnQiLCJNb21lbnRGb3JtYXRDb21wb25lbnQiLCJUb2dnbGVDb21wb25lbnQiLCJCdXR0b25Db21wb25lbnQiLCJNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFD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VSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDdEQsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxD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QyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FB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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU0sRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxD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R0FBRyxHQUFHLENBQUM7QUFDMUI7Ozs7QUN2TUEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBc0QsY0FBYyxDQUFDLENBQUMsR0FBbUYsQ0FBQyxDQUFDRixjQUFJLENBQUMsVUFBVSxDQUFjLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUNDN3NCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELHdCQUF3QixHQUFHLHlCQUF5QixHQUFHLHlCQUF5QixHQUFHLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3JILFNBQVMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRTtBQUNsRCxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1QyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM5QyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBQ0Qsd0JBQXdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDNUMsU0FBUyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFO0FBQ25ELElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDaEQsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkQsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBQ0QseUJBQXlCLEdBQUcsaUJBQWlCLENBQUM7QUFDOUMsU0FBUyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFO0FBQ25ELElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakQsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNyRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDL0QsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFDRCx5QkFBeUIsR0FBRyxpQkFBaUIsQ0FBQztBQUM5QyxTQUFTLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUU7QUFDbEQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNoRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDcEQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUM5RCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUNELHdCQUF3QixHQUFHLGdCQUFnQjs7OztBQzdCM0MsSUFBSSxlQUFlLEdBQUcsQ0FBQ0EsY0FBSSxJQUFJQSxjQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ3ZFLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxxQkFBcUIsR0FBRyx5QkFBeUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMzRCxNQUFNLGVBQWUsR0FBRyxlQUFlLENBQUNDLGFBQXFDLENBQUMsQ0FBQztBQUMvRSxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUNHLFNBQWdCLENBQUMsQ0FBQztBQUNUO0FBQ3pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRCxNQUFNLGlCQUFpQixDQUFDO0FBQ3hCLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUU7QUFDMUMsUUFBUSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUM5QixRQUFRLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLFFBQVEsSUFBSSxlQUFlLEVBQUU7QUFDN0IsWUFBWSxLQUFLLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBRTtBQUMvQyxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0QsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsRCxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0IsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsS0FBSztBQUNMLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRTtBQUNuQixRQUFRLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDM0MsWUFBWSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0MsU0FBUztBQUNULFFBQVEsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUM3QyxZQUFZLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRCxTQUFTO0FBQ1QsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixLQUFLO0FBQ0wsSUFBSSxJQUFJLEdBQUc7QUFDWCxRQUFRLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3JDLEtBQUs7QUFDTCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDekIsUUFBUSxPQUFPLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzdDLEtBQUs7QUFDTCxJQUFJLG9CQUFvQixHQUFHO0FBQzNCLFFBQVEsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3QyxLQUFLO0FBQ0wsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRTtBQUM1QixRQUFRLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDM0MsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUM5QyxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLEtBQUs7QUFDTCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFO0FBQzdCLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUMsUUFBUSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDN0MsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixLQUFLO0FBQ0wsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO0FBQ3RCLFFBQVEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLFFBQVEsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdDLEtBQUs7QUFDTCxJQUFJLEtBQUssR0FBRztBQUNaLFFBQVEsTUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFDNUQsUUFBUSxTQUFTLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUNuQyxRQUFRLFNBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLFFBQVEsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzVDLFlBQVksU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9ELFNBQVM7QUFDVCxRQUFRLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUM5QyxZQUFZLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRSxTQUFTO0FBQ1QsUUFBUSxPQUFPLFNBQVMsQ0FBQztBQUN6QixLQUFLO0FBQ0wsSUFBSSxVQUFVLEdBQUc7QUFDakIsUUFBUSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pHLEtBQUs7QUFDTCxJQUFJLFVBQVUsR0FBRztBQUNqQixRQUFRLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEcsS0FBSztBQUNMLElBQUksc0JBQXNCLEdBQUc7QUFDN0IsUUFBUSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvRixLQUFLO0FBQ0wsSUFBSSx1QkFBdUIsR0FBRztBQUM5QixRQUFRLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzRixLQUFLO0FBQ0wsSUFBSSxXQUFXLEdBQUc7QUFDbEIsUUFBUSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdEMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtBQUM5QyxZQUFZLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM3RixZQUFZLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hFLFNBQVM7QUFDVCxRQUFRLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUN0RCxZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUM1RCxZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQ3JELFlBQVksT0FBTyxLQUFLLENBQUM7QUFDekIsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDbEYsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN6QixRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUN4RixZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsS0FBSztBQUNMLElBQUksS0FBSyxHQUFHO0FBQ1osUUFBUSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdkMsUUFBUSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDL0MsUUFBUSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFFBQVEsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzlDLFFBQVEsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQy9DLFFBQVEsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ25ELFFBQVEsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ25ELFFBQVEsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzdELFFBQVEsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDekQsUUFBUSxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLHFCQUFxQixDQUFDO0FBQzlILFFBQVEsTUFBTSxvQkFBb0IsR0FBRyxvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBQztBQUNsRixRQUFRLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0QsUUFBUSxPQUFPLE1BQU0sQ0FBQztBQUN0QixLQUFLO0FBQ0wsSUFBSSxRQUFRLEdBQUc7QUFDZixRQUFRLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM5SSxLQUFLO0FBQ0wsSUFBSSxPQUFPLHlCQUF5QixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFDekQsUUFBUSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLFFBQVEsS0FBSyxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUU7QUFDckMsWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakQsU0FBUztBQUNULFFBQVEsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxRCxRQUFRLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDN0UsWUFBWUMsS0FBTyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RCxZQUFZQSxLQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hELFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWUEsS0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2RCxZQUFZLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ2hDLGdCQUFnQixVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0RCxnQkFBZ0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdELGdCQUFnQixVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN2RCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGdCQUFnQixJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN2QyxvQkFBb0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDNUQsaUJBQWlCO0FBQ2pCLGdCQUFnQixVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNyRCxnQkFBZ0IsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDeEMsb0JBQW9CLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqRSxvQkFBb0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0QsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixvQkFBb0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLG9CQUFvQixJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUMzQyx3QkFBd0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDL0QscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6Qix3QkFBd0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULFFBQVEsT0FBTyxVQUFVLENBQUM7QUFDMUIsS0FBSztBQUNMLENBQUM7QUFDRCx5QkFBeUIsR0FBRyxpQkFBaUIsQ0FBQztBQUM5QyxNQUFNLGFBQWEsQ0FBQztBQUNwQixJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQ2xELFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDL0IsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFRLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEUsUUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QixLQUFLO0FBQ0wsSUFBSSxLQUFLLEdBQUc7QUFDWixRQUFRLE1BQU0sTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUUsUUFBUSxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDOUQsUUFBUSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDeEQsUUFBUSxPQUFPLE1BQU0sQ0FBQztBQUN0QixLQUFLO0FBQ0wsSUFBSSxJQUFJLEdBQUc7QUFDWCxRQUFRLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqQyxLQUFLO0FBQ0wsSUFBSSxRQUFRLEdBQUc7QUFDZixRQUFRLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25GLEtBQUs7QUFDTCxDQUFDO0FBQ0QscUJBQXFCLEdBQUcsYUFBYTs7OztBQ3ZMckMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsOENBQThDLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDeEQsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3QyxJQUFJLFdBQVcsR0FBRztBQUNsQixRQUFRLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDdkMsUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUNsQyxLQUFLO0FBQ0wsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3JCLFFBQVEsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4RCxRQUFRLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUNyRCxZQUFZLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUN0QyxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3RixRQUFRLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7QUFDL0MsUUFBUSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDbEMsS0FBSztBQUNMLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDNUIsUUFBUSxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsUUFBUSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsRCxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyRCxRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQy9DLFlBQVksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsU0FBUztBQUNULFFBQVEsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNqRCxLQUFLO0FBQ0wsQ0FBQztBQUNELDhDQUE4QyxHQUFHLHNDQUFzQzs7OztBQzFCdkYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEI7QUFDRTtBQUM2RDtBQUMzRyxNQUFNLG1CQUFtQixHQUFHLElBQUksTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUM7QUFDOUQsSUFBSSxDQUFDLCtEQUErRCxFQUFFQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkgsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLCtEQUErRCxFQUFFQSxXQUFXLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0osTUFBTSw0QkFBNEIsU0FBU0MsOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDbkgsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQzFCLFFBQVEsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQztBQUN6RixLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sU0FBUyxHQUFHRCxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFFBQVEsT0FBT0UsT0FBUyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDakcsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsNEJBQTRCOzs7O0FDaEI5QyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNSO0FBQ1Y7QUFDNUMsTUFBTSxXQUFXLEdBQUdGLFdBQXVCLENBQUM7QUFDNUMsTUFBTSxXQUFXLEdBQUdBLFdBQXVCLENBQUM7QUFDUTtBQUN1RDtBQUMzRyxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUM3QyxJQUFJLFNBQVM7QUFDYixJQUFJLDJDQUEyQztBQUMvQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFDN0MsSUFBSSxJQUFJO0FBQ1IsSUFBSSx5QkFBeUI7QUFDN0IsSUFBSSxHQUFHO0FBQ1AsSUFBSUosT0FBUyxDQUFDLGVBQWUsQ0FBQ0ksV0FBVyxDQUFDLGdCQUFnQixDQUFDO0FBQzNELElBQUksR0FBRztBQUNQLElBQUksS0FBSztBQUNULElBQUksZ0JBQWdCO0FBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7QUFDaEQsSUFBSSxJQUFJO0FBQ1IsSUFBSSxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUMzQixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckIsTUFBTSw2QkFBNkIsU0FBU0MsOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDcEgsSUFBSSxZQUFZLEdBQUc7QUFDbkIsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFFLFFBQVEsTUFBTSxLQUFLLEdBQUdELFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQzFGLFFBQVEsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzdFLFFBQVEsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFO0FBQ3RCLFlBQVksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDakUsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixTQUFTO0FBQ1QsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUMsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUMvQixZQUFZLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDeEUsWUFBWSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDcEQsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLE1BQU0sSUFBSSxHQUFHSCxLQUFPLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbkYsWUFBWSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0MsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDbEMsWUFBWSxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDeEYsWUFBWSxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDOUMsWUFBWSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUMsU0FBUztBQUNULFFBQVEsT0FBTyxNQUFNLENBQUM7QUFDdEIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsNkJBQTZCOzs7O0FDeEQvQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNSO0FBQ1Y7QUFDNUMsTUFBTSxXQUFXLEdBQUdHLFdBQXVCLENBQUM7QUFDNUMsTUFBTSxXQUFXLEdBQUdBLFdBQXVCLENBQUM7QUFDUTtBQUN1RDtBQUMzRyxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUosT0FBUyxDQUFDLGVBQWUsQ0FBQ0ksV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pGLElBQUksb0JBQW9CO0FBQ3hCLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDO0FBQ2xFLElBQUksS0FBSztBQUNULElBQUksZ0JBQWdCO0FBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQztBQUNqRCxJQUFJLElBQUk7QUFDUixJQUFJLEtBQUs7QUFDVCxJQUFJLG9CQUFvQjtBQUN4QixJQUFJLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ25DLElBQUksSUFBSTtBQUNSLElBQUkscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckIsTUFBTSw2QkFBNkIsU0FBU0MsOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDcEgsSUFBSSxZQUFZLEdBQUc7QUFDbkIsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sS0FBSyxHQUFHRCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMxRixRQUFRLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUM3RSxRQUFRLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRTtBQUN0QixZQUFZLE9BQU8sSUFBSSxDQUFDO0FBQ3hCLFNBQVM7QUFDVCxRQUFRLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztBQUMzRCxZQUFZLEdBQUcsRUFBRSxHQUFHO0FBQ3BCLFlBQVksS0FBSyxFQUFFLEtBQUs7QUFDeEIsU0FBUyxDQUFDLENBQUM7QUFDWCxRQUFRLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQy9CLFlBQVksTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNsRSxZQUFZLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxNQUFNLElBQUksR0FBR0gsS0FBTyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25GLFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0MsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUNuQyxZQUFZLE9BQU8sVUFBVSxDQUFDO0FBQzlCLFNBQVM7QUFDVCxRQUFRLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUNwRixRQUFRLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFFLFFBQVEsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7QUFDbEMsUUFBUSxNQUFNLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4QyxRQUFRLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxQyxRQUFRLE9BQU8sTUFBTSxDQUFDO0FBQ3RCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLDZCQUE2Qjs7OztBQ3hEL0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEI7QUFDVTtBQUNGO0FBQ3BELE1BQU0sV0FBVyxHQUFHRyxXQUF1QixDQUFDO0FBQytEO0FBQzNHLE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDO0FBQzFDLElBQUksQ0FBQyxDQUFDLEVBQUVKLE9BQVMsQ0FBQyxlQUFlLENBQUNJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7QUFDN0MsSUFBSSxJQUFJO0FBQ1IsSUFBSSxrQ0FBa0MsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3QyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdkIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0saUJBQWlCLFNBQVNDLDhCQUFnQyxDQUFDLHNDQUFzQyxDQUFDO0FBQ3hHLElBQUksWUFBWSxHQUFHO0FBQ25CLFFBQVEsT0FBTyxPQUFPLENBQUM7QUFDdkIsS0FBSztBQUNMLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakMsUUFBUSxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNoRSxRQUFRLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ0QsV0FBVyxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ3hGLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsU0FBUztBQUNULFFBQVEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwSSxRQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQyxRQUFRLE1BQU0sS0FBSyxHQUFHQSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUQsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUMvQixZQUFZLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbEUsWUFBWSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUMsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLE1BQU0sSUFBSSxHQUFHSCxLQUFPLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakYsWUFBWSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0MsU0FBUztBQUNULFFBQVEsT0FBTyxNQUFNLENBQUM7QUFDdEIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsaUJBQWlCOzs7O0FDeENuQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQjtBQUNRO0FBQ3VEO0FBQzNHLE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUM7QUFDbEQsSUFBSSxDQUFDLElBQUksRUFBRUQsT0FBUyxDQUFDLGVBQWUsQ0FBQ0ksV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsMEJBQTBCLENBQUM7QUFDOUYsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUNsQixJQUFJLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QixNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUM1QixNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUMzQixNQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM3QixNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUM1QixNQUFNLDBCQUEwQixTQUFTQyw4QkFBZ0MsQ0FBQyxzQ0FBc0MsQ0FBQztBQUNqSCxJQUFJLFlBQVksR0FBRztBQUNuQixRQUFRLE9BQU8sT0FBTyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ2pDLFFBQVEsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO0FBQy9DLGNBQWMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pELGNBQWNELFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ2xGLFFBQVEsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7QUFDckMsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixTQUFTO0FBQ1QsUUFBUSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUN4RCxRQUFRLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsT0FBTztBQUNmLFlBQVksR0FBRyxFQUFFLEdBQUc7QUFDcEIsWUFBWSxLQUFLLEVBQUUsS0FBSztBQUN4QixZQUFZLElBQUksRUFBRSxJQUFJO0FBQ3RCLFNBQVMsQ0FBQztBQUNWLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLDBCQUEwQjs7OztBQ2hDNUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDNkM7QUFDM0csTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsa0NBQWtDLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3pFLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQztBQUN0QixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckIsTUFBTSx3QkFBd0IsU0FBU0MsOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDL0csSUFBSSxZQUFZLEdBQUc7QUFDbkIsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNqRCxRQUFRLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNuRCxRQUFRLE9BQU8sT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0csS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsd0JBQXdCOzs7O0FDZjFDLElBQUksZUFBZSxHQUFHLENBQUNQLGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUN2RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsb0NBQW9DLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDUDtBQUN2QyxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUNDLFNBQWdCLENBQUMsQ0FBQztBQUNsRCxTQUFTLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUU7QUFDMUQsSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDLFdBQVc7QUFDakMsUUFBUSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDMUIsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsS0FBSztBQUNiLFFBQVEsaUJBQWlCO0FBQ3pCLFFBQVEsWUFBWTtBQUNwQixRQUFRLEtBQUs7QUFDYixRQUFRLGFBQWE7QUFDckIsUUFBUSxVQUFVO0FBQ2xCLFFBQVEsb0JBQW9CO0FBQzVCLFFBQVEsSUFBSTtBQUNaLFFBQVEsSUFBSTtBQUNaLFFBQVEsc0NBQXNDO0FBQzlDLFFBQVEsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUNELFNBQVMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRTtBQUM5RCxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUM1QyxRQUFRLFlBQVk7QUFDcEIsUUFBUSxLQUFLO0FBQ2IsUUFBUSxpQkFBaUI7QUFDekIsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsS0FBSztBQUNiLFFBQVEsaUJBQWlCO0FBQ3pCLFFBQVEsOEJBQThCO0FBQ3RDLFFBQVEsSUFBSTtBQUNaLFFBQVEsSUFBSTtBQUNaLFFBQVEsc0NBQXNDO0FBQzlDLFFBQVEsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUNELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNyQixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdkIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sNEJBQTRCLENBQUM7QUFDbkMsSUFBSSxXQUFXLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBRTtBQUNwQyxRQUFRLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7QUFDeEMsUUFBUSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0FBQ3hDLFFBQVEsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQztBQUM3QyxRQUFRLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7QUFDekMsUUFBUSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0FBQzFDLFFBQVEsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUM5QyxRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQ3JDLEtBQUs7QUFDTCxJQUFJLGFBQWEsR0FBRztBQUNwQixRQUFRLE9BQU8sV0FBVyxDQUFDO0FBQzNCLEtBQUs7QUFDTCxJQUFJLGVBQWUsR0FBRztBQUN0QixRQUFRLE9BQU8sV0FBVyxDQUFDO0FBQzNCLEtBQUs7QUFDTCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDckIsUUFBUSxPQUFPLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO0FBQ3hELEtBQUs7QUFDTCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQzVCLFFBQVEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekQsUUFBUSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkgsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEQsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pELFFBQVEsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELFFBQVEsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3pFLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDM0IsWUFBWSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDM0MsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixTQUFTO0FBQ1QsUUFBUSxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwRixRQUFRLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQUM7QUFDNUUsUUFBUSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3JELFFBQVEsSUFBSSxDQUFDLEtBQUs7QUFDbEIsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEVBQUU7QUFDckQsWUFBWSxPQUFPLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0RSxTQUFTO0FBQ1QsUUFBUSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pGLFFBQVEsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQ3hCLFlBQVksSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQzVCLGdCQUFnQixNQUFNLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxhQUFhO0FBQ2IsU0FBUztBQUNULFFBQVEsT0FBTyxNQUFNLENBQUM7QUFDdEIsS0FBSztBQUNMLElBQUksNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUcsS0FBSyxFQUFFO0FBQ2pFLFFBQVEsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDN0QsUUFBUSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDckIsUUFBUSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDdkIsUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDNUIsUUFBUSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFFBQVEsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxFQUFFO0FBQ3pDLFlBQVksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQzdFLGdCQUFnQixPQUFPLElBQUksQ0FBQztBQUM1QixhQUFhO0FBQ2IsWUFBWSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ25ELFNBQVM7QUFDVCxhQUFhLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUM3QixZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNqQyxnQkFBZ0IsT0FBTyxJQUFJLENBQUM7QUFDNUIsYUFBYTtBQUNiLFlBQVksTUFBTSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFDaEMsWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDMUMsU0FBUztBQUNULFFBQVEsSUFBSSxNQUFNLElBQUksRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7QUFDdkMsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixTQUFTO0FBQ1QsUUFBUSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7QUFDdkIsWUFBWSxRQUFRLEdBQUdRLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0FBQzNDLFNBQVM7QUFDVCxRQUFRLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxFQUFFO0FBQzdDLFlBQVksSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUN6QixnQkFBZ0IsT0FBTyxJQUFJLENBQUM7QUFDNUIsWUFBWSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsRSxZQUFZLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUM3QixnQkFBZ0IsUUFBUSxHQUFHQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUMvQyxnQkFBZ0IsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO0FBQ2hDLG9CQUFvQixJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsWUFBWSxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7QUFDN0IsZ0JBQWdCLFFBQVEsR0FBR0EsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDL0MsZ0JBQWdCLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtBQUNoQyxvQkFBb0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMvQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDL0IsWUFBWSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNwRCxTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO0FBQzNCLGdCQUFnQixVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsRSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGdCQUFnQixVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsRSxhQUFhO0FBQ2IsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDL0MsWUFBWSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLFlBQVksSUFBSSxXQUFXLElBQUksSUFBSTtBQUNuQyxnQkFBZ0IsT0FBTyxJQUFJLENBQUM7QUFDNUIsWUFBWSxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMxRCxTQUFTO0FBQ1QsUUFBUSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDekMsWUFBWSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDekQsWUFBWSxJQUFJLE1BQU0sSUFBSSxFQUFFO0FBQzVCLGdCQUFnQixPQUFPLElBQUksQ0FBQztBQUM1QixZQUFZLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELFNBQVM7QUFDVCxRQUFRLE9BQU8sVUFBVSxDQUFDO0FBQzFCLEtBQUs7QUFDTCxJQUFJLDhCQUE4QixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQzNELFFBQVEsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDN0QsUUFBUSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLElBQUksRUFBRTtBQUMvQyxZQUFZLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEYsWUFBWSxJQUFJLFdBQVcsSUFBSSxJQUFJO0FBQ25DLGdCQUFnQixPQUFPLElBQUksQ0FBQztBQUM1QixZQUFZLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzFELFNBQVM7QUFDVCxRQUFRLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRTtBQUN6QyxZQUFZLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUN6RCxZQUFZLElBQUksTUFBTSxJQUFJLEVBQUU7QUFDNUIsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDO0FBQzVCLFlBQVksVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEQsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQy9DLFFBQVEsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLFFBQVEsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsUUFBUSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDekMsWUFBWSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ25ELFNBQVM7QUFDVCxhQUFhLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUM3QixZQUFZLE1BQU0sR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2hDLFlBQVksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLFNBQVM7QUFDVCxRQUFRLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO0FBQ3ZDLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO0FBQ3hCLFlBQVksUUFBUSxHQUFHQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUMzQyxTQUFTO0FBQ1QsUUFBUSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksRUFBRTtBQUM3QyxZQUFZLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtBQUMzQixnQkFBZ0IsT0FBTyxJQUFJLENBQUM7QUFDNUIsYUFBYTtBQUNiLFlBQVksTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEUsWUFBWSxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7QUFDN0IsZ0JBQWdCLFFBQVEsR0FBR0EsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDL0MsZ0JBQWdCLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtBQUNoQyxvQkFBb0IsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUM3QixvQkFBb0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdEQsd0JBQXdCLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0UscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsWUFBWSxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7QUFDN0IsZ0JBQWdCLFFBQVEsR0FBR0EsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDL0MsZ0JBQWdCLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDOUIsb0JBQW9CLElBQUksSUFBSSxFQUFFLENBQUM7QUFDL0IsYUFBYTtBQUNiLFlBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ3JELGdCQUFnQixJQUFJLFFBQVEsSUFBSUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7QUFDckQsb0JBQW9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4RSxvQkFBb0IsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUU7QUFDeEQsd0JBQXdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RCxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixvQkFBb0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUN4RCx3QkFBd0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ25GLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsUUFBUSxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFDM0IsWUFBWSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNwRCxTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2xHLFlBQVksSUFBSSxTQUFTLEVBQUU7QUFDM0IsZ0JBQWdCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRTtBQUMxRCxvQkFBb0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEUsaUJBQWlCO0FBQ2pCLHFCQUFxQixJQUFJLElBQUksSUFBSSxFQUFFLEVBQUU7QUFDckMsb0JBQW9CLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN6RCxvQkFBb0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkUsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixpQkFBaUIsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO0FBQ2hDLGdCQUFnQixVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsRSxhQUFhO0FBQ2IsaUJBQWlCLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtBQUNqQyxnQkFBZ0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEUsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7QUFDekUsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFNBQVM7QUFDVCxRQUFRLE9BQU8sVUFBVSxDQUFDO0FBQzFCLEtBQUs7QUFDTCxJQUFJLHFDQUFxQyxDQUFDLE1BQU0sRUFBRTtBQUNsRCxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDdkMsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixTQUFTO0FBQ1QsUUFBUSxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDMUUsUUFBUSxJQUFJLGlCQUFpQixFQUFFO0FBQy9CLFlBQVksTUFBTSxhQUFhLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDakMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDO0FBQzVCLGFBQWE7QUFDYixZQUFZLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUU7QUFDdEYsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDO0FBQzVCLGFBQWE7QUFDYixZQUFZLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM1RCxZQUFZLElBQUksZUFBZSxHQUFHLEVBQUUsRUFBRTtBQUN0QyxnQkFBZ0IsT0FBTyxJQUFJLENBQUM7QUFDNUIsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLE9BQU8sTUFBTSxDQUFDO0FBQ3RCLEtBQUs7QUFDTCxJQUFJLGlDQUFpQyxHQUFHO0FBQ3hDLFFBQVEsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ25ELFFBQVEsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ25ELFFBQVEsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssYUFBYSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxhQUFhLEVBQUU7QUFDdEcsWUFBWSxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztBQUNqRCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3pGLFFBQVEsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQztBQUNqRCxRQUFRLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxhQUFhLENBQUM7QUFDakQsUUFBUSxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztBQUM3QyxLQUFLO0FBQ0wsSUFBSSxtQ0FBbUMsR0FBRztBQUMxQyxRQUFRLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNyRCxRQUFRLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN2RCxRQUFRLElBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLGNBQWMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEtBQUssZUFBZSxFQUFFO0FBQzVHLFlBQVksT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7QUFDbEQsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLHlCQUF5QixHQUFHLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUM5RixRQUFRLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxjQUFjLENBQUM7QUFDbkQsUUFBUSxJQUFJLENBQUMscUJBQXFCLEdBQUcsZUFBZSxDQUFDO0FBQ3JELFFBQVEsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7QUFDOUMsS0FBSztBQUNMLENBQUM7QUFDRCxvQ0FBb0MsR0FBRyw0QkFBNEI7Ozs7QUNuU25FLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCO0FBQzZEO0FBQ3ZHLE1BQU0sc0JBQXNCLFNBQVMsOEJBQThCLENBQUMsNEJBQTRCLENBQUM7QUFDakcsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO0FBQzVCLFFBQVEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFCLEtBQUs7QUFDTCxJQUFJLGNBQWMsR0FBRztBQUNyQixRQUFRLE9BQU8sb0NBQW9DLENBQUM7QUFDcEQsS0FBSztBQUNMLElBQUksYUFBYSxHQUFHO0FBQ3BCLFFBQVEsT0FBTyx1QkFBdUIsQ0FBQztBQUN2QyxLQUFLO0FBQ0wsSUFBSSxhQUFhLEdBQUc7QUFDcEIsUUFBUSxPQUFPLGlGQUFpRixDQUFDO0FBQ2pHLEtBQUs7QUFDTCxJQUFJLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakQsUUFBUSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlFLFFBQVEsSUFBSSxVQUFVLEVBQUU7QUFDeEIsWUFBWSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDNUMsZ0JBQWdCLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEQsZ0JBQWdCLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO0FBQzVDLG9CQUFvQixVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNFLG9CQUFvQixVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2RSxpQkFBaUI7QUFDakIscUJBQXFCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtBQUNuQyxvQkFBb0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkUsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixZQUFZLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUNoRCxnQkFBZ0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkUsZ0JBQWdCLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEQsZ0JBQWdCLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO0FBQzVDLG9CQUFvQixVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNFLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsWUFBWSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDOUMsZ0JBQWdCLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLGdCQUFnQixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BELGdCQUFnQixJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7QUFDL0Isb0JBQW9CLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN0RSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLE9BQU8sVUFBVSxDQUFDO0FBQzFCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLHNCQUFzQjs7OztBQy9DeEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsMkJBQTJCLEdBQUcsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDaEUsU0FBUyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7QUFDckMsSUFBSSxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDeEIsSUFBSSxLQUFLLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRTtBQUNqQyxRQUFRLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxLQUFLO0FBQ0wsSUFBSSxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBQ0Qsd0JBQXdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDNUMsU0FBUyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFO0FBQ3BELElBQUksTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RDLElBQUksSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xDLElBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUU7QUFDakMsUUFBUSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0MsS0FBSztBQUNMLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxPQUFPLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7QUFDdEgsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6QyxRQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxRQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLEtBQUs7QUFDTCxJQUFJLElBQUksUUFBUSxJQUFJLFNBQVMsSUFBSSxRQUFRLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7QUFDL0UsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUM5QyxRQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLFFBQVEsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDMUMsS0FBSztBQUNMLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUNELDJCQUEyQixHQUFHLG1CQUFtQjs7OztBQzVCakQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEI7QUFDRTtBQUM2RDtBQUNuRDtBQUN4RCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHSCxXQUFXLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLHFDQUFxQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3pILE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUdBLFdBQVcsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0csTUFBTSx5QkFBeUIsU0FBU0MsOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDaEgsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO0FBQzVCLFFBQVEsS0FBSyxFQUFFLENBQUM7QUFDaEIsUUFBUSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUNyQyxLQUFLO0FBQ0wsSUFBSSxZQUFZLEdBQUc7QUFDbkIsUUFBUSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxHQUFHLE9BQU8sQ0FBQztBQUMxRCxLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sU0FBUyxHQUFHRCxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFFBQVEsTUFBTSxlQUFlLEdBQUdJLFNBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4RSxRQUFRLE9BQU9GLE9BQVMsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZHLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLHlCQUF5Qjs7OztBQ3JCM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEI7QUFDRTtBQUM2RDtBQUMzRyxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHRixXQUFXLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLCtDQUErQyxHQUFHLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNySixNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHQSxXQUFXLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixHQUFHLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvSCxNQUFNLG1CQUFtQixHQUFHLENBQUMsQ0FBQztBQUM5QixNQUFNLDJCQUEyQixTQUFTQyw4QkFBZ0MsQ0FBQyxzQ0FBc0MsQ0FBQztBQUNsSCxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7QUFDNUIsUUFBUSxLQUFLLEVBQUUsQ0FBQztBQUNoQixRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQ3JDLEtBQUs7QUFDTCxJQUFJLFlBQVksR0FBRztBQUNuQixRQUFRLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDO0FBQzFELEtBQUs7QUFDTCxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ2pDLFFBQVEsTUFBTSxTQUFTLEdBQUdELFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUNqRixRQUFRLE9BQU9FLE9BQVMsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pHLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLDJCQUEyQjs7OztBQ3BCN0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsc0JBQXNCLEdBQUcsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pELE1BQU0sTUFBTSxDQUFDO0FBQ2IsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUM3QixRQUFRLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELEtBQUs7QUFDTCxDQUFDO0FBQ0QsY0FBYyxHQUFHLE1BQU0sQ0FBQztBQUN4QixNQUFNLGNBQWMsQ0FBQztBQUNyQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQzdCLFFBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNoQyxZQUFZLE9BQU8sT0FBTyxDQUFDO0FBQzNCLFNBQVM7QUFDVCxRQUFRLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUNqQyxRQUFRLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxRQUFRLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztBQUM5QixRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pELFlBQVksVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxZQUFZLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xILFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRTtBQUN2RixnQkFBZ0IsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QyxnQkFBZ0IsU0FBUyxHQUFHLFVBQVUsQ0FBQztBQUN2QyxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGdCQUFnQixNQUFNLElBQUksR0FBRyxTQUFTLENBQUM7QUFDdkMsZ0JBQWdCLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUN6QyxnQkFBZ0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxRixnQkFBZ0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQ3BDLG9CQUFvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ25CLGdCQUFnQixTQUFTLEdBQUcsWUFBWSxDQUFDO0FBQ3pDLGFBQWE7QUFDYixTQUFTO0FBQ1QsUUFBUSxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7QUFDL0IsWUFBWSxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFDLFNBQVM7QUFDVCxRQUFRLE9BQU8sYUFBYSxDQUFDO0FBQzdCLEtBQUs7QUFDTCxDQUFDO0FBQ0Qsc0JBQXNCLEdBQUcsY0FBYzs7OztBQ3ZDdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDSjtBQUMxRCxNQUFNLDZCQUE2QixTQUFTRyxnQkFBa0IsQ0FBQyxjQUFjLENBQUM7QUFDOUUsSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRTtBQUMvRCxRQUFRLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUN6RyxLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7QUFDcEQsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO0FBQ3BHLFlBQVksUUFBUSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUNuRSxnQkFBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RELG9CQUFvQixVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxRSxpQkFBaUI7QUFDakIsYUFBYSxDQUFDLENBQUM7QUFDZixZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUs7QUFDckUsZ0JBQWdCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNwRCxvQkFBb0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUUsaUJBQWlCO0FBQ2pCLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsU0FBUztBQUNULFFBQVEsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7QUFDakYsWUFBWSxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RELFlBQVksSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsRCxZQUFZLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzVHLGdCQUFnQixVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4RCxnQkFBZ0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFnQixVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLGdCQUFnQixVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEUsYUFBYTtBQUNiLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDN0csZ0JBQWdCLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuRCxnQkFBZ0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdELGdCQUFnQixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLGdCQUFnQixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDaEUsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMxQyxRQUFRLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztBQUN4QyxRQUFRLE1BQU0sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNwQyxRQUFRLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRSxRQUFRLElBQUksVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQy9DLFlBQVksTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3hFLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDeEUsU0FBUztBQUNULFFBQVEsT0FBTyxNQUFNLENBQUM7QUFDdEIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsNkJBQTZCOzs7O0FDbkQvQyxJQUFJLGVBQWUsR0FBRyxDQUFDWCxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxHQUFHLEVBQUU7QUFDdkUsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELE1BQU1ZLGlDQUErQixHQUFHLGVBQWUsQ0FBQ1gsK0JBQWlFLENBQUMsQ0FBQztBQUMzSCxNQUFNLHVCQUF1QixTQUFTVyxpQ0FBK0IsQ0FBQyxPQUFPLENBQUM7QUFDOUUsSUFBSSxjQUFjLEdBQUc7QUFDckIsUUFBUSxPQUFPLGlCQUFpQixDQUFDO0FBQ2pDLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLHVCQUF1Qjs7OztBQ1Z6QyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCw4QkFBOEIsR0FBRywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNsQztBQUNwQyxTQUFTLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDckQsSUFBSSxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdEMsSUFBSSxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO0FBQ3ZDLElBQUksTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztBQUN2QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hFLElBQUksSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTtBQUMxRCxRQUFRLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUNuRixRQUFRLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUNuRixRQUFRLE1BQU0sV0FBVyxHQUFHLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyRSxRQUFRLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7QUFDcEcsWUFBWSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDOUMsZ0JBQWdCLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdEUsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixnQkFBZ0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRSxhQUFhO0FBQ2IsU0FBUztBQUNULFFBQVEsTUFBTSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7QUFDakMsS0FBSztBQUNMLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUNELDJCQUEyQixHQUFHLG1CQUFtQixDQUFDO0FBQ2xELFNBQVMsc0JBQXNCLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRTtBQUM5RCxJQUFJLE1BQU0saUJBQWlCLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BELElBQUksSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3pDLFFBQVEsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEUsUUFBUSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN4RSxRQUFRLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMvQyxZQUFZLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzVFLFlBQVksSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQ3hELGdCQUFnQixpQkFBaUIsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUMxRixhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGdCQUFnQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUN6RixhQUFhO0FBQ2IsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzNFLFlBQVksaUJBQWlCLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDckYsU0FBUztBQUNULEtBQUs7QUFDTCxTQUFTO0FBQ1QsUUFBUSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNuRSxRQUFRLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFFBQVEsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDdkUsUUFBUSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUNqRixLQUFLO0FBQ0wsSUFBSSxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtBQUNuRCxRQUFRLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUN4RixLQUFLO0FBQ0wsSUFBSSxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDN0MsUUFBUSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUM1RSxLQUFLO0FBQ0wsU0FBUyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDakcsUUFBUSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUMzRSxLQUFLO0FBQ0wsSUFBSSxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSUgsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUN4RyxRQUFRLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM3QyxZQUFZLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2pGLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNoRixTQUFTO0FBQ1QsS0FBSztBQUNMLElBQUksT0FBTyxpQkFBaUIsQ0FBQztBQUM3QixDQUFDO0FBQ0QsOEJBQThCLEdBQUcsc0JBQXNCOzs7O0FDckV2RCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNKO0FBQ21CO0FBQzdFLE1BQU0sc0JBQXNCLFNBQVNFLGdCQUFrQixDQUFDLGNBQWMsQ0FBQztBQUN2RSxJQUFJLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFO0FBQy9ELFFBQVEsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtBQUNuRixhQUFhLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMvRSxZQUFZLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO0FBQzlELEtBQUs7QUFDTCxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRTtBQUN6RCxRQUFRLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ3ZELGNBQWNFLGtCQUFvQixDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7QUFDakYsY0FBY0Esa0JBQW9CLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2xGLFFBQVEsTUFBTSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQ3pFLFFBQVEsT0FBTyxNQUFNLENBQUM7QUFDdEIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsc0JBQXNCOzs7O0FDbEJ4QyxJQUFJLGVBQWUsR0FBRyxDQUFDYixjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxHQUFHLEVBQUU7QUFDdkUsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELE1BQU0sOEJBQThCLEdBQUcsZUFBZSxDQUFDQyw0QkFBZ0UsQ0FBQyxDQUFDO0FBQ3pILE1BQU0sc0JBQXNCLFNBQVMsOEJBQThCLENBQUMsT0FBTyxDQUFDO0FBQzVFLElBQUksY0FBYyxHQUFHO0FBQ3JCLFFBQVEsT0FBTyxJQUFJLE1BQU0sQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ3RFLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLHNCQUFzQjs7OztBQ1Z4QyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxNQUFNLHFCQUFxQixHQUFHLElBQUksTUFBTSxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BGLE1BQU0seUJBQXlCLEdBQUc7QUFDbEMsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLElBQUksRUFBRSxDQUFDLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQ2QsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxLQUFLLEVBQUUsR0FBRztBQUNkLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0FBQ2IsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQ2QsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsRUFBRTtBQUNYLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsRUFBRTtBQUNYLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxJQUFJLEtBQUssRUFBRSxHQUFHO0FBQ2QsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQ2QsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHO0FBQ2YsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQ2QsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRTtBQUNaLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRztBQUNaLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQ2QsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQ2QsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQ2QsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1YsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRztBQUNkLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRztBQUNkLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRTtBQUNaLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEtBQUssRUFBRSxHQUFHO0FBQ2QsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRztBQUNkLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsRUFBRTtBQUNYLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxLQUFLLEVBQUUsR0FBRztBQUNkLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEtBQUssRUFBRSxHQUFHO0FBQ2QsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLElBQUksRUFBRSxDQUFDLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRztBQUNkLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRztBQUNkLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1YsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQ2QsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztBQUNiLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxFQUFFO0FBQ1gsSUFBSSxJQUFJLEVBQUUsRUFBRTtBQUNaLElBQUksSUFBSSxFQUFFLEVBQUU7QUFDWixJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1YsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNWLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLElBQUksRUFBRSxDQUFDLEdBQUc7QUFDZCxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUNULElBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsQ0FBQyxDQUFDO0FBQ0YsTUFBTSwwQkFBMEIsQ0FBQztBQUNqQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtBQUNuQyxRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSx5QkFBeUIsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDdkcsS0FBSztBQUNMLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDN0IsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUNmLFFBQVEsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsTUFBTSxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDdEcsUUFBUSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLO0FBQ3BDLFlBQVksSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ3ZCLFlBQVksTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JGLFlBQVksTUFBTSxLQUFLLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdELFlBQVksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUN4QixnQkFBZ0IsT0FBTztBQUN2QixhQUFhO0FBQ2IsWUFBWSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDeEQsWUFBWSxNQUFNLHVCQUF1QixHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzdMLFlBQVksSUFBSSx1QkFBdUIsS0FBSyxJQUFJLEVBQUU7QUFDbEQsZ0JBQWdCLE9BQU87QUFDdkIsYUFBYTtBQUNiLFlBQVksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQ2hDLGdCQUFnQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDLFNBQVMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RyxhQUFhLENBQUMsQ0FBQztBQUNmLFlBQVksTUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdFLFlBQVksSUFBSSxxQkFBcUIsS0FBSyxJQUFJLElBQUksdUJBQXVCLElBQUkscUJBQXFCLEVBQUU7QUFDcEcsZ0JBQWdCLE9BQU87QUFDdkIsYUFBYTtBQUNiLFlBQVksTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsWUFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtBQUMzRCxnQkFBZ0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztBQUMvRSxhQUFhO0FBQ2IsWUFBWSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtBQUMvRSxnQkFBZ0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztBQUM3RSxhQUFhO0FBQ2IsU0FBUyxDQUFDLENBQUM7QUFDWCxRQUFRLE9BQU8sT0FBTyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLDBCQUEwQjs7OztBQ3hPNUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLE1BQU0sQ0FBQywwREFBMEQsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1RyxNQUFNLDBCQUEwQixHQUFHLENBQUMsQ0FBQztBQUNyQyxNQUFNLGlDQUFpQyxHQUFHLENBQUMsQ0FBQztBQUM1QyxNQUFNLG1DQUFtQyxHQUFHLENBQUMsQ0FBQztBQUM5QyxNQUFNLDRCQUE0QixDQUFDO0FBQ25DLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDN0IsUUFBUSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQzFDLFlBQVksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQzFELGdCQUFnQixPQUFPO0FBQ3ZCLGFBQWE7QUFDYixZQUFZLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyRixZQUFZLE1BQU0sS0FBSyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvRCxZQUFZLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDeEIsZ0JBQWdCLE9BQU87QUFDdkIsYUFBYTtBQUNiLFlBQVksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQ2hDLGdCQUFnQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkYsYUFBYSxDQUFDLENBQUM7QUFDZixZQUFZLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLFlBQVksTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQzdGLFlBQVksSUFBSSxjQUFjLEdBQUcsVUFBVSxHQUFHLEVBQUUsR0FBRyxZQUFZLENBQUM7QUFDaEUsWUFBWSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUMzRCxnQkFBZ0IsY0FBYyxHQUFHLENBQUMsY0FBYyxDQUFDO0FBQ2pELGFBQWE7QUFDYixZQUFZLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDcEMsZ0JBQWdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3BFLGFBQWE7QUFDYixZQUFZLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ2xFLFlBQVksTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsU0FBUyxDQUFDLENBQUM7QUFDWCxRQUFRLE9BQU8sT0FBTyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLDRCQUE0Qjs7OztBQ2xDOUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QixJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQzdCLFFBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNoQyxZQUFZLE9BQU8sT0FBTyxDQUFDO0FBQzNCLFNBQVM7QUFDVCxRQUFRLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUNuQyxRQUFRLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pELFlBQVksTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLFlBQVksSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDMUUsZ0JBQWdCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDakUsb0JBQW9CLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDeEMsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsZ0JBQWdCLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakQsZ0JBQWdCLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDcEMsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtBQUNoQyxZQUFZLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0MsU0FBUztBQUNULFFBQVEsT0FBTyxlQUFlLENBQUM7QUFDL0IsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcscUJBQXFCOzs7O0FDMUJ2QyxJQUFJLGVBQWUsR0FBRyxDQUFDRCxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxHQUFHLEVBQUU7QUFDdkUsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQ0MsU0FBZ0IsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sa0JBQWtCLENBQUM7QUFDekIsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUM3QixRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtBQUN6QyxZQUFZLE9BQU8sT0FBTyxDQUFDO0FBQzNCLFNBQVM7QUFDVCxRQUFRLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFDMUMsWUFBWSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3RCxZQUFZLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFO0FBQ25HLGdCQUFnQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZGLG9CQUFvQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0Usb0JBQW9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTTtBQUN4Qyx3QkFBd0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9GLHFCQUFxQixDQUFDLENBQUM7QUFDdkIsb0JBQW9CLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3JFLHdCQUF3QixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0Usd0JBQXdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTTtBQUM1Qyw0QkFBNEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pHLHlCQUF5QixDQUFDLENBQUM7QUFDM0IscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsWUFBWSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtBQUNsRyxnQkFBZ0IsSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDbkUsb0JBQW9CLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9FLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsb0JBQW9CLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsaUJBQWlCO0FBQ2pCLGdCQUFnQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDNUQsZ0JBQWdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkUsZ0JBQWdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM3RCxnQkFBZ0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQ3BDLG9CQUFvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0YsaUJBQWlCLENBQUMsQ0FBQztBQUNuQixnQkFBZ0IsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsRUFBRTtBQUN2RSxvQkFBb0IsSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDckUsd0JBQXdCLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsd0JBQXdCLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDN0UscUJBQXFCO0FBQ3JCLG9CQUFvQixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsb0JBQW9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckUsb0JBQW9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMvRCxvQkFBb0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQ3hDLHdCQUF3QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0YscUJBQXFCLENBQUMsQ0FBQztBQUN2QixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyxrQkFBa0I7Ozs7QUMxRHBDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ0o7QUFDMUQsTUFBTSxvQkFBb0IsU0FBU1UsZ0JBQWtCLENBQUMsTUFBTSxDQUFDO0FBQzdELElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtBQUM1QixRQUFRLEtBQUssRUFBRSxDQUFDO0FBQ2hCLFFBQVEsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDckMsS0FBSztBQUNMLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDN0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUU7QUFDakUsWUFBWSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07QUFDaEMsZ0JBQWdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekUsYUFBYSxDQUFDLENBQUM7QUFDZixZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFO0FBQ3pDLFlBQVksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQ2hDLGdCQUFnQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEYsYUFBYSxDQUFDLENBQUM7QUFDZixZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFNBQVM7QUFDVCxRQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUU7QUFDckQsWUFBWSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07QUFDaEMsZ0JBQWdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRixhQUFhLENBQUMsQ0FBQztBQUNmLFlBQVksT0FBTyxLQUFLLENBQUM7QUFDekIsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzdCLFlBQVksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNELFNBQVM7QUFDVCxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLEtBQUs7QUFDTCxJQUFJLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDdkMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsRUFBRTtBQUNuRCxZQUFZLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTTtBQUNoQyxnQkFBZ0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLDBDQUEwQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25HLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN6QixTQUFTO0FBQ1QsUUFBUSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDakgsWUFBWSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07QUFDaEMsZ0JBQWdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyw0Q0FBNEMsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRyxhQUFhLENBQUMsQ0FBQztBQUNmLFlBQVksT0FBTyxLQUFLLENBQUM7QUFDekIsU0FBUztBQUNULFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsb0JBQW9COzs7O0FDL0N0QyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN1QjtBQUNyRixNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQywwQ0FBMEM7QUFDckUsSUFBSSxNQUFNO0FBQ1YsSUFBSSwyQkFBMkI7QUFDL0IsSUFBSSxLQUFLO0FBQ1QsSUFBSSxpQ0FBaUM7QUFDckMsSUFBSSxJQUFJO0FBQ1IsSUFBSSxLQUFLO0FBQ1QsSUFBSSwyQkFBMkI7QUFDL0IsSUFBSSxJQUFJO0FBQ1IsSUFBSSxJQUFJO0FBQ1IsSUFBSSxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEIsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFDN0IsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDOUIsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLENBQUM7QUFDbkMsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLENBQUM7QUFDbEMsTUFBTSxlQUFlLFNBQVNKLDhCQUFnQyxDQUFDLHNDQUFzQyxDQUFDO0FBQ3RHLElBQUksWUFBWSxHQUFHO0FBQ25CLFFBQVEsT0FBTyxPQUFPLENBQUM7QUFDdkIsS0FBSztBQUNMLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakMsUUFBUSxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDOUIsUUFBUSxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFDaEUsUUFBUSxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDbEUsUUFBUSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFDL0QsUUFBUSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksRUFBRTtBQUM5QyxZQUFZLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUNwRSxZQUFZLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUN4RSxZQUFZLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksSUFBSSxFQUFFO0FBQ3BELGdCQUFnQixVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFDNUUsYUFBYTtBQUNiLFlBQVksSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDekQsZ0JBQWdCLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztBQUN0RixhQUFhO0FBQ2IsWUFBWSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksRUFBRTtBQUN0RCxnQkFBZ0IsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELGFBQWE7QUFDYixpQkFBaUI7QUFDakIsZ0JBQWdCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0FBQzFFLGdCQUFnQixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDckMsZ0JBQWdCLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLElBQUksSUFBSSxFQUFFO0FBQzVELG9CQUFvQixZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7QUFDNUUsaUJBQWlCO0FBQ2pCLGdCQUFnQixJQUFJLE1BQU0sR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdDLGdCQUFnQixJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDaEMsb0JBQW9CLE1BQU0sSUFBSSxZQUFZLENBQUM7QUFDM0MsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixvQkFBb0IsTUFBTSxJQUFJLFlBQVksQ0FBQztBQUMzQyxpQkFBaUI7QUFDakIsZ0JBQWdCLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUN0RCxhQUFhO0FBQ2IsU0FBUztBQUNULFFBQVEsT0FBTyxVQUFVLENBQUM7QUFDMUIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsZUFBZTs7OztBQzlEakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDSjtBQUMxRCxNQUFNLDRCQUE0QixTQUFTSSxnQkFBa0IsQ0FBQyxjQUFjLENBQUM7QUFDN0UsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUU7QUFDekQsUUFBUSxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDN0MsUUFBUSxTQUFTLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDOUMsUUFBUSxTQUFTLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDM0UsUUFBUSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM5RSxRQUFRLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUMzQixZQUFZLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLFNBQVM7QUFDVCxRQUFRLE9BQU8sU0FBUyxDQUFDO0FBQ3pCLEtBQUs7QUFDTCxJQUFJLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFO0FBQy9ELFFBQVEsTUFBTSxxQkFBcUIsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFO0FBQ2xGLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbEQsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QyxRQUFRLE9BQU8scUJBQXFCLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDN0UsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsNEJBQTRCOzs7O0FDcEI5QyxJQUFJLGVBQWUsR0FBRyxDQUFDWCxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxHQUFHLEVBQUU7QUFDdkUsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELGtDQUFrQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVDLE1BQU1jLDhCQUE0QixHQUFHLGVBQWUsQ0FBQ2IsNEJBQXVELENBQUMsQ0FBQztBQUM5RyxNQUFNYyxnQ0FBOEIsR0FBRyxlQUFlLENBQUNYLDhCQUF5RCxDQUFDLENBQUM7QUFDbEgsTUFBTVkseUJBQXVCLEdBQUcsZUFBZSxDQUFDQyx1QkFBa0QsQ0FBQyxDQUFDO0FBQ3BHLE1BQU1DLHNCQUFvQixHQUFHLGVBQWUsQ0FBQ0Msb0JBQStDLENBQUMsQ0FBQztBQUM5RixNQUFNQyx3QkFBc0IsR0FBRyxlQUFlLENBQUNDLHNCQUFpRCxDQUFDLENBQUM7QUFDbEcsTUFBTUMsbUJBQWlCLEdBQUcsZUFBZSxDQUFDQyxpQkFBMkMsQ0FBQyxDQUFDO0FBQ3ZGLE1BQU1DLGdDQUE4QixHQUFHLGVBQWUsQ0FBQ0MsOEJBQXlELENBQUMsQ0FBQztBQUNsSCxTQUFTLDBCQUEwQixDQUFDLGFBQWEsRUFBRSxVQUFVLEdBQUcsS0FBSyxFQUFFO0FBQ3ZFLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSUgsbUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNuRSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUlFLGdDQUE4QixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDakYsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJViw4QkFBNEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQy9FLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSUMsZ0NBQThCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNqRixJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUlDLHlCQUF1QixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDMUUsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJRSxzQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3BFLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSUUsd0JBQXNCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDaEYsSUFBSSxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBQ0Qsa0NBQWtDLEdBQUcsMEJBQTBCOzs7O0FDdEIvRCxJQUFJLGVBQWUsR0FBRyxDQUFDcEIsY0FBSSxJQUFJQSxjQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ3ZFLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxlQUFlLEdBQUcsZ0JBQWdCLEdBQUcsaUJBQWlCLEdBQUcsYUFBYSxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUN0RDtBQUN4QyxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUNDLFNBQWdCLENBQUMsQ0FBQztBQUNSO0FBQ047QUFDcEMsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ3RCLElBQUksTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRCxJQUFJLE1BQU0sU0FBUyxHQUFHLElBQUlPLE9BQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkUsSUFBSUgsS0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyRCxJQUFJQSxLQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JELElBQUksT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUNELFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDbEIsU0FBUyxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ3hCLElBQUksTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRCxJQUFJLE1BQU0sU0FBUyxHQUFHLElBQUlHLE9BQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkUsSUFBSUgsS0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyRCxJQUFJQSxLQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELElBQUksT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUNELGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDdEIsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQzVCLElBQUksSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QyxJQUFJLE1BQU0sU0FBUyxHQUFHLElBQUlHLE9BQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkUsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQyxJQUFJSCxLQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JELElBQUlBLEtBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDcEQsSUFBSSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBQ0QsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0FBQzlCLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRTtBQUMzQixJQUFJLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEQsSUFBSSxNQUFNLFNBQVMsR0FBRyxJQUFJRyxPQUFTLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLElBQUlILEtBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDcEQsSUFBSSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBQ0QsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0FBQzVCLFNBQVMsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFO0FBQzFDLElBQUksTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRCxJQUFJLE1BQU0sU0FBUyxHQUFHLElBQUlHLE9BQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkUsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN2QyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFQyxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELElBQUlKLEtBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDckQsSUFBSSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBQ0QsZUFBZSxHQUFHLE9BQU87Ozs7QUNqRHpCLElBQUksZUFBZSxHQUFHLENBQUNMLGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsTUFBTSxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0FBQ2hHLElBQUksSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDLEtBQUssU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7QUFDNUIsSUFBSSxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNKLElBQUksa0JBQWtCLEdBQUcsQ0FBQ0EsY0FBSSxJQUFJQSxjQUFJLENBQUMsa0JBQWtCLE1BQU0sTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDL0YsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLENBQUMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDcEIsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxZQUFZLEdBQUcsQ0FBQ0EsY0FBSSxJQUFJQSxjQUFJLENBQUMsWUFBWSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ2pFLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUMxQyxJQUFJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3SSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQyxJQUFJLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLElBQUksZUFBZSxHQUFHLENBQUNBLGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUN2RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDQyxTQUFnQixDQUFDLENBQUM7QUFDeUQ7QUFDM0Q7QUFDaEQsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDRyxnQkFBMkMsQ0FBQyxDQUFDO0FBQzdFLE1BQU0sa0JBQWtCLFNBQVNHLDhCQUFnQyxDQUFDLHNDQUFzQyxDQUFDO0FBQ3pHLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRTtBQUMxQixRQUFRLE9BQU8sa0VBQWtFLENBQUM7QUFDbEYsS0FBSztBQUNMLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakMsUUFBUSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxRCxRQUFRLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNqRCxRQUFRLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQzVELFFBQVEsUUFBUSxTQUFTO0FBQ3pCLFlBQVksS0FBSyxLQUFLO0FBQ3RCLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELFlBQVksS0FBSyxPQUFPO0FBQ3hCLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pELFlBQVksS0FBSyxXQUFXO0FBQzVCLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdELFlBQVksS0FBSyxVQUFVLENBQUM7QUFDNUIsWUFBWSxLQUFLLEtBQUs7QUFDdEIsZ0JBQWdCLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUQsWUFBWSxLQUFLLFNBQVM7QUFDMUIsZ0JBQWdCLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0QsWUFBWTtBQUNaLGdCQUFnQixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUU7QUFDckQsb0JBQW9CLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtBQUMvQyx3QkFBd0IsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0QscUJBQXFCO0FBQ3JCLG9CQUFvQkYsS0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyRSxvQkFBb0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0MsaUJBQWlCO0FBQ2pCLGdCQUFnQixNQUFNO0FBQ3RCLFNBQVM7QUFDVCxRQUFRLE9BQU8sU0FBUyxDQUFDO0FBQ3pCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLGtCQUFrQjs7OztBQzVEcEMsSUFBSSxlQUFlLEdBQUcsQ0FBQ0wsY0FBSSxJQUFJQSxjQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ3ZFLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNwQjtBQUNpRTtBQUMzRyxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUNDLFNBQWdCLENBQUMsQ0FBQztBQUNGO0FBQ2hELE1BQU0sa0JBQWtCLFNBQVNNLDhCQUFnQyxDQUFDLHNDQUFzQyxDQUFDO0FBQ3pHLElBQUksWUFBWSxHQUFHO0FBQ25CLFFBQVEsT0FBTyxzRUFBc0UsQ0FBQztBQUN0RixLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVELFFBQVEsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDNUQsUUFBUSxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7QUFDdEMsWUFBWSxLQUFLLFdBQVc7QUFDNUIsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFRSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1QyxnQkFBZ0IsTUFBTTtBQUN0QixZQUFZLEtBQUssU0FBUyxDQUFDO0FBQzNCLFlBQVksS0FBSyxPQUFPO0FBQ3hCLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRSxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUMsZ0JBQWdCLE1BQU07QUFDdEIsWUFBWSxLQUFLLFVBQVU7QUFDM0IsZ0JBQWdCSixLQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hFLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxTQUFTO0FBQzFCLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRUksSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRSxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsZ0JBQWdCLE1BQU07QUFDdEIsWUFBWSxLQUFLLE1BQU07QUFDdkIsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1QyxnQkFBZ0IsTUFBTTtBQUN0QixTQUFTO0FBQ1QsUUFBUSxPQUFPLFNBQVMsQ0FBQztBQUN6QixLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyxrQkFBa0I7Ozs7QUMzQ3BDLElBQUksZUFBZSxHQUFHLENBQUNULGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUN2RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsNkJBQTZCLEdBQUcsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDaEUsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDQyxTQUFnQixDQUFDLENBQUM7QUFDbEQsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7QUFDbkQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ25CLFFBQVEsT0FBTyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEQsS0FBSztBQUNMLElBQUksSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxJQUFJLFFBQVEsUUFBUTtBQUNwQixRQUFRLEtBQUssTUFBTTtBQUNuQixZQUFZLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLFlBQVksTUFBTTtBQUNsQixRQUFRLEtBQUssTUFBTTtBQUNuQixZQUFZLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QyxZQUFZLE1BQU07QUFDbEIsUUFBUSxLQUFLLE1BQU07QUFDbkIsWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEMsWUFBWSxNQUFNO0FBQ2xCLEtBQUs7QUFDTCxJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFDRCxzQkFBc0IsR0FBRyxjQUFjLENBQUM7QUFDeEMsU0FBUyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ2hELElBQUksSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxJQUFJLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNqQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFO0FBQ3pFLFFBQVEsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLEtBQUs7QUFDTCxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFO0FBQzlFLFFBQVEsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLEtBQUs7QUFDTCxTQUFTO0FBQ1QsUUFBUSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxLQUFLO0FBQ0wsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBQ0QsNkJBQTZCLEdBQUcscUJBQXFCOzs7O0FDdkNyRCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQjtBQUNRO0FBQ3VEO0FBQ3JEO0FBQ3RELE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLDBCQUEwQjtBQUNyRCxJQUFJLGNBQWM7QUFDbEIsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxDQUFDLENBQUMsRUFBRUMsT0FBUyxDQUFDLGVBQWUsQ0FBQ0ksV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLElBQUksMEJBQTBCO0FBQzlCLElBQUksd0NBQXdDO0FBQzVDLElBQUksV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztBQUN2QixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDeEIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE1BQU0sZUFBZSxTQUFTQyw4QkFBZ0MsQ0FBQyxzQ0FBc0MsQ0FBQztBQUN0RyxJQUFJLFlBQVksR0FBRztBQUNuQixRQUFRLE9BQU8sT0FBTyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ2pDLFFBQVEsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzdELFFBQVEsTUFBTSxNQUFNLEdBQUdELFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRSxRQUFRLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMzQyxRQUFRLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM3QyxRQUFRLElBQUksWUFBWSxHQUFHLE1BQU0sSUFBSSxPQUFPLENBQUM7QUFDN0MsUUFBUSxZQUFZLEdBQUcsWUFBWSxJQUFJLEVBQUUsQ0FBQztBQUMxQyxRQUFRLFlBQVksR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEQsUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDNUIsUUFBUSxJQUFJLFlBQVksSUFBSSxNQUFNLElBQUksWUFBWSxJQUFJLE1BQU0sRUFBRTtBQUM5RCxZQUFZLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDOUIsU0FBUztBQUNULGFBQWEsSUFBSSxZQUFZLElBQUksTUFBTSxFQUFFO0FBQ3pDLFlBQVksUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUM5QixTQUFTO0FBQ1QsYUFBYSxJQUFJLFlBQVksSUFBSSxNQUFNLEVBQUU7QUFDekMsWUFBWSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQzlCLFNBQVM7QUFDVCxRQUFRLE1BQU0sSUFBSSxHQUFHb0IsS0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvRSxRQUFRLE9BQU8sT0FBTztBQUN0QixhQUFhLHVCQUF1QixFQUFFO0FBQ3RDLGFBQWEsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7QUFDdEMsYUFBYSxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0QyxhQUFhLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3QyxhQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEMsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsZUFBZTs7OztBQzlDakMsSUFBSSxlQUFlLEdBQUcsQ0FBQzFCLGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUN2RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEI7QUFDRTtBQUM5QyxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUNDLFNBQWdCLENBQUMsQ0FBQztBQUN5RDtBQUN2RDtBQUNwRCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLDBCQUEwQixFQUFFQyxPQUFTLENBQUMsZUFBZSxDQUFDSSxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkosTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDOUIsTUFBTSwwQkFBMEIsU0FBU0MsOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDakgsSUFBSSxZQUFZLEdBQUc7QUFDbkIsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xFLFFBQVEsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEUsUUFBUSxNQUFNLFFBQVEsR0FBR0QsV0FBVyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BFLFFBQVEsSUFBSSxRQUFRLElBQUksTUFBTSxFQUFFO0FBQ2hDLFlBQVksTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLFlBQVksU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxZQUFZLE9BQU9FLE9BQVMsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3JHLFNBQVM7QUFDVCxRQUFRLElBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxRQUFRLElBQUksTUFBTSxFQUFFO0FBQ3RELFlBQVksTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLFlBQVksU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLFlBQVksT0FBT0EsT0FBUyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckcsU0FBUztBQUNULFFBQVEsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDN0QsUUFBUSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRCxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNyQyxZQUFZLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqRCxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEQsU0FBUztBQUNULGFBQWEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzNDLFlBQVksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakQsWUFBWSxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNuRCxZQUFZLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6RCxTQUFTO0FBQ1QsYUFBYSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDMUMsWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkQsWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwRCxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFlBQVksVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbkQsU0FBUztBQUNULFFBQVEsT0FBTyxVQUFVLENBQUM7QUFDMUIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsMEJBQTBCOzs7O0FDdEQ1QyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxzQkFBc0IsR0FBRyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDVjtBQUNGO0FBQ3JDLE1BQU0sTUFBTSxDQUFDO0FBQ2IsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFO0FBQy9CLFFBQVEsYUFBYSxHQUFHLGFBQWEsSUFBSW1CLEVBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0FBQzFFLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFFBQVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BELEtBQUs7QUFDTCxJQUFJLEtBQUssR0FBRztBQUNaLFFBQVEsT0FBTyxJQUFJLE1BQU0sQ0FBQztBQUMxQixZQUFZLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN0QyxZQUFZLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN4QyxTQUFTLENBQUMsQ0FBQztBQUNYLEtBQUs7QUFDTCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRTtBQUMzQyxRQUFRLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoRSxRQUFRLE9BQU8sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDbkUsS0FBSztBQUNMLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO0FBQ3ZDLFFBQVEsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLGFBQWEsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM1RixRQUFRLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUN6QixRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLO0FBQ3pDLFlBQVksTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEUsWUFBWSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNwRCxTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUs7QUFDL0IsWUFBWSxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNyQyxTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDakQsWUFBWSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkQsU0FBUyxDQUFDLENBQUM7QUFDWCxRQUFRLE9BQU8sT0FBTyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxJQUFJLE9BQU8sYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDMUMsUUFBUSxNQUFNQyxTQUFPLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFFBQVEsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRCxRQUFRLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDMUMsUUFBUSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3pDLFFBQVEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNoRCxRQUFRLE9BQU8sS0FBSyxFQUFFO0FBQ3RCLFlBQVksTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDbkYsWUFBWSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNoQyxZQUFZLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFELFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUN6QixnQkFBZ0IsYUFBYSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDcEQsZ0JBQWdCLFNBQVM7QUFDekIsYUFBYTtBQUNiLFlBQVksSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLFlBQVksSUFBSSxNQUFNLFlBQVlwQixPQUFTLENBQUMsYUFBYSxFQUFFO0FBQzNELGdCQUFnQixZQUFZLEdBQUcsTUFBTSxDQUFDO0FBQ3RDLGFBQWE7QUFDYixpQkFBaUIsSUFBSSxNQUFNLFlBQVlBLE9BQVMsQ0FBQyxpQkFBaUIsRUFBRTtBQUNwRSxnQkFBZ0IsWUFBWSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLGdCQUFnQixZQUFZLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUM1QyxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGdCQUFnQixZQUFZLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFGLGFBQWE7QUFDYixZQUFZLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RyxZQUFZb0IsU0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxZQUFZLGFBQWEsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JGLFlBQVksS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDaEQsU0FBUztBQUNULFFBQVEsT0FBT0EsU0FBTyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsY0FBYyxHQUFHLE1BQU0sQ0FBQztBQUN4QixNQUFNLGNBQWMsQ0FBQztBQUNyQixJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN2QyxRQUFRLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDL0IsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixLQUFLO0FBQ0wsSUFBSSx1QkFBdUIsQ0FBQyxVQUFVLEVBQUU7QUFDeEMsUUFBUSxPQUFPLElBQUlwQixPQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN6RSxLQUFLO0FBQ0wsSUFBSSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUU7QUFDL0UsUUFBUSxNQUFNLElBQUksR0FBRyxPQUFPLGNBQWMsS0FBSyxRQUFRLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN0SCxRQUFRLE1BQU0sS0FBSyxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzdGLFFBQVEsTUFBTSxHQUFHLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDdkYsUUFBUSxPQUFPLElBQUlBLE9BQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsRixLQUFLO0FBQ0wsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ2pCLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUMvQixZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFlBQVksUUFBUSxFQUFFO0FBQ3ZELGdCQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGdCQUFnQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNsRCxnQkFBZ0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Qsc0JBQXNCLEdBQUcsY0FBYzs7OztBQ2pHdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDWDtBQUNuRCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZO0FBQ3ZDLElBQUkscURBQXFEO0FBQ3pELElBQUkscUNBQXFDO0FBQ3pDLElBQUksU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdkIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDOUIsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0scUJBQXFCLENBQUM7QUFDNUIsSUFBSSxXQUFXLENBQUMsWUFBWSxFQUFFO0FBQzlCLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksR0FBRyxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQztBQUMxRixRQUFRLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxHQUFHLG1CQUFtQixHQUFHLG9CQUFvQixDQUFDO0FBQ3hGLEtBQUs7QUFDTCxJQUFJLE9BQU8sR0FBRztBQUNkLFFBQVEsT0FBTyxPQUFPLENBQUM7QUFDdkIsS0FBSztBQUNMLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDNUIsUUFBUSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsRUFBRTtBQUN2RSxZQUFZLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMzQyxZQUFZLE9BQU87QUFDbkIsU0FBUztBQUNULFFBQVEsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ2hFLFFBQVEsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUksUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxFQUFFO0FBQy9FLFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzdELFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hFLFFBQVEsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQzNELFFBQVEsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUN2RCxRQUFRLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO0FBQ3JDLFlBQVksSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO0FBQzVCLGdCQUFnQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO0FBQzFELG9CQUFvQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRCxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLG9CQUFvQixPQUFPLElBQUksQ0FBQztBQUNoQyxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFO0FBQ2pDLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsU0FBUztBQUNULFFBQVEsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVDLFFBQVEsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDL0IsWUFBWSxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDOUQsWUFBWSxNQUFNLElBQUksR0FBR0wsS0FBTyxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3JFLFlBQVksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlDLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxNQUFNLElBQUksR0FBR0EsS0FBTyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25GLFlBQVksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLFNBQVM7QUFDVCxRQUFRLE9BQU8sTUFBTSxDQUFDO0FBQ3RCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLHFCQUFxQjs7OztBQzlEdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEI7QUFDRTtBQUM2RDtBQUNuRDtBQUN4RCxNQUFNLG9DQUFvQyxTQUFTSSw4QkFBZ0MsQ0FBQyxzQ0FBc0MsQ0FBQztBQUMzSCxJQUFJLFlBQVksR0FBRztBQUNuQixRQUFRLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxnQ0FBZ0MsRUFBRUQsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzlHLEtBQUs7QUFDTCxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ2pDLFFBQVEsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzlDLFFBQVEsSUFBSSxTQUFTLEdBQUdBLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsUUFBUSxRQUFRLE1BQU07QUFDdEIsWUFBWSxLQUFLLE1BQU0sQ0FBQztBQUN4QixZQUFZLEtBQUssTUFBTSxDQUFDO0FBQ3hCLFlBQVksS0FBSyxHQUFHO0FBQ3BCLGdCQUFnQixTQUFTLEdBQUdJLFNBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwRSxnQkFBZ0IsTUFBTTtBQUN0QixTQUFTO0FBQ1QsUUFBUSxPQUFPRixPQUFTLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNqRyxLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyxvQ0FBb0M7Ozs7QUN0QnRELElBQUksZUFBZSxHQUFHLENBQUNSLGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUN2RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsMkJBQTJCLEdBQUcsaUNBQWlDLEdBQUcsaUJBQWlCLEdBQUcsYUFBYSxHQUFHLFVBQVUsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVKLE1BQU02QixnQ0FBOEIsR0FBRyxlQUFlLENBQUM1Qiw4QkFBaUQsQ0FBQyxDQUFDO0FBQzFHLE1BQU02QixpQ0FBK0IsR0FBRyxlQUFlLENBQUMxQiwrQkFBa0QsQ0FBQyxDQUFDO0FBQzVHLE1BQU0yQixpQ0FBK0IsR0FBRyxlQUFlLENBQUNkLCtCQUFrRCxDQUFDLENBQUM7QUFDNUcsTUFBTWUscUJBQW1CLEdBQUcsZUFBZSxDQUFDYixtQkFBc0MsQ0FBQyxDQUFDO0FBQ3BGLE1BQU1jLDhCQUE0QixHQUFHLGVBQWUsQ0FBQ1osNEJBQStDLENBQUMsQ0FBQztBQUN0RyxNQUFNYSw0QkFBMEIsR0FBRyxlQUFlLENBQUNYLDBCQUE2QyxDQUFDLENBQUM7QUFDbEcsTUFBTVksMEJBQXdCLEdBQUcsZUFBZSxDQUFDVix3QkFBMkMsQ0FBQyxDQUFDO0FBQzlGLE1BQU1XLDZCQUEyQixHQUFHLGVBQWUsQ0FBQ0MsMkJBQThDLENBQUMsQ0FBQztBQUNwRyxNQUFNQywrQkFBNkIsR0FBRyxlQUFlLENBQUNDLDZCQUFnRCxDQUFDLENBQUM7QUFDeEcsTUFBTUMsMkJBQXlCLEdBQUcsZUFBZSxDQUFDQyx5QkFBNkMsQ0FBQyxDQUFDO0FBQ2pHLE1BQU1DLDBCQUF3QixHQUFHLGVBQWUsQ0FBQ0Msd0JBQTRDLENBQUMsQ0FBQztBQUN0QztBQUN6RCxNQUFNQyxzQkFBb0IsR0FBRyxlQUFlLENBQUNDLG9CQUF1QyxDQUFDLENBQUM7QUFDdEYsTUFBTUMsc0JBQW9CLEdBQUcsZUFBZSxDQUFDQyxvQkFBdUMsQ0FBQyxDQUFDO0FBQ3RGLE1BQU1DLG1CQUFpQixHQUFHLGVBQWUsQ0FBQ0MsaUJBQW9DLENBQUMsQ0FBQztBQUNoRixNQUFNQyw4QkFBNEIsR0FBRyxlQUFlLENBQUNDLDRCQUErQyxDQUFDLENBQUM7QUFDN0Q7QUFDekMsTUFBTUMseUJBQXVCLEdBQUcsZUFBZSxDQUFDQyx1QkFBcUQsQ0FBQyxDQUFDO0FBQ3ZHLE1BQU1DLHdDQUFzQyxHQUFHLGVBQWUsQ0FBQ0Msc0NBQXlELENBQUMsQ0FBQztBQUMxSCxjQUFjLEdBQUcsSUFBSUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLGNBQWMsR0FBRyxJQUFJQSxRQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsR0FBRyxJQUFJQSxRQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25FLFNBQVMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ2xDLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFDRCxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLFNBQVMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ3RDLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFDRCxpQkFBaUIsR0FBRyxTQUFTLENBQUM7QUFDOUIsU0FBUyx5QkFBeUIsQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFO0FBQ3pELElBQUksTUFBTSxNQUFNLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzVELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSVosc0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUMvRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUlFLHNCQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDL0QsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJZCxxQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQzlELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSWtCLDhCQUE0QixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDdkUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJSSx3Q0FBc0MsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ2pGLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUNELGlDQUFpQyxHQUFHLHlCQUF5QixDQUFDO0FBQzlELFNBQVMsbUJBQW1CLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxZQUFZLEdBQUcsS0FBSyxFQUFFO0FBQ3RFLElBQUksT0FBT0csY0FBZ0IsQ0FBQywwQkFBMEIsQ0FBQztBQUN2RCxRQUFRLE9BQU8sRUFBRTtBQUNqQixZQUFZLElBQUlMLHlCQUF1QixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDN0QsWUFBWSxJQUFJdkIsZ0NBQThCLENBQUMsT0FBTyxFQUFFO0FBQ3hELFlBQVksSUFBSUMsaUNBQStCLENBQUMsT0FBTyxFQUFFO0FBQ3pELFlBQVksSUFBSUMsaUNBQStCLENBQUMsT0FBTyxFQUFFO0FBQ3pELFlBQVksSUFBSWlCLG1CQUFpQixDQUFDLE9BQU8sRUFBRTtBQUMzQyxZQUFZLElBQUlmLDhCQUE0QixDQUFDLE9BQU8sRUFBRTtBQUN0RCxZQUFZLElBQUlDLDRCQUEwQixDQUFDLE9BQU8sRUFBRTtBQUNwRCxZQUFZLElBQUlDLDBCQUF3QixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDNUQsWUFBWSxJQUFJQyw2QkFBMkIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQy9ELFlBQVksSUFBSUUsK0JBQTZCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNqRSxTQUFTO0FBQ1QsUUFBUSxRQUFRLEVBQUUsQ0FBQyxJQUFJSSwwQkFBd0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJRiwyQkFBeUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNuRyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUNELDJCQUEyQixHQUFHLG1CQUFtQjs7OztBQzlEakQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeUM7QUFDN0Q7QUFDMUMsTUFBTSxzQkFBc0IsU0FBUyw4QkFBOEIsQ0FBQyw0QkFBNEIsQ0FBQztBQUNqRyxJQUFJLGFBQWEsR0FBRztBQUNwQixRQUFRLE9BQU8scUJBQXFCLENBQUM7QUFDckMsS0FBSztBQUNMLElBQUksY0FBYyxHQUFHO0FBQ3JCLFFBQVEsT0FBTyxpQ0FBaUMsQ0FBQztBQUNqRCxLQUFLO0FBQ0wsSUFBSSxhQUFhLEdBQUc7QUFDcEIsUUFBUSxPQUFPLGdGQUFnRixDQUFDO0FBQ2hHLEtBQUs7QUFDTCxJQUFJLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakQsUUFBUSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlFLFFBQVEsSUFBSSxVQUFVLEVBQUU7QUFDeEIsWUFBWSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUNqRixnQkFBZ0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUvQixJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLGdCQUFnQixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BELGdCQUFnQixJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7QUFDL0Isb0JBQW9CLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN0RSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFlBQVksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNoSCxnQkFBZ0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkUsZ0JBQWdCLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEQsZ0JBQWdCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtBQUMvQixvQkFBb0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMzRSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLE9BQU8sVUFBVSxDQUFDO0FBQzFCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLHNCQUFzQjs7OztBQ2xDeEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsc0JBQXNCLEdBQUcsMEJBQTBCLEdBQUcsaUJBQWlCLEdBQUcsb0JBQW9CLEdBQUcsMEJBQTBCLEdBQUcsc0JBQXNCLEdBQUcsNEJBQTRCLEdBQUcsK0JBQStCLEdBQUcsd0JBQXdCLEdBQUcsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDdE87QUFDRTtBQUNuRCwwQkFBMEIsR0FBRztBQUM3QixJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLElBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ2YsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLElBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLElBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLElBQUksWUFBWSxFQUFFLENBQUM7QUFDbkIsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLElBQUksU0FBUyxFQUFFLENBQUM7QUFDaEIsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLElBQUksU0FBUyxFQUFFLENBQUM7QUFDaEIsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUMsQ0FBQztBQUNGLHdCQUF3QixHQUFHO0FBQzNCLElBQUksUUFBUSxFQUFFLENBQUM7QUFDZixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksU0FBUyxFQUFFLENBQUM7QUFDaEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNsQixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsSUFBSSxTQUFTLEVBQUUsRUFBRTtBQUNqQixJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ2IsSUFBSSxNQUFNLEVBQUUsRUFBRTtBQUNkLElBQUksVUFBVSxFQUFFLEVBQUU7QUFDbEIsSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUNiLElBQUksTUFBTSxFQUFFLEVBQUU7QUFDZCxJQUFJLFVBQVUsRUFBRSxFQUFFO0FBQ2xCLElBQUksS0FBSyxFQUFFLEVBQUU7QUFDYixJQUFJLE1BQU0sRUFBRSxFQUFFO0FBQ2QsQ0FBQyxDQUFDO0FBQ0YsK0JBQStCLEdBQUc7QUFDbEMsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLElBQUksUUFBUSxFQUFFLENBQUM7QUFDZixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksTUFBTSxFQUFFLEVBQUU7QUFDZCxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ2IsSUFBSSxPQUFPLEVBQUUsRUFBRTtBQUNmLElBQUksUUFBUSxFQUFFLEVBQUU7QUFDaEIsQ0FBQyxDQUFDO0FBQ0YsNEJBQTRCLEdBQUc7QUFDL0IsSUFBSSxHQUFHLEVBQUUsUUFBUTtBQUNqQixJQUFJLE1BQU0sRUFBRSxRQUFRO0FBQ3BCLElBQUksT0FBTyxFQUFFLFFBQVE7QUFDckIsSUFBSSxHQUFHLEVBQUUsUUFBUTtBQUNqQixJQUFJLElBQUksRUFBRSxRQUFRO0FBQ2xCLElBQUksTUFBTSxFQUFFLFFBQVE7QUFDcEIsSUFBSSxPQUFPLEVBQUUsUUFBUTtBQUNyQixJQUFJLENBQUMsRUFBRSxNQUFNO0FBQ2IsSUFBSSxFQUFFLEVBQUUsTUFBTTtBQUNkLElBQUksR0FBRyxFQUFFLE1BQU07QUFDZixJQUFJLElBQUksRUFBRSxNQUFNO0FBQ2hCLElBQUksS0FBSyxFQUFFLE1BQU07QUFDakIsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxNQUFNO0FBQ2hCLElBQUksS0FBSyxFQUFFLE1BQU07QUFDakIsSUFBSSxLQUFLLEVBQUUsT0FBTztBQUNsQixJQUFJLE1BQU0sRUFBRSxPQUFPO0FBQ25CLElBQUksQ0FBQyxFQUFFLE1BQU07QUFDYixJQUFJLEVBQUUsRUFBRSxNQUFNO0FBQ2QsSUFBSSxJQUFJLEVBQUUsTUFBTTtBQUNoQixJQUFJLEtBQUssRUFBRSxNQUFNO0FBQ2pCLENBQUMsQ0FBQztBQUNGLHNCQUFzQixHQUFHLENBQUMsR0FBRyxFQUFFUCxPQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLDZGQUE2RixDQUFDLENBQUM7QUFDekwsU0FBUyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUU7QUFDbkMsSUFBSSxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDcEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7QUFDNUQsUUFBUSxPQUFPLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRCxLQUFLO0FBQ0wsU0FBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtBQUMxQyxRQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ2pCLEtBQUs7QUFDTCxTQUFTLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMvQixRQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ2pCLEtBQUs7QUFDTCxTQUFTLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNoQyxRQUFRLE9BQU8sR0FBRyxDQUFDO0FBQ25CLEtBQUs7QUFDTCxTQUFTLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNsQyxRQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ2pCLEtBQUs7QUFDTCxTQUFTLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNuQyxRQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ2pCLEtBQUs7QUFDTCxJQUFJLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFDRCwwQkFBMEIsR0FBRyxrQkFBa0IsQ0FBQztBQUNoRCxvQkFBb0IsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDekUsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQzFCLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzFCLFFBQVEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pELEtBQUs7QUFDTCxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMxQixRQUFRLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEQsS0FBSztBQUNMLElBQUksTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLElBQUksT0FBT0MsS0FBTyxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFDRCxpQkFBaUIsR0FBRyxTQUFTLENBQUM7QUFDOUIsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRUQsT0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMzSSxNQUFNLHNCQUFzQixHQUFHLElBQUksTUFBTSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3pFLDBCQUEwQixHQUFHQSxPQUFTLENBQUMsdUJBQXVCLENBQUMsRUFBRSxFQUFFLHdCQUF3QixDQUFDLENBQUM7QUFDN0YsU0FBUyxjQUFjLENBQUMsWUFBWSxFQUFFO0FBQ3RDLElBQUksTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLElBQUksSUFBSSxhQUFhLEdBQUcsWUFBWSxDQUFDO0FBQ3JDLElBQUksSUFBSSxLQUFLLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNELElBQUksT0FBTyxLQUFLLEVBQUU7QUFDbEIsUUFBUSx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEQsUUFBUSxhQUFhLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakUsUUFBUSxLQUFLLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNELEtBQUs7QUFDTCxJQUFJLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFDRCxzQkFBc0IsR0FBRyxjQUFjLENBQUM7QUFDeEMsU0FBUyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFO0FBQ25ELElBQUksTUFBTSxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsSUFBSSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDdEUsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzFCOzs7O0FDNUpBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCO0FBQ1E7QUFDdUQ7QUFDckQ7QUFDdEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsMEJBQTBCO0FBQ3JELElBQUksaUJBQWlCO0FBQ3JCLElBQUksb0RBQW9EO0FBQ3hELElBQUksQ0FBQyxDQUFDLEVBQUVBLE9BQVMsQ0FBQyxlQUFlLENBQUNJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRSxJQUFJLDBCQUEwQjtBQUM5QixJQUFJLGlEQUFpRDtBQUNyRCxJQUFJLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdkIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixNQUFNLGVBQWUsU0FBU0MsOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDdEcsSUFBSSxZQUFZLEdBQUc7QUFDbkIsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3RCxRQUFRLE1BQU0sTUFBTSxHQUFHRCxXQUFXLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakUsUUFBUSxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDM0MsUUFBUSxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUMsUUFBUSxJQUFJLFlBQVksR0FBRyxNQUFNLElBQUksT0FBTyxDQUFDO0FBQzdDLFFBQVEsWUFBWSxHQUFHLFlBQVksSUFBSSxFQUFFLENBQUM7QUFDMUMsUUFBUSxZQUFZLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xELFFBQVEsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQzVCLFFBQVEsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzFDLFlBQVksUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUM5QixTQUFTO0FBQ1QsYUFBYSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDOUMsWUFBWSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQzlCLFNBQVM7QUFDVCxhQUFhLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM5QyxZQUFZLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDOUIsU0FBUztBQUNULFFBQVEsTUFBTSxJQUFJLEdBQUdvQixLQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9FLFFBQVEsT0FBTyxPQUFPO0FBQ3RCLGFBQWEsdUJBQXVCLEVBQUU7QUFDdEMsYUFBYSxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztBQUN0QyxhQUFhLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3RDLGFBQWEsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLGFBQWEsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QyxLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyxlQUFlOzs7O0FDOUNqQyxJQUFJLGVBQWUsR0FBRyxDQUFDMUIsY0FBSSxJQUFJQSxjQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ3ZFLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxNQUFNWSxpQ0FBK0IsR0FBRyxlQUFlLENBQUNYLCtCQUFpRSxDQUFDLENBQUM7QUFDM0gsTUFBTSx1QkFBdUIsU0FBU1csaUNBQStCLENBQUMsT0FBTyxDQUFDO0FBQzlFLElBQUksY0FBYyxHQUFHO0FBQ3JCLFFBQVEsT0FBTyxvQ0FBb0MsQ0FBQztBQUNwRCxLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyx1QkFBdUI7Ozs7QUNWekMsSUFBSSxlQUFlLEdBQUcsQ0FBQ1osY0FBSSxJQUFJQSxjQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ3ZFLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxNQUFNLDhCQUE4QixHQUFHLGVBQWUsQ0FBQ0MsNEJBQWdFLENBQUMsQ0FBQztBQUN6SCxNQUFNLHNCQUFzQixTQUFTLDhCQUE4QixDQUFDLE9BQU8sQ0FBQztBQUM1RSxJQUFJLGNBQWMsR0FBRztBQUNyQixRQUFRLE9BQU8sSUFBSSxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyxzQkFBc0I7Ozs7QUNWeEMsSUFBSSxlQUFlLEdBQUcsQ0FBQ0QsY0FBSSxJQUFJQSxjQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ3ZFLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUNDLFNBQWdCLENBQUMsQ0FBQztBQUNSO0FBQ2lFO0FBQzNEO0FBQ1E7QUFDeEQsTUFBTSxrQkFBa0IsU0FBU00sOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDekcsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQzFCLFFBQVEsT0FBTyxxRkFBcUYsQ0FBQztBQUNyRyxLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVELFFBQVEsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDMUQsUUFBUSxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUM1RCxRQUFRRixLQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3hELFFBQVEsT0FBTyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUN2RixLQUFLO0FBQ0wsSUFBSSxPQUFPLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtBQUNoRSxRQUFRLFFBQVEsa0JBQWtCO0FBQ2xDLFlBQVksS0FBSyxRQUFRO0FBQ3pCLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRUksSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRSxnQkFBZ0IsTUFBTTtBQUN0QixZQUFZLEtBQUssV0FBVztBQUM1QixnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakUsZ0JBQWdCLE1BQU07QUFDdEIsWUFBWSxLQUFLLFFBQVEsQ0FBQztBQUMxQixZQUFZLEtBQUssU0FBUztBQUMxQixnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUMsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakUsZ0JBQWdCLE1BQU07QUFDdEIsWUFBWSxLQUFLLFlBQVk7QUFDN0IsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxPQUFPO0FBQ3hCLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1QyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRSxnQkFBZ0IsTUFBTTtBQUN0QixZQUFZLEtBQUssT0FBTztBQUN4QixnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUMsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakUsZ0JBQWdCLE1BQU07QUFDdEIsWUFBWSxLQUFLLGFBQWE7QUFDOUIsZ0JBQWdCLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDL0Msb0JBQW9CLFNBQVMsR0FBR0MsU0FBVyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLGlCQUFpQjtBQUNqQixnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUVELElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakUsZ0JBQWdCLE1BQU07QUFDdEIsU0FBUztBQUNULFFBQVEsT0FBTyxTQUFTLENBQUM7QUFDekIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsa0JBQWtCOzs7O0FDeEVwQyxJQUFJLGVBQWUsR0FBRyxDQUFDVCxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLE1BQU0sTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtBQUNoRyxJQUFJLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0FBQzVCLElBQUksSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDSixJQUFJLGtCQUFrQixHQUFHLENBQUNBLGNBQUksSUFBSUEsY0FBSSxDQUFDLGtCQUFrQixNQUFNLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQy9GLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4RSxDQUFDLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3BCLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUNILElBQUksWUFBWSxHQUFHLENBQUNBLGNBQUksSUFBSUEsY0FBSSxDQUFDLFlBQVksS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUNqRSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDMUMsSUFBSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0ksSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsSUFBSSxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixJQUFJLGVBQWUsR0FBRyxDQUFDQSxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxHQUFHLEVBQUU7QUFDdkUsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQ0MsU0FBZ0IsQ0FBQyxDQUFDO0FBQ3lEO0FBQzNEO0FBQ2hELE1BQU15RCxzQkFBb0IsR0FBRyxlQUFlLENBQUN0RCxvQkFBK0IsQ0FBQyxDQUFDO0FBQzlFLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQ2EsZ0JBQTJDLENBQUMsQ0FBQztBQUM3RSxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLDhFQUE4RSxDQUFDO0FBQzNHLElBQUksQ0FBQyx1RUFBdUUsQ0FBQztBQUM3RSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNyQixNQUFNLGtCQUFrQixTQUFTViw4QkFBZ0MsQ0FBQyxzQ0FBc0MsQ0FBQztBQUN6RyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUU7QUFDMUIsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFELFFBQVEsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQ3BFLFFBQVEsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQ3BFLFFBQVEsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDMUQsUUFBUSxRQUFRLFdBQVc7QUFDM0IsWUFBWSxLQUFLLE9BQU87QUFDeEIsZ0JBQWdCLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1RCxnQkFBZ0IsTUFBTTtBQUN0QixZQUFZLEtBQUssT0FBTztBQUN4QixnQkFBZ0IsU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlELGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxRQUFRO0FBQ3pCLGdCQUFnQkYsS0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNoRSxnQkFBZ0IsTUFBTTtBQUN0QixZQUFZLEtBQUssWUFBWSxDQUFDO0FBQzlCLFlBQVksS0FBSyxhQUFhO0FBQzlCLGdCQUFnQixVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEQsZ0JBQWdCQSxLQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hFLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxTQUFTO0FBQzFCLGdCQUFnQixVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2RCxnQkFBZ0JBLEtBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakUsZ0JBQWdCQSxLQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hFLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxZQUFZO0FBQzdCLGdCQUFnQixVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2RCxnQkFBZ0JBLEtBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakUsZ0JBQWdCQSxLQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hFLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVk7QUFDWixnQkFBZ0IsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7QUFDekQsb0JBQW9CLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtBQUMvQyx3QkFBd0IsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0QscUJBQXFCO0FBQ3JCLG9CQUFvQkEsS0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyRSxvQkFBb0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0MsaUJBQWlCO0FBQ2pCLGdCQUFnQixNQUFNO0FBQ3RCLFNBQVM7QUFDVCxRQUFRLElBQUksV0FBVyxFQUFFO0FBQ3pCLFlBQVksU0FBUyxHQUFHcUQsc0JBQW9CLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNuRyxTQUFTO0FBQ1QsUUFBUSxPQUFPLFNBQVMsQ0FBQztBQUN6QixLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyxrQkFBa0I7Ozs7QUNuRnBDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ1I7QUFDVjtBQUM1QyxNQUFNLFdBQVcsR0FBR3BELFdBQXVCLENBQUM7QUFDUTtBQUN1RDtBQUMzRyxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLElBQUksZUFBZTtBQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDO0FBQ3JCLElBQUksQ0FBQyx1RUFBdUUsQ0FBQztBQUM3RSxJQUFJLENBQUMsQ0FBQyxFQUFFSixPQUFTLENBQUMsZUFBZSxDQUFDSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7QUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNyQixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDeEIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sNkJBQTZCLFNBQVNDLDhCQUFnQyxDQUFDLHNDQUFzQyxDQUFDO0FBQ3BILElBQUksWUFBWSxHQUFHO0FBQ25CLFFBQVEsT0FBTyxPQUFPLENBQUM7QUFDdkIsS0FBSztBQUNMLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakMsUUFBUSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxRQUFRLE1BQU0sS0FBSyxHQUFHRCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMxRixRQUFRLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNoRCxRQUFRLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRTtBQUN0QixZQUFZLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ2pFLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsU0FBUztBQUNULFFBQVEsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVDLFFBQVEsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDL0IsWUFBWSxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLFlBQVksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxNQUFNLElBQUksR0FBR0gsS0FBTyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25GLFlBQVksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLFNBQVM7QUFDVCxRQUFRLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQ2xDLFlBQVksTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzNELFlBQVksTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzlDLFlBQVksTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLFNBQVM7QUFDVCxRQUFRLE9BQU8sTUFBTSxDQUFDO0FBQ3RCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLDZCQUE2Qjs7OztBQy9DL0MsSUFBSSxlQUFlLEdBQUcsQ0FBQ0gsY0FBSSxJQUFJQSxjQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ3ZFLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCwyQkFBMkIsR0FBRyxpQ0FBaUMsR0FBRyxpQkFBaUIsR0FBRyxhQUFhLEdBQUcsY0FBYyxHQUFHLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUN0RjtBQUNoQjtBQUN6QyxNQUFNb0QseUJBQXVCLEdBQUcsZUFBZSxDQUFDbkQsdUJBQXFELENBQUMsQ0FBQztBQUN2RyxNQUFNcUIsbUJBQWlCLEdBQUcsZUFBZSxDQUFDbEIsaUJBQStDLENBQUMsQ0FBQztBQUMzRixNQUFNdUQsMEJBQXdCLEdBQUcsZUFBZSxDQUFDMUMsd0JBQTJDLENBQUMsQ0FBQztBQUM5RixNQUFNMkMsbUJBQWlCLEdBQUcsZUFBZSxDQUFDekMsaUJBQW9DLENBQUMsQ0FBQztBQUNoRixNQUFNMEMsMkJBQXlCLEdBQUcsZUFBZSxDQUFDeEMseUJBQTZDLENBQUMsQ0FBQztBQUNqRyxNQUFNeUMsMEJBQXdCLEdBQUcsZUFBZSxDQUFDdkMsd0JBQTRDLENBQUMsQ0FBQztBQUMvRixNQUFNd0Msc0JBQW9CLEdBQUcsZUFBZSxDQUFDdEMsb0JBQXVDLENBQUMsQ0FBQztBQUN0RixNQUFNaUMsc0JBQW9CLEdBQUcsZUFBZSxDQUFDckIsb0JBQXVDLENBQUMsQ0FBQztBQUN0RixNQUFNMkIsaUNBQStCLEdBQUcsZUFBZSxDQUFDekIsK0JBQWtELENBQUMsQ0FBQztBQUM1RyxjQUFjLEdBQUcsSUFBSWlCLFFBQVEsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLGNBQWMsR0FBRyxJQUFJQSxRQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEUsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDbEMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUNELGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDdEIsU0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDdEMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUNELGlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUM5QixTQUFTLHlCQUF5QixDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUU7QUFDeEQsSUFBSSxNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDNUQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJRSxzQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSUssc0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUMvRCxJQUFJLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFDRCxpQ0FBaUMsR0FBRyx5QkFBeUIsQ0FBQztBQUM5RCxTQUFTLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUUsWUFBWSxHQUFHLElBQUksRUFBRTtBQUNyRSxJQUFJLE9BQU9OLGNBQWdCLENBQUMsMEJBQTBCLENBQUM7QUFDdkQsUUFBUSxPQUFPLEVBQUU7QUFDakIsWUFBWSxJQUFJbkMsbUJBQWlCLENBQUMsT0FBTyxFQUFFO0FBQzNDLFlBQVksSUFBSThCLHlCQUF1QixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDN0QsWUFBWSxJQUFJTywwQkFBd0IsQ0FBQyxPQUFPLEVBQUU7QUFDbEQsWUFBWSxJQUFJSyxpQ0FBK0IsQ0FBQyxPQUFPLEVBQUU7QUFDekQsWUFBWSxJQUFJSixtQkFBaUIsQ0FBQyxPQUFPLEVBQUU7QUFDM0MsU0FBUztBQUNULFFBQVEsUUFBUSxFQUFFLENBQUMsSUFBSUMsMkJBQXlCLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSUMsMEJBQXdCLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkcsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFDRCwyQkFBMkIsR0FBRyxtQkFBbUI7Ozs7QUM3Q2pELElBQUksZUFBZSxHQUFHLENBQUM5RCxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLE1BQU0sTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtBQUNoRyxJQUFJLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0FBQzVCLElBQUksSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDSixJQUFJLGtCQUFrQixHQUFHLENBQUNBLGNBQUksSUFBSUEsY0FBSSxDQUFDLGtCQUFrQixNQUFNLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQy9GLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4RSxDQUFDLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3BCLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUNILElBQUksWUFBWSxHQUFHLENBQUNBLGNBQUksSUFBSUEsY0FBSSxDQUFDLFlBQVksS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUNqRSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDMUMsSUFBSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0ksSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsSUFBSSxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFDRixJQUFJLGVBQWUsR0FBRyxDQUFDQSxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxHQUFHLEVBQUU7QUFDdkUsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQ0MsU0FBZ0IsQ0FBQyxDQUFDO0FBQ1I7QUFDaUU7QUFDM0Q7QUFDaEQsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDRyxnQkFBMkMsQ0FBQyxDQUFDO0FBQzdFLE1BQU0sa0JBQWtCLFNBQVNHLDhCQUFnQyxDQUFDLHNDQUFzQyxDQUFDO0FBQ3pHLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRTtBQUMxQixRQUFRLE9BQU8sd0VBQXdFLENBQUM7QUFDeEYsS0FBSztBQUNMLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakMsUUFBUSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxRCxRQUFRLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNqRCxRQUFRLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQzVELFFBQVEsUUFBUSxTQUFTO0FBQ3pCLFlBQVksS0FBSyxZQUFZO0FBQzdCLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELFlBQVksS0FBSyxhQUFhO0FBQzlCLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pELFlBQVksS0FBSyxNQUFNO0FBQ3ZCLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdELFlBQVksS0FBSyxRQUFRO0FBQ3pCLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVELFlBQVk7QUFDWixnQkFBZ0IsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQ3JELG9CQUFvQkYsS0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyRSxvQkFBb0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEQsb0JBQW9CLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFSSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLGlCQUFpQjtBQUNqQixxQkFBcUIsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQ3pELG9CQUFvQixVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzRCxvQkFBb0JKLEtBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDckUsb0JBQW9CLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsUUFBUSxPQUFPLFNBQVMsQ0FBQztBQUN6QixLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyxrQkFBa0I7Ozs7QUM1RHBDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCO0FBQ2lFO0FBQzNHLE1BQU0sa0JBQWtCLFNBQVNFLDhCQUFnQyxDQUFDLHNDQUFzQyxDQUFDO0FBQ3pHLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRTtBQUMxQixRQUFRLE9BQU8sa0VBQWtFLENBQUM7QUFDbEYsS0FBSztBQUNMLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakMsUUFBUSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkQsUUFBUSxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUM1RCxRQUFRLFFBQVEsV0FBVztBQUMzQixZQUFZLEtBQUssWUFBWSxDQUFDO0FBQzlCLFlBQVksS0FBSyxPQUFPO0FBQ3hCLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1QyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFRSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxNQUFNO0FBQ3ZCLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1QyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxPQUFPO0FBQ3hCLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxRQUFRO0FBQ3pCLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1QyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQWdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFnQixNQUFNO0FBQ3RCLFlBQVksS0FBSyxVQUFVO0FBQzNCLGdCQUFnQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakUsZ0JBQWdCLE1BQU07QUFDdEIsU0FBUztBQUNULFFBQVEsT0FBTyxTQUFTLENBQUM7QUFDekIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsa0JBQWtCOzs7O0FDeENwQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN5QztBQUN2RyxNQUFNLHNCQUFzQixTQUFTLDhCQUE4QixDQUFDLDRCQUE0QixDQUFDO0FBQ2pHLElBQUksYUFBYSxHQUFHO0FBQ3BCLFFBQVEsT0FBTyxtQkFBbUIsQ0FBQztBQUNuQyxLQUFLO0FBQ0wsSUFBSSxjQUFjLEdBQUc7QUFDckIsUUFBUSxPQUFPLHNDQUFzQyxDQUFDO0FBQ3RELEtBQUs7QUFDTCxJQUFJLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakQsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUU7QUFDN0MsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixTQUFTO0FBQ1QsUUFBUSxPQUFPLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEUsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsc0JBQXNCOzs7O0FDaEJ4QyxJQUFJLGVBQWUsR0FBRyxDQUFDVCxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxHQUFHLEVBQUU7QUFDdkUsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELE1BQU0sOEJBQThCLEdBQUcsZUFBZSxDQUFDQyw0QkFBZ0UsQ0FBQyxDQUFDO0FBQ3pILE1BQU0sc0JBQXNCLFNBQVMsOEJBQThCLENBQUMsT0FBTyxDQUFDO0FBQzVFLElBQUksY0FBYyxHQUFHO0FBQ3JCLFFBQVEsT0FBTyxJQUFJLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzVELEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLHNCQUFzQjs7OztBQ1Z4QyxJQUFJLGVBQWUsR0FBRyxDQUFDRCxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxHQUFHLEVBQUU7QUFDdkUsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELE1BQU1ZLGlDQUErQixHQUFHLGVBQWUsQ0FBQ1gsK0JBQWlFLENBQUMsQ0FBQztBQUMzSCxNQUFNLHVCQUF1QixTQUFTVyxpQ0FBK0IsQ0FBQyxPQUFPLENBQUM7QUFDOUUsSUFBSSxjQUFjLEdBQUc7QUFDckIsUUFBUSxPQUFPLGtCQUFrQixDQUFDO0FBQ2xDLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLHVCQUF1Qjs7OztBQ1Z6QyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxzQkFBc0IsR0FBRywwQkFBMEIsR0FBRyxpQkFBaUIsR0FBRyxvQkFBb0IsR0FBRyxpQ0FBaUMsR0FBRyw4QkFBOEIsR0FBRywwQkFBMEIsR0FBRyxzQkFBc0IsR0FBRyw0QkFBNEIsR0FBRywrQkFBK0IsR0FBRyx3QkFBd0IsR0FBRywwQkFBMEIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMzUztBQUNqRCwwQkFBMEIsR0FBRztBQUM3QixJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUNqQixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ2YsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQztBQUNGLHdCQUF3QixHQUFHO0FBQzNCLElBQUksU0FBUyxFQUFFLENBQUM7QUFDaEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNoQixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksU0FBUyxFQUFFLENBQUM7QUFDaEIsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQ2xCLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFJLFNBQVMsRUFBRSxFQUFFO0FBQ2pCLElBQUksS0FBSyxFQUFFLEVBQUU7QUFDYixJQUFJLE1BQU0sRUFBRSxFQUFFO0FBQ2QsSUFBSSxVQUFVLEVBQUUsRUFBRTtBQUNsQixJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ2IsSUFBSSxNQUFNLEVBQUUsRUFBRTtBQUNkLElBQUksVUFBVSxFQUFFLEVBQUU7QUFDbEIsSUFBSSxVQUFVLEVBQUUsRUFBRTtBQUNsQixJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ2IsSUFBSSxNQUFNLEVBQUUsRUFBRTtBQUNkLENBQUMsQ0FBQztBQUNGLCtCQUErQixHQUFHO0FBQ2xDLElBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLElBQUksUUFBUSxFQUFFLENBQUM7QUFDZixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksS0FBSyxFQUFFLEVBQUU7QUFDYixJQUFJLE1BQU0sRUFBRSxFQUFFO0FBQ2QsSUFBSSxPQUFPLEVBQUUsRUFBRTtBQUNmLElBQUksUUFBUSxFQUFFLEVBQUU7QUFDaEIsQ0FBQyxDQUFDO0FBQ0YsNEJBQTRCLEdBQUc7QUFDL0IsSUFBSSxLQUFLLEVBQUUsUUFBUTtBQUNuQixJQUFJLFNBQVMsRUFBRSxRQUFRO0FBQ3ZCLElBQUksVUFBVSxFQUFFLFFBQVE7QUFDeEIsSUFBSSxLQUFLLEVBQUUsUUFBUTtBQUNuQixJQUFJLE1BQU0sRUFBRSxRQUFRO0FBQ3BCLElBQUksUUFBUSxFQUFFLFFBQVE7QUFDdEIsSUFBSSxTQUFTLEVBQUUsUUFBUTtBQUN2QixJQUFJLEdBQUcsRUFBRSxNQUFNO0FBQ2YsSUFBSSxJQUFJLEVBQUUsTUFBTTtBQUNoQixJQUFJLEtBQUssRUFBRSxNQUFNO0FBQ2pCLElBQUksT0FBTyxFQUFFLE1BQU07QUFDbkIsSUFBSSxRQUFRLEVBQUUsTUFBTTtBQUNwQixJQUFJLE1BQU0sRUFBRSxHQUFHO0FBQ2YsSUFBSSxPQUFPLEVBQUUsR0FBRztBQUNoQixJQUFJLFNBQVMsRUFBRSxNQUFNO0FBQ3JCLElBQUksVUFBVSxFQUFFLE1BQU07QUFDdEIsSUFBSSxNQUFNLEVBQUUsT0FBTztBQUNuQixJQUFJLFdBQVcsRUFBRSxTQUFTO0FBQzFCLElBQUksWUFBWSxFQUFFLFNBQVM7QUFDM0IsSUFBSSxLQUFLLEVBQUUsTUFBTTtBQUNqQixJQUFJLE9BQU8sRUFBRSxNQUFNO0FBQ25CLElBQUksUUFBUSxFQUFFLE1BQU07QUFDcEIsQ0FBQyxDQUFDO0FBQ0Ysc0JBQXNCLEdBQUcsQ0FBQyxHQUFHLEVBQUVWLE9BQVMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUMxSSxTQUFTLGtCQUFrQixDQUFDLEtBQUssRUFBRTtBQUNuQyxJQUFJLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNwQyxJQUFJLElBQUksT0FBTyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUM1RCxRQUFRLE9BQU8sT0FBTyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELEtBQUs7QUFDTCxTQUFTLElBQUksR0FBRyxLQUFLLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0FBQzVDLFFBQVEsT0FBTyxDQUFDLENBQUM7QUFDakIsS0FBSztBQUNMLFNBQVMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQ3JDLFFBQVEsT0FBTyxDQUFDLENBQUM7QUFDakIsS0FBSztBQUNMLFNBQVMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ2xDLFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDbkIsS0FBSztBQUNMLElBQUksT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUNELDBCQUEwQixHQUFHLGtCQUFrQixDQUFDO0FBQ2hELDhCQUE4QixHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN6RCxTQUFTLHlCQUF5QixDQUFDLEtBQUssRUFBRTtBQUMxQyxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN0QyxJQUFJLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFDRCxpQ0FBaUMsR0FBRyx5QkFBeUIsQ0FBQztBQUM5RCxvQkFBb0IsR0FBRyxDQUFDLHNGQUFzRixDQUFDLENBQUM7QUFDaEgsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQzFCLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzNCLFFBQVEsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxLQUFLO0FBQ0wsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMvQyxRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QyxRQUFRLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLEtBQUs7QUFDTCxJQUFJLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxJQUFJLElBQUksVUFBVSxHQUFHLEdBQUcsRUFBRTtBQUMxQixRQUFRLElBQUksVUFBVSxHQUFHLEVBQUUsRUFBRTtBQUM3QixZQUFZLFVBQVUsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQzNDLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztBQUMzQyxTQUFTO0FBQ1QsS0FBSztBQUNMLElBQUksT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUNELGlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUM5QixNQUFNLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFQSxPQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNJLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekUsMEJBQTBCLEdBQUdBLE9BQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUM3RixTQUFTLGNBQWMsQ0FBQyxZQUFZLEVBQUU7QUFDdEMsSUFBSSxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBSSxJQUFJLGFBQWEsR0FBRyxZQUFZLENBQUM7QUFDckMsSUFBSSxJQUFJLEtBQUssR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0QsSUFBSSxPQUFPLEtBQUssRUFBRTtBQUNsQixRQUFRLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsRCxRQUFRLGFBQWEsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqRSxRQUFRLEtBQUssR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0QsS0FBSztBQUNMLElBQUksT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUNELHNCQUFzQixHQUFHLGNBQWMsQ0FBQztBQUN4QyxTQUFTLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFDbkQsSUFBSSxNQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxJQUFJLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUN0RSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDMUI7Ozs7QUNyS0EsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEI7QUFDUTtBQUN1RDtBQUNyRDtBQUN0RCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQywwQkFBMEI7QUFDckQsSUFBSSxpQkFBaUI7QUFDckIsSUFBSSxDQUFDLENBQUMsRUFBRUEsT0FBUyxDQUFDLGVBQWUsQ0FBQ0ksV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLElBQUksMEJBQTBCO0FBQzlCLElBQUksaUNBQWlDO0FBQ3JDLElBQUksZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDeEIsTUFBTSxlQUFlLFNBQVNDLDhCQUFnQyxDQUFDLHNDQUFzQyxDQUFDO0FBQ3RHLElBQUksWUFBWSxHQUFHO0FBQ25CLFFBQVEsT0FBTyxPQUFPLENBQUM7QUFDdkIsS0FBSztBQUNMLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakMsUUFBUSxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDN0QsUUFBUSxNQUFNLE1BQU0sR0FBR0QsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pFLFFBQVEsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ2xDLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsU0FBUztBQUNULFFBQVEsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFDOUIsUUFBUSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RDLFFBQVEsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQzVCLFFBQVEsSUFBSSxNQUFNLElBQUksU0FBUyxFQUFFO0FBQ2pDLFlBQVksUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUM5QixTQUFTO0FBQ1QsYUFBYSxJQUFJLE1BQU0sSUFBSSxVQUFVLEVBQUU7QUFDdkMsWUFBWSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQzlCLFNBQVM7QUFDVCxRQUFRLE1BQU0sSUFBSSxHQUFHb0IsS0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvRSxRQUFRLE9BQU8sT0FBTztBQUN0QixhQUFhLHVCQUF1QixFQUFFO0FBQ3RDLGFBQWEsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7QUFDdEMsYUFBYSxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0QyxhQUFhLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3QyxhQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEMsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsZUFBZTs7OztBQzFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDcEI7QUFDMUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXO0FBQ2hELElBQUksbUJBQW1CO0FBQ3ZCLElBQUksb0JBQW9CO0FBQ3hCLElBQUkseUJBQXlCO0FBQzdCLElBQUkseUJBQXlCO0FBQzdCLElBQUksc0NBQXNDO0FBQzFDLElBQUksV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxNQUFNLENBQUMscUNBQXFDO0FBQzNFLElBQUksb0JBQW9CO0FBQ3hCLElBQUkseUJBQXlCO0FBQzdCLElBQUkseUJBQXlCO0FBQzdCLElBQUksc0NBQXNDO0FBQzFDLElBQUksV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNyQixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdkIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sOEJBQThCLENBQUM7QUFDckMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3JCLFFBQVEsT0FBTyxpQkFBaUIsQ0FBQztBQUNqQyxLQUFLO0FBQ0wsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUM1QixRQUFRLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN2SCxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDMUMsWUFBWSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDM0MsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixTQUFTO0FBQ1QsUUFBUSxNQUFNLENBQUMsS0FBSyxHQUFHLDhCQUE4QixDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEcsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUMzQixZQUFZLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMzQyxZQUFZLE9BQU8sSUFBSSxDQUFDO0FBQ3hCLFNBQVM7QUFDVCxRQUFRLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BGLFFBQVEsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25FLFFBQVEsSUFBSSxXQUFXLEVBQUU7QUFDekIsWUFBWSxNQUFNLENBQUMsR0FBRyxHQUFHLDhCQUE4QixDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDaEgsWUFBWSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDNUIsZ0JBQWdCLE1BQU0sQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlDLGFBQWE7QUFDYixTQUFTO0FBQ1QsUUFBUSxPQUFPLE1BQU0sQ0FBQztBQUN0QixLQUFLO0FBQ0wsSUFBSSxPQUFPLG9CQUFvQixDQUFDLG9CQUFvQixFQUFFLEtBQUssRUFBRTtBQUM3RCxRQUFRLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNyQixRQUFRLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN2QixRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztBQUM1QixRQUFRLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsUUFBUSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDekMsWUFBWSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ25ELFNBQVM7QUFDVCxRQUFRLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO0FBQ3ZDLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO0FBQ3hCLFlBQVksUUFBUSxHQUFHakIsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDM0MsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDN0MsWUFBWSxJQUFJLElBQUksR0FBRyxFQUFFO0FBQ3pCLGdCQUFnQixPQUFPLElBQUksQ0FBQztBQUM1QixZQUFZLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xFLFlBQVksSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFO0FBQzdCLGdCQUFnQixRQUFRLEdBQUdBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0FBQy9DLGdCQUFnQixJQUFJLElBQUksSUFBSSxFQUFFLEVBQUU7QUFDaEMsb0JBQW9CLElBQUksR0FBRyxDQUFDLENBQUM7QUFDN0IsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixZQUFZLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUM3QixnQkFBZ0IsUUFBUSxHQUFHQSxJQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUMvQyxnQkFBZ0IsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO0FBQ2hDLG9CQUFvQixJQUFJLElBQUksRUFBRSxDQUFDO0FBQy9CLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULFFBQVEsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRCxRQUFRLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEQsUUFBUSxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDL0IsWUFBWSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlELFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7QUFDM0IsZ0JBQWdCLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUVBLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUUsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixnQkFBZ0Isb0JBQW9CLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1RSxhQUFhO0FBQ2IsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxFQUFFO0FBQ3pDLFlBQVksTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ3pELFlBQVksSUFBSSxNQUFNLElBQUksRUFBRTtBQUM1QixnQkFBZ0IsT0FBTyxJQUFJLENBQUM7QUFDNUIsWUFBWSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFELFNBQVM7QUFDVCxRQUFRLE9BQU8sb0JBQW9CLENBQUM7QUFDcEMsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsOEJBQThCOzs7O0FDakdoRCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNSO0FBQ1Y7QUFDNUMsTUFBTSxXQUFXLEdBQUdILFdBQXVCLENBQUM7QUFDNUMsTUFBTSxXQUFXLEdBQUdBLFdBQXVCLENBQUM7QUFDUTtBQUN1RDtBQUMzRyxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUM3QyxJQUFJLENBQUMsd0NBQXdDLEVBQUUsV0FBVyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQztBQUN0RixJQUFJLENBQUMsdUJBQXVCLENBQUM7QUFDN0IsSUFBSSxDQUFDLENBQUMsRUFBRUosT0FBUyxDQUFDLGVBQWUsQ0FBQ0ksV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0FBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNyQixNQUFNLDZCQUE2QixTQUFTQyw4QkFBZ0MsQ0FBQyxzQ0FBc0MsQ0FBQztBQUNwSCxJQUFJLFlBQVksR0FBRztBQUNuQixRQUFRLE9BQU8sT0FBTyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ2pDLFFBQVEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUUsUUFBUSxNQUFNLEtBQUssR0FBR0QsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDMUYsUUFBUSxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDN0UsUUFBUSxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUU7QUFDdEIsWUFBWSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNqRSxZQUFZLE9BQU8sSUFBSSxDQUFDO0FBQ3hCLFNBQVM7QUFDVCxRQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1QyxRQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN4QyxRQUFRLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQy9CLFlBQVksTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN4RSxZQUFZLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNwRCxTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksTUFBTSxJQUFJLEdBQUdILEtBQU8sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuRixZQUFZLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3QyxTQUFTO0FBQ1QsUUFBUSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUNsQyxZQUFZLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUN4RixZQUFZLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM5QyxZQUFZLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5QyxTQUFTO0FBQ1QsUUFBUSxPQUFPLE1BQU0sQ0FBQztBQUN0QixLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyw2QkFBNkI7Ozs7QUNoRC9DLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCO0FBQ0U7QUFDNkQ7QUFDbkQ7QUFDeEQsTUFBTSx5QkFBeUIsU0FBU0ksOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDaEgsSUFBSSxXQUFXLEdBQUc7QUFDbEIsUUFBUSxLQUFLLEVBQUUsQ0FBQztBQUNoQixLQUFLO0FBQ0wsSUFBSSxZQUFZLEdBQUc7QUFDbkIsUUFBUSxPQUFPLElBQUksTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFRCxXQUFXLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0YsS0FBSztBQUNMLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDakMsUUFBUSxNQUFNLFNBQVMsR0FBR0EsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRCxRQUFRLE1BQU0sZUFBZSxHQUFHSSxTQUFXLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEUsUUFBUSxPQUFPRixPQUFTLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN2RyxLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyx5QkFBeUI7Ozs7QUNsQjNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCO0FBQ0U7QUFDNkQ7QUFDM0csTUFBTSw0QkFBNEIsU0FBU0QsOEJBQWdDLENBQUMsc0NBQXNDLENBQUM7QUFDbkgsSUFBSSxZQUFZLEdBQUc7QUFDbkIsUUFBUSxPQUFPLElBQUksTUFBTSxDQUFDLENBQUMsNkJBQTZCLEVBQUVELFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMzRyxLQUFLO0FBQ0wsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNqQyxRQUFRLE1BQU0sU0FBUyxHQUFHQSxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFFBQVEsT0FBT0UsT0FBUyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDakcsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsNEJBQTRCOzs7O0FDYjlDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCO0FBQ0U7QUFDNkQ7QUFDbkQ7QUFDSjtBQUNwRCxNQUFNLHlCQUF5QixTQUFTRCw4QkFBZ0MsQ0FBQyxzQ0FBc0MsQ0FBQztBQUNoSCxJQUFJLFdBQVcsR0FBRztBQUNsQixRQUFRLEtBQUssRUFBRSxDQUFDO0FBQ2hCLEtBQUs7QUFDTCxJQUFJLFlBQVksR0FBRztBQUNuQixRQUFRLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQywwQkFBMEIsQ0FBQztBQUN0RCxZQUFZLENBQUMsQ0FBQyxFQUFFRCxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztBQUM5QyxZQUFZLENBQUMsaUZBQWlGLENBQUM7QUFDL0YsWUFBWSxDQUFDLEtBQUssRUFBRUosT0FBUyxDQUFDLGVBQWUsQ0FBQ0ksV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLFlBQVksQ0FBQyxpRkFBaUYsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RHLEtBQUs7QUFDTCxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ2pDLFFBQVEsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxXQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVFLFFBQVEsTUFBTSxJQUFJLEdBQUdBLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUM5RSxRQUFRLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUMzQixRQUFRLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUIsUUFBUSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsRCxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDMUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNwSCxZQUFZLFNBQVMsR0FBR0ksU0FBVyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hFLFNBQVM7QUFDVCxRQUFRLE9BQU9GLE9BQVMsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pHLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSxHQUFHLHlCQUF5Qjs7OztBQ2pDM0MsSUFBSSxlQUFlLEdBQUcsQ0FBQ1IsY0FBSSxJQUFJQSxjQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ3ZFLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCwyQkFBMkIsR0FBRyxpQ0FBaUMsR0FBRyxpQkFBaUIsR0FBRyxhQUFhLEdBQUcsY0FBYyxHQUFHLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUN0RjtBQUNoQjtBQUN6QyxNQUFNaUUsc0JBQW9CLEdBQUcsZUFBZSxDQUFDaEUsb0JBQXVDLENBQUMsQ0FBQztBQUN0RixNQUFNaUUsc0JBQW9CLEdBQUcsZUFBZSxDQUFDOUQsb0JBQXVDLENBQUMsQ0FBQztBQUN0RixNQUFNZ0QseUJBQXVCLEdBQUcsZUFBZSxDQUFDbkMsdUJBQXFELENBQUMsQ0FBQztBQUN2RyxNQUFNa0QsMEJBQXdCLEdBQUcsZUFBZSxDQUFDaEQsd0JBQTJDLENBQUMsQ0FBQztBQUM5RixNQUFNaUQsMEJBQXdCLEdBQUcsZUFBZSxDQUFDL0Msd0JBQTRDLENBQUMsQ0FBQztBQUMvRixNQUFNZ0QsMkJBQXlCLEdBQUcsZUFBZSxDQUFDOUMseUJBQTZDLENBQUMsQ0FBQztBQUNqRyxNQUFNK0MsbUJBQWlCLEdBQUcsZUFBZSxDQUFDN0MsaUJBQW9DLENBQUMsQ0FBQztBQUNoRixNQUFNOEMsa0NBQWdDLEdBQUcsZUFBZSxDQUFDbEMsZ0NBQW1ELENBQUMsQ0FBQztBQUM5RyxNQUFNbUMsaUNBQStCLEdBQUcsZUFBZSxDQUFDakMsK0JBQWtELENBQUMsQ0FBQztBQUM1RyxNQUFNa0MsNkJBQTJCLEdBQUcsZUFBZSxDQUFDaEMsMkJBQThDLENBQUMsQ0FBQztBQUNwRyxNQUFNaUMsZ0NBQThCLEdBQUcsZUFBZSxDQUFDL0IsOEJBQWlELENBQUMsQ0FBQztBQUMxRyxNQUFNLGdDQUFnQyxHQUFHLGVBQWUsQ0FBQ0UsOEJBQW1ELENBQUMsQ0FBQztBQUM5RyxjQUFjLEdBQUcsSUFBSVcsUUFBUSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUM7QUFDbEUsY0FBYyxHQUFHLElBQUlBLFFBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNoRSxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUNsQyxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBQ0QsYUFBYSxHQUFHLEtBQUssQ0FBQztBQUN0QixTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUN0QyxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBQ0QsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0FBQzlCLFNBQVMseUJBQXlCLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRTtBQUN4RCxJQUFJLE1BQU0sTUFBTSxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM1RCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUlTLHNCQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDL0QsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJQyxzQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQzNFLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUNELGlDQUFpQyxHQUFHLHlCQUF5QixDQUFDO0FBQzlELFNBQVMsbUJBQW1CLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxZQUFZLEdBQUcsSUFBSSxFQUFFO0FBQ3JFLElBQUksT0FBT1QsY0FBZ0IsQ0FBQywwQkFBMEIsQ0FBQztBQUN2RCxRQUFRLE9BQU8sRUFBRTtBQUNqQixZQUFZLElBQUlMLHlCQUF1QixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDN0QsWUFBWSxJQUFJb0IsaUNBQStCLENBQUMsT0FBTyxFQUFFO0FBQ3pELFlBQVksSUFBSUwsMEJBQXdCLENBQUMsT0FBTyxFQUFFO0FBQ2xELFlBQVksSUFBSUksa0NBQWdDLENBQUMsT0FBTyxFQUFFO0FBQzFELFlBQVksSUFBSUUsNkJBQTJCLENBQUMsT0FBTyxFQUFFO0FBQ3JELFlBQVksSUFBSUMsZ0NBQThCLENBQUMsT0FBTyxFQUFFO0FBQ3hELFlBQVksSUFBSUosbUJBQWlCLENBQUMsT0FBTyxFQUFFO0FBQzNDLFNBQVM7QUFDVCxRQUFRLFFBQVEsRUFBRSxDQUFDLElBQUlGLDBCQUF3QixDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUlDLDJCQUF5QixDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25HLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBQ0QsMkJBQTJCLEdBQUcsbUJBQW1COzs7O0FDbkRqRCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMzQixTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDekIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkIsU0FBUyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztBQUNyQyxTQUFTLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0FBQ3JDLFNBQVMsT0FBTyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7QUFDckMsU0FBUyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztBQUNyQyxTQUFTLE9BQU8sQ0FBQyxnSEFBZ0gsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM3SSxDQUFDO0FBQ0QsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0FBQzlCLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUN6QixJQUFJLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVEOzs7O0FDYkEsSUFBSSxlQUFlLEdBQUcsQ0FBQ3JFLGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUN2RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEI7QUFDVTtBQUN0RCxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUNDLFNBQWdCLENBQUMsQ0FBQztBQUNsRCxNQUFNLE9BQU8sR0FBRyx5RkFBeUYsQ0FBQztBQUMxRyxNQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM3QixNQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM3QixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDcEIsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBQ3ZCLElBQUksT0FBTyxHQUFHO0FBQ2QsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixLQUFLO0FBQ0wsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUM1QixRQUFRLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQ0ssV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFFLFFBQVEsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDQSxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUM7QUFDM0QsWUFBWSxHQUFHLEVBQUUsR0FBRztBQUNwQixZQUFZLEtBQUssRUFBRSxLQUFLO0FBQ3hCLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsUUFBUSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNuRixZQUFZLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVELFlBQVksVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDckQsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsRUFBRTtBQUN2QyxZQUFZLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pELFlBQVksSUFBSSxJQUFJLEdBQUcsV0FBVyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDQSxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDN0YsWUFBWSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDMUMsZ0JBQWdCLElBQUksSUFBSSxJQUFJLENBQUM7QUFDN0IsYUFBYTtBQUNiLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDL0MsZ0JBQWdCLElBQUksSUFBSSxJQUFJLENBQUM7QUFDN0IsYUFBYTtBQUNiLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDL0MsZ0JBQWdCLElBQUksSUFBSSxJQUFJLENBQUM7QUFDN0IsYUFBYTtBQUNiLFlBQVksVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLE1BQU0sSUFBSSxHQUFHSCxLQUFPLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbkYsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQyxTQUFTO0FBQ1QsUUFBUSxPQUFPLFVBQVUsQ0FBQztBQUMxQixLQUFLO0FBQ0wsQ0FBQztBQUNELGVBQWUsR0FBRyxnQkFBZ0I7Ozs7QUNsRGxDLElBQUksZUFBZSxHQUFHLENBQUNILGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUN2RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsTUFBTVksaUNBQStCLEdBQUcsZUFBZSxDQUFDWCwrQkFBaUUsQ0FBQyxDQUFDO0FBQzNILE1BQU0sdUJBQXVCLFNBQVNXLGlDQUErQixDQUFDLE9BQU8sQ0FBQztBQUM5RSxJQUFJLGNBQWMsR0FBRztBQUNyQixRQUFRLE9BQU8sbUJBQW1CLENBQUM7QUFDbkMsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsdUJBQXVCOzs7O0FDVnpDLElBQUksZUFBZSxHQUFHLENBQUNaLGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsTUFBTSxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0FBQ2hHLElBQUksSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDLEtBQUssU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7QUFDNUIsSUFBSSxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNKLElBQUksa0JBQWtCLEdBQUcsQ0FBQ0EsY0FBSSxJQUFJQSxjQUFJLENBQUMsa0JBQWtCLE1BQU0sTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDL0YsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLENBQUMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDcEIsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxZQUFZLEdBQUcsQ0FBQ0EsY0FBSSxJQUFJQSxjQUFJLENBQUMsWUFBWSxLQUFLLFVBQVUsR0FBRyxFQUFFO0FBQ2pFLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUMxQyxJQUFJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3SSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQyxJQUFJLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGLElBQUksZUFBZSxHQUFHLENBQUNBLGNBQUksSUFBSUEsY0FBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUcsRUFBRTtBQUN2RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDQyxTQUFnQixDQUFDLENBQUM7QUFDUjtBQUMxQyxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUNHLGdCQUEyQyxDQUFDLENBQUM7QUFDN0UsTUFBTSxPQUFPLEdBQUcsMEJBQTBCLENBQUM7QUFDM0MsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QixJQUFJLE9BQU8sR0FBRztBQUNkLFFBQVEsT0FBTyxPQUFPLENBQUM7QUFDdkIsS0FBSztBQUNMLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDNUIsUUFBUSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsUUFBUSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RCxRQUFRLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQzdELFFBQVEsUUFBUSxJQUFJO0FBQ3BCLFlBQVksS0FBSyxJQUFJO0FBQ3JCLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdELFlBQVksS0FBSyxJQUFJO0FBQ3JCLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVELFlBQVksS0FBSyxJQUFJLENBQUM7QUFDdEIsWUFBWSxLQUFLLElBQUk7QUFDckIsZ0JBQWdCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekQsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUMxRCxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLFlBQVksVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUVLLElBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0QsU0FBUztBQUNULGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25DLFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsWUFBWSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRUEsSUFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvRCxTQUFTO0FBQ1QsUUFBUSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5QyxRQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRCxRQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLFFBQVEsT0FBTyxVQUFVLENBQUM7QUFDMUIsS0FBSztBQUNMLENBQUM7QUFDRCxlQUFlLEdBQUcsa0JBQWtCOzs7O0FDMURwQyxJQUFJLGVBQWUsR0FBRyxDQUFDVCxjQUFJLElBQUlBLGNBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxHQUFHLEVBQUU7QUFDdkUsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELDJCQUEyQixHQUFHLGlDQUFpQyxHQUFHLGlCQUFpQixHQUFHLGFBQWEsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9JLE1BQU0yRSxvQkFBa0IsR0FBRyxlQUFlLENBQUMxRSxrQkFBcUMsQ0FBQyxDQUFDO0FBQ2xGLE1BQU0yRSwyQkFBeUIsR0FBRyxlQUFlLENBQUN4RSx5QkFBNkMsQ0FBQyxDQUFDO0FBQ2pHLE1BQU15RSxzQkFBb0IsR0FBRyxlQUFlLENBQUM1RCxvQkFBdUMsQ0FBQyxDQUFDO0FBQzdDO0FBQ3pDLGNBQWMsR0FBRyxJQUFJdUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUM7QUFDbEUsY0FBYyxHQUFHLElBQUlBLFFBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBQzVELFNBQVMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ2xDLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFDRCxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLFNBQVMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ3RDLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFDRCxpQkFBaUIsR0FBRyxTQUFTLENBQUM7QUFDOUIsU0FBUyx5QkFBeUIsR0FBRztBQUNyQyxJQUFJLE1BQU0sTUFBTSxHQUFHLG1CQUFtQixFQUFFLENBQUM7QUFDekMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJcUIsc0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUMvRCxJQUFJLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFDRCxpQ0FBaUMsR0FBRyx5QkFBeUIsQ0FBQztBQUM5RCxTQUFTLG1CQUFtQixHQUFHO0FBQy9CLElBQUksT0FBTztBQUNYLFFBQVEsT0FBTyxFQUFFLENBQUMsSUFBSUYsb0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkQsUUFBUSxRQUFRLEVBQUUsQ0FBQyxJQUFJQywyQkFBeUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMzRCxLQUFLLENBQUM7QUFDTixDQUFDO0FBQ0QsMkJBQTJCLEdBQUcsbUJBQW1COzs7O0FDL0JqRCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxpQkFBaUIsR0FBRyxvQkFBb0IsR0FBRyx3QkFBd0IsR0FBRywwQkFBMEIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMxRywwQkFBMEIsR0FBRztBQUM3QixJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLElBQUksZUFBZSxFQUFFLENBQUM7QUFDdEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3BCLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ2YsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUNyQixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLElBQUksY0FBYyxFQUFFLENBQUM7QUFDckIsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3BCLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ2YsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7QUFDRix3QkFBd0IsR0FBRztBQUMzQixJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNsQixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksUUFBUSxFQUFFLENBQUM7QUFDZixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLElBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLFNBQVMsRUFBRSxFQUFFO0FBQ2pCLElBQUksS0FBSyxFQUFFLEVBQUU7QUFDYixJQUFJLE1BQU0sRUFBRSxFQUFFO0FBQ2QsSUFBSSxVQUFVLEVBQUUsRUFBRTtBQUNsQixJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ2IsSUFBSSxNQUFNLEVBQUUsRUFBRTtBQUNkLElBQUksVUFBVSxFQUFFLEVBQUU7QUFDbEIsSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUNiLElBQUksTUFBTSxFQUFFLEVBQUU7QUFDZCxDQUFDLENBQUM7QUFDRixvQkFB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

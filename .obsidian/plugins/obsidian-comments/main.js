'use strict';

var obsidian = require('obsidian');

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    SHOW_RIBBON: true,
    DEFAULT_COLOR: '#b30202',
    DEFAULT_BACKGROUND_COLOR: '#FFDE5C'
};
// Delay passed function for specified timeout
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        let context = this;
        let args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = +setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
const VIEW_TYPE_OB_COMMENTS = 'ob_comments';
class CommentsView extends obsidian.ItemView {
    constructor(leaf) {
        super(leaf);
        this.redraw_debounced = debounce(function () {
            this.redraw();
        }, 1000);
        this.redraw = this.redraw.bind(this);
        this.redraw_debounced = this.redraw_debounced.bind(this);
        this.containerEl = this.containerEl;
        this.registerEvent(this.app.workspace.on("layout-ready", this.redraw_debounced));
        this.registerEvent(this.app.workspace.on("file-open", this.redraw_debounced));
        this.registerEvent(this.app.workspace.on("quick-preview", this.redraw_debounced));
        this.registerEvent(this.app.vault.on("delete", this.redraw));
    }
    getViewType() {
        return VIEW_TYPE_OB_COMMENTS;
    }
    getDisplayText() {
        return "Comments";
    }
    getIcon() {
        return "lines-of-text";
    }
    onClose() {
        return Promise.resolve();
    }
    onOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.redraw();
        });
    }
    redraw() {
        return __awaiter(this, void 0, void 0, function* () {
            let active_leaf = this.app.workspace.getActiveFile();
            this.containerEl.empty();
            this.containerEl.setAttribute('class', 'comment-panel');
            // Condition if current leaf is present
            if (active_leaf) {
                let page_content = yield this.app.vault.read(active_leaf);
                // Convert into HTML element 
                let page_html = document.createElement('Div');
                page_html.innerHTML = page_content;
                // Use HTML parser to find the desired elements
                // Get all .ob-comment elements
                let comment_list = page_html.querySelectorAll("label[class='ob-comment']");
                let El = document.createElement("h3");
                El.setAttribute('class', 'comment-count');
                this.containerEl.appendChild(El);
                El.setText('Comments: ' + comment_list.length);
                for (let i = 0; i < comment_list.length; i++) {
                    let div = document.createElement('Div');
                    div.setAttribute('class', 'comment-pannel-bubble');
                    let labelEl = document.createElement("label");
                    let pEl = document.createElement("p");
                    pEl.setAttribute('class', 'comment-pannel-p1');
                    // Check if user specified a title for this comment
                    if (!comment_list[i].title || comment_list[i].title === "") {
                        // if no title specified, use the line number
                        pEl.setText('--');
                    }
                    else {
                        // Use the given title
                        pEl.setText(comment_list[i].title);
                    }
                    labelEl.appendChild(pEl);
                    let inputEl = document.createElement("input");
                    inputEl.setAttribute('type', 'checkbox');
                    inputEl.setAttribute('style', 'display:none;');
                    labelEl.appendChild(inputEl);
                    pEl = document.createElement("p");
                    pEl.setAttribute('class', 'comment-pannel-p2');
                    pEl.setText(comment_list[i].innerHTML.substring(0, comment_list[i].innerHTML.length - comment_list[i].querySelector('input[type=checkbox]+span').outerHTML.length - comment_list[i].querySelector('input[type=checkbox]').outerHTML.length - 1));
                    labelEl.appendChild(pEl);
                    div.appendChild(labelEl);
                    labelEl = document.createElement("label");
                    inputEl = document.createElement("input");
                    inputEl.setAttribute('type', 'checkbox');
                    inputEl.setAttribute('style', 'display:none;');
                    labelEl.appendChild(inputEl);
                    pEl = document.createElement("p");
                    pEl.setAttribute('class', 'comment-pannel-p3');
                    // Check if user specified additional style for this note
                    if (!comment_list[i].style.cssText) {
                        // if no style was assigned, use default
                        pEl.setText(comment_list[i].querySelector('input[type=checkbox]+span').innerHTML);
                    }
                    else {
                        // Add the new style
                        pEl.setText(comment_list[i].querySelector('input[type=checkbox]+span').innerHTML);
                        pEl.setAttribute('style', comment_list[i].style.cssText);
                    }
                    labelEl.appendChild(pEl);
                    div.appendChild(labelEl);
                    this.containerEl.appendChild(div);
                }
            }
        });
    }
}
class CommentsPlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.showPanel = function () {
            this.app.workspace.getRightLeaf(true)
                .setViewState({ type: VIEW_TYPE_OB_COMMENTS });
        };
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            // Load message
            yield this.loadSettings();
            console.log('Loaded Comments Plugin');
            this.addSettingTab(new CommentsSettingTab(this.app, this));
            this.registerView(VIEW_TYPE_OB_COMMENTS, (leaf) => this.view = new CommentsView(leaf));
            this.addCommand({
                id: "show-comments-panel",
                name: "Open Comments Panel",
                callback: () => this.showPanel()
            });
            this.addCommand({
                id: "add-comment",
                name: "Add Comment",
                callback: () => this.addComment()
            });
            if (this.settings.SHOW_RIBBON) {
                this.addRibbonIcon('lines-of-text', "Show Comments Panel", (e) => this.showPanel());
            }
        });
    }
    onunload() {
        console.log('unloading plugin');
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    addComment() {
        let editor = this.getEditor();
        const lines = this.getLines(editor);
        if (!lines)
            return;
        this.setLines(editor, ['<label class="ob-comment" title="" style=""> ' + lines + ' <input type="checkbox"> <span style=""> Comment </span></label>']);
    }
    getEditor() {
        let view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!view)
            return;
        let cm = view.sourceMode.cmEditor;
        return cm;
    }
    getLines(editor) {
        if (!editor)
            return;
        const selection = editor.getSelection();
        return [selection];
    }
    setLines(editor, lines) {
        const selection = editor.getSelection();
        if (selection != "") {
            editor.replaceSelection(lines.join("\n"));
        }
        else {
            editor.setValue(lines.join("\n"));
        }
    }
}
class CommentsSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Comments Plugin Settings' });
        new obsidian.Setting(containerEl)
            .setName('Default text color')
            .setDesc("Change from the style.css in the package folder")
            .addText(text => text
            .setPlaceholder("....")
            .setValue('')
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.DEFAULT_COLOR = value;
        })));
        new obsidian.Setting(containerEl)
            .setName('Default background color')
            .setDesc('Change from the style.css in the package folder')
            .addText(text => text
            .setPlaceholder("....")
            .setValue('')
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.DEFAULT_BACKGROUND_COLOR = value;
        })));
        new obsidian.Setting(containerEl)
            .setName('Hide Comment Plugin Ribbon')
            .setDesc('After changing this setting unload then reload the plugin for the change to take place')
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.SHOW_RIBBON);
            toggle.onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.SHOW_RIBBON = value;
                yield this.plugin.saveSettings();
            }));
        });
    }
}

module.exports = CommentsPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSXRlbVZpZXcsIE1hcmtkb3duVmlldywgV29ya3NwYWNlTGVhZiwgVEZpbGUsIEFwcCwgVmlldywgTm90aWNlLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmd9IGZyb20gJ29ic2lkaWFuJztcclxuXHJcbmludGVyZmFjZSBDb21tZW50c1NldHRpbmdzIHtcclxuXHRTSE9XX1JJQkJPTjogYm9vbGVhbjtcclxuXHRERUZBVUxUX0NPTE9SOiBzdHJpbmc7XHJcblx0REVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IENvbW1lbnRzU2V0dGluZ3MgPSB7XHJcblx0U0hPV19SSUJCT046IHRydWUsXHJcblx0REVGQVVMVF9DT0xPUjogJyNiMzAyMDInLFxyXG5cdERFRkFVTFRfQkFDS0dST1VORF9DT0xPUjogJyNGRkRFNUMnXHJcbn1cclxuXHJcbi8vIERlbGF5IHBhc3NlZCBmdW5jdGlvbiBmb3Igc3BlY2lmaWVkIHRpbWVvdXRcclxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYzogYW55LCB3YWl0PzogbnVtYmVyLCBpbW1lZGlhdGU/OiBib29sZWFuKSB7XHJcbiAgbGV0IHRpbWVvdXQ6IG51bWJlcjtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XHJcblx0bGV0IGNvbnRleHQgPSB0aGlzO1xyXG5cdGxldCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0XHJcblx0bGV0IGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0ICB0aW1lb3V0ID0gbnVsbDtcclxuXHQgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdH07XHJcblx0bGV0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdHRpbWVvdXQgPSArc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcblx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IFZJRVdfVFlQRV9PQl9DT01NRU5UUyA9ICdvYl9jb21tZW50cyc7XHJcbmNsYXNzIENvbW1lbnRzVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcclxuXHJcblx0Y29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZikge1xyXG5cdFx0c3VwZXIobGVhZik7XHJcblx0XHR0aGlzLnJlZHJhdyA9IHRoaXMucmVkcmF3LmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnJlZHJhd19kZWJvdW5jZWQgPSB0aGlzLnJlZHJhd19kZWJvdW5jZWQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuY29udGFpbmVyRWwgPSB0aGlzLmNvbnRhaW5lckVsO1xyXG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImxheW91dC1yZWFkeVwiLCB0aGlzLnJlZHJhd19kZWJvdW5jZWQpKTtcclxuXHRcdHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJmaWxlLW9wZW5cIiwgdGhpcy5yZWRyYXdfZGVib3VuY2VkKSk7XHJcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAud29ya3NwYWNlLm9uKFwicXVpY2stcHJldmlld1wiLCB0aGlzLnJlZHJhd19kZWJvdW5jZWQpKTtcclxuXHRcdHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbihcImRlbGV0ZVwiLCB0aGlzLnJlZHJhdykpO1xyXG5cdH1cclxuXHJcblx0Z2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBWSUVXX1RZUEVfT0JfQ09NTUVOVFM7XHJcblx0fVxyXG5cclxuXHRnZXREaXNwbGF5VGV4dCgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIFwiQ29tbWVudHNcIjtcclxuXHR9XHJcblxyXG5cdGdldEljb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBcImxpbmVzLW9mLXRleHRcIjtcclxuXHR9XHJcblxyXG5cdG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBvbk9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHR0aGlzLnJlZHJhdygpO1xyXG5cdH1cclxuXHJcblx0cmVkcmF3X2RlYm91bmNlZCA9IGRlYm91bmNlKGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5yZWRyYXcoKTsgICAgICAgIFxyXG5cdH0sIDEwMDApO1xyXG5cclxuXHRhc3luYyByZWRyYXcoKSB7XHJcblx0XHRsZXQgYWN0aXZlX2xlYWYgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xyXG5cdFx0dGhpcy5jb250YWluZXJFbC5lbXB0eSgpO1xyXG5cdFx0dGhpcy5jb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbW1lbnQtcGFuZWwnKVxyXG5cdFx0XHJcblx0XHQvLyBDb25kaXRpb24gaWYgY3VycmVudCBsZWFmIGlzIHByZXNlbnRcclxuXHRcdGlmKGFjdGl2ZV9sZWFmKXtcdFxyXG5cdFx0XHRsZXQgcGFnZV9jb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChhY3RpdmVfbGVhZik7IFxyXG5cdFx0XHQvLyBDb252ZXJ0IGludG8gSFRNTCBlbGVtZW50IFxyXG5cdFx0XHRsZXQgcGFnZV9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRGl2JylcclxuXHRcdFx0cGFnZV9odG1sLmlubmVySFRNTCA9IHBhZ2VfY29udGVudDtcclxuXHRcdFx0Ly8gVXNlIEhUTUwgcGFyc2VyIHRvIGZpbmQgdGhlIGRlc2lyZWQgZWxlbWVudHNcclxuXHRcdFx0Ly8gR2V0IGFsbCAub2ItY29tbWVudCBlbGVtZW50c1xyXG5cdFx0XHRsZXQgY29tbWVudF9saXN0ID0gcGFnZV9odG1sLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwibGFiZWxbY2xhc3M9J29iLWNvbW1lbnQnXVwiKTtcclxuXHJcblx0XHRcdGxldCBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuXHRcdFx0RWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21tZW50LWNvdW50JylcclxuXHRcdFx0dGhpcy5jb250YWluZXJFbC5hcHBlbmRDaGlsZChFbCk7XHJcblx0XHRcdEVsLnNldFRleHQoJ0NvbW1lbnRzOiAnICsgY29tbWVudF9saXN0Lmxlbmd0aCk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnRfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdEaXYnKTtcclxuXHRcdFx0XHRkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21tZW50LXBhbm5lbC1idWJibGUnKVxyXG5cclxuXHRcdFx0XHRsZXQgbGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuXHRcdFx0XHRsZXQgcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0XHRcdFx0cEVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tbWVudC1wYW5uZWwtcDEnKVxyXG5cclxuXHRcdFx0XHQvLyBDaGVjayBpZiB1c2VyIHNwZWNpZmllZCBhIHRpdGxlIGZvciB0aGlzIGNvbW1lbnRcclxuXHRcdFx0XHRpZiAoIWNvbW1lbnRfbGlzdFtpXS50aXRsZSB8fCBjb21tZW50X2xpc3RbaV0udGl0bGUgPT09IFwiXCIpe1xyXG5cdFx0XHRcdFx0Ly8gaWYgbm8gdGl0bGUgc3BlY2lmaWVkLCB1c2UgdGhlIGxpbmUgbnVtYmVyXHJcblx0XHRcdFx0XHRwRWwuc2V0VGV4dCgnLS0nKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBVc2UgdGhlIGdpdmVuIHRpdGxlXHJcblx0XHRcdFx0XHRwRWwuc2V0VGV4dChjb21tZW50X2xpc3RbaV0udGl0bGUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxhYmVsRWwuYXBwZW5kQ2hpbGQocEVsKVxyXG5cclxuXHRcdFx0XHRsZXQgaW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHRcdFx0XHRpbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcblx0XHRcdFx0aW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxyXG5cdFx0XHRcdGxhYmVsRWwuYXBwZW5kQ2hpbGQoaW5wdXRFbClcclxuXHJcblx0XHRcdFx0cEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0XHRcdFx0cEVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tbWVudC1wYW5uZWwtcDInKVxyXG5cdFx0XHRcdHBFbC5zZXRUZXh0KGNvbW1lbnRfbGlzdFtpXS5pbm5lckhUTUwuc3Vic3RyaW5nKDAsIGNvbW1lbnRfbGlzdFtpXS5pbm5lckhUTUwubGVuZ3RoICAtIGNvbW1lbnRfbGlzdFtpXS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XStzcGFuJykub3V0ZXJIVE1MLmxlbmd0aCAtIGNvbW1lbnRfbGlzdFtpXS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpLm91dGVySFRNTC5sZW5ndGggLSAxKSlcclxuXHRcdFx0XHRsYWJlbEVsLmFwcGVuZENoaWxkKHBFbClcclxuXHRcdFx0XHRkaXYuYXBwZW5kQ2hpbGQobGFiZWxFbClcclxuXHJcblxyXG5cdFx0XHRcdGxhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcblx0XHRcdFx0aW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHRcdFx0XHRpbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcblx0XHRcdFx0aW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxyXG5cdFx0XHRcdGxhYmVsRWwuYXBwZW5kQ2hpbGQoaW5wdXRFbClcclxuXHRcdFx0XHRwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRcdFx0XHRwRWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21tZW50LXBhbm5lbC1wMycpXHJcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdXNlciBzcGVjaWZpZWQgYWRkaXRpb25hbCBzdHlsZSBmb3IgdGhpcyBub3RlXHJcblx0XHRcdFx0aWYgKCFjb21tZW50X2xpc3RbaV0uc3R5bGUuY3NzVGV4dCl7XHJcblx0XHRcdFx0XHQvLyBpZiBubyBzdHlsZSB3YXMgYXNzaWduZWQsIHVzZSBkZWZhdWx0XHJcblx0XHRcdFx0XHRwRWwuc2V0VGV4dChjb21tZW50X2xpc3RbaV0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1jaGVja2JveF0rc3BhbicpLmlubmVySFRNTClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gQWRkIHRoZSBuZXcgc3R5bGVcclxuXHRcdFx0XHRcdHBFbC5zZXRUZXh0KGNvbW1lbnRfbGlzdFtpXS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XStzcGFuJykuaW5uZXJIVE1MKVxyXG5cdFx0XHRcdFx0cEVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb21tZW50X2xpc3RbaV0uc3R5bGUuY3NzVGV4dClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGFiZWxFbC5hcHBlbmRDaGlsZChwRWwpXHJcblx0XHRcdFx0ZGl2LmFwcGVuZENoaWxkKGxhYmVsRWwpXHJcblx0XHRcdFx0dGhpcy5jb250YWluZXJFbC5hcHBlbmRDaGlsZChkaXYpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50c1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IENvbW1lbnRzU2V0dGluZ3M7XHJcblx0dmlldzogVmlldztcclxuXHJcblx0YXN5bmMgb25sb2FkKCkge1xyXG5cdFx0Ly8gTG9hZCBtZXNzYWdlXHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0xvYWRlZCBDb21tZW50cyBQbHVnaW4nKTtcclxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgQ29tbWVudHNTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlclZpZXcoVklFV19UWVBFX09CX0NPTU1FTlRTLCAobGVhZikgPT4gdGhpcy52aWV3ID0gbmV3IENvbW1lbnRzVmlldyhsZWFmKSk7XHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogXCJzaG93LWNvbW1lbnRzLXBhbmVsXCIsXHJcblx0XHRcdG5hbWU6IFwiT3BlbiBDb21tZW50cyBQYW5lbFwiLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4gdGhpcy5zaG93UGFuZWwoKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6IFwiYWRkLWNvbW1lbnRcIixcclxuXHRcdFx0bmFtZTogXCJBZGQgQ29tbWVudFwiLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4gdGhpcy5hZGRDb21tZW50KClcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKHRoaXMuc2V0dGluZ3MuU0hPV19SSUJCT04pe1xyXG5cdFx0XHR0aGlzLmFkZFJpYmJvbkljb24oJ2xpbmVzLW9mLXRleHQnLCBcIlNob3cgQ29tbWVudHMgUGFuZWxcIiwgKGUpID0+IHRoaXMuc2hvd1BhbmVsKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2hvd1BhbmVsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5hcHAud29ya3NwYWNlLmdldFJpZ2h0TGVhZih0cnVlKVxyXG5cdFx0LnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9PQl9DT01NRU5UUyB9KTtcclxuXHR9XHJcblxyXG5cdG9udW5sb2FkKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ3VubG9hZGluZyBwbHVnaW4nKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuXHR9XHJcblxyXG5cdGFkZENvbW1lbnQoKSB7XHJcblx0XHRsZXQgZWRpdG9yID0gdGhpcy5nZXRFZGl0b3IoKTtcclxuXHRcdGNvbnN0IGxpbmVzID0gdGhpcy5nZXRMaW5lcyhlZGl0b3IpO1xyXG5cdFx0aWYgKCFsaW5lcykgcmV0dXJuO1xyXG5cdFx0dGhpcy5zZXRMaW5lcyhlZGl0b3IsIFsnPGxhYmVsIGNsYXNzPVwib2ItY29tbWVudFwiIHRpdGxlPVwiXCIgc3R5bGU9XCJcIj4gJyArIGxpbmVzICsgJyA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+IDxzcGFuIHN0eWxlPVwiXCI+IENvbW1lbnQgPC9zcGFuPjwvbGFiZWw+J10pO1xyXG5cdH1cclxuXHJcblx0Z2V0RWRpdG9yKCk6IENvZGVNaXJyb3IuRWRpdG9yIHtcclxuXHRcdGxldCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuXHRcdGlmICghdmlldykgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBjbSA9IHZpZXcuc291cmNlTW9kZS5jbUVkaXRvcjtcclxuXHRcdHJldHVybiBjbTtcclxuXHR9XHJcblxyXG5cdGdldExpbmVzKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpOiBzdHJpbmdbXSB7XHJcblx0XHRpZiAoIWVkaXRvcikgcmV0dXJuO1xyXG5cdFx0Y29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xyXG5cdFx0cmV0dXJuIFtzZWxlY3Rpb25dO1xyXG5cdH1cclxuXHJcblx0c2V0TGluZXMoZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvciwgbGluZXM6IHN0cmluZ1tdKSB7XHJcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XHJcblx0XHRpZiAoc2VsZWN0aW9uICE9IFwiXCIpIHtcclxuXHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24obGluZXMuam9pbihcIlxcblwiKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlZGl0b3Iuc2V0VmFsdWUobGluZXMuam9pbihcIlxcblwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBDb21tZW50c1NldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuXHRwbHVnaW46IENvbW1lbnRzUGx1Z2luO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBDb21tZW50c1BsdWdpbikge1xyXG5cdFx0c3VwZXIoYXBwLCBwbHVnaW4pO1xyXG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcblx0fVxyXG5cclxuXHRkaXNwbGF5KCk6IHZvaWQge1xyXG5cdFx0bGV0IHtjb250YWluZXJFbH0gPSB0aGlzO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7dGV4dDogJ0NvbW1lbnRzIFBsdWdpbiBTZXR0aW5ncyd9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ0RlZmF1bHQgdGV4dCBjb2xvcicpXHJcblx0XHRcdC5zZXREZXNjKFwiQ2hhbmdlIGZyb20gdGhlIHN0eWxlLmNzcyBpbiB0aGUgcGFja2FnZSBmb2xkZXJcIilcclxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XHJcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKFwiLi4uLlwiKVxyXG5cdFx0XHRcdC5zZXRWYWx1ZSgnJylcclxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5ERUZBVUxUX0NPTE9SID0gdmFsdWU7XHJcblx0XHRcdFx0fSkpO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnRGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yJylcclxuXHRcdFx0LnNldERlc2MoJ0NoYW5nZSBmcm9tIHRoZSBzdHlsZS5jc3MgaW4gdGhlIHBhY2thZ2UgZm9sZGVyJylcclxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XHJcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKFwiLi4uLlwiKVxyXG5cdFx0XHRcdC5zZXRWYWx1ZSgnJylcclxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5ERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IgPSB2YWx1ZTtcclxuXHRcdFx0XHR9KSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdIaWRlIENvbW1lbnQgUGx1Z2luIFJpYmJvbicpXHJcblx0XHRcdC5zZXREZXNjKCdBZnRlciBjaGFuZ2luZyB0aGlzIHNldHRpbmcgdW5sb2FkIHRoZW4gcmVsb2FkIHRoZSBwbHVnaW4gZm9yIHRoZSBjaGFuZ2UgdG8gdGFrZSBwbGFjZScpXHJcblx0XHRcdC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xyXG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5TSE9XX1JJQkJPTik7XHJcblx0XHRcdFx0dG9nZ2xlLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuU0hPV19SSUJCT04gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkl0ZW1WaWV3IiwiUGx1Z2luIiwiTWFya2Rvd25WaWV3IiwiUGx1Z2luU2V0dGluZ1RhYiIsIlNldHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdURBO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElB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

import * as tslib_1 from "tslib";
//import EWCEditor from '../dist/ext-editor.component.js';
//inputs: (new EWCEditor()).properties,
import EWCEditor from '@sencha/ext-web-components-classic/dist/ext-editor.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtEditorComponent, _super);
    function ExtEditorComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignment', 'alignOnScroll', 'alignTarget', 'allowBlur', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'autoSize', 'baseCls', 'bind', 'border', 'bubbleEvents', 'cancelOnEsc', 'childEls', 'cls', 'columnWidth', 'completeOnEnter', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'field', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideEl', 'hideMode', 'html', 'id', 'ignoreNoChange', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'offsets', 'overCls', 'undefined', 'undefined', 'padding', 'parentEl', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'revertInvalid', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'suspendLayout', 'swallowKeys', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'updateEl', 'userCls', 'value', 'viewModel', 'weight', 'width', 'xtype',], (new EWCEditor()).events, ['ready', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforecomplete', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestartedit', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'canceledit', 'childmove', 'complete', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'specialkey', 'startedit', 'staterestore', 'statesave',], vc) || this;
        _this.xtype = 'editor';
        return _this;
    }
    ExtEditorComponent_1 = ExtEditorComponent;
    ExtEditorComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtEditorComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtEditorComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtEditorComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtEditorComponent_1;
    ExtEditorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtEditorComponent = ExtEditorComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtEditor',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignment', 'alignOnScroll', 'alignTarget', 'allowBlur', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'autoSize', 'baseCls', 'bind', 'border', 'bubbleEvents', 'cancelOnEsc', 'childEls', 'cls', 'columnWidth', 'completeOnEnter', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'field', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideEl', 'hideMode', 'html', 'id', 'ignoreNoChange', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'offsets', 'overCls', 'undefined', 'undefined', 'padding', 'parentEl', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'revertInvalid', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'suspendLayout', 'swallowKeys', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'updateEl', 'userCls', 'value', 'viewModel', 'weight', 'width', 'xtype',],
            outputs: ['ready', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforecomplete', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestartedit', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'canceledit', 'childmove', 'complete', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'specialkey', 'startedit', 'staterestore', 'statesave',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtEditorComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtEditorComponent);
    return ExtEditorComponent;
}(EngBase));
export { ExtEditorComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCEditor()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0RWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dEVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMERBQTBEO0FBQzFELHVDQUF1QztBQUN2QyxPQUFPLFNBQVMsTUFBTSxpRUFBaUUsQ0FBQztBQUN4RixPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEM7SUFBd0MsOENBQU87SUFDM0MsNEJBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFIeEIsWUFLSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxTQUFTLEVBQUMscUJBQXFCLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsK0JBQStCLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMs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QUFDNUMseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NFZGl0b3IgZnJvbSAnLi4vZGlzdC9leHQtZWRpdG9yLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NFZGl0b3IoKSkucHJvcGVydGllcyxcbmltcG9ydCBFV0NFZGl0b3IgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1lZGl0b3IuY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRFZGl0b3InLFxuICAgIGlucHV0czogWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3Rpb25zJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUNvdW50ZXInLCdhY3RpdmVJdGVtJywnYWxpZ25tZW50JywnYWxpZ25PblNjcm9sbCcsJ2FsaWduVGFyZ2V0JywnYWxsb3dCbHVyJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclNpemUnLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYXV0b1NpemUnLCdiYXNlQ2xzJywnYmluZCcsJ2JvcmRlcicsJ2J1YmJsZUV2ZW50cycsJ2NhbmNlbE9uRXNjJywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBsZXRlT25FbnRlcicsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGV0YWNoT25SZW1vdmUnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkQ2xzJywnZG9jaycsJ2RyYWdnYWJsZScsJ2ZpZWxkJywnZml4ZWQnLCdmbGV4JywnZmxvYXRpbmcnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywnZm9ybUJpbmQnLCdmcmFtZScsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVFbCcsJ2hpZGVNb2RlJywnaHRtbCcsJ2lkJywnaWdub3JlTm9DaGFuZ2UnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpdGVtSWQnLCdpdGVtcycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXlvdXQnLCdsaXF1aWRMYXlvdXQnLCdsaXN0ZW5lcnMnLCdsaXZlRHJhZycsJ2xvYWRlcicsJ21hcmdpbicsJ21hc2tEZWZhdWx0cycsJ21hc2tFbGVtZW50JywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywnb2Zmc2V0cycsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGFyZW50RWwnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVzZXRGb2N1c1Bvc2l0aW9uJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3JldmVydEludmFsaWQnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3R5bGUnLCdzdXNwZW5kTGF5b3V0Jywnc3dhbGxvd0tleXMnLCd0YWJHdWFyZCcsJ3RhYkluZGV4JywndG9Gcm9udE9uU2hvdycsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VpQ2xzJywndXBkYXRlRWwnLCd1c2VyQ2xzJywndmFsdWUnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdhY3RpdmF0ZScsJ2FkZCcsJ2FkZGVkJywnYWZ0ZXJsYXlvdXQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVhZGQnLCdiZWZvcmVjb21wbGV0ZScsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlbW92ZScsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGFydGVkaXQnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjYW5jZWxlZGl0JywnY2hpbGRtb3ZlJywnY29tcGxldGUnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2Rpc2FibGUnLCdlbmFibGUnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ21vdmUnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3NwZWNpYWxrZXknLCdzdGFydGVkaXQnLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEVkaXRvckNvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsXG4gICAgICAgIHZjOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3Rpb25zJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUNvdW50ZXInLCdhY3RpdmVJdGVtJywnYWxpZ25tZW50JywnYWxpZ25PblNjcm9sbCcsJ2FsaWduVGFyZ2V0JywnYWxsb3dCbHVyJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclNpemUnLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYXV0b1NpemUnLCdiYXNlQ2xzJywnYmluZCcsJ2JvcmRlcicsJ2J1YmJsZUV2ZW50cycsJ2NhbmNlbE9uRXNjJywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBsZXRlT25FbnRlcicsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGV0YWNoT25SZW1vdmUnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkQ2xzJywnZG9jaycsJ2RyYWdnYWJsZScsJ2ZpZWxkJywnZml4ZWQnLCdmbGV4JywnZmxvYXRpbmcnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywnZm9ybUJpbmQnLCdmcmFtZScsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVFbCcsJ2hpZGVNb2RlJywnaHRtbCcsJ2lkJywnaWdub3JlTm9DaGFuZ2UnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpdGVtSWQnLCdpdGVtcycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXlvdXQnLCdsaXF1aWRMYXlvdXQnLCdsaXN0ZW5lcnMnLCdsaXZlRHJhZycsJ2xvYWRlcicsJ21hcmdpbicsJ21hc2tEZWZhdWx0cycsJ21hc2tFbGVtZW50JywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywnb2Zmc2V0cycsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGFyZW50RWwnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVzZXRGb2N1c1Bvc2l0aW9uJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3JldmVydEludmFsaWQnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3R5bGUnLCdzdXNwZW5kTGF5b3V0Jywnc3dhbGxvd0tleXMnLCd0YWJHdWFyZCcsJ3RhYkluZGV4JywndG9Gcm9udE9uU2hvdycsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VpQ2xzJywndXBkYXRlRWwnLCd1c2VyQ2xzJywndmFsdWUnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NFZGl0b3IoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2FjdGl2YXRlJywnYWRkJywnYWRkZWQnLCdhZnRlcmxheW91dCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWFkZCcsJ2JlZm9yZWNvbXBsZXRlJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc3Ryb3knLCdiZWZvcmVoaWRlJywnYmVmb3JlcmVtb3ZlJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXJ0ZWRpdCcsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NhbmNlbGVkaXQnLCdjaGlsZG1vdmUnLCdjb21wbGV0ZScsJ2RlYWN0aXZhdGUnLCdkZXN0cm95JywnZGlzYWJsZScsJ2VuYWJsZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoaWRlJywnbW92ZScsJ3JlbW92ZScsJ3JlbW92ZWQnLCdyZW5kZXInLCdyZXNpemUnLCdzaG93Jywnc3BlY2lhbGtleScsJ3N0YXJ0ZWRpdCcsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdlZGl0b3InXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ0VkaXRvcigpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19
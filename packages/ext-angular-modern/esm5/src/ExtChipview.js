import * as tslib_1 from "tslib";
//import EWCChipview from '../dist/ext-chipview.component.js';
//inputs: (new EWCChipview()).properties,
import EWCChipview from '@sencha/ext-web-components-modern/dist/ext-chipview.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtChipviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtChipviewComponent, _super);
    function ExtChipviewComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'centered', 'closable', 'closableField', 'closeHandler', 'cls', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'displayed', 'displayField', 'displayTpl', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'undefined', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'iconClsField', 'iconField', 'id', 'inactiveChildTabIndex', 'inline', 'innerCls', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemId', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lastSelected', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'pressedDelay', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'scope', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selected', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCChipview()).events, ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforestorechange', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'childdoubletap', 'childlongpress', 'childmouseenter', 'childmouseleave', 'childsingletap', 'childtap', 'childtaphold', 'childtouchcancel', 'childtouchend', 'childtouchmove', 'childtouchstart', 'deactivate', 'deselect', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'itemdoubletap', 'itemlongpress', 'itemmouseenter', 'itemmouseleave', 'itemsingletap', 'itemswipe', 'itemtap', 'itemtaphold', 'itemtouchcancel', 'itemtouchend', 'itemtouchmove', 'itemtouchstart', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'navigate', 'orientationchange', 'painted', 'positionedchange', 'refresh', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'rowselection', 'scrollablechange', 'select', 'selectionchange', 'show', 'storechange', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc) || this;
        _this.xtype = 'chipview';
        return _this;
    }
    ExtChipviewComponent_1 = ExtChipviewComponent;
    ExtChipviewComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtChipviewComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtChipviewComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtChipviewComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtChipviewComponent_1;
    ExtChipviewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtChipviewComponent = ExtChipviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtChipview',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'centered', 'closable', 'closableField', 'closeHandler', 'cls', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'displayed', 'displayField', 'displayTpl', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'undefined', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'iconClsField', 'iconField', 'id', 'inactiveChildTabIndex', 'inline', 'innerCls', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemId', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lastSelected', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'pressedDelay', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'scope', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selected', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',],
            outputs: ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforestorechange', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'childdoubletap', 'childlongpress', 'childmouseenter', 'childmouseleave', 'childsingletap', 'childtap', 'childtaphold', 'childtouchcancel', 'childtouchend', 'childtouchmove', 'childtouchstart', 'deactivate', 'deselect', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'itemdoubletap', 'itemlongpress', 'itemmouseenter', 'itemmouseleave', 'itemsingletap', 'itemswipe', 'itemtap', 'itemtaphold', 'itemtouchcancel', 'itemtouchend', 'itemtouchmove', 'itemtouchstart', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'navigate', 'orientationchange', 'painted', 'positionedchange', 'refresh', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'rowselection', 'scrollablechange', 'select', 'selectionchange', 'show', 'storechange', 'tofront', 'topchange', 'updatedata', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtChipviewComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtChipviewComponent);
    return ExtChipviewComponent;
}(EngBase));
export { ExtChipviewComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCChipview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q2hpcHZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9FeHRDaGlwdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOERBQThEO0FBQzlELHlDQUF5QztBQUN6QyxPQUFPLFdBQVcsTUFBTSxrRUFBa0UsQ0FBQztBQUMzRixPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEM7SUFBMEMsZ0RBQU87SUFDN0MsOEJBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFIeEIsWUFLSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxxQkFBcUIsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLCtCQUErQixFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLHFCQUFxQixFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxz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YSxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxRQUFRLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUU7WUFDLzZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFDLENBQUM7WUFDcEYsUUFBUSxFQUFFLDJCQUEyQjtTQUN4QyxDQUFDO1FBSU8sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO09BSDFCLG9CQUFvQixDQWdDaEM7SUFBRCwyQkFBQztDQUFBLEFBaENELENBQTBDLE9BQU8sR0FnQ2hEO1NBaENZLG9CQUFvQjtBQW1DakMsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLHlDQUF5QztBQUV6Qyw4Q0FBOEM7QUFDOUMseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NDaGlwdmlldyBmcm9tICcuLi9kaXN0L2V4dC1jaGlwdmlldy5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDQ2hpcHZpZXcoKSkucHJvcGVydGllcyxcbmltcG9ydCBFV0NDaGlwdmlldyBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1tb2Rlcm4vZGlzdC9leHQtY2hpcHZpZXcuY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRDaGlwdmlldycsXG4gICAgaW5wdXRzOiBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVJdGVtJywnYWxpZ25TZWxmJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhc3NvY2lhdGVkRGF0YScsJ2F1dG9EZXN0cm95JywnYXV0b1NpemUnLCdheGlzTG9jaycsJ2JpbmQnLCdib2R5Q2xzJywnYm9yZGVyJywnYm90dG9tJywnY2FyZFN3aXRjaEFuaW1hdGlvbicsJ2NlbnRlcmVkJywnY2xvc2FibGUnLCdjbG9zYWJsZUZpZWxkJywnY2xvc2VIYW5kbGVyJywnY2xzJywnY29uc3RyYWluQWxpZ24nLCdjb250ZW50RWwnLCdjb250cm9sJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0Rm9jdXMnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmF1bHRzJywnZGVmYXVsdFR5cGUnLCdkZWZlckVtcHR5VGV4dCcsJ2Rlc2VsZWN0T25Db250YWluZXJDbGljaycsJ2Rpc2FibGVkJywnZGlzYWJsZVNlbGVjdGlvbicsJ2Rpc3BsYXllZCcsJ2Rpc3BsYXlGaWVsZCcsJ2Rpc3BsYXlUcGwnLCdkb2NrZWQnLCdkcmFnZ2FibGUnLCdlbXB0eUl0ZW1UZXh0JywnZW1wdHlTdGF0ZScsJ2VtcHR5VGV4dCcsJ2VtcHR5VGV4dERlZmF1bHRzJywnZW1wdHlUZXh0UHJvcGVydHknLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZnVsbHNjcmVlbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdodG1sJywnaWNvbkNsc0ZpZWxkJywnaWNvbkZpZWxkJywnaWQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbmxpbmUnLCdpbm5lckNscycsJ2luc3RhbmNlQ2xzJywnaXRlbUJ1dHRvbk1vZGUnLCdpdGVtQ2xzJywnaXRlbUlkJywnaXRlbVJpcHBsZScsJ2l0ZW1zJywnaXRlbXNGb2N1c2FibGUnLCdpdGVtVHBsJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xhc3RTZWxlY3RlZCcsJ2xheW91dCcsJ2xlZnQnLCdsaXN0ZW5lcnMnLCdsb2FkaW5nSGVpZ2h0JywnbG9hZGluZ1RleHQnLCdtYW5hZ2VCb3JkZXJzJywnbWFyZ2luJywnbWFya0RpcnR5JywnbWFza2VkJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZScsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJlc3NlZERlbGF5JywncHVibGlzaGVzJywncmVjb3JkJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVsYXRpdmUnLCdyZW5kZXJUbycsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3JpZ2h0JywncmlwcGxlJywnc2NvcGUnLCdzY3JvbGxhYmxlJywnc2Nyb2xsRG9jaycsJ3Njcm9sbFRvVG9wT25SZWZyZXNoJywnc2VsZWN0YWJsZScsJ3NlbGVjdGVkJywnc2VsZWN0aW9uJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3N0YXRlZnVsJywnc3RhdGVmdWxEZWZhdWx0cycsJ3N0YXRlSWQnLCdzdG9yZScsJ3N0eWxlJywndGFiSW5kZXgnLCd0b0Zyb250T25TaG93JywndG9vbHRpcCcsJ3RvcCcsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhbnNsYXRhYmxlJywndHJpZ2dlckN0RXZlbnQnLCd0cmlnZ2VyRXZlbnQnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2VpZ2h0ZWQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2FjdGl2YXRlJywnYWN0aXZlSXRlbWNoYW5nZScsJ2FkZCcsJ2FkZGVkJywnYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsJ2JlZm9yZWJvdHRvbWNoYW5nZScsJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVkb2NrZWRjaGFuZ2UnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdG9yZWNoYW5nZScsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjZW50ZXJlZGNoYW5nZScsJ2NoaWxkZG91YmxldGFwJywnY2hpbGRsb25ncHJlc3MnLCdjaGlsZG1vdXNlZW50ZXInLCdjaGlsZG1vdXNlbGVhdmUnLCdjaGlsZHNpbmdsZXRhcCcsJ2NoaWxkdGFwJywnY2hpbGR0YXBob2xkJywnY2hpbGR0b3VjaGNhbmNlbCcsJ2NoaWxkdG91Y2hlbmQnLCdjaGlsZHRvdWNobW92ZScsJ2NoaWxkdG91Y2hzdGFydCcsJ2RlYWN0aXZhdGUnLCdkZXNlbGVjdCcsJ2Rlc3Ryb3knLCdkaXNhYmxlZGNoYW5nZScsJ2RvY2tlZGNoYW5nZScsJ2VyYXNlZCcsJ2Zsb2F0aW5nY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2Z1bGxzY3JlZW4nLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdoaWRlJywnaW5pdGlhbGl6ZScsJ2l0ZW1kb3VibGV0YXAnLCdpdGVtbG9uZ3ByZXNzJywnaXRlbW1vdXNlZW50ZXInLCdpdGVtbW91c2VsZWF2ZScsJ2l0ZW1zaW5nbGV0YXAnLCdpdGVtc3dpcGUnLCdpdGVtdGFwJywnaXRlbXRhcGhvbGQnLCdpdGVtdG91Y2hjYW5jZWwnLCdpdGVtdG91Y2hlbmQnLCdpdGVtdG91Y2htb3ZlJywnaXRlbXRvdWNoc3RhcnQnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ25hdmlnYXRlJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlZnJlc2gnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyaWdodGNoYW5nZScsJ3Jvd3NlbGVjdGlvbicsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzZWxlY3QnLCdzZWxlY3Rpb25jaGFuZ2UnLCdzaG93Jywnc3RvcmVjaGFuZ2UnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDaGlwdmlld0NvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENoaXB2aWV3Q29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVJdGVtJywnYWxpZ25TZWxmJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhc3NvY2lhdGVkRGF0YScsJ2F1dG9EZXN0cm95JywnYXV0b1NpemUnLCdheGlzTG9jaycsJ2JpbmQnLCdib2R5Q2xzJywnYm9yZGVyJywnYm90dG9tJywnY2FyZFN3aXRjaEFuaW1hdGlvbicsJ2NlbnRlcmVkJywnY2xvc2FibGUnLCdjbG9zYWJsZUZpZWxkJywnY2xvc2VIYW5kbGVyJywnY2xzJywnY29uc3RyYWluQWxpZ24nLCdjb250ZW50RWwnLCdjb250cm9sJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0Rm9jdXMnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmF1bHRzJywnZGVmYXVsdFR5cGUnLCdkZWZlckVtcHR5VGV4dCcsJ2Rlc2VsZWN0T25Db250YWluZXJDbGljaycsJ2Rpc2FibGVkJywnZGlzYWJsZVNlbGVjdGlvbicsJ2Rpc3BsYXllZCcsJ2Rpc3BsYXlGaWVsZCcsJ2Rpc3BsYXlUcGwnLCdkb2NrZWQnLCdkcmFnZ2FibGUnLCdlbXB0eUl0ZW1UZXh0JywnZW1wdHlTdGF0ZScsJ2VtcHR5VGV4dCcsJ2VtcHR5VGV4dERlZmF1bHRzJywnZW1wdHlUZXh0UHJvcGVydHknLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZnVsbHNjcmVlbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdodG1sJywnaWNvbkNsc0ZpZWxkJywnaWNvbkZpZWxkJywnaWQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbmxpbmUnLCdpbm5lckNscycsJ2luc3RhbmNlQ2xzJywnaXRlbUJ1dHRvbk1vZGUnLCdpdGVtQ2xzJywnaXRlbUlkJywnaXRlbVJpcHBsZScsJ2l0ZW1zJywnaXRlbXNGb2N1c2FibGUnLCdpdGVtVHBsJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xhc3RTZWxlY3RlZCcsJ2xheW91dCcsJ2xlZnQnLCdsaXN0ZW5lcnMnLCdsb2FkaW5nSGVpZ2h0JywnbG9hZGluZ1RleHQnLCdtYW5hZ2VCb3JkZXJzJywnbWFyZ2luJywnbWFya0RpcnR5JywnbWFza2VkJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZScsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJlc3NlZERlbGF5JywncHVibGlzaGVzJywncmVjb3JkJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVsYXRpdmUnLCdyZW5kZXJUbycsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3JpZ2h0JywncmlwcGxlJywnc2NvcGUnLCdzY3JvbGxhYmxlJywnc2Nyb2xsRG9jaycsJ3Njcm9sbFRvVG9wT25SZWZyZXNoJywnc2VsZWN0YWJsZScsJ3NlbGVjdGVkJywnc2VsZWN0aW9uJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3N0YXRlZnVsJywnc3RhdGVmdWxEZWZhdWx0cycsJ3N0YXRlSWQnLCdzdG9yZScsJ3N0eWxlJywndGFiSW5kZXgnLCd0b0Zyb250T25TaG93JywndG9vbHRpcCcsJ3RvcCcsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhbnNsYXRhYmxlJywndHJpZ2dlckN0RXZlbnQnLCd0cmlnZ2VyRXZlbnQnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2VpZ2h0ZWQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0NoaXB2aWV3KCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdhY3RpdmF0ZScsJ2FjdGl2ZUl0ZW1jaGFuZ2UnLCdhZGQnLCdhZGRlZCcsJ2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RvcmVjaGFuZ2UnLCdiZWZvcmV0b2Zyb250JywnYmVmb3JldG9wY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnYm90dG9tY2hhbmdlJywnY2VudGVyZWRjaGFuZ2UnLCdjaGlsZGRvdWJsZXRhcCcsJ2NoaWxkbG9uZ3ByZXNzJywnY2hpbGRtb3VzZWVudGVyJywnY2hpbGRtb3VzZWxlYXZlJywnY2hpbGRzaW5nbGV0YXAnLCdjaGlsZHRhcCcsJ2NoaWxkdGFwaG9sZCcsJ2NoaWxkdG91Y2hjYW5jZWwnLCdjaGlsZHRvdWNoZW5kJywnY2hpbGR0b3VjaG1vdmUnLCdjaGlsZHRvdWNoc3RhcnQnLCdkZWFjdGl2YXRlJywnZGVzZWxlY3QnLCdkZXN0cm95JywnZGlzYWJsZWRjaGFuZ2UnLCdkb2NrZWRjaGFuZ2UnLCdlcmFzZWQnLCdmbG9hdGluZ2NoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdmdWxsc2NyZWVuJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnaGlkZScsJ2luaXRpYWxpemUnLCdpdGVtZG91YmxldGFwJywnaXRlbWxvbmdwcmVzcycsJ2l0ZW1tb3VzZWVudGVyJywnaXRlbW1vdXNlbGVhdmUnLCdpdGVtc2luZ2xldGFwJywnaXRlbXN3aXBlJywnaXRlbXRhcCcsJ2l0ZW10YXBob2xkJywnaXRlbXRvdWNoY2FuY2VsJywnaXRlbXRvdWNoZW5kJywnaXRlbXRvdWNobW92ZScsJ2l0ZW10b3VjaHN0YXJ0JywnbGVmdGNoYW5nZScsJ21heEhlaWdodGNoYW5nZScsJ21heFdpZHRoY2hhbmdlJywnbWluSGVpZ2h0Y2hhbmdlJywnbWluV2lkdGhjaGFuZ2UnLCdtb3ZlJywnbW92ZWQnLCduYXZpZ2F0ZScsJ29yaWVudGF0aW9uY2hhbmdlJywncGFpbnRlZCcsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZWZyZXNoJywncmVtb3ZlJywncmVtb3ZlZCcsJ3JlbmRlcmVkY2hhbmdlJywncmVzaXplJywncmlnaHRjaGFuZ2UnLCdyb3dzZWxlY3Rpb24nLCdzY3JvbGxhYmxlY2hhbmdlJywnc2VsZWN0Jywnc2VsZWN0aW9uY2hhbmdlJywnc2hvdycsJ3N0b3JlY2hhbmdlJywndG9mcm9udCcsJ3RvcGNoYW5nZScsJ3VwZGF0ZWRhdGEnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjaGlwdmlldydcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDQ2hpcHZpZXcoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==
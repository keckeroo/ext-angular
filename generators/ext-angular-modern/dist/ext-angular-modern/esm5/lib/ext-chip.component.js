/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var chipMetaData = /** @class */ (function () {
    function chipMetaData() {
    }
    chipMetaData.XTYPE = 'chip';
    chipMetaData.PROPERTIESOBJECT = {
        "alwaysOnTop": "Boolean/Number",
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "axisLock": "Boolean",
        "bind": "Object/String",
        "border": "Boolean",
        "bottom": "Number/String",
        "centered": "Boolean",
        "closable": "Boolean",
        "closeHandler": "Function/String",
        "cls": "String/String[]",
        "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
        "contentEl": "Ext.dom.Element/HTMLElement/String",
        "controller": "String/Object/Ext.app.ViewController",
        "data": "Object",
        "defaultListenerScope": "Boolean",
        "disabled": "Boolean",
        "displayed": "Boolean",
        "docked": "String",
        "draggable": "Boolean/Object/Ext.drag.Source",
        "enterAnimation": "String/Mixed",
        "eventHandlers": "Object",
        "exitAnimation": "String/Mixed",
        "flex": "Number/String/Object",
        "floated": "Boolean",
        "focusCls": "String",
        "fullscreen": "Boolean",
        "height": "Number/String",
        "hidden": "Boolean",
        "hideAnimation": "String/Mixed",
        "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
        "hideOnMaskTap": "Boolean",
        "html": "String/Ext.dom.Element/HTMLElement",
        "icon": "String",
        "iconCls": "String",
        "id": "String",
        "instanceCls": "String/String[]",
        "itemId": "String",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "left": "Number/String",
        "listeners": "Object",
        "margin": "Number/String",
        "maxHeight": "Number/String",
        "maxWidth": "Number/String",
        "minHeight": "Number/String",
        "minWidth": "Number/String",
        "modal": "Boolean",
        "modelValidation": "Boolean",
        "name": "String",
        "nameable": "Boolean",
        "padding": "Number/String",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "record": "Ext.data.Model",
        "reference": "String",
        "relative": "Boolean",
        "renderTo": "Ext.dom.Element",
        "right": "Number/String",
        "ripple": "Boolean/Object/String",
        "scope": "Object",
        "scrollable": "Boolean/String/Object",
        "selfAlign": "String",
        "session": "Boolean/Object/Ext.data.Session",
        "shadow": "Boolean",
        "shareableName": "Boolean",
        "shim": "Boolean",
        "showAnimation": "String/Mixed",
        "stateful": "Boolean/Object/String[]",
        "statefulDefaults": "Object/String[]",
        "stateId": "String",
        "style": "String/Object",
        "tabIndex": "Number",
        "text": "String",
        "toFrontOnShow": "Boolean",
        "tooltip": "String/Object",
        "top": "Number/String",
        "touchAction": "Object",
        "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
        "tplWriteMode": "String",
        "translatable": "Object",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String/String[]",
        "userCls": "String/String[]",
        "userSelectable": "Boolean/String/Object",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "weight": "Number",
        "width": "Number/String",
        "x": "Number",
        "xtype": "String",
        "y": "Number",
        "zIndex": "Number",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    chipMetaData.PROPERTIES = [
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'axisLock',
        'bind',
        'border',
        'bottom',
        'centered',
        'closable',
        'closeHandler',
        'cls',
        'constrainAlign',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'enterAnimation',
        'eventHandlers',
        'exitAnimation',
        'flex',
        'floated',
        'focusCls',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'html',
        'icon',
        'iconCls',
        'id',
        'instanceCls',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'ripple',
        'scope',
        'scrollable',
        'selfAlign',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'stateful',
        'statefulDefaults',
        'stateId',
        'style',
        'tabIndex',
        'text',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'userSelectable',
        'viewModel',
        'weight',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    chipMetaData.EVENTS = [
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehide', parameters: 'sender' },
        { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeshow', parameters: 'sender' },
        { name: 'beforetofront', parameters: 'chip' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'chip,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'chip,event' },
        { name: 'focusenter', parameters: 'chip,event' },
        { name: 'focusleave', parameters: 'chip,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'tofront', parameters: 'chip' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    chipMetaData.EVENTNAMES = [
        'added',
        'beforebottomchange',
        'beforecenteredchange',
        'beforedisabledchange',
        'beforedockedchange',
        'beforeheightchange',
        'beforehiddenchange',
        'beforehide',
        'beforeleftchange',
        'beforemaxHeightchange',
        'beforemaxWidthchange',
        'beforeminHeightchange',
        'beforeminWidthchange',
        'beforeorientationchange',
        'beforerightchange',
        'beforescrollablechange',
        'beforeshow',
        'beforetofront',
        'beforetopchange',
        'beforewidthchange',
        'blur',
        'bottomchange',
        'centeredchange',
        'destroy',
        'disabledchange',
        'dockedchange',
        'erased',
        'floatingchange',
        'focus',
        'focusenter',
        'focusleave',
        'fullscreen',
        'heightchange',
        'hiddenchange',
        'hide',
        'initialize',
        'leftchange',
        'maxHeightchange',
        'maxWidthchange',
        'minHeightchange',
        'minWidthchange',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'removed',
        'resize',
        'rightchange',
        'scrollablechange',
        'show',
        'tofront',
        'topchange',
        'updatedata',
        'widthchange',
        'ready'
    ];
    return chipMetaData;
}());
export { chipMetaData };
if (false) {
    /** @type {?} */
    chipMetaData.XTYPE;
    /** @type {?} */
    chipMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    chipMetaData.PROPERTIES;
    /** @type {?} */
    chipMetaData.EVENTS;
    /** @type {?} */
    chipMetaData.EVENTNAMES;
}
var ExtChipComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtChipComponent, _super);
    function ExtChipComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, chipMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,chipMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,chipMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtChipComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,chipMetaData,hostComponent)}
    /**
     * @return {?}
     */
    function () { this.baseOnInit(chipMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtChipComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'chip',
                    inputs: chipMetaData.PROPERTIES,
                    outputs: chipMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtChipComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtChipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtChipComponent;
}(base));
export { ExtChipComponent };
if (false) {
    /** @type {?} */
    ExtChipComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNoaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LWNoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQThUQSxDQUFDO0lBN1RlLGtCQUFLLEdBQVcsTUFBTSxDQUFDO0lBQ3ZCLDZCQUFnQixHQUFRO1FBQ3BDLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsVUFBVSxFQUFFLFNBQVM7UUFDckIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsVUFBVSxFQUFFLFNBQVM7UUFDckIsVUFBVSxFQUFFLFNBQVM7UUFDckIsY0FBYyxFQUFFLGlCQUFpQjtRQUNqQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLGdCQUFnQixFQUFFLHdDQUF3QztRQUMxRCxXQUFXLEVBQUUsb0NBQW9DO1FBQ2pELFlBQVksRUFBRSxzQ0FBc0M7UUFDcEQsTUFBTSxFQUFFLFFBQVE7UUFDaEIsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxVQUFVLEVBQUUsU0FBUztRQUNyQixXQUFXLEVBQUUsU0FBUztRQUN0QixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLGdCQUFnQixFQUFFLGNBQWM7UUFDaEMsZUFBZSxFQUFFLFFBQVE7UUFDekIsZUFBZSxF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aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjaGlwTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY2hpcCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXhpc0xvY2tcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYm90dG9tXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiY2VudGVyZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbG9zYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsb3NlSGFuZGxlclwiOiBcIkZ1bmN0aW9uL1N0cmluZ1wiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb25zdHJhaW5BbGlnblwiOiBcIlN0cmluZy9FeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250ZW50RWxcIjogXCJFeHQuZG9tLkVsZW1lbnQvSFRNTEVsZW1lbnQvU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzcGxheWVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZG9ja2VkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdC9FeHQuZHJhZy5Tb3VyY2VcIixcbiAgICBcImVudGVyQW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJldmVudEhhbmRsZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJleGl0QW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyL1N0cmluZy9PYmplY3RcIixcbiAgICBcImZsb2F0ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZnVsbHNjcmVlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGlkZU9uTWFza1RhcFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmcvRXh0LmRvbS5FbGVtZW50L0hUTUxFbGVtZW50XCIsXG4gICAgXCJpY29uXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpY29uQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsZWZ0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibW9kYWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtb2RlbFZhbGlkYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBhZGRpbmdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVjb3JkXCI6IFwiRXh0LmRhdGEuTW9kZWxcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVsYXRpdmVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInNjb3BlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzZWxmQWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcInN0YXRlZnVsXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlZnVsRGVmYXVsdHNcIjogXCJPYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlSWRcIjogXCJTdHJpbmdcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9wXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuVGVtcGxhdGUvRXh0LlhUZW1wbGF0ZVtdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ4dHlwZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwieVwiOiBcIk51bWJlclwiLFxuICAgIFwiekluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xvc2FibGUnLFxuICAgICdjbG9zZUhhbmRsZXInLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2V4aXRBbmltYXRpb24nLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZGVPbk1hc2tUYXAnLFxuICAgICdodG1sJyxcbiAgICAnaWNvbicsXG4gICAgJ2ljb25DbHMnLFxuICAgICdpZCcsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njb3BlJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlZnVsRGVmYXVsdHMnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RleHQnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2NoaXAnfSxcblx0XHR7bmFtZTonYmVmb3JldG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2NoaXAsZXZlbnQnfSxcblx0XHR7bmFtZTonYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NoaXAsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonY2hpcCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidjaGlwLGV2ZW50J30sXG5cdFx0e25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcblx0XHR7bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxuXHRcdHtuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG5cdFx0e25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOidjaGlwJ30sXG5cdFx0e25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhZGRlZCcsXG5cdFx0J2JlZm9yZWJvdHRvbWNoYW5nZScsXG5cdFx0J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlbGVmdGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcblx0XHQnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J2JlZm9yZXJpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3JldG9wY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnYm90dG9tY2hhbmdlJyxcblx0XHQnY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdkb2NrZWRjaGFuZ2UnLFxuXHRcdCdlcmFzZWQnLFxuXHRcdCdmbG9hdGluZ2NoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdmdWxsc2NyZWVuJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQnaGlkZScsXG5cdFx0J2luaXRpYWxpemUnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmVkJyxcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdwYWludGVkJyxcblx0XHQncG9zaXRpb25lZGNoYW5nZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzaG93Jyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3RvcGNoYW5nZScsXG5cdFx0J3VwZGF0ZWRhdGEnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXAnLCBcbiAgaW5wdXRzOiBjaGlwTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2hpcE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDaGlwQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2hpcENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGNoaXBNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LGNoaXBNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChjaGlwTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=
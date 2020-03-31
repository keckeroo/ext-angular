import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtMenuradioitemComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtMenuradioitemComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtMenuradioitemComponent, "ExtMenuradioitem", never, {
    "aMe": "aMe";
    "header": "header";
    "renderer": "renderer";
    "label": "label";
    "fitToParent": "fitToParent";
    "tab": "tab";
    "config": "config";
    "platformConfig": "platformConfig";
    "extname": "extname";
    "viewport": "viewport";
    "align": "align";
    "plugins": "plugins";
    "responsiveConfig": "responsiveConfig";
    "responsiveFormulas": "responsiveFormulas";
    "alignSelf": "alignSelf";
    "allowUncheck": "allowUncheck";
    "alwaysOnTop": "alwaysOnTop";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "axisLock": "axisLock";
    "bind": "bind";
    "border": "border";
    "bottom": "bottom";
    "centered": "centered";
    "checkChangeDisabled": "checkChangeDisabled";
    "checked": "checked";
    "checkHandler": "checkHandler";
    "clickHideDelay": "clickHideDelay";
    "cls": "cls";
    "constrainAlign": "constrainAlign";
    "contentEl": "contentEl";
    "controller": "controller";
    "data": "data";
    "defaultListenerScope": "defaultListenerScope";
    "destroyMenu": "destroyMenu";
    "disabled": "disabled";
    "displayed": "displayed";
    "docked": "docked";
    "draggable": "draggable";
    "undefined": "undefined";
    "flex": "flex";
    "floated": "floated";
    "focusCls": "focusCls";
    "fullscreen": "fullscreen";
    "group": "group";
    "handler": "handler";
    "height": "height";
    "hidden": "hidden";
    "hideAnimation": "hideAnimation";
    "hideMode": "hideMode";
    "hideOnClick": "hideOnClick";
    "hideOnMaskTap": "hideOnMaskTap";
    "href": "href";
    "html": "html";
    "icon": "icon";
    "iconAlign": "iconAlign";
    "iconCls": "iconCls";
    "id": "id";
    "indented": "indented";
    "instanceCls": "instanceCls";
    "itemId": "itemId";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "left": "left";
    "listeners": "listeners";
    "margin": "margin";
    "maxHeight": "maxHeight";
    "maxWidth": "maxWidth";
    "menu": "menu";
    "menuAlign": "menuAlign";
    "menuExpandDelay": "menuExpandDelay";
    "menuHideDelay": "menuHideDelay";
    "minHeight": "minHeight";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "padding": "padding";
    "publishes": "publishes";
    "record": "record";
    "reference": "reference";
    "relative": "relative";
    "renderTo": "renderTo";
    "right": "right";
    "ripple": "ripple";
    "scope": "scope";
    "scrollable": "scrollable";
    "separator": "separator";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "style": "style";
    "submenuText": "submenuText";
    "tabIndex": "tabIndex";
    "target": "target";
    "text": "text";
    "toFrontOnShow": "toFrontOnShow";
    "tooltip": "tooltip";
    "top": "top";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "twoWayBindable": "twoWayBindable";
    "ui": "ui";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
    "value": "value";
    "viewModel": "viewModel";
    "weight": "weight";
    "width": "width";
    "x": "x";
    "xtype": "xtype";
    "y": "y";
    "zIndex": "zIndex";
}, {
    "ready": "ready";
    "created": "created";
    "added": "added";
    "beforebottomchange": "beforebottomchange";
    "beforecenteredchange": "beforecenteredchange";
    "beforecheckchange": "beforecheckchange";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforeheightchange": "beforeheightchange";
    "beforehiddenchange": "beforehiddenchange";
    "beforehide": "beforehide";
    "beforeleftchange": "beforeleftchange";
    "beforemaxHeightchange": "beforemaxHeightchange";
    "beforemaxWidthchange": "beforemaxWidthchange";
    "beforeminHeightchange": "beforeminHeightchange";
    "beforeminWidthchange": "beforeminWidthchange";
    "beforeorientationchange": "beforeorientationchange";
    "beforerightchange": "beforerightchange";
    "beforescrollablechange": "beforescrollablechange";
    "beforeshow": "beforeshow";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "checkchange": "checkchange";
    "destroy": "destroy";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
    "erased": "erased";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "leftchange": "leftchange";
    "maxHeightchange": "maxHeightchange";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "moved": "moved";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "positionedchange": "positionedchange";
    "removed": "removed";
    "resize": "resize";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "show": "show";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0TWVudXJhZGlvaXRlbS5kLnRzIiwic291cmNlcyI6WyJFeHRNZW51cmFkaW9pdGVtLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL3J1bnRpbWUvYW5ndWxhcmJhc2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXh0TWVudXJhZGlvaXRlbUNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6IEVsZW1lbnRSZWYsIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsIHZjOiBWaWV3Q29udGFpbmVyUmVmKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==
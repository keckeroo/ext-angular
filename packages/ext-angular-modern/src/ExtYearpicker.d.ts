import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtYearpickerComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtYearpickerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtYearpickerComponent, "ExtYearpicker", never, {
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
    "activeChildTabIndex": "activeChildTabIndex";
    "activeItem": "activeItem";
    "alignSelf": "alignSelf";
    "allowFocusingDisabledChildren": "allowFocusingDisabledChildren";
    "alwaysOnTop": "alwaysOnTop";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "associatedData": "associatedData";
    "autoDestroy": "autoDestroy";
    "autoSize": "autoSize";
    "axisLock": "axisLock";
    "bind": "bind";
    "bodyCls": "bodyCls";
    "border": "border";
    "bottom": "bottom";
    "bufferSize": "bufferSize";
    "cardSwitchAnimation": "cardSwitchAnimation";
    "centered": "centered";
    "cls": "cls";
    "collapseDefaults": "collapseDefaults";
    "collapsible": "collapsible";
    "constrainAlign": "constrainAlign";
    "contentEl": "contentEl";
    "control": "control";
    "controller": "controller";
    "data": "data";
    "defaultFocus": "defaultFocus";
    "defaultListenerScope": "defaultListenerScope";
    "defaults": "defaults";
    "defaultType": "defaultType";
    "deferEmptyText": "deferEmptyText";
    "deselectOnContainerClick": "deselectOnContainerClick";
    "disabled": "disabled";
    "disableSelection": "disableSelection";
    "disclosureProperty": "disclosureProperty";
    "displayed": "displayed";
    "docked": "docked";
    "draggable": "draggable";
    "emptyItemText": "emptyItemText";
    "emptyState": "emptyState";
    "emptyText": "emptyText";
    "emptyTextDefaults": "emptyTextDefaults";
    "emptyTextProperty": "emptyTextProperty";
    "undefined": "undefined";
    "flex": "flex";
    "floated": "floated";
    "focusableContainer": "focusableContainer";
    "focusCls": "focusCls";
    "fullscreen": "fullscreen";
    "grouped": "grouped";
    "groupFooter": "groupFooter";
    "groupHeader": "groupHeader";
    "grouping": "grouping";
    "groupPlaceholder": "groupPlaceholder";
    "height": "height";
    "hidden": "hidden";
    "hideAnimation": "hideAnimation";
    "hideMode": "hideMode";
    "hideOnMaskTap": "hideOnMaskTap";
    "horizontalOverflow": "horizontalOverflow";
    "html": "html";
    "id": "id";
    "inactiveChildTabIndex": "inactiveChildTabIndex";
    "indexBar": "indexBar";
    "infinite": "infinite";
    "inline": "inline";
    "innerCls": "innerCls";
    "innerCtHeight": "innerCtHeight";
    "innerWidth": "innerWidth";
    "instanceCls": "instanceCls";
    "itemButtonMode": "itemButtonMode";
    "itemCls": "itemCls";
    "itemConfig": "itemConfig";
    "itemContentCls": "itemContentCls";
    "itemDataMap": "itemDataMap";
    "itemId": "itemId";
    "itemInnerCls": "itemInnerCls";
    "itemRipple": "itemRipple";
    "items": "items";
    "itemsFocusable": "itemsFocusable";
    "itemTpl": "itemTpl";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "layout": "layout";
    "left": "left";
    "listeners": "listeners";
    "loadingHeight": "loadingHeight";
    "loadingText": "loadingText";
    "maintainChildNodes": "maintainChildNodes";
    "manageBorders": "manageBorders";
    "margin": "margin";
    "markDirty": "markDirty";
    "masked": "masked";
    "maxHeight": "maxHeight";
    "maxItemCache": "maxItemCache";
    "maxWidth": "maxWidth";
    "minHeight": "minHeight";
    "minimumBufferDistance": "minimumBufferDistance";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "nameHolder": "nameHolder";
    "onItemDisclosure": "onItemDisclosure";
    "padding": "padding";
    "pinFooters": "pinFooters";
    "pinHeaders": "pinHeaders";
    "pinnedFooter": "pinnedFooter";
    "pinnedFooterHeight": "pinnedFooterHeight";
    "pinnedHeader": "pinnedHeader";
    "pinnedHeaderHeight": "pinnedHeaderHeight";
    "pressedDelay": "pressedDelay";
    "preventSelectionOnDisclose": "preventSelectionOnDisclose";
    "preventSelectionOnTool": "preventSelectionOnTool";
    "publishes": "publishes";
    "record": "record";
    "reference": "reference";
    "referenceHolder": "referenceHolder";
    "relative": "relative";
    "renderTo": "renderTo";
    "resetFocusPosition": "resetFocusPosition";
    "right": "right";
    "ripple": "ripple";
    "rowLines": "rowLines";
    "scrollable": "scrollable";
    "scrollDock": "scrollDock";
    "scrollToTopOnRefresh": "scrollToTopOnRefresh";
    "selectable": "selectable";
    "selection": "selection";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "store": "store";
    "striped": "striped";
    "style": "style";
    "tabIndex": "tabIndex";
    "toFrontOnShow": "toFrontOnShow";
    "tooltip": "tooltip";
    "top": "top";
    "topRenderedIndex": "topRenderedIndex";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "triggerCtEvent": "triggerCtEvent";
    "triggerEvent": "triggerEvent";
    "twoWayBindable": "twoWayBindable";
    "ui": "ui";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
    "variableHeights": "variableHeights";
    "verticalOverflow": "verticalOverflow";
    "viewModel": "viewModel";
    "visibleHeight": "visibleHeight";
    "visibleLeft": "visibleLeft";
    "visibleTop": "visibleTop";
    "visibleWidth": "visibleWidth";
    "weight": "weight";
    "weighted": "weighted";
    "width": "width";
    "x": "x";
    "xtype": "xtype";
    "y": "y";
    "zIndex": "zIndex";
}, {
    "ready": "ready";
    "activate": "activate";
    "activeItemchange": "activeItemchange";
    "add": "add";
    "added": "added";
    "beforeactiveItemchange": "beforeactiveItemchange";
    "beforebottomchange": "beforebottomchange";
    "beforecenteredchange": "beforecenteredchange";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforegroupcollapse": "beforegroupcollapse";
    "beforegroupexpand": "beforegroupexpand";
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
    "beforestorechange": "beforestorechange";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "childdoubletap": "childdoubletap";
    "childlongpress": "childlongpress";
    "childmouseenter": "childmouseenter";
    "childmouseleave": "childmouseleave";
    "childsingletap": "childsingletap";
    "childtap": "childtap";
    "childtaphold": "childtaphold";
    "childtouchcancel": "childtouchcancel";
    "childtouchend": "childtouchend";
    "childtouchmove": "childtouchmove";
    "childtouchstart": "childtouchstart";
    "deactivate": "deactivate";
    "deselect": "deselect";
    "destroy": "destroy";
    "disabledchange": "disabledchange";
    "disclose": "disclose";
    "dockedchange": "dockedchange";
    "erased": "erased";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "groupcollapse": "groupcollapse";
    "groupexpand": "groupexpand";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "itemaction": "itemaction";
    "itemdoubletap": "itemdoubletap";
    "itemlongpress": "itemlongpress";
    "itemmouseenter": "itemmouseenter";
    "itemmouseleave": "itemmouseleave";
    "itemsingletap": "itemsingletap";
    "itemswipe": "itemswipe";
    "itemtap": "itemtap";
    "itemtaphold": "itemtaphold";
    "itemtouchcancel": "itemtouchcancel";
    "itemtouchend": "itemtouchend";
    "itemtouchmove": "itemtouchmove";
    "itemtouchstart": "itemtouchstart";
    "leftchange": "leftchange";
    "maxHeightchange": "maxHeightchange";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "move": "move";
    "moved": "moved";
    "navigate": "navigate";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "positionedchange": "positionedchange";
    "refresh": "refresh";
    "remove": "remove";
    "removed": "removed";
    "renderedchange": "renderedchange";
    "resize": "resize";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "select": "select";
    "show": "show";
    "storechange": "storechange";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=ExtYearpicker.d.ts.map
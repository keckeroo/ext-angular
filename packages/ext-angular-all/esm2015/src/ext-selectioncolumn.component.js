//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
var ExtSelectioncolumnComponent_1;
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
export class selectioncolumnMetaData {
}
selectioncolumnMetaData.XTYPE = 'selectioncolumn';
selectioncolumnMetaData.PROPERTIES = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'activeChildTabIndex',
    'activeItem',
    'align',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'bodyCls',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'cell',
    'centered',
    'cls',
    'columns',
    'computedWidth',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'dataIndex',
    'defaultColumnUI',
    'defaultEditor',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultToolWeights',
    'defaultType',
    'defaultWidth',
    'depends',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'editable',
    'editor',
    'editorDefaults',
    'exportRenderer',
    'exportStyle',
    'exportSummaryRenderer',
    'filter',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'formatter',
    'fullscreen',
    'groupable',
    'grouper',
    'groupHeaderTpl',
    'headerCheckbox',
    'headerCheckboxAlign',
    'height',
    'hidden',
    'hideable',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'hideShowMenuItem',
    'html',
    'id',
    'ignore',
    'ignoreExport',
    'inactiveChildTabIndex',
    'innerCls',
    'instanceCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'locked',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
    'menu',
    'menuDisabled',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderer',
    'renderTo',
    'reserveScrollbar',
    'resetFocusPosition',
    'resizable',
    'right',
    'ripple',
    'scope',
    'scratchCell',
    'scrollable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sortable',
    'sorter',
    'stateful',
    'statefulDefaults',
    'stateId',
    'stopSelection',
    'style',
    'summary',
    'summaryCell',
    'summaryDataIndex',
    'summaryFormatter',
    'summaryRenderer',
    'tabIndex',
    'text',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
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
    'verticalOverflow',
    'viewModel',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
selectioncolumnMetaData.EVENTS = [
    { name: 'activate', parameters: 'newActiveItem,selectioncolumn,oldActiveItem' },
    { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
    { name: 'add', parameters: 'selectioncolumn,item,index' },
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecheckchange', parameters: 'selectioncolumn,rowIndex,checked,record,e' },
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
    { name: 'beforetofront', parameters: 'selectioncolumn' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'selectioncolumn,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'checkchange', parameters: 'selectioncolumn,rowIndex,checked,record,e' },
    { name: 'deactivate', parameters: 'oldActiveItem,selectioncolumn,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'erased', parameters: 'sender' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'selectioncolumn,event' },
    { name: 'focusenter', parameters: 'selectioncolumn,event' },
    { name: 'focusleave', parameters: 'selectioncolumn,event' },
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
    { name: 'move', parameters: 'selectioncolumn,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'sender,element' },
    { name: 'positionedchange', parameters: 'sender,positioned' },
    { name: 'remove', parameters: 'selectioncolumn,item,index' },
    { name: 'removed', parameters: 'sender,container,index' },
    { name: 'renderedchange', parameters: 'selectioncolumn,item,rendered' },
    { name: 'resize', parameters: 'element,info' },
    { name: 'rightchange', parameters: 'sender,value,oldValue' },
    { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
    { name: 'show', parameters: 'sender' },
    { name: 'tofront', parameters: 'selectioncolumn' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
selectioncolumnMetaData.EVENTNAMES = [
    'activate',
    'activeItemchange',
    'add',
    'added',
    'beforeactiveItemchange',
    'beforebottomchange',
    'beforecenteredchange',
    'beforecheckchange',
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
    'checkchange',
    'deactivate',
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
    'move',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'remove',
    'removed',
    'renderedchange',
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
let ExtSelectioncolumnComponent = ExtSelectioncolumnComponent_1 = class ExtSelectioncolumnComponent extends EngBase {
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, selectioncolumnMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    ngOnInit() {
        this.baseOnInit(selectioncolumnMetaData);
    }
    ngAfterViewInit() {
        this.baseAfterViewInit(selectioncolumnMetaData);
    }
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ngOnChanges(changes) { this.baseOnChanges(changes); }
};
ExtSelectioncolumnComponent = ExtSelectioncolumnComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ext-selectioncolumn',
        inputs: selectioncolumnMetaData.PROPERTIES,
        outputs: selectioncolumnMetaData.EVENTNAMES,
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtSelectioncolumnComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
], ExtSelectioncolumnComponent);
export { ExtSelectioncolumnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNlbGVjdGlvbmNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWFsbC8iLCJzb3VyY2VzIjpbInNyYy9leHQtc2VsZWN0aW9uY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIseUNBQXlDO0FBQ3pDLDJDQUEyQzs7O0FBRzNDLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE1BQU0sT0FBTyx1QkFBdUI7O0FBQ3BCLDZCQUFLLEdBQVcsaUJBQWlCLENBQUM7QUFDbEMsa0NBQVUsR0FBYTtJQUNuQyxLQUFLO0lBQ0wsVUFBVTtJQUNWLE9BQU87SUFDUCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLE9BQU87SUFDUCxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixNQUFNO0lBQ04sVUFBVTtJQUNWLEtBQUs7SUFDTCxTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixNQUFNO0lBQ04sV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjO0lBQ2QsU0FBUztJQUNULFVB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QUEsUUFBUSxFQUFFLENBQUE7NkNBQTNDLFVBQVUsRUFBeUQsT0FBTztHQURsRiwyQkFBMkIsQ0EwQnZDO1NBMUJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vRXh0Lm9uUmVhZHkoZnVuY3Rpb24oKSB7XG4vL2ltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5leHBvcnQgY2xhc3Mgc2VsZWN0aW9uY29sdW1uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnc2VsZWN0aW9uY29sdW1uJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnZW5nJyxcbiAgICAndmlld3BvcnQnLFxuICAgICdhbGlnbicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUZvcm11bGFzJyxcbiAgICAnYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2FjdGl2ZUl0ZW0nLFxuICAgICdhbGlnbicsXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXV0b0Rlc3Ryb3knLFxuICAgICdhdXRvU2l6ZScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvZHlDbHMnLFxuICAgICdib3JkZXInLFxuICAgICdib3R0b20nLFxuICAgICdjYXJkU3dpdGNoQW5pbWF0aW9uJyxcbiAgICAnY2VsbCcsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xzJyxcbiAgICAnY29sdW1ucycsXG4gICAgJ2NvbXB1dGVkV2lkdGgnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2wnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RhdGFJbmRleCcsXG4gICAgJ2RlZmF1bHRDb2x1bW5VSScsXG4gICAgJ2RlZmF1bHRFZGl0b3InLFxuICAgICdkZWZhdWx0Rm9jdXMnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRzJyxcbiAgICAnZGVmYXVsdFRvb2xXZWlnaHRzJyxcbiAgICAnZGVmYXVsdFR5cGUnLFxuICAgICdkZWZhdWx0V2lkdGgnLFxuICAgICdkZXBlbmRzJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNwbGF5ZWQnLFxuICAgICdkb2NrZWQnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdlZGl0YWJsZScsXG4gICAgJ2VkaXRvcicsXG4gICAgJ2VkaXRvckRlZmF1bHRzJyxcbiAgICAnZXhwb3J0UmVuZGVyZXInLFxuICAgICdleHBvcnRTdHlsZScsXG4gICAgJ2V4cG9ydFN1bW1hcnlSZW5kZXJlcicsXG4gICAgJ2ZpbHRlcicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNhYmxlQ29udGFpbmVyJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmb3JtYXR0ZXInLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnZ3JvdXBhYmxlJyxcbiAgICAnZ3JvdXBlcicsXG4gICAgJ2dyb3VwSGVhZGVyVHBsJyxcbiAgICAnaGVhZGVyQ2hlY2tib3gnLFxuICAgICdoZWFkZXJDaGVja2JveEFsaWduJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZWFibGUnLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaGlkZVNob3dNZW51SXRlbScsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2lnbm9yZScsXG4gICAgJ2lnbm9yZUV4cG9ydCcsXG4gICAgJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2lubmVyQ2xzJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdpdGVtcycsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbG9ja2VkJyxcbiAgICAnbWFuYWdlQm9yZGVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hc2tlZCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWVudScsXG4gICAgJ21lbnVEaXNhYmxlZCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICduYW1lSG9sZGVyJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWNvcmQnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWZlcmVuY2VIb2xkZXInLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlcmVyJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXNlcnZlU2Nyb2xsYmFyJyxcbiAgICAncmVzZXRGb2N1c1Bvc2l0aW9uJyxcbiAgICAncmVzaXphYmxlJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdzY29wZScsXG4gICAgJ3NjcmF0Y2hDZWxsJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzb3J0YWJsZScsXG4gICAgJ3NvcnRlcicsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVmdWxEZWZhdWx0cycsXG4gICAgJ3N0YXRlSWQnLFxuICAgICdzdG9wU2VsZWN0aW9uJyxcbiAgICAnc3R5bGUnLFxuICAgICdzdW1tYXJ5JyxcbiAgICAnc3VtbWFyeUNlbGwnLFxuICAgICdzdW1tYXJ5RGF0YUluZGV4JyxcbiAgICAnc3VtbWFyeUZvcm1hdHRlcicsXG4gICAgJ3N1bW1hcnlSZW5kZXJlcicsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndGV4dCcsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sRGVmYXVsdHMnLFxuICAgICd0b29scycsXG4gICAgJ3Rvb2x0aXAnLFxuICAgICd0b3AnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3RyYW5zbGF0YWJsZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndXNlclNlbGVjdGFibGUnLFxuICAgICd2ZXJ0aWNhbE92ZXJmbG93JyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2VpZ2h0ZWQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd4dHlwZScsXG4gICAgJ3knLFxuICAgICd6SW5kZXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOiduZXdBY3RpdmVJdGVtLHNlbGVjdGlvbmNvbHVtbixvbGRBY3RpdmVJdGVtJ30sXG57bmFtZTonYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonYWRkJyxwYXJhbWV0ZXJzOidzZWxlY3Rpb25jb2x1bW4saXRlbSxpbmRleCd9LFxue25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZTonYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWJvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlY2hlY2tjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbGVjdGlvbmNvbHVtbixyb3dJbmRleCxjaGVja2VkLHJlY29yZCxlJ30sXG57bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidiZWZvcmVsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidiZWZvcmVyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOidzZWxlY3Rpb25jb2x1bW4nfSxcbntuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J3NlbGVjdGlvbmNvbHVtbixldmVudCd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NoZWNrY2hhbmdlJyxwYXJhbWV0ZXJzOidzZWxlY3Rpb25jb2x1bW4scm93SW5kZXgsY2hlY2tlZCxyZWNvcmQsZSd9LFxue25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J29sZEFjdGl2ZUl0ZW0sc2VsZWN0aW9uY29sdW1uLG5ld0FjdGl2ZUl0ZW0nfSxcbntuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidzZWxlY3Rpb25jb2x1bW4sZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidzZWxlY3Rpb25jb2x1bW4sZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidzZWxlY3Rpb25jb2x1bW4sZXZlbnQnfSxcbntuYW1lOidmdWxsc2NyZWVuJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbW92ZScscGFyYW1ldGVyczonc2VsZWN0aW9uY29sdW1uLGl0ZW0sdG9JbmRleCxmcm9tSW5kZXgnfSxcbntuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxue25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxue25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZToncmVtb3ZlJyxwYXJhbWV0ZXJzOidzZWxlY3Rpb25jb2x1bW4saXRlbSxpbmRleCd9LFxue25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidyZW5kZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VsZWN0aW9uY29sdW1uLGl0ZW0scmVuZGVyZWQnfSxcbntuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J2VsZW1lbnQsaW5mbyd9LFxue25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOidzZWxlY3Rpb25jb2x1bW4nfSxcbntuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidhY3RpdmF0ZScsXG4nYWN0aXZlSXRlbWNoYW5nZScsXG4nYWRkJyxcbidhZGRlZCcsXG4nYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsXG4nYmVmb3JlYm90dG9tY2hhbmdlJyxcbidiZWZvcmVjZW50ZXJlZGNoYW5nZScsXG4nYmVmb3JlY2hlY2tjaGFuZ2UnLFxuJ2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcbidiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuJ2JlZm9yZWhlaWdodGNoYW5nZScsXG4nYmVmb3JlaGlkZGVuY2hhbmdlJyxcbidiZWZvcmVoaWRlJyxcbidiZWZvcmVsZWZ0Y2hhbmdlJyxcbidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcbidiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZW1pbldpZHRoY2hhbmdlJyxcbidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG4nYmVmb3JlcmlnaHRjaGFuZ2UnLFxuJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLFxuJ2JlZm9yZXNob3cnLFxuJ2JlZm9yZXRvZnJvbnQnLFxuJ2JlZm9yZXRvcGNoYW5nZScsXG4nYmVmb3Jld2lkdGhjaGFuZ2UnLFxuJ2JsdXInLFxuJ2JvdHRvbWNoYW5nZScsXG4nY2VudGVyZWRjaGFuZ2UnLFxuJ2NoZWNrY2hhbmdlJyxcbidkZWFjdGl2YXRlJyxcbidkZXN0cm95JyxcbidkaXNhYmxlZGNoYW5nZScsXG4nZG9ja2VkY2hhbmdlJyxcbidlcmFzZWQnLFxuJ2Zsb2F0aW5nY2hhbmdlJyxcbidmb2N1cycsXG4nZm9jdXNlbnRlcicsXG4nZm9jdXNsZWF2ZScsXG4nZnVsbHNjcmVlbicsXG4naGVpZ2h0Y2hhbmdlJyxcbidoaWRkZW5jaGFuZ2UnLFxuJ2hpZGUnLFxuJ2luaXRpYWxpemUnLFxuJ2xlZnRjaGFuZ2UnLFxuJ21heEhlaWdodGNoYW5nZScsXG4nbWF4V2lkdGhjaGFuZ2UnLFxuJ21pbkhlaWdodGNoYW5nZScsXG4nbWluV2lkdGhjaGFuZ2UnLFxuJ21vdmUnLFxuJ21vdmVkJyxcbidvcmllbnRhdGlvbmNoYW5nZScsXG4ncGFpbnRlZCcsXG4ncG9zaXRpb25lZGNoYW5nZScsXG4ncmVtb3ZlJyxcbidyZW1vdmVkJyxcbidyZW5kZXJlZGNoYW5nZScsXG4ncmVzaXplJyxcbidyaWdodGNoYW5nZScsXG4nc2Nyb2xsYWJsZWNoYW5nZScsXG4nc2hvdycsXG4ndG9mcm9udCcsXG4ndG9wY2hhbmdlJyxcbid1cGRhdGVkYXRhJyxcbid3aWR0aGNoYW5nZScsXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXNlbGVjdGlvbmNvbHVtbicsXG4gIGlucHV0czogc2VsZWN0aW9uY29sdW1uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogc2VsZWN0aW9uY29sdW1uTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFNlbGVjdGlvbmNvbHVtbkNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFNlbGVjdGlvbmNvbHVtbkNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UpIHtcbiAgICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LHNlbGVjdGlvbmNvbHVtbk1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoc2VsZWN0aW9uY29sdW1uTWV0YURhdGEpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdChzZWxlY3Rpb25jb2x1bW5NZXRhRGF0YSlcbiAgICB9XG5cblxuXG4gIC8vcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgLy8gIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAvL31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxuXG5cbiAgIC8vIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAvLyAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0NoZWNrZWQnKVxuICAvL31cbn1cblxuIl19
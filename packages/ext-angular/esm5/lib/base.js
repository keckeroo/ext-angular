/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
var base = /** @class */ (function () {
    //private subscriptions: Subscription[] = [];
    function base(nativeElement, metaData, hostComponent) {
        var _this = this;
        this.metaData = metaData;
        this.hostComponent = hostComponent;
        this._extChildren = false;
        this.q = null;
        this._nativeElement = nativeElement;
        this._hostComponent = hostComponent;
        metaData.EVENTS.forEach(function (event, n) {
            if (event.name != 'fullscreen') {
                ((/** @type {?} */ (_this)))[event.name] = new EventEmitter();
            }
            else {
                ((/** @type {?} */ (_this)))[event.name + 'event'] = new EventEmitter();
            }
        });
        //    let f = this.ngOnDestroy;
        //    this.ngOnDestroy = () => {
        //      f();
        //      this.unsubscribeAll();
        //    };
    }
    //    protected safeSubscription (sub: Subscription): Subscription {
    //        this.subscriptions.push(sub);
    //        return sub;
    //    }
    //    private unsubscribeAll() {
    //        this.subscriptions.forEach(element => {
    //            !element.isUnsubscribed && element.unsubscribe();
    //        });
    //    }
    //    protected safeSubscription (sub: Subscription): Subscription {
    //        this.subscriptions.push(sub);
    //        return sub;
    //    }
    //    private unsubscribeAll() {
    //        this.subscriptions.forEach(element => {
    //            !element.isUnsubscribed && element.unsubscribe();
    //        });
    //    }
    /**
     * @param {?} metaData
     * @return {?}
     */
    base.prototype.baseOnInit = 
    //    protected safeSubscription (sub: Subscription): Subscription {
    //        this.subscriptions.push(sub);
    //        return sub;
    //    }
    //    private unsubscribeAll() {
    //        this.subscriptions.forEach(element => {
    //            !element.isUnsubscribed && element.unsubscribe();
    //        });
    //    }
    /**
     * @param {?} metaData
     * @return {?}
     */
    function (metaData) {
        //console.log(`ngOnInit: ${metaData.XTYPE}`)
        /** @type {?} */
        var me = this;
        /** @type {?} */
        var o = {};
        o.xtype = metaData.XTYPE;
        /** @type {?} */
        var listneresProvided = false;
        for (var i = 0; i < me.metaData.PROPERTIES.length; i++) {
            /** @type {?} */
            var prop = me.metaData.PROPERTIES[i];
            if (prop == 'handler') {
                if (me[prop] != undefined) {
                    o[prop] = me[prop];
                }
            }
            //need to handle listeners coming in here
            if ((o.xtype === 'cartesian' || o.xtype === 'polar') && prop === 'layout') {
            }
            else if (prop == 'listeners' && me[prop] != undefined) {
                o[prop] = me[prop];
                listneresProvided = true;
            }
            else {
                if (me[prop] != undefined &&
                    prop != 'listeners' &&
                    prop != 'config' &&
                    prop != 'handler' &&
                    prop != 'fitToParent') {
                    o[prop] = me[prop];
                }
            }
        }
        if (true === me.fitToParent) {
            o.top = 0,
                o.left = 0,
                o.width = '100%',
                o.height = '100%';
        }
        if (me.config !== {}) {
            Ext.apply(o, me.config);
        }
        if (!listneresProvided) {
            o.listeners = {};
            /** @type {?} */
            var EVENTS = metaData.EVENTS;
            EVENTS.forEach(function (event, index, array) {
                /** @type {?} */
                var eventname = event.name;
                /** @type {?} */
                var eventparameters = event.parameters;
                o.listeners[eventname] = function () {
                    /** @type {?} */
                    var parameters = eventparameters;
                    /** @type {?} */
                    var parms = parameters.split(',');
                    /** @type {?} */
                    var args = Array.prototype.slice.call(arguments);
                    /** @type {?} */
                    var emitparms = {};
                    for (var i_1 = 0, j = parms.length; i_1 < j; i_1++) {
                        emitparms[parms[i_1]] = args[i_1];
                    }
                    me[eventname].emit(emitparms);
                };
            });
        }
        if (this._nativeElement.parentElement != null) {
            o.renderTo = this._nativeElement;
        }
        this.ext = Ext.create(o);
    };
    /**
     * @return {?}
     */
    base.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        //console.log(`ngOnDestroy`)
        //console.log(this)
        /** @type {?} */
        var childCmp;
        /** @type {?} */
        var parentCmp;
        try {
            childCmp = this.ext;
            if (this._hostComponent != null) {
                parentCmp = this._hostComponent.ext;
                if (parentCmp.xtype == 'button' && childCmp.xtype == 'menu') {
                    //console.log('button menu not deleted')
                }
                else if (parentCmp.xtype == 'carousel') {
                    //console.log('carousel child not deleted')
                }
                else {
                    parentCmp.remove([childCmp]);
                    childCmp.destroy();
                }
            }
            else {
                if (childCmp != undefined) {
                    childCmp.destroy();
                }
                else
                    ('no destroy');
                //console.log('known problem here with destroy...')
                //console.log('parent: ')
                //console.log(parentCmp)
                //console.log('child: ')
                //console.log(childCmp)
                //console.log('this: ')
                //console.log(this)
                //childCmp.destroy()
                //console.log('destroyed')
            }
        }
        catch (e) {
            console.error(e);
            console.log('*****');
            console.log(parentCmp);
            console.log(childCmp);
            console.log('*****');
        }
    };
    /**
     * @return {?}
     */
    base.prototype.baseAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this._extitems.length == 1) {
            if (this._hostComponent != null) {
                this.ext.setHtml(this._extitem.nativeElement);
            }
        }
        if (this._extroutes.length == 1) {
            this.ext.setHtml(this._extroute.nativeElement);
        }
        if (this._hostComponent != null) {
            /** @type {?} */
            var parentCmp = this._hostComponent.ext;
            /** @type {?} */
            var childCmp = this.ext;
            this.addTheChild(parentCmp, childCmp);
        }
        this['ready'].emit(this);
    };
    /**
     * @param {?} parentCmp
     * @param {?} childCmp
     * @return {?}
     */
    base.prototype.addTheChild = /**
     * @param {?} parentCmp
     * @param {?} childCmp
     * @return {?}
     */
    function (parentCmp, childCmp) {
        /** @type {?} */
        var parentxtype = parentCmp.xtype;
        /** @type {?} */
        var childxtype = childCmp.xtype;
        if (this.ext.initialConfig.align != undefined) {
            if (parentxtype != 'titlebar' && parentxtype != 'grid') {
                console.error('Can only use align property if parent is a Titlebar or Grid');
                return;
            }
        }
        if (parentxtype === 'grid') {
            if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn' || childxtype === 'booleancolumn') {
                parentCmp.addColumn(childCmp);
            }
            else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                if (parentCmp.getHideHeaders() === false) {
                    //var j = parentCmp.items.items.length;
                    parentCmp.insert(1, childCmp);
                }
                else {
                    parentCmp.add(childCmp);
                }
            }
            else {
                console.log('??');
                console.log(parentxtype);
                console.log(childxtype);
            }
        }
        else if (childxtype === 'tooltip') {
            parentCmp.setTooltip(childCmp);
        }
        else if (childxtype === 'plugin') {
            parentCmp.setPlugin(childCmp);
        }
        else if (parentxtype === 'button') {
            if (childxtype === 'menu') {
                parentCmp.setMenu(childCmp);
            }
            else {
                console.log('child not added');
            }
        }
        else if (childxtype === 'toolbar' && Ext.isClassic === true) {
            parentCmp.addDockedItems(childCmp);
        }
        else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
            if (parentCmp.getHideHeaders() === false) {
                //var j: any = parentCmp.items.items.length
                //parentCmp.insert(j - 1, childCmp)
                parentCmp.insert(1, childCmp);
            }
            else {
                parentCmp.add(childCmp);
            }
        }
        else if (parentCmp.add != undefined) {
            parentCmp.add(childCmp);
        }
        else {
            console.log('child not added');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    base.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        //console.log(`ngOnChanges`)
        //console.log(changes)
        /** @type {?} */
        var changesMsgs = [];
        for (var propName in changes) {
            /** @type {?} */
            var verb = '';
            if (changes[propName].firstChange === true) {
                verb = 'initialized';
            }
            else {
                verb = 'changed';
            }
            /** @type {?} */
            var val = changes[propName].currentValue;
            if (this.ext != undefined) {
                /** @type {?} */
                var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                /** @type {?} */
                var setFunction = 'set' + capPropName;
                if (this.ext[setFunction] != undefined) {
                    this.ext[setFunction](val);
                }
                else {
                    console.error(setFunction + ' not found for ' + this.ext.xtype);
                }
            }
            else {
                if (verb == 'changed') {
                    console.log('change needed and ext not defined');
                }
            }
            changesMsgs.push(propName + " " + verb + " to \"" + val + "\"");
        }
        //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
    };
    base.propDecorators = {
        _extroute: [{ type: ContentChild, args: ['extroute',] }],
        _extroutes: [{ type: ContentChildren, args: ['extroute',] }],
        _extitem: [{ type: ContentChild, args: ['extitem',] }],
        _extitems: [{ type: ContentChildren, args: ['extitem',] }]
    };
    return base;
}());
export { base };
if (false) {
    /** @type {?} */
    base.prototype.ext;
    /**
     * @type {?}
     * @private
     */
    base.prototype._nativeElement;
    /**
     * @type {?}
     * @private
     */
    base.prototype._hostComponent;
    /**
     * @type {?}
     * @private
     */
    base.prototype._extChildren;
    /**
     * @type {?}
     * @private
     */
    base.prototype.q;
    /** @type {?} */
    base.prototype._extroute;
    /** @type {?} */
    base.prototype._extroutes;
    /** @type {?} */
    base.prototype._extitem;
    /** @type {?} */
    base.prototype._extitems;
    /**
     * @type {?}
     * @private
     */
    base.prototype.metaData;
    /** @type {?} */
    base.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUtMLFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUVmLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQTtBQUV0QjtJQU9FLDZDQUE2QztJQUM3QyxjQUNFLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQW9CO1FBSDdCLGlCQXdCQztRQXRCUyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQU87UUFQckIsaUJBQVksR0FBUSxLQUFLLENBQUE7UUFVL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtRQUNuQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVUsRUFBRSxDQUFNO1lBQzFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQzlCLENBQUMsbUJBQUssS0FBSSxFQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTthQUM3QztpQkFDSTtnQkFDSCxDQUFDLG1CQUFLLEtBQUksRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQ3ZEO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFFTiwrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLFlBQVk7UUFDWiw4QkFBOEI7UUFDOUIsUUFBUTtJQUVOLENBQUM7SUFFSCxvRUFBb0U7SUFDcEUsdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQixPQUFPO0lBRVAsZ0NBQWdDO0lBQ2hDLGlEQUFpRDtJQUNqRCwrREFBK0Q7SUFDL0QsYUFBYTtJQUNiLE9BQU87Ozs7Ozs7Ozs7Ozs7O0lBS0wseUJBQVU7Ozs7Ozs7Ozs7Ozs7O0lBQVYsVUFBVyxRQUFhOzs7WUFFbEIsRUFBRSxHQUFRLElBQUk7O1lBQ2QsQ0FBQyxHQUFRLEVBQUU7UUFDZixDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUE7O1lBQ3BCLGlCQUFpQixHQUFHLEtBQUs7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ2xELElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxJQUFJLElBQUksU0FBUyxFQUFFO2dCQUNyQixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7b0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ25CO2FBQ0Y7WUFDRCx5Q0FBeUM7WUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssV0FBVyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTthQUMxRTtpQkFDSSxJQUFHLElBQUksSUFBSSxXQUFXLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsRUFBRTtnQkFDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQzFCO2lCQUNJO2dCQUNILElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVM7b0JBQ3JCLElBQUksSUFBSSxXQUFXO29CQUNuQixJQUFJLElBQUksUUFBUTtvQkFDaEIsSUFBSSxJQUFJLFNBQVM7b0JBQ2pCLElBQUksSUFBSSxhQUFhLEVBQUU7b0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BCO2FBQ0Y7U0FDRjtRQUVELElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDM0IsQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxJQUFJLEdBQUMsQ0FBQztnQkFDUixDQUFDLENBQUMsS0FBSyxHQUFDLE1BQU07Z0JBQ2QsQ0FBQyxDQUFDLE1BQU0sR0FBQyxNQUFNLENBQUE7U0FDaEI7UUFDRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFHO1lBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUcsQ0FBQyxpQkFBaUIsRUFBRTtZQUNyQixDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTs7Z0JBQ1osTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNO1lBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFVLEVBQUUsS0FBVSxFQUFFLEtBQVU7O29CQUNyRCxTQUFTLEdBQVEsS0FBSyxDQUFDLElBQUk7O29CQUMzQixlQUFlLEdBQVEsS0FBSyxDQUFDLFVBQVU7Z0JBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUc7O3dCQUNuQixVQUFVLEdBQVEsZUFBZTs7d0JBQ2pDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7d0JBQzdCLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzt3QkFDNUMsU0FBUyxHQUFRLEVBQUU7b0JBQ3ZCLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUc7d0JBQzdDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7cUJBQy9CO29CQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQy9CLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUFBO1NBQ0g7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtZQUM3QyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUE7U0FDakM7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDMUIsQ0FBQzs7OztJQUVELDBCQUFXOzs7SUFBWDs7OztZQUdNLFFBQVE7O1lBQ1IsU0FBUztRQUNiLElBQUk7WUFDRixRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtZQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO2dCQUMvQixTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUE7Z0JBQ25DLElBQUcsU0FBUyxDQUFDLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7b0JBQzFELHdDQUF3QztpQkFDekM7cUJBQ0ksSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLFVBQVUsRUFBRTtvQkFDdEMsMkNBQTJDO2lCQUM1QztxQkFDSTtvQkFDSCxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtvQkFDNUIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO2lCQUNuQjthQUNGO2lCQUNJO2dCQUNILElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDekIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO2lCQUNuQjs7b0JBQ0ksQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDbkIsbURBQW1EO2dCQUNuRCx5QkFBeUI7Z0JBQ3pCLHdCQUF3QjtnQkFDeEIsd0JBQXdCO2dCQUN4Qix1QkFBdUI7Z0JBQ3ZCLHVCQUF1QjtnQkFDdkIsbUJBQW1CO2dCQUNuQixvQkFBb0I7Z0JBQ3BCLDBCQUEwQjthQUMzQjtTQUNGO1FBQ0QsT0FBTSxDQUFDLEVBQUU7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDckI7SUFDSCxDQUFDOzs7O0lBTUQsbUNBQW9COzs7SUFBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQzlDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQy9DO1FBQ0QsSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRTs7Z0JBQzFCLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUc7O2dCQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUc7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDLENBQUE7U0FDckM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFCLENBQUM7Ozs7OztJQUVELDBCQUFXOzs7OztJQUFYLFVBQVksU0FBUyxFQUFFLFFBQVE7O1lBQ3pCLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSzs7WUFDN0IsVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLO1FBRS9CLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUM3QyxJQUFJLFdBQVcsSUFBSSxVQUFVLElBQUksV0FBVyxJQUFJLE1BQU0sRUFBRTtnQkFDdEQsT0FBTyxDQUFDLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFBO2dCQUM1RSxPQUFNO2FBQ1A7U0FDRjtRQUNDLElBQUksV0FBVyxLQUFLLE1BQU0sRUFBRTtZQUMxQixJQUFJLFVBQVUsS0FBSyxRQUFRLElBQUksVUFBVSxLQUFLLFlBQVksSUFBSSxVQUFVLEtBQUssWUFBWSxJQUFJLFVBQVUsS0FBSyxhQUFhLElBQUksVUFBVSxLQUFLLFlBQVksSUFBSSxVQUFVLEtBQUssYUFBYSxJQUFJLFVBQVUsS0FBSyxjQUFjLElBQUksVUFBVSxLQUFLLGVBQWUsRUFBRztnQkFDNVAsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUM5QjtpQkFDSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxVQUFVLEtBQUssVUFBVSxDQUFDLElBQUksU0FBUyxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUU7Z0JBQ3pHLElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLEtBQUssRUFBRTtvQkFDeEMsdUNBQXVDO29CQUN2QyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDL0I7cUJBQ0k7b0JBQ0gsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDekI7YUFDRjtpQkFDSTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQ3hCO1NBQ0Y7YUFBTSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDbkMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUMvQjthQUFNLElBQUksVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNsQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQzlCO2FBQU0sSUFBSSxXQUFXLEtBQUssUUFBUSxFQUFFO1lBQ25DLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtnQkFDekIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUM1QjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7YUFDL0I7U0FDRjthQUFNLElBQUksVUFBVSxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUM3RCxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ25DO2FBQU0sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksVUFBVSxLQUFLLFVBQVUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxjQUFjLElBQUksU0FBUyxFQUFFO1lBQzNHLElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLEtBQUssRUFBRTtnQkFDeEMsMkNBQTJDO2dCQUMzQyxtQ0FBbUM7Z0JBQ25DLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQzlCO2lCQUFNO2dCQUNMLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDeEI7U0FDRjthQUFNLElBQUksU0FBUyxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUU7WUFDckMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUN4QjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1NBQy9CO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwwQkFBVzs7OztJQUFYLFVBQVksT0FBc0I7Ozs7WUFHNUIsV0FBVyxHQUFhLEVBQUU7UUFDOUIsS0FBSyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7O2dCQUN4QixJQUFJLEdBQUcsRUFBRTtZQUNiLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7Z0JBQzFDLElBQUksR0FBRyxhQUFhLENBQUE7YUFDckI7aUJBQ0k7Z0JBQ0gsSUFBSSxHQUFHLFNBQVMsQ0FBQTthQUNqQjs7Z0JBQ0csR0FBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZO1lBQ3hDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUU7O29CQUNyQixXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7b0JBQ2xFLFdBQVcsR0FBRyxLQUFLLEdBQUcsV0FBVztnQkFDckMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFNBQVMsRUFBRTtvQkFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDM0I7cUJBQ0k7b0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDaEU7YUFDRjtpQkFDSTtnQkFDSCxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7b0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtpQkFDakQ7YUFDRjtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUksUUFBUSxTQUFJLElBQUksY0FBUSxHQUFHLE9BQUcsQ0FBQyxDQUFBO1NBQ3BEO1FBQ0QscURBQXFEO0lBQ3ZELENBQUM7OzRCQTNHQSxZQUFZLFNBQUMsVUFBVTs2QkFDdkIsZUFBZSxTQUFDLFVBQVU7MkJBQzFCLFlBQVksU0FBQyxTQUFTOzRCQUN0QixlQUFlLFNBQUMsU0FBUzs7SUFxSDVCLFdBQUM7Q0FBQSxBQXZSRCxJQXVSQztTQXZSWSxJQUFJOzs7SUFDZixtQkFBZTs7Ozs7SUFDZiw4QkFBMkI7Ozs7O0lBQzNCLDhCQUEyQjs7Ozs7SUFDM0IsNEJBQWlDOzs7OztJQUNqQyxpQkFBeUI7O0lBMEp6Qix5QkFBeUM7O0lBQ3pDLDBCQUF3RDs7SUFDeEQsd0JBQXVDOztJQUN2Qyx5QkFBc0Q7Ozs7O0lBeEpwRCx3QkFBcUI7O0lBQ3JCLDZCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFZpZXdDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBiYXNlIHtcbiAgcHVibGljIGV4dDogYW55XG4gIHByaXZhdGUgX25hdGl2ZUVsZW1lbnQ6IGFueVxuICBwcml2YXRlIF9ob3N0Q29tcG9uZW50OiBhbnlcbiAgcHJpdmF0ZSBfZXh0Q2hpbGRyZW46IGFueSA9IGZhbHNlXG4gIHByaXZhdGUgcTogUXVlcnlMaXN0PGFueT5cblxuICAvL3ByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgbmF0aXZlRWxlbWVudDogYW55LFxuICAgIHByaXZhdGUgbWV0YURhdGE6IGFueSxcbiAgICBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2VcbiAgKSB7XG4gICAgXG4gICAgdGhpcy5xID0gbnVsbFxuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBuYXRpdmVFbGVtZW50XG4gICAgdGhpcy5faG9zdENvbXBvbmVudCA9IGhvc3RDb21wb25lbnRcbiAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZSArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgfSlcblxuLy8gICAgbGV0IGYgPSB0aGlzLm5nT25EZXN0cm95O1xuLy8gICAgdGhpcy5uZ09uRGVzdHJveSA9ICgpID0+IHtcbi8vICAgICAgZigpO1xuLy8gICAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4vLyAgICB9O1xuXG4gIH1cblxuLy8gICAgcHJvdGVjdGVkIHNhZmVTdWJzY3JpcHRpb24gKHN1YjogU3Vic2NyaXB0aW9uKTogU3Vic2NyaXB0aW9uIHtcbi8vICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWIpO1xuLy8gICAgICAgIHJldHVybiBzdWI7XG4vLyAgICB9XG4gXG4vLyAgICBwcml2YXRlIHVuc3Vic2NyaWJlQWxsKCkge1xuLy8gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgICAgICAgICAhZWxlbWVudC5pc1Vuc3Vic2NyaWJlZCAmJiBlbGVtZW50LnVuc3Vic2NyaWJlKCk7XG4vLyAgICAgICAgfSk7XG4vLyAgICB9XG5cblxuXG5cbiAgYmFzZU9uSW5pdChtZXRhRGF0YTogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkluaXQ6ICR7bWV0YURhdGEuWFRZUEV9YClcbiAgICBsZXQgbWU6IGFueSA9IHRoaXNcbiAgICBsZXQgbzogYW55ID0ge31cbiAgICBvLnh0eXBlID0gbWV0YURhdGEuWFRZUEVcbiAgICBsZXQgbGlzdG5lcmVzUHJvdmlkZWQgPSBmYWxzZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWUubWV0YURhdGEuUFJPUEVSVElFUy5sZW5ndGg7IGkrKykgeyBcbiAgICAgIHZhciBwcm9wID0gbWUubWV0YURhdGEuUFJPUEVSVElFU1tpXTtcbiAgICAgIGlmIChwcm9wID09ICdoYW5kbGVyJykge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICBpZiAoKG8ueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IG8ueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHByb3AgPT0gJ2xpc3RlbmVycycgJiYgbWVbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXTtcbiAgICAgICAgbGlzdG5lcmVzUHJvdmlkZWQgPSB0cnVlO1xuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdoYW5kbGVyJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50JykgeyBcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF07IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRydWUgPT09IG1lLmZpdFRvUGFyZW50KSB7XG4gICAgICBvLnRvcD0wLCBcbiAgICAgIG8ubGVmdD0wLCBcbiAgICAgIG8ud2lkdGg9JzEwMCUnLCBcbiAgICAgIG8uaGVpZ2h0PScxMDAlJ1xuICAgIH1cbiAgICBpZiAobWUuY29uZmlnICE9PSB7fSApIHtcbiAgICAgIEV4dC5hcHBseShvLCBtZS5jb25maWcpO1xuICAgIH1cblxuICAgIGlmKCFsaXN0bmVyZXNQcm92aWRlZCkge1xuICAgICAgby5saXN0ZW5lcnMgPSB7fVxuICAgICAgdmFyIEVWRU5UUyA9IG1ldGFEYXRhLkVWRU5UU1xuICAgICAgRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50OiBhbnksIGluZGV4OiBhbnksIGFycmF5OiBhbnkpIHtcbiAgICAgICAgbGV0IGV2ZW50bmFtZTogYW55ID0gZXZlbnQubmFtZVxuICAgICAgICBsZXQgZXZlbnRwYXJhbWV0ZXJzOiBhbnkgPSBldmVudC5wYXJhbWV0ZXJzXG4gICAgICAgIG8ubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgcGFyYW1ldGVyczogYW55ID0gZXZlbnRwYXJhbWV0ZXJzXG4gICAgICAgICAgbGV0IHBhcm1zID0gcGFyYW1ldGVycy5zcGxpdCgnLCcpXG4gICAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgbGV0IGVtaXRwYXJtczogYW55ID0ge31cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBhcm1zLmxlbmd0aDsgaSA8IGo7IGkrKyApIHtcbiAgICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZW1pdHBhcm1zKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgby5yZW5kZXJUbyA9IHRoaXMuX25hdGl2ZUVsZW1lbnRcbiAgICB9XG4gICAgdGhpcy5leHQgPSBFeHQuY3JlYXRlKG8pXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uRGVzdHJveWApXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzKVxuICAgIHZhciBjaGlsZENtcFxuICAgIHZhciBwYXJlbnRDbXBcbiAgICB0cnkge1xuICAgICAgY2hpbGRDbXAgPSB0aGlzLmV4dFxuICAgICAgaWYgKHRoaXMuX2hvc3RDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnRDbXAgPSB0aGlzLl9ob3N0Q29tcG9uZW50LmV4dFxuICAgICAgICBpZihwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uIG1lbnUgbm90IGRlbGV0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnY2Fyb3VzZWwnKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnY2Fyb3VzZWwgY2hpbGQgbm90IGRlbGV0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHBhcmVudENtcC5yZW1vdmUoW2NoaWxkQ21wXSlcbiAgICAgICAgICBjaGlsZENtcC5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChjaGlsZENtcCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjaGlsZENtcC5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlICgnbm8gZGVzdHJveScpXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2tub3duIHByb2JsZW0gaGVyZSB3aXRoIGRlc3Ryb3kuLi4nKVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQ6ICcpXG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGlsZDogJylcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgLy9jb25zb2xlLmxvZygndGhpczogJylcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKVxuICAgICAgICAvL2NoaWxkQ21wLmRlc3Ryb3koKVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdkZXN0cm95ZWQnKVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICBjb25zb2xlLmxvZygnKioqKionKVxuICAgICAgY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICBjb25zb2xlLmxvZygnKioqKionKVxuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ2V4dHJvdXRlJykgX2V4dHJvdXRlOiBhbnk7XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2V4dHJvdXRlJykgX2V4dHJvdXRlczogUXVlcnlMaXN0PGFueT47XG4gIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nKSBfZXh0aXRlbTogYW55O1xuICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcbiAgYmFzZUFmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9ob3N0Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmV4dC5zZXRIdG1sKHRoaXMuX2V4dGl0ZW0ubmF0aXZlRWxlbWVudClcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fZXh0cm91dGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICB0aGlzLmV4dC5zZXRIdG1sKHRoaXMuX2V4dHJvdXRlLm5hdGl2ZUVsZW1lbnQpXG4gICAgfVxuICAgIGlmKHRoaXMuX2hvc3RDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgdmFyIHBhcmVudENtcCA9IHRoaXMuX2hvc3RDb21wb25lbnQuZXh0XG4gICAgICB2YXIgY2hpbGRDbXAgPSB0aGlzLmV4dFxuICAgICAgdGhpcy5hZGRUaGVDaGlsZChwYXJlbnRDbXAsY2hpbGRDbXApXG4gICAgfVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG5cbiAgYWRkVGhlQ2hpbGQocGFyZW50Q21wLCBjaGlsZENtcCkge1xuICAgIHZhciBwYXJlbnR4dHlwZSA9IHBhcmVudENtcC54dHlwZVxuICAgIHZhciBjaGlsZHh0eXBlID0gY2hpbGRDbXAueHR5cGVcblxuICAgIGlmICh0aGlzLmV4dC5pbml0aWFsQ29uZmlnLmFsaWduICE9IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcmVudHh0eXBlICE9ICd0aXRsZWJhcicgJiYgcGFyZW50eHR5cGUgIT0gJ2dyaWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbiBvbmx5IHVzZSBhbGlnbiBwcm9wZXJ0eSBpZiBwYXJlbnQgaXMgYSBUaXRsZWJhciBvciBHcmlkJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0cmVlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2NoZWNrY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnZGF0ZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09PSAnbnVtYmVyY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnYm9vbGVhbmNvbHVtbicgKSB7XG4gICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvL3ZhciBqID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnPz8nKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmVudHh0eXBlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGNoaWxkeHR5cGUpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdtZW51Jykge1xuICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvL3ZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgICAgLy9wYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICAvL2NvbnNvbGUubG9nKGNoYW5nZXMpXG4gICAgbGV0IGNoYW5nZXNNc2dzOiBzdHJpbmdbXSA9IFtdXG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgbGV0IHZlcmIgPSAnJ1xuICAgICAgaWYgKGNoYW5nZXNbcHJvcE5hbWVdLmZpcnN0Q2hhbmdlID09PSB0cnVlKSB7XG4gICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJ1xuICAgICAgfVxuICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZVxuICAgICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpXG4gICAgICAgIHZhciBzZXRGdW5jdGlvbiA9ICdzZXQnICsgY2FwUHJvcE5hbWVcbiAgICAgICAgaWYgKHRoaXMuZXh0W3NldEZ1bmN0aW9uXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmV4dFtzZXRGdW5jdGlvbl0odmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc2V0RnVuY3Rpb24gKyAnIG5vdCBmb3VuZCBmb3IgJyArIHRoaXMuZXh0Lnh0eXBlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gIH1cblxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nRG9DaGVjaygpIHtjb25zb2xlLmxvZyhgRG9DaGVja2ApfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyQ29udGVudENoZWNrZWRgKSB9XG4gIC8vbmdBZnRlclZpZXdJbml0KCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3SW5pdGApIH1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyVmlld0NoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdDaGVja2VkYCkgfVxuXG59Il19
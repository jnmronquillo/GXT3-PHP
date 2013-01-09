function $com$crud$client$presenter$WelcomePresenter_WelcomePresenter_methodInjection(_0, _1){
  return new WelcomePresenter_0(_0, _1);
}

function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__(injectee, _0){
  injectee.automaticBind(_0);
}

function $get_Key$type$com$crud$client$presenter$WelcomePresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$crud$client$presenter$WelcomePresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$presenter$WelcomePresenter$_annotation$$none$$ = (result = $com$crud$client$presenter$WelcomePresenter_WelcomePresenter_methodInjection((!this$static.singleton_Key$type$com$google$gwt$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$gwt$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_3) , this$static.singleton_Key$type$com$google$gwt$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$crud$client$view$WelcomeView$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$view$WelcomeView$_annotation$$none$$ = new WelcomeView_0(new WelcomeView_BinderImpl_0)) , this$static.singleton_Key$type$com$crud$client$view$WelcomeView$_annotation$$none$$), !this$static.singleton_Key$type$com$crud$client$presenter$WelcomePresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$presenter$WelcomePresenter$MyProxy$_annotation$$none$$ = new WelcomePresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$crud$client$presenter$WelcomePresenter$_annotation$$none$$;
}

defineSeed(9, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess(){
  $onSuccess(this.val$callback, $get_Key$type$com$crud$client$presenter$WelcomePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function WelcomePresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(41, 17, makeCastMap([Q$HasHandlers, Q$PresenterWidget]), WelcomePresenter_0);
_.onBind = function onBind_4(){
}
;
_.revealInParent = function revealInParent_1(){
  $fireEvent_0(this, new RevealContentEvent_0(($clinit_LayoutPresenter() , SLOT_content), this));
}
;
function WelcomeView_0(){
  var f_ContentPanel1, f_CenterLayoutContainer2, sb;
  this.widget = (f_ContentPanel1 = new ContentPanel_0 , $setWidget_0(f_ContentPanel1, (f_CenterLayoutContainer2 = new CenterLayoutContainer_0 , $setWidget_0(f_CenterLayoutContainer2, new HTMLPanel_0((sb = new StringBuilder_0 , $append_1(sb.data, '<h2> Welcome User <\/h2>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html)) , f_CenterLayoutContainer2)) , $setText_2(f_ContentPanel1.header, 'Welcome') , f_ContentPanel1);
}

defineSeed(103, 59, {}, WelcomeView_0);
_.asWidget = function asWidget_3(){
  return this.widget;
}
;
_.widget = null;
function WelcomeView_BinderImpl_0(){
}

defineSeed(104, 1, {}, WelcomeView_BinderImpl_0);
function CenterLayoutContainer_0(){
  $clinit_Component();
  SimpleContainer_0.call(this, false);
}

defineSeed(1184, 1112, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), CenterLayoutContainer_0);
_.doLayout = function doLayout_3(){
  var con, e, p;
  if (this.widget) {
    con = this.element;
    e = this.widget.getElement();
    $makePositionable(e, true);
    p = $getAlignToXY_0(e, con, new Style$AnchorAlignment_0(($clinit_Style$Anchor() , CENTER_1), CENTER_1), null);
    p = $translatePoints(e, p);
    $applyLayout_0(this.widget, new Rectangle_1(p.x, p.y, -1, -1));
  }
}
;
var Lcom_crud_client_presenter_WelcomePresenter_2_classLit = createForClass('com.crud.client.presenter.', 'WelcomePresenter', 41), Lcom_crud_client_view_WelcomeView_2_classLit = createForClass('com.crud.client.view.', 'WelcomeView', 103), Lcom_crud_client_view_WelcomeView_1BinderImpl_2_classLit = createForClass('com.crud.client.view.', 'WelcomeView_BinderImpl', 104), Lcom_sencha_gxt_widget_core_client_container_CenterLayoutContainer_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'CenterLayoutContainer', 1184);
$entry(onLoad_1)(1);

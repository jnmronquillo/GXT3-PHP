function $com$crud$client$presenter$LayoutPresenter_LayoutPresenter_methodInjection(_0, _1){
  return new LayoutPresenter_0(_0, _1);
}

function $com$crud$client$presenter$LayoutPresenter_menuPresenter_fieldInjection(injectee, value){
  injectee.menuPresenter = value;
}

function $com$crud$client$presenter$MenuPresenter_placeManager_fieldInjection(injectee, value){
  injectee.placeManager = value;
}

function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____(injectee, _0){
  injectee.automaticBind(_0);
}

function $get_Key$type$com$crud$client$presenter$LayoutPresenter$_annotation$$none$$(this$static){
  var result, result_0;
  !this$static.singleton_Key$type$com$crud$client$presenter$LayoutPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$presenter$LayoutPresenter$_annotation$$none$$ = (result = $com$crud$client$presenter$LayoutPresenter_LayoutPresenter_methodInjection((!this$static.singleton_Key$type$com$google$gwt$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$gwt$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_3) , this$static.singleton_Key$type$com$google$gwt$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$crud$client$view$LayoutView$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$view$LayoutView$_annotation$$none$$ = new LayoutView_0((new LayoutView_BinderImpl_0 , !this$static.singleton_Key$type$com$crud$client$resources$Resources$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$resources$Resources$_annotation$$none$$ = new Resources_default_InlineClientBundleGenerator_0)))) , this$static.singleton_Key$type$com$crud$client$view$LayoutView$_annotation$$none$$), !this$static.singleton_Key$type$com$crud$client$presenter$LayoutPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$presenter$LayoutPresenter$MyProxy$_annotation$$none$$ = new LayoutPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , $com$crud$client$presenter$LayoutPresenter_menuPresenter_fieldInjection(result, (!this$static.singleton_Key$type$com$crud$client$presenter$MenuPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$presenter$MenuPresenter$_annotation$$none$$ = (result_0 = new MenuPresenter_0((!this$static.singleton_Key$type$com$google$gwt$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$gwt$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_3) , this$static.singleton_Key$type$com$google$gwt$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$crud$client$presenter$MenuPresenter$MyView$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$presenter$MenuPresenter$MyView$_annotation$$none$$ = new MenuView_0((new MenuView_BinderImpl_0 , !this$static.singleton_Key$type$com$crud$client$resources$Resources$_annotation$$none$$ && (this$static.singleton_Key$type$com$crud$client$resources$Resources$_annotation$$none$$ = new Resources_default_InlineClientBundleGenerator_0)))) , this$static.singleton_Key$type$com$crud$client$presenter$MenuPresenter$MyView$_annotation$$none$$)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_(result_0, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , $com$crud$client$presenter$MenuPresenter_placeManager_fieldInjection(result_0, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$ = $create_Key$type$com$crud$client$place$ClientPlaceManager$_annotation$$none$$(this$static)) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$)) , result_0)) , this$static.singleton_Key$type$com$crud$client$presenter$MenuPresenter$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$crud$client$presenter$LayoutPresenter$_annotation$$none$$;
}

defineSeed(13, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_1(){
  $onSuccess(this.val$callback, $get_Key$type$com$crud$client$presenter$LayoutPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function LayoutPresenter_0(eventBus, view){
  $clinit_LayoutPresenter();
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(16, 17, makeCastMap([Q$HasHandlers, Q$PresenterWidget]), LayoutPresenter_0);
_.onBind = function onBind_0(){
}
;
_.onReset = function onReset_0(){
  $setInSlot(this, SLOT_menu, this.menuPresenter);
}
;
_.revealInParent = function revealInParent(){
  $clinit_RevealRootContentEvent();
  $fireEvent_0(this, new RevealRootContentEvent_0(this));
}
;
_.menuPresenter = null;
function MenuPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(22, 18, makeCastMap([Q$HasHandlers, Q$PresenterWidget]), MenuPresenter_0);
_.onBind = function onBind_1(){
}
;
_.onReset = function onReset_1(){
  var mnu, mnu$iterator, mnus, token;
  $addSelectionHandler(dynamicCast(dynamicCast(this.view, Q$MenuPresenter$MyView), Q$MenuView).tree.sm, new MenuPresenter$1_0(this));
  token = $getCurrentPlaceRequest(this.placeManager).nameToken;
  mnus = $getAll(dynamicCast(dynamicCast(this.view, Q$MenuPresenter$MyView), Q$MenuView).tree.store);
  for (mnu$iterator = new Collections$UnmodifiableCollectionIterator_0(mnus.coll.iterator()); mnu$iterator.it.hasNext();) {
    mnu = dynamicCast(mnu$iterator.it.next_0(), Q$MenuDto);
    if ($equals_3(mnu.token, token)) {
      $select_2(dynamicCast(dynamicCast(this.view, Q$MenuPresenter$MyView), Q$MenuView).tree.sm, mnu);
      break;
    }
  }
}
;
_.placeManager = null;
function MenuPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(23, 1, makeCastMap([Q$SelectionHandler, Q$EventHandler]), MenuPresenter$1_0);
_.onSelection = function onSelection(event_0){
  var mnu, request;
  mnu = dynamicCast(event_0.selectedItem, Q$MenuDto);
  if (!$equals_3(mnu.token, '')) {
    request = new PlaceRequest_1(mnu.token);
    $revealPlace(this.this$0.placeManager, request, true);
  }
}
;
_.this$0 = null;
function Resources_default_InlineClientBundleGenerator_0(){
}

defineSeed(44, 1, {}, Resources_default_InlineClientBundleGenerator_0);
var bg = null, commonsCss = null, exit = null, table_0 = null;
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    inject_0('.GN1NA3IBD{height:' + ($clinit_Resources_default_InlineClientBundleGenerator$bgInitializer() , bg.height_0) + 'px;width:' + bg.width_0 + 'px;overflow:hidden;background:url("' + bg.url.uri + '") -' + bg.left_0 + 'px -' + bg.top_0 + 'px  no-repeat;background-repeat:repeat-x;background-attachment:scroll;background-position:0 50%;background-color:#1e4176;height:35px;padding-left:3px;}.GN1NA3IBE{float:left;color:white;font:16px tahoma, arial, sans-serif;padding:6px 0 8px 6px;}.GN1NA3IBF{float:right;}.GN1NA3IBG{color:white;text-decoration:underline;}.GN1NA3IBG a{color:white;text-decoration:none;}.GN1NA3IBB{display:block;margin-right:20px;}.GN1NA3IBC{height:' + ($clinit_Resources_default_InlineClientBundleGenerator$exitInitializer() , exit.height_0) + 'px;width:' + exit.width_0 + 'px;overflow:hidden;background:url("' + exit.url.uri + '") -' + exit.left_0 + 'px -' + exit.top_0 + 'px  no-repeat;color:white;padding:8px 0 8px 0;font:12px tahoma, arial, sans-serif;font-weight:bold;background-repeat:no-repeat;background-position:10px 8px;width:auto;text-indent:30px;display:block;}.GN1NA3IBA{background-color:white;font-size:12px;font-weight:bold;text-align:center;padding-top:3px;margin-left:190px;}', false);
    return true;
  }
  return false;
}

function Resources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(45, 1, {}, Resources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText(){
  return '.GN1NA3IBD{height:' + ($clinit_Resources_default_InlineClientBundleGenerator$bgInitializer() , bg.height_0) + 'px;width:' + bg.width_0 + 'px;overflow:hidden;background:url("' + bg.url.uri + '") -' + bg.left_0 + 'px -' + bg.top_0 + 'px  no-repeat;background-repeat:repeat-x;background-attachment:scroll;background-position:0 50%;background-color:#1e4176;height:35px;padding-left:3px;}.GN1NA3IBE{float:left;color:white;font:16px tahoma, arial, sans-serif;padding:6px 0 8px 6px;}.GN1NA3IBF{float:right;}.GN1NA3IBG{color:white;text-decoration:underline;}.GN1NA3IBG a{color:white;text-decoration:none;}.GN1NA3IBB{display:block;margin-right:20px;}.GN1NA3IBC{height:' + ($clinit_Resources_default_InlineClientBundleGenerator$exitInitializer() , exit.height_0) + 'px;width:' + exit.width_0 + 'px;overflow:hidden;background:url("' + exit.url.uri + '") -' + exit.left_0 + 'px -' + exit.top_0 + 'px  no-repeat;color:white;padding:8px 0 8px 0;font:12px tahoma, arial, sans-serif;font-weight:bold;background-repeat:no-repeat;background-position:10px 8px;width:auto;text-indent:30px;display:block;}.GN1NA3IBA{background-color:white;font-size:12px;font-weight:bold;text-align:center;padding-top:3px;margin-left:190px;}';
}
;
_.injected = false;
function $clinit_Resources_default_InlineClientBundleGenerator$bgInitializer(){
  $clinit_Resources_default_InlineClientBundleGenerator$bgInitializer = nullMethod;
  bg = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAnCAYAAADKFfKfAAAAo0lEQVR42l3Rp06EARRE4XkGgrwagQC9dAgSgSU4DI6yLGXpZSkKj+c9D9echPziE8eMmcwtHqDU9hfq+ESprQ/U8Y6GMUOpzTfU8Yo6XlDHM0ptPKGORzSMB5Rav0cdd6jjFqXWpqjjBg3jGqVWr1DHJeqYoI4LlFoZo45zNIwzlBqdoswvHaHsjX9Rdo5/UEaH3yjL+zOUhd0p6ukTlP9v/wEKmdf+2PKbegAAAABJRU5ErkJggg==')), 3, 39);
}

function $clinit_Resources_default_InlineClientBundleGenerator$commonsCssInitializer(){
  $clinit_Resources_default_InlineClientBundleGenerator$commonsCssInitializer = nullMethod;
  commonsCss = new Resources_default_InlineClientBundleGenerator$1_0;
}

function $clinit_Resources_default_InlineClientBundleGenerator$exitInitializer(){
  $clinit_Resources_default_InlineClientBundleGenerator$exitInitializer = nullMethod;
  exit = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACwUlEQVR42q2TbyzUcRzHPxy5P7jhWsx0RWKawyFqp1nPSuJBNVqjtcnTOFPpgQf9wWyJqZbo8qcHVxIRyqHD+bMos5I/c4374Sjc+ZN1d/Xux4Mza/Woz/Z+9n29Pt/t8/kQ/e9SEPlXcWzv1/nsnWk9Gm1qOSIzKcVe+kJ7zqNcosB/wuVEqaqDoWu6qnKYZxjMvu/HdHMzTE0N+HJZDuV+H3M2USYbuz/gShbuOxUP89c5bJRxchLdj8vRWVKCOYUCqHmOH7duoDFEgqusZBtcRRSgighfN8/rN+GFwUEwtbXQaTSYYjOSkQGdXA5DWjpMF85D4bHLcolIutXd1vbetPLJJjxeXY2BsjL0ZWWBUavBtLejMzERHyoq0B8Xh/WYExgNlSKDY/PMKqjzcp+1VN7BYlszRmtebH6/LzkJjEqFaTYdUVFY0mox0fAKn8S7MRESgJtCZ4NV0BIRYjIlyjAcGYRF/TwmiovBpMuh7+qCvqcH4yFSjKRexKrRiJagYGhEzigSuVqsgtfhwaaV2FB8jg7HwhSDseRzmEk6i8mHZWxKMea3D4NBEhj1s1DHxaONZ48CF+GWQOmzZ+7bmSiMSf1hWFnFcMxx9NoRNB4CqEUCNNoQemVRWFtdw9vIQ2jlOyBbwFu2Coq5XMVIwjFoxa6Yb3rDTmEIA56eaCVCExu1mwjzPb1Y7H+HRp4D6t2ckcLh1FsF+USSpwf8zNMnZRj198by8AiWdFNgiu5CV1AE44QW33UMugMlaHfiIddJ8DOB6PC2XbhOJH8ZFgytLBBjvmLM5eVhSdMNA9tZX1SIfh9vqPlcPBA6IWHzOdlsE2ysJ7thV0q9xb86JL4YdHfBx51CDLk4QrODg1oBF7mOfCQS5cQS8f96D2lEYZlcrjKHnfNtoaMl35FnucbjLqfYcepOE8n++/X+Bsp3nMon0PNdAAAAAElFTkSuQmCC')), 16, 16);
}

function $clinit_Resources_default_InlineClientBundleGenerator$tableInitializer(){
  $clinit_Resources_default_InlineClientBundleGenerator$tableInitializer = nullMethod;
  table_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfElEQVR42s2SfUvCUBTG/YpSVET0QhFBkqYoqBFESEEUKVqmJbE0ualj08bchmIWskyKoqA3/+8DCEFgT9tZfYDWPz1wGOdy7u8559w5HH+V08PmN8VuL5x/RejYiOwzgtwjAocP8Gfu4Tu4gzd1A8/eNdw7V3DFLxFKXfTMewSIFLv9mPKG34Z7+6xPANPZTsxuNECAUPYFdjS9VrMAwaMnOuh0Omi322i1Wnj/+EStVoOmaZBlmXJRFCEIAkqlEtVPRtRvgLEwOxpfkS2AuW1Tuq6Te6PRIEdVVVGtVlEulylnjCGfzyOXy1H92LJkAcynsqPRpbIF8O3f0kGz2SR3RVHIUZIkVCoVFAoFyjmOQyaTQTqdpvqRkGAB3LsdWx0M+osWYCHepoN6vU5z/8xsfnmep5nNPJlMIpFIIBqNUv2A78QCuGK6rQ6cXmYBnIuMzW2d0581s17HVETDxKpibPmUFjUSFjEc5DEUKBltFwxnBuOOGczxL/QFBJyMtB48kDUAAAAASUVORK5CYII=')), 16, 16);
}

function MenuDto_0(id, descripcion, token){
  this.id_0 = id;
  this.descripcion = descripcion;
  this.token = token;
}

defineSeed(62, 1, makeCastMap([Q$MenuDto]), MenuDto_0);
_.descripcion = null;
_.id_0 = null;
_.token = null;
function LayoutView_0(){
  $ensureInjected(($clinit_Resources_default_InlineClientBundleGenerator$commonsCssInitializer() , commonsCss));
  this.widget = $build_f_Viewport1(new LayoutView_BinderImpl$Widgets_0(this));
}

defineSeed(63, 59, {}, LayoutView_0);
_.asWidget = function asWidget(){
  return this.widget;
}
;
_.setInSlot = function setInSlot_0(slot, content_0){
  if (slot === ($clinit_LayoutPresenter() , SLOT_content)) {
    $clear_2(this.contentPanel);
    if (content_0) {
      $setWidget_0(this.contentPanel, content_0);
      $forceLayout(this.contentPanel);
    }
    return;
  }
  if (slot === SLOT_menu) {
    $clear_2(this.menuPanel);
    !!content_0 && $setWidget_0(this.menuPanel, content_0);
    return;
  }
}
;
_.contentPanel = null;
_.menuPanel = null;
_.widget = null;
function LayoutView_BinderImpl_0(){
}

defineSeed(64, 1, {}, LayoutView_BinderImpl_0);
function $build_f_Viewport1(this$static){
  var f_Viewport1, f_VerticalLayoutContainer2, f_HTMLPanel3, minVerticalLayoutData, f_BorderLayoutContainer4, menuPanel, westData, contentPanel, centerData, centerMargins, maxVerticalLayoutData, westMargins;
  f_Viewport1 = new Viewport_0;
  $setWidget_0(f_Viewport1, (f_VerticalLayoutContainer2 = new VerticalLayoutContainer_0 , $add_13(f_VerticalLayoutContainer2, (f_HTMLPanel3 = new HTMLPanel_0($html1('' + ($clinit_Resources_default_InlineClientBundleGenerator$commonsCssInitializer() , 'GN1NA3IBE') + '', 'GN1NA3IBF', 'GN1NA3IBG', 'GN1NA3IBB', 'GN1NA3IBC').html) , $setStyleName(f_HTMLPanel3, 'GN1NA3IBD') , f_HTMLPanel3), (minVerticalLayoutData = new VerticalLayoutContainer$VerticalLayoutData_0 , minVerticalLayoutData.height_0 = -1 , minVerticalLayoutData.width_0 = 1 , minVerticalLayoutData)) , $add_13(f_VerticalLayoutContainer2, (f_BorderLayoutContainer4 = new BorderLayoutContainer_0 , $setWestWidget_0(f_BorderLayoutContainer4, (menuPanel = new ContentPanel_0 , $setText_2(menuPanel.header, 'Menu') , this$static.owner.menuPanel = menuPanel , menuPanel), (westData = new BorderLayoutContainer$BorderLayoutData_1(150) , westData.collapsible = true , westData.split_0 = true , $setMargins(westData, (westMargins = new Margins_0 , westMargins.bottom = 5 , westMargins.left_0 = 5 , westMargins.right = 0 , westMargins.top_0 = 5 , westMargins)) , westData)) , $setCenterWidget(f_BorderLayoutContainer4, (contentPanel = new ContentPanel_0 , contentPanel.headerVisible = false , contentPanel.appearance_0.onHideHeader(contentPanel.element, true) , contentPanel.appearance_0.onBodyBorder(contentPanel.element, false) , $setBorders(contentPanel.element) , this$static.owner.contentPanel = contentPanel , contentPanel), (centerData = new MarginData_0 , $setMargins(centerData, (centerMargins = new Margins_0 , centerMargins.bottom = 5 , centerMargins.left_0 = 5 , centerMargins.right = 5 , centerMargins.top_0 = 5 , centerMargins)) , centerData)) , $setBorders(f_BorderLayoutContainer4.element) , f_BorderLayoutContainer4), (maxVerticalLayoutData = new VerticalLayoutContainer$VerticalLayoutData_0 , maxVerticalLayoutData.height_0 = 1 , maxVerticalLayoutData.width_0 = 1 , maxVerticalLayoutData)) , f_VerticalLayoutContainer2));
  return f_Viewport1;
}

function LayoutView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
}

defineSeed(65, 1, {}, LayoutView_BinderImpl$Widgets_0);
_.owner = null;
function $html1(arg0, arg1, arg2, arg3, arg4){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<div class='");
  $append_9(sb, htmlEscape(arg0));
  $append_1(sb.data, "'> <div>First Project<\/div> <\/div> <div class='");
  $append_9(sb, htmlEscape(arg1));
  $append_1(sb.data, "'> <span class='");
  $append_9(sb, htmlEscape(arg2));
  $append_1(sb.data, "'> <a class='");
  $append_9(sb, htmlEscape(arg3));
  $append_1(sb.data, "' href='/logout'> <span class='");
  $append_9(sb, htmlEscape(arg4));
  $append_1(sb.data, "'>Logout<\/span> <\/a> <\/span> <\/div>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function MenuView_0(){
  var basicas, store;
  store = new TreeStore_0(new MenuView$KeyProvider_0);
  basicas = new MenuDto_0(valueOf_2(P1_longLit), 'Menu', '');
  $insert_4(store, store.roots, $getChildren_0(store.roots).size_0, basicas);
  $add_11(store, basicas, new MenuDto_0(valueOf_2(P2_longLit), 'Welcome', 'welcome'));
  $add_11(store, basicas, new MenuDto_0(valueOf_2(P3_longLit), 'Users', 'users'));
  this.tree = new Tree_0(store, new MenuView$1_0);
  $setPixelSize_0(this.tree, 300, -2147483648);
  $setLeafIcon(this.tree.style_0, ($clinit_Resources_default_InlineClientBundleGenerator$tableInitializer() , table_0));
  this.tree.sm.selectionMode = 0;
  this.widget = $build_f_HTMLPanel1(new MenuView_BinderImpl$Widgets_0(this));
}

defineSeed(67, 59, makeCastMap([Q$MenuPresenter$MyView, Q$MenuView]), MenuView_0);
_.asWidget = function asWidget_0(){
  return this.widget;
}
;
_.tree = null;
_.widget = null;
function MenuView$1_0(){
}

defineSeed(68, 1, {}, MenuView$1_0);
_.getPath = function getPath(){
  return 'descripcion';
}
;
_.getValue = function getValue(object){
  return dynamicCast(object, Q$MenuDto).descripcion;
}
;
function MenuView$KeyProvider_0(){
}

defineSeed(69, 1, {}, MenuView$KeyProvider_0);
_.getKey = function getKey(item){
  return '' + toString_12(dynamicCast(item, Q$MenuDto).id_0.value_0);
}
;
function MenuView_BinderImpl_0(){
}

defineSeed(70, 1, {}, MenuView_BinderImpl_0);
function $build_f_HTMLPanel1(this$static){
  var attachRecord0, f_HTMLPanel1;
  f_HTMLPanel1 = new HTMLPanel_0($html1_0(this$static.domId0).html);
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  $get_0(this$static.domId0Element);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, this$static.owner.tree, $get_0(this$static.domId0Element));
  return f_HTMLPanel1;
}

function MenuView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(71, 1, {}, MenuView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html1_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_9(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function $scrollIntoView(elem){
  var left = elem.offsetLeft, top_0 = elem.offsetTop;
  var width = elem.offsetWidth, height = elem.offsetHeight;
  if (elem.parentNode != elem.offsetParent) {
    left -= elem.parentNode.offsetLeft;
    top_0 -= elem.parentNode.offsetTop;
  }
  var cur = elem.parentNode;
  while (cur && cur.nodeType == 1) {
    left < cur.scrollLeft && (cur.scrollLeft = left);
    left + width > cur.scrollLeft + cur.clientWidth && (cur.scrollLeft = left + width - cur.clientWidth);
    top_0 < cur.scrollTop && (cur.scrollTop = top_0);
    top_0 + height > cur.scrollTop + cur.clientHeight && (cur.scrollTop = top_0 + height - cur.clientHeight);
    var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
    if (cur.parentNode != cur.offsetParent) {
      offsetLeft -= cur.parentNode.offsetLeft;
      offsetTop -= cur.parentNode.offsetTop;
    }
    left += offsetLeft - cur.scrollLeft;
    top_0 += offsetTop - cur.scrollTop;
    cur = cur.parentNode;
  }
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $clinit_ClickEvent(){
  $clinit_ClickEvent = nullMethod;
  TYPE_0 = new DomEvent$Type_0('click', new ClickEvent_0);
}

function $dispatch(this$static, handler){
  $onMouseClick(handler.this$0, this$static.nativeEvent);
}

function ClickEvent_0(){
}

defineSeed(258, 259, {}, ClickEvent_0);
_.dispatch = function dispatch_0(handler){
  $dispatch(this, dynamicCast(handler, Q$ClickHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
function $appendHtmlConstant(this$static, html){
  $append_9(this$static.sb, html);
  return this$static;
}

function $get_0(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw new RuntimeException_0('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.');
    }
    this$static.element.removeAttribute('id');
  }
  return this$static.element;
}

function LazyDomElement_0(domId){
  this.domId = domId;
}

defineSeed(338, 1, {}, LazyDomElement_0);
_.domId = null;
_.element = null;
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment_0(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $createElement($doc, 'div');
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv = null;
function UiBinderUtil$TempAttachment_0(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineSeed(340, 1, {}, UiBinderUtil$TempAttachment_0);
_.element = null;
_.origParent = null;
_.origSibling = null;
function $addAndReplaceElement(this$static, widget, toReplace){
  var clientElem;
  clientElem = toReplace;
  $addAndReplaceElement_0(this$static, widget, clientElem);
}

function $addAndReplaceElement_0(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == widget.element) {
    return;
  }
  $removeFromParent(widget);
  toRemove = null;
  children = new WidgetCollection$WidgetIterator_0(this$static.children_0);
  while (children.index_0 < children.this$0.size_0 - 1) {
    next = $next_0(children);
    if (isOrHasChildImpl(toReplace, next.getElement())) {
      if (next.getElement() == toReplace) {
        toRemove = next;
        break;
      }
      $remove_5(children);
    }
  }
  $add_4(this$static.children_0, widget);
  if (!toRemove) {
    $replaceChild(toReplace.parentNode, widget.element, toReplace);
  }
   else {
    $insertBefore(toReplace.parentNode, widget.element, toReplace);
    $remove_0(this$static, toRemove);
  }
  $setParent(widget, this$static);
}

function $dispatch_5(this$static, handler){
  dynamicCast(handler.view, Q$RootPresenter$RootView).usingRootLayoutPanel = false;
  $setInSlot(handler, ($clinit_RootPresenter() , rootSlot), this$static.content_0);
}

function RevealRootContentEvent_0(content_0){
  $clinit_RevealRootContentEvent();
  this.content_0 = content_0;
}

defineSeed(510, 5, {}, RevealRootContentEvent_0);
_.dispatch = function dispatch_22(handler){
  $dispatch_5(this, dynamicCast(handler, Q$RevealRootContentHandler));
}
;
_.getAssociatedType = function getAssociatedType_23(){
  return TYPE_21;
}
;
_.content_0 = null;
function insertFirst(elem, html){
  $clinit_DomHelper();
  var Ext = ext;
  return Ext.DomHelper.doInsert(elem, html, false, 'afterBegin', 'firstChild');
}

function $values_0(this$static){
  var s = new ArrayList_0;
  for (var key_0 in this$static) {
    if (!this$static.hasOwnProperty(key_0))
      continue;
    s.add_0(this$static[key_0]);
  }
  return s;
}

function $addStoreDataChangeHandler(this$static, handler){
  return $addHandler_0((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager_0(this$static)) , this$static.handlerManager), (!TYPE_27 && (TYPE_27 = new GwtEvent$Type_0) , TYPE_27), handler);
}

function $addStoreFilterHandler(this$static, handler){
  return $addHandler_0((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager_0(this$static)) , this$static.handlerManager), (!TYPE_28 && (TYPE_28 = new GwtEvent$Type_0) , TYPE_28), handler);
}

function $remove_13(this$static, model){
  this$static.records.containsKey(model) && $remove_18(this$static.modifiedRecords, this$static.records.remove_1(model));
  return true;
}

function $add_11(this$static, parent_0, child){
  var parentModel;
  parentModel = dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel);
  $insert_4(this$static, parentModel, $getChildren_0(parentModel).size_0, child);
}

function $getAll(this$static){
  var allChildren, i;
  allChildren = new LinkedList_1($getChildren_0(this$static.roots));
  for (i = 0; i < allChildren.size_0; ++i) {
    $addAll(allChildren, $getChildren_0(dynamicCast($get_9(allChildren, i), Q$TreeStore$TreeModel)));
  }
  return $unwrap_0(allChildren);
}

function $getAllChildren(this$static, parent_0){
  var allChildren, i;
  allChildren = new LinkedList_1($getChildren_0(dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel)));
  for (i = 0; i < allChildren.size_0; ++i) {
    $addAll(allChildren, $getChildren_0(dynamicCast($get_9(allChildren, i), Q$TreeStore$TreeModel)));
  }
  return $unwrap_0(allChildren);
}

function $getChildCount(this$static, parent_0){
  return $getChildren_0(dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel)).size_0;
}

function $getChildren(this$static, parent_0){
  return $unwrap_0($getChildren_0(dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel)));
}

function $getDepth(this$static, child){
  var depth;
  depth = 0;
  while (child != null) {
    ++depth;
    child = $getParent(this$static, child);
  }
  return depth;
}

function $getFirstChild(this$static, parent_0){
  var wrapper;
  wrapper = parent_0 == null?this$static.roots:dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel);
  if ($getChildren_0(wrapper).size_0 != 0) {
    return dynamicCast($get_10($getChildren_0(wrapper), 0), Q$TreeStore$TreeModel).data;
  }
  return null;
}

function $getLastChild(this$static, parent_0){
  var children, wrapper;
  wrapper = parent_0 == null?this$static.roots:dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel);
  children = $getChildren_0(wrapper);
  if (children.size_0 != 0) {
    return dynamicCast($get_10(children, children.size_0 - 1), Q$TreeStore$TreeModel).data;
  }
  return null;
}

function $getNextSibling(this$static, item){
  var children, index, parent_0;
  parent_0 = $getParent(this$static, item);
  children = !parent_0?$unwrap_0($getChildren_0(this$static.roots)):$unwrap_0($getChildren_0(dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel)));
  index = $indexOf_5(children.list, item, 0);
  if (children.coll.size_1() > index + 1) {
    return $get_10(children.list, index + 1);
  }
  return null;
}

function $getPreviousSibling(this$static, item){
  var children, index, parent_0;
  parent_0 = $getParent(this$static, item);
  children = !parent_0?$unwrap_0($getChildren_0(this$static.roots)):$unwrap_0($getChildren_0(dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel)));
  index = $indexOf_5(children.list, item, 0);
  if (index > 0) {
    return $get_10(children.list, index - 1);
  }
  return null;
}

function $hasChildren(this$static, item){
  return $getChildren_0(dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(item)), Q$TreeStore$TreeModel)).size_0 != 0;
}

function $insert_4(this$static, parent_0, index, child){
  var addedIndex, childrenModels, i, initialCount, wrapper;
  initialCount = $getChildren_0(parent_0).size_0;
  $addChild(parent_0, index, (wrapper = new TreeStore$TreeModel_0(this$static, child) , $put_2(this$static.modelMap, this$static.keyProvider.getKey(child), wrapper) , wrapper));
  if ($getChildren_0(parent_0).size_0 != initialCount) {
    addedIndex = -1;
    if (this$static.comparators.size_0 != 0) {
      childrenModels = $getChildren_0(parent_0);
      for (i = 0; i < childrenModels.size_0; ++i) {
        if (dynamicCast((checkIndex(i, childrenModels.size_0) , childrenModels.array[i]), Q$TreeStore$TreeModel).data == child) {
          addedIndex = i;
          break;
        }
      }
    }
     else {
      addedIndex = index;
    }
    $fireEvent_7(this$static, new StoreAddEvent_0(addedIndex, child));
  }
}

function $removeChildren_0(this$static, parentWrapper){
  var children, i, models, wrapper;
  if ($getChildren_0(parentWrapper).size_0 != 0) {
    models = new LinkedList_0;
    $addAll(models, parentWrapper.children_0);
    for (i = 0; i < models.size_0; ++i) {
      wrapper = dynamicCast($get_9(models, i), Q$TreeStore$TreeModel);
      $addAll(models, wrapper.children_0);
      children = $getAllChildren(this$static, wrapper.data);
      $remove_11(this$static.modelMap, this$static.keyProvider.getKey(wrapper.data));
      $remove_13(this$static, wrapper.data);
      wrapper.isVisible && wrapper.parent_0 == parentWrapper && $fireEvent_7(this$static, new TreeStoreRemoveEvent_0(wrapper.data, parentWrapper.data, children));
    }
  }
}

function $removeChildren_1(this$static, parent_0){
  $removeChildren_0(this$static, dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel));
}

function TreeStore_0(keyProvider){
  Store_0.call(this, keyProvider);
  this.roots = new TreeStore$TreeModel_0(this, null);
  this.modelMap = new FastMap_0;
}

defineSeed(616, 602, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$Store, Q$TreeStore]), TreeStore_0);
_.findModelWithKey = function findModelWithKey_0(key_0){
  var wrapped;
  wrapped = dynamicCast($get_7(this.modelMap, key_0), Q$TreeStore$TreeModel);
  if (!wrapped) {
    return null;
  }
  return wrapped.data;
}
;
_.getAll = function getAll_0(){
  return $getAll(this);
}
;
function $compare_1(this$static, o1, o2){
  return $compare(new Store$1_0(this$static.this$0), o1.data, o2.data);
}

function TreeStore$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(617, 1, {}, TreeStore$1_0);
_.compare = function compare_3(o1, o2){
  return $compare_1(this, dynamicCast(o1, Q$TreeStore$TreeModel), dynamicCast(o2, Q$TreeStore$TreeModel));
}
;
_.this$0 = null;
function $addChild(this$static, index, child){
  var actualIndex, children, position;
  if (this$static.this$0.comparators.size_0 != 0) {
    position = binarySearch(this$static.children_0, child, new TreeStore$1_0(this$static.this$0));
    actualIndex = position < 0?-position - 1:position;
  }
   else {
    if ($isFiltered(this$static.this$0)) {
      children = $getChildren_0(this$static);
      actualIndex = index == 0?0:$indexOf_5(children, (checkIndex(index - 1, children.size_0) , children.array[index - 1]), 0) + 1;
    }
     else {
      actualIndex = index;
    }
  }
  $add_14(this$static.children_0, actualIndex, child);
  child.parent_0 = this$static;
  if ($isFiltered(this$static.this$0)) {
    child.isVisible = false;
    child.visibleChildren = new ArrayList_0;
    $applyFiltersToParents(child);
  }
}

function $applyFiltersToParents(this$static){
  var visible;
  visible = this$static.visibleChildren.size_0 != 0 || !$isFilteredOut_0(this$static);
  if (visible != this$static.isVisible) {
    this$static.isVisible = visible;
    this$static.isVisible?$add_15(this$static.parent_0.visibleChildren, this$static):$remove_17(this$static.parent_0.visibleChildren, this$static);
    this$static.parent_0.root || $applyFiltersToParents(this$static.parent_0);
  }
}

function $isFilteredOut_0(this$static){
  var filter, filter$iterator;
  if (this$static.root) {
    return true;
  }
  for (filter$iterator = $iterator($keySet(this$static.this$0.filters.map)); filter$iterator.val$outerIter.hasNext();) {
    filter = dynamicCast($next_4(filter$iterator), Q$Store$StoreFilter);
    if (!$select_3(filter, this$static.data)) {
      return true;
    }
  }
  return false;
}

function TreeStore$TreeModel_0(this$0, data){
  this.this$0 = this$0;
  this.children_0 = new ArrayList_0;
  !data && (this.root = true);
  this.data = data;
}

defineSeed(618, 1, makeCastMap([Q$TreeStore$TreeModel]), TreeStore$TreeModel_0);
_.data = null;
_.isVisible = true;
_.parent_0 = null;
_.root = false;
_.this$0 = null;
_.visibleChildren = null;
function StoreAddEvent_0(index, item){
  this.index_0 = index;
  this.items = ($clinit_Collections() , new Collections$SingletonList_0(item));
}

defineSeed(619, 620, {}, StoreAddEvent_0);
_.dispatch = function dispatch_24(handler){
  dynamicCast(handler, Q$StoreAddEvent$StoreAddHandler).onAdd(this);
}
;
_.getAssociatedType = function getAssociatedType_25(){
  return !TYPE_25 && (TYPE_25 = new GwtEvent$Type_0) , TYPE_25;
}
;
_.index_0 = 0;
_.items = null;
defineSeed(625, 620, {});
_.dispatch = function dispatch_28(handler){
  dynamicCast(handler, Q$StoreRemoveEvent$StoreRemoveHandler).onRemove(this);
}
;
_.getAssociatedType = function getAssociatedType_29(){
  return !TYPE_30 && (TYPE_30 = new GwtEvent$Type_0) , TYPE_30;
}
;
_.index_0 = 0;
_.item = null;
function TreeStoreRemoveEvent_0(item, parent_0, children){
  this.index_0 = 0;
  this.item = item;
  this.parent_0 = parent_0;
  this.children_0 = children;
}

defineSeed(628, 625, makeCastMap([Q$TreeStoreRemoveEvent]), TreeStoreRemoveEvent_0);
_.children_0 = null;
_.parent_0 = null;
defineSeed(721, 1, {});
_.style_0 = null;
function ViewportDefaultAppearance_0(){
  ensureInjected(($clinit_ViewportDefaultAppearance_ViewportResources_default_InlineClientBundleGenerator$styleInitializer() , style_6));
}

defineSeed(734, 1, {}, ViewportDefaultAppearance_0);
var style_6 = null;
function ViewportDefaultAppearance_ViewportResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(736, 1, {}, ViewportDefaultAppearance_ViewportResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_7(){
  return '.GN1NA3IBJQ{overflow:hidden;}';
}
;
function $clinit_ViewportDefaultAppearance_ViewportResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_ViewportDefaultAppearance_ViewportResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_6 = new ViewportDefaultAppearance_ViewportResources_default_InlineClientBundleGenerator$1_0;
}

function $template_2(){
  var outer, sb;
  outer = (sb = new StringBuilder_0 , $append_1(sb.data, '<div class="') , $append_9(sb, htmlEscape('GN1NA3IBJQ')) , $append_1(sb.data, '"><\/div>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data)));
  return outer;
}

function $getImage(ir){
  return $createElement_0(new ClippedImagePrototype_0(ir.url, ir.left_0, ir.top_0, ir.width_0, ir.height_0));
}

function $onCheckChange(node, checkElement, checkable, state){
  var e;
  e = null;
  if (checkable) {
    switch (state) {
      case 0:
        e = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$checkedInitializer() , checked_1));
        break;
      case 2:
        e = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$uncheckedInitializer() , unchecked_0));
        break;
      case 1:
        e = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$partialCheckedInitializer() , partialChecked));
    }
  }
   else {
    e = $createElement($doc, 'span');
  }
  $addClassName(e, 'GN1NA3IBEOB');
  e = $insertBefore(node.firstChild, e, checkElement);
  $removeFromParent_0(checkElement);
  return e;
}

function $onHover(node, over){
  over?$addClassName(node, 'GN1NA3IBMOB'):$removeClassName(node, 'GN1NA3IBMOB');
}

function $onJointChange(node, jointElement, joint){
  var e;
  switch (joint) {
    case 0:
      e = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$jointCollapsedIconInitializer() , jointCollapsedIcon));
      break;
    case 1:
      e = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$jointExpandedIconInitializer() , jointExpandedIcon));
      break;
    default:e = create_3('<img src="' + ($clinit_GXT() , $clinit_GXT() , blankImageUrl) + '" width="16px"/>');
  }
  $addClassName(e, 'GN1NA3IBKOB');
  e = $insertBefore(node.firstChild, e, jointElement);
  $removeFromParent_0(jointElement);
  return e;
}

function $renderNode(sb, id, text, icon, checkable, checked, joint, level){
  var e, jointElement;
  $appendHtmlConstant(sb, '<div id="' + htmlEscape(id) + '" class="GN1NA3IBLOB">');
  $append_9(sb.sb, '<div class="GN1NA3IBIOB">');
  $appendHtmlConstant(sb, "<img src='" + ($clinit_GXT() , $clinit_GXT() , blankImageUrl) + "' style='height: 18px; width: " + level * 18 + "px;' />");
  jointElement = null;
  switch (joint) {
    case 0:
      jointElement = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$jointCollapsedIconInitializer() , jointCollapsedIcon));
      break;
    case 1:
      jointElement = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$jointExpandedIconInitializer() , jointExpandedIcon));
  }
  !!jointElement && $addClassName(jointElement, 'GN1NA3IBKOB');
  $appendHtmlConstant(sb, !jointElement?'<img src="' + blankImageUrl + '" style="width: 16px" class="GN1NA3IBKOB" />':jointElement.outerHTML);
  if (checkable) {
    e = null;
    switch (checked) {
      case 0:
        e = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$checkedInitializer() , checked_1));
        break;
      case 2:
        e = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$uncheckedInitializer() , unchecked_0));
        break;
      case 1:
        e = $getImage(($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$partialCheckedInitializer() , partialChecked));
    }
    $addClassName(e, 'GN1NA3IBEOB');
    $appendHtmlConstant(sb, e.outerHTML);
  }
   else {
    $append_9(sb.sb, "<span class='GN1NA3IBEOB'><\/span>");
  }
  if (icon) {
    e = $createElement_0(new ClippedImagePrototype_0(icon.url, icon.left_0, icon.top_0, icon.width_0, icon.height_0));
    $addClassName(e, 'GN1NA3IBJOB');
    $appendHtmlConstant(sb, e.outerHTML);
  }
   else {
    $append_9(sb.sb, '<span class="GN1NA3IBJOB"><\/span>');
  }
  $appendHtmlConstant(sb, '<span class="GN1NA3IBOOB">' + text.html + '<\/span>');
  $append_9(sb.sb, '<\/div>');
  $append_9(sb.sb, '<\/div>');
}

defineSeed(894, 1, {});
_.style_0 = null;
function BlueBorderLayoutAppearance_0(){
  this.style_0 = ($clinit_BlueBorderLayoutAppearance_BlueBorderLayoutResources_default_InlineClientBundleGenerator$cssInitializer() , css_6);
  $ensureInjected_6(this.style_0);
}

defineSeed(915, 721, {}, BlueBorderLayoutAppearance_0);
var css_6 = null;
function $ensureInjected_6(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push(toInject, '.GN1NA3IBNSB{background-color:#dfe8f6;}');
    schedule();
    return true;
  }
  return false;
}

function BlueBorderLayoutAppearance_BlueBorderLayoutResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(917, 1, {}, BlueBorderLayoutAppearance_BlueBorderLayoutResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_25(){
  return '.GN1NA3IBNSB{background-color:#dfe8f6;}';
}
;
_.injected = false;
function $clinit_BlueBorderLayoutAppearance_BlueBorderLayoutResources_default_InlineClientBundleGenerator$cssInitializer(){
  $clinit_BlueBorderLayoutAppearance_BlueBorderLayoutResources_default_InlineClientBundleGenerator$cssInitializer = nullMethod;
  css_6 = new BlueBorderLayoutAppearance_BlueBorderLayoutResources_default_InlineClientBundleGenerator$1_0;
}

function BlueTreeAppearance_0(){
  this.style_0 = ($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$styleInitializer() , style_43);
  $ensureInjected_9(this.style_0);
}

defineSeed(1070, 894, {}, BlueTreeAppearance_0);
var checked_1 = null, folderClosed = null, folderOpened = null, jointCollapsedIcon = null, jointExpandedIcon = null, partialChecked = null, style_43 = null, unchecked_0 = null;
function $ensureInjected_9(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push(toInject, '.GN1NA3IBPOB{cursor:default;-moz-outline:none;-moz-user-focus:none;outline:0 none;position:relative;padding-bottom:1px;}.GN1NA3IBLOB{cursor:default;}.GN1NA3IBIOB{white-space:nowrap;height:21px;}.GN1NA3IBFOB{display:none;}.GN1NA3IBOOB{white-space:nowrap;line-height:11px;text-decoration:none;padding:0 0 0 3px;display:inline-block;vertical-align:top;margin-top:3px;font:normal 11px arial, tahoma, helvetica, sans-serif;color:black;}.GN1NA3IBGOB{background-image:none !important;background-color:#defadc !important;}.GN1NA3IBMOB{background-color:#eee;}.GN1NA3IBHOB{background-color:#defadc;}.GN1NA3IBNOB{background-color:#d9e8fb !important;}');
    schedule();
    return true;
  }
  return false;
}

function BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(1072, 1, {}, BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_42(){
  return '.GN1NA3IBPOB{cursor:default;-moz-outline:none;-moz-user-focus:none;outline:0 none;position:relative;padding-bottom:1px;}.GN1NA3IBLOB{cursor:default;}.GN1NA3IBIOB{white-space:nowrap;height:21px;}.GN1NA3IBFOB{display:none;}.GN1NA3IBOOB{white-space:nowrap;line-height:11px;text-decoration:none;padding:0 0 0 3px;display:inline-block;vertical-align:top;margin-top:3px;font:normal 11px arial, tahoma, helvetica, sans-serif;color:black;}.GN1NA3IBGOB{background-image:none !important;background-color:#defadc !important;}.GN1NA3IBMOB{background-color:#eee;}.GN1NA3IBHOB{background-color:#defadc;}.GN1NA3IBNOB{background-color:#d9e8fb !important;}';
}
;
_.injected = false;
function $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$checkedInitializer(){
  $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$checkedInitializer = nullMethod;
  checked_1 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVR42s2Ty0sCURTG/d+KstoHUZpQBC2CCLJdyzZFRpTmwkWUCAUWtKixwiIKn4xCdygdX0ONjS96jMNMm6+ZC7nInAo3HfjgXi7nd875ONdi+Rex6nLhr2oDyLLcUaqqQtM0KIpC7x0BwSOmTdFECr7ABZxL++ALD2g2m+aAOEtaSqQ41BsvGJ72oWdkHUw4Rbv4FSCZ5lAURBycsOjVkyedfpTLTz+PQO5zKAiPIHc8Xt9k2Ga30Te6gbMrDlmeNwdcR5OIsjnsBCN66w2ELgmsNjcm5v3USEI4c0C+WMLM4h6tyN4KmFoIYHDcg+MwobPzubw5IMmmkS9J6B/bhNXupsmOuV2o2jt9LwmCOeAmEkOl9oxl7ykG7B4MObZwyKRbOyCKojkgFk8gk8nqJkpY8Yaw5jvXjVRQq9dRrdYgSRVzwKeMZTGqGsYZ56+b+S2gq7/QTXwA3ngd6xuLHCkAAAAASUVORK5CYII=')), 16, 16);
}

function $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$folderClosedInitializer(){
  $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$folderClosedInitializer = nullMethod;
  folderClosed = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIElEQVR42r2TS0jUURSHTyVEiJuQaNemKGijtYiIQApauGtji6g2bSLKklQcUqsxS7NQc6MSWCS+skYzn1lDjFOImqE5WVk+Mt9pjTPOy/k6/6CFf4Jq44Uf9y7O7zv33HOuyGqtrgJpbckWmrKEJ1eEiiS581+AZzfEG/DO8XvVZQh/DMSxPcrY35XJvleFkuHMl0Z7jnTZ86NDfvfk3wGdt2WwuzyWPls8o91WvPO9hEIThPwTeBY6+fapVM8OHl00Aey3JEOvif2mKP8LPo8Dv8dJwNNB0FtLwFsJgSqmB9MgVM2DNBPAME/0nPO15xqAIVWbqllVD+EaCN4HfynTrrMKKqE61QR4miPM9Ft8bdcNwEuVZgyribuasVhNhQrIY6znCPhyqbhgArReE752JvqMVukTwXKRqkAz56kxGzyZsJjCx/Y4wj+SKU8yAZqvCmPOhEWjzyxrNo8F3Knw/TzMn4a5kzB9jPctscz2xnMv0QRotArDzw8sNVxWwGISzB6HqaMwmYDbdYiF3v2Mv4ghOBKHq2EnZWdMAGO63tZu9dZnKmDmMIwcZGlgL+6+3TC6Rxuz65cGKjfTlB0Z1hKmVgAeXxKcxZt8tnQFjMfA5x0wvA0+bMFVGUmjdV24KiXCbUtdX2LEZ8ZJxAqADsYpw1xrEYKvo+goWktdugRslg1vmrOic/5p3h+myAmtbb4iec1QTfpG66r80p8A/qHTUYlAfQAAAABJRU5ErkJggg==')), 16, 16);
}

function $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$folderOpenedInitializer(){
  $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$folderOpenedInitializer = nullMethod;
  folderOpened = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACKElEQVR42r2TS2hTURCGR6sLoaALF24Et10oirqxCwXRhe3KRXHhA9Ei+GyjEgx6pam3tKmPWCOID9pqYzGxmBTNw0eJRmJNWqypC/uI0TRtMJjcRJukTa75nQSEqxClmw78HC4z/3dnmHOI5isGrtJTZxPBfoHwREvoVtGdOQH6WimdTcfwO6wC4Z+Gjx1U2d9GgkdPNlcLDbj0y2UooiTAe41GBo3rMGzZgdBgI9LSEGR5ii1JVuH8xPqBR2dLAFyXiAu+I5fpRzJixtSHBgTfHEHQU4uxV/s4N8yK4OEZBcB9ZWHObViWD7wW8EJHSMXciI5pIE2ImEm0AdnbwIwBEX8tZqdNDBiFSa0A9LUuSGRT3mKbz5oLHYyzOoEcG2cNQOYikBaBlICgbw/n3qP7lALwXLfIGx03c2IShVUVCvDzMv+5hY1aYFrDY58EEkcx8baa8yYYVQqAs5lu+u5vzQKB4p4hu9ik5obqAOkw8O0AEN0NfN2FfLgGsdGDuHtCAXCIVOPUlsVyKRseNzAgY2HT3qIBkZ1AuAoIbQM+s0LbkXi3GR3H/tqCQ1xi8bRXovc8A5LtxUJ82cKmTawN/L0e8aHVCFhXwdZUjs7jFP4D0CvQIYduhWw5xwBJz6a1bKpA3LcS/q6lsIuL8z1qij+oJ3vp63p9jdyjIWRGquG/V87jlMnm0zRpUpH1ZSNV/Pe+e29s3M+zSV31FDTW0a15eaW/AHyTrKFh30vlAAAAAElFTkSuQmCC')), 16, 16);
}

function $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$jointCollapsedIconInitializer(){
  $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$jointCollapsedIconInitializer = nullMethod;
  jointCollapsedIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATklEQVR42uWSwQkAQQgDt3l78OtHtBRLEbSGHNuCwj3upoAhJDnnm0QEVgJVhbvPJWaG7oaIYJzgUlVgZowFl8wEEeH9BOsOViusf/AzHmlPUeJeP5BFAAAAAElFTkSuQmCC')), 16, 16);
}

function $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$jointExpandedIconInitializer(){
  $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$jointExpandedIconInitializer = nullMethod;
  jointExpandedIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAOklEQVR42mNgGAX0AXv27Pnf0dHxn2zNampqYEy25sjISNINQNZMsgHomkk2ABRgMH/DMNmBOAoIAwD6RzVNU133BgAAAABJRU5ErkJggg==')), 16, 16);
}

function $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$partialCheckedInitializer(){
  $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$partialCheckedInitializer = nullMethod;
  partialChecked = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaElEQVR42s3TSUtCYRQGYH9ICBVSt3IixK6V2gQFCRWFkmWKQRJYBDZYJBIqEun1KjSABmGDCAVJA2QhGZgtxEWDBLWIgv6A+zcTd5W3cNOBl7M6zzmL72Ox/kW5KQp/zRcgm83+Oj8CfB0Ngc5bCA2+1gOe1g3u8DK4aidqVTZmwHH9jqX4GxYvXjB98oTJgweM7aah9SdBDFiZAApLl69o3XtEy04G8uAdpIE0mtZvoKRjqO41fw9QBYCrcWHh7Dk3eA/51i2a/Sk0riZAemJQ2I/B6Z4qfkHdkBOmSCa3NZXbmgTpjUO8EkW97RDt5jAqOgwMwKAdxlAaEt8VGlznEDmOILSEwZsJghzfBFumKQ4Q/Rbo/QmInKcQWvfBn91GzcQGCIMPghEfyiTK4kBVzxzUdBR9jgi65kOQGQMQj65BqPGBUHmYAY7ChMpOI8rb9GBL1fmBfMjPrmIGSnqJVCl/oZT6AMGX1s+suGYjAAAAAElFTkSuQmCC')), 16, 16);
}

function $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_43 = new BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$1_0;
}

function $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$uncheckedInitializer(){
  $clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$uncheckedInitializer = nullMethod;
  unchecked_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBElEQVR42s2T3UrDQBBG+/4X9k0UtKC11dKqVWyDrW7a2E0aN39NdhMSQpLbz3QvAqJuK7lx4LAwMGeGYbbT+Rdx0u3ir3wTFEVxNL8KTi/6P3LWu0avf4PB7fiwYPaif2HxZkA3TFDLxvju4XiBtlzhVd/AoFtYNoPjepg+Ph0WaMs1FuQdZE1lV+a48IMAYRhirmlqwfnlUI67MW18MFcWxXGMJEkkRF+pBVeDkRzX831wzpGmKfI8bzCtrVowHE3gej6iKJId90X7fFmW8mWOoxZM7qdNcZZlMldVVUNQ70IpeJ7NQYgOSs16BwzBbgcuBES9ByHiWs7VglaX2OovtIlPX7c5S7fSRyEAAAAASUVORK5CYII=')), 16, 16);
}

function ToolButton_1(config, handler){
  $clinit_ToolButton();
  IconButton_1.call(this, config);
  $addHandler(this, handler, (!TYPE_93 && (TYPE_93 = new GwtEvent$Type_0) , TYPE_93));
}

defineSeed(1167, 1164, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), ToolButton_1);
function $createSplitBar_0(this$static, component){
  if (component == this$static.north) {
    return new SplitBar_0(($clinit_Style$LayoutRegion() , SOUTH), component);
  }
   else if (component == this$static.south) {
    return new SplitBar_0(($clinit_Style$LayoutRegion() , NORTH), component);
  }
   else if (component == this$static.west) {
    return new SplitBar_0(($clinit_Style$LayoutRegion() , EAST), component);
  }
   else if (component == this$static.east) {
    return new SplitBar_0(($clinit_Style$LayoutRegion() , WEST), component);
  }
  return null;
}

function $setCenterWidget(this$static, child, layoutData){
  !!child && (child.layoutData = layoutData);
  $setWidget_0(this$static, !child?null:child);
}

function $setWestWidget_0(this$static, child, layoutData){
  !!child && (child.layoutData = layoutData);
  $setWestWidget(this$static, child);
}

function BorderLayoutContainer_0(){
  $clinit_Component();
  BorderLayoutContainer_1.call(this, new BlueBorderLayoutAppearance_0);
}

function BorderLayoutContainer_1(){
  var builder;
  SimpleContainer_0.call(this, true);
  this.collapseHandler = new BorderLayoutContainer$Handler_0(this);
  builder = new SafeHtmlBuilder_0;
  $append_9(builder.sb, "<div class='GN1NA3IBNSB'><\/div>");
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0($toString_0(builder.sb.data))).html)));
  $makePositionable(this.element, false);
}

defineSeed(1171, 1110, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), BorderLayoutContainer_0);
_.doLayout = function doLayout_2(){
  $doLayout_1(this);
}
;
_.getContainerTarget = function getContainerTarget_2(){
  return this.element;
}
;
_.onInsert = function onInsert_2(index, child){
  var bar, c, collapse, config, cp, data, panelData;
  $addStyleName(child, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBPK'));
  setStyleName(child.getElement(), 'GN1NA3IBMSB', true);
  if (!instanceOf(child, Q$Component)) {
    return;
  }
  c = dynamicCast(child, Q$Component);
  if (c == this.widget) {
    return;
  }
  data = $getLayoutData(c);
  if (instanceOf(c, Q$CollapsePanel)) {
    collapse = dynamicCast(c, Q$CollapsePanel);
    panelData = dynamicCast(collapse.panel.layoutData, Q$BorderLayoutContainer$BorderLayoutData);
    bar = dynamicCast($getData(collapse, 'splitBar'), Q$SplitBar);
    if (!bar || bar.resizeWidget != c) {
      bar = $getSplitBar(collapse);
      $setCollapsible(bar);
      !c.dataMap && (c.dataMap = new FastMap_0);
      $put_2(c.dataMap, 'splitBar', bar);
      panelData.collapseHidden && $collapseHidden(collapse);
      $addHandler(bar, new BorderLayoutContainer$3_0(this, c), (!TYPE_93 && (TYPE_93 = new GwtEvent$Type_0) , TYPE_93));
    }
  }
  if (data.collapsible && instanceOf(c, Q$ContentPanel) && c.eventsToSink != -1) {
    cp = dynamicCast(c, Q$ContentPanel);
    cp.collapsible = true;
    cp.hideCollapseTool = true;
    config = ($clinit_ToolButton() , DOUBLELEFT);
    switch ($getRegion_0(this, cp).ordinal) {
      case 0:
        config = DOUBLEUP;
        break;
      case 2:
        config = DOUBLEDOWN;
        break;
      case 1:
        config = DOUBLERIGHT;
    }
    $addTool(cp.header, new ToolButton_1(config, new BorderLayoutContainer$4_0(cp)));
    $addHandler(cp, this.collapseHandler, TYPE_47?TYPE_47:(TYPE_47 = new GwtEvent$Type_0));
    $addHandler(cp, this.collapseHandler, TYPE_49?TYPE_49:(TYPE_49 = new GwtEvent$Type_0));
  }
  if (data.split_0) {
    bar = dynamicCast($getData(c, 'splitBar'), Q$SplitBar);
    if (!bar || bar.resizeWidget != c) {
      bar = $createSplitBar_0(this, c);
      if (data.collapseMini) {
        $setCollapsible(bar);
        switch ($getRegion_0(this, c).ordinal) {
          case 1:
            $updateMini(bar, ($clinit_Style$Direction() , RIGHT_2));
            break;
          case 3:
            $updateMini(bar, ($clinit_Style$Direction() , LEFT_2));
            break;
          case 0:
            $updateMini(bar, ($clinit_Style$Direction() , UP));
            break;
          case 2:
            $updateMini(bar, ($clinit_Style$Direction() , DOWN));
        }
      }
      data.collapseMini && $addHandler(bar, new BorderLayoutContainer$5_0(c), (!TYPE_93 && (TYPE_93 = new GwtEvent$Type_0) , TYPE_93));
      $addHandler(bar, new BorderLayoutContainer$6_0(this, c, bar, data), (!TYPE_96 && (TYPE_96 = new GwtEvent$Type_0) , TYPE_96));
    }
    bar.element.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
    !c.dataMap && (c.dataMap = new FastMap_0);
    $put_2(c.dataMap, 'splitBar', bar);
    bar.minSize = 50;
    bar.maxSize = 500;
    bar.autoSize = false;
  }
}
;
_.onRemove_0 = function onRemove_2(child){
  $onRemove(child);
  this.widget == child && (this.widget = null);
  setStyleName(child.getElement(), 'GN1NA3IBMSB', false);
  this.north == child?(this.north = null):this.south == child?(this.south = null):this.east == child?(this.east = null):this.west == child && (this.west = null);
  $removeStyleName(child, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBPK'));
}
;
_.east = null;
_.lastCenter = null;
_.north = null;
_.south = null;
_.west = null;
function BorderLayoutContainer$3_0(this$0, val$c){
  this.this$0 = this$0;
  this.val$c = val$c;
}

defineSeed(1174, 1, makeCastMap([Q$EventHandler, Q$SelectEvent$SelectHandler]), BorderLayoutContainer$3_0);
_.onSelect = function onSelect_11(event_0){
  $onExpandClick(this.this$0, dynamicCast(this.val$c, Q$CollapsePanel));
}
;
_.this$0 = null;
_.val$c = null;
function BorderLayoutContainer$4_0(val$cp){
  this.val$cp = val$cp;
}

defineSeed(1175, 1, makeCastMap([Q$EventHandler, Q$SelectEvent$SelectHandler]), BorderLayoutContainer$4_0);
_.onSelect = function onSelect_12(event_0){
  $collapse_0(this.val$cp);
}
;
_.val$cp = null;
function BorderLayoutContainer$5_0(val$c){
  this.val$c = val$c;
}

defineSeed(1176, 1, makeCastMap([Q$EventHandler, Q$SelectEvent$SelectHandler]), BorderLayoutContainer$5_0);
_.onSelect = function onSelect_13(event_0){
  $collapse_0(dynamicCast(this.val$c, Q$ContentPanel));
}
;
_.val$c = null;
function BorderLayoutContainer$6_0(this$0, val$c, val$fbar, val$data){
  this.this$0 = this$0;
  this.val$c = val$c;
  this.val$fbar = val$fbar;
  this.val$data = val$data;
}

defineSeed(1177, 1, makeCastMap([Q$EventHandler, Q$SplitBarDragEvent$SplitBarDragHandler]), BorderLayoutContainer$6_0);
_.this$0 = null;
_.val$c = null;
_.val$data = null;
_.val$fbar = null;
function MarginData_0(){
}

defineSeed(1179, 1, makeCastMap([Q$HasMargins]), MarginData_0);
function BorderLayoutContainer$Handler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1180, 1, makeCastMap([Q$EventHandler, Q$BeforeCollapseEvent$BeforeCollapseHandler, Q$BeforeExpandEvent$BeforeExpandHandler]), BorderLayoutContainer$Handler_0);
_.this$0 = null;
function $setEnableScroll(this$static, enableScroll){
  this$static.enableScroll = enableScroll;
  $enableScrolling($doc, enableScroll);
}

function Viewport_0(){
  $clinit_Component();
  Viewport_1.call(this, new ViewportDefaultAppearance_0);
}

function Viewport_1(){
  var sb;
  SimpleContainer_0.call(this, true);
  sb = new SafeHtmlBuilder_0;
  $append_4(sb, $template_2($clinit_ViewportDefaultAppearance_ViewportResources_default_InlineClientBundleGenerator$styleInitializer()));
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0($toString_0(sb.sb.data))).html)));
  this.monitorWindowResize = true;
  (!this.focusManagerSupport && (this.focusManagerSupport = new FocusManagerSupport_0) , this.focusManagerSupport).ignore = false;
  $setPixelSize_0(this, $getClientWidth($doc), $getClientHeight($doc));
}

defineSeed(1197, 1110, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), Viewport_0);
_.onAttach = function onAttach_5(){
  $setEnableScroll(this, this.enableScroll);
  $onAttach_0(this);
}
;
_.onWindowResize = function onWindowResize_2(width, height){
  $setPixelSize_0(this, width, height);
}
;
_.enableScroll = false;
function BeforeCollapseItemEvent_0(){
}

defineSeed(1203, 5, makeCastMap([Q$CancellableEvent]), BeforeCollapseItemEvent_0);
_.dispatch = function dispatch_45(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_46(){
  return TYPE_48;
}
;
_.getSource = function getSource_12(){
  return dynamicCast(this.source, Q$Component);
}
;
_.isCancelled = function isCancelled_7(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_48 = null;
function BeforeExpandItemEvent_0(){
}

defineSeed(1205, 5, makeCastMap([Q$CancellableEvent]), BeforeExpandItemEvent_0);
_.dispatch = function dispatch_47(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_48(){
  return TYPE_50;
}
;
_.getSource = function getSource_14(){
  return dynamicCast(this.source, Q$Component);
}
;
_.isCancelled = function isCancelled_9(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_50 = null;
function CheckChangedEvent_0(){
}

defineSeed(1217, 5, {}, CheckChangedEvent_0);
_.dispatch = function dispatch_58(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_59(){
  return TYPE_61;
}
;
_.getSource = function getSource_21(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_61 = null;
function $isRightClick(this$static){
  if ((this$static.button || 0) == 2 || ($clinit_GXT() , dynamicCast(com_sencha_gxt_core_client_GXT_OS(), Q$GXT$OS).isMac()) && !!this$static.ctrlKey) {
    return true;
  }
  return false;
}

function $within(this$static, element){
  var target;
  if (!!element && element.nodeType == 1) {
    target = this$static.srcElement;
    if (is_1(target)) {
      return isOrHasChildImpl(element, target);
    }
  }
  return false;
}

function $addSelectionHandler(this$static, handler){
  return $addHandler_0((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager_0(this$static)) , this$static.handlerManager), (!TYPE_10 && (TYPE_10 = new GwtEvent$Type_0) , TYPE_10), handler);
}

function $onRemove_0(this$static, model){
  if (this$static.locked)
    return;
  if ($remove_17(this$static.selected, model)) {
    maskUndefined(this$static.lastSelected) === maskUndefined(model) && (this$static.lastSelected = null);
    maskUndefined(this$static.lastFocused) === maskUndefined(model) && $setLastFocused(this$static, null);
    this$static.mouseDown?(this$static.fireSelectionChangeOnClick = true):$fireEvent_8(this$static, new SelectionChangedEvent_0(this$static.selected));
  }
}

defineSeed(1282, 1, makeCastMap([Q$HasHandlers, Q$StoreSelectionModel]));
_.onAdd_0 = function onAdd(models){
}
;
_.onRemove_1 = function onRemove_3(model){
  $onRemove_0(this, model);
}
;
defineSeed(1280, 1281, makeCastMap([Q$HasHandlers, Q$StoreSelectionModel]));
_.onAdd_0 = function onAdd_0(models){
  $setChecked(this, (new ArrayList_2(this.selected)).size_0 == this.listStore.visibleItems.size_0);
}
;
_.onRemove_1 = function onRemove_4(model){
  $onRemove_0(this, model);
  $setChecked(this, (new ArrayList_2(this.selected)).size_0 == this.listStore.visibleItems.size_0);
}
;
function $onAdd(this$static, index){
  if (!!this$static.grid && this$static.grid.viewReady) {
    $insertRows(this$static, index, index, false);
    $delay(this$static.addTask, 10);
  }
}

defineSeed(1308, 1, makeCastMap([Q$EventHandler, Q$StoreAddEvent$StoreAddHandler, Q$StoreDataChangeEvent$StoreDataChangeHandler, Q$StoreFilterEvent$StoreFilterHandler, Q$StoreRecordChangeEvent$StoreRecordChangeHandler, Q$StoreRemoveEvent$StoreRemoveHandler, Q$StoreSortEvent$StoreSortHandler, Q$GridView$10]));
_.onAdd = function onAdd_1(event_0){
  $onAdd(this.this$0, event_0.index_0);
}
;
_.onRemove = function onRemove_5(event_0){
  $onRemove_1(this.this$0, event_0.index_0, false);
}
;
defineSeed(1348, 1, makeCastMap([Q$EventHandler, Q$StoreAddEvent$StoreAddHandler, Q$StoreRecordChangeEvent$StoreRecordChangeHandler, Q$StoreRemoveEvent$StoreRemoveHandler]));
_.onAdd = function onAdd_2(event_0){
  this.this$0.onAdd_0(event_0.items);
}
;
_.onRemove = function onRemove_6(event_0){
  this.this$0.onRemove_1(event_0.item);
}
;
function $calculateIconStyle(this$static, model){
  var style, ts;
  ts = this$static.style_0;
  $hasChildren_0(this$static, model)?$isExpanded(this$static, model)?(style = ($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$folderOpenedInitializer() , folderOpened)):(style = ($clinit_BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$folderClosedInitializer() , folderClosed)):(style = ts.leafIcon);
  return style;
}

function $calculateJoint(this$static, model){
  var node;
  if (model == null) {
    return 2;
  }
  node = $findNode_0(this$static, model);
  return $hasChildren_0(this$static, model)?node.expanded?1:0:2;
}

function $clear_3(this$static){
  $removeChildren($getContainer(this$static, null));
  $ensureFocusElement(this$static);
  this$static.nodes.map = {};
}

function $constrainFocusElement_0(this$static){
  var left, scrollLeft, scrollTop, top_0;
  scrollLeft = $getScrollLeft(this$static.element);
  scrollTop = this$static.element.scrollTop || 0;
  left = ~~($getWidth(this$static.element, true) / 2) + scrollLeft;
  top_0 = ~~($getHeight(this$static.element, true) / 2) + scrollTop;
  $setLeftTop(this$static.focusEl, left, top_0);
}

function $ensureFocusElement(this$static){
  var focusElStyle;
  !!this$static.focusEl && $removeFromParent_0(this$static.focusEl);
  this$static.focusEl = $appendChild(this$static.element, $createFocusable());
  $addClassName(this$static.focusEl, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBMK'));
  if (this$static.focusEl.hasChildNodes()) {
    $addClassName($getFirstChildElement(this$static.focusEl), (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBMK'));
    focusElStyle = $getFirstChildElement(this$static.focusEl).style;
    focusElStyle['borderWidth'] = 0 + ($clinit_Style$Unit() , 'px');
    focusElStyle['fontSize'] = '1px';
    focusElStyle['lineHeight'] = '1px';
  }
  $setLeft(this$static.focusEl, 0);
  $setTop(this$static.focusEl, 0);
  $makePositionable(this$static.focusEl, true);
  $addEventsSunk(this$static.focusEl, 6144);
}

function $expandAll(this$static){
  var child, child$iterator;
  for (child$iterator = new Collections$UnmodifiableCollectionIterator_0($unwrap_0($getChildren_0(this$static.store.roots)).coll.iterator()); child$iterator.it.hasNext();) {
    child = child$iterator.it.next_0();
    $setExpanded_1(this$static, child, true, true);
  }
}

function $findNode(this$static, target){
  var elem, node;
  elem = $findParentElement(target, '.GN1NA3IBLOB', 10);
  if (elem) {
    node = dynamicCast($get_7(this$static.nodes, elem.id), Q$Tree$TreeNode);
    return node;
  }
  return null;
}

function $findNode_0(this$static, model){
  if (model == null)
    return null;
  return dynamicCast($get_7(this$static.nodes, $getId(this$static) + '_' + this$static.store.keyProvider.getKey(model)), Q$Tree$TreeNode);
}

function $focus_2(this$static){
  $clinit_GXT();
  !!this$static.focusEl && $focus(this$static.focusEl);
}

function $getCellContent(this$static, model){
  var sb, text, value, value_0;
  value = ($hasRecord(this$static.store, model)?(value_0 = $getValue($getRecord(this$static.store, model), this$static.valueProvider)):(value_0 = dynamicCast(model, Q$MenuDto).descripcion) , value_0);
  sb = new SafeHtmlBuilder_0;
  text = null;
  value != null && (text = toString__devirtual$(value));
  $append_4(sb, text == null || $equals_3('', text)?($clinit_SafeHtmlUtils() , new SafeHtmlString_0('&#160;')):($clinit_SafeHtmlUtils() , new SafeHtmlString_0(htmlEscape(text))));
  return new SafeHtmlString_0($toString_0(sb.sb.data));
}

function $getCheckedSelection(this$static){
  var checked, n, n$iterator;
  checked = new ArrayList_0;
  for (n$iterator = $values_0(this$static.nodes.map).iterator(); n$iterator.hasNext();) {
    n = dynamicCast(n$iterator.next_0(), Q$Tree$TreeNode);
    n.checked_0 == 0 && $add_15(checked, n.model);
  }
  return checked;
}

function $getContainer(this$static, model){
  var node;
  if (model == null) {
    return this$static.element;
  }
  node = $findNode_0(this$static, model);
  if (node) {
    return $getContainer_0(node);
  }
  return null;
}

function $hasChildren_0(this$static, model){
  var node;
  node = $findNode_0(this$static, model);
  if ($hasChildren(this$static.store, node.model)) {
    return true;
  }
  return false;
}

function $isCheckable(this$static, node){
  var check;
  !$hasChildren_0(this$static, node.model);
  check = this$static.checkable;
  return check;
}

function $isExpanded(this$static, model){
  var node;
  node = $findNode_0(this$static, model);
  return node.expanded;
}

function $onAdd_0(this$static, event_0){
  var child, child$iterator, index, parent_0, parentChildCount, parentDepth, pn, sb;
  for (child$iterator = new AbstractList$IteratorImpl_0(event_0.items); child$iterator.i < child$iterator.this$0_0.size_1();) {
    child = $next_3(child$iterator);
    $register_0(this$static, child);
  }
  if (this$static.eventsToSink == -1) {
    parent_0 = $getParent(this$static.store, $get_11(event_0.items, 0));
    pn = $findNode_0(this$static, parent_0);
    if (!parent_0 || !!pn && pn.childrenRendered) {
      sb = new SafeHtmlBuilder_0;
      parentDepth = !parent_0?0:$getDepth(this$static.store, parent_0);
      for (child$iterator = new AbstractList$IteratorImpl_0(event_0.items); child$iterator.i < child$iterator.this$0_0.size_1();) {
        child = $next_3(child$iterator);
        $append_4(sb, $renderChild(this$static, child, parentDepth));
      }
      index = event_0.index_0;
      parentChildCount = !parent_0?$getChildren_0(this$static.store.roots).size_0:$getChildCount(this$static.store, parent_0);
      index == 0?insertFirst($getContainer(this$static, parent_0), (new SafeHtmlString_0($toString_0(sb.sb.data))).html):index == parentChildCount - 1?insertHtml('beforeEnd', $getContainer(this$static, parent_0), (new SafeHtmlString_0($toString_0(sb.sb.data))).html):insertBefore($getChild($getContainer(this$static, parent_0), index), (new SafeHtmlString_0($toString_0(sb.sb.data))).html);
    }
    $refresh_4(this$static, parent_0);
  }
}

function $onCheckCascade(this$static, model, checked){
  var child, child$iterator, p;
  if (checked == 0) {
    p = $getParent(this$static.store, model);
    while (p) {
      $setChecked_1(this$static, p, 0);
      p = $getParent(this$static.store, p);
    }
  }
   else {
    for (child$iterator = new Collections$UnmodifiableCollectionIterator_0($getChildren(this$static.store, model).coll.iterator()); child$iterator.it.hasNext();) {
      child = child$iterator.it.next_0();
      $setChecked_1(this$static, child, 2);
    }
  }
}

function $onClick_4(this$static, event_0){
  var checkEl, e, jointEl, node;
  e = event_0;
  node = $findNode(this$static, event_0.srcElement);
  if (node) {
    jointEl = (!node.jointElement && $setJointElement(node, (!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer).childNodes[1]) , node.jointElement);
    !!jointEl && $within(e, jointEl) && $toggle(this$static, node.model);
    checkEl = (!node.checkElement && $setCheckElement(node, (!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer)?(!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer).childNodes[2]:null) , node.checkElement);
    this$static.checkable && !!checkEl && $within(e, checkEl) && ($eventStopPropagation(event_0) , $eventPreventDefault(event_0) , $setChecked_1(this$static, node.model, node.checked_0 == 0 || node.checked_0 == 1?2:0) , undefined);
  }
  $ensureFocusElement(this$static);
  $setXY(this$static.focusEl, new Point_0(event_0.clientX || 0, event_0.clientY || 0));
  $clinit_GXT();
  !!this$static.focusEl && $focus(this$static.focusEl);
}

function $onCollapse_1(this$static, model, node, deep){
  var l_0;
  if (node.expanded && $fireCancellableEvent(this$static, new BeforeCollapseItemEvent_0)) {
    node.expanded = false;
    $collapse_2(this$static.view, node);
    l_0 = new ArrayList_0;
    $add_15(l_0, node.model);
    $fireEvent_3(this$static, new CollapseItemEvent_0);
  }
  deep && $setExpandChildren(this$static, model, false);
}

function $onDataChanged_0(this$static){
  var m_0, sel;
  if (this$static.eventsToSink != -1) {
    return;
  }
  $clear_3(this$static);
  $renderChildren(this$static, null);
  if (this$static.autoSelect) {
    m_0 = $get_12($unwrap_0($getChildren_0(this$static.store.roots)), 0);
    if (m_0 != null) {
      sel = new ArrayList_0;
      setCheck(sel.array, sel.size_0++, m_0);
      $doSelect(this$static.sm, sel, false, false);
    }
  }
}

function $onExpand_0(this$static, model, node, deep){
  if ($hasChildren_0(this$static, node.model)) {
    if (node.loading) {
      return;
    }
    if (!node.expanded && false) {
      $removeChildren_1(this$static.store, model);
      node.expand = true;
      node.loading = true;
      null.nullMethod();
      return;
    }
    if (!node.expanded && $fireCancellableEvent(this$static, new BeforeExpandItemEvent_0)) {
      node.expanded = true;
      if (!node.childrenRendered) {
        $renderChildren(this$static, model);
        node.childrenRendered = true;
      }
      $expand_2(this$static.view, node);
      $fireEvent_3(this$static, new ExpandItemEvent_0);
    }
    deep && $setExpandChildren(this$static, model, true);
  }
}

function $onFilter(this$static){
  if (this$static.eventsToSink == -1) {
    this$static.filtering = this$static.store.filtersEnabled;
    $clear_3(this$static);
    $renderChildren(this$static, null);
    $isFiltered(this$static.store) && $expandAll(this$static);
  }
}

function $onRemove_2(this$static, se){
  var child, child$iterator, itemParent, node, p, remove;
  node = $findNode_0(this$static, se.item);
  if (node) {
    !!(!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element) && $removeFromParent_0((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element));
    $unregister_0(this$static, se.item);
    remove = dynamicCast(se, Q$TreeStoreRemoveEvent);
    for (child$iterator = new Collections$UnmodifiableCollectionIterator_0(remove.children_0.coll.iterator()); child$iterator.it.hasNext();) {
      child = child$iterator.it.next_0();
      $unregister_0(this$static, child);
    }
    itemParent = remove.parent_0;
    p = $findNode_0(this$static, itemParent);
    !!p && p.expanded && $getChildCount(this$static.store, p.model) == 0?$setExpanded_1(this$static, p.model, false, false):!!p && $getChildCount(this$static.store, p.model) == 0 && $refresh_4(this$static, itemParent);
  }
}

function $refresh_4(this$static, model){
  var checkable, node;
  if (this$static.eventsToSink == -1) {
    node = $findNode_0(this$static, model);
    if (!!node && !!(!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)) {
      $onIconStyleChange(node, $calculateIconStyle(this$static, model));
      $onJointChange_0(this$static.view, node, $calculateJoint(this$static, model));
      $onTextChange(node, $getCellContent(this$static, model));
      checkable = $isCheckable(this$static, node);
      checkable && $setChecked_1(this$static, node.model, node.checked_0);
    }
  }
}

function $register_0(this$static, m_0){
  var id;
  id = $getId(this$static) + '_' + this$static.store.keyProvider.getKey(m_0);
  $containsKey(this$static.nodes, id) || $put_2(this$static.nodes, id, new Tree$TreeNode_0(id, m_0));
  return id;
}

function $renderChild(this$static, child, depth){
  var id, node;
  id = $register_0(this$static, child);
  node = $findNode_0(this$static, child);
  return $getTemplate(this$static.view, id, $getCellContent(this$static, child), $calculateIconStyle(this$static, child), $isCheckable(this$static, node), node.checked_0, $calculateJoint(this$static, child), depth);
}

function $renderChildren(this$static, parent_0){
  var child, child$iterator, children, container, depth, i, markup, n, node;
  markup = new SafeHtmlBuilder_0;
  depth = $getDepth(this$static.store, parent_0);
  children = parent_0 == null?$unwrap_0($getChildren_0(this$static.store.roots)):$getChildren(this$static.store, parent_0);
  if (children.coll.size_1() == 0) {
    return;
  }
  for (child$iterator = new Collections$UnmodifiableCollectionIterator_0(children.coll.iterator()); child$iterator.it.hasNext();) {
    child = child$iterator.it.next_0();
    $register_0(this$static, child);
  }
  for (i = 0; i < children.coll.size_1(); ++i) {
    $append_4(markup, $renderChild(this$static, $get_10(children.list, i), depth));
  }
  container = $getContainer(this$static, parent_0);
  $setInnerHTML(container, (new SafeHtmlString_0($toString_0(markup.sb.data))).html);
  for (i = 0; i < children.coll.size_1(); ++i) {
    child = $get_10(children.list, i);
    node = $findNode_0(this$static, child);
    if (this$static.autoExpand) {
      $setExpanded_1(this$static, child, true, false);
    }
     else if (node.expand && $hasChildren_0(this$static, node.model)) {
      node.expand = false;
      $setExpanded_1(this$static, child, true, false);
    }
     else 
      this$static.autoLoad && $renderChildren(this$static, child);
  }
  n = $findNode_0(this$static, parent_0);
  !!n && (n.childrenRendered = true);
  parent_0 == null && $ensureFocusElement(this$static);
}

function $scrollIntoView_1(this$static, model){
  var con, node;
  node = $findNode_0(this$static, model);
  if (node) {
    con = node.elContainer;
    if (con) {
      $scrollIntoView(con);
      $setXY(this$static.focusEl, new Point_0($getAbsoluteLeft(con), $getAbsoluteTop(con)));
    }
  }
}

function $setChecked_1(this$static, item, checked){
  var node;
  if (!this$static.checkable)
    return;
  node = $findNode_0(this$static, item);
  if (node) {
    if (node.checked_0 == checked) {
      return;
    }
    !$hasChildren_0(this$static, item);
    if ($fireCancellableEvent(this$static, new BeforeCheckChangeEvent_0(node))) {
      node.checked_0 = checked;
      $onCheckChange_1(node, this$static.checkable, checked);
      $fireEvent_3(this$static, new CheckChangeEvent_0(item));
      $fireEvent_3(this$static, new CheckChangedEvent_0($getCheckedSelection(this$static)));
      $onCheckCascade(this$static, item, checked);
    }
  }
}

function $setExpandChildren(this$static, m_0, expand){
  var child, child$iterator;
  for (child$iterator = new Collections$UnmodifiableCollectionIterator_0($getChildren(this$static.store, m_0).coll.iterator()); child$iterator.it.hasNext();) {
    child = child$iterator.it.next_0();
    $setExpanded_1(this$static, child, expand, true);
  }
}

function $setExpanded_1(this$static, model, expand, deep){
  var i, item, list, n, node, p;
  if (expand) {
    list = new ArrayList_0;
    p = model;
    while ((p = $getParent(this$static.store, p)) != null) {
      n = $findNode_0(this$static, p);
      !!n && !n.expanded && (setCheck(list.array, list.size_0++, p) , true);
    }
    for (i = list.size_0 - 1; i >= 0; --i) {
      item = (checkIndex(i, list.size_0) , list.array[i]);
      $setExpanded_1(this$static, item, true, false);
    }
  }
  node = $findNode_0(this$static, model);
  if (node) {
    if (!this$static.attached) {
      node.expand = expand;
      return;
    }
    expand?$onExpand_0(this$static, model, node, deep):$onCollapse_1(this$static, model, node, deep);
  }
  $constrainFocusElement_0(this$static);
}

function $setSelectionModel_0(this$static, sm){
  !!this$static.sm && $bindTree(this$static.sm, null);
  this$static.sm = sm;
  !!sm && $bindTree(sm, this$static);
}

function $toggle(this$static, model){
  var node;
  node = $findNode_0(this$static, model);
  !!node && $setExpanded_1(this$static, model, !node.expanded, false);
}

function $unregister_0(this$static, m_0){
  var n;
  if (m_0 != null) {
    n = dynamicCast($remove_11(this$static.nodes, $getId(this$static) + '_' + this$static.store.keyProvider.getKey(m_0)), Q$Tree$TreeNode);
    !!n && (n.jointElement = null , n.checkElement = null , n.iconElement = null , n.textElement = null , undefined);
  }
}

function Tree_0(store, valueProvider){
  $clinit_Component();
  Tree_1.call(this, store, valueProvider, new BlueTreeAppearance_0);
}

function Tree_1(store, valueProvider){
  var builder;
  Component_0.call(this);
  this.nodes = new FastMap_0;
  this.view = new TreeView_0;
  this.handler = new Tree$Handler_0(this);
  this.style_0 = new TreeStyle_0;
  this.store = store;
  this.valueProvider = valueProvider;
  $addStoreAddHandler(store, this.handler);
  $addStoreUpdateHandler(store, this.handler);
  $addStoreRemoveHandler(store, this.handler);
  $addStoreDataChangeHandler(store, this.handler);
  $addStoreClearHandler(store, this.handler);
  $addStoreFilterHandler(store, this.handler);
  builder = new SafeHtmlBuilder_0;
  $append_9(builder.sb, '<div class=GN1NA3IBPOB><\/div>');
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0($toString_0(builder.sb.data))).html)));
  $ensureFocusElement(this);
  $setSelectionModel_0(this, new TreeSelectionModel_0);
  $bind_7(this.view, this, store);
}

defineSeed(1373, 96, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), Tree_0);
_.focus_0 = function focus_3(){
  $focus_2(this);
}
;
_.notifyShow = function notifyShow_2(){
}
;
_.onAfterFirstAttach = function onAfterFirstAttach_10(){
  var builder;
  builder = new SafeHtmlBuilder_0;
  $append_9(builder.sb, "<div class='GN1NA3IBFOB' role='group'><\/div>");
  $setInnerHTML(this.element, (new SafeHtmlString_0($toString_0(builder.sb.data))).html);
  $show_0(this.element);
  this.element.style['overflow'] = 'auto';
  $unwrap_0($getChildren_0(this.store.roots)).coll.size_1() == 0 && false?null.nullMethod():$renderChildren(this, null);
  this.allowTextSelection = false;
  this.attached && $disableTextSelection(this.element, true);
  this.eventsToSink == -1?sinkEvents_0(this.element, 17407 | (this.element.__eventBits || 0)):(this.eventsToSink |= 17407);
}
;
_.onAttach = function onAttach_8(){
  $onAttach_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_23(event_0){
  var node;
  $onBrowserEvent_0(this, event_0);
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      $onClick_4(this, event_0);
      break;
    case 2:
      node = $findNode(this, event_0.srcElement);
      !!node && $setExpanded_1(this, node.model, !node.expanded, false);
      break;
    case 2048:
      $fireEvent_3(this, new FocusEvent_0);
  }
  $onEvent(this.view, event_0);
  event_0.srcElement;
}
;
_.onResize = function onResize_13(width, height){
  this.mask && $mask(this, this.maskMessage);
  $constrainFocusElement_0(this);
}
;
_.autoExpand = false;
_.autoLoad = false;
_.autoSelect = false;
_.checkable = false;
_.filtering = false;
_.focusEl = null;
_.sm = null;
_.store = null;
_.valueProvider = null;
function Tree$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1374, 1, {}, Tree$1_0);
_.execute = function execute_43(){
  !!this.this$0.focusEl && $focus(this.this$0.focusEl);
}
;
_.this$0 = null;
function Tree$Handler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1375, 1, makeCastMap([Q$EventHandler, Q$StoreAddEvent$StoreAddHandler, Q$StoreDataChangeEvent$StoreDataChangeHandler, Q$StoreFilterEvent$StoreFilterHandler, Q$StoreRemoveEvent$StoreRemoveHandler]), Tree$Handler_0);
_.onAdd = function onAdd_3(event_0){
  $onAdd_0(this.this$0, event_0);
}
;
_.onDataChange = function onDataChange_0(event_0){
  $onDataChanged_0(this.this$0);
}
;
_.onFilter = function onFilter_0(event_0){
  $onFilter(this.this$0);
}
;
_.onRemove = function onRemove_7(event_0){
  $onRemove_2(this.this$0, event_0);
}
;
_.this$0 = null;
function $setCheckElement(this$static, checkElement){
  this$static.checkElement = checkElement;
}

function $setContainerElement(this$static, containerElement){
  this$static.containerElement = containerElement;
}

function $setElContainer(this$static, elContainer){
  this$static.elContainer = elContainer;
}

function $setIconElement(this$static, iconElement){
  this$static.iconElement = iconElement;
}

function $setJointElement(this$static, jointElement){
  this$static.jointElement = jointElement;
}

function $setTextElement(this$static, textElement){
  this$static.textElement = textElement;
}

function Tree$TreeNode_0(id, m_0){
  this.id_0 = id;
  this.model = m_0;
}

defineSeed(1376, 1, makeCastMap([Q$Tree$TreeNode]), Tree$TreeNode_0);
_.checkElement = null;
_.checked_0 = 2;
_.childrenRendered = false;
_.containerElement = null;
_.elContainer = null;
_.element = null;
_.expand = false;
_.expanded = false;
_.iconElement = null;
_.id_0 = null;
_.jointElement = null;
_.loaded = false;
_.loading = false;
_.model = null;
_.textElement = null;
function $bindTree(this$static, tree){
  if (this$static.tree) {
    $removeHandler_0(this$static.handlerRegistration);
    $bind_2(this$static.keyNav, null);
    $bind_4(this$static, null);
    this$static.treeStore = null;
  }
  this$static.tree = tree;
  if (tree) {
    !this$static.handlerRegistration && (this$static.handlerRegistration = new GroupingHandlerRegistration_0);
    $add_10(this$static.handlerRegistration, $addDomHandler(tree, this$static.handler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_3)));
    $add_10(this$static.handlerRegistration, $addDomHandler(tree, this$static.handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)));
    $bind_2(this$static.keyNav, tree);
    $bind_4(this$static, tree.store);
    this$static.treeStore = tree.store;
  }
}

function $isSelected_0(this$static, item){
  return $indexOf_5(this$static.selected, item, 0) != -1;
}

function $next_2(this$static){
  var first, nextSibling, p, sel;
  sel = this$static.lastSelected;
  if (sel == null) {
    return null;
  }
  first = $getFirstChild(this$static.treeStore, sel);
  if (!!first && $isExpanded(this$static.tree, sel)) {
    return first;
  }
   else {
    nextSibling = $getNextSibling(this$static.treeStore, sel);
    if (nextSibling != null) {
      return nextSibling;
    }
     else {
      p = $getParent(this$static.treeStore, sel);
      while (p) {
        nextSibling = $getNextSibling(this$static.treeStore, p);
        if (nextSibling != null) {
          return nextSibling;
        }
        p = $getParent(this$static.treeStore, p);
      }
    }
  }
  return null;
}

function $onKeyDown_2(this$static, e){
  var next;
  $eventPreventDefault(e);
  next = $next_2(this$static);
  if (next != null) {
    $doSingleSelect(this$static, next, false);
    $scrollIntoView_1(this$static.tree, next);
  }
}

function $onKeyLeft_0(this$static, ce){
  $eventPreventDefault(ce);
  $hasChildren_0(this$static.tree, this$static.lastSelected) && $isExpanded(this$static.tree, this$static.lastSelected)?$setExpanded_1(this$static.tree, this$static.lastSelected, false, false):!!$getParent(this$static.treeStore, this$static.lastSelected) && $doSingleSelect(this$static, $getParent(this$static.treeStore, this$static.lastSelected), false);
}

function $onKeyRight_0(this$static, ce){
  $eventPreventDefault(ce);
  $hasChildren_0(this$static.tree, this$static.lastSelected) && !$isExpanded(this$static.tree, this$static.lastSelected) && $setExpanded_1(this$static.tree, this$static.lastSelected, true, false);
}

function $onKeyUp_1(this$static, e){
  var prev;
  $eventPreventDefault(e);
  prev = $prev(this$static);
  if (prev != null) {
    $doSingleSelect(this$static, prev, false);
    $scrollIntoView_1(this$static.tree, prev);
  }
}

function $onMouseClick(this$static, e){
  var node, xe;
  if (this$static.locked) {
    return;
  }
  if (this$static.fireSelectionChangeOnClick) {
    this$static.mouseDown?(this$static.fireSelectionChangeOnClick = true):$fireEvent_8(this$static, new SelectionChangedEvent_0(this$static.selected));
    this$static.fireSelectionChangeOnClick = false;
  }
  xe = e;
  if (this$static.selectionMode == 2) {
    node = $findNode(this$static.tree, e.srcElement);
    !!node && $isSelected_0(this$static, node.model) && (new ArrayList_2(this$static.selected)).size_0 > 1 && !(!!xe.ctrlKey || !!xe.metaKey) && !e.shiftKey && $doSelect(this$static, ($clinit_Collections() , new Collections$SingletonList_0(node.model)), false, false);
  }
}

function $onMouseDown_1(this$static, e){
  var item, itemNode, items, next, node, prev, selNode, target, xe;
  xe = e;
  target = e.srcElement;
  node = $findNode(this$static.tree, target);
  if (!node) {
    return;
  }
  item = node.model;
  if (item == null)
    return;
  if (!$isSelectableTarget_0(this$static.tree.view, item, target)) {
    return;
  }
  if ($isRightClick(e) && $indexOf_5(this$static.selected, item, 0) != -1) {
    return;
  }
  this$static.mouseDown = true;
  switch (this$static.selectionMode) {
    case 1:
      $indexOf_5(this$static.selected, item, 0) != -1?$doDeselect(this$static, ($clinit_Collections() , new Collections$SingletonList_0(item)), false):$doSelect(this$static, ($clinit_Collections() , new Collections$SingletonList_0(item)), true, false);
      break;
    case 0:
      $focus_2(this$static.tree);
      $doSingleSelect(this$static, item, false);
      break;
    case 2:
      if ($indexOf_5(this$static.selected, item, 0) != -1 && !(!!xe.ctrlKey || !!xe.metaKey) && !e.shiftKey) {
        return;
      }

      if (!!e.shiftKey && this$static.lastSelected != null) {
        items = new ArrayList_0;
        if (maskUndefined(this$static.lastSelected) === maskUndefined(item)) {
          return;
        }
        selNode = $findNode_0(this$static.tree, this$static.lastSelected);
        itemNode = $findNode_0(this$static.tree, item);
        if (!!(!selNode.element && (selNode.element = $getElementById($doc, selNode.id_0)) , selNode.element) && !!(!itemNode.element && (itemNode.element = $getElementById($doc, itemNode.id_0)) , itemNode.element)) {
          if ($getAbsoluteTop((!selNode.element && (selNode.element = $getElementById($doc, selNode.id_0)) , selNode.element)) < $getAbsoluteTop((!itemNode.element && (itemNode.element = $getElementById($doc, itemNode.id_0)) , itemNode.element))) {
            next = $next_2(this$static);
            while (next != null) {
              setCheck(items.array, items.size_0++, next);
              this$static.lastSelected = next;
              if (maskUndefined(next) === maskUndefined(item))
                break;
              next = $next_2(this$static);
            }
          }
           else {
            prev = $prev(this$static);
            while (prev != null) {
              setCheck(items.array, items.size_0++, prev);
              this$static.lastSelected = prev;
              if (maskUndefined(prev) === maskUndefined(item))
                break;
              prev = $prev(this$static);
            }
          }
          $focus_2(this$static.tree);
          $doSelect(this$static, items, true, false);
        }
      }
       else if ((!!xe.ctrlKey || !!xe.metaKey) && $indexOf_5(this$static.selected, item, 0) != -1) {
        $focus_2(this$static.tree);
        $doDeselect(this$static, ($clinit_Collections() , new Collections$SingletonList_0(item)), false);
      }
       else {
        $focus_2(this$static.tree);
        $doSelect(this$static, ($clinit_Collections() , new Collections$SingletonList_0(item)), !!xe.ctrlKey || !!xe.metaKey, false);
      }

  }
  this$static.mouseDown = false;
}

function $prev(this$static){
  var lastChild, parent_0, prev, sel;
  sel = this$static.lastSelected;
  if (sel == null) {
    return null;
  }
  prev = $getPreviousSibling(this$static.treeStore, sel);
  if (prev != null) {
    if (!$isExpanded(this$static.tree, prev) || $getChildCount(this$static.treeStore, prev) < 1) {
      return prev;
    }
     else {
      lastChild = $getLastChild(this$static.treeStore, prev);
      while (!!lastChild && $getChildCount(this$static.treeStore, lastChild) > 0 && $isExpanded(this$static.tree, lastChild)) {
        lastChild = $getLastChild(this$static.treeStore, lastChild);
      }
      return lastChild;
    }
  }
   else {
    parent_0 = $getParent(this$static.treeStore, sel);
    if (parent_0) {
      return parent_0;
    }
  }
  return null;
}

function TreeSelectionModel_0(){
  AbstractStoreSelectionModel_0.call(this);
  this.keyNav = new TreeSelectionModel$1_0(this);
  this.handler = new TreeSelectionModel$Handler_0(this);
}

defineSeed(1377, 1282, makeCastMap([Q$HasHandlers, Q$StoreSelectionModel]), TreeSelectionModel_0);
_.isSelected = function isSelected_0(item){
  return $isSelected_0(this, item);
}
;
_.onSelectChange = function onSelectChange_1(model, select){
  $onSelectChange_0(this.tree.view, model, select);
}
;
_.handlerRegistration = null;
_.tree = null;
_.treeStore = null;
function TreeSelectionModel$1_0(this$0){
  $clinit_KeyNav();
  this.this$0 = this$0;
  KeyNav_0.call(this);
}

defineSeed(1378, 581, {}, TreeSelectionModel$1_0);
_.onDown = function onDown_2(evt){
  $onKeyDown_2(this.this$0, evt);
}
;
_.onLeft = function onLeft_2(evt){
  $onKeyLeft_0(this.this$0, evt);
}
;
_.onRight = function onRight_2(evt){
  $onKeyRight_0(this.this$0, evt);
}
;
_.onUp = function onUp_2(e){
  $onKeyUp_1(this.this$0, e);
}
;
_.this$0 = null;
function TreeSelectionModel$Handler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1379, 1, makeCastMap([Q$ClickHandler, Q$MouseDownHandler, Q$EventHandler]), TreeSelectionModel$Handler_0);
_.onMouseDown = function onMouseDown_1(event_0){
  $onMouseDown_1(this.this$0, event_0.nativeEvent);
}
;
_.this$0 = null;
function $setLeafIcon(this$static, itemIcon){
  this$static.leafIcon = itemIcon;
}

function TreeStyle_0(){
}

defineSeed(1380, 1, {}, TreeStyle_0);
_.leafIcon = null;
function $bind_7(this$static, component, store){
  this$static.tree = component;
  this$static.treeStore = store;
}

function $collapse_2(this$static, node){
  $getContainer_0(node).style['display'] = ($clinit_Style$Display() , 'none');
  $refresh_4(this$static.tree, node.model);
}

function $expand_2(this$static, node){
  $getContainer_0(node).style['display'] = ($clinit_Style$Display() , 'block');
  $refresh_4(this$static.tree, node.model);
}

function $getContainer_0(node){
  var sb;
  if (!node.containerElement) {
    sb = new SafeHtmlBuilder_0;
    $append_9(sb.sb, "<div class='GN1NA3IBFOB' role='group'><\/div>");
    $setContainerElement(node, $appendChild((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element), ($clinit_XDOM() , create_3((new SafeHtmlString_0($toString_0(sb.sb.data))).html))));
  }
  return node.containerElement;
}

function $getNode(this$static, target){
  return $findNode(this$static.tree, target);
}

function $getTemplate(this$static, id, text, icon, checkable, checked, joint, level){
  var sb;
  sb = new SafeHtmlBuilder_0;
  $renderNode(sb, id, text, (this$static.tree , icon), checkable, checked, joint, level);
  return new SafeHtmlString_0($toString_0(sb.sb.data));
}

function $isSelectableTarget_0(this$static, m_0, target){
  var joint, n, xtarget;
  n = $findNode_0(this$static.tree, m_0);
  if (!n) {
    return false;
  }
  xtarget = target;
  joint = ($clinit_GXT() , $hasClassName(xtarget, 'GN1NA3IBKOB'));
  if (joint) {
    return false;
  }
  if (this$static.tree.checkable) {
    return !$hasClassName(xtarget, 'GN1NA3IBEOB');
  }
  return true;
}

function $onCheckChange_1(node, checkable, state){
  var checkEl;
  checkEl = (!node.checkElement && $setCheckElement(node, (!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer)?(!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer).childNodes[2]:null) , node.checkElement);
  !!checkEl && $setCheckElement(node, $onCheckChange((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element), checkEl, checkable, state));
}

function $onEvent(this$static, ce){
  var type;
  type = $eventGetTypeInt(ce.type);
  switch (type) {
    case 16:
      $onMouseOver_1(this$static, ce);
      break;
    case 32:
      $onMouseOut(this$static);
  }
}

function $onIconStyleChange(node, icon){
  var e, iconEl;
  iconEl = (!node.iconElement && $setIconElement(node, (!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer)?(!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer).childNodes[3]:null) , node.iconElement);
  if (iconEl) {
    icon?(e = $createElement_0(new ClippedImagePrototype_0(icon.url, icon.left_0, icon.top_0, icon.width_0, icon.height_0))):(e = $createElement($doc, 'span'));
    $setIconElement(node, $insertBefore((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element).firstChild, e, iconEl));
    $removeFromParent_0(iconEl);
  }
}

function $onJointChange_0(this$static, node, joint){
  var jointEl;
  jointEl = (!node.jointElement && $setJointElement(node, (!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer).childNodes[1]) , node.jointElement);
  !!jointEl && $setJointElement(node, $onJointChange((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element), jointEl, joint, this$static.tree));
}

function $onMouseOut(this$static){
  if (this$static.over) {
    $onOverChange(this$static.over, false);
    this$static.over = null;
  }
}

function $onMouseOver_1(this$static, ne){
  var node;
  node = $getNode(this$static, ne.srcElement);
  if (node) {
    if (this$static.over != node) {
      $onMouseOut(this$static);
      this$static.over = node;
      $onOverChange(this$static.over, true);
    }
  }
}

function $onOverChange(node, over){
  $onHover((!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer), over);
}

function $onSelectChange_0(this$static, model, select){
  var e, node, p;
  if (select) {
    p = $getParent(this$static.treeStore, model);
    !!p && $setExpanded_1(this$static.tree, $getParent(this$static.treeStore, model), true, false);
  }
  node = $findNode_0(this$static.tree, model);
  if (node) {
    e = (!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer);
    !!e && (select?$addClassName(e, 'GN1NA3IBNOB'):$removeClassName(e, 'GN1NA3IBNOB') , undefined);
  }
}

function $onTextChange(node, text){
  var textEl;
  textEl = (!node.textElement && $setTextElement(node, (!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer)?(!node.elContainer && $setElContainer(node, (!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)?$getFirstChildElement((!node.element && (node.element = $getElementById($doc, node.id_0)) , node.element)):null) , node.elContainer).childNodes[4]:null) , node.textElement);
  !!textEl && $setInnerHTML(textEl, isEmptyString(text.html)?'&#160;':text.html);
}

function TreeView_0(){
}

defineSeed(1381, 1, {}, TreeView_0);
_.over = null;
_.tree = null;
_.treeStore = null;
function $get_9(this$static, index){
  var $e0, iter;
  iter = $listIterator(this$static, index);
  try {
    return $next_7(iter);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$NoSuchElementException)) {
      throw new IndexOutOfBoundsException_1("Can't get element " + index);
    }
     else 
      throw $e0;
  }
}

defineSeed(1439, 469, makeCastMap([Q$Collection, Q$List]));
_.add_1 = function add_11(index, element){
  var iter;
  iter = $listIterator(this, index);
  $addBefore(iter.this$0, element, iter.currentNode);
  ++iter.currentIndex;
  iter.lastNode = null;
}
;
_.get_2 = function get_13(index){
  return $get_9(this, index);
}
;
_.iterator = function iterator_14(){
  return $listIterator(this, 0);
}
;
_.remove_3 = function remove_28(index){
  var $e0, iter, old;
  iter = $listIterator(this, index);
  try {
    old = $next_7(iter);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$NoSuchElementException)) {
      throw new IndexOutOfBoundsException_1("Can't remove element " + index);
    }
     else 
      throw $e0;
  }
  $remove_20(iter);
  return old;
}
;
_.set = function set_4(index, element){
  var $e0, iter, old;
  iter = $listIterator(this, index);
  try {
    old = $next_7(iter);
    $verifyCurrentElement(iter);
    iter.lastNode.value_0 = element;
    return old;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$NoSuchElementException)) {
      throw new IndexOutOfBoundsException_1("Can't set element " + index);
    }
     else 
      throw $e0;
  }
}
;
function binarySearch(sortedList, key_0, comparator){
  $clinit_Collections();
  var compareResult, high, low, mid, midVal;
  !comparator && (comparator = ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
  low = 0;
  high = sortedList.size_0 - 1;
  while (low <= high) {
    mid = low + (high - low >> 1);
    midVal = (checkIndex(mid, sortedList.size_0) , sortedList.array[mid]);
    compareResult = comparator.compare(midVal, key_0);
    if (compareResult < 0) {
      low = mid + 1;
    }
     else if (compareResult > 0) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return -low - 1;
}

function $addBefore(this$static, o, target){
  new LinkedList$Node_1(o, target);
  ++this$static.size_0;
}

function $listIterator(this$static, index){
  var i, node;
  (index < 0 || index > this$static.size_0) && indexOutOfBounds(index, this$static.size_0);
  if (index >= this$static.size_0 >> 1) {
    node = this$static.header;
    for (i = this$static.size_0; i > index; --i) {
      node = node.prev;
    }
  }
   else {
    node = this$static.header.next;
    for (i = 0; i < index; ++i) {
      node = node.next;
    }
  }
  return new LinkedList$ListIteratorImpl_0(this$static, index, node);
}

function LinkedList_0(){
  this.header = new LinkedList$Node_0;
  this.size_0 = 0;
}

function LinkedList_1(c){
  LinkedList_0.call(this);
  $addAll(this, c);
}

defineSeed(1470, 1439, makeCastMap([Q$Serializable, Q$Collection, Q$List]), LinkedList_0, LinkedList_1);
_.add_0 = function add_16(o){
  new LinkedList$Node_1(o, this.header);
  ++this.size_0;
  return true;
}
;
_.clear = function clear_10(){
  this.header = new LinkedList$Node_0;
  this.size_0 = 0;
}
;
_.listIterator_0 = function listIterator_5(index){
  return $listIterator(this, index);
}
;
_.size_1 = function size_24(){
  return this.size_0;
}
;
_.header = null;
_.size_0 = 0;
function $next_7(this$static){
  if (this$static.currentNode == this$static.this$0.header) {
    throw new NoSuchElementException_0;
  }
  this$static.lastNode = this$static.currentNode;
  this$static.currentNode = this$static.currentNode.next;
  ++this$static.currentIndex;
  return this$static.lastNode.value_0;
}

function $remove_20(this$static){
  $verifyCurrentElement(this$static);
  this$static.currentNode == this$static.lastNode?(this$static.currentNode = this$static.lastNode.next):--this$static.currentIndex;
  $remove_21(this$static.lastNode);
  this$static.lastNode = null;
  --this$static.this$0.size_0;
}

function $verifyCurrentElement(this$static){
  if (!this$static.lastNode) {
    throw new IllegalStateException_0;
  }
}

function LinkedList$ListIteratorImpl_0(this$0, index, startNode){
  this.this$0 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index;
}

defineSeed(1471, 1, makeCastMap([Q$Iterator, Q$ListIterator]), LinkedList$ListIteratorImpl_0);
_.hasNext = function hasNext_14(){
  return this.currentNode != this.this$0.header;
}
;
_.hasPrevious = function hasPrevious_2(){
  return this.currentNode.prev != this.this$0.header;
}
;
_.next_0 = function next_16(){
  return $next_7(this);
}
;
_.previous = function previous_3(){
  if (this.currentNode.prev == this.this$0.header) {
    throw new NoSuchElementException_0;
  }
  this.lastNode = this.currentNode = this.currentNode.prev;
  --this.currentIndex;
  return this.lastNode.value_0;
}
;
_.remove_0 = function remove_39(){
  $remove_20(this);
}
;
_.currentIndex = 0;
_.currentNode = null;
_.lastNode = null;
_.this$0 = null;
function $remove_21(this$static){
  this$static.next.prev = this$static.prev;
  this$static.prev.next = this$static.next;
  this$static.next = this$static.prev = this$static;
}

function LinkedList$Node_0(){
  this.next = this.prev = this;
}

function LinkedList$Node_1(value, nextNode){
  this.value_0 = value;
  this.next = nextNode;
  this.prev = nextNode.prev;
  nextNode.prev.next = this;
  nextNode.prev = this;
}

defineSeed(1472, 1, {}, LinkedList$Node_0, LinkedList$Node_1);
_.next = null;
_.prev = null;
_.value_0 = null;
var Lcom_crud_client_presenter_LayoutPresenter_2_classLit = createForClass('com.crud.client.presenter.', 'LayoutPresenter', 16), Lcom_crud_client_presenter_MenuPresenter_2_classLit = createForClass('com.crud.client.presenter.', 'MenuPresenter', 22), Lcom_crud_client_presenter_MenuPresenter$1_2_classLit = createForClass('com.crud.client.presenter.', 'MenuPresenter$1', 23), Lcom_crud_client_view_LayoutView_2_classLit = createForClass('com.crud.client.view.', 'LayoutView', 63), Lcom_gwtplatform_mvp_client_proxy_RevealRootContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'RevealRootContentEvent', 510), Lcom_crud_client_view_MenuView_2_classLit = createForClass('com.crud.client.view.', 'MenuView', 67), Lcom_crud_client_view_MenuView$KeyProvider_2_classLit = createForClass('com.crud.client.view.', 'MenuView$KeyProvider', 69), Lcom_crud_client_view_MenuView$1_2_classLit = createForClass('com.crud.client.view.', 'MenuView$1', 68), Lcom_crud_client_view_LayoutView_1BinderImpl_2_classLit = createForClass('com.crud.client.view.', 'LayoutView_BinderImpl', 64), Lcom_crud_client_view_LayoutView_1BinderImpl$Widgets_2_classLit = createForClass('com.crud.client.view.', 'LayoutView_BinderImpl$Widgets', 65), Lcom_crud_client_resources_Resources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.crud.client.resources.', 'Resources_default_InlineClientBundleGenerator', 44), Lcom_crud_client_resources_Resources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.crud.client.resources.', 'Resources_default_InlineClientBundleGenerator$1', 45), Lcom_sencha_gxt_data_shared_event_StoreAddEvent_2_classLit = createForClass('com.sencha.gxt.data.shared.event.', 'StoreAddEvent', 619), Lcom_sencha_gxt_data_shared_event_StoreRemoveEvent_2_classLit = createForClass('com.sencha.gxt.data.shared.event.', 'StoreRemoveEvent', 625), Lcom_sencha_gxt_widget_core_client_container_Viewport_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'Viewport', 1197), Lcom_crud_client_view_MenuView_1BinderImpl_2_classLit = createForClass('com.crud.client.view.', 'MenuView_BinderImpl', 70), Lcom_crud_client_view_MenuView_1BinderImpl$Widgets_2_classLit = createForClass('com.crud.client.view.', 'MenuView_BinderImpl$Widgets', 71), Lcom_sencha_gxt_data_shared_TreeStore_2_classLit = createForClass('com.sencha.gxt.data.shared.', 'TreeStore', 616), Lcom_sencha_gxt_data_shared_TreeStore$TreeModel_2_classLit = createForClass('com.sencha.gxt.data.shared.', 'TreeStore$TreeModel', 618), Lcom_sencha_gxt_data_shared_TreeStore$1_2_classLit = createForClass('com.sencha.gxt.data.shared.', 'TreeStore$1', 617), Lcom_crud_client_util_MenuDto_2_classLit = createForClass('com.crud.client.util.', 'MenuDto', 62), Lcom_sencha_gxt_widget_core_client_tree_Tree_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tree.', 'Tree', 1373), Lcom_sencha_gxt_widget_core_client_tree_Tree$TreeNode_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tree.', 'Tree$TreeNode', 1376), Lcom_sencha_gxt_widget_core_client_tree_Tree$Handler_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tree.', 'Tree$Handler', 1375), Lcom_sencha_gxt_widget_core_client_tree_Tree$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tree.', 'Tree$1', 1374), Lcom_sencha_gxt_widget_core_client_event_BeforeExpandItemEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeExpandItemEvent', 1205), Lcom_sencha_gxt_widget_core_client_event_BeforeCollapseItemEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeCollapseItemEvent', 1203), Lcom_sencha_gxt_widget_core_client_event_CheckChangedEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'CheckChangedEvent', 1217), Lcom_sencha_gxt_widget_core_client_tree_TreeStyle_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tree.', 'TreeStyle', 1380), Lcom_sencha_gxt_widget_core_client_tree_TreeSelectionModel_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tree.', 'TreeSelectionModel', 1377), Lcom_sencha_gxt_widget_core_client_tree_TreeSelectionModel$Handler_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tree.', 'TreeSelectionModel$Handler', 1379), Lcom_sencha_gxt_widget_core_client_tree_TreeSelectionModel$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tree.', 'TreeSelectionModel$1', 1378), Lcom_sencha_gxt_theme_base_client_tree_TreeBaseAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.tree.', 'TreeBaseAppearance', 894), Lcom_sencha_gxt_theme_blue_client_tree_BlueTreeAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.tree.', 'BlueTreeAppearance', 1070), Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util.', 'AbstractSequentialList', 1439), Ljava_util_LinkedList_2_classLit = createForClass('java.util.', 'LinkedList', 1470), Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util.', 'LinkedList$ListIteratorImpl', 1471), Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util.', 'LinkedList$Node', 1472), Lcom_sencha_gxt_data_shared_event_TreeStoreRemoveEvent_2_classLit = createForClass('com.sencha.gxt.data.shared.event.', 'TreeStoreRemoveEvent', 628), Lcom_sencha_gxt_theme_blue_client_tree_BlueTreeAppearance_1BlueTreeResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.tree.', 'BlueTreeAppearance_BlueTreeResources_default_InlineClientBundleGenerator$1', 1072), Lcom_sencha_gxt_widget_core_client_tree_TreeView_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tree.', 'TreeView', 1381), Lcom_sencha_gxt_theme_base_client_container_ViewportDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.container.', 'ViewportDefaultAppearance', 734), Lcom_sencha_gxt_theme_base_client_container_ViewportDefaultAppearance_1ViewportResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.container.', 'ViewportDefaultAppearance_ViewportResources_default_InlineClientBundleGenerator$1', 736), Lcom_sencha_gxt_widget_core_client_container_BorderLayoutContainer_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BorderLayoutContainer', 1171), Lcom_sencha_gxt_widget_core_client_container_BorderLayoutContainer$Handler_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BorderLayoutContainer$Handler', 1180), Lcom_sencha_gxt_widget_core_client_container_BorderLayoutContainer$3_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BorderLayoutContainer$3', 1174), Lcom_sencha_gxt_widget_core_client_container_BorderLayoutContainer$4_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BorderLayoutContainer$4', 1175), Lcom_sencha_gxt_widget_core_client_container_BorderLayoutContainer$5_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BorderLayoutContainer$5', 1176), Lcom_sencha_gxt_widget_core_client_container_BorderLayoutContainer$6_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BorderLayoutContainer$6', 1177), Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client.', 'LazyDomElement', 338), Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ClickEvent', 258), Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client.', 'UiBinderUtil$TempAttachment', 340), Lcom_sencha_gxt_theme_base_client_container_BorderLayoutBaseAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.container.', 'BorderLayoutBaseAppearance', 721), Lcom_sencha_gxt_theme_blue_client_container_BlueBorderLayoutAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.container.', 'BlueBorderLayoutAppearance', 915), Lcom_sencha_gxt_theme_blue_client_container_BlueBorderLayoutAppearance_1BlueBorderLayoutResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.container.', 'BlueBorderLayoutAppearance_BlueBorderLayoutResources_default_InlineClientBundleGenerator$1', 917);
$entry(onLoad_1)(3);

defineSeed(1, -1, CM$);
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
function $getCurrentPlaceRequest(this$static){
  return dynamicCast($get_10(this$static.placeHierarchy, this$static.placeHierarchy.size_0 - 1), Q$PlaceRequest);
}

function $updateHistory(this$static, request, updateBrowserUrl){
  var $e0, browserHistoryToken, historyToken;
  try {
    $set_3(this$static.placeHierarchy, this$static.placeHierarchy.size_0 - 1, request);
    if (updateBrowserUrl) {
      historyToken = $toHistoryToken(this$static.tokenFormatter, this$static.placeHierarchy);
      browserHistoryToken = ($clinit_History() , impl_1?token_1 == null?'':token_1:'');
      (browserHistoryToken == null || !$equals_3(browserHistoryToken, historyToken)) && !!impl_1 && $newItem(impl_1, historyToken);
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$TokenFormatException))
      throw $e0;
  }
}

function $clearSlot(this$static, slot){
  var activeChild, activeChild$iterator, slotChildren;
  slotChildren = dynamicCast(this$static.activeChildren.get_1(slot), Q$List);
  if (slotChildren) {
    if (this$static.visible) {
      for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
        activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
        $internalHide(activeChild);
      }
    }
    slotChildren.clear();
  }
  this$static.view.setInSlot(slot, null);
}

function $detach(this$static, childPresenter){
  var slotChildren, slotChildren$iterator;
  for (slotChildren$iterator = $iterator_0($values(this$static.activeChildren)); slotChildren$iterator.val$outerIter.hasNext();) {
    slotChildren = dynamicCast($next_5(slotChildren$iterator), Q$List);
    slotChildren.remove_2(childPresenter);
  }
  $remove_17(this$static.popupChildren, childPresenter);
}

function $internalHide(this$static){
  var activeChild, activeChild$iterator, popupPresenter, popupPresenter$iterator, slotChildren, slotChildren$iterator;
  for (slotChildren$iterator = $iterator_0($values(this$static.activeChildren)); slotChildren$iterator.val$outerIter.hasNext();) {
    slotChildren = dynamicCast($next_5(slotChildren$iterator), Q$List);
    for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
      activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
      $internalHide(activeChild);
    }
  }
  for (popupPresenter$iterator = new AbstractList$IteratorImpl_0(this$static.popupChildren); popupPresenter$iterator.i < popupPresenter$iterator.this$0_0.size_1();) {
    popupPresenter = dynamicCast($next_3(popupPresenter$iterator), Q$PresenterWidget);
    $setCloseHandler(dynamicCast(popupPresenter.view, Q$PopupView), null);
    $internalHide(popupPresenter);
    $hide_1(dynamicCast(dynamicCast(popupPresenter.view, Q$PopupView), Q$UserEditorView).widget, null);
  }
  this$static.visible = false;
}

function $internalReset(this$static){
  var activeChild, activeChild$iterator, popupPresenter, popupPresenter$iterator, slotChildren, slotChildren$iterator;
  this$static.onReset();
  for (slotChildren$iterator = $iterator_0($values(this$static.activeChildren)); slotChildren$iterator.val$outerIter.hasNext();) {
    slotChildren = dynamicCast($next_5(slotChildren$iterator), Q$List);
    for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
      activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
      $internalReset(activeChild);
    }
  }
  for (popupPresenter$iterator = new AbstractList$IteratorImpl_0(this$static.popupChildren); popupPresenter$iterator.i < popupPresenter$iterator.this$0_0.size_1();) {
    popupPresenter = dynamicCast($next_3(popupPresenter$iterator), Q$PresenterWidget);
    $internalReset(popupPresenter);
  }
}

function $internalReveal(this$static){
  var activeChild, activeChild$iterator, popupPresenter, popupPresenter$iterator, slotChildren, slotChildren$iterator;
  this$static.visible = true;
  for (slotChildren$iterator = $iterator_0($values(this$static.activeChildren)); slotChildren$iterator.val$outerIter.hasNext();) {
    slotChildren = dynamicCast($next_5(slotChildren$iterator), Q$List);
    for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
      activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
      $internalReveal(activeChild);
    }
  }
  for (popupPresenter$iterator = new AbstractList$IteratorImpl_0(this$static.popupChildren); popupPresenter$iterator.i < popupPresenter$iterator.this$0_0.size_1();) {
    popupPresenter = dynamicCast($next_3(popupPresenter$iterator), Q$PresenterWidget);
    $show_1(dynamicCast(dynamicCast(popupPresenter.view, Q$PopupView), Q$UserEditorView).widget);
    $monitorCloseEvent(this$static, popupPresenter);
    $internalReveal(popupPresenter);
  }
}

function $monitorCloseEvent(this$static, popupPresenter){
  var popupView;
  popupView = dynamicCast(popupPresenter.view, Q$PopupView);
  $setCloseHandler(popupView, new PresenterWidget$1_0(this$static, popupPresenter));
}

function $removePopupChildren(this$static, content_0){
  var i, popupPresenter;
  for (i = 0; i < this$static.popupChildren.size_0; ++i) {
    popupPresenter = dynamicCast($get_10(this$static.popupChildren, i), Q$PresenterWidget);
    if (popupPresenter == content_0) {
      $setCloseHandler(dynamicCast(popupPresenter.view, Q$PopupView), null);
      break;
    }
  }
  i < this$static.popupChildren.size_0 && $remove_16(this$static.popupChildren, i);
}

function $setInSlot(this$static, slot, content_0){
  var activeChild, activeChild$iterator, slotChildren;
  if (!content_0) {
    $clearSlot(this$static, slot);
    return;
  }
  !!content_0.currentParentPresenter && content_0.currentParentPresenter != this$static && $detach(content_0.currentParentPresenter, content_0);
  content_0.currentParentPresenter = this$static;
  slotChildren = dynamicCast(this$static.activeChildren.get_1(slot), Q$List);
  if (slotChildren) {
    if (slotChildren.size_1() == 1 && maskUndefined(slotChildren.get_2(0)) === maskUndefined(content_0)) {
      return;
    }
    if (this$static.visible) {
      for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
        activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
        $internalHide(activeChild);
      }
    }
    slotChildren.clear();
    slotChildren.add_0(content_0);
  }
   else {
    slotChildren = new ArrayList_1(1);
    slotChildren.add_0(content_0);
    this$static.activeChildren.put(slot, slotChildren);
  }
  this$static.view.setInSlot(slot, !content_0.view?null:content_0.view.asWidget());
  if (this$static.visible) {
    content_0.visible || $internalReveal(content_0);
    $clinit_ResetPresentersEvent();
    $fireEvent_0(this$static, new ResetPresentersEvent_0);
  }
}

defineSeed(18, 19, makeCastMap([Q$HasHandlers, Q$PresenterWidget]));
_.onReset = function onReset(){
}
;
function $forceReveal(this$static){
  if (this$static.visible) {
    return;
  }
  this$static.revealInParent();
}

defineSeed(17, 18, makeCastMap([Q$HasHandlers, Q$PresenterWidget]));
function $addDeferredCommand(command){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), command);
}

function $manualReveal(this$static, presenter){
  !!this$static.placeManager.defferedNavigation || (presenter.visible?($clinit_ResetPresentersEvent() , $fireEvent_1(this$static, new ResetPresentersEvent_0)):$forceReveal(presenter));
  $unlock(this$static.placeManager);
}

defineSeed(59, 1, {});
_.setInSlot = function setInSlot(slot, content_0){
}
;
function $setCloseHandler(this$static, popupViewCloseHandler){
  !!this$static.closeHandlerRegistration && $removeHandler(this$static.closeHandlerRegistration.real);
  !popupViewCloseHandler?(this$static.closeHandlerRegistration = null):(this$static.closeHandlerRegistration = $addHandler(this$static.widget, new GXTPopupViewImpl$3_0(popupViewCloseHandler), (!TYPE_76 && (TYPE_76 = new GwtEvent$Type_0) , TYPE_76)));
}

function GXTPopupViewImpl$3_0(val$popupViewCloseHandler){
  this.val$popupViewCloseHandler = val$popupViewCloseHandler;
}

defineSeed(61, 1, makeCastMap([Q$EventHandler, Q$HideEvent$HideHandler]), GXTPopupViewImpl$3_0);
_.onHide = function onHide_1(event_0){
  $onClose(this.val$popupViewCloseHandler);
}
;
_.val$popupViewCloseHandler = null;
function $addStyleName(this$static, style){
  setStyleName(this$static.getElement(), style, true);
}

function $removeStyleName(this$static, style){
  setStyleName(this$static.getElement(), style, false);
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  setStyleAttribute(this$static.element, 'height', height);
}

function $setPixelSize(this$static, width, height){
  width >= 0 && setStyleAttribute(this$static.element, 'width', width + 'px');
  height >= 0 && setStyleAttribute(this$static.element, 'height', height + 'px');
}

function $setStyleName(this$static, style){
  this$static.getElement()['className'] = style;
}

function $setStyleName_0(this$static, style, add){
  setStyleName(this$static.getElement_0(), style, add);
}

function $setVisible(this$static, visible){
  setVisible(this$static.getElement(), visible);
}

function $setWidth(this$static, width){
  setStyleAttribute(this$static.getElement(), 'width', width);
}

function $sinkBitlessEvent(this$static, eventTypeName){
  $sinkBitlessEvent_0(this$static.getElement(), eventTypeName);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = $getPropertyString(elem, 'className');
  spaceIdx = $indexOf_4(fullClassName, String.fromCharCode(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx - 0);
  }
  return fullClassName;
}

function setStyleName(elem, style, add){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_1('Style names cannot be empty');
  }
  add?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  elem.setAttribute('aria-hidden', String(!visible));
}

defineSeed(98, 1, makeCastMap([Q$HasVisibility, Q$UIObject]));
_.getElement = function getElement(){
  return this.element;
}
;
_.isVisible_0 = function isVisible(){
  return this.getElement().style.display != 'none';
}
;
_.setVisible = function setVisible_0(visible){
  $setVisible(this, visible);
}
;
_.toString$ = function toString_4(){
  if (!this.element) {
    return '(null handle)';
  }
  return this.getElement().outerHTML;
}
;
_.element = null;
function $addDomHandler(this$static, handler, type){
  var typeInt;
  typeInt = $eventGetTypeInt(type.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type.name_0):this$static.eventsToSink == -1?$sinkEvents(this$static.getElement(), typeInt | (this$static.getElement().__eventBits || 0)):(this$static.eventsToSink |= typeInt);
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager_0(this$static)):this$static.handlerManager, type, handler);
}

function $addHandler(this$static, handler, type){
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager_0(this$static)):this$static.handlerManager, type, handler);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw new IllegalStateException_1("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $setEventListener(this$static.getElement(), this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.getElement(), bitsToAdd | (this$static.getElement().__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && $isOrHasChild(this$static.getElement(), related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.getElement());
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw new IllegalStateException_1("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
    fire_0(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      this$static.getElement().__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    ($clinit_RootPanel() , $contains_3(widgetsToDetach, this$static)) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, Q$HasWidgets)) {
    dynamicCast(this$static.parent_0, Q$HasWidgets).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_1("This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && (this$static.element.__listener = null , undefined);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && $setEventListener(this$static.element, this$static);
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_1('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

defineSeed(97, 98, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.ensureHandlers = function ensureHandlers(){
  return !this.handlerManager?(this.handlerManager = new HandlerManager_0(this)):this.handlerManager;
}
;
_.fireEvent = function fireEvent_3(event_0){
  !!this.handlerManager && $fireEvent_4(this.handlerManager, event_0);
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.setParent = function setParent(parent_0){
  $setParent(this, parent_0);
}
;
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.layoutData = null;
_.parent_0 = null;
function $clinit_Component(){
  $clinit_Component = nullMethod;
  init_0();
}

function $disable(this$static){
  this$static.onDisable();
  this$static.disabled = true;
  $fireEvent_3(this$static, new DisableEvent_0);
}

function $enable(this$static){
  this$static.onEnable();
  this$static.disabled = false;
  $fireEvent_3(this$static, new EnableEvent_0);
}

function $fireCancellableEvent(this$static, event_0){
  if (this$static.disableEvents)
    return true;
  $fireEvent_3(this$static, event_0);
  if (instanceOf(event_0, Q$CancellableEvent)) {
    return !dynamicCast(event_0, Q$CancellableEvent).isCancelled();
  }
  return true;
}

function $fireEvent_3(this$static, event_0){
  if (this$static.disableEvents)
    return;
  !!this$static.handlerManager && $fireEvent_4(this$static.handlerManager, event_0);
}

function $getData(this$static, key_0){
  if (!this$static.dataMap)
    return null;
  return $get_7(this$static.dataMap, key_0);
}

function $getId(this$static){
  var id;
  id = this$static.getElement_0().id;
  if ($equals_3('', id)) {
    id = 'x-widget-' + ++componentId;
    $setId_0(this$static.getElement_0(), id);
  }
  return id;
}

function $hide(this$static){
  if ($fireCancellableEvent(this$static, new BeforeHideEvent_0)) {
    this$static.hidden = true;
    this$static.onHide_0();
    this$static.notifyHide();
    $fireEvent_3(this$static, new HideEvent_0);
  }
}

function $isVisible(this$static, deep){
  var c, w;
  w = this$static.parent_0;
  if (deep && !!w) {
    if (instanceOf(w, Q$Component)) {
      c = dynamicCast(w, Q$Component);
      return this$static.isAttached() && !this$static.hidden && $isVisible_0(this$static.getElement_0(), false) && $isVisible(c, true);
    }
     else {
      return this$static.isAttached() && !this$static.hidden && w.isVisible_0() && $isVisible_0(this$static.getElement_0(), true);
    }
  }
   else {
    return this$static.isAttached() && !this$static.hidden && $isVisible_0(this$static.getElement_0(), deep);
  }
}

function $makeVisible(this$static){
  if (this$static.ensureVisibilityOnSizing) {
    return $ensureVisible(this$static.getElement_0());
  }
  return null;
}

function $mask(this$static, message){
  if (!this$static.mask) {
    this$static.mask = true;
    this$static.maskMessage = message;
    $clinit_Mask();
    $maskInternal(this$static.getElement_0(), message);
  }
}

function $onAfterFirstAttach(this$static){
  if (this$static.shadow || this$static.shim && ($clinit_GXT() , $clinit_GXT() , useShims)) {
    this$static.layer_0 = new Layer_0(this$static.getElement_0());
    if (this$static.shadow) {
      this$static.layer_0.shadowEnabled = true;
      $setShadowPosition(this$static.layer_0);
    }
    this$static.shim && ($clinit_GXT() , $clinit_GXT() , useShims) && (this$static.layer_0.shimEnabled = true);
  }
  (this$static.left_0 != -1 || this$static.top_0 != -1) && this$static.setPosition(this$static.left_0, this$static.top_0);
  (this$static.pageX != -1 || this$static.pageY != -1) && this$static.setPagePosition(this$static.pageX, this$static.pageY);
}

function $onAttach_0(this$static){
  var isOrWasAttached;
  isOrWasAttached = this$static.eventsToSink == -1;
  $onAttach(this$static);
  isOrWasAttached || this$static.onAfterFirstAttach();
  (this$static.width_0 != null || this$static.height_0 != null) && $setSize(this$static, this$static.width_0, this$static.height_0);
}

function $onBrowserEvent_0(this$static, event_0){
  switch ($eventGetTypeInt(event_0.type)) {
    case 2048:
      this$static.onFocus(event_0);
      break;
    case 4096:
      this$static.onBlur(event_0);
  }
  $eventGetTypeInt(event_0.type);
  fireNativeEvent(event_0, this$static, this$static.getElement_0());
}

function $onLoad(this$static){
  this$static.allowTextSelection || this$static.setAllowTextSelection(false);
  if (this$static.monitorWindowResize) {
    !this$static.windowResizeTask && (this$static.windowResizeTask = new Component$2_0(this$static));
    this$static.resizeHandler_0 = addResizeHandler(new Component$3_0(this$static));
  }
}

function $onShow(this$static){
  $setStyleName_0(this$static, this$static.hideMode.value_0, false);
  !!this$static.layer_0 && $sync_0(this$static.layer_0, true);
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), new Component$5_0(this$static));
}

function $onUnload(this$static){
  this$static.allowTextSelection || $disableTextSelection(this$static.getElement_0(), false);
  if (this$static.resizeHandler_0) {
    $removeHandler(this$static.resizeHandler_0.real);
    this$static.resizeHandler_0 = null;
  }
}

function $setAllowTextSelection(this$static, enable){
  this$static.allowTextSelection = enable;
  this$static.isAttached() && $disableTextSelection(this$static.getElement_0(), !enable);
}

function $setData(this$static, key_0, data){
  !this$static.dataMap && (this$static.dataMap = new FastMap_0);
  $put_3(this$static.dataMap, key_0, data);
}

function $setEnabled(this$static, enabled){
  enabled?this$static.enable():this$static.disable_0();
}

function $setHideMode(this$static, hideMode){
  this$static.hideMode = hideMode;
}

function $setItemId(this$static, id){
  this$static.itemId = id;
}

function $setPagePosition(this$static, x, y){
  var p;
  x != -1 && (this$static.pageX = x);
  y != -1 && (this$static.pageY = y);
  if (!this$static.isAttached()) {
    return;
  }
  p = $translatePoints(this$static.getElement_0(), new Point_0(x, y));
  this$static.setPosition(p.x, p.y);
}

function $setPixelSize_0(this$static, width, height){
  var ads, ah, aw, h_0, list, size, w;
  if (width == -1) {
    w = -1;
    this$static.width_0 = null;
  }
   else if (width != -2147483648) {
    w = width;
    this$static.width_0 = width + 'px';
  }
   else {
    w = parseInt_0(this$static.width_0, -1);
  }
  if (height == -1) {
    this$static.height_0 = null;
    h_0 = -1;
  }
   else if (height != -2147483648) {
    h_0 = height;
    this$static.height_0 = height + 'px';
  }
   else {
    h_0 = parseInt_0(this$static.height_0, -1);
  }
  if (!this$static.isAttached()) {
    return;
  }
  size = new Size_0(w, h_0);
  if (this$static.cacheSizes && !!this$static.lastSize && $equals_1(this$static.lastSize, size)) {
    return;
  }
  list = $makeVisible(this$static);
  this$static.lastSize = size;
  ads = this$static.adjustSize(size);
  aw = ads.width_0;
  ah = ads.height_0;
  if (width != -1 && height != -1 && width != -2147483648 && height != -2147483648 && !this$static.deferHeight) {
    $setSize_1(this$static.getElement_0(), aw, ah, true);
  }
   else if (width != -1 && width != -2147483648) {
    $setWidth_0(this$static.getElement_0(), aw, true);
    height != -2147483648 && (this$static.getElement_0().style['height'] = '' , undefined);
  }
   else if (height != -1 && !this$static.deferHeight) {
    $setHeight_0(this$static.getElement_0(), ah, true);
    width != -2147483648 && (this$static.getElement_0().style['width'] = '' , undefined);
  }
  this$static.ensureVisibilityOnSizing && !!list && $restoreVisible((this$static.getElement_0() , list));
  this$static.onResize(aw, ah);
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), new Component$1_0(this$static));
  fire_3(this$static);
}

function $setPosition(this$static, left, top_0){
  var ax, ay, p, pel;
  this$static.left_0 = left;
  this$static.top_0 = top_0;
  if (!this$static.isAttached()) {
    return;
  }
  $makePositionable(this$static.getElement_0(), false);
  p = new Point_0(left, top_0);
  p = p;
  ax = p.x;
  ay = p.y;
  pel = this$static.getElement_0();
  if (ax != -1 || ay != -1) {
    ax != -1 && (pel.style['left'] = ax + ($clinit_Style$Unit() , 'px') , !!pel.layer && $sync_0(pel.layer, false));
    ay != -1 && (pel.style['top'] = ay + ($clinit_Style$Unit() , 'px') , !!pel.layer && $sync_0(pel.layer, false));
    $fireEvent_3(this$static, new MoveEvent_0);
  }
}

function $setSize(this$static, width, height){
  var h_0, list, size, w;
  width != null && !$equals_3('undefined', width) && (width = addUnits(width, 'px'));
  height != null && !$equals_3('undefined', height) && (height = addUnits(height, 'px'));
  if (height == null && width != null && $endsWith(width, 'px') || width == null && height != null && $endsWith(height, 'px') || width != null && height != null && $endsWith(width, 'px') && $endsWith(height, 'px')) {
    width == null?(w = -1):$equals_3('undefined', width)?(w = -2147483648):(w = parseInt_0(width, -1));
    height == null?(h_0 = -1):$equals_3('undefined', height)?(h_0 = -2147483648):(h_0 = parseInt_0(height, -1));
    this$static.setPixelSize(w, h_0);
    return;
  }
  width == null?(this$static.width_0 = null):$equals_3(width, 'undefined')?(width = this$static.width_0):(this$static.width_0 = width);
  height == null?(this$static.height_0 = null):$equals_3(height, 'undefined')?(height = this$static.height_0):(this$static.height_0 = height);
  if (!this$static.isAttached()) {
    return;
  }
  width != null?$setWidth_1(this$static.getElement_0(), width):(this$static.getElement_0().style['width'] = '' , undefined);
  height != null?this$static.deferHeight || $setHeight_1(this$static.getElement_0(), height):(this$static.getElement_0().style['height'] = '' , undefined);
  list = $makeVisible(this$static);
  width == null?(w = -1):width.indexOf('px') != -1?(w = parseInt_0(width, -1)):(w = $getPropertyInt(this$static.getElement_0(), 'offsetWidth'));
  height == null?(h_0 = -1):height.indexOf('px') != -1?(h_0 = parseInt_0(height, -1)):(h_0 = $getPropertyInt(this$static.getElement_0(), 'offsetHeight'));
  size = new Size_0(w, h_0);
  if (this$static.cacheSizes && !!this$static.lastSize && $equals_1(this$static.lastSize, size)) {
    return;
  }
  this$static.lastSize = size;
  this$static.onResize(w, h_0);
  !!this$static.layer_0 && $sync_0(this$static.layer_0, true);
  this$static.ensureVisibilityOnSizing && !!list && $restoreVisible((this$static.getElement_0() , list));
  fire_3(this$static);
}

function $setVisible_0(this$static, visible){
  visible?this$static.show():this$static.hide();
}

function $show(this$static){
  if ($fireCancellableEvent(this$static, new BeforeShowEvent_0)) {
    this$static.hidden = false;
    $onShow(this$static);
    this$static.notifyShow();
    $fireEvent_3(this$static, new ShowEvent_0);
  }
}

function $sync(this$static){
  !!this$static.layer_0 && $sync_0(this$static.layer_0, true);
}

function $unmask(this$static){
  this$static.mask = false;
  this$static.maskMessage = null;
  $clinit_Mask();
  $unmaskInternal(this$static.getElement_0());
}

function Component_0(){
  $clinit_Component();
  this.disabledStyle = (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBFK');
  this.hideMode = ($clinit_Style$HideMode() , DISPLAY);
}

defineSeed(96, 97, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.addHideHandler = function addHideHandler(handler){
  return $addHandler(this, handler, (!TYPE_76 && (TYPE_76 = new GwtEvent$Type_0) , TYPE_76));
}
;
_.addShowHandler = function addShowHandler(handler){
  return $addHandler(this, handler, TYPE_94?TYPE_94:(TYPE_94 = new GwtEvent$Type_0));
}
;
_.adjustSize = function adjustSize(size){
  return size;
}
;
_.disable_0 = function disable_0(){
  $disable(this);
}
;
_.enable = function enable_0(){
  $enable(this);
}
;
_.fireEvent = function fireEvent_4(event_0){
  $fireEvent_3(this, event_0);
}
;
_.focus_0 = function focus_0(){
  this.getFocusEl().focus();
}
;
_.getElement = function getElement_0(){
  return this.getElement_0();
}
;
_.getElement_0 = function getElement_1(){
  return this.element;
}
;
_.getFocusEl = function getFocusEl(){
  return this.getElement_0();
}
;
_.hide = function hide_0(){
  $hide(this);
}
;
_.isVisible_0 = function isVisible_0(){
  return $isVisible(this, false);
}
;
_.notifyHide = function notifyHide(){
}
;
_.notifyShow = function notifyShow(){
}
;
_.onAfterFirstAttach = function onAfterFirstAttach(){
  $onAfterFirstAttach(this);
}
;
_.onAttach = function onAttach_0(){
  $onAttach_0(this);
}
;
_.onBlur = function onBlur(event_0){
  $fireEvent_3(this, new BlurEvent_0);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent_0(this, event_0);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this);
  !!this.layer_0 && $hideUnders(this.layer_0);
}
;
_.onDisable = function onDisable(){
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, true);
}
;
_.onEnable = function onEnable(){
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, false);
}
;
_.onFocus = function onFocus(event_0){
  $fireEvent_3(this, new FocusEvent_0);
}
;
_.onHide_0 = function onHide_2(){
  $setStyleName_0(this, this.hideMode.value_0, true);
  !!this.layer_0 && $hideUnders(this.layer_0);
}
;
_.onLoad = function onLoad_0(){
  $onLoad(this);
}
;
_.onResize = function onResize(width, height){
  this.mask && $mask(this, this.maskMessage);
}
;
_.onUnload = function onUnload_0(){
  $onUnload(this);
}
;
_.onWindowResize = function onWindowResize(width, height){
}
;
_.setAllowTextSelection = function setAllowTextSelection(enable){
  $setAllowTextSelection(this, enable);
}
;
_.setHeight_0 = function setHeight(height){
  this.setPixelSize(-2147483648, height);
}
;
_.setPagePosition = function setPagePosition(x, y){
  $setPagePosition(this, x, y);
}
;
_.setPixelSize = function setPixelSize(width, height){
  $setPixelSize_0(this, width, height);
}
;
_.setPosition = function setPosition(left, top_0){
  $setPosition(this, left, top_0);
}
;
_.setVisible = function setVisible_1(visible){
  $setVisible_0(this, visible);
}
;
_.setWidth_0 = function setWidth(width){
  this.setPixelSize(width, -2147483648);
}
;
_.show = function show_0(){
  $show(this);
}
;
_.allowTextSelection = true;
_.cacheSizes = true;
_.dataMap = null;
_.deferHeight = false;
_.disableEvents = false;
_.disabled = false;
_.ensureVisibilityOnSizing = false;
_.focusManagerSupport = null;
_.height_0 = null;
_.hidden = false;
_.itemId = null;
_.lastSize = null;
_.layer_0 = null;
_.left_0 = -1;
_.mask = false;
_.maskMessage = null;
_.monitorWindowResize = false;
_.pageX = -1;
_.pageY = -1;
_.resizeHandler_0 = null;
_.shadow = false;
_.shim = false;
_.stateful = false;
_.tabIndex_0 = 0;
_.top_0 = -1;
_.width_0 = null;
_.windowResizeTask = null;
var componentId = 0;
function $onSelectionChanged(this$static, event_0){
  var size;
  size = event_0.selection.size_0;
  if (size == 0) {
    $setEnabled(this$static.this$0.edit, false);
    $setEnabled(this$static.this$0.delete_$, false);
  }
   else if (size == 1) {
    $setEnabled(this$static.this$0.edit, true);
    $setEnabled(this$static.this$0.delete_$, true);
    dynamicCast($get_10(event_0.selection, 0), Q$UserProxy);
  }
   else if (size > 1) {
    $setEnabled(this$static.this$0.edit, false);
    $setEnabled(this$static.this$0.delete_$, true);
  }
}

function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    $cancel_1(this$static.requestHandle);
    this$static.requestHandle = null;
  }
  this$static.onCancel();
}

function $run(this$static, duration, startTime){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  ++this$static.runId;
  $execute(this$static.callback, currentTimeMillis());
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate(this$static.interpolate(progress));
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.onStart();
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation_0(){
  Animation_1.call(this, ($clinit_AnimationSchedulerImpl() , INSTANCE_3));
}

function Animation_1(scheduler){
  this.callback = new Animation$1_0(this);
  this.scheduler = scheduler;
}

defineSeed(123, 1, {});
_.interpolate = function interpolate(progress){
  return (1 + Math.cos(3.141592653589793 + progress * 3.141592653589793)) / 2;
}
;
_.onCancel = function onCancel(){
  this.wasStarted && this.onComplete();
}
;
_.onComplete = function onComplete(){
  this.onUpdate(this.interpolate(1));
}
;
_.onStart = function onStart(){
  this.onUpdate(this.interpolate(0));
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.requestHandle = null;
_.runId = -1;
_.scheduler = null;
_.startTime = -1;
_.wasStarted = false;
function $execute(this$static, timestamp){
  $update(this$static.this$0, timestamp)?(this$static.this$0.requestHandle = $requestAnimationFrame(this$static.this$0.scheduler, this$static.this$0.callback)):(this$static.this$0.requestHandle = null);
}

function Animation$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(124, 1, {}, Animation$1_0);
_.this$0 = null;
defineSeed(125, 1, {});
defineSeed(126, 1, makeCastMap([Q$AnimationScheduler$AnimationHandle]));
function $clinit_AnimationSchedulerImpl(){
  $clinit_AnimationSchedulerImpl = nullMethod;
  var impl;
  impl = new AnimationSchedulerImplTimer_0;
  INSTANCE_3 = impl;
}

defineSeed(127, 125, {});
var INSTANCE_3 = null;
function $cancelAnimationFrame(this$static, requestId){
  $remove_17(this$static.animationRequests, requestId);
  this$static.animationRequests.size_0 == 0 && $cancel_0(this$static.timer);
}

function $requestAnimationFrame(this$static, callback){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl_0(this$static, callback);
  $add_15(this$static.animationRequests, requestId);
  this$static.animationRequests.size_0 == 1 && $schedule(this$static.timer, 16);
  return requestId;
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(_3Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, makeCastMap([Q$AnimationSchedulerImplTimer$AnimationHandleImpl_$1, Q$Serializable, Q$Object_$1]), Q$AnimationSchedulerImplTimer$AnimationHandleImpl, this$static.animationRequests.size_0, 0);
  curAnimations = dynamicCast($toArray_0(this$static.animationRequests, curAnimations), Q$AnimationSchedulerImplTimer$AnimationHandleImpl_$1);
  duration = new Duration_0;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_17(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start);
  }
  this$static.animationRequests.size_0 > 0 && $schedule(this$static.timer, max_0(5, 16 - (currentTimeMillis() - duration.start)));
}

function AnimationSchedulerImplTimer_0(){
  this.animationRequests = new ArrayList_0;
  this.timer = new AnimationSchedulerImplTimer$1_0(this);
}

defineSeed(128, 127, {}, AnimationSchedulerImplTimer_0);
function $clinit_Timer(){
  $clinit_Timer = nullMethod;
  timers = new ArrayList_0;
  addCloseHandler(new Timer$1_0);
}

function $cancel_0(this$static){
  this$static.isRepeating?clearInterval_0(this$static.timerId):clearTimeout_0(this$static.timerId);
  $remove_17(timers, this$static);
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_1('must be non-negative');
  }
  this$static.isRepeating?clearInterval_0(this$static.timerId):clearTimeout_0(this$static.timerId);
  $remove_17(timers, this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_15(timers, this$static);
}

function clearInterval_0(id){
  $wnd.clearInterval(id);
}

function clearTimeout_0(id){
  $wnd.clearTimeout(id);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire();
  }
  ), delay);
}

defineSeed(130, 1, makeCastMap([Q$Timer]));
_.fire = function fire(){
  this.isRepeating || $remove_17(timers, this);
  this.run();
}
;
_.isRepeating = false;
_.timerId = 0;
var timers;
function AnimationSchedulerImplTimer$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(129, 130, makeCastMap([Q$Timer]), AnimationSchedulerImplTimer$1_0);
_.run = function run(){
  $updateAnimations(this.this$0);
}
;
_.this$0 = null;
function $cancel_1(this$static){
  $cancelAnimationFrame(this$static.this$0, this$static);
}

function AnimationSchedulerImplTimer$AnimationHandleImpl_0(this$0, callback){
  this.this$0 = this$0;
  this.callback = callback;
}

defineSeed(131, 126, makeCastMap([Q$AnimationScheduler$AnimationHandle, Q$AnimationSchedulerImplTimer$AnimationHandleImpl]), AnimationSchedulerImplTimer$AnimationHandleImpl_0);
_.callback = null;
_.this$0 = null;
function $getAriaValue(value){
  var buf, item, item$index, item$max;
  buf = new StringBuffer_0;
  for (item$index = 0 , item$max = value.length; item$index < item$max; ++item$index) {
    item = value[item$index];
    $append_6(($append_2(buf.impl, '' + item) , buf), ' ');
  }
  return $trim(buf.impl.string);
}

function $set(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(values));
}

defineSeed(133, 1, {});
_.name_0 = null;
function AriaValueAttribute_0(name_0){
  this.name_0 = name_0;
}

defineSeed(132, 133, {}, AriaValueAttribute_0);
function PrimitiveValueAttribute_0(name_0){
  this.name_0 = name_0;
}

defineSeed(134, 133, {}, PrimitiveValueAttribute_0);
function $clinit_State(){
  $clinit_State = nullMethod;
  new PrimitiveValueAttribute_0('aria-busy');
  new AriaValueAttribute_0('aria-checked');
  new PrimitiveValueAttribute_0('aria-disabled');
  new AriaValueAttribute_0('aria-expanded');
  new AriaValueAttribute_0('aria-grabbed');
  HIDDEN = new PrimitiveValueAttribute_0('aria-hidden');
  new AriaValueAttribute_0('aria-invalid');
  new AriaValueAttribute_0('aria-pressed');
  new AriaValueAttribute_0('aria-selected');
}

var HIDDEN;
function $onBrowserEvent_1(this$static, context, parent_0, value, event_0, valueUpdater){
  var eventType;
  eventType = event_0.type;
  $equals_3('keydown', eventType) && (event_0.keyCode || 0) == 13 && this$static.onEnterKeyDown(context, parent_0, value, event_0, valueUpdater);
}

function AbstractCell_0(consumedEvents){
  var event_0, event$index, event$max, events;
  events = null;
  if (consumedEvents != null && consumedEvents.length > 0) {
    events = new HashSet_0;
    for (event$index = 0 , event$max = consumedEvents.length; event$index < event$max; ++event$index) {
      event_0 = consumedEvents[event$index];
      $add_16(events, event_0);
    }
  }
  !!events && (this.consumedEvents = ($clinit_Collections() , new Collections$UnmodifiableSet_0(events)));
}

defineSeed(136, 1, {});
_.onBrowserEvent_0 = function onBrowserEvent_2(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_1(this, context, parent_0, value, event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown(context, parent_0, value, event_0, valueUpdater){
}
;
_.consumedEvents = null;
function Cell$Context_0(key_0){
  this.key = key_0;
}

defineSeed(139, 1, {}, Cell$Context_0);
_.key = null;
function Duration_0(){
  this.start = currentTimeMillis();
}

defineSeed(140, 1, {}, Duration_0);
function toString__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.toString$():maybeJsoInvocation.toString?maybeJsoInvocation.toString():'[JavaScriptObject]';
}

function $push(this$static, value){
  this$static[this$static.length] = value;
}

function getModuleBaseURL(){
  var key_0 = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key_0] || $moduleBase;
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher_0(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer_0(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleEntry(this$static, cmd){
  this$static.entryCommands = push(this$static.entryCommands, [cmd, false]);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push(this$static.finallyCommands, [cmd, false]);
}

function execute_1(cmd){
  return cmd.execute_0();
}

function runRepeatingTasks(tasks){
  var canceledSomeTasks, i, length_0, newTasks, start, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  start = currentTimeMillis();
  while (currentTimeMillis() - start < 100) {
    for (i = 0; i < length_0; ++i) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; ++i) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  $wnd.setTimeout(function(){
    var ret = $entry(execute_1)(cmd);
    ret && $wnd.setTimeout(arguments.callee, delayMs);
  }
  , delayMs);
}

function SchedulerImpl$Flusher_0(this$0){
  this.this$0 = this$0;
}

defineSeed(164, 1, {}, SchedulerImpl$Flusher_0);
_.execute_0 = function execute_2(){
  this.this$0.flushRunning = true;
  $flushPostEventPumpCommands(this.this$0);
  this.this$0.flushRunning = false;
  return this.this$0.shouldBeRunning = $isWorkQueued(this.this$0);
}
;
_.this$0 = null;
function SchedulerImpl$Rescuer_0(this$0){
  this.this$0 = this$0;
}

defineSeed(165, 1, {}, SchedulerImpl$Rescuer_0);
_.execute_0 = function execute_3(){
  this.this$0.flushRunning && scheduleFixedDelayImpl(this.this$0.flusher, 1);
  return this.this$0.shouldBeRunning;
}
;
_.this$0 = null;
function $getChild(this$static, index){
  return this$static.childNodes[index];
}

function $getChildNodes(this$static){
  return this$static.childNodes;
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $insertFirst(this$static, child){
  return $insertBefore(this$static, child, this$static.firstChild);
}

function $removeFromParent_0(this$static){
  var parent_0;
  parent_0 = $getParentElement(this$static);
  !!parent_0 && parent_0.removeChild(this$static);
}

function is_0(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, last, lastPos, oldClassName;
  className = $trim(className);
  oldClassName = this$static.className;
  idx = oldClassName.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldClassName.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldClassName.length;
      if (last == lastPos || last < lastPos && oldClassName.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldClassName.indexOf(className, idx + 1);
  }
  if (idx == -1) {
    oldClassName.length > 0 && (oldClassName += ' ');
    this$static.className = oldClassName + className;
  }
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) || 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  className = $trim(className);
  oldStyle = this$static.className;
  idx = oldStyle.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(className, idx + 1);
  }
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx - 0));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName;
  }
}

function $setAttribute(this$static, name_0, value){
  this$static.setAttribute(name_0, value);
}

function $setClassName(this$static, className){
  this$static.className = className;
}

function $setId_0(this$static, id){
  this$static.id = id;
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function is_1(o){
  if (is_0(o)) {
    return is_2(o);
  }
  return false;
}

function is_2(node){
  return !!node && node.nodeType == 1;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}

function $setInnerText(elem, text){
  elem.textContent = text || '';
}

function $getAbsoluteLeft(elem){
  var left = 0;
  var curr = elem.parentNode;
  while (curr && curr.offsetParent) {
    curr.tagName != 'TR' && curr.tagName != 'TBODY' && (left -= curr.scrollLeft);
    curr = curr.parentNode;
  }
  while (elem) {
    left += elem.offsetLeft;
    elem = elem.offsetParent;
  }
  return left;
}

function $getAbsoluteTop(elem){
  var top_0 = 0;
  var curr = elem.parentNode;
  while (curr && curr.offsetParent) {
    curr.tagName != 'TR' && curr.tagName != 'TBODY' && (top_0 -= curr.scrollTop);
    curr = curr.parentNode;
  }
  while (elem) {
    top_0 += elem.offsetTop;
    elem = elem.offsetParent;
  }
  return top_0;
}

function $enableScrolling(this$static, enable){
  ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).style['overflow'] = enable?'auto':'hidden';
}

function $getClientHeight(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight;
}

function $getClientWidth(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth;
}

function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

defineSeed(191, 1, makeCastMap([Q$Serializable, Q$Comparable, Q$Enum]));
_.compareTo$ = function compareTo(other){
  return $compareTo(this, dynamicCast(other, Q$Enum));
}
;
function $clinit_Style$Cursor(){
  $clinit_Style$Cursor = nullMethod;
  DEFAULT = new Style$Cursor$1_0;
  AUTO = new Style$Cursor$2_0;
  CROSSHAIR = new Style$Cursor$3_0;
  POINTER = new Style$Cursor$4_0;
  MOVE = new Style$Cursor$5_0;
  E_RESIZE = new Style$Cursor$6_0;
  NE_RESIZE = new Style$Cursor$7_0;
  NW_RESIZE = new Style$Cursor$8_0;
  N_RESIZE = new Style$Cursor$9_0;
  SE_RESIZE = new Style$Cursor$10_0;
  SW_RESIZE = new Style$Cursor$11_0;
  S_RESIZE = new Style$Cursor$12_0;
  W_RESIZE = new Style$Cursor$13_0;
  TEXT = new Style$Cursor$14_0;
  WAIT = new Style$Cursor$15_0;
  HELP = new Style$Cursor$16_0;
  COL_RESIZE = new Style$Cursor$17_0;
  ROW_RESIZE = new Style$Cursor$18_0;
  $VALUES = initValues(_3Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Cursor, [DEFAULT, AUTO, CROSSHAIR, POINTER, MOVE, E_RESIZE, NE_RESIZE, NW_RESIZE, N_RESIZE, SE_RESIZE, SW_RESIZE, S_RESIZE, W_RESIZE, TEXT, WAIT, HELP, COL_RESIZE, ROW_RESIZE]);
}

function values_0(){
  $clinit_Style$Cursor();
  return $VALUES;
}

defineSeed(190, 191, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES, AUTO, COL_RESIZE, CROSSHAIR, DEFAULT, E_RESIZE, HELP, MOVE, NE_RESIZE, NW_RESIZE, N_RESIZE, POINTER, ROW_RESIZE, SE_RESIZE, SW_RESIZE, S_RESIZE, TEXT, WAIT, W_RESIZE;
function Style$Cursor$1_0(){
  Enum_0.call(this, 'DEFAULT', 0);
}

defineSeed(192, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$1_0);
function Style$Cursor$10_0(){
  Enum_0.call(this, 'SE_RESIZE', 9);
}

defineSeed(193, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$10_0);
function Style$Cursor$11_0(){
  Enum_0.call(this, 'SW_RESIZE', 10);
}

defineSeed(194, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$11_0);
function Style$Cursor$12_0(){
  Enum_0.call(this, 'S_RESIZE', 11);
}

defineSeed(195, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$12_0);
function Style$Cursor$13_0(){
  Enum_0.call(this, 'W_RESIZE', 12);
}

defineSeed(196, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$13_0);
function Style$Cursor$14_0(){
  Enum_0.call(this, 'TEXT', 13);
}

defineSeed(197, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$14_0);
function Style$Cursor$15_0(){
  Enum_0.call(this, 'WAIT', 14);
}

defineSeed(198, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$15_0);
function Style$Cursor$16_0(){
  Enum_0.call(this, 'HELP', 15);
}

defineSeed(199, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$16_0);
function Style$Cursor$17_0(){
  Enum_0.call(this, 'COL_RESIZE', 16);
}

defineSeed(200, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$17_0);
function Style$Cursor$18_0(){
  Enum_0.call(this, 'ROW_RESIZE', 17);
}

defineSeed(201, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$18_0);
function Style$Cursor$2_0(){
  Enum_0.call(this, 'AUTO', 1);
}

defineSeed(202, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$2_0);
function Style$Cursor$3_0(){
  Enum_0.call(this, 'CROSSHAIR', 2);
}

defineSeed(203, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$3_0);
function Style$Cursor$4_0(){
  Enum_0.call(this, 'POINTER', 3);
}

defineSeed(204, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$4_0);
function Style$Cursor$5_0(){
  Enum_0.call(this, 'MOVE', 4);
}

defineSeed(205, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$5_0);
function Style$Cursor$6_0(){
  Enum_0.call(this, 'E_RESIZE', 5);
}

defineSeed(206, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$6_0);
function Style$Cursor$7_0(){
  Enum_0.call(this, 'NE_RESIZE', 6);
}

defineSeed(207, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$7_0);
function Style$Cursor$8_0(){
  Enum_0.call(this, 'NW_RESIZE', 7);
}

defineSeed(208, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$8_0);
function Style$Cursor$9_0(){
  Enum_0.call(this, 'N_RESIZE', 8);
}

defineSeed(209, 190, makeCastMap([Q$Style$Cursor, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Cursor$9_0);
function $clinit_Style$Display(){
  $clinit_Style$Display = nullMethod;
  NONE = new Style$Display$1_0;
  BLOCK = new Style$Display$2_0;
  INLINE = new Style$Display$3_0;
  INLINE_BLOCK = new Style$Display$4_0;
  $VALUES_0 = initValues(_3Lcom_google_gwt_dom_client_Style$Display_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Display, [NONE, BLOCK, INLINE, INLINE_BLOCK]);
}

function values_1(){
  $clinit_Style$Display();
  return $VALUES_0;
}

defineSeed(210, 191, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_0, BLOCK, INLINE, INLINE_BLOCK, NONE;
function Style$Display$1_0(){
  Enum_0.call(this, 'NONE', 0);
}

defineSeed(211, 210, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$1_0);
_.getCssName = function getCssName(){
  return 'none';
}
;
function Style$Display$2_0(){
  Enum_0.call(this, 'BLOCK', 1);
}

defineSeed(212, 210, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$2_0);
_.getCssName = function getCssName_0(){
  return 'block';
}
;
function Style$Display$3_0(){
  Enum_0.call(this, 'INLINE', 2);
}

defineSeed(213, 210, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$3_0);
_.getCssName = function getCssName_1(){
  return 'inline';
}
;
function Style$Display$4_0(){
  Enum_0.call(this, 'INLINE_BLOCK', 3);
}

defineSeed(214, 210, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$4_0);
_.getCssName = function getCssName_2(){
  return 'inline-block';
}
;
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = nullMethod;
  VISIBLE = new Style$Overflow$1_0;
  HIDDEN_0 = new Style$Overflow$2_0;
  SCROLL = new Style$Overflow$3_0;
  AUTO_0 = new Style$Overflow$4_0;
  $VALUES_1 = initValues(_3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Overflow, [VISIBLE, HIDDEN_0, SCROLL, AUTO_0]);
}

function values_2(){
  $clinit_Style$Overflow();
  return $VALUES_1;
}

defineSeed(215, 191, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_1, AUTO_0, HIDDEN_0, SCROLL, VISIBLE;
function Style$Overflow$1_0(){
  Enum_0.call(this, 'VISIBLE', 0);
}

defineSeed(216, 215, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$1_0);
_.getCssName = function getCssName_3(){
  return 'visible';
}
;
function Style$Overflow$2_0(){
  Enum_0.call(this, 'HIDDEN', 1);
}

defineSeed(217, 215, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$2_0);
_.getCssName = function getCssName_4(){
  return 'hidden';
}
;
function Style$Overflow$3_0(){
  Enum_0.call(this, 'SCROLL', 2);
}

defineSeed(218, 215, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$3_0);
_.getCssName = function getCssName_5(){
  return 'scroll';
}
;
function Style$Overflow$4_0(){
  Enum_0.call(this, 'AUTO', 3);
}

defineSeed(219, 215, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$4_0);
_.getCssName = function getCssName_6(){
  return 'auto';
}
;
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = nullMethod;
  CENTER = new Style$TextAlign$1_0;
  JUSTIFY = new Style$TextAlign$2_0;
  LEFT = new Style$TextAlign$3_0;
  RIGHT = new Style$TextAlign$4_0;
  $VALUES_3 = initValues(_3Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$TextAlign, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

function values_4(){
  $clinit_Style$TextAlign();
  return $VALUES_3;
}

defineSeed(225, 191, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_3, CENTER, JUSTIFY, LEFT, RIGHT;
function Style$TextAlign$1_0(){
  Enum_0.call(this, 'CENTER', 0);
}

defineSeed(226, 225, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]), Style$TextAlign$1_0);
function Style$TextAlign$2_0(){
  Enum_0.call(this, 'JUSTIFY', 1);
}

defineSeed(227, 225, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]), Style$TextAlign$2_0);
function Style$TextAlign$3_0(){
  Enum_0.call(this, 'LEFT', 2);
}

defineSeed(228, 225, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]), Style$TextAlign$3_0);
function Style$TextAlign$4_0(){
  Enum_0.call(this, 'RIGHT', 3);
}

defineSeed(229, 225, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]), Style$TextAlign$4_0);
defineSeed(231, 230, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
_.getType_0 = function getType_1(){
  return 'px';
}
;
defineSeed(232, 230, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
_.getType_0 = function getType_2(){
  return '%';
}
;
defineSeed(233, 230, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
_.getType_0 = function getType_3(){
  return 'em';
}
;
defineSeed(234, 230, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
_.getType_0 = function getType_4(){
  return 'ex';
}
;
defineSeed(235, 230, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
_.getType_0 = function getType_5(){
  return 'pt';
}
;
defineSeed(236, 230, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
_.getType_0 = function getType_6(){
  return 'pc';
}
;
defineSeed(237, 230, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
_.getType_0 = function getType_7(){
  return 'in';
}
;
defineSeed(238, 230, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
_.getType_0 = function getType_8(){
  return 'cm';
}
;
defineSeed(239, 230, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
_.getType_0 = function getType_9(){
  return 'mm';
}
;
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = nullMethod;
  VISIBLE_0 = new Style$Visibility$1_0;
  HIDDEN_1 = new Style$Visibility$2_0;
  $VALUES_5 = initValues(_3Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Visibility, [VISIBLE_0, HIDDEN_1]);
}

function values_6(){
  $clinit_Style$Visibility();
  return $VALUES_5;
}

defineSeed(240, 191, makeCastMap([Q$Style$HasCssName, Q$Style$Visibility, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_5, HIDDEN_1, VISIBLE_0;
function Style$Visibility$1_0(){
  Enum_0.call(this, 'VISIBLE', 0);
}

defineSeed(241, 240, makeCastMap([Q$Style$HasCssName, Q$Style$Visibility, Q$Serializable, Q$Comparable, Q$Enum]), Style$Visibility$1_0);
_.getCssName = function getCssName_7(){
  return 'visible';
}
;
function Style$Visibility$2_0(){
  Enum_0.call(this, 'HIDDEN', 1);
}

defineSeed(242, 240, makeCastMap([Q$Style$HasCssName, Q$Style$Visibility, Q$Serializable, Q$Comparable, Q$Enum]), Style$Visibility$2_0);
_.getCssName = function getCssName_8(){
  return 'hidden';
}
;
function $clinit_StyleInjector(){
  $clinit_StyleInjector = nullMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1_0;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtStart && (toReturn = maybeReturn);
    toInjectAtStart.length = 0;
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInject && (toReturn = maybeReturn);
    toInject.length = 0;
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtEnd && (toReturn = maybeReturn);
    toInjectAtEnd.length = 0;
  }
  needsInjection = false;
  return toReturn;
}

function inject(css){
  $clinit_StyleInjector();
  $push(toInject, css);
  schedule();
}

function inject_0(css, immediate){
  $clinit_StyleInjector();
  $push(toInject, css);
  immediate?flush():schedule();
}

function schedule(){
  $clinit_StyleInjector();
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1_0(){
}

defineSeed(244, 1, {}, StyleInjector$1_0);
_.execute = function execute_4(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = nullMethod;
  IMPL = new StyleInjector$StyleInjectorImpl_0;
}

function $createElement(contents){
  var style;
  style = $doc.createElement('style');
  style['language'] = 'text/css';
  $setInnerText(style, contents);
  return style;
}

function $getHead(this$static){
  var elt;
  if (!this$static.head) {
    elt = $doc.getElementsByTagName('head')[0];
    this$static.head = elt;
  }
  return this$static.head;
}

function $injectStyleSheet(this$static, contents){
  var style;
  style = $createElement(contents);
  $appendChild($getHead(this$static), style);
  return style;
}

function $injectStyleSheetAtStart(this$static, contents){
  var style;
  style = $createElement(contents);
  $insertBefore($getHead(this$static), style, this$static.head.firstChild);
  return style;
}

function StyleInjector$StyleInjectorImpl_0(){
}

defineSeed(245, 1, {}, StyleInjector$StyleInjectorImpl_0);
_.head = null;
var IMPL;
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (registered) {
    typeKey = dynamicCast($unsafeGet(registered, nativeEvent.type), Q$DomEvent$Type);
    if (typeKey) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      $setNativeEvent(typeKey.flyweight, nativeEvent);
      $setRelativeElement(typeKey.flyweight, relativeElem);
      handlerSource.fireEvent(typeKey.flyweight);
      $setNativeEvent(typeKey.flyweight, currentNative);
      $setRelativeElement(typeKey.flyweight, currentRelativeElem);
    }
  }
}

defineSeed(260, 5, {});
_.getAssociatedType = function getAssociatedType_0(){
  return this.getAssociatedType_0();
}
;
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
defineSeed(259, 260, {});
defineSeed(258, 259, {});
function DomEvent$Type_0(eventName, flyweight){
  GwtEvent$Type_0.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap_0);
  $unsafePut(registered, eventName, this);
  this.name_0 = eventName;
}

defineSeed(261, 262, makeCastMap([Q$DomEvent$Type]), DomEvent$Type_0);
_.flyweight = null;
_.name_0 = null;
defineSeed(265, 260, {});
defineSeed(264, 265, {});
function $clinit_KeyDownEvent(){
  $clinit_KeyDownEvent = nullMethod;
  TYPE_1 = new DomEvent$Type_0('keydown', new KeyDownEvent_0);
}

function KeyDownEvent_0(){
}

defineSeed(266, 264, {}, KeyDownEvent_0);
_.dispatch = function dispatch_1(handler){
  dynamicCast(handler, Q$KeyDownHandler).onKeyDown(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
function $clinit_KeyPressEvent(){
  $clinit_KeyPressEvent = nullMethod;
  TYPE_2 = new DomEvent$Type_0('keypress', new KeyPressEvent_0);
}

function $dispatch_0(this$static, handler){
  $handleEvent(handler.this$0, this$static.nativeEvent);
}

function KeyPressEvent_0(){
}

defineSeed(267, 265, {}, KeyPressEvent_0);
_.dispatch = function dispatch_2(handler){
  $dispatch_0(this, dynamicCast(handler, Q$KeyPressHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = nullMethod;
  TYPE_3 = new DomEvent$Type_0('mousedown', new MouseDownEvent_0);
}

function MouseDownEvent_0(){
}

defineSeed(268, 258, {}, MouseDownEvent_0);
_.dispatch = function dispatch_3(handler){
  dynamicCast(handler, Q$MouseDownHandler).onMouseDown(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = nullMethod;
  TYPE_4 = new DomEvent$Type_0('mousemove', new MouseMoveEvent_0);
}

function MouseMoveEvent_0(){
}

defineSeed(269, 258, {}, MouseMoveEvent_0);
_.dispatch = function dispatch_4(handler){
  dynamicCast(handler, Q$MouseMoveHandler).this$0.onTargetMouseMove(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = nullMethod;
  TYPE_5 = new DomEvent$Type_0('mouseout', new MouseOutEvent_0);
}

function MouseOutEvent_0(){
}

defineSeed(270, 258, {}, MouseOutEvent_0);
_.dispatch = function dispatch_5(handler){
  dynamicCast(handler, Q$MouseOutHandler).onMouseOut(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = nullMethod;
  TYPE_6 = new DomEvent$Type_0('mouseover', new MouseOverEvent_0);
}

function MouseOverEvent_0(){
}

defineSeed(271, 258, {}, MouseOverEvent_0);
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, Q$MouseOverHandler).onMouseOver(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
function $unsafeGet(this$static, key_0){
  return this$static.map[key_0];
}

function $unsafePut(this$static, key_0, value){
  this$static.map[key_0] = value;
}

function PrivateMap_0(){
  this.map = {};
}

defineSeed(272, 1, {}, PrivateMap_0);
_.map = null;
function AttachEvent_0(attached){
  this.attached = attached;
}

function fire_0(source, attached){
  var event_0;
  if (TYPE_7) {
    event_0 = new AttachEvent_0(attached);
    source.fireEvent(event_0);
  }
}

defineSeed(274, 5, {}, AttachEvent_0);
_.dispatch = function dispatch_7(handler){
  dynamicCast(handler, Q$AttachEvent$Handler).onAttachOrDetach(this);
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
_.attached = false;
var TYPE_7 = null;
function fire_1(){
  return null;
}

function CloseEvent_0(){
}

function fire_2(source){
  var event_0;
  if (TYPE_8) {
    event_0 = new CloseEvent_0;
    $fireEvent_4(source, event_0);
  }
}

defineSeed(276, 5, {}, CloseEvent_0);
_.dispatch = function dispatch_8(handler){
  dynamicCast(handler, Q$CloseHandler).onClose(this);
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8 = null;
function ResizeEvent_0(){
}

function fire_3(source){
  var event_0;
  if (TYPE_9) {
    event_0 = new ResizeEvent_0;
    source.fireEvent(event_0);
  }
}

defineSeed(277, 5, {}, ResizeEvent_0);
_.dispatch = function dispatch_9(handler){
  dynamicCast(handler, Q$ResizeHandler).onResize_0(this);
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_9;
}
;
var TYPE_9 = null;
function SelectionEvent_0(selectedItem){
  this.selectedItem = selectedItem;
}

function fire_4(source, selectedItem){
  var event_0;
  if (TYPE_10) {
    event_0 = new SelectionEvent_0(selectedItem);
    source.fireEvent(event_0);
  }
}

defineSeed(278, 5, {}, SelectionEvent_0);
_.dispatch = function dispatch_10(handler){
  dynamicCast(handler, Q$SelectionHandler).onSelection(this);
}
;
_.getAssociatedType = function getAssociatedType_11(){
  return TYPE_10;
}
;
_.selectedItem = null;
var TYPE_10 = null;
function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function $doRemoveNow(this$static, type, source, handler){
  var l_0, removed, sourceMap;
  l_0 = $getHandlerList(this$static, type, source);
  removed = l_0.remove_2(handler);
  removed && l_0.isEmpty() && (sourceMap = dynamicCast(this$static.map.get_1(type), Q$Map) , dynamicCast(sourceMap.remove_1(source), Q$List) , sourceMap.isEmpty() && this$static.map.remove_1(type) , undefined);
}

function $isEventHandled_0(this$static, eventKey){
  return this$static.map.containsKey(eventKey);
}

defineSeed(284, 281, {});
_.doRemove = function doRemove(type, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3_0(this, type, source, handler)):$doRemoveNow(this, type, source, handler);
}
;
defineSeed(283, 284, {});
_.doRemove = function doRemove_0(type, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3_0(this, type, source, handler)):$doRemoveNow(this, type, source, handler);
}
;
defineSeed(285, 1, makeCastMap([Q$HandlerRegistration, Q$HandlerRegistration_0]));
_.removeHandler = function removeHandler(){
  $removeHandler(this.real);
}
;
function round_int(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

function com_sencha_gxt_core_client_GXT_OS(){
  switch (permutationId) {
    case 2:
      return new GXT_OS_windows_0;
    case 1:
      return new GXT_OS_mac_0;
  }
  return new GXT_OS_linux_0;
}

var permutationId = -1;
function create_0(value){
  var a0, a1, a2;
  a0 = value & 4194303;
  a1 = value >> 22 & 4194303;
  a2 = value < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create_1(a){
  return create0(a.l, a.m, a.h);
}

function create0(l_0, m_0, h_0){
  return _ = new LongLibBase$LongEmul_0 , _.l = l_0 , _.m = m_0 , _.h = h_0 , _;
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException_0('divide by zero');
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == 524288 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == 524288 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_1(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == 524288 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_1(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift, a1, a2, a0;
  shift = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift);
  quotient = create0(0, 0, 0);
  while (shift >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift < 22?(quotient.l |= 1 << shift , undefined):shift < 44?(quotient.m |= 1 << shift - 22 , undefined):(quotient.h |= 1 << shift - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & 4194303;
  neg1 = ~a.m + (neg0 == 0?1:0) & 4194303;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h_0, l_0, m_0;
  l_0 = a.l;
  if ((l_0 & l_0 - 1) != 0) {
    return -1;
  }
  m_0 = a.m;
  if ((m_0 & m_0 - 1) != 0) {
    return -1;
  }
  h_0 = a.h;
  if ((h_0 & h_0 - 1) != 0) {
    return -1;
  }
  if (h_0 == 0 && m_0 == 0 && l_0 == 0) {
    return -1;
  }
  if (h_0 == 0 && m_0 == 0 && l_0 != 0) {
    return numberOfTrailingZeros(l_0);
  }
  if (h_0 == 0 && m_0 != 0 && l_0 == 0) {
    return numberOfTrailingZeros(m_0) + 22;
  }
  if (h_0 != 0 && m_0 == 0 && l_0 == 0) {
    return numberOfTrailingZeros(h_0) + 44;
  }
  return -1;
}

function toDoubleHelper(a){
  return a.l + a.m * 4194304 + a.h * 17592186044416;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & 4194303;
  a.m = sum1 & 4194303;
  a.h = sum2 & 1048575;
  return true;
}

var remainder = null;
function div_0(a, b){
  return divMod(a, b, false);
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value){
  var a0, a1, a2, negative, result;
  if (isNaN(value)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value < 0) {
    negative = true;
    value = -value;
  }
  a2 = 0;
  if (value >= 17592186044416) {
    a2 = round_int(value / 17592186044416);
    value -= a2 * 17592186044416;
  }
  a1 = 0;
  if (value >= 4194304) {
    a1 = round_int(value / 4194304);
    value -= a1 * 4194304;
  }
  a0 = round_int(value);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    boxedValues == null && (boxedValues = initDim(_3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$LongLibBase$LongEmul, 256, 0));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value));
    return result;
  }
  return create_0(value);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte_0(a, b);
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & 4194303;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= 4194303;
  c2 += c1 >> 22;
  c1 &= 4194303;
  c2 &= 1048575;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & 4194303;
  neg1 = ~a.m + (neg0 == 0?1:0) & 4194303;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & 524288) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?1048575:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?1048575:0;
    res1 = negative?4194303:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & 1048575;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return -9223372036854775808;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * 4194304 + a.h * 17592186044416;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_12(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == 524288 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_12(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; --zeroesNeeded) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

var boxedValues = null;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = nullMethod;
  MAX_VALUE = create0(4194303, 4194303, 524287);
  MIN_VALUE = create0(0, 0, 524288);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function LongLibBase$LongEmul_0(){
}

defineSeed(314, 1, makeCastMap([Q$LongLibBase$LongEmul]), LongLibBase$LongEmul_0);
function $adjustHorizontalConstraints(this$static, parentWidth, l_0){
  var leftPx, rightPx, widthPx;
  leftPx = l_0.left_0 * $getUnitSize(this$static, l_0.leftUnit, false);
  rightPx = l_0.right * $getUnitSize(this$static, l_0.rightUnit, false);
  widthPx = l_0.width_0 * $getUnitSize(this$static, l_0.widthUnit, false);
  if (l_0.setLeft && !l_0.setTargetLeft) {
    l_0.setLeft = false;
    if (l_0.setWidth) {
      l_0.setTargetRight = true;
      l_0.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l_0.targetRightUnit, false);
    }
     else {
      l_0.setTargetWidth = true;
      l_0.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l_0.targetWidthUnit, false);
    }
  }
   else if (l_0.setWidth && !l_0.setTargetWidth) {
    l_0.setWidth = false;
    if (l_0.setLeft) {
      l_0.setTargetRight = true;
      l_0.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l_0.targetRightUnit, false);
    }
     else {
      l_0.setTargetLeft = true;
      l_0.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l_0.targetLeftUnit, false);
    }
  }
   else if (l_0.setRight && !l_0.setTargetRight) {
    l_0.setRight = false;
    if (l_0.setWidth) {
      l_0.setTargetLeft = true;
      l_0.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l_0.targetLeftUnit, false);
    }
     else {
      l_0.setTargetWidth = true;
      l_0.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l_0.targetWidthUnit, false);
    }
  }
  l_0.setLeft = l_0.setTargetLeft;
  l_0.setRight = l_0.setTargetRight;
  l_0.setWidth = l_0.setTargetWidth;
  l_0.leftUnit = l_0.targetLeftUnit;
  l_0.rightUnit = l_0.targetRightUnit;
  l_0.widthUnit = l_0.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l_0){
  var bottomPx, heightPx, topPx;
  topPx = l_0.top_0 * $getUnitSize(this$static, l_0.topUnit, true);
  bottomPx = l_0.bottom * $getUnitSize(this$static, l_0.bottomUnit, true);
  heightPx = l_0.height_0 * $getUnitSize(this$static, l_0.heightUnit, true);
  if (l_0.setTop && !l_0.setTargetTop) {
    l_0.setTop = false;
    if (l_0.setHeight) {
      l_0.setTargetBottom = true;
      l_0.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l_0.targetBottomUnit, true);
    }
     else {
      l_0.setTargetHeight = true;
      l_0.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l_0.targetHeightUnit, true);
    }
  }
   else if (l_0.setHeight && !l_0.setTargetHeight) {
    l_0.setHeight = false;
    if (l_0.setTop) {
      l_0.setTargetBottom = true;
      l_0.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l_0.targetBottomUnit, true);
    }
     else {
      l_0.setTargetTop = true;
      l_0.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l_0.targetTopUnit, true);
    }
  }
   else if (l_0.setBottom && !l_0.setTargetBottom) {
    l_0.setBottom = false;
    if (l_0.setHeight) {
      l_0.setTargetTop = true;
      l_0.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l_0.targetTopUnit, true);
    }
     else {
      l_0.setTargetHeight = true;
      l_0.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l_0.targetHeightUnit, true);
    }
  }
  l_0.setTop = l_0.setTargetTop;
  l_0.setBottom = l_0.setTargetBottom;
  l_0.setHeight = l_0.setTargetHeight;
  l_0.topUnit = l_0.targetTopUnit;
  l_0.bottomUnit = l_0.targetBottomUnit;
  l_0.heightUnit = l_0.targetHeightUnit;
}

function $attachChild(this$static, child, userObject){
  var container, layer;
  container = $attachChild_0(this$static.parentElem, child);
  layer = new Layout$Layer_0(container, child, userObject);
  $add_15(this$static.layers, layer);
  return layer;
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static, duration, callback){
  var l_0, l$iterator, parentHeight, parentWidth;
  !!this$static.animation && $cancel(this$static.animation);
  if (duration == 0) {
    for (l$iterator = new AbstractList$IteratorImpl_0(this$static.layers); l$iterator.i < l$iterator.this$0_0.size_1();) {
      l_0 = dynamicCast($next_3(l$iterator), Q$Layout$Layer);
      l_0.left_0 = l_0.sourceLeft = l_0.targetLeft;
      l_0.top_0 = l_0.sourceTop = l_0.targetTop;
      l_0.right = l_0.sourceRight = l_0.targetRight;
      l_0.bottom = l_0.sourceBottom = l_0.targetBottom;
      l_0.width_0 = l_0.sourceWidth = l_0.targetWidth;
      l_0.height_0 = l_0.sourceHeight = l_0.targetHeight;
      l_0.setLeft = l_0.setTargetLeft;
      l_0.setTop = l_0.setTargetTop;
      l_0.setRight = l_0.setTargetRight;
      l_0.setBottom = l_0.setTargetBottom;
      l_0.setWidth = l_0.setTargetWidth;
      l_0.setHeight = l_0.setTargetHeight;
      l_0.leftUnit = l_0.targetLeftUnit;
      l_0.topUnit = l_0.targetTopUnit;
      l_0.rightUnit = l_0.targetRightUnit;
      l_0.bottomUnit = l_0.targetBottomUnit;
      l_0.widthUnit = l_0.targetWidthUnit;
      l_0.heightUnit = l_0.targetHeightUnit;
      $layout_0(l_0);
    }
    return;
  }
  parentWidth = this$static.parentElem.clientWidth;
  parentHeight = this$static.parentElem.clientHeight;
  for (l$iterator = new AbstractList$IteratorImpl_0(this$static.layers); l$iterator.i < l$iterator.this$0_0.size_1();) {
    l_0 = dynamicCast($next_3(l$iterator), Q$Layout$Layer);
    $adjustHorizontalConstraints(this$static, parentWidth, l_0);
    $adjustVerticalConstraints(this$static, parentHeight, l_0);
  }
  this$static.animation = new Layout$1_0(this$static, callback);
  $run(this$static.animation, duration, currentTimeMillis());
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  $remove_17(this$static.layers, layer);
}

function Layout_0(parent_0){
  this.impl = new LayoutImpl_0;
  this.layers = new ArrayList_0;
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineSeed(318, 1, {}, Layout_0);
_.animation = null;
_.parentElem = null;
function Layout$1_0(this$0, val$callback){
  this.this$0 = this$0;
  this.val$callback = val$callback;
  Animation_0.call(this);
}

defineSeed(319, 123, {}, Layout$1_0);
_.onCancel = function onCancel_0(){
  this.this$0.animation = null;
  $layout(this.this$0, 0, null);
}
;
_.onComplete = function onComplete_0(){
  this.this$0.animation = null;
  $layout(this.this$0, 0, null);
}
;
_.onUpdate = function onUpdate(progress){
  var l_0, l$iterator, child;
  for (l$iterator = new AbstractList$IteratorImpl_0(this.this$0.layers); l$iterator.i < l$iterator.this$0_0.size_1();) {
    l_0 = dynamicCast($next_3(l$iterator), Q$Layout$Layer);
    l_0.setTargetLeft && (l_0.left_0 = l_0.sourceLeft + (l_0.targetLeft - l_0.sourceLeft) * progress);
    l_0.setTargetRight && (l_0.right = l_0.sourceRight + (l_0.targetRight - l_0.sourceRight) * progress);
    l_0.setTargetTop && (l_0.top_0 = l_0.sourceTop + (l_0.targetTop - l_0.sourceTop) * progress);
    l_0.setTargetBottom && (l_0.bottom = l_0.sourceBottom + (l_0.targetBottom - l_0.sourceBottom) * progress);
    l_0.setTargetWidth && (l_0.width_0 = l_0.sourceWidth + (l_0.targetWidth - l_0.sourceWidth) * progress);
    l_0.setTargetHeight && (l_0.height_0 = l_0.sourceHeight + (l_0.targetHeight - l_0.sourceHeight) * progress);
    $layout_0(l_0);
    !!this.val$callback && (child = l_0.userObject , instanceOf(child, Q$RequiresResize) && dynamicCast(child, Q$RequiresResize).onResize_1() , undefined);
  }
}
;
_.this$0 = null;
_.val$callback = null;
function Layout$Layer_0(container, child, userObject){
  this.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this.targetTopUnit = PX;
  this.targetRightUnit = PX;
  this.targetBottomUnit = PX;
  this.container = container;
  this.child = child;
  this.userObject = userObject;
}

defineSeed(320, 1, makeCastMap([Q$Layout$Layer]), Layout$Layer_0);
_.bottom = 0;
_.bottomUnit = null;
_.child = null;
_.container = null;
_.height_0 = 0;
_.heightUnit = null;
_.left_0 = 0;
_.leftUnit = null;
_.right = 0;
_.rightUnit = null;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetHeightUnit = null;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.targetWidthUnit = null;
_.top_0 = 0;
_.topUnit = null;
_.userObject = null;
_.width_0 = 0;
_.widthUnit = null;
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = nullMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child){
  var container;
  container = $doc.createElement('div');
  container.appendChild(child);
  container.style['position'] = ($clinit_Style$Position() , 'absolute');
  container.style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  $fillParent(child);
  parent_0.insertBefore(container, null);
  return container;
}

function $fillParent(elem){
  var style;
  style = elem.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['left'] = 0 + ($clinit_Style$Unit() , 'px');
  style['top'] = '0px';
  style['right'] = '0px';
  style['bottom'] = '0px';
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight:parent_0.clientWidth) / 100;
    case 2:
      return (this$static.relativeRuler.offsetWidth || 0) / 10;
    case 3:
      return (this$static.relativeRuler.offsetHeight || 0) / 10;
    case 7:
      return (fixedRuler.offsetWidth || 0) * 0.1;
    case 8:
      return (fixedRuler.offsetWidth || 0) * 0.01;
    case 6:
      return (fixedRuler.offsetWidth || 0) * 0.254;
    case 4:
      return (fixedRuler.offsetWidth || 0) * 0.00353;
    case 5:
      return (fixedRuler.offsetWidth || 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  parent_0.style['position'] = ($clinit_Style$Position() , 'relative');
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), EX));
}

function $layout_0(layer){
  var style;
  style = layer.container.style;
  style['display'] = '';
  style['left'] = layer.setLeft?layer.left_0 + 'px':'';
  style['top'] = layer.setTop?layer.top_0 + 'px':'';
  style['right'] = layer.setRight?layer.right + 'px':'';
  style['bottom'] = layer.setBottom?layer.bottom + 'px':'';
  style['width'] = layer.setWidth?layer.width_0 + null.nullMethod():'';
  style['height'] = layer.setHeight?layer.height_0 + null.nullMethod():'';
  style = layer.child.style;
  switch (2) {
    case 0:
    case 1:
    case 2:
      style['left'] = 0 + ($clinit_Style$Unit() , 'px');
      style['right'] = '0px';
  }
  switch (2) {
    case 0:
    case 1:
    case 2:
      style['top'] = 0 + ($clinit_Style$Unit() , 'px');
      style['bottom'] = '0px';
  }
}

function $removeChild_1(container, child){
  var style;
  $removeFromParent_0(container);
  $getParentElement(child) == container && $removeFromParent_0(child);
  style = child.style;
  style['position'] = '';
  style['left'] = '';
  style['top'] = '';
  style['width'] = '';
  style['height'] = '';
}

function LayoutImpl_0(){
  $clinit_LayoutImpl();
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $doc.createElement('div');
  $setInnerHTML(ruler, '&nbsp;');
  style = ruler.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['zIndex'] = '-32767';
  style['top'] = -20 + heightUnit.getType_0();
  style['width'] = 10 + widthUnit.getType_0();
  style['height'] = 10 + heightUnit.getType_0();
  $set(($clinit_State() , HIDDEN), ruler, initValues(_3Ljava_lang_Boolean_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Boolean, [($clinit_Boolean() , $clinit_Boolean() , TRUE)]));
  return ruler;
}

defineSeed(321, 1, {}, LayoutImpl_0);
_.relativeRuler = null;
var fixedRuler = null;
function $replace_0(this$static, input, replacement){
  return input.replace(this$static, replacement);
}

function ImageResourcePrototype_0(url, width, height){
  this.left_0 = 0;
  this.top_0 = 0;
  this.height_0 = height;
  this.width_0 = width;
  this.url = url;
}

defineSeed(323, 1, {}, ImageResourcePrototype_0);
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url = null;
_.width_0 = 0;
function $append_4(this$static, styles){
  $append_10(this$static.sb, styles.css);
  return this$static;
}

function $appendTrustedString(this$static, styles){
  verifySafeStylesConstraints(styles);
  $append_10(this$static.sb, styles);
  return this$static;
}

function SafeStylesBuilder_0(){
  this.sb = new StringBuilder_0;
}

defineSeed(324, 1, {}, SafeStylesBuilder_0);
function SafeStylesString_0(css){
  verifySafeStylesConstraints(css);
  this.css = css;
}

defineSeed(325, 1, makeCastMap([Q$SafeStyles, Q$SafeStylesString, Q$Serializable]), SafeStylesString_0);
_.equals$ = function equals_4(obj){
  if (!instanceOf(obj, Q$SafeStyles)) {
    return false;
  }
  return $equals_3(this.css, dynamicCast(dynamicCast(obj, Q$SafeStyles), Q$SafeStylesString).css);
}
;
_.hashCode$ = function hashCode_6(){
  return getHashCode_0(this.css);
}
;
_.css = null;
function verifySafeStylesConstraints(styles){
  if (styles == null) {
    throw new NullPointerException_1('css is null');
  }
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(html){
  if (html == null) {
    throw new NullPointerException_1('html is null');
  }
  this.html = html;
}

defineSeed(327, 1, makeCastMap([Q$SafeHtml, Q$Serializable]), OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0);
_.asString = function asString(){
  return this.html;
}
;
_.equals$ = function equals_5(obj){
  if (!instanceOf(obj, Q$SafeHtml)) {
    return false;
  }
  return $equals_3(this.html, dynamicCast(obj, Q$SafeHtml).asString());
}
;
_.hashCode$ = function hashCode_7(){
  return getHashCode_0(this.html);
}
;
_.html = null;
function $append_5(this$static, html){
  $append_10(this$static.sb, html.asString());
  return this$static;
}

function SafeHtmlBuilder_0(){
  this.sb = new StringBuilder_0;
}

defineSeed(328, 1, {}, SafeHtmlBuilder_0);
function SafeHtmlString_0(html){
  if (html == null) {
    throw new NullPointerException_1('html is null');
  }
  this.html = html;
}

defineSeed(329, 1, makeCastMap([Q$SafeHtml, Q$Serializable]), SafeHtmlString_0);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals$ = function equals_6(obj){
  if (!instanceOf(obj, Q$SafeHtml)) {
    return false;
  }
  return $equals_3(this.html, dynamicCast(obj, Q$SafeHtml).asString());
}
;
_.hashCode$ = function hashCode_8(){
  return getHashCode_0(this.html);
}
;
_.html = null;
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = nullMethod;
  EMPTY_SAFE_HTML = new SafeHtmlString_0('');
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  s.indexOf('&') != -1 && (s = $replace_0(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace_0(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace_0(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace_0(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace_0(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, EMPTY_SAFE_HTML, GT_RE, LT_RE, QUOT_RE, SQUOT_RE;
function SafeUriString_0(uri){
  if (uri == null) {
    throw new NullPointerException_1('uri is null');
  }
  this.uri = uri;
}

defineSeed(331, 1, makeCastMap([Q$SafeUri, Q$SafeUriString]), SafeUriString_0);
_.equals$ = function equals_7(obj){
  if (!instanceOf(obj, Q$SafeUri)) {
    return false;
  }
  return $equals_3(this.uri, dynamicCast(dynamicCast(obj, Q$SafeUri), Q$SafeUriString).uri);
}
;
_.hashCode$ = function hashCode_9(){
  return getHashCode_0(this.uri);
}
;
_.uri = null;
function $clinit_UriUtils(){
  $clinit_UriUtils = nullMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function get_3(){
  !impl_0 && (impl_0 = new CellBasedWidgetImplStandard_0);
  return impl_0;
}

defineSeed(339, 1, {});
_.onBrowserEvent_1 = function onBrowserEvent_4(widget, event_0){
}
;
_.sinkEvents = function sinkEvents(widget, typeNames){
  var eventsToSink, typeInt, typeName, typeName$iterator;
  if (!typeNames) {
    return;
  }
  eventsToSink = 0;
  for (typeName$iterator = typeNames.iterator(); typeName$iterator.hasNext();) {
    typeName = dynamicCast(typeName$iterator.next_0(), Q$String);
    typeInt = $eventGetTypeInt(typeName);
    if (typeInt < 0) {
      sinkBitlessEvent(widget.getElement(), typeName);
    }
     else {
      typeInt = $sinkEvent(this, widget, typeName);
      typeInt > 0 && (eventsToSink |= typeInt);
    }
  }
  eventsToSink > 0 && (widget.eventsToSink == -1?sinkEvents_0(widget.getElement(), eventsToSink | (widget.getElement().__eventBits || 0)):(widget.eventsToSink |= eventsToSink));
}
;
_.focusableTypes = null;
var impl_0 = null;
function $initEventSystem(){
  dispatchNonBubblingEvent = $entry(function(evt){
    handleNonBubblingEvent(evt);
  }
  );
}

function $sinkEvent(this$static, widget, typeName){
  var elem;
  if ($contains_3(this$static.nonBubblingEvents, typeName)) {
    !dispatchNonBubblingEvent && $initEventSystem();
    elem = widget.getElement();
    if (!$equals_3('true', elem.getAttribute('__gwtCellBasedWidgetImplDispatching' + typeName) || '')) {
      elem.setAttribute('__gwtCellBasedWidgetImplDispatching' + typeName, 'true');
      elem.addEventListener(typeName, dispatchNonBubblingEvent, true);
    }
    return -1;
  }
   else {
    return $eventGetTypeInt(typeName);
  }
}

function CellBasedWidgetImplStandard_0(){
  this.focusableTypes = new HashSet_0;
  $add_16(this.focusableTypes, 'select');
  $add_16(this.focusableTypes, 'input');
  $add_16(this.focusableTypes, 'textarea');
  $add_16(this.focusableTypes, 'option');
  $add_16(this.focusableTypes, 'button');
  $add_16(this.focusableTypes, 'label');
  this.nonBubblingEvents = new HashSet_0;
  $add_16(this.nonBubblingEvents, 'focus');
  $add_16(this.nonBubblingEvents, 'blur');
  $add_16(this.nonBubblingEvents, 'load');
  $add_16(this.nonBubblingEvents, 'error');
}

function handleNonBubblingEvent(event_0){
  var eventTarget, listener, target, typeName;
  eventTarget = event_0.target;
  if (!is_1(eventTarget)) {
    return;
  }
  target = eventTarget;
  typeName = event_0.type;
  listener = target.__listener;
  while (!!target && !listener) {
    target = $getParentElement(target);
    !!target && $equals_3('true', target.getAttribute('__gwtCellBasedWidgetImplDispatching' + typeName) || '') && (listener = target.__listener);
  }
  !!listener && (dispatchEvent_0(event_0, target, listener) , undefined);
}

defineSeed(340, 339, {}, CellBasedWidgetImplStandard_0);
_.nonBubblingEvents = null;
var dispatchNonBubblingEvent = null;
function appendChild(parent_0, child){
  $appendChild(parent_0, ($clinit_PotentialElement() , $resolve(child)));
}

function dispatchEvent_0(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index){
  $insertChild(parent_0, ($clinit_PotentialElement() , $resolve(child)), index);
}

function previewEvent(evt){
  var ret;
  ret = fire_6(handlers_0, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    evt.preventDefault();
  }
  return ret;
}

function setIntStyleAttribute(elem, value){
  elem.style['zIndex'] = '' + value;
}

function setStyleAttribute(elem, attr, value){
  elem.style[attr] = value;
}

function sinkBitlessEvent(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
}

function sinkEvents_0(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem = null;
function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_12 && (TYPE_12 = new GwtEvent$Type_0);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_1(null, true);
    singleton = new Event$NativePreviewEvent_0;
  }
  return $addHandler_0(handlers_0, TYPE_12, handler);
}

var handlers_0 = null;
function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent_0(){
}

function fire_6(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_12 && !!handlers && $isEventHandled(handlers, TYPE_12)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent_4(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineSeed(345, 5, {}, Event$NativePreviewEvent_0);
_.dispatch = function dispatch_12(handler){
  dynamicCast(handler, Q$Event$NativePreviewHandler).onPreviewNativeEvent(this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType = function getAssociatedType_13(){
  return TYPE_12;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
_.nativeEvent = null;
var TYPE_12 = null, singleton = null;
function Timer$1_0(){
}

defineSeed(347, 1, makeCastMap([Q$CloseHandler, Q$EventHandler]), Timer$1_0);
_.onClose = function onClose(event_0){
  while (($clinit_Timer() , timers).size_0 > 0) {
    $cancel_0(dynamicCast($get_10(timers, 0), Q$Timer));
  }
}
;
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_8?TYPE_8:(TYPE_8 = new GwtEvent$Type_0), handler);
}

function addHandler(type, handler){
  return $addHandler_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers_0) , handlers_1), type, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_9 && (TYPE_9 = new GwtEvent$Type_0) , TYPE_9), handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent_0;
    !!handlers_1 && $fireEvent_4(handlers_1, event_0);
    return event_0.message_0;
  }
  return null;
}

function onResize_1(){
  var height, width;
  if (resizeHandlersInitialized) {
    width = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width || lastResizeHeight != height) {
      lastResizeWidth = width;
      lastResizeHeight = height;
      fire_3((!handlers_1 && (handlers_1 = new Window$WindowHandlers_0) , handlers_1));
    }
  }
}

var closeHandlersInitialized = false, handlers_1 = null, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = nullMethod;
  TYPE_13 = new GwtEvent$Type_0;
}

function $setMessage(this$static, message){
  this$static.message_0 = message;
}

function Window$ClosingEvent_0(){
  $clinit_Window$ClosingEvent();
}

defineSeed(349, 5, {}, Window$ClosingEvent_0);
_.dispatch = function dispatch_13(handler){
  $setMessage(this, dynamicCast(dynamicCast(handler, Q$Window$ClosingHandler), Q$ClientPlaceManager).onLeaveQuestion);
}
;
_.getAssociatedType = function getAssociatedType_14(){
  return TYPE_13;
}
;
_.message_0 = null;
var TYPE_13;
function Window$WindowHandlers_0(){
  HandlerManager_0.call(this, null);
}

defineSeed(351, 282, makeCastMap([Q$HasResizeHandlers, Q$HasHandlers]), Window$WindowHandlers_0);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem_0();
    eventSystemIsInitialized = true;
  }
}

function $setEventListener(elem, listener){
  elem.__listener = listener;
}

function isMyListener(object){
  return !instanceOfJso(object) && instanceOf(object, Q$EventListener);
}

var eventSystemIsInitialized = false;
function $getChildIndex(parent_0, toFind){
  var count = 0, child = parent_0.firstChild;
  while (child) {
    if (child === toFind) {
      return count;
    }
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return -1;
}

function $initEventSystem_0(){
  dispatchCapturedEvent = $entry(function(evt){
    if (!previewEvent(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }
  );
  dispatchEvent_1 = $entry(function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentNode;
    }
    curElem && curElem.nodeType != 1 && (curElem = null);
    listener && isMyListener(listener) && dispatchEvent_0(evt, curElem, listener);
  }
  );
  dispatchDragEvent = $entry(function(evt){
    evt.preventDefault();
    dispatchEvent_1.call(this, evt);
  }
  );
  dispatchUnhandledEvent = $entry(function(evt){
    this.__gwtLastUnhandledEvent = evt.type;
    dispatchEvent_1.call(this, evt);
  }
  );
  dispatchCapturedMouseEvent = $entry(function(evt){
    var dispatchCapturedEventFn = dispatchCapturedEvent;
    if (dispatchCapturedEventFn(evt)) {
      var cap = captureElem;
      if (cap && cap.__listener) {
        if (isMyListener(cap.__listener)) {
          dispatchEvent_0(evt, cap, cap.__listener);
          evt.stopPropagation();
        }
      }
    }
  }
  );
  $wnd.addEventListener('click', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('dblclick', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousedown', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseup', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousemove', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseover', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseout', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousewheel', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('keydown', dispatchCapturedEvent, true);
  $wnd.addEventListener('keyup', dispatchCapturedEvent, true);
  $wnd.addEventListener('keypress', dispatchCapturedEvent, true);
  $wnd.addEventListener('touchstart', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('touchmove', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('touchend', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('touchcancel', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('gesturestart', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('gesturechange', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('gestureend', dispatchCapturedMouseEvent, true);
}

function $insertChild(parent_0, toAdd, index){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkBitlessEvent_0(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  switch (eventTypeName) {
    case 'drag':
      elem.ondrag = dispatchEvent_1;
      break;
    case 'dragend':
      elem.ondragend = dispatchEvent_1;
      break;
    case 'dragenter':
      elem.ondragenter = dispatchDragEvent;
      break;
    case 'dragleave':
      elem.ondragleave = dispatchEvent_1;
      break;
    case 'dragover':
      elem.ondragover = dispatchDragEvent;
      break;
    case 'dragstart':
      elem.ondragstart = dispatchEvent_1;
      break;
    case 'drop':
      elem.ondrop = dispatchEvent_1;
      break;
    case 'canplaythrough':
    case 'ended':
    case 'progress':
      elem.removeEventListener(eventTypeName, dispatchEvent_1, false);
      elem.addEventListener(eventTypeName, dispatchEvent_1, false);
      break;
    default:throw 'Trying to sink unknown event type ' + eventTypeName;
  }
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

var captureElem = null, dispatchCapturedEvent = null, dispatchCapturedMouseEvent = null, dispatchDragEvent = null, dispatchEvent_1 = null, dispatchUnhandledEvent = null;
function $sinkEventsImpl(elem, bits){
  elem.__eventBits = bits;
  elem.onclick = bits & 1?dispatchEvent_1:null;
  elem.ondblclick = bits & 2?dispatchEvent_1:null;
  elem.onmousedown = bits & 4?dispatchEvent_1:null;
  elem.onmouseup = bits & 8?dispatchEvent_1:null;
  elem.onmouseover = bits & 16?dispatchEvent_1:null;
  elem.onmouseout = bits & 32?dispatchEvent_1:null;
  elem.onmousemove = bits & 64?dispatchEvent_1:null;
  elem.onkeydown = bits & 128?dispatchEvent_1:null;
  elem.onkeypress = bits & 256?dispatchEvent_1:null;
  elem.onkeyup = bits & 512?dispatchEvent_1:null;
  elem.onchange = bits & 1024?dispatchEvent_1:null;
  elem.onfocus = bits & 2048?dispatchEvent_1:null;
  elem.onblur = bits & 4096?dispatchEvent_1:null;
  elem.onlosecapture = bits & 8192?dispatchEvent_1:null;
  elem.onscroll = bits & 16384?dispatchEvent_1:null;
  elem.onload = bits & 32768?dispatchUnhandledEvent:null;
  elem.onerror = bits & 65536?dispatchEvent_1:null;
  elem.onmousewheel = bits & 131072?dispatchEvent_1:null;
  elem.oncontextmenu = bits & 262144?dispatchEvent_1:null;
  elem.onpaste = bits & 524288?dispatchEvent_1:null;
}

function $newItem(this$static, historyToken){
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_3(historyToken, token_1 == null?'':token_1)) {
    token_1 = historyToken;
    $wnd.location.hash = this$static.encodeFragment(historyToken);
  }
}

defineSeed(357, 1, makeCastMap([Q$HasValueChangeHandlers, Q$HasHandlers]));
_.encodeFragment = function encodeFragment(fragment){
  return encodeURI(fragment).replace('#', '%23');
}
;
function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_2((!handlers_1 && (handlers_1 = new Window$WindowHandlers_0) , handlers_1));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize_1();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function $clear_0(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator_0(this$static.children_0);
  while (it.index_0 < it.this$0.size_0 - 1) {
    $next_0(it);
    $remove_5(it);
  }
}

defineSeed(362, 97, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget]));
_.doAttachChildren = function doAttachChildren_1(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_1(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
function $add_0(this$static, child, container){
  $removeFromParent(child);
  $add_4(this$static.children_0, child);
  appendChild(container, child.getElement());
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children_0, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion(this$static, index){
  if (index < 0 || index > this$static.children_0.size_0) {
    throw new IndexOutOfBoundsException_0;
  }
}

function $insert(this$static, child, container, beforeIndex){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_2(this$static.children_0, child, beforeIndex);
  appendChild(container, child.element);
  $setParent(child, this$static);
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.getElement();
    $removeChild($getParentElement(elem), elem);
    $remove_4(this$static.children_0, w);
  }
  return true;
}

function ComplexPanel_0(){
  this.children_0 = new WidgetCollection_0(this);
}

defineSeed(361, 362, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$UIObject, Q$Widget]));
_.getWidget = function getWidget(index){
  return $get_2(this.children_0, index);
}
;
_.getWidgetCount = function getWidgetCount(){
  return this.children_0.size_0;
}
;
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator_0(this.children_0);
}
;
_.remove = function remove_0(w){
  return $remove_0(this, w);
}
;
function $add_1(this$static, w){
  $add_0(this$static, w, this$static.element);
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(w.getElement());
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineSeed(360, 361, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$UIObject, Q$Widget]));
_.remove = function remove_1(w){
  return $remove_1(this, w);
}
;
defineSeed(363, 1, {});
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = nullMethod;
  attachCommand = new AttachDetachException$1_0;
  detachCommand = new AttachDetachException$2_0;
}

function AttachDetachException_0(causes){
  UmbrellaException_2.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), Q$Widget);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Throwable)) {
        e = $e0;
        !caught && (caught = new HashSet_0);
        $add_16(caught, e);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw new AttachDetachException_0(caught);
  }
}

defineSeed(364, 287, makeCastMap([Q$UmbrellaException, Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), AttachDetachException_0);
var attachCommand, detachCommand;
function AttachDetachException$1_0(){
}

defineSeed(365, 1, {}, AttachDetachException$1_0);
_.execute_1 = function execute_5(w){
  w.onAttach();
}
;
function AttachDetachException$2_0(){
}

defineSeed(366, 1, {}, AttachDetachException$2_0);
_.execute_1 = function execute_6(w){
  w.onDetach();
}
;
defineSeed(367, 361, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$UIObject, Q$Widget]));
_.body_0 = null;
_.table = null;
function HTMLPanel_0(html){
  ComplexPanel_0.call(this);
  $setElement(this, $doc.createElement('div'));
  $setInnerHTML(this.element, html);
}

defineSeed(377, 361, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$UIObject, Q$Widget]), HTMLPanel_0);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = nullMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant_0(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant_0('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant_0('left');
  new HasHorizontalAlignment$HorizontalAlignmentConstant_0('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START;
defineSeed(381, 1, {});
function HasHorizontalAlignment$HorizontalAlignmentConstant_0(textAlignString){
  this.textAlignString = textAlignString;
}

defineSeed(382, 381, {}, HasHorizontalAlignment$HorizontalAlignmentConstant_0);
_.textAlignString = null;
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = nullMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant_0('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant_0('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant_0('top');
}

var ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant_0(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineSeed(383, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant_0);
_.verticalAlignString = null;
function $add_2(this$static, w){
  var td;
  td = $createAlignedTd(this$static);
  appendChild(this$static.tableRow, td);
  $add_0(this$static, w, td);
}

function $createAlignedTd(this$static){
  var td;
  td = $doc.createElement('td');
  td['align'] = this$static.horzAlign.textAlignString;
  setStyleAttribute(td, 'verticalAlign', this$static.vertAlign.verticalAlignString);
  return td;
}

function $insert_0(this$static, w, beforeIndex){
  var td;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  td = $createAlignedTd(this$static);
  insertChild(this$static.tableRow, td, beforeIndex);
  $insert(this$static, w, td, beforeIndex);
}

function HorizontalPanel_0(){
  ComplexPanel_0.call(this);
  this.table = $doc.createElement('table');
  this.body_0 = $doc.createElement('tbody');
  appendChild(this.table, this.body_0);
  $setElement(this, this.table);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = $doc.createElement('tr');
  appendChild(this.body_0, this.tableRow);
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineSeed(384, 367, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$UIObject, Q$Widget]), HorizontalPanel_0);
_.remove = function remove_4(w){
  var removed, td;
  td = $getParentElement(w.getElement());
  removed = $remove_0(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
_.tableRow = null;
function $clinit_Image(){
  $clinit_Image = nullMethod;
  new HashMap_0;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $onBrowserEvent_3(this$static, event_0){
  $eventGetTypeInt(event_0.type) == 32768 && !!this$static.state && (this$static.element['__gwtLastUnhandledEvent'] = '' , undefined);
  $onBrowserEvent(this$static, event_0);
}

function Image_1(resource){
  $clinit_Image();
  Image_3.call(this, resource.url.uri, resource.left_0, resource.top_0, resource.width_0, resource.height_0);
}

function Image_2(url, left, top_0, width, height){
  $changeState(this, new Image$ClippedState_0(this, url, left, top_0, width, height));
  this.element['className'] = 'gwt-Image';
}

function Image_3(url, left, top_0, width, height){
  Image_2.call(this, ($clinit_UriUtils() , new SafeUriString_0(url)), left, top_0, width, height);
}

defineSeed(385, 97, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Image_1);
_.onBrowserEvent = function onBrowserEvent_5(event_0){
  $onBrowserEvent_3(this, event_0);
}
;
_.onLoad = function onLoad_2(){
  $onLoad_0(this.state, this);
}
;
_.state = null;
function $onLoad_0(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(image.element, '__gwtLastUnhandledEvent');
  $equals_3('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1_0(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), this$static.syntheticEventCommand));
}

defineSeed(387, 1, {});
_.syntheticEventCommand = null;
function $clinit_Image$ClippedState(){
  $clinit_Image$ClippedState = nullMethod;
  $clinit_ClippedImageImpl();
}

function Image$ClippedState_0(image, url, left, top_0, width, height){
  $clinit_Image$ClippedState();
  $replaceElement(image, $createStructure(url, left, top_0, width, height));
  image.eventsToSink == -1?sinkEvents_0(image.element, 133333119 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133333119);
}

defineSeed(386, 387, {}, Image$ClippedState_0);
function Image$State$1_0(this$1, val$image){
  this.this$1 = this$1;
  this.val$image = val$image;
}

defineSeed(388, 1, {}, Image$State$1_0);
_.execute = function execute_7(){
  var evt, evt_0;
  if (this.val$image.state != this.this$1 || this != this.this$1.syntheticEventCommand) {
    return;
  }
  this.this$1.syntheticEventCommand = null;
  if (!this.val$image.attached) {
    this.val$image.element['__gwtLastUnhandledEvent'] = 'load';
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent(this.val$image.element, evt);
}
;
_.this$1 = null;
_.val$image = null;
function $schedule_0(this$static){
  this$static.duration = 0;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), this$static);
  }
}

function LayoutCommand_0(layout){
  this.layout = layout;
}

defineSeed(390, 1, {}, LayoutCommand_0);
_.execute = function execute_8(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  $layout(this.layout, this.duration, new LayoutCommand$1_0);
}
;
_.canceled = false;
_.duration = 0;
_.layout = null;
_.scheduled = false;
function LayoutCommand$1_0(){
}

defineSeed(391, 1, {}, LayoutCommand$1_0);
function $add_3(this$static, widget){
  $insert_1(this$static, widget, this$static.children_0.size_0);
}

function $insert_1(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent(widget);
  $insert_2(this$static.children_0, widget, beforeIndex);
  layer = $attachChild(this$static.layout, widget.getElement(), widget);
  widget.layoutData = layer;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function $onResize(this$static){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator_0(this$static.children_0); child$iterator.index_0 < child$iterator.this$0.size_0 - 1;) {
    child = $next_0(child$iterator);
    instanceOf(child, Q$RequiresResize) && dynamicCast(child, Q$RequiresResize).onResize_1();
  }
}

defineSeed(392, 361, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AnimatedLayout, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget]));
_.onAttach = function onAttach_3(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
}
;
_.onResize_1 = function onResize_2(){
  $onResize(this);
}
;
_.remove = function remove_5(w){
  var removed;
  removed = $remove_0(this, w);
  removed && $removeChild_0(this.layout, dynamicCast(w.layoutData, Q$Layout$Layer));
  return removed;
}
;
_.layout = null;
_.layoutCmd = null;
function $clinit_PotentialElement(){
  $clinit_PotentialElement = nullMethod;
  declareShim();
}

function $resolve(this$static){
  return this$static.__gwt_resolve?this$static.__gwt_resolve():this$static;
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value){
    this[name_0] = value;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function RootLayoutPanel_0(){
  ComplexPanel_0.call(this);
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout_0(this.element);
  this.layoutCmd = new LayoutCommand_0(this.layout);
  addResizeHandler(new RootLayoutPanel$1_0(this));
}

function get_4(){
  if (!singleton_0) {
    singleton_0 = new RootLayoutPanel_0;
    $add_1(($clinit_RootPanel() , get_5()), singleton_0);
  }
  return singleton_0;
}

defineSeed(394, 392, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AnimatedLayout, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget]), RootLayoutPanel_0);
_.onLoad = function onLoad_3(){
  $fillParent(this.layout.parentElem);
}
;
var singleton_0 = null;
function RootLayoutPanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(395, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), RootLayoutPanel$1_0);
_.onResize_0 = function onResize_3(event_0){
  $onResize(this.this$0);
}
;
_.this$0 = null;
function $clinit_RootPanel(){
  $clinit_RootPanel = nullMethod;
  maybeDetachCommand = new RootPanel$1_0;
  rootPanels = new HashMap_0;
  widgetsToDetach = new HashSet_0;
}

function RootPanel_0(elem){
  ComplexPanel_0.call(this);
  this.element = elem;
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_18(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    widgetsToDetach.map.clear();
    rootPanels.clear();
  }
}

function get_5(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast(rootPanels.get_1(null), Q$RootPanel);
  if (rp) {
    return rp;
  }
  rootPanels.size_1() == 0 && addCloseHandler(new RootPanel$2_0);
  rp = new RootPanel$DefaultRootPanel_0;
  rootPanels.put(null, rp);
  $add_16(widgetsToDetach, rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

defineSeed(396, 360, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RootPanel, Q$UIObject, Q$Widget]));
var maybeDetachCommand, rootPanels, widgetsToDetach;
function RootPanel$1_0(){
}

defineSeed(397, 1, {}, RootPanel$1_0);
_.execute_1 = function execute_9(w){
  w.isAttached() && w.onDetach();
}
;
function RootPanel$2_0(){
}

defineSeed(398, 1, makeCastMap([Q$CloseHandler, Q$EventHandler]), RootPanel$2_0);
_.onClose = function onClose_0(closeEvent){
  detachWidgets();
}
;
function RootPanel$DefaultRootPanel_0(){
  RootPanel_0.call(this, getBodyElement());
}

defineSeed(399, 396, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RootPanel, Q$UIObject, Q$Widget]), RootPanel$DefaultRootPanel_0);
function $add_4(this$static, w){
  $insert_2(this$static, w, this$static.size_0);
}

function $get_2(this$static, index){
  if (index < 0 || index >= this$static.size_0) {
    throw new IndexOutOfBoundsException_0;
  }
  return this$static.array[index];
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_2(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException_0;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Widget, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_3(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size_0) {
    throw new IndexOutOfBoundsException_0;
  }
  --this$static.size_0;
  for (i = index; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_4(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw new NoSuchElementException_0;
  }
  $remove_3(this$static, index);
}

function WidgetCollection_0(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Widget, 4, 0);
}

defineSeed(408, 1, {}, WidgetCollection_0);
_.iterator = function iterator_2(){
  return new WidgetCollection$WidgetIterator_0(this);
}
;
_.array = null;
_.parent_0 = null;
_.size_0 = 0;
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$0.size_0) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0.array[++this$static.index_0];
}

function $remove_5(this$static){
  if (this$static.index_0 < 0 || this$static.index_0 >= this$static.this$0.size_0) {
    throw new IllegalStateException_0;
  }
  this$static.this$0.parent_0.remove(this$static.this$0.array[this$static.index_0--]);
}

function WidgetCollection$WidgetIterator_0(this$0){
  this.this$0 = this$0;
}

defineSeed(409, 1, makeCastMap([Q$Iterator]), WidgetCollection$WidgetIterator_0);
_.hasNext = function hasNext_0(){
  return this.index_0 < this.this$0.size_0 - 1;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_0 = function remove_6(){
  $remove_5(this);
}
;
_.index_0 = -1;
_.this$0 = null;
function $clinit_ClippedImageImpl(){
  $clinit_ClippedImageImpl = nullMethod;
  clearImage = ($clinit_UriUtils() , new SafeUriString_0(getModuleBaseURL() + 'clear.cache.gif'));
}

function $createStructure(url, left, top_0, width, height){
  var tmp;
  tmp = $doc.createElement('span');
  $setInnerHTML(tmp, $getSafeHtml(url, left, top_0, width, height).html);
  return $getFirstChildElement(tmp);
}

function $getSafeHtml(url, left, top_0, width, height){
  var builder;
  builder = new SafeStylesBuilder_0;
  $append_4($append_4($append_4(builder, new SafeStylesString_0('width:' + width + ($clinit_Style$Unit() , 'px') + ';')), new SafeStylesString_0('height:' + height + 'px;')), new SafeStylesString_0('background:url(' + url.uri + ') no-repeat ' + -left + 'px ' + -top_0 + 'px;'));
  return !template_0 && (template_0 = new ClippedImageImpl_TemplateImpl_0) , $image(clearImage, new SafeStylesString_0((new SafeStylesString_0(builder.sb.impl.string)).css));
}

var clearImage, template_0 = null;
function $image(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<img onload='this.__gwtLastUnhandledEvent=\"load\";' src='";
  $append_10(sb, htmlEscape(arg0.uri));
  sb.impl.string += "' style='";
  $append_10(sb, htmlEscape(arg1.css));
  sb.impl.string += "' border='0'>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function ClippedImageImpl_TemplateImpl_0(){
}

defineSeed(411, 1, {}, ClippedImageImpl_TemplateImpl_0);
function $clinit_ClippedImagePrototype(){
  $clinit_ClippedImagePrototype = nullMethod;
  $clinit_ClippedImageImpl();
}

function $createElement_0(this$static){
  return $createStructure(this$static.url, this$static.left_0, this$static.top_0, this$static.width_0, this$static.height_0);
}

function $getSafeHtml_0(this$static){
  return $getSafeHtml(this$static.url, this$static.left_0, this$static.top_0, this$static.width_0, this$static.height_0);
}

function ClippedImagePrototype_0(url, left, top_0, width, height){
  $clinit_ClippedImagePrototype();
  this.url = url;
  this.left_0 = left;
  this.top_0 = top_0;
  this.width_0 = width;
  this.height_0 = height;
}

defineSeed(412, 363, {}, ClippedImagePrototype_0);
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url = null;
_.width_0 = 0;
function $createFocusable(){
  var e;
  e = $doc.createElement('div');
  e.tabIndex = 0;
  return e;
}

function $addAll(this$static, c){
  var changed, iter;
  iter = c.iterator();
  changed = false;
  while (iter.hasNext()) {
    this$static.add_0(iter.next_0()) && (changed = true);
  }
  return changed;
}

function $remove_6(this$static, o){
  var iter;
  iter = $advanceToFind(this$static.iterator(), o);
  if (iter) {
    iter.remove_0();
    return true;
  }
   else {
    return false;
  }
}

defineSeed(459, 1, makeCastMap([Q$Collection]));
_.isEmpty = function isEmpty_0(){
  return this.size_1() == 0;
}
;
_.remove_2 = function remove_8(o){
  return $remove_6(this, o);
}
;
function $clear_1(this$static){
  this$static.removeRange(0, this$static.size_1());
}

defineSeed(463, 459, makeCastMap([Q$Collection, Q$List]));
_.clear = function clear_0(){
  $clear_1(this);
}
;
_.removeRange = function removeRange(fromIndex, endIndex){
  var i, iter;
  iter = this.listIterator_0(fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    iter.next_0();
    iter.remove_0();
  }
}
;
function $removeHandler(this$static){
  this$static.this$0.doRemove(this$static.val$type, this$static.val$source, this$static.val$handler);
}

defineSeed(470, 1, makeCastMap([Q$HandlerRegistration_0]));
_.removeHandler = function removeHandler_0(){
  $removeHandler(this);
}
;
function SimpleEventBus$3_0(this$0, val$type, val$source, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = val$source;
  this.val$handler = val$handler;
}

defineSeed(472, 1, makeCastMap([Q$SimpleEventBus$Command]), SimpleEventBus$3_0);
_.execute = function execute_11(){
  $doRemoveNow(this.this$0, this.val$type, this.val$source, this.val$handler);
}
;
_.this$0 = null;
_.val$handler = null;
_.val$source = null;
_.val$type = null;
function $onClose(this$static){
  this$static.this$0.visible && $internalHide(this$static.val$popupPresenter);
  $removePopupChildren(this$static.this$0, this$static.val$popupPresenter);
}

function PresenterWidget$1_0(this$0, val$popupPresenter){
  this.this$0 = this$0;
  this.val$popupPresenter = val$popupPresenter;
}

defineSeed(478, 1, {}, PresenterWidget$1_0);
_.this$0 = null;
_.val$popupPresenter = null;
function $onResetPresenters(this$static){
  if (!this$static.isResetting) {
    this$static.isResetting = true;
    $internalReset(this$static);
    this$static.isResetting = false;
  }
}

defineSeed(480, 59, makeCastMap([Q$RootPresenter$RootView]));
_.asWidget = function asWidget_4(){
  return null;
}
;
_.setInSlot = function setInSlot_1(slot, content_0){
  if (this.usingRootLayoutPanel) {
    $clinit_RootPanel();
    $clear_0(get_5());
    $clear_0(get_4());
    $add_1(get_5(), get_4());
    !!content_0 && $add_3(get_4(), content_0);
  }
   else {
    $clear_0(get_4());
    $clinit_RootPanel();
    $clear_0(get_5());
    !!content_0 && $add_1(get_5(), content_0);
  }
}
;
function $clinit_AsyncCallSucceedEvent(){
  $clinit_AsyncCallSucceedEvent = nullMethod;
  TYPE_16 = new GwtEvent$Type_0;
}

function AsyncCallSucceedEvent_0(){
  $clinit_AsyncCallSucceedEvent();
}

defineSeed(483, 5, {}, AsyncCallSucceedEvent_0);
_.dispatch = function dispatch_16(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_17(){
  return TYPE_16;
}
;
var TYPE_16;
function $onSuccess(this$static, result){
  if (this$static.state == ($clinit_NotifyingAsyncCallback$State() , LOADING)) {
    --counter_0;
    counter_0 == 0 && ($clinit_AsyncCallSucceedEvent() , $castFireEvent(this$static.eventBus, new AsyncCallSucceedEvent_0));
  }
  this$static.state = SUCCEEDED;
  this$static.success(result);
}

defineSeed(497, 487, {});
_.success = function success(presenter){
  $addDeferredCommand(new ProxyPlaceAbstract$3$1_0(this, presenter, this.val$request, this.val$updateBrowserUrl));
}
;
function ProxyPlaceAbstract$3$1_0(this$1, val$presenter, val$request, val$updateBrowserUrl){
  this.this$1 = this$1;
  this.val$presenter = val$presenter;
  this.val$request = val$request;
  this.val$updateBrowserUrl = val$updateBrowserUrl;
}

defineSeed(498, 1, {}, ProxyPlaceAbstract$3$1_0);
_.execute = function execute_14(){
  var originalRequest;
  originalRequest = $getCurrentPlaceRequest(this.this$1.this$0.placeManager);
  originalRequest == $getCurrentPlaceRequest(this.this$1.this$0.placeManager) && $updateHistory(this.this$1.this$0.placeManager, this.val$request, this.val$updateBrowserUrl);
  $clinit_NavigationEvent();
  $fireEvent(this.this$1.this$0.placeManager, new NavigationEvent_0);
  $manualReveal(this.this$1.this$0, this.val$presenter);
}
;
_.this$1 = null;
_.val$presenter = null;
_.val$request = null;
_.val$updateBrowserUrl = false;
function ResetPresentersEvent_0(){
  $clinit_ResetPresentersEvent();
}

defineSeed(499, 5, {}, ResetPresentersEvent_0);
_.dispatch = function dispatch_20(handler){
  $onResetPresenters(dynamicCast(handler, Q$ResetPresentersHandler));
}
;
_.getAssociatedType = function getAssociatedType_21(){
  return type_0;
}
;
function $dispatch_4(this$static, handler){
  $getPresenter(handler.proxy, new RevealContentHandler$1_0(handler.eventBus, this$static));
}

function RevealContentEvent_0(type, content_0){
  this.type_0 = type;
  this.content_0 = content_0;
}

defineSeed(500, 5, {}, RevealContentEvent_0);
_.dispatch = function dispatch_21(handler){
  $dispatch_4(this, dynamicCast(handler, Q$RevealContentHandler));
}
;
_.getAssociatedType = function getAssociatedType_22(){
  return this.type_0;
}
;
_.content_0 = null;
_.type_0 = null;
function RevealContentHandler$1_0($anonymous0, val$revealContentEvent){
  this.val$revealContentEvent = val$revealContentEvent;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(502, 487, {}, RevealContentHandler$1_0);
_.success = function success_0(presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), new RevealContentHandler$1$1_0(presenter, this.val$revealContentEvent));
}
;
_.val$revealContentEvent = null;
function RevealContentHandler$1$1_0(val$presenter, val$revealContentEvent){
  this.val$presenter = val$presenter;
  this.val$revealContentEvent = val$revealContentEvent;
}

defineSeed(503, 1, {}, RevealContentHandler$1$1_0);
_.execute = function execute_15(){
  $forceReveal(this.val$presenter);
  $setInSlot(this.val$presenter, this.val$revealContentEvent.type_0, this.val$revealContentEvent.content_0);
}
;
_.val$presenter = null;
_.val$revealContentEvent = null;
function $fireCancellableEvent_0(this$static, context, event_0){
  if (this$static.disableEvents)
    return true;
  instanceOf(context, Q$HandlerManagerContext)?$fireEvent_4(dynamicCast(dynamicCast(context, Q$HandlerManagerContext), Q$DefaultHandlerManagerContext).handlerManager, event_0):undefined;
  if (event_0) {
    return !event_0.cancelled;
  }
  return true;
}

function $fireEvent_5(context, event_0){
  instanceOf(context, Q$HandlerManagerContext)?$fireEvent_4(dynamicCast(dynamicCast(context, Q$HandlerManagerContext), Q$DefaultHandlerManagerContext).handlerManager, event_0):undefined;
}

defineSeed(508, 136, makeCastMap([Q$AbstractEventCell]));
_.disableEvents = false;
function ResizeCell_0(consumedEvents){
  AbstractCell_0.call(this, consumedEvents);
}

defineSeed(511, 508, makeCastMap([Q$AbstractEventCell, Q$ResizableCell]));
_.redrawOnResize = function redrawOnResize(){
  return true;
}
;
_.setSize = function setSize(width, height){
  this.width_0 = width;
  this.height_0 = height;
}
;
_.setSize_0 = function setSize_0(parent_0, width, height){
  this.width_0 = width;
  this.height_0 = height;
}
;
_.height_0 = -1;
_.width_0 = -1;
function $onClick_0(this$static, context, p){
  if (!this$static.disableEvents && $fireCancellableEvent_0(this$static, context, new BeforeSelectEvent_1)) {
    !!this$static.menu && $show_4(this$static.menu, p, this$static.menuAlign, initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 0]));
    $onOver_0(p, false, null);
    $removeClassName(p, 'GN1NA3IBPN');
    $fireEvent_5(context, new SelectEvent_1);
  }
}

function $onNavigationKey(this$static, context, parent_0, event_0){
  var key_0;
  key_0 = event_0.keyCode || 0;
  (key_0 == 13 || key_0 == 32) && $onClick_0(this$static, context, parent_0);
}

function $setIcon(this$static, icon){
  this$static.icon = icon;
}

function $setMenu(this$static, menu){
  this$static.menu = menu;
}

function $setMinWidth(this$static, minWidth){
  this$static.minWidth = minWidth;
}

defineSeed(510, 511, makeCastMap([Q$HasText, Q$AbstractEventCell, Q$DisableCell, Q$FocusableCell, Q$ResizableCell]));
_.disable_1 = function disable_1(context, parent_0){
  $onOver(parent_0, null);
  $removeClassName(parent_0, 'GN1NA3IBF2');
}
;
_.enable_0 = function enable_1(context, parent_0){
  $onOver(parent_0, null);
}
;
_.getFocusElement = function getFocusElement(parent_0){
  return $getFirstChildElement(parent_0);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_7(context, parent_0, value, event_0, valueUpdater){
  var eventType, p, target, target_0;
  target = event_0.target;
  if (this.disableEvents || !$isOrHasChild($getFirstChildElement(parent_0), target)) {
    return;
  }
  p = parent_0;
  eventType = event_0.type;
  $equals_3('click', eventType)?$onClick_0(this, context, p):$equals_3('mouseover', eventType)?($onOver_0(p, true, event_0) , $addClassName(p, 'GN1NA3IBPN')):$equals_3('mouseout', eventType)?($onOver_0(p, false, event_0) , $removeClassName(p, 'GN1NA3IBPN')):$equals_3('mousedown', eventType)?(target_0 = event_0.target , $equals_3('IMG', target_0.tagName) && (event_0.preventDefault() , undefined) , $addClassName(p, 'GN1NA3IBJ2') , new ButtonCell$UnpushHandler_0(p) , undefined):$equals_3('mouseup', eventType)?$removeClassName(p, 'GN1NA3IBJ2'):$equals_3('focus', eventType)?$addClassName(p, 'GN1NA3IBF2'):$equals_3('blur', eventType)?$removeClassName(p, 'GN1NA3IBF2'):$equals_3('keydown', eventType)?($clinit_KeyNav() , $clinit_KeyNav() , keyEvent) == 128 && $onNavigationKey(this, context, parent_0, event_0):$equals_3('keypress', eventType) && ($clinit_KeyNav() , $clinit_KeyNav() , keyEvent) == 256 && $onNavigationKey(this, context, parent_0, event_0);
}
;
_.redrawOnResize = function redrawOnResize_0(){
  return true;
}
;
_.render = function render(context, value, sb){
  $render_0(this.appearance, this, value, sb);
}
;
_.appearance = null;
_.icon = null;
_.menu = null;
_.minWidth = -1;
function ButtonCell$UnpushHandler_0(parent_0){
  this.parent_0 = parent_0;
  this.reg = addNativePreviewHandler(this);
}

defineSeed(512, 1, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), ButtonCell$UnpushHandler_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  if ($equals_3('mouseup', event_0.nativeEvent.type)) {
    $removeHandler(this.reg.real);
    $onOver(this.parent_0, event_0.nativeEvent);
    $removeClassName(this.parent_0, 'GN1NA3IBJ2');
  }
}
;
_.parent_0 = null;
_.reg = null;
function TextButtonCell_0(){
  TextButtonCell_1.call(this, new ButtonCellDefaultAppearance_0);
}

function TextButtonCell_1(appearance){
  ResizeCell_0.call(this, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['click', 'keydown', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'focus', 'blur']));
  this.text = ($clinit_SafeHtmlUtils() , EMPTY_SAFE_HTML);
  this.menuAlign = new Style$AnchorAlignment_1(($clinit_Style$Anchor() , TOP_LEFT), BOTTOM_LEFT, true);
  this.appearance = appearance;
}

defineSeed(513, 510, makeCastMap([Q$HasText, Q$AbstractEventCell, Q$DisableCell, Q$FocusableCell, Q$ResizableCell]), TextButtonCell_0);
function $onValid(parent_0, valid){
  $setClassName_0($getFirstChildElement($getFirstChildElement(parent_0)), 'GN1NA3IBNHC', !valid);
}

function $clinit_GXT(){
  $clinit_GXT = nullMethod;
  sslSecureUrl = getModuleBaseURL() + 'blank.html';
  blankImageUrl = getModuleBaseURL() + 'clear.gif';
}

function init_0(){
  $clinit_GXT();
  if (initialized) {
    return;
  }
  initialized = true;
  useShims || (useShims = dynamicCast(com_sencha_gxt_core_client_GXT_OS(), Q$GXT$OS).isMac() && false);
  isSecure = $wnd.location.protocol.toLowerCase().indexOf('https') == 0;
  blankImageUrl == null && (blankImageUrl = getModuleBaseURL() + 'clear.gif');
}

function isIE_0(){
  $clinit_GXT();
  return false;
}

var blankImageUrl, initialized = false, isSecure = false, sslSecureUrl, useShims = false;
function GXT_OS_linux_0(){
}

defineSeed(521, 1, makeCastMap([Q$GXT$OS]), GXT_OS_linux_0);
_.isMac = function isMac(){
  return false;
}
;
function GXT_OS_mac_0(){
}

defineSeed(522, 1, makeCastMap([Q$GXT$OS]), GXT_OS_mac_0);
_.isMac = function isMac_0(){
  return true;
}
;
function GXT_OS_windows_0(){
}

defineSeed(523, 1, makeCastMap([Q$GXT$OS]), GXT_OS_windows_0);
_.isMac = function isMac_1(){
  return false;
}
;
function $clinit_Style$Anchor(){
  $clinit_Style$Anchor = nullMethod;
  TOP = new Style$Anchor_0('TOP', 0, 't');
  TOP_RIGHT = new Style$Anchor_0('TOP_RIGHT', 1, 'tr');
  RIGHT_1 = new Style$Anchor_0('RIGHT', 2, 'r');
  BOTTOM_RIGHT = new Style$Anchor_0('BOTTOM_RIGHT', 3, 'br');
  BOTTOM = new Style$Anchor_0('BOTTOM', 4, 'b');
  BOTTOM_LEFT = new Style$Anchor_0('BOTTOM_LEFT', 5, 'bl');
  LEFT_1 = new Style$Anchor_0('LEFT', 6, 'l');
  TOP_LEFT = new Style$Anchor_0('TOP_LEFT', 7, 'tl');
  CENTER_1 = new Style$Anchor_0('CENTER', 8, 'c');
  $VALUES_10 = initValues(_3Lcom_sencha_gxt_core_client_Style$Anchor_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Anchor, [TOP, TOP_RIGHT, RIGHT_1, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT_1, TOP_LEFT, CENTER_1]);
}

function Style$Anchor_0(enum$name, enum$ordinal, value){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.value_0 = value;
}

function values_11(){
  $clinit_Style$Anchor();
  return $VALUES_10;
}

defineSeed(525, 191, makeCastMap([Q$Style$Anchor, Q$Serializable, Q$Comparable, Q$Enum]), Style$Anchor_0);
_.value_0 = null;
var $VALUES_10, BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, CENTER_1, LEFT_1, RIGHT_1, TOP, TOP_LEFT, TOP_RIGHT;
function Style$AnchorAlignment_0(align, targetAlign){
  Style$AnchorAlignment_1.call(this, align, targetAlign, true);
}

function Style$AnchorAlignment_1(align, targetAlign, constrainViewport){
  this.align = align;
  this.targetAlign = targetAlign;
  this.constrainViewport = constrainViewport;
}

defineSeed(526, 1, {}, Style$AnchorAlignment_0, Style$AnchorAlignment_1);
_.align = null;
_.constrainViewport = false;
_.targetAlign = null;
function $clinit_Style$Direction(){
  $clinit_Style$Direction = nullMethod;
  UP = new Style$Direction_0('UP', 0);
  DOWN = new Style$Direction_0('DOWN', 1);
  LEFT_2 = new Style$Direction_0('LEFT', 2);
  RIGHT_2 = new Style$Direction_0('RIGHT', 3);
  $VALUES_11 = initValues(_3Lcom_sencha_gxt_core_client_Style$Direction_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Direction, [UP, DOWN, LEFT_2, RIGHT_2]);
}

function Style$Direction_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_Style$Direction();
  return $VALUES_11;
}

defineSeed(527, 191, makeCastMap([Q$Style$Direction, Q$Serializable, Q$Comparable, Q$Enum]), Style$Direction_0);
var $VALUES_11, DOWN, LEFT_2, RIGHT_2, UP;
function $clinit_Style$HideMode(){
  $clinit_Style$HideMode = nullMethod;
  OFFSETS = new Style$HideMode_0('OFFSETS', 0, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBIK'));
  VISIBILITY = new Style$HideMode_0('VISIBILITY', 1, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBJK'));
  DISPLAY = new Style$HideMode_0('DISPLAY', 2, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBHK'));
  $VALUES_12 = initValues(_3Lcom_sencha_gxt_core_client_Style$HideMode_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$HideMode, [OFFSETS, VISIBILITY, DISPLAY]);
}

function Style$HideMode_0(enum$name, enum$ordinal, value){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.value_0 = value;
}

function values_13(){
  $clinit_Style$HideMode();
  return $VALUES_12;
}

defineSeed(528, 191, makeCastMap([Q$Style$HideMode, Q$Serializable, Q$Comparable, Q$Enum]), Style$HideMode_0);
_.value_0 = null;
var $VALUES_12, DISPLAY, OFFSETS, VISIBILITY;
function $clinit_Style$LayoutRegion(){
  $clinit_Style$LayoutRegion = nullMethod;
  NORTH = new Style$LayoutRegion_0('NORTH', 0);
  EAST = new Style$LayoutRegion_0('EAST', 1);
  SOUTH = new Style$LayoutRegion_0('SOUTH', 2);
  WEST = new Style$LayoutRegion_0('WEST', 3);
  CENTER_2 = new Style$LayoutRegion_0('CENTER', 4);
  $VALUES_13 = initValues(_3Lcom_sencha_gxt_core_client_Style$LayoutRegion_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$LayoutRegion, [NORTH, EAST, SOUTH, WEST, CENTER_2]);
}

function Style$LayoutRegion_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_Style$LayoutRegion();
  return $VALUES_13;
}

defineSeed(529, 191, makeCastMap([Q$Style$LayoutRegion, Q$Serializable, Q$Comparable, Q$Enum]), Style$LayoutRegion_0);
var $VALUES_13, CENTER_2, EAST, NORTH, SOUTH, WEST;
function $clinit_Style$Side(){
  $clinit_Style$Side = nullMethod;
  LEFT_3 = new Style$Side_0('LEFT', 0);
  RIGHT_3 = new Style$Side_0('RIGHT', 1);
  TOP_0 = new Style$Side_0('TOP', 2);
  BOTTOM_0 = new Style$Side_0('BOTTOM', 3);
  $VALUES_14 = initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [LEFT_3, RIGHT_3, TOP_0, BOTTOM_0]);
}

function Style$Side_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_Style$Side();
  return $VALUES_14;
}

defineSeed(530, 191, makeCastMap([Q$Style$Side, Q$Serializable, Q$Comparable, Q$Enum]), Style$Side_0);
var $VALUES_14, BOTTOM_0, LEFT_3, RIGHT_3, TOP_0;
function $add_7(this$static, elem){
  $insert_3(this$static, elem, this$static.items.size_0);
}

function $insert_3(this$static, elem, index){
  $add_14(this$static.items, index, elem);
}

function $is(this$static, elem){
  var count, i, test;
  count = this$static.items.size_0;
  for (i = 0; i < count; ++i) {
    test = i >= 0 && i < this$static.items.size_0?dynamicCastJso($get_10(this$static.items, i)):null;
    if (test.contains(elem)) {
      return true;
    }
  }
  return false;
}

function CompositeElement_0(){
  this.items = new ArrayList_0;
}

defineSeed(531, 1, {}, CompositeElement_0);
_.items = null;
function $clinit_DomHelper(){
  $clinit_DomHelper = nullMethod;
  loadExt();
  loadDomHelper();
}

function insertBefore(elem, html){
  $clinit_DomHelper();
  var Ext = ext;
  return Ext.DomHelper.doInsert(elem, html, false, 'beforeBegin');
}

function insertHtml(where, el, html){
  $clinit_DomHelper();
  if (!html)
    return el;
  var Ext = ext;
  return Ext.DomHelper.insertHtml(where, el, html);
}

function $clinit_DomQuery(){
  $clinit_DomQuery = nullMethod;
  loadExt();
  loadDomQuery();
}

function internalSelect(selector, root){
  $clinit_DomQuery();
  var Ext = ext;
  var result = Ext.DomQuery.select(selector, root);
  return result;
}

function is_3(elem, selector){
  $clinit_DomQuery();
  var Ext = ext;
  return Ext.DomQuery.is(elem, selector);
}

function loadDomHelper(){
  var Ext = ext;
  if (Ext.DomHelper) {
    return;
  }
  Ext.DomHelper = function(){
    var tempTableEl = null;
    var emptyTags = /^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i;
    var tableRe = /^table|tbody|tr|td$/i;
    var tableElRe = /td|tr|tbody/i;
    var endRe = /end/i;
    var ieTable = function(depth, s, h_0, e){
      this.tempTableEl.innerHTML = [s, h_0, e].join('');
      var i = -1, el = this.tempTableEl, ns;
      while (++i < depth) {
        el = el.firstChild;
      }
      ns = el.nextSibling;
      if (ns) {
        var df = $doc.createDocumentFragment();
        while (el) {
          ns = el.nextSibling;
          df.appendChild(el);
          el = ns;
        }
        el = df;
      }
      return el;
    }
    ;
    var afterbegin = 'afterbegin', afterend = 'afterend', beforebegin = 'beforebegin', beforeend = 'beforeend', ts = '<table>', te = '<\/table>', tbs = ts + '<tbody>', tbe = '<\/tbody>' + te, trs = tbs + '<tr>', tre = '<\/tr>' + tbe;
    var insertIntoTable = function(tag, where, el, html){
      var node, before;
      this.tempTableEl = this.tempTableEl || $doc.createElement('div');
      if (tag == 'td' && (where == afterbegin || where == beforeend) || !tableElRe.test(tag) && (where == beforebegin || where == afterend)) {
        return null;
      }
      before = where == beforebegin?el:where == afterend?el.nextSibling:where == afterbegin?el.firstChild:null;
      (where == beforebegin || where == afterend) && (el = el.parentNode);
      tag == 'td' || tag == 'tr' && (where == beforeend || where == afterbegin)?(node = ieTable(4, trs, html, tre)):tag == 'tbody' && (where == beforeend || where == afterbegin) || tag == 'tr' && (where == beforebegin || where == afterend)?(node = ieTable(3, tbs, html, tbe)):(node = ieTable(2, ts, html, te));
      el.insertBefore(node, before);
      return node;
    }
    ;
    return {markup:function(o){
      return o;
    }
    , createContextualFragment:function(html){
      var div = $doc.createElement('div'), fragment = $doc.createDocumentFragment(), i = 0, length_0, childNodes;
      div.innerHTML = html;
      childNodes = div.childNodes;
      length_0 = childNodes.length;
      for (; i < length_0; i++) {
        fragment.appendChild(childNodes[i].cloneNode(true));
      }
      return fragment;
    }
    , applyStyles:function(el, styles){
      if (styles) {
        if (typeof styles == 'string') {
          var re = /\s?([a-z\-]*)\:\s?([^;]*);?/gi;
          var matches;
          while ((matches = re.exec(styles)) != null) {
            el.style[matches[1]] = matches[2];
          }
        }
         else if (typeof styles == 'object') {
          for (var style in styles) {
          }
        }
         else 
          typeof styles == 'function' && Ext.DomHelper.applyStyles(el, styles.call());
      }
    }
    , insertHtml:function(where, el, html){
      var hash = {}, hashVal, range, rangeEl, setStart, frag, rs;
      where = where.toLowerCase();
      hash[beforebegin] = ['BeforeBegin', 'previousSibling'];
      hash[afterend] = ['AfterEnd', 'nextSibling'];
      if (el.insertAdjacentHTML) {
        if (tableRe.test(el.tagName) && (rs = insertIntoTable(el.tagName.toLowerCase(), where, el, html))) {
          return rs;
        }
        hash[afterbegin] = ['AfterBegin', 'firstChild'];
        hash[beforeend] = ['BeforeEnd', 'lastChild'];
        if (hashVal = hash[where]) {
          el.insertAdjacentHTML(hashVal[0], html);
          return el[hashVal[1]];
        }
      }
       else {
        if (Ext.isTextNode(el)) {
          where = where === 'afterbegin'?'beforebegin':where;
          where = where === 'beforeend'?'afterend':where;
        }
        range = Ext.supports.CreateContextualFragment?el.ownerDocument.createRange():undefined;
        setStart = 'setStart' + (endRe.test(where)?'After':'Before');
        if (hash[where]) {
          if (range) {
            range[setStart](el);
            frag = range.createContextualFragment(html);
          }
           else {
            frag = this.createContextualFragment(html);
          }
          el.parentNode.insertBefore(frag, where == beforebegin?el:el.nextSibling);
          return el[(where == beforebegin?'previous':'next') + 'Sibling'];
        }
         else {
          rangeEl = (where == afterbegin?'first':'last') + 'Child';
          if (el.firstChild) {
            if (range) {
              range[setStart](el[rangeEl]);
              frag = range.createContextualFragment(html);
            }
             else {
              frag = this.createContextualFragment(html);
            }
            where == afterbegin?el.insertBefore(frag, el.firstChild):el.appendChild(frag);
          }
           else {
            el.innerHTML = html;
          }
          return el[rangeEl];
        }
      }
    }
    , insertBefore:function(el, o, returnElement){
      return this.doInsert(el, o, returnElement, 'beforeBegin');
    }
    , insertAfter:function(el, o, returnElement){
      return this.doInsert(el, o, returnElement, 'afterEnd', 'nextSibling');
    }
    , insertFirst:function(el, o, returnElement){
      return this.doInsert(el, o, returnElement, 'afterBegin', 'firstChild');
    }
    , doInsert:function(el, o, returnElement, pos, sibling, append){
      el = el.dom || Ext.getDom(el);
      var newNode = this.insertHtml(pos, el, this.markup(o));
      return returnElement?Ext.get(newNode, true):newNode;
    }
    , append:function(el, o, returnElement){
      return this.insertHtml('beforeEnd', el, o);
    }
    , overwrite:function(el, o){
      el.innerHTML = o;
      return el.firstChild;
    }
    };
  }
  ();
}

function loadDomQuery(){
  var Ext = ext;
  if (Ext.DomQuery) {
    return;
  }
  Ext.DomQuery = function(){
    var cache = {}, simpleCache = {}, valueCache = {};
    var nonSpace = /\S/;
    var trimRe = /^\s+|\s+$/g;
    var tplRe = /\{(\d+)\}/g;
    var modeRe = /^(\s?[\/>+~]\s?|\s|$)/;
    var tagTokenRe = /^(#)?([\w-\*]+)/;
    var nthRe = /(\d*)n\+?(\d*)/, nthRe2 = /\D/;
    var document_0 = $doc;
    ;
    function next(n){
      while ((n = n.nextSibling) && n.nodeType != 1)
      ;
      return n;
    }

    ;
    function prev(n){
      while ((n = n.previousSibling) && n.nodeType != 1)
      ;
      return n;
    }

    ;
    ;
    byClassName = function(c, a, v){
      if (!v) {
        return c;
      }
      var r = [], ri = -1, cn;
      for (var i = 0, ci; ci = c[i]; i++) {
        (' ' + ci.className + ' ').indexOf(v) != -1 && (r[++ri] = ci);
      }
      return r;
    }
    ;
    attrValue = function(n, attr){
      !n.tagName && typeof n.length != 'undefined' && (n = n[0]);
      if (!n) {
        return null;
      }
      if (attr == 'for') {
        return n.htmlFor;
      }
      if (attr == 'class' || attr == 'className') {
        return n.className;
      }
      return n.getAttribute(attr) || n[attr];
    }
    ;
    getNodes = function(ns, mode, tagName){
      var result = [], ri = -1, cs;
      if (!ns) {
        return result;
      }
      tagName = tagName || '*';
      typeof ns.getElementsByTagName != 'undefined' && (ns = [ns]);
      if (!mode) {
        for (var i = 0, ni; ni = ns[i]; i++) {
          typeof ni.getElementsByTagNameNS != 'undefined'?(cs = ni.getElementsByTagNameNS('*', tagName)):(cs = ni.getElementsByTagName(tagName));
          for (var j = 0, ci; ci = cs[j]; j++) {
            result[++ri] = ci;
          }
        }
      }
       else if (mode == '/' || mode == '>') {
        var utag = tagName.toUpperCase();
        for (var i = 0, ni, cn; ni = ns[i]; i++) {
          cn = ni.children || ni.childNodes;
          for (var j = 0, cj; cj = cn[j]; j++) {
            (cj.nodeName == utag || cj.nodeName == tagName || tagName == '*') && (result[++ri] = cj);
          }
        }
      }
       else if (mode == '+') {
        var utag = tagName.toUpperCase();
        for (var i = 0, n; n = ns[i]; i++) {
          while ((n = n.nextSibling) && n.nodeType != 1)
          ;
          n && (n.nodeName == utag || n.nodeName == tagName || tagName == '*') && (result[++ri] = n);
        }
      }
       else if (mode == '~') {
        for (var i = 0, n; n = ns[i]; i++) {
          while ((n = n.nextSibling) && (n.nodeType != 1 || tagName == '*' || n.tagName.toLowerCase() != tagName))
          ;
          n && (result[++ri] = n);
        }
      }
      return result;
    }
    ;
    byTag = function(cs, tagName){
      (cs.tagName || cs == document_0) && (cs = [cs]);
      if (!tagName) {
        return cs;
      }
      var r = [], ri = -1;
      tagName = tagName.toLowerCase();
      for (var i = 0, ci; ci = cs[i]; i++) {
        ci.nodeType == 1 && ci.tagName.toLowerCase() == tagName && (r[++ri] = ci);
      }
      return r;
    }
    ;
    byId = function(cs, attr, id){
      (cs.tagName || cs == document_0) && (cs = [cs]);
      if (!id) {
        return cs;
      }
      var r = [], ri = -1;
      for (var i = 0, ci; ci = cs[i]; i++) {
        if (ci && ci.id == id) {
          r[++ri] = ci;
          return r;
        }
      }
      return r;
    }
    ;
    byAttribute = function(cs, attr, value, op, custom){
      var r = [], ri = -1, st = custom == '{';
      var f_0 = Ext.DomQuery.operators[op];
      for (var i = 0, ci; ci = cs[i]; i++) {
        var a;
        st?(a = Ext.DomQuery.getStyle(ci, attr)):attr == 'class' || attr == 'className'?(a = ci.className):attr == 'for'?(a = ci.htmlFor):attr == 'href'?(a = ci.getAttribute('href', 2)):(a = ci.getAttribute(attr));
        (f_0 && f_0(a, value) || !f_0 && a) && (r[++ri] = ci);
      }
      return r;
    }
    ;
    byPseudo = function(cs, name_0, value){
      return Ext.DomQuery.pseudos[name_0](cs, value);
    }
    ;
    var isIE = window.ActiveXObject?true:false;
    eval('var batch = 30803;');
    var key_0 = 30803;
    function nodupIEXml(cs){
      var d = ++key_0;
      cs[0].setAttribute('_nodup', d);
      var r = [cs[0]];
      for (var i = 1, len = cs.length; i < len; i++) {
        var c = cs[i];
        if (!c.getAttribute('_nodup') != d) {
          c.setAttribute('_nodup', d);
          r[r.length] = c;
        }
      }
      for (var i = 0, len = cs.length; i < len; i++) {
        cs[i].removeAttribute('_nodup');
      }
      return r;
    }

    _nodup = function(cs){
      if (!cs) {
        return [];
      }
      var len = cs.length, c, i, r = cs, cj, ri = -1;
      if (!len || typeof cs.nodeType != 'undefined' || len == 1) {
        return cs;
      }
      if (isIE && typeof cs[0].selectSingleNode != 'undefined') {
        return nodupIEXml(cs);
      }
      var d = ++key_0;
      cs[0]._nodup = d;
      for (i = 1; c = cs[i]; i++) {
        if (c._nodup != d) {
          c._nodup = d;
        }
         else {
          r = [];
          for (var j = 0; j < i; j++) {
            r[++ri] = cs[j];
          }
          for (j = i + 1; cj = cs[j]; j++) {
            if (cj._nodup != d) {
              cj._nodup = d;
              r[++ri] = cj;
            }
          }
          return r;
        }
      }
      return r;
    }
    ;
    function quickDiffIEXml(c1, c2){
      var d = ++key_0;
      for (var i = 0, len = c1.length; i < len; i++) {
        c1[i].setAttribute('_qdiff', d);
      }
      var r = [];
      for (var i = 0, len = c2.length; i < len; i++) {
        c2[i].getAttribute('_qdiff') != d && (r[r.length] = c2[i]);
      }
      for (var i = 0, len = c1.length; i < len; i++) {
        c1[i].removeAttribute('_qdiff');
      }
      return r;
    }

    function quickDiff(c1, c2){
      var len1 = c1.length;
      if (!len1) {
        return c2;
      }
      if (isIE && c1[0].selectSingleNode) {
        return quickDiffIEXml(c1, c2);
      }
      var d = ++key_0;
      for (var i = 0; i < len1; i++) {
        c1[i]._qdiff = d;
      }
      var r = [];
      for (var i = 0, len = c2.length; i < len; i++) {
        c2[i]._qdiff != d && (r[r.length] = c2[i]);
      }
      return r;
    }

    function quickId(ns, mode, root, id){
      if (ns == root) {
        var d = root.ownerDocument || root;
        return d.getElementById(id);
      }
      ns = getNodes(ns, mode, '*');
      return byId(ns, null, id);
    }

    quickId = quickId;
    return {getStyle:function(el, name_0){
      return el.style[name_0];
    }
    , compile:function(path, type){
      type = type || 'select';
      var fn = ['var f = function(root){\n var mode; ++batch; var n = root || document;\n'];
      var q = path, mode, lq;
      var tk = Ext.DomQuery.matchers;
      var tklen = tk.length;
      var mm;
      var lmode = q.match(modeRe);
      if (lmode && lmode[1]) {
        fn[fn.length] = 'mode="' + lmode[1].replace(trimRe, '') + '";';
        q = q.replace(lmode[1], '');
      }
      while (path.substr(0, 1) == '/') {
        path = path.substr(1);
      }
      while (q && lq != q) {
        lq = q;
        var tm = q.match(tagTokenRe);
        if (type == 'select') {
          if (tm) {
            tm[1] == '#'?(fn[fn.length] = 'n = quickId(n, mode, root, "' + tm[2] + '");'):(fn[fn.length] = 'n = getNodes(n, mode, "' + tm[2] + '");');
            q = q.replace(tm[0], '');
          }
           else 
            q.substr(0, 1) != '@' && (fn[fn.length] = 'n = getNodes(n, mode, "*");');
        }
         else {
          if (tm) {
            tm[1] == '#'?(fn[fn.length] = 'n = byId(n, null, "' + tm[2] + '");'):(fn[fn.length] = 'n = byTag(n, "' + tm[2] + '");');
            q = q.replace(tm[0], '');
          }
        }
        while (!(mm = q.match(modeRe))) {
          var matched = false;
          for (var j = 0; j < tklen; j++) {
            var t = tk[j];
            var m_0 = q.match(t.re);
            if (m_0) {
              fn[fn.length] = t.select.replace(tplRe, function(x, i){
                return m_0[i];
              }
              );
              q = q.replace(m_0[0], '');
              matched = true;
              break;
            }
          }
          if (!matched) {
            throw 'Error parsing selector, parsing failed at "' + q + '"';
          }
        }
        if (mm[1]) {
          fn[fn.length] = 'mode="' + mm[1].replace(trimRe, '') + '";';
          q = q.replace(mm[1], '');
        }
      }
      fn[fn.length] = 'return _nodup(n);\n}';
      eval(fn.join(''));
      return f;
    }
    , select:function(path, root, type){
      (!root || root == document_0) && (root = document_0);
      typeof root == 'string' && (root = document_0.getElementById(root));
      var paths = path.split(',');
      var results = [];
      for (var i = 0, len = paths.length; i < len; i++) {
        var p = paths[i].replace(trimRe, '');
        if (!cache[p]) {
          cache[p] = Ext.DomQuery.compile(p);
          if (!cache[p]) {
            throw p + ' is not a valid selector';
          }
        }
        var result = cache[p](root);
        result && result != document_0 && (results = results.concat(result));
      }
      if (paths.length > 1) {
        return _nodup(results);
      }
      return results;
    }
    , selectNode:function(path, root){
      return Ext.DomQuery.select(path, root)[0];
    }
    , selectValue:function(path, root, defaultValue){
      path = path.replace(trimRe, '');
      !valueCache[path] && (valueCache[path] = Ext.DomQuery.compile(path, 'select'));
      var n = valueCache[path](root);
      n = n[0]?n[0]:n;
      var v = n && n.firstChild?n.firstChild.nodeValue:null;
      return v === null || v === undefined || v === ''?defaultValue:v;
    }
    , selectNumber:function(path, root, defaultValue){
      var v = Ext.DomQuery.selectValue(path, root, defaultValue || 0);
      return parseFloat(v);
    }
    , is:function(el, ss){
      typeof el == 'string' && (el = document_0.getElementById(el));
      var isArray = el instanceof Array;
      var result = Ext.DomQuery.filter(isArray?el:[el], ss);
      return isArray?result.length == el.length:result.length > 0;
    }
    , filter:function(els, ss, nonMatches){
      ss = ss.replace(trimRe, '');
      !simpleCache[ss] && (simpleCache[ss] = Ext.DomQuery.compile(ss, 'simple'));
      var result = simpleCache[ss](els);
      return nonMatches?quickDiff(result, els):result;
    }
    , matchers:[{re:/^\.([\w-]+)/, select:'n = byClassName(n, null, " {1} ");'}, {re:/^\:([\w-]+)(?:\(((?:[^\s>\/]*|.*?))\))?/, select:'n = byPseudo(n, "{1}", "{2}");'}, {re:/^(?:([\[\{])(?:@)?([\w-]+)\s?(?:(=|.=)\s?['"]?(.*?)["']?)?[\]\}])/, select:'n = byAttribute(n, "{2}", "{4}", "{3}", "{1}");'}, {re:/^#([\w-]+)/, select:'n = byId(n, null, "{1}");'}, {re:/^@([\w-:]+)/, select:'return {firstChild:{nodeValue:attrValue(n, "{1}")}};'}], operators:{'=':function(a, v){
      return a == v;
    }
    , '!=':function(a, v){
      return a != v;
    }
    , '^=':function(a, v){
      return a && a.substr(0, v.length) == v;
    }
    , '$=':function(a, v){
      return a && a.substr(a.length - v.length) == v;
    }
    , '*=':function(a, v){
      return a && a.indexOf(v) !== -1;
    }
    , '%=':function(a, v){
      return a % v == 0;
    }
    , '|=':function(a, v){
      return a && (a == v || a.substr(0, v.length + 1) == v + '-');
    }
    , '~=':function(a, v){
      return a && (' ' + a + ' ').indexOf(' ' + v + ' ') != -1;
    }
    }, pseudos:{'first-child':function(c){
      var r = [], ri = -1, n;
      for (var i = 0, ci; ci = n = c[i]; i++) {
        while ((n = n.previousSibling) && n.nodeType != 1)
        ;
        !n && (r[++ri] = ci);
      }
      return r;
    }
    , 'last-child':function(c){
      var r = [], ri = -1, n;
      for (var i = 0, ci; ci = n = c[i]; i++) {
        while ((n = n.nextSibling) && n.nodeType != 1)
        ;
        !n && (r[++ri] = ci);
      }
      return r;
    }
    , 'nth-child':function(c, a){
      var r = [], ri = -1;
      var m_0 = nthRe.exec(a == 'even' && '2n' || a == 'odd' && '2n+1' || !nthRe2.test(a) && 'n+' + a || a);
      var f_0 = (m_0[1] || 1) - 0, l_0 = m_0[2] - 0;
      for (var i = 0, n; n = c[i]; i++) {
        var pn = n.parentNode;
        if (batch != pn._batch) {
          var j = 0;
          for (var cn = pn.firstChild; cn; cn = cn.nextSibling) {
            cn.nodeType == 1 && (cn.nodeIndex = ++j);
          }
          pn._batch = batch;
        }
        f_0 == 1?(l_0 == 0 || n.nodeIndex == l_0) && (r[++ri] = n):(n.nodeIndex + l_0) % f_0 == 0 && (r[++ri] = n);
      }
      return r;
    }
    , 'only-child':function(c){
      var r = [], ri = -1;
      ;
      for (var i = 0, ci; ci = c[i]; i++) {
        !prev(ci) && !next(ci) && (r[++ri] = ci);
      }
      return r;
    }
    , empty:function(c){
      var r = [], ri = -1;
      for (var i = 0, ci; ci = c[i]; i++) {
        var cns = ci.childNodes, j = 0, cn, empty = true;
        while (cn = cns[j]) {
          ++j;
          if (cn.nodeType == 1 || cn.nodeType == 3) {
            empty = false;
            break;
          }
        }
        empty && (r[++ri] = ci);
      }
      return r;
    }
    , contains:function(c, v){
      var r = [], ri = -1;
      for (var i = 0, ci; ci = c[i]; i++) {
        (ci.textContent || ci.innerText || '').indexOf(v) != -1 && (r[++ri] = ci);
      }
      return r;
    }
    , nodeValue:function(c, v){
      var r = [], ri = -1;
      for (var i = 0, ci; ci = c[i]; i++) {
        ci.firstChild && ci.firstChild.nodeValue == v && (r[++ri] = ci);
      }
      return r;
    }
    , checked:function(c){
      var r = [], ri = -1;
      for (var i = 0, ci; ci = c[i]; i++) {
        ci.checked == true && (r[++ri] = ci);
      }
      return r;
    }
    , not:function(c, ss){
      return Ext.DomQuery.filter(c, ss, true);
    }
    , any:function(c, selectors){
      var ss = selectors.split('|');
      var r = [], ri = -1, s;
      for (var i = 0, ci; ci = c[i]; i++) {
        for (var j = 0; s = ss[j]; j++) {
          if (Ext.DomQuery.is(ci, s)) {
            r[++ri] = ci;
            break;
          }
        }
      }
      return r;
    }
    , odd:function(c){
      return this['nth-child'](c, 'odd');
    }
    , even:function(c){
      return this['nth-child'](c, 'even');
    }
    , nth:function(c, a){
      return c[a - 1] || [];
    }
    , first:function(c){
      return c[0] || [];
    }
    , last:function(c){
      return c[c.length - 1] || [];
    }
    , has:function(c, ss){
      var s = Ext.DomQuery.select;
      var r = [], ri = -1;
      for (var i = 0, ci; ci = c[i]; i++) {
        s(ss, ci).length > 0 && (r[++ri] = ci);
      }
      return r;
    }
    , next:function(c, ss){
      var is = Ext.DomQuery.is;
      var r = [], ri = -1;
      for (var i = 0, ci; ci = c[i]; i++) {
        var n = next(ci);
        n && is(n, ss) && (r[++ri] = ci);
      }
      return r;
    }
    , prev:function(c, ss){
      var is = Ext.DomQuery.is;
      var r = [], ri = -1;
      for (var i = 0, ci; ci = c[i]; i++) {
        var n = prev(ci);
        n && is(n, ss) && (r[++ri] = ci);
      }
      return r;
    }
    }};
  }
  ();
}

function loadExt(){
  var document_0 = $doc;
  var window_0 = $wnd;
  var Ext = ext;
  if (Ext) {
    return;
  }
  Ext = ext = {};
  Ext.apply = function(o, c, defaults){
    defaults && Ext.apply(o, defaults);
    if (o && c && typeof c == 'object') {
      for (var p in c) {
        o[p] = c[p];
      }
    }
    return o;
  }
  ;
  var initload = function(){
    var idSeed = 0;
    Ext.apply(Ext, {emptyFn:function(){
    }
    , applyIf:function(o, c){
      if (o && c) {
        for (var p in c) {
          typeof o[p] == 'undefined' && (o[p] = c[p]);
        }
      }
      return o;
    }
    , isArray:function(v){
      return v && typeof v.pop == 'function';
    }
    , getDom:function(el){
      if (!el || !$doc) {
        return null;
      }
      return el.dom?el.dom:typeof el == 'string'?document_0.getElementById(el):el;
    }
    , isTextNode:function(value){
      return value?value.nodeName === '#text':false;
    }
    });
  }
  ;
  Ext.supports = {};
  Ext.supports.Range = function(){
    return !!$doc.createRange;
  }
  ;
  Ext.supports.CreateContextualFragment = function(){
    var range = Ext.supports.Range?$doc.createRange():false;
    return range && !!range.createContextualFragment;
  }
  ;
  initload();
}

var ext = null;
function $clinit_Layer(){
  $clinit_Layer = nullMethod;
  shadows = new Stack_0;
  shims = new Stack_0;
}

function $disableShadow(this$static){
  this$static.shadowEnabled = false;
  $hideShadow(this$static);
}

function $getShadow(this$static){
  var pn, sb, el;
  pn = $getParentElement(this$static.elem);
  if (!pn || !this$static.shadowEnabled) {
    $hideShadow(this$static);
    return null;
  }
  if (this$static.shadow) {
    return this$static.shadow;
  }
  this$static.shadow = shadows.arrayList.size_0 > 0?dynamicCastJso($pop(shadows)):null;
  !this$static.shadow && (this$static.shadow = (sb = new SafeHtmlBuilder_0 , $append_5(sb, $shadow((!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBKK'))) , el = ($clinit_XDOM() , create_3((new SafeHtmlString_0(sb.sb.impl.string)).html)) , !el.visMode || el.visMode == ($clinit_XElement$VisMode() , DISPLAY_0)?(el.style['display'] = ($clinit_Style$Display() , 'none') , !!el.layer && $hideUnders(el.layer)):(el.style['visibility'] = ($clinit_Style$Visibility() , 'hidden') , undefined) , el));
  $insertBefore(pn, this$static.shadow, this$static.elem);
  $setZIndex(this$static.shadow, $getZIndex(this$static.elem) - 1);
  return this$static.shadow;
}

function $getShim(this$static){
  var pn, shimElement;
  pn = $getParentElement(this$static.elem);
  if (!pn || !this$static.shimEnabled) {
    $hideShim(this$static);
    return null;
  }
  if (this$static.shim) {
    return this$static.shim;
  }
  this$static.shim = shims.arrayList.size_0 > 0?dynamicCastJso($pop(shims)):null;
  !this$static.shim && (this$static.shim = (shimElement = ($clinit_XDOM() , create_3($template((!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBKK')).html)) , ($clinit_GXT() , false) && isSecure && (shimElement['src'] = sslSecureUrl , undefined) , shimElement));
  $insertBefore(pn, this$static.shim, this$static.elem);
  this$static.shim.style['zIndex'] = $getZIndex(this$static.elem) - 2 + '';
  return this$static.shim;
}

function $hideShadow(this$static){
  if (this$static.shadow) {
    $hide_0(this$static.shadow);
    $removeFromParent_0(this$static.shadow);
    $add_17(shadows, this$static.shadow);
    this$static.shadow = null;
  }
}

function $hideShim(this$static){
  if (this$static.shim) {
    $hide_0(this$static.shim);
    $removeFromParent_0(this$static.shim);
    $add_17(shims, this$static.shim);
    this$static.shim = null;
  }
}

function $hideUnders(this$static){
  $hideShadow(this$static);
  $hideShim(this$static);
}

function $setShadowPosition(this$static){
  this$static.shadowAdjusts = new Rectangle_0;
  switch (2) {
    case 2:
      this$static.shadowAdjusts.width_0 = 8;
      this$static.shadowAdjusts.x = -4;
      this$static.shadowAdjusts.y = 3;
      {
        $clinit_GXT();
      }

  }
}

function $sync_0(this$static, show){
  var $e0, a, h_0, height, l_0, sh, sw, t, w, width;
  if ($isVisible_0(this$static.elem, false) && (this$static.shadowEnabled || this$static.shimEnabled)) {
    w = this$static.elem.offsetWidth || 0;
    h_0 = this$static.elem.offsetHeight || 0;
    l_0 = parseInt_0(this$static.elem.style['left'], 0);
    t = parseInt_0(this$static.elem.style['top'], 0);
    if (this$static.shadowEnabled && !!$getParentElement(this$static.elem)) {
      !this$static.shadow && (this$static.shadow = $getShadow(this$static));
      if (show) {
        $show_0(this$static.shadow);
        this$static.shadow.style['display'] = ($clinit_Style$Display() , 'block');
      }
      $setLeft(this$static.shadow, l_0 + this$static.shadowAdjusts.x);
      $setTop(this$static.shadow, t + this$static.shadowAdjusts.y);
      sw = w + this$static.shadowAdjusts.width_0;
      sh = h_0 + this$static.shadowAdjusts.height_0;
      if ((this$static.shadow.offsetWidth || 0) != sw || (this$static.shadow.offsetHeight || 0) != sh) {
        $setSize_1(this$static.shadow, sw, sh, false);
        $clinit_GXT();
        width = 0 > sw - 12?0:sw - 12;
        $setWidth_0($getChildNodes(this$static.shadow.childNodes[0])[1], width, false);
        $setWidth_0($getChildNodes(this$static.shadow.childNodes[1])[1], width, false);
        $setWidth_0($getChildNodes(this$static.shadow.childNodes[2])[1], width, false);
        height = 0 > sh - 12?0:sh - 12;
        $setHeight_0(this$static.shadow.childNodes[1], height, false);
      }
    }
    if (this$static.shimEnabled) {
      if (show) {
        !this$static.shim && (this$static.shim = $getShim(this$static));
        $show_0(this$static.shim);
      }
       else {
        if (!this$static.shim) {
          return;
        }
      }
      a = !this$static.shadow?new Rectangle_1(0, 0, 0, 0):this$static.shadowAdjusts;
      if (($clinit_GXT() , false) && !!this$static.shadow && $isVisible_0(this$static.shadow, false)) {
        w += 8;
        l_0 -= 4;
        t -= 4;
        h_0 += 8;
      }
      try {
        $setLeft(this$static.shim, l_0 + a.x);
        $setTop(this$static.shim, t + a.y);
        $setWidth_0(this$static.shim, w + a.width_0, false);
        $setHeight_0(this$static.shim, h_0 + a.height_0, false);
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (!instanceOf($e0, Q$Exception))
          throw $e0;
      }
    }
  }
}

function Layer_0(elem){
  $clinit_Layer();
  Layer_1.call(this, elem, new Layer$LayerBaseAppearance_0);
}

function Layer_1(elem){
  this.elem = elem;
  elem.layer = this;
  $setShadowPosition(this);
}

defineSeed(535, 1, {}, Layer_0);
_.elem = null;
_.shadow = null;
_.shadowAdjusts = null;
_.shadowEnabled = false;
_.shim = null;
_.shimEnabled = false;
var shadows, shims;
function Layer$LayerBaseAppearance_0(){
  this.style_0 = ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$styleInitializer() , style_0);
  $ensureInjected_0(this.style_0);
}

defineSeed(536, 1, {}, Layer$LayerBaseAppearance_0);
_.style_0 = null;
var bottomCenter = null, bottomLeft = null, bottomRight = null, middleCenter = null, middleLeft = null, middleRight = null, style_0 = null, topCenter = null, topLeft = null, topRight = null;
function $ensureInjected_0(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    inject('.GN1NA3IBFJ{position:absolute;visibility:hidden;left:0;top:0;overflow:hidden;}.GN1NA3IBDJ{position:absolute;}.GN1NA3IBDJ *{overflow:hidden;padding:0;border:0;margin:0;clear:none;}.GN1NA3IBHJ,.GN1NA3IBMI{height:6px;float:left;}.GN1NA3IBIJ,.GN1NA3IBJJ,.GN1NA3IBNI,.GN1NA3IBOI{width:6px;height:6px;float:left;}.GN1NA3IBPI{width:100%;}.GN1NA3IBBJ,.GN1NA3IBCJ{width:6px;float:left;height:100%;}.GN1NA3IBAJ{float:left;height:100%;background:transparent;}.GN1NA3IBGJ,.GN1NA3IBLI{height:6px;overflow:hidden;width:100%;}.GN1NA3IBIJ{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topLeftInitializer() , topLeft.height_0) + 'px;width:' + topLeft.width_0 + 'px;overflow:hidden;background:url("' + topLeft.url.uri + '") -' + topLeft.left_0 + 'px -' + topLeft.top_0 + 'px  no-repeat;}.GN1NA3IBHJ{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topCenterInitializer() , topCenter.height_0) + 'px;overflow:hidden;background:url("' + topCenter.url.uri + '") -' + topCenter.left_0 + 'px -' + topCenter.top_0 + 'px  repeat-x;}.GN1NA3IBJJ{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topRightInitializer() , topRight.height_0) + 'px;width:' + topRight.width_0 + 'px;overflow:hidden;background:url("' + topRight.url.uri + '") -' + topRight.left_0 + 'px -' + topRight.top_0 + 'px  no-repeat;}.GN1NA3IBBJ{width:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleLeftInitializer() , middleLeft.width_0) + 'px;overflow:hidden;background:url("' + middleLeft.url.uri + '") -' + middleLeft.left_0 + 'px -' + middleLeft.top_0 + 'px  repeat-y;}.GN1NA3IBAJ{overflow:hidden;background:url("' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleCenterInitializer() , middleCenter.url.uri) + '") -' + middleCenter.left_0 + 'px -' + middleCenter.top_0 + 'px  repeat;}.GN1NA3IBCJ{width:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleRightInitializer() , middleRight.width_0) + 'px;overflow:hidden;background:url("' + middleRight.url.uri + '") -' + middleRight.left_0 + 'px -' + middleRight.top_0 + 'px  repeat-y;}.GN1NA3IBNI{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomLeftInitializer() , bottomLeft.height_0) + 'px;width:' + bottomLeft.width_0 + 'px;overflow:hidden;background:url("' + bottomLeft.url.uri + '") -' + bottomLeft.left_0 + 'px -' + bottomLeft.top_0 + 'px  no-repeat;}.GN1NA3IBMI{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomCenterInitializer() , bottomCenter.height_0) + 'px;overflow:hidden;background:url("' + bottomCenter.url.uri + '") -' + bottomCenter.left_0 + 'px -' + bottomCenter.top_0 + 'px  repeat-x;}.GN1NA3IBOI{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomRightInitializer() , bottomRight.height_0) + 'px;overflow:hidden;background:url("' + bottomRight.url.uri + '") -' + bottomRight.left_0 + 'px -' + bottomRight.top_0 + 'px  repeat-x;}');
    return true;
  }
  return false;
}

function Layer_LayerResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(538, 1, {}, Layer_LayerResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_0(){
  return '.GN1NA3IBFJ{position:absolute;visibility:hidden;left:0;top:0;overflow:hidden;}.GN1NA3IBDJ{position:absolute;}.GN1NA3IBDJ *{overflow:hidden;padding:0;border:0;margin:0;clear:none;}.GN1NA3IBHJ,.GN1NA3IBMI{height:6px;float:left;}.GN1NA3IBIJ,.GN1NA3IBJJ,.GN1NA3IBNI,.GN1NA3IBOI{width:6px;height:6px;float:left;}.GN1NA3IBPI{width:100%;}.GN1NA3IBBJ,.GN1NA3IBCJ{width:6px;float:left;height:100%;}.GN1NA3IBAJ{float:left;height:100%;background:transparent;}.GN1NA3IBGJ,.GN1NA3IBLI{height:6px;overflow:hidden;width:100%;}.GN1NA3IBIJ{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topLeftInitializer() , topLeft.height_0) + 'px;width:' + topLeft.width_0 + 'px;overflow:hidden;background:url("' + topLeft.url.uri + '") -' + topLeft.left_0 + 'px -' + topLeft.top_0 + 'px  no-repeat;}.GN1NA3IBHJ{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topCenterInitializer() , topCenter.height_0) + 'px;overflow:hidden;background:url("' + topCenter.url.uri + '") -' + topCenter.left_0 + 'px -' + topCenter.top_0 + 'px  repeat-x;}.GN1NA3IBJJ{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topRightInitializer() , topRight.height_0) + 'px;width:' + topRight.width_0 + 'px;overflow:hidden;background:url("' + topRight.url.uri + '") -' + topRight.left_0 + 'px -' + topRight.top_0 + 'px  no-repeat;}.GN1NA3IBBJ{width:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleLeftInitializer() , middleLeft.width_0) + 'px;overflow:hidden;background:url("' + middleLeft.url.uri + '") -' + middleLeft.left_0 + 'px -' + middleLeft.top_0 + 'px  repeat-y;}.GN1NA3IBAJ{overflow:hidden;background:url("' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleCenterInitializer() , middleCenter.url.uri) + '") -' + middleCenter.left_0 + 'px -' + middleCenter.top_0 + 'px  repeat;}.GN1NA3IBCJ{width:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleRightInitializer() , middleRight.width_0) + 'px;overflow:hidden;background:url("' + middleRight.url.uri + '") -' + middleRight.left_0 + 'px -' + middleRight.top_0 + 'px  repeat-y;}.GN1NA3IBNI{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomLeftInitializer() , bottomLeft.height_0) + 'px;width:' + bottomLeft.width_0 + 'px;overflow:hidden;background:url("' + bottomLeft.url.uri + '") -' + bottomLeft.left_0 + 'px -' + bottomLeft.top_0 + 'px  no-repeat;}.GN1NA3IBMI{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomCenterInitializer() , bottomCenter.height_0) + 'px;overflow:hidden;background:url("' + bottomCenter.url.uri + '") -' + bottomCenter.left_0 + 'px -' + bottomCenter.top_0 + 'px  repeat-x;}.GN1NA3IBOI{height:' + ($clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomRightInitializer() , bottomRight.height_0) + 'px;overflow:hidden;background:url("' + bottomRight.url.uri + '") -' + bottomRight.left_0 + 'px -' + bottomRight.top_0 + 'px  repeat-x;}';
}
;
_.injected = false;
function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomCenterInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomCenterInitializer = nullMethod;
  bottomCenter = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAGCAYAAAACEPQxAAAAG0lEQVR42mNgYGBwAGIGaxBhDCI0QIQ0iBAAABEPAQJ7KcsKAAAAAElFTkSuQmCC')), 1, 6);
}

function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomLeftInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomLeftInitializer = nullMethod;
  bottomLeft = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAT0lEQVR42i3MOwqAQBRD0eCfUUaLAbWxEewsBAv3vzLvgxSnuiSSNGDGjgsPPqhHxooTN94IHSYUHF5FVIuEBZtjLFV7NToW36pC45h8m38D0QL+NSmvrgAAAABJRU5ErkJggg==')), 6, 6);
}

function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomRightInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$bottomRightInitializer = nullMethod;
  bottomRight = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAUElEQVR42i3MOwqAQBAE0cY/uqjBwmpiIpgZCAbe/2TWQAcvKXpGkj48uLBjwQC9uHGiYEYvx1gfyEjo5GXEDStGtPJ5dpy8ruWfycuIDaofGgUC/hVWAkoAAAAASUVORK5CYII=')), 6, 6);
}

function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleCenterInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleCenterInitializer = nullMethod;
  middleCenter = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNgYGCwAAAAPQA50xFYowAAAABJRU5ErkJggg==')), 1, 1);
}

function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleLeftInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleLeftInitializer = nullMethod;
  middleLeft = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAAGUlEQVR42mNgYGDgAGIBIJYGYg0gNgZiawAF0gDK5idT3wAAAABJRU5ErkJggg==')), 6, 1);
}

function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleRightInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$middleRightInitializer = nullMethod;
  middleRight = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAAGUlEQVR42mNgYGCwBmJjINYAYmkgFgBiDgALpgDKpiH/eAAAAABJRU5ErkJggg==')), 6, 1);
}

function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_0 = new Layer_LayerResources_default_InlineClientBundleGenerator$1_0;
}

function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topCenterInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topCenterInitializer = nullMethod;
  topCenter = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAGCAYAAAACEPQxAAAAG0lEQVR42mNgYGAQAGIGaRChASKMQYQ1iHAAAApIAQIi1iveAAAAAElFTkSuQmCC')), 1, 6);
}

function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topLeftInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topLeftInitializer = nullMethod;
  topLeft = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAUklEQVR42i3MOwqAQBAE0cE/uqiBsGtiIpgZCAbe/2RWQwcv6SkmIqJCgw4jEmZE7XHCig1Zh9alxoIDZ7hOLjVeuHXo/TO71PjqMGDB7vrB9wOefQL+mU9GkwAAAABJRU5ErkJggg==')), 6, 6);
}

function $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topRightInitializer(){
  $clinit_Layer_LayerResources_default_InlineClientBundleGenerator$topRightInitializer = nullMethod;
  topRight = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAUklEQVR42i3NOwqAQBAE0cE/KmqwsJqYLJgZCAbe/2RWQwcvKnomImLBjBEdGlSIjIQNk2OtUHBid9SyVbhxOSaf1Spex+Kz+tkrfHi8OrBi+AG0sQL+2OFZNQAAAABJRU5ErkJggg==')), 6, 6);
}

function $shadow(ignoreClass){
  var outer, sb;
  outer = (sb = new StringBuilder_0 , sb.impl.string += '<div class="' , $append_10(sb, htmlEscape('GN1NA3IBDJ')) , sb.impl.string += ' ' , $append_10(sb, htmlEscape(ignoreClass)) , sb.impl.string += '"><div class="' , $append_10(sb, htmlEscape('GN1NA3IBGJ')) , sb.impl.string += '"><div class="' , $append_10(sb, htmlEscape('GN1NA3IBIJ')) , sb.impl.string += '"><\/div><div class="' , $append_10(sb, htmlEscape('GN1NA3IBHJ')) , sb.impl.string += '"><\/div><div class="' , $append_10(sb, htmlEscape('GN1NA3IBJJ')) , sb.impl.string += '"><\/div><\/div><div class="' , $append_10(sb, htmlEscape('GN1NA3IBPI')) , sb.impl.string += '"><div class="' , $append_10(sb, htmlEscape('GN1NA3IBBJ')) , sb.impl.string += '"><\/div><div class="' , $append_10(sb, htmlEscape('GN1NA3IBAJ')) , sb.impl.string += '"><\/div><div class="' , $append_10(sb, htmlEscape('GN1NA3IBCJ')) , sb.impl.string += '"><\/div><\/div><div class="' , $append_10(sb, htmlEscape('GN1NA3IBLI')) , sb.impl.string += '"><div class="' , $append_10(sb, htmlEscape('GN1NA3IBNI')) , sb.impl.string += '"><\/div><div class="' , $append_10(sb, htmlEscape('GN1NA3IBMI')) , sb.impl.string += '"><\/div><div class="' , $append_10(sb, htmlEscape('GN1NA3IBOI')) , sb.impl.string += '"><\/div><\/div><\/div>\n' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string));
  return outer;
}

function $template(ignoreClass){
  var outer, sb;
  outer = (sb = new StringBuilder_0 , sb.impl.string += '<iframe frameborder="no" frameBorder="no" class="' , $append_10(sb, htmlEscape('GN1NA3IBFJ')) , sb.impl.string += ' ' , $append_10(sb, htmlEscape(ignoreClass)) , sb.impl.string += '" tabIndex="-1" style="visibility:hidden;display:none" role="presentation"><\/iframe>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string));
  return outer;
}

function $clinit_Mask(){
  $clinit_Mask = nullMethod;
  new Mask_0;
}

function $maskInternal(parent_0, message){
  $addClassName(parent_0, 'GN1NA3IBPJ');
  $equals_3('static', parent_0.style['position']) && $addClassName(parent_0, 'GN1NA3IBAK');
  $mask_0(parent_0, message);
}

function $unmaskInternal(parent_0){
  var mask, box;
  $removeClassName(parent_0, 'GN1NA3IBPJ');
  mask = $selectNode(parent_0, '> .GN1NA3IBOJ');
  !!mask && $removeFromParent_0(mask);
  box = $selectNode(parent_0, '> .GN1NA3IBNJ');
  !!box && $removeFromParent_0(box);
}

function Mask_0(){
  new Mask$MaskDefaultAppearance_0;
}

defineSeed(553, 1, {}, Mask_0);
function $mask_0(parent_0, message){
  var box, mask;
  mask = $doc.createElement('div');
  mask.className = 'GN1NA3IBOJ';
  parent_0.appendChild(mask);
  box = null;
  if (message != null) {
    box = ($clinit_XDOM() , create_3($template_0(htmlEscape(message)).html));
    parent_0.appendChild(box);
  }
  ($clinit_GXT() , false) && $equals_3('auto', parent_0.style['height']) && $setSize_1(mask, parent_0.offsetWidth || 0, parent_0.offsetHeight || 0, false);
  if (box) {
    box.style['zIndex'] = ($clinit_XDOM() , $clinit_XDOM() , ++zIndexId) + '';
    $center(box, parent_0);
  }
}

function Mask$MaskDefaultAppearance_0(){
  if (!injected) {
    inject_0('.GN1NA3IBOJ{z-index:100;top:0;left:0;width:100%;height:100%;zoom:1;position:absolute;opacity:0.5;background-color:#ccc;}.GN1NA3IBNJ{z-index:101;position:absolute;top:0;left:0;border:1px solid;padding:2px;height:' + ($clinit_Mask_MaskDefaultAppearance_MaskResources_opera_default_InlineClientBundleGenerator$boxBackgroundInitializer() , boxBackground.height_0) + 'px;overflow:hidden;background:url("' + boxBackground.url.uri + '") -' + boxBackground.left_0 + 'px -' + boxBackground.top_0 + 'px  repeat-x;border-color:#6593cf;background-color:#c3daf9;}.GN1NA3IBBK{padding:5px 10px 5px 10px;border:1px solid;cursor:wait;background-color:white;border-color:#a3bad9;color:#222;font:normal 11px tahoma, arial, helvetica, sans-serif;}.GN1NA3IBAK{position:relative !important;}.GN1NA3IBPJ{overflow:hidden !important;}.GN1NA3IBPJ select,.GN1NA3IBPJ object,.GN1NA3IBPJ embed{visibility:hidden;}', true);
    injected = true;
  }
}

defineSeed(554, 1, {}, Mask$MaskDefaultAppearance_0);
var injected = false;
var boxBackground = null;
function $clinit_Mask_MaskDefaultAppearance_MaskResources_opera_default_InlineClientBundleGenerator$boxBackgroundInitializer(){
  $clinit_Mask_MaskDefaultAppearance_MaskResources_opera_default_InlineClientBundleGenerator$boxBackgroundInitializer = nullMethod;
  boxBackground = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAVklEQVR42mN4/O7Pf4a7r/7+Z7jxHMi69BhInL73G5k4fPMPlNh16TeU2Hzu13+GSTu+QYnpu3/8Z5i19zuUmH8AyF18GIVYefznf4a1J39BCbABIAIAZ1Fan/xRgxAAAAAASUVORK5CYII=')), 1, 26);
}

function $template_0(message){
  var outer, sb;
  outer = (sb = new StringBuilder_0 , sb.impl.string += '<div class="' , $append_10(sb, htmlEscape('GN1NA3IBNJ')) , sb.impl.string += '"><div class="' , $append_10(sb, htmlEscape('GN1NA3IBBK')) , sb.impl.string += '">' , $append_10(sb, htmlEscape(message)) , sb.impl.string += '<\/div><\/div>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string));
  return outer;
}

function $clinit_XDOM(){
  $clinit_XDOM = nullMethod;
  EMPTY_SAFE_STYLE = new SafeStylesString_0('');
}

function create_3(html){
  $clinit_XDOM();
  var div, firstChild;
  div = $doc.createElement('div');
  $setInnerHTML(div, html);
  firstChild = $getFirstChildElement(div);
  !!firstChild && $removeFromParent_0(firstChild);
  return firstChild?firstChild:div;
}

function getBodyScrollLeft(){
  $clinit_XDOM();
  return $doc.documentElement.scrollLeft || $doc.body.scrollLeft || 0;
}

function getBodyScrollTop(){
  $clinit_XDOM();
  return $doc.documentElement.scrollTop || $doc.body.scrollTop || 0;
}

function getScrollBarWidthInternal(){
  $clinit_XDOM();
  var scr = null;
  var inn = null;
  var wNoScroll = 0;
  var wScroll = 0;
  scr = $doc.createElement('div');
  scr.style.position = 'absolute';
  scr.style.top = '-1000px';
  scr.style.left = '-1000px';
  scr.style.width = '100px';
  scr.style.height = '50px';
  scr.style.overflow = 'hidden';
  inn = $doc.createElement('div');
  inn.style.height = '200px';
  scr.appendChild(inn);
  $doc.body.appendChild(scr);
  wNoScroll = inn.offsetWidth;
  scr.style.overflow = 'auto';
  inn.clientWidth != 'undefined'?(wScroll = inn.clientWidth):(wScroll = inn.offsetWidth);
  $doc.body.removeChild($doc.body.lastChild);
  return wNoScroll - wScroll;
}

function getViewportHeight(){
  $clinit_XDOM();
  if (isIE_0()) {
    return $doc.documentElement.clientHeight;
  }
   else {
    return $wnd.self.innerHeight;
  }
}

function getViewportWidth(){
  $clinit_XDOM();
  if (isIE_0()) {
    return $doc.documentElement.clientWidth;
  }
   else {
    return $wnd.self.innerWidth;
  }
}

var EMPTY_SAFE_STYLE, scrollBarWidth = -1, zIndexId = 1000;
function $addClassName_0(this$static, classNames){
  var styleName, styleName$index, styleName$max;
  if (classNames != null) {
    for (styleName$index = 0 , styleName$max = classNames.length; styleName$index < styleName$max; ++styleName$index) {
      styleName = classNames[styleName$index];
      if (styleName != null && !$hasClassName(this$static, styleName)) {
        styleName = $trim(styleName);
        $setClassName(this$static, this$static.className + ' ' + styleName);
      }
    }
  }
}

function $addEventsSunk(this$static, event_0){
  var bits;
  bits = this$static.__eventBits || 0;
  $maybeInitializeEventSystem();
  $sinkEventsImpl(this$static, bits | event_0);
}

function $adjustForConstraints(this$static, p){
  return $getConstrainToXY(this$static, $doc.body, p);
}

function $alignTo(this$static, elem, alignment, offsets){
  var p;
  offsets == null && (offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 0]));
  p = $getAlignToXY_0(this$static, elem, alignment, offsets);
  $setXY(this$static, p);
}

function $applyStyles(this$static, styles){
  var re = /\s?([a-z\-]*)\:\s?([^;]*);?/gi;
  var matches;
  while ((matches = re.exec(styles)) != null) {
    this$static.style[matches[1]] = matches[2];
  }
}

function $center(this$static, container){
  !container && (container = $doc.body);
  $alignTo(this$static, container, new Style$AnchorAlignment_1(($clinit_Style$Anchor() , CENTER_1), CENTER_1, false), null);
}

function $disableTextSelection(this$static, disable){
  $setClassName_0(this$static, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBCL'), disable);
  this$static['unselectable'] = disable?'on':'';
  disableTextSelectInternal(this$static, disable);
}

function $ensureVisible(this$static){
  var body, hasxhideoffset, hideDisplay, list, m_0, p;
  list = new ArrayList_0;
  p = this$static;
  body = $doc.body;
  while (!!p && p != body) {
    if ($isStyleAttribute(p)) {
      m_0 = new FastMap_0;
      $put_4(m_0.map, 'element', p);
      $put_3(m_0, 'origd', p.style['display']);
      hasxhideoffset = $hasClassName(p, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBIK'));
      $put_3(m_0, 'hasxhideoffset', ($clinit_Boolean() , hasxhideoffset?TRUE:FALSE));
      hasxhideoffset || $addClassName(p, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBIK'));
      hideDisplay = $hasClassName(p, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBHK'));
      if (hideDisplay) {
        $put_3(m_0, 'hasxhidedisplay', TRUE);
        $removeClassName(p, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBHK'));
      }
      p.style['display'] = 'block';
      setCheck(list.array, list.size_0++, m_0);
    }
    p = $getParentElement(p);
  }
  return list.size_0 > 0?list:null;
}

function $findParent(this$static, selector, maxDepth){
  var elem;
  elem = $findParentElement(this$static, selector, maxDepth);
  if (!elem) {
    return null;
  }
  return elem;
}

function $findParentElement(this$static, selector, maxDepth){
  var b, depth, p;
  p = this$static;
  b = $doc.body;
  depth = 0;
  while (!!p && p.nodeType == 1 && (maxDepth == -1 || depth < maxDepth) && p != b) {
    if (is_3(p, selector)) {
      return p;
    }
    ++depth;
    p = $getParentElement(p);
  }
  return null;
}

function $getAlignToXY(this$static, elem, alignment, ox, oy){
  var a1, a2, constrainViewport, dh, dw, el, h_0, p1, p1x, p1y, p2, p2x, p2y, r, scrollX, scrollY, swapX, swapY, w, x, y;
  el = elem;
  constrainViewport = alignment.constrainViewport;
  p1 = !alignment.align?'tl':alignment.align.value_0;
  p2 = !alignment.targetAlign?'bl':alignment.targetAlign.value_0;
  a1 = $getAnchorXY(this$static, alignment.align, true);
  a2 = $getAnchorXY(el, alignment.targetAlign, false);
  x = a2.x - a1.x + ox;
  y = a2.y - a1.y + oy;
  if (constrainViewport) {
    w = this$static.offsetWidth || 0;
    h_0 = this$static.offsetHeight || 0;
    r = $getRegion(el);
    dw = ($clinit_XDOM() , getViewportWidth()) - 10;
    dh = getViewportHeight() - 10;
    p1y = p1.charCodeAt(0);
    p1x = $charAt(p1, p1.length - 1);
    p2y = p2.charCodeAt(0);
    p2x = $charAt(p2, p2.length - 1);
    swapY = p1y == 116 && p2y == 98 || p1y == 98 && p2y == 116;
    swapX = p1x == 114 && p2x == 108 || p1x == 108 && p2x == 114;
    scrollX = getBodyScrollLeft();
    scrollX > 0 && (scrollX += 5);
    scrollY = getBodyScrollTop();
    scrollY > 0 && (scrollY += 5);
    x + w > dw + scrollX && (x = swapX?r.left_0 - w:dw + scrollX - w);
    x < scrollX && (x = swapX?r.right:scrollX);
    y + h_0 > dh + scrollY && (y = swapY?r.top_0 - h_0:dh + scrollY - h_0);
    y < scrollY && (y = swapY?r.bottom:scrollY);
  }
  return new Point_0(x, y);
}

function $getAlignToXY_0(this$static, elem, alignment, offsets){
  offsets == null && (offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 0]));
  return $getAlignToXY(this$static, elem, alignment, offsets[0], offsets[1]);
}

function $getAnchorXY(this$static, anchor, local){
  var h_0, o, sc, vp, w, x, y;
  if (!anchor) {
    return null;
  }
  vp = false;
  if (this$static == $doc.body || this$static == $doc.documentElement) {
    vp = true;
    w = ($clinit_XDOM() , getViewportWidth());
    h_0 = getViewportHeight();
  }
   else {
    w = this$static.offsetWidth || 0;
    h_0 = this$static.offsetHeight || 0;
  }
  x = 0;
  y = 0;
  switch (anchor.ordinal) {
    case 8:
      x = toInt(fromDouble(Math.round(w * 0.5)));
      y = toInt(fromDouble(Math.round(h_0 * 0.5)));
      break;
    case 0:
      x = toInt(fromDouble(Math.round(w * 0.5)));
      y = 0;
      break;
    case 6:
      x = 0;
      y = toInt(fromDouble(Math.round(h_0 * 0.5)));
      break;
    case 2:
      x = w;
      y = toInt(fromDouble(Math.round(h_0 * 0.5)));
      break;
    case 4:
      x = toInt(fromDouble(Math.round(w * 0.5)));
      y = h_0;
      break;
    case 7:
      x = 0;
      y = 0;
      break;
    case 5:
      x = 0;
      y = h_0;
      break;
    case 3:
      x = w;
      y = h_0;
      break;
    case 1:
      x = w;
      y = 0;
  }
  if (local) {
    return new Point_0(x, y);
  }
  if (vp) {
    sc = this$static == $doc.body || this$static == $doc.documentElement?new Scroll_0(getBodyScrollLeft(), getBodyScrollTop()):new Scroll_0(this$static.scrollLeft || 0, this$static.scrollTop || 0);
    return new Point_0(x + sc.scrollLeft_0, y + sc.scrollTop_0);
  }
  o = new Point_0($getAbsoluteLeft(this$static), $getAbsoluteTop(this$static));
  return new Point_0(x + o.x, y + o.y);
}

function $getBounds(this$static, local){
  var p, rect, s;
  s = $getSize(this$static, false);
  rect = new Rectangle_0;
  $setWidth_2(rect, s.width_0);
  $setHeight_2(rect, s.height_0);
  if (local) {
    $setX_0(rect, parseInt_0(this$static.style['left'], 0));
    $setY_0(rect, parseInt_0(this$static.style['top'], 0));
  }
   else {
    p = new Point_0($getAbsoluteLeft(this$static), $getAbsoluteTop(this$static));
    $setX_0(rect, p.x);
    $setY_0(rect, p.y);
  }
  return rect;
}

function $getComputedHeight(this$static){
  var h_0;
  h_0 = this$static.offsetHeight || 0;
  h_0 == 0 && (h_0 = $getStyleSize(this$static, true).height_0);
  return h_0;
}

function $getComputedStyle(this$static, props){
  return $getStyleAttribute(($clinit_XElement$FieldHolder() , computedStyle), this$static, props);
}

function $getComputedWidth(this$static){
  var w;
  w = this$static.offsetWidth || 0;
  w == 0 && (w = $getStyleSize(this$static, true).width_0);
  return w;
}

function $getConstrainToXY(this$static, elem, proposedXY){
  var h_0, vh, vw, w, x, y;
  if (elem == $doc.body) {
    vw = ($clinit_XDOM() , new Size_0(getViewportWidth(), getViewportHeight())).width_0;
    vh = (new Size_0(getViewportWidth(), getViewportHeight())).height_0;
  }
   else {
    vw = elem.offsetWidth || 0;
    vh = elem.offsetHeight || 0;
  }
  x = proposedXY.x;
  y = proposedXY.y;
  w = this$static.offsetWidth || 0;
  h_0 = this$static.offsetHeight || 0;
  x + w > vw && (x = vw - w);
  y + h_0 > vh && (y = vh - h_0);
  x < 0 && (x = 0);
  y < 0 && (y = 0);
  return new Point_0(x, y);
}

function $getFrameSize(this$static){
  var height, list, map, s, s$iterator, width;
  width = 0;
  height = 0;
  list = new ArrayList_0;
  setCheck(list.array, list.size_0++, 'paddingLeft');
  setCheck(list.array, list.size_0++, 'borderLeftWidth');
  setCheck(list.array, list.size_0++, 'paddingRight');
  setCheck(list.array, list.size_0++, 'borderRightWidth');
  setCheck(list.array, list.size_0++, 'paddingTop');
  setCheck(list.array, list.size_0++, 'borderTopWidth');
  setCheck(list.array, list.size_0++, 'paddingBottom');
  setCheck(list.array, list.size_0++, 'borderBottomWidth');
  map = $getStyleAttribute(($clinit_XElement$FieldHolder() , computedStyle), this$static, list);
  for (s$iterator = $keySet_0((new FastMap$2_0(map)).this$0.map).iterator(); s$iterator.hasNext();) {
    s = dynamicCast(s$iterator.next_0(), Q$String);
    (this$static.leftRightTest == null && (this$static.leftRightTest = new RegExp('Left|Right')) , this$static.leftRightTest.test(s))?(width += parseInt_0(dynamicCast(map.map['' + s], Q$String), 0)):(height += parseInt_0(dynamicCast(map.map['' + s], Q$String), 0));
  }
  return new Size_0(width, height);
}

function $getFrameWidth(this$static, side){
  var frameWidth, list, map, s, s$index, s$iterator, s$max;
  frameWidth = 0;
  list = new ArrayList_0;
  for (s$index = 0 , s$max = side.length; s$index < s$max; ++s$index) {
    s = side[s$index];
    switch (s.ordinal) {
      case 0:
        setCheck(list.array, list.size_0++, 'paddingLeft');
        setCheck(list.array, list.size_0++, 'borderLeftWidth');
        break;
      case 1:
        setCheck(list.array, list.size_0++, 'paddingRight');
        setCheck(list.array, list.size_0++, 'borderRightWidth');
        break;
      case 2:
        setCheck(list.array, list.size_0++, 'paddingTop');
        setCheck(list.array, list.size_0++, 'borderTopWidth');
        break;
      case 3:
        setCheck(list.array, list.size_0++, 'paddingBottom');
        setCheck(list.array, list.size_0++, 'borderBottomWidth');
    }
  }
  map = $getStyleAttribute(($clinit_XElement$FieldHolder() , computedStyle), this$static, list);
  for (s$iterator = $keySet_0((new FastMap$2_0(map)).this$0.map).iterator(); s$iterator.hasNext();) {
    s = dynamicCast(s$iterator.next_0(), Q$String);
    frameWidth += parseInt_0(dynamicCast(map.map['' + s], Q$String), 0);
  }
  return frameWidth;
}

function $getHeight(this$static, content_0){
  var h_0;
  h_0 = this$static.offsetHeight || 0;
  content_0 && (h_0 -= $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , TOP_0), BOTTOM_0])));
  return 0 > h_0?0:h_0;
}

function $getPadding(this$static, sides){
  var list, map, padding, s, s$iterator, side, side$index, side$max;
  padding = 0;
  list = new ArrayList_0;
  for (side$index = 0 , side$max = sides.length; side$index < side$max; ++side$index) {
    side = sides[side$index];
    switch (side.ordinal) {
      case 0:
        setCheck(list.array, list.size_0++, 'paddingLeft');
        break;
      case 1:
        setCheck(list.array, list.size_0++, 'paddingRight');
        break;
      case 2:
        setCheck(list.array, list.size_0++, 'paddingTop');
        break;
      case 3:
        setCheck(list.array, list.size_0++, 'paddingBottom');
    }
  }
  map = $getStyleAttribute(($clinit_XElement$FieldHolder() , computedStyle), this$static, list);
  for (s$iterator = $keySet_0((new FastMap$2_0(map)).this$0.map).iterator(); s$iterator.hasNext();) {
    s = dynamicCast(s$iterator.next_0(), Q$String);
    padding += parseInt_0(dynamicCast(map.map['' + s], Q$String), 0);
  }
  return padding;
}

function $getPosition(this$static, local){
  if (local) {
    return new Point_0(parseInt_0(this$static.style['left'], 0), parseInt_0(this$static.style['top'], 0));
  }
  return new Point_0($getAbsoluteLeft(this$static), $getAbsoluteTop(this$static));
}

function $getRegion(this$static){
  var bounds, r;
  bounds = $getBounds(this$static, false);
  r = new Region_0;
  $setLeft_0(r, bounds.x);
  $setTop_0(r, bounds.y);
  $setRight(r, r.left_0 + bounds.width_0);
  $setBottom(r, r.top_0 + bounds.height_0);
  return r;
}

function $getSize(this$static, content_0){
  var frameWidth, h_0, w;
  w = this$static.offsetWidth || 0;
  h_0 = this$static.offsetHeight || 0;
  if (content_0) {
    frameWidth = $getFrameSize(this$static);
    w -= frameWidth.width_0;
    h_0 -= frameWidth.height_0;
  }
  return new Size_0(0 > w?0:w, 0 > h_0?0:h_0);
}

function $getStyleSize(this$static, contentOnly){
  var h_0, hei, l_0, map, offsetHeight, offsetWidth, s, w, wid;
  h_0 = parseInt_0(this$static.style['height'], -1);
  w = parseInt_0(this$static.style['width'], -1);
  !contentOnly && w != -1 && (w += $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , LEFT_3), RIGHT_3])));
  !contentOnly && h_0 != -1 && (h_0 += $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , TOP_0), BOTTOM_0])));
  offsetWidth = -1;
  offsetHeight = -1;
  if (w == -1 && h_0 == -1) {
    s = $getSize(this$static, contentOnly);
    offsetWidth = s.width_0;
    offsetHeight = s.height_0;
    s.width_0 > 0 && (w = s.width_0);
    s.height_0 > 0 && (h_0 = s.height_0);
  }
   else if (w == -1) {
    offsetWidth = $getWidth(this$static, contentOnly);
    offsetWidth > 0 && (w = offsetWidth);
  }
   else if (h_0 == -1) {
    offsetHeight = $getHeight(this$static, contentOnly);
    offsetHeight > 0 && (h_0 = offsetHeight);
  }
  l_0 = new ArrayList_0;
  w == -1 && (setCheck(l_0.array, l_0.size_0++, 'width') , true);
  h_0 == -1 && (setCheck(l_0.array, l_0.size_0++, 'height') , true);
  map = $getStyleAttribute(($clinit_XElement$FieldHolder() , computedStyle), this$static, l_0);
  if (map) {
    wid = dynamicCast(map.map['width'], Q$String);
    if (wid != null) {
      w = parseInt_0(wid, -1);
      ($clinit_GXT() , false) && false?(w -= $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , LEFT_3), RIGHT_3]))):offsetWidth == 0 && !contentOnly && w != -1 && (w += $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , LEFT_3), RIGHT_3])));
    }
    hei = dynamicCast(map.map['height'], Q$String);
    if (hei != null) {
      h_0 = parseInt_0(hei, -1);
      ($clinit_GXT() , false) && false?(h_0 -= $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , TOP_0), BOTTOM_0]))):offsetHeight == 0 && !contentOnly && h_0 != -1 && (h_0 += $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , TOP_0), BOTTOM_0])));
    }
  }
  if (w == -1 && h_0 == -1) {
    return new Size_0(offsetWidth, offsetHeight);
  }
  return new Size_0(w != -1?w:offsetWidth, h_0 != -1?h_0:offsetHeight);
}

function $getTextWidth(this$static){
  var html, metrics;
  html = this$static.innerHTML;
  metrics = (!instance_1 && (instance_1 = new TextMetrics_0) , instance_1);
  $bind_3(metrics, this$static);
  return metrics.el.style['width'] = 'auto' , $getSize_0(metrics, html).width_0;
}

function $getWidth(this$static, content_0){
  var w;
  w = this$static.offsetWidth || 0;
  content_0 && (w -= $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , LEFT_3), RIGHT_3])));
  return 0 > w?0:w;
}

function $getZIndex(this$static){
  var $e0;
  try {
    return parseInt_0(this$static.style['zIndex'], 0);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Exception)) {
      return 0;
    }
     else 
      throw $e0;
  }
}

function $hasClassName(this$static, test){
  var cls;
  if (test == null || test.length == 0) {
    return false;
  }
  cls = this$static.className;
  return (' ' + cls + ' ').indexOf(' ' + test + ' ') != -1;
}

function $hide_0(this$static){
  !this$static.visMode || this$static.visMode == ($clinit_XElement$VisMode() , DISPLAY_0)?(this$static.style['display'] = ($clinit_Style$Display() , 'none') , !!this$static.layer && $hideUnders(this$static.layer)):(this$static.style['visibility'] = ($clinit_Style$Visibility() , 'hidden') , undefined);
}

function $insertChild_0(this$static, child, index){
  $insertChild(this$static, ($clinit_PotentialElement() , $resolve(child)), index);
}

function $isConnected(this$static){
  return $isOrHasChild($doc.body, this$static);
}

function $isStyleAttribute(this$static){
  var a;
  a = dynamicCast($getComputedStyle(this$static, ($clinit_Collections() , new Collections$SingletonList_0('display'))).map['display'], Q$String);
  return a != null && $equals_3(a, 'none');
}

function $isStyleProperty(this$static, map, matchAll){
  var a, collection, s, s$iterator;
  collection = new FastMap$2_0(map);
  a = $getComputedStyle(this$static, new ArrayList_2(collection));
  for (s$iterator = $keySet_0(collection.this$0.map).iterator(); s$iterator.hasNext();) {
    s = dynamicCast(s$iterator.next_0(), Q$String);
    if ($equals_3(dynamicCast(map.map['' + s], Q$String), a.map['' + s])) {
      if (!matchAll) {
        return true;
      }
    }
     else {
      if (matchAll) {
        return false;
      }
    }
  }
  return false;
}

function $isVisible_0(this$static, deep){
  var map, p, parent_0, vis;
  map = new FastMap_0;
  $put_4(map.map, 'visibility', 'hidden');
  $put_4(map.map, 'display', 'none');
  vis = !$isStyleProperty(this$static, map, false);
  parent_0 = $getParentElement(this$static);
  p = parent_0?parent_0:null;
  if (!p) {
    return false;
  }
  if (!deep || !vis) {
    return vis;
  }
  while (!!p && p != $doc.documentElement) {
    if (!$isVisible_0(p, false)) {
      return false;
    }
    p = $getParentElement(p);
  }
  return true;
}

function $makePositionable(this$static, absolute){
  var p;
  if (absolute) {
    this$static.style['position'] = ($clinit_Style$Position() , 'absolute');
  }
   else {
    p = dynamicCast($getComputedStyle(this$static, ($clinit_Collections() , new Collections$SingletonList_0('position'))).map['position'], Q$String);
    (p == null || $equals_3('', p) || $equals_3('static', p) && !$equals_3('absolute', p)) && (this$static.style['position'] = ($clinit_Style$Position() , 'relative') , undefined);
  }
}

function $removeChildren(this$static){
  var child, tag;
  while (child = $getFirstChildElement(this$static)) {
    this$static.removeChild(child);
  }
  tag = this$static.tagName.toLowerCase();
  !$equals_3(tag, 'table') && !$equals_3(tag, 'tbody') && !$equals_3(tag, 'tr') && !$equals_3(tag, 'td') && $setInnerHTML(this$static, '');
}

function $removeClassName_0(this$static, classNames){
  var s, s$index, s$max;
  for (s$index = 0 , s$max = classNames.length; s$index < s$max; ++s$index) {
    s = classNames[s$index];
    $removeClassName(this$static, s);
  }
}

function $restoreVisible(list){
  var display, e, m_0, m$iterator, offset;
  if (list) {
    for (m$iterator = new AbstractList$IteratorImpl_0(list); m$iterator.i < m$iterator.this$0_0.size_1();) {
      m_0 = dynamicCast($next_3(m$iterator), Q$FastMap);
      e = dynamicCastJso(m_0.map['element']);
      offset = dynamicCast(m_0.map['hasxhideoffset'], Q$Boolean);
      !!offset && (offset.value_0 || $removeClassName(e, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBIK')));
      display = dynamicCast(m_0.map['hasxhidedisplay'], Q$Boolean);
      !!display && display.value_0 && $addClassName(e, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBHK'));
      e.style['display'] = dynamicCast(m_0.map['origd'], Q$String);
    }
  }
}

function $scrollIntoView(this$static, container, offsets){
  var b, c, cb, ch, ct, l_0, o, t, o_0, xto, e;
  offsets == null && (offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 0]));
  c = container?container:$doc.body;
  o = (o_0 = new Point_0($getAbsoluteLeft(this$static), $getAbsoluteTop(this$static)) , xto = c , e = new Point_0($getAbsoluteLeft(xto), $getAbsoluteTop(xto)) , new Point_0(o_0.x - e.x, o_0.y - e.y));
  l_0 = o.x;
  t = o.y;
  l_0 = l_0 + (c.scrollLeft || 0);
  t = t + (c.scrollTop || 0);
  b = t + (this$static.offsetHeight || 0) + offsets[0];
  l_0 + (this$static.offsetWidth || 0) + offsets[1];
  ch = c.clientHeight;
  ct = c.scrollTop || 0;
  cb = ct + ch;
  (this$static.offsetHeight || 0) > ch || t < ct?(c.scrollTop = t , undefined):b > cb && (c.scrollTop = b - ch , undefined);
}

function $selectNode(this$static, selector){
  var el;
  el = ($clinit_DomQuery() , internalSelect(selector, this$static)[0]);
  if (el) {
    return el;
  }
  return null;
}

function $setBorders(this$static){
  $removeClassName(this$static, ($clinit_ThemeStyles() , 'GN1NA3IBHM'));
  this$static.style['borderWidth'] = 0 + ($clinit_Style$Unit() , 'px');
}

function $setBounds_1(this$static, x, y, width, height){
  $setXY(this$static, new Point_0(x, y));
  $setSize_1(this$static, width, height, false);
}

function $setBounds_2(this$static, x, y, width, height, adjust){
  $setXY(this$static, new Point_0(x, y));
  $setSize_1(this$static, width, height, adjust);
}

function $setBounds_3(this$static, bounds){
  $setBounds_1(this$static, bounds.x, bounds.y, bounds.width_0, bounds.height_0);
}

function $setClassName_0(this$static, cls, add){
  add?$addClassName(this$static, cls):$removeClassName(this$static, cls);
}

function $setDisplayed(this$static, display){
  this$static.style['display'] = (display?($clinit_Style$Display() , BLOCK):($clinit_Style$Display() , NONE)).getCssName();
  !!this$static.layer && (display?$sync_0(this$static.layer, true):$hideUnders(this$static.layer));
}

function $setHeight_0(this$static, height, adjust){
  adjust && (height -= $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , TOP_0), BOTTOM_0])));
  height >= 0 && (this$static.style['height'] = height + ($clinit_Style$Unit() , 'px') , undefined);
}

function $setHeight_1(this$static, height){
  this$static.style['height'] = addUnits(height, 'px');
}

function $setLeft(this$static, left){
  this$static.style['left'] = left + ($clinit_Style$Unit() , 'px');
  !!this$static.layer && $sync_0(this$static.layer, false);
}

function $setLeftTop(this$static, left, top_0){
  this$static.style['left'] = left + ($clinit_Style$Unit() , 'px');
  !!this$static.layer && $sync_0(this$static.layer, false);
  this$static.style['top'] = top_0 + 'px';
  !!this$static.layer && $sync_0(this$static.layer, false);
}

function $setSize_1(this$static, width, height, adjust){
  var frameWidth;
  if (adjust) {
    frameWidth = $getFrameSize(this$static);
    width -= frameWidth.width_0;
    height -= frameWidth.height_0;
  }
  width >= 0 && (this$static.style['width'] = width + ($clinit_Style$Unit() , 'px') , undefined);
  height >= 0 && (this$static.style['height'] = height + ($clinit_Style$Unit() , 'px') , undefined);
  !!this$static.layer && $sync_0(this$static.layer, false);
}

function $setTop(this$static, top_0){
  this$static.style['top'] = top_0 + ($clinit_Style$Unit() , 'px');
  !!this$static.layer && $sync_0(this$static.layer, false);
}

function $setVisibility(this$static, visible){
  this$static.style['visibility'] = (visible?($clinit_Style$Visibility() , VISIBLE_0):($clinit_Style$Visibility() , HIDDEN_1)).getCssName();
}

function $setVisible_1(this$static, visible){
  !this$static.visMode || this$static.visMode == ($clinit_XElement$VisMode() , DISPLAY_0)?(this$static.style['display'] = (visible?($clinit_Style$Display() , BLOCK):($clinit_Style$Display() , NONE)).getCssName() , !!this$static.layer && (visible?$sync_0(this$static.layer, true):$hideUnders(this$static.layer))):(this$static.style['visibility'] = (visible?($clinit_Style$Visibility() , VISIBLE_0):($clinit_Style$Visibility() , HIDDEN_1)).getCssName() , undefined);
}

function $setWidth_0(this$static, width, adjust){
  adjust && (width -= $getFrameWidth(this$static, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , LEFT_3), RIGHT_3])));
  width >= 0 && (this$static.style['width'] = width + ($clinit_Style$Unit() , 'px') , undefined);
}

function $setWidth_1(this$static, width){
  this$static.style['width'] = addUnits(width, 'px');
}

function $setXY(this$static, p){
  var pts;
  $makePositionable(this$static, false);
  pts = $translatePoints(this$static, p);
  p.x != -1 && $setLeft(this$static, pts.x);
  p.y != -1 && $setTop(this$static, pts.y);
}

function $setZIndex(this$static, zIndex){
  this$static.style['zIndex'] = '' + (0 > zIndex?0:zIndex);
}

function $show_0(this$static){
  !this$static.visMode || this$static.visMode == ($clinit_XElement$VisMode() , DISPLAY_0)?(this$static.style['display'] = ($clinit_Style$Display() , 'block') , !!this$static.layer && $sync_0(this$static.layer, true)):(this$static.style['visibility'] = ($clinit_Style$Visibility() , 'visible') , undefined);
}

function $translatePoints(this$static, p){
  var l_0, list, map, o, relative, t;
  list = new ArrayList_1(3);
  setCheck(list.array, list.size_0++, 'position');
  setCheck(list.array, list.size_0++, 'left');
  setCheck(list.array, list.size_0++, 'top');
  map = $getStyleAttribute(($clinit_XElement$FieldHolder() , computedStyle), this$static, list);
  relative = $equals_3('relative', map.map['position']);
  l_0 = parseInt_0(dynamicCast(map.map['left'], Q$String), -11234);
  t = parseInt_0(dynamicCast(map.map['top'], Q$String), -11234);
  l_0 = l_0 != -11234?l_0:relative?0:this$static.offsetLeft || 0;
  t = t != -11234?t:relative?0:this$static.offsetTop || 0;
  o = new Point_0($getAbsoluteLeft(this$static), $getAbsoluteTop(this$static));
  return new Point_0(p.x - o.x + l_0, p.y - o.y + t);
}

function $unwrap(this$static, child, bounds){
  var p, pos;
  $setLeftTop(child, bounds.x, bounds.y);
  p = $getParentElement(this$static);
  pos = $getChildIndex(p, this$static);
  insertChild(p, child, pos);
  p.removeChild(this$static);
}

function $updateZIndex(this$static, adj){
  this$static.style['zIndex'] = ($clinit_XDOM() , $clinit_XDOM() , ++zIndexId) + adj + '';
}

function $wrap(this$static, wrapper){
  var h_0, l_0, pos, t, w;
  !wrapper.visMode || wrapper.visMode == ($clinit_XElement$VisMode() , DISPLAY_0)?(wrapper.style['display'] = ($clinit_Style$Display() , 'none') , !!wrapper.layer && $hideUnders(wrapper.layer)):(wrapper.style['visibility'] = ($clinit_Style$Visibility() , 'hidden') , undefined);
  pos = this$static.style['position'];
  wrapper.style['position'] = pos;
  l_0 = parseInt_0(this$static.style['left'], 0);
  t = parseInt_0(this$static.style['top'], 0);
  this$static.style['left'] = 5000 + ($clinit_Style$Unit() , 'px');
  !!this$static.layer && $sync_0(this$static.layer, false);
  !this$static.visMode || this$static.visMode == ($clinit_XElement$VisMode() , DISPLAY_0)?(this$static.style['display'] = ($clinit_Style$Display() , 'block') , !!this$static.layer && $sync_0(this$static.layer, true)):(this$static.style['visibility'] = ($clinit_Style$Visibility() , 'visible') , undefined);
  h_0 = $getComputedHeight(this$static);
  w = $getComputedWidth(this$static);
  this$static.style['left'] = '1px';
  !!this$static.layer && $sync_0(this$static.layer, false);
  this$static.style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  !this$static.visMode || this$static.visMode == ($clinit_XElement$VisMode() , DISPLAY_0)?(this$static.style['display'] = ($clinit_Style$Display() , 'none') , !!this$static.layer && $hideUnders(this$static.layer)):(this$static.style['visibility'] = ($clinit_Style$Visibility() , 'hidden') , undefined);
  $insertBefore($getParentElement(this$static), wrapper, this$static);
  wrapper.appendChild(this$static);
  wrapper.style['overflow'] = 'hidden';
  wrapper.style['left'] = l_0 + 'px';
  !!wrapper.layer && $sync_0(wrapper.layer, false);
  wrapper.style['top'] = t + 'px';
  !!wrapper.layer && $sync_0(wrapper.layer, false);
  this$static.style['top'] = '0px';
  !!this$static.layer && $sync_0(this$static.layer, false);
  this$static.style['left'] = '0px';
  !!this$static.layer && $sync_0(this$static.layer, false);
  return new Rectangle_1(l_0, t, w, h_0);
}

function addUnits(v, defaultUnit){
  if (v === '' || v == 'auto') {
    return v;
  }
  if (v === undefined) {
    return '';
  }
  if (typeof v == 'number' || !/\d+(px|em|%|en|ex|pt|in|cm|mm|pc)$/i.test(v)) {
    return v + (defaultUnit || 'px');
  }
  return v;
}

function disableTextSelectInternal(e, disable){
  if (disable) {
    e.ondrag = function(evt){
      var targ;
      !evt && (evt = $wnd.event);
      evt.target?(targ = evt.target):evt.srcElement && (targ = evt.srcElement);
      targ.nodeType == 3 && (targ = targ.parentNode);
      if (targ.tagName == 'INPUT' || targ.tagName == 'TEXTAREA') {
        return true;
      }
      return false;
    }
    ;
    e.onselectstart = function(evt){
      var targ;
      !evt && (evt = $wnd.event);
      evt.target?(targ = evt.target):evt.srcElement && (targ = evt.srcElement);
      targ.nodeType == 3 && (targ = targ.parentNode);
      if (targ.tagName == 'INPUT' || targ.tagName == 'TEXTAREA') {
        return true;
      }
      return false;
    }
    ;
  }
   else {
    e.ondrag = null;
    e.onselectstart = null;
  }
}

function XElement$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(561, 1, {}, XElement$2_0);
_.execute = function execute_16(){
  $removeClassName(this.this$0, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBAL'));
}
;
_.this$0 = null;
function $clinit_XElement$FieldHolder(){
  $clinit_XElement$FieldHolder = nullMethod;
  new FastMap_0;
  computedStyle = new ComputedStyleImpl_0;
}

var computedStyle;
function $clinit_XElement$VisMode(){
  $clinit_XElement$VisMode = nullMethod;
  DISPLAY_0 = new XElement$VisMode_0('DISPLAY', 0);
  VISIBILITY_0 = new XElement$VisMode_0('VISIBILITY', 1);
  $VALUES_15 = initValues(_3Lcom_sencha_gxt_core_client_dom_XElement$VisMode_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$XElement$VisMode, [DISPLAY_0, VISIBILITY_0]);
}

function XElement$VisMode_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_16(){
  $clinit_XElement$VisMode();
  return $VALUES_15;
}

defineSeed(563, 191, makeCastMap([Q$XElement$VisMode, Q$Serializable, Q$Comparable, Q$Enum]), XElement$VisMode_0);
var $VALUES_15, DISPLAY_0, VISIBILITY_0;
function $checkCamelCache(this$static, l_0){
  var i, list, s, t;
  list = new ArrayList_2(l_0);
  for (i = 0; i < list.size_0; ++i) {
    s = dynamicCast((checkIndex(i, list.size_0) , list.array[i]), Q$String);
    t = dynamicCast($get_7(this$static.camelCache, s), Q$String);
    if (t == null) {
      t = camelize($getPropertyName(s));
      $put_2(this$static.camelCache, s, t);
    }
    $set_3(list, i, t);
  }
  return list;
}

function $checkHyphenCache(this$static, l_0){
  var i, list, s, t;
  list = new ArrayList_2(l_0);
  for (i = 0; i < list.size_0; ++i) {
    s = dynamicCast((checkIndex(i, list.size_0) , list.array[i]), Q$String);
    t = dynamicCast($get_7(this$static.hyphenCache, s), Q$String);
    if (t == null) {
      t = $getPropertyName(s).replace(/([A-Z])/g, '-$1').toLowerCase();
      $put_2(this$static.hyphenCache, s, t);
    }
    $set_3(list, i, t);
  }
  return list;
}

function $getComputedStyle_0(elem, originals, names, names2, pseudo){
  var cStyle;
  var map = new FastMap_0;
  var size = originals.size_1();
  for (var i = 0; i < size; i++) {
    var original = originals.get_2(i);
    var name2 = names2.get_2(i);
    var v = elem.style[name2];
    if (v) {
      map.put_0(original, String(v));
      continue;
    }
    var name_0 = names.get_2(i);
    !cStyle && (cStyle = $doc.defaultView.getComputedStyle(elem, pseudo));
    map.put_0(original, cStyle?String(cStyle.getPropertyValue(name_0)):null);
  }
  return map;
}

function $getPropertyName(name_0){
  if ($equals_3('float', name_0)) {
    return 'cssFloat';
  }
  return name_0;
}

function $getStyleAttribute(this$static, elem, names){
  return $getComputedStyle_0(elem, names, $checkHyphenCache(this$static, names), $checkCamelCache(this$static, names), null);
}

function ComputedStyleImpl_0(){
  this.camelCache = new FastMap_0;
  this.hyphenCache = new FastMap_0;
}

defineSeed(564, 1, {}, ComputedStyleImpl_0);
function CommonStyles_0(){
  this.appearance = new CommonStyles$CommonStylesDefaultAppearance_0;
  ensureInjected(this.appearance.styles);
}

defineSeed(565, 1, {}, CommonStyles_0);
_.appearance = null;
var instance_0 = null;
function CommonStyles$CommonStylesDefaultAppearance_0(){
  this.styles = ($clinit_CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$stylesInitializer() , styles_0);
}

defineSeed(566, 1, {}, CommonStyles$CommonStylesDefaultAppearance_0);
_.styles = null;
var shim_0 = null, styles_0 = null;
function CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(568, 1, {}, CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_1(){
  return '.GN1NA3IBMK,.GN1NA3IBMK:focus{outline:none;}.GN1NA3IBPK{position:absolute !important;left:0;top:0;}.GN1NA3IBHK{display:none !important;}.GN1NA3IBIK{position:absolute !important;left:-10000px !important;top:-10000px !important;visibility:hidden !important;}.GN1NA3IBJK{visibility:hidden !important;}.GN1NA3IBCL,.GN1NA3IBCL *{-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:ignore;}.GN1NA3IBDL{-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:ignore;}.x-clear{clear:both;overflow:hidden;line-height:0;font-size:0;}.GN1NA3IBGK{float:right;}.GN1NA3IBDK{cursor:e-resize;cursor:col-resize;}.GN1NA3IBEK{cursor:n-resize;cursor:row-resize;}.GN1NA3IBLK{position:relative;display:inline-block;}.GN1NA3IBOK{white-space:nowrap;}.GN1NA3IBBL{height:' + ($clinit_CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$shimInitializer() , shim_0.height_0) + 'px;width:' + shim_0.width_0 + 'px;overflow:hidden;background:url("' + shim_0.url.uri + '") -' + shim_0.left_0 + 'px -' + shim_0.top_0 + 'px  no-repeat;width:100%;height:100%;display:none;position:absolute;left:0;top:0;z-index:20000;}.GN1NA3IBFK *{color:gray !important;cursor:default !important;}.GN1NA3IBFK{cursor:default !important;opacity:0.6;}';
}
;
function $clinit_CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$shimInitializer(){
  $clinit_CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$shimInitializer = nullMethod;
  shim_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==')), 1, 1);
}

function $clinit_CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$stylesInitializer(){
  $clinit_CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$stylesInitializer = nullMethod;
  styles_0 = new CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$1_0;
}

function $clinit_StyleInjectorHelper(){
  $clinit_StyleInjectorHelper = nullMethod;
  injected_0 = new HashSet_0;
}

function ensureInjected(style){
  $clinit_StyleInjectorHelper();
  if (!$contains_3(injected_0, style.___clazz$)) {
    $add_16(injected_0, style.___clazz$);
    inject_0(style.getText(), true);
    return true;
  }
  return false;
}

var injected_0;
function $clinit_ThemeStyles(){
  $clinit_ThemeStyles = nullMethod;
  new BlueThemeAppearance_0;
}

function $add_8(this$static, item){
  $contains_4(this$static.stack, item) && $remove_6(this$static.stack, item);
  $add_17(this$static.stack, item);
  this$static.stack.arrayList.size_0 > 10 && $remove_22(this$static.stack, 0);
}

function $get_6(this$static, i){
  return $get_15(this$static.stack, i);
}

function $remove_9(this$static, item){
  $remove_6(this$static.stack, item);
}

function $add_9(this$static){
  !this$static.handler && (this$static.handler = addNativePreviewHandler(this$static));
}

function $onAutoHidePreview(this$static, pe){
  var ignore, type;
  type = $eventGetTypeInt(pe.nativeEvent.type);
  switch (type) {
    case 4:
    case 8:
    case 1:
    case 2:
      {
        ignore = $is(this$static.ignoreList, pe.nativeEvent.target);
        if (!ignore && this$static.onAutoHide(pe)) {
          return true;
        }
      }

  }
  return false;
}

function $onPreview(this$static, pe){
  if ($eventGetTypeInt(pe.nativeEvent.type) == this$static.keyEvent) {
    this$static.onPreviewKeyPress(pe);
    return true;
  }
  $eventGetTypeInt(pe.nativeEvent.type) == 1 && undefined;
  return true;
}

function $push_0(this$static){
  if (this$static.handler) {
    $remove_10(this$static);
    !this$static.handler && (this$static.handler = addNativePreviewHandler(this$static));
  }
}

function $remove_10(this$static){
  if (this$static.handler) {
    $removeHandler(this$static.handler.real);
    this$static.handler = null;
  }
}

function BaseEventPreview_0(){
  this.ignoreList = new CompositeElement_0;
  this.keyEvent = ($clinit_KeyNav() , $clinit_KeyNav() , keyEvent);
}

defineSeed(574, 1, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]));
_.onAutoHide = function onAutoHide(pe){
  return true;
}
;
_.onPreview = function onPreview(pe){
  return $onPreview(this, pe);
}
;
_.onPreviewKeyPress = function onPreviewKeyPress(pe){
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  var e;
  e = event_0.nativeEvent;
  e.clientX || 0;
  e.clientY || 0;
  if (this.autoHide && $onAutoHidePreview(this, event_0)) {
    this.autoHideAllowEvent && (event_0.isCanceled = true);
    $remove_10(this);
  }
  this.onPreview(event_0) || (event_0.isCanceled = true);
}
;
_.autoHide = true;
_.autoHideAllowEvent = false;
_.handler = null;
_.keyEvent = 0;
function $click(this$static){
  $castFireEventFromSource(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, new ClickRepeaterEvent_0, this$static);
  $schedule(this$static.timer, this$static.accelerate?$easeOutExpo(sub_0(fromDouble((new Date_1).jsdate.getTime()), fromDouble(this$static.mousedownTime.jsdate.getTime()))):20);
}

function $easeOutExpo(t){
  return round_int(eq(t, P2ee0_longLit)?10:-390 * (-pow(2, toDouble(div_0(mul(Na_longLit, t), P2ee0_longLit))) + 1) + 400);
}

function $handleMouseDown(this$static){
  !this$static.timer && (this$static.timer = new ClickRepeater$2_0(this$static));
  $cancel_0(this$static.timer);
  this$static.el.blur();
  this$static.mousedownTime = new Date_1;
  this$static.waitForMouseOut = true;
  $castFireEventFromSource(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, new ClickRepeaterEvent_0, this$static);
  this$static.accelerate && (this$static.delay = 400);
  $schedule(this$static.timer, this$static.delay);
}

function $handleMouseOut(this$static){
  if (this$static.waitForMouseOut) {
    $cancel_0(this$static.timer);
    this$static.waitForMouseOver = true;
  }
}

function $handleMouseReturn(this$static){
  if (this$static.waitForMouseOver) {
    this$static.waitForMouseOver = false;
    $castFireEventFromSource(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, new ClickRepeaterEvent_0, this$static);
    $schedule(this$static.timer, this$static.accelerate?$easeOutExpo(sub_0(fromDouble((new Date_1).jsdate.getTime()), fromDouble(this$static.mousedownTime.jsdate.getTime()))):20);
  }
}

function $handleMouseUp(this$static){
  if (this$static.waitForMouseOut) {
    $cancel_0(this$static.timer);
    this$static.waitForMouseOut = false;
    this$static.waitForMouseOver = false;
    $remove_10(this$static.preview);
  }
}

function ClickRepeater_0(target, el){
  this.handler = new ClickRepeater$Handler_0(this);
  this.el = el;
  this.preview = new ClickRepeater$1_0(this);
  this.preview.autoHide = false;
  $addDomHandler(target, this.handler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_3));
  $addDomHandler(target, this.handler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_5));
  $addDomHandler(target, this.handler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_6));
  $addHandler(target, this.handler, (!TYPE_7 && (TYPE_7 = new GwtEvent$Type_0) , TYPE_7));
  target.attached && $disableTextSelection(this.el, true);
}

defineSeed(575, 1, makeCastMap([Q$ClickRepeater]), ClickRepeater_0);
_.accelerate = false;
_.delay = 250;
_.el = null;
_.eventBus = null;
_.mousedownTime = null;
_.preview = null;
_.timer = null;
_.waitForMouseOut = false;
_.waitForMouseOver = false;
function ClickRepeater$1_0(this$0){
  this.this$0 = this$0;
  BaseEventPreview_0.call(this);
}

defineSeed(576, 574, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), ClickRepeater$1_0);
_.onPreview = function onPreview_0(pe){
  $eventGetTypeInt(pe.nativeEvent.type) == 8 && $handleMouseUp(this.this$0);
  return true;
}
;
_.this$0 = null;
function ClickRepeater$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(577, 130, makeCastMap([Q$Timer]), ClickRepeater$2_0);
_.run = function run_1(){
  $click(this.this$0);
}
;
_.this$0 = null;
function ClickRepeater$Handler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(578, 1, makeCastMap([Q$MouseDownHandler, Q$MouseOutHandler, Q$MouseOverHandler, Q$AttachEvent$Handler, Q$EventHandler]), ClickRepeater$Handler_0);
_.onAttachOrDetach = function onAttachOrDetach(event_0){
  event_0.attached?$disableTextSelection(this.this$0.el, true):$disableTextSelection(this.this$0.el, false);
}
;
_.onMouseDown = function onMouseDown(event_0){
  var target;
  target = event_0.nativeEvent.target;
  if (this.this$0.el == target) {
    event_0.nativeEvent.stopPropagation();
    event_0.nativeEvent.preventDefault();
    $add_9(this.this$0.preview);
    $handleMouseDown(this.this$0);
  }
}
;
_.onMouseOut = function onMouseOut(event_0){
  var target;
  target = event_0.nativeEvent.target;
  this.this$0.el == target && $handleMouseOut(this.this$0);
}
;
_.onMouseOver = function onMouseOver(event_0){
  var target;
  target = event_0.nativeEvent.target;
  this.this$0.el == target && $handleMouseReturn(this.this$0);
}
;
_.this$0 = null;
function $dispatch_6(this$static, handler){
  $onScroll(handler.this$0, this$static);
}

function ClickRepeaterEvent_0(){
}

defineSeed(579, 5, {}, ClickRepeaterEvent_0);
_.dispatch = function dispatch_23(handler){
  $dispatch_6(this, dynamicCast(handler, Q$ClickRepeaterEvent$ClickRepeaterHandler));
}
;
_.getAssociatedType = function getAssociatedType_24(){
  return TYPE_24;
}
;
_.getSource = function getSource_0(){
  return dynamicCast(this.source, Q$ClickRepeater);
}
;
var TYPE_24 = null;
function $delay(this$static, delay){
  $cancel_0(this$static.timer);
  delay > 0?$schedule(this$static.timer, delay):this$static.timer.this$0.onExecute();
}

function DelayedTask_0(){
  this.timer = new DelayedTask$1_0(this);
}

defineSeed(580, 1, {});
_.timer = null;
function DelayedTask$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(581, 130, makeCastMap([Q$Timer]), DelayedTask$1_0);
_.run = function run_2(){
  this.this$0.onExecute();
}
;
_.this$0 = null;
function camelize(s){
  return s.match(/\-/gi)?s.toLowerCase().replace(/\-(\w)/gi, function(a, c){
    return c.toUpperCase();
  }
  ):s;
}

function $clinit_KeyNav(){
  $clinit_KeyNav = nullMethod;
  ($clinit_GXT() , false) || false?(keyEvent = 128):(keyEvent = 256);
}

function $bind_2(this$static, target){
  !!this$static.component && $removeHandler(this$static.registration.real);
  !!target && (keyEvent == 128?(this$static.registration = $addDomHandler(target, this$static.handler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_1))):(this$static.registration = $addDomHandler(target, this$static.handler, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_2))));
  this$static.component = target;
}

function $handleEvent(this$static, event_0){
  var code, type;
  code = event_0.keyCode || 0;
  type = event_0.type;
  if ($equals_3('keydown', type) && keyEvent == 128 || $equals_3('keypress', type) && keyEvent == 256)
  ;
  else {
    return;
  }
  if (!!this$static.component && this$static.component.getElement_0() != event_0.currentTarget) {
    return;
  }
  this$static.cancelBubble_0 && (event_0.stopPropagation() , undefined);
  this$static.preventDefault_0 && (event_0.preventDefault() , undefined);
  this$static.onKeyPress(event_0);
  switch (code) {
    case 40:
      this$static.onDown(event_0);
      break;
    case 13:
      this$static.onEnter(event_0);
      break;
    case 37:
      this$static.onLeft(event_0);
      break;
    case 39:
      this$static.onRight(event_0);
      break;
    case 38:
      this$static.onUp(event_0);
  }
}

function KeyNav_0(){
  this.handler = new KeyNav$KeyNavHandler_0(this);
}

defineSeed(583, 1, {});
_.onDown = function onDown(evt){
}
;
_.onEnter = function onEnter(evt){
}
;
_.onKeyPress = function onKeyPress(evt){
}
;
_.onLeft = function onLeft(evt){
}
;
_.onRight = function onRight(evt){
}
;
_.onUp = function onUp(evt){
}
;
_.cancelBubble_0 = false;
_.component = null;
_.preventDefault_0 = false;
_.registration = null;
var keyEvent = 0;
function KeyNav$KeyNavHandler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(584, 1, makeCastMap([Q$KeyDownHandler, Q$KeyPressHandler, Q$EventHandler]), KeyNav$KeyNavHandler_0);
_.onKeyDown = function onKeyDown_1(event_0){
  $handleEvent(this.this$0, event_0.nativeEvent);
}
;
_.this$0 = null;
function $setBottom(this$static, bottom){
  this$static.bottom = bottom;
}

function $setLeft_0(this$static, left){
  this$static.left_0 = left;
}

function $setRight(this$static, right){
  this$static.right = right;
}

function $setTop_0(this$static, top_0){
  this$static.top_0 = top_0;
}

function Region_0(){
}

function Region_1(top_0, right, bottom, left){
  this.left_0 = left;
  this.top_0 = top_0;
  this.right = right;
  this.bottom = bottom;
}

defineSeed(586, 1, {}, Region_0);
_.toString$ = function toString_15(){
  return this.left_0 + ':' + this.top_0 + ':' + this.right + ':' + this.bottom;
}
;
_.bottom = 0;
_.left_0 = 0;
_.right = 0;
_.top_0 = 0;
function Margins_0(){
  Margins_1.call(this);
}

function Margins_1(){
  Region_1.call(this, 0, 0, 0, 0);
}

function Margins_2(top_0, right, bottom, left){
  Region_1.call(this, top_0, right, bottom, left);
}

defineSeed(585, 586, {}, Margins_0, Margins_1, Margins_2);
function Padding_0(){
  Region_1.call(this, 2, 2, 2, 2);
}

defineSeed(587, 586, {}, Padding_0);
function $setX(this$static, x){
  this$static.x = x;
}

function $setY(this$static, y){
  this$static.y = y;
}

function Point_0(x, y){
  this.x = x;
  this.y = y;
}

defineSeed(588, 1, makeCastMap([Q$Point]), Point_0);
_.equals$ = function equals_13(obj){
  var other;
  if (this === obj)
    return true;
  if (obj == null)
    return false;
  other = dynamicCast(obj, Q$Point);
  if (this.x != other.x)
    return false;
  if (this.y != other.y)
    return false;
  return true;
}
;
_.hashCode$ = function hashCode_15(){
  var result;
  result = 31 + this.x;
  result = 31 * result + this.y;
  return result;
}
;
_.toString$ = function toString_16(){
  return 'x: ' + this.x + ', y: ' + this.y;
}
;
_.x = 0;
_.y = 0;
function $contains_0(this$static, x, y){
  return x >= this$static.x && y >= this$static.y && x - this$static.x < this$static.width_0 && y - this$static.y < this$static.height_0;
}

function $contains_1(this$static, p){
  return $contains_0(this$static, p.x, p.y);
}

function $setHeight_2(this$static, height){
  this$static.height_0 = height;
}

function $setWidth_2(this$static, width){
  this$static.width_0 = width;
}

function $setX_0(this$static, x){
  this$static.x = x;
}

function $setY_0(this$static, y){
  this$static.y = y;
}

function Rectangle_0(){
}

function Rectangle_1(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width_0 = width;
  this.height_0 = height;
}

defineSeed(589, 1, {}, Rectangle_0, Rectangle_1);
_.toString$ = function toString_17(){
  return 'left: ' + this.x + ' top: ' + this.y + ' width: ' + this.width_0 + ' height: ' + this.height_0;
}
;
_.height_0 = 0;
_.width_0 = 0;
_.x = 0;
_.y = 0;
function Scroll_0(scrollLeft, scrollTop){
  this.scrollLeft_0 = scrollLeft;
  this.scrollTop_0 = scrollTop;
}

defineSeed(590, 1, {}, Scroll_0);
_.scrollLeft_0 = 0;
_.scrollTop_0 = 0;
function $equals_1(this$static, obj){
  var other;
  if (this$static === obj)
    return true;
  if (obj == null)
    return false;
  if (!this$static)
    return false;
  other = dynamicCast(obj, Q$Size);
  if (this$static.height_0 != other.height_0)
    return false;
  if (this$static.width_0 != other.width_0)
    return false;
  return true;
}

function Size_0(width, height){
  this.width_0 = width;
  this.height_0 = height;
}

defineSeed(591, 1, makeCastMap([Q$Size]), Size_0);
_.equals$ = function equals_14(obj){
  return $equals_1(this, obj);
}
;
_.hashCode$ = function hashCode_16(){
  var result;
  result = 31 + this.height_0;
  result = 31 * result + this.width_0;
  return result;
}
;
_.toString$ = function toString_18(){
  return 'width: ' + this.width_0 + ', height: ' + this.height_0;
}
;
_.height_0 = 0;
_.width_0 = 0;
function $bind_3(this$static, el){
  var key_0, key$iterator, l_0, map;
  $addClassName(el, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBAL'));
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), new XElement$2_0(el));
  l_0 = new ArrayList_0;
  setCheck(l_0.array, l_0.size_0++, 'fontSize');
  setCheck(l_0.array, l_0.size_0++, 'fontWeight');
  setCheck(l_0.array, l_0.size_0++, 'fontStyle');
  setCheck(l_0.array, l_0.size_0++, 'fontFamily');
  setCheck(l_0.array, l_0.size_0++, 'lineHeight');
  setCheck(l_0.array, l_0.size_0++, 'textTransform');
  setCheck(l_0.array, l_0.size_0++, 'letterSpacing');
  map = $getStyleAttribute(($clinit_XElement$FieldHolder() , computedStyle), el, l_0);
  for (key$iterator = $keySet_0((new FastMap$2_0(map)).this$0.map).iterator(); key$iterator.hasNext();) {
    key_0 = dynamicCast(key$iterator.next_0(), Q$String);
    this$static.el.style[key_0] = dynamicCast(map.map['' + key_0], Q$String);
  }
}

function $getSize_0(this$static, text){
  var size;
  $setInnerHTML(this$static.el, text);
  size = $getSize(this$static.el, false);
  $setInnerHTML(this$static.el, '');
  return size;
}

function $getWidth_0(this$static, text){
  this$static.el.style['width'] = 'auto';
  return $getSize_0(this$static, text).width_0;
}

function TextMetrics_0(){
  this.el = $doc.createElement('div');
  $appendChild($doc.body, this.el);
  $makePositionable(this.el, true);
  $setLeftTop(this.el, -10000, -10000);
  this.el.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
}

defineSeed(592, 1, {}, TextMetrics_0);
_.el = null;
var instance_1 = null;
function constrain(value, min, max){
  value = value > min?value:min;
  value = value < max?value:max;
  return value;
}

function isEmptyString(string){
  return string == null || $equals_3('', string);
}

function parseInt_0(value, defaultValue){
  var v = parseInt(value, 10);
  if (v === 0) {
    return 0;
  }
  return v || defaultValue;
}

function parseOverflow(value){
  return $equals_3(value, ($clinit_Style$Overflow() , 'auto'))?AUTO_0:$equals_3(value, 'hidden')?HIDDEN_0:$equals_3(value, 'scroll')?SCROLL:$equals_3(value, 'visible')?VISIBLE:null;
}

function $values(this$static){
  var entrySet;
  entrySet = this$static.entrySet_0();
  return new AbstractMap$2_0(this$static, entrySet);
}

defineSeed(595, 1, makeCastMap([Q$Map]));
_.isEmpty = function isEmpty_2(){
  return this.size_1() == 0;
}
;
_.remove_1 = function remove_15(key_0){
  var entry;
  entry = $implFindEntry(this, key_0, true);
  return !entry?null:entry.getValue_0();
}
;
function $containsKey(this$static, key_0){
  return $containsKey_0(this$static.map, '' + key_0);
}

function $get_7(this$static, key_0){
  return this$static.map['' + key_0];
}

function $put_2(this$static, key_0, value){
  return $put_4(this$static.map, key_0, value);
}

function $put_3(this$static, key_0, value){
  return $put_4(this$static.map, key_0, value);
}

function $remove_11(this$static, key_0){
  return $remove_12(this$static.map, key_0);
}

function FastMap_0(){
  this.map = {};
}

defineSeed(594, 595, makeCastMap([Q$FastMap, Q$Serializable, Q$Map]), FastMap_0);
_.containsKey = function containsKey_0(key_0){
  return $containsKey(this, key_0);
}
;
_.entrySet_0 = function entrySet_2(){
  return new FastMap$1_0(this);
}
;
_.get_1 = function get_10(key_0){
  return this.map['' + key_0];
}
;
_.isEmpty = function isEmpty_3(){
  return $size_0(this.map) == 0;
}
;
_.put = function put_2(key_0, value){
  return $put_4(this.map, key_0, value);
}
;
_.put_0 = function put_3(key_0, value){
  return $put_4(this.map, key_0, value);
}
;
_.remove_1 = function remove_16(key_0){
  return $remove_12(this.map, key_0);
}
;
_.size_1 = function size_7(){
  return $size_0(this.map);
}
;
_.map = null;
function FastMap$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(596, 458, makeCastMap([Q$Collection, Q$Set]), FastMap$1_0);
_.contains_0 = function contains_0(key_0){
  var s, value;
  s = dynamicCast(key_0, Q$Map$Entry);
  value = $get_7(this.this$0, s.getKey_0());
  return value == null?null == s.getValue_0():equals__devirtual$(value, s.getValue_0());
}
;
_.iterator = function iterator_7(){
  var custom;
  custom = new FastMap$1$1_0(this);
  return custom;
}
;
_.size_1 = function size_8(){
  return $size_0(this.this$0.map);
}
;
_.this$0 = null;
function FastMap$1$1_0(this$1){
  this.this$1 = this$1;
  this.keys = $keySet_0((new FastMap$2_0(this.this$1.this$0)).this$0.map).iterator();
}

defineSeed(597, 1, makeCastMap([Q$Iterator]), FastMap$1$1_0);
_.hasNext = function hasNext_3(){
  return this.keys.hasNext();
}
;
_.next_0 = function next_4(){
  var key_0;
  return key_0 = dynamicCast(this.keys.next_0(), Q$String) , new FastMap$FastMapEntry_0(key_0, $get_7(this.this$1.this$0, key_0));
}
;
_.remove_0 = function remove_17(){
  this.keys.remove_0();
}
;
_.this$1 = null;
function FastMap$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(598, 458, makeCastMap([Q$Collection, Q$Set]), FastMap$2_0);
_.contains_0 = function contains_1(key_0){
  return $containsKey(this.this$0, key_0);
}
;
_.iterator = function iterator_8(){
  return $keySet_0(this.this$0.map).iterator();
}
;
_.size_1 = function size_9(){
  return $size_0(this.this$0.map);
}
;
_.this$0 = null;
function $equalsWithNullCheck(obj1, obj2){
  return maskUndefined(obj1) === maskUndefined(obj2) || obj1 != null && equals__devirtual$(obj1, obj2);
}

function FastMap$FastMapEntry_0(key_0, value){
  this.key = key_0;
  this.value_0 = value;
}

defineSeed(599, 1, makeCastMap([Q$Map$Entry]), FastMap$FastMapEntry_0);
_.equals$ = function equals_16(a){
  var s;
  if (instanceOf(a, Q$Map$Entry)) {
    s = dynamicCast(a, Q$Map$Entry);
    if ($equalsWithNullCheck(this.key, s.getKey_0()) && $equalsWithNullCheck(this.value_0, s.getValue_0())) {
      return true;
    }
  }
  return false;
}
;
_.getKey_0 = function getKey_3(){
  return this.key;
}
;
_.getValue_0 = function getValue_9(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_18(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.key != null && (keyHash = getHashCode_0(this.key));
  this.value_0 != null && (valueHash = hashCode__devirtual$(this.value_0));
  return keyHash ^ valueHash;
}
;
_.setValue_0 = function setValue_2(object){
  var old;
  old = this.value_0;
  this.value_0 = object;
  return old;
}
;
_.key = null;
_.value_0 = null;
function $containsKey_0(this$static, key_0){
  return this$static.hasOwnProperty(key_0);
}

function $keySet_0(this$static){
  var s = new ArrayList_0;
  for (var key_0 in this$static) {
    if (!this$static.hasOwnProperty(key_0))
      continue;
    s.add_0(key_0);
  }
  return s;
}

function $put_4(this$static, key_0, value){
  var previous = this$static[key_0];
  this$static[key_0] = value;
  return previous;
}

function $remove_12(this$static, key_0){
  var previous = this$static[key_0];
  delete this$static[key_0];
  return previous;
}

function $size_0(this$static){
  var count = 0;
  for (var key_0 in this$static) {
    this$static.hasOwnProperty(key_0) && ++count;
  }
  return count;
}

function $add_10(this$static, registration){
  $add_16(this$static.registrations, registration);
}

function $removeHandler_0(this$static){
  var r, r$iterator;
  for (r$iterator = $iterator($keySet(this$static.registrations.map)); r$iterator.val$outerIter.hasNext();) {
    r = dynamicCast($next_4(r$iterator), Q$HandlerRegistration);
    r.removeHandler();
  }
  this$static.registrations.map.clear();
}

function GroupingHandlerRegistration_0(){
  this.registrations = new HashSet_0;
}

defineSeed(601, 1, makeCastMap([Q$HandlerRegistration, Q$HandlerRegistration_0, Q$GroupingHandlerRegistration]), GroupingHandlerRegistration_0);
_.removeHandler = function removeHandler_1(){
  $removeHandler_0(this);
}
;
_.registrations = null;
function $addStoreAddHandler(this$static, handler){
  return $addHandler_0((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager_0(this$static)) , this$static.handlerManager), (!TYPE_25 && (TYPE_25 = new GwtEvent$Type_0) , TYPE_25), handler);
}

function $addStoreClearHandler(this$static, handler){
  return $addHandler_0((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager_0(this$static)) , this$static.handlerManager), (!TYPE_26 && (TYPE_26 = new GwtEvent$Type_0) , TYPE_26), handler);
}

function $addStoreRecordChangeHandler(this$static, handler){
  return $addHandler_0((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager_0(this$static)) , this$static.handlerManager), (!TYPE_29 && (TYPE_29 = new GwtEvent$Type_0) , TYPE_29), handler);
}

function $addStoreRemoveHandler(this$static, handler){
  return $addHandler_0((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager_0(this$static)) , this$static.handlerManager), (!TYPE_30 && (TYPE_30 = new GwtEvent$Type_0) , TYPE_30), handler);
}

function $addStoreUpdateHandler(this$static, handler){
  return $addHandler_0((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager_0(this$static)) , this$static.handlerManager), (!TYPE_32 && (TYPE_32 = new GwtEvent$Type_0) , TYPE_32), handler);
}

function $fireEvent_7(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_4(this$static.handlerManager, event_0);
}

function $getRecord(this$static, data){
  var rec;
  rec = dynamicCast(this$static.records.get_1(data), Q$Store$Record);
  if (!rec) {
    rec = new Store$Record_0(this$static, data);
    this$static.records.put(data, rec);
  }
  return rec;
}

function $hasMatchingKey(this$static, model1, model2){
  return $equals_3(this$static.keyProvider.getKey(model1), this$static.keyProvider.getKey(model2));
}

function $hasRecord(this$static, data){
  return this$static.records.get_1(data) != null;
}

function $isFiltered(this$static){
  return this$static.filtersEnabled && !!this$static.filters && this$static.filters.map.size_1() != 0;
}

function Store_0(keyProvider){
  this.records = new HashMap_0;
  this.modifiedRecords = new HashSet_0;
  this.comparators = new ArrayList_0;
  this.keyProvider = keyProvider;
}

defineSeed(604, 1, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$Store]));
_.fireEvent = function fireEvent_8(event_0){
  $fireEvent_7(this, event_0);
}
;
_.filters = null;
_.filtersEnabled = false;
_.handlerManager = null;
_.keyProvider = null;
function $clinit_SortDir(){
  $clinit_SortDir = nullMethod;
  ASC = new SortDir$1_0;
  DESC = new SortDir$2_0;
  $VALUES_16 = initValues(_3Lcom_sencha_gxt_data_shared_SortDir_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$SortDir, [ASC, DESC]);
}

function values_17(){
  $clinit_SortDir();
  return $VALUES_16;
}

defineSeed(605, 191, makeCastMap([Q$SortDir, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_16, ASC, DESC;
function SortDir$1_0(){
  Enum_0.call(this, 'ASC', 0);
}

defineSeed(606, 605, makeCastMap([Q$SortDir, Q$Serializable, Q$Comparable, Q$Enum]), SortDir$1_0);
function SortDir$2_0(){
  Enum_0.call(this, 'DESC', 1);
}

defineSeed(607, 605, makeCastMap([Q$SortDir, Q$Serializable, Q$Comparable, Q$Enum]), SortDir$2_0);
function $compare(this$static, o1, o2){
  var i, val;
  for (i = 0; i < this$static.this$0.comparators.size_0; ++i) {
    val = $compare_0(dynamicCast($get_10(this$static.this$0.comparators, i), Q$Store$StoreSortInfo), o1, o2);
    if (val != 0) {
      return val;
    }
  }
  return 0;
}

function Store$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(612, 1, {}, Store$1_0);
_.compare = function compare(o1, o2){
  return $compare(this, o1, o2);
}
;
_.this$0 = null;
function $getValue(this$static, property){
  var change;
  change = dynamicCast(this$static.changes.get_1(property), Q$Store$Change);
  return !change?property.getValue(this$static.model):change.value_0;
}

function Store$Record_0(this$0, model){
  this.this$0 = this$0;
  this.changes = new HashMap_0;
  this.model = model;
}

defineSeed(614, 1, makeCastMap([Q$Store$Record]), Store$Record_0);
_.model = null;
_.this$0 = null;
function $compare_0(this$static, o1, o2){
  var val;
  val = this$static.comparator.compare(o1, o2);
  return this$static.direction == ($clinit_SortDir() , ASC)?val:-val;
}

function $getParent(this$static, child){
  var m_0;
  m_0 = dynamicCast($get_7(this$static.modelMap, this$static.keyProvider.getKey(child)), Q$TreeStore$TreeModel).parent_0;
  return !!m_0 && !m_0.root?m_0.data:null;
}

function $unwrap_0(models){
  var list, model, model$iterator;
  list = new ArrayList_0;
  for (model$iterator = models.iterator(); model$iterator.hasNext();) {
    model = dynamicCast(model$iterator.next_0(), Q$TreeStore$TreeModel);
    $add_15(list, model.data);
  }
  return $clinit_Collections() , list?new Collections$UnmodifiableRandomAccessList_0(list):new Collections$UnmodifiableList_0(null);
}

function $getChildren_0(this$static){
  var children;
  $isFiltered(this$static.this$0)?(children = this$static.visibleChildren):(children = this$static.children_0);
  return children;
}

defineSeed(622, 5, {});
_.getSource = function getSource_1(){
  return dynamicCast(this.source, Q$Store);
}
;
var TYPE_25 = null;
var TYPE_26 = null;
var TYPE_27 = null;
var TYPE_28 = null;
var TYPE_29 = null;
var TYPE_30 = null;
var TYPE_32 = null;
function DragCancelEvent_0(){
}

defineSeed(654, 5, {}, DragCancelEvent_0);
_.dispatch = function dispatch_33(handler){
  dynamicCast(handler, Q$DragCancelEvent$DragCancelHandler).onDragCancel(this);
}
;
_.getAssociatedType = function getAssociatedType_34(){
  return TYPE_36;
}
;
_.getSource = function getSource_4(){
  return dynamicCast(this.source, Q$Draggable);
}
;
var TYPE_36 = null;
function DragEndEvent_0(x, y){
  this.x = x;
  this.y = y;
}

defineSeed(655, 5, {}, DragEndEvent_0);
_.dispatch = function dispatch_34(handler){
  dynamicCast(handler, Q$DragEndEvent$DragEndHandler).onDragEnd(this);
}
;
_.getAssociatedType = function getAssociatedType_35(){
  return TYPE_37;
}
;
_.getSource = function getSource_5(){
  return dynamicCast(this.source, Q$Draggable);
}
;
_.x = 0;
_.y = 0;
var TYPE_37 = null;
function DragMoveEvent_0(x, y, event_0){
  this.x = x;
  this.y = y;
  this.nativeEvent = event_0;
}

defineSeed(656, 5, makeCastMap([Q$CancellableEvent]), DragMoveEvent_0);
_.dispatch = function dispatch_35(handler){
  dynamicCast(handler, Q$DragMoveEvent$DragMoveHandler).onDragMove(this);
}
;
_.getAssociatedType = function getAssociatedType_36(){
  return TYPE_38;
}
;
_.getSource = function getSource_6(){
  return dynamicCast(this.source, Q$Draggable);
}
;
_.isCancelled = function isCancelled_0(){
  return this.cancelled;
}
;
_.cancelled = false;
_.nativeEvent = null;
_.x = 0;
_.y = 0;
var TYPE_38 = null;
function DragStartEvent_0(x, y, event_0){
  this.x = x;
  this.y = y;
  this.nativeEvent = event_0;
}

defineSeed(657, 5, makeCastMap([Q$CancellableEvent]), DragStartEvent_0);
_.dispatch = function dispatch_36(handler){
  dynamicCast(handler, Q$DragStartEvent$DragStartHandler).onDragStart(this);
}
;
_.getAssociatedType = function getAssociatedType_37(){
  return TYPE_39;
}
;
_.getSource = function getSource_7(){
  return dynamicCast(this.source, Q$Draggable);
}
;
_.isCancelled = function isCancelled_1(){
  return this.cancelled;
}
;
_.cancelled = false;
_.height_0 = 0;
_.nativeEvent = null;
_.width_0 = 0;
_.x = 0;
_.y = 0;
var TYPE_39 = null;
function $addDragHandler(this$static, handler){
  var reg;
  reg = new GroupingHandlerRegistration_0;
  $add_10(reg, $addHandler_1(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, (!TYPE_39 && (TYPE_39 = new GwtEvent$Type_0) , TYPE_39), handler));
  $add_10(reg, $addHandler_1(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, (!TYPE_37 && (TYPE_37 = new GwtEvent$Type_0) , TYPE_37), handler));
  $add_10(reg, $addHandler_1(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, (!TYPE_38 && (TYPE_38 = new GwtEvent$Type_0) , TYPE_38), handler));
  $add_10(reg, $addHandler_1(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, (!TYPE_36 && (TYPE_36 = new GwtEvent$Type_0) , TYPE_36), handler));
  return reg;
}

function $cancelDrag(this$static){
  $remove_10(this$static.preview);
  if (this$static.dragging) {
    this$static.dragging = false;
    if (this$static.useProxy) {
      $disableTextSelection(this$static.proxyEl, false);
      this$static.proxyEl.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
      $removeFromParent_0(this$static.proxyEl);
    }
     else {
      $setXY(this$static.dragWidgetElement, new Point_0(this$static.startBounds.x, this$static.startBounds.y));
    }
    $castFireEventFromSource(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, new DragCancelEvent_0, this$static);
    $removeUnselectableStyle($doc.body);
    $uncover((!instance_3 && (instance_3 = new Shim_0) , instance_3));
  }
}

function $onMouseDown_0(this$static, e){
  var s, target;
  if (!this$static.enabled || $eventGetButton(e.nativeEvent) != 1) {
    return;
  }
  target = e.nativeEvent.target;
  s = target.className;
  if (s != null && $indexOf_4(s, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBNK')) != -1) {
    return;
  }
  (!$equalsIgnoreCase('input', target.tagName) && !$equalsIgnoreCase('textarea', target.tagName) || !!target['disabled']) && (e.nativeEvent.preventDefault() , undefined);
  this$static.startBounds = $getBounds(this$static.dragWidgetElement, false);
  this$static.dragStartX = e.nativeEvent.clientX || 0;
  this$static.dragStartY = e.nativeEvent.clientY || 0;
  $add_9(this$static.preview);
  this$static.clientWidth_0 = $getClientWidth($doc) + getBodyScrollLeft();
  this$static.clientHeight_0 = $getClientHeight($doc) + getBodyScrollTop();
  this$static.startDragDistance == 0 && $startDrag(this$static, e.nativeEvent);
}

function $onMouseMove(this$static, event_0){
  var cls, elem, evt, height, left, tl, top_0, tt, width, x, y;
  elem = event_0.target;
  if (elem.hasAttribute?elem.hasAttribute('class'):true) {
    cls = event_0.target.className;
    if (cls != null && cls.indexOf('x-insert') != -1) {
      return;
    }
  }
  x = event_0.clientX || 0;
  y = event_0.clientY || 0;
  !this$static.dragging && (abs(this$static.dragStartX - x) > this$static.startDragDistance || abs(this$static.dragStartY - y) > this$static.startDragDistance) && $startDrag(this$static, event_0);
  if (this$static.dragging) {
    left = this$static.constrainHorizontal?this$static.startBounds.x:this$static.startBounds.x + (x - this$static.dragStartX);
    top_0 = this$static.constrainVertical?this$static.startBounds.y:this$static.startBounds.y + (y - this$static.dragStartY);
    if (this$static.constrainClient) {
      if (!this$static.constrainHorizontal) {
        width = this$static.startBounds.width_0;
        left = left > 0?left:0;
        left = max_0(0, min_1(this$static.clientWidth_0 - width, left));
      }
      if (!this$static.constrainVertical) {
        top_0 = top_0 > 0?top_0:0;
        height = this$static.startBounds.height_0;
        min_1(this$static.clientHeight_0 - height, top_0) > 0 && (top_0 = max_0(2, min_1(this$static.clientHeight_0 - height, top_0)));
      }
    }
    if (!this$static.constrainHorizontal) {
      this$static.xLeft != -1 && (left = max_0(this$static.startBounds.x - this$static.xLeft, left));
      this$static.xRight != -1 && (left = min_1(this$static.startBounds.x + this$static.xRight, left));
    }
    if (!this$static.constrainVertical) {
      this$static.xTop != -1 && (top_0 = max_0(this$static.startBounds.y - this$static.xTop, top_0));
      this$static.xBottom != -1 && (top_0 = min_1(this$static.startBounds.y + this$static.xBottom, top_0));
    }
    this$static.lastX = left;
    this$static.lastY = top_0;
    evt = new DragMoveEvent_0(this$static.lastX, this$static.lastY, event_0);
    $castFireEventFromSource(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, evt, this$static);
    if (evt.cancelled) {
      $cancelDrag(this$static);
      return;
    }
    tl = evt.x != this$static.lastX?evt.x:this$static.lastX;
    tt = evt.y != this$static.lastY?evt.y:this$static.lastY;
    this$static.useProxy?$setXY(this$static.proxyEl, new Point_0(tl, tt)):$setXY(this$static.dragWidgetElement, new Point_0(tl, tt));
  }
}

function $release(this$static){
  $cancelDrag(this$static);
  $removeHandler(this$static.handlerRegistration.real);
}

function $setXConstraint(this$static, left, right){
  this$static.xLeft = left;
  this$static.xRight = right;
}

function $setYConstraint(this$static, top_0, bottom){
  this$static.xTop = top_0;
  this$static.xBottom = bottom;
}

function $startDrag(this$static, event_0){
  var de;
  de = new DragStartEvent_0(this$static.startBounds.x, this$static.startBounds.y, event_0);
  $castFireEventFromSource(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, de, this$static);
  if (de.cancelled) {
    $cancelDrag(this$static);
    return;
  }
  this$static.dragging = true;
  $addUnselectableStyle($doc.body);
  this$static.useProxy || $makePositionable(this$static.dragWidget.getElement_0(), false);
  event_0.preventDefault();
  $cover((!instance_3 && (instance_3 = new Shim_0) , instance_3), true);
  this$static.lastX = this$static.startBounds.x;
  this$static.lastY = this$static.startBounds.y;
  if (this$static.useProxy) {
    !this$static.proxyEl && (this$static.proxyEl = $createProxy(this$static.appearance));
    $appendChild($doc.body, this$static.proxyEl);
    $setVisibility(this$static.proxyEl, true);
    $setZIndex(this$static.proxyEl, ($clinit_XDOM() , $clinit_XDOM() , ++zIndexId));
    $makePositionable(this$static.proxyEl, true);
    this$static.sizeProxyToSource?$setBounds_3(this$static.proxyEl, this$static.startBounds):$setXY(this$static.proxyEl, new Point_0(this$static.startBounds.x + 50, this$static.startBounds.y + 50));
    de.height_0 > 0 && de.width_0 > 0?$setSize_1(this$static.proxyEl, de.width_0, de.height_0, true):de.height_0 > 0?$setHeight_0(this$static.proxyEl, de.height_0, true):de.width_0 > 0 && $setWidth_0(this$static.proxyEl, de.width_0, true);
  }
   else 
    this$static.updateZIndex && $setZIndex(this$static.dragWidget.getElement_0(), ($clinit_XDOM() , $clinit_XDOM() , ++zIndexId));
}

function $stopDrag(this$static){
  var de, rect;
  $remove_10(this$static.preview);
  if (this$static.dragging) {
    this$static.dragging = false;
    if (this$static.useProxy) {
      if (this$static.moveAfterProxyDrag) {
        rect = $getBounds(this$static.proxyEl, false);
        $setXY(this$static.dragWidget.getElement_0(), new Point_0(rect.x, rect.y));
      }
      $setVisibility(this$static.proxyEl, false);
      $disableTextSelection(this$static.proxyEl, false);
      $removeFromParent_0(this$static.proxyEl);
    }
    de = new DragEndEvent_0(this$static.lastX, this$static.lastY);
    $castFireEventFromSource(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, de, this$static);
    $removeUnselectableStyle($doc.body);
    $uncover((!instance_3 && (instance_3 = new Shim_0) , instance_3));
  }
}

function Draggable_0(dragComponent){
  Draggable_2.call(this, dragComponent, dragComponent, new DraggableDefaultAppearance_0);
}

function Draggable_2(dragComponent, handle, appearance){
  this.dragWidget = dragComponent;
  this.appearance = appearance;
  this.dragWidgetElement = this.dragWidget.getElement_0();
  this.handler = new Draggable$1_0(this);
  this.handlerRegistration = $addDomHandler(handle, this.handler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_3));
  this.preview = new Draggable$2_0(this);
  this.preview.autoHide = false;
}

defineSeed(658, 1, makeCastMap([Q$Draggable]), Draggable_0);
_.appearance = null;
_.clientHeight_0 = 0;
_.clientWidth_0 = 0;
_.constrainClient = true;
_.constrainHorizontal = false;
_.constrainVertical = false;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragWidget = null;
_.dragWidgetElement = null;
_.dragging = false;
_.enabled = true;
_.eventBus = null;
_.handler = null;
_.handlerRegistration = null;
_.lastX = 0;
_.lastY = 0;
_.moveAfterProxyDrag = true;
_.preview = null;
_.proxyEl = null;
_.sizeProxyToSource = true;
_.startBounds = null;
_.startDragDistance = 2;
_.updateZIndex = true;
_.useProxy = true;
_.xBottom = -1;
_.xLeft = -1;
_.xRight = -1;
_.xTop = -1;
function Draggable$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(659, 1, makeCastMap([Q$MouseDownHandler, Q$EventHandler]), Draggable$1_0);
_.onMouseDown = function onMouseDown_0(event_0){
  $onMouseDown_0(this.this$0, event_0);
}
;
_.this$0 = null;
function Draggable$2_0(this$0){
  this.this$0 = this$0;
  BaseEventPreview_0.call(this);
}

defineSeed(660, 574, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), Draggable$2_0);
_.onPreview = function onPreview_1(event_0){
  var e;
  e = event_0.nativeEvent;
  e.preventDefault();
  switch ($eventGetTypeInt(event_0.nativeEvent.type)) {
    case 128:
      this.this$0.dragging && (e.keyCode || 0) == 27 && $cancelDrag(this.this$0);
      break;
    case 64:
      $onMouseMove(this.this$0, e);
      break;
    case 8:
      $stopDrag(this.this$0);
  }
  return true;
}
;
_.this$0 = null;
function $cover(this$static, shimIframes){
  var body, elements;
  body = $doc.body;
  if (shimIframes) {
    elements = ($clinit_DomQuery() , internalSelect('iframe:not(.x-noshim)', body));
    $shim(this$static, elements);
    elements = internalSelect('object:not(.x-noshim)', body);
    $shim(this$static, elements);
    elements = internalSelect('applet:not(.x-noshim)', body);
    $shim(this$static, elements);
    elements = internalSelect('embed:not(.x-noshim)', body);
    $shim(this$static, elements);
  }
   else {
    $add_15(this$static.shims, $createShim(null, 0, 0, $getClientWidth($doc), $getClientHeight($doc)));
  }
}

function $createShim(element, left, top_0, width, height){
  var e, l_0, parent_0;
  l_0 = new Layer_0($doc.createElement('div'));
  l_0.shimEnabled = true;
  e = l_0.elem;
  !e.visMode || e.visMode == ($clinit_XElement$VisMode() , DISPLAY_0)?$setDisplayed(e, false):$setVisibility(e, false);
  $addClassName(e, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBBL'));
  $setSize_1(e, width, height, false);
  e.style['left'] = left + ($clinit_Style$Unit() , 'px');
  !!e.layer && $sync_0(e.layer, false);
  e.style['top'] = top_0 + 'px';
  !!e.layer && $sync_0(e.layer, false);
  $setInnerHTML(e, '&#160;');
  parent_0 = null;
  !!element && (parent_0 = $getParentElement(element));
  parent_0?parent_0.appendChild(e):$appendChild($doc.body, e);
  e.style['display'] = ($clinit_Style$Display() , 'block');
  element?$setZIndex(e, $getZIndex(element) + 1):$setZIndex(e, ($clinit_XDOM() , $clinit_XDOM() , ++zIndexId));
  return e;
}

function $shim(this$static, elements){
  var bounds, e, i;
  for (i = 0; i < elements.length; ++i) {
    e = elements[i];
    bounds = $getBounds(e, true);
    bounds.height_0 > 0 && bounds.width_0 > 0 && $isVisible_0(e, false) && $add_15(this$static.shims, $createShim(e, bounds.x, bounds.y, bounds.width_0, bounds.height_0));
  }
}

function $uncover(this$static){
  while (this$static.shims.size_0 != 0) {
    $removeFromParent_0(dynamicCastJso($get_10(this$static.shims, 0)));
    $remove_16(this$static.shims, 0);
  }
}

function Shim_0(){
  this.shims = new ArrayList_0;
}

defineSeed(661, 1, {}, Shim_0);
var instance_3 = null;
function AfterAnimateEvent_0(){
}

defineSeed(662, 5, {}, AfterAnimateEvent_0);
_.dispatch = function dispatch_37(handler){
  dynamicCast(handler, Q$AfterAnimateEvent$AfterAnimateHandler).onAfterAnimate(this);
}
;
_.getAssociatedType = function getAssociatedType_38(){
  return TYPE_40;
}
;
var TYPE_40 = null;
defineSeed(663, 123, {});
_.interpolate = function interpolate_0(progress){
  return (1 + Math.cos(3.141592653589793 + progress * 3.141592653589793)) / 2;
}
;
function $getValue_1(from, to, progress){
  return from + (to - from) * progress;
}

defineSeed(664, 1, {});
_.onStart = function onStart_0(){
}
;
_.element = null;
function BeforeAnimateEvent_0(){
}

defineSeed(665, 5, makeCastMap([Q$CancellableEvent]), BeforeAnimateEvent_0);
_.dispatch = function dispatch_38(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_39(){
  return TYPE_41;
}
;
_.isCancelled = function isCancelled_2(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_41 = null;
function CancelAnimationEvent_0(){
}

defineSeed(666, 5, {}, CancelAnimationEvent_0);
_.dispatch = function dispatch_39(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_40(){
  return TYPE_42;
}
;
var TYPE_42 = null;
function $addAfterAnimateHandler(this$static, handler){
  return $addHandler_1(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, (!TYPE_40 && (TYPE_40 = new GwtEvent$Type_0) , TYPE_40), handler);
}

function $onCancel(this$static){
  $castFireEvent(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, new CancelAnimationEvent_0);
}

function $onComplete(this$static){
  this$static.effect.onComplete();
  $castFireEvent(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, new AfterAnimateEvent_0);
}

function $onStart(this$static){
  this$static.effect.onStart();
  $castFireEvent(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, new BeforeAnimateEvent_0);
}

function $onUpdate(this$static, progress){
  $onUpdate_0(this$static.effect, progress);
}

function $run_0(this$static, duration, effect){
  if (this$static.isRunning)
    return false;
  this$static.effect = effect;
  $run(this$static.animation, duration, currentTimeMillis());
  return true;
}

function $run_1(this$static, effect){
  return $run_0(this$static, this$static.duration > 0?this$static.duration:500, effect);
}

function Fx_0(){
  this.animation = new Fx$1_0(this);
  this.duration = 500;
}

defineSeed(667, 1, {}, Fx_0);
_.animation = null;
_.duration = 250;
_.effect = null;
_.eventBus = null;
_.isRunning = false;
function Fx$1_0(this$0){
  this.this$0 = this$0;
  Animation_0.call(this);
}

defineSeed(668, 663, {}, Fx$1_0);
_.onCancel = function onCancel_1(){
  $onCancel(this.this$0);
  this.this$0.isRunning = false;
}
;
_.onComplete = function onComplete_1(){
  $onComplete(this.this$0);
  this.this$0.isRunning = false;
}
;
_.onStart = function onStart_1(){
  this.this$0.isRunning = true;
  $onStart(this.this$0);
}
;
_.onUpdate = function onUpdate_0(progress){
  $onUpdate(this.this$0, progress);
}
;
_.this$0 = null;
function $onComplete_0(this$static){
  $unwrap(this$static.wrapEl, this$static.element, this$static.oBounds);
  this$static.element.style['marginTop'] = this$static.marginTop + ($clinit_Style$Unit() , 'px');
  this$static.element.style['marginLeft'] = this$static.marginLeft + 'px';
  !!this$static.overflow_0 && (this$static.element.style['overflow'] = this$static.overflow_0.getCssName() , undefined);
}

function $onUpdate_0(this$static, progress){
  var v;
  v = round_int($getValue_1(this$static.from, this$static.to, progress));
  this$static.increase(v);
}

function Slide_0(el, dir){
  this.element = el;
  this.dir = dir;
}

defineSeed(669, 664, {});
_.onComplete = function onComplete_2(){
  $onComplete_0(this);
}
;
_.dir = null;
_.from = 0;
_.marginLeft = 0;
_.marginTop = 0;
_.oBounds = null;
_.overflow_0 = null;
_.to = 0;
_.wrapEl = null;
function SlideIn_0(el, dir){
  Slide_0.call(this, el, dir);
}

defineSeed(670, 669, {}, SlideIn_0);
_.increase = function increase(now){
  switch (this.dir.ordinal) {
    case 2:
      $setLeft(this.wrapEl, this.oBounds.width_0 - now);
      $setWidth_0(this.wrapEl, now, false);
      break;
    case 0:
      $setTop(this.wrapEl, this.oBounds.height_0 - now);
      $setHeight_0(this.wrapEl, now, false);
      break;
    case 1:
      this.element.style['marginTop'] = -(this.oBounds.height_0 - now) + ($clinit_Style$Unit() , 'px');
      $setHeight_0(this.wrapEl, now, false);
      break;
    case 3:
      this.element.style['marginLeft'] = -(this.oBounds.width_0 - now) + ($clinit_Style$Unit() , 'px');
      $setWidth_0(this.wrapEl, now, false);
  }
}
;
_.onStart = function onStart_2(){
  var h_0, w;
  this.overflow_0 = parseOverflow(this.element.style['overflow']);
  this.marginTop = parseInt_0(this.element.style['marginTop'], 0);
  this.marginLeft = parseInt_0(this.element.style['marginLeft'], 0);
  this.wrapEl = $doc.createElement('div');
  this.oBounds = $wrap(this.element, this.wrapEl);
  h_0 = this.oBounds.height_0;
  w = this.oBounds.width_0;
  $setSize_1(this.wrapEl, w, h_0, false);
  $setVisible_1(this.element, true);
  $setVisible_1(this.wrapEl, true);
  switch (this.dir.ordinal) {
    case 1:
      $setHeight_0(this.wrapEl, 1, false);
      this.from = 1;
      this.to = this.oBounds.height_0;
      break;
    case 2:
    case 3:
      $setWidth_0(this.wrapEl, 1, false);
      this.from = 1;
      this.to = this.oBounds.width_0;
      break;
    case 0:
      $setHeight_0(this.wrapEl, 1, false);
      this.from = 1;
      this.to = this.oBounds.height_0;
  }
}
;
function SlideOut_0(el, dir){
  Slide_0.call(this, el, dir);
}

defineSeed(671, 669, {}, SlideOut_0);
_.increase = function increase_0(v){
  switch (this.dir.ordinal) {
    case 2:
      this.element.style['marginLeft'] = -(this.oBounds.width_0 - v) + ($clinit_Style$Unit() , 'px');
      $setWidth_0(this.wrapEl, v, false);
      break;
    case 0:
      this.element.style['marginTop'] = -(this.oBounds.height_0 - v) + ($clinit_Style$Unit() , 'px');
      $setHeight_0(this.wrapEl, v, false);
      break;
    case 1:
      $setXY(this.element, new Point_0(-1, v));
      break;
    case 3:
      $setXY(this.element, new Point_0(v, -1));
  }
}
;
_.onComplete = function onComplete_3(){
  $setVisible_1(this.element, false);
  $onComplete_0(this);
}
;
_.onStart = function onStart_3(){
  var h_0, w;
  this.overflow_0 = parseOverflow(this.element.style['overflow']);
  this.marginTop = parseInt_0(this.element.style['marginTop'], 0);
  this.marginLeft = parseInt_0(this.element.style['marginLeft'], 0);
  this.wrapEl = $doc.createElement('div');
  this.oBounds = $wrap(this.element, this.wrapEl);
  h_0 = this.oBounds.height_0;
  w = this.oBounds.width_0;
  $setSize_1(this.wrapEl, w, h_0, false);
  $setVisible_1(this.wrapEl, true);
  $setVisible_1(this.element, true);
  switch (this.dir.ordinal) {
    case 0:
      this.from = this.oBounds.height_0;
      this.to = 1;
      break;
    case 2:
      this.from = this.oBounds.width_0;
      this.to = 0;
      break;
    case 3:
      this.from = $getAbsoluteLeft(this.wrapEl);
      this.to = this.from + $getWidth(this.wrapEl, false);
      break;
    case 1:
      this.from = $getAbsoluteTop(this.wrapEl);
      this.to = this.from + $getHeight(this.wrapEl, false);
  }
}
;
var instance_4 = null;
function XMessages__0(){
}

defineSeed(673, 1, {}, XMessages__0);
function $onOver(parent_0, event_0){
  $onOver_0(parent_0, false, event_0);
  $removeClassName(parent_0, 'GN1NA3IBPN');
}

function $render_0(this$static, cell, value, sb){
  var arrowCls, cls, constantHtml, hasConstantHtml, height, icon, innerWrap, inside, isBoolean, length_0, stylesBuilder, text, w, width;
  constantHtml = cell.text.html;
  hasConstantHtml = constantHtml != null && constantHtml.length != 0;
  isBoolean = value != null && instanceOf(value, Q$Boolean);
  text = hasConstantHtml?cell.text.html:value != null && !isBoolean?htmlEscape(toString__devirtual$(value)):'';
  icon = cell.icon;
  cls = 'GN1NA3IBEN';
  arrowCls = '';
  !!cell.menu && (arrowCls = 'GN1NA3IBCN');
  cls += ' GN1NA3IBAO';
  stylesBuilder = new SafeStylesBuilder_0;
  width = -1;
  if (cell.width_0 != -1) {
    w = cell.width_0;
    w < cell.minWidth && (w = cell.minWidth);
    verifySafeStylesConstraints('width:' + w + 'px;');
    $append_10(stylesBuilder.sb, 'width:' + w + 'px;');
    cls += ' GN1NA3IBFN x-has-width';
    width = w;
  }
   else {
    if (cell.minWidth != -1) {
      (!instance_1 && (instance_1 = new TextMetrics_0) , instance_1).el.className = 'GN1NA3IBDO';
      length_0 = $getWidth_0((!instance_1 && (instance_1 = new TextMetrics_0) , instance_1), text);
      length_0 += 6;
      !!icon && (length_0 += icon.width_0);
      if (cell.minWidth > length_0) {
        $appendTrustedString(stylesBuilder, 'width:' + cell.minWidth + 'px;');
        cls += ' GN1NA3IBFN x-has-width';
        width = cell.minWidth;
      }
    }
  }
  height = cell.height_0;
  height != -1 && $appendTrustedString(stylesBuilder, 'height:' + height + 'px;');
  if (icon) {
    switch (3) {
      case 2:
      case 1:
      case 3:
        arrowCls += ' GN1NA3IBHN';
    }
  }
   else {
    arrowCls += ' GN1NA3IBON';
  }
  value === ($clinit_Boolean() , TRUE) && (cls += ' GN1NA3IBJ2');
  $append_5(sb, $outer(cls, new SafeStylesString_0((new SafeStylesBuilder_0).sb.impl.string)));
  inside = new SafeHtmlBuilder_0;
  innerWrap = arrowCls;
  (($clinit_GXT() , false) || false) && (arrowCls += ' ' + (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBLK'));
  $append_10(inside.sb, "<div class='" + innerWrap + "'>");
  $append_10(inside.sb, "<table cellpadding=0 cellspacing=0 class='GN1NA3IBMN'>");
  if (icon) {
    switch (3) {
      case 3:
        $append_10(inside.sb, '<tr>');
        $writeIcon(this$static, inside, icon, height);
        if (text != null) {
          w = width - (icon?icon.width_0:0) - 4;
          $writeText(this$static, inside, text, w, height);
        }

        $append_10(inside.sb, '<\/tr>');
    }
  }
   else {
    $append_10(inside.sb, '<tr>');
    text != null && $writeText(this$static, inside, text, width, height);
    $append_10(inside.sb, '<\/tr>');
  }
  $append_10(inside.sb, '<\/table>');
  $append_10(inside.sb, '<\/div>');
  $append_5(sb, $render_6(new Frame$FrameOptions_1(valueOf_1(0), (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBMK'), new SafeStylesString_0(stylesBuilder.sb.impl.string)), new SafeHtmlString_0(inside.sb.impl.string)));
  $append_10(sb.sb, '<\/div>');
}

function $writeIcon(this$static, builder, icon, height){
  var adjustedHeight, iconHtml, sb, sb_0;
  iconHtml = $getSafeHtml_0(new ClippedImagePrototype_0(icon.url, icon.left_0, icon.top_0, icon.width_0, icon.height_0));
  if (height == -1) {
    $append_5(builder, (sb = new StringBuilder_0 , sb.impl.string += '<td valign=middle class="' , $append_10(sb, htmlEscape('GN1NA3IBKN')) , sb.impl.string += '">' , $append_10(sb, iconHtml.html) , sb.impl.string += '<\/td>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)));
  }
   else {
    adjustedHeight = height - this$static.heightOffset;
    new SafeStylesString_0('height:' + adjustedHeight + 'px;');
    $append_5(builder, (sb_0 = new StringBuilder_0 , sb_0.impl.string += '<td valign=middle class="' , $append_10(sb_0, htmlEscape('GN1NA3IBKN')) , sb_0.impl.string += '">' , $append_10(sb_0, iconHtml.html) , sb_0.impl.string += '<\/td>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)));
  }
}

function $writeText(this$static, builder, text, width, height){
  var adjustedHeight, sb;
  sb = new SafeStylesBuilder_0;
  if (height > 0) {
    adjustedHeight = height - this$static.heightOffset;
    $append_4(sb, new SafeStylesString_0('height:' + adjustedHeight + 'px;'));
  }
  width > 0 && $append_4(sb, new SafeStylesString_0('width:' + width + 'px;'));
  $append_5(builder, $textWithStyles(new SafeStylesString_0(sb.sb.impl.string), ($clinit_SafeHtmlUtils() , new SafeHtmlString_0(text))));
}

function ButtonCellDefaultAppearance_0(){
  ButtonCellDefaultAppearance_1.call(this, new TableFrame_0);
}

function ButtonCellDefaultAppearance_1(){
  this.style_0 = ($clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$styleInitializer() , style_1);
  ensureInjected(this.style_0);
  this.heightOffset = (new Size_0(($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topBorderInitializer() , topBorder).height_0, ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer() , rightBorder).width_0)).height_0;
}

defineSeed(674, 1, {}, ButtonCellDefaultAppearance_0);
_.heightOffset = 0;
_.style_0 = null;
var arrow = null, arrowBottom = null, split_1 = null, splitBottom = null, style_1 = null;
function ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(676, 1, {}, ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_2(){
  return '.GN1NA3IBEN{cursor:pointer;white-space:nowrap;}.GN1NA3IBFN .GN1NA3IBMN{width:100%;}.GN1NA3IBEN td{text-align:center;}.GN1NA3IBEN td img{float:left;}.GN1NA3IBJN td img,.GN1NA3IBGN td img{float:none;}.GN1NA3IBKN{padding:0 2px;}.GN1NA3IBDO{padding:0 2px;font-family:Tahoma, Arial, Verdana, sans-serif;font-size:11px;font-weight:normal;text-align:center;cursor:pointer;white-space:nowrap;overflow:hidden;}.GN1NA3IBKN div{font-size:1px;}.GN1NA3IBAO .GN1NA3IBHN td,.GN1NA3IBAO .GN1NA3IBIN td,.GN1NA3IBAO .GN1NA3IBON td{line-height:18px;}.GN1NA3IBNN .GN1NA3IBJN .GN1NA3IBKN div,.GN1NA3IBNN .GN1NA3IBGN .GN1NA3IBKN div{height:20px;}.GN1NA3IBNN .GN1NA3IBHN td,.GN1NA3IBNN .GN1NA3IBIN td,.GN1NA3IBNN .GN1NA3IBON td{line-height:24px;}.GN1NA3IBNN .GN1NA3IBJN .GN1NA3IBKN div,.GN1NA3IBNN .GN1NA3IBGN .GN1NA3IBKN div{height:26px;}.GN1NA3IBLN .GN1NA3IBHN td,.GN1NA3IBLN .GN1NA3IBIN td,.GN1NA3IBLN .GN1NA3IBON td,.GN1NA3IBLN .GN1NA3IBKN div{line-height:32px;}.GN1NA3IBLN .GN1NA3IBJN .GN1NA3IBKN div,.GN1NA3IBLN .GN1NA3IBGN .GN1NA3IBKN div{height:34px;}.GN1NA3IBBO{height:' + ($clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$splitInitializer() , split_1.height_0) + 'px;width:' + split_1.width_0 + 'px;overflow:hidden;background:url("' + split_1.url.uri + '") -' + split_1.left_0 + 'px -' + split_1.top_0 + 'px  no-repeat;width:auto;height:auto;background-position:right center;padding-right:14px;background-repeat:no-repeat;}.GN1NA3IBCO{height:' + ($clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$splitBottomInitializer() , splitBottom.height_0) + 'px;width:' + splitBottom.width_0 + 'px;overflow:hidden;background:url("' + splitBottom.url.uri + '") -' + splitBottom.left_0 + 'px -' + splitBottom.top_0 + 'px  no-repeat;width:auto;height:auto;gwt-image:"splitBottom";background-position:center bottom;padding-bottom:14px;background-repeat:no-repeat;}.GN1NA3IBCN{height:' + ($clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$arrowInitializer() , arrow.height_0) + 'px;width:' + arrow.width_0 + 'px;overflow:hidden;background:url("' + arrow.url.uri + '") -' + arrow.left_0 + 'px -' + arrow.top_0 + 'px  no-repeat;width:auto;height:auto;padding-right:10px;background-position:right center;background-repeat:no-repeat;}.GN1NA3IBDN{height:' + ($clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$arrowBottomInitializer() , arrowBottom.height_0) + 'px;width:' + arrowBottom.width_0 + 'px;overflow:hidden;background:url("' + arrowBottom.url.uri + '") -' + arrowBottom.left_0 + 'px -' + arrowBottom.top_0 + 'px  no-repeat;width:auto;height:auto;background-position:center bottom;padding-bottom:14px;background-repeat:no-repeat;}';
}
;
function $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$arrowBottomInitializer(){
  $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$arrowBottomInitializer = nullMethod;
  arrowBottom = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAOCAYAAABq6VM3AAAALUlEQVR42u3TMQ0AAAgEMfybBgP8xEibnISrAgAAAAAAjnoJCJMAYRIAAACeGvgeCPjeNr45AAAAAElFTkSuQmCC')), 200, 14);
}

function $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$arrowInitializer(){
  $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$arrowInitializer = nullMethod;
  arrow = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mNgGFrgPxZMlGKiTB5MAAAf3gj4JnSxiwAAAABJRU5ErkJggg==')), 10, 10);
}

function $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$splitBottomInitializer(){
  $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$splitBottomInitializer = nullMethod;
  splitBottom = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAOCAYAAABq6VM3AAAANklEQVR42u3VAQ0AAAjDMPzrwhcY4Apok0l4XgVk3T2S7mqAyIUCAAD8M0dAGAkQRgIAAMBTCyEZuLtPdFEgAAAAAElFTkSuQmCC')), 200, 14);
}

function $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$splitInitializer(){
  $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$splitInitializer = nullMethod;
  split_1 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAABICAYAAADGScSgAAAAP0lEQVR42u3RsQkAMAgEQPffzIGsTQZIwHQp7uHLQ+EjdjKzq6rjNSAIgiAIfgz70PHFOxq82uYAQRAEwV/hAtuuENY01icUAAAAAElFTkSuQmCC')), 14, 72);
}

function $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_1 = new ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$1_0;
}

function $outer(cls, styles){
  var outer, sb;
  outer = (sb = new StringBuilder_0 , sb.impl.string += '<div class="' , $append_10(sb, htmlEscape(cls)) , sb.impl.string += '" style="' , $append_10(sb, htmlEscape(styles.css)) , sb.impl.string += '">' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string));
  return outer;
}

function $textWithStyles(textStyles, text){
  var outer, sb;
  outer = (sb = new StringBuilder_0 , sb.impl.string += '<td valign=middle style="' , $append_10(sb, htmlEscape(textStyles.css)) , sb.impl.string += '"><div class="' , $append_10(sb, htmlEscape('GN1NA3IBDO')) , sb.impl.string += '" >' , $append_10(sb, text.html) , sb.impl.string += '<\/div><\/td>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string));
  return outer;
}

var background = null, backgroundOverBorder = null, backgroundPressedBorder = null, bottomBorder = null, bottomLeftBorder = null, bottomLeftOverBorder = null, bottomLeftPressedBorder = null, bottomOverBorder = null, bottomPressedBorder = null, bottomRightBorder = null, bottomRightOverBorder = null, bottomRightPressedBorder = null, leftBorder = null, leftOverBorder = null, leftPressedBorder = null, rightBorder = null, rightOverBorder = null, rightPressedBorder = null, style_2 = null, topBorder = null, topLeftBorder = null, topLeftOverBorder = null, topLeftPressedBorder = null, topOverBorder = null, topPressedBorder = null, topRightBorder = null, topRightOverBorder = null, topRightPressedBorder = null;
function ButtonTableFrameResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(688, 1, {}, ButtonTableFrameResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_3(){
  return '.x-has-width .GN1NA3IBG2{width:100%;}.GN1NA3IBD2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$backgroundInitializer() , background.height_0) + 'px;overflow:hidden;background:url("' + background.url.uri + '") -' + background.left_0 + 'px -' + background.top_0 + 'px  repeat-x;height:100%;width:100%;}.GN1NA3IBM2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topLeftBorderInitializer() , topLeftBorder.height_0) + 'px;width:' + topLeftBorder.width_0 + 'px;overflow:hidden;background:url("' + topLeftBorder.url.uri + '") -' + topLeftBorder.left_0 + 'px -' + topLeftBorder.top_0 + 'px  no-repeat;}.GN1NA3IBL2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topBorderInitializer() , topBorder.height_0) + 'px;overflow:hidden;background:url("' + topBorder.url.uri + '") -' + topBorder.left_0 + 'px -' + topBorder.top_0 + 'px  repeat-x;}.GN1NA3IBN2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topRightBorderInitializer() , topRightBorder.height_0) + 'px;width:' + topRightBorder.width_0 + 'px;overflow:hidden;background:url("' + topRightBorder.url.uri + '") -' + topRightBorder.left_0 + 'px -' + topRightBorder.top_0 + 'px  no-repeat;}.GN1NA3IBB2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomLeftBorderInitializer() , bottomLeftBorder.height_0) + 'px;width:' + bottomLeftBorder.width_0 + 'px;overflow:hidden;background:url("' + bottomLeftBorder.url.uri + '") -' + bottomLeftBorder.left_0 + 'px -' + bottomLeftBorder.top_0 + 'px  no-repeat;}.GN1NA3IBA2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomBorderInitializer() , bottomBorder.height_0) + 'px;overflow:hidden;background:url("' + bottomBorder.url.uri + '") -' + bottomBorder.left_0 + 'px -' + bottomBorder.top_0 + 'px  repeat-x;}.GN1NA3IBC2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomRightBorderInitializer() , bottomRightBorder.height_0) + 'px;width:' + bottomRightBorder.width_0 + 'px;overflow:hidden;background:url("' + bottomRightBorder.url.uri + '") -' + bottomRightBorder.left_0 + 'px -' + bottomRightBorder.top_0 + 'px  no-repeat;}.GN1NA3IBH2{width:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$leftBorderInitializer() , leftBorder.width_0) + 'px;overflow:hidden;background:url("' + leftBorder.url.uri + '") -' + leftBorder.left_0 + 'px -' + leftBorder.top_0 + 'px  repeat-y;}.GN1NA3IBK2{width:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer() , rightBorder.width_0) + 'px;overflow:hidden;background:url("' + rightBorder.url.uri + '") -' + rightBorder.left_0 + 'px -' + rightBorder.top_0 + 'px  repeat-y;}.GN1NA3IBH2 div,.GN1NA3IBK2 div{width:3px;}.x-toolbar-mark .GN1NA3IBH2,.x-toolbar-mark .GN1NA3IBD2,.x-toolbar-mark .GN1NA3IBK2{background:none;}.x-toolbar-mark .GN1NA3IBM2,.x-toolbar-mark .GN1NA3IBL2,.x-toolbar-mark .GN1NA3IBN2,.x-toolbar-mark .GN1NA3IBB2,.x-toolbar-mark .GN1NA3IBA2,.x-toolbar-mark .GN1NA3IBC2{background-image:none;}.GN1NA3IBI2 .GN1NA3IBD2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$backgroundOverBorderInitializer() , backgroundOverBorder.height_0) + 'px;overflow:hidden;background:url("' + backgroundOverBorder.url.uri + '") -' + backgroundOverBorder.left_0 + 'px -' + backgroundOverBorder.top_0 + 'px  repeat-x;height:100%;width:100%;}.GN1NA3IBI2 .GN1NA3IBM2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topLeftOverBorderInitializer() , topLeftOverBorder.height_0) + 'px;width:' + topLeftOverBorder.width_0 + 'px;overflow:hidden;background:url("' + topLeftOverBorder.url.uri + '") -' + topLeftOverBorder.left_0 + 'px -' + topLeftOverBorder.top_0 + 'px  no-repeat;}.GN1NA3IBI2 .GN1NA3IBL2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topOverBorderInitializer() , topOverBorder.height_0) + 'px;overflow:hidden;background:url("' + topOverBorder.url.uri + '") -' + topOverBorder.left_0 + 'px -' + topOverBorder.top_0 + 'px  repeat-x;}.GN1NA3IBI2 .GN1NA3IBN2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topRightOverBorderInitializer() , topRightOverBorder.height_0) + 'px;width:' + topRightOverBorder.width_0 + 'px;overflow:hidden;background:url("' + topRightOverBorder.url.uri + '") -' + topRightOverBorder.left_0 + 'px -' + topRightOverBorder.top_0 + 'px  no-repeat;}.GN1NA3IBI2 .GN1NA3IBB2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomLeftOverBorderInitializer() , bottomLeftOverBorder.height_0) + 'px;width:' + bottomLeftOverBorder.width_0 + 'px;overflow:hidden;background:url("' + bottomLeftOverBorder.url.uri + '") -' + bottomLeftOverBorder.left_0 + 'px -' + bottomLeftOverBorder.top_0 + 'px  no-repeat;}.GN1NA3IBI2 .GN1NA3IBA2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomOverBorderInitializer() , bottomOverBorder.height_0) + 'px;overflow:hidden;background:url("' + bottomOverBorder.url.uri + '") -' + bottomOverBorder.left_0 + 'px -' + bottomOverBorder.top_0 + 'px  repeat-x;}.GN1NA3IBI2 .GN1NA3IBK2{width:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightOverBorderInitializer() , rightOverBorder.width_0) + 'px;overflow:hidden;background:url("' + rightOverBorder.url.uri + '") -' + rightOverBorder.left_0 + 'px -' + rightOverBorder.top_0 + 'px  repeat-y;}.GN1NA3IBI2 .GN1NA3IBC2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomRightOverBorderInitializer() , bottomRightOverBorder.height_0) + 'px;width:' + bottomRightOverBorder.width_0 + 'px;overflow:hidden;background:url("' + bottomRightOverBorder.url.uri + '") -' + bottomRightOverBorder.left_0 + 'px -' + bottomRightOverBorder.top_0 + 'px  no-repeat;}.GN1NA3IBI2 .GN1NA3IBH2{width:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$leftOverBorderInitializer() , leftOverBorder.width_0) + 'px;overflow:hidden;background:url("' + leftOverBorder.url.uri + '") -' + leftOverBorder.left_0 + 'px -' + leftOverBorder.top_0 + 'px  repeat-y;}.GN1NA3IBF2 .GN1NA3IBD2{height:' + backgroundOverBorder.height_0 + 'px;overflow:hidden;background:url("' + backgroundOverBorder.url.uri + '") -' + backgroundOverBorder.left_0 + 'px -' + backgroundOverBorder.top_0 + 'px  repeat-x;height:100%;width:100%;}.GN1NA3IBF2 .GN1NA3IBM2{height:' + topLeftOverBorder.height_0 + 'px;width:' + topLeftOverBorder.width_0 + 'px;overflow:hidden;background:url("' + topLeftOverBorder.url.uri + '") -' + topLeftOverBorder.left_0 + 'px -' + topLeftOverBorder.top_0 + 'px  no-repeat;}.GN1NA3IBF2 .GN1NA3IBL2{height:' + topOverBorder.height_0 + 'px;overflow:hidden;background:url("' + topOverBorder.url.uri + '") -' + topOverBorder.left_0 + 'px -' + topOverBorder.top_0 + 'px  repeat-x;}.GN1NA3IBF2 .GN1NA3IBN2{height:' + topRightOverBorder.height_0 + 'px;width:' + topRightOverBorder.width_0 + 'px;overflow:hidden;background:url("' + topRightOverBorder.url.uri + '") -' + topRightOverBorder.left_0 + 'px -' + topRightOverBorder.top_0 + 'px  no-repeat;}.GN1NA3IBF2 .GN1NA3IBB2{height:' + bottomLeftOverBorder.height_0 + 'px;width:' + bottomLeftOverBorder.width_0 + 'px;overflow:hidden;background:url("' + bottomLeftOverBorder.url.uri + '") -' + bottomLeftOverBorder.left_0 + 'px -' + bottomLeftOverBorder.top_0 + 'px  no-repeat;}.GN1NA3IBF2 .GN1NA3IBA2{height:' + bottomOverBorder.height_0 + 'px;overflow:hidden;background:url("' + bottomOverBorder.url.uri + '") -' + bottomOverBorder.left_0 + 'px -' + bottomOverBorder.top_0 + 'px  repeat-x;}.GN1NA3IBF2 .GN1NA3IBK2{width:' + rightOverBorder.width_0 + 'px;overflow:hidden;background:url("' + rightOverBorder.url.uri + '") -' + rightOverBorder.left_0 + 'px -' + rightOverBorder.top_0 + 'px  repeat-y;}.GN1NA3IBF2 .GN1NA3IBC2{height:' + bottomRightOverBorder.height_0 + 'px;width:' + bottomRightOverBorder.width_0 + 'px;overflow:hidden;background:url("' + bottomRightOverBorder.url.uri + '") -' + bottomRightOverBorder.left_0 + 'px -' + bottomRightOverBorder.top_0 + 'px  no-repeat;}.GN1NA3IBF2 .GN1NA3IBH2{width:' + leftOverBorder.width_0 + 'px;overflow:hidden;background:url("' + leftOverBorder.url.uri + '") -' + leftOverBorder.left_0 + 'px -' + leftOverBorder.top_0 + 'px  repeat-y;}.GN1NA3IBJ2 .GN1NA3IBD2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$backgroundPressedBorderInitializer() , backgroundPressedBorder.height_0) + 'px;overflow:hidden;background:url("' + backgroundPressedBorder.url.uri + '") -' + backgroundPressedBorder.left_0 + 'px -' + backgroundPressedBorder.top_0 + 'px  repeat-x;height:100%;width:100%;}.GN1NA3IBJ2 .GN1NA3IBM2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topLeftPressedBorderInitializer() , topLeftPressedBorder.height_0) + 'px;width:' + topLeftPressedBorder.width_0 + 'px;overflow:hidden;background:url("' + topLeftPressedBorder.url.uri + '") -' + topLeftPressedBorder.left_0 + 'px -' + topLeftPressedBorder.top_0 + 'px  no-repeat;}.GN1NA3IBJ2 .GN1NA3IBL2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topPressedBorderInitializer() , topPressedBorder.height_0) + 'px;overflow:hidden;background:url("' + topPressedBorder.url.uri + '") -' + topPressedBorder.left_0 + 'px -' + topPressedBorder.top_0 + 'px  repeat-x;}.GN1NA3IBJ2 .GN1NA3IBN2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topRightPressedBorderInitializer() , topRightPressedBorder.height_0) + 'px;width:' + topRightPressedBorder.width_0 + 'px;overflow:hidden;background:url("' + topRightPressedBorder.url.uri + '") -' + topRightPressedBorder.left_0 + 'px -' + topRightPressedBorder.top_0 + 'px  no-repeat;}.GN1NA3IBJ2 .GN1NA3IBB2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomLeftPressedBorderInitializer() , bottomLeftPressedBorder.height_0) + 'px;width:' + bottomLeftPressedBorder.width_0 + 'px;overflow:hidden;background:url("' + bottomLeftPressedBorder.url.uri + '") -' + bottomLeftPressedBorder.left_0 + 'px -' + bottomLeftPressedBorder.top_0 + 'px  no-repeat;}.GN1NA3IBJ2 .GN1NA3IBA2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomPressedBorderInitializer() , bottomPressedBorder.height_0) + 'px;overflow:hidden;background:url("' + bottomPressedBorder.url.uri + '") -' + bottomPressedBorder.left_0 + 'px -' + bottomPressedBorder.top_0 + 'px  repeat-x;}.GN1NA3IBJ2 .GN1NA3IBK2{width:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightPressedBorderInitializer() , rightPressedBorder.width_0) + 'px;overflow:hidden;background:url("' + rightPressedBorder.url.uri + '") -' + rightPressedBorder.left_0 + 'px -' + rightPressedBorder.top_0 + 'px  repeat-y;}.GN1NA3IBJ2 .GN1NA3IBC2{height:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomRightPressedBorderInitializer() , bottomRightPressedBorder.height_0) + 'px;width:' + bottomRightPressedBorder.width_0 + 'px;overflow:hidden;background:url("' + bottomRightPressedBorder.url.uri + '") -' + bottomRightPressedBorder.left_0 + 'px -' + bottomRightPressedBorder.top_0 + 'px  no-repeat;}.GN1NA3IBJ2 .GN1NA3IBH2{width:' + ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$leftPressedBorderInitializer() , leftPressedBorder.width_0) + 'px;overflow:hidden;background:url("' + leftPressedBorder.url.uri + '") -' + leftPressedBorder.left_0 + 'px -' + leftPressedBorder.top_0 + 'px  repeat-y;}';
}
;
function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$backgroundInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$backgroundInitializer = nullMethod;
  background = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAARMCAYAAABYnPkoAAAAeUlEQVR42u3EOQ7DIBQE0Ln/EZGNF5AN3sTiftL8IlIukGJe8fC+L9F7/6619lOt1XLOEcMwWOM4Et57Ypoma55nYlkWYl1XK4RAxBiJbdusfd+JlBKRc7aO4yDO8ySu67Lu+yae5yFKKUoppZRSSimllFJKKfX3fQBkels+PtpnXAAAAABJRU5ErkJggg==')), 1, 1100);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$backgroundOverBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$backgroundOverBorderInitializer = nullMethod;
  backgroundOverBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAARMCAYAAABYnPkoAAAAhUlEQVR42u3MNQ5CURQE0Nn/snD9SIB8wyE4JHiCDPe9goIVUExzyoP0QOKHZG/EXyLPzggdmfBIZKMTkfPEZyKfXIhCeiWKnv6NKA3uRHn4ICqO6uhpjF9EbfIm6o5gal8wMxpzo+loLYz20rEyOo7u2uhtHFshhBBCCCGEEEIIIYT4fz47RRuz1PdkvwAAAABJRU5ErkJggg==')), 1, 1100);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$backgroundPressedBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$backgroundPressedBorderInitializer = nullMethod;
  backgroundPressedBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAARMCAYAAABYnPkoAAAAkElEQVR42u3L2woBUQCG0f3+JSlJSpKUJCUxRgyGwpwHOTwA3oDL7eMt1H+z7pYZB3drfjghTCJw44c10wRmX+YpeNnTmkUOBe9tTXEBpSWUV1Dxobp+WVPbQH0LjR0099AKoB1CJ4JuDL2E0U9hkMEwh9EBnCO4J5idwbvA8gr+TQghhBBCCCGEEEIIIf6ED0rGTpFBWmozAAAAAElFTkSuQmCC')), 1, 1100);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomBorderInitializer = nullMethod;
  bottomBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAQADAKIAAAAAAP////f39/Dw8MTExP///wAAAAAAACH5BAEAAAUALAAAAAABAAMAAAMDOEIJADs=')), 1, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomLeftBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomLeftBorderInitializer = nullMethod;
  bottomLeftBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIAAAAAAP////f39/Dw8Nra2sTExMLCwv///yH5BAEAAAcALAAAAAADAAMAAAMGaDKkRyUBADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomLeftOverBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomLeftOverBorderInitializer = nullMethod;
  bottomLeftOverBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIFANfs/5i125Wz2tXj8bTJ4v///wAAAAAAACH5BAEAAAUALAAAAAADAAMAAAMGKAOkRSEBADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomLeftPressedBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomLeftPressedBorderInitializer = nullMethod;
  bottomLeftPressedBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIGAJGt15az28nc95m13LTI48fb9////wAAACH5BAEAAAYALAAAAAADAAMAAAMGCFUUYmQkADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomOverBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomOverBorderInitializer = nullMethod;
  bottomOverBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhPgADAJEAANfs/6TD7OTz/wAAACH5BAAAAAAALAAAAAA+AAMAAAIVhI+py+0ropy02ouzDbz7D4biSIYFADs=')), 62, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomPressedBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomPressedBorderInitializer = nullMethod;
  bottomPressedBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhNAADAJEAAMfb98nc95m13AAAACH5BAAAAAAALAAAAAA0AAMAAAIThI+py70Bo5y02luF3rz7D4ZfAQA7')), 52, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomRightBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomRightBorderInitializer = nullMethod;
  bottomRightBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIAAAAAAP////f39/Dw8Nra2sTExMLCwv///yH5BAEAAAcALAAAAAADAAMAAAMGOGJLRScBADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomRightOverBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomRightOverBorderInitializer = nullMethod;
  bottomRightOverBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIFANfs/5i125Wz2tXj8bTJ4v///wAAAAAAACH5BAEAAAUALAAAAAADAAMAAAMGCCNLQSUBADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomRightPressedBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$bottomRightPressedBorderInitializer = nullMethod;
  bottomRightPressedBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIAAJGt15az28nc95m13LTI48fb9////wAAACH5BAEAAAYALAAAAAADAAMAAAMGWAUSNMQkADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$leftBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$leftBorderInitializer = nullMethod;
  leftBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAPoCAYAAAAbQ0RjAAABLklEQVR42u3QS4rCYBAE4L7/HWLEV1RUooJRNASvIRo1hvgWXyCaSA22MP9iLjCL6t236epqabVa+Mz9foc0Gg3F7XaD1Ot1g2q1alCpVBTX6xVSLpcNisWiQT6fN7BtW3G5XCCWZf3FZDKB5HI5xXQ6NQsUhUJBMZvNTE4YhpBSqaSYz+fmNoXjOHi/31gsFt8KHyyXS0itVlNEUfSt/Ytms6lYrVaQz3eyLEMcxxDXdRVJkkDa7bZBp9NBmqZYr9eQbrer2Gw2kF6vh9frhe12C/E8z6Df7yt2ux1kMBgo9vs9ZDgc4vl84nA4QEajkYHv+4rj8QgJgkBxOp0g4/EYj8cD5/OZIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjiX+IHNY/GBHJ2ARkAAAAASUVORK5CYII=')), 3, 1000);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$leftOverBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$leftOverBorderInitializer = nullMethod;
  leftOverBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAPoCAYAAAAbQ0RjAAABXElEQVR42u3QZy+DYRQG4Pd/EzNGzIQghKJoFJEQMWIl9urW6l7eavt26o6O4zxPJfwEH+6P14dz7nMfZXzXR8UWUSBPpIxue6jA8OcYI1tuKjR/MLTp+sWAwUmfDF+W0bfhkPAK9K7ZKN/4QY/eKuER6Fo1t5FhdOhMlKsTuf/iyl0gpXPZLHHtKfKM3kJZxo1AN2/LfjG8JQ7lnAzj1lcmpX/dLnHnrzAMDol7gUG+Ol1jBKpcwfgm8RCskTJsdEs8hurt2qkq0ZPA2I5X4jncIGWCv6MJRJqkTO75JV6iLYEAaRUik8DUfpCSDPM795k+CLWhMmYOw5QoE1lijNmjiIRVYO44KmGLM+ZPVIoz7AnGwmmM4iVGkrF49iHxKrB0niCV4dQYuoukhCvFWLnUSC0y0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8T3587aX+3eFtSAAAAAElFTkSuQmCC')), 3, 1000);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$leftPressedBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$leftPressedBorderInitializer = nullMethod;
  leftPressedBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAPoCAYAAAAbQ0RjAAABUUlEQVR42u3Qx06CQRSG4XPNdg3YSywEK3YJVkRiYowFg4AUCx3s7oE7mLM8/n5X4eJbvMk8yWRmzshYuGjXxRaSkd0Xuym1kPh3nu223ELi236yRKWNZGizYHfVNpLBjbwlvcVf0h/K2X2tjaR3LWupegdJz0rG0o0Okq7ltGWaHQQEUoqk29sWTCuSntUHW8ookj7vtNUHRbgnlFUkA+t528g55D2nYFt5h/DQ3SeHxLf1aOFnh8TvzRN5cUiGvUkPig7hD45KDsnoXtGiZYdkPFyyWMUhmYiULV5VJJP7FTuvKZKpg6pd1BXJ9GHNLhuKZOaobldNRTJ73LCbV0Uyd9KwxJsimY82LfmhSBZOXy31qUgCsTfLfCmS4Nm7Zb8VyWL8wwo/igiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIP4jfgEoEObAPHI8/QAAAABJRU5ErkJggg==')), 3, 1000);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer = nullMethod;
  rightBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAPoCAYAAAAbQ0RjAAABKElEQVR42u3QSYrCABAF0Lr/HaKicSQGB3DASMg1xFlxVhIVghr5TVcv6gq9+LV7m/r1S57PJ37H933I4/FQeJ5naDQahlqtBrnf74pKpWIol8uGUqlkKBQKkCRJFPl83uA4DmQymRim06kil8sZdMFsNlMUi0XIfD63nMVioXBd16C3LZdLfL9fVKtVyGq1UmiF9XqtqNfrBq292WwUzWYTst1ukWXZ33d2u52i1WoZ2u02ZL/f4/P5oNPpQA6Hg6Lb7UKOxyPe7zd6vZ6h3+9DTqeTYjAYQM7ns2I4HEIulwterxdGo5EhCALI9XpVjMdjyO12U4RhCInjGGmaIooigiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCIf4kfmc7GBNgQc/gAAAAASUVORK5CYII=')), 3, 1000);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightOverBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightOverBorderInitializer = nullMethod;
  rightOverBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAPoCAYAAAAbQ0RjAAABXUlEQVR42u3QZy+DARQF4Pu/SVExYiYEIdRuFJEQMWIlVm1aq1OLVgfaUivWcd8h/oIP5+OT3Nx7zpVoASh+A40TYUgkDzwq6seCNr6AutHAH2pGziDhHPCgqHKfQkI2nMPHFgqfQMWgDxK0UT5wpLi34Og/gAQU+Q+gxLUPWQ08/mEtWDRR2qtj64qcwjFwqAg9IfcOlBnbNsLPuFc4jTubkRcTlUN+iPcXbo3jjb7i7g2oNlJvXbyZqPGcQ7ZjHyZqPVpuR3H7atfejX+aaBgPKS6/kFU0Gd/Zu/o20TwZgewbeDEQhRxcAxlFy9SFImGhdToGOUwC6WegbSYOObLRPnsJ8aUsdMxdQfxpIKXonE8oMoonoGshCTmx0b14AznNAglFz1IacnZrwbWcUdwpikDfSpYgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCOJf4gdzlGl/KMUoLQAAAABJRU5ErkJggg==')), 3, 1000);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightPressedBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$rightPressedBorderInitializer = nullMethod;
  rightPressedBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAPoCAYAAAAbQ0RjAAABZklEQVR42u3Q2U5TURjF8e+ZFYcaJkU0Ag2IFStTA6VQCjExRgWDbSlz5xYE9b7tG+zvcrFXn4KLdfFPzi85OWfvZT+qPbCXmSrsZ60HNrF2BTuo98DGVi9hh40+2OjKBexXsw/24vMZ7Cg+sET6FPa71Qd7tnQCK7YHYE8+VmClzgBs5EMZVu4OwB4tlmDJooMNMV9ysMd87X3ZwUZSx7DUsYM95deWKg42/E/6JIA9/xRPsHwawBLpeLa1iwA2PGjmMoCNLp/DNq4C2Bjvk60GsHHeNFcLYMMN8vUANrke1yk0AtirTA2233SwqY067EvLwV5vNmBf2w42nW3CvnUc7M1WC/a962Bvc+249bWDvdvuxHlvHGxmJ+Lo1sFm89044p2Dze1ex93+OliycAOr/HOw+b0/sLP/DrawfysIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgvAgcQ9KGObAt0HMvwAAAABJRU5ErkJggg==')), 3, 1000);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_2 = new ButtonTableFrameResources_default_InlineClientBundleGenerator$1_0;
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topBorderInitializer = nullMethod;
  topBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAQADAKIAAAAAAP////f398nJyf///wAAAAAAAAAAACH5BAEAAAQALAAAAAABAAMAAAMDOCEJADs=')), 1, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topLeftBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topLeftBorderInitializer = nullMethod;
  topLeftBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIAAAAAAP////f399ra2snJycLCwv///wAAACH5BAEAAAYALAAAAAADAAMAAAMGaENT4SIBADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topLeftOverBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topLeftOverBorderInitializer = nullMethod;
  topLeftOverBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIEAN3w/7bU9ufw96nH8v///wAAAAAAAAAAACH5BAEAAAQALAAAAAADAAMAAAMGSDErIyABADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topLeftPressedBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topLeftPressedBorderInitializer = nullMethod;
  topLeftPressedBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIFAJ654qW/3rTI45az27bK5f///wAAAAAAACH5BAEAAAUALAAAAAADAAMAAAMGWAIyMYQkADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topOverBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topOverBorderInitializer = nullMethod;
  topOverBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhPgADAJEAAPf//6nH8uTz/wAAACH5BAAAAAAALAAAAAA+AAMAAAIVjI+py+0Lopy02ouzFbz7D4biSIYFADs=')), 62, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topPressedBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topPressedBorderInitializer = nullMethod;
  topPressedBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhNAADAJEAALbK5Z654qW/3gAAACH5BAAAAAAALAAAAAA0AAMAAAITjI+py70Co5y02luB3rz7D4ZfAQA7')), 52, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topRightBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topRightBorderInitializer = nullMethod;
  topRightBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIAAAAAAP////f399ra2snJycLCwv///wAAACH5BAEAAAYALAAAAAADAAMAAAMGSGNRIy0BADs=')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topRightOverBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topRightOverBorderInitializer = nullMethod;
  topRightOverBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIEAN3w/7bU9ufw96nH8v///wAAAAAAAAAAACH5BAEAAAQALAAAAAADAAMAAAMFOEGi0AkAOw==')), 3, 3);
}

function $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topRightPressedBorderInitializer(){
  $clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$topRightPressedBorderInitializer = nullMethod;
  topRightPressedBorder = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAKIAAJ654qW/3rTI45az27bK5f///wAAAAAAACH5BAEAAAUALAAAAAADAAMAAAMGCFIxQmQkADs=')), 3, 3);
}

function IconButtonDefaultAppearance_0(){
  this.style_0 = ($clinit_IconButtonDefaultAppearance_ToolButtonResources_default_InlineClientBundleGenerator$styleInitializer() , style_3);
  $ensureInjected_1(this.style_0);
}

defineSeed(717, 1, {}, IconButtonDefaultAppearance_0);
_.style_0 = null;
var style_3 = null;
function $ensureInjected_1(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push(toInject, '.GN1NA3IBHP{width:15px;height:15px;overflow:hidden;margin-left:2px;background-repeat:no-repeat;cursor:pointer;}');
    schedule();
    return true;
  }
  return false;
}

function IconButtonDefaultAppearance_ToolButtonResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(721, 1, {}, IconButtonDefaultAppearance_ToolButtonResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_4(){
  return '.GN1NA3IBHP{width:15px;height:15px;overflow:hidden;margin-left:2px;background-repeat:no-repeat;cursor:pointer;}';
}
;
_.injected = false;
function $clinit_IconButtonDefaultAppearance_ToolButtonResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_IconButtonDefaultAppearance_ToolButtonResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_3 = new IconButtonDefaultAppearance_ToolButtonResources_default_InlineClientBundleGenerator$1_0;
}

function BoxLayoutDefaultAppearance_0(){
  ensureInjected(($clinit_BoxLayoutDefaultAppearance_BoxLayoutBaseResources_default_InlineClientBundleGenerator$styleInitializer() , style_4));
}

defineSeed(724, 1, {}, BoxLayoutDefaultAppearance_0);
var style_4 = null;
function BoxLayoutDefaultAppearance_BoxLayoutBaseResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(726, 1, {}, BoxLayoutDefaultAppearance_BoxLayoutBaseResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_5(){
  return '.GN1NA3IBAQ{overflow:hidden;}.GN1NA3IBBQ{overflow:hidden;zoom:1;position:relative;left:0;top:0;}';
}
;
function $clinit_BoxLayoutDefaultAppearance_BoxLayoutBaseResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BoxLayoutDefaultAppearance_BoxLayoutBaseResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_4 = new BoxLayoutDefaultAppearance_BoxLayoutBaseResources_default_InlineClientBundleGenerator$1_0;
}

function $template_1(){
  var outer, sb;
  outer = (sb = new StringBuilder_0 , sb.impl.string += '<div class="' , $append_10(sb, htmlEscape('GN1NA3IBAQ')) , sb.impl.string += '"><div class="' , $append_10(sb, htmlEscape('GN1NA3IBBQ')) , sb.impl.string += '"><\/div><\/div>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string));
  return outer;
}

function $addUnselectableStyle(element){
  $addClassName(element, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBCL'));
  $addClassName(element, 'GN1NA3IBKQ');
}

function $createProxy(this$static){
  var proxyEl;
  proxyEl = $doc.createElement('div');
  proxyEl.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  $setClassName(proxyEl, this$static.proxyClass);
  $disableTextSelection(proxyEl, true);
  return proxyEl;
}

function $removeUnselectableStyle(element){
  $removeClassName(element, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBCL'));
  $removeClassName(element, 'GN1NA3IBKQ');
}

function DraggableDefaultAppearance_0(){
  this.style_0 = ($clinit_DraggableDefaultAppearance_DraggableResources_opera_default_InlineClientBundleGenerator$styleInitializer() , style_7);
  ensureInjected(this.style_0);
  this.proxyClass = 'GN1NA3IBLQ';
}

defineSeed(742, 1, {}, DraggableDefaultAppearance_0);
_.proxyClass = null;
_.style_0 = null;
var style_7 = null;
function DraggableDefaultAppearance_DraggableResources_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(744, 1, {}, DraggableDefaultAppearance_DraggableResources_opera_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_8(){
  return '.GN1NA3IBKQ{cursor:default !important;}.GN1NA3IBLQ{border:1px dashed #3b5a82;background-color:#c3daf9;z-index:20000;overflow:hidden;position:absolute;left:0;top:0;cursor:move;opacity:0.5;}';
}
;
function $clinit_DraggableDefaultAppearance_DraggableResources_opera_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_DraggableDefaultAppearance_DraggableResources_opera_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_7 = new DraggableDefaultAppearance_DraggableResources_opera_default_InlineClientBundleGenerator$1_0;
}

function $applyAnchorDirectionStyle(this$static, anchorEl, anchor){
  switch (anchor.ordinal) {
    case 3:
      $addClassName(anchorEl, this$static.style_0.anchorBottom());
      break;
    case 0:
      $addClassName(anchorEl, this$static.style_0.anchorLeft());
      break;
    case 1:
      $addClassName(anchorEl, this$static.style_0.anchorRight());
  }
}

function $applyAnchorStyle(this$static, anchorEl){
  $addClassName(anchorEl, this$static.style_0.anchor_0());
}

function $autoWidth(this$static, parent_0, minWidth, maxWidth){
  var hw, tw, w;
  tw = $getTextWidth($selectNode(parent_0, '.' + this$static.style_0.text_0()));
  hw = $getTextWidth($selectNode(parent_0, '.' + this$static.style_0.heading()));
  w = tw > hw?tw:hw;
  w += 10;
  w += $selectNode(parent_0, '.' + this$static.style_0.tools_0()).offsetWidth || 0;
  return constrain(w, minWidth, maxWidth);
}

function $getToolsElement(this$static, parent_0){
  return $selectNode(parent_0, '.' + this$static.style_0.tools_0());
}

function $removeAnchorStyle(this$static, anchorEl){
  $removeClassName(anchorEl, this$static.style_0.anchor_0());
}

function $updateContent(this$static, parent_0, heading, text){
  var header;
  header = $selectNode(parent_0, '.' + this$static.style_0.heading());
  if (heading != null && !$equals_3(heading, '')) {
    $setInnerHTML(header, heading);
    $getParentElement(header).style['display'] = ($clinit_Style$Display() , 'block');
  }
   else {
    $getParentElement(header).style['display'] = ($clinit_Style$Display() , 'none');
  }
  $setInnerHTML($selectNode(parent_0, '.' + this$static.style_0.text_0()), text);
}

function TipDefaultAppearance_1(resources){
  this.style_0 = resources.style_2();
  ensureInjected(this.style_0);
  this.frame = new NestedDivFrame_0(new TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator_0);
}

defineSeed(747, 1, {});
_.autoWidth = function autoWidth_0(parent_0, minWidth, maxWidth){
  return $autoWidth(this, parent_0, minWidth, maxWidth);
}
;
_.render_0 = function render_1(sb){
  $render_4(this.frame, sb, ($clinit_Frame() , $render_9(this.style_0)));
}
;
_.frame = null;
_.style_0 = null;
function ErrorTipDefaultAppearance_0(){
  TipDefaultAppearance_1.call(this, new ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator_0);
  this.frame = new NestedDivFrame_0(new ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator_0);
}

defineSeed(746, 747, {}, ErrorTipDefaultAppearance_0);
_.autoWidth = function autoWidth_1(parent_0, minWidth, maxWidth){
  return $autoWidth(this, parent_0, minWidth, maxWidth) + 25;
}
;
_.render_0 = function render_2(sb){
  $render_4(this.frame, sb, ($clinit_Frame() , $render_1(dynamicCast(this.style_0, Q$ErrorTipDefaultAppearance$ErrorTipStyle))));
}
;
function ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator_0(){
}

defineSeed(748, 1, {}, ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator_0);
_.style_1 = function style_9(){
  return $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$styleInitializer() , style_8;
}
;
var background_0 = null, bottomBorder_0 = null, bottomLeftBorder_0 = null, bottomRightBorder_0 = null, leftBorder_0 = null, rightBorder_0 = null, style_8 = null, topBorder_0 = null, topLeftBorder_0 = null, topRightBorder_0 = null;
function ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(749, 1, {}, ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$1_0);
_.bodyWrap = function bodyWrap(){
  return 'GN1NA3IBGS';
}
;
_.bottom_0 = function bottom_0(){
  return 'GN1NA3IBHS';
}
;
_.bottomLeft = function bottomLeft_0(){
  return 'GN1NA3IBIS';
}
;
_.bottomRight = function bottomRight_0(){
  return 'GN1NA3IBJS';
}
;
_.content_1 = function content_1(){
  return 'GN1NA3IBKS';
}
;
_.contentArea = function contentArea(){
  return 'GN1NA3IBLS';
}
;
_.getText = function getText_9(){
  return '.GN1NA3IBLS{position:relative;outline:none;}.GN1NA3IBKS{overflow:hidden;background:url("' + ($clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$backgroundInitializer() , background_0.url.uri) + '") -' + background_0.left_0 + 'px -' + background_0.top_0 + 'px  repeat;overflow:visible;height:auto;width:auto;}.GN1NA3IBBT{height:' + ($clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$topLeftBorderInitializer() , topLeftBorder_0.height_0) + 'px;width:' + topLeftBorder_0.width_0 + 'px;overflow:hidden;background:url("' + topLeftBorder_0.url.uri + '") -' + topLeftBorder_0.left_0 + 'px -' + topLeftBorder_0.top_0 + 'px  no-repeat;padding-left:' + topLeftBorder_0.width_0 + 'px;zoom:1;width:auto;height:auto;}.GN1NA3IBAT{height:' + ($clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$topBorderInitializer() , topBorder_0.height_0) + 'px;overflow:hidden;background:url("' + topBorder_0.url.uri + '") -' + topBorder_0.left_0 + 'px -' + topBorder_0.top_0 + 'px  repeat-x;width:auto;}.GN1NA3IBCT{overflow:hidden;background:url("' + ($clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$topRightBorderInitializer() , topRightBorder_0.url.uri) + '") -' + topRightBorder_0.left_0 + 'px -' + topRightBorder_0.top_0 + 'px  repeat;background-repeat:no-repeat;background-position:right 0;zoom:1;padding-right:' + topRightBorder_0.width_0 + 'px;width:auto;}.GN1NA3IBIS{overflow:hidden;background:url("' + ($clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$bottomLeftBorderInitializer() , bottomLeftBorder_0.url.uri) + '") -' + bottomLeftBorder_0.left_0 + 'px -' + bottomLeftBorder_0.top_0 + 'px  repeat;background-repeat:no-repeat;width:auto;background-position:0 bottom;padding-left:' + bottomLeftBorder_0.width_0 + 'px;zoom:1;line-height:1px;font-size:1px;}.GN1NA3IBHS{overflow:hidden;background:url("' + ($clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$bottomBorderInitializer() , bottomBorder_0.url.uri) + '") -' + bottomBorder_0.left_0 + 'px -' + bottomBorder_0.top_0 + 'px  repeat;background-position:0 bottom;zoom:1;width:auto;overflow:visible;height:' + bottomBorder_0.height_0 + 'px;line-height:1px;font-size:1px;}.GN1NA3IBJS{overflow:hidden;background:url("' + ($clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$bottomRightBorderInitializer() , bottomRightBorder_0.url.uri) + '") -' + bottomRightBorder_0.left_0 + 'px -' + bottomRightBorder_0.top_0 + 'px  repeat;background-repeat:no-repeat;background-position:right bottom;padding-right:' + bottomRightBorder_0.width_0 + 'px;zoom:1;width:auto;height:auto;line-height:1px;font-size:1px;}.GN1NA3IBMS{width:' + ($clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$leftBorderInitializer() , leftBorder_0.width_0) + 'px;overflow:hidden;background:url("' + leftBorder_0.url.uri + '") -' + leftBorder_0.left_0 + 'px -' + leftBorder_0.top_0 + 'px  repeat-y;padding-left:' + bottomLeftBorder_0.width_0 + 'px;zoom:1;overflow:visible;height:auto;width:auto;}.GN1NA3IBPS{overflow:hidden;background:url("' + ($clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer() , rightBorder_0.url.uri) + '") -' + rightBorder_0.left_0 + 'px -' + rightBorder_0.top_0 + 'px  repeat;background-repeat:repeat-y;background-position:right 0;padding-right:' + rightBorder_0.width_0 + 'px;overflow:visible;width:auto;height:auto;}.GN1NA3IBKS{background-color:white;}.GN1NA3IBIS{background-repeat:no-repeat;}';
}
;
_.left_1 = function left_0(){
  return 'GN1NA3IBMS';
}
;
_.right_0 = function right_0(){
  return 'GN1NA3IBPS';
}
;
_.top_1 = function top_1(){
  return 'GN1NA3IBAT';
}
;
_.topLeft = function topLeft_0(){
  return 'GN1NA3IBBT';
}
;
_.topRight = function topRight_0(){
  return 'GN1NA3IBCT';
}
;
function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$backgroundInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$backgroundInitializer = nullMethod;
  background_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAwADAIAAAP///wAAACH5BAEAAAAALAAAAAADAAMAAAIDhH8FADs=')), 3, 3);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$bottomBorderInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$bottomBorderInitializer = nullMethod;
  bottomBorder_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAGCAYAAAACEPQxAAAAIElEQVR42mP4DwQM7969+89w9+5dKOtGYdp/hoWG8v8BSM0Tw+E1d3gAAAAASUVORK5CYII=')), 1, 6);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$bottomLeftBorderInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$bottomLeftBorderInitializer = nullMethod;
  bottomLeftBorder_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVR42mO4Eub2f6Gh/H8QePfu3f+7d++C2Qx3u1vBEjcK01AkGUAApgtZkgEG0CUZkAFMEoQZ0AHITpACAO91TCFmuYJHAAAAAElFTkSuQmCC')), 6, 6);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$bottomRightBorderInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$bottomRightBorderInitializer = nullMethod;
  bottomRightBorder_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAQElEQVR42mP4DwR37979/+7dOxDz/0JD+f9Xwtz+MyAL3ihMA0vc7W79z4AuCFYNAlgFQQAkgCEIAiABsJloAAC020whDW6KSQAAAABJRU5ErkJggg==')), 6, 6);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$leftBorderInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$leftBorderInitializer = nullMethod;
  leftBorder_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAAHElEQVR42mNYaCj//0Zh2v937979v3v37n8YAADcpBP2oX1E4wAAAABJRU5ErkJggg==')), 6, 1);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer = nullMethod;
  rightBorder_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAAHUlEQVR42mP4DwV37979/+7du/83CtP+LzSU/w8AFH8T9qeaHyoAAAAASUVORK5CYII=')), 6, 1);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_8 = new ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$1_0;
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$topBorderInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$topBorderInitializer = nullMethod;
  topBorder_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAGCAYAAAACEPQxAAAAIElEQVR42mNYaCj/n+FGYdp/hnfv3v1nuHv3LpT1HwgABgsTw6Y5yzcAAAAASUVORK5CYII=')), 1, 6);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$topLeftBorderInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$topLeftBorderInitializer = nullMethod;
  topLeftBorder_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOUlEQVR42mNgQAN3u1v/Xwlz+48iCBJYaCgPxhiCNwrT/oMAVsF37979B5uJLnj37t3/cNXIgiAAAN3OTCFzp9r0AAAAAElFTkSuQmCC')), 6, 6);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$topRightBorderInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$topRightBorderInitializer = nullMethod;
  topRightBorder_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOklEQVR42mO4Eub2/253638GdLDQUP4/CIMUoEj8B4IbhWmYku/evfuPVfLu3bv/0SXBdoIEkCVhugCjNEwh/moBNQAAAABJRU5ErkJggg==')), 6, 6);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator = nullMethod;
  externalImage3 = $moduleBase + 'D4A6540E96842E03327A041C241D2B63.cache.png';
}

function $styleInitializer(){
  style_10 = new ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$1_0;
}

function ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator_0(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator();
}

defineSeed(760, 1, {}, ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator_0);
_.style_2 = function style_11(){
  return $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$styleInitializer() , style_10;
}
;
var anchorBottom = null, anchorLeft = null, anchorRight = null, errorIcon = null, externalImage3, style_10 = null;
function ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(761, 1, makeCastMap([Q$ErrorTipDefaultAppearance$ErrorTipStyle]), ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$1_0);
_.anchor_0 = function anchor_0(){
  return 'GN1NA3IBDT';
}
;
_.anchorBottom = function anchorBottom_0(){
  return 'GN1NA3IBET';
}
;
_.anchorLeft = function anchorLeft_0(){
  return 'GN1NA3IBFT';
}
;
_.anchorRight = function anchorRight_0(){
  return 'GN1NA3IBGT';
}
;
_.getText = function getText_10(){
  return '.GN1NA3IBKT{padding:2px;font-size:12px;}.GN1NA3IBLT{float:right;}.GN1NA3IBHT{color:#444;font:bold 11px tahoma, arial, helvetica, sans-serif;}.GN1NA3IBIT{color:#444;font:11px tahoma, arial, helvetica, sans-serif;}.GN1NA3IBET{height:' + ($clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$anchorBottomInitializer() , ($clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator() , anchorBottom).height_0) + 'px;width:' + anchorBottom.width_0 + 'px;overflow:hidden;background:url("' + anchorBottom.url.uri + '") -' + anchorBottom.left_0 + 'px -' + anchorBottom.top_0 + 'px  no-repeat;position:absolute;}.GN1NA3IBGT{height:' + ($clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$anchorRightInitializer() , anchorRight.height_0) + 'px;width:' + anchorRight.width_0 + 'px;overflow:hidden;background:url("' + anchorRight.url.uri + '") -' + anchorRight.left_0 + 'px -' + anchorRight.top_0 + 'px  no-repeat;position:absolute;}.GN1NA3IBFT{height:' + ($clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$anchorLeftInitializer() , anchorLeft.height_0) + 'px;width:' + anchorLeft.width_0 + 'px;overflow:hidden;background:url("' + anchorLeft.url.uri + '") -' + anchorLeft.left_0 + 'px -' + anchorLeft.top_0 + 'px  no-repeat;position:absolute;}.GN1NA3IBHT{font:bold 11px tahoma, arial, helvetica, sans-serif;color:#444;}.GN1NA3IBIT{font:11px tahoma, arial, helvetica, sans-serif;color:#444;padding-left:0;}.GN1NA3IBJT{height:' + ($clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$errorIconInitializer() , errorIcon.height_0) + 'px;width:' + errorIcon.width_0 + 'px;overflow:hidden;background:url("' + errorIcon.url.uri + '") -' + errorIcon.left_0 + 'px -' + errorIcon.top_0 + 'px  no-repeat;width:auto;height:auto;background-position:-1 4px;padding-left:20px;}';
}
;
_.heading = function heading_0(){
  return 'GN1NA3IBHT';
}
;
_.text_0 = function text_0(){
  return 'GN1NA3IBIT';
}
;
_.tip_0 = function tip(){
  return 'GN1NA3IBKT';
}
;
_.tools_0 = function tools(){
  return 'GN1NA3IBLT';
}
;
function $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$anchorBottomInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$anchorBottomInitializer = nullMethod;
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator();
  anchorBottom = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAYAAABmBXS+AAAAVElEQVR42mO4/+nHfxB+9ek/BobJMdTMOP7/5qMPWBWBxEHyYEXztlzHqggkDlYEAthMg5sCA9hMQzEFWSHMNAxTsJmG1RR003AqQDYNryKYQnQxABRnx++6FJdrAAAAAElFTkSuQmCC')), 9, 10);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$anchorLeftInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$anchorLeftInitializer = nullMethod;
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator();
  anchorLeft = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAOklEQVR42mNgwANqZhz/D8L3P/34j1fBvC3X/9989AFTIbqCV5/+wzFBBXCFhBSQbiJJbiTZ1/jCEQBrQsfv1FZtNAAAAABJRU5ErkJggg==')), 10, 9);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$anchorRightInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$anchorRightInitializer = nullMethod;
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator();
  anchorRight = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAPElEQVR42mO4/+nH/5oZx8GYAR8AKbz56MP/eVuu49fw6tP//zCMVwOyQrwasCnEpoE8E/G6kWhfExuOAKRxx+8lO1+5AAAAAElFTkSuQmCC')), 10, 9);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$errorIconInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$errorIconInitializer = nullMethod;
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator();
  errorIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(externalImage3)), 16, 16);
}

function $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  $styleInitializer($clinit_ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator());
}

function $render_1(){
  var outer, sb;
  outer = (sb = new StringBuilder_0 , sb.impl.string += '<div class="' , $append_10(sb, htmlEscape('GN1NA3IBLT')) , sb.impl.string += '"><\/div><div><span class="' , $append_10(sb, htmlEscape('GN1NA3IBHT')) , sb.impl.string += '"><\/span><\/div><div class="' , $append_10(sb, htmlEscape('GN1NA3IBJT')) , sb.impl.string += '"><span class="' , $append_10(sb, htmlEscape('GN1NA3IBIT')) , sb.impl.string += '"><\/span><\/div>\n' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string));
  return outer;
}

function $clinit_Frame(){
  $clinit_Frame = nullMethod;
  new Frame$FrameOptions_0;
}

function $clinit_Frame$FrameOptions(){
  $clinit_Frame$FrameOptions = nullMethod;
  EMPTY = new SafeStylesString_0('');
}

function $getFrameStyle(this$static){
  if (!this$static.frameStyle) {
    return EMPTY;
  }
  return this$static.frameStyle;
}

function Frame$FrameOptions_0(){
  $clinit_Frame$FrameOptions();
}

function Frame$FrameOptions_1(tabIndex, frameClasses, frameStyle){
  $clinit_Frame$FrameOptions();
  this.tabIndex_0 = !tabIndex?'':'' + tabIndex.value_0;
  this.frameClasses = frameClasses;
  this.frameStyle = frameStyle;
}

defineSeed(788, 1, {}, Frame$FrameOptions_0, Frame$FrameOptions_1);
_.frameClasses = '';
_.frameStyle = null;
_.tabIndex_0 = '';
var EMPTY;
function $render_4(this$static, builder, content_0){
  $append_5(builder, $render_5(this$static.style_0, content_0));
}

function NestedDivFrame_0(resources){
  this.resources = resources;
  this.style_0 = resources.style_1();
  ensureInjected(this.style_0);
}

defineSeed(789, 1, {}, NestedDivFrame_0);
_.resources = null;
_.style_0 = null;
function $render_5(style, content_0){
  var outer;
  outer = $render0(style.contentArea(), style.topLeft(), style.topRight(), style.top_1(), style.bodyWrap(), style.left_1(), style.right_0(), style.content_1(), content_0, style.bottomLeft(), style.bottomRight(), style.bottom_0());
  return outer;
}

function $render0(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += '<div class="';
  $append_10(sb, htmlEscape(arg0));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg1));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg2));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg3));
  sb.impl.string += '"><\/div><\/div><\/div><div class="';
  $append_10(sb, htmlEscape(arg4));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg5));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg6));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg7));
  sb.impl.string += '">';
  $append_10(sb, arg8.html);
  sb.impl.string += '<\/div><\/div><\/div><div class="';
  $append_10(sb, htmlEscape(arg9));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg10));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg11));
  sb.impl.string += '"><\/div><\/div><\/div><\/div><\/div>\n';
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $onOver_0(parent_0, over){
  over?$addClassName(parent_0, 'GN1NA3IBI2'):$removeClassName(parent_0, 'GN1NA3IBI2');
}

function TableFrame_0(){
  this.style_0 = ($clinit_ButtonTableFrameResources_default_InlineClientBundleGenerator$styleInitializer() , style_2);
  ensureInjected(this.style_0);
}

defineSeed(792, 1, {}, TableFrame_0);
_.style_0 = null;
function $render_6(options, content_0){
  var outer;
  outer = $render0_0(options.frameClasses, $getFrameStyle(options), options.tabIndex_0, content_0);
  return outer;
}

function $render0_0(arg1, arg2, arg3, arg10){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += '<table hideFocus="-1" class="';
  $append_10(sb, htmlEscape('GN1NA3IBG2'));
  sb.impl.string += ' ';
  $append_10(sb, htmlEscape(arg1));
  sb.impl.string += '" style="';
  $append_10(sb, htmlEscape(arg2.css));
  sb.impl.string += '" tabIndex="';
  $append_10(sb, htmlEscape(arg3));
  sb.impl.string += '" cellpadding="0" cellspacing="0"><tbody><tr><td class="';
  $append_10(sb, htmlEscape('GN1NA3IBM2'));
  sb.impl.string += '"><\/td><td class="';
  $append_10(sb, htmlEscape('GN1NA3IBL2'));
  sb.impl.string += '"><\/td><td class="';
  $append_10(sb, htmlEscape('GN1NA3IBN2'));
  sb.impl.string += '"><\/td><\/tr><tr><td class="';
  $append_10(sb, htmlEscape('GN1NA3IBH2'));
  sb.impl.string += '"><div><\/div><\/td><td class="';
  $append_10(sb, htmlEscape('GN1NA3IBE2'));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape('GN1NA3IBD2'));
  sb.impl.string += '">';
  $append_10(sb, arg10.html);
  sb.impl.string += '<\/div><\/td><td class="';
  $append_10(sb, htmlEscape('GN1NA3IBK2'));
  sb.impl.string += '"><div><\/div><\/td><\/tr><tr><td class="';
  $append_10(sb, htmlEscape('GN1NA3IBB2'));
  sb.impl.string += '"><\/td><td class="';
  $append_10(sb, htmlEscape('GN1NA3IBA2'));
  sb.impl.string += '"><\/td><td class="';
  $append_10(sb, htmlEscape('GN1NA3IBC2'));
  sb.impl.string += '"><\/td><\/tr><\/tbody><\/table>';
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $onAddSubMenu(this$static, parent_0){
  $addClassName($getFirstChildElement(parent_0), this$static.style_0.menuItemArrow());
}

function $onRemoveSubMenu(this$static, parent_0){
  $removeClassName($getFirstChildElement(parent_0), this$static.style_0.menuItemArrow());
}

function $render_8(this$static, result){
  $append_5(result, $template_4(this$static.style_0));
}

function $setIcon_0(this$static, parent_0, icon){
  var anchor, e, oldIcon;
  anchor = parent_0.firstChild;
  oldIcon = $selectNode(parent_0, '.' + this$static.style_0.menuItemIcon());
  !!oldIcon && $removeFromParent_0(oldIcon);
  if (icon) {
    e = $createElement_0(new ClippedImagePrototype_0(icon.url, icon.left_0, icon.top_0, icon.width_0, icon.height_0));
    $addClassName(e, this$static.style_0.menuItemIcon());
    insertChild(anchor, e, 0);
  }
}

function $setText_1(this$static, parent_0, text){
  var oldIcon;
  oldIcon = $selectNode(parent_0, '.' + this$static.style_0.menuItemIcon());
  text == null || $equals_3('', text)?$setInnerHTML(parent_0.firstChild, text == null || $equals_3('', text)?'&#160;':text):$setInnerText(parent_0.firstChild, text);
  !!oldIcon && $insertFirst(parent_0.firstChild, oldIcon);
}

function MenuItemBaseAppearance_0(resources){
  this.style_0 = resources.style_3();
  ensureInjected(this.style_0);
}

defineSeed(842, 1, {});
_.style_0 = null;
function $applyChecked(parent_0, state){
  state?$addClassName(parent_0, 'GN1NA3IBLUB'):$removeClassName(parent_0, 'GN1NA3IBLUB');
}

defineSeed(843, 1, {});
_.style_0 = null;
function $createItem(childId, needsIndent){
  var div;
  div = $doc.createElement('div');
  div.id = 'x-menu-el-' + childId;
  needsIndent && (div.className = 'GN1NA3IBDVB' , undefined);
  return div;
}

function $getBottomScroller(parent_0){
  var firstChild, firstChildXElement, scroller;
  firstChild = parent_0.lastChild;
  if (!!firstChild && !!firstChild && firstChild.nodeType == 1) {
    firstChildXElement = firstChild;
    if (is_3(firstChildXElement, '.GN1NA3IBIVB')) {
      return firstChildXElement;
    }
  }
  scroller = $doc.createElement('div');
  $addClassName_0(scroller, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['GN1NA3IBFVB', 'GN1NA3IBHVB']));
  $setInnerHTML(scroller, '&nbsp;');
  parent_0.appendChild(scroller);
  return scroller;
}

function $getScrollers(parent_0){
  return $clinit_DomQuery() , internalSelect('.GN1NA3IBFVB', parent_0);
}

function $getTopScroller(parent_0){
  var firstChild, firstChildXElement, scroller;
  firstChild = $getFirstChildElement(parent_0);
  if (firstChild) {
    firstChildXElement = firstChild;
    if (is_3(firstChildXElement, '.GN1NA3IBIVB')) {
      return firstChildXElement;
    }
  }
  scroller = $doc.createElement('div');
  $addClassName_0(scroller, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['GN1NA3IBFVB', 'GN1NA3IBIVB']));
  $setInnerHTML(scroller, '&nbsp;');
  $insertBefore(parent_0, scroller, parent_0.firstChild);
  return scroller;
}

function $hasScrollers(parent_0){
  return ($clinit_DomQuery() , internalSelect('.GN1NA3IBFVB', parent_0)).length > 0;
}

defineSeed(844, 1, {});
_.style_0 = null;
function $template_3(ignoreClass){
  var outer, sb;
  outer = (sb = new StringBuilder_0 , sb.impl.string += '<div class="' , $append_10(sb, htmlEscape('GN1NA3IBPUB')) , sb.impl.string += ' ' , $append_10(sb, htmlEscape(ignoreClass)) , sb.impl.string += '" tabindex="0" hideFocus="true"><div class="' , $append_10(sb, htmlEscape('GN1NA3IBBVB')) , sb.impl.string += '"><\/div><\/div>\n' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string));
  return outer;
}

function $template_4(style){
  var outer;
  outer = $template0(style.menuListItem(), style.menuItem());
  return outer;
}

function $template0(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += '<div class="';
  $append_10(sb, htmlEscape(arg0));
  sb.impl.string += '"><a class="';
  $append_10(sb, htmlEscape(arg1));
  sb.impl.string += '" href="#"><\/a><\/div>\n';
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

defineSeed(849, 1, {});
_.style_0 = null;
function $getFooterElem(this$static, parent_0){
  return $selectNode(parent_0, '.' + this$static.style_0.footer_0());
}

function ContentPanelBaseAppearance_0(resources, template){
  this.resources = resources;
  this.style_0 = this.resources.style_4();
  ensureInjected(this.style_0);
  this.template = template;
}

defineSeed(852, 1, {});
_.getBodyWrap = function getBodyWrap(parent_0){
  return $selectNode(parent_0, '.' + this.style_0.bodyWrap());
}
;
_.getContentElem = function getContentElem(parent_0){
  return $selectNode(parent_0, '.' + this.style_0.body_1());
}
;
_.getFrameHeight = function getFrameHeight(parent_0){
  return 1;
}
;
_.getFrameWidth = function getFrameWidth(parent_0){
  return 0;
}
;
_.getHeaderElem = function getHeaderElem(parent_0){
  return $selectNode(parent_0, '.' + this.style_0.header_0());
}
;
_.onBodyBorder = function onBodyBorder(parent_0, border){
  $applyStyles(this.getContentElem(parent_0), border?'':'border: 0px');
}
;
_.onHideHeader = function onHideHeader(parent_0, hide){
  $setVisible_1($selectNode(parent_0, '.' + this.style_0.header_0()), !hide);
  $setClassName_0(parent_0, this.style_0.noHeader(), hide);
}
;
_.render_0 = function render_3(sb){
  $append_5(sb, this.template.render_1(this.style_0));
}
;
_.resources = null;
_.style_0 = null;
_.template = null;
function ContentPanelBaseAppearance_ContentPanelTemplateImpl_0(){
}

defineSeed(853, 1, {}, ContentPanelBaseAppearance_ContentPanelTemplateImpl_0);
_.render_1 = function render_4(style){
  var outer;
  outer = $render0_1(style.panel_0(), style.header_0(), style.bodyWrap(), style.body_1(), style.footer_0());
  return outer;
}
;
function $render0_1(arg0, arg1, arg2, arg3, arg4){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += '<div class="';
  $append_10(sb, htmlEscape(arg0));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg1));
  sb.impl.string += '"><\/div><div class="';
  $append_10(sb, htmlEscape(arg2));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg3));
  sb.impl.string += '"><\/div><div class="';
  $append_10(sb, htmlEscape(arg4));
  sb.impl.string += '"><\/div><\/div><\/div>';
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $render_9(style){
  var outer;
  outer = $render0_3(style.tip_0(), style.tools_0(), style.heading(), style.text_0());
  return outer;
}

function $render0_3(arg0, arg1, arg2, arg3){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += '<div class="';
  $append_10(sb, htmlEscape(arg0));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg1));
  sb.impl.string += '"><\/div><div><span class="';
  $append_10(sb, htmlEscape(arg2));
  sb.impl.string += '"><\/span><\/div><div><span class="';
  $append_10(sb, htmlEscape(arg3));
  sb.impl.string += '"><\/span><\/div><\/div>\n';
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator_0(){
}

defineSeed(864, 1, {}, TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator_0);
_.style_1 = function style_18(){
  return $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$styleInitializer() , style_17;
}
;
var background_2 = null, bottomBorder_3 = null, bottomLeftBorder_2 = null, bottomRightBorder_2 = null, leftBorder_3 = null, rightBorder_3 = null, style_17 = null, topBorder_2 = null, topLeftBorder_3 = null, topRightBorder_2 = null;
function TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(865, 1, {}, TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$1_0);
_.bodyWrap = function bodyWrap_0(){
  return 'GN1NA3IBNMB';
}
;
_.bottom_0 = function bottom_1(){
  return 'GN1NA3IBOMB';
}
;
_.bottomLeft = function bottomLeft_1(){
  return 'GN1NA3IBPMB';
}
;
_.bottomRight = function bottomRight_1(){
  return 'GN1NA3IBANB';
}
;
_.content_1 = function content_2(){
  return 'GN1NA3IBBNB';
}
;
_.contentArea = function contentArea_0(){
  return 'GN1NA3IBCNB';
}
;
_.getText = function getText_18(){
  return '.GN1NA3IBCNB{position:relative;outline:none;}.GN1NA3IBBNB{overflow:hidden;background:url("' + ($clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$backgroundInitializer() , background_2.url.uri) + '") -' + background_2.left_0 + 'px -' + background_2.top_0 + 'px  repeat;overflow:visible;height:auto;width:auto;}.GN1NA3IBINB{height:' + ($clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$topLeftBorderInitializer() , topLeftBorder_3.height_0) + 'px;width:' + topLeftBorder_3.width_0 + 'px;overflow:hidden;background:url("' + topLeftBorder_3.url.uri + '") -' + topLeftBorder_3.left_0 + 'px -' + topLeftBorder_3.top_0 + 'px  no-repeat;padding-left:' + topLeftBorder_3.width_0 + 'px;zoom:1;width:auto;height:auto;}.GN1NA3IBHNB{height:' + ($clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$topBorderInitializer() , topBorder_2.height_0) + 'px;overflow:hidden;background:url("' + topBorder_2.url.uri + '") -' + topBorder_2.left_0 + 'px -' + topBorder_2.top_0 + 'px  repeat-x;width:auto;}.GN1NA3IBJNB{overflow:hidden;background:url("' + ($clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$topRightBorderInitializer() , topRightBorder_2.url.uri) + '") -' + topRightBorder_2.left_0 + 'px -' + topRightBorder_2.top_0 + 'px  repeat;background-repeat:no-repeat;background-position:right 0;zoom:1;padding-right:' + topRightBorder_2.width_0 + 'px;width:auto;}.GN1NA3IBPMB{overflow:hidden;background:url("' + ($clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$bottomLeftBorderInitializer() , bottomLeftBorder_2.url.uri) + '") -' + bottomLeftBorder_2.left_0 + 'px -' + bottomLeftBorder_2.top_0 + 'px  repeat;background-repeat:no-repeat;width:auto;background-position:0 bottom;padding-left:' + bottomLeftBorder_2.width_0 + 'px;zoom:1;line-height:1px;font-size:1px;}.GN1NA3IBOMB{overflow:hidden;background:url("' + ($clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$bottomBorderInitializer() , bottomBorder_3.url.uri) + '") -' + bottomBorder_3.left_0 + 'px -' + bottomBorder_3.top_0 + 'px  repeat;background-position:0 bottom;zoom:1;width:auto;overflow:visible;height:' + bottomBorder_3.height_0 + 'px;line-height:1px;font-size:1px;}.GN1NA3IBANB{overflow:hidden;background:url("' + ($clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$bottomRightBorderInitializer() , bottomRightBorder_2.url.uri) + '") -' + bottomRightBorder_2.left_0 + 'px -' + bottomRightBorder_2.top_0 + 'px  repeat;background-repeat:no-repeat;background-position:right bottom;padding-right:' + bottomRightBorder_2.width_0 + 'px;zoom:1;width:auto;height:auto;line-height:1px;font-size:1px;}.GN1NA3IBDNB{width:' + ($clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$leftBorderInitializer() , leftBorder_3.width_0) + 'px;overflow:hidden;background:url("' + leftBorder_3.url.uri + '") -' + leftBorder_3.left_0 + 'px -' + leftBorder_3.top_0 + 'px  repeat-y;padding-left:' + bottomLeftBorder_2.width_0 + 'px;zoom:1;overflow:visible;height:auto;width:auto;}.GN1NA3IBGNB{overflow:hidden;background:url("' + ($clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer() , rightBorder_3.url.uri) + '") -' + rightBorder_3.left_0 + 'px -' + rightBorder_3.top_0 + 'px  repeat;background-repeat:repeat-y;background-position:right 0;padding-right:' + rightBorder_3.width_0 + 'px;overflow:visible;width:auto;height:auto;}.GN1NA3IBBNB{height:100%;}';
}
;
_.left_1 = function left_1(){
  return 'GN1NA3IBDNB';
}
;
_.right_0 = function right_1(){
  return 'GN1NA3IBGNB';
}
;
_.top_1 = function top_2(){
  return 'GN1NA3IBHNB';
}
;
_.topLeft = function topLeft_1(){
  return 'GN1NA3IBINB';
}
;
_.topRight = function topRight_1(){
  return 'GN1NA3IBJNB';
}
;
function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$backgroundInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$backgroundInitializer = nullMethod;
  background_2 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///+71/////yH5BAEAAAMALAAAAAABAAEAAAICVAEAOw==')), 1, 1);
}

function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$bottomBorderInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$bottomBorderInitializer = nullMethod;
  bottomBorder_3 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAADCAYAAABS3WWCAAAAGElEQVR42mN49/X/f4anX3/+Z+hbde4/AFO8Crnz3qnWAAAAAElFTkSuQmCC')), 1, 3);
}

function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$bottomLeftBorderInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$bottomLeftBorderInitializer = nullMethod;
  bottomLeftBorder_2 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJElEQVR42mPoW3Xu/9OvP/+/+/r/PwOIs+7QHbAAAwiABEAYADLcGuUqKys9AAAAAElFTkSuQmCC')), 3, 3);
}

function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$bottomRightBorderInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$bottomRightBorderInitializer = nullMethod;
  bottomRightBorder_2 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAI0lEQVR42mN49/X//6dff/7vW3XuPwOIse7QHQgHRIAZQAAAWEwa5e8vzbgAAAAASUVORK5CYII=')), 3, 3);
}

function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$leftBorderInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$leftBorderInitializer = nullMethod;
  leftBorder_3 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAFklEQVR42mPoW3Xu/9OvP/+//PT/PwBBKQqxLTd5+QAAAABJRU5ErkJggg==')), 3, 1);
}

function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$rightBorderInitializer = nullMethod;
  rightBorder_3 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAFklEQVR42mN4+en//6dff/7vW3XuPwBHyQqx0cfDiAAAAABJRU5ErkJggg==')), 3, 1);
}

function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_17 = new TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$1_0;
}

function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$topBorderInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$topBorderInitializer = nullMethod;
  topBorder_2 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAADCAYAAABS3WWCAAAAGElEQVR42mPoW3XuP8PTrz//M7z7+v8/AEskCrkIBNUEAAAAAElFTkSuQmCC')), 1, 3);
}

function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$topLeftBorderInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$topLeftBorderInitializer = nullMethod;
  topLeftBorder_3 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAI0lEQVR42mNgAIK+Vef+gzCYse7Qnf9Pv/6EcECMd1///wcAuSEa5XGvxwwAAAAASUVORK5CYII=')), 3, 3);
}

function $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$topRightBorderInitializer(){
  $clinit_TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$topRightBorderInitializer = nullMethod;
  topRightBorder_2 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAI0lEQVR42mPoW3XuPwgzgMDTrz//rzt0ByLw7uv//yABEAcA3pEa5S2Oc6QAAAAASUVORK5CYII=')), 3, 3);
}

defineSeed(895, 1, {});
function $render_10(sb, region){
  var cls;
  cls = 'GN1NA3IBDPB';
  switch (region.ordinal) {
    case 3:
      cls += ' GN1NA3IBFPB';
      break;
    case 1:
      cls += ' GN1NA3IBAPB';
      break;
    case 0:
      cls += ' GN1NA3IBCPB';
      break;
    case 2:
      cls += ' GN1NA3IBEPB';
  }
  cls += ' ' + ($clinit_ThemeStyles() , 'GN1NA3IBHM');
  $append_10(sb.sb, "<div class='" + cls + "'>");
  $append_10(sb.sb, "<div class='GN1NA3IBBPB'><\/div>");
  $append_10(sb.sb, '<\/div>');
}

function CollapsePanelDefaultAppearance_0(){
  this.style_0 = ($clinit_CollapsePanelDefaultAppearance_CollapsePanelResources_default_InlineClientBundleGenerator$styleInitializer() , style_21);
  ensureInjected(this.style_0);
}

defineSeed(897, 1, {}, CollapsePanelDefaultAppearance_0);
_.style_0 = null;
var style_21 = null;
function CollapsePanelDefaultAppearance_CollapsePanelResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(899, 1, {}, CollapsePanelDefaultAppearance_CollapsePanelResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_22(){
  return '.GN1NA3IBDPB{border:1px solid #99bbe8;padding:2px;}.GN1NA3IBCPB,.GN1NA3IBEPB{padding-top:3px;}.GN1NA3IBFPB,.GN1NA3IBAPB{padding-top:4px;}.GN1NA3IBCPB .GN1NA3IBBPB,.GN1NA3IBEPB .GN1NA3IBBPB{float:right;}';
}
;
function $clinit_CollapsePanelDefaultAppearance_CollapsePanelResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_CollapsePanelDefaultAppearance_CollapsePanelResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_21 = new CollapsePanelDefaultAppearance_CollapsePanelResources_default_InlineClientBundleGenerator$1_0;
}

function $render_11(this$static, sb){
  $append_5(sb, $render_12(this$static.style_0));
}

function $setIcon_1(this$static, parent_0, icon){
  var iconWrap;
  iconWrap = $getFirstChildElement(parent_0);
  $removeChildren(iconWrap);
  !!icon && $appendChild(iconWrap, $createElement_0(new ClippedImagePrototype_0(icon.url, icon.left_0, icon.top_0, icon.width_0, icon.height_0)));
  $setClassName_0(parent_0, this$static.style_0.headerHasIcon(), !!icon);
}

function HeaderDefaultAppearance_1(resources){
  this.resources = resources;
  this.style_0 = this.resources.style_5();
  ensureInjected(this.style_0);
}

defineSeed(901, 1, {});
_.resources = null;
_.style_0 = null;
function $render_12(style){
  var outer;
  outer = $render0_4(style.header_0(), style.headerIcon(), style.headerBar(), style.headerText());
  return outer;
}

function $render0_4(arg0, arg1, arg2, arg3){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += '<div class="';
  $append_10(sb, htmlEscape(arg0));
  sb.impl.string += '"><div class="';
  $append_10(sb, htmlEscape(arg1));
  sb.impl.string += '"><\/div><div class="';
  $append_10(sb, htmlEscape(arg2));
  sb.impl.string += '"><\/div><div class="';
  $append_10(sb, htmlEscape(arg3));
  sb.impl.string += '">text<\/div><\/div>';
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $miniClass(direction){
  var cls;
  cls = 'GN1NA3IBORB';
  switch (direction.ordinal) {
    case 0:
      cls += ' GN1NA3IBDSB';
      break;
    case 1:
      cls += ' GN1NA3IBPRB';
      break;
    case 2:
      cls += ' GN1NA3IBASB';
      break;
    case 3:
      cls += ' GN1NA3IBCSB';
  }
  return cls;
}

function $onMiniOver(mini, over){
  over?$addClassName(mini, 'GN1NA3IBBSB'):$removeClassName(mini, 'GN1NA3IBBSB');
}

function SplitBarDefaultAppearance_0(){
  this.style_0 = ($clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$cssInitializer() , css_4);
  $ensureInjected_5(this.style_0);
}

defineSeed(904, 1, {}, SplitBarDefaultAppearance_0);
_.style_0 = null;
var css_4 = null, miniBottom = null, miniLeft = null, miniRight = null, miniTop = null;
function $ensureInjected_5(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    inject('.GN1NA3IBMRB{position:absolute;z-index:3;}.GN1NA3IBNRB{cursor:s-resize;cursor:row-resize;font-size:1px;line-height:1px;}.GN1NA3IBFSB{cursor:e-resize;cursor:col-resize;}.GN1NA3IBESB{position:absolute;background-color:#929090;font-size:1px;line-height:1px;z-index:200;}.GN1NA3IBORB{position:absolute;top:0;left:0;display:block;width:5px;height:35px;cursor:pointer;opacity:0.5;}.GN1NA3IBBSB{opacity:1;filter:none;opacity:1;}.GN1NA3IBASB{border:0 none;width:5px !important;padding:0;}.GN1NA3IBCSB{border:0 none;width:5px !important;padding:0;height:' + ($clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniRightInitializer() , miniRight.height_0) + 'px;width:' + miniRight.width_0 + 'px;overflow:hidden;background:url("' + miniRight.url.uri + '") -' + miniRight.left_0 + 'px -' + miniRight.top_0 + 'px  no-repeat;top:48%;}.GN1NA3IBASB{height:' + ($clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniLeftInitializer() , miniLeft.height_0) + 'px;width:' + miniLeft.width_0 + 'px;overflow:hidden;background:url("' + miniLeft.url.uri + '") -' + miniLeft.left_0 + 'px -' + miniLeft.top_0 + 'px  no-repeat;top:48%;}.GN1NA3IBDSB{height:' + ($clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniTopInitializer() , miniTop.height_0) + 'px;width:' + miniTop.width_0 + 'px;overflow:hidden;background:url("' + miniTop.url.uri + '") -' + miniTop.left_0 + 'px -' + miniTop.top_0 + 'px  no-repeat;}.GN1NA3IBPRB{height:' + ($clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniBottomInitializer() , miniBottom.height_0) + 'px;width:' + miniBottom.width_0 + 'px;overflow:hidden;background:url("' + miniBottom.url.uri + '") -' + miniBottom.left_0 + 'px -' + miniBottom.top_0 + 'px  no-repeat;}.GN1NA3IBDSB,.GN1NA3IBPRB{height:5px;left:50%;margin-left:-17px;width:35px;}');
    return true;
  }
  return false;
}

function SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(906, 1, {}, SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_23(){
  return '.GN1NA3IBMRB{position:absolute;z-index:3;}.GN1NA3IBNRB{cursor:s-resize;cursor:row-resize;font-size:1px;line-height:1px;}.GN1NA3IBFSB{cursor:e-resize;cursor:col-resize;}.GN1NA3IBESB{position:absolute;background-color:#929090;font-size:1px;line-height:1px;z-index:200;}.GN1NA3IBORB{position:absolute;top:0;left:0;display:block;width:5px;height:35px;cursor:pointer;opacity:0.5;}.GN1NA3IBBSB{opacity:1;filter:none;opacity:1;}.GN1NA3IBASB{border:0 none;width:5px !important;padding:0;}.GN1NA3IBCSB{border:0 none;width:5px !important;padding:0;height:' + ($clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniRightInitializer() , miniRight.height_0) + 'px;width:' + miniRight.width_0 + 'px;overflow:hidden;background:url("' + miniRight.url.uri + '") -' + miniRight.left_0 + 'px -' + miniRight.top_0 + 'px  no-repeat;top:48%;}.GN1NA3IBASB{height:' + ($clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniLeftInitializer() , miniLeft.height_0) + 'px;width:' + miniLeft.width_0 + 'px;overflow:hidden;background:url("' + miniLeft.url.uri + '") -' + miniLeft.left_0 + 'px -' + miniLeft.top_0 + 'px  no-repeat;top:48%;}.GN1NA3IBDSB{height:' + ($clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniTopInitializer() , miniTop.height_0) + 'px;width:' + miniTop.width_0 + 'px;overflow:hidden;background:url("' + miniTop.url.uri + '") -' + miniTop.left_0 + 'px -' + miniTop.top_0 + 'px  no-repeat;}.GN1NA3IBPRB{height:' + ($clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniBottomInitializer() , miniBottom.height_0) + 'px;width:' + miniBottom.width_0 + 'px;overflow:hidden;background:url("' + miniBottom.url.uri + '") -' + miniBottom.left_0 + 'px -' + miniBottom.top_0 + 'px  no-repeat;}.GN1NA3IBDSB,.GN1NA3IBPRB{height:5px;left:50%;margin-left:-17px;width:35px;}';
}
;
_.injected = false;
function $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$cssInitializer(){
  $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$cssInitializer = nullMethod;
  css_4 = new SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$1_0;
}

function $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniBottomInitializer(){
  $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniBottomInitializer = nullMethod;
  miniBottom = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAFCAYAAADPLFVyAAAANklEQVR42mO4ePHi/8GCGUAAxHjz5g3J2NnZFQOTYw7cITBADQdRxSHUcBBVHYLsILqmESQAACG6H+sTbbGtAAAAAElFTkSuQmCC')), 35, 5);
}

function $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniLeftInitializer(){
  $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniLeftInitializer = nullMethod;
  miniLeft = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAjCAYAAABcmsDOAAAAQElEQVR42mNgQAMXL178jyGAIgjivHnzBiEIE4ALIguMEEFnZ1dUQZAAiiBMgLBKnGYO8/DEmpZwpjqc6RNZAgC3yB/roojJ2wAAAABJRU5ErkJggg==')), 5, 35);
}

function $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniRightInitializer(){
  $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniRightInitializer = nullMethod;
  miniRight = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAjCAYAAABcmsDOAAAAQklEQVR42mO4ePHifwZ0ABLEkAAJvHnzBlUCJogigSwIlxiegs7OrtgFYRIYgiBMWOUICDq8ghhpCSPVYU2f6AkZAKomH+vsosKnAAAAAElFTkSuQmCC')), 5, 35);
}

function $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniTopInitializer(){
  $clinit_SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$miniTopInitializer = nullMethod;
  miniTop = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAFCAYAAADPLFVyAAAANUlEQVR42mNgQAMXL178Ty/MgA+AFLx584Zk7OzsSpY+nA6ixCEwTBUHUcMhVHEQPdMIIQwAgl8f6zRdECkAAAAASUVORK5CYII=')), 35, 5);
}

function BlueThemeAppearance_0(){
  this.style_0 = ($clinit_BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$cssInitializer() , css_5);
  ensureInjected(this.style_0);
}

defineSeed(912, 1, {}, BlueThemeAppearance_0);
_.style_0 = null;
var css_5 = null, more = null;
function BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(914, 1, {}, BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_24(){
  return '.GN1NA3IBHM{border:1px solid #99bbe8 !important;}.GN1NA3IBLM{border:none;border-left:1px solid #99bbe8 !important;}.GN1NA3IBMM{border:none;border-right:1px solid #99bbe8 !important;}.GN1NA3IBNM{border:none;border-top:1px solid #99bbe8 !important;}.GN1NA3IBIM{border:none;border-bottom:1px solid #99bbe8 !important;}';
}
;
function $clinit_BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$cssInitializer(){
  $clinit_BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$cssInitializer = nullMethod;
  css_5 = new BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$1_0;
}

function $clinit_BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$moreInitializer(){
  $clinit_BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$moreInitializer = nullMethod;
  more = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAYAAAAiYZ4HAAAAHElEQVR42mNgGAUkAFGn7v8gjIs/QJpop3ikAQD36yWVz45n1AAAAABJRU5ErkJggg==')), 12, 16);
}

var checked_0 = null, unchecked = null;
function $clinit_BlueCheckMenuItemAppearance_BlueCheckMenuItemResources_opera_opera_default_InlineClientBundleGenerator$checkedInitializer(){
  $clinit_BlueCheckMenuItemAppearance_BlueCheckMenuItemResources_opera_opera_default_InlineClientBundleGenerator$checkedInitializer = nullMethod;
  checked_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVR42s2Ty0sCURTG/d+KstoHUZpQBC2CCLJdyzZFRpTmwkWUCAUWtKixwiIKn4xCdygdX0ONjS96jMNMm6+ZC7nInAo3HfjgXi7nd875ONdi+Rex6nLhr2oDyLLcUaqqQtM0KIpC7x0BwSOmTdFECr7ABZxL++ALD2g2m+aAOEtaSqQ41BsvGJ72oWdkHUw4Rbv4FSCZ5lAURBycsOjVkyedfpTLTz+PQO5zKAiPIHc8Xt9k2Ga30Te6gbMrDlmeNwdcR5OIsjnsBCN66w2ELgmsNjcm5v3USEI4c0C+WMLM4h6tyN4KmFoIYHDcg+MwobPzubw5IMmmkS9J6B/bhNXupsmOuV2o2jt9LwmCOeAmEkOl9oxl7ykG7B4MObZwyKRbOyCKojkgFk8gk8nqJkpY8Yaw5jvXjVRQq9dRrdYgSRVzwKeMZTGqGsYZ56+b+S2gq7/QTXwA3ngd6xuLHCkAAAAASUVORK5CYII=')), 16, 16);
}

function $clinit_BlueCheckMenuItemAppearance_BlueCheckMenuItemResources_opera_opera_default_InlineClientBundleGenerator$uncheckedInitializer(){
  $clinit_BlueCheckMenuItemAppearance_BlueCheckMenuItemResources_opera_opera_default_InlineClientBundleGenerator$uncheckedInitializer = nullMethod;
  unchecked = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBElEQVR42s2T3UrDQBBG+/4X9k0UtKC11dKqVWyDrW7a2E0aN39NdhMSQpLbz3QvAqJuK7lx4LAwMGeGYbbT+Rdx0u3ir3wTFEVxNL8KTi/6P3LWu0avf4PB7fiwYPaif2HxZkA3TFDLxvju4XiBtlzhVd/AoFtYNoPjepg+Ph0WaMs1FuQdZE1lV+a48IMAYRhirmlqwfnlUI67MW18MFcWxXGMJEkkRF+pBVeDkRzX831wzpGmKfI8bzCtrVowHE3gej6iKJId90X7fFmW8mWOoxZM7qdNcZZlMldVVUNQ70IpeJ7NQYgOSs16BwzBbgcuBES9ByHiWs7VglaX2OovtIlPX7c5S7fSRyEAAAAASUVORK5CYII=')), 16, 16);
}

function BlueItemAppearance_0(){
  this.style_0 = ($clinit_BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$styleInitializer() , style_24);
  $ensureInjected_7(this.style_0);
}

defineSeed(938, 843, {}, BlueItemAppearance_0);
var itemOver = null, style_24 = null;
function $ensureInjected_7(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    inject('.GN1NA3IBNUB{border-style:solid;border-width:1px;padding:0 !important;height:' + ($clinit_BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$itemOverInitializer() , itemOver.height_0) + 'px;width:' + itemOver.width_0 + 'px;overflow:hidden;background:url("' + itemOver.url.uri + '") -' + itemOver.left_0 + 'px -' + itemOver.top_0 + 'px  no-repeat;width:auto;height:auto;background-color:#ebf3fd;background-repeat:repeat-x;background-position:left bottom;border:1px solid #aaccf6;padding:0;}.GN1NA3IBNUB a{color:#233d6d;}');
    return true;
  }
  return false;
}

function BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(940, 1, {}, BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_29(){
  return '.GN1NA3IBNUB{border-style:solid;border-width:1px;padding:0 !important;height:' + ($clinit_BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$itemOverInitializer() , itemOver.height_0) + 'px;width:' + itemOver.width_0 + 'px;overflow:hidden;background:url("' + itemOver.url.uri + '") -' + itemOver.left_0 + 'px -' + itemOver.top_0 + 'px  no-repeat;width:auto;height:auto;background-color:#ebf3fd;background-repeat:repeat-x;background-position:left bottom;border:1px solid #aaccf6;padding:0;}.GN1NA3IBNUB a{color:#233d6d;}';
}
;
_.injected = false;
function $clinit_BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$itemOverInitializer(){
  $clinit_BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$itemOverInitializer = nullMethod;
  itemOver = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAVCAYAAABsZT8HAAAAGklEQVR42mN4/fnvfxBmoJBx88Xv/yBMTwYA+d2en2a9xcEAAAAASUVORK5CYII=')), 2, 21);
}

function $clinit_BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_24 = new BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$1_0;
}

function BlueMenuAppearance_0(){
  this.style_0 = ($clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$styleInitializer() , style_25);
  ensureInjected(this.style_0);
}

defineSeed(943, 844, {}, BlueMenuAppearance_0);
var itemOver_0 = null, menu_0 = null, miniBottom_0 = null, miniTop_0 = null, style_25 = null;
function BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(945, 1, {}, BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_30(){
  return '.GN1NA3IBPUB{border:1px solid;z-index:15000;zoom:1;background:repeat-y;outline:0 none;}.GN1NA3IBPUB a{text-decoration:none !important;}.GN1NA3IBBVB{padding:2px;background:transparent;border:0 none;overflow:hidden;overflow-y:hidden;}.GN1NA3IBCVB{white-space:nowrap;display:block;padding:1px;font:normal 11px tahoma, arial, sans-serif;}.GN1NA3IBAVB{border-style:solid;border-width:1px;padding:0;}.GN1NA3IBOUB{padding:0 !important;}.GN1NA3IBOUB .GN1NA3IBBVB{padding:0;}.GN1NA3IBPUB .GN1NA3IBFVB{margin:0;width:100%;background-position:center;background-repeat:no-repeat;height:8px;line-height:8px;cursor:pointer;padding:0;}.GN1NA3IBPUB .GN1NA3IBGVB{height:6px;line-height:6px;}.GN1NA3IBDVB{padding-left:27px !important;}.GN1NA3IBJVB{background-image:none;}.GN1NA3IBPUB{width:' + ($clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$menuInitializer() , menu_0.width_0) + 'px;overflow:hidden;background:url("' + menu_0.url.uri + '") -' + menu_0.left_0 + 'px -' + menu_0.top_0 + 'px  repeat-y;width:auto;border-color:#718bb7;background-color:#f0f0f0;}.GN1NA3IBAVB{width:' + ($clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$itemOverInitializer() , itemOver_0.width_0) + 'px;overflow:hidden;background:url("' + itemOver_0.url.uri + '") -' + itemOver_0.left_0 + 'px -' + itemOver_0.top_0 + 'px  repeat-y;width:auto;background-color:#ebf3fd;background-repeat:repeat-x;background-position:left bottom;border:1px solid #aaccf6;padding:0;color:#233d6d;}.GN1NA3IBKVB{background-color:#fff !important;}.GN1NA3IBIVB{height:' + ($clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$miniTopInitializer() , miniTop_0.height_0) + 'px;width:' + miniTop_0.width_0 + 'px;overflow:hidden;background:url("' + miniTop_0.url.uri + '") -' + miniTop_0.left_0 + 'px -' + miniTop_0.top_0 + 'px  no-repeat;}.GN1NA3IBHVB{height:' + ($clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$miniBottomInitializer() , miniBottom_0.height_0) + 'px;width:' + miniBottom_0.width_0 + 'px;overflow:hidden;background:url("' + miniBottom_0.url.uri + '") -' + miniBottom_0.left_0 + 'px -' + miniBottom_0.top_0 + 'px  no-repeat;}.GN1NA3IBFVB{border-width:1px 0;}';
}
;
function $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$itemOverInitializer(){
  $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$itemOverInitializer = nullMethod;
  itemOver_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAVCAYAAABsZT8HAAAAGklEQVR42mN4/fnvfxBmoJBx88Xv/yBMTwYA+d2en2a9xcEAAAAASUVORK5CYII=')), 2, 21);
}

function $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$menuInitializer(){
  $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$menuInitializer = nullMethod;
  menu_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAABCAYAAAD3ubPnAAAAHklEQVR42mP48OHDf1riR48f/wcBWtszikfxKMaNAfI0uFl52k+EAAAAAElFTkSuQmCC')), 250, 1);
}

function $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$miniBottomInitializer(){
  $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$miniBottomInitializer = nullMethod;
  miniBottom_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAFCAYAAADPLFVyAAAANklEQVR42mO4ePHi/8GCGUAAxHjz5g3J2NnZFQOTYw7cITBADQdRxSHUcBBVHYLsILqmESQAACG6H+sTbbGtAAAAAElFTkSuQmCC')), 35, 5);
}

function $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$miniTopInitializer(){
  $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$miniTopInitializer = nullMethod;
  miniTop_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAFCAYAAADPLFVyAAAANUlEQVR42mNgQAMXL178Ty/MgA+AFLx584Zk7OzsSpY+nA6ixCEwTBUHUcMhVHEQPdMIIQwAgl8f6zRdECkAAAAASUVORK5CYII=')), 35, 5);
}

function $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_25 = new BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$1_0;
}

function BlueMenuItemAppearance_0(){
  BlueMenuItemAppearance_1.call(this, new BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator_0);
}

function BlueMenuItemAppearance_1(resources){
  MenuItemBaseAppearance_0.call(this, resources);
}

defineSeed(951, 842, {}, BlueMenuItemAppearance_0);
function BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator_0(){
}

defineSeed(952, 1, {}, BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator_0);
_.style_3 = function style_27(){
  return $clinit_BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$styleInitializer() , style_26;
}
;
var menuParent_0 = null, style_26 = null;
function BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(953, 1, {}, BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_31(){
  return 'a.GN1NA3IBPVB{cursor:pointer;display:block;line-height:16px;outline-style:none;outline-width:0;padding:3px 21px 3px 27px;position:relative;text-decoration:none;white-space:nowrap;color:#222;}.GN1NA3IBCWB{white-space:nowrap;display:block;padding:1px;font:normal 11px tahoma, arial, sans-serif;}.GN1NA3IBBWB{border:0 none;height:16px;padding:0;vertical-align:top;width:16px;position:absolute;left:3px;top:3px;margin:0;background-position:center;}.GN1NA3IBAWB{height:' + ($clinit_BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$menuParentInitializer() , menuParent_0.height_0) + 'px;width:' + menuParent_0.width_0 + 'px;overflow:hidden;background:url("' + menuParent_0.url.uri + '") -' + menuParent_0.left_0 + 'px -' + menuParent_0.top_0 + 'px  no-repeat;height:auto;width:auto;background-position:right;background-repeat:no-repeat;}';
}
;
_.menuItem = function menuItem_1(){
  return 'GN1NA3IBPVB';
}
;
_.menuItemArrow = function menuItemArrow_0(){
  return 'GN1NA3IBAWB';
}
;
_.menuItemIcon = function menuItemIcon_0(){
  return 'GN1NA3IBBWB';
}
;
_.menuListItem = function menuListItem_0(){
  return 'GN1NA3IBCWB';
}
;
function $clinit_BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$menuParentInitializer(){
  $clinit_BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$menuParentInitializer = nullMethod;
  menuParent_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAAAb0lEQVR42mOwaLr2n4EUYNtx979Ny2XiNWmXnvo/9fT//5bEagJp6Dv87X/X4T//HTtv/idKQ8iCl/+TVn38n77g6n+j0v3/CWoIWvDmf+iUc/+1CvcTZ4N798n/mnn7iPeDTsEB4kPJquocSfEAADQCQiRH/8LtAAAAAElFTkSuQmCC')), 12, 9);
}

function $clinit_BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_26 = new BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$1_0;
}

function BlueSeparatorMenuItemAppearance_0(){
  this.style_0 = ($clinit_BlueSeparatorMenuItemAppearance_BlueSeparatorMenuItemResources_default_InlineClientBundleGenerator$styleInitializer() , style_28);
  ensureInjected(this.style_0);
}

defineSeed(956, 849, {}, BlueSeparatorMenuItemAppearance_0);
var style_28 = null;
function BlueSeparatorMenuItemAppearance_BlueSeparatorMenuItemResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(958, 1, {}, BlueSeparatorMenuItemAppearance_BlueSeparatorMenuItemResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_32(){
  return '.GN1NA3IBDWB{display:block;font-size:1px;line-height:1px;margin:2px 3px;border-bottom:1px solid;overflow:hidden;font-size:1px;line-height:1px;background-color:#e0e0e0;border-bottom-color:#fff;}';
}
;
function $clinit_BlueSeparatorMenuItemAppearance_BlueSeparatorMenuItemResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BlueSeparatorMenuItemAppearance_BlueSeparatorMenuItemResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_28 = new BlueSeparatorMenuItemAppearance_BlueSeparatorMenuItemResources_default_InlineClientBundleGenerator$1_0;
}

function BlueContentPanelAppearance_0(){
  ContentPanelBaseAppearance_0.call(this, new BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator_0, new ContentPanelBaseAppearance_ContentPanelTemplateImpl_0);
}

defineSeed(960, 852, {}, BlueContentPanelAppearance_0);
_.getHeaderAppearance = function getHeaderAppearance(){
  return new BlueHeaderAppearance_0;
}
;
function BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator_0(){
}

defineSeed(961, 1, {}, BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator_0);
_.style_4 = function style_30(){
  return $clinit_BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator$styleInitializer() , style_29;
}
;
var style_29 = null;
function BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(962, 1, {}, BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator$1_0);
_.body_1 = function body_0(){
  return 'GN1NA3IBPWB';
}
;
_.bodyWrap = function bodyWrap_1(){
  return 'GN1NA3IBAXB';
}
;
_.footer_0 = function footer(){
  return 'GN1NA3IBBXB';
}
;
_.getText = function getText_33(){
  return '.GN1NA3IBEXB{border-style:solid;border-width:0;outline:0 none;border-color:#99bbe8;}.GN1NA3IBDXB{border-top-width:1px;}.GN1NA3IBCXB{position:relative;}.GN1NA3IBPWB{border-bottom:1px solid;border-left:1px solid;border-right:1px solid;border-top:0 none;overflow:hidden;position:relative;background-color:#fff;border-color:#99bbe8;}.GN1NA3IBBXB{position:relative;}';
}
;
_.header_0 = function header_0(){
  return 'GN1NA3IBCXB';
}
;
_.noHeader = function noHeader(){
  return 'GN1NA3IBDXB';
}
;
_.panel_0 = function panel_0(){
  return 'GN1NA3IBEXB';
}
;
function $clinit_BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_29 = new BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator$1_0;
}

function BlueHeaderAppearance_0(){
  BlueHeaderAppearance_1.call(this, new BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator_0);
}

function BlueHeaderAppearance_1(resources){
  HeaderDefaultAppearance_1.call(this, resources);
}

defineSeed(980, 901, {}, BlueHeaderAppearance_0);
function BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator_0(){
}

defineSeed(981, 1, {}, BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator_0);
_.style_5 = function style_36(){
  return $clinit_BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$styleInitializer() , style_35;
}
;
var headerBackground = null, style_35 = null;
function BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(982, 1, {}, BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_36(){
  return '.GN1NA3IBIYB{padding:4px 3px 2px 5px;position:relative;}.GN1NA3IBLYB{float:left;}.GN1NA3IBKYB .GN1NA3IBLYB{width:18px;}.GN1NA3IBKYB .GN1NA3IBMYB{left:20px;}.GN1NA3IBMYB{font-family:tahoma, arial, verdana, sans-serif;font-size:11px;font-weight:bold;line-height:15px;}.GN1NA3IBJYB{float:right;}.GN1NA3IBIYB{height:' + ($clinit_BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$headerBackgroundInitializer() , headerBackground.height_0) + 'px;overflow:hidden;background:url("' + headerBackground.url.uri + '") -' + headerBackground.left_0 + 'px -' + headerBackground.top_0 + 'px  repeat-x;color:#15428b;font-weight:bold;font-size:11px;font-family:tahoma, arial, verdana, sans-serif;border-color:#99bbe8;height:auto;line-height:15px;border:1px solid #99bbe8;border-top:none;}';
}
;
_.header_0 = function header_2(){
  return 'GN1NA3IBIYB';
}
;
_.headerBar = function headerBar(){
  return 'GN1NA3IBJYB';
}
;
_.headerHasIcon = function headerHasIcon(){
  return 'GN1NA3IBKYB';
}
;
_.headerIcon = function headerIcon(){
  return 'GN1NA3IBLYB';
}
;
_.headerText = function headerText(){
  return 'GN1NA3IBMYB';
}
;
function $clinit_BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$headerBackgroundInitializer(){
  $clinit_BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$headerBackgroundInitializer = nullMethod;
  headerBackground = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhAQAsAcQAAAAAAP///5m76ISgxKvH7LjP7rrQ7rzS77/U8MHV8MLW8Mja8tTi9L3T78TY8cbZ8cnb8svd883e89Dg9M/f89Lh9NXk9djm9tfl9drn9vP3+////wAAAAAAAAAAAAAAACH5BAEAABsALAAAAAABACwBAAUyoKBl2YVZTDVRElEYR4MkivMsUCTtfO//wKBwSCwaj0hfYMlsOp/QqHRKrVqv2Kx1EAIAOw==')), 1, 300);
}

function $clinit_BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_35 = new BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$1_0;
}

function BlueToolBarAppearance_0(){
  this.style_0 = ($clinit_BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$styleInitializer() , style_41);
  ensureInjected(this.style_0);
}

defineSeed(1014, 895, {}, BlueToolBarAppearance_0);
_.style_0 = null;
var background_5 = null, style_41 = null;
function BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(1016, 1, {}, BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_40(){
  return '.GN1NA3IBMAC{border-style:solid;border-width:0 0 1px 0;display:block;background:repeat-x top left;position:relative;left:0;top:0;zoom:1;overflow:hidden;width:auto;height:auto;border:none;}.x-toolbar-mark{border-width:0 0 1px 0;border-bottom:1px solid #99b9e9;height:' + ($clinit_BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$backgroundInitializer() , background_5.height_0) + 'px;overflow:hidden;background:url("' + background_5.url.uri + '") -' + background_5.left_0 + 'px -' + background_5.top_0 + 'px  repeat-x;background-color:#d0def0;height:auto;}';
}
;
function $clinit_BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$backgroundInitializer(){
  $clinit_BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$backgroundInitializer = nullMethod;
  background_5 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAA4CAYAAADXVynvAAAArElEQVR42o3QuRKCQBCE4Xn/N/OCBQ8EZRWvjBsTk3bagMEyMfi6/mhrQJrnCyTZYwBZpPcBpNGDZH/rQZLoJF+xu/YgjQ5ksb10IItN0YFkXbQgi/jcgqbRgCQ6NSAL5xuQRehrkAR5DbJYHWvQNCqQLA8VyGKhQzLPKpBGCZJZWoIsxnd+I8grkARew3+HHsZTx5tD/SaycDruE/oDSFyhUUwj0iGJdeI/4w2HI5Y2f7R+rgAAAABJRU5ErkJggg==')), 2, 56);
}

function $clinit_BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_41 = new BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$1_0;
}

defineSeed(1020, 1, {});
_.style_0 = null;
function BlueTools_0(){
  this.style_0 = ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$styleInitializer() , style_42);
  $ensureInjected_8(this.style_0);
}

defineSeed(1019, 1020, {}, BlueTools_0);
var closeIcon = null, closeOverIcon = null, collapseIcon = null, collapseOverIcon = null, doubleDownIcon = null, doubleDownOverIcon = null, doubleLeftIcon = null, doubleLeftOverIcon = null, doubleRightIcon = null, doubleRightOverIcon = null, doubleUpIcon = null, doubleUpOverIcon = null, downIcon = null, downOverIcon = null, expandIcon = null, expandOverIcon = null, gearIcon = null, gearOverIcon = null, leftIcon = null, leftOverIcon = null, maximizeIcon = null, maximizeOverIcon = null, minimizeIcon = null, minimizeOverIcon = null, minusIcon = null, minusOverIcon = null, pinIcon = null, pinOverIcon = null, plusIcon = null, plusOverIcon = null, printIcon = null, printOverIcon = null, questionIcon = null, questionOverIcon = null, refreshIcon = null, refreshOverIcon = null, restoreIcon = null, restoreOverIcon = null, rightIcon = null, rightOverIcon = null, saveIcon = null, saveOverIcon = null, searchIcon = null, searchOverIcon = null, style_42 = null, unpinIcon = null, unpinOverIcon = null, upIcon = null, upOverIcon = null;
function $ensureInjected_8(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    inject('.GN1NA3IBMEC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$closeIconInitializer() , closeIcon.height_0) + 'px;width:' + closeIcon.width_0 + 'px;overflow:hidden;background:url("' + closeIcon.url.uri + '") -' + closeIcon.left_0 + 'px -' + closeIcon.top_0 + 'px  no-repeat;}.GN1NA3IBNEC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$closeOverIconInitializer() , closeOverIcon.height_0) + 'px;width:' + closeOverIcon.width_0 + 'px;overflow:hidden;background:url("' + closeOverIcon.url.uri + '") -' + closeOverIcon.left_0 + 'px -' + closeOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBOEC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$collapseIconInitializer() , collapseIcon.height_0) + 'px;width:' + collapseIcon.width_0 + 'px;overflow:hidden;background:url("' + collapseIcon.url.uri + '") -' + collapseIcon.left_0 + 'px -' + collapseIcon.top_0 + 'px  no-repeat;}.GN1NA3IBPEC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$collapseOverIconInitializer() , collapseOverIcon.height_0) + 'px;width:' + collapseOverIcon.width_0 + 'px;overflow:hidden;background:url("' + collapseOverIcon.url.uri + '") -' + collapseOverIcon.left_0 + 'px -' + collapseOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBAFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleDownIconInitializer() , doubleDownIcon.height_0) + 'px;width:' + doubleDownIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleDownIcon.url.uri + '") -' + doubleDownIcon.left_0 + 'px -' + doubleDownIcon.top_0 + 'px  no-repeat;}.GN1NA3IBBFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleDownOverIconInitializer() , doubleDownOverIcon.height_0) + 'px;width:' + doubleDownOverIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleDownOverIcon.url.uri + '") -' + doubleDownOverIcon.left_0 + 'px -' + doubleDownOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBCFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleLeftIconInitializer() , doubleLeftIcon.height_0) + 'px;width:' + doubleLeftIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleLeftIcon.url.uri + '") -' + doubleLeftIcon.left_0 + 'px -' + doubleLeftIcon.top_0 + 'px  no-repeat;}.GN1NA3IBDFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleLeftOverIconInitializer() , doubleLeftOverIcon.height_0) + 'px;width:' + doubleLeftOverIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleLeftOverIcon.url.uri + '") -' + doubleLeftOverIcon.left_0 + 'px -' + doubleLeftOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBEFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleRightIconInitializer() , doubleRightIcon.height_0) + 'px;width:' + doubleRightIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleRightIcon.url.uri + '") -' + doubleRightIcon.left_0 + 'px -' + doubleRightIcon.top_0 + 'px  no-repeat;}.GN1NA3IBFFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleRightOverIconInitializer() , doubleRightOverIcon.height_0) + 'px;width:' + doubleRightOverIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleRightOverIcon.url.uri + '") -' + doubleRightOverIcon.left_0 + 'px -' + doubleRightOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBGFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleUpIconInitializer() , doubleUpIcon.height_0) + 'px;width:' + doubleUpIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleUpIcon.url.uri + '") -' + doubleUpIcon.left_0 + 'px -' + doubleUpIcon.top_0 + 'px  no-repeat;}.GN1NA3IBHFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleUpOverIconInitializer() , doubleUpOverIcon.height_0) + 'px;width:' + doubleUpOverIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleUpOverIcon.url.uri + '") -' + doubleUpOverIcon.left_0 + 'px -' + doubleUpOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBIFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$downIconInitializer() , downIcon.height_0) + 'px;width:' + downIcon.width_0 + 'px;overflow:hidden;background:url("' + downIcon.url.uri + '") -' + downIcon.left_0 + 'px -' + downIcon.top_0 + 'px  no-repeat;}.GN1NA3IBJFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$downOverIconInitializer() , downOverIcon.height_0) + 'px;width:' + downOverIcon.width_0 + 'px;overflow:hidden;background:url("' + downOverIcon.url.uri + '") -' + downOverIcon.left_0 + 'px -' + downOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBKFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$expandIconInitializer() , expandIcon.height_0) + 'px;width:' + expandIcon.width_0 + 'px;overflow:hidden;background:url("' + expandIcon.url.uri + '") -' + expandIcon.left_0 + 'px -' + expandIcon.top_0 + 'px  no-repeat;}.GN1NA3IBLFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$expandOverIconInitializer() , expandOverIcon.height_0) + 'px;width:' + expandOverIcon.width_0 + 'px;overflow:hidden;background:url("' + expandOverIcon.url.uri + '") -' + expandOverIcon.left_0 + 'px -' + expandOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBMFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$gearIconInitializer() , gearIcon.height_0) + 'px;width:' + gearIcon.width_0 + 'px;overflow:hidden;background:url("' + gearIcon.url.uri + '") -' + gearIcon.left_0 + 'px -' + gearIcon.top_0 + 'px  no-repeat;}.GN1NA3IBNFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$gearOverIconInitializer() , gearOverIcon.height_0) + 'px;width:' + gearOverIcon.width_0 + 'px;overflow:hidden;background:url("' + gearOverIcon.url.uri + '") -' + gearOverIcon.left_0 + 'px -' + gearOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBOFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$leftIconInitializer() , leftIcon.height_0) + 'px;width:' + leftIcon.width_0 + 'px;overflow:hidden;background:url("' + leftIcon.url.uri + '") -' + leftIcon.left_0 + 'px -' + leftIcon.top_0 + 'px  no-repeat;}.GN1NA3IBPFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$leftOverIconInitializer() , leftOverIcon.height_0) + 'px;width:' + leftOverIcon.width_0 + 'px;overflow:hidden;background:url("' + leftOverIcon.url.uri + '") -' + leftOverIcon.left_0 + 'px -' + leftOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBAGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$maximizeIconInitializer() , maximizeIcon.height_0) + 'px;width:' + maximizeIcon.width_0 + 'px;overflow:hidden;background:url("' + maximizeIcon.url.uri + '") -' + maximizeIcon.left_0 + 'px -' + maximizeIcon.top_0 + 'px  no-repeat;}.GN1NA3IBBGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$maximizeOverIconInitializer() , maximizeOverIcon.height_0) + 'px;width:' + maximizeOverIcon.width_0 + 'px;overflow:hidden;background:url("' + maximizeOverIcon.url.uri + '") -' + maximizeOverIcon.left_0 + 'px -' + maximizeOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBCGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minimizeIconInitializer() , minimizeIcon.height_0) + 'px;width:' + minimizeIcon.width_0 + 'px;overflow:hidden;background:url("' + minimizeIcon.url.uri + '") -' + minimizeIcon.left_0 + 'px -' + minimizeIcon.top_0 + 'px  no-repeat;}.GN1NA3IBDGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minimizeOverIconInitializer() , minimizeOverIcon.height_0) + 'px;width:' + minimizeOverIcon.width_0 + 'px;overflow:hidden;background:url("' + minimizeOverIcon.url.uri + '") -' + minimizeOverIcon.left_0 + 'px -' + minimizeOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBEGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minusIconInitializer() , minusIcon.height_0) + 'px;width:' + minusIcon.width_0 + 'px;overflow:hidden;background:url("' + minusIcon.url.uri + '") -' + minusIcon.left_0 + 'px -' + minusIcon.top_0 + 'px  no-repeat;}.GN1NA3IBFGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minusOverIconInitializer() , minusOverIcon.height_0) + 'px;width:' + minusOverIcon.width_0 + 'px;overflow:hidden;background:url("' + minusOverIcon.url.uri + '") -' + minusOverIcon.left_0 + 'px -' + minusOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBGGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$pinIconInitializer() , pinIcon.height_0) + 'px;width:' + pinIcon.width_0 + 'px;overflow:hidden;background:url("' + pinIcon.url.uri + '") -' + pinIcon.left_0 + 'px -' + pinIcon.top_0 + 'px  no-repeat;}.GN1NA3IBHGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$pinOverIconInitializer() , pinOverIcon.height_0) + 'px;width:' + pinOverIcon.width_0 + 'px;overflow:hidden;background:url("' + pinOverIcon.url.uri + '") -' + pinOverIcon.left_0 + 'px -' + pinOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBIHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$unpinIconInitializer() , unpinIcon.height_0) + 'px;width:' + unpinIcon.width_0 + 'px;overflow:hidden;background:url("' + unpinIcon.url.uri + '") -' + unpinIcon.left_0 + 'px -' + unpinIcon.top_0 + 'px  no-repeat;}.GN1NA3IBJHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$unpinOverIconInitializer() , unpinOverIcon.height_0) + 'px;width:' + unpinOverIcon.width_0 + 'px;overflow:hidden;background:url("' + unpinOverIcon.url.uri + '") -' + unpinOverIcon.left_0 + 'px -' + unpinOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBIGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$plusIconInitializer() , plusIcon.height_0) + 'px;width:' + plusIcon.width_0 + 'px;overflow:hidden;background:url("' + plusIcon.url.uri + '") -' + plusIcon.left_0 + 'px -' + plusIcon.top_0 + 'px  no-repeat;}.GN1NA3IBJGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$plusOverIconInitializer() , plusOverIcon.height_0) + 'px;width:' + plusOverIcon.width_0 + 'px;overflow:hidden;background:url("' + plusOverIcon.url.uri + '") -' + plusOverIcon.left_0 + 'px -' + plusOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBKGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$printIconInitializer() , printIcon.height_0) + 'px;width:' + printIcon.width_0 + 'px;overflow:hidden;background:url("' + printIcon.url.uri + '") -' + printIcon.left_0 + 'px -' + printIcon.top_0 + 'px  no-repeat;}.GN1NA3IBLGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$printOverIconInitializer() , printOverIcon.height_0) + 'px;width:' + printOverIcon.width_0 + 'px;overflow:hidden;background:url("' + printOverIcon.url.uri + '") -' + printOverIcon.left_0 + 'px -' + printOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBMGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$questionIconInitializer() , questionIcon.height_0) + 'px;width:' + questionIcon.width_0 + 'px;overflow:hidden;background:url("' + questionIcon.url.uri + '") -' + questionIcon.left_0 + 'px -' + questionIcon.top_0 + 'px  no-repeat;}.GN1NA3IBNGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$questionOverIconInitializer() , questionOverIcon.height_0) + 'px;width:' + questionOverIcon.width_0 + 'px;overflow:hidden;background:url("' + questionOverIcon.url.uri + '") -' + questionOverIcon.left_0 + 'px -' + questionOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBOGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$refreshIconInitializer() , refreshIcon.height_0) + 'px;width:' + refreshIcon.width_0 + 'px;overflow:hidden;background:url("' + refreshIcon.url.uri + '") -' + refreshIcon.left_0 + 'px -' + refreshIcon.top_0 + 'px  no-repeat;}.GN1NA3IBPGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$refreshOverIconInitializer() , refreshOverIcon.height_0) + 'px;width:' + refreshOverIcon.width_0 + 'px;overflow:hidden;background:url("' + refreshOverIcon.url.uri + '") -' + refreshOverIcon.left_0 + 'px -' + refreshOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBAHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$restoreIconInitializer() , restoreIcon.height_0) + 'px;width:' + restoreIcon.width_0 + 'px;overflow:hidden;background:url("' + restoreIcon.url.uri + '") -' + restoreIcon.left_0 + 'px -' + restoreIcon.top_0 + 'px  no-repeat;}.GN1NA3IBBHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$restoreOverIconInitializer() , restoreOverIcon.height_0) + 'px;width:' + restoreOverIcon.width_0 + 'px;overflow:hidden;background:url("' + restoreOverIcon.url.uri + '") -' + restoreOverIcon.left_0 + 'px -' + restoreOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBCHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$rightIconInitializer() , rightIcon.height_0) + 'px;width:' + rightIcon.width_0 + 'px;overflow:hidden;background:url("' + rightIcon.url.uri + '") -' + rightIcon.left_0 + 'px -' + rightIcon.top_0 + 'px  no-repeat;}.GN1NA3IBDHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$rightOverIconInitializer() , rightOverIcon.height_0) + 'px;width:' + rightOverIcon.width_0 + 'px;overflow:hidden;background:url("' + rightOverIcon.url.uri + '") -' + rightOverIcon.left_0 + 'px -' + rightOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBEHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$saveIconInitializer() , saveIcon.height_0) + 'px;width:' + saveIcon.width_0 + 'px;overflow:hidden;background:url("' + saveIcon.url.uri + '") -' + saveIcon.left_0 + 'px -' + saveIcon.top_0 + 'px  no-repeat;}.GN1NA3IBFHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$saveOverIconInitializer() , saveOverIcon.height_0) + 'px;width:' + saveOverIcon.width_0 + 'px;overflow:hidden;background:url("' + saveOverIcon.url.uri + '") -' + saveOverIcon.left_0 + 'px -' + saveOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBGHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$searchIconInitializer() , searchIcon.height_0) + 'px;width:' + searchIcon.width_0 + 'px;overflow:hidden;background:url("' + searchIcon.url.uri + '") -' + searchIcon.left_0 + 'px -' + searchIcon.top_0 + 'px  no-repeat;}.GN1NA3IBHHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$searchOverIconInitializer() , searchOverIcon.height_0) + 'px;width:' + searchOverIcon.width_0 + 'px;overflow:hidden;background:url("' + searchOverIcon.url.uri + '") -' + searchOverIcon.left_0 + 'px -' + searchOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBKHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$upIconInitializer() , upIcon.height_0) + 'px;width:' + upIcon.width_0 + 'px;overflow:hidden;background:url("' + upIcon.url.uri + '") -' + upIcon.left_0 + 'px -' + upIcon.top_0 + 'px  no-repeat;}.GN1NA3IBLHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$upOverIconInitializer() , upOverIcon.height_0) + 'px;width:' + upOverIcon.width_0 + 'px;overflow:hidden;background:url("' + upOverIcon.url.uri + '") -' + upOverIcon.left_0 + 'px -' + upOverIcon.top_0 + 'px  no-repeat;}');
    return true;
  }
  return false;
}

function BlueTools_BlueToolResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(1022, 1, {}, BlueTools_BlueToolResources_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_41(){
  return '.GN1NA3IBMEC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$closeIconInitializer() , closeIcon.height_0) + 'px;width:' + closeIcon.width_0 + 'px;overflow:hidden;background:url("' + closeIcon.url.uri + '") -' + closeIcon.left_0 + 'px -' + closeIcon.top_0 + 'px  no-repeat;}.GN1NA3IBNEC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$closeOverIconInitializer() , closeOverIcon.height_0) + 'px;width:' + closeOverIcon.width_0 + 'px;overflow:hidden;background:url("' + closeOverIcon.url.uri + '") -' + closeOverIcon.left_0 + 'px -' + closeOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBOEC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$collapseIconInitializer() , collapseIcon.height_0) + 'px;width:' + collapseIcon.width_0 + 'px;overflow:hidden;background:url("' + collapseIcon.url.uri + '") -' + collapseIcon.left_0 + 'px -' + collapseIcon.top_0 + 'px  no-repeat;}.GN1NA3IBPEC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$collapseOverIconInitializer() , collapseOverIcon.height_0) + 'px;width:' + collapseOverIcon.width_0 + 'px;overflow:hidden;background:url("' + collapseOverIcon.url.uri + '") -' + collapseOverIcon.left_0 + 'px -' + collapseOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBAFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleDownIconInitializer() , doubleDownIcon.height_0) + 'px;width:' + doubleDownIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleDownIcon.url.uri + '") -' + doubleDownIcon.left_0 + 'px -' + doubleDownIcon.top_0 + 'px  no-repeat;}.GN1NA3IBBFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleDownOverIconInitializer() , doubleDownOverIcon.height_0) + 'px;width:' + doubleDownOverIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleDownOverIcon.url.uri + '") -' + doubleDownOverIcon.left_0 + 'px -' + doubleDownOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBCFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleLeftIconInitializer() , doubleLeftIcon.height_0) + 'px;width:' + doubleLeftIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleLeftIcon.url.uri + '") -' + doubleLeftIcon.left_0 + 'px -' + doubleLeftIcon.top_0 + 'px  no-repeat;}.GN1NA3IBDFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleLeftOverIconInitializer() , doubleLeftOverIcon.height_0) + 'px;width:' + doubleLeftOverIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleLeftOverIcon.url.uri + '") -' + doubleLeftOverIcon.left_0 + 'px -' + doubleLeftOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBEFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleRightIconInitializer() , doubleRightIcon.height_0) + 'px;width:' + doubleRightIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleRightIcon.url.uri + '") -' + doubleRightIcon.left_0 + 'px -' + doubleRightIcon.top_0 + 'px  no-repeat;}.GN1NA3IBFFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleRightOverIconInitializer() , doubleRightOverIcon.height_0) + 'px;width:' + doubleRightOverIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleRightOverIcon.url.uri + '") -' + doubleRightOverIcon.left_0 + 'px -' + doubleRightOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBGFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleUpIconInitializer() , doubleUpIcon.height_0) + 'px;width:' + doubleUpIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleUpIcon.url.uri + '") -' + doubleUpIcon.left_0 + 'px -' + doubleUpIcon.top_0 + 'px  no-repeat;}.GN1NA3IBHFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleUpOverIconInitializer() , doubleUpOverIcon.height_0) + 'px;width:' + doubleUpOverIcon.width_0 + 'px;overflow:hidden;background:url("' + doubleUpOverIcon.url.uri + '") -' + doubleUpOverIcon.left_0 + 'px -' + doubleUpOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBIFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$downIconInitializer() , downIcon.height_0) + 'px;width:' + downIcon.width_0 + 'px;overflow:hidden;background:url("' + downIcon.url.uri + '") -' + downIcon.left_0 + 'px -' + downIcon.top_0 + 'px  no-repeat;}.GN1NA3IBJFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$downOverIconInitializer() , downOverIcon.height_0) + 'px;width:' + downOverIcon.width_0 + 'px;overflow:hidden;background:url("' + downOverIcon.url.uri + '") -' + downOverIcon.left_0 + 'px -' + downOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBKFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$expandIconInitializer() , expandIcon.height_0) + 'px;width:' + expandIcon.width_0 + 'px;overflow:hidden;background:url("' + expandIcon.url.uri + '") -' + expandIcon.left_0 + 'px -' + expandIcon.top_0 + 'px  no-repeat;}.GN1NA3IBLFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$expandOverIconInitializer() , expandOverIcon.height_0) + 'px;width:' + expandOverIcon.width_0 + 'px;overflow:hidden;background:url("' + expandOverIcon.url.uri + '") -' + expandOverIcon.left_0 + 'px -' + expandOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBMFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$gearIconInitializer() , gearIcon.height_0) + 'px;width:' + gearIcon.width_0 + 'px;overflow:hidden;background:url("' + gearIcon.url.uri + '") -' + gearIcon.left_0 + 'px -' + gearIcon.top_0 + 'px  no-repeat;}.GN1NA3IBNFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$gearOverIconInitializer() , gearOverIcon.height_0) + 'px;width:' + gearOverIcon.width_0 + 'px;overflow:hidden;background:url("' + gearOverIcon.url.uri + '") -' + gearOverIcon.left_0 + 'px -' + gearOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBOFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$leftIconInitializer() , leftIcon.height_0) + 'px;width:' + leftIcon.width_0 + 'px;overflow:hidden;background:url("' + leftIcon.url.uri + '") -' + leftIcon.left_0 + 'px -' + leftIcon.top_0 + 'px  no-repeat;}.GN1NA3IBPFC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$leftOverIconInitializer() , leftOverIcon.height_0) + 'px;width:' + leftOverIcon.width_0 + 'px;overflow:hidden;background:url("' + leftOverIcon.url.uri + '") -' + leftOverIcon.left_0 + 'px -' + leftOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBAGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$maximizeIconInitializer() , maximizeIcon.height_0) + 'px;width:' + maximizeIcon.width_0 + 'px;overflow:hidden;background:url("' + maximizeIcon.url.uri + '") -' + maximizeIcon.left_0 + 'px -' + maximizeIcon.top_0 + 'px  no-repeat;}.GN1NA3IBBGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$maximizeOverIconInitializer() , maximizeOverIcon.height_0) + 'px;width:' + maximizeOverIcon.width_0 + 'px;overflow:hidden;background:url("' + maximizeOverIcon.url.uri + '") -' + maximizeOverIcon.left_0 + 'px -' + maximizeOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBCGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minimizeIconInitializer() , minimizeIcon.height_0) + 'px;width:' + minimizeIcon.width_0 + 'px;overflow:hidden;background:url("' + minimizeIcon.url.uri + '") -' + minimizeIcon.left_0 + 'px -' + minimizeIcon.top_0 + 'px  no-repeat;}.GN1NA3IBDGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minimizeOverIconInitializer() , minimizeOverIcon.height_0) + 'px;width:' + minimizeOverIcon.width_0 + 'px;overflow:hidden;background:url("' + minimizeOverIcon.url.uri + '") -' + minimizeOverIcon.left_0 + 'px -' + minimizeOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBEGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minusIconInitializer() , minusIcon.height_0) + 'px;width:' + minusIcon.width_0 + 'px;overflow:hidden;background:url("' + minusIcon.url.uri + '") -' + minusIcon.left_0 + 'px -' + minusIcon.top_0 + 'px  no-repeat;}.GN1NA3IBFGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minusOverIconInitializer() , minusOverIcon.height_0) + 'px;width:' + minusOverIcon.width_0 + 'px;overflow:hidden;background:url("' + minusOverIcon.url.uri + '") -' + minusOverIcon.left_0 + 'px -' + minusOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBGGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$pinIconInitializer() , pinIcon.height_0) + 'px;width:' + pinIcon.width_0 + 'px;overflow:hidden;background:url("' + pinIcon.url.uri + '") -' + pinIcon.left_0 + 'px -' + pinIcon.top_0 + 'px  no-repeat;}.GN1NA3IBHGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$pinOverIconInitializer() , pinOverIcon.height_0) + 'px;width:' + pinOverIcon.width_0 + 'px;overflow:hidden;background:url("' + pinOverIcon.url.uri + '") -' + pinOverIcon.left_0 + 'px -' + pinOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBIHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$unpinIconInitializer() , unpinIcon.height_0) + 'px;width:' + unpinIcon.width_0 + 'px;overflow:hidden;background:url("' + unpinIcon.url.uri + '") -' + unpinIcon.left_0 + 'px -' + unpinIcon.top_0 + 'px  no-repeat;}.GN1NA3IBJHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$unpinOverIconInitializer() , unpinOverIcon.height_0) + 'px;width:' + unpinOverIcon.width_0 + 'px;overflow:hidden;background:url("' + unpinOverIcon.url.uri + '") -' + unpinOverIcon.left_0 + 'px -' + unpinOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBIGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$plusIconInitializer() , plusIcon.height_0) + 'px;width:' + plusIcon.width_0 + 'px;overflow:hidden;background:url("' + plusIcon.url.uri + '") -' + plusIcon.left_0 + 'px -' + plusIcon.top_0 + 'px  no-repeat;}.GN1NA3IBJGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$plusOverIconInitializer() , plusOverIcon.height_0) + 'px;width:' + plusOverIcon.width_0 + 'px;overflow:hidden;background:url("' + plusOverIcon.url.uri + '") -' + plusOverIcon.left_0 + 'px -' + plusOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBKGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$printIconInitializer() , printIcon.height_0) + 'px;width:' + printIcon.width_0 + 'px;overflow:hidden;background:url("' + printIcon.url.uri + '") -' + printIcon.left_0 + 'px -' + printIcon.top_0 + 'px  no-repeat;}.GN1NA3IBLGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$printOverIconInitializer() , printOverIcon.height_0) + 'px;width:' + printOverIcon.width_0 + 'px;overflow:hidden;background:url("' + printOverIcon.url.uri + '") -' + printOverIcon.left_0 + 'px -' + printOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBMGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$questionIconInitializer() , questionIcon.height_0) + 'px;width:' + questionIcon.width_0 + 'px;overflow:hidden;background:url("' + questionIcon.url.uri + '") -' + questionIcon.left_0 + 'px -' + questionIcon.top_0 + 'px  no-repeat;}.GN1NA3IBNGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$questionOverIconInitializer() , questionOverIcon.height_0) + 'px;width:' + questionOverIcon.width_0 + 'px;overflow:hidden;background:url("' + questionOverIcon.url.uri + '") -' + questionOverIcon.left_0 + 'px -' + questionOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBOGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$refreshIconInitializer() , refreshIcon.height_0) + 'px;width:' + refreshIcon.width_0 + 'px;overflow:hidden;background:url("' + refreshIcon.url.uri + '") -' + refreshIcon.left_0 + 'px -' + refreshIcon.top_0 + 'px  no-repeat;}.GN1NA3IBPGC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$refreshOverIconInitializer() , refreshOverIcon.height_0) + 'px;width:' + refreshOverIcon.width_0 + 'px;overflow:hidden;background:url("' + refreshOverIcon.url.uri + '") -' + refreshOverIcon.left_0 + 'px -' + refreshOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBAHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$restoreIconInitializer() , restoreIcon.height_0) + 'px;width:' + restoreIcon.width_0 + 'px;overflow:hidden;background:url("' + restoreIcon.url.uri + '") -' + restoreIcon.left_0 + 'px -' + restoreIcon.top_0 + 'px  no-repeat;}.GN1NA3IBBHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$restoreOverIconInitializer() , restoreOverIcon.height_0) + 'px;width:' + restoreOverIcon.width_0 + 'px;overflow:hidden;background:url("' + restoreOverIcon.url.uri + '") -' + restoreOverIcon.left_0 + 'px -' + restoreOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBCHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$rightIconInitializer() , rightIcon.height_0) + 'px;width:' + rightIcon.width_0 + 'px;overflow:hidden;background:url("' + rightIcon.url.uri + '") -' + rightIcon.left_0 + 'px -' + rightIcon.top_0 + 'px  no-repeat;}.GN1NA3IBDHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$rightOverIconInitializer() , rightOverIcon.height_0) + 'px;width:' + rightOverIcon.width_0 + 'px;overflow:hidden;background:url("' + rightOverIcon.url.uri + '") -' + rightOverIcon.left_0 + 'px -' + rightOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBEHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$saveIconInitializer() , saveIcon.height_0) + 'px;width:' + saveIcon.width_0 + 'px;overflow:hidden;background:url("' + saveIcon.url.uri + '") -' + saveIcon.left_0 + 'px -' + saveIcon.top_0 + 'px  no-repeat;}.GN1NA3IBFHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$saveOverIconInitializer() , saveOverIcon.height_0) + 'px;width:' + saveOverIcon.width_0 + 'px;overflow:hidden;background:url("' + saveOverIcon.url.uri + '") -' + saveOverIcon.left_0 + 'px -' + saveOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBGHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$searchIconInitializer() , searchIcon.height_0) + 'px;width:' + searchIcon.width_0 + 'px;overflow:hidden;background:url("' + searchIcon.url.uri + '") -' + searchIcon.left_0 + 'px -' + searchIcon.top_0 + 'px  no-repeat;}.GN1NA3IBHHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$searchOverIconInitializer() , searchOverIcon.height_0) + 'px;width:' + searchOverIcon.width_0 + 'px;overflow:hidden;background:url("' + searchOverIcon.url.uri + '") -' + searchOverIcon.left_0 + 'px -' + searchOverIcon.top_0 + 'px  no-repeat;}.GN1NA3IBKHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$upIconInitializer() , upIcon.height_0) + 'px;width:' + upIcon.width_0 + 'px;overflow:hidden;background:url("' + upIcon.url.uri + '") -' + upIcon.left_0 + 'px -' + upIcon.top_0 + 'px  no-repeat;}.GN1NA3IBLHC{height:' + ($clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$upOverIconInitializer() , upOverIcon.height_0) + 'px;width:' + upOverIcon.width_0 + 'px;overflow:hidden;background:url("' + upOverIcon.url.uri + '") -' + upOverIcon.left_0 + 'px -' + upOverIcon.top_0 + 'px  no-repeat;}';
}
;
_.injected = false;
function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$closeIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$closeIconInitializer = nullMethod;
  closeIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAoElEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/xeC5296DGcjY2RxDM2vfkIUqDlPANMgPgyji2NofvYNgpEVYuODMIbmh58RGFkDjEaWx9B8/slvFIysEV0OQ/PFZ3/gGJvNyPIYmq+8+AfGyBqw8UEYQ/O1V6h+BfFhGF0cQ/PNNxAMUgBjI2NkcayJBJsmdIySSChK25TkKgBCSu69josNggAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$closeOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$closeOverIconInitializer = nullMethod;
  closeOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAqklEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///gfj+Zsew9nIGFkcQzMIgBSoOU8A069+/odjdHGsmtENePYNlQ8CIDEMzQ8//wdjdAOQNcLUYGhGxugGwAIJI8Rhmi8++wPG+GyGqcHQfOXFP6w2ovNB6giGNghce/UfpxdQNN98g1AIAiA+DKOLY00kMIXIGpENANEoiYSitE1JrgIAr+PXpxH5+cEAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$collapseIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$collapseIconInitializer = nullMethod;
  collapseIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAhElEQVR42mNw+A+BhQvuEo1hehhgGs8/+U00hhnAANNICoAZANccWH/4/7Nv/wni939xaIYZgM+/r35SYDMIk6354Wc8zr747A9eZyOHOIpmkEYQxhdNMHmcmvHhKy/+kedskNy1V2h+BpmGbDo+J998gyXAQJEPkiCEURIJRWmbklwFAEIT+MGl7BOCAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$collapseOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$collapseOverIconInitializer = nullMethod;
  collapseOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAhElEQVR42mNw+A+BhQvuEo1hehhgGs8/+U00hhnAANNICoAZANdsFLrp/7Nv/wni939xaIYZgM+/r35SYDMIk6354Wc8zr747A9eZyOHOIpmkEYQxhdNMHmcmvHhKy/+kedskNy1V2h+BpmGbDo+J998gyXAQJEPkiCEURIJRWmbklwFALbt9ONkvf4gAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleDownIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleDownIconInitializer = nullMethod;
  doubleDownIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAkklEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U8IDmjYAMYwPjYxDM3PviEwTDE6G4YxND/8jIphmkAYXQ5D8/knvzEwSCM2cQzNF5/9AWOYbTA+NjEMzVde/INjmGJ0NgxjaL72ChUj+xldDkPzzTeYGKQRmzjWRIJNITpGSSQUpW1KchUA5iH34pohwJAAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleDownOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleDownOverIconInitializer = nullMethod;
  doubleDownOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAm0lEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///icaY2h+9fM/GKs5TwBjGB+bGIbmZ9/+wzFMMTobhjE0P/z8HwXDNIEwuhyGZmwYpBFviMM0X3z2B4xhtsH42MQwNF958Q+OYYrR2TCMofnaq/8oGNnP6HIYmm+++Y+BQRqxiWNNJNgUomOUREJR2qYkVwEA+qjPBq6QgVQAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleLeftIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleLeftIconInitializer = nullMethod;
  doubleLeftIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAiUlEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U9UHNCwAScfQ/OzbwgMUgjCuPgYmh9+hmCYQlx8EMbQfP7Jb7hCEBsbH4YxNF989geMYRpw8UEYQ/OVF//gGKYBFx9D87VXqBikGBcfQ/PNN8RjrImEGI0oiYSitE1JrgIALan4TNkea9UAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleLeftOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleLeftOverIconInitializer = nullMethod;
  doubleLeftOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAkElEQVR42qWTzQmAMAxGO42LOJGbOIIbiSCCBw+CFBHBgyCIP5EUUywxEDHwDl/5Xg8lNeaeJGtAi3kOHuTdpsZfQOKX8ReQPB2ghsnDCgFRnIqZyXYBDxYRKTO5ncFBRSkjTEaoKGX24iQXdneQIGWEyWV/ekiQMpOrAQKwLGUm1yOoeV0SjRgsya/d/vOrLv2Tz3C++SFrAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleRightIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleRightIconInitializer = nullMethod;
  doubleRightIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAjUlEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U8IDmjYAGdj44MwhuZn3yAYpBiEcfFBGEPzw88IDNOAi4+h+fyT3ygYpgEbH0PzxWd/4BimEBcfQ/OVF//AGKYQFx+EMTRfewXBIIUwNjY+CGNovvmGeIw1kRCjESWRUJS2KclVADtJ+EyLXf4VAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleRightOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleRightOverIconInitializer = nullMethod;
  doubleRightOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAlUlEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///icaY2h+9fM/GKs5T4CzsfFBGEPzs2//wRikGIRx8UEYQ/PDz//hGKYBFx9DMzqGacDFR9F88dkfOIYpxMXH0HzlxT8whinExQdhDM3XXv0HY5BCGBsbH4QxNN98859ojDWREKMRJZFQlLYpyVUAE7LPcEyLl+MAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleUpIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleUpIconInitializer = nullMethod;
  doubleUpIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAj0lEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/xcTBzRswCqOofnVT1QM0gjD6HIYmp99Q2CYJnQ2DGNofvgZgmGKYXxsYhiazz/5jYFBGrCJY2i++OwPCkb2M7ochuYrL/7BMUwTOhuGMTRfewXBMMUwPjYxDM033xCPsSYSYjSiJBKK0jYluQoAXfj3vttscucAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleUpOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$doubleUpOverIconInitializer = nullMethod;
  doubleUpOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAl0lEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///sfAas4TsIpjaH718z8KBmmEYXQ5DM3Pvv2HY5gmdDYMY2h++Pk/GMMUw/jYxDA0Y8MgDXhDHKb54rM/KBjZz+hyGJqvvPgHxzBN6GwYxtB87dV/MIYphvGxiWFovvnmP9EYayIhRiNKIqEobVOSqwDxxM7iuRV0CAAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$downIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$downIconInitializer = nullMethod;
  downIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAeklEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U/iMYbmZ9+IxxiaH36GYKPQTTgxTA2G5vNPfsMxNo3I8hiaLz77g4KRNaLLYWi+8uIfBgZpxCaOofnaK+Ixhuabb4jHWBMJMRpREglFaZuSXAUAjAD+RKNKw70AAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$downOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$downOverIconInitializer = nullMethod;
  downOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAjElEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///icaY2h+9fM/0RhD87Nv/8EYH4CpwdD88DNEgZrzBJwYBEDqMDTDMC4DYAGFEuIwzRef/YFjdANAAFkeQ/OVF/9QMMwAEECXw9B87dV/ojGG5ptv/hONsSYSYjSiJBKK0jYluQoAOU3hCrUDdGIAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$expandIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$expandIconInitializer = nullMethod;
  expandIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAkElEQVR42mNw+A+BhQvuEo1hehhgGs8/+U00hhnAANNICoAZANccWH/4/7Nv/wni939xaIZhkCJkPrLBr34SYfOWS6gYWY5sZz/8TMDZMHzlxT8MMeQQh2sGKYQphrFBGN35F5/9IV4zNoxXMy5ng/jXXqH5GZ8tyE4G8W++wRJgoMgHSRDCKImEorRNSa4CAMw39NIPuE22AAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$expandOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$expandOverIconInitializer = nullMethod;
  expandOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAjklEQVR42mNw+A+BhQvuEo1hehhgGs8/+U00hhnAANNICoAZANdsFLrp/7Nv/wni939xaIZhkCJkPrLBr34SYTN6ICHLke3sh58JOBuGr7z4hyGGHOJwzSCFMMUwNgijO//isz/Ea8aG8WrG5WwQ/9orND/jswXZySD+zTdYAgwU+SAJQhglkVCUtinJVQCyMuTXGZRKtQAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$gearIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$gearIconInitializer = nullMethod;
  gearIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABVklEQVR42qWTy0sCURSH/edaRrSzVeCijSRkuGhABI1IezE1BUamjYZGiUr5GKwMMogySpOgCEIddJpeVFBEj192p4am6yLxwMfAub/vMHc4o9N9lzst4b/oftdXo5lSBzQragb8yHfvWuxTe4QhTqDOKFl+UZgJ5eF0ZxHevsSIp4CAIIIZjmMuWlYzlFx9UggIJcRz94js3CJx8IClTRnjvmM4uF01Q8mlRwXraAaR7A0YVxJmm6/+Fjn4UzX021NqhpIPxVcwzjTShWcsb13B4oiSHreYx0JcJPfvMbGkR8n56huRu408gusS+EQFrP+M3HU2fFEflkGXYZLkKLkofRDMthjmY2X41mrwrlYwHTrHmLcI00BQzVDyiaxgtHjQqXfB0MvXP9I+OvQs+mwbMFtX1Awln15rcUwk0dY+SJ587Ehz1nBJ/g5ohGZJWtrtVv6qT1t65AXqyU76AAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$gearOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$gearOverIconInitializer = nullMethod;
  gearOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABWklEQVR42qWTW0sCQRiG/XNdRnRnV4EX3UiChhcJIrgRaScsC4rMbTU0SnQpT1gZZBBllCZBUYS6qNmJCoro8LYOObSOF4YfPCzMvM/HzPCtSvVbev4KraL6W7WFY+mjZWiDuvifog3q8uMXFFinDwjDzjizx8jVdxBm/RnY5lII7N5g1JWFNy7BNBLGQqhAM4xcegXBG88jnH5CcO8BkaNnrGxXMcGfgnPu0wwj519AMI8lEUzdw2SPwmDh5VOk4YmVMWCN0Qwj1zDZEkhk37C6cwsjFyJrzuUMlsISuX+fzqF88bqcKX0SuVcrwLdZgRApwuG5IHedD1zLzZLo0UyRHCPnKt8Eg0XEolgAv1GGe72IGf8lxt056AZ9NMPIZ1UQtEYXutV2aPoF+ZEO0aV2QG/ZgsG8RjOMfH4HBdxkFB2dQ+QriCeKvaZD0tigGYohaWu22/mrfgDWdcfRlerLZgAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$leftIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$leftIconInitializer = nullMethod;
  leftIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAiElEQVR42qWTSwqAMAxEeybv4uG8hlsPIYIILgUppQguBEH8ErClzXTR0sDbzPCySoT4p2rUG4twh4KUsQtSRW+Bkdc7HpD1EaYoa8hAljtCIsFzkKfNx4gE70Bu59PiioTbESB38vJwZd6B3KsHMDLPQR50GJJ5BvK4xBM8khjRO5Ks2875qg8HVP4ttTHvnAAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$leftOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$leftOverIconInitializer = nullMethod;
  leftOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAnklEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///seKQQBdDEPzq5//MTAIGIVuAtPI4hian337j4JhGmGakeUwND/8/B+OkTXCNCPLY2iGYXSNMM1YQxym+eKzP3CMzWZkeQzNV178Q8HofkaWw9B87dV/DIwc2sjiGJpvvvmPFYMAuhjWRILLAGSMkkgoStuU5CoA4kjlRi0W5asAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$maximizeIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$maximizeIconInitializer = nullMethod;
  maximizeIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAiUlEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51c///41CNxHEIHUYmp99I04zSB2G5oefIZpBNC4Mk8fQfP7Jb7AkiMaFYfIYmi8++wOWBNG4MEweQ/OVF//AkiAaF4bJY2i+9oq4AAOpw9B88w3xGGsiIUYjSiKhKG1TkqsAcIzfRUNFSvYAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$maximizeOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$maximizeOverIconInitializer = nullMethod;
  maximizeOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAXUlEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///icaY2gGATXnCQQxVpupohkfIEozthAmWvPFZ38wMNGayXY22QFGUSK5+YYwRkkkFKVtSnIVAEBhw/MR/4yEAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minimizeIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minimizeIconInitializer = nullMethod;
  minimizeIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAeUlEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U/iMYbmZ9+IxxiaH34mHmNoPv/kN9EYQ/PFZ3/AeP6mxzgxTA2G5isv/oGxmvMEnBimBkPztVcQjM9mmBoMzTffEI+xJhJiNKIkEorSNiW5CgCVhgM0FAqNnwAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minimizeOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minimizeOverIconInitializer = nullMethod;
  minimizeOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAj0lEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///icaY2h+9fM/0RhD87Nv/4nGGJoffv5PNMbQDMOEAgolxGGaLz77A1Ywf9NjnBgEQOowNF958Q8sqeY8AScGAZA6DM3XXv0nymaQOgzNN9/8h9uOC4DkQeqwJhKQBCGMkkgoStuU5CoASO/sKwx7Zi8AAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minusIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minusIconInitializer = nullMethod;
  minusIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAgklEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U/iMYbmZ9+IxxiaH36G4HOPfuDEMDUYms8/+Q3GhQvu/g9o2ICBQeIwNRiaLz77A8aHr3/CiWFqMDRfefGPaIyh+dor4jGG5ptviMdYEwkxGlESCUVpm5JcBQDmLg0dn/VALwAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minusOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$minusOverIconInitializer = nullMethod;
  minusOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAiklEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///icaY2h+9fM/0RhD87Nv/4nGGJoffv4Pxuce/cCJYWowNMNwQMOG/2rOEzAwSBwjxGGaLz77A8aHr3/CiWFqMDRfefGPaIyh+dqr/0RjDM033/wnGmNNJMRoREkkFKVtSnIVAB+O7VuUVVPmAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$pinIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$pinIconInitializer = nullMethod;
  pinIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAn0lEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/xeBCxfcxcDI8hiaX/1EYJDiZ99QDUGWx9AMUgzD2DQjy2NofvgZgUGKYTQMI8tjaD7/5DccgxTDaBhGlsfQfPHZHzgGKYbRMIwsj6H5yot/YIwtpGEYpgZD87VXmBikYfPZtxjiGJpvvsHEMM3o4lgTCTGaURIJRWmbklwFAAjk933T0BGSAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$pinOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$pinOverIconInitializer = nullMethod;
  pinOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAApUlEQVR42qWTQQrCQAxF5zS9SE/kTXoE79BzFBGK4MKFUIoUpYtCQbSNRPpD6p/FSAOPQJKXxZAJYYnd/iKpBB9aODSvZGwBxH/CFkDuJzGyvCB8n+TuKYYOt+N6ie+TrMMgJvs+yddBDB1GBr5PskeHkUH0xSEf27ehw8jA90mub/OX2EsDzJB86oRQoaweVCf5fBcC8m89eiQp8upINt32ll/1AXUUucrWgH2IAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$plusIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$plusIconInitializer = nullMethod;
  plusIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAo0lEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U9UfO7Rj/+FC+6CaXQ5DM3PvqFikKaAhg1gGl0OQ/PDzxAMUgzDMM0wDFODofn8k99gDHIqSBM6BonD1GBovvjsDxgfvv4JjkGakPkwNRiar7z4h4KRNaPLYWi+9goVgzSBnAqi0eUwNN98QzzGmkiI0YiSSChK25TkKgAKJwTz/PpyXgAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$plusOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$plusOverIconInitializer = nullMethod;
  plusOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAq0lEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///icaY2h+9fM/Cj736Mf/gIYNYBpdDkPzs2//UTBIk5rzBDCNLoeh+eHn/2AMUgzDMM0wDFODoRmGQU4FaULHIHGMEIdpvvjsDxgfvv4JjkGakPkwNRiar7z4h4KRNaPLYWi+9uo/CgZpAjkVRKPLYWi++eY/0RhrIiFGI0oioShtU5KrAPNe4jlkfEB9AAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$printIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$printIconInitializer = nullMethod;
  printIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABAUlEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/xeCA+sPo+DaxffgcjCMofnVTwgGaUAGMANg8iCMofnZNwhG1wzSCDMApgZD88PPEIyuGdkFMDUYms8/+Q0WaFz+CIgfgm2qXnjnf+X82//L5938Xzzryv/wut1gdRiaLz778z+k8Qje0HUp2ABWh6H5yot/YKe9+Pzqf8v+wP8zTub/n3myEMgO+b/lEkSxVeYqsDoMzdde/f8f2nwMrBAbBqmzy1oNVoeh+eYbSMhmdF/+X9D/8H9O753/ud23/ud1Xf+f0332v0vuarAYSB3WRAKSIIRREglFaZuSXAUAiq3rYJiVEQAAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$printOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$printOverIconInitializer = nullMethod;
  printOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA3ElEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///gdjv8yVKLh28T24HAxjaH718z8YgzQgA5gBMHkQxtD87Nt/MEbXDNIIMwCmBkPzw8//wVjPeypWf4LEYWowNMMEirv24MSOMQtQQxym+eKzPxhORgYgdWrOE8DqMDRfefEPrPnF51f/W/YH/p9xMv//zJOFQHbI/y2XEJpB6jA0X3sFCSyQQmwYphmkDkPzzTf//5c2b0CJY1AggTBIEwiD/AxShzWRgCQIYZREQlHapiRXAQD528KEXQBrCgAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$questionIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$questionIconInitializer = nullMethod;
  questionIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA50lEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/xeCH3768b9l5an/4W1b/qdM2PW/Z/05sBhMHoQxNL/6CcEgxQENG1Bw+bwjcHkQxtD87BsEg2wDadh87sn/XZdfgNmR7Vvh8iCMofnhZwS+/e7P//uf/v1vWHYKrLlz7XkUeQzN55/8RsEtK8+DNebNOPT/1IMfKHIYmi8++4OCw1q3gPHpRz8x5DA0X3nxDwUfuf31/7G73zDEQRhD87VXqBgW0ujiIIyh+eYbVAzyMwiji4Mw1kSCTSE6RkkkFKVtSnIVALhm+ATPrrVuAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$questionOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$questionOverIconInitializer = nullMethod;
  questionOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA8UlEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///gfju2++/s9o2Ppf32fqf/uoef+LOneBxWDyIIyh+dXP/2Bc3LXnv5rzBBQcXrgGLg/CGJqfffsPxo4xC8Aaluy8+X/dwXtgtpHfdLg8CGNofvj5PxzffP3r//2P//6n1G4Fa87v2IMij6EZHWe3Qpzvl7ny/4m737CHOEzzxWd/ULCe91QwPnX/O4YchuYrL/6h4P1XPv4/dP0ThjgIY2i+9uo/CoaFNLo4CGNovvnmPwoGRRkIo4uDMNZEgk0hOkZJJBSlbUpyFQDrPc+wp/uJ8gAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$refreshIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$refreshIconInitializer = nullMethod;
  refreshIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAp0lEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/xc7DmjYgCGGofnVT1S8+exbMAZpBmFkOQzNz75BMLIGdAxTg6H54WcIBimCsWF8dDEMzeef/AZjkM0gGqQBmYaJgzCG5ovP/sAxzDZ0MRgbQ/OVF//AGJd/QTbD1GBovvYKgZE1gDCyHAhjaL75BhWDNKOLwTDWRIJLMTJGSSQUpW1KchUAaFLyiofSEJAAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$refreshOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$refreshOverIconInitializer = nullMethod;
  refreshOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAArklEQVR42qWTUQqCQBCG9zRdxBN5k47QHTxHRBBCDz4EIiFGD0EgpSP/0r/M7igYDnzsOjvfDsro3C/yQyVrcTqQONWf1YQLKP4T4QLKz0Fm2WV7kzNy20tEcXx4IAN9ZuTmLR4tpLDGyLeXeFDEPZ/TnJEJOmOFoFfmoy9O+dx8A+yW5rg38uU+epbeF51ZY+SylYAWgD4DRr52EgE5zZHZIVkq1kRDsmm2t/xVE1lFyKBLokgYAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$restoreIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$restoreIconInitializer = nullMethod;
  restoreIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAl0lEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U8ENgrdhBOD5DE0P/uGwCBF8zc9xsAgcZA8huaHnxEYpAiZjy6Oofn8k994nQuTB9EYmi8++4PXuTAMUoeh+cqLf2BJEI2O0cUxNF97BfETiEbH6OIYmm++wR9FIHkYxppIkBXgwiiJhKK0TUmuAgCyftxyJ03h3gAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$restoreOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$restoreOverIconInitializer = nullMethod;
  restoreOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAkElEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///odjfAAkj6H51c//YAwCas4TcGKsNj/79h+MYZrnb3qMgXFqfvj5PxjDNMP4yBinZkLOBakhqBmXc/H6GaYZBK68+AfHyOIwObya0QFM/NorCCbZzyBw8w0EY00k+ABMI0oioShtU5KrAO1xvz7T2jnPAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$rightIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$rightIconInitializer = nullMethod;
  rightIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAjElEQVR42qWTTQqDQAyF50zepYfzGm49RCmI4LIgg0jBhSCIPy2BpszL6yKDgW/zHl9WSQjfKevh7SWkI0HO/BbkirBA5enwQ/K4IsWtokwhOS6IyILNBZKfM6KyYDuS7/0GpLKQdiQ/4g6kou1IboYTUNHmAsntiIhoM4Xk7uXn75F4RDiSS7d95as+7AX+LZCxYv0AAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$rightOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$rightOverIconInitializer = nullMethod;
  rightOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAo0lEQVR42qWTQQqDQAxF50y9iwfxRj1DLyIFKbjooiBShkIXhUJRG4n0hz8TBYsfHkLiy+AQQ/ilPF5lK4GjhartN2MDIP4TGwD5OUqCJq8BJ8ePGJpDcZqfXAdO7t5iQMYA7ilOvr3EYBkDuO9kJpcxwN045HM3GEsnc9/J9f1r5N/MPcXJlygG3zbXgZObhyRo8hpYXJK1l5lkSXbt9p6/agLPoOVGHaNQcwAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$saveIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$saveIconInitializer = nullMethod;
  saveIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABkUlEQVR42qWTWy8rURiG+4v8gH3hyh+QTVyIUIlshCIidDufD+OUuNgq4lDHcGHfuxAhqqJBlCpGVKqphl0yzu302asrCBkJ4kve5J01z7Pm5huT6Wls80E+G9PriR98ZV4u+Kr45oJnOayD5Y+bkv5NGsZ3ye12kdfromxgk1LbFtnKKlntTskZ5NADpLc4ZLf0rb984S4CV/fQOefH3OGQnEEO3EJG2yqPUZ1INIaux4iKPEbizzrN0yo/axclZ5B9GuR0rVEzoVI3qVI1dsDvES9WkYrhPSqG9shoWpCcQd7wRzArTuqnTkR8VI8dUTl6iHX4gPIhL6UDbtJq5iVnkLcCUVLqlwlpGoGrC5Ewgcswp6Jf3GhYB3dIKv4rOYPsDsZIrl0iqIVoWkim31mEzVkiegpn134qB1V+5M1IziDvhiC1cUU0Fce/VjzXdjy3dtE7xdkxzXaVxPxZyRlk7zmYf/WSq2xT3OOjoOuQQmUfS4eHAsVFUuEsCZmTknt3SeIvPsqbJfnWbn/nr/oPsEneB4+caqQAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$saveOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$saveOverIconInitializer = nullMethod;
  saveOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABm0lEQVR42qWTWy9jURTH+4l8gHmYJ19AhngQoRJxCaURoS51vx63xMMg4lLGiD7wPg8yGVEVDaJUcUSlGhqm5LiN9vRnd0ebkSMZEyv5J2uv/f+tvbOztsn0EtYplffK9HckCpvB6LuVapAE/ydSDZJwRAfLVy/WkS1aZ/coHvBQMuShemyLqtFtCpQ18nvc0meAw38gp9MlO1uGN1KnPIhL3TxC32IQc69L+gxw6B5yu9d4iulEY3F0PU5M6CmaWOt0zKt8afopfQY4oEFh/zr2byrNcyoNM4fUTfmxCdVO7lM7sU9u+7L0GeCEzIqblu+nQgEaZ46pnz7CNnlIzYSfqjEv2fYfr188CW+HYmS2rBDWNEI3V0IRQtcRzkR+dadhG98lvXJJ+gyw9zxORtMvzrUw7csZjLgrGHVbRZ7JxW2Q+nGVTyUL0meA98KQ1bYq3lfF9bsL360D371D5H2idkKHQ+VzqVP6DLD/EsxFQxQrO1QOBijrP6JcOcDS66NM8ZBe7iQtb0763hySxMa/9GpIPjTbH/lVzytTwdM47SzTAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$searchIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$searchIconInitializer = nullMethod;
  searchIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABcElEQVR42qWTTUsCURiF/SFB61ZtCqpNaCG10CFIwxgyg0YsSgeMwlSSvrWFLQwkkhIziTaBDEgGtcs2kUj0RSSUyRAEBYFYnfRaptygxBcODM89zx0Y3pFIvsa7l8Z/IymdPKhkihdUKpZd8C0/vf+EnxNgmt4lzwbrFkZt/rJzShYzhRzfA+4dEQw7ietnQMnasbBxjmBELHYoOfVaiN4SgMV9BKnSCFfgFnKNA1NrV5CrxosdSk6+AAHhAarBRfgOAI3JB6MrBvWQBysC0KWbx/J6jPQo+eQui2FbCDqzD4zWAabXDG8ojtaOfsgYA5raWNQ3tpMeJZ+m3sDPhnF4A6xGspjxRAnTT/gRjufKQgY9A3bCKDmR/oDBto3oJWDKfe0+jieMs2xCSABjrn00tCgIo+QzEWBHPOStemsIUgVHmJpzYimYhJb3oqa2jjBKvngEEUpTypql3ZB1soT9uiT5g79StiRV7XY1f9UnLCXD30/QESIAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$searchOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$searchOverIconInitializer = nullMethod;
  searchOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABb0lEQVR42qWT3SuDURzH94co167cULjRRuJilmKanryVrRHbU0SzyfJuLriYWrJYw5IbtZ5SFHe4EUneoxgtpSglLx92sqetRyG/+tbpc36fc+r0OzrdV8kzZ/w2utRKgJ2rl19HPSAp/qXUA5Ly/Rtq5EEFZ9+yWNvdC7R5Qmn7Gjn+jMj2NYwvxTFJ3Zw+QLnUw/DsIfMrcbVHI8eeELG5wrjGN9GXO/CFLyixeOmdPqGkqlPt0ciXjxBWbqhqGiG4DhZnEIdvC3Ozn0kFKhqGmJjZEn0aOZEWT4SG9iCmOi+mmnYCkT0KS+sxmOzkFUlk5xanv3hS3o29Ig9E2TiHqZUX+v2rgtm6QkT3IKA8U93YI5hG3r99x+5ZZPUYnJ+vXWuVBbO65lD2ocO3Rk6BUTCNfBAHqdUvbrW5I+iNVsHM1lHG5i+pkwNkZGYJppGP7hBCalJZvr4SQ5kk2LdDktj4KWlD8q/Z/s+v+gCnIKer1PmoYgAAAABJRU5ErkJggg==')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_42 = new BlueTools_BlueToolResources_default_InlineClientBundleGenerator$1_0;
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$unpinIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$unpinIconInitializer = nullMethod;
  unpinIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAiUlEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U8EDmjYgMJHxxian31DYJBmXBgkj6H54WcEBilC5qOLY2jGZxsyPv/kN6bmzWffwjE+zRef/cHUfOXFPzjGpxkkj6H52isEBilC5qNjDM033xCPsSYSYjSiJBKK0jYluQoACGHqVdYwoy8AAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$unpinOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$unpinOverIconInitializer = nullMethod;
  unpinOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAk0lEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///icaY2h+9fM/HKs5T0Dho2MMzc++/YdjkGZcGCSPofnh5/9wDFKEzEcXx9CMzzZkjBLiMM2bz76FY3yaLz77g6n5yot/cIxPM0geQ/O1V//hGKQImY+OMTTffPOfaIw1kRCjESWRUJS2KclVADkru6x7Dw3IAAAAAElFTkSuQmCC')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$upIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$upIconInitializer = nullMethod;
  upIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAfUlEQVR42mNggIKZu1/8JxYzIAOQACkAbgCpGlEMgGl+/5d4jKH51U/iMYbmZ98wsVHoJqziGJoffkbFII0wjC6Hofn8k99wjKwRhpHlMTRffPYHjLFphGGYGgzNV178IxpjaL72iniMofnmG+Ix1kRCjEaUREJR2qYkVwEAppn+owefYZwAAAAASUVORK5CYII=')), 15, 15);
}

function $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$upOverIconInitializer(){
  $clinit_BlueTools_BlueToolResources_default_InlineClientBundleGenerator$upOverIconInitializer = nullMethod;
  upOverIcon = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAkElEQVR42mNggILCBXf/E4sZkAFI4PyT30RjuAEwjaQAuAEwze///icaY2h+9fM/BgYBbOIYmp99+4+CQUDNeQKYRpfD0Pzw8384hmmEYRBAlsfQDMPoGpENwAhxmOaLz/7g1IhsAEgdhuYrL/6BMT4AU4Oh+dqr/0RjDM033/wnGmNNJMRoREkkFKVtSnIVAAuC4imEoHa0AAAAAElFTkSuQmCC')), 15, 15);
}

function $afterCollapse(this$static){
  var bar, collapseBar, w, w$iterator;
  $remove_1(($clinit_RootPanel() , get_5()), this$static.panel);
  bar = dynamicCast($getData(this$static.panel, 'splitBar'), Q$SplitBar);
  !!bar && (bar.element.style['display'] = ($clinit_Style$Display() , 'block') , undefined);
  collapseBar = dynamicCast($getData(this$static, 'splitBar'), Q$SplitBar);
  !!collapseBar && (collapseBar.element.style['display'] = ($clinit_Style$Display() , 'block') , undefined);
  for (w$iterator = new AbstractList$IteratorImpl_0(this$static.panel.header.tools); w$iterator.i < w$iterator.this$0_0.size_1();) {
    w = dynamicCast($next_3(w$iterator), Q$Widget);
    w.getElement().style['visibility'] = ($clinit_Style$Visibility() , 'visible');
  }
  this$static.panel.element.style['display'] = ($clinit_Style$Display() , 'block');
  this$static.expanded = false;
}

function $collapse(this$static){
  this$static.expanded && $afterCollapse(this$static);
}

function $collapseHidden(this$static){
  var bar, wrap;
  wrap = $getFirstChildElement(this$static.element);
  !!wrap && $removeChildren(wrap);
  this$static.element.style['border'] = 'none';
  bar = dynamicCast($getData(this$static, 'splitBar'), Q$SplitBar);
  if (bar) {
    switch (this$static.region.ordinal) {
      case 1:
        bar.xOffset = 5;
        break;
      case 3:
        bar.xOffset = -5;
        break;
      case 0:
        bar.yOffset = -5;
        break;
      case 2:
        bar.yOffset = 5;
    }
    $disableDragging(bar);
  }
}

function $createSplitBar(this$static, region){
  switch (region.ordinal) {
    case 3:
      return new SplitBar_0(($clinit_Style$LayoutRegion() , EAST), this$static);
    case 1:
      return new SplitBar_0(($clinit_Style$LayoutRegion() , WEST), this$static);
    case 0:
      return new SplitBar_0(($clinit_Style$LayoutRegion() , SOUTH), this$static);
    case 2:
      return new SplitBar_0(($clinit_Style$LayoutRegion() , NORTH), this$static);
  }
  return null;
}

function $expand(this$static){
  var align, bar, collapseBar, preview, w, w$iterator;
  if (!this$static.expanded) {
    bar = dynamicCast($getData(this$static.panel, 'splitBar'), Q$SplitBar);
    !!bar && (bar.element.style['display'] = ($clinit_Style$Display() , 'none') , undefined);
    for (w$iterator = new AbstractList$IteratorImpl_0(this$static.panel.header.tools); w$iterator.i < w$iterator.this$0_0.size_1();) {
      w = dynamicCast($next_3(w$iterator), Q$Widget);
      w.getElement().style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
    }
    $updateZIndex(this$static.panel.element, 0);
    $setVisible_1(this$static.panel.element, true);
    $add_1(($clinit_RootPanel() , get_5()), this$static.panel);
    collapseBar = dynamicCast($getData(this$static, 'splitBar'), Q$SplitBar);
    !!bar && (collapseBar.element.style['display'] = ($clinit_Style$Display() , 'none') , undefined);
    $clinit_Style$Direction();
    align = new Style$AnchorAlignment_0(($clinit_Style$Anchor() , TOP_LEFT), TOP_RIGHT);
    switch (this$static.region.ordinal) {
      case 1:
        align = new Style$AnchorAlignment_0(TOP_RIGHT, TOP_LEFT);
        break;
      case 2:
        align = new Style$AnchorAlignment_0(BOTTOM_LEFT, TOP_LEFT);
        break;
      case 0:
        align = new Style$AnchorAlignment_0(TOP_LEFT, BOTTOM_LEFT);
    }
    $alignTo(this$static.panel.element, this$static.element, align, null);
    this$static.expanded = true;
    preview = new CollapsePanel$4_0(this$static);
    !preview.handler && (preview.handler = addNativePreviewHandler(preview));
  }
}

function $getSplitBar(this$static){
  if (!this$static.splitBar) {
    this$static.splitBar = $createSplitBar(this$static, this$static.region);
    $disableDragging(this$static.splitBar);
    if (this$static.panelData.collapseMini) {
      $setCollapsible(this$static.splitBar);
      switch (this$static.region.ordinal) {
        case 1:
          $updateMini(this$static.splitBar, ($clinit_Style$Direction() , LEFT_2));
          break;
        case 3:
          $updateMini(this$static.splitBar, ($clinit_Style$Direction() , RIGHT_2));
          break;
        case 0:
          $updateMini(this$static.splitBar, ($clinit_Style$Direction() , DOWN));
          break;
        case 2:
          $updateMini(this$static.splitBar, ($clinit_Style$Direction() , UP));
      }
    }
  }
  return this$static.splitBar;
}

function CollapsePanel_0(panel, data, region){
  var builder, config;
  Component_0.call(this);
  this.panel = panel;
  this.panelData = data;
  this.region = region;
  new CollapsePanelDefaultAppearance_0;
  builder = new SafeHtmlBuilder_0;
  $render_10(builder, region);
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(builder.sb.impl.string)).html)));
  this.eventsToSink == -1?sinkEvents_0(this.element, 1 | (this.element.__eventBits || 0)):(this.eventsToSink |= 1);
  config = ($clinit_ToolButton() , DOUBLERIGHT);
  switch (region.ordinal) {
    case 1:
      config = DOUBLELEFT;
      break;
    case 0:
      config = DOUBLEDOWN;
      break;
    case 2:
      config = DOUBLEUP;
  }
  this.expandBtn = new ToolButton_0(config);
  $addHandler(this.expandBtn, new CollapsePanel$1_0(this), (!TYPE_93 && (TYPE_93 = new GwtEvent$Type_0) , TYPE_93));
  $appendChild($getFirstChildElement(this.element), this.expandBtn.element);
}

defineSeed(1102, 96, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$CollapsePanel, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.doAttachChildren = function doAttachChildren_2(){
  doAttach(this.expandBtn);
}
;
_.doDetachChildren = function doDetachChildren_2(){
  doDetach(this.expandBtn);
}
;
_.onBrowserEvent = function onBrowserEvent_10(event_0){
  var target;
  $onBrowserEvent_0(this, event_0);
  if ($eventGetTypeInt(event_0.type) == 1) {
    event_0.stopPropagation();
    target = event_0.target;
    if ($isOrHasChild(this.expandBtn.element, target)) {
      this.expanded && $afterCollapse(this);
      this.onExpandButton();
    }
     else {
      this.expanded?this.expanded && $afterCollapse(this):$expand(this);
    }
  }
}
;
_.onExpandButton = function onExpandButton(){
}
;
_.expandBtn = null;
_.expanded = false;
_.panel = null;
_.panelData = null;
_.region = null;
_.splitBar = null;
function CollapsePanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1103, 1, makeCastMap([Q$EventHandler, Q$SelectEvent$SelectHandler]), CollapsePanel$1_0);
_.onSelect = function onSelect_4(event_0){
  this.this$0.expanded && $collapse(this.this$0);
  this.this$0.onExpandButton();
}
;
_.this$0 = null;
function CollapsePanel$4_0(this$0){
  this.this$0 = this$0;
  BaseEventPreview_0.call(this);
}

defineSeed(1104, 574, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), CollapsePanel$4_0);
_.onPreview = function onPreview_2(pe){
  var target;
  switch ($eventGetTypeInt(pe.nativeEvent.type)) {
    case 1:
    case 4:
      target = pe.nativeEvent.target;
      if (!$isOrHasChild(this.this$0.panel.element, target) && !$isOrHasChild(this.this$0.element, target)) {
        $collapse(this.this$0);
        $remove_10(this);
      }

  }
  return false;
}
;
_.this$0 = null;
function Component$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1105, 1, {}, Component$1_0);
_.execute = function execute_17(){
  $sync(this.this$0);
}
;
_.this$0 = null;
function Component$2_0(this$0){
  this.this$0 = this$0;
  DelayedTask_0.call(this);
}

defineSeed(1106, 580, {}, Component$2_0);
_.onExecute = function onExecute(){
  this.this$0.onWindowResize($getClientWidth($doc), $getClientHeight($doc));
}
;
_.this$0 = null;
function Component$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1107, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), Component$3_0);
_.onResize_0 = function onResize_4(event_0){
  $delay(this.this$0.windowResizeTask, 0);
}
;
_.this$0 = null;
function Component$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1108, 1, {}, Component$5_0);
_.execute = function execute_18(){
  $sync(this.this$0);
}
;
_.this$0 = null;
function doAttach(widget){
  !!widget && !widget.isAttached() && widget.onAttach();
}

function doDetach(widget){
  !!widget && widget.isAttached() && widget.onDetach();
}

function ensureHandlers_0(widget){
  if (widget) {
    return widget.ensureHandlers();
  }
  return null;
}

function setParent_0(parent_0, child){
  child && child.setParent(parent_0);
}

function $initWidget(this$static, widget){
  if (this$static.widget) {
    throw new IllegalStateException_1('Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  $setElement(this$static, widget.element);
  this$static.widget = widget;
  setParent_0(this$static, widget);
}

function $isAttached(this$static){
  if (this$static.widget) {
    return this$static.widget.attached;
  }
  return false;
}

defineSeed(1110, 96, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.isAttached = function isAttached_0(){
  return $isAttached(this);
}
;
_.onAttach = function onAttach_4(){
  doAttach(this.widget);
  this.element.__listener = this;
  $onLoad(this);
  fire_0(this, true);
}
;
_.onBrowserEvent = function onBrowserEvent_11(event_0){
  $onBrowserEvent_0(this, event_0);
  $onBrowserEvent_3(this.widget, event_0);
}
;
_.onDetach = function onDetach_2(){
  try {
    $onUnload(this);
    fire_0(this, false);
  }
   finally {
    doDetach(this.widget);
  }
}
;
_.onDisable = function onDisable_1(){
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, true);
  this.widget.element['disabled'] = true;
}
;
_.onEnable = function onEnable_1(){
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, false);
  this.widget.element['disabled'] = false;
}
;
_.onResize = function onResize_5(width, height){
  this.mask && $mask(this, this.maskMessage);
}
;
_.setHeight_0 = function setHeight_0(height){
  $setHeight(this.widget, height + 'px');
}
;
_.setPixelSize = function setPixelSize_0(width, height){
  $setPixelSize_0(this, width, height);
  $setPixelSize(this.widget, width, height);
}
;
_.setWidth_0 = function setWidth_0(width){
  $setWidth(this.widget, width + 'px');
}
;
_.widget = null;
function $add_12(this$static, child){
  this$static.insert(child, this$static.children_0.size_0);
}

function $adjustIndex_0(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion_0(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children_0, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion_0(this$static, index){
  if (index < 0 || index > this$static.children_0.size_0) {
    throw new IndexOutOfBoundsException_0;
  }
}

function $clear_2(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator_0(this$static.children_0);
  while (it.index_0 < it.this$0.size_0 - 1) {
    $next_0(it);
    $remove_5(it);
  }
}

function $ensureGroupingHandlerRegistration(this$static, widget){
  var g;
  g = dynamicCast(this$static.widgetMap.get_1(widget), Q$GroupingHandlerRegistration);
  if (!g) {
    g = new GroupingHandlerRegistration_0;
    this$static.widgetMap.put(widget, g);
  }
  return g;
}

function $findWidget(this$static, elem){
  var w, w$iterator;
  for (w$iterator = new WidgetCollection$WidgetIterator_0(this$static.children_0); w$iterator.index_0 < w$iterator.this$0.size_0 - 1;) {
    w = $next_0(w$iterator);
    if ($isOrHasChild(w.getElement(), elem)) {
      return w;
    }
  }
  return null;
}

function $getWidget(this$static, index){
  return $get_2(this$static.children_0, index);
}

function $getWidgetIndex(this$static, child){
  return $indexOf(this$static.children_0, child);
}

function $insert_5(this$static, child, beforeIndex){
  var g;
  beforeIndex = $adjustIndex_0(this$static, child, beforeIndex);
  if (!$fireCancellableEvent(this$static, new BeforeAddEvent_0)) {
    return;
  }
  $removeFromParent(child);
  $insert_2(this$static.children_0, child, beforeIndex);
  g = $ensureGroupingHandlerRegistration(this$static, child);
  instanceOf(child, Q$ShowEvent$HasShowHandlers) && $add_10(g, dynamicCast(child, Q$ShowEvent$HasShowHandlers).addShowHandler(new Container$1_0(this$static)));
  instanceOf(child, Q$HideEvent$HasHideHandlers) && $add_10(g, dynamicCast(child, Q$HideEvent$HasHideHandlers).addHideHandler(new Container$2_0(this$static)));
  this$static.doPhysicalAttach(child, beforeIndex);
  setParent_0(this$static, child);
  this$static.onInsert(beforeIndex, child);
  $fireEvent_3(this$static, new AddEvent_0);
}

function $onRemove(child){
  child.getElement().style['marginBottom'] = '';
  child.getElement().style['marginTop'] = '';
  child.getElement().style['marginLeft'] = '';
  child.getElement().style['marginRight'] = '';
}

function $remove_14(this$static, child){
  if (child.parent_0 != this$static) {
    return false;
  }
  if (!$fireCancellableEvent(this$static, new BeforeRemoveEvent_0)) {
    return false;
  }
  try {
    setParent_0(null, child);
  }
   finally {
    this$static.doPhysicalDetach(child);
    $remove_4(this$static.children_0, child);
    this$static.onRemove_0(child);
  }
  $fireEvent_3(this$static, new RemoveEvent_0);
  return true;
}

function Container_0(){
  Component_0.call(this);
  this.children_0 = new WidgetCollection_0(this);
  this.widgetMap = new HashMap_0;
}

function getAttachException(){
  return $clinit_AttachDetachException() , attachCommand;
}

function getDetachException(){
  return $clinit_AttachDetachException() , detachCommand;
}

defineSeed(1114, 96, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.disable_0 = function disable_2(){
  var it, w;
  $disable(this);
  it = new WidgetCollection$WidgetIterator_0(this.children_0);
  while (it.index_0 < it.this$0.size_0 - 1) {
    w = $next_0(it);
    instanceOf(w, Q$Component) && dynamicCast(w, Q$Component).disable_0();
  }
}
;
_.doAttachChildren = function doAttachChildren_3(){
  tryCommand(this, getAttachException());
}
;
_.doDetachChildren = function doDetachChildren_3(){
  tryCommand(this, getDetachException());
}
;
_.doPhysicalAttach = function doPhysicalAttach(child, beforeIndex){
  insertChild(this.getContainerTarget(), child.getElement(), beforeIndex);
}
;
_.doPhysicalDetach = function doPhysicalDetach(child){
  $removeFromParent_0(child.getElement());
}
;
_.enable = function enable_2(){
  var it, w;
  $enable(this);
  it = new WidgetCollection$WidgetIterator_0(this.children_0);
  while (it.index_0 < it.this$0.size_0 - 1) {
    w = $next_0(it);
    instanceOf(w, Q$Component) && dynamicCast(w, Q$Component).enable();
  }
}
;
_.getContainerTarget = function getContainerTarget(){
  return this.element;
}
;
_.getWidget = function getWidget_0(index){
  return $get_2(this.children_0, index);
}
;
_.getWidgetCount = function getWidgetCount_0(){
  return this.children_0.size_0;
}
;
_.insert = function insert(child, beforeIndex){
  $insert_5(this, child, beforeIndex);
}
;
_.iterator = function iterator_9(){
  return new WidgetCollection$WidgetIterator_0(this.children_0);
}
;
_.onInsert = function onInsert(index, child){
  var m_0, margins;
  if (instanceOf(child.layoutData, Q$HasMargins)) {
    m_0 = dynamicCast(child.layoutData, Q$HasMargins);
    margins = m_0.getMargins();
    if (margins) {
      child.getElement().style['marginTop'] = margins.top_0 + ($clinit_Style$Unit() , 'px');
      child.getElement().style['marginBottom'] = margins.bottom + 'px';
      child.getElement().style['marginLeft'] = margins.left_0 + 'px';
      child.getElement().style['marginRight'] = margins.right + 'px';
    }
  }
}
;
_.onRemove_0 = function onRemove(child){
  $onRemove(child);
}
;
_.onWidgetHide = function onWidgetHide(source){
}
;
_.onWidgetShow = function onWidgetShow(source){
}
;
_.remove = function remove_18(child){
  return $remove_14(this, child);
}
;
function $applyLayout(widget, width, height){
  var hh, ww;
  if (instanceOf(widget, Q$Component)) {
    ww = width == -1?-2147483648:width;
    hh = height == -1?-2147483648:height;
    dynamicCast(widget, Q$Component).setPixelSize(ww, hh);
  }
   else {
    $setSize_1(widget.getElement(), width, height, true);
    instanceOf(widget, Q$RequiresResize) && $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), new ResizeContainer$4_0(widget));
  }
}

function $applyLayout_0(component, box){
  var c;
  if (instanceOf(component, Q$Component)) {
    c = dynamicCast(component, Q$Component);
    c.setPosition(box.x, box.y);
    $applyLayout(c, box.width_0, box.height_0);
  }
   else {
    $setLeftTop(component.getElement(), box.x, box.y);
    $applyLayout(component, box.width_0, box.height_0);
  }
}

function $forceLayout(this$static){
  if (this$static.layoutRequiredThisEventLoop && this$static.attached && !this$static.layoutRunning && !$isParentLayoutRunning(this$static) && $parentIsOrWasLayoutRunning(this$static) && !$isStyleAttribute(this$static.element)) {
    this$static.layoutRequiredThisEventLoop = false;
    this$static.hadLayoutRunning = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), new ResizeContainer$3_0(this$static));
    this$static.layoutRunning = true;
    this$static.doLayout();
    this$static.layoutRunning = false;
    $forceLayoutOnChildren_0(this$static, this$static);
  }
}

function $forceLayoutOnChildren(this$static, widgets){
  var w, w$iterator;
  for (w$iterator = widgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), Q$Widget);
    instanceOf(w, Q$HasLayout)?dynamicCast(w, Q$HasLayout).forceLayout():instanceOf(w, Q$HasWidgets) && !$isStyleAttribute(w.getElement())?$forceLayoutOnChildren(this$static, dynamicCast(w, Q$HasWidgets)):instanceOf(w, Q$IndexedPanel) && !$isStyleAttribute(w.getElement()) && $forceLayoutOnChildren_0(this$static, dynamicCast(w, Q$IndexedPanel));
  }
}

function $forceLayoutOnChildren_0(this$static, widgets){
  var index, len, w;
  for (index = 0 , len = widgets.getWidgetCount(); index < len; ++index) {
    w = widgets.getWidget(index);
    instanceOf(w, Q$HasLayout)?dynamicCast(w, Q$HasLayout).forceLayout():instanceOf(w, Q$HasWidgets) && !$isStyleAttribute(w.getElement())?$forceLayoutOnChildren(this$static, dynamicCast(w, Q$HasWidgets)):instanceOf(w, Q$IndexedPanel) && !$isStyleAttribute(w.getElement()) && $forceLayoutOnChildren_0(this$static, dynamicCast(w, Q$IndexedPanel));
  }
}

function $getLeftRightMargins(w){
  var data, margins, tot;
  if (!w) {
    return 0;
  }
  data = w.layoutData;
  if (instanceOf(data, Q$HasMargins)) {
    margins = dynamicCast(data, Q$HasMargins).getMargins();
    if (!margins) {
      return 0;
    }
    tot = 0;
    margins.left_0 != -1 && (tot += margins.left_0);
    margins.right != -1 && (tot += margins.right);
    return tot;
  }
  return 0;
}

function $getTopBottomMargins(w){
  var data, margins, tot;
  if (!w) {
    return 0;
  }
  data = w.layoutData;
  if (instanceOf(data, Q$HasMargins)) {
    margins = dynamicCast(data, Q$HasMargins).getMargins();
    if (!margins) {
      return 0;
    }
    tot = 0;
    margins.left_0 != -1 && (tot += margins.top_0);
    margins.right != -1 && (tot += margins.bottom);
    return tot;
  }
  return 0;
}

function $isParentLayoutRunning(this$static){
  var parent_0;
  parent_0 = this$static;
  while (parent_0 = parent_0.parent_0) {
    if (instanceOf(parent_0, Q$HasWidgets) || instanceOf(parent_0, Q$IndexedPanel)) {
      if (instanceOf(parent_0, Q$HasLayout) && dynamicCast(parent_0, Q$HasLayout).isLayoutRunning()) {
        return true;
      }
    }
     else {
      return false;
    }
  }
  return false;
}

function $onResize_1(this$static){
  this$static.mask && $mask(this$static, this$static.maskMessage);
  if (this$static.forceLayoutOnResize) {
    this$static.layoutRequiredThisEventLoop = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), this$static.forceLayoutCommand);
  }
   else {
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), this$static.layoutCommand);
  }
}

function $parentIsOrWasLayoutRunning(this$static){
  var parent_0;
  parent_0 = this$static;
  while (parent_0 = parent_0.parent_0) {
    if (instanceOf(parent_0, Q$HasWidgets) || instanceOf(parent_0, Q$IndexedPanel)) {
      if (instanceOf(parent_0, Q$HasLayout)) {
        return dynamicCast(parent_0, Q$HasLayout).isOrWasLayoutRunning();
      }
    }
     else {
      return true;
    }
  }
  return true;
}

function ResizeContainer_0(){
  Container_0.call(this);
  this.forceLayoutCommand = new ResizeContainer$1_0(this);
  this.layoutCommand = new ResizeContainer$2_0(this);
}

defineSeed(1113, 1114, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.forceLayout = function forceLayout(){
  $forceLayout(this);
}
;
_.isLayoutRunning = function isLayoutRunning(){
  return this.layoutRunning;
}
;
_.isOrWasLayoutRunning = function isOrWasLayoutRunning(){
  return this.hadLayoutRunning;
}
;
_.onLoad = function onLoad_6(){
  $onLoad(this);
  instanceOf(this.parent_0, Q$AnimatedLayout)?$scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), this.forceLayoutCommand):$scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), this.forceLayoutCommand);
}
;
_.onResize_1 = function onResize_6(){
  var s;
  if (this.attached) {
    s = $getSize($getParentElement(this.element), true);
    $setPixelSize_0(this, s.width_0, s.height_0);
  }
}
;
_.onResize = function onResize_7(width, height){
  $onResize_1(this);
}
;
_.forceLayoutOnResize = false;
_.hadLayoutRunning = false;
_.layoutRequiredThisEventLoop = true;
_.layoutRunning = false;
function $doLayout(this$static){
  var height, size, width;
  if (this$static.widget) {
    size = $getStyleSize(this$static.getContainerTarget(), true);
    width = -1;
    this$static.width_0 == null || (width = size.width_0 - $getLeftRightMargins(this$static.widget));
    height = -1;
    this$static.height_0 == null || (height = size.height_0 - $getTopBottomMargins(this$static.widget));
    $applyLayout(this$static.widget, width, height);
  }
}

function $setWidget_0(this$static, w){
  !!this$static.widget && $removeFromParent(this$static.widget);
  this$static.widget = w;
  !!this$static.widget && $insert_5(this$static, this$static.widget, 0);
}

function SimpleContainer_0(deferElement){
  ResizeContainer_0.call(this);
  deferElement || $setElement(this, $doc.createElement('div'));
}

defineSeed(1112, 1113, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.doLayout = function doLayout(){
  $doLayout(this);
}
;
_.onRemove_0 = function onRemove_0(child){
  $onRemove(child);
  this.widget == child && (this.widget = null);
}
;
_.widget = null;
function $afterCollapse_0(this$static){
  var i, w;
  this$static.collapsed = true;
  this$static.animating = false;
  $setVisible_1(this$static.appearance_0.getBodyWrap(this$static.element), false);
  for (i = 0; i < this$static.children_0.size_0; ++i) {
    w = $get_2(this$static.children_0, i);
    w.isVisible_0() && instanceOf(w, Q$Component) && dynamicCast(w, Q$Component).notifyHide();
  }
  !!this$static.buttonBar && this$static.buttonBar.attached && undefined;
  !!this$static.layer_0 && $sync_0(this$static.layer_0, true);
  !!this$static.collapseBtn && $enable(this$static.collapseBtn);
  !!this$static.collapseBtn && $changeStyle(this$static.collapseBtn, ($clinit_ToolButton() , DOWN_0));
  $fireEvent_3(this$static, new CollapseEvent_0);
}

function $afterExpand(this$static){
  var i, w;
  this$static.collapsed = false;
  this$static.animating = false;
  for (i = 0; i < this$static.children_0.size_0; ++i) {
    w = $get_2(this$static.children_0, i);
    w.isVisible_0() && instanceOf(w, Q$Component) && dynamicCast(w, Q$Component).notifyShow();
  }
  !!this$static.buttonBar && this$static.buttonBar.attached && undefined;
  !!this$static.layer_0 && $sync_0(this$static.layer_0, true);
  !!this$static.collapseBtn && $enable(this$static.collapseBtn);
  !!this$static.collapseBtn && !this$static.hideCollapseTool && $changeStyle(this$static.collapseBtn, ($clinit_ToolButton() , UP_0));
  if (this$static.layoutOnExpand) {
    this$static.layoutOnExpand = false;
    $doLayout_0(this$static);
  }
  $fireEvent_3(this$static, new ExpandEvent_0);
}

function $collapse_0(this$static){
  var fx;
  if (!this$static.collapsed && !this$static.animating && $fireCancellableEvent(this$static, new BeforeCollapseEvent_0)) {
    !!this$static.layer_0 && $hideShadow(this$static.layer_0);
    this$static.animating = true;
    !!this$static.collapseBtn && $disable(this$static.collapseBtn);
    fx = new Fx_0;
    $addAfterAnimateHandler(fx, new ContentPanel$2_0(this$static));
    $run_1(fx, new SlideOut_0(this$static.appearance_0.getBodyWrap(this$static.element), ($clinit_Style$Direction() , UP)));
    $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-animated', true);
  }
}

function $doLayout_0(this$static){
  if (this$static.collapsed && !!this$static.widget) {
    this$static.layoutOnExpand = true;
    return;
  }
  $doLayout(this$static);
}

function $expand_0(this$static){
  var fx;
  if (this$static.collapsed && !this$static.animating && $fireCancellableEvent(this$static, new BeforeExpandEvent_0)) {
    !!this$static.layer_0 && $hideShadow(this$static.layer_0);
    this$static.animating = true;
    $setVisible_1(this$static.appearance_0.getBodyWrap(this$static.element), true);
    $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-animated', true);
    fx = new Fx_0;
    $addAfterAnimateHandler(fx, new ContentPanel$3_0(this$static));
    $run_1(fx, new SlideIn_0(this$static.appearance_0.getBodyWrap(this$static.element), ($clinit_Style$Direction() , DOWN)));
    !!this$static.collapseBtn && $disable(this$static.collapseBtn);
  }
}

function $initTools(this$static){
  if (this$static.collapsible && !this$static.hideCollapseTool) {
    this$static.collapseBtn = new ToolButton_0(this$static.collapsed?($clinit_ToolButton() , DOWN_0):($clinit_ToolButton() , UP_0));
    $addHandler(this$static.collapseBtn, new ContentPanel$1_0(this$static), (!TYPE_93 && (TYPE_93 = new GwtEvent$Type_0) , TYPE_93));
    $addTool(this$static.header, this$static.collapseBtn);
  }
}

function $layoutBars(this$static){
  var hlr, overflow;
  if (!!this$static.buttonBar && this$static.buttonBar.children_0.size_0 > 0) {
    hlr = this$static.hadLayoutRunning;
    this$static.hadLayoutRunning || (this$static.hadLayoutRunning = true);
    overflow = this$static.buttonBar.enableOverflow;
    this$static.buttonBar.enableOverflow = false;
    $forceLayout(this$static.buttonBar);
    $setEnableOverflow(this$static.buttonBar, overflow);
    this$static.hadLayoutRunning = hlr;
    !!this$static.layer_0 && $sync_0(this$static.layer_0, true);
    return true;
  }
  return false;
}

function $onAfterFirstAttach_1(this$static){
  $onAfterFirstAttach(this$static);
  this$static.buttonBar.children_0.size_0 > 0 && $setVisible_0(this$static.buttonBar, true);
  this$static.initTools();
  $layoutBars(this$static);
  this$static.headerVisible || $setVisible_0(this$static.header, false);
}

function $setExpanded(this$static, expanded){
  expanded?$expand_0(this$static):$collapse_0(this$static);
}

function ContentPanel_0(){
  $clinit_Component();
  ContentPanel_1.call(this, new BlueContentPanelAppearance_0);
}

function ContentPanel_1(appearance){
  var headerElem, sb;
  SimpleContainer_0.call(this, true);
  this.appearance_0 = appearance;
  this.deferHeight = true;
  sb = new SafeHtmlBuilder_0;
  appearance.render_0(sb);
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(sb.sb.impl.string)).html)));
  this.header = new Header_0(appearance.getHeaderAppearance());
  setParent_0(this, this.header);
  headerElem = appearance.getHeaderElem(this.element);
  $appendChild(headerElem, this.header.element);
  this.buttonBar = new ButtonBar_0;
  $setMinButtonWidth(this.buttonBar);
  this.buttonBar.pack = 1;
  $setVisible_0(this.buttonBar, false);
  $appendChild($getFooterElem(appearance, this.element), this.buttonBar.element);
}

defineSeed(1111, 1112, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$ContentPanel, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), ContentPanel_0);
_.doAttachChildren = function doAttachChildren_4(){
  tryCommand(this, getAttachException());
  doAttach(this.header);
  doAttach(this.buttonBar);
}
;
_.doDetachChildren = function doDetachChildren_4(){
  tryCommand(this, getDetachException());
  doDetach(this.header);
  doDetach(this.buttonBar);
}
;
_.doLayout = function doLayout_0(){
  $doLayout_0(this);
}
;
_.getContainerTarget = function getContainerTarget_0(){
  return this.appearance_0.getContentElem(this.element);
}
;
_.initTools = function initTools(){
  $initTools(this);
}
;
_.onAfterFirstAttach = function onAfterFirstAttach_2(){
  $onAfterFirstAttach_1(this);
}
;
_.onBrowserEvent = function onBrowserEvent_12(event_0){
  $onBrowserEvent_0(this, event_0);
  $eventGetTypeInt(event_0.type) == 1 && this.collapsible && this.titleCollapse && $isOrHasChild(this.header.element, event_0.target) && $setExpanded(this, this.collapsed);
}
;
_.onDisable = function onDisable_2(){
  $mask(this, null);
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, true);
}
;
_.onEnable = function onEnable_2(){
  $unmask(this);
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, false);
}
;
_.onResize = function onResize_8(width, height){
  var adjustBodySize, frameSize;
  frameSize = new Size_0(this.appearance_0.getFrameWidth(this.element), this.appearance_0.getFrameHeight(this.element));
  adjustBodySize = new Size_0(0, 0);
  if (this.width_0 == null) {
    this.appearance_0.getContentElem(this.element).style['width'] = '';
  }
   else {
    width -= frameSize.width_0;
    $setWidth_0(this.appearance_0.getContentElem(this.element), width - adjustBodySize.width_0, true);
    !!this.header && $setPixelSize_0(this.header, width, -2147483648);
    !!this.buttonBar && $setPixelSize_0(this.buttonBar, width, -2147483648);
  }
  $layoutBars(this);
  if (this.height_0 == null) {
    this.appearance_0.getContentElem(this.element).style['height'] = '';
  }
   else {
    height -= frameSize.height_0;
    height -= this.headerVisible?$getPropertyInt(this.header.element, 'offsetHeight'):0;
    height -= $getHeight($getFooterElem(this.appearance_0, this.element), false);
    $setHeight_0(this.appearance_0.getContentElem(this.element), height - adjustBodySize.height_0, true);
  }
  $onResize_1(this);
}
;
_.animating = false;
_.appearance_0 = null;
_.buttonBar = null;
_.collapseBtn = null;
_.collapsed = false;
_.collapsible = false;
_.header = null;
_.headerVisible = true;
_.hideCollapseTool = false;
_.layoutOnExpand = false;
_.titleCollapse = false;
function ContentPanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1115, 1, makeCastMap([Q$EventHandler, Q$SelectEvent$SelectHandler]), ContentPanel$1_0);
_.onSelect = function onSelect_5(event_0){
  $setExpanded(this.this$0, this.this$0.collapsed);
}
;
_.this$0 = null;
function ContentPanel$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1116, 1, makeCastMap([Q$EventHandler, Q$AfterAnimateEvent$AfterAnimateHandler]), ContentPanel$2_0);
_.onAfterAnimate = function onAfterAnimate(event_0){
  $afterCollapse_0(this.this$0);
}
;
_.this$0 = null;
function ContentPanel$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1117, 1, makeCastMap([Q$EventHandler, Q$AfterAnimateEvent$AfterAnimateHandler]), ContentPanel$3_0);
_.onAfterAnimate = function onAfterAnimate_0(event_0){
  $afterExpand(this.this$0);
}
;
_.this$0 = null;
function $afterShow(this$static){
  var autoHeight, autoWidth, e, h_0, w;
  this$static.hidden = false;
  if (this$static.restorePos) {
    $setPosition_0(this$static, this$static.restorePos.x, this$static.restorePos.y);
    !!this$static.restoreSize && $setPixelSize_0(this$static, this$static.restoreSize.width_0, this$static.restoreSize.height_0);
  }
  !!this$static.restoreWindowScrolling && $enableScrolling($doc, false);
  $getPropertyInt(this$static.element, 'offsetHeight');
  w = $getPropertyInt(this$static.element, 'offsetWidth');
  autoHeight = this$static.height_0 == null;
  autoWidth = this$static.width_0 == null;
  (($clinit_GXT() , $clinit_GXT() , false) || false) && autoWidth && $setPixelSize_0(this$static, this$static.minWidth, -2147483648);
  h_0 = $getPropertyInt(this$static.element, 'offsetHeight');
  h_0 < this$static.minHeight && w < this$static.minWidth?$setPixelSize_0(this$static, this$static.minWidth, this$static.minHeight):h_0 < this$static.minHeight?$setPixelSize_0(this$static, -2147483648, this$static.minHeight):w < this$static.minWidth && $setPixelSize_0(this$static, this$static.minWidth, -2147483648);
  autoHeight && (this$static.height_0 = null);
  autoWidth && (this$static.width_0 = null);
  this$static.positioned || $alignTo(this$static.element, $doc.body, new Style$AnchorAlignment_1(($clinit_Style$Anchor() , CENTER_1), CENTER_1, true), null);
  $updateZIndex(this$static.element, 0);
  this$static.modal && (this$static.modalPreview = addNativePreviewHandler(new Window$4_0(this$static)));
  $add_9(this$static.eventPreview);
  this$static.maximized && $maximize(this$static);
  $removeStyleName(this$static, ($clinit_Style$HideMode() , OFFSETS).value_0);
  $fireEvent_3(this$static, new ShowEvent_0);
  $bringToFront(this$static.manager, this$static);
}

function $doFocus(this$static){
  this$static.focusWidget?this$static.focusWidget?(this$static.focusWidget.getFocusEl().focus() , undefined):($getElement_0(this$static.focusWidget).focus() , undefined):(this$static.element.focus() , undefined);
}

function $fitContainer(this$static){
  $setPosition(this$static, 0, 0);
  this$static.positioned = true;
  $setPixelSize_0(this$static, getViewportWidth(), getViewportHeight());
}

function $focus(this$static){
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), new Window$3_0(this$static));
}

function $hide_1(this$static, buttonPressed){
  if (this$static.hidden || !$fireCancellableEvent(this$static, new BeforeHideEvent_0)) {
    return;
  }
  this$static.hideButton = buttonPressed;
  !!this$static.dragger && $cancelDrag(this$static.dragger);
  this$static.hidden = true;
  if (!this$static.maximized) {
    this$static.restoreSize = $getSize(this$static.element, false);
    this$static.restorePos = new Point_0(parseInt_0(this$static.element.style['left'], 0), parseInt_0(this$static.element.style['top'], 0));
  }
  if (this$static.modalPreview) {
    $removeHandler(this$static.modalPreview.real);
    this$static.modalPreview = null;
  }
  $setStyleName_0(this$static, this$static.hideMode.value_0, true);
  !!this$static.layer_0 && $hideUnders(this$static.layer_0);
  $unregister(this$static.manager, this$static);
  $removeFromParent(this$static);
  if (this$static.modalPanel) {
    push_0(this$static.modalPanel);
    this$static.modalPanel = null;
  }
  $remove_10(this$static.eventPreview);
  !!this$static.restoreWindowScrolling && $enableScrolling($doc, this$static.restoreWindowScrolling.value_0);
  $fireEvent_3(this$static, new HideEvent_0);
}

function $maximize(this$static){
  var bodyOverflow, cacheSizesRestore;
  if (this$static.maximized) {
    $fitContainer(this$static);
  }
   else {
    this$static.restoreSize = $getSize(this$static.element, false);
    this$static.restorePos = $getPosition(this$static.element, true);
    this$static.restoreShadow = ($clinit_Boolean() , this$static.shadow?TRUE:FALSE);
    bodyOverflow = $equals_3($doc.compatMode, 'CSS1Compat')?$doc.documentElement.style['overflow']:$doc.body.style['overflow'];
    $equals_3('hidden', bodyOverflow) || (this$static.restoreWindowScrolling = TRUE);
    $enableScrolling($doc, false);
    this$static.maximized = true;
    $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-maximized', true);
    $removeStyleName(this$static.header, 'x-window-draggable');
    !!this$static.layer_0 && $disableShadow(this$static.layer_0);
    cacheSizesRestore = this$static.cacheSizes;
    this$static.cacheSizes = false;
    $fitContainer(this$static);
    this$static.cacheSizes = cacheSizesRestore;
    if (this$static.maximizable) {
      $setVisible_0(this$static.maxBtn, false);
      $setVisible_0(this$static.restoreBtn, true);
    }
    this$static.draggable && (this$static.dragger.enabled = false , undefined);
    this$static.resizable && $setEnabled_0(this$static.resizer, false);
    $fireEvent_3(this$static, new MaximizeEvent_0);
  }
}

function $setActive(this$static, active){
  var panel;
  if (active) {
    if ($isVisible(this$static, false)) {
      $push_0(this$static.eventPreview);
      if (!this$static.maximized && !!this$static.layer_0) {
        this$static.shadow && (this$static.layer_0.shadowEnabled = true);
        $sync_0(this$static.layer_0, true);
      }
      if (this$static.modal && !this$static.modalPanel) {
        this$static.modalPanel = ($clinit_ModalPanel() , panel = modalStack.arrayList.size_0 > 0?dynamicCast($pop(modalStack), Q$ModalPanel):null , !panel && (panel = new ModalPanel_0) , panel);
        this$static.modalPanel.blink = false;
        $show_2(this$static.modalPanel, this$static);
      }
    }
    $fireEvent_3(this$static, new ActivateEvent_0(this$static));
  }
   else {
    if (this$static.modalPanel) {
      push_0(this$static.modalPanel);
      this$static.modalPanel = null;
    }
    !!this$static.layer_0 && $hideShadow(this$static.layer_0);
    $fireEvent_3(this$static, new DeactivateEvent_0(this$static));
  }
}

function $setPosition_0(this$static, left, top_0){
  $setPosition(this$static, left, top_0);
  this$static.positioned = true;
}

function $setZIndex_0(this$static, zIndex){
  setIntStyleAttribute(this$static.element, 0 > zIndex?0:zIndex);
  !!this$static.ghost && setIntStyleAttribute(this$static.ghost.elem, 0 > zIndex?0:zIndex);
  !!this$static.modalPanel && setIntStyleAttribute(this$static.modalPanel.element, 0 > zIndex - 9?0:zIndex - 9);
}

function $show_1(this$static){
  if (!this$static.hidden || !$fireCancellableEvent(this$static, new BeforeShowEvent_0)) {
    return;
  }
  $removeStyleName(this$static, this$static.hideMode.value_0);
  this$static.attached || $add_1(($clinit_RootPanel() , get_5()), this$static);
  $makePositionable(this$static.element, true);
  $onShow(this$static);
  $register(this$static.manager, this$static);
  $afterShow(this$static);
}

function FocusManagerSupport_0(){
}

defineSeed(1123, 1, {}, FocusManagerSupport_0);
_.ignore = false;
function $addTool(this$static, tool){
  $insertTool(this$static, tool, this$static.tools.size_0);
}

function $insertTool(this$static, tool, index){
  $add_14(this$static.tools, index, tool);
  $setVisible(this$static.widgetPanel, true);
  $insert_0(this$static.widgetPanel, tool, index);
}

function $setIcon_2(this$static, icon){
  this$static.icon = icon;
  $setIcon_1(this$static.appearance, this$static.element, icon);
}

function $setText_2(this$static, text){
  this$static.text = text;
  $setInnerHTML(this$static.element.childNodes[2], text == null?'&#160;':text);
}

function Header_0(appearance){
  var barElem, i, sb;
  Component_0.call(this);
  this.tools = new ArrayList_0;
  this.appearance = appearance;
  sb = new SafeHtmlBuilder_0;
  $render_11(this.appearance, sb);
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(sb.sb.impl.string)).html)));
  setStyleName(this.element, 'x-small-editor', true);
  this.widgetPanel = new HorizontalPanel_0;
  $addStyleName(this.widgetPanel, 'x-panel-toolbar');
  barElem = this.element.childNodes[1];
  $appendChild(barElem, this.widgetPanel.element);
  if (this.tools.size_0 > 0) {
    for (i = 0; i < this.tools.size_0; ++i) {
      $add_2(this.widgetPanel, dynamicCast($get_10(this.tools, i), Q$Widget));
    }
  }
   else {
    $setVisible(this.widgetPanel, false);
  }
  setParent_0(this, this.widgetPanel);
  $setId_0(this.element.childNodes[2], $getId(this) + '-label');
  $setText_2(this, this.text);
  !!this.icon && $setIcon_2(this, this.icon);
  (!this.focusManagerSupport && (this.focusManagerSupport = new FocusManagerSupport_0) , this.focusManagerSupport).ignore = true;
}

defineSeed(1125, 96, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasText, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), Header_0);
_.doAttachChildren = function doAttachChildren_5(){
  doAttach(this.widgetPanel);
}
;
_.doDetachChildren = function doDetachChildren_5(){
  doDetach(this.widgetPanel);
}
;
_.appearance = null;
_.icon = null;
_.text = null;
_.widgetPanel = null;
function $clinit_ModalPanel(){
  $clinit_ModalPanel = nullMethod;
  $clinit_Component();
  modalStack = new Stack_0;
}

function $hide_2(this$static){
  $hide(this$static);
  $setZIndex(this$static.element, -1);
  this$static.component = null;
  if (this$static.eventPreview) {
    $clear_4(this$static.eventPreview.ignoreList.items);
    $remove_10(this$static.eventPreview);
  }
  $remove_1(($clinit_RootPanel() , get_5()), this$static);
}

function $show_2(this$static, component){
  this$static.component = component;
  $add_1(($clinit_RootPanel() , get_5()), this$static);
  $makePositionable(this$static.element, true);
  $updateZIndex(this$static.element, 0);
  $updateZIndex(component.element, 0);
  $show(this$static);
  $clear_4(this$static.eventPreview.ignoreList.items);
  $add_7(this$static.eventPreview.ignoreList, component.element);
  $add_9(this$static.eventPreview);
  $syncModal(this$static);
}

function $syncModal(this$static){
  var h_0, w, scrollWidth, scrollHeight;
  $setPixelSize_0(this$static, 0, 0);
  w = ($clinit_XDOM() , scrollWidth = $doc.compatMode != 'CSS1Compat'?$doc.body.scrollWidth:$doc.documentElement.scrollWidth , Math.max(scrollWidth, getViewportWidth()));
  h_0 = (scrollHeight = $doc.compatMode != 'CSS1Compat'?$doc.body.scrollHeight:$doc.documentElement.scrollHeight , Math.max(scrollHeight, getViewportHeight()));
  $setPixelSize_0(this$static, w, h_0);
}

function ModalPanel_0(){
  ModalPanel_1.call(this, new ModalPanel$ModalPanelDefaultAppearance_0);
}

function ModalPanel_1(){
  var builder;
  Component_0.call(this);
  builder = new SafeHtmlBuilder_0;
  $append_10(builder.sb, "<div class='GN1NA3IBLEC'><\/div>");
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(builder.sb.impl.string)).html)));
  this.shim = true;
  this.shadow = false;
  this.monitorWindowResize = true;
  this.eventPreview = new ModalPanel$1_0(this);
  this.eventPreview.autoHide = false;
}

function push_0(panel){
  $clinit_ModalPanel();
  if (panel) {
    $hide_2(panel);
    $push_1(modalStack, panel);
  }
}

defineSeed(1126, 96, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$ModalPanel, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), ModalPanel_0);
_.doAttachChildren = function doAttachChildren_6(){
  doAttach(this.component);
}
;
_.doDetachChildren = function doDetachChildren_6(){
  doDetach(this.component);
}
;
_.hide = function hide_2(){
  $hide_2(this);
}
;
_.onDetach = function onDetach_4(){
  $onDetach(this);
  !!this.layer_0 && $hideUnders(this.layer_0);
  !!this.eventPreview && $remove_10(this.eventPreview);
}
;
_.onWindowResize = function onWindowResize_1(width, height){
  $syncModal(this);
}
;
_.blink = false;
_.blinking = false;
_.component = null;
_.eventPreview = null;
var modalStack;
function ModalPanel$1_0(this$0){
  this.this$0 = this$0;
  BaseEventPreview_0.call(this);
}

defineSeed(1127, 574, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), ModalPanel$1_0);
_.onPreview = function onPreview_3(pe){
  var t;
  t = pe.nativeEvent.target;
  $eventGetTypeInt(pe.nativeEvent.type) == 4 && $isOrHasChild(this.this$0.element, t) && !$findParent(t, '.' + (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBKK'), -1) && (this.this$0.blink && !this.this$0.blinking?(this.this$0.blinking = true):this.this$0.blink || $focus(this.this$0.component));
  return $onPreview(this, pe);
}
;
_.this$0 = null;
function ModalPanel$ModalPanelDefaultAppearance_0(){
  this.style_0 = ($clinit_ModalPanel_ModalPanelDefaultAppearance_ModalPanelResources_opera_default_InlineClientBundleGenerator$cssInitializer() , css_9);
  $ensureInjected_10(this.style_0);
}

defineSeed(1128, 1, {}, ModalPanel$ModalPanelDefaultAppearance_0);
_.style_0 = null;
var css_9 = null;
function $ensureInjected_10(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push(toInject, '.GN1NA3IBLEC{position:absolute;z-index:10;left:0;top:0;background-color:black;opacity:0.2;}');
    schedule();
    return true;
  }
  return false;
}

function ModalPanel_ModalPanelDefaultAppearance_ModalPanelResources_opera_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(1130, 1, {}, ModalPanel_ModalPanelDefaultAppearance_ModalPanelResources_opera_default_InlineClientBundleGenerator$1_0);
_.getText = function getText_46(){
  return '.GN1NA3IBLEC{position:absolute;z-index:10;left:0;top:0;background-color:black;opacity:0.2;}';
}
;
_.injected = false;
function $clinit_ModalPanel_ModalPanelDefaultAppearance_ModalPanelResources_opera_default_InlineClientBundleGenerator$cssInitializer(){
  $clinit_ModalPanel_ModalPanelDefaultAppearance_ModalPanelResources_opera_default_InlineClientBundleGenerator$cssInitializer = nullMethod;
  css_9 = new ModalPanel_ModalPanelDefaultAppearance_ModalPanelResources_opera_default_InlineClientBundleGenerator$1_0;
}

function $setEnabled_0(this$static, enable){
  var handle, handle$iterator;
  if (this$static.enabled != enable && !!this$static.handleList) {
    for (handle$iterator = new AbstractList$IteratorImpl_0(this$static.handleList); handle$iterator.i < handle$iterator.this$0_0.size_1();) {
      handle = dynamicCast($next_3(handle$iterator), Q$Resizable$ResizeHandle);
      $setVisibility(handle.element, enable);
    }
    enable && $clinit_GXT();
  }
  this$static.enabled = enable;
}

function $disableDragging(this$static){
  if (!this$static.disableDragging) {
    this$static.disableDragging = true;
    $release(this$static.draggable);
    this$static.element.style['cursor'] = ($clinit_Style$Cursor() , 'default');
  }
}

function $onCancelDrag(this$static){
  this$static.resizeWidget.disableEvents = false;
  $sync_1(this$static);
}

function $onClick_1(this$static, event_0){
  var target;
  target = event_0.target;
  if (target == this$static.miniEl) {
    event_0.stopPropagation();
    $fireEvent_3(this$static, new SelectEvent_0);
  }
}

function $onEndDrag(this$static, bee){
  var diffX, diffY, height, size, width, x, y;
  x = bee.x;
  y = bee.y;
  width = $getPropertyInt(this$static.resizeWidget.getElement_0(), 'offsetWidth');
  height = $getPropertyInt(this$static.resizeWidget.getElement_0(), 'offsetHeight');
  diffY = y - this$static.startBounds.y;
  diffX = x - this$static.startBounds.x;
  this$static.resizeWidget.disableEvents = false;
  size = 0;
  switch (this$static.region.ordinal) {
    case 0:
      {
        size = height - diffY;
        if (this$static.autoSize) {
          $setXY(this$static.resizeEl, new Point_0(-1, y));
          $setHeight_0(this$static.resizeEl, height, false);
        }
        break;
      }

    case 2:
      {
        size = height + diffY;
        this$static.autoSize && this$static.resizeWidget.setHeight_0(diffY);
        break;
      }

    case 3:
      {
        size = width - diffX;
        if (this$static.autoSize) {
          $setXY(this$static.element, new Point_0(x, -1));
          this$static.resizeWidget.setWidth_0(width - diffX);
        }
        break;
      }

    case 1:
      {
        size = width + diffX;
        this$static.autoSize && this$static.resizeWidget.setWidth_0(size);
        break;
      }

  }
  $fireEvent_3(this$static, new SplitBarDragEvent_0(false, size));
}

function $onHandleAttach(this$static){
  if (!this$static.disabled) {
    $appendChild(this$static.resizeWidget.parent_0.getElement(), this$static.element);
    doAttach(this$static);
    $sync_1(this$static);
  }
}

function $onHandleDetach(this$static){
  this$static.disabled || (doDetach(this$static) , $removeFromParent_0(this$static.element));
}

function $onHandleShow(this$static){
  $show(this$static);
  $sync_1(this$static);
}

function $onStartDrag(this$static, de){
  var c1, c2, size, v;
  this$static.region == ($clinit_Style$LayoutRegion() , WEST) || this$static.region == EAST?(de.width_0 = 2):(de.height_0 = 2);
  $fireEvent_3(this$static, new SplitBarDragEvent_0(true, 0));
  this$static.resizeWidget.disableEvents = false;
  this$static.startBounds = new Rectangle_0;
  $setY_0(this$static.startBounds, de.y);
  $setX_0(this$static.startBounds, de.x);
  v = this$static.region == WEST || this$static.region == EAST;
  v?(size = this$static.resizeEl.offsetWidth || 0):(size = this$static.resizeEl.offsetHeight || 0);
  c1 = size - this$static.minSize;
  size < this$static.minSize && (c1 = 0);
  c2 = max_0(this$static.maxSize - size, 0);
  if (v) {
    this$static.draggable.constrainVertical = true;
    $setXConstraint(this$static.draggable, this$static.region == WEST?c2:c1, this$static.region == WEST?c1:c2);
  }
   else {
    this$static.draggable.constrainHorizontal = true;
    $setYConstraint(this$static.draggable, this$static.region == NORTH?c2:c1, this$static.region == NORTH?c1:c2);
  }
}

function $setCollapsible(this$static){
  if (!this$static.miniEl) {
    this$static.miniEl = $doc.createElement('div');
    $setClassName(this$static.miniEl, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBNK') + ' ' + $miniClass(($clinit_Style$Direction() , LEFT_2)));
    $appendChild(this$static.element, this$static.miniEl);
  }
  $setDisplayed(this$static.miniEl, true);
}

function $setMaxSize(this$static, maxSize){
  this$static.maxSize = maxSize;
}

function $sync_1(this$static){
  var h_0, rect, w, x, y;
  if (!this$static.attached || !this$static.resizeWidget.isAttached()) {
    return;
  }
  rect = $getBounds(this$static.resizeEl, false);
  x = rect.x;
  y = rect.y;
  y = y > 0?y:0;
  w = rect.width_0;
  h_0 = rect.height_0;
  switch (this$static.region.ordinal) {
    case 2:
      $setBounds_2(this$static.element, x + this$static.xOffset, y + h_0 + this$static.yOffset, w, 5, false);
      break;
    case 3:
      $setBounds_2(this$static.element, x - 5 + this$static.yOffset, y + this$static.xOffset, 5, h_0, false);
      break;
    case 0:
      $setBounds_2(this$static.element, x + this$static.xOffset, y - 5 + this$static.yOffset, w, 5, false);
      break;
    case 1:
      $setBounds_2(this$static.element, max_0(0, x + w + this$static.xOffset), y + this$static.yOffset, 5, h_0, false);
  }
}

function $updateMini(this$static, direction){
  !!this$static.miniEl && $setClassName(this$static.miniEl, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBNK') + ' ' + $miniClass(direction));
}

function SplitBar_0(region, target){
  SplitBar_1.call(this, (new SplitBarDefaultAppearance_0 , region), target);
}

function SplitBar_1(region, resizeWidget){
  var builder, dragHandler, handler, cls;
  Component_0.call(this);
  this.region = region;
  this.resizeWidget = resizeWidget;
  this.resizeEl = resizeWidget.getElement_0();
  builder = new SafeHtmlBuilder_0;
  region == ($clinit_Style$LayoutRegion() , SOUTH) || region == NORTH?(cls = 'GN1NA3IBNRB'):(cls = 'GN1NA3IBFSB');
  $append_10(builder.sb, "<div class='" + cls + "'><\/div>");
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(builder.sb.impl.string)).html)));
  this.allowTextSelection = false;
  this.attached && $disableTextSelection(this.element, true);
  $makePositionable(this.element, true);
  handler = new SplitBar$Handler_0(this);
  this.handlerRegistration = new GroupingHandlerRegistration_0;
  $add_10(this.handlerRegistration, $addHandler(resizeWidget, handler, (!TYPE_7 && (TYPE_7 = new GwtEvent$Type_0) , TYPE_7)));
  $add_10(this.handlerRegistration, $addHandler(resizeWidget, handler, TYPE_80?TYPE_80:(TYPE_80 = new GwtEvent$Type_0)));
  $add_10(this.handlerRegistration, $addHandler(resizeWidget, handler, (!TYPE_9 && (TYPE_9 = new GwtEvent$Type_0) , TYPE_9)));
  $add_10(this.handlerRegistration, $addHandler(resizeWidget, handler, (!TYPE_76 && (TYPE_76 = new GwtEvent$Type_0) , TYPE_76)));
  $add_10(this.handlerRegistration, $addHandler(resizeWidget, handler, TYPE_94?TYPE_94:(TYPE_94 = new GwtEvent$Type_0)));
  this.draggable = new Draggable_0(this);
  this.draggable.updateZIndex = false;
  this.draggable.startDragDistance = 0;
  this.draggable.appearance.proxyClass = 'GN1NA3IBESB';
  dragHandler = new SplitBar$1_0(this);
  $addDragHandler(this.draggable, dragHandler);
  resizeWidget.isAttached() && $onHandleAttach(this);
  this.delay = new SplitBar$2_0(this);
  this.eventsToSink == -1?sinkEvents_0(this.element, 49 | (this.element.__eventBits || 0)):(this.eventsToSink |= 49);
}

defineSeed(1137, 96, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$SplitBar, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), SplitBar_0);
_.onBrowserEvent = function onBrowserEvent_15(event_0){
  $onBrowserEvent_0(this, event_0);
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      $onClick_1(this, event_0);
      break;
    case 16:
      event_0.target == this.miniEl && $onMiniOver(this.miniEl, true);
      break;
    case 32:
      event_0.target == this.miniEl && $onMiniOver(this.miniEl, false);
  }
}
;
_.autoSize = true;
_.delay = null;
_.disableDragging = false;
_.draggable = null;
_.handlerRegistration = null;
_.maxSize = 2000;
_.minSize = 10;
_.miniEl = null;
_.region = null;
_.resizeEl = null;
_.resizeWidget = null;
_.startBounds = null;
_.xOffset = 0;
_.yOffset = 0;
function SplitBar$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1138, 1, makeCastMap([Q$EventHandler, Q$DragCancelEvent$DragCancelHandler, Q$DragEndEvent$DragEndHandler, Q$DragMoveEvent$DragMoveHandler, Q$DragStartEvent$DragStartHandler]), SplitBar$1_0);
_.onDragCancel = function onDragCancel(event_0){
  $onCancelDrag(this.this$0);
}
;
_.onDragEnd = function onDragEnd(event_0){
  $onEndDrag(this.this$0, event_0);
}
;
_.onDragMove = function onDragMove(event_0){
}
;
_.onDragStart = function onDragStart(event_0){
  $onStartDrag(this.this$0, event_0);
}
;
_.this$0 = null;
function SplitBar$2_0(this$0){
  this.this$0 = this$0;
  DelayedTask_0.call(this);
}

defineSeed(1139, 580, {}, SplitBar$2_0);
_.onExecute = function onExecute_0(){
  $sync_1(this.this$0);
}
;
_.this$0 = null;
function SplitBar$Handler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1140, 1, makeCastMap([Q$AttachEvent$Handler, Q$ResizeHandler, Q$EventHandler, Q$SplitBar$Handler, Q$HideEvent$HideHandler, Q$MoveEvent$MoveHandler, Q$ShowEvent$ShowHandler]), SplitBar$Handler_0);
_.onAttachOrDetach = function onAttachOrDetach_1(event_0){
  event_0.attached?$onHandleAttach(this.this$0):$onHandleDetach(this.this$0);
}
;
_.onHide = function onHide_3(event_0){
  $hide(this.this$0);
}
;
_.onResize_0 = function onResize_10(event_0){
  $delay(this.this$0.delay, 10);
}
;
_.onShow = function onShow_0(event_0){
  $onHandleShow(this.this$0);
}
;
_.this$0 = null;
function WidgetComponent_0(widget){
  $clinit_Component();
  Component_0.call(this);
  $initWidget(this, widget);
}

defineSeed(1141, 1110, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), WidgetComponent_0);
function Window$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1145, 1, {}, Window$3_0);
_.execute = function execute_20(){
  $doFocus(this.this$0);
}
;
_.this$0 = null;
function Window$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1146, 1, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), Window$4_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent_1(event_0){
  var tag, target;
  if (is_1(event_0.nativeEvent.target)) {
    target = event_0.nativeEvent.target;
    tag = target.tagName;
    !this.this$0.resizing && !this.this$0.dragging && !$equalsIgnoreCase(tag, 'html') && !$equalsIgnoreCase(tag, 'body') && $eventGetTypeInt(event_0.nativeEvent.type) != 32768 && this.this$0.manager.front == this.this$0 && (!this.this$0.modalPanel || !!this.this$0.modalPanel && !$isOrHasChild(this.this$0.modalPanel.element, target)) && !$isOrHasChild(this.this$0.element, target) && !$findParent(target, '.' + (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBKK'), -1);
  }
}
;
_.this$0 = null;
function $activateLast(this$static){
  var i, w;
  for (i = this$static.accessList.stack.arrayList.size_0 - 1; i >= 0; --i) {
    w = dynamicCast($get_6(this$static.accessList, i), Q$Window);
    if ($isVisible(w, false)) {
      $setActiveWin(this$static, w);
      return;
    }
  }
  $setActiveWin(this$static, null);
}

function $bringToFront(this$static, widget){
  if (widget != this$static.front) {
    $add_8(this$static.accessList, widget);
    $activateLast(this$static);
    return true;
  }
   else {
    widget?$scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), new Window$3_0(widget)):(null.nullField.focus() , undefined);
  }
  return false;
}

function $register(this$static, widget){
  $add_8(this$static.accessList, widget);
  $add_15(this$static.widgets, widget);
  $castFireEvent(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, new RegisterEvent_0);
}

function $setActiveWin(this$static, window_0){
  if (window_0 != this$static.front) {
    !!this$static.front && !!window_0 && $setActive(this$static.front, false);
    this$static.front = window_0;
    if (window_0) {
      if (window_0) {
        $setActive(window_0, true);
        $setZIndex_0(window_0, ($clinit_XDOM() , $clinit_XDOM() , zIndexId += 11 , $clinit_XDOM() , zIndexId));
      }
       else {
        $setZIndex(null.element, ($clinit_XDOM() , $clinit_XDOM() , zIndexId += 11 , $clinit_XDOM() , zIndexId));
      }
      window_0?$scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_4), new Window$3_0(window_0)):(null.element.focus() , undefined);
    }
  }
}

function $unregister(this$static, widget){
  this$static.front == widget && (this$static.front = null);
  $remove_9(this$static.accessList, widget);
  $remove_17(this$static.widgets, widget);
  $activateLast(this$static);
  $castFireEvent(!this$static.eventBus?(this$static.eventBus = new SimpleEventBus_3):this$static.eventBus, new UnregisterEvent_0);
}

function InsertResizeContainer_0(){
  ResizeContainer_0.call(this);
}

defineSeed(1163, 1113, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.insert = function insert_0(w, beforeIndex){
  $insert_5(this, w, beforeIndex);
}
;
function $setPadding(this$static, padding){
  this$static.padding = padding;
}

function BoxLayoutContainer_0(){
  var sb;
  InsertResizeContainer_0.call(this);
  sb = new SafeHtmlBuilder_0;
  $append_5(sb, $template_1($clinit_BoxLayoutDefaultAppearance_BoxLayoutBaseResources_default_InlineClientBundleGenerator$styleInitializer()));
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(sb.sb.impl.string)).html)));
}

defineSeed(1162, 1163, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.getContainerTarget = function getContainerTarget_1(){
  return $getFirstChildElement(this.element);
}
;
_.onInsert = function onInsert_0(index, child){
  $addStyleName(child, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBPK'));
}
;
_.onRemove_0 = function onRemove_1(child){
  $removeStyleName(child, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBPK'));
}
;
_.adjustForFlexRemainder = false;
_.pack = 2;
_.padding = null;
function $addWidgetToMenu(menu, w){
  var b, item;
  if (instanceOf(w, Q$SeparatorToolItem)) {
    $add_12(menu, new SeparatorMenuItem_0);
  }
   else if (instanceOf(w, Q$TextButton)) {
    b = dynamicCast(w, Q$TextButton);
    item = new MenuItem_3(b.cell.text.html, b.cell.icon);
    $setItemId(item, b.itemId != null?b.itemId:$getId(b));
    $getData(b, 'gxt-menutext') != null && $setText_4(item, toString__devirtual$($getData(b, 'gxt-menutext')));
    if (b.cell.menu) {
      item.hideOnClick = false;
      $setSubMenu(item, b.cell.menu);
    }
    $setEnabled(item, !b.disabled);
    $addHandler(item, new HBoxLayoutContainer$2_0(b), (!TYPE_10 && (TYPE_10 = new GwtEvent$Type_0) , TYPE_10));
    $insert_5(menu, item, menu.children_0.size_0);
  }
  if (menu.children_0.size_0 > 0) {
    instanceOf($get_2(menu.children_0, 0), Q$SeparatorMenuItem) && $remove_14(menu, $get_2(menu.children_0, 0));
    menu.children_0.size_0 > 0 && instanceOf($getWidget(menu, menu.children_0.size_0 - 1), Q$SeparatorMenuItem) && $remove_14(menu, $getWidget(menu, menu.children_0.size_0 - 1));
  }
}

function $getWidgetWidth(this$static, widget){
  var w;
  w = dynamicCast(this$static.widthMap.get_1(widget), Q$Integer);
  return w?w.value_0:$getPropertyInt(widget.getElement(), 'offsetWidth');
}

function $initMore(this$static){
  if (!this$static.more) {
    this$static.moreMenu = new Menu_0;
    $addHandler(this$static.moreMenu, new HBoxLayoutContainer$4_0(this$static), (!TYPE_54 && (TYPE_54 = new GwtEvent$Type_0) , TYPE_54));
    this$static.more = new TextButton_0;
    $addStyleName(this$static.more, 'x-toolbar-more');
    $setData(this$static.more, 'x-ignore-width', ($clinit_Boolean() , $clinit_Boolean() , TRUE));
    $setData(this$static.more, 'gxt-more', 'true');
    $setIcon_4(this$static.more, ($clinit_ThemeStyles() , $clinit_BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$moreInitializer() , more));
    $setMenu_0(this$static.more, this$static.moreMenu);
  }
  this$static.more.parent_0 != this$static && $add_12(this$static, this$static.more);
}

function $isHidden(this$static, w){
  return !!this$static.hiddens && $indexOf_5(this$static.hiddens, w, 0) != -1;
}

function $onOverflow(this$static){
  var change, data, i, loopWidth, size, w, widget;
  size = $getStyleSize(this$static.element, true);
  w = size.width_0 - this$static.triggerWidth;
  change = false;
  loopWidth = 0;
  for (i = 0; i < this$static.children_0.size_0; ++i) {
    widget = $get_2(this$static.children_0, i);
    if (widget == this$static.more)
      continue;
    if (!instanceOf(widget, Q$FillToolItem)) {
      loopWidth += $getWidgetWidth(this$static, widget);
      data = dynamicCast(widget.layoutData, Q$BoxLayoutContainer$BoxLayoutData);
      !!data && !!data.margins && (loopWidth += data.margins.left_0 + data.margins.right);
      if (loopWidth >= w) {
        if (!(!!this$static.hiddens && $indexOf_5(this$static.hiddens, widget, 0) != -1)) {
          change = true;
          this$static.widthMap.put(widget, valueOf_1($getPropertyInt(widget.getElement(), 'offsetWidth')));
          $add_15(this$static.hiddens, widget);
          widget.setVisible(false);
        }
      }
       else {
        if (!!this$static.hiddens && $indexOf_5(this$static.hiddens, widget, 0) != -1) {
          change = true;
          $unhideComponent(this$static, widget);
        }
      }
    }
  }
  !!this$static.hiddens && this$static.hiddens.size_0 > 0 && $initMore(this$static);
  change && $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), new HBoxLayoutContainer$5_0(this$static));
}

function $setEnableOverflow(this$static, enableOverflow){
  this$static.enableOverflow = enableOverflow;
}

function $setHBoxLayoutAlign(this$static, hBoxLayoutAlign){
  this$static.hBoxLayoutAlign = hBoxLayoutAlign;
}

function $unhideComponent(this$static, w){
  if ($remove_17(this$static.hiddens, w)) {
    this$static.widthMap.remove_1(w);
    w.setVisible(true);
  }
}

function HBoxLayoutContainer_0(align){
  BoxLayoutContainer_0.call(this, new BoxLayoutDefaultAppearance_0);
  this.hiddens = new ArrayList_0;
  this.widthMap = new HashMap_0;
  this.loopWidthMap = new HashMap_0;
  this.hBoxLayoutAlign = align;
}

defineSeed(1161, 1162, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.doLayout = function doLayout_1(){
  var add, allocated, availableHeight, c, ch, cm, component, ct, cw, d, diff, extraWidth, h_0, i, innerCtHeight, layoutData, len, maxHeight, pb, pl, pr, pt, runningWidth, size, stretchHeight, totalFlex, totalWidth, w, widget, width, ww;
  size = $getStyleSize(this.element, true);
  if (size.height_0 == 0 && size.width_0 == 0 || size.width_0 == 0) {
    return;
  }
  w = size.width_0;
  h_0 = size.height_0;
  pl = 0;
  pt = 0;
  pb = 0;
  pr = 0;
  if (this.padding) {
    pl = this.padding.left_0;
    pt = this.padding.top_0;
    pb = this.padding.bottom;
    pr = this.padding.right;
  }
  stretchHeight = h_0 - pt - pb;
  totalFlex = 0;
  totalWidth = 0;
  maxHeight = 0;
  for (i = 0 , len = this.children_0.size_0; i < len; ++i) {
    widget = $get_2(this.children_0, i);
    ($clinit_GXT() , $clinit_GXT() , false) || (widget.getElement().style['margin'] = 0 + ($clinit_Style$Unit() , 'px') , undefined);
    if (!widget.isVisible_0()) {
      continue;
    }
    widget == this.more && (this.triggerWidth = $getPropertyInt(widget.getElement(), 'offsetWidth') + 10);
    d = widget.layoutData;
    instanceOf(d, Q$BoxLayoutContainer$BoxLayoutData)?(layoutData = dynamicCast(d, Q$BoxLayoutContainer$BoxLayoutData)):(layoutData = new BoxLayoutContainer$BoxLayoutData_0);
    cm = layoutData.margins;
    !cm && (cm = new Margins_1);
    ww = $getPropertyInt(widget.getElement(), 'offsetWidth');
    this.loopWidthMap.put(widget, valueOf_1(ww));
    totalFlex = round_int(totalFlex + layoutData.flex);
    totalWidth += ww + cm.left_0 + cm.right;
    maxHeight = max_0(maxHeight, $getPropertyInt(widget.getElement(), 'offsetHeight') + cm.top_0 + cm.bottom);
  }
  innerCtHeight = maxHeight + pt + pb;
  this.hBoxLayoutAlign == ($clinit_HBoxLayoutContainer$HBoxLayoutAlign() , STRETCH)?$setSize_1($getFirstChildElement(this.element), w, h_0, true):this.hBoxLayoutAlign == MIDDLE || this.hBoxLayoutAlign == BOTTOM_1?$setSize_1($getFirstChildElement(this.element), w, h_0 = h_0 > innerCtHeight?h_0:innerCtHeight, true):$setSize_1($getFirstChildElement(this.element), w, innerCtHeight, true);
  extraWidth = w - totalWidth - pl - pr;
  allocated = 0;
  availableHeight = h_0 - pt - pb;
  this.pack == 0?(pl += ~~(extraWidth / 2)):this.pack == 1 && (pl += extraWidth);
  for (i = 0 , len = this.children_0.size_0; i < len; ++i) {
    widget = $get_2(this.children_0, i);
    if (!widget.isVisible_0()) {
      continue;
    }
    d = widget.layoutData;
    instanceOf(d, Q$BoxLayoutContainer$BoxLayoutData)?(layoutData = dynamicCast(d, Q$BoxLayoutContainer$BoxLayoutData)):(layoutData = new BoxLayoutContainer$BoxLayoutData_0);
    cm = layoutData.margins;
    !cm && (cm = new Margins_1);
    cw = dynamicCast(this.loopWidthMap.remove_1(widget), Q$Integer).value_0;
    ch = $getPropertyInt(widget.getElement(), 'offsetHeight');
    pl += cm.left_0;
    pl = 0 > pl?0:pl;
    if (this.hBoxLayoutAlign == MIDDLE) {
      diff = availableHeight - (ch + cm.top_0 + cm.bottom);
      diff == 0?(ct = pt + cm.top_0):(ct = pt + cm.top_0 + ~~(diff / 2));
    }
     else {
      this.hBoxLayoutAlign == BOTTOM_1?(ct = h_0 - (pb + cm.bottom + ch)):(ct = pt + cm.top_0);
    }
    component = instanceOf(widget, Q$Component);
    c = null;
    component && (c = dynamicCast(widget, Q$Component));
    width = -1;
    component?c.setPosition(pl, ct):$setLeftTop(widget.getElement(), pl, ct);
    if (this.pack == 2 && layoutData.flex > 0) {
      add = round_int(floor(extraWidth * (layoutData.flex / totalFlex)));
      allocated += add;
      this.adjustForFlexRemainder && i == this.children_0.size_0 - 1 && (add += extraWidth - allocated);
      cw += add;
      width = cw;
    }
    this.hBoxLayoutAlign == STRETCH?$applyLayout(widget, width, constrain(stretchHeight - cm.top_0 - cm.bottom, layoutData.minSize, 2147483647)):this.hBoxLayoutAlign == STRETCHMAX?$applyLayout(widget, width, constrain(maxHeight - cm.top_0 - cm.bottom, layoutData.minSize, 2147483647)):width > 0 && $applyLayout(widget, width, -1);
    pl += cw + cm.right;
  }
  if (this.enableOverflow) {
    runningWidth = 0;
    for (i = 0 , len = this.children_0.size_0; i < len; ++i) {
      widget = $get_2(this.children_0, i);
      if (widget == this.more) {
        continue;
      }
      d = widget.layoutData;
      instanceOf(d, Q$BoxLayoutContainer$BoxLayoutData)?(layoutData = dynamicCast(d, Q$BoxLayoutContainer$BoxLayoutData)):(layoutData = new BoxLayoutContainer$BoxLayoutData_0);
      cm = layoutData.margins;
      !cm && (cm = new Margins_1);
      runningWidth += $getWidgetWidth(this, widget);
      runningWidth += cm.left_0;
      runningWidth += cm.right;
    }
    runningWidth > w?$onOverflow(this):!!this.more && this.more.parent_0 == this && !!this.more && $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), new HBoxLayoutContainer$6_0(this));
  }
}
;
_.enableOverflow = true;
_.hBoxLayoutAlign = null;
_.more = null;
_.moreMenu = null;
_.triggerWidth = 35;
function $setMinButtonWidth(this$static){
  var i, w;
  this$static.minButtonWidth = 75;
  for (i = 0; i < this$static.children_0.size_0; ++i) {
    w = $get_2(this$static.children_0, i);
    instanceOf(w, Q$TextButton) && dynamicCast(w, Q$TextButton).cell.minWidth == -1 && $setMinWidth_1(dynamicCast(w, Q$TextButton), 75);
  }
}

function $setSpacing(this$static){
  var i;
  this$static.horizontalSpacing = 5;
  this$static.verticalSpacing = 5;
  for (i = 0; i < this$static.children_0.size_0; ++i) {
    $setSpacingLayoutData(this$static, $get_2(this$static.children_0, i));
  }
  this$static.attached && $forceLayout(this$static);
}

function $setSpacingLayoutData(this$static, child){
  var data, hasMargins, hs, m_0, vs;
  if (this$static.verticalSpacing == -1 && this$static.horizontalSpacing == -1) {
    return;
  }
  data = child.layoutData;
  if (instanceOf(data, Q$HasMargins)) {
    hasMargins = dynamicCast(data, Q$HasMargins);
  }
   else {
    hasMargins = new BoxLayoutContainer$BoxLayoutData_0;
    child.layoutData = hasMargins;
  }
  m_0 = hasMargins.getMargins();
  if (!m_0) {
    m_0 = new Margins_0;
    hasMargins.setMargins(m_0);
  }
  if (this$static.verticalSpacing != -1) {
    vs = toInt(fromDouble(round0(this$static.verticalSpacing / 2)));
    m_0.top_0 = vs;
    m_0.bottom = vs;
  }
  if (this$static.horizontalSpacing != -1) {
    hs = toInt(fromDouble(round0(this$static.horizontalSpacing / 2)));
    m_0.left_0 = hs;
    m_0.right = hs;
  }
}

function ToolBar_0(){
  $clinit_Component();
  ToolBar_1.call(this, new BlueToolBarAppearance_0);
}

function ToolBar_1(){
  HBoxLayoutContainer_0.call(this, ($clinit_HBoxLayoutContainer$HBoxLayoutAlign() , TOP_1));
  this.element['className'] = 'GN1NA3IBMAC';
  setStyleName(this.element, 'x-toolbar', true);
  setStyleName(this.element, 'x-toolbar-mark', true);
  setStyleName(this.element, 'x-small-editor', true);
  $setPadding(this, new Padding_0);
  $setHBoxLayoutAlign(this, MIDDLE);
  this.eventsToSink == -1?sinkEvents_0(this.element, 6144 | (this.element.__eventBits || 0)):(this.eventsToSink |= 6144);
}

defineSeed(1160, 1161, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), ToolBar_0);
_.onFocus = function onFocus_0(event_0){
  var c, i;
  $fireEvent_3(this, new FocusEvent_0);
  event_0.stopPropagation();
  for (i = 0; i < this.children_0.size_0; ++i) {
    c = dynamicCast($get_2(this.children_0, i), Q$Component);
    if (!c.disabled && !(!c.focusManagerSupport && (c.focusManagerSupport = new FocusManagerSupport_0) , c.focusManagerSupport).ignore) {
      c.focus_0();
      break;
    }
  }
}
;
_.onInsert = function onInsert_1(index, child){
  $addStyleName(child, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBPK'));
  $setSpacingLayoutData(this, child);
  this.minButtonWidth != -1 && instanceOf(child, Q$CellButtonBase) && child != this.more && $setMinWidth_1(dynamicCast(child, Q$CellButtonBase), this.minButtonWidth);
}
;
_.horizontalSpacing = 0;
_.minButtonWidth = -1;
_.verticalSpacing = 0;
function ButtonBar_0(){
  ToolBar_0.call(this);
  $setSpacing(this);
  setStyleName(this.element, 'x-toolbar-mark', false);
}

defineSeed(1159, 1160, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), ButtonBar_0);
function $getElement_0(this$static){
  if (this$static.init && !this$static.rendered) {
    this$static.rendered = true;
    $redraw(this$static, false);
  }
  return this$static.element;
}

function $onBrowserEvent_6(this$static, event_0){
  var eventType, c;
  c = get_3();
  c.onBrowserEvent_1(this$static, event_0);
  $onBrowserEvent_0(this$static, event_0);
  eventType = event_0.type;
  this$static.cell_0.consumedEvents.contains_0(eventType) && this$static.cell_0.onBrowserEvent_0(this$static.createContext(), $getElement_0(this$static), this$static.value_0, event_0, this$static.valueUpdater);
}

function $onDisable(this$static){
  this$static.disabledStyle != null && $setStyleName_0(this$static, this$static.disabledStyle, true);
  instanceOf(this$static.cell_0, Q$DisableCell) && dynamicCast(this$static.cell_0, Q$DisableCell).disable_1(this$static.createContext(), $getElement_0(this$static));
  instanceOf(this$static.cell_0, Q$AbstractEventCell) && (dynamicCast(this$static.cell_0, Q$AbstractEventCell).disableEvents = true , undefined);
}

function $onEnable(this$static){
  this$static.disabledStyle != null && $setStyleName_0(this$static, this$static.disabledStyle, false);
  instanceOf(this$static.cell_0, Q$DisableCell) && dynamicCast(this$static.cell_0, Q$DisableCell).enable_0(this$static.createContext(), $getElement_0(this$static));
  instanceOf(this$static.cell_0, Q$AbstractEventCell) && (dynamicCast(this$static.cell_0, Q$AbstractEventCell).disableEvents = false , undefined);
}

function $redraw(this$static, force){
  var sb;
  if (!force && (!this$static.init || !this$static.rendered)) {
    return false;
  }
  sb = new SafeHtmlBuilder_0;
  this$static.cell_0.render(this$static.createContext(), this$static.value_0, sb);
  $setInnerHTML($getElement_0(this$static), (new SafeHtmlString_0(sb.sb.impl.string)).html);
  this$static.onRedraw();
  return true;
}

function $setValue_1(this$static, value, fireEvents, redraw){
  var oldValue;
  oldValue = this$static.value_0;
  if (maskUndefined(value) !== maskUndefined(oldValue) && (oldValue == null || !equals__devirtual$(oldValue, value))) {
    this$static.value_0 = value;
    redraw && $redraw(this$static, false);
    fireEvents && fire_5(this$static, value);
  }
}

function CellComponent_0(cell, initialValue, elem){
  Component_0.call(this);
  this.valueUpdater = new CellComponent$1_0(this);
  this.cell_0 = cell;
  this.element = elem;
  sinkEvents_1(this, cell.consumedEvents);
  this.setValue(initialValue);
  this.init = true;
}

function CellComponent_1(cell, initialValue, inlineBlock){
  var div;
  CellComponent_0.call(this, cell, initialValue, (div = $doc.createElement('div') , inlineBlock && $setClassName(div, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBLK')) , div));
  this.inlineBlock = inlineBlock;
}

defineSeed(1165, 96, makeCastMap([Q$Editor, Q$LeafValueEditor, Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasValueChangeHandlers, Q$HasHandlers, Q$EventListener, Q$TakesValue, Q$HasEnabled, Q$HasValue, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasKeyProvider, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$CellComponent, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.createContext = function createContext(){
  return new DefaultHandlerManagerContext_0(ensureHandlers_0(this));
}
;
_.getElement_0 = function getElement_2(){
  return $getElement_0(this);
}
;
_.getFocusEl = function getFocusEl_0(){
  if (instanceOf(this.cell_0, Q$FocusableCell)) {
    return dynamicCast(this.cell_0, Q$FocusableCell).getFocusElement($getElement_0(this));
  }
  return $getElement_0(this);
}
;
_.onAfterFirstAttach = function onAfterFirstAttach_4(){
  var p;
  $onAfterFirstAttach(this);
  if (this.inlineBlock && (($clinit_GXT() , $clinit_GXT() , false) || false)) {
    p = $getParentElement($getElement_0(this));
    !!p && $equals_3(p.tagName, 'TD') && ($getElement_0(this).style['position'] = ($clinit_Style$Position() , 'static') , undefined);
  }
}
;
_.onBrowserEvent = function onBrowserEvent_16(event_0){
  $onBrowserEvent_6(this, event_0);
}
;
_.onDisable = function onDisable_3(){
  $onDisable(this);
}
;
_.onEnable = function onEnable_3(){
  $onEnable(this);
}
;
_.onRedraw = function onRedraw(){
}
;
_.onResize = function onResize_11(width, height){
  var rc;
  this.mask && $mask(this, this.maskMessage);
  if (instanceOf(this.cell_0, Q$ResizableCell)) {
    rc = dynamicCast(this.cell_0, Q$ResizableCell);
    if (rc.redrawOnResize()) {
      rc.setSize(width, height);
      $redraw(this, false);
    }
     else {
      rc.setSize_0($getElement_0(this), width, height);
    }
  }
}
;
_.setValue = function setValue_6(value){
  this.setValue_2(value, false, true);
}
;
_.setValue_2 = function setValue_7(value, fireEvents, redraw){
  $setValue_1(this, value, fireEvents, redraw);
}
;
_.cell_0 = null;
_.init = false;
_.inlineBlock = false;
_.rendered = false;
_.value_0 = null;
function $setIcon_4(this$static, icon){
  $setIcon(this$static.cell, icon);
  $redraw(this$static, false);
}

function $setMenu_0(this$static, menu){
  $setMenu(this$static.cell, menu);
  $redraw(this$static, false);
}

function $setMinWidth_1(this$static, minWidth){
  $setMinWidth(this$static.cell, minWidth);
  $redraw(this$static, false);
}

function CellButtonBase_0(cell, initialValue){
  CellComponent_1.call(this, cell, initialValue, true);
  this.cell = cell;
  this.allowTextSelection = false;
  this.attached && $disableTextSelection($getElement_0(this), true);
  this.eventsToSink == -1?sinkEvents_0($getElement_0(this), 1 | ($getElement_0(this).__eventBits || 0)):(this.eventsToSink |= 1);
}

defineSeed(1164, 1165, makeCastMap([Q$Editor, Q$LeafValueEditor, Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasValueChangeHandlers, Q$HasHandlers, Q$EventListener, Q$TakesValue, Q$HasEnabled, Q$HasText, Q$HasValue, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasKeyProvider, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$CellButtonBase, Q$CellComponent, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.createContext = function createContext_0(){
  return new DefaultHandlerManagerContext_0(ensureHandlers_0(this));
}
;
_.onBrowserEvent = function onBrowserEvent_17(event_0){
  $onBrowserEvent_6(this, event_0);
  $eventGetTypeInt(event_0.type) == 1 && undefined;
}
;
_.cell = null;
function $changeStyle(this$static, config){
  $removeStyleName(this$static, this$static.config.style_0);
  $removeStyleName(this$static, this$static.config.overStyle);
  $removeStyleName(this$static, this$static.config.disableStyle);
  $addStyleName(this$static, config.style_0);
  this$static.config = config;
}

function $onClick_2(this$static, e){
  e.stopPropagation();
  !this$static.disabled && $fireCancellableEvent(this$static, new BeforeSelectEvent_0) && $fireEvent_3(this$static, new SelectEvent_0);
  $removeStyleName(this$static, this$static.config.overStyle);
}

function IconButton_0(config){
  var sb, sb_0;
  Component_0.call(this);
  this.config = config;
  sb = new SafeHtmlBuilder_0;
  $append_5(sb, (sb_0 = new StringBuilder_0 , sb_0.impl.string += '<div class="' , $append_10(sb_0, htmlEscape('GN1NA3IBHP')) , sb_0.impl.string += '"><\/div>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)));
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(sb.sb.impl.string)).html)));
  $addStyleName(this, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBNK'));
  $addStyleName(this, config.style_0);
  this.eventsToSink == -1?sinkEvents_0(this.element, 6781 | (this.element.__eventBits || 0)):(this.eventsToSink |= 6781);
}

function IconButton_1(config){
  $clinit_Component();
  IconButton_0.call(this, (new IconButtonDefaultAppearance_0 , config));
}

defineSeed(1166, 96, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.onBrowserEvent = function onBrowserEvent_18(event_0){
  var code;
  $onBrowserEvent_0(this, event_0);
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
      !this.disabled && $addStyleName(this, this.config.overStyle);
      break;
    case 32:
      $removeStyleName(this, this.config.overStyle);
      break;
    case 1:
      $onClick_2(this, event_0);
      break;
    case 2048:
      $fireEvent_3(this, new FocusEvent_0);
      break;
    case 4096:
      $fireEvent_3(this, new BlurEvent_0);
      break;
    case 512:
      code = event_0.keyCode || 0;
      (code == 13 || code == 32) && $onClick_2(this, event_0);
  }
}
;
_.onDisable = function onDisable_4(){
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, true);
  $addStyleName(this, this.config.disableStyle);
}
;
_.onEnable = function onEnable_4(){
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, false);
  $removeStyleName(this, this.config.disableStyle);
}
;
_.config = null;
function IconButton$IconConfig_0(style, overStyle){
  this.style_0 = style;
  this.overStyle = overStyle;
  this.disableStyle = style + 'Disabled';
}

defineSeed(1167, 1, {}, IconButton$IconConfig_0);
_.disableStyle = null;
_.overStyle = null;
_.style_0 = null;
function TextButton_0(){
  $clinit_Component();
  TextButton_1.call(this, new TextButtonCell_0);
}

function TextButton_1(cell){
  CellButtonBase_0.call(this, cell, null);
}

defineSeed(1168, 1164, makeCastMap([Q$Editor, Q$LeafValueEditor, Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasValueChangeHandlers, Q$HasHandlers, Q$EventListener, Q$TakesValue, Q$HasEnabled, Q$HasText, Q$HasValue, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasKeyProvider, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$CellButtonBase, Q$TextButton, Q$CellComponent, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), TextButton_0);
function $clinit_ToolButton(){
  $clinit_ToolButton = nullMethod;
  $clinit_Component();
  new BlueTools_0;
  CLOSE_0 = new IconButton$IconConfig_0('GN1NA3IBMEC', 'GN1NA3IBNEC');
  new IconButton$IconConfig_0('GN1NA3IBOEC', 'GN1NA3IBPEC');
  DOUBLEDOWN = new IconButton$IconConfig_0('GN1NA3IBAFC', 'GN1NA3IBBFC');
  DOUBLELEFT = new IconButton$IconConfig_0('GN1NA3IBCFC', 'GN1NA3IBDFC');
  DOUBLERIGHT = new IconButton$IconConfig_0('GN1NA3IBEFC', 'GN1NA3IBFFC');
  DOUBLEUP = new IconButton$IconConfig_0('GN1NA3IBGFC', 'GN1NA3IBHFC');
  DOWN_0 = new IconButton$IconConfig_0('GN1NA3IBIFC', 'GN1NA3IBJFC');
  new IconButton$IconConfig_0('GN1NA3IBKFC', 'GN1NA3IBLFC');
  new IconButton$IconConfig_0('GN1NA3IBMFC', 'GN1NA3IBNFC');
  new IconButton$IconConfig_0('GN1NA3IBOFC', 'GN1NA3IBPFC');
  MAXIMIZE = new IconButton$IconConfig_0('GN1NA3IBAGC', 'GN1NA3IBBGC');
  MINIMIZE = new IconButton$IconConfig_0('GN1NA3IBCGC', 'GN1NA3IBDGC');
  new IconButton$IconConfig_0('GN1NA3IBEGC', 'GN1NA3IBFGC');
  new IconButton$IconConfig_0('GN1NA3IBGGC', 'GN1NA3IBHGC');
  new IconButton$IconConfig_0('GN1NA3IBIHC', 'GN1NA3IBJHC');
  new IconButton$IconConfig_0('GN1NA3IBIGC', 'GN1NA3IBJGC');
  new IconButton$IconConfig_0('GN1NA3IBKGC', 'GN1NA3IBLGC');
  new IconButton$IconConfig_0('GN1NA3IBMGC', 'GN1NA3IBNGC');
  new IconButton$IconConfig_0('GN1NA3IBOGC', 'GN1NA3IBPGC');
  RESTORE = new IconButton$IconConfig_0('GN1NA3IBAHC', 'GN1NA3IBBHC');
  new IconButton$IconConfig_0('GN1NA3IBCHC', 'GN1NA3IBDHC');
  new IconButton$IconConfig_0('GN1NA3IBEHC', 'GN1NA3IBFHC');
  new IconButton$IconConfig_0('GN1NA3IBGHC', 'GN1NA3IBHHC');
  UP_0 = new IconButton$IconConfig_0('GN1NA3IBKHC', 'GN1NA3IBLHC');
}

function ToolButton_0(config){
  $clinit_ToolButton();
  IconButton_1.call(this, config);
}

defineSeed(1169, 1166, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), ToolButton_0);
var CLOSE_0, DOUBLEDOWN, DOUBLELEFT, DOUBLERIGHT, DOUBLEUP, DOWN_0, MAXIMIZE, MINIMIZE, RESTORE, UP_0;
function CellComponent$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1170, 1, {}, CellComponent$1_0);
_.this$0 = null;
function sinkEvents_1(widget, typeNames){
  var c = get_3();
  c.sinkEvents(widget, typeNames);
}

function DefaultHandlerManagerContext_0(handlerManager){
  this.key = 'component';
  this.handlerManager = handlerManager;
}

defineSeed(1172, 139, makeCastMap([Q$DefaultHandlerManagerContext, Q$HandlerManagerContext]), DefaultHandlerManagerContext_0);
_.handlerManager = null;
function $applyLayout_1(component, box){
  var bar;
  $applyLayout_0(component, box);
  if (instanceOf(component, Q$Component)) {
    bar = dynamicCast($getData(dynamicCast(component, Q$Component), 'splitBar'), Q$SplitBar);
    !!bar && $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), new BorderLayoutContainer$1_0(bar));
  }
}

function $createCollapsePanel(this$static, panel, data, region){
  var collapseData, cp, m_0;
  cp = new BorderLayoutContainer$2_0(this$static, panel, data, region);
  collapseData = new BorderLayoutContainer$BorderLayoutData_0;
  $setSize_2(collapseData, data.collapseHidden?0:24);
  m_0 = data.margins;
  if (!m_0) {
    m_0 = new Margins_0;
    data.margins = m_0;
  }
  $setMargins(collapseData, new Margins_2(m_0.top_0, m_0.right, m_0.bottom, m_0.left_0));
  if (data.collapseHidden) {
    $collapseHidden(cp);
    collapseData.size_0 = 0;
    switch (region.ordinal) {
      case 3:
        collapseData.margins.left_0 = 0;
        break;
      case 1:
        collapseData.margins.right = 0;
        break;
      case 0:
        collapseData.margins.top_0 = 0;
        break;
      case 2:
        collapseData.margins.bottom = 0;
    }
  }
  cp.layoutData = collapseData;
  !cp.dataMap && (cp.dataMap = new FastMap_0);
  $put_2(cp.dataMap, 'panel', panel);
  !panel.dataMap && (panel.dataMap = new FastMap_0);
  $put_2(panel.dataMap, 'collapse', cp);
  return cp;
}

function $doLayout_1(this$static){
  var b, box, centerH, centerW, centerX, centerY, data, h_0, i, m_0, s, sLeft, sTop, size, totalHeight, totalWidth, w;
  if (this$static.stateful) {
    for (i = 0; i < this$static.children_0.size_0; ++i) {
      w = $get_2(this$static.children_0, i);
      if (instanceOf(w, Q$ContentPanel) && instanceOf(w.layoutData, Q$BorderLayoutContainer$BorderLayoutData)) {
        data = dynamicCast(w.layoutData, Q$BorderLayoutContainer$BorderLayoutData);
        data.collapsed && $switchPanels(this$static, dynamicCast(w, Q$ContentPanel));
      }
    }
  }
  size = $getStyleSize(this$static.element, true);
  w = size.width_0;
  h_0 = size.height_0;
  sLeft = $getPadding(this$static.element, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , LEFT_3)]));
  sTop = $getPadding(this$static.element, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [TOP_0]));
  centerW = w;
  centerH = h_0;
  centerY = 0;
  centerX = 0;
  if (this$static.north) {
    data = $getLayoutData(this$static.north);
    $setVisible_0(this$static.north, !data.hidden);
    if (this$static.north.isVisible_0()) {
      b = new Rectangle_0;
      m_0 = data.margins?data.margins:new Margins_0;
      s = data.size_0 <= 1?data.size_0 * size.height_0:data.size_0;
      $setHeight_2(b, round_int(s));
      $setWidth_2(b, w - (m_0.left_0 + m_0.right));
      $setX_0(b, m_0.left_0);
      $setY_0(b, m_0.top_0);
      centerY = b.height_0 + b.y + m_0.bottom;
      centerH -= centerY;
      $setX_0(b, b.x + sLeft);
      $setY_0(b, b.y + sTop);
      $applyLayout_1(this$static.north, b);
    }
  }
  if (this$static.south) {
    data = $getLayoutData(this$static.south);
    $setVisible_0(this$static.south, !data.hidden);
    if (this$static.south.isVisible_0()) {
      b = new Rectangle_0;
      m_0 = data.margins?data.margins:new Margins_0;
      s = data.size_0 <= 1?data.size_0 * size.height_0:data.size_0;
      $setHeight_2(b, round_int(s));
      $setWidth_2(b, w - (m_0.left_0 + m_0.right));
      $setX_0(b, m_0.left_0);
      totalHeight = b.height_0 + m_0.top_0 + m_0.bottom;
      $setY_0(b, h_0 - totalHeight + m_0.top_0);
      centerH -= totalHeight;
      $setX_0(b, b.x + sLeft);
      $setY_0(b, b.y + sTop);
      $applyLayout_1(this$static.south, b);
    }
  }
  if (this$static.west) {
    data = $getLayoutData(this$static.west);
    $setVisible_0(this$static.west, !data.hidden);
    if (this$static.west.isVisible_0()) {
      box = new Rectangle_0;
      m_0 = data.margins?data.margins:new Margins_0;
      s = data.size_0 <= 1?data.size_0 * size.width_0:data.size_0;
      $setWidth_2(box, round_int(s));
      $setHeight_2(box, centerH - (m_0.top_0 + m_0.bottom));
      $setX_0(box, m_0.left_0);
      $setY_0(box, centerY + m_0.top_0);
      totalWidth = box.width_0 + m_0.left_0 + m_0.right;
      centerX += totalWidth;
      centerW -= totalWidth;
      $setX_0(box, box.x + sLeft);
      $setY_0(box, box.y + sTop);
      $applyLayout_1(this$static.west, box);
    }
  }
  if (this$static.east) {
    data = $getLayoutData(this$static.east);
    $setVisible_0(this$static.east, !data.hidden);
    if (this$static.east.isVisible_0()) {
      b = new Rectangle_0;
      m_0 = data.margins?data.margins:new Margins_0;
      s = data.size_0 <= 1?data.size_0 * size.width_0:data.size_0;
      $setWidth_2(b, round_int(s));
      $setHeight_2(b, centerH - (m_0.top_0 + m_0.bottom));
      totalWidth = b.width_0 + m_0.left_0 + m_0.right;
      $setX_0(b, w - totalWidth + m_0.left_0);
      $setY_0(b, centerY + m_0.top_0);
      centerW -= totalWidth;
      $setX_0(b, b.x + sLeft);
      $setY_0(b, b.y + sTop);
      $applyLayout_1(this$static.east, b);
    }
  }
  if (this$static.widget) {
    data = this$static.widget.layoutData;
    m_0 = null;
    instanceOf(data, Q$HasMargins) && (m_0 = dynamicCast(data, Q$HasMargins).getMargins());
    !m_0 && (m_0 = new Margins_1);
    this$static.lastCenter = new Rectangle_1(centerX, centerY, centerW, centerH);
    $setX_0(this$static.lastCenter, centerX + (m_0.left_0 + sLeft));
    $setY_0(this$static.lastCenter, centerY + (m_0.top_0 + sTop));
    $setWidth_2(this$static.lastCenter, centerW - (m_0.left_0 + m_0.right));
    $setHeight_2(this$static.lastCenter, centerH - (m_0.top_0 + m_0.bottom));
    $applyLayout_1(this$static.widget, this$static.lastCenter);
  }
}

function $getLayoutData(w){
  var o;
  o = w.layoutData;
  return dynamicCast(instanceOf(o, Q$BorderLayoutContainer$BorderLayoutData)?o:new BorderLayoutContainer$BorderLayoutData_1(100), Q$BorderLayoutContainer$BorderLayoutData);
}

function $getRegion_0(this$static, component){
  if (component == this$static.north) {
    return $clinit_Style$LayoutRegion() , NORTH;
  }
   else if (component == this$static.south) {
    return $clinit_Style$LayoutRegion() , SOUTH;
  }
   else if (component == this$static.west) {
    return $clinit_Style$LayoutRegion() , WEST;
  }
   else if (component == this$static.east) {
    return $clinit_Style$LayoutRegion() , EAST;
  }
  return null;
}

function $onCollapse_0(this$static, panel){
  var bar, cp, data, region;
  data = dynamicCast(panel.layoutData, Q$BorderLayoutContainer$BorderLayoutData);
  region = $getRegion_0(this$static, panel);
  cp = dynamicCast($getData(panel, 'collapse'), Q$CollapsePanel);
  !cp && (cp = $createCollapsePanel(this$static, panel, data, region));
  cp.lastSize = null;
  panel.collapsed = true;
  switch (region.ordinal) {
    case 3:
      $setWestWidget(this$static, cp);
      break;
    case 1:
      $setEastWidget(this$static, cp);
      break;
    case 0:
      $setNorthWidget(this$static, cp);
      break;
    case 2:
      $setSouthWidget(this$static, cp);
  }
  panel.lastSize = null;
  $doLayout_1(this$static);
  bar = $getSplitBar(cp);
  !!bar && $sync_1(bar);
  $fireEvent_3(this$static, new CollapseItemEvent_0);
}

function $onExpand(this$static, panel){
  var cp, data, region;
  cp = dynamicCast($getData(panel, 'collapse'), Q$CollapsePanel);
  region = $getRegion_0(this$static, cp);
  switch (region.ordinal) {
    case 3:
      $setWestWidget(this$static, panel);
      break;
    case 1:
      $setEastWidget(this$static, panel);
      break;
    case 0:
      $setNorthWidget(this$static, panel);
      break;
    case 2:
      $setSouthWidget(this$static, panel);
  }
  panel.collapsed = false;
  data = dynamicCast(panel.layoutData, Q$BorderLayoutContainer$BorderLayoutData);
  data.collapsed = false;
  $doLayout_1(this$static);
  $fireEvent_3(this$static, new ExpandItemEvent_0);
}

function $onExpandClick(this$static, collapse){
  var panel;
  panel = collapse.panel;
  $onExpand(this$static, panel);
}

function $setEastWidget(this$static, child){
  !!this$static.east && $remove_14(this$static, this$static.east);
  if (child) {
    this$static.east = child;
    $insert_5(this$static, this$static.east, 0);
  }
}

function $setNorthWidget(this$static, child){
  !!this$static.north && $remove_14(this$static, this$static.north);
  if (child) {
    this$static.north = child;
    $insert_5(this$static, this$static.north, 0);
  }
}

function $setSouthWidget(this$static, child){
  !!this$static.south && $remove_14(this$static, this$static.south);
  if (child) {
    this$static.south = child;
    $insert_5(this$static, this$static.south, 0);
  }
}

function $setWestWidget(this$static, child){
  !!this$static.west && $remove_14(this$static, this$static.west);
  if (child) {
    this$static.west = child;
    $insert_5(this$static, this$static.west, 0);
  }
}

function $switchPanels(this$static, panel){
  var cp, data, region;
  region = $getRegion_0(this$static, panel);
  data = $getLayoutData(panel);
  $remove_14(this$static, panel);
  cp = dynamicCast($getData(panel, 'collapse'), Q$CollapsePanel);
  !cp && (cp = $createCollapsePanel(this$static, panel, data, region));
  cp.lastSize = null;
  panel.collapsed = true;
  switch (region.ordinal) {
    case 3:
      $setWestWidget(this$static, cp);
      break;
    case 1:
      $setEastWidget(this$static, cp);
      break;
    case 0:
      $setNorthWidget(this$static, cp);
      break;
    case 2:
      $setSouthWidget(this$static, cp);
  }
}

function BorderLayoutContainer$1_0(val$bar){
  this.val$bar = val$bar;
}

defineSeed(1174, 1, {}, BorderLayoutContainer$1_0);
_.execute = function execute_23(){
  this.val$bar.element.style['visibility'] = ($clinit_Style$Visibility() , 'visible');
}
;
_.val$bar = null;
function BorderLayoutContainer$2_0(this$0, $anonymous0, $anonymous1, $anonymous2){
  this.this$0 = this$0;
  CollapsePanel_0.call(this, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(1175, 1102, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$CollapsePanel, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), BorderLayoutContainer$2_0);
_.onExpandButton = function onExpandButton_0(){
  $onExpandClick(this.this$0, this);
}
;
_.this$0 = null;
function $onDragEvent(this$static, event_0){
  var centerSize, region, side, size;
  region = $getRegion_0(this$static.this$0, this$static.val$c);
  if (event_0.start) {
    side = region == ($clinit_Style$LayoutRegion() , WEST) || region == EAST;
    size = side?$getPropertyInt(this$static.val$c.getElement_0(), 'offsetWidth'):$getPropertyInt(this$static.val$c.getElement_0(), 'offsetHeight');
    centerSize = side?this$static.this$0.lastCenter.width_0:this$static.this$0.lastCenter.height_0;
    this$static.val$fbar.minSize = 50;
    $setMaxSize(this$static.val$fbar, size + centerSize < 500?size + centerSize:500);
  }
   else {
    if (event_0.size_0 < 1) {
      return;
    }
    $setSize_2(this$static.val$data, event_0.size_0);
    $doLayout_1(this$static.this$0);
  }
}

function $setMargins(this$static, margins){
  this$static.margins = margins;
}

defineSeed(1181, 1, makeCastMap([Q$HasMargins]));
_.getMargins = function getMargins(){
  return this.margins;
}
;
_.setMargins = function setMargins(margins){
  this.margins = margins;
}
;
_.margins = null;
function $setSize_2(this$static, size){
  this$static.size_0 = size;
}

function BorderLayoutContainer$BorderLayoutData_0(){
}

function BorderLayoutContainer$BorderLayoutData_1(size){
  this.size_0 = size;
}

defineSeed(1180, 1181, makeCastMap([Q$BorderLayoutContainer$BorderLayoutData, Q$HasMargins]), BorderLayoutContainer$BorderLayoutData_0, BorderLayoutContainer$BorderLayoutData_1);
_.collapseHidden = false;
_.collapseMini = false;
_.collapsed = false;
_.collapsible = false;
_.hidden = false;
_.size_0 = 100;
_.split_0 = false;
function BoxLayoutContainer$BoxLayoutData_0(){
}

defineSeed(1183, 1181, makeCastMap([Q$BoxLayoutContainer$BoxLayoutData, Q$HasMargins]), BoxLayoutContainer$BoxLayoutData_0);
_.flex = 0;
_.minSize = 0;
function Container$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1185, 1, makeCastMap([Q$EventHandler, Q$ShowEvent$ShowHandler]), Container$1_0);
_.onShow = function onShow_1(event_0){
  this.this$0.onWidgetShow(dynamicCast(event_0.source, Q$Component));
}
;
_.this$0 = null;
function Container$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1186, 1, makeCastMap([Q$EventHandler, Q$HideEvent$HideHandler]), Container$2_0);
_.onHide = function onHide_4(event_0){
  this.this$0.onWidgetHide(dynamicCast(event_0.source, Q$Component));
}
;
_.this$0 = null;
function HBoxLayoutContainer$2_0(val$b){
  this.val$b = val$b;
}

defineSeed(1187, 1, makeCastMap([Q$SelectionHandler, Q$EventHandler]), HBoxLayoutContainer$2_0);
_.onSelection = function onSelection_0(event_0){
  $fireEvent_3(this.val$b, new SelectEvent_0);
}
;
_.val$b = null;
function $onBeforeShow(this$static){
  var i, len, w;
  $clear_2(this$static.this$0.moreMenu);
  for (i = 0 , len = this$static.this$0.children_0.size_0; i < len; ++i) {
    w = $getWidget(this$static.this$0, i);
    $isHidden(this$static.this$0, w) && w != this$static.this$0.more && $addWidgetToMenu(this$static.this$0.moreMenu, w);
  }
  $fireEvent_3(this$static.this$0, new OverflowEvent_0);
}

function HBoxLayoutContainer$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1188, 1, makeCastMap([Q$EventHandler, Q$BeforeShowEvent$BeforeShowHandler]), HBoxLayoutContainer$4_0);
_.this$0 = null;
function HBoxLayoutContainer$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1189, 1, {}, HBoxLayoutContainer$5_0);
_.execute = function execute_24(){
  $forceLayout(this.this$0);
}
;
_.this$0 = null;
function HBoxLayoutContainer$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1190, 1, {}, HBoxLayoutContainer$6_0);
_.execute = function execute_25(){
  var i, widget;
  for (i = 0; i < this.this$0.children_0.size_0; ++i) {
    widget = $getWidget(this.this$0, i);
    $unhideComponent(this.this$0, widget);
  }
  $remove_14(this.this$0, this.this$0.more);
  $forceLayout(this.this$0);
}
;
_.this$0 = null;
function $clinit_HBoxLayoutContainer$HBoxLayoutAlign(){
  $clinit_HBoxLayoutContainer$HBoxLayoutAlign = nullMethod;
  BOTTOM_1 = new HBoxLayoutContainer$HBoxLayoutAlign_0('BOTTOM', 0);
  MIDDLE = new HBoxLayoutContainer$HBoxLayoutAlign_0('MIDDLE', 1);
  STRETCH = new HBoxLayoutContainer$HBoxLayoutAlign_0('STRETCH', 2);
  STRETCHMAX = new HBoxLayoutContainer$HBoxLayoutAlign_0('STRETCHMAX', 3);
  TOP_1 = new HBoxLayoutContainer$HBoxLayoutAlign_0('TOP', 4);
  $VALUES_19 = initValues(_3Lcom_sencha_gxt_widget_core_client_container_HBoxLayoutContainer$HBoxLayoutAlign_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$HBoxLayoutContainer$HBoxLayoutAlign, [BOTTOM_1, MIDDLE, STRETCH, STRETCHMAX, TOP_1]);
}

function HBoxLayoutContainer$HBoxLayoutAlign_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_20(){
  $clinit_HBoxLayoutContainer$HBoxLayoutAlign();
  return $VALUES_19;
}

defineSeed(1191, 191, makeCastMap([Q$HBoxLayoutContainer$HBoxLayoutAlign, Q$Serializable, Q$Comparable, Q$Enum]), HBoxLayoutContainer$HBoxLayoutAlign_0);
var $VALUES_19, BOTTOM_1, MIDDLE, STRETCH, STRETCHMAX, TOP_1;
defineSeed(1192, 1114, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.insert = function insert_1(w, beforeIndex){
  $insert_5(this, w, beforeIndex);
}
;
function ResizeContainer$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1193, 1, {}, ResizeContainer$1_0);
_.execute = function execute_26(){
  $forceLayout(this.this$0);
}
;
_.this$0 = null;
function ResizeContainer$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1194, 1, {}, ResizeContainer$2_0);
_.execute = function execute_27(){
  this.this$0.doLayout();
}
;
_.this$0 = null;
function ResizeContainer$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1195, 1, {}, ResizeContainer$3_0);
_.execute = function execute_28(){
  this.this$0.layoutRequiredThisEventLoop = true;
}
;
_.this$0 = null;
function ResizeContainer$4_0(val$widget){
  this.val$widget = val$widget;
}

defineSeed(1196, 1, {}, ResizeContainer$4_0);
_.execute = function execute_29(){
  dynamicCast(this.val$widget, Q$RequiresResize).onResize_1();
}
;
_.val$widget = null;
function $add_13(this$static, child, layoutData){
  !!child && (child.layoutData = layoutData , undefined);
  this$static.insert(!child?null:child, this$static.children_0.size_0);
}

function VerticalLayoutContainer_0(){
  $clinit_Component();
  InsertResizeContainer_0.call(this);
  $setElement(this, $doc.createElement('div'));
  this.element.style['position'] = ($clinit_Style$Position() , 'relative');
}

defineSeed(1197, 1163, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$HasLayout, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), VerticalLayoutContainer_0);
_.doLayout = function doLayout_4(){
  var c, count, d, h_0, height, i, ph, size, w, width;
  size = $getStyleSize(this.element, true);
  w = size.width_0 - (this.adjustForScroll?($clinit_XDOM() , scrollBarWidth == -1 && (scrollBarWidth = getScrollBarWidthInternal()) , $clinit_XDOM() , scrollBarWidth):0);
  h_0 = size.height_0;
  ph = h_0;
  count = this.children_0.size_0;
  for (i = 0; i < count; ++i) {
    c = $get_2(this.children_0, i);
    c.getElement().style['position'] = ($clinit_Style$Position() , 'relative');
    height = -1;
    d = c.layoutData;
    instanceOf(d, Q$HasHeight) && (height = dynamicCast(dynamicCast(d, Q$HasHeight), Q$VerticalLayoutContainer$VerticalLayoutData).height_0);
    if (height > 1) {
      ph = round_int(ph - height);
    }
     else if (height == -1) {
      if ((instanceOf(c, Q$HasWidgets) || instanceOf(c, Q$IndexedPanel)) && !this.secondPassRequired) {
        this.secondPassRequired = true;
        $scheduleEntry(($clinit_SchedulerImpl() , INSTANCE_4), this.layoutCommand);
        return;
      }
      ph -= $getPropertyInt(c.getElement(), 'offsetHeight');
      ph -= $getTopBottomMargins(c);
    }
     else if (height < -1) {
      ph = round_int(ph - (h_0 + height));
      ph -= $getTopBottomMargins(c);
    }
  }
  this.secondPassRequired = false;
  ph = ph < 0?0:ph;
  for (i = 0; i < count; ++i) {
    c = $get_2(this.children_0, i);
    width = -1;
    height = -1;
    d = c.layoutData;
    instanceOf(d, Q$HasWidth) && (width = dynamicCast(dynamicCast(d, Q$HasWidth), Q$VerticalLayoutContainer$VerticalLayoutData).width_0);
    instanceOf(d, Q$HasHeight) && (height = dynamicCast(dynamicCast(d, Q$HasHeight), Q$VerticalLayoutContainer$VerticalLayoutData).height_0);
    width >= 0 && width <= 1?(width = width * w):width < -1 && (width = w + width);
    width != -1 && (width -= $getLeftRightMargins(c));
    height >= 0 && height <= 1?(height = height * ph):height < -1 && (height = h_0 + height);
    height != -1 && (height -= $getTopBottomMargins(c));
    $applyLayout(c, round_int(Math.floor(width)), round_int(Math.floor(height)));
  }
}
;
_.adjustForScroll = false;
_.secondPassRequired = false;
function VerticalLayoutContainer$VerticalLayoutData_0(){
}

defineSeed(1198, 1181, makeCastMap([Q$HasHeight, Q$HasMargins, Q$HasWidth, Q$VerticalLayoutContainer$VerticalLayoutData]), VerticalLayoutContainer$VerticalLayoutData_0);
_.height_0 = -1;
_.width_0 = -1;
function $dispatch_7(this$static, handler){
  $onStateChange(handler.this$0, dynamicCast(this$static.item, Q$Filter));
}

function ActivateEvent_0(item){
  this.item = item;
}

defineSeed(1200, 5, {}, ActivateEvent_0);
_.dispatch = function dispatch_40(handler){
  $dispatch_7(this, dynamicCast(handler, Q$ActivateEvent$ActivateHandler));
}
;
_.getAssociatedType = function getAssociatedType_41(){
  return TYPE_43;
}
;
_.getSource = function getSource_8(){
  return dynamicCast(this.source, Q$Component);
}
;
_.item = null;
var TYPE_43 = null;
function AddEvent_0(){
}

defineSeed(1201, 5, {}, AddEvent_0);
_.dispatch = function dispatch_41(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_42(){
  return TYPE_44;
}
;
_.getSource = function getSource_9(){
  return dynamicCast(this.source, Q$Container);
}
;
var TYPE_44 = null;
function BeforeAddEvent_0(){
}

defineSeed(1202, 5, makeCastMap([Q$CancellableEvent]), BeforeAddEvent_0);
_.dispatch = function dispatch_42(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_43(){
  return TYPE_45;
}
;
_.getSource = function getSource_10(){
  return dynamicCast(this.source, Q$Container);
}
;
_.isCancelled = function isCancelled_3(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_45 = null;
function BeforeCheckChangeEvent_0(){
}

defineSeed(1203, 5, makeCastMap([Q$CancellableEvent]), BeforeCheckChangeEvent_0);
_.dispatch = function dispatch_43(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_44(){
  return TYPE_46;
}
;
_.getSource = function getSource_11(){
  return dynamicCast(this.source, Q$Component);
}
;
_.isCancelled = function isCancelled_4(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_46 = null;
function $dispatch_8(this$static, handler){
  this$static.cancelled = true;
  $onCollapse_0(handler.this$0, dynamicCast(this$static.source, Q$ContentPanel));
}

function BeforeCollapseEvent_0(){
}

defineSeed(1204, 5, makeCastMap([Q$CancellableEvent]), BeforeCollapseEvent_0);
_.dispatch = function dispatch_44(handler){
  $dispatch_8(this, dynamicCast(handler, Q$BeforeCollapseEvent$BeforeCollapseHandler));
}
;
_.getAssociatedType = function getAssociatedType_45(){
  return TYPE_47;
}
;
_.isCancelled = function isCancelled_5(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_47 = null;
function $dispatch_9(this$static, handler){
  this$static.cancelled = true;
  $onExpand(handler.this$0, dynamicCast(dynamicCast(this$static.source, Q$Component), Q$ContentPanel));
}

function BeforeExpandEvent_0(){
}

defineSeed(1206, 5, makeCastMap([Q$CancellableEvent]), BeforeExpandEvent_0);
_.dispatch = function dispatch_46(handler){
  $dispatch_9(this, dynamicCast(handler, Q$BeforeExpandEvent$BeforeExpandHandler));
}
;
_.getAssociatedType = function getAssociatedType_47(){
  return TYPE_49;
}
;
_.getSource = function getSource_13(){
  return dynamicCast(this.source, Q$Component);
}
;
_.isCancelled = function isCancelled_7(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_49 = null;
function BeforeHideEvent_0(){
}

defineSeed(1208, 5, makeCastMap([Q$CancellableEvent]), BeforeHideEvent_0);
_.dispatch = function dispatch_48(handler){
  $selectNode($getElement_0(dynamicCast(dynamicCast(handler, Q$BeforeHideEvent$BeforeHideHandler), Q$StringFilter$3).this$0.field), 'input').blur();
}
;
_.getAssociatedType = function getAssociatedType_49(){
  return TYPE_51;
}
;
_.getSource = function getSource_15(){
  return dynamicCast(this.source, Q$Component);
}
;
_.isCancelled = function isCancelled_9(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_51 = null;
function BeforeRemoveEvent_0(){
}

defineSeed(1209, 5, makeCastMap([Q$CancellableEvent]), BeforeRemoveEvent_0);
_.dispatch = function dispatch_49(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_50(){
  return TYPE_52;
}
;
_.getSource = function getSource_16(){
  return dynamicCast(this.source, Q$Container);
}
;
_.isCancelled = function isCancelled_10(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_52 = null;
function BeforeSelectEvent_0(){
}

function BeforeSelectEvent_1(){
}

defineSeed(1210, 5, makeCastMap([Q$CancellableEvent]), BeforeSelectEvent_0, BeforeSelectEvent_1);
_.dispatch = function dispatch_50(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_51(){
  return TYPE_53;
}
;
_.isCancelled = function isCancelled_11(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_53 = null;
function BeforeShowEvent_0(){
}

defineSeed(1211, 5, makeCastMap([Q$CancellableEvent]), BeforeShowEvent_0);
_.dispatch = function dispatch_51(handler){
  $onBeforeShow(dynamicCast(handler, Q$BeforeShowEvent$BeforeShowHandler));
}
;
_.getAssociatedType = function getAssociatedType_52(){
  return TYPE_54;
}
;
_.getSource = function getSource_17(){
  return dynamicCast(this.source, Q$Component);
}
;
_.isCancelled = function isCancelled_12(){
  return this.cancelled;
}
;
_.cancelled = false;
var TYPE_54 = null;
function BlurEvent_0(){
}

defineSeed(1212, 5, {}, BlurEvent_0);
_.dispatch = function dispatch_52(handler){
  $onLogicalBlur(dynamicCast(dynamicCast(handler, Q$BlurEvent$BlurHandler), Q$Field$1).this$0);
}
;
_.getAssociatedType = function getAssociatedType_53(){
  return TYPE_55;
}
;
_.getSource = function getSource_18(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_55 = null;
defineSeed(1214, 5, {});
function CheckChangeEvent_0(item){
  this.item = item;
}

defineSeed(1218, 5, {}, CheckChangeEvent_0);
_.dispatch = function dispatch_57(handler){
  dynamicCast(handler, Q$CheckChangeEvent$CheckChangeHandler).onCheckChange(this);
}
;
_.getAssociatedType = function getAssociatedType_58(){
  return TYPE_60;
}
;
_.getSource = function getSource_20(){
  return dynamicCast(this.source, Q$Component);
}
;
_.item = null;
var TYPE_60 = null;
function CollapseEvent_0(){
}

defineSeed(1220, 5, {}, CollapseEvent_0);
_.dispatch = function dispatch_59(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_60(){
  return TYPE_62;
}
;
_.getSource = function getSource_22(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_62 = null;
function CollapseItemEvent_0(){
}

defineSeed(1221, 5, {}, CollapseItemEvent_0);
_.dispatch = function dispatch_60(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_61(){
  return TYPE_63;
}
;
_.getSource = function getSource_23(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_63 = null;
defineSeed(1222, 5, {});
_.index_0 = 0;
function $dispatch_11(this$static, handler){
  $onStateChange(handler.this$0, dynamicCast(this$static.item, Q$Filter));
}

function DeactivateEvent_0(item){
  this.item = item;
}

defineSeed(1225, 5, {}, DeactivateEvent_0);
_.dispatch = function dispatch_63(handler){
  $dispatch_11(this, dynamicCast(handler, Q$DeactivateEvent$DeactivateHandler));
}
;
_.getAssociatedType = function getAssociatedType_64(){
  return TYPE_66;
}
;
_.getSource = function getSource_25(){
  return dynamicCast(this.source, Q$Component);
}
;
_.item = null;
var TYPE_66 = null;
function DisableEvent_0(){
}

defineSeed(1226, 5, {}, DisableEvent_0);
_.dispatch = function dispatch_64(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_65(){
  return TYPE_67;
}
;
_.getSource = function getSource_26(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_67 = null;
function EnableEvent_0(){
}

defineSeed(1227, 5, {}, EnableEvent_0);
_.dispatch = function dispatch_65(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_66(){
  return TYPE_68;
}
;
_.getSource = function getSource_27(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_68 = null;
function ExpandEvent_0(){
}

defineSeed(1228, 5, {}, ExpandEvent_0);
_.dispatch = function dispatch_66(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_67(){
  return TYPE_69;
}
;
var TYPE_69 = null;
function ExpandItemEvent_0(){
}

defineSeed(1229, 5, {}, ExpandItemEvent_0);
_.dispatch = function dispatch_67(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_68(){
  return TYPE_70;
}
;
_.getSource = function getSource_28(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_70 = null;
function FocusEvent_0(){
}

defineSeed(1230, 5, {}, FocusEvent_0);
_.dispatch = function dispatch_68(handler){
  $onLogicalFocus(dynamicCast(dynamicCast(handler, Q$FocusEvent$FocusHandler), Q$Field$2).this$0);
}
;
_.getAssociatedType = function getAssociatedType_69(){
  return TYPE_71;
}
;
_.getSource = function getSource_29(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_71 = null;
function HideEvent_0(){
}

defineSeed(1235, 5, {}, HideEvent_0);
_.dispatch = function dispatch_73(handler){
  dynamicCast(handler, Q$HideEvent$HideHandler).onHide(this);
}
;
_.getAssociatedType = function getAssociatedType_74(){
  return TYPE_76;
}
;
_.getSource = function getSource_30(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_76 = null;
function InvalidEvent_0(){
}

defineSeed(1236, 5, {}, InvalidEvent_0);
_.dispatch = function dispatch_74(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_75(){
  return TYPE_77;
}
;
_.getSource = function getSource_31(){
  return dynamicCast(this.source, Q$Field);
}
;
var TYPE_77 = null;
function MaximizeEvent_0(){
}

defineSeed(1237, 5, {}, MaximizeEvent_0);
_.dispatch = function dispatch_75(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_76(){
  return TYPE_78;
}
;
_.getSource = function getSource_32(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_78 = null;
function MinimizeEvent_0(){
}

defineSeed(1238, 5, {}, MinimizeEvent_0);
_.dispatch = function dispatch_76(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_77(){
  return TYPE_79;
}
;
_.getSource = function getSource_33(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_79 = null;
function MoveEvent_0(){
}

defineSeed(1239, 5, {}, MoveEvent_0);
_.dispatch = function dispatch_77(handler){
  $delay(dynamicCast(dynamicCast(handler, Q$MoveEvent$MoveHandler), Q$SplitBar$Handler).this$0.delay, 10);
}
;
_.getAssociatedType = function getAssociatedType_78(){
  return TYPE_80;
}
;
_.getSource = function getSource_34(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_80 = null;
function OverflowEvent_0(){
}

defineSeed(1240, 5, {}, OverflowEvent_0);
_.dispatch = function dispatch_78(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_79(){
  return TYPE_81;
}
;
_.getSource = function getSource_35(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_81 = null;
function RegisterEvent_0(){
}

defineSeed(1244, 5, {}, RegisterEvent_0);
_.dispatch = function dispatch_80(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_81(){
  return TYPE_85;
}
;
var TYPE_85 = null;
function RemoveEvent_0(){
}

defineSeed(1245, 5, {}, RemoveEvent_0);
_.dispatch = function dispatch_81(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_82(){
  return TYPE_86;
}
;
_.getSource = function getSource_37(){
  return dynamicCast(this.source, Q$Container);
}
;
var TYPE_86 = null;
function SelectEvent_0(){
}

function SelectEvent_1(){
}

defineSeed(1252, 5, {}, SelectEvent_0, SelectEvent_1);
_.dispatch = function dispatch_88(handler){
  dynamicCast(handler, Q$SelectEvent$SelectHandler).onSelect(this);
}
;
_.getAssociatedType = function getAssociatedType_89(){
  return TYPE_93;
}
;
var TYPE_93 = null;
function ShowEvent_0(){
}

defineSeed(1253, 5, {}, ShowEvent_0);
_.dispatch = function dispatch_89(handler){
  dynamicCast(handler, Q$ShowEvent$ShowHandler).onShow(this);
}
;
_.getAssociatedType = function getAssociatedType_90(){
  return TYPE_94;
}
;
_.getSource = function getSource_41(){
  return dynamicCast(this.source, Q$Component);
}
;
var TYPE_94 = null;
function $dispatch_15(this$static, handler){
  $onDragEvent(handler, this$static);
}

function SplitBarDragEvent_0(start, size){
  this.start = start;
  this.size_0 = size;
}

defineSeed(1255, 5, {}, SplitBarDragEvent_0);
_.dispatch = function dispatch_91(handler){
  $dispatch_15(this, dynamicCast(handler, Q$SplitBarDragEvent$SplitBarDragHandler));
}
;
_.getAssociatedType = function getAssociatedType_92(){
  return TYPE_96;
}
;
_.getSource = function getSource_42(){
  return dynamicCast(this.source, Q$SplitBar);
}
;
_.size_0 = 0;
_.start = false;
var TYPE_96 = null;
function UnregisterEvent_0(){
}

defineSeed(1256, 5, {}, UnregisterEvent_0);
_.dispatch = function dispatch_92(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_93(){
  return TYPE_97;
}
;
var TYPE_97 = null;
function ValidEvent_0(){
}

defineSeed(1258, 5, {}, ValidEvent_0);
_.dispatch = function dispatch_94(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_95(){
  return TYPE_99;
}
;
_.getSource = function getSource_43(){
  return dynamicCast(this.source, Q$Field);
}
;
var TYPE_99 = null;
function $getXY(this$static){
  return new Point_0(this$static.clientX || 0, this$static.clientY || 0);
}

function $clearInvalid_0(this$static){
  this$static.valid = true;
  $onValid((this$static.getCell() , $getElement_0(this$static)), true);
  !!this$static.errorSupport && $clearInvalid_1(this$static.errorSupport);
  $fireEvent_3(this$static, new ValidEvent_0);
}

function $markInvalid(this$static, msg){
  this$static.errors = msg;
  if (this$static.preventMark) {
    return;
  }
  this$static.valid = false;
  $onValid((this$static.getCell() , $getElement_0(this$static)), false);
  !!this$static.errorSupport && $markInvalid_0(this$static.errorSupport, msg);
  $fireEvent_3(this$static, new InvalidEvent_0);
}

function $onLogicalBlur(this$static){
  if (this$static.hasFocus) {
    this$static.hasFocus = false;
    $validate(this$static);
  }
}

function $onLogicalFocus(this$static){
  this$static.hasFocus || (this$static.hasFocus = true);
}

function $validate(this$static){
  var restore_0, result;
  if (this$static.disabled) {
    $clearInvalid_0(this$static);
    return true;
  }
  restore_0 = this$static.preventMark;
  this$static.preventMark = false;
  result = $validateValue(this$static, this$static.value_0);
  this$static.preventMark = restore_0;
  if (result) {
    $clearInvalid_0(this$static);
    this$static.errors = null;
  }
  return result;
}

function $validateValue(this$static, value){
  var errors, i, temp;
  errors = new ArrayList_0;
  for (i = 0; i < this$static.validators.size_0; ++i) {
    temp = $validate_0(dynamicCast($get_10(this$static.validators, i), Q$Validator), value);
    !!temp && temp.size_0 > 0 && $addAll_0(errors, temp);
  }
  if (errors.size_0 > 0) {
    $markInvalid(this$static, errors);
    this$static.valid = false;
    return false;
  }
  this$static.valid = true;
  return true;
}

function $getCurrentValue(this$static){
  var $e0;
  try {
    return $getValueOrThrow_0(this$static);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Exception)) {
      return null;
    }
     else 
      throw $e0;
  }
}

function $getValueOrThrow_0(this$static){
  var parseResult, text;
  text = $getPropertyString($getFirstChildElement($getFirstChildElement((dynamicCast(this$static.cell_0, Q$FieldCell) , $getElement_0(this$static)))), 'value');
  if (text == null || $equals_3('', text)) {
    return null;
  }
  if (dynamicCast(dynamicCast(this$static.cell_0, Q$FieldCell), Q$TextInputCell).emptyText != null && $equals_3(text, dynamicCast(dynamicCast(this$static.cell_0, Q$FieldCell), Q$TextInputCell).emptyText)) {
    return null;
  }
  parseResult = (dynamicCast(dynamicCast(this$static.cell_0, Q$FieldCell), Q$TextInputCell) , text);
  return parseResult;
}

function DefaultEditorError_0(message){
  this.message_0 = message;
  this.value_0 = '';
}

defineSeed(1272, 1, makeCastMap([Q$EditorError]), DefaultEditorError_0);
_.getMessage = function getMessage_2(){
  return this.message_0;
}
;
_.consumed = false;
_.message_0 = null;
_.value_0 = null;
function $alignErrorIcon(this$static){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), new SideErrorHandler$2_0(this$static));
}

function $clearInvalid_1(this$static){
  if (this$static.errorIcon) {
    $setSize(this$static.target_0, this$static.originalWidth + 'px', 'undefined');
    doDetach(this$static.errorIcon);
    $hide(this$static.errorIcon);
    $getElement_0(this$static.target_0).setAttribute('aria-describedby', '');
    this$static.showingError = false;
  }
}

function $markInvalid_0(this$static, errors){
  var error, p, w;
  if (errors.size_1() == 0) {
    $clearInvalid_1(this$static);
    return;
  }
  error = dynamicCast(errors.get_2(0), Q$EditorError).getMessage();
  if (this$static.showingError && !!this$static.tip) {
    $setBodyText(this$static.tip.toolTipConfig, error);
    $update_2(this$static.tip, this$static.tip.toolTipConfig);
    return;
  }
  this$static.showingError = true;
  if (!this$static.errorIcon) {
    this$static.errorIcon = new WidgetComponent_0(new Image_1(($clinit_SideErrorHandler_SideErrorResources_default_InlineClientBundleGenerator$errorIconInitializer() , errorIcon_0)));
    $setHideMode(this$static.errorIcon, ($clinit_Style$HideMode() , VISIBILITY));
    $hide(this$static.errorIcon);
    p = $getParentElement($getElement_0(this$static.target_0));
    $appendChild(p, this$static.errorIcon.element);
    $setDisplayed(this$static.errorIcon.element, true);
    $makePositionable(this$static.errorIcon.element, true);
  }
   else if (!$isConnected(this$static.errorIcon.element)) {
    $setHideMode(this$static.errorIcon, ($clinit_Style$HideMode() , VISIBILITY));
    $hide(this$static.errorIcon);
    p = $getParentElement($getElement_0(this$static.target_0));
    $appendChild(p, this$static.errorIcon.element);
  }
  !this$static.tip && (this$static.tip = new ToolTip_0(this$static.errorIcon, new ErrorTipDefaultAppearance_0));
  $isAttached(this$static.errorIcon) || doAttach(this$static.errorIcon);
  w = $getStyleSize($getElement_0(this$static.target_0), true).width_0;
  if (w != -1) {
    this$static.originalWidth = w;
    $setSize(this$static.target_0, w - 18 + 'px', 'undefined');
  }
  $setVisibility(this$static.errorIcon.element, false);
  $show(this$static.errorIcon);
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_4), new SideErrorHandler$2_0(this$static));
  $scheduleDeferred(INSTANCE_4, new SideErrorHandler$1_0(this$static));
  $setBodyText(this$static.tip.toolTipConfig, error);
  $update_2(this$static.tip, this$static.tip.toolTipConfig);
}

function SideErrorHandler$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1274, 1, {}, SideErrorHandler$1_0);
_.execute = function execute_30(){
  if ($isAttached(this.this$0.errorIcon)) {
    $show(this.this$0.errorIcon);
    $alignErrorIcon(this.this$0);
    $setVisibility(this.this$0.errorIcon.element, true);
  }
}
;
_.this$0 = null;
function SideErrorHandler$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1275, 1, {}, SideErrorHandler$2_0);
_.execute = function execute_31(){
  var input;
  input = $getElement_0(this.this$0.target_0);
  $alignTo(this.this$0.errorIcon.element, input, new Style$AnchorAlignment_1(($clinit_Style$Anchor() , TOP_LEFT), TOP_RIGHT, false), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [2, 3]));
}
;
_.this$0 = null;
var errorIcon_0 = null;
function $clinit_SideErrorHandler_SideErrorResources_default_InlineClientBundleGenerator$errorIconInitializer(){
  $clinit_SideErrorHandler_SideErrorResources_default_InlineClientBundleGenerator$errorIconInitializer = nullMethod;
  errorIcon_0 = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACEElEQVR42rWTy08TURTG+ZuMcaULNrqwPoIgVjrpA7CClTYiSKQV2o7QUWmg0lQ0pi2PWhITfICJiY/ERt0QIlETXUAstZS209phpnYcYz5mbjIzkhDChi85u/v7vnPOvbeubj/0L7UAadyN2pADVboT1eA1iG+eYk+wJB8u+7sgJEIQ52Ok+MQY8p6LKHk7djcRhy6Di9D4+3oW4tQt/GYukRInGUivkmBDA8heMe5sUrvTg0rET+Cqr5WUKv6GFbzbgj8vEyiM9CN91bTdRHr7DKzXocNeG4RBm2bAXTej0mfGr14K4sIMVlwUinOTugk/0kvmFOMBAqqJqhSw3G0C62oBd9cH9h6Db67/Rin3WyG+iEOg7QRUE1UpYLHrPAoOI/JOM7jkA3wy1usGBTmh9jyGzcF2rVUlUfr+mRgo4EbHOeTszcg5KHAzE1hsOqwb5H2dqESDECZorVUlkXs4Cn4uQcD19rPI2ppQZDzIjd3EUttJ3aAyn8SPbovcxbTWqpKoSgEz1kasmc9gczaKZetppKcj229iVV7KeqAP1SdTWmIpxMh3HyBgmmog8IrHiQ/N9Tu/ha+WY8jQPRAex8HeHsBPuwmZCy0oDHvkxcmw24l3xw/s/hqXWw340taA3Ki8j1gYpWgY2aAfS5QBqcYje/sPmUf3sWgz4P2pQ0idOIiP1FGsxsPYl5+7Bfc5zQa8V7vnAAAAAElFTkSuQmCC')), 16, 16);
}

function $validate_0(this$static, value){
  var errors;
  if (value == null || $equals_3('', value)) {
    errors = new ArrayList_0;
    $add_15(errors, new DefaultEditorError_0((!this$static.messages && (this$static.messages = new EmptyValidator$DefaultEmptyMessages_0) , !instance_4 && (instance_4 = new XMessages__0) , 'This field is required')));
    return errors;
  }
  return null;
}

function EmptyValidator$DefaultEmptyMessages_0(){
}

defineSeed(1280, 1, {}, EmptyValidator$DefaultEmptyMessages_0);
function $bind_4(this$static, store){
  $doDeselect(this$static, new ArrayList_2(this$static.selected), false);
  !!this$static.store && $removeHandler_0(this$static.handlerRegistration_1);
  this$static.store = store;
  if (store) {
    !this$static.handlerRegistration_1 && (this$static.handlerRegistration_1 = new GroupingHandlerRegistration_0);
    $add_10(this$static.handlerRegistration_1, $addStoreAddHandler(store, this$static.handler_0));
    $add_10(this$static.handlerRegistration_1, $addStoreRemoveHandler(store, this$static.handler_0));
    $add_10(this$static.handlerRegistration_1, $addStoreClearHandler(store, this$static.handler_0));
    $add_10(this$static.handlerRegistration_1, $addStoreUpdateHandler(store, this$static.handler_0));
    $add_10(this$static.handlerRegistration_1, $addStoreRecordChangeHandler(store, this$static.handler_0));
  }
}

function $doDeselect(this$static, models, suppressEvent){
  var change, m_0, m$iterator;
  if (this$static.locked)
    return;
  change = false;
  for (m$iterator = models.iterator(); m$iterator.hasNext();) {
    m_0 = m$iterator.next_0();
    if ($remove_17(this$static.selected, m_0)) {
      maskUndefined(this$static.lastSelected) === maskUndefined(m_0) && (this$static.lastSelected = this$static.selected.size_0 > 0?$get_10(this$static.selected, this$static.selected.size_0 - 1):null);
      this$static.onSelectChange(m_0, false);
      change = true;
    }
  }
  !suppressEvent && change && (this$static.mouseDown?(this$static.fireSelectionChangeOnClick = true):$fireEvent_8(this$static, new SelectionChangedEvent_0(this$static.selected)));
}

function $doMultiSelect(this$static, models, keepExisting, suppressEvent){
  var change, index, isListStore, ls, m_0, m$iterator;
  if (this$static.locked)
    return;
  change = false;
  if (!keepExisting && this$static.selected.size_0 > 0) {
    change = true;
    $doDeselect(this$static, new ArrayList_2(this$static.selected), true);
  }
  for (m$iterator = models.iterator(); m$iterator.hasNext();) {
    m_0 = m$iterator.next_0();
    isListStore = false;
    index = -1;
    if (instanceOf(this$static.store, Q$ListStore)) {
      isListStore = true;
      ls = dynamicCast(this$static.store, Q$ListStore);
      index = $indexOf_5(ls.visibleItems, m_0, 0);
    }
    if (keepExisting && this$static.isSelected(m_0) || isListStore && index == -1) {
      continue;
    }
    change = true;
    this$static.lastSelected = m_0;
    $add_15(this$static.selected, m_0);
    $setLastFocused(this$static, this$static.lastSelected);
    this$static.onSelectChange(m_0, true);
    fire_4(this$static, m_0);
  }
  change && !suppressEvent && (this$static.mouseDown?(this$static.fireSelectionChangeOnClick = true):$fireEvent_8(this$static, new SelectionChangedEvent_0(this$static.selected)));
}

function $doSelect(this$static, models, keepExisting, suppressEvent){
  var m_0;
  if (this$static.locked)
    return;
  if (this$static.selectionMode == 0) {
    m_0 = models.size_1() > 0?models.get_2(0):null;
    m_0 != null && $doSingleSelect(this$static, m_0, suppressEvent);
  }
   else {
    $doMultiSelect(this$static, models, keepExisting, suppressEvent);
  }
}

function $doSingleSelect(this$static, model, suppressEvent){
  var change, index, ls, parent_0;
  if (this$static.locked)
    return;
  index = -1;
  if (instanceOf(this$static.store, Q$ListStore)) {
    ls = dynamicCast(this$static.store, Q$ListStore);
    index = $indexOf_5(ls.visibleItems, model, 0);
  }
  if (instanceOf(this$static.store, Q$TreeStore)) {
    ls = dynamicCast(this$static.store, Q$TreeStore);
    index = (parent_0 = $getParent(ls, model) , !parent_0?$indexOf_6($unwrap_0($getChildren_0(ls.roots)), model):$indexOf_6($unwrap_0($getChildren_0(dynamicCast($get_7(ls.modelMap, ls.keyProvider.getKey(parent_0)), Q$TreeStore$TreeModel))), model));
  }
  if (index == -1 || this$static.isSelected(model)) {
    return;
  }
  change = false;
  if (this$static.selected.size_0 > 0 && !this$static.isSelected(model)) {
    $doDeselect(this$static, ($clinit_Collections() , new Collections$SingletonList_0(this$static.lastSelected)), true);
    change = true;
  }
  this$static.selected.size_0 == 0 && (change = true);
  $add_15(this$static.selected, model);
  this$static.lastSelected = model;
  this$static.onSelectChange(model, true);
  $setLastFocused(this$static, this$static.lastSelected);
  suppressEvent || fire_4(this$static, model);
  change && !suppressEvent && (this$static.mouseDown?(this$static.fireSelectionChangeOnClick = true):$fireEvent_8(this$static, new SelectionChangedEvent_0(this$static.selected)));
}

function $fireEvent_8(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_4(this$static.handlerManager, event_0);
}

function $isSelected(this$static, item){
  var m_0, m$iterator;
  for (m$iterator = new AbstractList$IteratorImpl_0(this$static.selected); m$iterator.i < m$iterator.this$0_0.size_1();) {
    m_0 = $next_3(m$iterator);
    if ($hasMatchingKey(this$static.store, item, m_0)) {
      return true;
    }
  }
  return false;
}

function $select_2(this$static, item){
  $doSelect(this$static, ($clinit_Collections() , new Collections$SingletonList_0(item)), true, false);
}

function $setLastFocused(this$static, lastFocused){
  var lF;
  lF = this$static.lastFocused;
  this$static.lastFocused = lastFocused;
  this$static.onLastFocusChanged(lF, lastFocused);
}

function AbstractStoreSelectionModel_0(){
  this.selected = new ArrayList_0;
  this.handler_0 = new AbstractStoreSelectionModel$Handler_0(this);
  this.handlerRegistration_1 = new GroupingHandlerRegistration_0;
}

defineSeed(1284, 1, makeCastMap([Q$HasHandlers, Q$StoreSelectionModel]));
_.fireEvent = function fireEvent_9(event_0){
  $fireEvent_8(this, event_0);
}
;
_.isSelected = function isSelected(item){
  return $isSelected(this, item);
}
;
_.onLastFocusChanged = function onLastFocusChanged(oldFocused, newFocused){
}
;
_.fireSelectionChangeOnClick = false;
_.handlerManager = null;
_.lastFocused = null;
_.lastSelected = null;
_.locked = false;
_.mouseDown = false;
_.selectionMode = 2;
_.store = null;
defineSeed(1283, 1284, makeCastMap([Q$HasHandlers, Q$StoreSelectionModel]));
_.grid = null;
_.handlerRegistration_0 = null;
_.listStore = null;
defineSeed(1282, 1283, makeCastMap([Q$HasHandlers, Q$StoreSelectionModel]));
_.config = null;
function $getColumn(this$static, colIndex){
  return colIndex >= 0 && colIndex < this$static.configs.coll.size_1()?dynamicCast($get_12(this$static.configs, colIndex), Q$ColumnConfig):null;
}

defineSeed(1310, 1, makeCastMap([Q$EventHandler, Q$StoreAddEvent$StoreAddHandler, Q$StoreDataChangeEvent$StoreDataChangeHandler, Q$StoreFilterEvent$StoreFilterHandler, Q$StoreRecordChangeEvent$StoreRecordChangeHandler, Q$StoreRemoveEvent$StoreRemoveHandler, Q$StoreSortEvent$StoreSortHandler, Q$GridView$10]));
_.this$0 = null;
function $getFilter(this$static, path){
  return dynamicCast(this$static.filters.get_1(path), Q$Filter);
}

function $onStateChange(this$static, filter){
  !!this$static.checkFilterItem && this$static.checkFilterItem.attached && $setChecked_0(this$static.checkFilterItem, filter.active, true);
  $delay(this$static.deferredUpdate, 500);
  $updateColumnHeadings(this$static);
}

function $updateColumnHeadings(this$static){
  var cols, config, f_0, h_0, header, i;
  cols = this$static.grid.cm.configs.coll.size_1();
  for (i = 0; i < cols; ++i) {
    config = $getColumn(this$static.grid.cm, i);
    if (!config.hidden) {
      header = this$static.grid.view.header;
      if (header) {
        h_0 = i > -1 && i < header.heads.size_0?dynamicCast($get_10(header.heads, i), Q$ColumnHeader$Head):null;
        if (!!h_0 && h_0.eventsToSink == -1) {
          f_0 = $getFilter(this$static, config.valueProvider.getPath());
          !!f_0 && $setClassName_0(h_0.element, 'x-filtered-column', f_0.active);
        }
      }
    }
  }
}

function $select_3(this$static, item){
  var f_0, f$iterator, val, value, v;
  for (f$iterator = $iterator_0($values(this$static.this$0.filters)); f$iterator.val$outerIter.hasNext();) {
    f_0 = dynamicCast($next_5(f$iterator), Q$Filter);
    if ($getCurrentValue(f_0.field) != null && $getCurrentValue(f_0.field).length > 0 && f_0.active && !(val = dynamicCast(f_0.valueProvider.getValue(item), Q$String) , value = $getCurrentValue(f_0.field) , v = value == null?'':value , v.length == 0 && (val == null || val.length == 0) || val != null && $indexOf_4(val.toLowerCase(), v.toLowerCase()) > -1)) {
      return false;
    }
  }
  return true;
}

function $activate_0(this$static){
  if (this$static.disabled) {
    return;
  }
  $addClassName(this$static.element, 'GN1NA3IBNUB');
  $fireEvent_3(this$static, new ActivateEvent_0(this$static));
  instanceOf(this$static.parent_0, Q$ActivateEvent$HasActivateHandlers) && this$static.parent_0.fireEvent(new ActivateEvent_0(this$static));
}

function $deactivate(this$static){
  $removeClassName(this$static.element, 'GN1NA3IBNUB');
  $fireEvent_3(this$static, new DeactivateEvent_0(this$static));
  instanceOf(this$static.parent_0, Q$DeactivateEvent$HasDeactivateHandlers) && this$static.parent_0.fireEvent(new DeactivateEvent_0(this$static));
}

function $onClick_3(this$static, be){
  be.stopPropagation();
  be.preventDefault();
  instanceOf(this$static.parent_0, Q$HasBeforeSelectionHandlers) && fire_1(dynamicCast(this$static.parent_0, Q$HasBeforeSelectionHandlers));
  if (!this$static.disabled) {
    instanceOf(this$static.parent_0, Q$HasSelectionHandlers) && fire_4(dynamicCast(this$static.parent_0, Q$HasSelectionHandlers), this$static);
    fire_4(this$static, this$static);
    this$static.hideOnClick && instanceOf(this$static.parent_0, Q$Menu) && $hide_4(dynamicCast(this$static.parent_0, Q$Menu), true);
  }
}

function Item_0(){
  Component_0.call(this);
}

defineSeed(1344, 96, makeCastMap([Q$HasAttachHandlers, Q$HasBeforeSelectionHandlers, Q$HasResizeHandlers, Q$HasSelectionHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$ActivateEvent$HasActivateHandlers, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DeactivateEvent$HasDeactivateHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers, Q$Item]));
_.activate = function activate_0(autoExpand){
  $activate_0(this);
}
;
_.deactivate = function deactivate(){
  $deactivate(this);
}
;
_.expandMenu = function expandMenu(autoActivate){
}
;
_.onAttach = function onAttach_7(){
  var li;
  $onAttach_0(this);
  if (this.disabled) {
    li = $getParentElement(this.element);
    !!li && $addClassName(li, this.disabledStyle);
  }
}
;
_.onClick = function onClick(be){
  $onClick_3(this, be);
}
;
_.onDisable = function onDisable_6(){
  var li;
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, true);
  li = $getParentElement(this.element);
  !!li && $addClassName(li, this.disabledStyle);
}
;
_.onEnable = function onEnable_6(){
  var li;
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, false);
  li = $getParentElement(this.element);
  !!li && $removeClassName(li, this.disabledStyle);
}
;
_.shouldDeactivate = function shouldDeactivate(ce){
  return true;
}
;
_.canActivate = false;
_.hideOnClick = true;
function $expandMenu(this$static){
  if (!this$static.disabled && !!this$static.subMenu) {
    this$static.subMenu.focusOnShow = true;
    $show_4(this$static.subMenu, this$static.element, new Style$AnchorAlignment_1(($clinit_Style$Anchor() , TOP_LEFT), TOP_RIGHT, true), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 0]));
  }
}

function $setIcon_5(this$static, icon){
  $setIcon_0(this$static.appearance, this$static.element, icon);
}

function $setSubMenu(this$static, menu){
  this$static.subMenu = menu;
  if (!menu) {
    $onRemoveSubMenu(this$static.appearance, this$static.element);
    this$static.element.setAttribute('aria-haspopup', 'false');
  }
   else {
    menu.parentItem = this$static;
    $onAddSubMenu(this$static.appearance, this$static.element);
    this$static.element.setAttribute('aria-haspopup', 'true');
  }
}

function $setText_4(this$static, text){
  $setText_1(this$static.appearance, this$static.element, text);
}

function MenuItem_0(){
  $clinit_Component();
  MenuItem_1.call(this, new BlueMenuItemAppearance_0);
}

function MenuItem_1(appearance){
  MenuItem_2.call(this, appearance, new BlueItemAppearance_0);
}

function MenuItem_2(menuItemAppearance){
  var markupBuilder;
  Item_0.call(this);
  this.appearance = menuItemAppearance;
  this.canActivate = true;
  markupBuilder = new SafeHtmlBuilder_0;
  $render_8(this.appearance, markupBuilder);
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(markupBuilder.sb.impl.string)).html)));
}

function MenuItem_3(text, icon){
  MenuItem_0.call(this);
  $setText_4(this, text != null && $equals_3(text, '&#160;')?'':text);
  $setIcon_0(this.appearance, this.element, icon);
}

defineSeed(1343, 1344, makeCastMap([Q$HasAttachHandlers, Q$HasBeforeSelectionHandlers, Q$HasResizeHandlers, Q$HasSelectionHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasText, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$ActivateEvent$HasActivateHandlers, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DeactivateEvent$HasDeactivateHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers, Q$Item, Q$MenuItem]), MenuItem_0, MenuItem_3);
_.activate = function activate_1(autoExpand){
  $activate_0(this);
  autoExpand && !!this.subMenu && $expandMenu(this);
}
;
_.deactivate = function deactivate_0(){
  $deactivate(this);
  !!this.subMenu && this.subMenu.showing && $hide_4(this.subMenu, false);
}
;
_.doAttachChildren = function doAttachChildren_11(){
  doAttach(this.widget);
}
;
_.doDetachChildren = function doDetachChildren_11(){
  doDetach(this.widget);
}
;
_.expandMenu = function expandMenu_0(autoActivate){
  if (!this.disabled && !!this.subMenu) {
    if (!this.subMenu.showing) {
      $expandMenu(this);
      $tryActivate(this.subMenu, 0, 1);
    }
  }
}
;
_.shouldDeactivate = function shouldDeactivate_0(ce){
  var l_0, rec, xy;
  if (!!this.subMenu && this.subMenu.showing) {
    xy = $getXY(ce);
    $setX(xy, xy.x + getBodyScrollLeft());
    $setY(xy, xy.y + getBodyScrollTop());
    rec = $getBounds(this.subMenu.element, false);
    if (this.subMenu.layer_0 , undefined) {
      l_0 = (this.subMenu.layer_0 , undefined);
      if (l_0.shimEnabled && l_0.shadowEnabled) {
        return !$contains_0(rec, xy.x, xy.y) && !$contains_1($getBounds($getShadow(l_0), false), xy) && !$contains_1($getBounds($getShim(l_0), false), xy);
      }
       else if (l_0.shadowEnabled) {
        return !$contains_0(rec, xy.x, xy.y) && !$contains_1($getBounds($getShadow(l_0), false), xy);
      }
       else if (l_0.shimEnabled) {
        return !$contains_0(rec, xy.x, xy.y) && !$contains_1($getBounds($getShim(l_0), false), xy);
      }
    }
    return !$contains_0(rec, xy.x, xy.y);
  }
  return true;
}
;
_.appearance = null;
_.subMenu = null;
_.widget = null;
function $setChecked_0(this$static, state, suppressEvent){
  if (suppressEvent || $fireCancellableEvent(this$static, new BeforeCheckChangeEvent_0)) {
    $setIcon_5(this$static, state?($clinit_BlueCheckMenuItemAppearance_BlueCheckMenuItemResources_opera_opera_default_InlineClientBundleGenerator$checkedInitializer() , checked_0):($clinit_BlueCheckMenuItemAppearance_BlueCheckMenuItemResources_opera_opera_default_InlineClientBundleGenerator$uncheckedInitializer() , unchecked));
    $applyChecked(this$static.element, state);
    this$static.checked_0 = state;
    suppressEvent || $fireEvent_3(this$static, new CheckChangeEvent_0(this$static));
  }
}

function $constrainScroll(this$static, y){
  var full, i, max, nodes;
  this$static.ul.style['height'] = 'auto';
  full = this$static.ul.offsetHeight || 0;
  max = ($clinit_XDOM() , getViewportHeight()) - y;
  if (full > max && max > 0) {
    this$static.activeMax = max - 10 - 16;
    $setHeight_0(this$static.ul, this$static.activeMax, true);
    $createScrollers(this$static);
  }
   else {
    $setHeight_0(this$static.ul, full, true);
    nodes = $getScrollers(this$static.element);
    for (i = 0; i < nodes.length; ++i) {
      nodes[i].style['display'] = ($clinit_Style$Display() , 'none');
    }
  }
  this$static.ul.scrollTop = 0;
}

function $createScrollers(this$static){
  var bottomScroller, cr, handler, topScroller;
  if ($hasScrollers(this$static.element)) {
    return;
  }
  handler = new Menu$3_0(this$static);
  topScroller = $getTopScroller(this$static.element);
  cr = new ClickRepeater_0(this$static, topScroller);
  $addHandler_1(!cr.eventBus?(cr.eventBus = new SimpleEventBus_3):cr.eventBus, (!TYPE_24 && (TYPE_24 = new GwtEvent$Type_0) , TYPE_24), handler);
  bottomScroller = $getBottomScroller(this$static.element);
  cr = new ClickRepeater_0(this$static, bottomScroller);
  $addHandler_1(!cr.eventBus?(cr.eventBus = new SimpleEventBus_3):cr.eventBus, (!TYPE_24 && (TYPE_24 = new GwtEvent$Type_0) , TYPE_24), handler);
}

function $deactivateActiveItem(this$static){
  if (this$static.activeItem) {
    this$static.activeItem.deactivate();
    this$static.activeItem = null;
  }
}

function $doAutoSize(this$static){
  var w, width;
  w = this$static.element.style['width'];
  if (this$static.showing && $equals_3('', w)) {
    width = (this$static.ul.offsetWidth || 0) + $getFrameWidth(this$static.element, initValues(_3Lcom_sencha_gxt_core_client_Style$Side_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$Side, [($clinit_Style$Side() , LEFT_3), RIGHT_3]));
    $setWidth_0(this$static.element, width > 120?width:120, true);
  }
}

function $hide_4(this$static, deep){
  if (this$static.showing) {
    if ($fireCancellableEvent(this$static, new BeforeHideEvent_0)) {
      if (this$static.activeItem) {
        this$static.activeItem.deactivate();
        this$static.activeItem = null;
      }
      $setStyleName_0(this$static, this$static.hideMode.value_0, true);
      !!this$static.layer_0 && $hideUnders(this$static.layer_0);
      $deactivateActiveItem(this$static);
      $remove_1(($clinit_RootPanel() , get_5()), this$static);
      $remove_10(this$static.eventPreview);
      this$static.showing = false;
      this$static.hidden = true;
      $fireEvent_3(this$static, new HideEvent_0);
      deep && !!this$static.parentItem && instanceOf(this$static.parentItem.parent_0, Q$Menu) && $hide_4(dynamicCast(this$static.parentItem.parent_0, Q$Menu), true);
    }
  }
}

function $onAutoHide(this$static, pe){
  var active, menuItem, target, type;
  type = $eventGetTypeInt(pe.nativeEvent.type);
  switch (type) {
    case 4:
    case 131072:
    case 16384:
    case 256:
      target = pe.nativeEvent.target;
      if ($findParent(target, '.x-ignore', 10)) {
        return false;
      }

      active = this$static.activeItem?this$static.activeItem:this$static.parentItem;
      while (active) {
        if (instanceOf(active, Q$MenuItem)) {
          menuItem = dynamicCast(active, Q$MenuItem);
          if ($isOrHasChild(menuItem.parent_0.getElement(), target)) {
            return false;
          }
          if (!!menuItem.subMenu && menuItem.subMenu.showing) {
            if ($isOrHasChild(menuItem.subMenu.element, target)) {
              return false;
            }
            active = menuItem.subMenu.activeItem;
          }
           else {
            active = null;
          }
        }
         else {
          active = null;
        }
      }

      if (!$isOrHasChild(this$static.element, target)) {
        $hide_4(this$static, true);
        return true;
      }

  }
  return false;
}

function $onEscape(this$static, pe){
  (pe.nativeEvent.keyCode || 0) == 27 && $hide_4(this$static, false);
}

function $onKeyDown_1(this$static, evt){
  evt.stopPropagation();
  evt.preventDefault();
  !$tryActivate(this$static, $getWidgetIndex(this$static, this$static.activeItem) + 1, 1) && $tryActivate(this$static, 0, 1);
}

function $onKeyEnter(this$static, evt){
  if (this$static.activeItem) {
    evt.stopPropagation();
    this$static.activeItem.onClick(evt);
  }
}

function $onKeyLeft(this$static){
  var menu;
  $hide_4(this$static, false);
  if (!!this$static.parentItem && instanceOf(this$static.parentItem.parent_0, Q$Menu)) {
    dynamicCast(this$static.parentItem.parent_0, Q$Menu).element.focus();
  }
   else {
    menu = this$static;
    while (!!menu.parentItem && instanceOf(menu.parentItem.parent_0, Q$Menu)) {
      menu = dynamicCast(menu.parentItem.parent_0, Q$Menu);
    }
    $fireEvent_3(menu, new MinimizeEvent_0);
  }
}

function $onKeyRight(this$static){
  var menu, mi;
  !!this$static.activeItem && this$static.activeItem.expandMenu(true);
  if (instanceOf(this$static.activeItem, Q$MenuItem)) {
    mi = dynamicCast(this$static.activeItem, Q$MenuItem);
    if (!!mi.subMenu && mi.subMenu.showing) {
      return;
    }
  }
  menu = this$static;
  while (!!menu.parentItem && instanceOf(menu.parentItem.parent_0, Q$Menu)) {
    menu = dynamicCast(menu.parentItem.parent_0, Q$Menu);
  }
  $fireEvent_3(menu, new MaximizeEvent_0);
}

function $onKeyUp_0(this$static, evt){
  evt.stopPropagation();
  evt.preventDefault();
  !$tryActivate(this$static, $getWidgetIndex(this$static, this$static.activeItem) - 1, -1) && $tryActivate(this$static, this$static.children_0.size_0 - 1, -1);
}

function $onMouseMove_1(this$static, ce){
  var c, item;
  c = $findWidget(this$static, ce.target);
  if (!!c && instanceOf(c, Q$Item)) {
    item = dynamicCast(c, Q$Item);
    this$static.activeItem != item && item.canActivate && !item.disabled && $setActiveItem(this$static, item, true);
  }
}

function $onMouseOver_0(this$static, ce){
  var c, from, item;
  from = ce.relatedTarget;
  if (!from || is_1(from) && !$isOrHasChild(this$static.element, from)) {
    c = $findWidget(this$static, ce.target);
    if (!!c && instanceOf(c, Q$Item)) {
      item = dynamicCast(c, Q$Item);
      this$static.activeItem != item && item.canActivate && !item.disabled && $setActiveItem(this$static, item, true);
    }
  }
}

function $onScroll(this$static, ce){
  var target, top_0;
  target = dynamicCast(ce.source, Q$ClickRepeater).el;
  top_0 = $getTopScroller(this$static.element) == target;
  $setScrollTop(this$static.ul, (this$static.ul.scrollTop || 0) + 24 * (top_0?-1:1));
  (top_0?(this$static.ul.scrollTop || 0) <= 0:(this$static.ul.scrollTop || 0) + this$static.activeMax >= $getPropertyInt(this$static.ul, 'scrollHeight')) && $removeClassName_0(target, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['GN1NA3IBAVB', 'GN1NA3IBGVB']));
}

function $scrollMenu(this$static, top_0){
  $setScrollTop(this$static.ul, (this$static.ul.scrollTop || 0) + 24 * (top_0?-1:1));
}

function $setActiveItem(this$static, widget, autoExpand){
  if (!widget) {
    $deactivateActiveItem(this$static);
    return;
  }
  if (widget) {
    if (widget != this$static.activeItem) {
      $deactivateActiveItem(this$static);
      this$static.activeItem = widget;
      widget.activate(autoExpand);
      $scrollIntoView(widget.element, this$static.ul, null);
      this$static.element.focus();
    }
     else 
      autoExpand && widget.expandMenu(true);
  }
}

function $show_4(this$static, elem, alignment, offsets){
  if (!$fireCancellableEvent(this$static, new BeforeShowEvent_0)) {
    return;
  }
  $add_1(($clinit_RootPanel() , get_5()), this$static);
  $makePositionable(this$static.element, true);
  $onShow(this$static);
  $updateZIndex(this$static.element, 0);
  this$static.showing = true;
  $doAutoSize(this$static);
  $alignTo(this$static.element, elem, alignment, offsets);
  $constrainScroll(this$static, $getAbsoluteTop(this$static.element));
  $show_0(this$static.element);
  $add_9(this$static.eventPreview);
  this$static.focusOnShow && (this$static.element.focus() , undefined);
  $fireEvent_3(this$static, new ShowEvent_0);
}

function $tryActivate(this$static, start, step){
  var i, item, len, w;
  for (i = start , len = this$static.children_0.size_0; i >= 0 && i < len; i += step) {
    w = $get_2(this$static.children_0, i);
    if (instanceOf(w, Q$Item)) {
      item = dynamicCast(w, Q$Item);
      if (item.canActivate && !item.disabled) {
        $setActiveItem(this$static, item, false);
        return item;
      }
    }
  }
  return null;
}

function Menu_0(){
  $clinit_Component();
  Menu_1.call(this, new BlueMenuAppearance_0);
}

function Menu_1(){
  var builder;
  Container_0.call(this);
  builder = new SafeHtmlBuilder_0;
  $append_5(builder, $template_3((!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBKK')));
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(builder.sb.impl.string)).html)));
  $makePositionable(this.element, true);
  this.ul = $selectNode(this.element, '.GN1NA3IBBVB');
  this.monitorWindowResize = true;
  this.shim = true;
  this.shadow = true;
  this.deferHeight = true;
  this.eventPreview = new Menu$1_0(this);
  $add_7(this.eventPreview.ignoreList, this.element);
  this.element.tabIndex = 0;
  this.element.setAttribute('hideFocus', 'true');
  $addClassName(this.element, (!instance_0 && (instance_0 = new CommonStyles_0) , 'GN1NA3IBKK'));
  new Menu$2_0(this);
  this.eventsToSink == -1?sinkEvents_0(this.element, 125 | (this.element.__eventBits || 0)):(this.eventsToSink |= 125);
}

defineSeed(1345, 1192, makeCastMap([Q$HasAttachHandlers, Q$HasBeforeSelectionHandlers, Q$HasResizeHandlers, Q$HasSelectionHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$HasWidgets, Q$IndexedPanel, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$Container, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers, Q$Menu]), Menu_0);
_.doPhysicalAttach = function doPhysicalAttach_0(child, beforeIndex){
  var c, div, needsIndent;
  needsIndent = instanceOf(child, Q$Field) || instanceOf(child, Q$ContentPanel);
  div = $createItem(child.getElement().id, needsIndent);
  $appendChild(div, child.getElement());
  if (instanceOf(child, Q$Component)) {
    c = dynamicCast(child, Q$Component);
    !c.disabled || c.disable_0();
  }
  $insertChild_0(this.ul, div, beforeIndex);
}
;
_.doPhysicalDetach = function doPhysicalDetach_0(child){
  var parentElement;
  parentElement = $getParentElement(child.getElement());
  !!parentElement && $removeFromParent_0(parentElement);
  $removeFromParent_0(child.getElement());
}
;
_.getContainerTarget = function getContainerTarget_5(){
  return this.ul;
}
;
_.hide = function hide_4(){
  $hide_4(this, false);
}
;
_.isVisible_0 = function isVisible_1(){
  return this.showing;
}
;
_.onAfterFirstAttach = function onAfterFirstAttach_8(){
  $onAfterFirstAttach(this);
  this.plain && $addClassName(this.element, 'GN1NA3IBKVB');
}
;
_.onBrowserEvent = function onBrowserEvent_21(event_0){
  var item, to;
  $onBrowserEvent_0(this, event_0);
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      item = $findWidget(this, event_0.target);
      !!item && instanceOf(item, Q$Item) && dynamicCast(item, Q$Item).onClick(event_0);
      break;
    case 64:
      $onMouseMove_1(this, event_0);
      break;
    case 32:
      to = event_0.relatedTarget;
      !!this.activeItem && (!to || is_1(to) && !$isOrHasChild(this.activeItem.element, to)) && this.activeItem.shouldDeactivate(event_0) && $deactivateActiveItem(this);
      break;
    case 16:
      $onMouseOver_0(this, event_0);
      break;
    case 131072:
      {
        $scrollMenu(this, (event_0.detail * 4 || 0) < 0);
      }

  }
}
;
_.onHide_0 = function onHide_6(){
  $setStyleName_0(this, this.hideMode.value_0, true);
  !!this.layer_0 && $hideUnders(this.layer_0);
  $deactivateActiveItem(this);
}
;
_.onWidgetHide = function onWidgetHide_0(widget){
  var p;
  p = $getParentElement(widget.getElement_0());
  widget?$addClassName(p, widget.hideMode.value_0):$addClassName(p, ($clinit_Style$HideMode() , DISPLAY).value_0);
}
;
_.onWidgetShow = function onWidgetShow_0(widget){
  var p;
  p = $getParentElement(widget.getElement_0());
  widget?$removeClassName(p, widget.hideMode.value_0):$removeClassName(p, ($clinit_Style$HideMode() , DISPLAY).value_0);
}
;
_.activeItem = null;
_.activeMax = 0;
_.eventPreview = null;
_.focusOnShow = true;
_.parentItem = null;
_.plain = false;
_.showing = false;
_.ul = null;
function Menu$1_0(this$0){
  this.this$0 = this$0;
  BaseEventPreview_0.call(this);
}

defineSeed(1346, 574, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), Menu$1_0);
_.onAutoHide = function onAutoHide_1(pe){
  return $onAutoHide(this.this$0, pe);
}
;
_.onPreviewKeyPress = function onPreviewKeyPress_1(pe){
  $onEscape(this.this$0, pe);
}
;
_.this$0 = null;
function Menu$2_0(this$0){
  $clinit_KeyNav();
  this.this$0 = this$0;
  KeyNav_0.call(this);
}

defineSeed(1347, 583, {}, Menu$2_0);
_.onDown = function onDown_1(evt){
  $onKeyDown_1(this.this$0, evt);
}
;
_.onEnter = function onEnter_0(evt){
  $onKeyEnter(this.this$0, evt);
}
;
_.onLeft = function onLeft_1(evt){
  $onKeyLeft(this.this$0);
}
;
_.onRight = function onRight_1(evt){
  $onKeyRight(this.this$0);
}
;
_.onUp = function onUp_1(evt){
  $onKeyUp_0(this.this$0, evt);
}
;
_.this$0 = null;
function Menu$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1348, 1, makeCastMap([Q$EventHandler, Q$ClickRepeaterEvent$ClickRepeaterHandler]), Menu$3_0);
_.this$0 = null;
function SeparatorMenuItem_0(){
  $clinit_Component();
  SeparatorMenuItem_1.call(this, new BlueSeparatorMenuItemAppearance_0);
}

function SeparatorMenuItem_1(){
  var item, markupBuilder, sb;
  Item_0.call(this, new BlueItemAppearance_0);
  this.hideOnClick = false;
  markupBuilder = new SafeHtmlBuilder_0;
  $append_5(markupBuilder, (sb = new StringBuilder_0 , sb.impl.string += '<span class="' , $append_10(sb, htmlEscape('GN1NA3IBDWB')) , sb.impl.string += '">&#160;<\/span>\n' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)));
  item = ($clinit_XDOM() , create_3((new SafeHtmlString_0(markupBuilder.sb.impl.string)).html));
  this.element = item;
}

defineSeed(1349, 1344, makeCastMap([Q$HasAttachHandlers, Q$HasBeforeSelectionHandlers, Q$HasResizeHandlers, Q$HasSelectionHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$ActivateEvent$HasActivateHandlers, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DeactivateEvent$HasDeactivateHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers, Q$Item, Q$SeparatorMenuItem]), SeparatorMenuItem_0);
function AbstractStoreSelectionModel$Handler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1350, 1, makeCastMap([Q$EventHandler, Q$StoreAddEvent$StoreAddHandler, Q$StoreRecordChangeEvent$StoreRecordChangeHandler, Q$StoreRemoveEvent$StoreRemoveHandler]), AbstractStoreSelectionModel$Handler_0);
_.this$0 = null;
function $dispatch_17(this$static, handler){
  $onSelectionChanged(handler, this$static);
}

function SelectionChangedEvent_0(selection){
  this.selection = selection;
}

defineSeed(1352, 5, {}, SelectionChangedEvent_0);
_.dispatch = function dispatch_97(handler){
  $dispatch_17(this, dynamicCast(handler, Q$SelectionChangedEvent$SelectionChangedHandler));
}
;
_.getAssociatedType = function getAssociatedType_98(){
  return TYPE_103;
}
;
_.getSource = function getSource_44(){
  return dynamicCast(this.source, Q$StoreSelectionModel);
}
;
_.selection = null;
var TYPE_103 = null;
function $doAutoWidth(this$static){
  if (this$static.width_0 == null) {
    $setPixelSize_0(this$static, this$static.appearance.autoWidth(this$static.element, this$static.minWidth, this$static.maxWidth), -2147483648);
    this$static.width_0 = null;
  }
}

function $setClosable(this$static, closable){
  this$static.closable = closable;
  $removeChildren($getToolsElement(this$static.appearance, this$static.element));
  if (closable) {
    if (!this$static.close_0) {
      this$static.close_0 = new ToolButton_0(($clinit_ToolButton() , CLOSE_0));
      $addHandler(this$static.close_0, new Tip$1_0(this$static), (!TYPE_93 && (TYPE_93 = new GwtEvent$Type_0) , TYPE_93));
      this$static.attached && doAttach(this$static.close_0);
    }
    $appendChild($getToolsElement(this$static.appearance, this$static.element), this$static.close_0.element);
  }
}

function $showAt(this$static, x, y){
  var p;
  if (this$static.attached && this$static.closable) {
    return;
  }
  $setVisibility(this$static.element, false);
  this$static.attached || $add_1(($clinit_RootPanel() , get_5()), this$static);
  $show(this$static);
  $updateContent_0(this$static);
  $makePositionable(this$static.element, true);
  $updateZIndex(this$static.element, 0);
  $doAutoWidth(this$static);
  p = new Point_0(x, y);
  this$static.constrainPosition && (p = $adjustForConstraints(this$static.element, p));
  $setPagePosition(this$static, p.x + getBodyScrollLeft(), p.y + getBodyScrollTop());
  $setVisibility(this$static.element, true);
  !!this$static.layer_0 && $sync_0(this$static.layer_0, true);
}

function $showAt_0(this$static, point){
  $showAt_1(this$static, point.x, point.y);
}

function Tip_0(appearance){
  var sb;
  Component_0.call(this);
  this.appearance = appearance;
  sb = new SafeHtmlBuilder_0;
  appearance.render_0(sb);
  $setElement(this, ($clinit_XDOM() , create_3((new SafeHtmlString_0(sb.sb.impl.string)).html)));
  this.shim = true;
  ($clinit_GXT() , true) && (this.shadow = true);
  $makePositionable(this.element, true);
}

defineSeed(1355, 96, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]));
_.doAttachChildren = function doAttachChildren_12(){
  doAttach(this.close_0);
}
;
_.doDetachChildren = function doDetachChildren_12(){
  doDetach(this.close_0);
}
;
_.hide = function hide_5(){
  $hide(this);
  this.attached && $remove_1(($clinit_RootPanel() , get_5()), this);
}
;
_.onDisable = function onDisable_7(){
  this.disabledStyle != null && $setStyleName_0(this, this.disabledStyle, true);
  this.hide();
}
;
_.appearance = null;
_.closable = false;
_.close_0 = null;
_.constrainPosition = true;
_.maxWidth = 300;
_.minWidth = 40;
function $$init_5(this$static){
  this$static.targetXY = new Point_0(0, 0);
}

function $clearTimer(this$static, timer){
  if ($equals_3(timer, 'hide')) {
    if (this$static.hideTimer) {
      $cancel_0(this$static.hideTimer);
      this$static.hideTimer = null;
    }
  }
   else if ($equals_3(timer, 'dismiss')) {
    if (this$static.dismissTimer) {
      $cancel_0(this$static.dismissTimer);
      this$static.dismissTimer = null;
    }
  }
   else if ($equals_3(timer, 'show')) {
    if (this$static.showTimer) {
      $cancel_0(this$static.showTimer);
      this$static.showTimer = null;
    }
  }
}

function $clearTimers(this$static){
  $clearTimer(this$static, 'show');
  $clearTimer(this$static, 'dismiss');
  $clearTimer(this$static, 'hide');
}

function $delayHide(this$static){
  if (this$static.attached && !this$static.hideTimer && !this$static.toolTipConfig.closeable) {
    this$static.hideTimer = new ToolTip$2_0(this$static);
    $schedule(this$static.hideTimer, 200);
  }
}

function $delayShow(this$static){
  if (!this$static.attached && !this$static.showTimer) {
    if (lt(sub_0(fromDouble((new Date_1).jsdate.getTime()), fromDouble(this$static.lastActive.jsdate.getTime())), Pfa_longLit)) {
      $show_5(this$static);
    }
     else {
      this$static.showTimer = new ToolTip$3_0(this$static);
      $schedule(this$static.showTimer, 500);
    }
  }
   else 
    this$static.attached && $show_5(this$static);
}

function $getAnchorAlign(this$static){
  switch (this$static.toolTipConfig.anchor.ordinal) {
    case 2:
      return new Style$AnchorAlignment_0(($clinit_Style$Anchor() , TOP_LEFT), BOTTOM_LEFT);
    case 0:
      return new Style$AnchorAlignment_0(($clinit_Style$Anchor() , TOP_LEFT), TOP_RIGHT);
    case 1:
      return new Style$AnchorAlignment_0(($clinit_Style$Anchor() , TOP_RIGHT), TOP_LEFT);
    default:return new Style$AnchorAlignment_0(($clinit_Style$Anchor() , BOTTOM_LEFT), TOP_LEFT);
  }
}

function $getOffsets(this$static){
  var mouseOffset, offsets;
  if (this$static.toolTipConfig.trackMouse) {
    switch (this$static.toolTipConfig.anchor.ordinal) {
      case 2:
        offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-15, 30]);
        break;
      case 3:
        offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-19, -13 - (this$static.element.offsetHeight || 0)]);
        break;
      case 1:
        offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-15 - (this$static.element.offsetWidth || 0), -13]);
        break;
      default:offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [25, -13]);
    }
  }
   else {
    switch (this$static.toolTipConfig.anchor.ordinal) {
      case 2:
        offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 9]);
        break;
      case 3:
        offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, -13]);
        break;
      case 1:
        offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-13, 0]);
        break;
      default:offsets = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [9, 0]);
    }
  }
  mouseOffset = $getMouseOffset(this$static.toolTipConfig);
  if (mouseOffset != null) {
    offsets[0] += mouseOffset[0];
    offsets[1] += mouseOffset[1];
  }
  return offsets;
}

function $getTargetXY(this$static, targetCounter){
  var axy, dh, dw, mouseOffset, offsets, r, scrollX, scrollY, sz, x, xy, y;
  if (this$static.toolTipConfig.anchor) {
    ++targetCounter;
    offsets = $getOffsets(this$static);
    xy = this$static.toolTipConfig.trackMouse?this$static.targetXY:$getAlignToXY_0(this$static.element, this$static.target_0.getElement_0(), $getAnchorAlign(this$static), null);
    dw = ($clinit_XDOM() , getViewportWidth()) - 5;
    dh = getViewportHeight() - 5;
    scrollX = getBodyScrollLeft() + 5;
    scrollY = getBodyScrollTop() + 5;
    axy = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [xy.x + offsets[0], xy.y + offsets[1]]);
    sz = $getSize(this$static.element, false);
    r = $getRegion(this$static.target_0.getElement_0());
    $removeAnchorStyle(this$static.appearance, this$static.anchorEl);
    if (!(this$static.toolTipConfig.anchor == ($clinit_Style$Side() , TOP_0) && sz.height_0 + offsets[1] + scrollY < dh - r.bottom || this$static.toolTipConfig.anchor == RIGHT_3 && sz.width_0 + offsets[0] + scrollX < r.left_0 || this$static.toolTipConfig.anchor == BOTTOM_0 && sz.height_0 + offsets[1] + scrollY < r.top_0 || this$static.toolTipConfig.anchor == LEFT_3 && sz.width_0 + offsets[0] + scrollX < dw - r.right) && targetCounter < 4) {
      if (sz.width_0 + offsets[0] + scrollX < dw - r.right) {
        $setAnchor(this$static.toolTipConfig, LEFT_3);
        return $getTargetXY(this$static, targetCounter);
      }
      if (sz.width_0 + offsets[0] + scrollX < r.left_0) {
        $setAnchor(this$static.toolTipConfig, RIGHT_3);
        return $getTargetXY(this$static, targetCounter);
      }
      if (sz.height_0 + offsets[1] + scrollY < dh - r.bottom) {
        $setAnchor(this$static.toolTipConfig, TOP_0);
        return $getTargetXY(this$static, targetCounter);
      }
      if (sz.height_0 + offsets[1] + scrollY < r.top_0) {
        $setAnchor(this$static.toolTipConfig, BOTTOM_0);
        return $getTargetXY(this$static, targetCounter);
      }
    }
    $applyAnchorDirectionStyle(this$static.appearance, this$static.anchorEl, this$static.toolTipConfig.anchor);
    return new Point_0(axy[0], axy[1]);
  }
   else {
    x = this$static.targetXY.x;
    y = this$static.targetXY.y;
    mouseOffset = $getMouseOffset(this$static.toolTipConfig);
    if (mouseOffset != null) {
      x += mouseOffset[0];
      y += mouseOffset[1];
    }
    return new Point_0(x, y);
  }
}

function $hide_5(this$static){
  $clearTimers(this$static);
  this$static.lastActive = new Date_1;
  $hide(this$static);
  this$static.attached && $remove_1(($clinit_RootPanel() , get_5()), this$static);
}

function $init_3(this$static){
  this$static.toolTipConfig = new ToolTipConfig_0;
  this$static.lastActive = new Date_1;
  this$static.monitorWindowResize = true;
  this$static.anchorEl = $doc.createElement('div');
  $applyAnchorStyle(this$static.appearance, this$static.anchorEl);
  $appendChild(this$static.element, this$static.anchorEl);
}

function $initTarget(this$static, target){
  var handler;
  !!this$static.target_0 && $removeHandler_0(this$static.handlerRegistration);
  this$static.target_0 = target;
  if (target) {
    handler = new ToolTip$Handler_0(this$static);
    this$static.handlerRegistration = new GroupingHandlerRegistration_0;
    $add_10(this$static.handlerRegistration, $addDomHandler(target, handler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_6)));
    $add_10(this$static.handlerRegistration, $addDomHandler(target, handler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_5)));
    $add_10(this$static.handlerRegistration, $addDomHandler(target, handler, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_4)));
    $add_10(this$static.handlerRegistration, $addHandler(target, handler, (!TYPE_76 && (TYPE_76 = new GwtEvent$Type_0) , TYPE_76)));
    $add_10(this$static.handlerRegistration, $addHandler(target, handler, (!TYPE_7 && (TYPE_7 = new GwtEvent$Type_0) , TYPE_7)));
  }
}

function $onMouseMove_2(this$static, event_0){
  var origAnchor, p;
  this$static.targetXY = $getXY(event_0);
  if (this$static.attached && this$static.toolTipConfig.trackMouse) {
    origAnchor = this$static.toolTipConfig.anchor;
    p = $getTargetXY(this$static, 0);
    $setAnchor(this$static.toolTipConfig, origAnchor);
    this$static.constrainPosition && (p = $adjustForConstraints(this$static.element, p));
    $setPagePosition(this$static, p.x, p.y);
  }
}

function $onTargetOut(this$static){
  if (this$static.disabled) {
    return;
  }
  $clearTimer(this$static, 'show');
  this$static.delayHide();
}

function $show_5(this$static){
  var origAnchor, origConstrainPosition;
  if (this$static.disabled)
    return;
  origAnchor = null;
  origConstrainPosition = false;
  if (this$static.toolTipConfig.anchor) {
    origAnchor = this$static.toolTipConfig.anchor;
    origConstrainPosition = this$static.constrainPosition;
    this$static.constrainPosition = false;
  }
  $showAt_0(this$static, $getTargetXY(this$static, 0));
  if (this$static.toolTipConfig.anchor) {
    $show_0(this$static.anchorEl);
    $syncAnchor(this$static);
    this$static.constrainPosition = origConstrainPosition;
    $setAnchor(this$static.toolTipConfig, origAnchor);
  }
   else {
    $hide_0(this$static.anchorEl);
  }
}

function $showAt_1(this$static, x, y){
  if (this$static.disabled)
    return;
  this$static.lastActive = new Date_1;
  $clearTimers(this$static);
  $showAt(this$static, x, y);
  if (this$static.toolTipConfig.anchor) {
    $show_0(this$static.anchorEl);
    $syncAnchor(this$static);
  }
   else {
    $hide_0(this$static.anchorEl);
  }
  if (!this$static.toolTipConfig.closeable) {
    this$static.dismissTimer = new ToolTip$1_0(this$static);
    $schedule(this$static.dismissTimer, 5000);
  }
}

function $syncAnchor(this$static){
  var anchorPos, offset, targetPos;
  switch (this$static.toolTipConfig.anchor.ordinal) {
    case 2:
      anchorPos = ($clinit_Style$Anchor() , BOTTOM);
      targetPos = TOP_LEFT;
      offset = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [20, 2]);
      break;
    case 1:
      anchorPos = ($clinit_Style$Anchor() , LEFT_1);
      targetPos = TOP_RIGHT;
      offset = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-2, 11]);
      break;
    case 3:
      anchorPos = ($clinit_Style$Anchor() , TOP);
      targetPos = BOTTOM_LEFT;
      offset = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [20, -2]);
      break;
    default:anchorPos = ($clinit_Style$Anchor() , RIGHT_1);
      targetPos = TOP_LEFT;
      offset = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [2, 11]);
  }
  $alignTo(this$static.anchorEl, this$static.element, new Style$AnchorAlignment_1(anchorPos, targetPos, false), offset);
}

function $update_2(this$static, config){
  this$static.toolTipConfig = config;
  this$static.minWidth = 40;
  this$static.maxWidth = 300;
  $setClosable(this$static, config.closeable);
  this$static.bodyHtml = config.bodyHtml;
  this$static.titleHtml = config.titleHtml;
  this$static.attached && $updateContent_0(this$static);
  $doAutoWidth(this$static);
}

function $updateContent_0(this$static){
  var textHtml;
  if (this$static.toolTipConfig.renderer != null) {
    this$static.toolTipConfig;
    this$static.toolTipConfig;
    null.nullMethod();
    textHtml = null.nullMethod();
  }
   else {
    textHtml = isEmptyString(this$static.bodyHtml)?'&#160;':this$static.bodyHtml;
  }
  $updateContent(this$static.appearance, this$static.element, this$static.titleHtml, textHtml);
}

function ToolTip_0(target, appearance){
  $clinit_Component();
  Tip_0.call(this, appearance);
  $$init_5(this);
  $init_3(this);
  $initTarget(this, target);
}

defineSeed(1354, 1355, makeCastMap([Q$HasAttachHandlers, Q$HasResizeHandlers, Q$HasHandlers, Q$EventListener, Q$HasEnabled, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$Component, Q$HasFocusSupport, Q$HasItemId, Q$BeforeHideEvent$HasBeforeHideHandlers, Q$BeforeShowContextMenuEvent$HasBeforeShowContextMenuHandler, Q$BeforeShowEvent$HasBeforeShowHandlers, Q$BlurEvent$HasBlurHandlers, Q$DisableEvent$HasDisableHandlers, Q$EnableEvent$HasEnableHandlers, Q$FocusEvent$HasFocusHandlers, Q$HideEvent$HasHideHandlers, Q$MoveEvent$HasMoveHandlers, Q$ShowContextMenuEvent$HasShowContextMenuHandler, Q$ShowEvent$HasShowHandlers]), ToolTip_0);
_.delayHide = function delayHide(){
  $delayHide(this);
}
;
_.hide = function hide_6(){
  $hide_5(this);
}
;
_.onAfterFirstAttach = function onAfterFirstAttach_9(){
  $onAfterFirstAttach(this);
  $setZIndex(this.anchorEl, $getZIndex(this.element) + 1);
}
;
_.onTargetMouseMove = function onTargetMouseMove(event_0){
  $onMouseMove_2(this, event_0.nativeEvent);
}
;
_.onTargetMouseOut = function onTargetMouseOut(event_0){
  var source, to;
  source = event_0.nativeEvent.target;
  to = event_0.nativeEvent.relatedTarget;
  (!to || !source.contains(to)) && this.onTargetOut(event_0.nativeEvent);
}
;
_.onTargetMouseOver = function onTargetMouseOver(event_0){
  var from, source;
  source = event_0.nativeEvent.target;
  from = event_0.nativeEvent.relatedTarget;
  (!from || !source.contains(from)) && this.onTargetOver(event_0.nativeEvent);
}
;
_.onTargetOut = function onTargetOut(ce){
  $onTargetOut(this);
}
;
_.onTargetOver = function onTargetOver(ce){
  if (this.disabled || !$isOrHasChild(this.target_0.getElement_0(), ce.target)) {
    return;
  }
  $clearTimer(this, 'hide');
  this.targetXY = new Point_0(ce.clientX || 0, ce.clientY || 0);
  $delayShow(this);
}
;
_.onWindowResize = function onWindowResize_3(width, height){
  $show_5(this);
}
;
_.show = function show_2(){
  $show_5(this);
}
;
_.anchorEl = null;
_.bodyHtml = null;
_.dismissTimer = null;
_.handlerRegistration = null;
_.hideTimer = null;
_.lastActive = null;
_.showTimer = null;
_.target_0 = null;
_.titleHtml = null;
_.toolTipConfig = null;
function Tip$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1356, 1, makeCastMap([Q$EventHandler, Q$SelectEvent$SelectHandler]), Tip$1_0);
_.onSelect = function onSelect_15(event_0){
  $hide_5(this.this$0);
}
;
_.this$0 = null;
function ToolTip$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(1357, 130, makeCastMap([Q$Timer]), ToolTip$1_0);
_.run = function run_5(){
  $hide_5(this.this$0);
}
;
_.this$0 = null;
function ToolTip$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(1358, 130, makeCastMap([Q$Timer]), ToolTip$2_0);
_.run = function run_6(){
  $hide_5(this.this$0);
}
;
_.this$0 = null;
function ToolTip$3_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(1359, 130, makeCastMap([Q$Timer]), ToolTip$3_0);
_.run = function run_7(){
  $show_5(this.this$0);
}
;
_.this$0 = null;
function ToolTip$Handler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1360, 1, makeCastMap([Q$KeyDownHandler, Q$MouseMoveHandler, Q$MouseOutHandler, Q$MouseOverHandler, Q$AttachEvent$Handler, Q$EventHandler, Q$HideEvent$HideHandler]), ToolTip$Handler_0);
_.onAttachOrDetach = function onAttachOrDetach_3(event_0){
  event_0.attached || $hide_5(this.this$0);
}
;
_.onHide = function onHide_8(event_0){
  $hide_5(this.this$0);
}
;
_.onKeyDown = function onKeyDown_2(event_0){
}
;
_.onMouseOut = function onMouseOut_0(event_0){
  this.this$0.onTargetMouseOut(event_0);
}
;
_.onMouseOver = function onMouseOver_0(event_0){
  this.this$0.onTargetMouseOver(event_0);
}
;
_.this$0 = null;
function $getMouseOffset(this$static){
  return initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [this$static.mouseOffset[0], this$static.mouseOffset[1]]);
}

function $setAnchor(this$static, anchor){
  this$static.anchor = anchor;
}

function $setBodyText(this$static, bodyText){
  this$static.bodyHtml = htmlEscape(bodyText);
}

function ToolTipConfig_0(){
  this.mouseOffset = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [15, 18]);
}

defineSeed(1361, 1, {}, ToolTipConfig_0);
_.anchor = null;
_.bodyHtml = null;
_.closeable = false;
_.renderer = null;
_.titleHtml = null;
_.trackMouse = false;
function ArithmeticException_0(explanation){
  RuntimeException_0.call(this, explanation);
}

defineSeed(1390, 143, makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), ArithmeticException_0);
function $clinit_Boolean(){
  $clinit_Boolean = nullMethod;
  FALSE = new Boolean_1(false);
  TRUE = new Boolean_1(true);
}

function $compareTo_0(this$static, other){
  return this$static.value_0 == other.value_0?0:this$static.value_0?1:-1;
}

function Boolean_1(value){
  this.value_0 = value;
}

defineSeed(1392, 1, makeCastMap([Q$Serializable, Q$Boolean, Q$Comparable]), Boolean_1);
_.compareTo$ = function compareTo_0(other){
  return $compareTo_0(this, dynamicCast(other, Q$Boolean));
}
;
_.equals$ = function equals_23(o){
  return instanceOf(o, Q$Boolean) && dynamicCast(o, Q$Boolean).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_25(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_26(){
  return this.value_0?'true':'false';
}
;
_.value_0 = false;
var FALSE, TRUE;
defineSeed(1394, 1, makeCastMap([Q$Serializable, Q$Number]));
function isNaN_0(x){
  return isNaN(x);
}

function IllegalArgumentException_1(message){
  RuntimeException_0.call(this, message);
}

defineSeed(1402, 143, makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), IllegalArgumentException_1);
function $compareTo_5(this$static, b){
  return this$static.value_0 < b.value_0?-1:this$static.value_0 > b.value_0?1:0;
}

function Integer_0(value){
  this.value_0 = value;
}

function numberOfLeadingZeros_0(i){
  var m_0, n, y;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y = -(i >> 16);
    m_0 = y >> 16 & 16;
    n = 16 - m_0;
    i = i >> m_0;
    y = i - 256;
    m_0 = y >> 16 & 8;
    n += m_0;
    i <<= m_0;
    y = i - 4096;
    m_0 = y >> 16 & 4;
    n += m_0;
    i <<= m_0;
    y = i - 16384;
    m_0 = y >> 16 & 2;
    n += m_0;
    i <<= m_0;
    y = i >> 14;
    m_0 = y & ~(y >> 1);
    return n + 2 - m_0;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf_1(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_2)[rebase];
    !result && (result = boxedValues_2[rebase] = new Integer_0(i));
    return result;
  }
  return new Integer_0(i);
}

defineSeed(1405, 1394, makeCastMap([Q$Serializable, Q$Comparable, Q$Integer, Q$Number]), Integer_0);
_.compareTo$ = function compareTo_5(b){
  return $compareTo_5(this, dynamicCast(b, Q$Integer));
}
;
_.equals$ = function equals_28(o){
  return instanceOf(o, Q$Integer) && dynamicCast(o, Q$Integer).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_30(){
  return this.value_0;
}
;
_.toString$ = function toString_32(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = nullMethod;
  boxedValues_2 = initDim(_3Ljava_lang_Integer_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Integer, 256, 0);
}

var boxedValues_2;
function $compareTo_6(this$static, b){
  return lt(this$static.value_0, b.value_0)?-1:gt(this$static.value_0, b.value_0)?1:0;
}

function Long_0(value){
  this.value_0 = value;
}

function signum(i){
  return eq(i, P0_longLit)?0:lt(i, P0_longLit)?-1:1;
}

function valueOf_2(i){
  var rebase, result;
  if (gt(i, N81_longLit) && lt(i, P80_longLit)) {
    rebase = toInt(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Long_0(i));
    return result;
  }
  return new Long_0(i);
}

defineSeed(1407, 1394, makeCastMap([Q$Serializable, Q$Comparable, Q$Long, Q$Number]), Long_0);
_.compareTo$ = function compareTo_6(b){
  return $compareTo_6(this, dynamicCast(b, Q$Long));
}
;
_.equals$ = function equals_29(o){
  return instanceOf(o, Q$Long) && eq(dynamicCast(o, Q$Long).value_0, this.value_0);
}
;
_.hashCode$ = function hashCode_31(){
  return toInt(this.value_0);
}
;
_.toString$ = function toString_33(){
  return '' + toString_12(this.value_0);
}
;
_.value_0 = P0_longLit;
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = nullMethod;
  boxedValues_3 = initDim(_3Ljava_lang_Long_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Long, 256, 0);
}

var boxedValues_3;
function abs(x){
  return x < 0?-x:x;
}

function floor(x){
  return Math.floor(x);
}

function max_0(x, y){
  return x > y?x:y;
}

function min_1(x, y){
  return x < y?x:y;
}

function pow(x, exp){
  return Math.pow(x, exp);
}

function round0(x){
  return Math.round(x);
}

function $endsWith(this$static, suffix){
  return this$static.lastIndexOf(suffix) != -1 && this$static.lastIndexOf(suffix) == this$static.length - suffix.length;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function compareTo_9(thisStr, otherStr){
  thisStr = String(thisStr);
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

_ = String.prototype;
_.compareTo$ = function compareTo_8(other){
  return compareTo_9(this, dynamicCast(other, Q$String));
}
;
function $append_6(this$static, x){
  $append_2(this$static.impl, x);
  return this$static;
}

function $containsHashValue(this$static, value){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue_0();
        if (this$static.equalsBridge(value, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}

function $containsStringValue(this$static, value){
  var stringMap = this$static.stringMap;
  for (var key_0 in stringMap) {
    if (key_0.charCodeAt(0) == 58) {
      var entryValue = stringMap[key_0];
      if (this$static.equalsBridge(value, entryValue)) {
        return true;
      }
    }
  }
  return false;
}

defineSeed(1429, 595, makeCastMap([Q$Map]));
_.clear = function clear_3(){
  $clearImpl(this);
}
;
_.containsValue = function containsValue(value){
  if (this.nullSlotLive && this.equals(this.nullSlot, value)) {
    return true;
  }
   else if ($containsStringValue(this, value)) {
    return true;
  }
   else if ($containsHashValue(this, value)) {
    return true;
  }
  return false;
}
;
defineSeed(1430, 458, makeCastMap([Q$Collection, Q$Set]));
_.remove_2 = function remove_23(entry){
  var key_0;
  if ($contains_2(this, entry)) {
    key_0 = dynamicCast(entry, Q$Map$Entry).getKey_0();
    this.this$0.remove_1(key_0);
    return true;
  }
  return false;
}
;
function $iterator_0(this$static){
  var outerIter;
  outerIter = this$static.val$entrySet.iterator();
  return new AbstractMap$2$1_0(outerIter);
}

function AbstractMap$2_0(this$0, val$entrySet){
  this.this$0 = this$0;
  this.val$entrySet = val$entrySet;
}

defineSeed(1439, 459, makeCastMap([Q$Collection]), AbstractMap$2_0);
_.contains_0 = function contains_5(value){
  return this.this$0.containsValue(value);
}
;
_.iterator = function iterator_13(){
  return $iterator_0(this);
}
;
_.size_1 = function size_14(){
  return this.val$entrySet.size_1();
}
;
_.this$0 = null;
_.val$entrySet = null;
function $next_5(this$static){
  var value;
  value = dynamicCast(this$static.val$outerIter.next_0(), Q$Map$Entry).getValue_0();
  return value;
}

function AbstractMap$2$1_0(val$outerIter){
  this.val$outerIter = val$outerIter;
}

defineSeed(1440, 1, makeCastMap([Q$Iterator]), AbstractMap$2$1_0);
_.hasNext = function hasNext_9(){
  return this.val$outerIter.hasNext();
}
;
_.next_0 = function next_11(){
  return $next_5(this);
}
;
_.remove_0 = function remove_27(){
  this.val$outerIter.remove_0();
}
;
_.val$outerIter = null;
function $remove_17(this$static, o){
  var i;
  i = $indexOf_5(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove_16(this$static, i);
  return true;
}

function $removeRange(this$static, fromIndex, endIndex){
  var count;
  checkIndex(fromIndex, this$static.size_0);
  (endIndex < fromIndex || endIndex > this$static.size_0) && indexOutOfBounds(endIndex, this$static.size_0);
  count = endIndex - fromIndex;
  splice_0(this$static.array, fromIndex, count);
  this$static.size_0 -= count;
}

function $set_3(this$static, index, o){
  var previous;
  previous = (checkIndex(index, this$static.size_0) , this$static.array[index]);
  setCheck(this$static.array, index, o);
  return previous;
}

function ArrayList_1(initialCapacity){
  $$init_7(this);
  setCapacity(this.array, initialCapacity);
}

function setCapacity(array, newSize){
  array.length = newSize;
}

defineSeed(1442, 463, makeCastMap([Q$Serializable, Q$Collection, Q$List]), ArrayList_1);
_.clear = function clear_5(){
  $clear_4(this);
}
;
_.isEmpty = function isEmpty_5(){
  return this.size_0 == 0;
}
;
_.remove_2 = function remove_30(o){
  return $remove_17(this, o);
}
;
_.removeRange = function removeRange_0(fromIndex, endIndex){
  $removeRange(this, fromIndex, endIndex);
}
;
function $get_11(this$static, index){
  if (index == 0) {
    return this$static.element;
  }
   else {
    throw new IndexOutOfBoundsException_0;
  }
}

function Collections$SingletonList_0(element){
  this.element = element;
}

defineSeed(1448, 463, makeCastMap([Q$Serializable, Q$Collection, Q$List]), Collections$SingletonList_0);
_.contains_0 = function contains_9(item){
  return equalsWithNullCheck(this.element, item);
}
;
_.get_2 = function get_16(index){
  return $get_11(this, index);
}
;
_.size_1 = function size_18(){
  return 1;
}
;
_.element = null;
defineSeed(1449, 1, makeCastMap([Q$Collection]));
_.add_0 = function add_14(o){
  throw new UnsupportedOperationException_0;
}
;
_.clear = function clear_6(){
  throw new UnsupportedOperationException_0;
}
;
_.contains_0 = function contains_10(o){
  return this.coll.contains_0(o);
}
;
_.iterator = function iterator_16(){
  return new Collections$UnmodifiableCollectionIterator_0(this.coll.iterator());
}
;
_.remove_2 = function remove_32(o){
  throw new UnsupportedOperationException_0;
}
;
_.size_1 = function size_19(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_4(){
  return this.coll.toArray();
}
;
_.toString$ = function toString_41(){
  return this.coll.toString$();
}
;
_.coll = null;
function Collections$UnmodifiableCollectionIterator_0(it){
  this.it = it;
}

defineSeed(1450, 1, makeCastMap([Q$Iterator]), Collections$UnmodifiableCollectionIterator_0);
_.hasNext = function hasNext_11(){
  return this.it.hasNext();
}
;
_.next_0 = function next_13(){
  return this.it.next_0();
}
;
_.remove_0 = function remove_33(){
  throw new UnsupportedOperationException_0;
}
;
_.it = null;
function $get_12(this$static, index){
  return $get_10(this$static.list, index);
}

function $indexOf_6(this$static, o){
  return $indexOf_5(this$static.list, o, 0);
}

function Collections$UnmodifiableList_0(list){
  this.coll = list;
  this.list = list;
}

defineSeed(1451, 1449, makeCastMap([Q$Collection, Q$List]), Collections$UnmodifiableList_0);
_.equals$ = function equals_35(o){
  return $equals(this.list, o);
}
;
_.get_2 = function get_17(index){
  return $get_10(this.list, index);
}
;
_.hashCode$ = function hashCode_37(){
  return $hashCode(this.list);
}
;
_.isEmpty = function isEmpty_6(){
  return this.list.size_0 == 0;
}
;
_.listIterator = function listIterator_3(){
  return new Collections$UnmodifiableListIterator_0(new AbstractList$ListIteratorImpl_0(this.list, 0));
}
;
_.listIterator_0 = function listIterator_4(from){
  return new Collections$UnmodifiableListIterator_0(new AbstractList$ListIteratorImpl_0(this.list, from));
}
;
_.list = null;
function Collections$UnmodifiableListIterator_0(lit){
  this.it = lit;
  this.lit = lit;
}

defineSeed(1452, 1450, makeCastMap([Q$Iterator, Q$ListIterator]), Collections$UnmodifiableListIterator_0);
_.hasPrevious = function hasPrevious_1(){
  return this.lit.i > 0;
}
;
_.previous = function previous_2(){
  return $previous_0(this.lit);
}
;
_.lit = null;
function Collections$UnmodifiableSet_0(set){
  this.coll = set;
}

defineSeed(1455, 1449, makeCastMap([Q$Collection, Q$Set]), Collections$UnmodifiableSet_0);
_.equals$ = function equals_37(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_39(){
  return this.coll.hashCode$();
}
;
function Collections$UnmodifiableRandomAccessList_0(list){
  Collections$UnmodifiableList_0.call(this, list);
}

defineSeed(1458, 1451, makeCastMap([Q$Collection, Q$List]), Collections$UnmodifiableRandomAccessList_0);
function $clinit_Comparators(){
  $clinit_Comparators = nullMethod;
  NATURAL = new Comparators$1_0;
}

var NATURAL;
function Comparators$1_0(){
}

defineSeed(1460, 1, {}, Comparators$1_0);
_.compare = function compare_5(o1, o2){
  return dynamicCast(o1, Q$Comparable).compareTo$(o2);
}
;
function $compareTo_10(this$static, other){
  return signum(sub_0(fromDouble(this$static.jsdate.getTime()), fromDouble(other.jsdate.getTime())));
}

function Date_1(){
  this.jsdate = new Date;
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineSeed(1461, 1, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), Date_1);
_.compareTo$ = function compareTo_12(other){
  return $compareTo_10(this, dynamicCast(other, Q$Date));
}
;
_.equals$ = function equals_39(obj){
  return instanceOf(obj, Q$Date) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, Q$Date).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_41(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_44(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
_.jsdate = null;
function $clinit_Date$StringData(){
  $clinit_Date$StringData = nullMethod;
  DAYS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function EmptyStackException_0(){
  $fillInStackTrace();
}

defineSeed(1463, 143, makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), EmptyStackException_0);
function $remove_18(this$static, o){
  return this$static.map.remove_1(o) != null;
}

defineSeed(1465, 458, makeCastMap([Q$Serializable, Q$Collection, Q$Set]));
_.isEmpty = function isEmpty_8(){
  return this.map.size_1() == 0;
}
;
_.remove_2 = function remove_36(o){
  return $remove_18(this, o);
}
;
function $add_17(this$static, o){
  return $add_15(this$static.arrayList, o);
}

function $contains_4(this$static, elem){
  return $indexOf_5(this$static.arrayList, elem, 0) != -1;
}

function $get_15(this$static, index){
  return $get_10(this$static.arrayList, index);
}

function $remove_22(this$static, index){
  return $remove_16(this$static.arrayList, index);
}

defineSeed(1477, 463, makeCastMap([Q$Serializable, Q$Collection, Q$List]));
_.add_1 = function add_17(index, o){
  $add_14(this.arrayList, index, o);
}
;
_.add_0 = function add_18(o){
  return $add_15(this.arrayList, o);
}
;
_.clear = function clear_11(){
  $clear_4(this.arrayList);
}
;
_.contains_0 = function contains_14(elem){
  return $contains_4(this, elem);
}
;
_.get_2 = function get_20(index){
  return $get_10(this.arrayList, index);
}
;
_.isEmpty = function isEmpty_9(){
  return this.arrayList.size_0 == 0;
}
;
_.iterator = function iterator_20(){
  return new AbstractList$IteratorImpl_0(this.arrayList);
}
;
_.remove_3 = function remove_40(index){
  return $remove_16(this.arrayList, index);
}
;
_.removeRange = function removeRange_1(fromIndex, endIndex){
  $removeRange(this.arrayList, fromIndex, endIndex);
}
;
_.size_1 = function size_25(){
  return this.arrayList.size_0;
}
;
_.toArray = function toArray_6(){
  return $toArray(this.arrayList);
}
;
_.toArray_0 = function toArray_7(a){
  return $toArray_0(this.arrayList, a);
}
;
_.toString$ = function toString_46(){
  return $toString_0(this.arrayList);
}
;
_.arrayList = null;
function $pop(this$static){
  var sz;
  sz = this$static.arrayList.size_0;
  if (sz > 0) {
    return $remove_16(this$static.arrayList, sz - 1);
  }
   else {
    throw new EmptyStackException_0;
  }
}

function $push_1(this$static, o){
  $add_15(this$static.arrayList, o);
  return o;
}

function Stack_0(){
  this.arrayList = new ArrayList_0;
}

defineSeed(1476, 1477, makeCastMap([Q$Serializable, Q$Collection, Q$List]), Stack_0);
var Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang.', 'LongLibBase$LongEmul', 314), _3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForArray('[Lcom.google.gwt.lang.', 'LongLibBase$LongEmul;', 1490, Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit), Ljava_lang_Boolean_2_classLit = createForClass('java.lang.', 'Boolean', 1392), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number', 1394), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer', 1405), _3Ljava_lang_Integer_2_classLit = createForArray('[Ljava.lang.', 'Integer;', 1496, Ljava_lang_Integer_2_classLit), Ljava_lang_Long_2_classLit = createForClass('java.lang.', 'Long', 1407), _3Ljava_lang_Long_2_classLit = createForArray('[Ljava.lang.', 'Long;', 1497, Ljava_lang_Long_2_classLit), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException', 1390), Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client.', 'Duration', 140), Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$Flusher', 164), Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$Rescuer', 165), Lcom_gwtplatform_mvp_client_Presenter_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'Presenter', 17), Lcom_gwtplatform_mvp_client_PresenterWidget$1_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'PresenterWidget$1', 478), Lcom_sencha_gxt_widget_core_client_event_HideEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'HideEvent', 1235), Lcom_sencha_gxt_widget_core_client_event_ShowEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'ShowEvent', 1253), Lcom_sencha_gxt_widget_core_client_event_SelectEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'SelectEvent', 1252), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException', 1402), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject', 98), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget', 97), Lcom_sencha_gxt_widget_core_client_Component_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'Component', 96), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer', 130), Lcom_sencha_gxt_core_client_Style$Side_2_classLit = createForEnum('com.sencha.gxt.core.client.', 'Style$Side', 530, Ljava_lang_Enum_2_classLit, values_15), _3Lcom_sencha_gxt_core_client_Style$Side_2_classLit = createForArray('[Lcom.sencha.gxt.core.client.', 'Style$Side;', 1499, Lcom_sencha_gxt_core_client_Style$Side_2_classLit), Lcom_sencha_gxt_widget_core_client_Component$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'Component$1', 1105), Lcom_sencha_gxt_core_client_util_DelayedTask_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'DelayedTask', 580), Lcom_sencha_gxt_widget_core_client_Component$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'Component$2', 1106), Lcom_sencha_gxt_widget_core_client_Component$3_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'Component$3', 1107), Lcom_sencha_gxt_widget_core_client_Component$5_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'Component$5', 1108), Lcom_sencha_gxt_widget_core_client_event_FocusEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'FocusEvent', 1230), Lcom_sencha_gxt_widget_core_client_event_BlurEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BlurEvent', 1212), Lcom_sencha_gxt_widget_core_client_event_BeforeHideEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeHideEvent', 1208), Lcom_sencha_gxt_widget_core_client_event_BeforeShowEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeShowEvent', 1211), Lcom_sencha_gxt_widget_core_client_event_EnableEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'EnableEvent', 1227), Lcom_sencha_gxt_widget_core_client_event_DisableEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'DisableEvent', 1226), Lcom_sencha_gxt_widget_core_client_event_MoveEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'MoveEvent', 1239), Lcom_sencha_gxt_core_client_util_DelayedTask$1_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'DelayedTask$1', 581), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1', 347), Lcom_sencha_gxt_widget_core_client_selection_SelectionChangedEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.selection.', 'SelectionChangedEvent', 1352), Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ProxyPlaceAbstract$3$1', 498), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent', 349), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers', 351), Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$3', 472), Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'RevealContentHandler$1', 502), Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'RevealContentHandler$1$1', 503), Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util.', 'AbstractMap$2', 1439), Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util.', 'AbstractMap$2$1', 1440), Lcom_gwtplatform_mvp_client_proxy_ResetPresentersEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ResetPresentersEvent', 499), Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Event$NativePreviewEvent', 345), Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util.', 'Collections$SingletonList', 1448), Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollection', 1449), Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableList', 1451), Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableSet', 1455), Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableRandomAccessList', 1458), Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollectionIterator', 1450), Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableListIterator', 1452), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent', 276), Lcom_google_gwt_dom_client_Style$Cursor_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor', 190, Ljava_lang_Enum_2_classLit, values_0), _3Lcom_google_gwt_dom_client_Style$Cursor_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Cursor;', 1502, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit), Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display', 210, Ljava_lang_Enum_2_classLit, values_1), _3Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Display;', 1503, Lcom_google_gwt_dom_client_Style$Display_2_classLit), Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow', 215, Ljava_lang_Enum_2_classLit, values_2), _3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Overflow;', 1504, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit), Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign', 225, Ljava_lang_Enum_2_classLit, values_4), _3Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$TextAlign;', 1506, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit), Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Visibility', 240, Ljava_lang_Enum_2_classLit, values_6), _3Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Visibility;', 1507, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit), Lcom_google_gwt_dom_client_Style$Cursor$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$1', 192, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$2', 202, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$3', 203, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$4', 204, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$5', 205, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$6', 206, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$7', 207, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$8', 208, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$9', 209, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$10_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$10', 193, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$11_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$11', 194, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$12_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$12', 195, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$13_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$13', 196, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$14_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$14', 197, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$15_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$15', 198, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$16_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$16', 199, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$17_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$17', 200, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Cursor$18_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Cursor$18', 201, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null), Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$1', 211, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null), Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$2', 212, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null), Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$3', 213, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null), Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$4', 214, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null), Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$1', 216, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null), Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$2', 217, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null), Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$3', 218, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null), Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$4', 219, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null), Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign$1', 226, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null), Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign$2', 227, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null), Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign$3', 228, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null), Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign$4', 229, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null), Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Visibility$1', 241, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null), Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Visibility$2', 242, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null), Lcom_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'AsyncCallSucceedEvent', 483), Lcom_sencha_gxt_widget_core_client_container_Container_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'Container', 1114), Lcom_sencha_gxt_widget_core_client_container_ResizeContainer_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'ResizeContainer', 1113), Lcom_sencha_gxt_widget_core_client_container_SimpleContainer_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'SimpleContainer', 1112), Lcom_sencha_gxt_widget_core_client_ContentPanel_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'ContentPanel', 1111), Lcom_sencha_gxt_core_client_util_BaseEventPreview_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'BaseEventPreview', 574), Lcom_sencha_gxt_widget_core_client_Window$3_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'Window$3', 1145), Lcom_sencha_gxt_widget_core_client_Window$4_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'Window$4', 1146), Lcom_sencha_gxt_widget_core_client_ContentPanel$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'ContentPanel$1', 1115), Lcom_sencha_gxt_widget_core_client_ContentPanel$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'ContentPanel$2', 1116), Lcom_sencha_gxt_widget_core_client_ContentPanel$3_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'ContentPanel$3', 1117), Lcom_sencha_gxt_widget_core_client_container_ResizeContainer$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'ResizeContainer$1', 1193), Lcom_sencha_gxt_widget_core_client_container_ResizeContainer$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'ResizeContainer$2', 1194), Lcom_sencha_gxt_widget_core_client_container_ResizeContainer$3_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'ResizeContainer$3', 1195), Lcom_sencha_gxt_widget_core_client_container_ResizeContainer$4_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'ResizeContainer$4', 1196), Lcom_sencha_gxt_widget_core_client_container_Container$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'Container$1', 1185), Lcom_sencha_gxt_widget_core_client_container_Container$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'Container$2', 1186), Lcom_sencha_gxt_widget_core_client_event_BeforeAddEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeAddEvent', 1202), Lcom_sencha_gxt_widget_core_client_event_AddEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'AddEvent', 1201), Lcom_sencha_gxt_widget_core_client_event_BeforeRemoveEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeRemoveEvent', 1209), Lcom_sencha_gxt_widget_core_client_event_RemoveEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'RemoveEvent', 1245), Lcom_sencha_gxt_widget_core_client_event_BeforeExpandEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeExpandEvent', 1206), Lcom_sencha_gxt_widget_core_client_event_ExpandEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'ExpandEvent', 1228), Lcom_sencha_gxt_widget_core_client_event_BeforeCollapseEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeCollapseEvent', 1204), Lcom_sencha_gxt_widget_core_client_event_CollapseEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'CollapseEvent', 1220), Lcom_sencha_gxt_widget_core_client_Header_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'Header', 1125), Lcom_sencha_gxt_fx_client_animation_AfterAnimateEvent_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'AfterAnimateEvent', 662), Lcom_sencha_gxt_widget_core_client_event_ActivateEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'ActivateEvent', 1200), Lcom_sencha_gxt_widget_core_client_event_DeactivateEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'DeactivateEvent', 1225), Lcom_sencha_gxt_widget_core_client_event_MaximizeEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'MaximizeEvent', 1237), Lcom_sencha_gxt_widget_core_client_event_MinimizeEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'MinimizeEvent', 1238), Lcom_sencha_gxt_fx_client_DragStartEvent_2_classLit = createForClass('com.sencha.gxt.fx.client.', 'DragStartEvent', 657), Lcom_sencha_gxt_fx_client_DragEndEvent_2_classLit = createForClass('com.sencha.gxt.fx.client.', 'DragEndEvent', 655), Lcom_sencha_gxt_fx_client_DragCancelEvent_2_classLit = createForClass('com.sencha.gxt.fx.client.', 'DragCancelEvent', 654), Lcom_sencha_gxt_fx_client_DragMoveEvent_2_classLit = createForClass('com.sencha.gxt.fx.client.', 'DragMoveEvent', 656), Lcom_sencha_gxt_widget_core_client_cell_CellComponent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.cell.', 'CellComponent', 1165), Lcom_sencha_gxt_widget_core_client_button_CellButtonBase_2_classLit = createForClass('com.sencha.gxt.widget.core.client.button.', 'CellButtonBase', 1164), Lcom_sencha_gxt_widget_core_client_cell_CellComponent$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.cell.', 'CellComponent$1', 1170), Lcom_sencha_gxt_widget_core_client_event_BeforeSelectEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeSelectEvent', 1210), Lcom_sencha_gxt_widget_core_client_button_TextButton_2_classLit = createForClass('com.sencha.gxt.widget.core.client.button.', 'TextButton', 1168), Lcom_crud_client_util_GXTPopupViewImpl$3_2_classLit = createForClass('com.crud.client.util.', 'GXTPopupViewImpl$3', 61), Lcom_gwtplatform_mvp_client_proxy_RevealContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'RevealContentEvent', 500), Lcom_sencha_gxt_widget_core_client_selection_AbstractStoreSelectionModel_2_classLit = createForClass('com.sencha.gxt.widget.core.client.selection.', 'AbstractStoreSelectionModel', 1284), Lcom_google_gwt_cell_client_AbstractCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractCell', 136), Lcom_sencha_gxt_core_client_util_KeyNav_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'KeyNav', 583), Lcom_sencha_gxt_widget_core_client_selection_AbstractStoreSelectionModel$Handler_2_classLit = createForClass('com.sencha.gxt.widget.core.client.selection.', 'AbstractStoreSelectionModel$Handler', 1350), Lcom_sencha_gxt_data_shared_event_StoreEvent_2_classLit = createForClass('com.sencha.gxt.data.shared.event.', 'StoreEvent', 622), Lcom_sencha_gxt_core_client_util_KeyNav$KeyNavHandler_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'KeyNav$KeyNavHandler', 584), Lcom_google_gwt_cell_client_Cell$Context_2_classLit = createForClass('com.google.gwt.cell.client.', 'Cell$Context', 139), Lcom_sencha_gxt_data_shared_Store_2_classLit = createForClass('com.sencha.gxt.data.shared.', 'Store', 604), Lcom_sencha_gxt_data_shared_Store$Record_2_classLit = createForClass('com.sencha.gxt.data.shared.', 'Store$Record', 614), Lcom_sencha_gxt_data_shared_Store$1_2_classLit = createForClass('com.sencha.gxt.data.shared.', 'Store$1', 612), Lcom_sencha_gxt_widget_core_client_event_CheckChangeEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'CheckChangeEvent', 1218), Lcom_sencha_gxt_widget_core_client_container_InsertResizeContainer_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'InsertResizeContainer', 1163), Lcom_sencha_gxt_widget_core_client_container_BoxLayoutContainer_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BoxLayoutContainer', 1162), Lcom_sencha_gxt_widget_core_client_container_HBoxLayoutContainer_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'HBoxLayoutContainer', 1161), Lcom_sencha_gxt_widget_core_client_toolbar_ToolBar_2_classLit = createForClass('com.sencha.gxt.widget.core.client.toolbar.', 'ToolBar', 1160), Lcom_sencha_gxt_widget_core_client_container_HBoxLayoutContainer$HBoxLayoutAlign_2_classLit = createForEnum('com.sencha.gxt.widget.core.client.container.', 'HBoxLayoutContainer$HBoxLayoutAlign', 1191, Ljava_lang_Enum_2_classLit, values_20), _3Lcom_sencha_gxt_widget_core_client_container_HBoxLayoutContainer$HBoxLayoutAlign_2_classLit = createForArray('[Lcom.sencha.gxt.widget.core.client.container.', 'HBoxLayoutContainer$HBoxLayoutAlign;', 1509, Lcom_sencha_gxt_widget_core_client_container_HBoxLayoutContainer$HBoxLayoutAlign_2_classLit), Lcom_sencha_gxt_widget_core_client_container_HBoxLayoutContainer$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'HBoxLayoutContainer$2', 1187), Lcom_sencha_gxt_widget_core_client_container_HBoxLayoutContainer$4_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'HBoxLayoutContainer$4', 1188), Lcom_sencha_gxt_widget_core_client_container_HBoxLayoutContainer$5_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'HBoxLayoutContainer$5', 1189), Lcom_sencha_gxt_widget_core_client_container_HBoxLayoutContainer$6_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'HBoxLayoutContainer$6', 1190), Lcom_sencha_gxt_widget_core_client_container_MarginData_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'MarginData', 1181), Lcom_sencha_gxt_widget_core_client_container_BoxLayoutContainer$BoxLayoutData_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BoxLayoutContainer$BoxLayoutData', 1183), Lcom_sencha_gxt_widget_core_client_event_OverflowEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'OverflowEvent', 1240), Lcom_sencha_gxt_core_client_dom_XElement$VisMode_2_classLit = createForEnum('com.sencha.gxt.core.client.dom.', 'XElement$VisMode', 563, Ljava_lang_Enum_2_classLit, values_16), _3Lcom_sencha_gxt_core_client_dom_XElement$VisMode_2_classLit = createForArray('[Lcom.sencha.gxt.core.client.dom.', 'XElement$VisMode;', 1510, Lcom_sencha_gxt_core_client_dom_XElement$VisMode_2_classLit), Lcom_sencha_gxt_core_client_dom_XElement$2_2_classLit = createForClass('com.sencha.gxt.core.client.dom.', 'XElement$2', 561), Lcom_sencha_gxt_core_client_Style$Direction_2_classLit = createForEnum('com.sencha.gxt.core.client.', 'Style$Direction', 527, Ljava_lang_Enum_2_classLit, values_12), _3Lcom_sencha_gxt_core_client_Style$Direction_2_classLit = createForArray('[Lcom.sencha.gxt.core.client.', 'Style$Direction;', 1511, Lcom_sencha_gxt_core_client_Style$Direction_2_classLit), Lcom_sencha_gxt_core_client_Style$Anchor_2_classLit = createForEnum('com.sencha.gxt.core.client.', 'Style$Anchor', 525, Ljava_lang_Enum_2_classLit, values_11), _3Lcom_sencha_gxt_core_client_Style$Anchor_2_classLit = createForArray('[Lcom.sencha.gxt.core.client.', 'Style$Anchor;', 1512, Lcom_sencha_gxt_core_client_Style$Anchor_2_classLit), Lcom_sencha_gxt_core_client_Style$AnchorAlignment_2_classLit = createForClass('com.sencha.gxt.core.client.', 'Style$AnchorAlignment', 526), Lcom_sencha_gxt_core_client_Style$HideMode_2_classLit = createForEnum('com.sencha.gxt.core.client.', 'Style$HideMode', 528, Ljava_lang_Enum_2_classLit, values_13), _3Lcom_sencha_gxt_core_client_Style$HideMode_2_classLit = createForArray('[Lcom.sencha.gxt.core.client.', 'Style$HideMode;', 1513, Lcom_sencha_gxt_core_client_Style$HideMode_2_classLit), Lcom_sencha_gxt_core_client_Style$LayoutRegion_2_classLit = createForEnum('com.sencha.gxt.core.client.', 'Style$LayoutRegion', 529, Ljava_lang_Enum_2_classLit, values_14), _3Lcom_sencha_gxt_core_client_Style$LayoutRegion_2_classLit = createForArray('[Lcom.sencha.gxt.core.client.', 'Style$LayoutRegion;', 1514, Lcom_sencha_gxt_core_client_Style$LayoutRegion_2_classLit), Lcom_sencha_gxt_widget_core_client_event_InvalidEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'InvalidEvent', 1236), Lcom_sencha_gxt_widget_core_client_event_ValidEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'ValidEvent', 1258), Lcom_sencha_gxt_theme_base_client_toolbar_ToolBarBaseAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.toolbar.', 'ToolBarBaseAppearance', 895), Lcom_sencha_gxt_theme_blue_client_toolbar_BlueToolBarAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.toolbar.', 'BlueToolBarAppearance', 1014), Lcom_sencha_gxt_widget_core_client_container_InsertContainer_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'InsertContainer', 1192), Lcom_sencha_gxt_widget_core_client_menu_Menu_2_classLit = createForClass('com.sencha.gxt.widget.core.client.menu.', 'Menu', 1345), Lcom_sencha_gxt_widget_core_client_menu_Menu$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.menu.', 'Menu$1', 1346), Lcom_sencha_gxt_widget_core_client_menu_Menu$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.menu.', 'Menu$2', 1347), Lcom_sencha_gxt_widget_core_client_menu_Menu$3_2_classLit = createForClass('com.sencha.gxt.widget.core.client.menu.', 'Menu$3', 1348), Lcom_sencha_gxt_core_client_util_ClickRepeaterEvent_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'ClickRepeaterEvent', 579), Lcom_sencha_gxt_core_shared_event_GroupingHandlerRegistration_2_classLit = createForClass('com.sencha.gxt.core.shared.event.', 'GroupingHandlerRegistration', 601), Lcom_sencha_gxt_theme_blue_client_toolbar_BlueToolBarAppearance_1BlueToolBarResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.toolbar.', 'BlueToolBarAppearance_BlueToolBarResources_default_InlineClientBundleGenerator$1', 1016), Lcom_sencha_gxt_core_client_resources_CommonStyles_2_classLit = createForClass('com.sencha.gxt.core.client.resources.', 'CommonStyles', 565), Lcom_sencha_gxt_core_client_resources_CommonStyles$CommonStylesDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.core.client.resources.', 'CommonStyles$CommonStylesDefaultAppearance', 566), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection', 408), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;', 1518, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator', 409), Lcom_sencha_gxt_core_shared_FastMap_2_classLit = createForClass('com.sencha.gxt.core.shared.', 'FastMap', 594), Lcom_sencha_gxt_core_shared_FastMap$FastMapEntry_2_classLit = createForClass('com.sencha.gxt.core.shared.', 'FastMap$FastMapEntry', 599), Lcom_sencha_gxt_core_shared_FastMap$1_2_classLit = createForClass('com.sencha.gxt.core.shared.', 'FastMap$1', 596), Lcom_sencha_gxt_core_shared_FastMap$1$1_2_classLit = createForClass('com.sencha.gxt.core.shared.', 'FastMap$1$1', 597), Lcom_sencha_gxt_core_shared_FastMap$2_2_classLit = createForClass('com.sencha.gxt.core.shared.', 'FastMap$2', 598), Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared.', 'SafeHtmlString', 329), Lcom_sencha_gxt_widget_core_client_event_ExpandItemEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'ExpandItemEvent', 1229), Lcom_sencha_gxt_widget_core_client_event_CollapseItemEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'CollapseItemEvent', 1221), Lcom_sencha_gxt_widget_core_client_event_BeforeCheckChangeEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'BeforeCheckChangeEvent', 1203), Ljava_util_Comparators$1_2_classLit = createForClass('java.util.', 'Comparators$1', 1460), Lcom_sencha_gxt_core_client_util_Region_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'Region', 586), Lcom_sencha_gxt_core_client_util_Padding_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'Padding', 587), Lcom_sencha_gxt_cell_core_client_AbstractEventCell_2_classLit = createForClass('com.sencha.gxt.cell.core.client.', 'AbstractEventCell', 508), Lcom_sencha_gxt_cell_core_client_ResizeCell_2_classLit = createForClass('com.sencha.gxt.cell.core.client.', 'ResizeCell', 511), Lcom_sencha_gxt_cell_core_client_ButtonCell_2_classLit = createForClass('com.sencha.gxt.cell.core.client.', 'ButtonCell', 510), Lcom_sencha_gxt_cell_core_client_TextButtonCell_2_classLit = createForClass('com.sencha.gxt.cell.core.client.', 'TextButtonCell', 513), Lcom_sencha_gxt_cell_core_client_ButtonCell$UnpushHandler_2_classLit = createForClass('com.sencha.gxt.cell.core.client.', 'ButtonCell$UnpushHandler', 512), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent', 260), Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyEvent', 265), Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyCodeEvent', 264), Lcom_google_gwt_event_dom_client_KeyDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyDownEvent', 266), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type', 261), Lcom_sencha_gxt_core_client_util_Size_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'Size', 591), Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ResizeEvent', 277), Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2_classLit = createForClass('com.google.gwt.safehtml.shared.', 'SafeHtmlBuilder', 328), Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyPressEvent', 267), Lcom_sencha_gxt_theme_base_client_menu_MenuBaseAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.menu.', 'MenuBaseAppearance', 844), Lcom_sencha_gxt_theme_blue_client_menu_BlueMenuAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.menu.', 'BlueMenuAppearance', 943), Lcom_sencha_gxt_widget_core_client_container_VerticalLayoutContainer_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'VerticalLayoutContainer', 1197), Lcom_sencha_gxt_widget_core_client_container_VerticalLayoutContainer$VerticalLayoutData_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'VerticalLayoutContainer$VerticalLayoutData', 1198), Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$StyleInjectorImpl', 245), Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$1', 244), Lcom_sencha_gxt_theme_base_client_button_ButtonCellDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.button.', 'ButtonCellDefaultAppearance', 674), Lcom_sencha_gxt_core_client_dom_impl_ComputedStyleImpl_2_classLit = createForClass('com.sencha.gxt.core.client.dom.impl.', 'ComputedStyleImpl', 564), Lcom_sencha_gxt_core_client_dom_Layer_2_classLit = createForClass('com.sencha.gxt.core.client.dom.', 'Layer', 535), Lcom_sencha_gxt_core_client_dom_Layer$LayerBaseAppearance_2_classLit = createForClass('com.sencha.gxt.core.client.dom.', 'Layer$LayerBaseAppearance', 536), Lcom_sencha_gxt_theme_blue_client_menu_BlueMenuAppearance_1BlueMenuResources_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.menu.', 'BlueMenuAppearance_BlueMenuResources_opera_default_InlineClientBundleGenerator$1', 945), Lcom_sencha_gxt_core_client_dom_CompositeElement_2_classLit = createForClass('com.sencha.gxt.core.client.dom.', 'CompositeElement', 531), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel', 362), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel', 361), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel', 360), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel', 396), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel', 399), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1', 397), Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$2', 398), Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException', 364), Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$1', 365), Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$2', 366), Lcom_sencha_gxt_widget_core_client_menu_Item_2_classLit = createForClass('com.sencha.gxt.widget.core.client.menu.', 'Item', 1344), Lcom_sencha_gxt_core_client_util_Margins_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'Margins', 585), Lcom_sencha_gxt_widget_core_client_cell_DefaultHandlerManagerContext_2_classLit = createForClass('com.sencha.gxt.widget.core.client.cell.', 'DefaultHandlerManagerContext', 1172), Lcom_sencha_gxt_theme_base_client_button_ButtonCellDefaultAppearance_1ButtonCellResources_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.button.', 'ButtonCellDefaultAppearance_ButtonCellResources_opera_default_InlineClientBundleGenerator$1', 676), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap', 272), Lcom_sencha_gxt_core_client_resources_CommonStyles_1CommonStylesDefaultAppearance_1CommonDefaultResources_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.core.client.resources.', 'CommonStyles_CommonStylesDefaultAppearance_CommonDefaultResources_opera_default_InlineClientBundleGenerator$1', 568), Lcom_sencha_gxt_core_client_GXT_1OS_1linux_2_classLit = createForClass('com.sencha.gxt.core.client.', 'GXT_OS_linux', 521), Lcom_sencha_gxt_core_client_GXT_1OS_1windows_2_classLit = createForClass('com.sencha.gxt.core.client.', 'GXT_OS_windows', 523), Lcom_sencha_gxt_core_client_GXT_1OS_1mac_2_classLit = createForClass('com.sencha.gxt.core.client.', 'GXT_OS_mac', 522), Lcom_sencha_gxt_core_client_util_Rectangle_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'Rectangle', 589), Lcom_sencha_gxt_core_client_dom_Mask_2_classLit = createForClass('com.sencha.gxt.core.client.dom.', 'Mask', 553), Lcom_sencha_gxt_core_client_dom_Mask$MaskDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.core.client.dom.', 'Mask$MaskDefaultAppearance', 554), Lcom_google_gwt_safecss_shared_SafeStylesString_2_classLit = createForClass('com.google.gwt.safecss.shared.', 'SafeStylesString', 325), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImpl', 339), Lcom_sencha_gxt_messages_client_XMessages_1_2_classLit = createForClass('com.sencha.gxt.messages.client.', 'XMessages_', 673), Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLPanel', 377), Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl.', 'ImageResourcePrototype', 323), Lcom_google_gwt_event_logical_shared_SelectionEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'SelectionEvent', 278), Lcom_sencha_gxt_theme_base_client_panel_ContentPanelBaseAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.panel.', 'ContentPanelBaseAppearance', 852), Lcom_sencha_gxt_theme_blue_client_panel_BlueContentPanelAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.panel.', 'BlueContentPanelAppearance', 960), Lcom_sencha_gxt_data_shared_SortDir_2_classLit = createForEnum('com.sencha.gxt.data.shared.', 'SortDir', 605, Ljava_lang_Enum_2_classLit, values_17), _3Lcom_sencha_gxt_data_shared_SortDir_2_classLit = createForArray('[Lcom.sencha.gxt.data.shared.', 'SortDir;', 1519, Lcom_sencha_gxt_data_shared_SortDir_2_classLit), Lcom_sencha_gxt_data_shared_SortDir$1_2_classLit = createForEnum('com.sencha.gxt.data.shared.', 'SortDir$1', 606, Lcom_sencha_gxt_data_shared_SortDir_2_classLit, null), Lcom_sencha_gxt_data_shared_SortDir$2_2_classLit = createForEnum('com.sencha.gxt.data.shared.', 'SortDir$2', 607, Lcom_sencha_gxt_data_shared_SortDir_2_classLit, null), Lcom_sencha_gxt_theme_base_client_container_BoxLayoutDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.container.', 'BoxLayoutDefaultAppearance', 724), Lcom_sencha_gxt_theme_base_client_frame_TableFrame_2_classLit = createForClass('com.sencha.gxt.theme.base.client.frame.', 'TableFrame', 792), Lcom_sencha_gxt_theme_base_client_frame_Frame$FrameOptions_2_classLit = createForClass('com.sencha.gxt.theme.base.client.frame.', 'Frame$FrameOptions', 788), Lcom_sencha_gxt_theme_base_client_button_ButtonTableFrameResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.button.', 'ButtonTableFrameResources_default_InlineClientBundleGenerator$1', 688), Ljava_util_Vector_2_classLit = createForClass('java.util.', 'Vector', 1477), Ljava_util_Stack_2_classLit = createForClass('java.util.', 'Stack', 1476), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImplStandard', 340), Lcom_sencha_gxt_widget_core_client_form_error_SideErrorHandler$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.form.error.', 'SideErrorHandler$1', 1274), Lcom_sencha_gxt_widget_core_client_form_error_SideErrorHandler$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.form.error.', 'SideErrorHandler$2', 1275), Lcom_sencha_gxt_widget_core_client_tips_Tip_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tips.', 'Tip', 1355), Lcom_sencha_gxt_widget_core_client_tips_Tip$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tips.', 'Tip$1', 1356), Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'AttachEvent', 274), Lcom_sencha_gxt_widget_core_client_FocusManagerSupport_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'FocusManagerSupport', 1123), Lcom_sencha_gxt_widget_core_client_container_BorderLayoutContainer$BorderLayoutData_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BorderLayoutContainer$BorderLayoutData', 1180), Lcom_sencha_gxt_widget_core_client_container_BorderLayoutContainer$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BorderLayoutContainer$1', 1174), Lcom_sencha_gxt_widget_core_client_CollapsePanel_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'CollapsePanel', 1102), Lcom_sencha_gxt_widget_core_client_container_BorderLayoutContainer$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.container.', 'BorderLayoutContainer$2', 1175), Lcom_sencha_gxt_widget_core_client_CollapsePanel$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'CollapsePanel$1', 1103), Lcom_sencha_gxt_widget_core_client_CollapsePanel$4_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'CollapsePanel$4', 1104), Lcom_sencha_gxt_widget_core_client_event_SplitBarDragEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'SplitBarDragEvent', 1255), Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'HumanInputEvent', 259), Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseEvent', 258), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent', 268), Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared.', 'SafeUriString', 331), Lcom_sencha_gxt_theme_blue_client_panel_BlueContentPanelAppearance_1BlueContentPanelResources_1opera_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.panel.', 'BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator', 961), Lcom_sencha_gxt_theme_blue_client_panel_BlueContentPanelAppearance_1BlueContentPanelResources_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.panel.', 'BlueContentPanelAppearance_BlueContentPanelResources_opera_default_InlineClientBundleGenerator$1', 962), Lcom_sencha_gxt_theme_base_client_panel_ContentPanelBaseAppearance_1ContentPanelTemplateImpl_2_classLit = createForClass('com.sencha.gxt.theme.base.client.panel.', 'ContentPanelBaseAppearance_ContentPanelTemplateImpl', 853), Lcom_sencha_gxt_widget_core_client_button_ButtonBar_2_classLit = createForClass('com.sencha.gxt.widget.core.client.button.', 'ButtonBar', 1159), Lcom_sencha_gxt_theme_blue_client_BlueThemeAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.', 'BlueThemeAppearance', 912), Lcom_sencha_gxt_theme_base_client_container_BoxLayoutDefaultAppearance_1BoxLayoutBaseResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.container.', 'BoxLayoutDefaultAppearance_BoxLayoutBaseResources_default_InlineClientBundleGenerator$1', 726), Lcom_google_gwt_safecss_shared_SafeStylesBuilder_2_classLit = createForClass('com.google.gwt.safecss.shared.', 'SafeStylesBuilder', 324), Lcom_sencha_gxt_core_client_util_TextMetrics_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'TextMetrics', 592), Ljava_util_EmptyStackException_2_classLit = createForClass('java.util.', 'EmptyStackException', 1463), Lcom_sencha_gxt_widget_core_client_event_RegisterEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'RegisterEvent', 1244), Lcom_sencha_gxt_widget_core_client_event_UnregisterEvent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.event.', 'UnregisterEvent', 1256), Lcom_sencha_gxt_widget_core_client_tips_ToolTip_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tips.', 'ToolTip', 1354), Lcom_sencha_gxt_widget_core_client_tips_ToolTip$Handler_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tips.', 'ToolTip$Handler', 1360), Lcom_sencha_gxt_widget_core_client_tips_ToolTip$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tips.', 'ToolTip$1', 1357), Lcom_sencha_gxt_widget_core_client_tips_ToolTip$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tips.', 'ToolTip$2', 1358), Lcom_sencha_gxt_widget_core_client_tips_ToolTip$3_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tips.', 'ToolTip$3', 1359), Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'LayoutPanel', 392), Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootLayoutPanel', 394), Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootLayoutPanel$1', 395), Lcom_sencha_gxt_theme_base_client_widget_HeaderDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.widget.', 'HeaderDefaultAppearance', 901), Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CellPanel', 367), Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalPanel', 384), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$AutoHorizontalAlignmentConstant', 381), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant', 382), Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasVerticalAlignment$VerticalAlignmentConstant', 383), Lcom_sencha_gxt_theme_blue_client_BlueThemeAppearance_1Bundle_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.', 'BlueThemeAppearance_Bundle_opera_default_InlineClientBundleGenerator$1', 914), Lcom_sencha_gxt_fx_client_Draggable_2_classLit = createForClass('com.sencha.gxt.fx.client.', 'Draggable', 658), Lcom_sencha_gxt_fx_client_Draggable$1_2_classLit = createForClass('com.sencha.gxt.fx.client.', 'Draggable$1', 659), Lcom_sencha_gxt_fx_client_Draggable$2_2_classLit = createForClass('com.sencha.gxt.fx.client.', 'Draggable$2', 660), Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbstractImagePrototype', 363), Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared.', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 327), Lcom_sencha_gxt_core_client_util_Point_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'Point', 588), Lcom_sencha_gxt_widget_core_client_Composite_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'Composite', 1110), Lcom_sencha_gxt_widget_core_client_WidgetComponent_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'WidgetComponent', 1141), Ljava_util_Date_2_classLit = createForClass('java.util.', 'Date', 1461), Lcom_sencha_gxt_theme_base_client_frame_NestedDivFrame_2_classLit = createForClass('com.sencha.gxt.theme.base.client.frame.', 'NestedDivFrame', 789), Lcom_sencha_gxt_theme_blue_client_panel_BlueHeaderAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.panel.', 'BlueHeaderAppearance', 980), Lcom_sencha_gxt_theme_base_client_draggable_DraggableDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.draggable.', 'DraggableDefaultAppearance', 742), Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'ClippedImagePrototype', 412), Lcom_sencha_gxt_widget_core_client_button_IconButton_2_classLit = createForClass('com.sencha.gxt.widget.core.client.button.', 'IconButton', 1166), Lcom_sencha_gxt_widget_core_client_button_ToolButton_2_classLit = createForClass('com.sencha.gxt.widget.core.client.button.', 'ToolButton', 1169), Lcom_sencha_gxt_widget_core_client_button_IconButton$IconConfig_2_classLit = createForClass('com.sencha.gxt.widget.core.client.button.', 'IconButton$IconConfig', 1167), Lcom_sencha_gxt_widget_core_client_form_error_DefaultEditorError_2_classLit = createForClass('com.sencha.gxt.widget.core.client.form.error.', 'DefaultEditorError', 1272), Lcom_sencha_gxt_widget_core_client_tips_ToolTipConfig_2_classLit = createForClass('com.sencha.gxt.widget.core.client.tips.', 'ToolTipConfig', 1361), Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image', 385), Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State', 387), Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$ClippedState', 386), Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State$1', 388), Lcom_sencha_gxt_theme_base_client_tips_TipDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.tips.', 'TipDefaultAppearance', 747), Lcom_sencha_gxt_theme_base_client_field_ErrorTipDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.field.', 'ErrorTipDefaultAppearance', 746), Lcom_sencha_gxt_widget_core_client_ModalPanel_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'ModalPanel', 1126), Lcom_sencha_gxt_widget_core_client_ModalPanel$ModalPanelDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'ModalPanel$ModalPanelDefaultAppearance', 1128), Lcom_sencha_gxt_widget_core_client_ModalPanel$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'ModalPanel$1', 1127), Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client.', 'Layout', 318), Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client.', 'Layout$Layer', 320), Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation', 123), Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client.', 'Layout$1', 319), Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation$1', 124), Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationScheduler', 125), Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationScheduler$AnimationHandle', 126), Lcom_sencha_gxt_theme_blue_client_panel_BlueHeaderAppearance_1BlueHeaderResources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.panel.', 'BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator', 981), Lcom_sencha_gxt_theme_blue_client_panel_BlueHeaderAppearance_1BlueHeaderResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.panel.', 'BlueHeaderAppearance_BlueHeaderResources_default_InlineClientBundleGenerator$1', 982), Lcom_sencha_gxt_theme_base_client_draggable_DraggableDefaultAppearance_1DraggableResources_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.draggable.', 'DraggableDefaultAppearance_DraggableResources_opera_default_InlineClientBundleGenerator$1', 744), Lcom_sencha_gxt_theme_base_client_field_ErrorTipDefaultAppearance_1ErrorTipResources_1opera_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.sencha.gxt.theme.base.client.field.', 'ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator', 760), Lcom_sencha_gxt_theme_base_client_field_ErrorTipDefaultAppearance_1ErrorTipResources_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.field.', 'ErrorTipDefaultAppearance_ErrorTipResources_opera_default_InlineClientBundleGenerator$1', 761), Lcom_sencha_gxt_theme_base_client_field_ErrorTipDefaultAppearance_1ErrorTipFrameResources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.sencha.gxt.theme.base.client.field.', 'ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator', 748), Lcom_sencha_gxt_theme_base_client_field_ErrorTipDefaultAppearance_1ErrorTipFrameResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.field.', 'ErrorTipDefaultAppearance_ErrorTipFrameResources_default_InlineClientBundleGenerator$1', 749), Lcom_sencha_gxt_core_client_dom_Layer_1LayerResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.core.client.dom.', 'Layer_LayerResources_default_InlineClientBundleGenerator$1', 538), Lcom_sencha_gxt_widget_core_client_button_Tools_2_classLit = createForClass('com.sencha.gxt.widget.core.client.button.', 'Tools', 1020), Lcom_sencha_gxt_theme_blue_client_tools_BlueTools_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.tools.', 'BlueTools', 1019), Lcom_sencha_gxt_widget_core_client_SplitBar_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'SplitBar', 1137), Lcom_sencha_gxt_widget_core_client_SplitBar$Handler_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'SplitBar$Handler', 1140), Lcom_sencha_gxt_widget_core_client_SplitBar$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'SplitBar$1', 1138), Lcom_sencha_gxt_widget_core_client_SplitBar$2_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'SplitBar$2', 1139), Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'LayoutCommand', 390), Lcom_google_gwt_user_client_ui_LayoutCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'LayoutCommand$1', 391), Lcom_sencha_gxt_fx_client_Shim_2_classLit = createForClass('com.sencha.gxt.fx.client.', 'Shim', 661), Lcom_sencha_gxt_widget_core_client_menu_MenuItem_2_classLit = createForClass('com.sencha.gxt.widget.core.client.menu.', 'MenuItem', 1343), Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOverEvent', 271), Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOutEvent', 270), Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseMoveEvent', 269), Lcom_sencha_gxt_theme_base_client_button_IconButtonDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.button.', 'IconButtonDefaultAppearance', 717), Lcom_sencha_gxt_theme_blue_client_tools_BlueTools_1BlueToolResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.tools.', 'BlueTools_BlueToolResources_default_InlineClientBundleGenerator$1', 1022), Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client.', 'LayoutImpl', 321), _3Ljava_lang_Boolean_2_classLit = createForArray('[Ljava.lang.', 'Boolean;', 1521, Ljava_lang_Boolean_2_classLit), Lcom_sencha_gxt_fx_client_animation_Fx_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'Fx', 667), Lcom_sencha_gxt_fx_client_animation_Animator_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'Animator', 663), Lcom_sencha_gxt_fx_client_animation_Fx$1_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'Fx$1', 668), Lcom_sencha_gxt_fx_client_animation_BeforeAnimateEvent_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'BeforeAnimateEvent', 665), Lcom_sencha_gxt_fx_client_animation_CancelAnimationEvent_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'CancelAnimationEvent', 666), Lcom_sencha_gxt_fx_client_animation_BaseEffect_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'BaseEffect', 664), Lcom_sencha_gxt_fx_client_animation_Slide_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'Slide', 669), Lcom_sencha_gxt_fx_client_animation_SlideIn_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'SlideIn', 670), Lcom_sencha_gxt_fx_client_animation_SlideOut_2_classLit = createForClass('com.sencha.gxt.fx.client.animation.', 'SlideOut', 671), Lcom_sencha_gxt_theme_base_client_tips_TipDefaultAppearance_1TipDivFrameResources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.sencha.gxt.theme.base.client.tips.', 'TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator', 864), Lcom_sencha_gxt_theme_base_client_tips_TipDefaultAppearance_1TipDivFrameResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.tips.', 'TipDefaultAppearance_TipDivFrameResources_default_InlineClientBundleGenerator$1', 865), Lcom_sencha_gxt_theme_base_client_button_IconButtonDefaultAppearance_1ToolButtonResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.button.', 'IconButtonDefaultAppearance_ToolButtonResources_default_InlineClientBundleGenerator$1', 721), Lcom_sencha_gxt_theme_base_client_widget_SplitBarDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.widget.', 'SplitBarDefaultAppearance', 904), Lcom_sencha_gxt_core_client_util_Scroll_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'Scroll', 590), Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'ClippedImageImpl_TemplateImpl', 411), Lcom_sencha_gxt_theme_base_client_widget_SplitBarDefaultAppearance_1SplitBarResources_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.widget.', 'SplitBarDefaultAppearance_SplitBarResources_opera_default_InlineClientBundleGenerator$1', 906), Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client.', 'Attribute', 133), Lcom_sencha_gxt_theme_base_client_widget_CollapsePanelDefaultAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.widget.', 'CollapsePanelDefaultAppearance', 897), Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client.', 'PrimitiveValueAttribute', 134), Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client.', 'AriaValueAttribute', 132), Lcom_sencha_gxt_widget_core_client_menu_SeparatorMenuItem_2_classLit = createForClass('com.sencha.gxt.widget.core.client.menu.', 'SeparatorMenuItem', 1349), Lcom_sencha_gxt_core_client_util_ClickRepeater_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'ClickRepeater', 575), Lcom_sencha_gxt_core_client_util_ClickRepeater$Handler_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'ClickRepeater$Handler', 578), Lcom_sencha_gxt_core_client_util_ClickRepeater$1_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'ClickRepeater$1', 576), Lcom_sencha_gxt_core_client_util_ClickRepeater$2_2_classLit = createForClass('com.sencha.gxt.core.client.util.', 'ClickRepeater$2', 577), Lcom_sencha_gxt_theme_base_client_widget_CollapsePanelDefaultAppearance_1CollapsePanelResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.base.client.widget.', 'CollapsePanelDefaultAppearance_CollapsePanelResources_default_InlineClientBundleGenerator$1', 899), Lcom_sencha_gxt_theme_base_client_menu_SeparatorMenuItemBaseAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.menu.', 'SeparatorMenuItemBaseAppearance', 849), Lcom_sencha_gxt_theme_blue_client_menu_BlueSeparatorMenuItemAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.menu.', 'BlueSeparatorMenuItemAppearance', 956), Lcom_sencha_gxt_theme_base_client_menu_ItemBaseAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.menu.', 'ItemBaseAppearance', 843), Lcom_sencha_gxt_theme_blue_client_menu_BlueItemAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.menu.', 'BlueItemAppearance', 938), Lcom_sencha_gxt_widget_core_client_ModalPanel_1ModalPanelDefaultAppearance_1ModalPanelResources_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.widget.core.client.', 'ModalPanel_ModalPanelDefaultAppearance_ModalPanelResources_opera_default_InlineClientBundleGenerator$1', 1130), Lcom_google_gwt_animation_client_AnimationSchedulerImpl_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImpl', 127), Lcom_sencha_gxt_theme_blue_client_menu_BlueSeparatorMenuItemAppearance_1BlueSeparatorMenuItemResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.menu.', 'BlueSeparatorMenuItemAppearance_BlueSeparatorMenuItemResources_default_InlineClientBundleGenerator$1', 958), Lcom_sencha_gxt_theme_base_client_menu_MenuItemBaseAppearance_2_classLit = createForClass('com.sencha.gxt.theme.base.client.menu.', 'MenuItemBaseAppearance', 842), Lcom_sencha_gxt_theme_blue_client_menu_BlueMenuItemAppearance_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.menu.', 'BlueMenuItemAppearance', 951), Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplTimer', 128), Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$AnimationHandleImpl', 131), _3Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForArray('[Lcom.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$AnimationHandleImpl;', 1523, Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit), Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$1', 129), Lcom_sencha_gxt_widget_core_client_form_validator_EmptyValidator$DefaultEmptyMessages_2_classLit = createForClass('com.sencha.gxt.widget.core.client.form.validator.', 'EmptyValidator$DefaultEmptyMessages', 1280), Lcom_sencha_gxt_theme_blue_client_menu_BlueItemAppearance_1BlueItemResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.menu.', 'BlueItemAppearance_BlueItemResources_default_InlineClientBundleGenerator$1', 940), Lcom_sencha_gxt_theme_blue_client_menu_BlueMenuItemAppearance_1BlueMenuItemResources_1opera_1opera_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.menu.', 'BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator', 952), Lcom_sencha_gxt_theme_blue_client_menu_BlueMenuItemAppearance_1BlueMenuItemResources_1opera_1opera_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.sencha.gxt.theme.blue.client.menu.', 'BlueMenuItemAppearance_BlueMenuItemResources_opera_opera_default_InlineClientBundleGenerator$1', 953);
$entry(onLoad_1)(4);

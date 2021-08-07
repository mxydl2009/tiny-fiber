/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./src/react/index.js");


var root = document.getElementById('root');
var jsx = /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "hello react"), /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "hi reconciliation"));
Object(_react__WEBPACK_IMPORTED_MODULE_0__["render"])(jsx, root);

/***/ }),

/***/ "./src/react/CreateElement/index.js":
/*!******************************************!*\
  !*** ./src/react/CreateElement/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 创建虚拟DOM对象
 * @param {*} type 元素类型
 * @param {*} props 属性对象
 * @param {*} children 子元素
 */
function createElement(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  // 为文本类型的子节点转换为对象形式，其中文本作为该对象的props.textContent存储
  // 如果子节点的值是false、null、undefined，则要过滤出去
  var childElements = [].concat(children).reduce(function (result, child) {
    if (child !== false && child !== null && child !== undefined) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement('text', {
          textContent: child
        }));
      }
    }

    return result;
  }, []);
  return {
    type: type,
    props: _objectSpread(_objectSpread({}, props), {}, {
      children: childElements
    })
  };
}

/***/ }),

/***/ "./src/react/DOM/createDOMElement.js":
/*!*******************************************!*\
  !*** ./src/react/DOM/createDOMElement.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateNodeElement */ "./src/react/DOM/updateNodeElement.js");

/**
 * 用于根据virtualDOM来创建真实DOM节点
 */

/* harmony default export */ __webpack_exports__["default"] = (function (virtualDOM) {
  // 声明变量来存储真实DOM节点
  var newElement = null;

  if (virtualDOM.type === 'text') {
    // 文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // 元素节点
    newElement = document.createElement(virtualDOM.type); // 添加属性

    Object(_updateNodeElement__WEBPACK_IMPORTED_MODULE_0__["default"])(newElement, virtualDOM);
  }

  return newElement;
});

/***/ }),

/***/ "./src/react/DOM/index.js":
/*!********************************!*\
  !*** ./src/react/DOM/index.js ***!
  \********************************/
/*! exports provided: createDOMElement, updateNodeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOMElement */ "./src/react/DOM/createDOMElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDOMElement", function() { return _createDOMElement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateNodeElement */ "./src/react/DOM/updateNodeElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateNodeElement", function() { return _updateNodeElement__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/react/DOM/updateNodeElement.js":
/*!********************************************!*\
  !*** ./src/react/DOM/updateNodeElement.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateNodeElement; });
/**
 * 处理元素的属性
 * @param {*} newElement 新的DOM元素
 * @param {*} virtualDOM 新的虚拟DOM
 * @param {*} oldVirtualDOM 旧的虚拟DOM
 */
function updateNodeElement(newElement, virtualDOM, oldVirtualDOM) {
  // get props
  var newProps = virtualDOM.props || {};
  var oldProps = oldVirtualDOM && oldVirtualDOM.props || {}; // 按新的props来遍历，这样更新的属性值是新旧props共有的属性以及新的props新增的属性

  Object.keys(newProps).forEach(function (propName) {
    var newPropValue = newProps[propName];
    var oldPropValue = oldProps[propName];

    if (newPropValue !== oldPropValue) {
      // 不管是首次渲染，还是更新属性值，都是在新的属性值不等于旧的属性值情况下，将属性值设为新的属性值
      // 根据属性的类型来做不同的处理
      if (propName.startsWith('on')) {
        // 事件属性, 给元素添加事件监听函数, 这里不去实现react的事件系统了，而是直接给元素添加监听器
        var eventName = propName.toLowerCase().slice(2);
        newElement.addEventListener(eventName, newPropValue);

        if (oldPropValue) {
          // 删除旧的事件监听器
          newElement.removeEventListener(eventName, oldPropValue);
        }
      } else if (propName === 'value' || propName === 'checked') {
        // 表单元素的value和checked属性无法使用setAttribute方法
        newElement[propName] = newPropValue;
      } else if (propName !== 'children') {
        // 不为children
        if (propName === 'className') {
          newElement.setAttribute('class', newPropValue);
        } else {
          newElement.setAttribute(propName, newPropValue);
        }
      }
    }
  }); // 删除旧的props中的属性

  Object.keys(oldProps).forEach(function (propName) {
    if (!newProps[propName]) {
      // 删除旧的propName属性
      if (propName.startsWith('on')) {
        // 事件监听器删除掉
        var eventName = propName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, newProps[propName]);
      } else if (propName !== 'children') {
        // removeAttribute()可以删除value和checked属性
        newElement.removeAttribute(propName);
      }
    }
  });
}

/***/ }),

/***/ "./src/react/Utils/Arrified/index.js":
/*!*******************************************!*\
  !*** ./src/react/Utils/Arrified/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var arrified = function arrified(arg) {
  return Array.isArray(arg) ? arg : [arg];
};

/* harmony default export */ __webpack_exports__["default"] = (arrified);

/***/ }),

/***/ "./src/react/Utils/createStateNode/index.js":
/*!**************************************************!*\
  !*** ./src/react/Utils/createStateNode/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/react/DOM/index.js");


var createStateNode = function createStateNode(fiber) {
  if (fiber.tag === 'host_component') {
    return Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["createDOMElement"])(fiber);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (createStateNode);

/***/ }),

/***/ "./src/react/Utils/createTaskQueue/index.js":
/*!**************************************************!*\
  !*** ./src/react/Utils/createTaskQueue/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 创建任务队列
var createTaskQueue = function createTaskQueue() {
  var taskQueue = []; // 返回管理任务队列的管理器对象

  return {
    push: function push(item) {
      return taskQueue.push(item);
    },
    pop: function pop() {
      return taskQueue.shift();
    },
    isEmpty: function isEmpty() {
      return taskQueue.length === 0;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createTaskQueue);

/***/ }),

/***/ "./src/react/Utils/getTag/index.js":
/*!*****************************************!*\
  !*** ./src/react/Utils/getTag/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getTag = function getTag(vdom) {
  switch (_typeof(vdom.type)) {
    case 'string':
      return 'host_component';
      break;

    default:
      return 'host_component';
      break;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getTag);

/***/ }),

/***/ "./src/react/Utils/index.js":
/*!**********************************!*\
  !*** ./src/react/Utils/index.js ***!
  \**********************************/
/*! exports provided: createTaskQueue, arrified, createStateNode, getTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTaskQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskQueue */ "./src/react/Utils/createTaskQueue/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTaskQueue", function() { return _createTaskQueue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Arrified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arrified */ "./src/react/Utils/Arrified/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrified", function() { return _Arrified__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createStateNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStateNode */ "./src/react/Utils/createStateNode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateNode", function() { return _createStateNode__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _getTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTag */ "./src/react/Utils/getTag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTag", function() { return _getTag__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/*! exports provided: render, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateElement */ "./src/react/CreateElement/index.js");
/* harmony import */ var _reconciliation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reconciliation */ "./src/react/reconciliation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _reconciliation__WEBPACK_IMPORTED_MODULE_1__["render"]; });



/* harmony default export */ __webpack_exports__["default"] = ({
  createElement: _CreateElement__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/react/reconciliation/index.js":
/*!*******************************************!*\
  !*** ./src/react/reconciliation/index.js ***!
  \*******************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils */ "./src/react/Utils/index.js");

var taskQueueManger = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["createTaskQueue"])(); // 定义子任务，也就是说，我们构建Fiber树整个任务会被拆分为各个子任务

var subTask = null;

var getFirstTask = function getFirstTask() {
  // 从任务队列中获取任务
  var task = taskQueueManger.pop(); // 返回最外层节点的Fiber对象

  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    // root Fiber对象不需要effectTag
    // effectTag: null,
    child: null
  };
};
/**
* children可能是对象（因为root的Fiber节点的props.children就是虚拟DOM对象），
* 也可能是数组（除此以外，其他的children都是数组）
* 为了统一处理，要把对象形式的children转为数组
*/


var reconcileChildren = function reconcileChildren(fiber, children) {
  var arrifiedChildren = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["arrified"])(children);
  var index = 0;
  var numberOfElements = arrifiedChildren.length;
  var element = null;
  var newFiber = null;
  var prevFiber = null;

  while (index < numberOfElements) {
    element = arrifiedChildren[index]; // 根据element(虚拟DOM对象)构建Fiber对象

    newFiber = {
      type: element.type,
      props: element.props,
      tag: Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["getTag"])(element),
      effects: [],
      effectTag: 'placement',
      stateNode: null,
      parent: fiber
    };
    newFiber.stateNode = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["createStateNode"])(newFiber); // 双指针构建链表，newFiber和prevFiber两个指针

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevFiber.sibling = newFiber;
    }

    prevFiber = newFiber;
    index++;
  }
};

var executeTask = function executeTask(fiber) {
  // 构建fiber的子节点Fiber对象
  reconcileChildren(fiber, fiber.props.children); // 如果fiber有子节点，则返回子节点，让execute(子节点)继续构建

  if (fiber.child) {
    return fiber.child;
  }

  var currentExecutelyFiber = fiber; // 父级节点存在时，则一直构建，直到没有父级，表明已经到达了root节点

  while (currentExecutelyFiber.parent) {
    // 如果存在兄弟节点，则构建兄弟节点
    if (fiber.sibling) {
      return fiber.sibling;
    } // 没有兄弟节点，则构建父级节点


    currentExecutelyFiber = currentExecutelyFiber.parent;
  }

  console.log(fiber);
};

var workLoop = function workLoop(deadline) {
  // 如果子任务不存在，则获取子任务
  if (!subTask) {
    // 获取任务
    subTask = getFirstTask();
  } // 使用循环来一直执行任务


  while (subTask && deadline.timeRemaining() > 1) {
    // 任务存在且浏览器空余时间＞1ms，执行任务, 并返回下一个任务
    subTask = executeTask(subTask);
  }
};

var performTask = function performTask(deadline) {
  workLoop(deadline);

  if (subTask || !taskQueueManger.isEmpty()) {
    requestIdleCallback(performTask);
  }
};
/**
 * 
 * @param {*} element 
 * @param {*} dom 
 */


var render = function render(element, dom) {
  // 向任务队列添加任务
  // 任务就是根据虚拟DOM构建Fiber对象, 自顶向下，由root这个DOM节点开始，传入虚拟DOM（root也会使用虚拟DOM的形式）
  taskQueueManger.push({
    dom: dom,
    props: {
      children: element
    }
  }); // 指定在浏览器空闲时间执行任务, performTask函数用于调度任务，由其中的workLoop来具体执行

  requestIdleCallback(performTask);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
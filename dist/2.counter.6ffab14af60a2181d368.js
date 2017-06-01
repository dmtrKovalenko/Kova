webpackJsonp([2],{

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(379);
	
	var _counter = __webpack_require__(679);
	
	var _Counter = __webpack_require__(680);
	
	var _Counter2 = _interopRequireDefault(_Counter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  increment: function increment() {
	    return (0, _counter.increment)(1);
	  },
	  doubleAsync: _counter.doubleAsync
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    counter: state.counter
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Counter2.default);

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.doubleAsync = exports.COUNTER_DOUBLE_ASYNC = exports.COUNTER_INCREMENT = undefined;
	
	var _defineProperty2 = __webpack_require__(322);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _promise = __webpack_require__(645);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _ACTION_HANDLERS;
	
	exports.increment = increment;
	exports.default = counterReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';
	var COUNTER_DOUBLE_ASYNC = exports.COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	function increment() {
	  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	  return {
	    type: COUNTER_INCREMENT,
	    payload: value
	  };
	}
	
	/*  This is a thunk, meaning it is a function that immediately
	    returns a function for lazy evaluation. It is incredibly useful for
	    creating async actions, especially when combined with redux-thunk! */
	
	var doubleAsync = exports.doubleAsync = function doubleAsync() {
	  return function (dispatch, getState) {
	    return new _promise2.default(function (resolve) {
	      setTimeout(function () {
	        dispatch({
	          type: COUNTER_DOUBLE_ASYNC,
	          payload: getState().counter
	        });
	        resolve();
	      }, 200);
	    });
	  };
	};
	
	var actions = exports.actions = {
	  increment: increment,
	  doubleAsync: doubleAsync
	
	  // ------------------------------------
	  // Action Handlers
	  // ------------------------------------
	};var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, COUNTER_INCREMENT, function (state, action) {
	  return state + action.payload;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, COUNTER_DOUBLE_ASYNC, function (state, action) {
	  return state * 2;
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = 0;
	function counterReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Counter = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Counter = exports.Counter = function Counter(props) {
	  return _react2.default.createElement(
	    'div',
	    { style: { margin: '0 auto' } },
	    _react2.default.createElement(
	      'h2',
	      null,
	      'Counter: ',
	      props.counter
	    ),
	    _react2.default.createElement(
	      'button',
	      { className: 'btn btn-default', onClick: props.increment },
	      'Increment'
	    ),
	    ' ',
	    _react2.default.createElement(
	      'button',
	      { className: 'btn btn-default', onClick: props.doubleAsync },
	      'Double (Async)'
	    )
	  );
	};
	
	Counter.propTypes = {
	  counter: _react2.default.PropTypes.number.isRequired,
	  doubleAsync: _react2.default.PropTypes.func.isRequired,
	  increment: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Counter;

/***/ })

});
//# sourceMappingURL=2.counter.6ffab14af60a2181d368.js.map
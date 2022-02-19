"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStaticProps = getStaticProps;
exports["default"] = Index;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _link = _interopRequireDefault(require("next/link"));

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(context) {
    var res, posts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://jsonplaceholder.typicode.com/todos');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            posts = _context.sent;
            return _context.abrupt("return", {
              props: {
                posts: posts
              } // will be passed to the page component as props

            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

/*#__PURE__*/
_react["default"].createElement("div");

function Index(_ref) {
  var posts = _ref.posts;
  return __jsx("div", null, posts.map(function (post) {
    return __jsx(_link["default"], {
      key: post.id,
      href: post.id.toString(),
      passHref: true
    }, __jsx("a", null, __jsx("pre", null, post.title)));
  }));
}
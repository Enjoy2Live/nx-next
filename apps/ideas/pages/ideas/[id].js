"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStaticPaths = getStaticPaths;
exports.getStaticProps = getStaticProps;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function getStaticPaths() {
  return _getStaticPaths.apply(this, arguments);
}

function _getStaticPaths() {
  _getStaticPaths = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var res, posts, paths;
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
            // Get the paths we want to pre-render based on posts
            paths = posts.map(function (post) {
              return {
                params: {
                  id: post.id.toString()
                }
              };
            }); // We'll pre-render only these paths at build time.
            // { fallback: false } means other routes should 404.

            return _context.abrupt("return", {
              paths: paths,
              fallback: "blocking"
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticPaths.apply(this, arguments);
}

function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref) {
    var params, res, post;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = _ref.params;
            _context2.next = 3;
            return fetch("https://jsonplaceholder.typicode.com/todos/".concat(params.id));

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return res.json();

          case 6:
            post = _context2.sent;
            return _context2.abrupt("return", {
              props: {
                post: post
              }
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getStaticProps.apply(this, arguments);
}

var PostRoute = function PostRoute(_ref2) {
  var post = _ref2.post;
  return post.title;
};

var _default = PostRoute;
exports["default"] = _default;
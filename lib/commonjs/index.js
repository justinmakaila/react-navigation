"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createStaticNavigation: true,
  Link: true,
  LinkingContext: true,
  NavigationContainer: true,
  ServerContainer: true,
  DarkTheme: true,
  DefaultTheme: true,
  ThemeProvider: true,
  useTheme: true,
  useLinkProps: true,
  useLinkTools: true,
  useScrollToTop: true
};
Object.defineProperty(exports, "DarkTheme", {
  enumerable: true,
  get: function () {
    return _DarkTheme.DarkTheme;
  }
});
Object.defineProperty(exports, "DefaultTheme", {
  enumerable: true,
  get: function () {
    return _DefaultTheme.DefaultTheme;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function () {
    return _Link.Link;
  }
});
Object.defineProperty(exports, "LinkingContext", {
  enumerable: true,
  get: function () {
    return _LinkingContext.LinkingContext;
  }
});
Object.defineProperty(exports, "NavigationContainer", {
  enumerable: true,
  get: function () {
    return _NavigationContainer.NavigationContainer;
  }
});
Object.defineProperty(exports, "ServerContainer", {
  enumerable: true,
  get: function () {
    return _ServerContainer.ServerContainer;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function () {
    return _ThemeProvider.ThemeProvider;
  }
});
Object.defineProperty(exports, "createStaticNavigation", {
  enumerable: true,
  get: function () {
    return _createStaticNavigation.createStaticNavigation;
  }
});
Object.defineProperty(exports, "useLinkProps", {
  enumerable: true,
  get: function () {
    return _useLinkProps.useLinkProps;
  }
});
Object.defineProperty(exports, "useLinkTools", {
  enumerable: true,
  get: function () {
    return _useLinkTools.useLinkTools;
  }
});
Object.defineProperty(exports, "useScrollToTop", {
  enumerable: true,
  get: function () {
    return _useScrollToTop.useScrollToTop;
  }
});
Object.defineProperty(exports, "useTheme", {
  enumerable: true,
  get: function () {
    return _useTheme.useTheme;
  }
});
var _createStaticNavigation = require("./createStaticNavigation");
var _Link = require("./Link");
var _LinkingContext = require("./LinkingContext");
var _NavigationContainer = require("./NavigationContainer");
var _ServerContainer = require("./ServerContainer");
var _DarkTheme = require("./theming/DarkTheme");
var _DefaultTheme = require("./theming/DefaultTheme");
var _ThemeProvider = require("./theming/ThemeProvider");
var _useTheme = require("./theming/useTheme");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
var _useLinkProps = require("./useLinkProps");
var _useLinkTools = require("./useLinkTools");
var _useScrollToTop = require("./useScrollToTop");
var _core = require("@react-navigation/core");
Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _core[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _core[key];
    }
  });
});
//# sourceMappingURL=index.js.map
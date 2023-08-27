import './index.css';
import q, { useContext as _r, useEffect as yr, createContext as br, useState as Er, useCallback as Se } from "react";
import Rr from "react-dom";
function xr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var te = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function wr() {
  if (Oe)
    return $;
  Oe = 1;
  var n = q, a = Symbol.for("react.element"), l = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, g = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(_, d, P) {
    var x, T = {}, S = null, W = null;
    P !== void 0 && (S = "" + P), d.key !== void 0 && (S = "" + d.key), d.ref !== void 0 && (W = d.ref);
    for (x in d)
      s.call(d, x) && !p.hasOwnProperty(x) && (T[x] = d[x]);
    if (_ && _.defaultProps)
      for (x in d = _.defaultProps, d)
        T[x] === void 0 && (T[x] = d[x]);
    return { $$typeof: a, type: _, key: S, ref: W, props: T, _owner: g.current };
  }
  return $.Fragment = l, $.jsx = b, $.jsxs = b, $;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Tr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = q, a = Symbol.for("react.element"), l = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), _ = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ue = "@@iterator";
    function Ne(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Ue];
      return typeof r == "function" ? r : null;
    }
    var I = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        We("error", e, t);
      }
    }
    function We(e, r, t) {
      {
        var o = I.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Le = !1, Me = !1, Ye = !1, Ve = !1, Be = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === p || Be || e === g || e === P || e === x || Ve || e === W || Le || Me || Ye || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === T || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function qe(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case l:
          return "Portal";
        case p:
          return "Profiler";
        case g:
          return "StrictMode";
        case P:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return oe(r) + ".Consumer";
          case b:
            var t = e;
            return oe(t._context) + ".Provider";
          case d:
            return qe(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : j(e.type) || "Memo";
          case S: {
            var c = e, f = c._payload, u = c._init;
            try {
              return j(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, A = 0, ie, se, ue, ce, le, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Je() {
      {
        if (A === 0) {
          ie = console.log, se = console.info, ue = console.warn, ce = console.error, le = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function ze() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ie
            }),
            info: O({}, e, {
              value: se
            }),
            warn: O({}, e, {
              value: ue
            }),
            error: O({}, e, {
              value: ce
            }),
            group: O({}, e, {
              value: le
            }),
            groupCollapsed: O({}, e, {
              value: fe
            }),
            groupEnd: O({}, e, {
              value: de
            })
          });
        }
        A < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = I.ReactCurrentDispatcher, G;
    function L(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            G = o && o[1] || "";
          }
        return `
` + G + e;
      }
    }
    var H = !1, M;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ge();
    }
    function pe(e, r) {
      if (!e || H)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      H = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = z.current, z.current = null, Je();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (C) {
              o = C;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (C) {
              o = C;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            o = C;
          }
          e();
        }
      } catch (C) {
        if (C && o && typeof C.stack == "string") {
          for (var i = C.stack.split(`
`), R = o.stack.split(`
`), m = i.length - 1, h = R.length - 1; m >= 1 && h >= 0 && i[m] !== R[h]; )
            h--;
          for (; m >= 1 && h >= 0; m--, h--)
            if (i[m] !== R[h]) {
              if (m !== 1 || h !== 1)
                do
                  if (m--, h--, h < 0 || i[m] !== R[h]) {
                    var w = `
` + i[m].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, w), w;
                  }
                while (m >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        H = !1, z.current = f, ze(), Error.prepareStackTrace = c;
      }
      var k = e ? e.displayName || e.name : "", Ce = k ? L(k) : "";
      return typeof e == "function" && M.set(e, Ce), Ce;
    }
    function He(e, r, t) {
      return pe(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ke(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case P:
          return L("Suspense");
        case x:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return He(e.render);
          case T:
            return Y(e.type, r, t);
          case S: {
            var o = e, c = o._payload, f = o._init;
            try {
              return Y(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, me = {}, he = I.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Xe(e, r, t, o, c) {
      {
        var f = Function.call.bind(V);
        for (var u in e)
          if (f(e, u)) {
            var i = void 0;
            try {
              if (typeof e[u] != "function") {
                var R = Error((o || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              i = e[u](r, u, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              i = m;
            }
            i && !(i instanceof Error) && (B(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, u, typeof i), B(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, B(c), E("Failed %s type: %s", t, i.message), B(null));
          }
      }
    }
    var Qe = Array.isArray;
    function K(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function _e(e) {
      if (rr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), ge(e);
    }
    var F = I.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be, X;
    X = {};
    function nr(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = j(F.current.type);
        X[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(F.current.type), e.ref), X[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          ye || (ye = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          be || (be = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, o, c, f, u) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function cr(e, r, t, o, c) {
      {
        var f, u = {}, i = null, R = null;
        t !== void 0 && (_e(t), i = "" + t), ar(r) && (_e(r.key), i = "" + r.key), nr(r) && (R = r.ref, or(r, c));
        for (f in r)
          V.call(r, f) && !tr.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (f in m)
            u[f] === void 0 && (u[f] = m[f]);
        }
        if (i || R) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ir(u, h), R && sr(u, h);
        }
        return ur(e, i, R, c, o, F.current, u);
      }
    }
    var Q = I.ReactCurrentOwner, Ee = I.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Re() {
      {
        if (Q.current) {
          var e = j(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function fr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var o = "";
        e && e._owner && e._owner !== Q.current && (o = " It was passed a child from " + j(e._owner.type) + "."), D(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            re(o) && we(o, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Ne(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), u; !(u = f.next()).done; )
              re(u.value) && we(u.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = j(r);
          Xe(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var c = j(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            D(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function je(e, r, t, o, c, f) {
      {
        var u = Ze(e);
        if (!u) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = lr(c);
          R ? i += R : i += Re();
          var m;
          e === null ? m = "null" : K(e) ? m = "array" : e !== void 0 && e.$$typeof === a ? (m = "<" + (j(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, i);
        }
        var h = cr(e, r, t, c, f);
        if (h == null)
          return h;
        if (u) {
          var w = r.children;
          if (w !== void 0)
            if (o)
              if (K(w)) {
                for (var k = 0; k < w.length; k++)
                  Te(w[k], e);
                Object.freeze && Object.freeze(w);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(w, e);
        }
        return e === s ? vr(h) : dr(h), h;
      }
    }
    function pr(e, r, t) {
      return je(e, r, t, !0);
    }
    function mr(e, r, t) {
      return je(e, r, t, !1);
    }
    var hr = mr, gr = pr;
    U.Fragment = s, U.jsx = hr, U.jsxs = gr;
  }()), U;
}
process.env.NODE_ENV === "production" ? te.exports = wr() : te.exports = Tr();
var v = te.exports;
let Z;
const jr = new Uint8Array(16);
function Cr() {
  if (!Z && (Z = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Z))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Z(jr);
}
const y = [];
for (let n = 0; n < 256; ++n)
  y.push((n + 256).toString(16).slice(1));
function Sr(n, a = 0) {
  return (y[n[a + 0]] + y[n[a + 1]] + y[n[a + 2]] + y[n[a + 3]] + "-" + y[n[a + 4]] + y[n[a + 5]] + "-" + y[n[a + 6]] + y[n[a + 7]] + "-" + y[n[a + 8]] + y[n[a + 9]] + "-" + y[n[a + 10]] + y[n[a + 11]] + y[n[a + 12]] + y[n[a + 13]] + y[n[a + 14]] + y[n[a + 15]]).toLowerCase();
}
const Or = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ie = {
  randomUUID: Or
};
function Pr(n, a, l) {
  if (Ie.randomUUID && !a && !n)
    return Ie.randomUUID();
  n = n || {};
  const s = n.random || (n.rng || Cr)();
  if (s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, a) {
    l = l || 0;
    for (let g = 0; g < 16; ++g)
      a[l + g] = s[g];
    return a;
  }
  return Sr(s);
}
var Ae = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var a = {}.hasOwnProperty;
    function l() {
      for (var s = [], g = 0; g < arguments.length; g++) {
        var p = arguments[g];
        if (p) {
          var b = typeof p;
          if (b === "string" || b === "number")
            s.push(p);
          else if (Array.isArray(p)) {
            if (p.length) {
              var _ = l.apply(null, p);
              _ && s.push(_);
            }
          } else if (b === "object") {
            if (p.toString !== Object.prototype.toString && !p.toString.toString().includes("[native code]")) {
              s.push(p.toString());
              continue;
            }
            for (var d in p)
              a.call(p, d) && p[d] && s.push(d);
          }
        }
      }
      return s.join(" ");
    }
    n.exports ? (l.default = l, n.exports = l) : window.classNames = l;
  })();
})(Ae);
var Ir = Ae.exports;
const Fe = /* @__PURE__ */ xr(Ir), Dr = "_Icon_1y7iq_1", kr = "_small_1y7iq_9", De = {
  Icon: Dr,
  small: kr
};
function J({
  size: n = "default",
  children: a,
  className: l,
  ...s
}) {
  return /* @__PURE__ */ v.jsx(
    "span",
    {
      className: Fe([De.Icon, De[n], l]),
      ...s,
      children: a
    }
  );
}
function Ar({ size: n, fill: a, className: l, ...s }) {
  return /* @__PURE__ */ v.jsx(J, { size: n, className: l, ...s, children: /* @__PURE__ */ v.jsx(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      xmlns: "http://www.w3.org/2000/svg",
      fill: a,
      children: /* @__PURE__ */ v.jsx("path", { d: "m6.94 6 4.2-4.193a.67.67 0 0 0-.947-.947L6 5.06 1.807.86a.67.67 0 0 0-.947.947L5.06 6l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L6 6.94l4.193 4.2a.667.667 0 0 0 1.093-.217.666.666 0 0 0-.146-.73L6.94 6Z" })
    }
  ) });
}
function Fr({ size: n, fill: a, className: l, ...s }) {
  return /* @__PURE__ */ v.jsx(J, { size: n, className: l, ...s, children: /* @__PURE__ */ v.jsx(
    "svg",
    {
      width: "28",
      height: "28",
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      fill: a,
      children: /* @__PURE__ */ v.jsx("path", { d: "M14 .667a13.333 13.333 0 1 0 0 26.666A13.333 13.333 0 0 0 14 .667Zm0 24A10.667 10.667 0 0 1 3.333 14a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 14 24.667Zm8.413-4.134L7.467 5.587A10.56 10.56 0 0 1 14 3.333 10.667 10.667 0 0 1 24.667 14a10.56 10.56 0 0 1-2.254 6.533Z" })
    }
  ) });
}
function $r({ size: n, fill: a, className: l, ...s }) {
  return /* @__PURE__ */ v.jsx(J, { size: n, className: l, ...s, children: /* @__PURE__ */ v.jsx(
    "svg",
    {
      width: "28",
      height: "28",
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      fill: a,
      children: /* @__PURE__ */ v.jsx("path", { d: "m17.627 9.72-5.72 5.733-2.2-2.2a1.334 1.334 0 1 0-1.88 1.88l3.133 3.147a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.334 1.334 0 1 0-1.88-1.893ZM14 .667a13.333 13.333 0 1 0 0 26.666A13.333 13.333 0 0 0 14 .667Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" })
    }
  ) });
}
function Ur({ size: n, fill: a, className: l, ...s }) {
  return /* @__PURE__ */ v.jsx(J, { size: n, className: l, ...s, children: /* @__PURE__ */ v.jsx(
    "svg",
    {
      width: "28",
      height: "28",
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      fill: a,
      children: /* @__PURE__ */ v.jsx("path", { d: "M14 12.667A1.333 1.333 0 0 0 12.667 14v5.333a1.333 1.333 0 1 0 2.666 0V14A1.333 1.333 0 0 0 14 12.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28c-.117.13-.212.278-.28.44a1.12 1.12 0 0 0-.106.507 1.333 1.333 0 0 0 .386.946c.13.118.279.213.44.28a1.334 1.334 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM14 .667a13.333 13.333 0 1 0 0 26.666A13.333 13.333 0 0 0 14 .667Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" })
    }
  ) });
}
const Nr = () => {
  const n = _r($e);
  if (n === void 0)
    throw new Error("useToasts must be used within a ToastsProvider");
  return n;
}, Wr = "_Toast_6jcxt_1", Lr = "_IndicationIcon_6jcxt_16", Mr = "_Content_6jcxt_19", Yr = "_warning_6jcxt_39", Vr = "_Close_6jcxt_51", Br = "_success_6jcxt_54", Zr = "_danger_6jcxt_69", N = {
  Toast: Wr,
  IndicationIcon: Lr,
  Content: Mr,
  warning: Yr,
  Close: Vr,
  success: Br,
  danger: Zr
}, ke = {
  warning: { title: "Warning ", icon: Ur },
  success: { title: "Success", icon: $r },
  danger: { title: "Danger", icon: Fr }
};
function qr({
  id: n,
  type: a = "success",
  title: l,
  message: s,
  duration: g = 6,
  ...p
}) {
  const b = ke[a].icon, { removeToast: _ } = Nr();
  return yr(() => {
    const d = setTimeout(() => {
      _(n);
    }, g * 1e3);
    return () => {
      clearTimeout(d);
    };
  }, [g, n, _]), /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: Fe([N.Toast, N[a]]),
      ...p,
      children: [
        /* @__PURE__ */ v.jsx(b, { className: N.IndicationIcon }),
        /* @__PURE__ */ v.jsxs("div", { className: N.Content, children: [
          /* @__PURE__ */ v.jsx("h2", { children: l || ke[a].title }),
          /* @__PURE__ */ v.jsx("p", { children: s })
        ] }),
        /* @__PURE__ */ v.jsx(
          Ar,
          {
            className: N.Close,
            size: "small",
            onClick: () => _(n)
          }
        )
      ]
    },
    n
  );
}
const Jr = q.memo(qr), zr = "_ToastsContainer_ex74s_1", Gr = {
  ToastsContainer: zr
}, Hr = ({ toasts: n }) => /* @__PURE__ */ v.jsx("ul", { className: Gr.ToastsContainer, children: n.map((a) => /* @__PURE__ */ v.jsx(Jr, { ...a }, a.id)) }), $e = br(
  void 0
), Qr = ({
  children: n
}) => {
  const [a, l] = Er([]), s = Se((b) => {
    const _ = Pr();
    l((d) => [...d, { ...b, id: _ }]);
  }, []), g = Se((b) => {
    l(
      (_) => _.filter((d) => d.id !== b)
    );
  }, []), p = q.useMemo(
    () => ({ createToast: s, removeToast: g }),
    [s, g]
  );
  return /* @__PURE__ */ v.jsxs($e.Provider, { value: p, children: [
    Rr.createPortal(
      /* @__PURE__ */ v.jsx(Hr, { toasts: a }),
      document.body
    ),
    n
  ] });
};
export {
  Qr as ToastsProvider,
  Nr as useToasts
};

!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports._ = t())
    : (e._ = t());
})(window, function() {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var i in e)
            n.d(
              r,
              i,
              function(t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })([
    function(e, t, n) {
      const { FormValidate: r, Validate: i } = n(1).default;
      e.exports = { Validate: i, FormValidate: r };
    },
    function(e, t, n) {
      'use strict';
      function r() {
        const { form: e } = c.form;
        return (
          [...e.elements]
            .filter(e => 'submit' !== e.type)
            .filter(e => 'FORM' == e.parentElement.tagName)
            .forEach(e => {
              'fieldset' == e.type
                ? ((c.values[e.name] = {}),
                  [...e.elements].forEach(t => {
                    c.values = {
                      ...c.values,
                      [e.name]: { ...c.values[e.name], [t.name]: t.value }
                    };
                  }))
                : 'select-multiple' == e.type
                ? (c.values = {
                    ...c.values,
                    [e.name]: [...e.options]
                      .filter(e => 1 == e.selected)
                      .map(e => e.value)
                  })
                : (c.values = { ...c.values, [e.name]: e.value });
            }),
          c.values
        );
      }
      n.r(t);
      const i = (e, t) => ({ valid: e, message: t });
      function s(e, { success: t, error: n }) {
        return { valid: i.bind(i, !0, t), invalid: i.bind(i, !1, n) }[e];
      }
      function u(e) {
        return e || { success: 'Field is valid', error: 'Field is not valid' };
      }
      function a(e, t) {
        let {
          form: { messages: n }
        } = c;
        if ('string' == typeof e) return { [t]: s(e, u(n[t]))() };
        {
          let r = {};
          for (let i in e) r[t] = { ...r[t], [i]: s(e[i], u(n[t]))() };
          return r;
        }
      }
      function o() {
        var e;
        c.validate.errors =
          ((e = c.validate.messages),
          [
            ...Object.keys(e)
              .filter(t => null == e[t].valid)
              .map(
                t =>
                  Object.keys(e[t])
                    .filter(n => !e[t][n].valid)
                    .map(n => ({ [t]: e[t][n] }))[0]
              ),
            ...Object.keys(e)
              .filter(t => 0 == e[t].valid)
              .map(t => ({ [t]: e[t] }))
          ]);
        const t = 0 === c.validate.errors.length;
        return {
          values: r(),
          errors: c.validate.errors,
          isSubmitting: t,
          isValidating: t
        };
      }
      function l({ type: e, name: t }) {
        const { schema: n } = c.form;
        return { field: 'fieldset' === e ? n[t].getter : n[t], name: t };
      }
      function f({ field: e, name: t }) {
        return (
          (c.validate.messages = {
            ...c.validate.messages,
            ...a(e.rule(c.values[t]), t)
          }),
          { messages: c.validate.messages }
        );
      }
      const c = {
          form: {},
          values: {},
          submit: {},
          validate: { submitCount: 0, messages: {}, errors: [] },
          subscirbeValues: {},
          subscirbeMessages: {},
          onMessages: function(e) {
            const t = this;
            this.subscirbeMessages(function() {
              e(t.validate.messages);
            });
          },
          onSubmit: function(e) {
            this.submit(function() {
              e(o());
            });
          },
          onValues: function(e) {
            this.subscirbeValues(function() {
              e(r());
            });
          }
        },
        d = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
        m = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg|ico|tiff|tif|jpeg|cur|apng|webp|bmp)/g,
        p = /^-?[0-9]+$/,
        g = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        b = /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)|(lime|aqua|teal|navy|blue|olive|yellow|fuchsia|purple|red|maroon|green|gray|white|black|silver)/,
        v = e => (e ? 'valid' : 'invalid'),
        h = e => 'valid' === e,
        y = e => !0 === e,
        O = e =>
          0 === [[], void 0, null, '', {}, ' '].filter(t => t === e).length;
      var j = function() {
        return Object.setPrototypeOf(
          {
            rule: function(e) {
              return v(
                ((e, t) => {
                  const n = Object.keys(t);
                  if (RegExp(p).test(e))
                    return n
                      .map(
                        n =>
                          ({
                            minLength: e.toString().length >= t.minLength,
                            maxLength: e.toString().length <= t.maxLength,
                            validator: O(e)
                          }[n])
                      )
                      .every(y);
                })(e, this.getRules())
              );
            },
            minLength: function(e) {
              return this.setRule({ minLength: e }), this;
            },
            maxLength: function(e) {
              return this.setRule({ maxLength: e }), this;
            }
          },
          D()
        );
      };
      var x = function() {
        return Object.setPrototypeOf(
          {
            contains: function(e) {
              return this.setRule({ field: e }), this;
            },
            rule: function(e) {
              if (Array.isArray(e)) {
                const { field: t } = this.getRules();
                return (({ values: e, field: t }) => {
                  let n = [],
                    r = !1;
                  return (
                    e.forEach(e => {
                      t.getter
                        ? ((r = !0), n.push(t.getter.rule(e)))
                        : n.push(t.rule(e));
                    }),
                    r ? n[0] : v(n.every(h))
                  );
                })({ values: e, field: t });
              }
              return v(!1);
            }
          },
          D()
        );
      };
      const R = e => RegExp(d).test(e),
        w = function(e, t) {
          return RegExp(e).test(t);
        };
      const E = (e, t) => {
          let n = [];
          return (
            n.push('string' == typeof e),
            t.min && n.push(e.length >= t.min),
            t.max && n.push(e.length <= t.max),
            n.every(y)
          );
        },
        P = e => RegExp(g).test(e),
        L = (e, { min: t, max: n }) => {
          const r = new Date(e);
          let i = [];
          if ((i.push(!isNaN(Date.parse(e))), t)) {
            const e = new Date(t);
            i.push(r.getTime() >= e.getTime());
          }
          if (n) {
            const e = new Date(n);
            i.push(r.getTime() >= e.getTime());
          }
          return i.every(y);
        },
        M = e => RegExp(b).test(e),
        V = e => RegExp(m).test(e);
      var S = function() {
        return Object.setPrototypeOf(
          {
            rule: function(e) {
              const { validator: t, pattern: n } = this.getRules();
              return v(
                (function(
                  e = 'string',
                  { field: t, value: n, pattern: r, rules: i }
                ) {
                  return {
                    required: O.bind(t, n),
                    url: R.bind(t, n),
                    email: P.bind(t, n),
                    color: M.bind(t, n),
                    image: V.bind(t, n),
                    text: E.bind(t, n, i),
                    date: L.bind(t, n, i),
                    pattern: w.bind(t, r, n),
                    string: E.bind(t, n, i)
                  }[e]();
                })(t, {
                  value: e,
                  pattern: n,
                  field: this,
                  rules: this.getRules()
                })
              );
            },
            type: function(e) {
              return this.setRule({ validator: e }), this;
            },
            pattern: function(e) {
              return this.setRule({ pattern: e, validator: 'pattern' }), this;
            },
            min: function(e) {
              return this.setRule({ min: e }), this;
            },
            max: function(e) {
              return this.setRule({ max: e }), this;
            }
          },
          D()
        );
      };
      var _ = function() {
        return Object.setPrototypeOf(
          {
            rule: function(e) {
              return v('boolean' == typeof e);
            }
          },
          D()
        );
      };
      var k = function() {
        return Object.setPrototypeOf(
          {
            keys: function(e) {
              return (
                this.setRule({ fields: e, type: 'object' }),
                Object.setPrototypeOf(e, { getter: this }),
                e
              );
            },
            rule: function(e) {
              if ('object' == typeof e) {
                const { fields: t } = this.getRules();
                return (function(e, t) {
                  let n = {};
                  return (
                    Object.keys(t).forEach(
                      r => (n = { ...n, [r]: t[r].rule(e[r]) })
                    ),
                    n
                  );
                })(e, t);
              }
              return v(!1);
            }
          },
          D()
        );
      };
      const D = function() {
          let e = {};
          return {
            getRules: function() {
              return e;
            },
            setRule(t) {
              e = { ...e, ...t };
            },
            required: function() {
              return this.setRule({ validator: 'required' }), this;
            }
          };
        },
        F = {
          get number() {
            return j();
          },
          get boolean() {
            return _();
          },
          get string() {
            return S();
          },
          get object() {
            return k();
          },
          get array() {
            return x();
          }
        };
      var T = Object.create(F);
      const q = function(e) {
          const { form: t } = c.form;
          return N(function(n) {
            t.addEventListener(e, n);
          }, e);
        },
        N = function(e, t) {
          return (
            r(),
            'input' === t &&
              ((c.subscirbeMessages = e),
              (c.subscirbeValues = e),
              e(function(e) {
                var t;
                c.validate = f(
                  l(
                    ((t = e.target),
                    c.values.hasOwnProperty(t.name) ? t : t.parentNode)
                  )
                );
              })),
            'submit' === t &&
              ((c.submit = e),
              e(function(e) {
                const { schema: t } = c.form;
                e.preventDefault(),
                  Object.keys(t).forEach(e => {
                    f(l(document.getElementsByName(e)[0]));
                  });
              })),
            'DOMContentLoaded' === t && (q('input'), q('submit')),
            c
          );
        };
      t.default = {
        FormValidate: function(e, t) {
          const n = document.querySelector('.' + e);
          return (c.form = { form: n, ...t }), q('DOMContentLoaded');
        },
        Validate: T
      };
    }
  ]);
});

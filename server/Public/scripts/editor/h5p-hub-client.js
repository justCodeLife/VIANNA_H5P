!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 30)
}([function (e, t, n) {
    "use strict";
    e.exports = n(34)
}, function (e, t, n) {
    e.exports = n(38)()
}, function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function (e, t) {
    function n(t) {
        return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(t)
    }

    e.exports = n
}, function (e, t) {
    e.exports = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    e.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
}, function (e, t, n) {
    var r = n(17);
    e.exports = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && r(e, t)
    }
}, function (e, t, n) {
    var r = n(11), i = n(3);
    e.exports = function (e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? i(e) : t
    }
}, function (e, t) {
    function n() {
        return e.exports = n = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, n.apply(this, arguments)
    }

    e.exports = n
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n.d(t, "a", (function () {
            return te
        }));
        var r = n(16), i = n.n(r), a = n(28), o = n.n(a), l = n(14), s = n.n(l), u = n(12), c = n.n(u), f = n(6),
            d = n.n(f), p = n(3), h = n.n(p), m = n(7), y = n.n(m), g = n(8), b = n.n(g), v = n(4), w = n.n(v),
            L = n(2), M = n.n(L), E = n(9), C = n.n(E), S = n(5), T = n.n(S), x = n(11), N = n.n(x), j = n(0),
            D = n.n(j);

        function k(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = w()(e);
                if (t) {
                    var i = w()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return b()(this, n)
            }
        }

        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach((function (t) {
                    M()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var P = "object" === ("undefined" == typeof self ? "undefined" : N()(self)) && self.self === self ? self : "object" === (void 0 === e ? "undefined" : N()(e)) && e.global === e || "object" === (void 0 === e ? "undefined" : N()(e)) && e.GLOBAL === e ? e : {};
        P.__REACT_ASYNC__ = P.__REACT_ASYNC__ || {};
        var A, R = function () {
        }, z = function e() {
            T()(this, e), this.abort = R, this.signal = {}
        };
        try {
            A = n(1)
        } catch (e) {
        }
        var F, _ = A && A.oneOfType([A.node, A.func]), U = A && A.shape({
            initialValue: A.any,
            data: A.any,
            error: A.instanceOf(Error),
            value: A.any,
            startedAt: A.instanceOf(Date),
            finishedAt: A.instanceOf(Date),
            status: A.oneOf(["initial", "pending", "fulfilled", "rejected"]),
            isInitial: A.bool,
            isPending: A.bool,
            isLoading: A.bool,
            isFulfilled: A.bool,
            isResolved: A.bool,
            isRejected: A.bool,
            isSettled: A.bool,
            counter: A.number,
            promise: A.instanceOf(Promise),
            run: A.func,
            reload: A.func,
            cancel: A.func,
            setData: A.func,
            setError: A.func
        }), Q = A && {
            Async: {
                children: _,
                promise: A.instanceOf(Promise),
                promiseFn: A.func,
                deferFn: A.func,
                watch: A.any,
                watchFn: A.func,
                initialValue: A.any,
                onResolve: A.func,
                onReject: A.func,
                reducer: A.func,
                dispatcher: A.func,
                debugLabel: A.string,
                suspense: A.bool
            },
            Initial: {children: _, state: U.isRequired, persist: A.bool},
            Pending: {children: _, state: U.isRequired, initial: A.bool},
            Fulfilled: {children: _, state: U.isRequired, persist: A.bool},
            Rejected: {children: _, state: U.isRequired, persist: A.bool},
            Settled: {children: _, state: U.isRequired, persist: A.bool}
        }, Y = function (e) {
            if ("function" == typeof e) {
                for (var t = e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                return t.apply(void 0, r)
            }
            return e
        }, B = function (e) {
            var t = e.children, n = e.persist, r = e.state, i = void 0 === r ? {} : r;
            return D.a.createElement(D.a.Fragment, null, i.isInitial || n && !i.data ? Y(t, i) : null)
        }, W = function (e) {
            var t = e.children, n = e.initial, r = e.state, i = void 0 === r ? {} : r;
            return D.a.createElement(D.a.Fragment, null, !i.isPending || n && i.value ? null : Y(t, i))
        }, V = function (e) {
            var t = e.children, n = e.persist, r = e.state, i = void 0 === r ? {} : r;
            return D.a.createElement(D.a.Fragment, null, i.isFulfilled || n && i.data ? Y(t, i.data, i) : null)
        }, q = function (e) {
            var t = e.children, n = e.persist, r = e.state, i = void 0 === r ? {} : r;
            return D.a.createElement(D.a.Fragment, null, i.isRejected || n && i.error ? Y(t, i.error, i) : null)
        }, H = function (e) {
            var t = e.children, n = e.persist, r = e.state, i = void 0 === r ? {} : r;
            return D.a.createElement(D.a.Fragment, null, i.isSettled || n && i.value ? Y(t, i) : null)
        };
        Q && (B.propTypes = Q.Initial, W.propTypes = Q.Pending, V.propTypes = Q.Fulfilled, q.propTypes = Q.Rejected, H.propTypes = Q.Settled), function (e) {
            e.initial = "initial", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected"
        }(F || (F = {}));
        var G = function (e) {
            return {
                status: e,
                isInitial: e === F.initial,
                isPending: e === F.pending,
                isLoading: e === F.pending,
                isFulfilled: e === F.fulfilled,
                isResolved: e === F.fulfilled,
                isRejected: e === F.rejected,
                isSettled: e === F.fulfilled || e === F.rejected
            }
        }, Z = function () {
        };
        Object.setPrototypeOf ? Object.setPrototypeOf(Z, Promise) : Z.__proto__ = Promise, Z.prototype = C()(Object.create(Promise.prototype), {
            finally: function () {
                return this
            }, catch: function () {
                return this
            }, then: function () {
                return this
            }
        });
        var K, X = new Z;
        !function (e) {
            e.start = "start", e.cancel = "cancel", e.fulfill = "fulfill", e.reject = "reject"
        }(K || (K = {}));
        var J = function (e) {
            var t = e.initialValue, n = e.promise, r = e.promiseFn;
            return O(O({
                initialValue: t,
                data: t instanceof Error ? void 0 : t,
                error: t instanceof Error ? t : void 0,
                value: t,
                startedAt: n || r ? new Date : void 0,
                finishedAt: t ? new Date : void 0
            }, G(function (e, t) {
                return e instanceof Error ? F.rejected : void 0 !== e ? F.fulfilled : t ? F.pending : F.initial
            }(t, n || r))), {}, {counter: 0, promise: X})
        }, $ = function (e, t) {
            switch (t.type) {
                case K.start:
                    return O(O(O({}, e), {}, {
                        startedAt: new Date,
                        finishedAt: void 0
                    }, G(F.pending)), {}, {counter: t.meta.counter, promise: t.meta.promise});
                case K.cancel:
                    return O(O(O({}, e), {}, {
                        startedAt: void 0,
                        finishedAt: void 0
                    }, G((n = e.error || e.data) instanceof Error ? F.rejected : void 0 !== n ? F.fulfilled : F.initial)), {}, {
                        counter: t.meta.counter,
                        promise: t.meta.promise
                    });
                case K.fulfill:
                    return O(O(O({}, e), {}, {
                        data: t.payload,
                        value: t.payload,
                        error: void 0,
                        finishedAt: new Date
                    }, G(F.fulfilled)), {}, {promise: t.meta.promise});
                case K.reject:
                    return O(O(O({}, e), {}, {
                        error: t.payload,
                        value: t.payload,
                        finishedAt: new Date
                    }, G(F.rejected)), {}, {promise: t.meta.promise});
                default:
                    return e
            }
            var n
        }, ee = function (e) {
            return function (t) {
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                e.apply(void 0, [t].concat(r)), t.type === K.start && "function" == typeof t.payload && t.payload()
            }
        };
        D.a.Component;
        var te = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Async",
                n = D.a.createContext(void 0), r = n.Consumer, i = n.Provider;

            function a(e) {
                var t = e.children;
                return D.a.createElement(r, null, (function (e) {
                    if (!e) throw new Error("this component should only be used within an associated <Async> component!");
                    return t(e)
                }))
            }

            var o = function (t) {
                y()(r, t);
                var n = k(r);

                function r(t) {
                    var i;
                    T()(this, r), (i = n.call(this, t)).mounted = !1, i.counter = 0, i.args = [], i.promise = X, i.abortController = new z, i.start = i.start.bind(h()(i)), i.load = i.load.bind(h()(i)), i.run = i.run.bind(h()(i)), i.cancel = i.cancel.bind(h()(i)), i.onResolve = i.onResolve.bind(h()(i)), i.onReject = i.onReject.bind(h()(i)), i.setData = i.setData.bind(h()(i)), i.setError = i.setError.bind(h()(i));
                    var a = t.promise, o = t.promiseFn || e.promiseFn, l = t.initialValue || e.initialValue;
                    i.state = O(O({}, J({initialValue: l, promise: a, promiseFn: o})), {}, {
                        cancel: i.cancel,
                        run: i.run,
                        reload: function () {
                            var e;
                            i.load(), (e = i).run.apply(e, c()(i.args))
                        },
                        setData: i.setData,
                        setError: i.setError
                    }), i.debugLabel = t.debugLabel || e.debugLabel;
                    var s = P.__REACT_ASYNC__.devToolsDispatcher, u = t.reducer || e.reducer,
                        f = t.dispatcher || e.dispatcher || s, d = u ? function (e, t) {
                            return u(e, t, $)
                        } : $, p = ee((function (e, t) {
                            i.setState((function (t) {
                                return d(t, e)
                            }), t)
                        }));
                    return i.dispatch = f ? function (e) {
                        return f(e, p, t)
                    } : p, i
                }

                return d()(r, [{
                    key: "componentDidMount", value: function () {
                        this.mounted = !0, !this.props.promise && this.state.initialValue || this.load()
                    }
                }, {
                    key: "componentDidUpdate", value: function (t) {
                        var n = this.props, r = n.watch, i = n.watchFn, a = void 0 === i ? e.watchFn : i, o = n.promise,
                            l = n.promiseFn;
                        return r !== t.watch || a && a(O(O({}, e), this.props), O(O({}, e), t)) ? (this.counter && this.cancel(), this.load()) : o !== t.promise && (this.counter && this.cancel(), o) || l !== t.promiseFn && (this.counter && this.cancel(), l) ? this.load() : void 0
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.cancel(), this.mounted = !1
                    }
                }, {
                    key: "getMeta", value: function (e) {
                        return O({counter: this.counter, promise: this.promise, debugLabel: this.debugLabel}, e)
                    }
                }, {
                    key: "start", value: function (e) {
                        var t = this;
                        return "AbortController" in P && (this.abortController.abort(), this.abortController = new P.AbortController), this.counter++, this.promise = new Promise((function (n, r) {
                            if (t.mounted) {
                                t.dispatch({
                                    type: K.start, payload: function () {
                                        return e().then(n, r)
                                    }, meta: t.getMeta()
                                })
                            }
                        }))
                    }
                }, {
                    key: "load", value: function () {
                        var t = this, n = this.props.promise, r = this.props.promiseFn || e.promiseFn;
                        if (n) this.start((function () {
                            return n
                        })).then(this.onResolve(this.counter)).catch(this.onReject(this.counter)); else if (r) {
                            var i = O(O({}, e), this.props);
                            this.start((function () {
                                return r(i, t.abortController)
                            })).then(this.onResolve(this.counter)).catch(this.onReject(this.counter))
                        }
                    }
                }, {
                    key: "run", value: function () {
                        for (var t = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        var a = this.props.deferFn || e.deferFn;
                        if (a) {
                            this.args = r;
                            var o = O(O({}, e), this.props);
                            return this.start((function () {
                                return a(r, o, t.abortController)
                            })).then(this.onResolve(this.counter), this.onReject(this.counter))
                        }
                    }
                }, {
                    key: "cancel", value: function () {
                        var t = this.props.onCancel || e.onCancel;
                        t && t(), this.counter++, this.abortController.abort(), this.mounted && this.dispatch({
                            type: K.cancel,
                            meta: this.getMeta()
                        })
                    }
                }, {
                    key: "onResolve", value: function (t) {
                        var n = this;
                        return function (r) {
                            if (n.counter === t) {
                                var i = n.props.onResolve || e.onResolve;
                                n.setData(r, (function () {
                                    return i && i(r)
                                }))
                            }
                            return r
                        }
                    }
                }, {
                    key: "onReject", value: function (t) {
                        var n = this;
                        return function (r) {
                            if (n.counter === t) {
                                var i = n.props.onReject || e.onReject;
                                n.setError(r, (function () {
                                    return i && i(r)
                                }))
                            }
                            return r
                        }
                    }
                }, {
                    key: "setData", value: function (e, t) {
                        return this.mounted && this.dispatch({type: K.fulfill, payload: e, meta: this.getMeta()}, t), e
                    }
                }, {
                    key: "setError", value: function (e, t) {
                        return this.mounted && this.dispatch({
                            type: K.reject,
                            payload: e,
                            error: !0,
                            meta: this.getMeta()
                        }, t), e
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = e.children;
                        if (e.suspense && this.state.isPending && this.promise !== X) throw this.promise;
                        if ("function" == typeof t) {
                            var n = t;
                            return D.a.createElement(i, {value: this.state}, n(this.state))
                        }
                        return null != t ? D.a.createElement(i, {value: this.state}, t) : null
                    }
                }]), r
            }(D.a.Component);
            Q && (o.propTypes = Q.Async);
            var l = function (e) {
                return D.a.createElement(a, null, (function (t) {
                    return D.a.createElement(B, C()({}, e, {state: t}))
                }))
            }, s = function (e) {
                return D.a.createElement(a, null, (function (t) {
                    return D.a.createElement(W, C()({}, e, {state: t}))
                }))
            }, u = function (e) {
                return D.a.createElement(a, null, (function (t) {
                    return D.a.createElement(V, C()({}, e, {state: t}))
                }))
            }, f = function (e) {
                return D.a.createElement(a, null, (function (t) {
                    return D.a.createElement(q, C()({}, e, {state: t}))
                }))
            }, p = function (e) {
                return D.a.createElement(a, null, (function (t) {
                    return D.a.createElement(H, C()({}, e, {state: t}))
                }))
            };
            return l.displayName = "".concat(t, ".Initial"), s.displayName = "".concat(t, ".Pending"), u.displayName = "".concat(t, ".Fulfilled"), f.displayName = "".concat(t, ".Rejected"), p.displayName = "".concat(t, ".Settled"), C()(o, {
                displayName: t,
                Initial: l,
                Pending: s,
                Loading: s,
                Fulfilled: u,
                Resolved: u,
                Rejected: f,
                Settled: p
            })
        }();

        function ne(e, t) {
            var n = "function" == typeof e ? O(O({}, t), {}, {promiseFn: e}) : e, r = Object(j.useRef)(0),
                i = Object(j.useRef)(!0), a = Object(j.useRef)(void 0), o = Object(j.useRef)(n),
                l = Object(j.useRef)(X), u = Object(j.useRef)(new z), f = P.__REACT_ASYNC__.devToolsDispatcher,
                d = n.reducer, p = n.dispatcher, h = void 0 === p ? f : p,
                m = Object(j.useReducer)(d ? function (e, t) {
                    return d(e, t, $)
                } : $, n, J), y = s()(m, 2), g = y[0], b = y[1], v = Object(j.useCallback)(h ? function (e) {
                    return h(e, ee(b), o.current)
                } : ee(b), [h]), w = n.debugLabel, L = Object(j.useCallback)((function (e) {
                    return O({counter: r.current, promise: l.current, debugLabel: w}, e)
                }), [w]), M = Object(j.useCallback)((function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R;
                    return i.current && (v({type: K.fulfill, payload: e, meta: L()}), t()), e
                }), [v, L]), E = Object(j.useCallback)((function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R;
                    return i.current && (v({type: K.reject, payload: e, error: !0, meta: L()}), t()), e
                }), [v, L]), C = n.onResolve, S = n.onReject, T = Object(j.useCallback)((function (e) {
                    return function (t) {
                        return e === r.current && M(t, (function () {
                            return C && C(t)
                        }))
                    }
                }), [M, C]), x = Object(j.useCallback)((function (e) {
                    return function (t) {
                        return e === r.current && E(t, (function () {
                            return S && S(t)
                        }))
                    }
                }), [E, S]), N = Object(j.useCallback)((function (e) {
                    return "AbortController" in P && (u.current.abort(), u.current = new P.AbortController), r.current++, l.current = new Promise((function (t, n) {
                        if (i.current) {
                            v({
                                type: K.start, payload: function () {
                                    return e().then(t, n)
                                }, meta: L()
                            })
                        }
                    }))
                }), [v, L]), D = n.promise, k = n.promiseFn, I = n.initialValue, A = Object(j.useCallback)((function () {
                    var e = I && 0 === r.current;
                    D ? N((function () {
                        return D
                    })).then(T(r.current)).catch(x(r.current)) : k && !e && N((function () {
                        return k(o.current, u.current)
                    })).then(T(r.current)).catch(x(r.current))
                }), [N, D, k, I, T, x]), F = n.deferFn, _ = Object(j.useCallback)((function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    F && (a.current = t, N((function () {
                        return F(t, o.current, u.current)
                    })).then(T(r.current)).catch(x(r.current)))
                }), [N, F, T, x]), U = Object(j.useCallback)((function () {
                    a.current ? _.apply(void 0, c()(a.current)) : A()
                }), [_, A]), Q = n.onCancel, Y = Object(j.useCallback)((function () {
                    Q && Q(), r.current++, u.current.abort(), i.current && v({type: K.cancel, meta: L()})
                }), [Q, v, L]), B = n.watch, W = n.watchFn;
            if (Object(j.useEffect)((function () {
                W && o.current && W(n, o.current) && (o.current = n, A())
            })), Object(j.useEffect)((function () {
                o.current = n
            }), [n]), Object(j.useEffect)((function () {
                r.current && Y(), (D || k) && A()
            }), [D, k, B]), Object(j.useEffect)((function () {
                return function () {
                    i.current = !1
                }
            }), []), Object(j.useEffect)((function () {
                return function () {
                    return Y()
                }
            }), []), Object(j.useDebugValue)(g, (function (e) {
                var t = e.status;
                return "[".concat(r.current, "] ").concat(t)
            })), n.suspense && g.isPending && l.current !== X) throw l.current;
            return Object(j.useMemo)((function () {
                return O(O({}, g), {}, {run: _, reload: U, cancel: Y, setData: M, setError: E})
            }), [g, _, U, Y, M, E])
        }

        var re = function (e) {
            y()(n, e);
            var t = k(n);

            function n(e) {
                var r;
                return T()(this, n), (r = t.call(this, "".concat(e.status, " ").concat(e.statusText))).response = e, Object.setPrototypeOf && Object.setPrototypeOf(h()(r), n.prototype), r
            }

            return n
        }(o()(Error)), ie = function (e, t) {
            return function (n) {
                return n.ok ? "boolean" == typeof t ? t ? n.json() : n : "application/json" === e ? n.json() : n : Promise.reject(new re(n))
            }
        };

        function ae(e) {
            return "object" === N()(e) && "preventDefault" in e
        }

        var oe = function () {
            throw new Error("useAsync requires React v16.8 or up. Upgrade your React version or use the <Async> component instead.")
        };
        j.useEffect, j.useEffect;
        t.b = te
    }).call(this, n(21))
}, function (e, t) {
    function n(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function (e) {
            return typeof e
        } : e.exports = n = function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(t)
    }

    e.exports = n
}, function (e, t, n) {
    var r = n(56), i = n(57), a = n(23), o = n(58);
    e.exports = function (e) {
        return r(e) || i(e) || a(e) || o()
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r, i = n(63), a = (r = i) && r.__esModule ? r : {default: r};
    t.default = a.default, e.exports = t.default
}, function (e, t, n) {
    var r = n(46), i = n(47), a = n(23), o = n(48);
    e.exports = function (e, t) {
        return r(e) || i(e, t) || a(e, t) || o()
    }
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    var r = n(52);
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, i, a = r(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }
}, function (e, t) {
    function n(t, r) {
        return e.exports = n = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        }, n(t, r)
    }

    e.exports = n
}, function (e, t) {
    !function (e) {
        "use strict";
        if (!e.fetch) {
            var t = "URLSearchParams" in e, n = "Symbol" in e && "iterator" in Symbol,
                r = "FileReader" in e && "Blob" in e && function () {
                    try {
                        return new Blob, !0
                    } catch (e) {
                        return !1
                    }
                }(), i = "FormData" in e, a = "ArrayBuffer" in e;
            if (a) var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                l = function (e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                }, s = ArrayBuffer.isView || function (e) {
                    return e && o.indexOf(Object.prototype.toString.call(e)) > -1
                };
            h.prototype.append = function (e, t) {
                e = f(e), t = d(t);
                var n = this.map[e];
                this.map[e] = n ? n + "," + t : t
            }, h.prototype.delete = function (e) {
                delete this.map[f(e)]
            }, h.prototype.get = function (e) {
                return e = f(e), this.has(e) ? this.map[e] : null
            }, h.prototype.has = function (e) {
                return this.map.hasOwnProperty(f(e))
            }, h.prototype.set = function (e, t) {
                this.map[f(e)] = d(t)
            }, h.prototype.forEach = function (e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, h.prototype.keys = function () {
                var e = [];
                return this.forEach((function (t, n) {
                    e.push(n)
                })), p(e)
            }, h.prototype.values = function () {
                var e = [];
                return this.forEach((function (t) {
                    e.push(t)
                })), p(e)
            }, h.prototype.entries = function () {
                var e = [];
                return this.forEach((function (t, n) {
                    e.push([n, t])
                })), p(e)
            }, n && (h.prototype[Symbol.iterator] = h.prototype.entries);
            var u = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            w.prototype.clone = function () {
                return new w(this, {body: this._bodyInit})
            }, v.call(w.prototype), v.call(M.prototype), M.prototype.clone = function () {
                return new M(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new h(this.headers),
                    url: this.url
                })
            }, M.error = function () {
                var e = new M(null, {status: 0, statusText: ""});
                return e.type = "error", e
            };
            var c = [301, 302, 303, 307, 308];
            M.redirect = function (e, t) {
                if (-1 === c.indexOf(t)) throw new RangeError("Invalid status code");
                return new M(null, {status: t, headers: {location: e}})
            }, e.Headers = h, e.Request = w, e.Response = M, e.fetch = function (e, t) {
                return new Promise((function (n, i) {
                    var a = new w(e, t), o = new XMLHttpRequest;
                    o.onload = function () {
                        var e, t, r = {
                            status: o.status,
                            statusText: o.statusText,
                            headers: (e = o.getAllResponseHeaders() || "", t = new h, e.replace(/\r?\n[\t ]+/, " ").split(/\r?\n/).forEach((function (e) {
                                var n = e.split(":"), r = n.shift().trim();
                                if (r) {
                                    var i = n.join(":").trim();
                                    t.append(r, i)
                                }
                            })), t)
                        };
                        r.url = "responseURL" in o ? o.responseURL : r.headers.get("X-Request-URL");
                        var i = "response" in o ? o.response : o.responseText;
                        n(new M(i, r))
                    }, o.onerror = function () {
                        i(new TypeError("Network request failed"))
                    }, o.ontimeout = function () {
                        i(new TypeError("Network request failed"))
                    }, o.open(a.method, a.url, !0), "include" === a.credentials && (o.withCredentials = !0), "responseType" in o && r && (o.responseType = "blob"), a.headers.forEach((function (e, t) {
                        o.setRequestHeader(t, e)
                    })), o.send(void 0 === a._bodyInit ? null : a._bodyInit)
                }))
            }, e.fetch.polyfill = !0
        }

        function f(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function d(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function p(e) {
            var t = {
                next: function () {
                    var t = e.shift();
                    return {done: void 0 === t, value: t}
                }
            };
            return n && (t[Symbol.iterator] = function () {
                return t
            }), t
        }

        function h(e) {
            this.map = {}, e instanceof h ? e.forEach((function (e, t) {
                this.append(t, e)
            }), this) : Array.isArray(e) ? e.forEach((function (e) {
                this.append(e[0], e[1])
            }), this) : e && Object.getOwnPropertyNames(e).forEach((function (t) {
                this.append(t, e[t])
            }), this)
        }

        function m(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function y(e) {
            return new Promise((function (t, n) {
                e.onload = function () {
                    t(e.result)
                }, e.onerror = function () {
                    n(e.error)
                }
            }))
        }

        function g(e) {
            var t = new FileReader, n = y(t);
            return t.readAsArrayBuffer(e), n
        }

        function b(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function v() {
            return this.bodyUsed = !1, this._initBody = function (e) {
                if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e; else if (r && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e; else if (i && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e; else if (t && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString(); else if (a && r && l(e)) this._bodyArrayBuffer = b(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
                    if (!a || !ArrayBuffer.prototype.isPrototypeOf(e) && !s(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = b(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, r && (this.blob = function () {
                var e = m(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function () {
                return this._bodyArrayBuffer ? m(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
            }), this.text = function () {
                var e, t, n, r = m(this);
                if (r) return r;
                if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = y(t), t.readAsText(e), n;
                if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, i && (this.formData = function () {
                return this.text().then(L)
            }), this.json = function () {
                return this.text().then(JSON.parse)
            }, this
        }

        function w(e, t) {
            var n, r, i = (t = t || {}).body;
            if (e instanceof w) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new h(e.headers)), this.method = e.method, this.mode = e.mode, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new h(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), u.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }

        function L(e) {
            var t = new FormData;
            return e.trim().split("&").forEach((function (e) {
                if (e) {
                    var n = e.split("="), r = n.shift().replace(/\+/g, " "), i = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(i))
                }
            })), t
        }

        function M(e, t) {
            t || (t = {}), this.type = "default", this.status = "status" in t ? t.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new h(t.headers), this.url = t.url || "", this._initBody(e)
        }
    }("undefined" != typeof self ? self : this)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.canUseDOM = void 0;
    var r, i = n(68);
    var a = ((r = i) && r.__esModule ? r : {default: r}).default, o = a.canUseDOM ? window.HTMLElement : {};
    t.canUseDOM = a.canUseDOM;
    t.default = o
}, function (e, t, n) {
    "use strict";
    !function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            0;
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
        }
    }(), e.exports = n(35)
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;

    function o(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    e.exports = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                return t[e]
            })).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                r[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, l, s = o(e), u = 1; u < arguments.length; u++) {
            for (var c in n = Object(arguments[u])) i.call(n, c) && (s[c] = n[c]);
            if (r) {
                l = r(n);
                for (var f = 0; f < l.length; f++) a.call(n, l[f]) && (s[l[f]] = n[l[f]])
            }
        }
        return s
    }
}, function (e, t, n) {
    var r = n(24);
    e.exports = function (e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }
}, function (e, t) {
    e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        return [].slice.call(e.querySelectorAll("*"), 0).filter(o)
    };
    /*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
    var r = /input|select|textarea|button|object/;

    function i(e) {
        var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
        if (t && !e.innerHTML) return !0;
        var n = window.getComputedStyle(e);
        return t ? "visible" !== n.getPropertyValue("overflow") || e.scrollWidth <= 0 && e.scrollHeight <= 0 : "none" == n.getPropertyValue("display")
    }

    function a(e, t) {
        var n = e.nodeName.toLowerCase();
        return (r.test(n) && !e.disabled || "a" === n && e.href || t) && function (e) {
            for (var t = e; t && t !== document.body;) {
                if (i(t)) return !1;
                t = t.parentNode
            }
            return !0
        }(e)
    }

    function o(e) {
        var t = e.getAttribute("tabindex");
        null === t && (t = void 0);
        var n = isNaN(t);
        return (n || t >= 0) && a(e, !n)
    }

    e.exports = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.assertNodeList = s, t.setElement = function (e) {
        var t = e;
        if ("string" == typeof t && o.canUseDOM) {
            var n = document.querySelectorAll(t);
            s(n, t), t = "length" in n ? n[0] : n
        }
        return l = t || l
    }, t.validateElement = u, t.hide = function (e) {
        u(e) && (e || l).setAttribute("aria-hidden", "true")
    }, t.show = function (e) {
        u(e) && (e || l).removeAttribute("aria-hidden")
    }, t.documentNotReadyOrSSRTesting = function () {
        l = null
    }, t.resetForTesting = function () {
        l = null
    };
    var r, i = n(67), a = (r = i) && r.__esModule ? r : {default: r}, o = n(19);
    var l = null;

    function s(e, t) {
        if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".")
    }

    function u(e) {
        return !(!e && !l) || ((0, a.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), !1)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = new function e() {
        var t = this;
        !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.register = function (e) {
            -1 === t.openInstances.indexOf(e) && (t.openInstances.push(e), t.emit("register"))
        }, this.deregister = function (e) {
            var n = t.openInstances.indexOf(e);
            -1 !== n && (t.openInstances.splice(n, 1), t.emit("deregister"))
        }, this.subscribe = function (e) {
            t.subscribers.push(e)
        }, this.emit = function (e) {
            t.subscribers.forEach((function (n) {
                return n(e, t.openInstances.slice())
            }))
        }, this.openInstances = [], this.subscribers = []
    };
    t.default = r, e.exports = t.default
}, function (e, t, n) {
    var r = n(4), i = n(17), a = n(53), o = n(54);

    function l(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return e.exports = l = function (e) {
            if (null === e || !a(e)) return e;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(e)) return n.get(e);
                n.set(e, t)
            }

            function t() {
                return o(e, arguments, r(this).constructor)
            }

            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), i(t, e)
        }, l(t)
    }

    e.exports = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(90);
    t.default = function (e, t, n) {
        void 0 === t && (t = 1), e = Math.abs(e);
        for (var i = r.SPECS[n] || r.SPECS.jedec, a = i.radix, o = i.unit, l = 0; e >= a;) e /= a, ++l;
        return e.toFixed(t) + " " + o[l]
    }
}, function (e, t, n) {
    n(31), n(32).polyfill(), H5P = H5P || {}, H5P.HubClient = n(100).default
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    (function (t, n) {
        /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */
        var r;
        r = function () {
            "use strict";

            function e(e) {
                return "function" == typeof e
            }

            var r = Array.isArray ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, i = 0, a = void 0, o = void 0, l = function (e, t) {
                    h[i] = e, h[i + 1] = t, 2 === (i += 2) && (o ? o(m) : w())
                }, s = "undefined" != typeof window ? window : void 0, u = s || {},
                c = u.MutationObserver || u.WebKitMutationObserver,
                f = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function p() {
                var e = setTimeout;
                return function () {
                    return e(m, 1)
                }
            }

            var h = new Array(1e3);

            function m() {
                for (var e = 0; e < i; e += 2) (0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0;
                i = 0
            }

            var y, g, b, v, w = void 0;

            function L(e, t) {
                var n = this, r = new this.constructor(C);
                void 0 === r[E] && P(r);
                var i = n._state;
                if (i) {
                    var a = arguments[i - 1];
                    l((function () {
                        return I(i, r, a, n._result)
                    }))
                } else D(n, r, e, t);
                return r
            }

            function M(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(C);
                return T(t, e), t
            }

            f ? w = function () {
                return t.nextTick(m)
            } : c ? (g = 0, b = new c(m), v = document.createTextNode(""), b.observe(v, {characterData: !0}), w = function () {
                v.data = g = ++g % 2
            }) : d ? ((y = new MessageChannel).port1.onmessage = m, w = function () {
                return y.port2.postMessage(0)
            }) : w = void 0 === s ? function () {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (a = e.runOnLoop || e.runOnContext) ? function () {
                        a(m)
                    } : p()
                } catch (e) {
                    return p()
                }
            }() : p();
            var E = Math.random().toString(36).substring(2);

            function C() {
            }

            function S(t, n, r) {
                n.constructor === t.constructor && r === L && n.constructor.resolve === M ? function (e, t) {
                    1 === t._state ? N(e, t._result) : 2 === t._state ? j(e, t._result) : D(t, void 0, (function (t) {
                        return T(e, t)
                    }), (function (t) {
                        return j(e, t)
                    }))
                }(t, n) : void 0 === r ? N(t, n) : e(r) ? function (e, t, n) {
                    l((function (e) {
                        var r = !1, i = function (e, t, n, r) {
                            try {
                                e.call(t, n, r)
                            } catch (e) {
                                return e
                            }
                        }(n, t, (function (n) {
                            r || (r = !0, t !== n ? T(e, n) : N(e, n))
                        }), (function (t) {
                            r || (r = !0, j(e, t))
                        }), e._label);
                        !r && i && (r = !0, j(e, i))
                    }), e)
                }(t, n, r) : N(t, n)
            }

            function T(e, t) {
                if (e === t) j(e, new TypeError("You cannot resolve a promise with itself")); else if (i = typeof (r = t), null === r || "object" !== i && "function" !== i) N(e, t); else {
                    var n = void 0;
                    try {
                        n = t.then
                    } catch (t) {
                        return void j(e, t)
                    }
                    S(e, t, n)
                }
                var r, i
            }

            function x(e) {
                e._onerror && e._onerror(e._result), k(e)
            }

            function N(e, t) {
                void 0 === e._state && (e._result = t, e._state = 1, 0 !== e._subscribers.length && l(k, e))
            }

            function j(e, t) {
                void 0 === e._state && (e._state = 2, e._result = t, l(x, e))
            }

            function D(e, t, n, r) {
                var i = e._subscribers, a = i.length;
                e._onerror = null, i[a] = t, i[a + 1] = n, i[a + 2] = r, 0 === a && e._state && l(k, e)
            }

            function k(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, i = void 0, a = e._result, o = 0; o < t.length; o += 3) r = t[o], i = t[o + n], r ? I(n, r, i, a) : i(a);
                    e._subscribers.length = 0
                }
            }

            function I(t, n, r, i) {
                var a = e(r), o = void 0, l = void 0, s = !0;
                if (a) {
                    try {
                        o = r(i)
                    } catch (e) {
                        s = !1, l = e
                    }
                    if (n === o) return void j(n, new TypeError("A promises callback cannot return that same promise."))
                } else o = i;
                void 0 !== n._state || (a && s ? T(n, o) : !1 === s ? j(n, l) : 1 === t ? N(n, o) : 2 === t && j(n, o))
            }

            var O = 0;

            function P(e) {
                e[E] = O++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            var A = function () {
                function e(e, t) {
                    this._instanceConstructor = e, this.promise = new e(C), this.promise[E] || P(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? N(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && N(this.promise, this._result))) : j(this.promise, new Error("Array Methods must be provided an Array"))
                }

                return e.prototype._enumerate = function (e) {
                    for (var t = 0; void 0 === this._state && t < e.length; t++) this._eachEntry(e[t], t)
                }, e.prototype._eachEntry = function (e, t) {
                    var n = this._instanceConstructor, r = n.resolve;
                    if (r === M) {
                        var i = void 0, a = void 0, o = !1;
                        try {
                            i = e.then
                        } catch (e) {
                            o = !0, a = e
                        }
                        if (i === L && void 0 !== e._state) this._settledAt(e._state, t, e._result); else if ("function" != typeof i) this._remaining--, this._result[t] = e; else if (n === R) {
                            var l = new n(C);
                            o ? j(l, a) : S(l, e, i), this._willSettleAt(l, t)
                        } else this._willSettleAt(new n((function (t) {
                            return t(e)
                        })), t)
                    } else this._willSettleAt(r(e), t)
                }, e.prototype._settledAt = function (e, t, n) {
                    var r = this.promise;
                    void 0 === r._state && (this._remaining--, 2 === e ? j(r, n) : this._result[t] = n), 0 === this._remaining && N(r, this._result)
                }, e.prototype._willSettleAt = function (e, t) {
                    var n = this;
                    D(e, void 0, (function (e) {
                        return n._settledAt(1, t, e)
                    }), (function (e) {
                        return n._settledAt(2, t, e)
                    }))
                }, e
            }(), R = function () {
                function t(e) {
                    this[E] = O++, this._result = this._state = void 0, this._subscribers = [], C !== e && ("function" != typeof e && function () {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof t ? function (e, t) {
                        try {
                            t((function (t) {
                                T(e, t)
                            }), (function (t) {
                                j(e, t)
                            }))
                        } catch (t) {
                            j(e, t)
                        }
                    }(this, e) : function () {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }

                return t.prototype.catch = function (e) {
                    return this.then(null, e)
                }, t.prototype.finally = function (t) {
                    var n = this.constructor;
                    return e(t) ? this.then((function (e) {
                        return n.resolve(t()).then((function () {
                            return e
                        }))
                    }), (function (e) {
                        return n.resolve(t()).then((function () {
                            throw e
                        }))
                    })) : this.then(t, t)
                }, t
            }();
            return R.prototype.then = L, R.all = function (e) {
                return new A(this, e).promise
            }, R.race = function (e) {
                var t = this;
                return r(e) ? new t((function (n, r) {
                    for (var i = e.length, a = 0; a < i; a++) t.resolve(e[a]).then(n, r)
                })) : new t((function (e, t) {
                    return t(new TypeError("You must pass an array to race."))
                }))
            }, R.resolve = M, R.reject = function (e) {
                var t = new this(C);
                return j(t, e), t
            }, R._setScheduler = function (e) {
                o = e
            }, R._setAsap = function (e) {
                l = e
            }, R._asap = l, R.polyfill = function () {
                var e = void 0;
                if (void 0 !== n) e = n; else if ("undefined" != typeof self) e = self; else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(t.resolve())
                    } catch (e) {
                    }
                    if ("[object Promise]" === r && !t.cast) return
                }
                e.Promise = R
            }, R.Promise = R, R
        }, e.exports = r()
    }).call(this, n(33), n(21))
}, function (e, t) {
    var n, r, i = e.exports = {};

    function a() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function l(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
            n = a
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            r = o
        }
    }();
    var s, u = [], c = !1, f = -1;

    function d() {
        c && s && (c = !1, s.length ? u = s.concat(u) : f = -1, u.length && p())
    }

    function p() {
        if (!c) {
            var e = l(d);
            c = !0;
            for (var t = u.length; t;) {
                for (s = u, u = []; ++f < t;) s && s[f].run();
                f = -1, t = u.length
            }
            s = null, c = !1, function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {
    }

    i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new h(e, t)), 1 !== u.length || c || l(p)
    }, h.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (e) {
        return []
    }, i.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    /** @license React v16.13.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var r = n(22), i = "function" == typeof Symbol && Symbol.for, a = i ? Symbol.for("react.element") : 60103,
        o = i ? Symbol.for("react.portal") : 60106, l = i ? Symbol.for("react.fragment") : 60107,
        s = i ? Symbol.for("react.strict_mode") : 60108, u = i ? Symbol.for("react.profiler") : 60114,
        c = i ? Symbol.for("react.provider") : 60109, f = i ? Symbol.for("react.context") : 60110,
        d = i ? Symbol.for("react.forward_ref") : 60112, p = i ? Symbol.for("react.suspense") : 60113,
        h = i ? Symbol.for("react.memo") : 60115, m = i ? Symbol.for("react.lazy") : 60116,
        y = "function" == typeof Symbol && Symbol.iterator;

    function g(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    var b = {
        isMounted: function () {
            return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    }, v = {};

    function w(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || b
    }

    function L() {
    }

    function M(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || b
    }

    w.prototype.isReactComponent = {}, w.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(g(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, w.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, L.prototype = w.prototype;
    var E = M.prototype = new L;
    E.constructor = M, r(E, w.prototype), E.isPureReactComponent = !0;
    var C = {current: null}, S = Object.prototype.hasOwnProperty, T = {key: !0, ref: !0, __self: !0, __source: !0};

    function x(e, t, n) {
        var r, i = {}, o = null, l = null;
        if (null != t) for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (o = "" + t.key), t) S.call(t, r) && !T.hasOwnProperty(r) && (i[r] = t[r]);
        var s = arguments.length - 2;
        if (1 === s) i.children = n; else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            i.children = u
        }
        if (e && e.defaultProps) for (r in s = e.defaultProps) void 0 === i[r] && (i[r] = s[r]);
        return {$$typeof: a, type: e, key: o, ref: l, props: i, _owner: C.current}
    }

    function N(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a
    }

    var j = /\/+/g, D = [];

    function k(e, t, n, r) {
        if (D.length) {
            var i = D.pop();
            return i.result = e, i.keyPrefix = t, i.func = n, i.context = r, i.count = 0, i
        }
        return {result: e, keyPrefix: t, func: n, context: r, count: 0}
    }

    function I(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > D.length && D.push(e)
    }

    function O(e, t, n) {
        return null == e ? 0 : function e(t, n, r, i) {
            var l = typeof t;
            "undefined" !== l && "boolean" !== l || (t = null);
            var s = !1;
            if (null === t) s = !0; else switch (l) {
                case"string":
                case"number":
                    s = !0;
                    break;
                case"object":
                    switch (t.$$typeof) {
                        case a:
                        case o:
                            s = !0
                    }
            }
            if (s) return r(i, t, "" === n ? "." + P(t, 0) : n), 1;
            if (s = 0, n = "" === n ? "." : n + ":", Array.isArray(t)) for (var u = 0; u < t.length; u++) {
                var c = n + P(l = t[u], u);
                s += e(l, c, r, i)
            } else if (null === t || "object" != typeof t ? c = null : c = "function" == typeof (c = y && t[y] || t["@@iterator"]) ? c : null, "function" == typeof c) for (t = c.call(t), u = 0; !(l = t.next()).done;) s += e(l = l.value, c = n + P(l, u++), r, i); else if ("object" === l) throw r = "" + t, Error(g(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
            return s
        }(e, "", t, n)
    }

    function P(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function (e) {
            var t = {"=": "=0", ":": "=2"};
            return "$" + ("" + e).replace(/[=:]/g, (function (e) {
                return t[e]
            }))
        }(e.key) : t.toString(36)
    }

    function A(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function R(e, t, n) {
        var r = e.result, i = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? z(e, r, n, (function (e) {
            return e
        })) : null != e && (N(e) && (e = function (e, t) {
            return {$$typeof: a, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
        }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(j, "$&/") + "/") + n)), r.push(e))
    }

    function z(e, t, n, r, i) {
        var a = "";
        null != n && (a = ("" + n).replace(j, "$&/") + "/"), O(e, R, t = k(t, a, r, i)), I(t)
    }

    var F = {current: null};

    function _() {
        var e = F.current;
        if (null === e) throw Error(g(321));
        return e
    }

    var U = {
        ReactCurrentDispatcher: F,
        ReactCurrentBatchConfig: {suspense: null},
        ReactCurrentOwner: C,
        IsSomeRendererActing: {current: !1},
        assign: r
    };
    t.Children = {
        map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return z(e, r, null, t, n), r
        }, forEach: function (e, t, n) {
            if (null == e) return e;
            O(e, A, t = k(null, null, t, n)), I(t)
        }, count: function (e) {
            return O(e, (function () {
                return null
            }), null)
        }, toArray: function (e) {
            var t = [];
            return z(e, t, null, (function (e) {
                return e
            })), t
        }, only: function (e) {
            if (!N(e)) throw Error(g(143));
            return e
        }
    }, t.Component = w, t.Fragment = l, t.Profiler = u, t.PureComponent = M, t.StrictMode = s, t.Suspense = p, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, t.cloneElement = function (e, t, n) {
        if (null == e) throw Error(g(267, e));
        var i = r({}, e.props), o = e.key, l = e.ref, s = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (l = t.ref, s = C.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
            for (c in t) S.call(t, c) && !T.hasOwnProperty(c) && (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
        }
        var c = arguments.length - 2;
        if (1 === c) i.children = n; else if (1 < c) {
            u = Array(c);
            for (var f = 0; f < c; f++) u[f] = arguments[f + 2];
            i.children = u
        }
        return {$$typeof: a, type: e.type, key: o, ref: l, props: i, _owner: s}
    }, t.createContext = function (e, t) {
        return void 0 === t && (t = null), (e = {
            $$typeof: f,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = {$$typeof: c, _context: e}, e.Consumer = e
    }, t.createElement = x, t.createFactory = function (e) {
        var t = x.bind(null, e);
        return t.type = e, t
    }, t.createRef = function () {
        return {current: null}
    }, t.forwardRef = function (e) {
        return {$$typeof: d, render: e}
    }, t.isValidElement = N, t.lazy = function (e) {
        return {$$typeof: m, _ctor: e, _status: -1, _result: null}
    }, t.memo = function (e, t) {
        return {$$typeof: h, type: e, compare: void 0 === t ? null : t}
    }, t.useCallback = function (e, t) {
        return _().useCallback(e, t)
    }, t.useContext = function (e, t) {
        return _().useContext(e, t)
    }, t.useDebugValue = function () {
    }, t.useEffect = function (e, t) {
        return _().useEffect(e, t)
    }, t.useImperativeHandle = function (e, t, n) {
        return _().useImperativeHandle(e, t, n)
    }, t.useLayoutEffect = function (e, t) {
        return _().useLayoutEffect(e, t)
    }, t.useMemo = function (e, t) {
        return _().useMemo(e, t)
    }, t.useReducer = function (e, t, n) {
        return _().useReducer(e, t, n)
    }, t.useRef = function (e) {
        return _().useRef(e)
    }, t.useState = function (e) {
        return _().useState(e)
    }, t.version = "16.13.0"
}, function (e, t, n) {
    "use strict";
    /** @license React v16.13.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var r = n(0), i = n(22), a = n(36);

    function o(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    if (!r) throw Error(o(227));

    function l(e, t, n, r, i, a, o, l, s) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u)
        } catch (e) {
            this.onError(e)
        }
    }

    var s = !1, u = null, c = !1, f = null, d = {
        onError: function (e) {
            s = !0, u = e
        }
    };

    function p(e, t, n, r, i, a, o, c, f) {
        s = !1, u = null, l.apply(d, arguments)
    }

    var h = null, m = null, y = null;

    function g(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = y(n), function (e, t, n, r, i, a, l, d, h) {
            if (p.apply(this, arguments), s) {
                if (!s) throw Error(o(198));
                var m = u;
                s = !1, u = null, c || (c = !0, f = m)
            }
        }(r, t, void 0, e), e.currentTarget = null
    }

    var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    b.hasOwnProperty("ReactCurrentDispatcher") || (b.ReactCurrentDispatcher = {current: null}), b.hasOwnProperty("ReactCurrentBatchConfig") || (b.ReactCurrentBatchConfig = {suspense: null});
    var v = /^(.*)[\\\/]/, w = "function" == typeof Symbol && Symbol.for, L = w ? Symbol.for("react.element") : 60103,
        M = w ? Symbol.for("react.portal") : 60106, E = w ? Symbol.for("react.fragment") : 60107,
        C = w ? Symbol.for("react.strict_mode") : 60108, S = w ? Symbol.for("react.profiler") : 60114,
        T = w ? Symbol.for("react.provider") : 60109, x = w ? Symbol.for("react.context") : 60110,
        N = w ? Symbol.for("react.concurrent_mode") : 60111, j = w ? Symbol.for("react.forward_ref") : 60112,
        D = w ? Symbol.for("react.suspense") : 60113, k = w ? Symbol.for("react.suspense_list") : 60120,
        I = w ? Symbol.for("react.memo") : 60115, O = w ? Symbol.for("react.lazy") : 60116,
        P = w ? Symbol.for("react.block") : 60121, A = "function" == typeof Symbol && Symbol.iterator;

    function R(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof (e = A && e[A] || e["@@iterator"]) ? e : null
    }

    function z(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case E:
                return "Fragment";
            case M:
                return "Portal";
            case S:
                return "Profiler";
            case C:
                return "StrictMode";
            case D:
                return "Suspense";
            case k:
                return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case x:
                return "Context.Consumer";
            case T:
                return "Context.Provider";
            case j:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case I:
                return z(e.type);
            case P:
                return z(e.render);
            case O:
                if (e = 1 === e._status ? e._result : null) return z(e)
        }
        return null
    }

    function F(e) {
        var t = "";
        do {
            e:switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var n = "";
                    break e;
                default:
                    var r = e._debugOwner, i = e._debugSource, a = z(e.type);
                    n = null, r && (n = z(r.type)), r = a, a = "", i ? a = " (at " + i.fileName.replace(v, "") + ":" + i.lineNumber + ")" : n && (a = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + a
            }
            t += n, e = e.return
        } while (e);
        return t
    }

    var _ = null, U = {};

    function Q() {
        if (_) for (var e in U) {
            var t = U[e], n = _.indexOf(e);
            if (!(-1 < n)) throw Error(o(96, e));
            if (!B[n]) {
                if (!t.extractEvents) throw Error(o(97, e));
                for (var r in B[n] = t, n = t.eventTypes) {
                    var i = void 0, a = n[r], l = t, s = r;
                    if (W.hasOwnProperty(s)) throw Error(o(99, s));
                    W[s] = a;
                    var u = a.phasedRegistrationNames;
                    if (u) {
                        for (i in u) u.hasOwnProperty(i) && Y(u[i], l, s);
                        i = !0
                    } else a.registrationName ? (Y(a.registrationName, l, s), i = !0) : i = !1;
                    if (!i) throw Error(o(98, r, e))
                }
            }
        }
    }

    function Y(e, t, n) {
        if (V[e]) throw Error(o(100, e));
        V[e] = t, q[e] = t.eventTypes[n].dependencies
    }

    var B = [], W = {}, V = {}, q = {};

    function H(e) {
        var t, n = !1;
        for (t in e) if (e.hasOwnProperty(t)) {
            var r = e[t];
            if (!U.hasOwnProperty(t) || U[t] !== r) {
                if (U[t]) throw Error(o(102, t));
                U[t] = r, n = !0
            }
        }
        n && Q()
    }

    var G = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        Z = null, K = null, X = null;

    function J(e) {
        if (e = m(e)) {
            if ("function" != typeof Z) throw Error(o(280));
            var t = e.stateNode;
            t && (t = h(t), Z(e.stateNode, e.type, t))
        }
    }

    function $(e) {
        K ? X ? X.push(e) : X = [e] : K = e
    }

    function ee() {
        if (K) {
            var e = K, t = X;
            if (X = K = null, J(e), t) for (e = 0; e < t.length; e++) J(t[e])
        }
    }

    function te(e, t) {
        return e(t)
    }

    function ne(e, t, n, r, i) {
        return e(t, n, r, i)
    }

    function re() {
    }

    var ie = te, ae = !1, oe = !1;

    function le() {
        null === K && null === X || (re(), ee())
    }

    function se(e, t, n) {
        if (oe) return e(t, n);
        oe = !0;
        try {
            return ie(e, t, n)
        } finally {
            oe = !1, le()
        }
    }

    var ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ce = Object.prototype.hasOwnProperty, fe = {}, de = {};

    function pe(e, t, n, r, i, a) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a
    }

    var he = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
        he[e] = new pe(e, 0, !1, e, null, !1)
    })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
        var t = e[0];
        he[t] = new pe(t, 1, !1, e[1], null, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
        he[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
        he[e] = new pe(e, 2, !1, e, null, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
        he[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
        he[e] = new pe(e, 3, !0, e, null, !1)
    })), ["capture", "download"].forEach((function (e) {
        he[e] = new pe(e, 4, !1, e, null, !1)
    })), ["cols", "rows", "size", "span"].forEach((function (e) {
        he[e] = new pe(e, 6, !1, e, null, !1)
    })), ["rowSpan", "start"].forEach((function (e) {
        he[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1)
    }));
    var me = /[\-:]([a-z])/g;

    function ye(e) {
        return e[1].toUpperCase()
    }

    function ge(e, t, n, r) {
        var i = he.hasOwnProperty(t) ? he[t] : null;
        (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function (e, t, n, r) {
            if (null == t || function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                    case"function":
                    case"symbol":
                        return !0;
                    case"boolean":
                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                    default:
                        return !1
                }
            }(e, t, n, r)) return !0;
            if (r) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }(t, n, i, r) && (n = null), r || null === i ? function (e) {
            return !!ce.call(de, e) || !ce.call(fe, e) && (ue.test(e) ? de[e] = !0 : (fe[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }

    function be(e) {
        switch (typeof e) {
            case"boolean":
            case"number":
            case"object":
            case"string":
            case"undefined":
                return e;
            default:
                return ""
        }
    }

    function ve(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function we(e) {
        e._valueTracker || (e._valueTracker = function (e) {
            var t = ve(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var i = n.get, a = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0, get: function () {
                        return i.call(this)
                    }, set: function (e) {
                        r = "" + e, a.call(this, e)
                    }
                }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                    getValue: function () {
                        return r
                    }, setValue: function (e) {
                        r = "" + e
                    }, stopTracking: function () {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function Le(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = ve(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }

    function Me(e, t) {
        var n = t.checked;
        return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function Ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked;
        n = be(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function Ce(e, t) {
        null != (t = t.checked) && ge(e, "checked", t, !1)
    }

    function Se(e, t) {
        Ce(e, t);
        var n = be(t.value), r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? xe(e, t.type, n) : t.hasOwnProperty("defaultValue") && xe(e, t.type, be(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function Te(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
    }

    function xe(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }

    function Ne(e, t) {
        return e = i({children: void 0}, t), (t = function (e) {
            var t = "";
            return r.Children.forEach(e, (function (e) {
                null != e && (t += e)
            })), t
        }(t.children)) && (e.children = t), e
    }

    function je(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + be(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) return e[i].selected = !0, void (r && (e[i].defaultSelected = !0));
                null !== t || e[i].disabled || (t = e[i])
            }
            null !== t && (t.selected = !0)
        }
    }

    function De(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return i({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
    }

    function ke(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t) throw Error(o(92));
                if (Array.isArray(n)) {
                    if (!(1 >= n.length)) throw Error(o(93));
                    n = n[0]
                }
                t = n
            }
            null == t && (t = ""), n = t
        }
        e._wrapperState = {initialValue: be(n)}
    }

    function Ie(e, t) {
        var n = be(t.value), r = be(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
    }

    function Oe(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }

    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
        var t = e.replace(me, ye);
        he[t] = new pe(t, 1, !1, e, null, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
        var t = e.replace(me, ye);
        he[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
        var t = e.replace(me, ye);
        he[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
    })), ["tabIndex", "crossOrigin"].forEach((function (e) {
        he[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1)
    })), he.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function (e) {
        he[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0)
    }));
    var Pe = "http://www.w3.org/1999/xhtml", Ae = "http://www.w3.org/2000/svg";

    function Re(e) {
        switch (e) {
            case"svg":
                return "http://www.w3.org/2000/svg";
            case"math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function ze(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Re(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }

    var Fe, _e = function (e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction((function () {
                return e(t, n)
            }))
        } : e
    }((function (e, t) {
        if (e.namespaceURI !== Ae || "innerHTML" in e) e.innerHTML = t; else {
            for ((Fe = Fe || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Fe.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    }));

    function Ue(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
        }
        e.textContent = t
    }

    function Qe(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }

    var Ye = {
        animationend: Qe("Animation", "AnimationEnd"),
        animationiteration: Qe("Animation", "AnimationIteration"),
        animationstart: Qe("Animation", "AnimationStart"),
        transitionend: Qe("Transition", "TransitionEnd")
    }, Be = {}, We = {};

    function Ve(e) {
        if (Be[e]) return Be[e];
        if (!Ye[e]) return e;
        var t, n = Ye[e];
        for (t in n) if (n.hasOwnProperty(t) && t in We) return Be[e] = n[t];
        return e
    }

    G && (We = document.createElement("div").style, "AnimationEvent" in window || (delete Ye.animationend.animation, delete Ye.animationiteration.animation, delete Ye.animationstart.animation), "TransitionEvent" in window || delete Ye.transitionend.transition);
    var qe = Ve("animationend"), He = Ve("animationiteration"), Ge = Ve("animationstart"), Ze = Ve("transitionend"),
        Ke = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Xe = new ("function" == typeof WeakMap ? WeakMap : Map);

    function Je(e) {
        var t = Xe.get(e);
        return void 0 === t && (t = new Map, Xe.set(e, t)), t
    }

    function $e(e) {
        var t = e, n = e;
        if (e.alternate) for (; t.return;) t = t.return; else {
            e = t;
            do {
                0 != (1026 & (t = e).effectTag) && (n = t.return), e = t.return
            } while (e)
        }
        return 3 === t.tag ? n : null
    }

    function et(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
    }

    function tt(e) {
        if ($e(e) !== e) throw Error(o(188))
    }

    function nt(e) {
        if (!(e = function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = $e(e))) throw Error(o(188));
                return t !== e ? null : e
            }
            for (var n = e, r = t; ;) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                    if (null !== (r = i.return)) {
                        n = r;
                        continue
                    }
                    break
                }
                if (i.child === a.child) {
                    for (a = i.child; a;) {
                        if (a === n) return tt(i), e;
                        if (a === r) return tt(i), t;
                        a = a.sibling
                    }
                    throw Error(o(188))
                }
                if (n.return !== r.return) n = i, r = a; else {
                    for (var l = !1, s = i.child; s;) {
                        if (s === n) {
                            l = !0, n = i, r = a;
                            break
                        }
                        if (s === r) {
                            l = !0, r = i, n = a;
                            break
                        }
                        s = s.sibling
                    }
                    if (!l) {
                        for (s = a.child; s;) {
                            if (s === n) {
                                l = !0, n = a, r = i;
                                break
                            }
                            if (s === r) {
                                l = !0, r = a, n = i;
                                break
                            }
                            s = s.sibling
                        }
                        if (!l) throw Error(o(189))
                    }
                }
                if (n.alternate !== r) throw Error(o(190))
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t
        }(e))) return null;
        for (var t = e; ;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child; else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }

    function rt(e, t) {
        if (null == t) throw Error(o(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function it(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }

    var at = null;

    function ot(e) {
        if (e) {
            var t = e._dispatchListeners, n = e._dispatchInstances;
            if (Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) g(e, t[r], n[r]); else t && g(e, t, n);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function lt(e) {
        if (null !== e && (at = rt(at, e)), e = at, at = null, e) {
            if (it(e, ot), at) throw Error(o(95));
            if (c) throw e = f, c = !1, f = null, e
        }
    }

    function st(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function ut(e) {
        if (!G) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
    }

    var ct = [];

    function ft(e) {
        e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > ct.length && ct.push(e)
    }

    function dt(e, t, n, r) {
        if (ct.length) {
            var i = ct.pop();
            return i.topLevelType = e, i.eventSystemFlags = r, i.nativeEvent = t, i.targetInst = n, i
        }
        return {topLevelType: e, eventSystemFlags: r, nativeEvent: t, targetInst: n, ancestors: []}
    }

    function pt(e) {
        var t = e.targetInst, n = t;
        do {
            if (!n) {
                e.ancestors.push(n);
                break
            }
            var r = n;
            if (3 === r.tag) r = r.stateNode.containerInfo; else {
                for (; r.return;) r = r.return;
                r = 3 !== r.tag ? null : r.stateNode.containerInfo
            }
            if (!r) break;
            5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = xn(r)
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var i = st(e.nativeEvent);
            r = e.topLevelType;
            var a = e.nativeEvent, o = e.eventSystemFlags;
            0 === n && (o |= 64);
            for (var l = null, s = 0; s < B.length; s++) {
                var u = B[s];
                u && (u = u.extractEvents(r, t, a, i, o)) && (l = rt(l, u))
            }
            lt(l)
        }
    }

    function ht(e, t, n) {
        if (!n.has(e)) {
            switch (e) {
                case"scroll":
                    Gt(t, "scroll", !0);
                    break;
                case"focus":
                case"blur":
                    Gt(t, "focus", !0), Gt(t, "blur", !0), n.set("blur", null), n.set("focus", null);
                    break;
                case"cancel":
                case"close":
                    ut(e) && Gt(t, e, !0);
                    break;
                case"invalid":
                case"submit":
                case"reset":
                    break;
                default:
                    -1 === Ke.indexOf(e) && Ht(e, t)
            }
            n.set(e, null)
        }
    }

    var mt, yt, gt, bt = !1, vt = [], wt = null, Lt = null, Mt = null, Et = new Map, Ct = new Map, St = [],
        Tt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        xt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function Nt(e, t, n, r, i) {
        return {blockedOn: e, topLevelType: t, eventSystemFlags: 32 | n, nativeEvent: i, container: r}
    }

    function jt(e, t) {
        switch (e) {
            case"focus":
            case"blur":
                wt = null;
                break;
            case"dragenter":
            case"dragleave":
                Lt = null;
                break;
            case"mouseover":
            case"mouseout":
                Mt = null;
                break;
            case"pointerover":
            case"pointerout":
                Et.delete(t.pointerId);
                break;
            case"gotpointercapture":
            case"lostpointercapture":
                Ct.delete(t.pointerId)
        }
    }

    function Dt(e, t, n, r, i, a) {
        return null === e || e.nativeEvent !== a ? (e = Nt(t, n, r, i, a), null !== t && (null !== (t = Nn(t)) && yt(t)), e) : (e.eventSystemFlags |= r, e)
    }

    function kt(e) {
        var t = xn(e.target);
        if (null !== t) {
            var n = $e(t);
            if (null !== n) if (13 === (t = n.tag)) {
                if (null !== (t = et(n))) return e.blockedOn = t, void a.unstable_runWithPriority(e.priority, (function () {
                    gt(n)
                }))
            } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }

    function It(e) {
        if (null !== e.blockedOn) return !1;
        var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
        if (null !== t) {
            var n = Nn(t);
            return null !== n && yt(n), e.blockedOn = t, !1
        }
        return !0
    }

    function Ot(e, t, n) {
        It(e) && n.delete(t)
    }

    function Pt() {
        for (bt = !1; 0 < vt.length;) {
            var e = vt[0];
            if (null !== e.blockedOn) {
                null !== (e = Nn(e.blockedOn)) && mt(e);
                break
            }
            var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
            null !== t ? e.blockedOn = t : vt.shift()
        }
        null !== wt && It(wt) && (wt = null), null !== Lt && It(Lt) && (Lt = null), null !== Mt && It(Mt) && (Mt = null), Et.forEach(Ot), Ct.forEach(Ot)
    }

    function At(e, t) {
        e.blockedOn === t && (e.blockedOn = null, bt || (bt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Pt)))
    }

    function Rt(e) {
        function t(t) {
            return At(t, e)
        }

        if (0 < vt.length) {
            At(vt[0], e);
            for (var n = 1; n < vt.length; n++) {
                var r = vt[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (null !== wt && At(wt, e), null !== Lt && At(Lt, e), null !== Mt && At(Mt, e), Et.forEach(t), Ct.forEach(t), n = 0; n < St.length; n++) (r = St[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < St.length && null === (n = St[0]).blockedOn;) kt(n), null === n.blockedOn && St.shift()
    }

    var zt = {}, Ft = new Map, _t = new Map,
        Ut = ["abort", "abort", qe, "animationEnd", He, "animationIteration", Ge, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ze, "transitionEnd", "waiting", "waiting"];

    function Qt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
            var r = e[n], i = e[n + 1], a = "on" + (i[0].toUpperCase() + i.slice(1));
            a = {
                phasedRegistrationNames: {bubbled: a, captured: a + "Capture"},
                dependencies: [r],
                eventPriority: t
            }, _t.set(r, t), Ft.set(r, a), zt[i] = a
        }
    }

    Qt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Qt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Qt(Ut, 2);
    for (var Yt = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Bt = 0; Bt < Yt.length; Bt++) _t.set(Yt[Bt], 0);
    var Wt = a.unstable_UserBlockingPriority, Vt = a.unstable_runWithPriority, qt = !0;

    function Ht(e, t) {
        Gt(t, e, !1)
    }

    function Gt(e, t, n) {
        var r = _t.get(t);
        switch (void 0 === r ? 2 : r) {
            case 0:
                r = Zt.bind(null, t, 1, e);
                break;
            case 1:
                r = Kt.bind(null, t, 1, e);
                break;
            default:
                r = Xt.bind(null, t, 1, e)
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
    }

    function Zt(e, t, n, r) {
        ae || re();
        var i = Xt, a = ae;
        ae = !0;
        try {
            ne(i, e, t, n, r)
        } finally {
            (ae = a) || le()
        }
    }

    function Kt(e, t, n, r) {
        Vt(Wt, Xt.bind(null, e, t, n, r))
    }

    function Xt(e, t, n, r) {
        if (qt) if (0 < vt.length && -1 < Tt.indexOf(e)) e = Nt(null, e, t, n, r), vt.push(e); else {
            var i = Jt(e, t, n, r);
            if (null === i) jt(e, r); else if (-1 < Tt.indexOf(e)) e = Nt(i, e, t, n, r), vt.push(e); else if (!function (e, t, n, r, i) {
                switch (t) {
                    case"focus":
                        return wt = Dt(wt, e, t, n, r, i), !0;
                    case"dragenter":
                        return Lt = Dt(Lt, e, t, n, r, i), !0;
                    case"mouseover":
                        return Mt = Dt(Mt, e, t, n, r, i), !0;
                    case"pointerover":
                        var a = i.pointerId;
                        return Et.set(a, Dt(Et.get(a) || null, e, t, n, r, i)), !0;
                    case"gotpointercapture":
                        return a = i.pointerId, Ct.set(a, Dt(Ct.get(a) || null, e, t, n, r, i)), !0
                }
                return !1
            }(i, e, t, n, r)) {
                jt(e, r), e = dt(e, r, null, t);
                try {
                    se(pt, e)
                } finally {
                    ft(e)
                }
            }
        }
    }

    function Jt(e, t, n, r) {
        if (null !== (n = xn(n = st(r)))) {
            var i = $e(n);
            if (null === i) n = null; else {
                var a = i.tag;
                if (13 === a) {
                    if (null !== (n = et(i))) return n;
                    n = null
                } else if (3 === a) {
                    if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                    n = null
                } else i !== n && (n = null)
            }
        }
        e = dt(e, r, n, t);
        try {
            se(pt, e)
        } finally {
            ft(e)
        }
        return null
    }

    var $t = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, en = ["Webkit", "ms", "Moz", "O"];

    function tn(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || $t.hasOwnProperty(e) && $t[e] ? ("" + t).trim() : t + "px"
    }

    function nn(e, t) {
        for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"), i = tn(n, t[n], r);
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
    }

    Object.keys($t).forEach((function (e) {
        en.forEach((function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), $t[t] = $t[e]
        }))
    }));
    var rn = i({menuitem: !0}, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function an(e, t) {
        if (t) {
            if (rn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw Error(o(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
            }
            if (null != t.style && "object" != typeof t.style) throw Error(o(62, ""))
        }
    }

    function on(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    var ln = Pe;

    function sn(e, t) {
        var n = Je(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = q[t];
        for (var r = 0; r < t.length; r++) ht(t[r], e, n)
    }

    function un() {
    }

    function cn(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function fn(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function dn(e, t) {
        var n, r = fn(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
                e = n
            }
            e:{
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = fn(r)
        }
    }

    function pn() {
        for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                n = !1
            }
            if (!n) break;
            t = cn((e = t.contentWindow).document)
        }
        return t
    }

    function hn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }

    var mn = null, yn = null;

    function gn(e, t) {
        switch (e) {
            case"button":
            case"input":
            case"select":
            case"textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function bn(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }

    var vn = "function" == typeof setTimeout ? setTimeout : void 0,
        wn = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function Ln(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break
        }
        return e
    }

    function Mn(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t) return e;
                    t--
                } else "/$" === n && t++
            }
            e = e.previousSibling
        }
        return null
    }

    var En = Math.random().toString(36).slice(2), Cn = "__reactInternalInstance$" + En,
        Sn = "__reactEventHandlers$" + En, Tn = "__reactContainere$" + En;

    function xn(e) {
        var t = e[Cn];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Tn] || n[Cn]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = Mn(e); null !== e;) {
                    if (n = e[Cn]) return n;
                    e = Mn(e)
                }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }

    function Nn(e) {
        return !(e = e[Cn] || e[Tn]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }

    function jn(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33))
    }

    function Dn(e) {
        return e[Sn] || null
    }

    function kn(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function In(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = h(n);
        if (!r) return null;
        n = r[t];
        e:switch (t) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
            case"onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
        return n
    }

    function On(e, t, n) {
        (t = In(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = rt(n._dispatchListeners, t), n._dispatchInstances = rt(n._dispatchInstances, e))
    }

    function Pn(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t;) n.push(t), t = kn(t);
            for (t = n.length; 0 < t--;) On(n[t], "captured", e);
            for (t = 0; t < n.length; t++) On(n[t], "bubbled", e)
        }
    }

    function An(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = In(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = rt(n._dispatchListeners, t), n._dispatchInstances = rt(n._dispatchInstances, e))
    }

    function Rn(e) {
        e && e.dispatchConfig.registrationName && An(e._targetInst, null, e)
    }

    function zn(e) {
        it(e, Pn)
    }

    var Fn = null, _n = null, Un = null;

    function Qn() {
        if (Un) return Un;
        var e, t, n = _n, r = n.length, i = "value" in Fn ? Fn.value : Fn.textContent, a = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++) ;
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === i[a - t]; t++) ;
        return Un = i.slice(e, 1 < t ? 1 - t : void 0)
    }

    function Yn() {
        return !0
    }

    function Bn() {
        return !1
    }

    function Wn(e, t, n, r) {
        for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Yn : Bn, this.isPropagationStopped = Bn, this
    }

    function Vn(e, t, n, r) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, e, t, n, r), i
        }
        return new this(e, t, n, r)
    }

    function qn(e) {
        if (!(e instanceof this)) throw Error(o(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function Hn(e) {
        e.eventPool = [], e.getPooled = Vn, e.release = qn
    }

    i(Wn.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Yn)
        }, stopPropagation: function () {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Yn)
        }, persist: function () {
            this.isPersistent = Yn
        }, isPersistent: Bn, destructor: function () {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Bn, this._dispatchInstances = this._dispatchListeners = null
        }
    }), Wn.Interface = {
        type: null, target: null, currentTarget: function () {
            return null
        }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: null, isTrusted: null
    }, Wn.extend = function (e) {
        function t() {
        }

        function n() {
            return r.apply(this, arguments)
        }

        var r = this;
        t.prototype = r.prototype;
        var a = new t;
        return i(a, n.prototype), n.prototype = a, n.prototype.constructor = n, n.Interface = i({}, r.Interface, e), n.extend = r.extend, Hn(n), n
    }, Hn(Wn);
    var Gn = Wn.extend({data: null}), Zn = Wn.extend({data: null}), Kn = [9, 13, 27, 32],
        Xn = G && "CompositionEvent" in window, Jn = null;
    G && "documentMode" in document && (Jn = document.documentMode);
    var $n = G && "TextEvent" in window && !Jn, er = G && (!Xn || Jn && 8 < Jn && 11 >= Jn),
        tr = String.fromCharCode(32), nr = {
            beforeInput: {
                phasedRegistrationNames: {bubbled: "onBeforeInput", captured: "onBeforeInputCapture"},
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {bubbled: "onCompositionEnd", captured: "onCompositionEndCapture"},
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        }, rr = !1;

    function ir(e, t) {
        switch (e) {
            case"keyup":
                return -1 !== Kn.indexOf(t.keyCode);
            case"keydown":
                return 229 !== t.keyCode;
            case"keypress":
            case"mousedown":
            case"blur":
                return !0;
            default:
                return !1
        }
    }

    function ar(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
    }

    var or = !1;
    var lr = {
        eventTypes: nr, extractEvents: function (e, t, n, r) {
            var i;
            if (Xn) e:{
                switch (e) {
                    case"compositionstart":
                        var a = nr.compositionStart;
                        break e;
                    case"compositionend":
                        a = nr.compositionEnd;
                        break e;
                    case"compositionupdate":
                        a = nr.compositionUpdate;
                        break e
                }
                a = void 0
            } else or ? ir(e, n) && (a = nr.compositionEnd) : "keydown" === e && 229 === n.keyCode && (a = nr.compositionStart);
            return a ? (er && "ko" !== n.locale && (or || a !== nr.compositionStart ? a === nr.compositionEnd && or && (i = Qn()) : (_n = "value" in (Fn = r) ? Fn.value : Fn.textContent, or = !0)), a = Gn.getPooled(a, t, n, r), i ? a.data = i : null !== (i = ar(n)) && (a.data = i), zn(a), i = a) : i = null, (e = $n ? function (e, t) {
                switch (e) {
                    case"compositionend":
                        return ar(t);
                    case"keypress":
                        return 32 !== t.which ? null : (rr = !0, tr);
                    case"textInput":
                        return (e = t.data) === tr && rr ? null : e;
                    default:
                        return null
                }
            }(e, n) : function (e, t) {
                if (or) return "compositionend" === e || !Xn && ir(e, t) ? (e = Qn(), Un = _n = Fn = null, or = !1, e) : null;
                switch (e) {
                    case"paste":
                        return null;
                    case"keypress":
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which)
                        }
                        return null;
                    case"compositionend":
                        return er && "ko" !== t.locale ? null : t.data;
                    default:
                        return null
                }
            }(e, n)) ? ((t = Zn.getPooled(nr.beforeInput, t, n, r)).data = e, zn(t)) : t = null, null === i ? t : null === t ? i : [i, t]
        }
    }, sr = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function ur(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!sr[e.type] : "textarea" === t
    }

    var cr = {
        change: {
            phasedRegistrationNames: {bubbled: "onChange", captured: "onChangeCapture"},
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function fr(e, t, n) {
        return (e = Wn.getPooled(cr.change, e, t, n)).type = "change", $(n), zn(e), e
    }

    var dr = null, pr = null;

    function hr(e) {
        lt(e)
    }

    function mr(e) {
        if (Le(jn(e))) return e
    }

    function yr(e, t) {
        if ("change" === e) return t
    }

    var gr = !1;

    function br() {
        dr && (dr.detachEvent("onpropertychange", vr), pr = dr = null)
    }

    function vr(e) {
        if ("value" === e.propertyName && mr(pr)) if (e = fr(pr, e, st(e)), ae) lt(e); else {
            ae = !0;
            try {
                te(hr, e)
            } finally {
                ae = !1, le()
            }
        }
    }

    function wr(e, t, n) {
        "focus" === e ? (br(), pr = n, (dr = t).attachEvent("onpropertychange", vr)) : "blur" === e && br()
    }

    function Lr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return mr(pr)
    }

    function Mr(e, t) {
        if ("click" === e) return mr(t)
    }

    function Er(e, t) {
        if ("input" === e || "change" === e) return mr(t)
    }

    G && (gr = ut("input") && (!document.documentMode || 9 < document.documentMode));
    var Cr = {
            eventTypes: cr, _isInputEventSupported: gr, extractEvents: function (e, t, n, r) {
                var i = t ? jn(t) : window, a = i.nodeName && i.nodeName.toLowerCase();
                if ("select" === a || "input" === a && "file" === i.type) var o = yr; else if (ur(i)) if (gr) o = Er; else {
                    o = Lr;
                    var l = wr
                } else (a = i.nodeName) && "input" === a.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (o = Mr);
                if (o && (o = o(e, t))) return fr(o, n, r);
                l && l(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && xe(i, "number", i.value)
            }
        }, Sr = Wn.extend({view: null, detail: null}),
        Tr = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

    function xr(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Tr[e]) && !!t[e]
    }

    function Nr() {
        return xr
    }

    var jr = 0, Dr = 0, kr = !1, Ir = !1, Or = Sr.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Nr,
        button: null,
        buttons: null,
        relatedTarget: function (e) {
            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        },
        movementX: function (e) {
            if ("movementX" in e) return e.movementX;
            var t = jr;
            return jr = e.screenX, kr ? "mousemove" === e.type ? e.screenX - t : 0 : (kr = !0, 0)
        },
        movementY: function (e) {
            if ("movementY" in e) return e.movementY;
            var t = Dr;
            return Dr = e.screenY, Ir ? "mousemove" === e.type ? e.screenY - t : 0 : (Ir = !0, 0)
        }
    }), Pr = Or.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
    }), Ar = {
        mouseEnter: {registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"]},
        mouseLeave: {registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"]},
        pointerEnter: {registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"]},
        pointerLeave: {registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"]}
    }, Rr = {
        eventTypes: Ar, extractEvents: function (e, t, n, r, i) {
            var a = "mouseover" === e || "pointerover" === e, o = "mouseout" === e || "pointerout" === e;
            if (a && 0 == (32 & i) && (n.relatedTarget || n.fromElement) || !o && !a) return null;
            (a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window, o) ? (o = t, null !== (t = (t = n.relatedTarget || n.toElement) ? xn(t) : null) && (t !== $e(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : o = null;
            if (o === t) return null;
            if ("mouseout" === e || "mouseover" === e) var l = Or, s = Ar.mouseLeave, u = Ar.mouseEnter,
                c = "mouse"; else "pointerout" !== e && "pointerover" !== e || (l = Pr, s = Ar.pointerLeave, u = Ar.pointerEnter, c = "pointer");
            if (e = null == o ? a : jn(o), a = null == t ? a : jn(t), (s = l.getPooled(s, o, n, r)).type = c + "leave", s.target = e, s.relatedTarget = a, (n = l.getPooled(u, t, n, r)).type = c + "enter", n.target = a, n.relatedTarget = e, c = t, (r = o) && c) e:{
                for (u = c, o = 0, e = l = r; e; e = kn(e)) o++;
                for (e = 0, t = u; t; t = kn(t)) e++;
                for (; 0 < o - e;) l = kn(l), o--;
                for (; 0 < e - o;) u = kn(u), e--;
                for (; o--;) {
                    if (l === u || l === u.alternate) break e;
                    l = kn(l), u = kn(u)
                }
                l = null
            } else l = null;
            for (u = l, l = []; r && r !== u && (null === (o = r.alternate) || o !== u);) l.push(r), r = kn(r);
            for (r = []; c && c !== u && (null === (o = c.alternate) || o !== u);) r.push(c), c = kn(c);
            for (c = 0; c < l.length; c++) An(l[c], "bubbled", s);
            for (c = r.length; 0 < c--;) An(r[c], "captured", n);
            return 0 == (64 & i) ? [s] : [s, n]
        }
    };
    var zr = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }, Fr = Object.prototype.hasOwnProperty;

    function _r(e, t) {
        if (zr(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) if (!Fr.call(t, n[r]) || !zr(e[n[r]], t[n[r]])) return !1;
        return !0
    }

    var Ur = G && "documentMode" in document && 11 >= document.documentMode, Qr = {
        select: {
            phasedRegistrationNames: {bubbled: "onSelect", captured: "onSelectCapture"},
            dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
        }
    }, Yr = null, Br = null, Wr = null, Vr = !1;

    function qr(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return Vr || null == Yr || Yr !== cn(n) ? null : ("selectionStart" in (n = Yr) && hn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, Wr && _r(Wr, n) ? null : (Wr = n, (e = Wn.getPooled(Qr.select, Br, e, t)).type = "select", e.target = Yr, zn(e), e))
    }

    var Hr = {
        eventTypes: Qr, extractEvents: function (e, t, n, r, i, a) {
            if (!(a = !(i = a || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                e:{
                    i = Je(i), a = q.onSelect;
                    for (var o = 0; o < a.length; o++) if (!i.has(a[o])) {
                        i = !1;
                        break e
                    }
                    i = !0
                }
                a = !i
            }
            if (a) return null;
            switch (i = t ? jn(t) : window, e) {
                case"focus":
                    (ur(i) || "true" === i.contentEditable) && (Yr = i, Br = t, Wr = null);
                    break;
                case"blur":
                    Wr = Br = Yr = null;
                    break;
                case"mousedown":
                    Vr = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    return Vr = !1, qr(n, r);
                case"selectionchange":
                    if (Ur) break;
                case"keydown":
                case"keyup":
                    return qr(n, r)
            }
            return null
        }
    }, Gr = Wn.extend({animationName: null, elapsedTime: null, pseudoElement: null}), Zr = Wn.extend({
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), Kr = Sr.extend({relatedTarget: null});

    function Xr(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }

    var Jr = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, $r = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, ei = Sr.extend({
        key: function (e) {
            if (e.key) {
                var t = Jr[e.key] || e.key;
                if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? 13 === (e = Xr(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? $r[e.keyCode] || "Unidentified" : ""
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Nr,
        charCode: function (e) {
            return "keypress" === e.type ? Xr(e) : 0
        },
        keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function (e) {
            return "keypress" === e.type ? Xr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    }), ti = Or.extend({dataTransfer: null}), ni = Sr.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Nr
    }), ri = Wn.extend({propertyName: null, elapsedTime: null, pseudoElement: null}), ii = Or.extend({
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        }, deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        }, deltaZ: null, deltaMode: null
    }), ai = {
        eventTypes: zt, extractEvents: function (e, t, n, r) {
            var i = Ft.get(e);
            if (!i) return null;
            switch (e) {
                case"keypress":
                    if (0 === Xr(n)) return null;
                case"keydown":
                case"keyup":
                    e = ei;
                    break;
                case"blur":
                case"focus":
                    e = Kr;
                    break;
                case"click":
                    if (2 === n.button) return null;
                case"auxclick":
                case"dblclick":
                case"mousedown":
                case"mousemove":
                case"mouseup":
                case"mouseout":
                case"mouseover":
                case"contextmenu":
                    e = Or;
                    break;
                case"drag":
                case"dragend":
                case"dragenter":
                case"dragexit":
                case"dragleave":
                case"dragover":
                case"dragstart":
                case"drop":
                    e = ti;
                    break;
                case"touchcancel":
                case"touchend":
                case"touchmove":
                case"touchstart":
                    e = ni;
                    break;
                case qe:
                case He:
                case Ge:
                    e = Gr;
                    break;
                case Ze:
                    e = ri;
                    break;
                case"scroll":
                    e = Sr;
                    break;
                case"wheel":
                    e = ii;
                    break;
                case"copy":
                case"cut":
                case"paste":
                    e = Zr;
                    break;
                case"gotpointercapture":
                case"lostpointercapture":
                case"pointercancel":
                case"pointerdown":
                case"pointermove":
                case"pointerout":
                case"pointerover":
                case"pointerup":
                    e = Pr;
                    break;
                default:
                    e = Wn
            }
            return zn(t = e.getPooled(i, t, n, r)), t
        }
    };
    if (_) throw Error(o(101));
    _ = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), Q(), h = Dn, m = Nn, y = jn, H({
        SimpleEventPlugin: ai,
        EnterLeaveEventPlugin: Rr,
        ChangeEventPlugin: Cr,
        SelectEventPlugin: Hr,
        BeforeInputEventPlugin: lr
    });
    var oi = [], li = -1;

    function si(e) {
        0 > li || (e.current = oi[li], oi[li] = null, li--)
    }

    function ui(e, t) {
        li++, oi[li] = e.current, e.current = t
    }

    var ci = {}, fi = {current: ci}, di = {current: !1}, pi = ci;

    function hi(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ci;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var i, a = {};
        for (i in n) a[i] = t[i];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
    }

    function mi(e) {
        return null != (e = e.childContextTypes)
    }

    function yi() {
        si(di), si(fi)
    }

    function gi(e, t, n) {
        if (fi.current !== ci) throw Error(o(168));
        ui(fi, t), ui(di, n)
    }

    function bi(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var a in r = r.getChildContext()) if (!(a in e)) throw Error(o(108, z(t) || "Unknown", a));
        return i({}, n, {}, r)
    }

    function vi(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ci, pi = fi.current, ui(fi, e), ui(di, di.current), !0
    }

    function wi(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n ? (e = bi(e, t, pi), r.__reactInternalMemoizedMergedChildContext = e, si(di), si(fi), ui(fi, e)) : si(di), ui(di, n)
    }

    var Li = a.unstable_runWithPriority, Mi = a.unstable_scheduleCallback, Ei = a.unstable_cancelCallback,
        Ci = a.unstable_requestPaint, Si = a.unstable_now, Ti = a.unstable_getCurrentPriorityLevel,
        xi = a.unstable_ImmediatePriority, Ni = a.unstable_UserBlockingPriority, ji = a.unstable_NormalPriority,
        Di = a.unstable_LowPriority, ki = a.unstable_IdlePriority, Ii = {}, Oi = a.unstable_shouldYield,
        Pi = void 0 !== Ci ? Ci : function () {
        }, Ai = null, Ri = null, zi = !1, Fi = Si(), _i = 1e4 > Fi ? Si : function () {
            return Si() - Fi
        };

    function Ui() {
        switch (Ti()) {
            case xi:
                return 99;
            case Ni:
                return 98;
            case ji:
                return 97;
            case Di:
                return 96;
            case ki:
                return 95;
            default:
                throw Error(o(332))
        }
    }

    function Qi(e) {
        switch (e) {
            case 99:
                return xi;
            case 98:
                return Ni;
            case 97:
                return ji;
            case 96:
                return Di;
            case 95:
                return ki;
            default:
                throw Error(o(332))
        }
    }

    function Yi(e, t) {
        return e = Qi(e), Li(e, t)
    }

    function Bi(e, t, n) {
        return e = Qi(e), Mi(e, t, n)
    }

    function Wi(e) {
        return null === Ai ? (Ai = [e], Ri = Mi(xi, qi)) : Ai.push(e), Ii
    }

    function Vi() {
        if (null !== Ri) {
            var e = Ri;
            Ri = null, Ei(e)
        }
        qi()
    }

    function qi() {
        if (!zi && null !== Ai) {
            zi = !0;
            var e = 0;
            try {
                var t = Ai;
                Yi(99, (function () {
                    for (; e < t.length; e++) {
                        var n = t[e];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                })), Ai = null
            } catch (t) {
                throw null !== Ai && (Ai = Ai.slice(e + 1)), Mi(xi, Vi), t
            } finally {
                zi = !1
            }
        }
    }

    function Hi(e, t, n) {
        return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
    }

    function Gi(e, t) {
        if (e && e.defaultProps) for (var n in t = i({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }

    var Zi = {current: null}, Ki = null, Xi = null, Ji = null;

    function $i() {
        Ji = Xi = Ki = null
    }

    function ea(e) {
        var t = Zi.current;
        si(Zi), e.type._context._currentValue = t
    }

    function ta(e, t) {
        for (; null !== e;) {
            var n = e.alternate;
            if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t); else {
                if (!(null !== n && n.childExpirationTime < t)) break;
                n.childExpirationTime = t
            }
            e = e.return
        }
    }

    function na(e, t) {
        Ki = e, Ji = Xi = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Do = !0), e.firstContext = null)
    }

    function ra(e, t) {
        if (Ji !== e && !1 !== t && 0 !== t) if ("number" == typeof t && 1073741823 !== t || (Ji = e, t = 1073741823), t = {
            context: e,
            observedBits: t,
            next: null
        }, null === Xi) {
            if (null === Ki) throw Error(o(308));
            Xi = t, Ki.dependencies = {expirationTime: 0, firstContext: t, responders: null}
        } else Xi = Xi.next = t;
        return e._currentValue
    }

    var ia = !1;

    function aa(e) {
        e.updateQueue = {baseState: e.memoizedState, baseQueue: null, shared: {pending: null}, effects: null}
    }

    function oa(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            baseQueue: e.baseQueue,
            shared: e.shared,
            effects: e.effects
        })
    }

    function la(e, t) {
        return (e = {expirationTime: e, suspenseConfig: t, tag: 0, payload: null, callback: null, next: null}).next = e
    }

    function sa(e, t) {
        if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
        }
    }

    function ua(e, t) {
        var n = e.alternate;
        null !== n && oa(n, e), null === (n = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t, t.next = t) : (t.next = n.next, n.next = t)
    }

    function ca(e, t, n, r) {
        var a = e.updateQueue;
        ia = !1;
        var o = a.baseQueue, l = a.shared.pending;
        if (null !== l) {
            if (null !== o) {
                var s = o.next;
                o.next = l.next, l.next = s
            }
            o = l, a.shared.pending = null, null !== (s = e.alternate) && (null !== (s = s.updateQueue) && (s.baseQueue = l))
        }
        if (null !== o) {
            s = o.next;
            var u = a.baseState, c = 0, f = null, d = null, p = null;
            if (null !== s) for (var h = s; ;) {
                if ((l = h.expirationTime) < r) {
                    var m = {
                        expirationTime: h.expirationTime,
                        suspenseConfig: h.suspenseConfig,
                        tag: h.tag,
                        payload: h.payload,
                        callback: h.callback,
                        next: null
                    };
                    null === p ? (d = p = m, f = u) : p = p.next = m, l > c && (c = l)
                } else {
                    null !== p && (p = p.next = {
                        expirationTime: 1073741823,
                        suspenseConfig: h.suspenseConfig,
                        tag: h.tag,
                        payload: h.payload,
                        callback: h.callback,
                        next: null
                    }), as(l, h.suspenseConfig);
                    e:{
                        var y = e, g = h;
                        switch (l = t, m = n, g.tag) {
                            case 1:
                                if ("function" == typeof (y = g.payload)) {
                                    u = y.call(m, u, l);
                                    break e
                                }
                                u = y;
                                break e;
                            case 3:
                                y.effectTag = -4097 & y.effectTag | 64;
                            case 0:
                                if (null == (l = "function" == typeof (y = g.payload) ? y.call(m, u, l) : y)) break e;
                                u = i({}, u, l);
                                break e;
                            case 2:
                                ia = !0
                        }
                    }
                    null !== h.callback && (e.effectTag |= 32, null === (l = a.effects) ? a.effects = [h] : l.push(h))
                }
                if (null === (h = h.next) || h === s) {
                    if (null === (l = a.shared.pending)) break;
                    h = o.next = l.next, l.next = s, a.baseQueue = o = l, a.shared.pending = null
                }
            }
            null === p ? f = u : p.next = d, a.baseState = f, a.baseQueue = p, os(c), e.expirationTime = c, e.memoizedState = u
        }
    }

    function fa(e, t, n) {
        if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
            var r = e[t], i = r.callback;
            if (null !== i) {
                if (r.callback = null, r = i, i = n, "function" != typeof r) throw Error(o(191, r));
                r.call(i)
            }
        }
    }

    var da = b.ReactCurrentBatchConfig, pa = (new r.Component).refs;

    function ha(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : i({}, t, n), e.memoizedState = n, 0 === e.expirationTime && (e.updateQueue.baseState = n)
    }

    var ma = {
        isMounted: function (e) {
            return !!(e = e._reactInternalFiber) && $e(e) === e
        }, enqueueSetState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = ql(), i = da.suspense;
            (i = la(r = Hl(r, e, i), i)).payload = t, null != n && (i.callback = n), sa(e, i), Gl(e, r)
        }, enqueueReplaceState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = ql(), i = da.suspense;
            (i = la(r = Hl(r, e, i), i)).tag = 1, i.payload = t, null != n && (i.callback = n), sa(e, i), Gl(e, r)
        }, enqueueForceUpdate: function (e, t) {
            e = e._reactInternalFiber;
            var n = ql(), r = da.suspense;
            (r = la(n = Hl(n, e, r), r)).tag = 2, null != t && (r.callback = t), sa(e, r), Gl(e, n)
        }
    };

    function ya(e, t, n, r, i, a, o) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !t.prototype || !t.prototype.isPureReactComponent || (!_r(n, r) || !_r(i, a))
    }

    function ga(e, t, n) {
        var r = !1, i = ci, a = t.contextType;
        return "object" == typeof a && null !== a ? a = ra(a) : (i = mi(t) ? pi : fi.current, a = (r = null != (r = t.contextTypes)) ? hi(e, i) : ci), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ma, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
    }

    function ba(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ma.enqueueReplaceState(t, t.state, null)
    }

    function va(e, t, n, r) {
        var i = e.stateNode;
        i.props = n, i.state = e.memoizedState, i.refs = pa, aa(e);
        var a = t.contextType;
        "object" == typeof a && null !== a ? i.context = ra(a) : (a = mi(t) ? pi : fi.current, i.context = hi(e, a)), ca(e, n, i, r), i.state = e.memoizedState, "function" == typeof (a = t.getDerivedStateFromProps) && (ha(e, t, a, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && ma.enqueueReplaceState(i, i.state, null), ca(e, n, i, r), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.effectTag |= 4)
    }

    var wa = Array.isArray;

    function La(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag) throw Error(o(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(o(147, e));
                var i = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function (e) {
                    var t = r.refs;
                    t === pa && (t = r.refs = {}), null === e ? delete t[i] : t[i] = e
                })._stringRef = i, t)
            }
            if ("string" != typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e))
        }
        return e
    }

    function Ma(e, t) {
        if ("textarea" !== e.type) throw Error(o(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
    }

    function Ea(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
        }

        function r(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function i(e, t) {
            return (e = Ts(e, t)).index = 0, e.sibling = null, e
        }

        function a(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
        }

        function l(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function s(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = js(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function u(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = La(e, t, n), r.return = e, r) : ((r = xs(n.type, n.key, n.props, null, e.mode, r)).ref = La(e, t, n), r.return = e, r)
        }

        function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ds(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
        }

        function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag ? ((t = Ns(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = js("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case L:
                        return (n = xs(t.type, t.key, t.props, null, e.mode, n)).ref = La(e, null, t), n.return = e, n;
                    case M:
                        return (t = Ds(t, e.mode, n)).return = e, t
                }
                if (wa(t) || R(t)) return (t = Ns(t, e.mode, n, null)).return = e, t;
                Ma(e, t)
            }
            return null
        }

        function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== i ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case L:
                        return n.key === i ? n.type === E ? f(e, t, n.props.children, r, i) : u(e, t, n, r) : null;
                    case M:
                        return n.key === i ? c(e, t, n, r) : null
                }
                if (wa(n) || R(n)) return null !== i ? null : f(e, t, n, r, null);
                Ma(e, n)
            }
            return null
        }

        function h(e, t, n, r, i) {
            if ("string" == typeof r || "number" == typeof r) return s(t, e = e.get(n) || null, "" + r, i);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case L:
                        return e = e.get(null === r.key ? n : r.key) || null, r.type === E ? f(t, e, r.props.children, i, r.key) : u(t, e, r, i);
                    case M:
                        return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i)
                }
                if (wa(r) || R(r)) return f(t, e = e.get(n) || null, r, i, null);
                Ma(t, r)
            }
            return null
        }

        function m(i, o, l, s) {
            for (var u = null, c = null, f = o, m = o = 0, y = null; null !== f && m < l.length; m++) {
                f.index > m ? (y = f, f = null) : y = f.sibling;
                var g = p(i, f, l[m], s);
                if (null === g) {
                    null === f && (f = y);
                    break
                }
                e && f && null === g.alternate && t(i, f), o = a(g, o, m), null === c ? u = g : c.sibling = g, c = g, f = y
            }
            if (m === l.length) return n(i, f), u;
            if (null === f) {
                for (; m < l.length; m++) null !== (f = d(i, l[m], s)) && (o = a(f, o, m), null === c ? u = f : c.sibling = f, c = f);
                return u
            }
            for (f = r(i, f); m < l.length; m++) null !== (y = h(f, i, m, l[m], s)) && (e && null !== y.alternate && f.delete(null === y.key ? m : y.key), o = a(y, o, m), null === c ? u = y : c.sibling = y, c = y);
            return e && f.forEach((function (e) {
                return t(i, e)
            })), u
        }

        function y(i, l, s, u) {
            var c = R(s);
            if ("function" != typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (var f = c = null, m = l, y = l = 0, g = null, b = s.next(); null !== m && !b.done; y++, b = s.next()) {
                m.index > y ? (g = m, m = null) : g = m.sibling;
                var v = p(i, m, b.value, u);
                if (null === v) {
                    null === m && (m = g);
                    break
                }
                e && m && null === v.alternate && t(i, m), l = a(v, l, y), null === f ? c = v : f.sibling = v, f = v, m = g
            }
            if (b.done) return n(i, m), c;
            if (null === m) {
                for (; !b.done; y++, b = s.next()) null !== (b = d(i, b.value, u)) && (l = a(b, l, y), null === f ? c = b : f.sibling = b, f = b);
                return c
            }
            for (m = r(i, m); !b.done; y++, b = s.next()) null !== (b = h(m, i, y, b.value, u)) && (e && null !== b.alternate && m.delete(null === b.key ? y : b.key), l = a(b, l, y), null === f ? c = b : f.sibling = b, f = b);
            return e && m.forEach((function (e) {
                return t(i, e)
            })), c
        }

        return function (e, r, a, s) {
            var u = "object" == typeof a && null !== a && a.type === E && null === a.key;
            u && (a = a.props.children);
            var c = "object" == typeof a && null !== a;
            if (c) switch (a.$$typeof) {
                case L:
                    e:{
                        for (c = a.key, u = r; null !== u;) {
                            if (u.key === c) {
                                switch (u.tag) {
                                    case 7:
                                        if (a.type === E) {
                                            n(e, u.sibling), (r = i(u, a.props.children)).return = e, e = r;
                                            break e
                                        }
                                        break;
                                    default:
                                        if (u.elementType === a.type) {
                                            n(e, u.sibling), (r = i(u, a.props)).ref = La(e, u, a), r.return = e, e = r;
                                            break e
                                        }
                                }
                                n(e, u);
                                break
                            }
                            t(e, u), u = u.sibling
                        }
                        a.type === E ? ((r = Ns(a.props.children, e.mode, s, a.key)).return = e, e = r) : ((s = xs(a.type, a.key, a.props, null, e.mode, s)).ref = La(e, r, a), s.return = e, e = s)
                    }
                    return l(e);
                case M:
                    e:{
                        for (u = a.key; null !== r;) {
                            if (r.key === u) {
                                if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                                    n(e, r.sibling), (r = i(r, a.children || [])).return = e, e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r), r = r.sibling
                        }
                        (r = Ds(a, e.mode, s)).return = e, e = r
                    }
                    return l(e)
            }
            if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = i(r, a)).return = e, e = r) : (n(e, r), (r = js(a, e.mode, s)).return = e, e = r), l(e);
            if (wa(a)) return m(e, r, a, s);
            if (R(a)) return y(e, r, a, s);
            if (c && Ma(e, a), void 0 === a && !u) switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type, Error(o(152, e.displayName || e.name || "Component"))
            }
            return n(e, r)
        }
    }

    var Ca = Ea(!0), Sa = Ea(!1), Ta = {}, xa = {current: Ta}, Na = {current: Ta}, ja = {current: Ta};

    function Da(e) {
        if (e === Ta) throw Error(o(174));
        return e
    }

    function ka(e, t) {
        switch (ui(ja, t), ui(Na, e), ui(xa, Ta), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ze(null, "");
                break;
            default:
                t = ze(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        si(xa), ui(xa, t)
    }

    function Ia() {
        si(xa), si(Na), si(ja)
    }

    function Oa(e) {
        Da(ja.current);
        var t = Da(xa.current), n = ze(t, e.type);
        t !== n && (ui(Na, e), ui(xa, n))
    }

    function Pa(e) {
        Na.current === e && (si(xa), si(Na))
    }

    var Aa = {current: 0};

    function Ra(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (64 & t.effectTag)) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function za(e, t) {
        return {responder: e, props: t}
    }

    var Fa = b.ReactCurrentDispatcher, _a = b.ReactCurrentBatchConfig, Ua = 0, Qa = null, Ya = null, Ba = null, Wa = !1;

    function Va() {
        throw Error(o(321))
    }

    function qa(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!zr(e[n], t[n])) return !1;
        return !0
    }

    function Ha(e, t, n, r, i, a) {
        if (Ua = a, Qa = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, Fa.current = null === e || null === e.memoizedState ? go : bo, e = n(r, i), t.expirationTime === Ua) {
            a = 0;
            do {
                if (t.expirationTime = 0, !(25 > a)) throw Error(o(301));
                a += 1, Ba = Ya = null, t.updateQueue = null, Fa.current = vo, e = n(r, i)
            } while (t.expirationTime === Ua)
        }
        if (Fa.current = yo, t = null !== Ya && null !== Ya.next, Ua = 0, Ba = Ya = Qa = null, Wa = !1, t) throw Error(o(300));
        return e
    }

    function Ga() {
        var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
        return null === Ba ? Qa.memoizedState = Ba = e : Ba = Ba.next = e, Ba
    }

    function Za() {
        if (null === Ya) {
            var e = Qa.alternate;
            e = null !== e ? e.memoizedState : null
        } else e = Ya.next;
        var t = null === Ba ? Qa.memoizedState : Ba.next;
        if (null !== t) Ba = t, Ya = e; else {
            if (null === e) throw Error(o(310));
            e = {
                memoizedState: (Ya = e).memoizedState,
                baseState: Ya.baseState,
                baseQueue: Ya.baseQueue,
                queue: Ya.queue,
                next: null
            }, null === Ba ? Qa.memoizedState = Ba = e : Ba = Ba.next = e
        }
        return Ba
    }

    function Ka(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function Xa(e) {
        var t = Za(), n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = Ya, i = r.baseQueue, a = n.pending;
        if (null !== a) {
            if (null !== i) {
                var l = i.next;
                i.next = a.next, a.next = l
            }
            r.baseQueue = i = a, n.pending = null
        }
        if (null !== i) {
            i = i.next, r = r.baseState;
            var s = l = a = null, u = i;
            do {
                var c = u.expirationTime;
                if (c < Ua) {
                    var f = {
                        expirationTime: u.expirationTime,
                        suspenseConfig: u.suspenseConfig,
                        action: u.action,
                        eagerReducer: u.eagerReducer,
                        eagerState: u.eagerState,
                        next: null
                    };
                    null === s ? (l = s = f, a = r) : s = s.next = f, c > Qa.expirationTime && (Qa.expirationTime = c, os(c))
                } else null !== s && (s = s.next = {
                    expirationTime: 1073741823,
                    suspenseConfig: u.suspenseConfig,
                    action: u.action,
                    eagerReducer: u.eagerReducer,
                    eagerState: u.eagerState,
                    next: null
                }), as(c, u.suspenseConfig), r = u.eagerReducer === e ? u.eagerState : e(r, u.action);
                u = u.next
            } while (null !== u && u !== i);
            null === s ? a = r : s.next = l, zr(r, t.memoizedState) || (Do = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = s, n.lastRenderedState = r
        }
        return [t.memoizedState, n.dispatch]
    }

    function Ja(e) {
        var t = Za(), n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, i = n.pending, a = t.memoizedState;
        if (null !== i) {
            n.pending = null;
            var l = i = i.next;
            do {
                a = e(a, l.action), l = l.next
            } while (l !== i);
            zr(a, t.memoizedState) || (Do = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
        }
        return [a, r]
    }

    function $a(e) {
        var t = Ga();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Ka,
            lastRenderedState: e
        }).dispatch = mo.bind(null, Qa, e), [t.memoizedState, e]
    }

    function eo(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, null === (t = Qa.updateQueue) ? (t = {lastEffect: null}, Qa.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
    }

    function to() {
        return Za().memoizedState
    }

    function no(e, t, n, r) {
        var i = Ga();
        Qa.effectTag |= e, i.memoizedState = eo(1 | t, n, void 0, void 0 === r ? null : r)
    }

    function ro(e, t, n, r) {
        var i = Za();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== Ya) {
            var o = Ya.memoizedState;
            if (a = o.destroy, null !== r && qa(r, o.deps)) return void eo(t, n, a, r)
        }
        Qa.effectTag |= e, i.memoizedState = eo(1 | t, n, a, r)
    }

    function io(e, t) {
        return no(516, 4, e, t)
    }

    function ao(e, t) {
        return ro(516, 4, e, t)
    }

    function oo(e, t) {
        return ro(4, 2, e, t)
    }

    function lo(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function () {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function () {
            t.current = null
        }) : void 0
    }

    function so(e, t, n) {
        return n = null != n ? n.concat([e]) : null, ro(4, 2, lo.bind(null, t, e), n)
    }

    function uo() {
    }

    function co(e, t) {
        return Ga().memoizedState = [e, void 0 === t ? null : t], e
    }

    function fo(e, t) {
        var n = Za();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && qa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function po(e, t) {
        var n = Za();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && qa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function ho(e, t, n) {
        var r = Ui();
        Yi(98 > r ? 98 : r, (function () {
            e(!0)
        })), Yi(97 < r ? 97 : r, (function () {
            var r = _a.suspense;
            _a.suspense = void 0 === t ? null : t;
            try {
                e(!1), n()
            } finally {
                _a.suspense = r
            }
        }))
    }

    function mo(e, t, n) {
        var r = ql(), i = da.suspense;
        i = {
            expirationTime: r = Hl(r, e, i),
            suspenseConfig: i,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
        };
        var a = t.pending;
        if (null === a ? i.next = i : (i.next = a.next, a.next = i), t.pending = i, a = e.alternate, e === Qa || null !== a && a === Qa) Wa = !0, i.expirationTime = Ua, Qa.expirationTime = Ua; else {
            if (0 === e.expirationTime && (null === a || 0 === a.expirationTime) && null !== (a = t.lastRenderedReducer)) try {
                var o = t.lastRenderedState, l = a(o, n);
                if (i.eagerReducer = a, i.eagerState = l, zr(l, o)) return
            } catch (e) {
            }
            Gl(e, r)
        }
    }

    var yo = {
        readContext: ra,
        useCallback: Va,
        useContext: Va,
        useEffect: Va,
        useImperativeHandle: Va,
        useLayoutEffect: Va,
        useMemo: Va,
        useReducer: Va,
        useRef: Va,
        useState: Va,
        useDebugValue: Va,
        useResponder: Va,
        useDeferredValue: Va,
        useTransition: Va
    }, go = {
        readContext: ra, useCallback: co, useContext: ra, useEffect: io, useImperativeHandle: function (e, t, n) {
            return n = null != n ? n.concat([e]) : null, no(4, 2, lo.bind(null, t, e), n)
        }, useLayoutEffect: function (e, t) {
            return no(4, 2, e, t)
        }, useMemo: function (e, t) {
            var n = Ga();
            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
        }, useReducer: function (e, t, n) {
            var r = Ga();
            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }).dispatch = mo.bind(null, Qa, e), [r.memoizedState, e]
        }, useRef: function (e) {
            return e = {current: e}, Ga().memoizedState = e
        }, useState: $a, useDebugValue: uo, useResponder: za, useDeferredValue: function (e, t) {
            var n = $a(e), r = n[0], i = n[1];
            return io((function () {
                var n = _a.suspense;
                _a.suspense = void 0 === t ? null : t;
                try {
                    i(e)
                } finally {
                    _a.suspense = n
                }
            }), [e, t]), r
        }, useTransition: function (e) {
            var t = $a(!1), n = t[0];
            return t = t[1], [co(ho.bind(null, t, e), [t, e]), n]
        }
    }, bo = {
        readContext: ra,
        useCallback: fo,
        useContext: ra,
        useEffect: ao,
        useImperativeHandle: so,
        useLayoutEffect: oo,
        useMemo: po,
        useReducer: Xa,
        useRef: to,
        useState: function () {
            return Xa(Ka)
        },
        useDebugValue: uo,
        useResponder: za,
        useDeferredValue: function (e, t) {
            var n = Xa(Ka), r = n[0], i = n[1];
            return ao((function () {
                var n = _a.suspense;
                _a.suspense = void 0 === t ? null : t;
                try {
                    i(e)
                } finally {
                    _a.suspense = n
                }
            }), [e, t]), r
        },
        useTransition: function (e) {
            var t = Xa(Ka), n = t[0];
            return t = t[1], [fo(ho.bind(null, t, e), [t, e]), n]
        }
    }, vo = {
        readContext: ra,
        useCallback: fo,
        useContext: ra,
        useEffect: ao,
        useImperativeHandle: so,
        useLayoutEffect: oo,
        useMemo: po,
        useReducer: Ja,
        useRef: to,
        useState: function () {
            return Ja(Ka)
        },
        useDebugValue: uo,
        useResponder: za,
        useDeferredValue: function (e, t) {
            var n = Ja(Ka), r = n[0], i = n[1];
            return ao((function () {
                var n = _a.suspense;
                _a.suspense = void 0 === t ? null : t;
                try {
                    i(e)
                } finally {
                    _a.suspense = n
                }
            }), [e, t]), r
        },
        useTransition: function (e) {
            var t = Ja(Ka), n = t[0];
            return t = t[1], [fo(ho.bind(null, t, e), [t, e]), n]
        }
    }, wo = null, Lo = null, Mo = !1;

    function Eo(e, t) {
        var n = Cs(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function Co(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            case 13:
            default:
                return !1
        }
    }

    function So(e) {
        if (Mo) {
            var t = Lo;
            if (t) {
                var n = t;
                if (!Co(e, t)) {
                    if (!(t = Ln(n.nextSibling)) || !Co(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Mo = !1, void (wo = e);
                    Eo(wo, n)
                }
                wo = e, Lo = Ln(t.firstChild)
            } else e.effectTag = -1025 & e.effectTag | 2, Mo = !1, wo = e
        }
    }

    function To(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        wo = e
    }

    function xo(e) {
        if (e !== wo) return !1;
        if (!Mo) return To(e), Mo = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !bn(t, e.memoizedProps)) for (t = Lo; t;) Eo(e, t), t = Ln(t.nextSibling);
        if (To(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
            e:{
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                Lo = Ln(e.nextSibling);
                                break e
                            }
                            t--
                        } else "$" !== n && "$!" !== n && "$?" !== n || t++
                    }
                    e = e.nextSibling
                }
                Lo = null
            }
        } else Lo = wo ? Ln(e.stateNode.nextSibling) : null;
        return !0
    }

    function No() {
        Lo = wo = null, Mo = !1
    }

    var jo = b.ReactCurrentOwner, Do = !1;

    function ko(e, t, n, r) {
        t.child = null === e ? Sa(t, null, n, r) : Ca(t, e.child, n, r)
    }

    function Io(e, t, n, r, i) {
        n = n.render;
        var a = t.ref;
        return na(t, i), r = Ha(e, t, n, r, a, i), null === e || Do ? (t.effectTag |= 1, ko(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Go(e, t, i))
    }

    function Oo(e, t, n, r, i, a) {
        if (null === e) {
            var o = n.type;
            return "function" != typeof o || Ss(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = xs(n.type, null, r, null, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Po(e, t, o, r, i, a))
        }
        return o = e.child, i < a && (i = o.memoizedProps, (n = null !== (n = n.compare) ? n : _r)(i, r) && e.ref === t.ref) ? Go(e, t, a) : (t.effectTag |= 1, (e = Ts(o, r)).ref = t.ref, e.return = t, t.child = e)
    }

    function Po(e, t, n, r, i, a) {
        return null !== e && _r(e.memoizedProps, r) && e.ref === t.ref && (Do = !1, i < a) ? (t.expirationTime = e.expirationTime, Go(e, t, a)) : Ro(e, t, n, r, a)
    }

    function Ao(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }

    function Ro(e, t, n, r, i) {
        var a = mi(n) ? pi : fi.current;
        return a = hi(t, a), na(t, i), n = Ha(e, t, n, r, a, i), null === e || Do ? (t.effectTag |= 1, ko(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Go(e, t, i))
    }

    function zo(e, t, n, r, i) {
        if (mi(n)) {
            var a = !0;
            vi(t)
        } else a = !1;
        if (na(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), ga(t, n, r), va(t, n, r, i), r = !0; else if (null === e) {
            var o = t.stateNode, l = t.memoizedProps;
            o.props = l;
            var s = o.context, u = n.contextType;
            "object" == typeof u && null !== u ? u = ra(u) : u = hi(t, u = mi(n) ? pi : fi.current);
            var c = n.getDerivedStateFromProps,
                f = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
            f || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (l !== r || s !== u) && ba(t, o, r, u), ia = !1;
            var d = t.memoizedState;
            o.state = d, ca(t, r, o, i), s = t.memoizedState, l !== r || d !== s || di.current || ia ? ("function" == typeof c && (ha(t, n, c, r), s = t.memoizedState), (l = ia || ya(t, n, l, r, d, s, u)) ? (f || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof o.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = u, r = l) : ("function" == typeof o.componentDidMount && (t.effectTag |= 4), r = !1)
        } else o = t.stateNode, oa(e, t), l = t.memoizedProps, o.props = t.type === t.elementType ? l : Gi(t.type, l), s = o.context, "object" == typeof (u = n.contextType) && null !== u ? u = ra(u) : u = hi(t, u = mi(n) ? pi : fi.current), (f = "function" == typeof (c = n.getDerivedStateFromProps) || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (l !== r || s !== u) && ba(t, o, r, u), ia = !1, s = t.memoizedState, o.state = s, ca(t, r, o, i), d = t.memoizedState, l !== r || s !== d || di.current || ia ? ("function" == typeof c && (ha(t, n, c, r), d = t.memoizedState), (c = ia || ya(t, n, l, r, s, d, u)) ? (f || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, d, u), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, d, u)), "function" == typeof o.componentDidUpdate && (t.effectTag |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof o.componentDidUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = d), o.props = r, o.state = d, o.context = u, r = c) : ("function" != typeof o.componentDidUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), r = !1);
        return Fo(e, t, n, r, a, i)
    }

    function Fo(e, t, n, r, i, a) {
        Ao(e, t);
        var o = 0 != (64 & t.effectTag);
        if (!r && !o) return i && wi(t, n, !1), Go(e, t, a);
        r = t.stateNode, jo.current = t;
        var l = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.effectTag |= 1, null !== e && o ? (t.child = Ca(t, e.child, null, a), t.child = Ca(t, null, l, a)) : ko(e, t, l, a), t.memoizedState = r.state, i && wi(t, n, !0), t.child
    }

    function _o(e) {
        var t = e.stateNode;
        t.pendingContext ? gi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && gi(0, t.context, !1), ka(e, t.containerInfo)
    }

    var Uo, Qo, Yo, Bo = {dehydrated: null, retryTime: 0};

    function Wo(e, t, n) {
        var r, i = t.mode, a = t.pendingProps, o = Aa.current, l = !1;
        if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & o) && (null === e || null !== e.memoizedState)), r ? (l = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (o |= 1), ui(Aa, 1 & o), null === e) {
            if (void 0 !== a.fallback && So(t), l) {
                if (l = a.fallback, (a = Ns(null, i, 0, null)).return = t, 0 == (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
                return (n = Ns(l, i, n, null)).return = t, a.sibling = n, t.memoizedState = Bo, t.child = a, n
            }
            return i = a.children, t.memoizedState = null, t.child = Sa(t, null, i, n)
        }
        if (null !== e.memoizedState) {
            if (i = (e = e.child).sibling, l) {
                if (a = a.fallback, (n = Ts(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== e.child) for (n.child = l; null !== l;) l.return = n, l = l.sibling;
                return (i = Ts(i, a)).return = t, n.sibling = i, n.childExpirationTime = 0, t.memoizedState = Bo, t.child = n, i
            }
            return n = Ca(t, e.child, a.children, n), t.memoizedState = null, t.child = n
        }
        if (e = e.child, l) {
            if (l = a.fallback, (a = Ns(null, i, 0, null)).return = t, a.child = e, null !== e && (e.return = a), 0 == (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
            return (n = Ns(l, i, n, null)).return = t, a.sibling = n, n.effectTag |= 2, a.childExpirationTime = 0, t.memoizedState = Bo, t.child = a, n
        }
        return t.memoizedState = null, t.child = Ca(t, e, a.children, n)
    }

    function Vo(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t), ta(e.return, t)
    }

    function qo(e, t, n, r, i, a) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: i,
            lastEffect: a
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailExpiration = 0, o.tailMode = i, o.lastEffect = a)
    }

    function Ho(e, t, n) {
        var r = t.pendingProps, i = r.revealOrder, a = r.tail;
        if (ko(e, t, r.children, n), 0 != (2 & (r = Aa.current))) r = 1 & r | 2, t.effectTag |= 64; else {
            if (null !== e && 0 != (64 & e.effectTag)) e:for (e = t.child; null !== e;) {
                if (13 === e.tag) null !== e.memoizedState && Vo(e, n); else if (19 === e.tag) Vo(e, n); else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (ui(Aa, r), 0 == (2 & t.mode)) t.memoizedState = null; else switch (i) {
            case"forwards":
                for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === Ra(e) && (i = n), n = n.sibling;
                null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), qo(t, !1, i, n, a, t.lastEffect);
                break;
            case"backwards":
                for (n = null, i = t.child, t.child = null; null !== i;) {
                    if (null !== (e = i.alternate) && null === Ra(e)) {
                        t.child = i;
                        break
                    }
                    e = i.sibling, i.sibling = n, n = i, i = e
                }
                qo(t, !0, n, null, a, t.lastEffect);
                break;
            case"together":
                qo(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Go(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if (0 !== r && os(r), t.childExpirationTime < n) return null;
        if (null !== e && t.child !== e.child) throw Error(o(153));
        if (null !== t.child) {
            for (n = Ts(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ts(e, e.pendingProps)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function Zo(e, t) {
        switch (e.tailMode) {
            case"hidden":
                t = e.tail;
                for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case"collapsed":
                n = e.tail;
                for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function Ko(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return null;
            case 1:
                return mi(t.type) && yi(), null;
            case 3:
                return Ia(), si(di), si(fi), (n = t.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || !xo(t) || (t.effectTag |= 4), null;
            case 5:
                Pa(t), n = Da(ja.current);
                var a = t.type;
                if (null !== e && null != t.stateNode) Qo(e, t, a, r, n), e.ref !== t.ref && (t.effectTag |= 128); else {
                    if (!r) {
                        if (null === t.stateNode) throw Error(o(166));
                        return null
                    }
                    if (e = Da(xa.current), xo(t)) {
                        r = t.stateNode, a = t.type;
                        var l = t.memoizedProps;
                        switch (r[Cn] = t, r[Sn] = l, a) {
                            case"iframe":
                            case"object":
                            case"embed":
                                Ht("load", r);
                                break;
                            case"video":
                            case"audio":
                                for (e = 0; e < Ke.length; e++) Ht(Ke[e], r);
                                break;
                            case"source":
                                Ht("error", r);
                                break;
                            case"img":
                            case"image":
                            case"link":
                                Ht("error", r), Ht("load", r);
                                break;
                            case"form":
                                Ht("reset", r), Ht("submit", r);
                                break;
                            case"details":
                                Ht("toggle", r);
                                break;
                            case"input":
                                Ee(r, l), Ht("invalid", r), sn(n, "onChange");
                                break;
                            case"select":
                                r._wrapperState = {wasMultiple: !!l.multiple}, Ht("invalid", r), sn(n, "onChange");
                                break;
                            case"textarea":
                                ke(r, l), Ht("invalid", r), sn(n, "onChange")
                        }
                        for (var s in an(a, l), e = null, l) if (l.hasOwnProperty(s)) {
                            var u = l[s];
                            "children" === s ? "string" == typeof u ? r.textContent !== u && (e = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (e = ["children", "" + u]) : V.hasOwnProperty(s) && null != u && sn(n, s)
                        }
                        switch (a) {
                            case"input":
                                we(r), Te(r, l, !0);
                                break;
                            case"textarea":
                                we(r), Oe(r);
                                break;
                            case"select":
                            case"option":
                                break;
                            default:
                                "function" == typeof l.onClick && (r.onclick = un)
                        }
                        n = e, t.updateQueue = n, null !== n && (t.effectTag |= 4)
                    } else {
                        switch (s = 9 === n.nodeType ? n : n.ownerDocument, e === ln && (e = Re(a)), e === ln ? "script" === a ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = s.createElement(a, {is: r.is}) : (e = s.createElement(a), "select" === a && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, a), e[Cn] = t, e[Sn] = r, Uo(e, t), t.stateNode = e, s = on(a, r), a) {
                            case"iframe":
                            case"object":
                            case"embed":
                                Ht("load", e), u = r;
                                break;
                            case"video":
                            case"audio":
                                for (u = 0; u < Ke.length; u++) Ht(Ke[u], e);
                                u = r;
                                break;
                            case"source":
                                Ht("error", e), u = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                Ht("error", e), Ht("load", e), u = r;
                                break;
                            case"form":
                                Ht("reset", e), Ht("submit", e), u = r;
                                break;
                            case"details":
                                Ht("toggle", e), u = r;
                                break;
                            case"input":
                                Ee(e, r), u = Me(e, r), Ht("invalid", e), sn(n, "onChange");
                                break;
                            case"option":
                                u = Ne(e, r);
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, u = i({}, r, {value: void 0}), Ht("invalid", e), sn(n, "onChange");
                                break;
                            case"textarea":
                                ke(e, r), u = De(e, r), Ht("invalid", e), sn(n, "onChange");
                                break;
                            default:
                                u = r
                        }
                        an(a, u);
                        var c = u;
                        for (l in c) if (c.hasOwnProperty(l)) {
                            var f = c[l];
                            "style" === l ? nn(e, f) : "dangerouslySetInnerHTML" === l ? null != (f = f ? f.__html : void 0) && _e(e, f) : "children" === l ? "string" == typeof f ? ("textarea" !== a || "" !== f) && Ue(e, f) : "number" == typeof f && Ue(e, "" + f) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (V.hasOwnProperty(l) ? null != f && sn(n, l) : null != f && ge(e, l, f, s))
                        }
                        switch (a) {
                            case"input":
                                we(e), Te(e, r, !1);
                                break;
                            case"textarea":
                                we(e), Oe(e);
                                break;
                            case"option":
                                null != r.value && e.setAttribute("value", "" + be(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, null != (n = r.value) ? je(e, !!r.multiple, n, !1) : null != r.defaultValue && je(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof u.onClick && (e.onclick = un)
                        }
                        gn(a, r) && (t.effectTag |= 4)
                    }
                    null !== t.ref && (t.effectTag |= 128)
                }
                return null;
            case 6:
                if (e && null != t.stateNode) Yo(0, t, e.memoizedProps, r); else {
                    if ("string" != typeof r && null === t.stateNode) throw Error(o(166));
                    n = Da(ja.current), Da(xa.current), xo(t) ? (n = t.stateNode, r = t.memoizedProps, n[Cn] = t, n.nodeValue !== r && (t.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Cn] = t, t.stateNode = n)
                }
                return null;
            case 13:
                return si(Aa), r = t.memoizedState, 0 != (64 & t.effectTag) ? (t.expirationTime = n, t) : (n = null !== r, r = !1, null === e ? void 0 !== t.memoizedProps.fallback && xo(t) : (r = null !== (a = e.memoizedState), n || null === a || null !== (a = e.child.sibling) && (null !== (l = t.firstEffect) ? (t.firstEffect = a, a.nextEffect = l) : (t.firstEffect = t.lastEffect = a, a.nextEffect = null), a.effectTag = 8)), n && !r && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Aa.current) ? xl === wl && (xl = Ll) : (xl !== wl && xl !== Ll || (xl = Ml), 0 !== Il && null !== Cl && (Os(Cl, Tl), Ps(Cl, Il)))), (n || r) && (t.effectTag |= 4), null);
            case 4:
                return Ia(), null;
            case 10:
                return ea(t), null;
            case 17:
                return mi(t.type) && yi(), null;
            case 19:
                if (si(Aa), null === (r = t.memoizedState)) return null;
                if (a = 0 != (64 & t.effectTag), null === (l = r.rendering)) {
                    if (a) Zo(r, !1); else if (xl !== wl || null !== e && 0 != (64 & e.effectTag)) for (l = t.child; null !== l;) {
                        if (null !== (e = Ra(l))) {
                            for (t.effectTag |= 64, Zo(r, !1), null !== (a = e.updateQueue) && (t.updateQueue = a, t.effectTag |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = t.child; null !== r;) l = n, (a = r).effectTag &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (e = a.alternate) ? (a.childExpirationTime = 0, a.expirationTime = l, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null) : (a.childExpirationTime = e.childExpirationTime, a.expirationTime = e.expirationTime, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, l = e.dependencies, a.dependencies = null === l ? null : {
                                expirationTime: l.expirationTime,
                                firstContext: l.firstContext,
                                responders: l.responders
                            }), r = r.sibling;
                            return ui(Aa, 1 & Aa.current | 2), t.child
                        }
                        l = l.sibling
                    }
                } else {
                    if (!a) if (null !== (e = Ra(l))) {
                        if (t.effectTag |= 64, a = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), Zo(r, !0), null === r.tail && "hidden" === r.tailMode && !l.alternate) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                    } else 2 * _i() - r.renderingStartTime > r.tailExpiration && 1 < n && (t.effectTag |= 64, a = !0, Zo(r, !1), t.expirationTime = t.childExpirationTime = n - 1);
                    r.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = r.last) ? n.sibling = l : t.child = l, r.last = l)
                }
                return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = _i() + 500), n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = _i(), n.sibling = null, t = Aa.current, ui(Aa, a ? 1 & t | 2 : 1 & t), n) : null
        }
        throw Error(o(156, t.tag))
    }

    function Xo(e) {
        switch (e.tag) {
            case 1:
                mi(e.type) && yi();
                var t = e.effectTag;
                return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
            case 3:
                if (Ia(), si(di), si(fi), 0 != (64 & (t = e.effectTag))) throw Error(o(285));
                return e.effectTag = -4097 & t | 64, e;
            case 5:
                return Pa(e), null;
            case 13:
                return si(Aa), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
            case 19:
                return si(Aa), null;
            case 4:
                return Ia(), null;
            case 10:
                return ea(e), null;
            default:
                return null
        }
    }

    function Jo(e, t) {
        return {value: e, source: t, stack: F(t)}
    }

    Uo = function (e, t) {
        for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, Qo = function (e, t, n, r, a) {
        var o = e.memoizedProps;
        if (o !== r) {
            var l, s, u = t.stateNode;
            switch (Da(xa.current), e = null, n) {
                case"input":
                    o = Me(u, o), r = Me(u, r), e = [];
                    break;
                case"option":
                    o = Ne(u, o), r = Ne(u, r), e = [];
                    break;
                case"select":
                    o = i({}, o, {value: void 0}), r = i({}, r, {value: void 0}), e = [];
                    break;
                case"textarea":
                    o = De(u, o), r = De(u, r), e = [];
                    break;
                default:
                    "function" != typeof o.onClick && "function" == typeof r.onClick && (u.onclick = un)
            }
            for (l in an(n, r), n = null, o) if (!r.hasOwnProperty(l) && o.hasOwnProperty(l) && null != o[l]) if ("style" === l) for (s in u = o[l]) u.hasOwnProperty(s) && (n || (n = {}), n[s] = ""); else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (V.hasOwnProperty(l) ? e || (e = []) : (e = e || []).push(l, null));
            for (l in r) {
                var c = r[l];
                if (u = null != o ? o[l] : void 0, r.hasOwnProperty(l) && c !== u && (null != c || null != u)) if ("style" === l) if (u) {
                    for (s in u) !u.hasOwnProperty(s) || c && c.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                    for (s in c) c.hasOwnProperty(s) && u[s] !== c[s] && (n || (n = {}), n[s] = c[s])
                } else n || (e || (e = []), e.push(l, n)), n = c; else "dangerouslySetInnerHTML" === l ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (e = e || []).push(l, c)) : "children" === l ? u === c || "string" != typeof c && "number" != typeof c || (e = e || []).push(l, "" + c) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (V.hasOwnProperty(l) ? (null != c && sn(a, l), e || u === c || (e = [])) : (e = e || []).push(l, c))
            }
            n && (e = e || []).push("style", n), a = e, (t.updateQueue = a) && (t.effectTag |= 4)
        }
    }, Yo = function (e, t, n, r) {
        n !== r && (t.effectTag |= 4)
    };
    var $o = "function" == typeof WeakSet ? WeakSet : Set;

    function el(e, t) {
        var n = t.source, r = t.stack;
        null === r && null !== n && (r = F(n)), null !== n && z(n.type), t = t.value, null !== e && 1 === e.tag && z(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout((function () {
                throw e
            }))
        }
    }

    function tl(e) {
        var t = e.ref;
        if (null !== t) if ("function" == typeof t) try {
            t(null)
        } catch (t) {
            bs(e, t)
        } else t.current = null
    }

    function nl(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (256 & t.effectTag && null !== e) {
                    var n = e.memoizedProps, r = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Gi(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                }
                return;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                return
        }
        throw Error(o(163))
    }

    function rl(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.destroy;
                    n.destroy = void 0, void 0 !== r && r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function il(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function al(e, t, n) {
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return void il(3, n);
            case 1:
                if (e = n.stateNode, 4 & n.effectTag) if (null === t) e.componentDidMount(); else {
                    var r = n.elementType === n.type ? t.memoizedProps : Gi(n.type, t.memoizedProps);
                    e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate)
                }
                return void (null !== (t = n.updateQueue) && fa(n, t, e));
            case 3:
                if (null !== (t = n.updateQueue)) {
                    if (e = null, null !== n.child) switch (n.child.tag) {
                        case 5:
                            e = n.child.stateNode;
                            break;
                        case 1:
                            e = n.child.stateNode
                    }
                    fa(n, t, e)
                }
                return;
            case 5:
                return e = n.stateNode, void (null === t && 4 & n.effectTag && gn(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
                return;
            case 13:
                return void (null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Rt(n)))));
            case 19:
            case 17:
            case 20:
            case 21:
                return
        }
        throw Error(o(163))
    }

    function ol(e, t, n) {
        switch ("function" == typeof Ms && Ms(t), t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var r = e.next;
                    Yi(97 < n ? 97 : n, (function () {
                        var e = r;
                        do {
                            var n = e.destroy;
                            if (void 0 !== n) {
                                var i = t;
                                try {
                                    n()
                                } catch (e) {
                                    bs(i, e)
                                }
                            }
                            e = e.next
                        } while (e !== r)
                    }))
                }
                break;
            case 1:
                tl(t), "function" == typeof (n = t.stateNode).componentWillUnmount && function (e, t) {
                    try {
                        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                    } catch (t) {
                        bs(e, t)
                    }
                }(t, n);
                break;
            case 5:
                tl(t);
                break;
            case 4:
                cl(e, t, n)
        }
    }

    function ll(e) {
        var t = e.alternate;
        e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && ll(t)
    }

    function sl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function ul(e) {
        e:{
            for (var t = e.return; null !== t;) {
                if (sl(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            throw Error(o(160))
        }
        switch (t = n.stateNode, n.tag) {
            case 5:
                var r = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, r = !0;
                break;
            default:
                throw Error(o(161))
        }
        16 & n.effectTag && (Ue(t, ""), n.effectTag &= -17);
        e:t:for (n = e; ;) {
            for (; null === n.sibling;) {
                if (null === n.return || sl(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.effectTag) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break e
            }
        }
        r ? function e(t, n, r) {
            var i = t.tag, a = 5 === i || 6 === i;
            if (a) t = a ? t.stateNode : t.stateNode.instance, n ? 8 === r.nodeType ? r.parentNode.insertBefore(t, n) : r.insertBefore(t, n) : (8 === r.nodeType ? (n = r.parentNode).insertBefore(t, r) : (n = r).appendChild(t), null !== (r = r._reactRootContainer) && void 0 !== r || null !== n.onclick || (n.onclick = un)); else if (4 !== i && null !== (t = t.child)) for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
        }(e, n, t) : function e(t, n, r) {
            var i = t.tag, a = 5 === i || 6 === i;
            if (a) t = a ? t.stateNode : t.stateNode.instance, n ? r.insertBefore(t, n) : r.appendChild(t); else if (4 !== i && null !== (t = t.child)) for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
        }(e, n, t)
    }

    function cl(e, t, n) {
        for (var r, i, a = t, l = !1; ;) {
            if (!l) {
                l = a.return;
                e:for (; ;) {
                    if (null === l) throw Error(o(160));
                    switch (r = l.stateNode, l.tag) {
                        case 5:
                            i = !1;
                            break e;
                        case 3:
                        case 4:
                            r = r.containerInfo, i = !0;
                            break e
                    }
                    l = l.return
                }
                l = !0
            }
            if (5 === a.tag || 6 === a.tag) {
                e:for (var s = e, u = a, c = n, f = u; ;) if (ol(s, f, c), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child; else {
                    if (f === u) break e;
                    for (; null === f.sibling;) {
                        if (null === f.return || f.return === u) break e;
                        f = f.return
                    }
                    f.sibling.return = f.return, f = f.sibling
                }
                i ? (s = r, u = a.stateNode, 8 === s.nodeType ? s.parentNode.removeChild(u) : s.removeChild(u)) : r.removeChild(a.stateNode)
            } else if (4 === a.tag) {
                if (null !== a.child) {
                    r = a.stateNode.containerInfo, i = !0, a.child.return = a, a = a.child;
                    continue
                }
            } else if (ol(e, a, n), null !== a.child) {
                a.child.return = a, a = a.child;
                continue
            }
            if (a === t) break;
            for (; null === a.sibling;) {
                if (null === a.return || a.return === t) return;
                4 === (a = a.return).tag && (l = !1)
            }
            a.sibling.return = a.return, a = a.sibling
        }
    }

    function fl(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                return void rl(3, t);
            case 1:
                return;
            case 5:
                var n = t.stateNode;
                if (null != n) {
                    var r = t.memoizedProps, i = null !== e ? e.memoizedProps : r;
                    e = t.type;
                    var a = t.updateQueue;
                    if (t.updateQueue = null, null !== a) {
                        for (n[Sn] = r, "input" === e && "radio" === r.type && null != r.name && Ce(n, r), on(e, i), t = on(e, r), i = 0; i < a.length; i += 2) {
                            var l = a[i], s = a[i + 1];
                            "style" === l ? nn(n, s) : "dangerouslySetInnerHTML" === l ? _e(n, s) : "children" === l ? Ue(n, s) : ge(n, l, s, t)
                        }
                        switch (e) {
                            case"input":
                                Se(n, r);
                                break;
                            case"textarea":
                                Ie(n, r);
                                break;
                            case"select":
                                t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? je(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? je(n, !!r.multiple, r.defaultValue, !0) : je(n, !!r.multiple, r.multiple ? [] : "", !1))
                        }
                    }
                }
                return;
            case 6:
                if (null === t.stateNode) throw Error(o(162));
                return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
                return void ((t = t.stateNode).hydrate && (t.hydrate = !1, Rt(t.containerInfo)));
            case 12:
                return;
            case 13:
                if (n = t, null === t.memoizedState ? r = !1 : (r = !0, n = t.child, Pl = _i()), null !== n) e:for (e = n; ;) {
                    if (5 === e.tag) a = e.stateNode, r ? "function" == typeof (a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = e.stateNode, i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, a.style.display = tn("display", i)); else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps; else {
                        if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                            (a = e.child.sibling).return = e, e = a;
                            continue
                        }
                        if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                    }
                    if (e === n) break;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === n) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                return void dl(t);
            case 19:
                return void dl(t);
            case 17:
                return
        }
        throw Error(o(163))
    }

    function dl(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new $o), t.forEach((function (t) {
                var r = ws.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r))
            }))
        }
    }

    var pl = "function" == typeof WeakMap ? WeakMap : Map;

    function hl(e, t, n) {
        (n = la(n, null)).tag = 3, n.payload = {element: null};
        var r = t.value;
        return n.callback = function () {
            Rl || (Rl = !0, zl = r), el(e, t)
        }, n
    }

    function ml(e, t, n) {
        (n = la(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var i = t.value;
            n.payload = function () {
                return el(e, t), r(i)
            }
        }
        var a = e.stateNode;
        return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function () {
            "function" != typeof r && (null === Fl ? Fl = new Set([this]) : Fl.add(this), el(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {componentStack: null !== n ? n : ""})
        }), n
    }

    var yl, gl = Math.ceil, bl = b.ReactCurrentDispatcher, vl = b.ReactCurrentOwner, wl = 0, Ll = 3, Ml = 4, El = 0,
        Cl = null, Sl = null, Tl = 0, xl = wl, Nl = null, jl = 1073741823, Dl = 1073741823, kl = null, Il = 0, Ol = !1,
        Pl = 0, Al = null, Rl = !1, zl = null, Fl = null, _l = !1, Ul = null, Ql = 90, Yl = null, Bl = 0, Wl = null,
        Vl = 0;

    function ql() {
        return 0 != (48 & El) ? 1073741821 - (_i() / 10 | 0) : 0 !== Vl ? Vl : Vl = 1073741821 - (_i() / 10 | 0)
    }

    function Hl(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = Ui();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if (0 != (16 & El)) return Tl;
        if (null !== n) e = Hi(e, 0 | n.timeoutMs || 5e3, 250); else switch (r) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = Hi(e, 150, 100);
                break;
            case 97:
            case 96:
                e = Hi(e, 5e3, 250);
                break;
            case 95:
                e = 2;
                break;
            default:
                throw Error(o(326))
        }
        return null !== Cl && e === Tl && --e, e
    }

    function Gl(e, t) {
        if (50 < Bl) throw Bl = 0, Wl = null, Error(o(185));
        if (null !== (e = Zl(e, t))) {
            var n = Ui();
            1073741823 === t ? 0 != (8 & El) && 0 == (48 & El) ? $l(e) : (Xl(e), 0 === El && Vi()) : Xl(e), 0 == (4 & El) || 98 !== n && 99 !== n || (null === Yl ? Yl = new Map([[e, t]]) : (void 0 === (n = Yl.get(e)) || n > t) && Yl.set(e, t))
        }
    }

    function Zl(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return, i = null;
        if (null === r && 3 === e.tag) i = e.stateNode; else for (; null !== r;) {
            if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                i = r.stateNode;
                break
            }
            r = r.return
        }
        return null !== i && (Cl === i && (os(t), xl === Ml && Os(i, Tl)), Ps(i, t)), i
    }

    function Kl(e) {
        var t = e.lastExpiredTime;
        if (0 !== t) return t;
        if (!Is(e, t = e.firstPendingTime)) return t;
        var n = e.lastPingedTime;
        return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e
    }

    function Xl(e) {
        if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Wi($l.bind(null, e)); else {
            var t = Kl(e), n = e.callbackNode;
            if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90); else {
                var r = ql();
                if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                    var i = e.callbackPriority;
                    if (e.callbackExpirationTime === t && i >= r) return;
                    n !== Ii && Ei(n)
                }
                e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? Wi($l.bind(null, e)) : Bi(r, Jl.bind(null, e), {timeout: 10 * (1073741821 - t) - _i()}), e.callbackNode = t
            }
        }
    }

    function Jl(e, t) {
        if (Vl = 0, t) return As(e, t = ql()), Xl(e), null;
        var n = Kl(e);
        if (0 !== n) {
            if (t = e.callbackNode, 0 != (48 & El)) throw Error(o(327));
            if (ms(), e === Cl && n === Tl || ns(e, n), null !== Sl) {
                var r = El;
                El |= 16;
                for (var i = is(); ;) try {
                    ss();
                    break
                } catch (t) {
                    rs(e, t)
                }
                if ($i(), El = r, bl.current = i, 1 === xl) throw t = Nl, ns(e, n), Os(e, n), Xl(e), t;
                if (null === Sl) switch (i = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, r = xl, Cl = null, r) {
                    case wl:
                    case 1:
                        throw Error(o(345));
                    case 2:
                        As(e, 2 < n ? 2 : n);
                        break;
                    case Ll:
                        if (Os(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fs(i)), 1073741823 === jl && 10 < (i = Pl + 500 - _i())) {
                            if (Ol) {
                                var a = e.lastPingedTime;
                                if (0 === a || a >= n) {
                                    e.lastPingedTime = n, ns(e, n);
                                    break
                                }
                            }
                            if (0 !== (a = Kl(e)) && a !== n) break;
                            if (0 !== r && r !== n) {
                                e.lastPingedTime = r;
                                break
                            }
                            e.timeoutHandle = vn(ds.bind(null, e), i);
                            break
                        }
                        ds(e);
                        break;
                    case Ml:
                        if (Os(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fs(i)), Ol && (0 === (i = e.lastPingedTime) || i >= n)) {
                            e.lastPingedTime = n, ns(e, n);
                            break
                        }
                        if (0 !== (i = Kl(e)) && i !== n) break;
                        if (0 !== r && r !== n) {
                            e.lastPingedTime = r;
                            break
                        }
                        if (1073741823 !== Dl ? r = 10 * (1073741821 - Dl) - _i() : 1073741823 === jl ? r = 0 : (r = 10 * (1073741821 - jl) - 5e3, 0 > (r = (i = _i()) - r) && (r = 0), (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gl(r / 1960)) - r) && (r = n)), 10 < r) {
                            e.timeoutHandle = vn(ds.bind(null, e), r);
                            break
                        }
                        ds(e);
                        break;
                    case 5:
                        if (1073741823 !== jl && null !== kl) {
                            a = jl;
                            var l = kl;
                            if (0 >= (r = 0 | l.busyMinDurationMs) ? r = 0 : (i = 0 | l.busyDelayMs, r = (a = _i() - (10 * (1073741821 - a) - (0 | l.timeoutMs || 5e3))) <= i ? 0 : i + r - a), 10 < r) {
                                Os(e, n), e.timeoutHandle = vn(ds.bind(null, e), r);
                                break
                            }
                        }
                        ds(e);
                        break;
                    default:
                        throw Error(o(329))
                }
                if (Xl(e), e.callbackNode === t) return Jl.bind(null, e)
            }
        }
        return null
    }

    function $l(e) {
        var t = e.lastExpiredTime;
        if (t = 0 !== t ? t : 1073741823, 0 != (48 & El)) throw Error(o(327));
        if (ms(), e === Cl && t === Tl || ns(e, t), null !== Sl) {
            var n = El;
            El |= 16;
            for (var r = is(); ;) try {
                ls();
                break
            } catch (t) {
                rs(e, t)
            }
            if ($i(), El = n, bl.current = r, 1 === xl) throw n = Nl, ns(e, t), Os(e, t), Xl(e), n;
            if (null !== Sl) throw Error(o(261));
            e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, Cl = null, ds(e), Xl(e)
        }
        return null
    }

    function es(e, t) {
        var n = El;
        El |= 1;
        try {
            return e(t)
        } finally {
            0 === (El = n) && Vi()
        }
    }

    function ts(e, t) {
        var n = El;
        El &= -2, El |= 8;
        try {
            return e(t)
        } finally {
            0 === (El = n) && Vi()
        }
    }

    function ns(e, t) {
        e.finishedWork = null, e.finishedExpirationTime = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, wn(n)), null !== Sl) for (n = Sl.return; null !== n;) {
            var r = n;
            switch (r.tag) {
                case 1:
                    null != (r = r.type.childContextTypes) && yi();
                    break;
                case 3:
                    Ia(), si(di), si(fi);
                    break;
                case 5:
                    Pa(r);
                    break;
                case 4:
                    Ia();
                    break;
                case 13:
                case 19:
                    si(Aa);
                    break;
                case 10:
                    ea(r)
            }
            n = n.return
        }
        Cl = e, Sl = Ts(e.current, null), Tl = t, xl = wl, Nl = null, Dl = jl = 1073741823, kl = null, Il = 0, Ol = !1
    }

    function rs(e, t) {
        for (; ;) {
            try {
                if ($i(), Fa.current = yo, Wa) for (var n = Qa.memoizedState; null !== n;) {
                    var r = n.queue;
                    null !== r && (r.pending = null), n = n.next
                }
                if (Ua = 0, Ba = Ya = Qa = null, Wa = !1, null === Sl || null === Sl.return) return xl = 1, Nl = t, Sl = null;
                e:{
                    var i = e, a = Sl.return, o = Sl, l = t;
                    if (t = Tl, o.effectTag |= 2048, o.firstEffect = o.lastEffect = null, null !== l && "object" == typeof l && "function" == typeof l.then) {
                        var s = l;
                        if (0 == (2 & o.mode)) {
                            var u = o.alternate;
                            u ? (o.memoizedState = u.memoizedState, o.expirationTime = u.expirationTime) : o.memoizedState = null
                        }
                        var c = 0 != (1 & Aa.current), f = a;
                        do {
                            var d;
                            if (d = 13 === f.tag) {
                                var p = f.memoizedState;
                                if (null !== p) d = null !== p.dehydrated; else {
                                    var h = f.memoizedProps;
                                    d = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !c)
                                }
                            }
                            if (d) {
                                var m = f.updateQueue;
                                if (null === m) {
                                    var y = new Set;
                                    y.add(s), f.updateQueue = y
                                } else m.add(s);
                                if (0 == (2 & f.mode)) {
                                    if (f.effectTag |= 64, o.effectTag &= -2981, 1 === o.tag) if (null === o.alternate) o.tag = 17; else {
                                        var g = la(1073741823, null);
                                        g.tag = 2, sa(o, g)
                                    }
                                    o.expirationTime = 1073741823;
                                    break e
                                }
                                l = void 0, o = t;
                                var b = i.pingCache;
                                if (null === b ? (b = i.pingCache = new pl, l = new Set, b.set(s, l)) : void 0 === (l = b.get(s)) && (l = new Set, b.set(s, l)), !l.has(o)) {
                                    l.add(o);
                                    var v = vs.bind(null, i, s, o);
                                    s.then(v, v)
                                }
                                f.effectTag |= 4096, f.expirationTime = t;
                                break e
                            }
                            f = f.return
                        } while (null !== f);
                        l = Error((z(o.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + F(o))
                    }
                    5 !== xl && (xl = 2), l = Jo(l, o), f = a;
                    do {
                        switch (f.tag) {
                            case 3:
                                s = l, f.effectTag |= 4096, f.expirationTime = t, ua(f, hl(f, s, t));
                                break e;
                            case 1:
                                s = l;
                                var w = f.type, L = f.stateNode;
                                if (0 == (64 & f.effectTag) && ("function" == typeof w.getDerivedStateFromError || null !== L && "function" == typeof L.componentDidCatch && (null === Fl || !Fl.has(L)))) {
                                    f.effectTag |= 4096, f.expirationTime = t, ua(f, ml(f, s, t));
                                    break e
                                }
                        }
                        f = f.return
                    } while (null !== f)
                }
                Sl = cs(Sl)
            } catch (e) {
                t = e;
                continue
            }
            break
        }
    }

    function is() {
        var e = bl.current;
        return bl.current = yo, null === e ? yo : e
    }

    function as(e, t) {
        e < jl && 2 < e && (jl = e), null !== t && e < Dl && 2 < e && (Dl = e, kl = t)
    }

    function os(e) {
        e > Il && (Il = e)
    }

    function ls() {
        for (; null !== Sl;) Sl = us(Sl)
    }

    function ss() {
        for (; null !== Sl && !Oi();) Sl = us(Sl)
    }

    function us(e) {
        var t = yl(e.alternate, e, Tl);
        return e.memoizedProps = e.pendingProps, null === t && (t = cs(e)), vl.current = null, t
    }

    function cs(e) {
        Sl = e;
        do {
            var t = Sl.alternate;
            if (e = Sl.return, 0 == (2048 & Sl.effectTag)) {
                if (t = Ko(t, Sl, Tl), 1 === Tl || 1 !== Sl.childExpirationTime) {
                    for (var n = 0, r = Sl.child; null !== r;) {
                        var i = r.expirationTime, a = r.childExpirationTime;
                        i > n && (n = i), a > n && (n = a), r = r.sibling
                    }
                    Sl.childExpirationTime = n
                }
                if (null !== t) return t;
                null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Sl.firstEffect), null !== Sl.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Sl.firstEffect), e.lastEffect = Sl.lastEffect), 1 < Sl.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Sl : e.firstEffect = Sl, e.lastEffect = Sl))
            } else {
                if (null !== (t = Xo(Sl))) return t.effectTag &= 2047, t;
                null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
            }
            if (null !== (t = Sl.sibling)) return t;
            Sl = e
        } while (null !== Sl);
        return xl === wl && (xl = 5), null
    }

    function fs(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e
    }

    function ds(e) {
        var t = Ui();
        return Yi(99, ps.bind(null, e, t)), null
    }

    function ps(e, t) {
        do {
            ms()
        } while (null !== Ul);
        if (0 != (48 & El)) throw Error(o(327));
        var n = e.finishedWork, r = e.finishedExpirationTime;
        if (null === n) return null;
        if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(o(177));
        e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
        var i = fs(n);
        if (e.firstPendingTime = i, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Cl && (Sl = Cl = null, Tl = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, i = n.firstEffect) : i = n : i = n.firstEffect, null !== i) {
            var a = El;
            El |= 32, vl.current = null, mn = qt;
            var l = pn();
            if (hn(l)) {
                if ("selectionStart" in l) var s = {start: l.selectionStart, end: l.selectionEnd}; else e:{
                    var u = (s = (s = l.ownerDocument) && s.defaultView || window).getSelection && s.getSelection();
                    if (u && 0 !== u.rangeCount) {
                        s = u.anchorNode;
                        var c = u.anchorOffset, f = u.focusNode;
                        u = u.focusOffset;
                        try {
                            s.nodeType, f.nodeType
                        } catch (e) {
                            s = null;
                            break e
                        }
                        var d = 0, p = -1, h = -1, m = 0, y = 0, g = l, b = null;
                        t:for (; ;) {
                            for (var v; g !== s || 0 !== c && 3 !== g.nodeType || (p = d + c), g !== f || 0 !== u && 3 !== g.nodeType || (h = d + u), 3 === g.nodeType && (d += g.nodeValue.length), null !== (v = g.firstChild);) b = g, g = v;
                            for (; ;) {
                                if (g === l) break t;
                                if (b === s && ++m === c && (p = d), b === f && ++y === u && (h = d), null !== (v = g.nextSibling)) break;
                                b = (g = b).parentNode
                            }
                            g = v
                        }
                        s = -1 === p || -1 === h ? null : {start: p, end: h}
                    } else s = null
                }
                s = s || {start: 0, end: 0}
            } else s = null;
            yn = {activeElementDetached: null, focusedElem: l, selectionRange: s}, qt = !1, Al = i;
            do {
                try {
                    hs()
                } catch (e) {
                    if (null === Al) throw Error(o(330));
                    bs(Al, e), Al = Al.nextEffect
                }
            } while (null !== Al);
            Al = i;
            do {
                try {
                    for (l = e, s = t; null !== Al;) {
                        var w = Al.effectTag;
                        if (16 & w && Ue(Al.stateNode, ""), 128 & w) {
                            var L = Al.alternate;
                            if (null !== L) {
                                var M = L.ref;
                                null !== M && ("function" == typeof M ? M(null) : M.current = null)
                            }
                        }
                        switch (1038 & w) {
                            case 2:
                                ul(Al), Al.effectTag &= -3;
                                break;
                            case 6:
                                ul(Al), Al.effectTag &= -3, fl(Al.alternate, Al);
                                break;
                            case 1024:
                                Al.effectTag &= -1025;
                                break;
                            case 1028:
                                Al.effectTag &= -1025, fl(Al.alternate, Al);
                                break;
                            case 4:
                                fl(Al.alternate, Al);
                                break;
                            case 8:
                                cl(l, c = Al, s), ll(c)
                        }
                        Al = Al.nextEffect
                    }
                } catch (e) {
                    if (null === Al) throw Error(o(330));
                    bs(Al, e), Al = Al.nextEffect
                }
            } while (null !== Al);
            if (M = yn, L = pn(), w = M.focusedElem, s = M.selectionRange, L !== w && w && w.ownerDocument && function e(t, n) {
                return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
            }(w.ownerDocument.documentElement, w)) {
                null !== s && hn(w) && (L = s.start, void 0 === (M = s.end) && (M = L), "selectionStart" in w ? (w.selectionStart = L, w.selectionEnd = Math.min(M, w.value.length)) : (M = (L = w.ownerDocument || document) && L.defaultView || window).getSelection && (M = M.getSelection(), c = w.textContent.length, l = Math.min(s.start, c), s = void 0 === s.end ? l : Math.min(s.end, c), !M.extend && l > s && (c = s, s = l, l = c), c = dn(w, l), f = dn(w, s), c && f && (1 !== M.rangeCount || M.anchorNode !== c.node || M.anchorOffset !== c.offset || M.focusNode !== f.node || M.focusOffset !== f.offset) && ((L = L.createRange()).setStart(c.node, c.offset), M.removeAllRanges(), l > s ? (M.addRange(L), M.extend(f.node, f.offset)) : (L.setEnd(f.node, f.offset), M.addRange(L))))), L = [];
                for (M = w; M = M.parentNode;) 1 === M.nodeType && L.push({
                    element: M,
                    left: M.scrollLeft,
                    top: M.scrollTop
                });
                for ("function" == typeof w.focus && w.focus(), w = 0; w < L.length; w++) (M = L[w]).element.scrollLeft = M.left, M.element.scrollTop = M.top
            }
            qt = !!mn, yn = mn = null, e.current = n, Al = i;
            do {
                try {
                    for (w = e; null !== Al;) {
                        var E = Al.effectTag;
                        if (36 & E && al(w, Al.alternate, Al), 128 & E) {
                            L = void 0;
                            var C = Al.ref;
                            if (null !== C) {
                                var S = Al.stateNode;
                                switch (Al.tag) {
                                    case 5:
                                        L = S;
                                        break;
                                    default:
                                        L = S
                                }
                                "function" == typeof C ? C(L) : C.current = L
                            }
                        }
                        Al = Al.nextEffect
                    }
                } catch (e) {
                    if (null === Al) throw Error(o(330));
                    bs(Al, e), Al = Al.nextEffect
                }
            } while (null !== Al);
            Al = null, Pi(), El = a
        } else e.current = n;
        if (_l) _l = !1, Ul = e, Ql = t; else for (Al = i; null !== Al;) t = Al.nextEffect, Al.nextEffect = null, Al = t;
        if (0 === (t = e.firstPendingTime) && (Fl = null), 1073741823 === t ? e === Wl ? Bl++ : (Bl = 0, Wl = e) : Bl = 0, "function" == typeof Ls && Ls(n.stateNode, r), Xl(e), Rl) throw Rl = !1, e = zl, zl = null, e;
        return 0 != (8 & El) || Vi(), null
    }

    function hs() {
        for (; null !== Al;) {
            var e = Al.effectTag;
            0 != (256 & e) && nl(Al.alternate, Al), 0 == (512 & e) || _l || (_l = !0, Bi(97, (function () {
                return ms(), null
            }))), Al = Al.nextEffect
        }
    }

    function ms() {
        if (90 !== Ql) {
            var e = 97 < Ql ? 97 : Ql;
            return Ql = 90, Yi(e, ys)
        }
    }

    function ys() {
        if (null === Ul) return !1;
        var e = Ul;
        if (Ul = null, 0 != (48 & El)) throw Error(o(331));
        var t = El;
        for (El |= 32, e = e.current.firstEffect; null !== e;) {
            try {
                var n = e;
                if (0 != (512 & n.effectTag)) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        rl(5, n), il(5, n)
                }
            } catch (t) {
                if (null === e) throw Error(o(330));
                bs(e, t)
            }
            n = e.nextEffect, e.nextEffect = null, e = n
        }
        return El = t, Vi(), !0
    }

    function gs(e, t, n) {
        sa(e, t = hl(e, t = Jo(n, t), 1073741823)), null !== (e = Zl(e, 1073741823)) && Xl(e)
    }

    function bs(e, t) {
        if (3 === e.tag) gs(e, e, t); else for (var n = e.return; null !== n;) {
            if (3 === n.tag) {
                gs(n, e, t);
                break
            }
            if (1 === n.tag) {
                var r = n.stateNode;
                if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Fl || !Fl.has(r))) {
                    sa(n, e = ml(n, e = Jo(t, e), 1073741823)), null !== (n = Zl(n, 1073741823)) && Xl(n);
                    break
                }
            }
            n = n.return
        }
    }

    function vs(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), Cl === e && Tl === n ? xl === Ml || xl === Ll && 1073741823 === jl && _i() - Pl < 500 ? ns(e, Tl) : Ol = !0 : Is(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, Xl(e)))
    }

    function ws(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t), 0 === (t = 0) && (t = Hl(t = ql(), e, null)), null !== (e = Zl(e, t)) && Xl(e)
    }

    yl = function (e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
            var i = t.pendingProps;
            if (e.memoizedProps !== i || di.current) Do = !0; else {
                if (r < n) {
                    switch (Do = !1, t.tag) {
                        case 3:
                            _o(t), No();
                            break;
                        case 5:
                            if (Oa(t), 4 & t.mode && 1 !== n && i.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                            break;
                        case 1:
                            mi(t.type) && vi(t);
                            break;
                        case 4:
                            ka(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            r = t.memoizedProps.value, i = t.type._context, ui(Zi, i._currentValue), i._currentValue = r;
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? Wo(e, t, n) : (ui(Aa, 1 & Aa.current), null !== (t = Go(e, t, n)) ? t.sibling : null);
                            ui(Aa, 1 & Aa.current);
                            break;
                        case 19:
                            if (r = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                                if (r) return Ho(e, t, n);
                                t.effectTag |= 64
                            }
                            if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null), ui(Aa, Aa.current), !r) return null
                    }
                    return Go(e, t, n)
                }
                Do = !1
            }
        } else Do = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, i = hi(t, fi.current), na(t, n), i = Ha(null, t, r, e, i, n), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                    if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mi(r)) {
                        var a = !0;
                        vi(t)
                    } else a = !1;
                    t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, aa(t);
                    var l = r.getDerivedStateFromProps;
                    "function" == typeof l && ha(t, r, l, e), i.updater = ma, t.stateNode = i, i._reactInternalFiber = t, va(t, r, e, n), t = Fo(null, t, r, !0, a, n)
                } else t.tag = 0, ko(null, t, i, n), t = t.child;
                return t;
            case 16:
                e:{
                    if (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function (e) {
                        if (-1 === e._status) {
                            e._status = 0;
                            var t = e._ctor;
                            t = t(), e._result = t, t.then((function (t) {
                                0 === e._status && (t = t.default, e._status = 1, e._result = t)
                            }), (function (t) {
                                0 === e._status && (e._status = 2, e._result = t)
                            }))
                        }
                    }(i), 1 !== i._status) throw i._result;
                    switch (i = i._result, t.type = i, a = t.tag = function (e) {
                        if ("function" == typeof e) return Ss(e) ? 1 : 0;
                        if (null != e) {
                            if ((e = e.$$typeof) === j) return 11;
                            if (e === I) return 14
                        }
                        return 2
                    }(i), e = Gi(i, e), a) {
                        case 0:
                            t = Ro(null, t, i, e, n);
                            break e;
                        case 1:
                            t = zo(null, t, i, e, n);
                            break e;
                        case 11:
                            t = Io(null, t, i, e, n);
                            break e;
                        case 14:
                            t = Oo(null, t, i, Gi(i.type, e), r, n);
                            break e
                    }
                    throw Error(o(306, i, ""))
                }
                return t;
            case 0:
                return r = t.type, i = t.pendingProps, Ro(e, t, r, i = t.elementType === r ? i : Gi(r, i), n);
            case 1:
                return r = t.type, i = t.pendingProps, zo(e, t, r, i = t.elementType === r ? i : Gi(r, i), n);
            case 3:
                if (_o(t), r = t.updateQueue, null === e || null === r) throw Error(o(282));
                if (r = t.pendingProps, i = null !== (i = t.memoizedState) ? i.element : null, oa(e, t), ca(t, r, null, n), (r = t.memoizedState.element) === i) No(), t = Go(e, t, n); else {
                    if ((i = t.stateNode.hydrate) && (Lo = Ln(t.stateNode.containerInfo.firstChild), wo = t, i = Mo = !0), i) for (n = Sa(t, null, r, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling; else ko(e, t, r, n), No();
                    t = t.child
                }
                return t;
            case 5:
                return Oa(t), null === e && So(t), r = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, l = i.children, bn(r, i) ? l = null : null !== a && bn(r, a) && (t.effectTag |= 16), Ao(e, t), 4 & t.mode && 1 !== n && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (ko(e, t, l, n), t = t.child), t;
            case 6:
                return null === e && So(t), null;
            case 13:
                return Wo(e, t, n);
            case 4:
                return ka(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ca(t, null, r, n) : ko(e, t, r, n), t.child;
            case 11:
                return r = t.type, i = t.pendingProps, Io(e, t, r, i = t.elementType === r ? i : Gi(r, i), n);
            case 7:
                return ko(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return ko(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e:{
                    r = t.type._context, i = t.pendingProps, l = t.memoizedProps, a = i.value;
                    var s = t.type._context;
                    if (ui(Zi, s._currentValue), s._currentValue = a, null !== l) if (s = l.value, 0 === (a = zr(s, a) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, a) : 1073741823))) {
                        if (l.children === i.children && !di.current) {
                            t = Go(e, t, n);
                            break e
                        }
                    } else for (null !== (s = t.child) && (s.return = t); null !== s;) {
                        var u = s.dependencies;
                        if (null !== u) {
                            l = s.child;
                            for (var c = u.firstContext; null !== c;) {
                                if (c.context === r && 0 != (c.observedBits & a)) {
                                    1 === s.tag && ((c = la(n, null)).tag = 2, sa(s, c)), s.expirationTime < n && (s.expirationTime = n), null !== (c = s.alternate) && c.expirationTime < n && (c.expirationTime = n), ta(s.return, n), u.expirationTime < n && (u.expirationTime = n);
                                    break
                                }
                                c = c.next
                            }
                        } else l = 10 === s.tag && s.type === t.type ? null : s.child;
                        if (null !== l) l.return = s; else for (l = s; null !== l;) {
                            if (l === t) {
                                l = null;
                                break
                            }
                            if (null !== (s = l.sibling)) {
                                s.return = l.return, l = s;
                                break
                            }
                            l = l.return
                        }
                        s = l
                    }
                    ko(e, t, i.children, n), t = t.child
                }
                return t;
            case 9:
                return i = t.type, r = (a = t.pendingProps).children, na(t, n), r = r(i = ra(i, a.unstable_observedBits)), t.effectTag |= 1, ko(e, t, r, n), t.child;
            case 14:
                return a = Gi(i = t.type, t.pendingProps), Oo(e, t, i, a = Gi(i.type, a), r, n);
            case 15:
                return Po(e, t, t.type, t.pendingProps, r, n);
            case 17:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Gi(r, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, mi(r) ? (e = !0, vi(t)) : e = !1, na(t, n), ga(t, r, i), va(t, r, i, n), Fo(null, t, r, !0, e, n);
            case 19:
                return Ho(e, t, n)
        }
        throw Error(o(156, t.tag))
    };
    var Ls = null, Ms = null;

    function Es(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function Cs(e, t, n, r) {
        return new Es(e, t, n, r)
    }

    function Ss(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Ts(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Cs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function xs(e, t, n, r, i, a) {
        var l = 2;
        if (r = e, "function" == typeof e) Ss(e) && (l = 1); else if ("string" == typeof e) l = 5; else e:switch (e) {
            case E:
                return Ns(n.children, i, a, t);
            case N:
                l = 8, i |= 7;
                break;
            case C:
                l = 8, i |= 1;
                break;
            case S:
                return (e = Cs(12, n, t, 8 | i)).elementType = S, e.type = S, e.expirationTime = a, e;
            case D:
                return (e = Cs(13, n, t, i)).type = D, e.elementType = D, e.expirationTime = a, e;
            case k:
                return (e = Cs(19, n, t, i)).elementType = k, e.expirationTime = a, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case T:
                        l = 10;
                        break e;
                    case x:
                        l = 9;
                        break e;
                    case j:
                        l = 11;
                        break e;
                    case I:
                        l = 14;
                        break e;
                    case O:
                        l = 16, r = null;
                        break e;
                    case P:
                        l = 22;
                        break e
                }
                throw Error(o(130, null == e ? e : typeof e, ""))
        }
        return (t = Cs(l, n, t, i)).elementType = e, t.type = r, t.expirationTime = a, t
    }

    function Ns(e, t, n, r) {
        return (e = Cs(7, e, r, t)).expirationTime = n, e
    }

    function js(e, t, n) {
        return (e = Cs(6, e, null, t)).expirationTime = n, e
    }

    function Ds(e, t, n) {
        return (t = Cs(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function ks(e, t, n) {
        this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function Is(e, t) {
        var n = e.firstSuspendedTime;
        return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
    }

    function Os(e, t) {
        var n = e.firstSuspendedTime, r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
    }

    function Ps(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
    }

    function As(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t)
    }

    function Rs(e, t, n, r) {
        var i = t.current, a = ql(), l = da.suspense;
        a = Hl(a, i, l);
        e:if (n) {
            t:{
                if ($e(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(o(170));
                var s = n;
                do {
                    switch (s.tag) {
                        case 3:
                            s = s.stateNode.context;
                            break t;
                        case 1:
                            if (mi(s.type)) {
                                s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    s = s.return
                } while (null !== s);
                throw Error(o(171))
            }
            if (1 === n.tag) {
                var u = n.type;
                if (mi(u)) {
                    n = bi(n, u, s);
                    break e
                }
            }
            n = s
        } else n = ci;
        return null === t.context ? t.context = n : t.pendingContext = n, (t = la(a, l)).payload = {element: e}, null !== (r = void 0 === r ? null : r) && (t.callback = r), sa(i, t), Gl(i, a), a
    }

    function zs(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function Fs(e, t) {
        null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
    }

    function _s(e, t) {
        Fs(e, t), (e = e.alternate) && Fs(e, t)
    }

    function Us(e, t, n) {
        var r = new ks(e, t, n = null != n && !0 === n.hydrate), i = Cs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        r.current = i, i.stateNode = r, aa(i), e[Tn] = r.current, n && 0 !== t && function (e, t) {
            var n = Je(t);
            Tt.forEach((function (e) {
                ht(e, t, n)
            })), xt.forEach((function (e) {
                ht(e, t, n)
            }))
        }(0, 9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = r
    }

    function Qs(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function Ys(e, t, n, r, i) {
        var a = n._reactRootContainer;
        if (a) {
            var o = a._internalRoot;
            if ("function" == typeof i) {
                var l = i;
                i = function () {
                    var e = zs(o);
                    l.call(e)
                }
            }
            Rs(t, o, e, i)
        } else {
            if (a = n._reactRootContainer = function (e, t) {
                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild;) e.removeChild(n);
                return new Us(e, 0, t ? {hydrate: !0} : void 0)
            }(n, r), o = a._internalRoot, "function" == typeof i) {
                var s = i;
                i = function () {
                    var e = zs(o);
                    s.call(e)
                }
            }
            ts((function () {
                Rs(t, o, e, i)
            }))
        }
        return zs(o)
    }

    function Bs(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {$$typeof: M, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n}
    }

    function Ws(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Qs(t)) throw Error(o(200));
        return Bs(e, t, null, n)
    }

    Us.prototype.render = function (e) {
        Rs(e, this._internalRoot, null, null)
    }, Us.prototype.unmount = function () {
        var e = this._internalRoot, t = e.containerInfo;
        Rs(null, e, null, (function () {
            t[Tn] = null
        }))
    }, mt = function (e) {
        if (13 === e.tag) {
            var t = Hi(ql(), 150, 100);
            Gl(e, t), _s(e, t)
        }
    }, yt = function (e) {
        13 === e.tag && (Gl(e, 3), _s(e, 3))
    }, gt = function (e) {
        if (13 === e.tag) {
            var t = ql();
            Gl(e, t = Hl(t, e, null)), _s(e, t)
        }
    }, Z = function (e, t, n) {
        switch (t) {
            case"input":
                if (Se(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = Dn(r);
                            if (!i) throw Error(o(90));
                            Le(r), Se(r, i)
                        }
                    }
                }
                break;
            case"textarea":
                Ie(e, n);
                break;
            case"select":
                null != (t = n.value) && je(e, !!n.multiple, t, !1)
        }
    }, te = es, ne = function (e, t, n, r, i) {
        var a = El;
        El |= 4;
        try {
            return Yi(98, e.bind(null, t, n, r, i))
        } finally {
            0 === (El = a) && Vi()
        }
    }, re = function () {
        0 == (49 & El) && (function () {
            if (null !== Yl) {
                var e = Yl;
                Yl = null, e.forEach((function (e, t) {
                    As(t, e), Xl(t)
                })), Vi()
            }
        }(), ms())
    }, ie = function (e, t) {
        var n = El;
        El |= 2;
        try {
            return e(t)
        } finally {
            0 === (El = n) && Vi()
        }
    };
    var Vs, qs, Hs = {
        Events: [Nn, jn, Dn, H, W, zn, function (e) {
            it(e, Rn)
        }, $, ee, Xt, lt, ms, {current: !1}]
    };
    qs = (Vs = {
        findFiberByHostInstance: xn,
        bundleType: 0,
        version: "16.13.0",
        rendererPackageName: "react-dom"
    }).findFiberByHostInstance, function (e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
            var n = t.inject(e);
            Ls = function (e) {
                try {
                    t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                } catch (e) {
                }
            }, Ms = function (e) {
                try {
                    t.onCommitFiberUnmount(n, e)
                } catch (e) {
                }
            }
        } catch (e) {
        }
    }(i({}, Vs, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: b.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = nt(e)) ? null : e.stateNode
        },
        findFiberByHostInstance: function (e) {
            return qs ? qs(e) : null
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    })), t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hs, t.createPortal = Ws, t.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternalFiber;
        if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(o(188));
            throw Error(o(268, Object.keys(e)))
        }
        return e = null === (e = nt(t)) ? null : e.stateNode
    }, t.flushSync = function (e, t) {
        if (0 != (48 & El)) throw Error(o(187));
        var n = El;
        El |= 1;
        try {
            return Yi(99, e.bind(null, t))
        } finally {
            El = n, Vi()
        }
    }, t.hydrate = function (e, t, n) {
        if (!Qs(t)) throw Error(o(200));
        return Ys(null, e, t, !0, n)
    }, t.render = function (e, t, n) {
        if (!Qs(t)) throw Error(o(200));
        return Ys(null, e, t, !1, n)
    }, t.unmountComponentAtNode = function (e) {
        if (!Qs(e)) throw Error(o(40));
        return !!e._reactRootContainer && (ts((function () {
            Ys(null, null, e, !1, (function () {
                e._reactRootContainer = null, e[Tn] = null
            }))
        })), !0)
    }, t.unstable_batchedUpdates = es, t.unstable_createPortal = function (e, t) {
        return Ws(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
    }, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Qs(n)) throw Error(o(200));
        if (null == e || void 0 === e._reactInternalFiber) throw Error(o(38));
        return Ys(e, t, n, !1, r)
    }, t.version = "16.13.0"
}, function (e, t, n) {
    "use strict";
    e.exports = n(37)
}, function (e, t, n) {
    "use strict";
    /** @license React v0.19.0
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var r, i, a, o, l;
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var s = null, u = null, c = function () {
            if (null !== s) try {
                var e = t.unstable_now();
                s(!0, e), s = null
            } catch (e) {
                throw setTimeout(c, 0), e
            }
        }, f = Date.now();
        t.unstable_now = function () {
            return Date.now() - f
        }, r = function (e) {
            null !== s ? setTimeout(r, 0, e) : (s = e, setTimeout(c, 0))
        }, i = function (e, t) {
            u = setTimeout(e, t)
        }, a = function () {
            clearTimeout(u)
        }, o = function () {
            return !1
        }, l = t.unstable_forceFrameRate = function () {
        }
    } else {
        var d = window.performance, p = window.Date, h = window.setTimeout, m = window.clearTimeout;
        if ("undefined" != typeof console) {
            var y = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof y && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
        }
        if ("object" == typeof d && "function" == typeof d.now) t.unstable_now = function () {
            return d.now()
        }; else {
            var g = p.now();
            t.unstable_now = function () {
                return p.now() - g
            }
        }
        var b = !1, v = null, w = -1, L = 5, M = 0;
        o = function () {
            return t.unstable_now() >= M
        }, l = function () {
        }, t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : L = 0 < e ? Math.floor(1e3 / e) : 5
        };
        var E = new MessageChannel, C = E.port2;
        E.port1.onmessage = function () {
            if (null !== v) {
                var e = t.unstable_now();
                M = e + L;
                try {
                    v(!0, e) ? C.postMessage(null) : (b = !1, v = null)
                } catch (e) {
                    throw C.postMessage(null), e
                }
            } else b = !1
        }, r = function (e) {
            v = e, b || (b = !0, C.postMessage(null))
        }, i = function (e, n) {
            w = h((function () {
                e(t.unstable_now())
            }), n)
        }, a = function () {
            m(w), w = -1
        }
    }

    function S(e, t) {
        var n = e.length;
        e.push(t);
        e:for (; ;) {
            var r = n - 1 >>> 1, i = e[r];
            if (!(void 0 !== i && 0 < N(i, t))) break e;
            e[r] = t, e[n] = i, n = r
        }
    }

    function T(e) {
        return void 0 === (e = e[0]) ? null : e
    }

    function x(e) {
        var t = e[0];
        if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e:for (var r = 0, i = e.length; r < i;) {
                    var a = 2 * (r + 1) - 1, o = e[a], l = a + 1, s = e[l];
                    if (void 0 !== o && 0 > N(o, n)) void 0 !== s && 0 > N(s, o) ? (e[r] = s, e[l] = n, r = l) : (e[r] = o, e[a] = n, r = a); else {
                        if (!(void 0 !== s && 0 > N(s, n))) break e;
                        e[r] = s, e[l] = n, r = l
                    }
                }
            }
            return t
        }
        return null
    }

    function N(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }

    var j = [], D = [], k = 1, I = null, O = 3, P = !1, A = !1, R = !1;

    function z(e) {
        for (var t = T(D); null !== t;) {
            if (null === t.callback) x(D); else {
                if (!(t.startTime <= e)) break;
                x(D), t.sortIndex = t.expirationTime, S(j, t)
            }
            t = T(D)
        }
    }

    function F(e) {
        if (R = !1, z(e), !A) if (null !== T(j)) A = !0, r(_); else {
            var t = T(D);
            null !== t && i(F, t.startTime - e)
        }
    }

    function _(e, n) {
        A = !1, R && (R = !1, a()), P = !0;
        var r = O;
        try {
            for (z(n), I = T(j); null !== I && (!(I.expirationTime > n) || e && !o());) {
                var l = I.callback;
                if (null !== l) {
                    I.callback = null, O = I.priorityLevel;
                    var s = l(I.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof s ? I.callback = s : I === T(j) && x(j), z(n)
                } else x(j);
                I = T(j)
            }
            if (null !== I) var u = !0; else {
                var c = T(D);
                null !== c && i(F, c.startTime - n), u = !1
            }
            return u
        } finally {
            I = null, O = r, P = !1
        }
    }

    function U(e) {
        switch (e) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1e4;
            default:
                return 5e3
        }
    }

    var Q = l;
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
        e.callback = null
    }, t.unstable_continueExecution = function () {
        A || P || (A = !0, r(_))
    }, t.unstable_getCurrentPriorityLevel = function () {
        return O
    }, t.unstable_getFirstCallbackNode = function () {
        return T(j)
    }, t.unstable_next = function (e) {
        switch (O) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = O
        }
        var n = O;
        O = t;
        try {
            return e()
        } finally {
            O = n
        }
    }, t.unstable_pauseExecution = function () {
    }, t.unstable_requestPaint = Q, t.unstable_runWithPriority = function (e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = O;
        O = e;
        try {
            return t()
        } finally {
            O = n
        }
    }, t.unstable_scheduleCallback = function (e, n, o) {
        var l = t.unstable_now();
        if ("object" == typeof o && null !== o) {
            var s = o.delay;
            s = "number" == typeof s && 0 < s ? l + s : l, o = "number" == typeof o.timeout ? o.timeout : U(e)
        } else o = U(e), s = l;
        return e = {
            id: k++,
            callback: n,
            priorityLevel: e,
            startTime: s,
            expirationTime: o = s + o,
            sortIndex: -1
        }, s > l ? (e.sortIndex = s, S(D, e), null === T(j) && e === T(D) && (R ? a() : R = !0, i(F, s - l))) : (e.sortIndex = o, S(j, e), A || P || (A = !0, r(_))), e
    }, t.unstable_shouldYield = function () {
        var e = t.unstable_now();
        z(e);
        var n = T(j);
        return n !== I && null !== I && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < I.expirationTime || o()
    }, t.unstable_wrapCallback = function (e) {
        var t = O;
        return function () {
            var n = O;
            O = t;
            try {
                return e.apply(this, arguments)
            } finally {
                O = n
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(39);

    function i() {
    }

    function a() {
    }

    a.resetWarningCache = i, e.exports = function () {
        function e(e, t, n, i, a, o) {
            if (o !== r) {
                var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw l.name = "Invariant Violation", l
            }
        }

        function t() {
            return e
        }

        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: i
        };
        return n.PropTypes = n, n
    }
}, function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t) {
    e.exports = function (e) {
        if (Array.isArray(e)) return e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [], r = !0, i = !1, a = void 0;
            try {
                for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0) ;
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }
    }
}, function (e, t) {
    e.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t) {
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, r, i = {}, a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }
}, function (e, t) {
    e.exports = function (e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]")
    }
}, function (e, t, n) {
    var r = n(17), i = n(55);

    function a(t, n, o) {
        return i() ? e.exports = a = Reflect.construct : e.exports = a = function (e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            var a = new (Function.bind.apply(e, i));
            return n && r(a, n.prototype), a
        }, a.apply(null, arguments)
    }

    e.exports = a
}, function (e, t) {
    e.exports = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
            }))), !0
        } catch (e) {
            return !1
        }
    }
}, function (e, t, n) {
    var r = n(24);
    e.exports = function (e) {
        if (Array.isArray(e)) return r(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }
}, function (e, t) {
    e.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.bodyOpenClassName = t.portalClassName = void 0;
    var r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), a = n(0), o = h(a), l = h(n(20)), s = h(n(1)), u = h(n(64)), c = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(n(26)), f = n(19), d = h(f), p = n(71);

    function h(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function m(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function y(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    var g = t.portalClassName = "ReactModalPortal", b = t.bodyOpenClassName = "ReactModal__Body--open",
        v = void 0 !== l.default.createPortal, w = function () {
            return v ? l.default.createPortal : l.default.unstable_renderSubtreeIntoContainer
        };

    function L(e) {
        return e()
    }

    var M = function (e) {
        function t() {
            var e, n, i;
            m(this, t);
            for (var a = arguments.length, s = Array(a), c = 0; c < a; c++) s[c] = arguments[c];
            return n = i = y(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), i.removePortal = function () {
                !v && l.default.unmountComponentAtNode(i.node);
                var e = L(i.props.parentSelector);
                e ? e.removeChild(i.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')
            }, i.portalRef = function (e) {
                i.portal = e
            }, i.renderPortal = function (e) {
                var n = w()(i, o.default.createElement(u.default, r({defaultStyles: t.defaultStyles}, e)), i.node);
                i.portalRef(n)
            }, y(i, n)
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), i(t, [{
            key: "componentDidMount", value: function () {
                f.canUseDOM && (v || (this.node = document.createElement("div")), this.node.className = this.props.portalClassName, L(this.props.parentSelector).appendChild(this.node), !v && this.renderPortal(this.props))
            }
        }, {
            key: "getSnapshotBeforeUpdate", value: function (e) {
                return {prevParent: L(e.parentSelector), nextParent: L(this.props.parentSelector)}
            }
        }, {
            key: "componentDidUpdate", value: function (e, t, n) {
                if (f.canUseDOM) {
                    var r = this.props, i = r.isOpen, a = r.portalClassName;
                    e.portalClassName !== a && (this.node.className = a);
                    var o = n.prevParent, l = n.nextParent;
                    l !== o && (o.removeChild(this.node), l.appendChild(this.node)), (e.isOpen || i) && !v && this.renderPortal(this.props)
                }
            }
        }, {
            key: "componentWillUnmount", value: function () {
                if (f.canUseDOM && this.node && this.portal) {
                    var e = this.portal.state, t = Date.now(),
                        n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                    n ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - t)) : this.removePortal()
                }
            }
        }, {
            key: "render", value: function () {
                return f.canUseDOM && v ? (!this.node && v && (this.node = document.createElement("div")), w()(o.default.createElement(u.default, r({
                    ref: this.portalRef,
                    defaultStyles: t.defaultStyles
                }, this.props)), this.node)) : null
            }
        }], [{
            key: "setAppElement", value: function (e) {
                c.setElement(e)
            }
        }]), t
    }(a.Component);
    M.propTypes = {
        isOpen: s.default.bool.isRequired,
        style: s.default.shape({content: s.default.object, overlay: s.default.object}),
        portalClassName: s.default.string,
        bodyOpenClassName: s.default.string,
        htmlOpenClassName: s.default.string,
        className: s.default.oneOfType([s.default.string, s.default.shape({
            base: s.default.string.isRequired,
            afterOpen: s.default.string.isRequired,
            beforeClose: s.default.string.isRequired
        })]),
        overlayClassName: s.default.oneOfType([s.default.string, s.default.shape({
            base: s.default.string.isRequired,
            afterOpen: s.default.string.isRequired,
            beforeClose: s.default.string.isRequired
        })]),
        appElement: s.default.instanceOf(d.default),
        onAfterOpen: s.default.func,
        onRequestClose: s.default.func,
        closeTimeoutMS: s.default.number,
        ariaHideApp: s.default.bool,
        shouldFocusAfterRender: s.default.bool,
        shouldCloseOnOverlayClick: s.default.bool,
        shouldReturnFocusAfterClose: s.default.bool,
        parentSelector: s.default.func,
        aria: s.default.object,
        data: s.default.object,
        role: s.default.string,
        contentLabel: s.default.string,
        shouldCloseOnEsc: s.default.bool,
        overlayRef: s.default.func,
        contentRef: s.default.func
    }, M.defaultProps = {
        isOpen: !1,
        portalClassName: g,
        bodyOpenClassName: b,
        role: "dialog",
        ariaHideApp: !0,
        closeTimeoutMS: 0,
        shouldFocusAfterRender: !0,
        shouldCloseOnEsc: !0,
        shouldCloseOnOverlayClick: !0,
        shouldReturnFocusAfterClose: !0,
        parentSelector: function () {
            return document.body
        }
    }, M.defaultStyles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px"
        }
    }, (0, p.polyfill)(M), t.default = M
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), o = n(0), l = y(o), s = y(n(1)), u = m(n(65)), c = y(n(66)), f = m(n(26)), d = m(n(69)), p = y(n(19)),
        h = y(n(27));

    function m(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function y(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(70);
    var g = {overlay: "ReactModal__Overlay", content: "ReactModal__Content"}, b = 0, v = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.setOverlayRef = function (e) {
                n.overlay = e, n.props.overlayRef && n.props.overlayRef(e)
            }, n.setContentRef = function (e) {
                n.content = e, n.props.contentRef && n.props.contentRef(e)
            }, n.afterClose = function () {
                var e = n.props, t = e.appElement, r = e.ariaHideApp, i = e.htmlOpenClassName, a = e.bodyOpenClassName;
                a && d.remove(document.body, a), i && d.remove(document.getElementsByTagName("html")[0], i), r && b > 0 && 0 === (b -= 1) && f.show(t), n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (u.returnFocus(), u.teardownScopedFocus()) : u.popWithoutFocus()), n.props.onAfterClose && n.props.onAfterClose(), h.default.deregister(n)
            }, n.open = function () {
                n.beforeOpen(), n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer), n.setState({beforeClose: !1})) : (n.props.shouldFocusAfterRender && (u.setupScopedFocus(n.node), u.markForFocusLater()), n.setState({isOpen: !0}, (function () {
                    n.setState({afterOpen: !0}), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen({
                        overlayEl: n.overlay,
                        contentEl: n.content
                    })
                })))
            }, n.close = function () {
                n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout()
            }, n.focusContent = function () {
                return n.content && !n.contentHasFocus() && n.content.focus()
            }, n.closeWithTimeout = function () {
                var e = Date.now() + n.props.closeTimeoutMS;
                n.setState({beforeClose: !0, closesAt: e}, (function () {
                    n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now())
                }))
            }, n.closeWithoutTimeout = function () {
                n.setState({beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null}, n.afterClose)
            }, n.handleKeyDown = function (e) {
                9 === e.keyCode && (0, c.default)(n.content, e), n.props.shouldCloseOnEsc && 27 === e.keyCode && (e.stopPropagation(), n.requestClose(e))
            }, n.handleOverlayOnClick = function (e) {
                null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()), n.shouldClose = null
            }, n.handleContentOnMouseUp = function () {
                n.shouldClose = !1
            }, n.handleOverlayOnMouseDown = function (e) {
                n.props.shouldCloseOnOverlayClick || e.target != n.overlay || e.preventDefault()
            }, n.handleContentOnClick = function () {
                n.shouldClose = !1
            }, n.handleContentOnMouseDown = function () {
                n.shouldClose = !1
            }, n.requestClose = function (e) {
                return n.ownerHandlesClose() && n.props.onRequestClose(e)
            }, n.ownerHandlesClose = function () {
                return n.props.onRequestClose
            }, n.shouldBeClosed = function () {
                return !n.state.isOpen && !n.state.beforeClose
            }, n.contentHasFocus = function () {
                return document.activeElement === n.content || n.content.contains(document.activeElement)
            }, n.buildClassName = function (e, t) {
                var r = "object" === (void 0 === t ? "undefined" : i(t)) ? t : {
                    base: g[e],
                    afterOpen: g[e] + "--after-open",
                    beforeClose: g[e] + "--before-close"
                }, a = r.base;
                return n.state.afterOpen && (a = a + " " + r.afterOpen), n.state.beforeClose && (a = a + " " + r.beforeClose), "string" == typeof t && t ? a + " " + t : a
            }, n.attributesFromObject = function (e, t) {
                return Object.keys(t).reduce((function (n, r) {
                    return n[e + "-" + r] = t[r], n
                }), {})
            }, n.state = {afterOpen: !1, beforeClose: !1}, n.shouldClose = null, n.moveFromContentToOverlay = null, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), a(t, [{
            key: "componentDidMount", value: function () {
                this.props.isOpen && this.open()
            }
        }, {
            key: "componentDidUpdate", value: function (e, t) {
                this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent()
            }
        }, {
            key: "componentWillUnmount", value: function () {
                this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer)
            }
        }, {
            key: "beforeOpen", value: function () {
                var e = this.props, t = e.appElement, n = e.ariaHideApp, r = e.htmlOpenClassName,
                    i = e.bodyOpenClassName;
                i && d.add(document.body, i), r && d.add(document.getElementsByTagName("html")[0], r), n && (b += 1, f.hide(t)), h.default.register(this)
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.id, n = e.className, i = e.overlayClassName, a = e.defaultStyles,
                    o = n ? {} : a.content, s = i ? {} : a.overlay;
                return this.shouldBeClosed() ? null : l.default.createElement("div", {
                    ref: this.setOverlayRef,
                    className: this.buildClassName("overlay", i),
                    style: r({}, s, this.props.style.overlay),
                    onClick: this.handleOverlayOnClick,
                    onMouseDown: this.handleOverlayOnMouseDown
                }, l.default.createElement("div", r({
                    id: t,
                    ref: this.setContentRef,
                    style: r({}, o, this.props.style.content),
                    className: this.buildClassName("content", n),
                    tabIndex: "-1",
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleContentOnMouseDown,
                    onMouseUp: this.handleContentOnMouseUp,
                    onClick: this.handleContentOnClick,
                    role: this.props.role,
                    "aria-label": this.props.contentLabel
                }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {"data-testid": this.props.testId}), this.props.children))
            }
        }]), t
    }(o.Component);
    v.defaultProps = {
        style: {overlay: {}, content: {}},
        defaultStyles: {}
    }, v.propTypes = {
        isOpen: s.default.bool.isRequired,
        defaultStyles: s.default.shape({content: s.default.object, overlay: s.default.object}),
        style: s.default.shape({content: s.default.object, overlay: s.default.object}),
        className: s.default.oneOfType([s.default.string, s.default.object]),
        overlayClassName: s.default.oneOfType([s.default.string, s.default.object]),
        bodyOpenClassName: s.default.string,
        htmlOpenClassName: s.default.string,
        ariaHideApp: s.default.bool,
        appElement: s.default.instanceOf(p.default),
        onAfterOpen: s.default.func,
        onAfterClose: s.default.func,
        onRequestClose: s.default.func,
        closeTimeoutMS: s.default.number,
        shouldFocusAfterRender: s.default.bool,
        shouldCloseOnOverlayClick: s.default.bool,
        shouldReturnFocusAfterClose: s.default.bool,
        role: s.default.string,
        contentLabel: s.default.string,
        aria: s.default.object,
        data: s.default.object,
        children: s.default.node,
        shouldCloseOnEsc: s.default.bool,
        overlayRef: s.default.func,
        contentRef: s.default.func,
        id: s.default.string,
        testId: s.default.string
    }, t.default = v, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.handleBlur = u, t.handleFocus = c, t.markForFocusLater = function () {
        o.push(document.activeElement)
    }, t.returnFocus = function () {
        var e = null;
        try {
            return void (0 !== o.length && (e = o.pop()).focus())
        } catch (t) {
            console.warn(["You tried to return focus to", e, "but it is not in the DOM anymore"].join(" "))
        }
    }, t.popWithoutFocus = function () {
        o.length > 0 && o.pop()
    }, t.setupScopedFocus = function (e) {
        l = e, window.addEventListener ? (window.addEventListener("blur", u, !1), document.addEventListener("focus", c, !0)) : (window.attachEvent("onBlur", u), document.attachEvent("onFocus", c))
    }, t.teardownScopedFocus = function () {
        l = null, window.addEventListener ? (window.removeEventListener("blur", u), document.removeEventListener("focus", c)) : (window.detachEvent("onBlur", u), document.detachEvent("onFocus", c))
    };
    var r, i = n(25), a = (r = i) && r.__esModule ? r : {default: r};
    var o = [], l = null, s = !1;

    function u() {
        s = !0
    }

    function c() {
        if (s) {
            if (s = !1, !l) return;
            setTimeout((function () {
                l.contains(document.activeElement) || ((0, a.default)(l)[0] || l).focus()
            }), 0)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
        var n = (0, a.default)(e);
        if (!n.length) return void t.preventDefault();
        var r = void 0, i = t.shiftKey, o = n[0], l = n[n.length - 1];
        if (e === document.activeElement) {
            if (!i) return;
            r = l
        }
        l !== document.activeElement || i || (r = o);
        o === document.activeElement && i && (r = l);
        if (r) return t.preventDefault(), void r.focus();
        var s = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
        if (null == s || "Chrome" == s[1] || null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) return;
        var u = n.indexOf(document.activeElement);
        u > -1 && (u += i ? -1 : 1);
        if (void 0 === (r = n[u])) return t.preventDefault(), void (r = i ? l : o).focus();
        t.preventDefault(), r.focus()
    };
    var r, i = n(25), a = (r = i) && r.__esModule ? r : {default: r};
    e.exports = t.default
}, function (e, t, n) {
    "use strict";
    var r = function () {
    };
    e.exports = r
}, function (e, t, n) {
    var r;
    /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
    !function () {
        "use strict";
        var i = !("undefined" == typeof window || !window.document || !window.document.createElement), a = {
            canUseDOM: i,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: i && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: i && !!window.screen
        };
        void 0 === (r = function () {
            return a
        }.call(t, n, t, e)) || (e.exports = r)
    }()
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.dumpClassLists = function () {
        0
    };
    var r = {}, i = {};
    t.add = function (e, t) {
        return n = e.classList, a = "html" == e.nodeName.toLowerCase() ? r : i, void t.split(" ").forEach((function (e) {
            !function (e, t) {
                e[t] || (e[t] = 0), e[t] += 1
            }(a, e), n.add(e)
        }));
        var n, a
    }, t.remove = function (e, t) {
        return n = e.classList, a = "html" == e.nodeName.toLowerCase() ? r : i, void t.split(" ").forEach((function (e) {
            !function (e, t) {
                e[t] && (e[t] -= 1)
            }(a, e), 0 === a[e] && n.remove(e)
        }));
        var n, a
    }
}, function (e, t, n) {
    "use strict";
    var r, i = n(27), a = (r = i) && r.__esModule ? r : {default: r};
    var o = void 0, l = void 0, s = [];

    function u() {
        0 !== s.length && s[s.length - 1].focusContent()
    }

    a.default.subscribe((function (e, t) {
        o && l || ((o = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""), o.style.position = "absolute", o.style.opacity = "0", o.setAttribute("tabindex", "0"), o.addEventListener("focus", u), (l = o.cloneNode()).addEventListener("focus", u)), (s = t).length > 0 ? (document.body.firstChild !== o && document.body.insertBefore(o, document.body.firstChild), document.body.lastChild !== l && document.body.appendChild(l)) : (o.parentElement && o.parentElement.removeChild(o), l.parentElement && l.parentElement.removeChild(l))
    }))
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
        null != e && this.setState(e)
    }

    function i(e) {
        this.setState(function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null != n ? n : null
        }.bind(this))
    }

    function a(e, t) {
        try {
            var n = this.props, r = this.state;
            this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r)
        } finally {
            this.props = n, this.state = r
        }
    }

    function o(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
        if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e;
        var n = null, o = null, l = null;
        if ("function" == typeof t.componentWillMount ? n = "componentWillMount" : "function" == typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof t.componentWillReceiveProps ? o = "componentWillReceiveProps" : "function" == typeof t.UNSAFE_componentWillReceiveProps && (o = "UNSAFE_componentWillReceiveProps"), "function" == typeof t.componentWillUpdate ? l = "componentWillUpdate" : "function" == typeof t.UNSAFE_componentWillUpdate && (l = "UNSAFE_componentWillUpdate"), null !== n || null !== o || null !== l) {
            var s = e.displayName || e.name,
                u = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + s + " uses " + u + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== o ? "\n  " + o : "") + (null !== l ? "\n  " + l : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
        }
        if ("function" == typeof e.getDerivedStateFromProps && (t.componentWillMount = r, t.componentWillReceiveProps = i), "function" == typeof t.getSnapshotBeforeUpdate) {
            if ("function" != typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
            t.componentWillUpdate = a;
            var c = t.componentDidUpdate;
            t.componentDidUpdate = function (e, t, n) {
                var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                c.call(this, e, t, r)
            }
        }
        return e
    }

    n.r(t), n.d(t, "polyfill", (function () {
        return o
    })), r.__suppressDeprecationWarning = !0, i.__suppressDeprecationWarning = !0, a.__suppressDeprecationWarning = !0
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.SPECS = {
        si: {radix: 1e3, unit: ["b", "kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"]},
        iec: {radix: 1024, unit: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"]},
        jedec: {radix: 1024, unit: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"]}
    }
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    e.exports = {screenSmall: "576px"}
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return Rn
    }));
    var r = n(9), i = n.n(r), a = n(5), o = n.n(a), l = n(0), s = n.n(l), u = n(20), c = n.n(u), f = n(6), d = n.n(f),
        p = n(3), h = n.n(p), m = n(7), y = n.n(m), g = n(8), b = n.n(g), v = n(4), w = n.n(v), L = n(2), M = n.n(L),
        E = n(1), C = n.n(E), S = {
            loading: "Loading, please wait...",
            close: "Close",
            hubPanelLabel: "Select content type",
            createContentTabLabel: "Create Content",
            uploadTabLabel: "Upload",
            uploadPlaceholder: "No file chosen",
            uploadInstructionsTitle: "Upload an H5P file.",
            uploadInstructionsContent: 'You may start with examples from <a href="https://h5p.org/content-types-and-applications" target="blank">H5P.org</a>.',
            uploadFileButtonLabel: "Upload a file",
            uploadFileButtonChangeLabel: "Change file",
            uploadingThrobber: "Now uploading...",
            uploadSuccess: ":title was successfully uploaded!",
            unableToInterpretError: "Unable to interpret response.",
            unableToInterpretSolution: "Please check your error log.",
            h5pFileWrongExtensionTitle: "The selected file could not be uploaded",
            h5pFileWrongExtensionContent: "Only files with the .h5p extension are allowed.",
            contentTypeSectionAll: "All Content Types",
            searchResults: "Search Results",
            contentTypeSearchFieldPlaceholder: "Search for Content Types",
            contentTypeInstallButtonLabel: "Install",
            contentTypeInstallingButtonLabel: "Installing",
            contentTypeUseButtonLabel: "Use",
            contentTypeDetailButtonLabel: "Details",
            contentTypeUpdateButtonLabel: "Update",
            contentTypeUpdatingButtonLabel: "Updating",
            contentTypeGetButtonLabel: "Get",
            contentTypeBackButtonLabel: "Back",
            contentTypeIconAltText: "Icon",
            contentTypeInstallSuccess: ":contentType successfully installed!",
            contentTypeUpdateSuccess: ":contentType successfully updated!",
            contentTypeInstallError: ":contentType could not be installed. Contact your administrator.",
            contentTypeLicensePanelTitle: "License",
            contentTypeDemoButtonLabel: "Content Demo",
            numResults: ":num results",
            show: "Show",
            recentlyUsedFirst: "Recently Used First",
            popularFirst: "Popular First",
            newestFirst: "Newest First",
            aToZ: "A to Z",
            noResultsFound: "No results found",
            noResultsFoundDesc: "There is no content type that matches your search criteria.",
            readMore: "Read more",
            readLess: "Read less",
            contentTypeUpdateAvailable: "Update available",
            licenseDescription: "Some of the features of this license are indicated below. Click the info icon above to read the original license text.",
            licenseModalTitle: "License Details",
            licenseModalSubtitle: "Select a license to view information about proper usage",
            licenseUnspecified: "Unspecified",
            licenseCanUseCommercially: "Can use commercially",
            licenseCanModify: "Can modify",
            licenseCanDistribute: "Can distribute",
            licenseCanSublicense: "Can sublicense",
            licenseCanHoldLiable: "Can hold liable",
            licenseCannotHoldLiable: "Cannot hold liable",
            licenseMustIncludeCopyright: "Must include copyright",
            licenseMustIncludeLicense: "Must include license",
            licenseFetchDetailsFailed: "Failed fetching license details",
            imageLightboxTitle: "Images",
            imageLightBoxProgress: ":num of :total",
            nextImage: "Next image",
            previousImage: "Previous image",
            screenshots: "Screenshots",
            noContentTypesAvailable: "No content types are available",
            noContentTypesAvailableDesc: "Your site is having difficulties connecting to H5P.org and listing the available content types.",
            contentTypeCacheOutdated: "Content type list outdated",
            contentTypeCacheOutdatedDesc: "Your site is having difficulties connecting to H5P.org to check for content type updates. You may not be able to update or install new content types.",
            tryAgain: "Try again",
            getHelp: "Get help",
            pasteButton: "Paste",
            ok: "OK",
            language: "Language",
            noContentHeader: "No Fitting Content?",
            noContentSuggestion: "Create one yourself!",
            tutorials: "Tutorials",
            contentSectionAll: "All shared content",
            popularContent: "Popular Content",
            allPopular: "All Popular",
            newOnTheHub: "New on the Hub",
            allNew: "All New",
            filterBy: "Filter by",
            filter: "Filter",
            filters: {
                level: {
                    dropdownLabel: "Level",
                    dialogHeader: "Select level of education",
                    dialogButtonLabel: "Filter level of education"
                },
                language: {
                    dropdownLabel: "Language",
                    dialogHeader: "Select language(s)",
                    dialogButtonLabel: "Filter languages",
                    searchPlaceholder: "Select one or more languages"
                },
                reviewed: {
                    dropdownLabel: "Reviewed",
                    dialogHeader: "Reviewed Content",
                    dialogButtonLabel: "Filter",
                    optionLabel: "Show only reviewed content"
                },
                contentTypes: {
                    dropdownLabel: "Content types",
                    dialogHeader: "Select Content type(s)",
                    dialogButtonLabel: "Filter Content Types",
                    searchPlaceholder: "Select one or more content types"
                },
                disciplines: {
                    dropdownLabel: "Discipline",
                    dialogHeader: "Select Your Discipline",
                    dialogButtonLabel: "Filter Disciplines",
                    searchPlaceholder: "Select one or more disciplines"
                },
                licenses: {
                    dropdownLabel: "License",
                    dialogHeader: "Select preferred rights of use",
                    dialogButtonLabel: "Filter licenses",
                    options: {modified: "Can be modified", commercial: "Allows commercial use"}
                }
            },
            clearFilters: "Clear all filters",
            contentSearchFieldPlaceholder: "Search for Content",
            loadingContentTitle: "We are loading content for you...",
            loadingContentSubtitle: "Please wait",
            by: "By",
            dropdownButton: "Open dropdown",
            paginationNavigation: "Pagination navigation",
            page: "Page",
            currentPage: "Current page",
            nextPage: "Go to next page",
            previousPage: "Go to previous page",
            contentPreviewButtonLabel: "Preview",
            contentDownloadButtonLabel: "Get Content",
            contentDownloadButtonDownloadingLabel: "Downloading...",
            reuseContentTabLabel: "Get Shared Content",
            contentPublisherPanelHeader: "Publisher Info",
            noContentFoundDesc: "There is no content that matches your search criteria.",
            h5pType: "H5P Type",
            level: "Level",
            age: "Typical age",
            size: "Size",
            failedFetchingData: "Failed fetching data",
            filterErrorMessage: "Something went wrong. Please reload the page.",
            in: "in",
            navigateToParent: "Navigate to parent",
            downloadFailed: "Download failed",
            downloadFailedMissingLibrariesTitle: "Download failed",
            downloadFailedMissingLibrariesMessage: "You are not authorized to install or update the libraries required by this content.",
            contentHubConnectionFailed: "Could not connect to the content hub.",
            somethingWentWrongTryAgain: "Something went wrong. Please try again."
        }, T = n(11), x = n.n(T);

    function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function j(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? N(Object(n), !0).forEach((function (t) {
                M()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function D(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return k(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0, l = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return o = e.done, e
            }, e: function (e) {
                l = !0, a = e
            }, f: function () {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (l) throw a
                }
            }
        }
    }

    function k(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    var I = function (e, t, n) {
        if (void 0 === e[t] || 0 === e[t].length) return new Error("Non empty string for prop ".concat(t, " in ").concat(n))
    }, O = function (e) {
        return e.stopPropagation()
    }, P = function (e, t) {
        -1 !== [32, 13].indexOf(e.which) && (e.preventDefault(), t())
    }, A = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90;
        return e.length > t ? e.substr(0, t - 3) + "..." : e
    }, R = function (e) {
        return e.map((function (e) {
            return {url: e.path, alt: e.altText}
        }))
    }, z = function (e, t) {
        var n, r = {}, i = D(e);
        try {
            for (i.s(); !(n = i.n()).done;) {
                var a = n.value;
                r[a + x()(a)] = 1
            }
        } catch (e) {
            i.e(e)
        } finally {
            i.f()
        }
        var o, l = D(t);
        try {
            for (l.s(); !(o = l.n()).done;) {
                var s = o.value, u = s + x()(s);
                if (!r[u]) return !1;
                r[u] = 2
            }
        } catch (e) {
            l.e(e)
        } finally {
            l.f()
        }
        for (var c in r) if (1 === r[c]) return !1;
        return !0
    }, F = C.a.shape({
        id: C.a.string.isRequired,
        title: C.a.string.isRequired,
        owner: C.a.string.isRequired,
        reviewed: C.a.bool.isRequired,
        content_type: C.a.string.isRequired,
        description: C.a.string,
        screenshots: C.a.arrayOf(C.a.shape({path: C.a.string, altText: C.a.string})),
        icon: C.a.string,
        level: C.a.string,
        language: C.a.string.isRequired,
        disciplines: C.a.array
    }), _ = function (e, t) {
        for (var n = ["contentTypes", "disciplines", "language", "level", "license", "reviewed"], r = 0; r < n.length; r++) {
            var i = e[n[r]], a = t[n[r]], o = Array.isArray(i), l = Array.isArray(a);
            if (o !== l || o && l && !z(i, a)) return !1
        }
        return !0
    }, U = function (e, t) {
        var n = function (e) {
            return e.versions.length ? e.versions.reduce((function (t, n) {
                return j(j({}, t), {}, M()({}, "".concat(e.id, "-").concat(n.id), {
                    id: "".concat(e.id, "-").concat(n.id),
                    parentLicenseId: e.id,
                    version: n.id,
                    name: "".concat(e.name, " ").concat(n.name),
                    url: n.url
                }))
            }), {}) : M()({}, e.id, j({}, e))
        };
        if (t.licenses) {
            var r = t.licenses.reduce((function (e, t) {
                var r = n(t);
                return j(j({}, e), r)
            }), {});
            return j(j({}, e), r)
        }
        var i = n(t);
        return j(j({}, e), i)
    }, Q = function () {
        function e() {
            o()(this, e)
        }

        return d()(e, null, [{
            key: "init", value: function (t) {
                e.dictionary = function e() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    for (var i = 1; i < n.length; i++) for (var a in n[i]) n[i].hasOwnProperty(a) && ("object" === x()(n[0][a]) && "object" === x()(n[i][a]) ? e(n[0][a], n[i][a]) : n[0][a] = n[i][a]);
                    return n[0]
                }(S, t)
            }
        }, {
            key: "get", value: function (t, n) {
                var r = e.dictionary[t];
                return void 0 === r ? "Key not found in dictionary: ".concat(t) : (n && (r = e.replace(r, n)), r)
            }
        }, {
            key: "replace", value: function (e, t) {
                for (var n in t) t[n] && (e = e.replace(n, t[n]));
                return e
            }
        }]), e
    }(), Y = (n(18), function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "include",
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "cors";
        return fetch(e, {method: void 0 === t ? "GET" : "POST", credentials: n, mode: r, body: t}).then((function (e) {
            return e.json().catch((function () {
                throw{
                    title: e.statusText + " (" + e.status + ")",
                    message: [Q.get("unableToInterpretError"), Q.get("unableToInterpretSolution")]
                }
            }))
        })).then((function (e) {
            if (!1 === e.success) throw{title: e.message, message: e.details};
            return e
        }))
    }), B = (n(40), function (e) {
        var t = e.togglePanel, n = e.isExpanded, r = e.sectionId, i = e.title;
        return s.a.createElement("div", {
            className: "h5p-hub-client-drop-down",
            "aria-level": "1",
            role: "heading"
        }, s.a.createElement("div", {
            className: "h5p-hub-icon-hub-icon",
            role: "button",
            onClick: t,
            onKeyUp: function (e) {
                13 !== e.which && 32 !== e.which || t()
            },
            "aria-expanded": n.toString(),
            "aria-controls": "h5p-hub-panel-body-".concat(r),
            tabIndex: "0"
        }, s.a.createElement("span", {className: "h5p-hub-description"}, "H5P Hub."), s.a.createElement("span", {className: "h5p-hub-selected"}, i)))
    });
    B.propTypes = {
        togglePanel: C.a.func.isRequired,
        isExpanded: C.a.bool.isRequired,
        sectionId: C.a.string.isRequired,
        title: C.a.string.isRequired
    };
    var W = B;
    n(41);

    function V(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var q = function (e) {
        y()(n, e);
        var t = V(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "cloneChild", (function (e) {
                return e ? s.a.cloneElement(e, e.props.id ? {
                    className: (e.props.className ? e.props.className + " " : "") + (r.state.selected ? e.props.id === r.state.selected ? "h5p-hub-highlight" : "" : r.count ? "" : "h5p-hub-highlight"),
                    tabIndex: r.state.focused ? e.props.id === r.state.focused ? 0 : -1 : r.count++ ? -1 : 0,
                    role: -1 !== ["a", "button"].indexOf(e.type) ? void 0 : e.props.role || "button",
                    onClick: function (t) {
                        return r.handleClick(t, e.props.id)
                    },
                    onKeyDown: function (t) {
                        return r.handleKeyDown(t, e.props.id)
                    },
                    ref: function (t) {
                        return t && !e.props.disabled ? r.items.push(t) : void 0
                    }
                } : void 0, !e.props.id && e.props.children ? s.a.Children.map(e.props.children, r.cloneChild) : e.props.children) : null
            })), r.state = {selected: e.selected, focused: e.selected}, r
        }

        return d()(n, [{
            key: "componentWillReceiveProps", value: function (e) {
                this.setState({
                    selected: e.selected,
                    focused: e.selected
                }), e.setFocus !== this.props.setFocus && this.setState({focusOnRender: !0})
            }
        }, {
            key: "select", value: function (e) {
                for (var t = null, n = 0; n < this.items.length; n++) if (e === this.items[n].id) {
                    t = this.items[n];
                    break
                }
                this.props.onChange(e, t && t.attributes), this.setState({selected: e})
            }
        }, {
            key: "focus", value: function (e, t) {
                e && (this.setState({focused: e, focusOnRender: !t}), this.props.onFocus && this.props.onFocus(e))
            }
        }, {
            key: "getSiblingIdFor", value: function (e, t) {
                for (var n = 0; n < this.items.length; n++) if (e === this.items[n].id) {
                    var r = this.items[n + t];
                    if (r) return r.id
                }
            }
        }, {
            key: "handleClick", value: function (e, t) {
                e.defaultPrevented || (this.select(t), "A" === e.target.tagName && e.preventDefault())
            }
        }, {
            key: "handleKeyDown", value: function (e, t) {
                if (!e.defaultPrevented) switch (e.which) {
                    case 37:
                    case 38:
                        this.focus(this.getSiblingIdFor(t, -1)), e.preventDefault();
                        break;
                    case 39:
                    case 40:
                        this.focus(this.getSiblingIdFor(t, 1)), e.preventDefault();
                        break;
                    case 32:
                    case 13:
                        this.select(t), e.preventDefault()
                }
            }
        }, {
            key: "componentDidUpdate", value: function () {
                if (this.state.focusOnRender) if (delete this.state.focusOnRender, this.state.focused) {
                    for (var e = 0; e < this.items.length; e++) if (this.state.focused === this.items[e].id) {
                        this.items[e].focus();
                        break
                    }
                } else this.items[0] && this.items[0].focus()
            }
        }, {
            key: "render", value: function () {
                return this.items = [], this.count = 0, s.a.Children.map(this.props.children, this.cloneChild)
            }
        }]), n
    }(s.a.Component);
    q.propTypes = {
        selected: C.a.string,
        setFocus: C.a.bool,
        onChange: C.a.func.isRequired,
        onFocus: C.a.func,
        onScrollIntoView: C.a.func
    };
    var H = q;

    function G(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var Z = function (e) {
        y()(n, e);
        var t = G(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "handleSelect", (function (e) {
                r.setState({selected: e}), r.props.onSelect(e)
            })), r.state = {selected: e.selected}, r
        }

        return d()(n, [{
            key: "render", value: function () {
                var e = this, t = s.a.Children.map(this.props.children, (function (t) {
                    return null !== t && s.a.createElement("li", {
                        className: "h5p-hub-tab-button",
                        "aria-selected": e.state.selected === t.props.id,
                        "aria-controls": "h5p-hub-tab-panel-".concat(t.props.id),
                        role: "tab",
                        key: t.props.id
                    }, s.a.createElement("a", {id: t.props.id, href: "#"}, t.props.title))
                })), n = s.a.Children.map(this.props.children, (function (t) {
                    return null !== t && s.a.createElement("div", {
                        className: "h5p-hub-tabpanel".concat(e.state.selected === t.props.id ? "" : " h5p-hub-hidden"),
                        id: "h5p-hub-tab-panel-".concat(t.props.id),
                        "aria-labelledby": t.props.id,
                        role: "tabpanel"
                    }, t)
                }));
                return s.a.createElement("div", {className: "h5p-hub-tab-panel"}, 
                    // s.a.createElement("nav", null, !!window.localStorage && s.a.createElement("div", {className: "h5peditor-copypaste-wrap"}, s.a.createElement("button", {
                    // id: "h5peditor-hub-paste-button",
                    // className: "h5peditor-paste-button ".concat(this.props.canPaste ? "" : "disabled"),
                    // disabled: !this.props.canPaste,
                    // title: this.props.canPaste ? Q.get("pasteFromClipboard") : this.props.canPasteTitle,
                    // onClick: this.props.onPaste
                // }, Q.get("pasteButton"))), s.a.createElement("ul", {role: "tablist"}, s.a.createElement(H, {
                //     selected: this.props.children[0].props.id,
                //     onChange: this.handleSelect
                // }, t))),
                    n)
            }
        }]), n
    }(s.a.Component);
    Z.propTypes = {selected: C.a.string.isRequired, onSelect: C.a.func.isRequired};
    var K = Z, X = n(10), J = (n(42), function (e) {
        var t = e.headerText, n = e.suggestionText, r = e.tutorialUrl;
        return s.a.createElement("div", {className: "h5p-hub-no-content"}, s.a.createElement("img", {
            className: "h5p-hub-no-results-img",
            src: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQyLjkxIDk1LjA2Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogbm9uZTsNCiAgICAgIH0NCg0KICAgICAgLmNscy0yIHsNCiAgICAgICAgY2xpcC1wYXRoOiB1cmwoI2NsaXAtcGF0aCk7DQogICAgICB9DQoNCiAgICAgIC5jbHMtMyB7DQogICAgICAgIGZpbGw6ICNjY2NjZDU7DQogICAgICB9DQogICAgPC9zdHlsZT4NCiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+DQogICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjAuMTciIHk9Ii0wLjAyIiB3aWR0aD0iMjQ0LjQiIGhlaWdodD0iOTUuNzgiLz4NCiAgICA8L2NsaXBQYXRoPg0KICA8L2RlZnM+DQogIDx0aXRsZT5uby1yZXN1bHRzPC90aXRsZT4NCiAgPGcgY2xhc3M9ImNscy0yIj4NCiAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMDguOTIsNzguNDVWOTMuNzhhMS4yOCwxLjI4LDAsMCwxLTEuMjgsMS4yOEg4OS43NWExLjI4LDEuMjgsMCwwLDEtMS4yOC0xLjI4VjcyLjQ4YTEuMjgsMS4yOCwwLDAsMSwxLjI4LTEuMjhoMTEuOTJhMy41NywzLjU3LDAsMCwxLDIuMTguOTFMMTA4LDc2LjI2QTMuNTcsMy41NywwLDAsMSwxMDguOTIsNzguNDVabS0xLjcsMS4yOGgtNS41NGExLjI4LDEuMjgsMCwwLDEtMS4yOC0xLjI4VjcyLjkxSDkwLjE4VjkzLjM1aDE3Wk05NCw4MS40M2g5LjM3YS40Mi40MiwwLDAsMSwuNDIuNDN2Ljg1YS40Mi40MiwwLDAsMS0uNDIuNDNIOTRhLjQyLjQyLDAsMCwxLS40My0uNDN2LS44NUEuNDIuNDIsMCwwLDEsOTQsODEuNDNabTkuNzksMy44M3YuODVhLjQyLjQyLDAsMCwxLS40Mi40M0g5NGEuNDIuNDIsMCwwLDEtLjQzLS40M3YtLjg1YS40Mi40MiwwLDAsMSwuNDMtLjQzaDkuMzdBLjQyLjQyLDAsMCwxLDEwMy44MSw4NS4yNlptMCwzLjQxdi44NWEuNDIuNDIsMCwwLDEtLjQyLjQzSDk0YS40Mi40MiwwLDAsMS0uNDMtLjQzdi0uODVhLjQyLjQyLDAsMCwxLC40My0uNDNoOS4zN0EuNDIuNDIsMCwwLDEsMTAzLjgxLDg4LjY3Wk0xMDIuMSw3OGg1YTEuNzEsMS43MSwwLDAsMC0uMjktLjU1bC00LjE3LTQuMTdhMS42OSwxLjY5LDAsMCwwLS41NS0uMjlaIi8+DQogICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjE4Ljg3LDg1LjE5LDIxNC45NSw5MGE0LjgsNC44LDAsMCwxLTMuNDEsMS42MkgxOTcuMDZhMywzLDAsMCwxLTMtM1Y3NS44OWEzLDMsMCwwLDEsMy0zaDQuMjZhMywzLDAsMCwxLDMsM3YuNDNoNy4yNGEzLDMsMCwwLDEsMywzdjIuMTNoMi41NmEyLjM3LDIuMzcsMCwwLDEsMi4yMSwxLjI2LDIuMDksMi4wOSwwLDAsMSwuMi45QTIuNjIsMi42MiwwLDAsMSwyMTguODcsODUuMTlabS02LjA2LTMuNzdWNzkuM0ExLjI4LDEuMjgsMCwwLDAsMjExLjU0LDc4aC03LjY3YTEuMjgsMS4yOCwwLDAsMS0xLjI4LTEuMjh2LS44NWExLjI4LDEuMjgsMCwwLDAtMS4yOC0xLjI4aC00LjI2YTEuMjgsMS4yOCwwLDAsMC0xLjI4LDEuMjhWODcuMjRMMTk5LjE5LDgzYTQuNzUsNC43NSwwLDAsMSwzLjQxLTEuNjJabTQuMjYsMS43SDIwMi42YTMuMDcsMy4wNywwLDAsMC0yLjA5LDFsLTMuOTEsNC44M2EuOTIuOTIsMCwwLDAtLjI0LjUzYzAsLjM3LjQxLjQ3LjcxLjQ3aDE0LjQ4YTMsMywwLDAsMCwyLjA5LTFsMy45MS00LjgzYS44NS44NSwwLDAsMCwuMjQtLjUyQzIxNy43OCw4My4yMiwyMTcuMzcsODMuMTMsMjE3LjA4LDgzLjEzWiIvPg0KICAgIDxnPg0KICAgICAgPHJlY3QgY2xhc3M9ImNscy0zIiB4PSIxMTcuNzQiIHk9IjgxLjA2IiB3aWR0aD0iOSIgaGVpZ2h0PSI5IiByeD0iMS43IiByeT0iMS43Ii8+DQogICAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMzEuNDksODEuNDNhLjM1LjM1LDAsMCwwLS4yNi4xMmwtMy40OCwzLjU0djEuMmwzLjQ4LDMuNTRhLjM5LjM5LDAsMCwwLC4yOC4xMmMuMDUsMCwwLDAsLjA2LDBzLjE3LS4yMy4xNy0uNFY4MS44NWMwLS4xNywwLS4zMy0uMTgtLjRTMTMxLjU0LDgxLjQzLDEzMS40OSw4MS40M1oiLz4NCiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEzMy43NCw3OS44NFY5My4wNmgtMTdWNzkuMjFjLTEtLjE3LTItLjM2LTItLjU2VjkzLjc4YTEuNCwxLjQsMCwwLDAsMS40MSwxLjI4SDEzNWMuNzEsMCwuNzEtLjU4LjcxLTEuMjhWNzkuNEMxMzUuNzQsNzkuNTUsMTMzLjc0LDc5LjcxLDEzMy43NCw3OS44NFoiLz4NCiAgICA8L2c+DQogICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjAuNDQsNy4yNFYyMi41N2ExLjI4LDEuMjgsMCwwLDEtMS4yOCwxLjI4SDEuMjhBMS4yOCwxLjI4LDAsMCwxLDAsMjIuNTdWMS4yOEExLjI4LDEuMjgsMCwwLDEsMS4yOCwwSDEzLjJhMy41NywzLjU3LDAsMCwxLDIuMTguOTFsNC4xNSw0LjE1QTMuNTcsMy41NywwLDAsMSwyMC40NCw3LjI0Wm0tMS43LDEuMjhIMTMuMmExLjI4LDEuMjgsMCwwLDEtMS4yOC0xLjI4VjEuN0gxLjdWMjIuMTVoMTdabS0xMy4yLDEuN2g5LjM3YS40Mi40MiwwLDAsMSwuNDMuNDN2Ljg1YS40Mi40MiwwLDAsMS0uNDMuNDNINS41NGEuNDIuNDIsMCwwLDEtLjQzLS40M3YtLjg1QS40Mi40MiwwLDAsMSw1LjU0LDEwLjIyWm05LjgsMy44M3YuODVhLjQyLjQyLDAsMCwxLS40My40M0g1LjU0YS40Mi40MiwwLDAsMS0uNDMtLjQzdi0uODVhLjQyLjQyLDAsMCwxLC40My0uNDNoOS4zN0EuNDIuNDIsMCwwLDEsMTUuMzMsMTQuMDVabTAsMy40MXYuODVhLjQyLjQyLDAsMCwxLS40My40M0g1LjU0YS40Mi40MiwwLDAsMS0uNDMtLjQzdi0uODVBLjQyLjQyLDAsMCwxLDUuNTQsMTdoOS4zN0EuNDIuNDIsMCwwLDEsMTUuMzMsMTcuNDZaTTEzLjYzLDYuODFoNWExLjcsMS43LDAsMCwwLS4yOS0uNTVMMTQuMTcsMi4xYTEuNywxLjcsMCwwLDAtLjU1LS4yOVoiLz4NCiAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00Ni44NCw3LjI0VjIyLjU3YTEuMjgsMS4yOCwwLDAsMS0xLjI4LDEuMjhIMjcuNjhhMS4yOCwxLjI4LDAsMCwxLTEuMjgtMS4yOFYxLjI4QTEuMjgsMS4yOCwwLDAsMSwyNy42OCwwSDM5LjZhMy41NywzLjU3LDAsMCwxLDIuMTguOTFsNC4xNSw0LjE1QTMuNTcsMy41NywwLDAsMSw0Ni44NCw3LjI0Wm0tMS43LDEuMjhIMzkuNmExLjI4LDEuMjgsMCwwLDEtMS4yOC0xLjI4VjEuN0gyOC4xVjIyLjE1aDE3Wm0tNi44MSwzLjQxVjE3YTEuNzIsMS43MiwwLDAsMS0xLjcsMS43SDMxLjUxYTEuNzIsMS43MiwwLDAsMS0xLjctMS43VjExLjkyYTEuNzIsMS43MiwwLDAsMSwxLjctMS43aDUuMTFBMS43MiwxLjcyLDAsMCwxLDM4LjMzLDExLjkyWm01LjExLTEuMjh2Ny42N2EuNDQuNDQsMCwwLDEtLjI3LjRsLS4xNiwwYS40NS40NSwwLDAsMS0uMzEtLjEybC0zLjUzLTMuNTR2LTEuMmwzLjUzLTMuNTRhLjQ1LjQ1LDAsMCwxLC4zMS0uMTJsLjE2LDBBLjQ0LjQ0LDAsMCwxLDQzLjQ0LDEwLjY1Wk00MCw2LjgxaDVhMS42OSwxLjY5LDAsMCwwLS4yOS0uNTVMNDAuNTcsMi4xQTEuNywxLjcsMCwwLDAsNDAsMS44MVoiLz4NCiAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik03My4yNCw3LjI0VjIyLjU3QTEuMjgsMS4yOCwwLDAsMSw3MiwyMy44NUg1NC4wOGExLjI4LDEuMjgsMCwwLDEtMS4yOC0xLjI4VjEuMjhBMS4yOCwxLjI4LDAsMCwxLDU0LjA4LDBINjZhMy41NywzLjU3LDAsMCwxLDIuMTguOTFsNC4xNSw0LjE1QTMuNTcsMy41NywwLDAsMSw3My4yNCw3LjI0Wm0tMS43LDEuMjhINjZhMS4yOCwxLjI4LDAsMCwxLTEuMjgtMS4yOFYxLjdINTQuNVYyMi4xNWgxN1pNNjEuMzIsMTEuNzFWMTlhLjQ0LjQ0LDAsMCwxLS4yNy40bC0uMTYsMGEuNDcuNDcsMCwwLDEtLjMxLS4xMkw1OC4zOCwxN0g1Ni42M2EuNDIuNDIsMCwwLDEtLjQzLS40M1YxNC4wNWEuNDIuNDIsMCwwLDEsLjQzLS40M2gxLjc0bDIuMjEtMi4yMmEuNDMuNDMsMCwwLDEsLjczLjMxWm0zLjEsNi41M2E0LjI1LDQuMjUsMCwwLDAsMC01LjgzLjg1Ljg1LDAsMSwwLTEuMjQsMS4xNywyLjU0LDIuNTQsMCwwLDEsMCwzLjQ5Ljg2Ljg2LDAsMCwwLDAsMS4yMS45Mi45MiwwLDAsMCwuNTkuMjNBLjg5Ljg5LDAsMCwwLDY0LjQyLDE4LjI1Wm0yLjg1LDEuOTJhNy42NSw3LjY1LDAsMCwwLDAtOS42Ni44NS44NSwwLDEsMC0xLjMyLDEuMDgsNiw2LDAsMCwxLDAsNy41MS44NC44NCwwLDAsMCwuMTIsMS4yLjgzLjgzLDAsMCwwLC41My4yQS44NC44NCwwLDAsMCw2Ny4yNywyMC4xNlpNNjYuNDMsNi44MWg1YTEuNjksMS42OSwwLDAsMC0uMjktLjU1TDY3LDIuMWExLjcsMS43LDAsMCwwLS41NS0uMjlaIi8+DQogICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNOTkuNjQsNy4yNFYyMi41N2ExLjI4LDEuMjgsMCwwLDEtMS4yOCwxLjI4SDgwLjQ4YTEuMjgsMS4yOCwwLDAsMS0xLjI4LTEuMjhWMS4yOEExLjI4LDEuMjgsMCwwLDEsODAuNDgsMEg5Mi40YTMuNTcsMy41NywwLDAsMSwyLjE4LjkxbDQuMTUsNC4xNUEzLjU3LDMuNTcsMCwwLDEsOTkuNjQsNy4yNFptLTEuNywxLjI4SDkyLjRhMS4yOCwxLjI4LDAsMCwxLTEuMjgtMS4yOFYxLjdIODAuOVYyMi4xNWgxN1pNODIuNjEsMTEuMDdhMi41NiwyLjU2LDAsMSwxLDIuNTYsMi41NkEyLjU2LDIuNTYsMCwwLDEsODIuNjEsMTEuMDdabTEzLjYzLDkuMzdIODIuNjFWMTcuODlsMi41Ni0yLjU2LDEuNywxLjdMOTIsMTEuOTJsNC4yNiw0LjI2Wk05Mi44Myw2LjgxaDVhMS42OSwxLjY5LDAsMCwwLS4yOS0uNTVMOTMuMzcsMi4xYTEuNywxLjcsMCwwLDAtLjU1LS4yOVoiLz4NCiAgICA8Zz4NCiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTYwLjgxLDQxLjIxVjU2LjU0YTEuMjgsMS4yOCwwLDAsMS0xLjI4LDEuMjhINDEuNjVhMS4yOCwxLjI4LDAsMCwxLTEuMjgtMS4yOFYzNS4yNEExLjI4LDEuMjgsMCwwLDEsNDEuNjUsMzRINTMuNTdhMy41NywzLjU3LDAsMCwxLDIuMTguOTFMNTkuOTEsMzlBMy41NywzLjU3LDAsMCwxLDYwLjgxLDQxLjIxWm0tMS43LDEuMjhINTMuNTdhMS4yOCwxLjI4LDAsMCwxLTEuMjgtMS4yOFYzNS42N0g0Mi4wOFY1Ni4xMWgxN1ptLTEzLjIsMS43aDkuMzdhLjQyLjQyLDAsMCwxLC40My40M3YuODVhLjQyLjQyLDAsMCwxLS40My40M0g0NS45MWEuNDIuNDIsMCwwLDEtLjQzLS40M3YtLjg1QS40Mi40MiwwLDAsMSw0NS45MSw0NC4xOVpNNTUuNyw0OHYuODVhLjQyLjQyLDAsMCwxLS40My40M0g0NS45MWEuNDIuNDIsMCwwLDEtLjQzLS40M1Y0OGEuNDIuNDIsMCwwLDEsLjQzLS40M2g5LjM3QS40Mi40MiwwLDAsMSw1NS43LDQ4Wm0wLDMuNDF2Ljg1YS40Mi40MiwwLDAsMS0uNDMuNDNINDUuOTFhLjQyLjQyLDAsMCwxLS40My0uNDN2LS44NWEuNDIuNDIsMCwwLDEsLjQzLS40M2g5LjM3QS40Mi40MiwwLDAsMSw1NS43LDUxLjQzWk01NCw0MC43OGg1YTEuNywxLjcsMCwwLDAtLjI5LS41NWwtNC4xNy00LjE3YTEuNjksMS42OSwwLDAsMC0uNTUtLjI5WiIvPg0KICAgICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNODcuMjIsNDEuMjFWNTYuNTRhMS4yOCwxLjI4LDAsMCwxLTEuMjgsMS4yOEg2OC4wNWExLjI4LDEuMjgsMCwwLDEtMS4yOC0xLjI4VjM1LjI0QTEuMjgsMS4yOCwwLDAsMSw2OC4wNSwzNEg4MGEzLjU3LDMuNTcsMCwwLDEsMi4xOC45MUw4Ni4zMSwzOUEzLjU3LDMuNTcsMCwwLDEsODcuMjIsNDEuMjFabS0xLjcsMS4yOEg4MGExLjI4LDEuMjgsMCwwLDEtMS4yOC0xLjI4VjM1LjY3SDY4LjQ4VjU2LjExaDE3Wk03OC43LDQ1Ljg5VjUxQTEuNzIsMS43MiwwLDAsMSw3Nyw1Mi43SDcxLjg4YTEuNzIsMS43MiwwLDAsMS0xLjctMS43VjQ1Ljg5YTEuNzIsMS43MiwwLDAsMSwxLjctMS43SDc3QTEuNzIsMS43MiwwLDAsMSw3OC43LDQ1Ljg5Wm01LjExLTEuMjh2Ny42N2EuNDQuNDQsMCwwLDEtLjI3LjRsLS4xNiwwYS40NC40NCwwLDAsMS0uMzEtLjEyTDc5LjU1LDQ5di0xLjJsMy41My0zLjU0YS40NC40NCwwLDAsMSwuMzEtLjEybC4xNiwwQS40NC40NCwwLDAsMSw4My44MSw0NC42MVpNODAuNCw0MC43OGg1YTEuNjksMS42OSwwLDAsMC0uMjktLjU1bC00LjE3LTQuMTdhMS42OSwxLjY5LDAsMCwwLS41NS0uMjlaIi8+DQogICAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xODUuMTUsNDEuMjFWNTYuNTRhMS4yOCwxLjI4LDAsMCwxLTEuMjgsMS4yOEgxNjZhMS4yOCwxLjI4LDAsMCwxLTEuMjgtMS4yOFYzNS4yNEExLjI4LDEuMjgsMCwwLDEsMTY2LDM0aDExLjkyYTMuNTcsMy41NywwLDAsMSwyLjE4LjkxTDE4NC4yNCwzOUEzLjU3LDMuNTcsMCwwLDEsMTg1LjE1LDQxLjIxWm0tMS43LDEuMjhoLTUuNTRhMS4yOCwxLjI4LDAsMCwxLTEuMjgtMS4yOFYzNS42N0gxNjYuNDFWNTYuMTFoMTdabS0xMC4yMiwzLjE5djcuMjRhLjQ0LjQ0LDAsMCwxLS4yNy40bC0uMTYsMGEuNDcuNDcsMCwwLDEtLjMxLS4xMkwxNzAuMjgsNTFoLTEuNzRhLjQyLjQyLDAsMCwxLS40My0uNDNWNDhhLjQyLjQyLDAsMCwxLC40My0uNDNoMS43NGwyLjIxLTIuMjJhLjQzLjQzLDAsMCwxLC43My4zMVptMy4xLDYuNTNhNC4yNSw0LjI1LDAsMCwwLDAtNS44My44NS44NSwwLDEsMC0xLjI0LDEuMTcsMi41NCwyLjU0LDAsMCwxLDAsMy40OS44Ni44NiwwLDAsMCwwLDEuMjEuOTIuOTIsMCwwLDAsLjU5LjIzQS44OS44OSwwLDAsMCwxNzYuMzMsNTIuMjFabTIuODUsMS45MmE3LjY1LDcuNjUsMCwwLDAsMC05LjY2Ljg1Ljg1LDAsMSwwLTEuMzIsMS4wOCw2LDYsMCwwLDEsMCw3LjUxLjg0Ljg0LDAsMCwwLC4xMiwxLjIuODMuODMsMCwwLDAsLjUzLjJBLjg0Ljg0LDAsMCwwLDE3OS4xNyw1NC4xM1ptLS44NC0xMy4zNWg1YTEuNjksMS42OSwwLDAsMC0uMjktLjU1bC00LjE3LTQuMTdhMS42OSwxLjY5LDAsMCwwLS41NS0uMjlaIi8+DQogICAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yMTEuNTUsNDEuMjFWNTYuNTRhMS4yOCwxLjI4LDAsMCwxLTEuMjgsMS4yOEgxOTIuMzlhMS4yOCwxLjI4LDAsMCwxLTEuMjgtMS4yOFYzNS4yNEExLjI4LDEuMjgsMCwwLDEsMTkyLjM5LDM0aDExLjkyYTMuNTcsMy41NywwLDAsMSwyLjE4LjkxTDIxMC42NSwzOUEzLjU3LDMuNTcsMCwwLDEsMjExLjU1LDQxLjIxWm0tMS43LDEuMjhoLTUuNTRBMS4yOCwxLjI4LDAsMCwxLDIwMyw0MS4yMVYzNS42N0gxOTIuODFWNTYuMTFoMTdaTTE5NC41Miw0NWEyLjU2LDIuNTYsMCwxLDEsMi41NiwyLjU2QTIuNTYsMi41NiwwLDAsMSwxOTQuNTIsNDVabTEzLjYzLDkuMzdIMTk0LjUyVjUxLjg1bDIuNTYtMi41NiwxLjcsMS43LDUuMTEtNS4xMSw0LjI2LDQuMjZabS0zLjQxLTEzLjYzaDVhMS42OSwxLjY5LDAsMCwwLS4yOS0uNTVsLTQuMTctNC4xN2ExLjY5LDEuNjksMCwwLDAtLjU1LS4yOVoiLz4NCiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTI0Mi4zLDQ4bC0zLjkzLDQuODNBNC44LDQuOCwwLDAsMSwyMzUsNTQuNDFIMjIwLjQ5YTMsMywwLDAsMS0zLTNWMzguNjVhMywzLDAsMCwxLDMtM2g0LjI2YTMsMywwLDAsMSwzLDN2LjQzSDIzNWEzLDMsMCwwLDEsMywzdjIuMTNoMi41NmEyLjM3LDIuMzcsMCwwLDEsMi4yMSwxLjI2LDIuMDgsMi4wOCwwLDAsMSwuMi45QTIuNjIsMi42MiwwLDAsMSwyNDIuMyw0OFptLTYuMDYtMy43N1Y0Mi4wNkExLjI4LDEuMjgsMCwwLDAsMjM1LDQwLjc4SDIyNy4zQTEuMjgsMS4yOCwwLDAsMSwyMjYsMzkuNXYtLjg1YTEuMjgsMS4yOCwwLDAsMC0xLjI4LTEuMjhoLTQuMjZhMS4yOCwxLjI4LDAsMCwwLTEuMjgsMS4yOFY1MGwzLjQxLTQuMTlBNC43NSw0Ljc1LDAsMCwxLDIyNiw0NC4xOVptNC4yNiwxLjdIMjI2YTMuMDcsMy4wNywwLDAsMC0yLjA5LDFMMjIwLDUxLjcxYS45Mi45MiwwLDAsMC0uMjQuNTNjMCwuMzcuNDEuNDcuNzEuNDdIMjM1YTMsMywwLDAsMCwyLjA5LTFMMjQxLDQ2Ljg4YS44NS44NSwwLDAsMCwuMjQtLjUyQzI0MS4yMSw0NiwyNDAuOCw0NS44OSwyNDAuNTEsNDUuODlaIi8+DQogICAgPC9nPg0KICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEwOCwxOC40OGEuNjYuNjYsMCwwLDEsLjE0LS43NEwxMTIsMTNhMywzLDAsMCwxLDIuMDktLjkySDEyOC42Yy42NCwwLC45LjM5LjQ3LjkybC0uMi4yMWMuNjQsMCwxLjI4LjEsMS45MS4xOGEyLjQxLDIuNDEsMCwwLDAsMC0yLDIuNDQsMi40NCwwLDAsMC0yLjIxLTEuMzVoLTIuODZ2LTJhMi43OSwyLjc5LDAsMCwwLTIuNjgtM2gtNy4zMlY0LjY4YTIuNjQsMi42NCwwLDAsMC0yLjktMi42MmgtNC4yNmEyLjU5LDIuNTksMCwwLDAtMi44NCwyLjYyVjE3LjQ2YTIuOTEsMi45MSwwLDAsMCwuNzgsMi4wN0MxMDcsMTkuMTcsMTA3LjQ2LDE4LjgyLDEwOCwxOC40OFptLS4yMy0xNC4zM2MwLS4xOC4xNC0uMDkuODQtLjA5aDQuMjZjLjcxLDAsLjktLjA4LjkuNjJ2Ljg1YTEuODgsMS44OCwwLDAsMCwxLjY1LDEuNTJoNy42N2MuNzEsMCwuNjguMzMuNjgsMXYyaC05LjYyYTYuNDcsNi40NywwLDAsMC00LjA5LDEuN2wtMi4yOSwzLjczWiIvPg0KICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEzMC44Nyw0Ny43NGEzLjcyLDMuNzIsMCwwLDAtMS43OCwyLjQ1Ljg3Ljg3LDAsMCwxLS43NC44OUgxMjMuOWMtLjQxLDAtLjY3LS42My0uNjctMXYtLjgzYzAtMi4yNCwyLjIyLTQuMTcsMy44NS00LjkxLDEuNDMtLjY1LDItMS4yNiwyLTIuNDRzLTEuMzUtMi0yLjg1LTJhMy43OSwzLjc5LDAsMCwwLTIsLjU0LDEwLjQ4LDEwLjQ4LDAsMCwwLTIsMi4xMy43Ny43NywwLDAsMS0uNTcuMy44Ni44NiwwLDAsMS0uNDYtLjE1bC0zLTIuMzJhLjczLjczLDAsMCwxLS4xOS0xLDkuNCw5LjQsMCwwLDEsOC41OS00LjkzYzQsMCw4LjQxLDMuMTcsOC40MSw3LjQxQzEzNSw0NS40MSwxMzIuNjMsNDYuNzYsMTMwLjg3LDQ3Ljc0Wm0tMS43LDkuNzFhLjc0Ljc0LDAsMCwxLS43NC43NEgxMjRhLjc0Ljc0LDAsMCwxLS43NC0uNzRWNTNhLjc0Ljc0LDAsMCwxLC43NC0uNzRoNC40NGEuNzQuNzQsMCwwLDEsLjc0Ljc0WiIvPg0KICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTE2Ni40OCw4OWExLjkxLDEuOTEsMCwwLDEtMS4zNC0uNTVsLTE5LjA3LTE5LTIuODQsMmEyOS44NCwyOS44NCwwLDEsMSw3LjY4LTcuNjlsLTIsMi44NSwxOSwxOUEyLDIsMCwwLDEsMTY2LjQ4LDg5Wm0tNDAuMTYtNjhhMjUuNzcsMjUuNzcsMCwxLDAsMjUuNzcsMjUuNzdBMjUuOCwyNS44LDAsMCwwLDEyNi4zMiwyMS4wOFoiLz4NCiAgICA8Zz4NCiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTE1MS42OCw4OS40OWEuOTIuOTIsMCwwLDAsLjU5LjIzLjg5Ljg5LDAsMCwwLC42Mi0uMjcsNC4yNSw0LjI1LDAsMCwwLDAtNS44My44NS44NSwwLDEsMC0xLjI0LDEuMTcsMi41NCwyLjU0LDAsMCwxLDAsMy40OUEuODYuODYsMCwwLDAsMTUxLjY4LDg5LjQ5WiIvPg0KICAgICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTU1Ljc2LDg2LjU0YTUuOSw1LjksMCwwLDEtMS4zMywzLjc1Ljg0Ljg0LDAsMCwwLC4xMiwxLjIuODMuODMsMCwwLDAsLjUzLjIuODQuODQsMCwwLDAsLjY3LS4zMiw3LjY4LDcuNjgsMCwwLDAsMS43Mi00LjgzczAtLjA3LDAtLjFsLTIuMTYtMi4xNUE1LjkxLDUuOTEsMCwwLDEsMTU1Ljc2LDg2LjU0WiIvPg0KICAgICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTU5Ljc0LDg5djQuMDhoLTE3Vjc2LjI1YzAsLjMyLTEsLjYyLTIsLjkxVjkzLjc4YzAsLjcxLDEuMTEsMS4yOCwxLjgxLDEuMjhoMTcuODlhMS4zLDEuMywwLDAsMCwxLjMtMS4yOFY5MC42OFoiLz4NCiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTE0NS4xMSw4OC4wNmgxLjc0bDIuMjEsMi4zMWEuNTQuNTQsMCwwLDAsLjMxLjE2LjQ1LjQ1LDAsMCwwLC4xMywwLC4zOC4zOCwwLDAsMCwuMjQtLjM4VjgyLjkyYS40MS40MSwwLDAsMC0uMjQtLjRjLS4xNi0uMDctLjMyLS40MS0uNDUtLjI5bC0yLjIsMS44NGgtMS43NGMtLjI0LDAtLjM3LDEtLjM3LDEuMnYyLjU2QzE0NC43NCw4OC4wNSwxNDQuODcsODguMDYsMTQ1LjExLDg4LjA2WiIvPg0KICAgIDwvZz4NCiAgICA8Zz4NCiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTE4Ny41Myw3Ni4yNmwtNC4zMS0zLjcyYy0uNDktLjQ5LTEuNjMtLjQ4LTIuMzQtLjQ4SDE2OWMtLjcxLDAtMS4yMS0uMjgtMS4yMS40MnY3LjIzbDIsMS43VjczLjA2aDEwdjUuMzhjMCwuNzEuNDMuNjIsMS4xNC42Mmg1Ljg2djE0aC0xN3YtLjgxYTkuMTgsOS4xOCwwLDAsMS0yLC42M3YuODlBMS4yMywxLjIzLDAsMCwwLDE2OSw5NS4wNmgxNy44OWMuNzEsMCwxLjktLjU4LDEuOS0xLjI4Vjc4LjQ1QTQsNCwwLDAsMCwxODcuNTMsNzYuMjZabS01Ljc4LjhWNzNjMCwuMDguMjMuMi4zMy4yOUwxODYuMTMsNzdjLjA5LjA5LjEuMDcuMTguMDdaIi8+DQogICAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xODQuNzQsODcuMzlsLTQuMjctNC4yNi01LjEyLDUuMTEtMS43MS0xLjctMS4zOCwxLjIxYTQuNTYsNC41NiwwLDAsMS0xLjUyLDMuMXYuMjJoMTRaIi8+DQogICAgICA8Y2lyY2xlIGNsYXNzPSJjbHMtMyIgY3g9IjE3My42NCIgY3k9IjgyLjI4IiByPSIyLjU2Ii8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg=="
        }), s.a.createElement("section", {className: "h5p-hub-right-text"}, s.a.createElement("div", {className: "h5p-hub-header"}, t), s.a.createElement("div", {className: "h5p-hub-suggestion-text"}, n), r && s.a.createElement("div", null, s.a.createElement("a", {
            className: "h5p-hub-url",
            target: "_blank",
            href: r
        }, Q.get("tutorials")))))
    });
    J.propTypes = {headerText: C.a.string.isRequired, suggestionText: C.a.string.isRequired, tutorialUrl: C.a.string};
    var $ = J;
    n(43);

    function ee(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var te = function (e) {
        y()(n, e);
        var t = ee(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "focusedExits", (function () {
                for (var e = 0; e < r.props.children.length; e++) if (r.props.children[e].props.id === r.props.focused) return !0;
                return !1
            })), r.state = {setFocus: !1, focused: ""}, r
        }

        return d()(n, [{
            key: "componentDidMount", value: function () {
                "tabular" === this.props.type && this.props.setFocus && this.setState((function (e) {
                    return {setFocus: !e.setFocus}
                }))
            }
        }, {
            key: "componentDidUpdate", value: function (e) {
                var t = this;
                e.setFocus !== this.props.setFocus && this.focusedExits() && this.setState((function (e) {
                    return {setFocus: !e.setFocus, focused: t.props.focused}
                }))
            }
        }, {
            key: "render", value: function () {
                var e = this;
                return s.a.createElement("div", {className: "h5p-hub-list ".concat(this.props.type, " ").concat(this.props.classNames)}, s.a.createElement("ol", {
                    ref: function (t) {
                        return e.listElement = t
                    }, "aria-label": this.props.title
                }, s.a.createElement(H, {
                    onChange: this.props.onSelect,
                    selected: this.state.focused,
                    setFocus: this.state.setFocus
                }, this.props.children)))
            }
        }]), n
    }(s.a.Component);
    te.propTypes = {
        type: C.a.oneOf(["tabular", "grid"]).isRequired,
        classNames: C.a.string,
        children: C.a.arrayOf(C.a.node).isRequired,
        onSelect: C.a.func.isRequired,
        focused: C.a.string,
        setFocus: C.a.bool,
        title: C.a.string.isRequired
    }, te.defaultProps = {classNames: ""};
    var ne = te, re = (n(44), n(15)), ie = n.n(re), ae = function (e) {
        return "h5p-hub-paginator-page-".concat(e)
    };

    function oe(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var le = function (e) {
        y()(n, e);
        var t = oe(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "resize", (function () {
                r.setState({screenWidth: document.documentElement.clientWidth})
            })), M()(h()(r), "handlePageSelected", (function (e, t) {
                var n = t.getNamedItem("data-page").value, i = r.props.setFocus;
                "-1" == n ? n = r.props.selectedPage - 1 : "+1" == n && (n = r.props.selectedPage + 1), 1 != n && n != r.props.pages || (i = !r.props.setFocus), r.props.onChange(i, parseInt(n))
            })), r.state = {screenWidth: document.documentElement.clientWidth}, r
        }

        return d()(n, [{
            key: "componentDidMount", value: function () {
                window.addEventListener("resize", this.resize)
            }
        }, {
            key: "componentWillUnmount", value: function () {
                window.removeEventListener("resize", this.resize)
            }
        }, {
            key: "render", value: function () {
                return s.a.createElement("nav", {role: "navigation"}, s.a.createElement("ul", {
                    className: "h5p-hub-list-of-numbers",
                    "aria-label": Q.get("paginationNavigation")
                }, s.a.createElement(H, {
                    selected: ae(this.props.selectedPage),
                    onChange: this.handlePageSelected,
                    setFocus: this.props.setFocus
                }, function (e, t, n) {
                    var r = [], i = parseInt(ie.a.screenSmall), a = function (e) {
                        return s.a.createElement("li", {
                            id: "h5p-hub-paginator-dots",
                            disabled: !0,
                            key: "dots: " + e,
                            className: "h5p-hub-dots"
                        }, s.a.createElement("div", {className: "h5p-hub-dots-text"}, "..."))
                    }, o = function (t) {
                        return s.a.createElement("li", {
                            key: t.toString(),
                            className: "h5p-hub-list-element"
                        }, s.a.createElement("a", {
                            href: "#",
                            id: ae(t),
                            "data-page": t,
                            "aria-label": Q.get("page") + " " + t + (t == e && ", " + Q.get("currentPage")),
                            "aria-current": t == e
                        }, t))
                    }, l = function (e, t) {
                        var n;
                        return s.a.createElement("li", {
                            key: e,
                            className: "h5p-hub-list-element ".concat(t ? "" : "disabled")
                        }, s.a.createElement("a", (n = {
                            href: "#",
                            id: e,
                            "data-page": e
                        }, M()(n, "id", "h5p-hub-paginator-".concat("-1" == e ? "previous" : "next")), M()(n, "disabled", !t), M()(n, "aria-label", Q.get("".concat("-1" == e ? "previous" : "next", "Page"))), M()(n, "className", "-1" == e ? "h5p-hub-previous-arrow" : "h5p-hub-next-arrow"), n)))
                    };
                    if (r.push(l("-1", e > 1)), t <= 7 && n > i) for (var u = 1; u <= t; u++) r.push(o(u)); else if (n < i) for (var c = e - 1; c < e + 2; c++) c > 0 && c <= t && r.push(o(c)); else if (e < 5) {
                        for (var f = 1; f < 6; f++) r.push(o(f));
                        r.push(a("end")), r.push(o(t))
                    } else if (e > t - 3) {
                        r.push(o(1)), r.push(a("beginning"));
                        for (var d = t - 3 - 1; d <= t; d++) r.push(o(d))
                    } else {
                        r.push(o(1)), r.push(a("beginning"));
                        for (var p = e - 1; p < e + 2; p++) r.push(o(p));
                        r.push(a("end")), r.push(o(t))
                    }
                    return r.push(l("+1", e < t)), r
                }(this.props.selectedPage, this.props.pages, this.state.screenWidth))))
            }
        }]), n
    }(s.a.Component);
    le.propTypes = {
        onChange: C.a.func.isRequired,
        selectedPage: C.a.number.isRequired,
        pages: C.a.number.isRequired,
        setFocus: C.a.bool
    };
    var se = le, ue = (n(45), n(14)), ce = n.n(ue);

    function fe(e) {
        var t = e.src, n = e.className, r = void 0 === n ? "" : n, i = Object(l.useState)(!t), a = ce()(i, 2), o = a[0],
            u = a[1];
        return s.a.createElement("img", {
            className: "h5p-hub-content-icon ".concat(r),
            src: o ? "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4zLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NDAgNDgwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NDAgNDgwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRDBEMEQxO30NCgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9DQoJLnN0MntmaWxsOiNEQkRCREM7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MjgsNDgwSDEyYy02LjYsMC0xMi01LjQtMTItMTJWMTJDMCw1LjQsNS40LDAsMTIsMGg2MTZjNi42LDAsMTIsNS40LDEyLDEydjQ1NkM2NDAsNDc0LjYsNjM0LjYsNDgwLDYyOCw0ODB6DQoJIi8+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTE4LjcsMTgwLjRjLTEwLjUtMTAuMS0yNi4zLTE1LjEtNDcuNC0xNS4xaC01Ni4xaC0xNC44djQwaC04NS4ybC03LDI4LjZjNS44LTIuNywxNC4xLTUuNCwxOS43LTYuOA0KCQljNS43LTEuNCwxMS40LTEuMiwxNi45LTEuMmMxOC44LDAsMzQuMiw1LjgsNDUuOSwxNy4yYzExLjcsMTEuNCwxNy41LDI1LjgsMTcuNSw0My4xYzAsMTIuMS0zLDIzLjktOSwzNS4xDQoJCWMtNi4xLDExLjItMTQuNiwxOS45LTI1LjcsMjUuOGMtNCwyLjEtOC40LDQtMTMuMiw1LjNoNTQuN2gxNy40di02OC40aDMyLjNjMjMuNSwwLDQwLjktNS40LDUyLjQtMTYuMQ0KCQljMTEuNS0xMC43LDE3LjItMjUuNywxNy4yLTQ0LjZDNTM0LjQsMjA0LjgsNTI5LjEsMTkwLjUsNTE4LjcsMTgwLjR6IE00NzAuOSwyMzkuN2MtNC41LDMuOS0xMi40LDUuNy0yMy42LDUuN2gtMTQuN3YtNDEuM2gxNw0KCQljMTAuOCwwLDE4LjMsMS45LDIyLjIsNi4xYzQsNC4xLDUuOSw4LjksNS45LDE0LjhDNDc3LjgsMjMxLDQ3NS40LDIzNS44LDQ3MC45LDIzOS43eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMjYuMSwyNTkuOWMtMTAuMiwwLTE5LDUuOS0yMy4yLDE0LjVsLTUxLTcuMmwyMy0xMDEuOGgtMzAuNWgtMTUuN3Y4MGgtNjQuNXYtODBoLTU2Ljh2MTg3LjFoNTYuOHYtNjguNA0KCQloNjQuNXY2OC40aDE1LjdoNTQuMmMtOC42LTIuNi0xNi4xLTUuOS0yMi4yLTEwLjVjLTYuMi00LjYtMTEuMi05LjktMTUuMS0xNS45Yy0zLjktNS45LTYuOC0xMi41LTkuNC0yMS4zbDUxLjEtNy40DQoJCWM0LjMsOC41LDEzLDE0LjMsMjMuMSwxNC4zYzE0LjMsMCwyNS45LTExLjYsMjUuOS0yNS45UzM0MC4zLDI1OS45LDMyNi4xLDI1OS45eiIvPg0KPC9nPg0KPGNpcmNsZSBjbGFzcz0ic3QyIiBjeD0iNTMuNCIgY3k9IjU0IiByPSIxOC4xIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDIiIGN4PSIxMDUuOCIgY3k9IjU0IiByPSIxOC4xIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDIiIGN4PSIxNTUuMiIgY3k9IjU0IiByPSIxOC4xIi8+DQo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTg3LjIsNzEuOWgtMjg3Yy0xMCwwLTE4LjEtOC4yLTE4LjEtMTguMXYwYzAtMTAsOC4yLTE4LjEsMTguMS0xOC4xaDI4N2MxMCwwLDE4LjEsOC4yLDE4LjEsMTguMXYwDQoJQzYwNS40LDYzLjgsNTk3LjIsNzEuOSw1ODcuMiw3MS45eiIvPg0KPC9zdmc+DQo=" : t,
            onError: function () {
                o || u(!0)
            }
        })
    }

    fe.propTypes = {src: C.a.string, className: C.a.string};
    var de = function (e) {
        var t = e.content;
        return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {className: "h5p-hub-left"}, s.a.createElement(fe, {src: t.icon})), s.a.createElement("div", {className: "h5p-hub-middle"}, s.a.createElement("div", {className: "h5p-hub-headline"}, s.a.createElement("span", {className: "h5p-hub-title ".concat(t.reviewed ? "h5p-hub-reviewed" : "")}, A(t.title)), s.a.createElement("span", {className: "h5p-hub-by"}, Q.get("by")), s.a.createElement("span", {className: "h5p-hub-owner"}, A(t.owner, 50))), s.a.createElement("div", {className: "h5p-hub-content-type"}, t.contentType), s.a.createElement("div", {className: "h5p-hub-summary"}, t.summary)), s.a.createElement("div", {className: "h5p-hub-right"}))
    };
    de.propTypes = {content: C.a.object.isRequired};
    var pe = de, he = (n(49), function (e) {
        var t = e.content;
        return s.a.createElement("div", {className: "h5p-hub-grid-item"}, s.a.createElement(fe, {src: t.icon}), s.a.createElement("div", {className: "h5p-hub-grid-item-title"}, t.title), s.a.createElement("button", {
            type: "button",
            className: "h5p-hub-button h5p-hub-button-orange h5p-hub-button-inverse-primary",
            tabIndex: "-1"
        }, Q.get("contentTypeDetailButtonLabel")))
    });
    he.propTypes = {content: C.a.object.isRequired};
    var me = he, ye = (n(50), function (e) {
        var t = e.type;
        return s.a.createElement(ne, {
            type: "".concat(t),
            classNames: "h5p-hub-loading",
            title: Q.get("loading"),
            onSelect: function () {
            }
        }, function (e, t) {
            for (var n = [], r = 0; r < t; r++) n.push("tabular" === e ? s.a.createElement("li", {
                className: "h5p-hub-content-item h5p-hub-".concat(e),
                key: r
            }, s.a.createElement("div", {className: "h5p-hub-left"}, s.a.createElement("div", {className: "h5p-hub-loading-block h5p-hub-image"})), s.a.createElement("div", {className: "h5p-hub-middle"}, s.a.createElement("div", {className: "h5p-hub-loading-block h5p-hub-text-medium"}), s.a.createElement("div", {className: "h5p-hub-loading-block h5p-hub-text-short"}), s.a.createElement("div", {className: "h5p-hub-loading-block h5p-hub-text-long"}))) : s.a.createElement("li", {
                className: "h5p-hub-content-item h5p-hub-".concat(e),
                key: r
            }, s.a.createElement("div", {className: "h5p-hub-grid-item"}, s.a.createElement("div", {className: "h5p-hub-loading-block h5p-hub-image"}), s.a.createElement("div", {className: "h5p-hub-loading-block h5p-hub-text-medium"}), s.a.createElement("div", {className: "h5p-hub-loading-block h5p-hub-text-short"}), s.a.createElement("div", {className: "h5p-hub-loading-block h5p-hub-button"}))));
            return n
        }(t, 6))
    });
    ye.propTypes = {type: C.a.string.isRequired};
    var ge = ye, be = (n(51), function e(t) {
        var n = t.itemsPromise, r = t.type, i = t.onSelect, a = t.visible, o = t.handlePageChange, u = t.showPagination,
            c = t.focused, f = t.setFocus, d = t.title, p = Object(l.useMemo)((function () {
                return e.listId++
            }), []), h = {}, m = "tabular" === r ? pe : me;
        return s.a.createElement("div", {
            className: "h5p-hub-content-list",
            "aria-hidden": !a
        }, s.a.createElement(X.b, {promiseFn: n}, s.a.createElement(X.b.Pending, null, s.a.createElement(ge, {type: r})), s.a.createElement(X.b.Rejected, null, (function () {
            return s.a.createElement("span", {className: "h5p-hub-fetching-failed"}, Q.get("failedFetchingData"))
        })), s.a.createElement(X.b.Fulfilled, null, (function (e) {
            return e.numResults ? s.a.createElement(s.a.Fragment, null, s.a.createElement(ne, {
                type: r,
                onSelect: function (e) {
                    return i(h[e], e, r)
                },
                focused: c,
                setFocus: f,
                title: d
            }, e.content.map((function (e, t) {
                return h["h5p-hub-".concat(p, "-").concat(e.id)] = e, s.a.createElement("li", {
                    className: "h5p-hub-content-item h5p-hub-".concat(r),
                    id: "h5p-hub-".concat(p, "-").concat(e.id),
                    key: t,
                    tabIndex: 1 == t
                }, s.a.createElement(m, {content: e, key: e.id, id: e.id}))
            }))), u && s.a.createElement(se, {selectedPage: e.page, pages: e.pages, onChange: o, setFocus: !1})) : null
        }))))
    });
    be.propTypes = {
        itemsPromise: C.a.func.isRequired,
        type: C.a.string,
        onSelect: C.a.func.isRequired,
        visible: C.a.bool.isRequired,
        handlePageChange: C.a.func,
        showPagination: C.a.bool,
        focused: C.a.string,
        setFocus: C.a.bool,
        title: C.a.string.isRequired
    }, be.defaultProps = {type: "tabular", showPagination: !0}, be.listId = 0;
    var ve = be, we = (n(59), function (e) {
        var t = e.searchPromise, n = e.selected, r = e.onChange, i = e.orderVisible, a = void 0 === i || i,
            o = e.visible, l = e.orderVariables, u = e.headerLabel, c = l.map((function (e) {
                return s.a.createElement("li", {key: e.id}, s.a.createElement("a", {href: "#", id: e.id}, e.text))
            }));
        return s.a.createElement("div", {className: "h5p-hub-navbar" + (o ? "" : " h5p-hub-hidden")}, s.a.createElement("div", {className: "h5p-hub-result-header"}, u, t && s.a.createElement("span", {className: "h5p-hub-result-hits"}, s.a.createElement(X.b, {promiseFn: t}, s.a.createElement(X.b.Fulfilled, null, (function (e) {
            return "(".concat(Q.get("numResults").replace(":num", e.numResults), ")")
        }))))), a && s.a.createElement("div", {
            id: "h5p-hub-sort-by",
            className: "h5p-hub-sort-by-header"
        }, Q.get("show"), ":"), a && s.a.createElement("ul", {
            className: "h5p-hub-sort-by-list",
            "aria-labelledby": "h5p-hub-sort-by"
        }, s.a.createElement(H, {selected: n, onChange: r}, c)))
    });
    we.propTypes = {
        searchPromise: C.a.func,
        selected: C.a.string.isRequired,
        onChange: C.a.func.isRequired,
        visible: C.a.bool.isRequired,
        orderVariables: C.a.array.isRequired,
        orderVisible: C.a.bool,
        headerLabel: C.a.string.isRequired
    };
    var Le = we, Me = {
        search: "search",
        disciplines: "disciplines",
        contentTypes: "content-types",
        licenses: "licenses",
        languages: "languages",
        levels: "levels",
        reviewed: "reviewed",
        license: "license"
    };

    function Ee(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    var Ce = function () {
        return (new Date).getTime()
    }, Se = function () {
        function e(t) {
            var n = t.language, r = void 0 === n ? "en" : n;
            o()(this, e), this.language = r, this.licenses = {}, this.searchCache = {}
        }

        return d()(e, null, [{
            key: "init", value: function (t, n, r) {
                e.instance || function () {
                    e.instance = new e(t), e.contentTypes = new Promise((function (t) {
                        var n = e.massageContentTypes(r);
                        t(e.makeHierarchicalContentTypes(n))
                    })), e.flatContentTypes = new Promise((function (t) {
                        t(e.massageContentTypes(r))
                    }));
                    for (var i = [], a = [{name: "levels", promise: "levels", hierarchical: !1}, {
                        name: "languages",
                        promise: "languages",
                        hierarchical: !1
                    }, {name: "licenses", promise: "licenses", hierarchical: !1}, {
                        name: "disciplines",
                        promise: "disciplines",
                        hierarchical: !0
                    }, {name: "flatDisciplines", promise: "disciplines", hierarchical: !1}], o = function (t) {
                        e[a[t].name] = new Promise((function (e, n) {
                            i.push({type: a[t].promise, hierarchical: a[t].hierarchical, resolve: e, reject: n})
                        }))
                    }, l = 0; l < a.length; l++) o(l);
                    new Y(n).then((function (t) {
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n];
                            !0 === t.success && void 0 !== t.data[r.type] ? r.hierarchical ? r.resolve(e.makeHierarchicalList(e.massageMetadata(t.data[r.type]))) : "licenses" === r.type ? r.resolve(e.massageLicenses(t.data[r.type])) : r.resolve(e.massageMetadata(t.data[r.type])) : r.reject(new Error("Unable to load " + r.type + " metadata."))
                        }
                    })).catch((function (e) {
                        for (var t = 0; t < i.length; t++) i[t].reject(e)
                    }))
                }()
            }
        }, {
            key: "massageMetadata", value: function (e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    n.label = n.translation ? n.translation : n.name, n.id = n.name
                }
                return e
            }
        }, {
            key: "massageLicenses", value: function (t) {
                return t.map((function (t) {
                    var n = function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ee(Object(n), !0).forEach((function (t) {
                                M()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ee(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, t);
                    return void 0 !== n.licenses ? n.licenses = e.massageLicenses(n.licenses) : (n.id = n.name, n.name = n.translation || n.name, n.versions = e.massageMetadata(n.versions)), n
                }))
            }
        }, {
            key: "massageContentTypes", value: function (e) {
                for (var t = [], n = 0; n < e.libraries.length; n++) {
                    var r = e.libraries[n];
                    t.push({
                        id: r.machineName + " " + r.majorVersion + "." + r.minorVersion,
                        label: r.title,
                        categories: r.categories
                    })
                }
                return t
            }
        }, {
            key: "makeHierarchicalList", value: function (e) {
                for (var t = {}, n = 0; n < e.length; n++) t[e[n].id] = e[n];
                for (var r = 0; r < e.length; r++) if (null !== e[r].parent) {
                    var i = t[e[r].parent];
                    i.children = i.children ? i.children.concat([e[r]]) : [e[r]]
                }
                for (var a = [], o = 0, l = Object.values(t); o < l.length; o++) {
                    var s = l[o];
                    null === s.parent && a.push(s)
                }
                return a
            }
        }, {
            key: "makeHierarchicalContentTypes", value: function (e) {
                for (var t = {}, n = 0; n < e.length; n++) e[n].categories && e[n].categories.length > 0 && e[n].categories.forEach((function (e) {
                    void 0 === t[e] && (t[e] = {id: e, label: e, children: []})
                }));
                for (var r = function (n) {
                    var r = e[n].categories;
                    void 0 !== r && r.length > 0 && r.forEach((function (r) {
                        var i = t[r];
                        i.children = i.children.concat([e[n]])
                    }))
                }, i = 0; i < e.length; i++) r(i);
                return Object.values(t)
            }
        }, {
            key: "getLicense", value: function (t) {
                return e.instance.licenses[t] || (e.instance.licenses[t] = e.instance.get(Me.license, {id: t})), e.instance.licenses[t]
            }
        }, {
            key: "getCachedQueryResults", value: function (t) {
                var n = e.instance.searchCache[t];
                if (n && Ce() < n.expiresAt) return n.promise
            }
        }, {
            key: "search", value: function (t) {
                var n = new FormData;
                if (void 0 !== t.filters) {
                    void 0 !== t.filters.license && (-1 !== t.filters.license.indexOf("modified") && n.append("can_be_modified", 1), -1 !== t.filters.license.indexOf("commercial") && n.append("allows_commercial_use", 1)), void 0 !== t.filters.reviewed && -1 !== t.filters.reviewed.indexOf("reviewed") && n.append("reviewed", 1);
                    var r = {
                        contentTypes: "content_types",
                        disciplines: "disciplines",
                        language: "languages",
                        level: "levels"
                    };
                    for (var i in r) if (r.hasOwnProperty(i) && void 0 !== t.filters[i]) for (var a = t.filters[i], o = 0; o < a.length; o++) n.append(r[i] + "[]", a[o])
                }
                "newest" === t.orderBy && n.append("sort_by", "created_at"), void 0 !== t.page && t.page > 1 && n.append("from", (6 * (t.page - 1)).toString()), void 0 !== t.query && t.query.trim() && n.append("text", t.query);
                var l = new URLSearchParams(n).toString(), s = this.getCachedQueryResults(l);
                if (s) return function () {
                    return s
                };
                var u = new Promise((function (r, i) {
                    if (void 0 === window.H5PIntegration.Hub) return i(new Error("Did you forget to add the Hub integration?"));
                    var a = window.H5PIntegration.Hub.contentSearchUrl;
                    return new Y(a, n, "omit").then((function (e) {
                        r({
                            numResults: e.total,
                            content: e.items,
                            pages: Math.ceil(parseInt(e.total) / 6),
                            page: t.page || 1
                        })
                    })).catch((function (t) {
                        delete e.instance.searchCache[l], i(t)
                    }))
                }));
                return e.instance.searchCache[l] = {promise: u, expiresAt: Ce() + 6e4}, function () {
                    return u
                }
            }
        }]), e
    }(), Te = (n(60), function (e) {
        var t, n = e.title, r = e.itemsPromise, i = e.actionLabel, a = e.onAction, o = e.onSelect, l = e.focused,
            u = e.setFocus;
        return s.a.createElement("div", {className: "h5p-hub-content-selection-list"}, s.a.createElement("div", {className: "h5p-hub-header"}, s.a.createElement("div", {className: "h5p-hub-title"}, n), s.a.createElement("a", {
            className: "h5p-hub-action",
            href: "#",
            onClick: a
        }, i)), s.a.createElement(ve, (t = {
            itemsPromise: r,
            type: "grid",
            visible: !0,
            showPagination: !1,
            onSelect: o,
            setFocus: null,
            focused: l
        }, M()(t, "setFocus", u), M()(t, "title", n), t)))
    });
    Te.propTypes = {
        title: C.a.string.isRequired,
        itemsPromise: C.a.func.isRequired,
        actionLabel: C.a.string.isRequired,
        onAction: C.a.func.isRequired,
        onSelect: C.a.func.isRequired,
        setFocus: C.a.bool,
        focused: C.a.string
    };
    var xe = Te, Ne = n(12), je = n.n(Ne), De = (n(61), n(62), n(13)), ke = n.n(De);
    n(72);

    function Ie(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var Oe = function (e) {
        y()(n, e);
        var t = Ie(n);

        function n() {
            return o()(this, n), t.apply(this, arguments)
        }

        return d()(n, [{
            key: "createTroubleshootingURL", value: function (e) {
                return e ? "https://h5p.org/documentation/troubleshooting#".concat(e) : void 0
            }
        }, {
            key: "render", value: function () {
                var e = this,
                    t = "h5p-hub-message h5p-hub-".concat(this.props.severity) + (this.props.onClose ? " h5p-hub-dismissible" : ""),
                    n = this.props.message;
                n && !Array.isArray(n) && (n = [n]);
                var r = n ? n.map((function (t, n) {
                    var r = t.message || t, i = e.createTroubleshootingURL(t.code);
                    return s.a.createElement("p", {
                        key: n,
                        className: "h5p-hub-message-body"
                    }, s.a.createElement("span", {dangerouslySetInnerHTML: {__html: r}}), i && s.a.createElement("a", {
                        className: "h5p-hub-get-help",
                        target: "_blank",
                        href: i
                    }, Q.get("getHelp")))
                })) : null;
                return s.a.createElement("div", {
                    className: t,
                    role: "alert"
                }, this.props.onClose && s.a.createElement("button", {
                    className: "h5p-hub-message-close",
                    tabIndex: "0",
                    "aria-label": Q.get("Close"),
                    onClick: this.props.onClose
                }), s.a.createElement("div", {className: "h5p-hub-message-content"}, s.a.createElement("h2", null, this.props.title), r), this.props.children)
            }
        }]), n
    }(s.a.Component);
    Oe.propTypes = {
        severity: C.a.oneOf(["info", "warning", "error"]).isRequired,
        title: C.a.string.isRequired,
        message: C.a.oneOfType([C.a.string, C.a.array]),
        onClose: C.a.func,
        children: C.a.oneOfType([C.a.object, C.a.array])
    };
    var Pe = Oe;

    function Ae(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var Re = function (e) {
        y()(n, e);
        var t = Ae(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "closeModal", (function () {
                r.appElement.removeAttribute("aria-hidden"), r.props.onFilterClosed(r.props.id)
            })), M()(h()(r), "calculateLeftPosition", (function () {
                var e = r.props.filterBarRef.current.offsetWidth,
                    t = Math.max(r.props.toggleButtonRef.current.offsetLeft - 50, 0);
                return t + 586.88 > e && (t = Math.max(e - 586.88, 0)), t
            })), M()(h()(r), "calculateTopPosition", (function () {
                var e = r.props.filterBarRef.current;
                return e.offsetTop + e.offsetHeight
            })), M()(h()(r), "handleResize", (function () {
                r.setState({left: r.calculateLeftPosition(), top: r.calculateTopPosition()})
            })), r.appElement = document.getElementById("h5p-hub-reuse-content-container"), r.state = {
                left: r.calculateLeftPosition(),
                top: r.calculateTopPosition()
            }, r
        }

        return d()(n, [{
            key: "componentDidMount", value: function () {
                window.addEventListener("click", this.closeModal), window.addEventListener("resize", this.handleResize)
            }
        }, {
            key: "componentWillUnmount", value: function () {
                window.removeEventListener("click", this.closeModal), window.removeEventListener("resize", this.handleResize)
            }
        }, {
            key: "swallowClicks", value: function (e) {
                e.stopPropagation()
            }
        }, {
            key: "render", value: function () {
                var e = {overlay: {top: this.state.top + "px"}, content: {left: this.state.left + "px"}};
                return s.a.createElement(ke.a, {
                    isOpen: !0,
                    onRequestClose: this.closeModal,
                    contentLabel: this.props.id,
                    parentSelector: function () {
                        return document.getElementById("h5p-hub-reuse-view")
                    },
                    appElement: this.appElement,
                    className: "h5p-hub-filter-dialog",
                    overlayClassName: "h5p-hub-filter-modal",
                    aria: {labelledby: "h5p-hub-header-text"},
                    style: e,
                    shouldCloseOnOverlayClick: !1
                }, s.a.createElement("div", {
                    className: "h5p-hub-filter-dialog-content",
                    onClick: this.swallowClicks
                }, s.a.createElement("div", {
                    className: "h5p-hub-header-text",
                    id: "h5p-hub-filter-modal-header-text"
                }, this.props.dictionary.dialogHeader), this.props.failedDataFetch ? s.a.createElement(Pe, {
                    severity: "error",
                    title: Q.get("failedFetchingData"),
                    message: Q.get("filterErrorMessage")
                }) : this.props.data ? this.props.children : s.a.createElement("div", {className: "h5p-hub-loading"}), s.a.createElement("button", {
                    className: "h5p-hub-apply-filters-button",
                    onClick: this.closeModal
                }, this.props.dictionary.dialogButtonLabel)))
            }
        }]), n
    }(s.a.Component);
    Re.propTypes = {
        id: C.a.string.isRequired,
        data: C.a.array,
        onFilterClosed: C.a.func.isRequired,
        checked: C.a.array.isRequired,
        handleChecked: C.a.func.isRequired,
        dictionary: C.a.object.isRequired,
        toggleButtonRef: C.a.shape({current: C.a.instanceOf(Element)}),
        filterBarRef: C.a.shape({current: C.a.instanceOf(Element)}),
        failedDataFetch: C.a.bool
    };
    var ze = Re, Fe = (n(73), s.a.forwardRef((function (e, t) {
        var n = e.checked, r = e.id, i = e.onClick, a = e.open, o = e.data, l = e.dropdownLabel,
            u = 1 == n.length && 1 == o.length, c = n.length > 0 && !u;
        return s.a.createElement("div", {className: "h5p-hub-filter-button"}, s.a.createElement("button", {
            tabIndex: "-1",
            className: a ? "h5p-hub-open" : u ? "h5p-hub-one-checked" : c ? "h5p-hub-filter-checked" : "",
            onClick: function (e) {
                e.stopPropagation(), i(r)
            },
            ref: t
        }, l, s.a.createElement("div", {className: u ? "h5p-hub-icon h5p-hub-check" : "h5p-hub-icon"}, c && "(".concat(n.length, ")"))))
    })));
    Fe.propTypes = {
        checked: C.a.array,
        id: C.a.string.isRequired,
        onClick: C.a.func.isRequired,
        open: C.a.bool.isRequired,
        data: C.a.array,
        dropdownLabel: C.a.string.isRequired
    };
    var _e = Fe, Ue = (n(74), n(75), s.a.forwardRef((function (e, t) {
        var n = e.id, r = e.label, i = e.checked, a = e.filter, o = e.onChecked, l = e.focused, u = e.checkboxChildren,
            c = e.navigateToChildren, f = e.parent, d = e.descendantsChecked, p = e.tabIndex, h = e.children;
        return s.a.createElement("li", {
            ref: t,
            id: "h5p-hub-" + n,
            key: a + n,
            className: "h5p-hub-checkbox ".concat(i ? "h5p-hub-checked " : "", " ").concat(l ? "h5p-hub-highlighted" : "", " ").concat(u ? "h5p-hub-parent" : ""),
            role: "checkbox",
            "aria-checked": i,
            "aria-label": r,
            onClick: function () {
                return u ? c(n, u) : o(a, n, !i)
            },
            tabIndex: p || "0",
            onKeyDown: function (e) {
                "Enter" !== e.key && " " != e.key || (o(a, n, !i), e.preventDefault())
            }
        }, s.a.createElement("div", {
            className: "h5p-hub-content",
            key: "label" + n
        }, s.a.createElement("div", {
            className: "h5p-hub-icon", onClick: function (e) {
                return u ? function (e, t, n, r) {
                    r.stopPropagation(), o(e, t, n, f)
                }(a, n, !i, e) : {}
            }
        }), s.a.createElement("div", {className: "h5p-hub-label-text"}, h || r, d > 0 && " (".concat(d, ")"))))
    })));
    Ue.propTypes = {
        id: C.a.string.isRequired,
        label: C.a.string.isRequired,
        onChecked: C.a.func.isRequired,
        checked: C.a.bool.isRequired,
        filter: C.a.string.isRequired,
        focused: C.a.bool,
        children: C.a.any,
        checkboxChildren: C.a.array,
        navigateToChildren: C.a.func,
        parent: C.a.string,
        tabIndex: C.a.string,
        descendantsChecked: C.a.any
    };
    var Qe = Ue, Ye = function (e, t) {
        return -1 != t.indexOf(e)
    }, Be = function (e, t, n) {
        return e ? e.filter((function (e) {
            return Ye(e.id, t) && -1 === n.indexOf(e.id)
        })).length : 0
    }, We = s.a.forwardRef((function (e, t) {
        var n = e.items, r = e.onChecked, i = e.checkedParents, a = e.checked, o = e.filter, l = e.focused,
            u = e.navigateToChildren, c = e.parent, f = e.listRefId, d = e.getDescendants, p = e.tabIndex;
        return s.a.createElement("ul", {
            className: "h5p-hub-checkbox-list",
            role: "group",
            "aria-labelledby": o.label,
            ref: t && t[f]
        }, n.map((function (e) {
            return s.a.createElement(Qe, {
                key: c + e.id,
                id: e.id,
                label: e.label,
                checked: Ye(e.id, a),
                filter: o,
                onChecked: r,
                focused: l == e.id,
                checkboxChildren: e.children,
                navigateToChildren: u,
                parent: c,
                descendantsChecked: e.children && Be(d(e), a, i),
                ref: t && t[e.id],
                tabIndex: p
            })
        })))
    }));
    We.propTypes = {
        items: C.a.array,
        onChecked: C.a.func.isRequired,
        checked: C.a.array,
        filter: C.a.string.isRequired,
        focused: C.a.string,
        navigateToChildren: C.a.func,
        parent: C.a.string,
        listRefId: C.a.string,
        tabIndex: C.a.string
    };
    var Ve = We, qe = (n(76), s.a.forwardRef((function (e, t) {
        var n = e.onChecked, r = e.checkedParents, i = e.checked, a = e.filter, o = e.focused, l = e.parent,
            u = e.listRefId, c = e.getDescendants, f = e.tabIndex, d = e.categoryList, p = e.searchValue,
            h = e.categoryRefId, m = function (e) {
                return e.map((function (e) {
                    return s.a.createElement("div", {key: l + e.id}, s.a.createElement(Qe, {
                        key: l + e.id,
                        id: e.id,
                        label: e.label,
                        checked: Ye(e.id, i),
                        filter: a,
                        onChecked: n,
                        focused: o === e.id,
                        parent: l,
                        descendantsChecked: Be(c(e), i, r),
                        ref: t && t[e.id],
                        tabIndex: f
                    }, p.length > 1 && function (e, t) {
                        for (var n = [], r = t.length, i = 0; i < e.length; i++) -1 !== e.slice(i, i + r).toLowerCase().indexOf(t.toLowerCase()) && (n.push(i), i += r);
                        var a = [s.a.createElement("span", {key: "checkbox-span-bold-start"}, e.slice(0, n[0]))];
                        return n.forEach((function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            a.push(s.a.createElement("span", {
                                key: "checkbox-span-" + i,
                                className: "h5p-hub-non-bold"
                            }, e.slice(t, t + r))), n[i + 1] ? a.push(s.a.createElement("span", {key: "checkbox-span-bold-" + i}, e.slice(t + r, n[i + 1]))) : a.push(s.a.createElement("span", {key: "checkbox-span-bold-" + i}, e.slice(t + r))), i += 1
                        })), a.map((function (e) {
                            return e
                        }))
                    }(e.label, p)))
                }))
            };
        return s.a.createElement("ul", {
            className: "h5p-hub-checkbox-list",
            role: "group",
            "aria-labelledby": a.label,
            ref: t && t[u]
        }, d.map((function (e) {
            return s.a.createElement("div", {
                key: "headers-" + e.id,
                className: e.noLine ? "" : "h5p-hub-bottom-line"
            }, s.a.createElement("div", null, null !== e.catNoParent ? m([e.catNoParent]) : null), e.children && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                key: e,
                ref: t[h + e.id],
                className: "h5p-hub-category-header"
            }, "".concat(Q.get("in"), " ").concat(e.label)), m(e.children)))
        })))
    })));
    qe.propTypes = {
        onChecked: C.a.func.isRequired,
        checked: C.a.array,
        filter: C.a.string.isRequired,
        focused: C.a.string,
        parent: C.a.string,
        listRefId: C.a.string.isRequired,
        tabIndex: C.a.string,
        categoryRefId: C.a.string.isRequired,
        checkedParents: C.a.array,
        getDescendants: C.a.func.isRequired,
        categoryList: C.a.array.isRequired,
        searchValue: C.a.string.isRequired
    };
    var He = qe, Ge = (n(77), s.a.forwardRef((function (e, t) {
        var n = e.value, r = e.onSearch, i = e.onNavigateVertical, a = e.onSelect, o = e.placeholder, l = e.onClick,
            u = e.onNavigateSideway, c = e.onFocus, f = e.inSearch;
        return s.a.createElement("div", {
            onMouseDown: l,
            className: "h5p-hub-search-button"
        }, s.a.createElement("div", {
            className: "h5p-hub-search-field",
            role: "search"
        }, s.a.createElement("input", {
            className: "h5p-hub-filter-search-bar",
            type: "text",
            value: n,
            "aria-label": o,
            placeholder: o,
            ref: t,
            onKeyDown: function (e) {
                return function (e) {
                    switch (e.key) {
                        case"ArrowUp":
                            i(-1), e.preventDefault();
                            break;
                        case"ArrowDown":
                            i(1), e.preventDefault();
                            break;
                        case"ArrowRight":
                            f || (u(1), e.preventDefault());
                            break;
                        case"ArrowLeft":
                            f || (u(-1), e.preventDefault());
                            break;
                        case"Enter":
                            a(), e.preventDefault()
                    }
                }(e)
            },
            onChange: function (e) {
                var t = e.target;
                r(t.value)
            },
            onFocus: c
        }), s.a.createElement("div", {className: "h5p-hub-icon-arrow"})))
    })));
    Ge.propTypes = {
        value: C.a.string,
        onSearch: C.a.func.isRequired,
        onNavigateVertical: C.a.func.isRequired,
        onNavigateSideway: C.a.func.isRequired,
        onSelect: C.a.func.isRequired,
        placeholder: C.a.string.isRequired,
        onClick: C.a.func.isRequired,
        onFocus: C.a.func,
        inSearch: C.a.bool
    }, Ge.defaultProps = {
        onNavigateVertical: function () {
        }, onNavigateSideway: function () {
        }, onSelect: function () {
        }
    };
    var Ze = Ge;
    n(78);

    function Ke(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Xe(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xe(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0, l = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return o = e.done, e
            }, e: function (e) {
                l = !0, a = e
            }, f: function () {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (l) throw a
                }
            }
        }
    }

    function Xe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Je(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Je(Object(n), !0).forEach((function (t) {
                M()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function et(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var tt = function (e) {
        y()(n, e);
        var t = et(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "handleClearSearch", (function () {
                r.setState({
                    checkboxElements: r.props.items.sort(r.compare),
                    searchValue: "",
                    inSearch: !1,
                    categoryList: [],
                    dropdownOpen: !0
                }), r.searchRef.current.focus()
            })), M()(h()(r), "handleOnSearch", (function (e) {
                if ("" === e) r.handleClearSearch(); else if (1 === e.length) r.setState({
                    searchValue: e,
                    checkboxElements: r.props.items,
                    dropdownOpen: !0,
                    parent: [],
                    inSearch: !0,
                    focused: null,
                    categoryList: []
                }); else {
                    var t = [], n = [];
                    r.props.category ? (n = r.makeCategorySearchList(e)).forEach((function (e) {
                        e.catNoParent && t.push(e.catNoParent), t.push.apply(t, e.children)
                    })) : t = r.leafs && r.leafs.filter((function (t) {
                        return RegExp(e.toUpperCase()).test(t.label.toUpperCase())
                    })).sort(r.compare), r.setState({
                        checkboxElements: t,
                        searchValue: e,
                        dropdownOpen: !0,
                        parent: [],
                        inSearch: !0,
                        focused: null,
                        categoryList: n
                    })
                }
            })), M()(h()(r), "makeCategorySearchList", (function (e) {
                for (var t = [], n = 0; n < r.props.items.length; n++) {
                    var i = r.props.items[n],
                        a = RegExp(e.toUpperCase()).test(i.label.toUpperCase()) && r.getCheckboxFromId(i.id, r.props.items),
                        o = [];
                    i.children && (o = i.children.filter((function (t) {
                        return RegExp(e.toUpperCase()).test(t.label.toUpperCase())
                    }))), o.length > 0 ? t.push({
                        id: i.id,
                        label: i.label,
                        children: o,
                        catNoParent: a ? i : null
                    }) : a && t.push({id: i.id, label: i.label, catNoParent: i})
                }
                for (var l = 0; l < t.length; l++) {
                    var s = t[l];
                    t[l + 1] && s.children && -1 !== s.children.map((function (e) {
                        return e.id
                    })).indexOf(t[l + 1].id) && (t[l] = $e($e({}, s), {}, {noLine: !0}))
                }
                return t[t.length - 1] = $e($e({}, t[t.length - 1]), {}, {noLine: !0}), t
            })), M()(h()(r), "handleSearchFocus", (function () {
                r.click || r.state.dropdownOpen || (r.click = setTimeout((function () {
                    r.setState({dropdownOpen: !0}), r.click = null
                }), 100))
            })), M()(h()(r), "handleSearchClick", (function () {
                r.click || (r.click = setTimeout((function () {
                    r.setState((function (e) {
                        return {dropdownOpen: r.props.dropdownAlwaysOpen || !e.dropdownOpen}
                    })), r.click = null
                }), 100))
            })), M()(h()(r), "handleChecked", (function (e, t, n) {
                if (r.state.dropdownOpen && t && r.state.checkboxElements[r.indexOfId(t)]) {
                    if (r.setState({setFocus: !0, focused: t}), r.state.checkboxElements[r.indexOfId(t)].children) {
                        var i = r.getCheckboxFromId(t, r.parents), a = r.getDescendants(i).map((function (e) {
                            return e.id
                        }));
                        r.props.handleChecked(e, [t].concat(je()(a)), n)
                    } else r.props.handleChecked(e, t, n);
                    r.searchRef.current.focus()
                }
            })), M()(h()(r), "setParentsChecked", (function () {
                var e = [];
                r.parents.forEach((function (t) {
                    return r.checkedOf(r.getDescendants(t), r.props.checked) ? e.push(t.id) : {}
                })), r.setState({checkedParents: e})
            })), M()(h()(r), "handleNavigateVertical", (function (e) {
                var t = r.indexOfId(r.state.focused) + e, n = r.state.checkboxElements[t];
                if (r.state.dropdownOpen && t !== r.state.checkboxElements.length && void 0 === n) r.setState({
                    focused: r.state.checkboxElements.map((function (e) {
                        return e.id
                    }))[0]
                }), r.checkboxRefs[r.listRefId].current.scrollTop = 0; else if (r.state.dropdownOpen && t !== r.state.checkboxElements.length) {
                    r.setState({focused: n.id});
                    var i = r.checkboxRefs[r.state.checkboxElements[0].id].current.offsetHeight,
                        a = r.checkboxRefs[r.listRefId].current.offsetHeight, o = r.state.parent ? i : 0, l = 0, s = 0;
                    if (r.state.categoryList.length > 0) {
                        l = r.checkboxRefs[r.categoryRefId + r.state.categoryList[0].id].current.offsetHeight;
                        var u, c = 0, f = Ke(r.state.categoryList);
                        try {
                            for (f.s(); !(u = f.n()).done;) {
                                var d = u.value;
                                if (d.catNoParent && (c += 1), c > t) break;
                                c += d.children.length, s += 1
                            }
                        } catch (e) {
                            f.e(e)
                        } finally {
                            f.f()
                        }
                    }
                    var p = o + (t + 1) * i + s * l - a;
                    r.checkboxRefs[r.listRefId].current.scrollTop = p
                }
            })), M()(h()(r), "handleNavigateSideway", (function (e) {
                r.state.dropdownOpen && -1 == e && r.state.parent ? r.navigateToParent() : r.state.dropdownOpen && 1 == e && r.state.focused && r.getCheckboxFromId(r.state.focused, r.parents) && r.navigateToChildren(r.state.focused, r.getCheckboxFromId(r.state.focused, r.parents).children)
            })), M()(h()(r), "navigateToChildren", (function (e, t) {
                r.setState({
                    checkboxElements: t,
                    parent: [].concat(je()(r.state.parent), [e])
                }), r.searchRef.current.focus()
            })), M()(h()(r), "navigateToParent", (function () {
                var e = r.state.parent[r.state.parent.length - 2],
                    t = r.getCheckboxFromId(e, r.parents) && r.getCheckboxFromId(e, r.parents).children,
                    n = r.state.parent, i = n.pop();
                r.setState({
                    parent: n,
                    checkboxElements: t || r.props.items.sort(r.compare),
                    focused: i
                }), r.searchRef.current.focus()
            })), M()(h()(r), "compare", (function (e, t) {
                var n = e.label.toUpperCase(), r = t.label.toUpperCase();
                return n < r ? -1 : n > r ? 1 : void 0
            })), M()(h()(r), "getDescendants", (function (e) {
                if (null === e) return [];
                for (var t = [], n = [e]; n.length > 0;) {
                    var r = n.pop();
                    r && r.children && (t.concat(r.children), r.children.forEach((function (e) {
                        t.push(e), n.push(e)
                    })))
                }
                return t
            })), M()(h()(r), "setParentsAndLeafs", (function (e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    n.children ? (r.parents.push(n), r.setParentsAndLeafs(n.children)) : null === r.getCheckboxFromId(n.id, r.leafs) && r.leafs.push(n)
                }
            })), M()(h()(r), "getCheckboxFromId", (function (e, t) {
                for (var n = 0; n < t.length; n++) if (t[n].id === e) return t[n];
                return null
            })), M()(h()(r), "indexOfId", (function (e) {
                return r.state.checkboxElements.map((function (e) {
                    return e.id
                })).indexOf(e)
            })), r.state = {
                checkboxElements: r.props.items.sort(r.compare),
                searchValue: "",
                dropdownOpen: !1,
                setFocus: !1,
                focused: null,
                checkedParents: [],
                parent: [],
                inSearch: !1,
                categoryList: []
            }, r.searchRef = s.a.createRef(), r.leafs = [], r.allParents = [], r.parents = [], r.checkboxRefs = {}, r.listRefId = "list", r.categoryRefId = "category", r.checkboxRefs[r.listRefId] = s.a.createRef(), r.setParentsAndLeafs(r.props.items), r.parents.forEach((function (e) {
                r.checkboxRefs[e.id] = s.a.createRef(), r.checkboxRefs[r.categoryRefId + e.id] = s.a.createRef()
            })), r.leafs.forEach((function (e) {
                return r.checkboxRefs[e.id] = s.a.createRef()
            })), r
        }

        return d()(n, [{
            key: "componentDidMount", value: function () {
                this.setParentsChecked(), this.props.dropdownAlwaysOpen && this.setState({dropdownOpen: !0})
            }
        }, {
            key: "componentWillUnmount", value: function () {
                this.setState({parent: [], focused: null, inSearch: !1, dropdownOpen: this.props.dropdownAlwaysOpen})
            }
        }, {
            key: "componentDidUpdate", value: function (e) {
                e.checked !== this.props.checked && this.setParentsChecked([], !1)
            }
        }, {
            key: "checkedOf", value: function (e, t) {
                return Array.isArray(e) && t ? !!t && e.filter((function (e) {
                    return -1 !== t.indexOf(e.id)
                })).length > 0 : -1 != this.props.checked.indexOf(e) || -1 !== this.state.checkedParents.indexOf(e)
            }
        }, {
            key: "render", value: function () {
                var e = this;
                return s.a.createElement("div", {className: "h5p-hub-search-filter"}, s.a.createElement(Ze, {
                    ref: this.searchRef,
                    value: this.state.searchValue,
                    onSearch: this.handleOnSearch,
                    placeholder: this.props.dictionary.searchPlaceholder,
                    onClick: this.handleSearchClick,
                    onNavigateVertical: this.handleNavigateVertical,
                    onSelect: function () {
                        return e.handleChecked(e.props.filter, e.state.focused, !e.checkedOf(e.state.focused), e.state.parent[e.state.parent.length - 1])
                    },
                    onNavigateSideway: this.handleNavigateSideway,
                    onFocus: this.handleSearchFocus,
                    inSearch: this.state.inSearch
                }), this.state.parent.length > 0 && this.state.dropdownOpen && s.a.createElement("div", {className: "h5p-hub-navigate-parent"}, s.a.createElement("button", {
                    onClick: this.navigateToParent,
                    "aria-label": Q.get("navigateToParent")
                }), this.getCheckboxFromId(this.state.parent[this.state.parent.length - 1], this.parents).label), this.state.searchValue.length > 0 && s.a.createElement("button", {
                    onClick: this.handleClearSearch,
                    className: "h5p-hub-clear-button"
                }), this.state.dropdownOpen && this.props.items && (!this.props.category || this.state.searchValue.length < 2) && s.a.createElement(Ve, {
                    onChecked: this.handleChecked,
                    items: this.state.checkboxElements,
                    checked: this.props.checked.concat(this.state.checkedParents),
                    checkedParents: this.state.checkedParents,
                    filter: this.props.filter,
                    focused: this.state.focused,
                    navigateToChildren: this.navigateToChildren,
                    parent: this.state.parent[this.state.parent.length - 1],
                    ref: this.checkboxRefs,
                    listRefId: this.listRefId,
                    getDescendants: this.getDescendants,
                    tabIndex: "-1"
                }), this.state.dropdownOpen && this.props.items && this.props.category && (this.state.categoryList.length > 0 || this.state.categoryList.topCategories) && this.state.inSearch && s.a.createElement(He, {
                    onChecked: this.handleChecked,
                    checked: this.props.checked.concat(this.state.checkedParents),
                    checkedParents: this.state.checkedParents,
                    filter: this.props.filter,
                    focused: this.state.focused,
                    ref: this.checkboxRefs,
                    listRefId: this.listRefId,
                    getDescendants: this.getDescendants,
                    tabIndex: "-1",
                    categoryList: this.state.categoryList,
                    searchValue: this.state.searchValue,
                    categoryRefId: this.categoryRefId
                }))
            }
        }]), n
    }(s.a.Component);
    tt.propTypes = {
        items: C.a.array,
        handleChecked: C.a.func.isRequired,
        checked: C.a.array,
        filter: C.a.string.isRequired,
        dictionary: C.a.object.isRequired,
        category: C.a.bool,
        dropdownAlwaysOpen: C.a.bool
    };
    var nt = tt;

    function rt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function it(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? rt(Object(n), !0).forEach((function (t) {
                M()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rt(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function at(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var ot = function (e) {
        y()(n, e);
        var t = at(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "anyChecked", (function () {
                var e = !1;
                return Object.keys(r.props.checked).forEach((function (t) {
                    r.props.checked[t].length > 0 && (e = !0)
                })), e
            })), M()(h()(r), "clearFilters", (function () {
                r.setState({showClearFilters: !1}), r.props.setChecked({}), r.props.applyFilters({})
            })), M()(h()(r), "handleFilterButtonClicked", (function (e) {
                var t = r.state.openFilter === e;
                r.setState({
                    openFilter: t ? "" : e,
                    showClearFilters: r.anyChecked()
                }), t && r.props.applyFilters(r.props.checked)
            })), M()(h()(r), "handleFilterClosed", (function (e) {
                var t = e.split("-").pop();
                r.state.openFilter.split("-").pop() === t && r.setState({
                    openFilter: "",
                    showClearFilters: r.anyChecked()
                }), r.props.applyFilters(r.props.checked)
            })), M()(h()(r), "handleChecked", (function (e, t, n) {
                if (Array.isArray(t)) {
                    if (null == r.props.checked[e] && null != t) r.props.setChecked(it(it({}, r.props.checked), {}, M()({}, e, t))); else if (null != t) {
                        var i = n ? r.props.checked[e].filter((function (e) {
                            return -1 == t.indexOf(e)
                        })).concat(t) : r.props.checked[e].filter((function (e) {
                            return -1 == t.indexOf(e)
                        }));
                        r.props.setChecked(it(it({}, r.props.checked), {}, M()({}, e, i)))
                    }
                } else if (null == r.props.checked[e] && null != t) r.props.setChecked(it(it({}, r.props.checked), {}, M()({}, e, [t]))); else if (null != t) {
                    var a = n ? [].concat(je()(r.props.checked[e]), [t]) : r.props.checked[e].filter((function (e) {
                        return e != t
                    }));
                    r.props.setChecked(it(it({}, r.props.checked), {}, M()({}, e, a)))
                }
            })), M()(h()(r), "findFilterById", (function (e) {
                for (var t = e.replace("h5p-hub-filter-button-", ""), n = 0; n < r.props.filters.length; n++) if (r.props.filters[n].id === t) return r.props.filters[n]
            })), r.state = {
                openFilter: "",
                showClearFilters: !1
            }, r.filterBarRef = s.a.createRef(), r.filterButtons = {}, r.props.filters.forEach((function (e) {
                r.filterButtons[e.id] = s.a.createRef()
            })), r
        }

        return d()(n, [{
            key: "render", value: function () {
                var e = this, t = this.props.filters.map((function (t) {
                    return s.a.createElement("li", {
                        key: t.id,
                        id: "h5p-hub-filter-button-" + t.id
                    }, s.a.createElement(_e, {
                        id: "h5p-hub-filter-button-" + t.id,
                        dropdownLabel: t.dictionary.dropdownLabel,
                        onClick: e.handleFilterButtonClicked,
                        checked: e.props.checked[t.id] ? e.props.checked[t.id] : [],
                        open: e.state.openFilter == t.id,
                        data: e.props.metaData[t.id],
                        ref: e.filterButtons[t.id]
                    }))
                })), n = this.findFilterById(this.state.openFilter);
                return s.a.createElement("div", {
                    className: "h5p-hub-filter-bar",
                    ref: this.filterBarRef
                }, s.a.createElement("div", {
                    className: "h5p-hub-filter-label",
                    id: "h5p-hub-content-hub-filter-label"
                }, this.props.label), s.a.createElement("ul", {
                    className: "h5p-hub-filter-buttons",
                    "aria-labelledby": "h5p-hub-content-hub-filter-label"
                }, s.a.createElement(H, {
                    selected: this.open,
                    onChange: this.handleFilterButtonClicked
                }, t)), n && s.a.createElement(ze, {
                    id: "h5p-hub-" + n.id,
                    key: n.id,
                    dictionary: n.dictionary,
                    data: this.props.metaData[n.id],
                    onFilterClosed: this.handleFilterClosed,
                    checked: this.props.checked[n.id] ? this.props.checked[n.id] : [],
                    handleChecked: this.handleChecked,
                    toggleButtonRef: this.filterButtons[n.id],
                    filterBarRef: this.filterBarRef,
                    failedDataFetch: this.props.failedDataFetch[n.id]
                }, "checkboxList" === n.type && this.props.metaData[n.id] && s.a.createElement(Ve, {
                    onChecked: this.handleChecked,
                    items: this.props.metaData[n.id],
                    checked: this.props.checked[n.id] ? this.props.checked[n.id] : [],
                    filter: n.id
                }), "search" === n.type && this.props.metaData[n.id] && s.a.createElement(nt, {
                    handleChecked: this.handleChecked,
                    items: this.props.metaData[n.id],
                    checked: this.props.checked[n.id] ? this.props.checked[n.id] : [],
                    filter: n.id,
                    dictionary: n.dictionary,
                    dropdownAlwaysOpen: !0
                }), "categorySearch" === n.type && this.props.metaData[n.id] && s.a.createElement(nt, {
                    handleChecked: this.handleChecked,
                    items: this.props.metaData[n.id],
                    checked: this.props.checked[n.id] ? this.props.checked[n.id] : [],
                    filter: n.id,
                    dictionary: n.dictionary,
                    category: !0,
                    dropdownAlwaysOpen: !0
                })), this.state.showClearFilters && s.a.createElement("div", {className: "h5p-hub-clear-filters"}, s.a.createElement("button", {
                    onClick: this.clearFilters,
                    "aria-label": Q.get("clearFilters")
                }, Q.get("clearFilters"))))
            }
        }]), n
    }(s.a.Component);
    ot.propTypes = {
        label: C.a.string.isRequired,
        filters: C.a.array.isRequired,
        applyFilters: C.a.func.isRequired,
        metaData: C.a.object.isRequired,
        failedDataFetch: C.a.object.isRequired,
        checked: C.a.object.isRequired,
        setChecked: C.a.func.isRequired
    };
    var lt = ot, st = (n(79), function (e) {
        var t = e.label, n = Object(l.useRef)(null);
        return s.a.createElement(ke.a, {
            isOpen: !0,
            contentLabel: t,
            className: "h5p-hub-downloading-modal",
            overlayClassName: "h5p-hub-downloading-modal-overlay",
            aria: {label: t},
            appElement: document.getElementById("h5p-hub-panel"),
            parentSelector: function () {
                return document.getElementById("h5p-hub")
            },
            onAfterOpen: function () {
                n.current.focus()
            }
        }, s.a.createElement("img", {
            className: "h5p-hub-spinner",
            src: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIG92ZXJmbG93PSJ2aXNpYmxlIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGc+PHBhdGggeG1sbnM6ZGVmYXVsdD0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJjaXJjbGUtby1ub3RjaCIgZD0iTTIxLjAxLDEyYzAuMDItMS40Ni0wLjMyLTIuOS0xLTQuMmMtMS4zMy0yLjU2LTMuOC00LjMyLTYuNjUtNC43NXYyLjM4YzEuNSwwLjI5LDIuODYsMS4xMSwzLjgyLDIuMyAgYzEuNTgsMS45LDEuOTcsNC41MywxLDYuODFjLTAuNjcsMS42MS0xLjk0LDIuODgtMy41NSwzLjU1Yy0xLjY1LDAuNzEtMy41MiwwLjcxLTUuMTcsMGMtMS42MS0wLjY3LTIuODgtMS45NC0zLjU1LTMuNTUgIGMtMC45Ny0yLjI4LTAuNTgtNC45MSwxLTYuODFjMC45Ni0xLjE5LDIuMzItMi4wMSwzLjgyLTIuM1YzLjA1QzcuODUsMy40NSw1LjM1LDUuMjIsNC4wMSw3LjhjLTEuMjMsMi4zOC0xLjM0LDUuMTgtMC4zLDcuNjUgIGMwLjksMi4xNywyLjYzLDMuOSw0LjgsNC43OWMyLjI0LDAuOTUsNC43NiwwLjk1LDcsMGMyLjE2LTAuOSwzLjg4LTIuNjIsNC43OC00Ljc4QzIwLjc2LDE0LjM3LDIxLDEzLjE5LDIxLjAxLDEyTDIxLjAxLDEyeiIgc3R5bGU9ImZpbGw6IHJnYigxOCwgMTgsIDE4KTsiIHZlY3Rvci1lZmZlY3Q9Im5vbi1zY2FsaW5nLXN0cm9rZSIvPjwvZz48L3N2Zz4=",
            "aria-hidden": "true"
        }), s.a.createElement("span", {className: "h5p-hub-downloading-message", tabIndex: "-1", ref: n}, t))
    });
    st.propTypes = {label: C.a.string.isRequired};
    var ut = st;
    n(80);

    function ct(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var ft = function (e) {
        y()(n, e);
        var t = ct(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "handleInput", (function (e) {
                var t = e.target;
                t.value !== r.state.value && (r.setState({value: t.value}), r.props.auto && !r.searchTimer && (r.searchTimer = setTimeout((function () {
                    r.props.onSearch(t.value), r.searchTimer = null
                }), 40)))
            })), M()(h()(r), "handleKeyDown", (function (e) {
                switch (e.which) {
                    case 38:
                        r.props.onNavigate(-1), e.preventDefault();
                        break;
                    case 40:
                        r.props.onNavigate(1), e.preventDefault();
                        break;
                    case 13:
                        r.props.auto ? r.props.onSelect() : r.props.onSearch(e.target.value), e.preventDefault()
                }
            })), M()(h()(r), "handleClick", (function () {
                r.props.onSearch(r.input.value)
            })), r.state = {value: ""}, r
        }

        return d()(n, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.value !== this.state.value && this.setState({value: e.value}), e.setFocus !== this.props.setFocus && this.setState({focusOnRender: e.setFocus})
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.state.focusOnRender && (delete this.state.focusOnRender, this.input.focus())
            }
        }, {
            key: "render", value: function () {
                var e = this;
                return s.a.createElement("div", {
                    className: "h5p-hub-search-wrapper",
                    role: "search"
                }, s.a.createElement("div", {className: "h5p-hub-border-wrap"}, s.a.createElement("input", {
                    className: "h5p-hub-search-bar",
                    type: "text",
                    defaultValue: this.state.value,
                    "aria-label": this.props.placeholder,
                    placeholder: this.props.placeholder,
                    onInput: this.props.instantSearch ? this.handleInput : function () {
                    },
                    onKeyDown: function (t) {
                        return e.handleKeyDown(t)
                    },
                    ref: function (t) {
                        return e.input = t
                    }
                }), s.a.createElement("div", {className: "h5p-hub-icon-search", onClick: this.handleClick})))
            }
        }]), n
    }(s.a.Component);
    ft.propTypes = {
        value: C.a.string,
        auto: C.a.bool.isRequired,
        setFocus: C.a.bool,
        onSearch: C.a.func.isRequired,
        onNavigate: C.a.func.isRequired,
        onSelect: C.a.func.isRequired,
        instantSearch: C.a.bool,
        placeholder: C.a.string.isRequired
    }, ft.defaultProps = {
        instantSearch: !1, onNavigate: function () {
        }, onSelect: function () {
        }, auto: !1, setFocus: !1
    };
    var dt = ft;
    n(81);

    function pt(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var ht = function (e) {
        y()(n, e);
        var t = pt(n);

        function n() {
            return o()(this, n), t.apply(this, arguments)
        }

        return d()(n, [{
            key: "render", value: function () {
                var e = this, t = this.props.type || "div";
                return s.a.createElement(t, i()({}, this.props.buttonProps, {
                    role: "button",
                    tabIndex: "0",
                    onClick: function () {
                        return e.props.onButtonClick()
                    },
                    onKeyPress: function (t) {
                        return P(t, e.props.onButtonClick)
                    }
                }), this.props.children)
            }
        }]), n
    }(s.a.Component);
    ht.propTypes = {onButtonClick: C.a.func, buttonProps: C.a.object, type: C.a.string};
    var mt = ht;
    n(82);

    function yt(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var gt = function (e) {
        y()(n, e);
        var t = yt(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "closeModal", (function () {
                document.getElementById(r.props.appElementId).removeAttribute("aria-hidden"), r.props.onClose()
            })), r
        }

        return d()(n, [{
            key: "render", value: function () {
                var e = this, t = {className: "h5p-hub-lightbox-close", "aria-label": Q.get("close")};
                return s.a.createElement(ke.a, {
                    isOpen: !0,
                    onRequestClose: this.closeModal,
                    contentLabel: this.props.label,
                    className: "h5p-hub-lightbox-inner ".concat(this.props.className),
                    overlayClassName: "h5p-hub-lightbox",
                    aria: this.props.aria,
                    appElement: document.getElementById(this.props.appElementId),
                    parentSelector: function () {
                        return document.getElementById(e.props.parentId)
                    }
                }, s.a.createElement(mt, {buttonProps: t, onButtonClick: this.closeModal}), this.props.children)
            }
        }]), n
    }(s.a.Component);
    gt.propTypes = {
        onClose: C.a.func.isRequired,
        aria: C.a.shape({label: C.a.string, labelledby: C.a.string, describedby: C.a.string}),
        className: C.a.string.isRequired,
        parentId: C.a.string.isRequired,
        appElementId: C.a.string.isRequired
    };
    var bt = gt;
    n(83);

    function vt(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var wt = function (e) {
        y()(n, e);
        var t = vt(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "onWindowResized", (function () {
                if (r.carousel) {
                    for (var e = r.carousel.offsetWidth, t = 5, n = 0; n < Lt.length; n++) if (e < Lt[n].breakpoint) {
                        t = Lt[n].imagesToShow;
                        break
                    }
                    r.state.imagesToShow != t && r.setState({imagesToShow: t, offset: 0, selected: 0})
                }
            })), M()(h()(r), "handleImageSelected", (function (e) {
                r.props.onImageSelect && r.props.onImageSelect(e)
            })), M()(h()(r), "previousSlide", (function () {
                r.setState((function (e) {
                    var t = e.offset - 1;
                    if (t >= 0) return {offset: t, selected: t}
                }))
            })), M()(h()(r), "nextSlide", (function () {
                r.setState((function (e, t) {
                    var n = e.offset + 1;
                    if (n < t.images.length) return {offset: n, selected: n}
                }))
            })), M()(h()(r), "handleGlobalKeyDown", (function (e) {
                39 === e.which ? r.nextSlide() : 37 === e.which && r.previousSlide()
            })), r.state = {
                imagesToShow: r.props.imagesToShow || 5,
                offset: r.props.selected || 0,
                selected: r.props.selected || 0,
                modalIsOpen: !1,
                focusOnRender: !1
            }, r
        }

        return d()(n, [{
            key: "componentDidMount", value: function () {
                this.props.imagesToShow || window.addEventListener("resize", this.onWindowResized)
            }
        }, {
            key: "componentWillUnmount", value: function () {
                this.props.imagesToShow || window.removeEventListener("resize", this.onWindowResized)
            }
        }, {
            key: "shouldComponentUpdate", value: function (e, t) {
                return !(this.state.focusOnRender && !t.focusOnRender)
            }
        }, {
            key: "moveFocus", value: function (e) {
                var t = this;
                this.setState((function (n) {
                    var r = n.selected + e;
                    if (r >= 0 && r < t.props.images.length) {
                        var i = n.offset;
                        return r < n.offset ? i = n.offset - 1 : r >= n.offset + n.imagesToShow && (i = n.offset + 1), {
                            selected: r,
                            focusOnRender: !0,
                            offset: i
                        }
                    }
                }))
            }
        }, {
            key: "componentWillReceiveProps", value: function (e) {
                this.setState({selected: e.selected || 0, offset: 0})
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.state.focusOnRender && (this.items[this.state.selected].focus(), this.scroller.scrollLeft = 0, this.setState({focusOnRender: !1}))
            }
        }, {
            key: "handleKeyDown", value: function (e, t) {
                if (!e.defaultPrevented) {
                    var n = !1;
                    switch (e.which) {
                        case 37:
                        case 38:
                            this.moveFocus(-1), n = !0;
                            break;
                        case 39:
                        case 40:
                            this.moveFocus(1), n = !0;
                            break;
                        case 32:
                        case 13:
                            this.handleImageSelected(t), n = !0
                    }
                    n && (e.stopPropagation(), e.preventDefault())
                }
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.images;
                if (!t || !t.length) return null;
                var n = this.state.imagesToShow, r = t.length, i = {width: 100 / r + "%"}, a = 100 * r / n,
                    o = {width: "".concat(a, "%"), marginLeft: "-".concat(this.state.offset * (a / r), "%")};
                this.items = [];
                var l = t.map((function (t, n) {
                        return s.a.createElement("li", {
                            key: n,
                            style: i,
                            tabIndex: n === e.state.selected ? 0 : -1,
                            onKeyDown: function (t) {
                                return e.handleKeyDown(t, n)
                            },
                            onClick: function () {
                                return e.handleImageSelected(n)
                            },
                            ref: function (t) {
                                return t ? e.items.push(t) : void 0
                            }
                        }, s.a.createElement("img", {
                            src: t.url,
                            alt: t.alt,
                            className: e.props.onImageSelect ? "h5p-hub-selectable" : ""
                        }))
                    })), u = 0 === this.state.offset, c = this.state.imagesToShow + this.state.offset >= r,
                    f = r > this.state.imagesToShow;
                return s.a.createElement("div", {
                    className: "h5p-hub-carousel",
                    role: "region",
                    "aria-label": Q.get("screenshots"),
                    ref: function (t) {
                        return e.carousel = t
                    },
                    onKeyDown: this.handleGlobalKeyDown
                }, f && s.a.createElement(Mt, {
                    type: "prev",
                    label: Q.get("previousImage"),
                    onClick: this.previousSlide,
                    disabled: u
                }), s.a.createElement("nav", {
                    className: "h5p-hub-scroller", ref: function (t) {
                        return e.scroller = t
                    }
                }, s.a.createElement("ul", {
                    style: o,
                    onTransitionEnd: O
                }, l)), f && s.a.createElement(Mt, {
                    type: "next",
                    label: Q.get("nextImage"),
                    onClick: this.nextSlide,
                    disabled: c
                }), this.props.showProgress && s.a.createElement("div", {
                    className: "h5p-hub-progress",
                    role: "alert"
                }, Q.get("imageLightBoxProgress").replace(":num", this.state.offset + 1).replace(":total", r)))
            }
        }]), n
    }(s.a.Component), Lt = [{breakpoint: 576, imagesToShow: 2}, {breakpoint: 768, imagesToShow: 3}, {
        breakpoint: 992,
        imagesToShow: 4
    }], Mt = function (e) {
        var t = e.onClick, n = e.type, r = e.disabled, i = e.label;
        return s.a.createElement("button", {
            className: "h5p-hub-navigation h5p-hub-" + n,
            "aria-disabled": r,
            "aria-label": i,
            disabled: r,
            onClick: t
        })
    };
    wt.propTypes = {
        onImageSelect: C.a.func,
        imagesToShow: C.a.number,
        showProgress: C.a.bool.isRequired,
        selected: C.a.number,
        images: C.a.arrayOf(C.a.shape({url: I, alt: I})).isRequired
    };
    var Et = wt;
    n(84);

    function Ct(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var St = function (e) {
        y()(n, e);
        var t = Ct(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "handleToggle", (function (e) {
                e.preventDefault(), r.setState({expanded: !r.state.expanded})
            })), M()(h()(r), "handleKeyPress", (function (e) {
                32 === e.which && r.handleToggle(e)
            })), r.state = {expanded: !1}, r
        }

        return d()(n, [{
            key: "render", value: function () {
                var e = this.props.text;
                if (!e) return null;
                var t = e.length > this.props.maxLength, n = t ? e.substr(0, this.props.maxLength) : e,
                    r = t ? e.substr(this.props.maxLength) : "";
                return t && !this.state.expanded && (n += "…"), s.a.createElement("p", {className: "small h5p-read-more"}, s.a.createElement("span", {tabIndex: "-1"}, n), t && [s.a.createElement("span", {
                    key: "part-two",
                    tabIndex: "-1",
                    className: this.state.expanded ? "" : "h5p-hub-hidden"
                }, r), s.a.createElement("a", {
                    href: "#",
                    key: "button",
                    className: "h5p-hub-link " + (this.state.expanded ? "h5p-hub-read-less" : "h5p-hub-read-more"),
                    onClick: this.handleToggle,
                    onKeyPress: this.handleKeyPress
                }, Q.get(this.state.expanded ? "readLess" : "readMore"))])
            }
        }]), n
    }(s.a.Component);
    n(85);

    function Tt(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var xt = function (e) {
        y()(n, e);
        var t = Tt(n);

        function n(e) {
            var r;
            return o()(this, n), (r = t.call(this, e)).state = {expanded: e.expanded}, r
        }

        return d()(n, [{
            key: "handleToggle", value: function (e) {
                this.setState({expanded: this.state.expanded === e.props.id ? void 0 : e.props.id})
            }
        }, {
            key: "render", value: function () {
                var e = this, t = s.a.Children.map(this.props.children, (function (t) {
                    var n = {className: "h5p-hub-accordion-toggler", "aria-expanded": e.state.expanded === t.props.id};
                    return s.a.createElement("div", null, s.a.createElement("dt", {
                        "aria-level": "2",
                        role: "heading",
                        className: "h5p-hub-accordion-heading"
                    }, s.a.createElement(mt, {
                        buttonProps: n, onButtonClick: function () {
                            return e.handleToggle(t)
                        }
                    }, s.a.createElement("span", {className: "h5p-hub-icon-accordion-arrow"}), s.a.createElement("span", null, t.props.header))), s.a.createElement("dl", {
                        role: "region",
                        className: "h5p-hub-accordion-region" + (e.state.expanded == t.props.id ? "" : " hidden")
                    }, s.a.createElement("div", {className: "h5p-hub-panel-body"}, t)))
                }));
                return s.a.createElement("dl", {className: "h5p-hub-accordion"}, t)
            }
        }]), n
    }(s.a.Component), Nt = (n(86), function (e) {
        var t = e.content, n = e.licenseInfo;
        return s.a.createElement(xt, null, n, s.a.createElement("div", {
            header: Q.get("contentPublisherPanelHeader"),
            className: "h5p-hub-publisher-info"
        }, s.a.createElement("h3", {className: "h5p-hub-publisher-name"}, t.publisher.name), s.a.createElement("img", {
            className: "h5p-hub-publisher-image",
            src: t.publisher.logo
        }), s.a.createElement("div", {className: "h5p-hub-publisher-description"}, t.publisher.description)))
    });
    Nt.propTypes = {content: F, licenseInfo: C.a.element};
    var jt = Nt, Dt = (n(87), function (e) {
        var t = e.id, n = Se.getLicense(t);
        return s.a.createElement("div", null, s.a.createElement("div", {className: "h5p-hub-modal-header"}, Q.get("licenseModalTitle")), s.a.createElement("div", {className: "h5p-hub-modal-content"}, s.a.createElement("h5", {
            id: "h5p-hub-license-details-id",
            className: "h5p-hub-modal-title"
        }, t), s.a.createElement(X.b, {promise: n()}, s.a.createElement(X.b.Pending, null, s.a.createElement("div", {
            id: "h5p-hub-license-details-description",
            className: "h5p-hub-loading"
        })), s.a.createElement(X.b.Fulfilled, null, (function (e) {
            return s.a.createElement("div", {
                id: "h5p-hub-license-details-description",
                dangerouslySetInnerHTML: {__html: e}
            })
        })))))
    });
    Dt.propTypes = {id: C.a.string.isRequired};
    var kt = Dt, It = (n(88), function (e) {
        var t = e.content;
        return s.a.createElement("ul", null, s.a.createElement("li", null, s.a.createElement("span", {
            id: "h5p-hub-info-list-owner",
            className: "h5p-hub-label"
        }, Q.get("by"), ": "), s.a.createElement("span", {
            "aria-labelledby": "h5p-hub-info-list-owner",
            className: "h5p-hub-content"
        }, t.owner)), s.a.createElement("li", null, s.a.createElement("span", {
            id: "h5p-hub-info-list-h5p-type",
            className: "h5p-hub-label"
        }, Q.get("h5pType") + ": "), s.a.createElement("span", {
            "aria-labelledby": "h5p-hub-info-list-h5p-type",
            className: "h5p-hub-content"
        }, t.h5pTitle)), s.a.createElement("li", null, s.a.createElement("span", {
            id: "h5p-hub-info-list-language",
            className: "h5p-hub-label"
        }, Q.get("language"), ": "), s.a.createElement("span", {
            "aria-labelledby": "h5p-hub-info-list-language",
            className: "h5p-hub-content"
        }, t.language)), t.disciplines && t.disciplines.length ? s.a.createElement("li", null, s.a.createElement("span", {
            id: "h5p-hub-info-list-discipline",
            className: "h5p-hub-label h5p-hub-capitalize"
        }, Q.get("in"), ":"), s.a.createElement("span", {
            "aria-labelledby": "h5p-hub-info-list-discipline",
            className: "h5p-hub-content"
        }, t.disciplines)) : null, t.level && s.a.createElement("li", null, s.a.createElement("span", {
            id: "h5p-hub-info-list-level",
            className: "h5p-hub-label"
        }, Q.get("level"), ": "), s.a.createElement("span", {
            className: "h5p-hub-content h5p-hub-capitalize",
            "aria-labelledby": "h5p-hub-info-list-level"
        }, t.level)), s.a.createElement("li", null, s.a.createElement("span", {
            id: "h5p-hub-info-list-size",
            className: "h5p-hub-label"
        }, Q.get("size"), ": "), s.a.createElement("span", {
            "aria-labelledby": "h5p-hub-info-list-size",
            className: "h5p-hub-content"
        }, t.filesize)), t.age && s.a.createElement("li", null, s.a.createElement("span", {
            id: "h5p-hub-info-list-age",
            className: "h5p-hub-label"
        }, Q.get("age"), ": "), s.a.createElement("span", {
            className: "h5p-hub-content",
            "aria-labelledby": "h5p-hub-info-list-age"
        }, t.age)))
    });
    It.propTypes = {content: F};
    var Ot = It, Pt = (n(89), function (e) {
        var t = e.id, n = e.version, r = e.onShowLicenseDetails, i = e.attributes, a = e.licenseDetailsUrl;
        return s.a.createElement("div", {className: "h5p-hub-short-license-info"}, " ", "Unspecified" !== t ? s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", null, "".concat(t, " ").concat(n || "")), r ? s.a.createElement("button", {
            type: "button",
            className: "h5p-hub-short-license-read-more",
            "aria-label": Q.get("readMore"),
            onClick: r
        }) : a ? s.a.createElement("a", {
            className: "h5p-hub-short-license-read-more",
            "aria-label": Q.get("readMore"),
            href: a,
            target: "_blank"
        }) : null, s.a.createElement("p", null, Q.get("licenseDescription")), s.a.createElement("ul", {className: "h5p-hub-ul h5p-hub-small"}, void 0 !== i.canHoldLiable && s.a.createElement("li", null, Q.get(i.canHoldLiable ? "licenseCanHoldLiable" : "licenseCannotHoldLiable")), i.useCommercially && s.a.createElement("li", null, Q.get("licenseCanUseCommercially")), i.modifiable && s.a.createElement("li", null, Q.get("licenseCanModify")), i.distributable && s.a.createElement("li", null, Q.get("licenseCanDistribute")), i.sublicensable && s.a.createElement("li", null, Q.get("licenseCanSublicense")), i.mustIncludeCopyright && s.a.createElement("li", null, Q.get("licenseMustIncludeCopyright")), i.mustIncludeLicense && s.a.createElement("li", null, Q.get("licenseMustIncludeLicense")))) : s.a.createElement("p", null, Q.get("licenseUnspecified")))
    });
    Pt.propTypes = {
        id: C.a.string.isRequired,
        version: C.a.string,
        onShowLicenseDetails: C.a.func,
        attributes: C.a.shape({
            canHoldLiable: C.a.bool,
            useCommercially: C.a.bool,
            modifiable: C.a.bool,
            distributable: C.a.bool,
            sublicensable: C.a.bool,
            mustIncludeCopyright: C.a.bool,
            mustIncludeLicense: C.a.bool
        }),
        licenseDetailsUrl: C.a.string
    };
    var At = Pt;

    function Rt(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var zt = function (e) {
        y()(n, e);
        var t = Rt(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "onTransitionEnd", (function () {
                r.state.visible ? r.focusSet || (r.focusSet = !0, r.title.focus()) : r.props.onClose()
            })), M()(h()(r), "onImageSelect", (function (e) {
                r.setState({modalType: "screenshots", selectedScreenshot: e})
            })), M()(h()(r), "onModalClose", (function () {
                r.setState({modalType: void 0, licenseDetails: void 0})
            })), M()(h()(r), "handleClose", (function (e) {
                e.preventDefault(), r.props.onDismissMessage(), r.props.aboutToClose(), r.setState({visible: !1})
            })), M()(h()(r), "handleBackKeyPress", (function (e) {
                32 === e.which && r.handleClose(e)
            })), M()(h()(r), "componentDidMount", (function () {
                setTimeout((function () {
                    r.setState({visible: !0})
                }), 1), window.addEventListener("resize", r.resize), Se.licenses.then((function (e) {
                    var t = e.reduce(U, {}),
                        n = r.props.content.license.version ? t["".concat(r.props.content.license.id, "-").concat(r.props.content.license.version)] : t[r.props.content.license.id];
                    r.setState({licenseDetailsUrl: n.url})
                }))
            })), M()(h()(r), "resize", (function () {
                r.setState({screenWidth: document.documentElement.clientWidth})
            })), r.state = {
                visible: !1,
                selectedScreenshot: 0,
                modalType: void 0,
                showImageSlider: !0,
                message: void 0,
                screenWidth: document.documentElement.clientWidth
            }, r.focusSet = !1, r.screenSmall = parseInt(ie.a.screenSmall), r
        }

        return d()(n, [{
            key: "componentWillUnmount", value: function () {
                window.removeEventListener("resize", this.resize)
            }
        }, {
            key: "render", value: function () {
                var e = this, t = "h5p-hub-content-detail" + (this.state.visible ? " h5p-hub-show" : ""),
                    n = "h5p-hub-content-detail-view-title", r = this.props.content, i = {}, a = function () {
                        return i.label = Q.get("imageLightboxTitle"), "screenshots" === e.state.modalType ? s.a.createElement(Et, {
                            images: R(r.screenshots),
                            imagesToShow: 1,
                            showProgress: !0,
                            selected: e.state.selectedScreenshot
                        }) : "license" === e.state.modalType ? (i.labelledby = "h5p-hub-license-details-id", i.describedby = "h5p-hub-license-details-description", s.a.createElement(kt, {id: r.license.id})) : void 0
                    };
                return s.a.createElement("div", {
                    className: t,
                    role: "region",
                    tabIndex: "-1",
                    "aria-labelledby": n,
                    onTransitionEnd: this.onTransitionEnd
                }, s.a.createElement("a", {
                    href: "#",
                    className: "h5p-hub-back-button h5p-hub-icon-arrow-thin",
                    "aria-label": Q.get("contentTypeBackButtonLabel"),
                    onClick: this.handleClose,
                    onKeyPress: this.handleBackKeyPress
                }), s.a.createElement("div", {className: "h5p-hub-container"}, s.a.createElement("div", {className: "h5p-hub-image-wrapper"}, s.a.createElement(fe, {
                    src: r.icon,
                    className: "h5p-hub-img-responsive"
                })), s.a.createElement("div", {className: "h5p-hub-text-details"}, s.a.createElement("h2", {
                    id: n,
                    className: "h5p-hub-title ".concat(r.reviewed ? "h5p-hub-reviewed" : ""),
                    tabIndex: "-1",
                    ref: function (t) {
                        return e.title = t
                    }
                }, r.title), s.a.createElement("div", {className: "h5p-hub-info-list"}, s.a.createElement(Ot, {content: this.props.content})), s.a.createElement(St, {
                    text: r.description,
                    maxLength: 285
                }), r.preview_url && s.a.createElement("a", {
                    className: "h5p-hub-button h5p-hub-demo-button",
                    target: "_blank",
                    href: r.preview_url
                }, Q.get("contentPreviewButtonLabel"))), s.a.createElement("div", {className: "h5p-hub-info-list"}, s.a.createElement(Ot, {content: this.props.content}))), this.state.showImageSlider && r.screenshots && s.a.createElement(Et, {
                    images: R(r.screenshots),
                    onImageSelect: this.onImageSelect,
                    showProgress: !1,
                    selected: this.state.selectedScreenshot
                }), s.a.createElement("hr", null), this.props.message, s.a.createElement("div", {className: "h5p-hub-button-bar"}, s.a.createElement("button", {
                    type: "button",
                    className: "h5p-hub-button h5p-hub-button-orange h5p-hub-button-inverse-primary h5p-hub-button-download-content",
                    onClick: function () {
                        return e.props.onDownload(r)
                    }
                }, Q.get("contentDownloadButtonLabel"))), s.a.createElement(jt, {
                    content: r,
                    licenseInfo: s.a.createElement(At, {
                        header: Q.get("contentTypeLicensePanelTitle"),
                        id: r.license.id,
                        version: r.license.version,
                        licenseDetailsUrl: this.state.licenseDetailsUrl,
                        attributes: {
                            useCommercially: r.license.allows_commercial_use,
                            modifiable: r.license.can_be_modified
                        }
                    })
                }), void 0 !== this.state.modalType && s.a.createElement(bt, {
                    onClose: this.onModalClose,
                    className: this.state.modalType ? "h5p-hub-" + this.state.modalType : "",
                    aria: i,
                    parentId: "h5p-hub",
                    appElementId: "h5p-hub-panel"
                }, s.a.createElement(a, null)))
            }
        }]), n
    }(s.a.Component);
    zt.propTypes = {
        onDownload: C.a.func.isRequired,
        onClose: C.a.func.isRequired,
        aboutToClose: C.a.func.isRequired,
        content: F,
        message: C.a.node,
        onDismissMessage: C.a.func.isRequired
    };
    var Ft = zt, _t = n(29), Ut = n.n(_t);
    n(91);

    function Qt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Yt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Qt(Object(n), !0).forEach((function (t) {
                M()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Bt(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Wt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wt(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0, l = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return o = e.done, e
            }, e: function (e) {
                l = !0, a = e
            }, f: function () {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (l) throw a
                }
            }
        }
    }

    function Wt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Vt(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var qt = function (e) {
        y()(n, e);
        var t = Vt(n);

        function n(e) {
            var r;
            o()(this, n), r = t.call(this, e), M()(h()(r), "handlePageChange", (function (e, t) {
                t !== r.state.page && r.setState({page: t, focusOnRender: e})
            })), M()(h()(r), "scrollToSearchResults", (function () {
                r.reuseContentResultRef.current.scrollTo ? r.reuseContentResultRef.current.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: "smooth"
                }) : r.reuseContentResultRef.current.focus()
            })), M()(h()(r), "handleOrderBy", (function (e) {
                e !== r.state.orderBy && r.setState({orderBy: e})
            })), M()(h()(r), "handleSearch", (function (e) {
                e !== r.state.query && r.setState({query: e})
            })), M()(h()(r), "applyFilters", (function (e) {
                _(r.state.appliedFilters, e) || r.setState({appliedFilters: e})
            })), M()(h()(r), "showContentDetails", (function (e, t) {
                r.setState({detailViewVisible: !0, contentListVisible: !1, content: e, focused: t})
            })), M()(h()(r), "closeContentDetails", (function () {
                r.setState((function (e) {
                    return {contentListVisible: !0, setFocus: !e.setFocus}
                }))
            })), M()(h()(r), "showAllOrderedBy", (function (e) {
                r.setState({orderBy: e, appliedFilters: {}, selectedFilters: {}, query: "", page: 1})
            })), M()(h()(r), "showMessage", (function (e, t, n) {
                var i = {
                    title: e, message: t, severity: n, onClose: function () {
                        return r.clearMessage()
                    }
                };
                r.setState({message: s.a.createElement(Pe, i)})
            })), M()(h()(r), "clearMessage", (function () {
                r.setState({message: null})
            })), M()(h()(r), "getFriendlyMessage", (function (e) {
                var t = Q.get("downloadFailed"), n = Q.get("somethingWentWrongTryAgain");
                if (e instanceof TypeError) n = Q.get("contentHubConnectionFailed"); else if (Array.isArray(e.message)) {
                    var r, i = !1, a = Bt(e.message);
                    try {
                        for (a.s(); !(r = a.n()).done;) {
                            if ("missing-required-library" === r.value.code) {
                                i = !0;
                                break
                            }
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    i && (t = Q.get("downloadFailedMissingLibrariesTitle"), n = "\n          <p>".concat(Q.get("downloadFailedMissingLibrariesMessage"), '</p>\n          <ul class="h5p-hub-message-item-list">\n            ').concat(e.message.map((function (e) {
                        return "<li>".concat(e.message, "</li>")
                    })).join("\n"), "\n          </ul>\n        "))
                }
                return {title: t, message: n, severity: "error"}
            })), M()(h()(r), "handleDownload", (function (e) {
                r.setState({downloading: !0}, (function () {
                    Y(r.props.getAjaxUrl("get-content", {hubId: e.id}), "").then((function (e) {
                        r.props.onDownload(e.data, "reuse")
                    })).catch((function (e) {
                        var t = r.getFriendlyMessage(e), n = t.title, i = t.message, a = t.severity;
                        r.showMessage(n, i, a)
                    })).finally((function () {
                        return r.setState({downloading: !1})
                    }))
                }))
            })), M()(h()(r), "getH5PTitle", (function (e) {
                if (r.state.metaData.flatContentTypes) {
                    var t = r.state.metaData.flatContentTypes.filter((function (t) {
                        return t.id.split(" ")[0] === e.split(" ")[0]
                    }));
                    if (t.length > 0) return t[0].label
                }
                return e
            })), M()(h()(r), "getLabel", (function (e, t) {
                if (r.state.metaData[t]) {
                    var n = r.state.metaData[t].filter((function (t) {
                        return t.id === e
                    }));
                    if (n.length > 0 && null !== n[0].translation) return n[0].translation
                }
                return e
            })), M()(h()(r), "setChecked", (function (e) {
                r.setState({selectedFilters: e})
            })), r.state = {
                page: 1,
                orderBy: "popular",
                appliedFilters: {reviewed: ["reviewed"]},
                hasSearchResults: !1,
                contentListVisible: !0,
                detailViewVisible: !1,
                focusOnRender: !1,
                focused: "",
                setFocus: !1,
                failedDataFetch: {},
                metaData: {},
                initialized: !1,
                downloading: !1,
                selectedFilters: {reviewed: ["reviewed"]}
            }, r.orderBySettings = [{id: "popular", text: Q.get("popularFirst")}, {
                id: "newest",
                text: Q.get("newestFirst")
            }];
            var i = Q.get("filters");
            return r.reviewedFilter = [{
                id: "reviewed",
                label: i.reviewed.optionLabel
            }], r.licenseFilter = [{id: "modified", label: i.licenses.options.modified}, {
                id: "commercial",
                label: i.licenses.options.commercial
            }], r.metaData = [{id: "disciplines", promise: Se.disciplines}, {
                id: "contentTypes",
                promise: Se.contentTypes
            }, {id: "language", promise: Se.languages}, {id: "level", promise: Se.levels}, {
                id: "flatDisciplines",
                promise: Se.flatDisciplines
            }, {id: "flatContentTypes", promise: Se.flatContentTypes}], r.metaData.forEach((function (e) {
                e.promise.then((function (t) {
                    r.setState({metaData: Yt(Yt({}, r.state.metaData), {}, M()({}, e.id, t))})
                }), (function () {
                    r.setState({failedDataFetch: Yt(Yt({}, r.state.failedDataFetch), {}, M()({}, e.id, !0))})
                }))
            })), r.filters = [{
                id: "disciplines",
                dictionary: i.disciplines,
                type: "categorySearch"
            }, {id: "contentTypes", dictionary: i.contentTypes, type: "search"}, {
                id: "license",
                dictionary: i.licenses,
                type: "checkboxList"
            }, {id: "language", dictionary: i.language, type: "search"}, {
                id: "level",
                dictionary: i.level,
                type: "checkboxList"
            }, {
                id: "reviewed",
                dictionary: i.reviewed,
                type: "checkboxList"
            }], r.reuseContentResultRef = s.a.createRef(), r
        }

        return d()(n, [{
            key: "componentDidUpdate", value: function (e, t) {
                !this.state.initialized && this.props.isVisible && this.setState({
                    newContent: Se.search({
                        orderBy: "newest",
                        limit: 6,
                        filters: this.state.appliedFilters
                    }),
                    popularContent: Se.search({orderBy: "popularity", limit: 6, filters: this.state.appliedFilters}),
                    search: Se.search({filters: this.state.appliedFilters}),
                    initialized: !0
                });
                var n = t.orderBy !== this.state.orderBy || t.query !== this.state.query || !_(t.appliedFilters, this.state.appliedFilters);
                (n || t.page !== this.state.page) && (this.setState({
                    detailViewVisible: !1,
                    contentListVisible: !0,
                    focused: "",
                    setFocus: !0,
                    search: Se.search({
                        query: this.state.query,
                        filters: this.state.appliedFilters,
                        orderBy: this.state.orderBy,
                        page: n ? 1 : this.state.page
                    })
                }), this.scrollToSearchResults())
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.state.initialized && (this.state.query || "popular" !== this.state.orderBy),
                    n = this.state.initialized && (this.state.query || "newest" !== this.state.orderBy),
                    r = Q.get("contentDownloadButtonDownloadingLabel");
                return s.a.createElement("div", {id: "h5p-hub-reuse-view"}, this.state.downloading && s.a.createElement(ut, {label: r}), s.a.createElement(dt, {
                    placeholder: Q.get("contentSearchFieldPlaceholder"),
                    onSearch: this.handleSearch,
                    value: this.state.query,
                    setFocus: this.props.isVisible
                }), s.a.createElement(lt, {
                    label: Q.get("filterBy"),
                    filters: this.filters,
                    applyFilters: this.applyFilters,
                    checked: this.state.selectedFilters,
                    setChecked: this.setChecked,
                    metaData: Yt(Yt({}, this.state.metaData), {}, {
                        license: this.licenseFilter,
                        reviewed: this.reviewedFilter
                    }),
                    failedDataFetch: this.state.failedDataFetch
                }), s.a.createElement("div", {
                    className: "h5p-hub-reuse-content-container",
                    id: "h5p-hub-reuse-content-container"
                }, s.a.createElement("div", {className: this.state.contentListVisible ? "" : "h5p-hub-content-list-hidden"}, s.a.createElement(Le, {
                    searchPromise: this.state.search,
                    selected: this.state.orderBy,
                    onChange: this.handleOrderBy,
                    headerLabel: Q.get("contentSectionAll"),
                    visible: this.state.contentListVisible,
                    orderVariables: this.orderBySettings
                }), s.a.createElement("div", {
                    className: "h5p-hub-reuse-content-result",
                    ref: this.reuseContentResultRef
                }, this.state.initialized && s.a.createElement(ve, {
                    itemsPromise: this.state.search,
                    onSelect: this.showContentDetails,
                    visible: this.state.contentListVisible,
                    handlePageChange: this.handlePageChange,
                    focused: this.state.focused,
                    setFocus: this.state.setFocus,
                    title: Q.get("contentSectionAll")
                }), s.a.createElement(X.a, {promiseFn: this.state.search}, s.a.createElement(X.a.Fulfilled, null, (function (e) {
                    return s.a.createElement($, {
                        tutorialUrl: e.numResults ? "https://h5p.org/documentation/for-authors/tutorials" : null,
                        suggestionText: Q.get(e.numResults ? "noContentSuggestion" : "noContentFoundDesc"),
                        headerText: Q.get(e.numResults ? "noContentHeader" : "noResultsFound")
                    })
                }))), t && s.a.createElement(xe, {
                    itemsPromise: this.state.popularContent,
                    title: Q.get("popularContent"),
                    actionLabel: Q.get("allPopular"),
                    onAction: function () {
                        return e.showAllOrderedBy("popular")
                    },
                    onSelect: this.showContentDetails,
                    focused: this.state.focused,
                    setFocus: this.state.setFocus
                }), n && s.a.createElement(xe, {
                    itemsPromise: this.state.newContent,
                    title: Q.get("newOnTheHub"),
                    actionLabel: Q.get("allNew"),
                    onAction: function () {
                        return e.showAllOrderedBy("newest")
                    },
                    onSelect: this.showContentDetails,
                    focused: this.state.focused,
                    setFocus: this.state.setFocus
                }))), this.state.detailViewVisible && s.a.createElement(Ft, {
                    content: Yt(Yt({}, this.state.content), {}, {
                        h5pTitle: this.getH5PTitle(this.state.content.content_type),
                        language: this.getLabel(this.state.content.language, "language"),
                        disciplines: this.state.content.disciplines.map((function (t, n, r) {
                            return e.getLabel(t, "flatDisciplines") + (r.length - 1 !== n ? ", " : "")
                        })),
                        level: this.getLabel(this.state.content.level, "level"),
                        filesize: Ut()(this.state.content.size)
                    }),
                    downloading: this.state.downloading,
                    message: this.state.message,
                    onDismissMessage: this.clearMessage,
                    onDownload: this.handleDownload,
                    aboutToClose: function () {
                        return e.closeContentDetails()
                    },
                    onClose: function () {
                        return e.setState({detailViewVisible: !1})
                    }
                })))
            }
        }]), n
    }(s.a.Component);
    qt.propTypes = {title: C.a.string.isRequired, isVisible: C.a.bool};
    var Ht = qt,
        Gt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjI1Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgIGZpbGw6IG5vbmU7DQogICAgICB9DQoNCiAgICAgIC5jbHMtMiB7DQogICAgICBmaWxsOiAjYzZjNmM3Ow0KICAgICAgfQ0KDQogICAgICAuY2xzLTMsIC5jbHMtNCB7DQogICAgICBmaWxsOiAjZmZmOw0KICAgICAgfQ0KDQogICAgICAuY2xzLTMgew0KICAgICAgb3BhY2l0eTogMC43Ow0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHRpdGxlPmNvbnRlbnQgdHlwZSBwbGFjZWhvbGRlcl8yPC90aXRsZT4NCiAgPGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+DQogICAgPGcgaWQ9ImNvbnRlbnRfdHlwZV9wbGFjZWhvbGRlci0xX2NvcHkiIGRhdGEtbmFtZT0iY29udGVudCB0eXBlIHBsYWNlaG9sZGVyLTEgY29weSI+DQogICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1Ii8+DQogICAgICA8cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjExMi41MSIgeT0iNDMuNDEiIHdpZHRoPSIxNzYuOTYiIGhlaWdodD0iMTM1LjQ1IiByeD0iMTAiIHJ5PSIxMCIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxMzYuNjYiIGN5PSI2MS45OCIgcj0iNC44MSIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxNTEuNDkiIGN5PSI2MS45OCIgcj0iNC44MSIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxNjYuMSIgY3k9IjYxLjk4IiByPSI0LjgxIi8+DQogICAgICA8ZyBpZD0iX0dyb3VwXyIgZGF0YS1uYW1lPSImbHQ7R3JvdXAmZ3Q7Ij4NCiAgICAgICAgPGcgaWQ9Il9Hcm91cF8yIiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiPg0KICAgICAgICAgIDxwYXRoIGlkPSJfQ29tcG91bmRfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O0NvbXBvdW5kIFBhdGgmZ3Q7IiBjbGFzcz0iY2xzLTQiIGQ9Ik0yNjMuMjgsOTUuMjFDMjYwLDkyLjA3LDI1NSw5MS41LDI0OC40Myw5MS41SDIyN3Y4SDE5OS41bC0yLjE3LDEwLjI0YTI1Ljg0LDI1Ljg0LDAsMCwxLDExLjQ4LTEuNjMsMTkuOTMsMTkuOTMsMCwwLDEsMTQuMzksNS41NywxOC4yNiwxOC4yNiwwLDAsMSw1LjUyLDEzLjYsMjMuMTEsMjMuMTEsMCwwLDEtMi44NCwxMS4wNSwxOC42NSwxOC42NSwwLDAsMS04LjA2LDcuNzksOSw5LDAsMCwxLTQuMTIsMS4zN0gyMzZ2LTIxaDEwLjQyYzcuMzYsMCwxMi44My0xLjYxLDE2LjQyLTVzNS4zOC03LjQ4LDUuMzgtMTMuNDRDMjY4LjIyLDEwMi4yOSwyNjYuNTcsOTguMzUsMjYzLjI4LDk1LjIxWm0tMTUsMTdjLTEuNDIsMS4yMi0zLjksMS4yNS03LjQxLDEuMjVIMjM2di0xNGg1LjYyYTkuNTcsOS41NywwLDAsMSw3LDIuOTMsNy4wNSw3LjA1LDAsMCwxLDEuODUsNC45MkE2LjMzLDYuMzMsMCwwLDEsMjQ4LjMxLDExMi4yNVoiLz4NCiAgICAgICAgICA8cGF0aCBpZD0iX1BhdGhfIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgY2xhc3M9ImNscy00IiBkPSJNMjAyLjksMTE5LjExYTguMTIsOC4xMiwwLDAsMC03LjI4LDQuNTJsLTE2LTEuMjIsNy4yMi0zMC45MkgxNzR2MjJIMTUzdi0yMkgxMzZ2NTZoMTd2LTIxaDIxdjIxaDIwLjMxYy0yLjcyLDAtNS0xLjUzLTctM2ExOS4xOSwxOS4xOSwwLDAsMS00LjczLTQuODMsMjMuNTgsMjMuNTgsMCwwLDEtMy02LjZsMTYtMi4yNmE4LjExLDguMTEsMCwxLDAsNy4yNi0xMS43MloiLz4NCiAgICAgICAgPC9nPg0KICAgICAgPC9nPg0KICAgICAgPHJlY3QgY2xhc3M9ImNscy0zIiB4PSIxNzcuNjYiIHk9IjU3LjY2IiB3aWR0aD0iOTIuMjgiIGhlaWdodD0iOS4zOCIgcng9IjMuNSIgcnk9IjMuNSIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo=";

    function Zt(e, t) {
        var n = t.major > e.h5pMajorVersion || t.major === e.h5pMajorVersion && t.minor >= e.h5pMinorVersion;
        return !e.isUpToDate && e.installed && e.canInstall && n
    }

    n(92);
    var Kt = function (e) {
        var t = e.contentType, n = e.apiVersion, r = e.tabindex, i = e.onSelect, a = t.title || t.machineName,
            o = Zt(t, n), l = function (e) {
                i(t), e.preventDefault()
            }, u = t.icons ? t.icons.map((function (e, t) {
                return s.a.createElement("img", {
                    key: t,
                    className: "h5p-hub-media-text-icon",
                    src: e.src,
                    alt: e.alt,
                    title: e.alt
                })
            })) : null;
        return s.a.createElement("div", null, s.a.createElement("div", {className: "h5p-hub-media-left"}, s.a.createElement("img", {
            className: "h5p-hub-media-object",
            src: t.icon || Gt,
            alt: a + " " + Q.get("contentTypeIconAltText")
        })), s.a.createElement("div", {className: "h5p-hub-media-body"}, s.a.createElement("div", {className: "h4 h5p-hub-media-heading"}, a), u, t.installed ? s.a.createElement("button", {
            type: "button",
            className: "h5p-hub-button h5p-hub-button-primary",
            tabIndex: r,
            onClick: l,
            onKeyDown: function (e) {
                13 !== e.which && 32 !== e.which || l(e)
            }
        }, Q.get("contentTypeDetailButtonLabel")) : s.a.createElement("button", {
            type: "button",
            className: "h5p-hub-button h5p-hub-button-inverse-primary h5p-hub-button-install",
            tabIndex: r
        }, Q.get("contentTypeGetButtonLabel")), s.a.createElement("div", {className: "h5p-hub-content-type-update-info" + (o ? "" : " hidden")}, Q.get("contentTypeUpdateAvailable")), s.a.createElement("div", {className: "h5p-hub-description"}, t.summary || "")))
    };
    Kt.propTypes = {
        contentType: C.a.object.isRequired,
        apiVersion: C.a.object.isRequired,
        tabindex: C.a.number.isRequired,
        onSelect: C.a.func.isRequired
    };
    var Xt = Kt;
    n(93);

    function Jt(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var $t = function (e) {
        y()(n, e);
        var t = Jt(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "getLibrary", (function (e) {
                for (var t = 0; t < r.props.contentTypes.length; t++) {
                    var n = r.props.contentTypes[t];
                    if (n.machineName.toLocaleLowerCase().replace(".", "-") === e.replace("h5p-hub-", "")) return n
                }
            })), M()(h()(r), "handleFocus", (function (e) {
                r.props.onFocus(r.getLibrary(e))
            })), M()(h()(r), "handleSelect", (function (e) {
                var t = r.getLibrary(e);
                t.installed ? r.props.onUse(t) : (r.props.onSelect(t), r.props.onFocus(t))
            })), M()(h()(r), "scrollIntoView", (function (e) {
                var t = r.choose.items[0].offsetTop;
                if (e.offsetTop - t < r.list.scrollTop) r.list.scrollTop = e.offsetTop - t; else {
                    var n = e.offsetTop - t + e.clientHeight;
                    if (n > r.list.scrollTop + r.list.clientHeight) {
                        var i = window.getComputedStyle(r.listElement);
                        r.list.scrollTop = n - r.list.clientHeight + parseFloat(i.marginTop) + parseFloat(i.marginBottom)
                    }
                }
            })), r
        }

        return d()(n, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.contentTypes !== this.props.contentTypes && this.setState({resetScroll: !0})
            }
        }, {
            key: "componentDidUpdate", value: function () {
                if (this.state && this.state.resetScroll) delete this.state.resetScroll, this.list.scrollTop = 0; else if (this.props.focused && this.choose && this.choose.items) for (var e = this.props.focused.machineName.toLocaleLowerCase().replace(".", "-"), t = 0; t < this.choose.items.length; t++) if (e === this.choose.items[t].id) {
                    this.scrollIntoView(this.choose.items[t]);
                    break
                }
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.contentTypes.map((function (t, n) {
                    return s.a.createElement("li", {
                        key: n,
                        id: t.machineName.toLocaleLowerCase().replace(".", "-"),
                        className: "h5p-hub-media"
                    }, s.a.createElement(Xt, {
                        contentType: t,
                        apiVersion: e.props.apiVersion,
                        tabindex: e.props.focused ? e.props.focused === t ? 0 : -1 : 0 === n ? 0 : -1,
                        onSelect: e.props.onSelect
                    }))
                }));
                return H5P.externalDispatcher.trigger("h5p-hub-content-types-render", {
                    numContentTypes: this.props.contentTypes.length,
                    contentTypeListClassName: "h5p-hub-content-type-list"
                }), s.a.createElement("div", {
                    className: "h5p-hub-content-type-list",
                    "aria-hidden": !this.props.visible,
                    ref: function (t) {
                        return e.list = t
                    }
                }, this.props.contentTypes.length ? s.a.createElement("ol", {
                    ref: function (t) {
                        return e.listElement = t
                    }
                }, s.a.createElement(H, {
                    selected: this.props.focused ? this.props.focused.machineName.toLocaleLowerCase().replace(".", "-") : null,
                    setFocus: this.props.setFocus,
                    onChange: this.handleSelect,
                    onFocus: this.handleFocus,
                    ref: function (t) {
                        return e.choose = t
                    }
                }, t)) : s.a.createElement("div", {className: "h5p-hub-no-results"}, s.a.createElement("div", {className: "h5p-hub-no-results-title"}, Q.get("noResultsFound")), s.a.createElement("div", {className: "h5p-hub-no-results-desc"}, Q.get("noResultsFoundDesc"))))
            }
        }]), n
    }(s.a.Component);
    $t.propTypes = {
        contentTypes: C.a.array.isRequired,
        apiVersion: C.a.object.isRequired,
        focused: C.a.object,
        visible: C.a.bool,
        setFocus: C.a.bool,
        onUse: C.a.func.isRequired,
        onSelect: C.a.func.isRequired,
        onFocus: C.a.func.isRequired
    };
    var en = $t, tn = (n(94), function (e) {
        var t = e.id, n = e.attributes, r = e.onShowLicenseDetails;
        return s.a.createElement(xt, null, s.a.createElement(At, {
            header: Q.get("contentTypeLicensePanelTitle"),
            id: t,
            attributes: n,
            onShowLicenseDetails: r
        }))
    });
    tn.propTypes = {
        id: C.a.string,
        onShowLicenseDetails: C.a.func,
        attributes: C.a.shape({
            canHoldLiable: C.a.bool,
            useCommercially: C.a.bool,
            modifiable: C.a.bool,
            distributable: C.a.bool,
            sublicensable: C.a.bool,
            mustIncludeCopyright: C.a.bool,
            mustIncludeLicense: C.a.bool
        })
    };
    var nn = tn;
    n(95);

    function rn(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var an = function (e) {
        y()(n, e);
        var t = rn(n);

        function n(e) {
            var r;
            return o()(this, n), (r = t.call(this, e)).state = {focusOnRender: !0}, r
        }

        return d()(n, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.opened !== this.props.opened && this.setState({focusOnRender: !0})
            }
        }, {
            key: "shouldComponentUpdate", value: function (e, t) {
                return this.state === t
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.state.focusOnRender && (this.useButton ? this.useButton.focus() : this.installButton.focus()), delete this.state.focusOnRender
            }
        }, {
            key: "render", value: function () {
                var e, t = this, n = !1, r = this.props.installed && !this.props.installing;
                return this.props.installed && this.props.updatable ? (e = this.props.installing ? "Updating" : "Update", n = this.props.installing) : this.props.installed || (e = this.props.installing ? "Installing" : "Install", n = this.props.installing), s.a.createElement("div", {className: "h5p-hub-content-type-detail-button-bar"}, e && s.a.createElement("button", {
                    type: "button",
                    className: "h5p-hub-button h5p-hub-button-inverse-primary h5p-hub-button-".concat(e.toLowerCase()),
                    disabled: n,
                    onClick: this.props.installing ? void 0 : this.props.onInstall,
                    ref: function (e) {
                        return t.installButton = e
                    }
                }, Q.get("contentType".concat(e, "ButtonLabel"))), r && s.a.createElement("button", {
                    type: "button",
                    className: "h5p-hub-button h5p-hub-button-primary",
                    onClick: this.props.onUse,
                    ref: function (e) {
                        return t.useButton = e
                    }
                }, Q.get("contentTypeUseButtonLabel")))
            }
        }]), n
    }(s.a.Component);
    an.propTypes = {
        canInstall: C.a.bool.isRequired,
        installed: C.a.bool.isRequired,
        installing: C.a.bool.isRequired,
        updatable: C.a.bool.isRequired,
        onInstall: C.a.func.isRequired,
        onUse: C.a.func.isRequired,
        opened: C.a.bool.isRequired
    };
    var on = an;
    n(96);

    function ln(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var sn = {}, un = function (e) {
        y()(n, e);
        var t = ln(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "onTransitionEnd", (function () {
                !r.state.visible && r.state.showImageSlider ? r.setState({showImageSlider: !1}) : r.state.visible && r.setState({focusUseButton: r.state.visible})
            })), M()(h()(r), "onImageSelect", (function (e) {
                r.setState({modalType: "screenshots", selectedScreenshot: e})
            })), M()(h()(r), "onModalClose", (function () {
                r.setState({modalType: void 0, licenseDetails: void 0})
            })), M()(h()(r), "handleInstall", (function () {
                r.setState({
                    installing: !0,
                    errorMessage: null,
                    infoMessage: null
                }), Y(r.props.getAjaxUrl("library-install", {id: r.props.library.machineName}), "").then((function (e) {
                    r.props.onInstall(e.data);
                    var t = r.props.installed ? "contentTypeUpdateSuccess" : "contentTypeInstallSuccess",
                        n = r.props.library.title || r.props.library.machineName;
                    r.setState({
                        installed: !0,
                        installing: !1,
                        infoMessage: {title: Q.get(t, {":contentType": n}), message: e.data.details}
                    })
                })).catch((function (e) {
                    r.setState({updating: !1, installing: !1, errorMessage: e})
                }))
            })), M()(h()(r), "handleClose", (function (e) {
                e.preventDefault(), r.props.onClose()
            })), M()(h()(r), "handleUse", (function () {
                r.props.onUse(r.props.library)
            })), M()(h()(r), "handleShowLicenseDetails", (function () {
                var e = r.props.library.license.id, t = sn[e];
                t ? r.setState({licenseDetails: t}) : fetch("https://api.h5p.org/v1/licenses/".concat(r.props.library.license.id)).then((function (e) {
                    return e.json()
                })).then((function (n) {
                    t = !1 === n.success ? Q.get("licenseFetchDetailsFailed") : sn[e] = n.description.replace(":owner", r.props.library.owner).replace(":year", (new Date).getFullYear()), r.setState({licenseDetails: t})
                })).catch((function () {
                    r.setState({licenseDetails: Q.get("licenseFetchDetailsFailed")})
                })), r.setState({modalType: "license"})
            })), M()(h()(r), "handleErrorDismiss", (function () {
                r.setState({errorMessage: null})
            })), M()(h()(r), "handleInfoDismiss", (function () {
                r.setState({infoMessage: null})
            })), M()(h()(r), "handleBackKeyPress", (function (e) {
                32 === e.which && r.handleClose(e)
            })), M()(h()(r), "openExampleUrl", (function () {
                window.open(r.props.library.example, "_blank")
            })), r.state = {
                visible: !1,
                selectedScreenshot: 0,
                modalType: void 0,
                installed: !1,
                canInstall: !1,
                updatable: !1,
                installing: !1,
                showImageSlider: !0,
                message: void 0,
                opened: !1
            }, r
        }

        return d()(n, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.library && (this.props.library !== e.library && this.setState({
                    errorMessage: null,
                    infoMessage: null
                }), !this.props.visible && e.visible ? this.setState({opened: !0}) : this.setState({opened: !1}), this.setState({
                    installed: e.library.installed,
                    canInstall: e.library.canInstall,
                    updatable: Zt(e.library, e.apiVersion),
                    installing: !1,
                    visible: e.visible,
                    showImageSlider: !0
                }))
            }
        }, {
            key: "render", value: function () {
                var e = this, t = "h5p-hub-content-type-detail" + (this.state.visible ? " h5p-hub-show" : ""),
                    n = "h5p-hub-content-type-detail-view-title";
                if (!this.props.library) return s.a.createElement("div", {className: t});
                var r = function () {
                    return "screenshots" === e.state.modalType ? s.a.createElement(Et, {
                        images: e.props.library.screenshots,
                        imagesToShow: 1,
                        showProgress: !0,
                        selected: e.state.selectedScreenshot
                    }) : "license" === e.state.modalType ? s.a.createElement("div", null, s.a.createElement("div", {className: "h5p-hub-modal-header"}, Q.get("licenseModalTitle")), s.a.createElement("div", {className: "h5p-hub-modal-content"}, s.a.createElement("h5", {
                        id: "h5p-hub-license-details-id",
                        className: "h5p-hub-modal-title"
                    }, e.props.library.license.id), s.a.createElement("div", {
                        id: "h5p-hub-license-details-description",
                        className: e.state.licenseDetails ? void 0 : "h5p-hub-loading",
                        dangerouslySetInnerHTML: {__html: e.state.licenseDetails}
                    }))) : null
                }, a = {};
                return "screenshots" === this.state.modalType && (a.label = Q.get("imageLightboxTitle")), "license" === this.state.modalType && this.state.licenseDetails && (a.labelledby = "h5p-hub-license-details-id", a.describedby = "h5p-hub-license-details-description"), s.a.createElement("div", {
                    className: t,
                    role: "region",
                    tabIndex: "-1",
                    "aria-labelledby": n,
                    onTransitionEnd: this.onTransitionEnd
                }, s.a.createElement("a", {
                    href: "#",
                    className: "h5p-hub-back-button h5p-hub-icon-arrow-thin",
                    "aria-label": Q.get("contentTypeBackButtonLabel"),
                    onClick: this.handleClose,
                    onKeyPress: this.handleBackKeyPress
                }), s.a.createElement("div", {className: "h5p-hub-container"}, s.a.createElement("div", {className: "h5p-hub-image-wrapper"}, s.a.createElement("img", {
                    className: "h5p-hub-img-responsive",
                    src: this.props.library.icon || Gt
                })), s.a.createElement("div", {className: "h5p-hub-text-details"}, s.a.createElement("h2", {
                    id: n,
                    className: "h5p-hub-title",
                    tabIndex: "-1"
                }, this.props.library.title || this.props.library.machineName), s.a.createElement("div", {className: "h5p-hub-owner"}, this.props.library.owner), s.a.createElement(St, {
                    text: this.props.library.description,
                    maxLength: 285
                }), this.props.library.example && s.a.createElement("a", {
                    className: "h5p-hub-button h5p-hub-demo-button",
                    target: "_blank",
                    href: this.props.library.example || "#",
                    onKeyPress: function (t) {
                        return P(t, e.openExampleUrl)
                    }
                }, Q.get("contentTypeDemoButtonLabel")))), this.state.showImageSlider && this.props.library.screenshots && s.a.createElement(Et, {
                    images: this.props.library.screenshots,
                    onImageSelect: this.onImageSelect,
                    showProgress: !1,
                    selected: this.state.selectedScreenshot
                }), s.a.createElement("hr", null), !!this.state.errorMessage && s.a.createElement(Pe, i()({}, this.state.errorMessage, {
                    severity: "error",
                    onClose: this.handleErrorDismiss
                })), !!this.state.infoMessage && s.a.createElement(Pe, i()({}, this.state.infoMessage, {
                    severity: "info",
                    onClose: this.handleInfoDismiss
                })), s.a.createElement(on, {
                    installed: this.state.installed,
                    canInstall: this.state.canInstall,
                    updatable: this.state.updatable,
                    installing: this.state.installing,
                    onInstall: this.handleInstall,
                    onUse: this.handleUse,
                    opened: this.state.opened
                }), s.a.createElement(nn, {
                    id: this.props.library.license ? this.props.library.license.id : "Unspecified",
                    attributes: this.props.library.license ? this.props.library.license.attributes : void 0,
                    onShowLicenseDetails: this.handleShowLicenseDetails
                }), void 0 !== this.state.modalType && s.a.createElement(bt, {
                    onClose: this.onModalClose,
                    className: "h5p-hub-" + this.state.modalType || !1,
                    aria: a,
                    parentId: "h5p-hub",
                    appElementId: "h5p-hub-panel"
                }, s.a.createElement(r, null)))
            }
        }]), n
    }(s.a.Component);
    un.propTypes = {
        visible: C.a.bool.isRequired,
        onInstall: C.a.func.isRequired,
        onUse: C.a.func.isRequired,
        onClose: C.a.func.isRequired,
        getAjaxUrl: C.a.func.isRequired,
        library: C.a.shape({
            installed: C.a.bool.isRequired,
            canInstall: C.a.bool.isRequired,
            isUpToDate: C.a.bool.isRequired,
            example: C.a.string,
            title: C.a.string,
            description: C.a.string.isRequired,
            machineName: C.a.string.isRequired,
            screenshots: C.a.arrayOf(C.a.shape({url: I, alt: I})),
            owner: C.a.string.isRequired,
            icon: C.a.string,
            license: C.a.shape({
                id: C.a.string.isRequired,
                attributes: C.a.shape({
                    canHoldLiable: C.a.bool.isRequired,
                    useCommercially: C.a.bool,
                    modifiable: C.a.bool,
                    distributable: C.a.bool,
                    sublicensable: C.a.bool,
                    mustIncludeCopyright: C.a.bool,
                    mustIncludeLicense: C.a.bool
                })
            })
        })
    };
    var cn = un, fn = function (e) {
        var t = e.throbbing, n = e.details, r = e.onRetry, i = [Q.get("noContentTypesAvailableDesc")];
        return n && n.title && (i.push(n.title), n.details && (i = i.concat(n.details))), s.a.createElement(Pe, {
            severity: "error",
            title: Q.get("noContentTypesAvailable"),
            message: i
        }, s.a.createElement("button", {
            type: "h5p-hub-button",
            className: "h5p-hub-button h5p-hub-button-primary h5p-hub-retry-button",
            tabIndex: "0",
            onClick: r,
            disabled: t
        }, Q.get("tryAgain")))
    };
    fn.propTypes = {
        throbbing: C.a.bool,
        details: C.a.object,
        onRetry: C.a.func.isRequired
    }, fn.defaultProps = {throbbing: !1};
    var dn = fn, pn = [{name: "title", max: 1e3, min: 100}, {name: "summary", max: 50, min: 25}, {
            name: "description",
            max: 50,
            min: 25
        }, {name: "keywords", max: 50, min: 25}, {name: "machineName", max: 1, min: .5}],
        hn = {recently: "recently", newest: "createdAt", "a-to-z": "title"}, mn = ["createdAt", "updatedAt"];

    function yn(e, t, n) {
        if (t) {
            var r = e.libraries.map((function (e) {
                return {contentType: e, score: bn(t, e)}
            })).filter((function (t) {
                return t.score > 0 && !gn(t.contentType, e.apiVersion)
            }));
            return Ln(r)
        }
        var i = [hn[n]];
        if ("recently" === n) if (e.recentlyUsed && e.recentlyUsed.length) {
            for (var a = 0; a < e.recentlyUsed.length; a++) for (var o = e.recentlyUsed[a], l = 0; l < e.libraries.length; l++) {
                var s = e.libraries[l];
                s.machineName === o && (s.recently = a + 1)
            }
            i.push("popularity")
        } else i = ["popularity"]; else "newest" === n && i.splice(0, 0, "installed");
        return Ln(e.libraries.filter((function (t) {
            return !gn(t, e.apiVersion)
        })), i)
    }

    var gn = function (e, t) {
        var n = !(t.major > e.h5pMajorVersion || t.major === e.h5pMajorVersion && t.minor >= e.h5pMinorVersion);
        return e.restricted || !e.installed && n
    }, bn = function (e, t) {
        var n = e.split(" ").filter((function (e) {
            return "" !== e
        })).map((function (e) {
            return vn(e, t)
        }));
        return n.indexOf(0) > -1 ? 0 : n.reduce((function (e, t) {
            return e + t
        }), 0)
    }, vn = function (e, t) {
        e = e.trim();
        for (var n = 0; n < pn.length; n++) {
            var r = pn[n], i = wn(e, t[r.name], r.max, r.min);
            if (-1 !== i) return i
        }
        return 0
    }, wn = function e(t, n, r, i) {
        if (!n) return -1;
        if (n instanceof Array) {
            for (var a = 0; a < n.length; a++) {
                var o = e(t, n[a], r, i);
                if (-1 !== o) return o
            }
            return -1
        }
        var l = n.toLowerCase().indexOf(t.toLowerCase());
        return -1 === l ? -1 : (r - i) * ((n.length - l) / n.length) + i
    }, Ln = function (e, t) {
        return e.map((function (e) {
            return e.hasOwnProperty("score") && e.hasOwnProperty("contentType") ? e : {contentType: e, score: .1}
        })).sort((function (e, n) {
            return t ? Mn(e, n, t[0], t.slice(1)) : En(e, n)
        })).map((function (e) {
            return e.contentType
        }))
    }, Mn = function e(t, n, r, i) {
        if (!t.contentType.hasOwnProperty(r)) return 1;
        if (!n.contentType.hasOwnProperty(r)) return -1;
        var a = -1 === mn.indexOf(r) ? 1 : -1;
        return t.contentType[r] > n.contentType[r] ? 1 * a : t.contentType[r] < n.contentType[r] ? -1 * a : i.length ? e(t, n, i[0], i.slice(1)) : 0
    }, En = function (e, t) {
        return t.score !== e.score ? t.score - e.score : t.contentType.popularity - e.contentType.popularity
    };

    function Cn(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var Sn = function (e) {
        y()(n, e);
        var t = Cn(n);

        function n(e) {
            var r;
            o()(this, n), r = t.call(this, e), M()(h()(r), "handleDetailClose", (function () {
                r.setState((function (e) {
                    return {detailViewActive: !1, setFocus: !e.setFocus}
                }))
            })), M()(h()(r), "handleDetailUse", (function (e) {
                r.handleDetailClose(), r.props.onUse(e)
            })), M()(h()(r), "handleListSelect", (function (e) {
                r.setState({library: e, detailViewActive: !0})
            })), M()(h()(r), "handleFilterOn", (function (e) {
                r.setState({
                    contentTypes: yn(r.props.contentTypes, e, r.state.orderBy),
                    filterOn: e,
                    focused: null,
                    detailViewActive: !1
                })
            })), M()(h()(r), "handleOrderBy", (function (e) {
                r.setState({contentTypes: yn(r.props.contentTypes, null, e), orderBy: e, filterOn: "", focused: null})
            })), M()(h()(r), "handleFocus", (function (e) {
                r.setState({focused: e})
            })), M()(h()(r), "handleFocusMove", (function (e) {
                for (var t = r.state.focused || r.state.contentTypes[0], n = 0; n < r.state.contentTypes.length; n++) if (t === r.state.contentTypes[n]) return void (r.state.contentTypes[n + e] && r.setState({focused: r.state.contentTypes[n + e]}))
            })), M()(h()(r), "handleSearchSelect", (function () {
                var e = r.state.focused || r.state.contentTypes[0];
                e && (e.installed ? r.props.onUse(e) : r.handleListSelect(e))
            })), M()(h()(r), "handleWarningClose", (function () {
                r.setState({warnOutdated: !1})
            })), M()(h()(r), "handleRetry", (function () {
                r.setState({retrying: !0}), r.props.onReload()
            }));
            return r.state = {
                orderBy: "recently",
                contentTypes: yn(e.contentTypes, null, "recently"),
                detailViewActive: !1,
                warnOutdated: r.props.contentTypes.outdated
            }, r
        }

        return d()(n, [{
            key: "componentWillReceiveProps", value: function (e) {
                this.setState((function (t) {
                    var n;
                    if (t.library) for (var r = 0; r < e.contentTypes.libraries.length; r++) {
                        var i = e.contentTypes.libraries[r];
                        i.machineName === t.library.machineName && (n = i)
                    }
                    return {contentTypes: yn(e.contentTypes, t.filterOn, t.orderBy), retrying: void 0, library: n}
                }))
            }
        }, {
            key: "render", value: function () {
                if (!this.props.contentTypes.libraries || !this.props.contentTypes.libraries.length) return s.a.createElement(dn, {
                    throbbing: this.state.retrying,
                    details: this.props.error,
                    onRetry: this.handleRetry
                });
                var e = !(!this.props.contentTypes.recentlyUsed || !this.props.contentTypes.recentlyUsed.length),
                    t = [{id: "recently", text: Q.get(e ? "recentlyUsedFirst" : "popularFirst")}, {
                        id: "newest",
                        text: Q.get("newestFirst")
                    }, {id: "a-to-z", text: Q.get("aToZ")}];
                return s.a.createElement("div", {className: "h5p-hub-content-type-section-view"}, s.a.createElement(dt, {
                    value: this.state.filterOn,
                    auto: !this.state.detailViewActive,
                    setFocus: this.props.setFocus,
                    onSearch: this.handleFilterOn,
                    onNavigate: this.handleFocusMove,
                    onSelect: this.handleSearchSelect,
                    instantSearch: !0,
                    placeholder: Q.get("contentTypeSearchFieldPlaceholder")
                }), !!this.state.warnOutdated && s.a.createElement(Pe, {
                    severity: "warning",
                    title: Q.get("contentTypeCacheOutdated"),
                    message: Q.get("contentTypeCacheOutdatedDesc"),
                    onClose: this.handleWarningClose
                }), s.a.createElement("div", {className: "h5p-hub-content-type-section" + (this.state.warnOutdated ? " h5p-hub-height-limit" : "") + (this.state.filterOn ? " h5p-hub-filtering" : "")}, s.a.createElement(Le, {
                    hits: this.state.contentTypes.length,
                    selected: this.state.orderBy,
                    onChange: this.handleOrderBy,
                    orderVariables: t,
                    orderVisible: !this.state.filterOn,
                    hasSearchResults: !!this.state.filterOn,
                    visible: !this.state.detailViewActive,
                    headerLabel: this.state.filterOn ? Q.get("searchResults") : Q.get("contentTypeSectionAll")
                }), s.a.createElement(en, {
                    contentTypes: this.state.contentTypes,
                    apiVersion: this.props.contentTypes.apiVersion,
                    focused: this.state.focused,
                    setFocus: !this.state.setFocus,
                    visible: !this.state.detailViewActive,
                    onUse: this.props.onUse,
                    onSelect: this.handleListSelect,
                    onFocus: this.handleFocus
                }), s.a.createElement(cn, {
                    library: this.state.library,
                    apiVersion: this.props.contentTypes.apiVersion,
                    visible: this.state.detailViewActive,
                    onUse: this.handleDetailUse,
                    onClose: this.handleDetailClose,
                    getAjaxUrl: this.props.getAjaxUrl,
                    onInstall: this.props.onInstall
                })))
            }
        }]), n
    }(s.a.Component);
    Sn.propTypes = {
        contentTypes: C.a.object.isRequired,
        setFocus: C.a.bool,
        getAjaxUrl: C.a.func.isRequired,
        onUse: C.a.func.isRequired,
        onInstall: C.a.func.isRequired
    };
    var Tn = Sn;
    n(97), n(98);

    function xn(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var Nn = function (e) {
        y()(n, e);
        var t = xn(n);

        function n(e) {
            var r;
            return o()(this, n), (r = t.call(this, e)).clickFileField = r.clickFileField.bind(h()(r)), r.componentDidUpdate = r.componentDidUpdate.bind(h()(r)), r
        }

        return d()(n, [{
            key: "componentDidUpdate", value: function () {
                this.props.fileSelected ? this.useButton.focus() : this.fileField.value = "", this.props.setFocus && this.uploadButton.focus()
            }
        }, {
            key: "clickFileField", value: function () {
                this.fileField.click()
            }
        }, {
            key: "render", value: function () {
                var e = this;
                return s.a.createElement("div", {className: "h5p-hub-upload-form"}, s.a.createElement("input", {
                    className: "h5p-hub-upload-path",
                    placeholder: this.props.fileSelected || this.props.fileUploading ? this.props.filePath : Q.get("uploadPlaceholder"),
                    onClick: this.clickFileField,
                    tabIndex: "-1",
                    disabled: this.props.fileUploading,
                    readOnly: !0
                }), s.a.createElement("button", {
                    type: "button",
                    ref: function (t) {
                        e.useButton = t
                    },
                    className: "h5p-hub-button h5p-hub-use-button",
                    "aria-hidden": this.props.fileSelected ? "" : "true",
                    disabled: this.props.fileUploading,
                    onClick: this.props.onUpload
                }, Q.get("contentTypeUseButtonLabel")), s.a.createElement("div", {className: "h5p-hub-input-wrapper"}, s.a.createElement("input", {
                    type: "file",
                    accept: ".h5p",
                    "aria-hidden": "true",
                    ref: function (t) {
                        e.fileField = t
                    },
                    onChange: this.props.onValidate
                }), s.a.createElement("button", {
                    type: "button",
                    ref: function (t) {
                        return e.uploadButton = t
                    },
                    className: "h5p-hub-button h5p-hub-upload-button",
                    onClick: this.clickFileField,
                    disabled: this.props.fileUploading,
                    tabIndex: "0"
                }, this.props.fileSelected ? Q.get("uploadFileButtonChangeLabel") : Q.get("uploadFileButtonLabel"))))
            }
        }]), n
    }(s.a.Component);
    Nn.propTypes = {
        fileSelected: C.a.bool.isRequired,
        fileUploading: C.a.bool.isRequired,
        filePath: C.a.string.isRequired,
        setFocus: C.a.bool.isRequired,
        onValidate: C.a.func.isRequired,
        onUpload: C.a.func.isRequired
    };
    var jn = Nn;

    function Dn(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var kn = function (e) {
        y()(n, e);
        var t = Dn(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "handleErrorDismiss", (function () {
                r.setState({error: null})
            })), r.state = {
                fileSelected: !1,
                filePath: "",
                fileUploading: !1,
                error: void 0,
                uploadData: {}
            }, r.handleValidation = r.handleValidation.bind(h()(r)), r.handleUpload = r.handleUpload.bind(h()(r)), r
        }

        return d()(n, [{
            key: "handleValidation", value: function (e) {
                if (this.setState({error: void 0}), 0 !== e.target.files.length) {
                    var t = e.target.files[0].name;
                    "h5p" !== this.getFileExtension(t) ? this.setState({
                        fileSelected: !1,
                        filePath: "",
                        error: {
                            title: Q.get("h5pFileWrongExtensionTitle"),
                            message: Q.get("h5pFileWrongExtensionContent")
                        }
                    }) : (this.setState({
                        fileSelected: !0,
                        filePath: t,
                        fileUploading: !1,
                        uploadData: e.target.files[0]
                    }), e.stopPropagation())
                }
            }
        }, {
            key: "handleUpload", value: function () {
                var e = this;
                this.setState({fileSelected: !0, fileUploading: !0});
                var t = new FormData;
                t.append("h5p", this.state.uploadData), t.append("contentId", this.props.contentId), Y(this.props.getAjaxUrl("library-upload"), t).then((function (t) {
                    e.props.onUpload(t.data), e.setState({
                        fileSelected: !1,
                        fileUploading: !1,
                        filePath: "",
                        uploadData: {}
                    })
                })).catch((function (t) {
                    e.setState({fileSelected: !1, fileUploading: !1, error: t, filePath: "", uploadData: {}})
                }))
            }
        }, {
            key: "getFileExtension", value: function (e) {
                return e.replace(/^.*\./, "")
            }
        }, {
            key: "render", value: function () {
                return s.a.createElement("div", {className: "h5p-hub-upload-wrapper"}, !!this.state.error && s.a.createElement(Pe, i()({}, this.state.error, {
                    severity: "error",
                    onClose: this.handleErrorDismiss
                })), s.a.createElement("div", {
                    className: "h5p-hub-upload-throbber" + (this.state.fileUploading ? "" : " h5p-hub-hidden"),
                    "aria-label": Q.get("uploadingThrobber")
                }), s.a.createElement("h1", {className: "h5p-hub-upload-instruction-header"}, Q.get("uploadInstructionsTitle")), s.a.createElement(jn, {
                    fileSelected: this.state.fileSelected,
                    fileUploading: this.state.fileUploading,
                    filePath: this.state.filePath,
                    setFocus: this.props.setFocus,
                    onValidate: this.handleValidation,
                    onUpload: this.handleUpload
                }), s.a.createElement("p", {
                    className: "h5p-hub-upload-instruction-description",
                    dangerouslySetInnerHTML: {__html: Q.get("uploadInstructionsContent")}
                }))
            }
        }]), n
    }(s.a.Component);
    kn.propTypes = {onUpload: C.a.func.isRequired, getAjaxUrl: C.a.func.isRequired, setFocus: C.a.bool.isRequired};
    var In = kn;
    n(99);

    function On(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w()(e);
            if (t) {
                var i = w()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return b()(this, n)
        }
    }

    var Pn = function (e) {
        y()(n, e);
        var t = On(n);

        function n(e) {
            var r;
            return o()(this, n), r = t.call(this, e), M()(h()(r), "handleUse", (function (e) {
                r.setState({expanded: !1, title: e.title || e.machineName, infoMessage: null}), r.props.onUse(e)
            })), M()(h()(r), "handleUpload", (function (e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "upload", n = e.h5p.mainLibrary, i = 0; i < e.contentTypes.libraries.length; i++) if (e.contentTypes.libraries[i].machineName === n) {
                    n = e.contentTypes.libraries[i].title;
                    break
                }
                var a = Q.get("uploadSuccess").replace(":title", n);
                "reuse" === t && (a = Q.get("reuseSuccess").replace(":title", n)), r.setState({
                    expanded: !1,
                    title: n,
                    contentTypes: e.contentTypes,
                    infoMessage: {title: a, message: e.contentTypes.details}
                }), r.props.onUpload(e)
            })), M()(h()(r), "handleUpdate", (function (e) {
                r.props.onUpdate(e), r.setState({contentTypes: e})
            })), M()(h()(r), "handleReload", (function () {
                Y(r.props.getAjaxUrl("content-type-cache")).then((function (e) {
                    return r.handleUpdate(e)
                })).catch((function (e) {
                    return r.setState({error: e})
                }))
            })), M()(h()(r), "handleInfoDismiss", (function () {
                r.setState({infoMessage: null})
            })), M()(h()(r), "handleTabPanelSelect", (function (e) {
                r.setState({section: e})
            })), M()(h()(r), "handleRender", (function (e, t) {
                r.props.onRender(e, t)
            })), r.state = {
                expanded: e.expanded,
                section: "h5p-hub-content-types",
                selected: e.selected,
                title: e.title,
                contentTypes: e.contentTypes
            }, r
        }

        return d()(n, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.title !== this.state.title && (this.state.title = e.title), e.expanded !== this.state.expanded && (this.state.expanded = e.expanded)
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.props.onResize()
            }
        }, {
            key: "render", value: function () {
                var e = this;
                return this.handleRender(this.state.title, this.state.expanded), s.a.createElement("section", {
                    className: "h5p-hub",
                    id: "h5p-hub"
                }, s.a.createElement("div", {
                    className: "h5p-hub-panel h5p-hub-section-".concat(this.state.section).concat(this.state.expanded ? " h5p-hub-open" : ""),
                    id: "h5p-hub-panel"
                }, s.a.createElement(W, {
                    title: this.state.title || Q.get("hubPanelLabel"),
                    sectionId: this.state.section,
                    isExpanded: this.state.expanded,
                    togglePanel: function () {
                        return e.setState({expanded: !e.state.expanded})
                    }
                }), s.a.createElement("div", {
                    id: "h5p-hub-panel-body-".concat(this.state.section),
                    role: "region",
                    className: this.state.expanded ? "" : "h5p-hub-hidden"
                }, s.a.createElement(K, {
                    selected: this.state.section,
                    onSelect: this.handleTabPanelSelect,
                    canPaste: this.props.canPaste,
                    canPasteTitle: this.props.canPasteTitle,
                    onPaste: this.props.onPaste
                }, s.a.createElement(Tn, {
                    id: "h5p-hub-content-types",
                    title: Q.get("createContentTabLabel"),
                    contentTypes: this.state.contentTypes,
                    setFocus: this.state.expanded && "h5p-hub-content-types" === this.state.section,
                    getAjaxUrl: this.props.getAjaxUrl,
                    error: this.state.error,
                    onUse: this.handleUse,
                    onInstall: this.handleUpdate,
                    onReload: this.handleReload
                }), this.props.enableContentHub && s.a.createElement(Ht, {
                    id: "h5p-hub-reuse",
                    title: Q.get("reuseContentTabLabel"),
                    isVisible: this.state.expanded && "h5p-hub-reuse" === this.state.section,
                    getAjaxUrl: this.props.getAjaxUrl,
                    onDownload: this.handleUpload
                }), s.a.createElement(In, {
                    id: "h5p-hub-upload",
                    title: Q.get("uploadTabLabel"),
                    getAjaxUrl: this.props.getAjaxUrl,
                    contentId: this.props.contentId,
                    setFocus: this.state.expanded && "h5p-hub-upload" === this.state.section,
                    onUpload: this.handleUpload
                })))), !!this.state.infoMessage && s.a.createElement(Pe, i()({}, this.state.infoMessage, {
                    severity: "info",
                    onClose: this.handleInfoDismiss
                })))
            }
        }]), n
    }(s.a.Component);
    Pn.propTypes = {
        title: C.a.string,
        contentTypes: C.a.object.isRequired,
        selected: C.a.string,
        getAjaxUrl: C.a.func.isRequired,
        onResize: C.a.func.isRequired,
        onUse: C.a.func.isRequired,
        onUpload: C.a.func.isRequired,
        enableContentHub: C.a.bool.isRequired
    };
    var An = Pn, Rn = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en";
        o()(this, e), i()(this, {
            listeners: {}, on: function (e, t, n) {
                var r = {listener: t, scope: n};
                return this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(r), this
            }, trigger: function (e, t) {
                return (this.listeners[e] || []).every((function (e) {
                    return !1 !== e.listener.call(e.scope || this, t)
                }))
            }, propagate: function (e, t, n) {
                var r = this;
                e.forEach((function (e) {
                    return t.on(e, (function (t) {
                        return r.trigger(n || e, t)
                    }))
                }))
            }
        });
        var a = this, l = document.createElement("div");
        Q.init(n), Se.init(r, t.getAjaxUrl("content-hub-metadata-cache"), t.contentTypes);
        var u = function () {
            c.a.render(s.a.createElement(An, {
                title: t.title,
                expanded: t.expanded,
                canPaste: t.canPaste,
                canPasteTitle: t.canPasteTitle,
                contentId: t.contentId,
                contentTypes: t.contentTypes,
                selected: t.selected,
                getAjaxUrl: t.getAjaxUrl,
                onResize: a.trigger.bind(a, "resize"),
                onUse: a.trigger.bind(a, "select"),
                onUpload: a.trigger.bind(a, "upload"),
                onUpdate: a.trigger.bind(a, "update"),
                onPaste: a.trigger.bind(a, "paste"),
                onRender: function (e, n) {
                    t.title = e, t.expanded = n
                },
                enableContentHub: t.enableContentHub
            }), l)
        };
        this.setPanelTitle = function (e, n) {
            t.title = e, t.expanded = n, u()
        }, this.setCanPaste = function (e, n) {
            t.canPaste = e, t.canPasteTitle = n, u()
        }, this.getElement = function () {
            return l
        }, u()
    }
}]);

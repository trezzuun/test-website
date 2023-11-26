(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2962: function (e, t, o) {
      "use strict";
      o.d(t, {
        PB: function () {
          return d;
        },
      });
      var n = o(9008),
        r = o.n(n),
        a = o(7294);
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      function s(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      var l = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        u = function (e, t, o) {
          void 0 === t && (t = []);
          var n = void 0 === o ? {} : o,
            r = n.defaultWidth,
            i = n.defaultHeight;
          return t.reduce(function (t, o, n) {
            return (
              t.push(
                a.createElement("meta", {
                  key: "og:" + e + ":0" + n,
                  property: "og:" + e,
                  content: o.url,
                })
              ),
              o.alt &&
                t.push(
                  a.createElement("meta", {
                    key: "og:" + e + ":alt0" + n,
                    property: "og:" + e + ":alt",
                    content: o.alt,
                  })
                ),
              o.secureUrl &&
                t.push(
                  a.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + n,
                    property: "og:" + e + ":secure_url",
                    content: o.secureUrl.toString(),
                  })
                ),
              o.type &&
                t.push(
                  a.createElement("meta", {
                    key: "og:" + e + ":type0" + n,
                    property: "og:" + e + ":type",
                    content: o.type.toString(),
                  })
                ),
              o.width
                ? t.push(
                    a.createElement("meta", {
                      key: "og:" + e + ":width0" + n,
                      property: "og:" + e + ":width",
                      content: o.width.toString(),
                    })
                  )
                : r &&
                  t.push(
                    a.createElement("meta", {
                      key: "og:" + e + ":width0" + n,
                      property: "og:" + e + ":width",
                      content: r.toString(),
                    })
                  ),
              o.height
                ? t.push(
                    a.createElement("meta", {
                      key: "og:" + e + ":height" + n,
                      property: "og:" + e + ":height",
                      content: o.height.toString(),
                    })
                  )
                : i &&
                  t.push(
                    a.createElement("meta", {
                      key: "og:" + e + ":height" + n,
                      property: "og:" + e + ":height",
                      content: i.toString(),
                    })
                  ),
              t
            );
          }, []);
        },
        c = function (e) {
          var t,
            o,
            n,
            r = [];
          e.titleTemplate && (l.templateTitle = e.titleTemplate);
          var s = "";
          e.title
            ? ((s = e.title),
              l.templateTitle &&
                (s = l.templateTitle.replace(/%s/g, function () {
                  return s;
                })))
            : e.defaultTitle && (s = e.defaultTitle),
            s && r.push(a.createElement("title", { key: "title" }, s));
          var c,
            d,
            p = e.noindex || l.noindex || e.dangerouslySetAllPagesToNoIndex,
            h = e.nofollow || l.nofollow || e.dangerouslySetAllPagesToNoFollow,
            f = "";
          if (e.robotsProps) {
            var m = e.robotsProps,
              g = m.nosnippet,
              y = m.maxSnippet,
              _ = m.maxImagePreview,
              v = m.maxVideoPreview,
              b = m.noarchive,
              w = m.noimageindex,
              E = m.notranslate,
              k = m.unavailableAfter;
            f =
              (g ? ",nosnippet" : "") +
              (y ? ",max-snippet:" + y : "") +
              (_ ? ",max-image-preview:" + _ : "") +
              (b ? ",noarchive" : "") +
              (k ? ",unavailable_after:" + k : "") +
              (w ? ",noimageindex" : "") +
              (v ? ",max-video-preview:" + v : "") +
              (E ? ",notranslate" : "");
          }
          (p || h
            ? (e.dangerouslySetAllPagesToNoIndex && (l.noindex = !0),
              e.dangerouslySetAllPagesToNoFollow && (l.nofollow = !0),
              r.push(
                a.createElement("meta", {
                  key: "robots",
                  name: "robots",
                  content:
                    (p ? "noindex" : "index") +
                    "," +
                    (h ? "nofollow" : "follow") +
                    f,
                })
              ))
            : r.push(
                a.createElement("meta", {
                  key: "robots",
                  name: "robots",
                  content: "index,follow" + f,
                })
              ),
          e.description &&
            r.push(
              a.createElement("meta", {
                key: "description",
                name: "description",
                content: e.description,
              })
            ),
          e.mobileAlternate &&
            r.push(
              a.createElement("link", {
                rel: "alternate",
                key: "mobileAlternate",
                media: e.mobileAlternate.media,
                href: e.mobileAlternate.href,
              })
            ),
          e.languageAlternates &&
            e.languageAlternates.length > 0 &&
            e.languageAlternates.forEach(function (e) {
              r.push(
                a.createElement("link", {
                  rel: "alternate",
                  key: "languageAlternate-" + e.hrefLang,
                  hrefLang: e.hrefLang,
                  href: e.href,
                })
              );
            }),
          e.twitter &&
            (e.twitter.cardType &&
              r.push(
                a.createElement("meta", {
                  key: "twitter:card",
                  name: "twitter:card",
                  content: e.twitter.cardType,
                })
              ),
            e.twitter.site &&
              r.push(
                a.createElement("meta", {
                  key: "twitter:site",
                  name: "twitter:site",
                  content: e.twitter.site,
                })
              ),
            e.twitter.handle &&
              r.push(
                a.createElement("meta", {
                  key: "twitter:creator",
                  name: "twitter:creator",
                  content: e.twitter.handle,
                })
              )),
          e.facebook &&
            e.facebook.appId &&
            r.push(
              a.createElement("meta", {
                key: "fb:app_id",
                property: "fb:app_id",
                content: e.facebook.appId,
              })
            ),
          (null != (t = e.openGraph) && t.title) || s) &&
            r.push(
              a.createElement("meta", {
                key: "og:title",
                property: "og:title",
                content: (null == (c = e.openGraph) ? void 0 : c.title) || s,
              })
            );
          ((null != (o = e.openGraph) && o.description) || e.description) &&
            r.push(
              a.createElement("meta", {
                key: "og:description",
                property: "og:description",
                content:
                  (null == (d = e.openGraph) ? void 0 : d.description) ||
                  e.description,
              })
            );
          if (e.openGraph) {
            if (
              ((e.openGraph.url || e.canonical) &&
                r.push(
                  a.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var T = e.openGraph.type.toLowerCase();
              r.push(
                a.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: T,
                })
              ),
                "profile" === T && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      r.push(
                        a.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      r.push(
                        a.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      r.push(
                        a.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      r.push(
                        a.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === T && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        r.push(
                          a.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      r.push(
                        a.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      r.push(
                        a.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        r.push(
                          a.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === T && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      r.push(
                        a.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      r.push(
                        a.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      r.push(
                        a.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        r.push(
                          a.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      r.push(
                        a.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        r.push(
                          a.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" !== T &&
                      "video.episode" !== T &&
                      "video.tv_show" !== T &&
                      "video.other" !== T) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          r.push(
                            a.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            r.push(
                              a.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        r.push(
                          a.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        r.push(
                          a.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      r.push(
                        a.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      r.push(
                        a.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        r.push(
                          a.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      r.push(
                        a.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            e.defaultOpenGraphImageWidth &&
              (l.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (l.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                r.push.apply(
                  r,
                  u("image", e.openGraph.images, {
                    defaultWidth: l.defaultOpenGraphImageWidth,
                    defaultHeight: l.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (l.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (l.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                r.push.apply(
                  r,
                  u("video", e.openGraph.videos, {
                    defaultWidth: l.defaultOpenGraphVideoWidth,
                    defaultHeight: l.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.locale &&
                r.push(
                  a.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              e.openGraph.site_name &&
                r.push(
                  a.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              r.push(
                a.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t, o, n;
                r.push(
                  a.createElement(
                    "meta",
                    i(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null !=
                            (o = null != (n = e.keyOverride) ? n : e.name)
                              ? o
                              : e.property)
                            ? t
                            : e.httpEquiv),
                      },
                      e
                    )
                  )
                );
              }),
            null != (n = e.additionalLinkTags) &&
              n.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t;
                r.push(
                  a.createElement(
                    "link",
                    i(
                      {
                        key:
                          "link" +
                          (null != (t = e.keyOverride) ? t : e.href) +
                          e.rel,
                      },
                      e
                    )
                  )
                );
              }),
            r
          );
        },
        d =
          (a.Component,
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              s(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.title,
                  o = e.noindex,
                  n = void 0 !== o && o,
                  i = e.nofollow,
                  s = e.robotsProps,
                  l = e.description,
                  u = e.canonical,
                  d = e.openGraph,
                  p = e.facebook,
                  h = e.twitter,
                  f = e.additionalMetaTags,
                  m = e.titleTemplate,
                  g = e.mobileAlternate,
                  y = e.languageAlternates,
                  _ = e.additionalLinkTags;
                return a.createElement(
                  r(),
                  null,
                  c({
                    title: t,
                    noindex: n,
                    nofollow: i,
                    robotsProps: s,
                    description: l,
                    canonical: u,
                    facebook: p,
                    openGraph: d,
                    additionalMetaTags: f,
                    twitter: h,
                    titleTemplate: m,
                    mobileAlternate: g,
                    languageAlternates: y,
                    additionalLinkTags: _,
                  })
                );
              }),
              t
            );
          })(a.Component)),
        p = Object.freeze({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
        });
      new RegExp("[" + Object.keys(p).join("") + "]", "g");
    },
    6840: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return o(507);
        },
      ]);
    },
    507: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          Spinner: function () {
            return m;
          },
          default: function () {
            return y;
          },
          functionsToExecute: function () {
            return g;
          },
        });
      var n,
        r = o(5893),
        a = (o(7107), o(3270), o(4931)),
        i = o(2962);
      function s(e) {
        return (
          (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          s(e)
        );
      }
      function l(e, t) {
        return (
          (l =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          l(e, t)
        );
      }
      function u() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function c(e, t, o) {
        return (
          (c = u()
            ? Reflect.construct
            : function (e, t, o) {
                var n = [null];
                n.push.apply(n, t);
                var r = new (Function.bind.apply(e, n))();
                return o && l(r, o.prototype), r;
              }),
          c.apply(null, arguments)
        );
      }
      function d(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (d = function (e) {
            if (
              null === e ||
              ((o = e),
              -1 === Function.toString.call(o).indexOf("[native code]"))
            )
              return e;
            var o;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return c(e, arguments, s(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              l(n, e)
            );
          }),
          d(e)
        );
      }
      !(function (e) {
        (e.MISSING_MESSAGE = "MISSING_MESSAGE"),
          (e.MISSING_FORMAT = "MISSING_FORMAT"),
          (e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH"),
          (e.INVALID_MESSAGE = "INVALID_MESSAGE"),
          (e.INVALID_KEY = "INVALID_KEY"),
          (e.FORMATTING_ERROR = "FORMATTING_ERROR");
      })(n || (n = {}));
      Error;
      var p = o(1163);
      JSON.parse(
        '{"403":{"title":"Error - Forbidden Page!","description":"You aren\'t allowed to access this page, if you believe this was a mistake please contact us in our discord."},"404":{"title":"Error! - 404 Not found.","description":"This page doesn\'t seem exist, if you believe this was a mistake please contact us in our discord.","Home_Button":"Home"},"Home_Page":{"title":"E-Z.host","description":"Private & Secure File-Uploader","offer":"What we offer","stats":"Statistics","users":"Total Users","uploads":"Uploads","storage":"Storage Used","domains":"Domains","shorteners":"Shorteners","pastes":"Pastes","features":"Features","features_title_1":"Fast","features_description_1":"E-Z.Host\'s fast servers will ensure your files to always be uploaded as fast as possible with no errors.","features_title_2":"Reliable","features_description_2":"With E-Z.Host\'s 99.9% uptime you will always be able to rely on us to be working.","features_title_3":"Customizable","features_description_3":"E-Z.Host has all the modern features + more that you would be looking for in a modern image host.","features_title_4":"Supportive","features_description_4":"E-Z.Host has a helpful community and staff that are always willing you help you with any issues.","features_title_5":"Privacy Friendly","features_description_5":"E-Z.Host respects our user\'s data and will always be clear with what we store and do with your data.","products":"Products","purchase":"Purchase","products_invite_title":"E-Z Host Invite (Lifetime access)","products_invite_description":"Buying an invite is 1 way of gaining default access to E-Z host, you could apply for free via <discord></discord> too","products_invite_wave_title":"E-Z.Host Invite Wave","products_invite_wave_description":"Purchase an invite-wave that will send out an invite to every user that has an account on E-Z.host","products_premium_title":"E-Z.Host Premium Upgrade","products_premium_description":"Upgrades from Standard to Premium, this has benefits such as 75mb per upload, and more.","footer_text":"E-Z Host is a premium service that allows you to upload files with custom domains, jam packed with various amounts of features.","footer_info":"Information","footer_credits":"Credits","footer_contact":"Contact Information","privacy_policy":"Privacy policy","status":"Status","tos":"Terms Of Service","faq":"FAQ","navbar_bios":"Bio Pages","navbar_apply":"Apply"},"Modals":{"login_title":"Login","login_discord":"Login with Discord","login_text":"Login to your E-Z.host account.","username":"Username","password":"Password","email":"Email Address","invite":"Invite Code","forgot_password":"forgot password?","remember_me":"Remember me","login_success":"Successful Login","register_title":"Register","register_text":"Register an E-Z.host account!","register_agree":"I have read and agreed to the<tos></tos>&<privacy></privacy>","nothing_found":"Nothing found.","success":"Success","error":"Error"},"Dashboard":{"welcome":"Welcome, {username}","dashboard_text":"In the dashboard you can view your invites, upload graph and more.","graph_title":"Average Uploads.","graph_description":"This graph will reset every day at 12AM UTC.","invite_error":"You dont have an invite!","invite_create":"Created an invite, Copied to clipboard","invites":"Invites","code":"Code","created":"Created On","actions":"Actions","copy_link":"Copy Link","create_invite":"Create Invite","upload_key":"Upload Key","motd":"MOTD","staff_team":"The Staff Team","user_search":"User Search","user_search_description":"User search allows you to visit the page of a user who has created an account on E-Z.host.","search":"Search","search_placeholder":"Username/ID","total_uploads":"Total Uploads","your_uploads":"Your Uploads","uploads":"{uploads} uploads"},"Sidebar":{"dashboard":"Dashboard","domains":"Domains","settings":"Settings","gallery":"Gallery","other":"Other","upload":"Upload","shorten":"Shorten","help":"Help","overall_lb":"Overall File count","daily_lb":"Daily uploads","weekly_lb":"Weekly Uploads","account":"Account","logout":"Logout"},"Domains":{"domains_description":"In the Domain page you can view all of the donated domains to e-z.host. You can also donate your own domains.","add_domain":"Add A Domain","add_domain_description":"This will make a request to add a domain. Domains need to be accepted by staff first.","allow_wildcards":"Allow Wildcards","private_domain":"Private Domain","unchangable_settings":"These settings are not changeable later.","domain_warning":"If you don\'t own the domain don\'t add it. Spamming random domains will result in a blacklist.","add_domain_button":"Add Domain","domain_official":"OFFICIAL","domain_donated":"DONATED","domain_wildcard":"WILDCARD","domain_private":"PRIVATE","domain_public":"PUBLIC","domain_name":"Name","domain_users":"Users","domain_tags":"Tags","random_domains":"Random Domains","random_domains_selection":"Your current random domain selections are","title":"Domain Preferences","current":"Your current domain is","save":"Save Changes","invalid_domain":"Invalid domain selection","domain_success":"Updated domain preferences successfully."},"TOS":{"title":"Terms Of Service","rule_1":"No creating alts/Ban evading.","rule_1_description":"You agree to making 1 account and 1 account only as well as agreeing not to ban evade","rule_2":"No illegal content of any kind.","rule_2_description":"You agree to not upload gore, indecent images of minors, pirated movies/shows and anything else that can be considered illegal","rule_3":"No account or credential sharing.","rule_3_description":"You agree to not share your email, password, upload key or ShareX config","rule_4":"No ip logging or phishing.","rule_4_description":"You agree to not use url shorteners or embeds maliciously","rule_5":"No spamming the same or similar files, purposely uploading big files to use up storage or mass creating URL shorteners.","rule_5_description":"You agree to not mass upload or mass shorten urls while also not uploading the same file multiple times over.","rule_6":"No abusing any bugs or exploits.","rule_6_description":"You agree to report any bugs or exploits you find without using them to your advantage.","rule_7":"No refunds for any purchases.","rule_7_description":"You agree you cannot refund your purchases. They are digital items and are declaired \'used\' on purchase.","rule_8":"These terms of service are subject to change at any point.","rule_8_description":"You agree to the fact that we can update the ToS at any point."},"FAQ":{"title":"Frequently Asked Questions (FAQ)","question_1":"#1 - What is an image host?","answer_1":"An image host is a service that uses a screenshot tool called \'ShareX\' to take screenshots and upload them to custom domains (links).","question_2":"#2 - How do I get access?","answer_2":"You can apply for free or pay $2.50 on the sellix page.","question_3":"#3 - How do I get premium?","answer_3":"You can donate a domain or pay $5 on the sellix page.","question_4":"#4 - What does premium do?","answer_4":"Premium gives you more upload limit per upload (from 25mb to 75mb)","question_5":"#5 - What platforms do you support?","answer_5":"We support nearly any platform you can think of. Windows, mac, ios, android and linux all work with our host.","question_6":"#6 - How do I know this host is good?","answer_6":"There are plenty of good vouches in the vouches channel in the discord and on front page of the website in the testimonials box.","question_7":"#7 - How do I donate a domain?","answer_7":"When you buy your domain you need to set the nameservers to aron.ns.cloudflare.com & dilbert.ns.cloudflare.com. You can add the domain on the dashboard or open a ticket on discord to add it.","question_8":"#8 - What happened to my old e-z.host account?","answer_8":"Back in August of 2021 we didn\'t really like how the host was running, and felt like we needed a restart. We wiped all users and images and went private for a bit until we felt like we were ready to come back. This will NEVER happen again because ever since that fresh restart we have avoided all the mistakes we made prior to august of 2021, and the host is running smoother than ever.","question_9":"#9 - How do I use the host?","answer_9":"Click here for all of the tutorials.","question_10":"#10 - Is there an upload limit?","answer_10":"25mb per upload for non premium users and 75mb per upload for premium users."},"Privacy":{"title":"E-Z.host Privacy Policy (Updated May 8th, 2022)","policy_1":"When you register.","policy_1_description":"After successfully registering at e-z.host we store your username, hashed password, email & date of registry.","policy_2":"When you login.","policy_2_description":"After successfully logging in at e-z.host your last login & session cookie are saved.","policy_3":"When you upload.","policy_3_description":"After successfully uploading files to e-z.host the file is uploaded to our servers. A log is sent to the discord containing information about the upload (username, file size, time it was uploaded and file type) but not the file itself. We log this information to prevent upload spam. we DO NOT look at anyone\'s files UNLESS we have the suspicion of you breaking the ToS.","policy_4":"When you link your Discord.","policy_4_description":"After successfully linking your discord account to your e-z.host account we store your Discord ID and profile picture. You are also put into our discord server and given user role.","policy_5":"Where your data is stored.","policy_5_description":"Our servers are located in Ashburn, Virgina.","policy_6":"Disclosure of Your Information.","policy_6_description":"We may disclose your information if required to do so by law. In other cases, we will only disclose your information with your consent. We will never sell your data, or hand it over to third-parties outside of what we explained previously.","policy_7":"Cloudflare.","policy_7_description":"All of our website requests are passed through cloudflare. You can find their privacy policy @ cloudflare.com/privacypolicy.","policy_8":"Underaged Users.","policy_8_description":"We require you to be 13 years of age or older. We will never knowingly collect data from children under the age of 13.","policy_9":"Changes to our policy.","policy_9_description":"We can update this privacy policy at any point in time. The update date can be found at the top of the page."},"Oliver":{"OMG":"OH MY GOD! ITS OLIVER","MoreOliver":"Discord - More of oliver!"},"Features":{"title_1":"URL Settings.","title_2":"Embed Settings.","title_3":"Other Settings.","title_4":"Other Features."},"ResetPass":{"title":"Reset Password","description":"Here you can enter your new password!","button":"Change Password"},"UserPage":{"registered":"Registered at","last_login":"Last Logged in at","role":"Role","uploads":"Uploaded Files","invited_by":"Invited By","domain":"Current Domain","invites":"Invites Available","strikes":"Strikes","invited_users":"Invited Users","prev_username":"Previous Usernames"},"Account":{"title":"Here you can view your account info.","email":"Email","role":"Role","invited_by":"Invited By","invited_users":"Invited Users","registration":"Regristration Date"},"Gallery":{"title":"Gallery","description":"Here you can view your most recent files, as well as managing them.","no_uploads":"You haven\'t uploaded any files."},"Pastes":{"title":"Pastes","description":"You can create pastes and manage your already created pastes here.","create":"Create a Paste","create_description":"By creating a paste you will be able to share text with others seemlessly","download":"Download Config","no_pastes":"You haven\'t created any pastes.","delete_success":"Deleted paste successfully.","tags_anon":"Anonymous","tags_one_time":"One Time","copy_url":"Copied paste URL to clipboard.","edit":"Edit","delete":"Delete"},"Settings":{"title":"Configurable Settings","description":"In the Settings page you can, edit your embed, edit your domain, download configs and much more.","title_2":"Managable Settings","description_2":"These settings allow you to customise the way you upload your files to E-Z.host.","embed_profile_success":"Updated embed profile settings.","embed_profile_remove_error":"You need to have at least one profile","embed_profile_remove_success":"Removed embed profile successfully.","embed_profile_add_error":"Can\'t make more than 15 profiles","embed_profile_add_success":"Added embed profile successfully.","embed_enable":"Enabled Embeds Successfully","editing_embed":"Editing Embed: {embed_number}","random_color":"Random Embed Color","sitename":"SiteName","sitename_url":"SiteName Url","author":"Author","author_url":"Author Url","embed_title":"Title","embed_description":"Description","toggle_embeds":"Toggle Embeds","toggle_embeds_description":"Embeds will allow you to have a custom title, description, and color on your embedProfiles.","random_embeds":"Random Embeds","save_embed_profile":"Save Embed Profile","create_embed_profile":"Create Embed Profile","delete_embed_profile":"Delete Embed Profile","screenshot_tools":"Screenshot Tools","screenshot_tools_description":"By downloading a screenshot tool you can setup screenshots via a keybind which makes file-uploading a much faster experience.","tutorials":"There is tutorials on how to install these in our discord server!","localization_success":"Updated localization settings successfully.","wipe_files_error":"You haven\'t uploaded any files","wipe_files_success":"Wiped {file_count} files successfully.","username_success":"Changed username successfully.","password_success":"Changed password successfully.","account_config":"Account Configurator","account_config_description":"These settings allow you to edit your profile on e-z.host","warning":"Warning!","confirm":"Confirm","wipe_confirm":"This will delete all of your personal files! Are you sure you want to do this?","relink_confirm":"Your role will be removed on your previous account.","username_modal":"Change Fields","username_modal_description":"This will edit your username/password","username_change":"Username Change","new_username":"New Username","password_change":"Password Change","current_password":"Current Password","new_password":"New Password","disable_confirm":"Are you sure? Your account will be disabled, this action is not reversible.","disable":"Disable","account_settings":"Account Settings","localization_settings":"These settings allow you to edit your e-z.host time settings","country":"Country:","timezone":"Timezone:","date":"Date Format:","full_time":"24H time","full_time_description":"Change your time to 24H clock instead of 12H, this is entirely optional and your choice.","save_localization":"Save Localization settings","misc_settings":"Misc Settings","url_settings":"URL Settings","embed_settings":"Embed Settings","url_description":"These URL types allow you to customise your filenames and links.","long_url":"Long URL","long_url_description":"Long URL will make your filename 18 characters instead of 8.","fake_url":"Fake URL","fake_url_description":"Fake URL will show fake urls, this only works on discord and might be patched at some point.","emoji_url":"Emoji URL","emoji_url_description":"Emoji URL will replace the file\'s filename with 5-30 random emojis.","show_link":"Show Link","show_link_description":"Show Link will stop discord hiding image links.","custom_url":"Custom URL","custom_url_description":"Custom URL will use your custom character set in a URL.","amogus_url":"Amogus URL","amogus_url_description":"Amogus URL will make your file name pretty sus.","invis_url":"Invisible URL","invis_url_description":"Invisible URL will get rid of the filename at the end of the link of the image.","misc_description":"These Miscellaneous settings allow you to customise what happens to your files.","auto_wipe":"Auto File Wiping","auto_wipe_description":"Auto-file wiping will automatically wipe your files based on a interval you provide.","rand_domain":"Random Domain","rand_domain_description":"Random domain will choose a random domain from a list you provide.","anon_upload":"Anonymous Uploads","anon_upload_description":"Anonymous Uploads will hide your username in the image page.","one_time_upload":"One-time Uploads","one_time_upload_description":"One Time Uploads will delete the content after it has been viewed once.","webhook_log":"Custom Webhook Logging","webhook_log_description":"Custom Webhook Logging will send the file link to your discord webhook whenever you upload.","toggle_setting":"{state} {setting} successfully.","state_enabled":"Enabled","state_disabled":"Disabled"},"Shorteners":{"title":"Shortener","description":"Here you can shorten links directly using a custom domain without needing to install sharex, or you can download the config.","shorten":"Shorten a url","preference":"Domain preference","shorten_button":"Shorten URL","config":"Download Config","no_shorteners":"You haven\'t shortened any urls.","delete_success":"Deleted shortened URL successfully.","click_here":"Click Here","copy_success":"Copied shortened URL to clipboard.","destination":"Destination"},"Upload":{"title":"Upload","description":"Here you can upload files directly to the host without needing to install sharex.","size":"Max size","progress":"Upload Progress","upload_text":"Click to <bold>upload</bold> a file"},"Leaderboards":{"daily_title":"Daily uploads Leaderboard","overall_title":"Overall File Count Leaderboard","weekly_title":"Weekly Leaderboard","description":"Check your current position in the upload leaderboard"}}'
      );
      function h(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              h(e, t, o[t]);
            });
        }
        return e;
      }
      var m = function () {
          return (0, r.jsx)("div", {
            className: "flex h-[30vh] justify-center",
            children: (0, r.jsxs)("div", {
              className: "m-auto flex flex-col items-center",
              children: [
                (0, r.jsx)("img", {
                  src: "/spinner.svg",
                  className: "h-10 w-10",
                }),
                (0, r.jsx)("span", {
                  className:
                    "knock knock mt-2 animate-pulse text-lg text-gray-300",
                  children: "Loading",
                }),
              ],
            }),
          });
        },
        g = new Array();
      function y(e) {
        var t = e.Component,
          o = e.pageProps;
        (0, p.useRouter)();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("meta", { name: "darkreader", content: "test" }),
            (0, r.jsx)(i.PB, {
              title: "E-Z.Bio",
              description: "Bios only for the coolest of kids",
              additionalMetaTags: [
                { property: "theme-color", content: "#000000" },
              ],
              openGraph: {
                title: "E-Z.Bio",
                description: "Bios only for the coolest of kids",
                images: [
                  {
                    url: "https://cdn.e-z.host/e-zimagehosting/skrrrttbald.png",
                    alt: "Bios only for the coolest of kids",
                  },
                ],
              },
            }),
            (0, r.jsx)(a.x7, {}),
            (0, r.jsx)(t, f({}, o)),
          ],
        });
      }
    },
    7107: function () {},
    3270: function () {},
    9008: function (e, t, o) {
      e.exports = o(3121);
    },
    1163: function (e, t, o) {
      e.exports = o(880);
    },
    4931: function (e, t, o) {
      "use strict";
      o.d(t, {
        KM: function () {
          return J;
        },
        Pz: function () {
          return z;
        },
        x7: function () {
          return _e;
        },
        ZP: function () {
          return ve;
        },
      });
      var n = o(7294);
      let r = { data: "" },
        a = (e) =>
          "object" == typeof window
            ? (
                (e ? e.querySelector("#_goober") : window._goober) ||
                Object.assign(
                  (e || document.head).appendChild(
                    document.createElement("style")
                  ),
                  { innerHTML: " ", id: "_goober" }
                )
              ).firstChild
            : e || r,
        i = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        s = /\/\*[^]*?\*\/|  +/g,
        l = /\n+/g,
        u = (e, t) => {
          let o = "",
            n = "",
            r = "";
          for (let a in e) {
            let i = e[a];
            "@" == a[0]
              ? "i" == a[1]
                ? (o = a + " " + i + ";")
                : (n +=
                    "f" == a[1]
                      ? u(i, a)
                      : a + "{" + u(i, "k" == a[1] ? "" : t) + "}")
              : "object" == typeof i
              ? (n += u(
                  i,
                  t
                    ? t.replace(/([^,])+/g, (e) =>
                        a.replace(/(^:.*)|([^,])+/g, (t) =>
                          /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t
                        )
                      )
                    : a
                ))
              : null != i &&
                ((a = /^--/.test(a)
                  ? a
                  : a.replace(/[A-Z]/g, "-$&").toLowerCase()),
                (r += u.p ? u.p(a, i) : a + ":" + i + ";"));
          }
          return o + (t && r ? t + "{" + r + "}" : r) + n;
        },
        c = {},
        d = (e) => {
          if ("object" == typeof e) {
            let t = "";
            for (let o in e) t += o + d(e[o]);
            return t;
          }
          return e;
        },
        p = (e, t, o, n, r) => {
          let a = d(e),
            p =
              c[a] ||
              (c[a] = ((e) => {
                let t = 0,
                  o = 11;
                for (; t < e.length; ) o = (101 * o + e.charCodeAt(t++)) >>> 0;
                return "go" + o;
              })(a));
          if (!c[p]) {
            let t =
              a !== e
                ? e
                : ((e) => {
                    let t,
                      o,
                      n = [{}];
                    for (; (t = i.exec(e.replace(s, ""))); )
                      t[4]
                        ? n.shift()
                        : t[3]
                        ? ((o = t[3].replace(l, " ").trim()),
                          n.unshift((n[0][o] = n[0][o] || {})))
                        : (n[0][t[1]] = t[2].replace(l, " ").trim());
                    return n[0];
                  })(e);
            c[p] = u(r ? { ["@keyframes " + p]: t } : t, o ? "" : "." + p);
          }
          return (
            ((e, t, o) => {
              -1 == t.data.indexOf(e) && (t.data = o ? e + t.data : t.data + e);
            })(c[p], t, n),
            p
          );
        },
        h = (e, t, o) =>
          e.reduce((e, n, r) => {
            let a = t[r];
            if (a && a.call) {
              let e = a(o),
                t = (e && e.props && e.props.className) || (/^go/.test(e) && e);
              a = t
                ? "." + t
                : e && "object" == typeof e
                ? e.props
                  ? ""
                  : u(e, "")
                : !1 === e
                ? ""
                : e;
            }
            return e + n + (null == a ? "" : a);
          }, "");
      function f(e) {
        let t = this || {},
          o = e.call ? e(t.p) : e;
        return p(
          o.unshift
            ? o.raw
              ? h(o, [].slice.call(arguments, 1), t.p)
              : o.reduce(
                  (e, o) => Object.assign(e, o && o.call ? o(t.p) : o),
                  {}
                )
            : o,
          a(t.target),
          t.g,
          t.o,
          t.k
        );
      }
      f.bind({ g: 1 });
      let m,
        g,
        y,
        _ = f.bind({ k: 1 });
      function v(e, t) {
        let o = this || {};
        return function () {
          let n = arguments;
          function r(a, i) {
            let s = Object.assign({}, a),
              l = s.className || r.className;
            (o.p = Object.assign({ theme: g && g() }, s)),
              (o.o = / *go\d+/.test(l)),
              (s.className = f.apply(o, n) + (l ? " " + l : "")),
              t && (s.ref = i);
            let u = e;
            return (
              e[0] && ((u = s.as || e), delete s.as), y && u[0] && y(s), m(u, s)
            );
          }
          return t ? t(r) : r;
        };
      }
      function b() {
        return (
          (b =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
              }
              return e;
            }),
          b.apply(this, arguments)
        );
      }
      function w(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var E,
        k = function (e, t) {
          return (function (e) {
            return "function" === typeof e;
          })(e)
            ? e(t)
            : e;
        },
        T = (function () {
          var e = 0;
          return function () {
            return (++e).toString();
          };
        })(),
        S = (function () {
          var e = void 0;
          return function () {
            if (void 0 === e && "undefined" !== typeof window) {
              var t = matchMedia("(prefers-reduced-motion: reduce)");
              e = !t || t.matches;
            }
            return e;
          };
        })();
      !(function (e) {
        (e[(e.ADD_TOAST = 0)] = "ADD_TOAST"),
          (e[(e.UPDATE_TOAST = 1)] = "UPDATE_TOAST"),
          (e[(e.UPSERT_TOAST = 2)] = "UPSERT_TOAST"),
          (e[(e.DISMISS_TOAST = 3)] = "DISMISS_TOAST"),
          (e[(e.REMOVE_TOAST = 4)] = "REMOVE_TOAST"),
          (e[(e.START_PAUSE = 5)] = "START_PAUSE"),
          (e[(e.END_PAUSE = 6)] = "END_PAUSE");
      })(E || (E = {}));
      var A = new Map(),
        O = function (e) {
          if (!A.has(e)) {
            var t = setTimeout(function () {
              A.delete(e), P({ type: E.REMOVE_TOAST, toastId: e });
            }, 1e3);
            A.set(e, t);
          }
        },
        x = function e(t, o) {
          switch (o.type) {
            case E.ADD_TOAST:
              return b({}, t, {
                toasts: [o.toast].concat(t.toasts).slice(0, 20),
              });
            case E.UPDATE_TOAST:
              return (
                o.toast.id &&
                  (function (e) {
                    var t = A.get(e);
                    t && clearTimeout(t);
                  })(o.toast.id),
                b({}, t, {
                  toasts: t.toasts.map(function (e) {
                    return e.id === o.toast.id ? b({}, e, o.toast) : e;
                  }),
                })
              );
            case E.UPSERT_TOAST:
              var n = o.toast;
              return t.toasts.find(function (e) {
                return e.id === n.id;
              })
                ? e(t, { type: E.UPDATE_TOAST, toast: n })
                : e(t, { type: E.ADD_TOAST, toast: n });
            case E.DISMISS_TOAST:
              var r = o.toastId;
              return (
                r
                  ? O(r)
                  : t.toasts.forEach(function (e) {
                      O(e.id);
                    }),
                b({}, t, {
                  toasts: t.toasts.map(function (e) {
                    return e.id === r || void 0 === r
                      ? b({}, e, { visible: !1 })
                      : e;
                  }),
                })
              );
            case E.REMOVE_TOAST:
              return void 0 === o.toastId
                ? b({}, t, { toasts: [] })
                : b({}, t, {
                    toasts: t.toasts.filter(function (e) {
                      return e.id !== o.toastId;
                    }),
                  });
            case E.START_PAUSE:
              return b({}, t, { pausedAt: o.time });
            case E.END_PAUSE:
              var a = o.time - (t.pausedAt || 0);
              return b({}, t, {
                pausedAt: void 0,
                toasts: t.toasts.map(function (e) {
                  return b({}, e, { pauseDuration: e.pauseDuration + a });
                }),
              });
          }
        },
        G = [],
        I = { toasts: [], pausedAt: void 0 },
        P = function (e) {
          (I = x(I, e)),
            G.forEach(function (e) {
              e(I);
            });
        },
        U = {
          blank: 4e3,
          error: 4e3,
          success: 2e3,
          loading: 1 / 0,
          custom: 4e3,
        },
        D = function (e) {
          return function (t, o) {
            var n = (function (e, t, o) {
              return (
                void 0 === t && (t = "blank"),
                b(
                  {
                    createdAt: Date.now(),
                    visible: !0,
                    type: t,
                    ariaProps: { role: "status", "aria-live": "polite" },
                    message: e,
                    pauseDuration: 0,
                  },
                  o,
                  { id: (null == o ? void 0 : o.id) || T() }
                )
              );
            })(t, e, o);
            return P({ type: E.UPSERT_TOAST, toast: n }), n.id;
          };
        },
        R = function (e, t) {
          return D("blank")(e, t);
        };
      (R.error = D("error")),
        (R.success = D("success")),
        (R.loading = D("loading")),
        (R.custom = D("custom")),
        (R.dismiss = function (e) {
          P({ type: E.DISMISS_TOAST, toastId: e });
        }),
        (R.remove = function (e) {
          return P({ type: E.REMOVE_TOAST, toastId: e });
        }),
        (R.promise = function (e, t, o) {
          var n = R.loading(
            t.loading,
            b({}, o, null == o ? void 0 : o.loading)
          );
          return (
            e
              .then(function (e) {
                return (
                  R.success(
                    k(t.success, e),
                    b({ id: n }, o, null == o ? void 0 : o.success)
                  ),
                  e
                );
              })
              .catch(function (e) {
                R.error(
                  k(t.error, e),
                  b({ id: n }, o, null == o ? void 0 : o.error)
                );
              }),
            e
          );
        });
      var C = function (e) {
        var t = (function (e) {
            void 0 === e && (e = {});
            var t = (0, n.useState)(I),
              o = t[0],
              r = t[1];
            (0, n.useEffect)(
              function () {
                return (
                  G.push(r),
                  function () {
                    var e = G.indexOf(r);
                    e > -1 && G.splice(e, 1);
                  }
                );
              },
              [o]
            );
            var a = o.toasts.map(function (t) {
              var o, n, r;
              return b({}, e, e[t.type], t, {
                duration:
                  t.duration ||
                  (null == (o = e[t.type]) ? void 0 : o.duration) ||
                  (null == (n = e) ? void 0 : n.duration) ||
                  U[t.type],
                style: b(
                  {},
                  e.style,
                  null == (r = e[t.type]) ? void 0 : r.style,
                  t.style
                ),
              });
            });
            return b({}, o, { toasts: a });
          })(e),
          o = t.toasts,
          r = t.pausedAt;
        (0, n.useEffect)(
          function () {
            if (!r) {
              var e = Date.now(),
                t = o.map(function (t) {
                  if (t.duration !== 1 / 0) {
                    var o =
                      (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                    if (!(o < 0))
                      return setTimeout(function () {
                        return R.dismiss(t.id);
                      }, o);
                    t.visible && R.dismiss(t.id);
                  }
                });
              return function () {
                t.forEach(function (e) {
                  return e && clearTimeout(e);
                });
              };
            }
          },
          [o, r]
        );
        var a = (0, n.useMemo)(
          function () {
            return {
              startPause: function () {
                P({ type: E.START_PAUSE, time: Date.now() });
              },
              endPause: function () {
                r && P({ type: E.END_PAUSE, time: Date.now() });
              },
              updateHeight: function (e, t) {
                return P({ type: E.UPDATE_TOAST, toast: { id: e, height: t } });
              },
              calculateOffset: function (e, t) {
                var n,
                  r = t || {},
                  a = r.reverseOrder,
                  i = void 0 !== a && a,
                  s = r.gutter,
                  l = void 0 === s ? 8 : s,
                  u = r.defaultPosition,
                  c = o.filter(function (t) {
                    return (t.position || u) === (e.position || u) && t.height;
                  }),
                  d = c.findIndex(function (t) {
                    return t.id === e.id;
                  }),
                  p = c.filter(function (e, t) {
                    return t < d && e.visible;
                  }).length,
                  h = (n = c.filter(function (e) {
                    return e.visible;
                  })).slice
                    .apply(n, i ? [p + 1] : [0, p])
                    .reduce(function (e, t) {
                      return e + (t.height || 0) + l;
                    }, 0);
                return h;
              },
            };
          },
          [o, r]
        );
        return { toasts: o, handlers: a };
      };
      function N() {
        var e = w([
          "\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",
          ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ",
          " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: ",
          " 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",
          ";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: ",
          " 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      function L() {
        var e = w([
          "\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}",
        ]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = w([
          "\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = w([
          "\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}",
        ]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      var H = _(M()),
        W = _(j()),
        F = _(L()),
        z = v("div")(
          N(),
          function (e) {
            return e.primary || "#ff4b4b";
          },
          H,
          W,
          function (e) {
            return e.secondary || "#fff";
          },
          F
        );
      function Y() {
        var e = w([
          "\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",
          ";\n  border-right-color: ",
          ";\n  animation: ",
          " 1s linear infinite;\n",
        ]);
        return (
          (Y = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = w([
          "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      var Z = _(V()),
        B = v("div")(
          Y(),
          function (e) {
            return e.secondary || "#e0e0e0";
          },
          function (e) {
            return e.primary || "#616161";
          },
          Z
        );
      function q() {
        var e = w([
          "\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",
          ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ",
          " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: ",
          " 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",
          ";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n",
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      function K() {
        var e = w([
          "\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}",
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      function Q() {
        var e = w([
          "\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}",
        ]);
        return (
          (Q = function () {
            return e;
          }),
          e
        );
      }
      var X = _(Q()),
        $ = _(K()),
        J = v("div")(
          q(),
          function (e) {
            return e.primary || "#61d345";
          },
          X,
          $,
          function (e) {
            return e.secondary || "#fff";
          }
        );
      function ee() {
        var e = w([
          "\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: ",
          " 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = w([
          "\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}",
        ]);
        return (
          (te = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = w([
          "\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n",
        ]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = w(["\n  position: absolute;\n"]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      var re = v("div")(ne()),
        ae = v("div")(oe()),
        ie = _(te()),
        se = v("div")(ee(), ie),
        le = function (e) {
          var t = e.toast,
            o = t.icon,
            r = t.type,
            a = t.iconTheme;
          return void 0 !== o
            ? "string" === typeof o
              ? (0, n.createElement)(se, null, o)
              : o
            : "blank" === r
            ? null
            : (0, n.createElement)(
                ae,
                null,
                (0, n.createElement)(B, Object.assign({}, a)),
                "loading" !== r &&
                  (0, n.createElement)(
                    re,
                    null,
                    "error" === r
                      ? (0, n.createElement)(z, Object.assign({}, a))
                      : (0, n.createElement)(J, Object.assign({}, a))
                  )
              );
        };
      function ue() {
        var e = w([
          "\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n",
        ]);
        return (
          (ue = function () {
            return e;
          }),
          e
        );
      }
      function ce() {
        var e = w([
          "\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n",
        ]);
        return (
          (ce = function () {
            return e;
          }),
          e
        );
      }
      var de = function (e) {
          return (
            "\n0% {transform: translate3d(0," +
            -200 * e +
            "%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"
          );
        },
        pe = function (e) {
          return (
            "\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0," +
            -150 * e +
            "%,-1px) scale(.6); opacity:0;}\n"
          );
        },
        he = v("div", n.forwardRef)(ce()),
        fe = v("div")(ue()),
        me = (0, n.memo)(function (e) {
          var t = e.toast,
            o = e.position,
            r = e.style,
            a = e.children,
            i =
              null != t && t.height
                ? (function (e, t) {
                    var o = e.includes("top") ? 1 : -1,
                      n = S()
                        ? [
                            "0%{opacity:0;} 100%{opacity:1;}",
                            "0%{opacity:1;} 100%{opacity:0;}",
                          ]
                        : [de(o), pe(o)],
                      r = n[1];
                    return {
                      animation: t
                        ? _(n[0]) +
                          " 0.35s cubic-bezier(.21,1.02,.73,1) forwards"
                        : _(r) + " 0.4s forwards cubic-bezier(.06,.71,.55,1)",
                    };
                  })(t.position || o || "top-center", t.visible)
                : { opacity: 0 },
            s = (0, n.createElement)(le, { toast: t }),
            l = (0, n.createElement)(
              fe,
              Object.assign({}, t.ariaProps),
              k(t.message, t)
            );
          return (0,
          n.createElement)(he, { className: t.className, style: b({}, i, r, t.style) }, "function" === typeof a ? a({ icon: s, message: l }) : (0, n.createElement)(n.Fragment, null, s, l));
        });
      function ge() {
        var e = w([
          "\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n",
        ]);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      !(function (e, t, o, n) {
        (u.p = t), (m = e), (g = o), (y = n);
      })(n.createElement);
      var ye = f(ge()),
        _e = function (e) {
          var t = e.reverseOrder,
            o = e.position,
            r = void 0 === o ? "top-center" : o,
            a = e.toastOptions,
            i = e.gutter,
            s = e.children,
            l = e.containerStyle,
            u = e.containerClassName,
            c = C(a),
            d = c.toasts,
            p = c.handlers;
          return (0, n.createElement)(
            "div",
            {
              style: b(
                {
                  position: "fixed",
                  zIndex: 9999,
                  top: 16,
                  left: 16,
                  right: 16,
                  bottom: 16,
                  pointerEvents: "none",
                },
                l
              ),
              className: u,
              onMouseEnter: p.startPause,
              onMouseLeave: p.endPause,
            },
            d.map(function (e) {
              var o,
                a = e.position || r,
                l = (function (e, t) {
                  var o = e.includes("top"),
                    n = o ? { top: 0 } : { bottom: 0 },
                    r = e.includes("center")
                      ? { justifyContent: "center" }
                      : e.includes("right")
                      ? { justifyContent: "flex-end" }
                      : {};
                  return b(
                    {
                      left: 0,
                      right: 0,
                      display: "flex",
                      position: "absolute",
                      transition: S()
                        ? void 0
                        : "all 230ms cubic-bezier(.21,1.02,.73,1)",
                      transform: "translateY(" + t * (o ? 1 : -1) + "px)",
                    },
                    n,
                    r
                  );
                })(
                  a,
                  p.calculateOffset(e, {
                    reverseOrder: t,
                    gutter: i,
                    defaultPosition: r,
                  })
                ),
                u = e.height
                  ? void 0
                  : ((o = function (t) {
                      p.updateHeight(e.id, t.height);
                    }),
                    function (e) {
                      e &&
                        setTimeout(function () {
                          var t = e.getBoundingClientRect();
                          o(t);
                        });
                    });
              return (0,
              n.createElement)("div", { ref: u, className: e.visible ? ye : "", key: e.id, style: l }, "custom" === e.type ? k(e.message, e) : s ? s(e) : (0, n.createElement)(me, { toast: e, position: a }));
            })
          );
        },
        ve = R;
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(880);
    });
    var o = e.O();
    _N_E = o;
  },
]);

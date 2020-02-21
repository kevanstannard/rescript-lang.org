

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Markdown from "../components/Markdown.bs.js";
import * as ColorTheme from "../common/ColorTheme.bs.js";
import * as ApiMarkdown from "../components/ApiMarkdown.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Router from "next/router";
import * as SidebarLayout from "./SidebarLayout.bs.js";

function JavaScriptApiLayout$Docs(Props) {
  var navHook = Props.navHook;
  Props.theme;
  var $staropt$star = Props.components;
  var children = Props.children;
  var components = $staropt$star !== undefined ? Caml_option.valFromOption($staropt$star) : ApiMarkdown.$$default;
  var router = Router.useRouter();
  ColorTheme.toCN(/* Js */16617);
  var categories = [
    {
      name: "Introduction",
      items: [{
          name: "Overview",
          href: "/apis/javascript/latest"
        }]
    },
    {
      name: "JavaScript",
      items: [
        {
          name: "Js Module",
          href: "/apis/javascript/latest/js"
        },
        {
          name: "Belt Stdlib",
          href: "/apis/javascript/latest/belt"
        }
      ]
    }
  ];
  var match = React.useState((function () {
          return false;
        }));
  var setSidebarOpen = match[1];
  var toggleSidebar = function (param) {
    return Curry._1(setSidebarOpen, (function (prev) {
                  return !prev;
                }));
  };
  var sidebar = React.createElement(SidebarLayout.Sidebar.make, {
        categories: categories,
        route: router.route,
        isOpen: match[0],
        toggle: toggleSidebar
      });
  return React.createElement(SidebarLayout.make, {
              navHook: navHook,
              theme: /* Js */16617,
              components: components,
              sidebar: /* tuple */[
                sidebar,
                toggleSidebar
              ],
              route: router.route,
              children: children
            });
}

var Docs = {
  make: JavaScriptApiLayout$Docs
};

function JavaScriptApiLayout$Prose(Props) {
  var navHook = Props.navHook;
  var children = Props.children;
  return React.createElement(JavaScriptApiLayout$Docs, {
              navHook: navHook,
              components: Markdown.$$default,
              children: children
            });
}

var Prose = {
  make: JavaScriptApiLayout$Prose
};

var Link = /* alias */0;

var Sidebar = /* alias */0;

export {
  Link ,
  Sidebar ,
  Docs ,
  Prose ,
  
}
/* react Not a pure module */

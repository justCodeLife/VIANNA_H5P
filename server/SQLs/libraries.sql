drop table if exists libraries;
CREATE TABLE libraries
(
    id                int           NOT NULL primary key,
    created_at        datetime      NOT NULL DEFAULT current_timestamp,
    name              varchar(127)  NOT NULL index name,
    title             varchar(255)  NOT NULL,
    major_version     int           NOT NULL,
    minor_version     int           NOT NULL,
    patch_version     int           NOT NULL,
    runnable          int           NOT NULL,
    fullscreen        int           NOT NULL,
    embed_types       varchar(255)  NOT NULL,
    preloaded_js      varchar(max)           DEFAULT NULL,
    preloaded_css     varchar(max)           DEFAULT NULL,
    semantics         varchar(max)  NOT NULL,
    tutorial_url      varchar(1023) NOT NULL,
    has_icon          int           NOT NULL DEFAULT 0,
    metadata_settings varchar(max)           DEFAULT NULL,
    index name_version (name, major_version, minor_version),
);

insert into dbo.libraries (id, created_at, name, title, major_version, minor_version, patch_version, runnable,
                           fullscreen, embed_types, preloaded_js, preloaded_css, semantics, tutorial_url, has_icon,
                           metadata_settings)
values (1, N'2021-04-25 12:23:28.000', N'Drop', N'Drop', 1, 0, 2, 0, 0, N'', N'js/drop.min.js',
        N'css/drop-theme-arrows-bounce.min.css', N'', N'', 0, null),
       (2, N'2021-04-25 12:23:28.000', N'EmbeddedJS', N'Embedded JS', 1, 0, 4, 0, 0, N'',
        N'js/ejs_production.js, js/ejs_viewhelpers.js', N'', N'', N'', 0, null),
       (3, N'2021-04-25 12:23:28.000', N'FontAwesome', N'Font Awesome', 4, 5, 4, 0, 0, N'', N'',
        N'h5p-font-awesome.min.css', N'', N'', 0, null),
       (4, N'2021-04-25 12:23:28.000', N'H5P.AdvancedText', N'Text', 1, 1, 11, 0, 0, N'', N'text.js', N'text.css', N'[
  {
    "name": "text",
    "type": "text",
    "widget": "html",
    "label": "Text",
    "importance": "high",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "del",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ],
    "font": {
      "size": true,
      "color": true,
      "background": true
    }
  }
]
', N'', 0, N'{"disable":false,"disableExtraTitleField":true}'),
       (5, N'2021-04-25 12:23:28.000', N'H5P.Blanks', N'Fill in the Blanks', 1, 12, 11, 1, 0, N'iframe',
        N'js/blanks.js, js/cloze.js', N'css/blanks.css', N'[
  {
    "name": "media",
    "type": "group",
    "label": "Media",
    "importance": "medium",
    "fields": [
      {
        "name": "type",
        "type": "library",
        "label": "Type",
        "options": [
          "H5P.Image 1.1",
          "H5P.Video 1.5"
        ],
        "optional": true,
        "description": "Optional media to display above the question."
      },
      {
        "name": "disableImageZooming",
        "type": "boolean",
        "label": "Disable image zooming",
        "importance": "low",
        "default": false,
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "type",
              "equals": "H5P.Image 1.1"
            }
          ]
        }
      }
    ]
  },
  {
    "label": "Task description",
    "importance": "high",
    "name": "text",
    "type": "text",
    "widget": "html",
    "default": "Fill in the missing words",
    "description": "A guide telling the user how to answer this task.",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  },
  {
    "name": "questions",
    "type": "list",
    "label": "Text blocks",
    "importance": "high",
    "entity": "text block",
    "min": 1,
    "max": 31,
    "field": {
      "name": "question",
      "type": "text",
      "widget": "html",
      "label": "Line of text",
      "importance": "high",
      "placeholder": "Oslo is the capital of *Norway*.",
      "description": "",
      "important": {
        "description": "<ul><li>Blanks are added with an asterisk (*) in front and behind the correct word/phrase.</li><li>Alternative answers are separated with a forward slash (/).</li><li>You may add a textual tip, using a colon (:) in front of the tip.</li></ul>",
        "example": "H5P content may be edited using a *browser/web-browser:Something you use every day*."
      },
      "enterMode": "p",
      "tags": [
        "strong",
        "em",
        "del",
        "u",
        "code"
      ]
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "label": "Text for \"Show solutions\" button",
    "name": "showSolutions",
    "type": "text",
    "default": "Show solution",
    "common": true
  },
  {
    "label": "Text for \"Retry\" button",
    "importance": "low",
    "name": "tryAgain",
    "type": "text",
    "default": "Retry",
    "common": true,
    "optional": true
  },
  {
    "label": "Text for \"Check\" button",
    "importance": "low",
    "name": "checkAnswer",
    "type": "text",
    "default": "Check",
    "common": true,
    "optional": true
  },
  {
    "label": "Text for \"Not filled out\" message",
    "importance": "low",
    "name": "notFilledOut",
    "type": "text",
    "default": "Please fill in all blanks to view solution",
    "common": true,
    "optional": true
  },
  {
    "label": "Text for \"'':ans'' is correct\" message",
    "importance": "low",
    "name": "answerIsCorrect",
    "type": "text",
    "default": "'':ans'' is correct",
    "common": true,
    "optional": true
  },
  {
    "label": "Text for \"'':ans'' is wrong\" message",
    "importance": "low",
    "name": "answerIsWrong",
    "type": "text",
    "default": "'':ans'' is wrong",
    "common": true,
    "optional": true
  },
  {
    "label": "Text for \"Answered correctly\" message",
    "importance": "low",
    "name": "answeredCorrectly",
    "type": "text",
    "default": "Answered correctly",
    "common": true,
    "optional": true
  },
  {
    "label": "Text for \"Answered incorrectly\" message",
    "importance": "low",
    "name": "answeredIncorrectly",
    "type": "text",
    "default": "Answered incorrectly",
    "common": true,
    "optional": true
  },
  {
    "label": "Assistive technology label for solution",
    "importance": "low",
    "name": "solutionLabel",
    "type": "text",
    "default": "Correct answer:",
    "common": true,
    "optional": true
  },
  {
    "label": "Assistive technology label for input field",
    "importance": "low",
    "name": "inputLabel",
    "type": "text",
    "description": "Use @num and @total to replace current cloze number and total cloze number",
    "default": "Blank input @num of @total",
    "common": true,
    "optional": true
  },
  {
    "label": "Assistive technology label for saying an input has a tip tied to it",
    "importance": "low",
    "name": "inputHasTipLabel",
    "type": "text",
    "default": "Tip available",
    "common": true,
    "optional": true
  },
  {
    "label": "Tip icon label",
    "importance": "low",
    "name": "tipLabel",
    "type": "text",
    "default": "Tip",
    "common": true,
    "optional": true
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings.",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "optional": true,
    "fields": [
      {
        "label": "Enable \"Retry\"",
        "importance": "low",
        "name": "enableRetry",
        "type": "boolean",
        "default": true,
        "optional": true
      },
      {
        "label": "Enable \"Show solution\" button",
        "importance": "low",
        "name": "enableSolutionsButton",
        "type": "boolean",
        "default": true,
        "optional": true
      },
      {
        "name": "enableCheckButton",
        "type": "boolean",
        "label": "Enable \"Check\" button",
        "widget": "none",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "label": "Automatically check answers after input",
        "importance": "low",
        "name": "autoCheck",
        "type": "boolean",
        "default": false,
        "optional": true
      },
      {
        "name": "caseSensitive",
        "importance": "low",
        "type": "boolean",
        "default": true,
        "label": "Case sensitive",
        "description": "Makes sure the user input has to be exactly the same as the answer."
      },
      {
        "label": "Require all fields to be answered before the solution can be viewed",
        "importance": "low",
        "name": "showSolutionsRequiresInput",
        "type": "boolean",
        "default": true,
        "optional": true
      },
      {
        "label": "Put input fields on separate lines",
        "importance": "low",
        "name": "separateLines",
        "type": "boolean",
        "default": false,
        "optional": true
      },
      {
        "label": "Show confirmation dialog on \"Check\"",
        "importance": "low",
        "name": "confirmCheckDialog",
        "type": "boolean",
        "description": "This options is not compatible with the \"Automatically check answers after input\" option",
        "default": false
      },
      {
        "label": "Show confirmation dialog on \"Retry\"",
        "importance": "low",
        "name": "confirmRetryDialog",
        "type": "boolean",
        "default": false
      },
      {
        "name": "acceptSpellingErrors",
        "type": "boolean",
        "label": "Accept minor spelling errors",
        "importance": "low",
        "description": "If activated, an answer will also count as correct with minor spelling errors (3-9 characters: 1 spelling error, more than 9 characters: 2 spelling errors)",
        "default": false,
        "optional": true
      }
    ]
  },
  {
    "label": "Check confirmation dialog",
    "importance": "low",
    "name": "confirmCheck",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Header text",
        "importance": "low",
        "name": "header",
        "type": "text",
        "default": "Finish ?"
      },
      {
        "label": "Body text",
        "importance": "low",
        "name": "body",
        "type": "text",
        "default": "Are you sure you wish to finish ?",
        "widget": "html",
        "enterMode": "p",
        "tags": [
          "strong",
          "em",
          "del",
          "u",
          "code"
        ]
      },
      {
        "label": "Cancel button label",
        "importance": "low",
        "name": "cancelLabel",
        "type": "text",
        "default": "Cancel"
      },
      {
        "label": "Confirm button label",
        "importance": "low",
        "name": "confirmLabel",
        "type": "text",
        "default": "Finish"
      }
    ]
  },
  {
    "label": "Retry confirmation dialog",
    "importance": "low",
    "name": "confirmRetry",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Header text",
        "importance": "low",
        "name": "header",
        "type": "text",
        "default": "Retry ?"
      },
      {
        "label": "Body text",
        "importance": "low",
        "name": "body",
        "type": "text",
        "default": "Are you sure you wish to retry ?",
        "widget": "html",
        "enterMode": "p",
        "tags": [
          "strong",
          "em",
          "del",
          "u",
          "code"
        ]
      },
      {
        "label": "Cancel button label",
        "importance": "low",
        "name": "cancelLabel",
        "type": "text",
        "default": "Cancel"
      },
      {
        "label": "Confirm button label",
        "importance": "low",
        "name": "confirmLabel",
        "type": "text",
        "default": "Confirm"
      }
    ]
  },
  {
    "name": "scoreBarLabel",
    "type": "text",
    "label": "Textual representation of the score bar for those using a readspeaker",
    "default": "You got :num out of :total points",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yCheck",
    "type": "text",
    "label": "Assistive technology description for \"Check\" button",
    "default": "Check the answers. The responses will be marked as correct, incorrect, or unanswered.",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yShowSolution",
    "type": "text",
    "label": "Assistive technology description for \"Show Solution\" button",
    "default": "Show the solution. The task will be marked with its correct solution.",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yRetry",
    "type": "text",
    "label": "Assistive technology description for \"Retry\" button",
    "default": "Retry the task. Reset all responses and start the task over again.",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yCheckingModeHeader",
    "type": "text",
    "label": "Assistive technology description for starting task",
    "default": "Checking mode",
    "importance": "low",
    "common": true
  }
]
', N'', 1, null),
       (6, N'2021-04-25 12:23:28.000', N'H5P.CKEditor', N'CKEditor wrapper/loader for H5P', 1, 0, 2, 0, 0, N'',
        N'h5p-ckeditor.js', N'', N'', N'', 0, null),
       (7, N'2021-04-25 12:23:28.000', N'H5P.DragNBar', N'Drag N Bar', 1, 5, 12, 0, 0, N'',
        N'scripts/drag-n-bar.js, scripts/context-menu.js, scripts/dialog.js, scripts/drag-n-bar-element.js, scripts/drag-n-bar-form-manager.js',
        N'styles/drag-n-bar.css, styles/dialog.css, styles/context-menu.css, styles/drag-n-bar-form-manager.css', N'',
        N'', 0, null),
       (8, N'2021-04-25 12:23:28.000', N'H5P.DragNDrop', N'Drag N Drop', 1, 1, 5, 0, 0, N'', N'drag-n-drop.js', N'',
        N'', N'', 0, null),
       (9, N'2021-04-25 12:23:28.000', N'H5P.DragNResize', N'Drag''N Resize', 1, 2, 6, 0, 0, N'', N'H5P.DragNResize.js',
        N'H5P.DragNResize.css', N'', N'', 0, null),
       (10, N'2021-04-25 12:23:28.000', N'H5P.DragQuestion', N'Drag and Drop', 1, 13, 14, 1, 0, N'iframe',
        N'h5p-drag-question.js', N'css/dragquestion.css', N'[
  {
    "name": "scoreShow",
    "type": "text",
    "label": "Check answer button",
    "importance": "low",
    "default": "Check",
    "common": true
  },
  {
    "name": "tryAgain",
    "type": "text",
    "label": "Retry button",
    "importance": "low",
    "default": "Retry",
    "common": true,
    "optional": true
  },
  {
    "label": "Score explanation text",
    "importance": "low",
    "name": "scoreExplanation",
    "type": "text",
    "default": "Correct answers give +1 point. Incorrect answers give -1 point. The lowest possible score is 0.",
    "common": true,
    "optional": true
  },
  {
    "name": "question",
    "importance": "high",
    "type": "group",
    "widget": "wizard",
    "fields": [
      {
        "name": "settings",
        "type": "group",
        "label": "Settings",
        "importance": "high",
        "fields": [
          {
            "name": "background",
            "type": "image",
            "label": "Background image",
            "importance": "low",
            "optional": true,
            "description": "Optional. Select an image to use as background for your drag and drop task."
          },
          {
            "name": "size",
            "type": "group",
            "widget": "dimensions",
            "label": "Task size",
            "importance": "low",
            "description": "Specify how large (in px) the play area should be.",
            "default": {
              "width": 620,
              "height": 310,
              "field": "background"
            },
            "fields": [
              {
                "name": "width",
                "type": "number"
              },
              {
                "name": "height",
                "type": "number"
              }
            ]
          }
        ]
      },
      {
        "name": "task",
        "type": "group",
        "widget": "dragQuestion",
        "label": "Task",
        "importance": "high",
        "description": "Start by placing your drop zones.<br/>Next, place your droppable elements and check off the appropriate drop zones.<br/>Last, edit your drop zone again and check off the correct answers.",
        "fields": [
          {
            "name": "elements",
            "type": "list",
            "label": "Elements",
            "importance": "high",
            "entity": "element",
            "field": {
              "type": "group",
              "label": "Element",
              "importance": "high",
              "fields": [
                {
                  "name": "type",
                  "type": "library",
                  "description": "Choose the type of content you would like to add.",
                  "importance": "medium",
                  "options": [
                    "H5P.AdvancedText 1.1",
                    "H5P.Image 1.1"
                  ]
                },
                {
                  "name": "x",
                  "type": "number",
                  "widget": "none"
                },
                {
                  "name": "y",
                  "type": "number",
                  "widget": "none"
                },
                {
                  "name": "height",
                  "type": "number",
                  "widget": "none"
                },
                {
                  "name": "width",
                  "type": "number",
                  "widget": "none"
                },
                {
                  "name": "dropZones",
                  "type": "select",
                  "widget": "dynamicCheckboxes",
                  "label": "Select drop zones",
                  "importance": "high",
                  "multiple": true
                },
                {
                  "name": "backgroundOpacity",
                  "type": "number",
                  "label": "Background Opacity",
                  "importance": "low",
                  "min": 0,
                  "max": 100,
                  "step": 5,
                  "default": 100,
                  "optional": true
                },
                {
                  "name": "multiple",
                  "type": "boolean",
                  "label": "Infinite number of element instances",
                  "importance": "low",
                  "description": "Clones this element so that it can be dragged to multiple drop zones.",
                  "default": false
                }
              ]
            }
          },
          {
            "name": "dropZones",
            "type": "list",
            "label": "Drop Zones",
            "importance": "high",
            "entity": "Drop Zone",
            "field": {
              "type": "group",
              "label": "Drop Zone",
              "importance": "high",
              "fields": [
                {
                  "name": "label",
                  "type": "text",
                  "widget": "html",
                  "label": "Label",
                  "importance": "medium",
                  "enterMode": "div",
                  "tags": [
                    "strong",
                    "em",
                    "del",
                    "code"
                  ]
                },
                {
                  "name": "showLabel",
                  "type": "boolean",
                  "label": "Show label",
                  "importance": "low"
                },
                {
                  "name": "x",
                  "type": "number",
                  "widget": "none"
                },
                {
                  "name": "y",
                  "type": "number",
                  "widget": "none"
                },
                {
                  "name": "height",
                  "type": "number",
                  "widget": "none"
                },
                {
                  "name": "width",
                  "type": "number",
                  "widget": "none"
                },
                {
                  "name": "correctElements",
                  "type": "select",
                  "widget": "dynamicCheckboxes",
                  "label": "Select correct elements",
                  "importance": "low",
                  "multiple": true
                },
                {
                  "name": "backgroundOpacity",
                  "type": "number",
                  "label": "Background Opacity",
                  "importance": "low",
                  "min": 0,
                  "max": 100,
                  "step": 5,
                  "default": 100,
                  "optional": true
                },
                {
                  "name": "tipsAndFeedback",
                  "type": "group",
                  "label": "Tips and feedback",
                  "importance": "low",
                  "optional": true,
                  "fields": [
                    {
                      "name": "tip",
                      "label": "Tip text",
                      "importance": "low",
                      "type": "text",
                      "widget": "html",
                      "tags": [
                        "p",
                        "br",
                        "strong",
                        "em",
                        "code"
                      ],
                      "optional": true
                    },
                    {
                      "name": "feedbackOnCorrect",
                      "type": "text",
                      "label": "Message displayed on correct match",
                      "importance": "low",
                      "description": "Message will appear below the task on \"check\" if correct droppable is matched.",
                      "optional": true
                    },
                    {
                      "name": "feedbackOnIncorrect",
                      "type": "text",
                      "label": "Message displayed on incorrect match",
                      "importance": "low",
                      "description": "Message will appear below the task on \"check\" if the match is incorrect.",
                      "optional": true
                    }
                  ]
                },
                {
                  "name": "single",
                  "type": "boolean",
                  "label": "This drop zone can only contain one element",
                  "description": "Make sure there is only one correct answer for this dropzone",
                  "importance": "low",
                  "default": false
                },
                {
                  "name": "autoAlign",
                  "type": "boolean",
                  "label": "Enable Auto-Align",
                  "importance": "low",
                  "description": "Will auto-align all draggables dropped in this zone."
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "optional": true,
    "fields": [
      {
        "name": "enableRetry",
        "type": "boolean",
        "label": "Enable \"Retry\"",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableCheckButton",
        "type": "boolean",
        "label": "Enable \"Check\" button",
        "widget": "none",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "label": "Require user input before the solution can be viewed",
        "importance": "low",
        "name": "showSolutionsRequiresInput",
        "type": "boolean",
        "default": true
      },
      {
        "name": "singlePoint",
        "type": "boolean",
        "label": "Give one point for the whole task",
        "importance": "low",
        "description": "Disable to give one point for each draggable that is placed correctly.",
        "default": false
      },
      {
        "label": "Apply penalties",
        "name": "applyPenalties",
        "type": "boolean",
        "description": "Apply penalties for elements dropped in the wrong drop zones. This must be enabled when the same element(s) are able to be dropped into multiple drop zones, or if there is only one drop-zone. If this is not enabled, learners may match all items to all drop-zones and always receive a full score.",
        "default": true
      },
      {
        "name": "enableScoreExplanation",
        "type": "boolean",
        "label": "Enable score explanation",
        "description": "Display a score explanation to user when checking their answers (if the ''Apply penalties'' option has been selected).",
        "importance": "low",
        "default": true,
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "singlePoint",
              "equals": false
            }
          ]
        }
      },
      {
        "name": "backgroundOpacity",
        "type": "text",
        "label": "Background opacity for draggables",
        "importance": "low",
        "description": "If this field is set, it will override opacity set on all draggable elements. This should be a number between 0 and 100, where 0 means full transparency and 100 means no transparency",
        "optional": true
      },
      {
        "name": "dropZoneHighlighting",
        "type": "select",
        "label": "Drop Zone Highlighting",
        "importance": "low",
        "description": "Choose when to highlight drop zones.",
        "default": "dragging",
        "options": [
          {
            "value": "dragging",
            "label": "When dragging"
          },
          {
            "value": "always",
            "label": "Always"
          },
          {
            "value": "never",
            "label": "Never"
          }
        ]
      },
      {
        "name": "autoAlignSpacing",
        "type": "number",
        "label": "Spacing for Auto-Align (in px)",
        "importance": "low",
        "min": 0,
        "default": 2,
        "optional": true
      },
      {
        "name": "enableFullScreen",
        "label": "Enable FullScreen",
        "importance": "low",
        "type": "boolean",
        "description": "Check this option to enable the full screen button.",
        "default": false
      },
      {
        "name": "showScorePoints",
        "type": "boolean",
        "label": "Show score points",
        "description": "Show points earned for each answer. Not available when the ''Give one point for the whole task'' option is enabled.",
        "importance": "low",
        "default": true
      },
      {
        "name": "showTitle",
        "type": "boolean",
        "label": "Show Title",
        "importance": "low",
        "description": "Uncheck this option if you do not want this title to be displayed. The title will only be displayed in summaries, statistics etc.",
        "default": true
      }
    ]
  },
  {
    "name": "localize",
    "type": "group",
    "label": "Localize",
    "common": true,
    "fields": [
      {
        "name": "fullscreen",
        "type": "text",
        "label": "Fullscreen label",
        "default": "Fullscreen"
      },
      {
        "name": "exitFullscreen",
        "type": "text",
        "label": "Exit fullscreen label",
        "default": "Exit fullscreen"
      }
    ]
  },
  {
    "name": "grabbablePrefix",
    "type": "text",
    "label": "Grabbable prefix",
    "importance": "low",
    "default": "Grabbable {num} of {total}.",
    "common": true
  },
  {
    "name": "grabbableSuffix",
    "type": "text",
    "label": "Grabbable suffix",
    "importance": "low",
    "default": "Placed in dropzone {num}.",
    "common": true
  },
  {
    "name": "dropzonePrefix",
    "type": "text",
    "label": "Dropzone prefix",
    "importance": "low",
    "default": "Dropzone {num} of {total}.",
    "common": true
  },
  {
    "name": "noDropzone",
    "type": "text",
    "label": "No dropzone selection label",
    "importance": "low",
    "default": "No dropzone.",
    "common": true
  },
  {
    "name": "tipLabel",
    "type": "text",
    "label": "Label for show tip button",
    "importance": "low",
    "default": "Show tip.",
    "common": true
  },
  {
    "name": "tipAvailable",
    "type": "text",
    "label": "Label for tip available",
    "importance": "low",
    "default": "Tip available",
    "common": true
  },
  {
    "name": "correctAnswer",
    "type": "text",
    "label": "Label for correct answer",
    "importance": "low",
    "default": "Correct answer",
    "common": true
  },
  {
    "name": "wrongAnswer",
    "type": "text",
    "label": "Label for incorrect answer",
    "importance": "low",
    "default": "Wrong answer",
    "common": true
  },
  {
    "name": "feedbackHeader",
    "type": "text",
    "label": "Header for panel containing feedback for correct/incorrect answers",
    "importance": "low",
    "default": "Feedback",
    "common": true
  },
  {
    "name": "scoreBarLabel",
    "type": "text",
    "label": "Textual representation of the score bar for those using a readspeaker",
    "default": "You got :num out of :total points",
    "importance": "low",
    "common": true
  },
  {
    "name": "scoreExplanationButtonLabel",
    "type": "text",
    "label": "Textual representation of the score explanation button",
    "default": "Show score explanation",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yCheck",
    "type": "text",
    "label": "Assistive technology label for \"Check\" button",
    "default": "Check the answers. The responses will be marked as correct, incorrect, or unanswered.",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yRetry",
    "type": "text",
    "label": "Assistive technology label for \"Retry\" button",
    "default": "Retry the task. Reset all responses and start the task over again.",
    "importance": "low",
    "common": true
  }
]', N'', 1, null),
       (11, N'2021-04-25 12:23:28.000', N'H5P.DragText', N'Drag Text', 1, 8, 13, 1, 0, N'iframe',
        N'dist/h5p-drag-text.js', N'dist/h5p-drag-text.css', N'[
  {
    "label": "Task description",
    "importance": "high",
    "name": "taskDescription",
    "type": "text",
    "widget": "html",
    "description": "Describe how the user should solve the task.",
    "default": "Drag the words into the correct boxes",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  },
  {
    "label": "Text",
    "importance": "high",
    "name": "textField",
    "type": "text",
    "widget": "textarea",
    "placeholder": "*Oslo* is the capital of Norway, *Stockholm* is the capital of Sweden and *Copenhagen* is the capital of Denmark. All cities are located in the *Scandinavian:Northern Part of Europe* peninsula.",
    "description": "",
    "important": {
      "description": "<ul><li>Droppable words are added with an asterisk (*) in front and behind the correct word/phrase.</li><li>You may add a textual tip, using a colon (:) in front of the tip.</li><li>For every empty spot there is only one correct word.</li><li>You may add feedback to be displayed when a task is completed. Use ''\\+'' for correct and ''\\-'' for incorrect feedback.</li></ul>",
      "example": "H5P content may be edited using a *browser:What type of program is Chrome?*. </br> H5P content is *interactive\\+Correct! \\-Incorrect, try again!*"
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "label": "Text for \"Check\" button",
    "importance": "low",
    "name": "checkAnswer",
    "type": "text",
    "default": "Check",
    "common": true
  },
  {
    "label": "Text for \"Retry\" button",
    "importance": "low",
    "name": "tryAgain",
    "type": "text",
    "default": "Retry",
    "common": true
  },
  {
    "label": "Text for \"Show Solution\" button",
    "importance": "low",
    "name": "showSolution",
    "type": "text",
    "default": "Show solution",
    "common": true
  },
  {
    "label": "Numbered Drop zone label",
    "importance": "low",
    "name": "dropZoneIndex",
    "type": "text",
    "default": "Drop Zone @index.",
    "description": "Label used for accessibility, where the Read speaker will read the index of a drop zone. Variable available: @index",
    "common": true
  },
  {
    "label": "Empty Drop Zone label",
    "importance": "low",
    "name": "empty",
    "type": "text",
    "default": "Drop Zone @index is empty.",
    "description": "Label used for accessibility, where the Read speaker will read that the drop zone is empty",
    "common": true
  },
  {
    "label": "Contains Drop Zone label",
    "importance": "low",
    "name": "contains",
    "type": "text",
    "default": "Drop Zone @index contains draggable @draggable.",
    "description": "Label used for accessibility, where the Read speaker will read that the drop zone contains a draggable",
    "common": true
  },
  {
    "label": "Draggable elements label",
    "importance": "low",
    "name": "ariaDraggableIndex",
    "type": "text",
    "default": "@index of @count draggables.",
    "description": "Label used for accessibility, where the Read speaker reads that this is a draggable element. Variable available: @index, @count",
    "common": true
  },
  {
    "label": "Label for show tip button",
    "importance": "low",
    "name": "tipLabel",
    "type": "text",
    "default": "Show tip",
    "description": "Label used for accessibility, where the Read speaker reads it before the tip is read out",
    "common": true
  },
  {
    "name": "correctText",
    "type": "text",
    "label": "Readspeaker text for correct answer",
    "importance": "low",
    "default": "Correct!",
    "common": true
  },
  {
    "name": "incorrectText",
    "type": "text",
    "label": "Readspeaker text for incorrect answer",
    "importance": "low",
    "default": "Incorrect!",
    "common": true
  },
  {
    "name": "resetDropTitle",
    "type": "text",
    "label": "Confirmation dialog title that user wants to reset a droppable",
    "importance": "low",
    "default": "Reset drop",
    "common": true
  },
  {
    "name": "resetDropDescription",
    "type": "text",
    "label": "Confirmation dialog description that user wants to reset a droppable",
    "importance": "low",
    "default": "Are you sure you want to reset this drop zone?",
    "common": true
  },
  {
    "name": "grabbed",
    "type": "text",
    "label": "Label used for accessibility, where the read speaker indicates that dragging is initiated",
    "importance": "low",
    "default": "Draggable is grabbed.",
    "common": true
  },
  {
    "name": "cancelledDragging",
    "type": "text",
    "label": "Label used for accessibility, where the read speaker indicates that dragging is canceled",
    "importance": "low",
    "default": "Cancelled dragging.",
    "common": true
  },
  {
    "name": "correctAnswer",
    "type": "text",
    "label": "Label used for accessibility, where the read speaker indicates that a text is the correct answer",
    "importance": "low",
    "default": "Correct answer:",
    "common": true
  },
  {
    "name": "feedbackHeader",
    "type": "text",
    "label": "Header for panel containing feedback for correct/incorrect answers",
    "importance": "low",
    "default": "Feedback",
    "common": true
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings.",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "optional": true,
    "fields": [
      {
        "label": "Enable \"Retry\"",
        "importance": "low",
        "name": "enableRetry",
        "type": "boolean",
        "default": true
      },
      {
        "label": "Enable \"Show Solution\" button",
        "importance": "low",
        "name": "enableSolutionsButton",
        "type": "boolean",
        "default": true
      },
      {
        "name": "enableCheckButton",
        "type": "boolean",
        "label": "Enable \"Check\" button",
        "widget": "none",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "label": "Instant feedback",
        "importance": "low",
        "name": "instantFeedback",
        "type": "boolean",
        "default": false,
        "optional": true
      }
    ]
  },
  {
    "name": "scoreBarLabel",
    "type": "text",
    "label": "Textual representation of the score bar for those using a readspeaker",
    "default": "You got :num out of :total points",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yCheck",
    "type": "text",
    "label": "Assistive technology label for \"Check\" button",
    "default": "Check the answers. The responses will be marked as correct, incorrect, or unanswered.",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yShowSolution",
    "type": "text",
    "label": "Assistive technology label for \"Show Solution\" button",
    "default": "Show the solution. The task will be marked with its correct solution.",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yRetry",
    "type": "text",
    "label": "Assistive technology label for \"Retry\" button",
    "default": "Retry the task. Reset all responses and start the task over again.",
    "importance": "low",
    "common": true
  }
]', N'', 1, null),
       (12, N'2021-04-25 12:23:28.000', N'H5P.FontIcons', N'H5P.FontIcons', 1, 0, 6, 0, 0, N'', N'',
        N'styles/h5p-font-icons.css', N'', N'', 0, null),
       (13, N'2021-04-25 12:23:28.000', N'H5P.FreeTextQuestion', N'Free Text Question', 1, 0, 12, 0, 0, N'',
        N'h5p-free-text-question.js', N'h5p-free-text-question.css', N'[
  {
    "label": "Question",
    "name": "question",
    "type": "text",
    "importance": "high"
  },
  {
    "label": "Placeholder text",
    "name": "placeholder",
    "type": "text",
    "importance": "high",
    "default": "Enter your response here",
    "description": "Text that initially will be shown in the input field. Will be removed automatically when the user starts writing."
  },
  {
    "label": "Max score",
    "name": "maxScore",
    "type": "number",
    "importance": "high",
    "description": "Used for grading and not shown to the learner",
    "default": 1
  },
  {
    "label": "Required",
    "name": "isRequired",
    "type": "boolean",
    "importance": "high",
    "description": "Learners must provide an answer in order to proceed"
  },
  {
    "label": "Localize Free Text Question buttons",
    "name": "i10n",
    "type": "group",
    "common": true,
    "collapsed": true,
    "importance": "low",
    "fields": [
      {
        "label": "Required text label",
        "name": "requiredText",
        "type": "text",
        "description": "Text shown to notify learner that input is required before proceeding",
        "default": "required",
        "importance": "low"
      },
      {
        "label": "Required message",
        "name": "requiredMessage",
        "type": "text",
        "importance": "low",
        "default": "This question requires an answer",
        "description": "Will display if this field is unanswered and required by a wrapper content type"
      },
      {
        "label": "Skip button label",
        "name": "skipButtonLabel",
        "type": "text",
        "default": "Skip Question",
        "importance": "low"
      },
      {
        "label": "Proceed button label",
        "name": "submitButtonLabel",
        "type": "text",
        "default": "Answer and proceed",
        "importance": "low"
      },
      {
        "name": "language",
        "type": "select",
        "label": "Wysiwyg editor language",
        "importance": "medium",
        "description": "The language of the wysiwyg user interface",
        "options": [
          {
            "value": "af",
            "label": "Afrikaans"
          },
          {
            "value": "ar",
            "label": "Arabic"
          },
          {
            "value": "az",
            "label": "Azerbaijani"
          },
          {
            "value": "bg",
            "label": "Bulgarian"
          },
          {
            "value": "bn",
            "label": "Bengali"
          },
          {
            "value": "bs",
            "label": "Bosnian"
          },
          {
            "value": "ca",
            "label": "Catalan"
          },
          {
            "value": "cs",
            "label": "Czech"
          },
          {
            "value": "cy",
            "label": "Welsh"
          },
          {
            "value": "da",
            "label": "Danish"
          },
          {
            "value": "de-ch",
            "label": "German (Switzerland)"
          },
          {
            "value": "de",
            "label": "German"
          },
          {
            "value": "el",
            "label": "Greek"
          },
          {
            "value": "en-au",
            "label": "English (Australia)"
          },
          {
            "value": "en-ca",
            "label": "English (Canada)"
          },
          {
            "value": "en-gb",
            "label": "English (United Kingdom)"
          },
          {
            "value": "en",
            "label": "English"
          },
          {
            "value": "eo",
            "label": "Esperanto"
          },
          {
            "value": "es-mx",
            "label": "Spanish (Mexico)"
          },
          {
            "value": "es",
            "label": "Spanish (Spain)"
          },
          {
            "value": "et",
            "label": "Estonian"
          },
          {
            "value": "eu",
            "label": "Basque"
          },
          {
            "value": "fa",
            "label": "Farsi"
          },
          {
            "value": "fi",
            "label": "Finnish"
          },
          {
            "value": "fo",
            "label": "Faeroese"
          },
          {
            "value": "fr-ca",
            "label": "French (Canada)"
          },
          {
            "value": "fr",
            "label": "French (Standard)"
          },
          {
            "value": "gl",
            "label": "Galician"
          },
          {
            "value": "gu",
            "label": "Gujarati"
          },
          {
            "value": "he",
            "label": "Hebrew (modern)"
          },
          {
            "value": "hi",
            "label": "Hindi"
          },
          {
            "value": "hr",
            "label": "Croatian"
          },
          {
            "value": "hu",
            "label": "Hungarian"
          },
          {
            "value": "id",
            "label": "Indonesian"
          },
          {
            "value": "is",
            "label": "Icelandic"
          },
          {
            "value": "it",
            "label": "Italian (Standard)"
          },
          {
            "value": "ja",
            "label": "Japanese"
          },
          {
            "value": "ka",
            "label": "Georgian"
          },
          {
            "value": "km",
            "label": "Central Khmer"
          },
          {
            "value": "ko",
            "label": "Korean"
          },
          {
            "value": "ku",
            "label": "Kurdish"
          },
          {
            "value": "lt",
            "label": "Lithuanian"
          },
          {
            "value": "lv",
            "label": "Latvian"
          },
          {
            "value": "mk",
            "label": "Macedonian"
          },
          {
            "value": "mn",
            "label": "Mongolian"
          },
          {
            "value": "ms",
            "label": "Malay"
          },
          {
            "value": "nb",
            "label": "Norwegian Bokmål"
          },
          {
            "value": "nl",
            "label": "Dutch (Standard)"
          },
          {
            "value": "no",
            "label": "Norwegian"
          },
          {
            "value": "oc",
            "label": "Occitan"
          },
          {
            "value": "pl",
            "label": "Polish"
          },
          {
            "value": "pt-br",
            "label": "Portuguese (Brazil)"
          },
          {
            "value": "pt",
            "label": "Portuguese (Portugal)"
          },
          {
            "value": "ro",
            "label": "Romanian"
          },
          {
            "value": "ru",
            "label": "Russian"
          },
          {
            "value": "si",
            "label": "Sinhala/Sinhalese"
          },
          {
            "value": "sk",
            "label": "Slovak"
          },
          {
            "value": "sl",
            "label": "Slovenian"
          },
          {
            "value": "sq",
            "label": "Albanian"
          },
          {
            "value": "sr-latn",
            "label": "Serbian (Latin)"
          },
          {
            "value": "sr",
            "label": "Serbian"
          },
          {
            "value": "sv",
            "label": "Swedish"
          },
          {
            "value": "th",
            "label": "Thai"
          },
          {
            "value": "tr",
            "label": "Turkish"
          },
          {
            "value": "tt",
            "label": "Tatar"
          },
          {
            "value": "ug",
            "label": "Uighur/Uyghur"
          },
          {
            "value": "uk",
            "label": "Ukrainian"
          },
          {
            "value": "vi",
            "label": "Vietnamese"
          },
          {
            "value": "zh-cn",
            "label": "Chinese (PRC)"
          }
        ],
        "default": "en"
      }
    ]
  }
]
', N'', 0, null),
       (14, N'2021-04-25 12:23:28.000', N'H5P.GoToQuestion', N'Crossroads', 1, 3, 13, 0, 0, N'',
        N'scripts/go-to-question.js', N'styles/go-to-question.css', N'[
  {
    "name": "text",
    "type": "text",
    "label": "Question Text",
    "importance": "high",
    "description": "The question that the user will make a choice based upon."
  },
  {
    "name": "choices",
    "type": "list",
    "label": "Choices",
    "importance": "high",
    "entity": "choice",
    "min": 2,
    "field": {
      "name": "choice",
      "type": "group",
      "fields": [
        {
          "name": "text",
          "type": "text",
          "label": "Choice Text",
          "importance": "high",
          "description": "The label that will displayed on the choice button."
        },
        {
          "name": "goTo",
          "type": "number",
          "widget": "timecode",
          "label": "Go To",
          "importance": "high",
          "description": "The target time the user will be taken to upon pressing the choice button. Enter timecode in the format M:SS."
        },
        {
          "name": "ifChosenText",
          "type": "text",
          "optional": true,
          "label": "If Chosen Text",
          "importance": "low",
          "description": "An optional confirmation text that will be displayed after the user has pressed the choice button."
        }
      ]
    }
  },
  {
    "name": "continueButtonLabel",
    "type": "text",
    "label": "Continue Button Label",
    "importance": "low",
    "default": "Continue",
    "common": true
  }
]', N'', 0, N'{"disable":true,"disableExtraTitleField":true}'),
       (15, N'2021-04-25 12:23:28.000', N'H5P.GuidedTour', N'Guided tour', 1, 0, 5, 0, 0, N'',
        N'scripts/h5p-guided-tour.js', N'styles/h5p-guided-tour.css', N'', N'', 0, null),
       (16, N'2021-04-25 12:23:28.000', N'H5P.IVHotspot', N'Navigation Hotspot', 1, 2, 14, 0, 0, N'',
        N'scripts/iv-hotspot.js', N'styles/iv-hotspot.css', N'[
  {
    "name": "destination",
    "label": "Destination",
    "type": "group",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "type",
        "label": "Type",
        "type": "select",
        "importance": "high",
        "widget": "selectToggleFields",
        "options": [
          {
            "value": "timecode",
            "label": "Timecode",
            "hideFields": [
              "url"
            ]
          },
          {
            "value": "url",
            "label": "Another page (URL)",
            "hideFields": [
              "time"
            ]
          }
        ],
        "default": "timecode"
      },
      {
        "name": "time",
        "type": "number",
        "widget": "timecode",
        "label": "Go To",
        "importance": "high",
        "description": "The target time the user will be taken to upon pressing the hotspot. Enter timecode in the format M:SS.",
        "optional": true
      },
      {
        "name": "url",
        "type": "group",
        "label": "URL",
        "importance": "high",
        "widget": "linkWidget",
        "optional": true,
        "fields": [
          {
            "name": "protocol",
            "type": "select",
            "label": "Protocol",
            "importance": "high",
            "options": [
              {
                "value": "http://",
                "label": "http://"
              },
              {
                "value": "https://",
                "label": "https://"
              },
              {
                "value": "/",
                "label": "(root relative)"
              },
              {
                "value": "other",
                "label": "other"
              }
            ],
            "optional": true,
            "default": "http://"
          },
          {
            "name": "url",
            "type": "text",
            "label": "URL",
            "importance": "high",
            "optional": true
          }
        ]
      }
    ]
  },
  {
    "name": "visuals",
    "type": "group",
    "label": "Visuals",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "shape",
        "type": "select",
        "label": "Shape",
        "importance": "low",
        "options": [
          {
            "value": "rectangular",
            "label": "Rectangular"
          },
          {
            "value": "circular",
            "label": "Circular"
          },
          {
            "value": "rounded-rectangle",
            "label": "Rounded Rectangle"
          }
        ],
        "default": "rectangular"
      },
      {
        "name": "backgroundColor",
        "type": "text",
        "label": "Background color for hotspot",
        "widget": "colorSelector",
        "importance": "low",
        "default": "rgba(255, 255, 255, 0)",
        "spectrum": {
          "showInput": true,
          "showAlpha": true,
          "preferredFormat": "rgb",
          "showPalette": true,
          "palette": [
            [
              "rgba(255, 255, 255, 0)"
            ],
            [
              "rgb(67, 67, 67)",
              "rgb(102, 102, 102)",
              "rgb(204, 204, 204)",
              "rgb(217, 217, 217)",
              "rgb(255, 255, 255)"
            ],
            [
              "rgb(152, 0, 0)",
              "rgb(255, 0, 0)",
              "rgb(255, 153, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 255, 255)",
              "rgb(74, 134, 232)",
              "rgb(0, 0, 255)",
              "rgb(153, 0, 255)",
              "rgb(255, 0, 255)"
            ],
            [
              "rgb(230, 184, 175)",
              "rgb(244, 204, 204)",
              "rgb(252, 229, 205)",
              "rgb(255, 242, 204)",
              "rgb(217, 234, 211)",
              "rgb(208, 224, 227)",
              "rgb(201, 218, 248)",
              "rgb(207, 226, 243)",
              "rgb(217, 210, 233)",
              "rgb(234, 209, 220)",
              "rgb(221, 126, 107)",
              "rgb(234, 153, 153)",
              "rgb(249, 203, 156)",
              "rgb(255, 229, 153)",
              "rgb(182, 215, 168)",
              "rgb(162, 196, 201)",
              "rgb(164, 194, 244)",
              "rgb(159, 197, 232)",
              "rgb(180, 167, 214)",
              "rgb(213, 166, 189)",
              "rgb(204, 65, 37)",
              "rgb(224, 102, 102)",
              "rgb(246, 178, 107)",
              "rgb(255, 217, 102)",
              "rgb(147, 196, 125)",
              "rgb(118, 165, 175)",
              "rgb(109, 158, 235)",
              "rgb(111, 168, 220)",
              "rgb(142, 124, 195)",
              "rgb(194, 123, 160)",
              "rgb(166, 28, 0)",
              "rgb(204, 0, 0)",
              "rgb(230, 145, 56)",
              "rgb(241, 194, 50)",
              "rgb(106, 168, 79)",
              "rgb(69, 129, 142)",
              "rgb(60, 120, 216)",
              "rgb(61, 133, 198)",
              "rgb(103, 78, 167)",
              "rgb(166, 77, 121)",
              "rgb(91, 15, 0)",
              "rgb(102, 0, 0)",
              "rgb(120, 63, 4)",
              "rgb(127, 96, 0)",
              "rgb(39, 78, 19)",
              "rgb(12, 52, 61)",
              "rgb(28, 69, 135)",
              "rgb(7, 55, 99)",
              "rgb(32, 18, 77)",
              "rgb(76, 17, 48)"
            ]
          ]
        }
      },
      {
        "name": "pointerCursor",
        "type": "boolean",
        "label": "Use pointer cursor",
        "importance": "low",
        "default": true
      },
      {
        "name": "animation",
        "type": "boolean",
        "label": "Add blinking effect",
        "importance": "low",
        "description": "Note: Blinking effect is always enabled in the editor so you are able to find transparent hotspots"
      }
    ]
  },
  {
    "name": "texts",
    "type": "group",
    "label": "Texts",
    "expanded": true,
    "importance": "low",
    "fields": [
      {
        "name": "alternativeText",
        "type": "text",
        "importance": "low",
        "label": "Alternative Text",
        "description": "Describe the subject the hotspot covers. Used for readspeakers",
        "placeholder": "An apple on a table",
        "optional": false
      },
      {
        "name": "label",
        "type": "text",
        "importance": "low",
        "label": "Hotspot Label",
        "optional": true
      },
      {
        "name": "showLabel",
        "type": "boolean",
        "label": "Show label",
        "importance": "low",
        "default": false
      },
      {
        "name": "labelColor",
        "type": "text",
        "label": "Label color",
        "widget": "showWhen",
        "importance": "low",
        "optional": true,
        "default": "rgb(0, 0, 0)",
        "showWhen": {
          "detach": false,
          "widget": "colorSelector",
          "rules": [
            {
              "field": "showLabel",
              "equals": true
            }
          ]
        },
        "spectrum": {
          "showInput": true,
          "showAlpha": true,
          "preferredFormat": "rgb",
          "showPalette": true,
          "palette": [
            [
              "rgba(255, 255, 255, 0)"
            ],
            [
              "rgb(67, 67, 67)",
              "rgb(102, 102, 102)",
              "rgb(204, 204, 204)",
              "rgb(217, 217, 217)",
              "rgb(255, 255, 255)"
            ],
            [
              "rgb(152, 0, 0)",
              "rgb(255, 0, 0)",
              "rgb(255, 153, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 255, 255)",
              "rgb(74, 134, 232)",
              "rgb(0, 0, 255)",
              "rgb(153, 0, 255)",
              "rgb(255, 0, 255)"
            ],
            [
              "rgb(230, 184, 175)",
              "rgb(244, 204, 204)",
              "rgb(252, 229, 205)",
              "rgb(255, 242, 204)",
              "rgb(217, 234, 211)",
              "rgb(208, 224, 227)",
              "rgb(201, 218, 248)",
              "rgb(207, 226, 243)",
              "rgb(217, 210, 233)",
              "rgb(234, 209, 220)",
              "rgb(221, 126, 107)",
              "rgb(234, 153, 153)",
              "rgb(249, 203, 156)",
              "rgb(255, 229, 153)",
              "rgb(182, 215, 168)",
              "rgb(162, 196, 201)",
              "rgb(164, 194, 244)",
              "rgb(159, 197, 232)",
              "rgb(180, 167, 214)",
              "rgb(213, 166, 189)",
              "rgb(204, 65, 37)",
              "rgb(224, 102, 102)",
              "rgb(246, 178, 107)",
              "rgb(255, 217, 102)",
              "rgb(147, 196, 125)",
              "rgb(118, 165, 175)",
              "rgb(109, 158, 235)",
              "rgb(111, 168, 220)",
              "rgb(142, 124, 195)",
              "rgb(194, 123, 160)",
              "rgb(166, 28, 0)",
              "rgb(204, 0, 0)",
              "rgb(230, 145, 56)",
              "rgb(241, 194, 50)",
              "rgb(106, 168, 79)",
              "rgb(69, 129, 142)",
              "rgb(60, 120, 216)",
              "rgb(61, 133, 198)",
              "rgb(103, 78, 167)",
              "rgb(166, 77, 121)",
              "rgb(91, 15, 0)",
              "rgb(102, 0, 0)",
              "rgb(120, 63, 4)",
              "rgb(127, 96, 0)",
              "rgb(39, 78, 19)",
              "rgb(12, 52, 61)",
              "rgb(28, 69, 135)",
              "rgb(7, 55, 99)",
              "rgb(32, 18, 77)",
              "rgb(76, 17, 48)"
            ]
          ]
        }
      }
    ]
  }
]', N'', 0, N'{"disable":true,"disableExtraTitleField":true}'),
       (17, N'2021-04-25 12:23:28.000', N'H5P.Image', N'Image', 1, 1, 10, 0, 0, N'', N'image.js', N'image.css', N'[
  {
    "name": "file",
    "type": "image",
    "label": "Image",
    "importance": "high",
    "disableCopyright": true
  },
  {
    "name": "alt",
    "type": "text",
    "label": "Alternative text",
    "importance": "high",
    "description": "Required. If the browser can''t load the image this text will be displayed instead. Also used by \"text-to-speech\" readers."
  },
  {
    "name": "title",
    "type": "text",
    "label": "Hover text",
    "importance": "low",
    "description": "Optional. This text is displayed when the users hover their pointing device over the image.",
    "optional": true
  },
  {
    "name": "contentName",
    "type": "text",
    "label": "Image content name",
    "importance": "low",
    "common": true,
    "default": "Image"
  }
]
', N'', 0, N'{"disable":false,"disableExtraTitleField":true}'),
       (18, N'2021-04-25 12:23:28.000', N'H5P.InteractiveVideo', N'Interactive Video', 1, 22, 4, 1, 1, N'iframe',
        N'dist/h5p-interactive-video.js', N'dist/h5p-interactive-video.css', N'[
  {
    "name": "interactiveVideo",
    "type": "group",
    "widget": "wizard",
    "label": "Interactive Video Editor",
    "importance": "high",
    "fields": [
      {
        "name": "video",
        "type": "group",
        "label": "Upload/embed video",
        "importance": "high",
        "fields": [
          {
            "name": "files",
            "type": "video",
            "label": "Add a video",
            "importance": "high",
            "description": "Click below to add a video you wish to use in your interactive video. You can add a video link or upload video files. It is possible to add several versions of the video with different qualities. To ensure maximum support in browsers at least add a version in webm and mp4 formats.",
            "extraAttributes": [
              "metadata"
            ],
            "enableCustomQualityLabel": true
          },
          {
            "name": "startScreenOptions",
            "type": "group",
            "label": "Start screen options (unsupported for YouTube videos)",
            "importance": "low",
            "fields": [
              {
                "name": "title",
                "type": "text",
                "label": "The title of this interactive video",
                "importance": "low",
                "maxLength": 60,
                "default": "Interactive Video",
                "description": "Used in summaries, statistics etc."
              },
              {
                "name": "hideStartTitle",
                "type": "boolean",
                "label": "Hide title on video start screen",
                "importance": "low",
                "optional": true,
                "default": false
              },
              {
                "name": "shortStartDescription",
                "type": "text",
                "label": "Short description (Optional)",
                "importance": "low",
                "optional": true,
                "maxLength": 120,
                "description": "Optional. Display a short description text on the video start screen. Does not work for YouTube videos."
              },
              {
                "name": "poster",
                "type": "image",
                "label": "Poster image",
                "importance": "low",
                "optional": true,
                "description": "Image displayed before the user launches the video. Does not work for YouTube Videos."
              }
            ]
          },
          {
            "name": "textTracks",
            "type": "group",
            "label": "Text tracks (unsupported for YouTube videos)",
            "importance": "low",
            "fields": [
              {
                "name": "videoTrack",
                "type": "list",
                "label": "Available text tracks",
                "importance": "low",
                "optional": true,
                "entity": "Track",
                "min": 0,
                "defaultNum": 1,
                "field": {
                  "name": "track",
                  "type": "group",
                  "label": "Track",
                  "importance": "low",
                  "expanded": false,
                  "fields": [
                    {
                      "name": "label",
                      "type": "text",
                      "label": "Track label",
                      "description": "Used if you offer multiple tracks and the user has to choose a track. For instance ''Spanish subtitles'' could be the label of a Spanish subtitle track.",
                      "importance": "low",
                      "default": "Subtitles",
                      "optional": true
                    },
                    {
                      "name": "kind",
                      "type": "select",
                      "label": "Type of text track",
                      "importance": "low",
                      "default": "subtitles",
                      "options": [
                        {
                          "value": "subtitles",
                          "label": "Subtitles"
                        },
                        {
                          "value": "captions",
                          "label": "Captions"
                        },
                        {
                          "value": "descriptions",
                          "label": "Descriptions"
                        }
                      ]
                    },
                    {
                      "name": "srcLang",
                      "type": "text",
                      "label": "Source language, must be defined for subtitles",
                      "importance": "low",
                      "default": "en",
                      "description": "Must be a valid BCP 47 language tag. If ''Subtitles'' is the type of text track selected, the source language of the track must be defined."
                    },
                    {
                      "name": "track",
                      "type": "file",
                      "label": "Track source (WebVTT file)",
                      "importance": "low"
                    }
                  ]
                }
              },
              {
                "name": "defaultTrackLabel",
                "type": "text",
                "label": "Default text track",
                "description": "If left empty or not matching any of the text tracks the first text track will be used as the default.",
                "importance": "low",
                "optional": true
              }
            ]
          }
        ]
      },
      {
        "name": "assets",
        "type": "group",
        "label": "Add interactions",
        "importance": "high",
        "widget": "interactiveVideo",
        "video": "video/files",
        "poster": "video/startScreenOptions/poster",
        "fields": [
          {
            "name": "interactions",
            "type": "list",
            "field": {
              "name": "interaction",
              "type": "group",
              "fields": [
                {
                  "name": "duration",
                  "type": "group",
                  "widget": "duration",
                  "label": "Display time",
                  "importance": "low",
                  "fields": [
                    {
                      "name": "from",
                      "type": "number"
                    },
                    {
                      "name": "to",
                      "type": "number"
                    }
                  ]
                },
                {
                  "name": "pause",
                  "label": "Pause video",
                  "importance": "low",
                  "type": "boolean"
                },
                {
                  "name": "displayType",
                  "label": "Display as",
                  "importance": "low",
                  "description": "<b>Button</b> is a collapsed interaction the user must press to open. <b>Poster</b> is an expanded interaction displayed directly on top of the video",
                  "type": "select",
                  "widget": "imageRadioButtonGroup",
                  "options": [
                    {
                      "value": "button",
                      "label": "Button"
                    },
                    {
                      "value": "poster",
                      "label": "Poster"
                    }
                  ],
                  "default": "button"
                },
                {
                  "name": "buttonOnMobile",
                  "label": "Turn into button on small screens",
                  "importance": "low",
                  "type": "boolean",
                  "default": false
                },
                {
                  "name": "label",
                  "type": "text",
                  "widget": "html",
                  "label": "Label",
                  "importance": "low",
                  "description": "Label displayed next to interaction icon.",
                  "optional": true,
                  "enterMode": "p",
                  "tags": [
                    "p"
                  ]
                },
                {
                  "name": "x",
                  "type": "number",
                  "importance": "low",
                  "widget": "none"
                },
                {
                  "name": "y",
                  "type": "number",
                  "importance": "low",
                  "widget": "none"
                },
                {
                  "name": "width",
                  "type": "number",
                  "widget": "none",
                  "importance": "low",
                  "optional": true
                },
                {
                  "name": "height",
                  "type": "number",
                  "widget": "none",
                  "importance": "low",
                  "optional": true
                },
                {
                  "name": "libraryTitle",
                  "type": "text",
                  "importance": "low",
                  "optional": true,
                  "widget": "none"
                },
                {
                  "name": "action",
                  "type": "library",
                  "importance": "low",
                  "options": [
                    "H5P.Nil 1.0",
                    "H5P.Text 1.1",
                    "H5P.Table 1.1",
                    "H5P.Link 1.3",
                    "H5P.Image 1.1",
                    "H5P.Summary 1.10",
                    "H5P.SingleChoiceSet 1.11",
                    "H5P.MultiChoice 1.14",
                    "H5P.TrueFalse 1.6",
                    "H5P.Blanks 1.12",
                    "H5P.DragQuestion 1.13",
                    "H5P.MarkTheWords 1.9",
                    "H5P.DragText 1.8",
                    "H5P.GoToQuestion 1.3",
                    "H5P.IVHotspot 1.2",
                    "H5P.Questionnaire 1.3",
                    "H5P.FreeTextQuestion 1.0"
                  ]
                },
                {
                  "name": "adaptivity",
                  "type": "group",
                  "label": "Adaptivity",
                  "importance": "low",
                  "optional": true,
                  "fields": [
                    {
                      "name": "correct",
                      "type": "group",
                      "label": "Action on all correct",
                      "fields": [
                        {
                          "name": "seekTo",
                          "type": "number",
                          "widget": "timecode",
                          "label": "Seek to",
                          "description": "Enter timecode in the format M:SS"
                        },
                        {
                          "name": "allowOptOut",
                          "type": "boolean",
                          "label": "Allow the user to opt out and continue"
                        },
                        {
                          "name": "message",
                          "type": "text",
                          "widget": "html",
                          "enterMode": "p",
                          "tags": [
                            "strong",
                            "em",
                            "del",
                            "a",
                            "code"
                          ],
                          "label": "Message"
                        },
                        {
                          "name": "seekLabel",
                          "type": "text",
                          "label": "Label for seek button"
                        }
                      ]
                    },
                    {
                      "name": "wrong",
                      "type": "group",
                      "label": "Action on wrong",
                      "fields": [
                        {
                          "name": "seekTo",
                          "type": "number",
                          "widget": "timecode",
                          "label": "Seek to",
                          "description": "Enter timecode in the format M:SS"
                        },
                        {
                          "name": "allowOptOut",
                          "type": "boolean",
                          "label": "Allow the user to opt out and continue"
                        },
                        {
                          "name": "message",
                          "type": "text",
                          "widget": "html",
                          "enterMode": "p",
                          "tags": [
                            "strong",
                            "em",
                            "del",
                            "a",
                            "code"
                          ],
                          "label": "Message"
                        },
                        {
                          "name": "seekLabel",
                          "type": "text",
                          "label": "Label for seek button"
                        }
                      ]
                    },
                    {
                      "name": "requireCompletion",
                      "type": "boolean",
                      "label": "Require full score for task before proceeding",
                      "description": "For best functionality this option should be used in conjunction with the \"Prevent skipping forward in a video\" option of Interactive Video."
                    }
                  ]
                },
                {
                  "name": "visuals",
                  "label": "Visuals",
                  "importance": "low",
                  "type": "group",
                  "fields": [
                    {
                      "name": "backgroundColor",
                      "type": "text",
                      "label": "Background color",
                      "widget": "colorSelector",
                      "default": "rgb(255, 255, 255)",
                      "spectrum": {
                        "showInput": true,
                        "showAlpha": true,
                        "preferredFormat": "rgb",
                        "showPalette": true,
                        "palette": [
                          [
                            "rgba(0, 0, 0, 0)"
                          ],
                          [
                            "rgb(67, 67, 67)",
                            "rgb(102, 102, 102)",
                            "rgb(204, 204, 204)",
                            "rgb(217, 217, 217)",
                            "rgb(255, 255, 255)"
                          ],
                          [
                            "rgb(152, 0, 0)",
                            "rgb(255, 0, 0)",
                            "rgb(255, 153, 0)",
                            "rgb(255, 255, 0)",
                            "rgb(0, 255, 0)",
                            "rgb(0, 255, 255)",
                            "rgb(74, 134, 232)",
                            "rgb(0, 0, 255)",
                            "rgb(153, 0, 255)",
                            "rgb(255, 0, 255)"
                          ],
                          [
                            "rgb(230, 184, 175)",
                            "rgb(244, 204, 204)",
                            "rgb(252, 229, 205)",
                            "rgb(255, 242, 204)",
                            "rgb(217, 234, 211)",
                            "rgb(208, 224, 227)",
                            "rgb(201, 218, 248)",
                            "rgb(207, 226, 243)",
                            "rgb(217, 210, 233)",
                            "rgb(234, 209, 220)",
                            "rgb(221, 126, 107)",
                            "rgb(234, 153, 153)",
                            "rgb(249, 203, 156)",
                            "rgb(255, 229, 153)",
                            "rgb(182, 215, 168)",
                            "rgb(162, 196, 201)",
                            "rgb(164, 194, 244)",
                            "rgb(159, 197, 232)",
                            "rgb(180, 167, 214)",
                            "rgb(213, 166, 189)",
                            "rgb(204, 65, 37)",
                            "rgb(224, 102, 102)",
                            "rgb(246, 178, 107)",
                            "rgb(255, 217, 102)",
                            "rgb(147, 196, 125)",
                            "rgb(118, 165, 175)",
                            "rgb(109, 158, 235)",
                            "rgb(111, 168, 220)",
                            "rgb(142, 124, 195)",
                            "rgb(194, 123, 160)",
                            "rgb(166, 28, 0)",
                            "rgb(204, 0, 0)",
                            "rgb(230, 145, 56)",
                            "rgb(241, 194, 50)",
                            "rgb(106, 168, 79)",
                            "rgb(69, 129, 142)",
                            "rgb(60, 120, 216)",
                            "rgb(61, 133, 198)",
                            "rgb(103, 78, 167)",
                            "rgb(166, 77, 121)",
                            "rgb(91, 15, 0)",
                            "rgb(102, 0, 0)",
                            "rgb(120, 63, 4)",
                            "rgb(127, 96, 0)",
                            "rgb(39, 78, 19)",
                            "rgb(12, 52, 61)",
                            "rgb(28, 69, 135)",
                            "rgb(7, 55, 99)",
                            "rgb(32, 18, 77)",
                            "rgb(76, 17, 48)"
                          ]
                        ]
                      }
                    },
                    {
                      "name": "boxShadow",
                      "type": "boolean",
                      "label": "Box shadow",
                      "default": true,
                      "description": "Adds a subtle shadow around the interaction. You might want to disable this for completely transparent interactions"
                    }
                  ]
                },
                {
                  "name": "goto",
                  "label": "Go to on click",
                  "importance": "low",
                  "type": "group",
                  "fields": [
                    {
                      "name": "type",
                      "label": "Type",
                      "type": "select",
                      "widget": "selectToggleFields",
                      "options": [
                        {
                          "value": "timecode",
                          "label": "Timecode",
                          "hideFields": [
                            "url"
                          ]
                        },
                        {
                          "value": "url",
                          "label": "Another page (URL)",
                          "hideFields": [
                            "time"
                          ]
                        }
                      ],
                      "optional": true
                    },
                    {
                      "name": "time",
                      "type": "number",
                      "widget": "timecode",
                      "label": "Go To",
                      "description": "The target time the user will be taken to upon pressing the hotspot. Enter timecode in the format M:SS.",
                      "optional": true
                    },
                    {
                      "name": "url",
                      "type": "group",
                      "label": "URL",
                      "widget": "linkWidget",
                      "optional": true,
                      "fields": [
                        {
                          "name": "protocol",
                          "type": "select",
                          "label": "Protocol",
                          "options": [
                            {
                              "value": "http://",
                              "label": "http://"
                            },
                            {
                              "value": "https://",
                              "label": "https://"
                            },
                            {
                              "value": "/",
                              "label": "(root relative)"
                            },
                            {
                              "value": "other",
                              "label": "other"
                            }
                          ],
                          "optional": true,
                          "default": "http://"
                        },
                        {
                          "name": "url",
                          "type": "text",
                          "label": "URL",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "name": "visualize",
                      "type": "boolean",
                      "label": "Visualize",
                      "description": "Show that interaction can be clicked by adding a border and an icon"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "bookmarks",
            "importance": "low",
            "type": "list",
            "field": {
              "name": "bookmark",
              "type": "group",
              "fields": [
                {
                  "name": "time",
                  "type": "number"
                },
                {
                  "name": "label",
                  "type": "text"
                }
              ]
            }
          },
          {
            "name": "endscreens",
            "importance": "low",
            "type": "list",
            "field": {
              "name": "endscreen",
              "type": "group",
              "fields": [
                {
                  "name": "time",
                  "type": "number"
                },
                {
                  "name": "label",
                  "type": "text"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "summary",
        "type": "group",
        "label": "Summary task",
        "importance": "high",
        "fields": [
          {
            "name": "task",
            "type": "library",
            "options": [
              "H5P.Summary 1.10"
            ],
            "default": {
              "library": "H5P.Summary 1.10",
              "params": {}
            }
          },
          {
            "name": "displayAt",
            "type": "number",
            "label": "Display at",
            "description": "Number of seconds before the video ends.",
            "default": 3
          }
        ]
      }
    ]
  },
  {
    "name": "override",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "optional": true,
    "fields": [
      {
        "name": "startVideoAt",
        "type": "number",
        "widget": "timecode",
        "label": "Start video at",
        "importance": "low",
        "optional": true,
        "description": "Enter timecode in the format M:SS"
      },
      {
        "name": "autoplay",
        "type": "boolean",
        "label": "Auto-play video",
        "default": false,
        "optional": true,
        "description": "Start playing the video automatically"
      },
      {
        "name": "loop",
        "type": "boolean",
        "label": "Loop the video",
        "default": false,
        "optional": true,
        "description": "Check if video should run in a loop"
      },
      {
        "name": "showSolutionButton",
        "type": "select",
        "label": "Override \"Show Solution\" button",
        "importance": "low",
        "description": "This option determines if the \"Show Solution\" button will be shown for all questions, disabled for all or configured for each question individually.",
        "optional": true,
        "options": [
          {
            "value": "on",
            "label": "Enabled"
          },
          {
            "value": "off",
            "label": "Disabled"
          }
        ]
      },
      {
        "name": "retryButton",
        "type": "select",
        "label": "Override \"Retry\" button",
        "importance": "low",
        "description": "This option determines if the \"Retry\" button will be shown for all questions, disabled for all or configured for each question individually.",
        "optional": true,
        "options": [
          {
            "value": "on",
            "label": "Enabled"
          },
          {
            "value": "off",
            "label": "Disabled"
          }
        ]
      },
      {
        "name": "showBookmarksmenuOnLoad",
        "type": "boolean",
        "label": "Start with bookmarks menu open",
        "importance": "low",
        "default": false,
        "description": "This function is not available on iPad when using YouTube as video source."
      },
      {
        "name": "showRewind10",
        "type": "boolean",
        "label": "Show button for rewinding 10 seconds",
        "importance": "low",
        "default": false
      },
      {
        "name": "preventSkipping",
        "type": "boolean",
        "default": false,
        "label": "Prevent skipping forward in a video",
        "importance": "low",
        "description": "Enabling this options will disable user video navigation through default controls."
      },
      {
        "name": "deactivateSound",
        "type": "boolean",
        "default": false,
        "label": "Deactivate sound",
        "importance": "low",
        "description": "Enabling this option will deactivate the video''s sound and prevent it from being switched on."
      }
    ]
  },
  {
    "name": "l10n",
    "type": "group",
    "label": "Localize",
    "importance": "low",
    "common": true,
    "optional": true,
    "fields": [
      {
        "name": "interaction",
        "type": "text",
        "label": "Interaction title",
        "importance": "low",
        "default": "Interaction",
        "optional": true
      },
      {
        "name": "play",
        "type": "text",
        "label": "Play title",
        "importance": "low",
        "default": "Play",
        "optional": true
      },
      {
        "name": "pause",
        "type": "text",
        "label": "Pause title",
        "importance": "low",
        "default": "Pause",
        "optional": true
      },
      {
        "name": "mute",
        "type": "text",
        "label": "Mute title",
        "importance": "low",
        "default": "Mute",
        "optional": true
      },
      {
        "name": "unmute",
        "type": "text",
        "label": "Unmute title",
        "importance": "low",
        "default": "Unmute",
        "optional": true
      },
      {
        "name": "quality",
        "type": "text",
        "label": "Video quality title",
        "importance": "low",
        "default": "Video Quality",
        "optional": true
      },
      {
        "name": "captions",
        "type": "text",
        "label": "Video captions title",
        "importance": "low",
        "default": "Captions",
        "optional": true
      },
      {
        "name": "close",
        "type": "text",
        "label": "Close button text",
        "importance": "low",
        "default": "Close",
        "optional": true
      },
      {
        "name": "fullscreen",
        "type": "text",
        "label": "Fullscreen title",
        "importance": "low",
        "default": "Fullscreen",
        "optional": true
      },
      {
        "name": "exitFullscreen",
        "type": "text",
        "label": "Exit fullscreen title",
        "importance": "low",
        "default": "Exit Fullscreen",
        "optional": true
      },
      {
        "name": "summary",
        "type": "text",
        "label": "Summary title",
        "importance": "low",
        "default": "Open summary dialog",
        "optional": true
      },
      {
        "name": "bookmarks",
        "type": "text",
        "label": "Bookmarks title",
        "importance": "low",
        "default": "Bookmarks",
        "optional": true
      },
      {
        "name": "endscreen",
        "type": "text",
        "label": "Submit screen title",
        "importance": "low",
        "default": "Submit screen",
        "optional": true
      },
      {
        "name": "defaultAdaptivitySeekLabel",
        "type": "text",
        "label": "Default label for adaptivity seek button",
        "importance": "low",
        "default": "Continue",
        "optional": true
      },
      {
        "name": "continueWithVideo",
        "type": "text",
        "label": "Default label for continue video button",
        "importance": "low",
        "default": "Continue with video",
        "optional": true
      },
      {
        "name": "playbackRate",
        "type": "text",
        "label": "Set playback rate",
        "importance": "low",
        "default": "Playback Rate",
        "optional": true
      },
      {
        "name": "rewind10",
        "type": "text",
        "label": "Rewind 10 Seconds",
        "importance": "low",
        "default": "Rewind 10 Seconds",
        "optional": true
      },
      {
        "name": "navDisabled",
        "type": "text",
        "label": "Navigation is disabled text",
        "importance": "low",
        "default": "Navigation is disabled",
        "optional": true
      },
      {
        "name": "sndDisabled",
        "type": "text",
        "label": "Sound is disabled text",
        "importance": "low",
        "default": "Sound is disabled",
        "optional": true
      },
      {
        "name": "requiresCompletionWarning",
        "type": "text",
        "label": "Warning that the user must answer the question correctly before continuing",
        "importance": "low",
        "default": "You need to answer all the questions correctly before continuing.",
        "optional": true
      },
      {
        "name": "back",
        "type": "text",
        "label": "Back button",
        "importance": "low",
        "default": "Back",
        "optional": true
      },
      {
        "name": "hours",
        "type": "text",
        "label": "Passed time hours",
        "importance": "low",
        "default": "Hours",
        "optional": true
      },
      {
        "name": "minutes",
        "type": "text",
        "label": "Passed time minutes",
        "importance": "low",
        "default": "Minutes",
        "optional": true
      },
      {
        "name": "seconds",
        "type": "text",
        "label": "Passed time seconds",
        "importance": "low",
        "default": "Seconds",
        "optional": true
      },
      {
        "name": "currentTime",
        "type": "text",
        "label": "Label for current time",
        "importance": "low",
        "default": "Current time:",
        "optional": true
      },
      {
        "name": "totalTime",
        "type": "text",
        "label": "Label for total time",
        "importance": "low",
        "default": "Total time:",
        "optional": true
      },
      {
        "name": "singleInteractionAnnouncement",
        "type": "text",
        "label": "Text explaining that a single interaction with a name has come into view",
        "importance": "low",
        "default": "Interaction appeared:",
        "optional": true
      },
      {
        "name": "multipleInteractionsAnnouncement",
        "type": "text",
        "label": "Text for explaining that multiple interactions have come into view",
        "importance": "low",
        "default": "Multiple interactions appeared.",
        "optional": true
      },
      {
        "name": "videoPausedAnnouncement",
        "type": "text",
        "label": "Video is paused announcement",
        "importance": "low",
        "default": "Video is paused",
        "optional": true
      },
      {
        "name": "content",
        "type": "text",
        "label": "Content label",
        "importance": "low",
        "default": "Content",
        "optional": true
      },
      {
        "name": "answered",
        "type": "text",
        "label": "Answered message (@answered will be replaced with the number of answered questions)",
        "importance": "low",
        "default": "@answered answered",
        "optional": true
      },
      {
        "name": "endcardTitle",
        "type": "text",
        "label": "Submit screen title",
        "importance": "low",
        "default": "@answered Question(s) answered",
        "description": "@answered will be replaced by the number of answered questions.",
        "optional": true
      },
      {
        "name": "endcardInformation",
        "type": "text",
        "label": "Submit screen information",
        "importance": "low",
        "default": "You have answered @answered questions, click below to submit your answers.",
        "description": "@answered will be replaced by the number of answered questions.",
        "optional": true
      },
      {
        "name": "endcardInformationNoAnswers",
        "type": "text",
        "label": "Submit screen information for missing answers",
        "importance": "low",
        "default": "You have not answered any questions.",
        "optional": true
      },
      {
        "name": "endcardInformationMustHaveAnswer",
        "type": "text",
        "label": "Submit screen information for answer needed",
        "importance": "low",
        "default": "You have to answer at least one question before you can submit your answers.",
        "optional": true
      },
      {
        "name": "endcardSubmitButton",
        "type": "text",
        "label": "Submit screen submit button",
        "importance": "low",
        "default": "Submit Answers",
        "optional": true
      },
      {
        "name": "endcardSubmitMessage",
        "type": "text",
        "label": "Submit screen submit message",
        "importance": "low",
        "default": "Your answers have been submitted!",
        "optional": true
      },
      {
        "name": "endcardTableRowAnswered",
        "type": "text",
        "label": "Submit screen table row title: Answered questions",
        "importance": "low",
        "default": "Answered questions",
        "optional": true
      },
      {
        "name": "endcardTableRowScore",
        "type": "text",
        "label": "Submit screen table row title: Score",
        "importance": "low",
        "default": "Score",
        "optional": true
      },
      {
        "name": "endcardAnsweredScore",
        "type": "text",
        "label": "Submit screen answered score",
        "importance": "low",
        "default": "answered",
        "optional": true
      },
      {
        "name": "endCardTableRowSummaryWithScore",
        "type": "text",
        "label": "Submit screen row summary including score (for readspeakers)",
        "importance": "low",
        "default": "You got @score out of @total points for the @question that appeared after @minutes minutes and @seconds seconds.",
        "optional": true
      },
      {
        "name": "endCardTableRowSummaryWithoutScore",
        "type": "text",
        "label": "Submit screen row summary for no score (for readspeakers)",
        "importance": "low",
        "default": "You have answered the @question that appeared after @minutes minutes and @seconds seconds.",
        "optional": true
      }
    ]
  }
]', N'', 1, null),
       (19, N'2021-04-25 12:23:28.000', N'H5P.JoubelUI', N'Joubel UI', 1, 3, 10, 0, 0, N'',
        N'js/joubel-help-dialog.js, js/joubel-message-dialog.js, js/joubel-progress-circle.js, js/joubel-simple-rounded-button.js, js/joubel-speech-bubble.js, js/joubel-throbber.js, js/joubel-tip.js, js/joubel-slider.js, js/joubel-score-bar.js, js/joubel-progressbar.js, js/joubel-ui.js',
        N'css/joubel-help-dialog.css, css/joubel-message-dialog.css, css/joubel-progress-circle.css, css/joubel-simple-rounded-button.css, css/joubel-speech-bubble.css, css/joubel-tip.css, css/joubel-slider.css, css/joubel-score-bar.css, css/joubel-progressbar.css, css/joubel-ui.css, css/joubel-icon.css',
        N'', N'', 0, null),
       (20, N'2021-04-25 12:23:28.000', N'H5P.Link', N'Link', 1, 3, 15, 0, 0, N'', N'link.js', N'', N'[
  {
    "name": "title",
    "type": "text",
    "importance": "high",
    "label": "Title"
  },
  {
    "name": "linkWidget",
    "type": "group",
    "importance": "high",
    "widget": "linkWidget",
    "fields": [
      {
        "name": "protocol",
        "type": "select",
        "importance": "high",
        "label": "Protocol",
        "options": [
          {
            "value": "http://",
            "label": "http://"
          },
          {
            "value": "https://",
            "label": "https://"
          },
          {
            "value": "/",
            "label": "(root relative)"
          },
          {
            "value": "other",
            "label": "other"
          }
        ],
        "optional": true,
        "default": "http://"
      },
      {
        "name": "url",
        "type": "text",
        "importance": "high",
        "label": "URL"
      }
    ]
  }
]', N'', 0, N'{"disable":true,"disableExtraTitleField":true}'),
       (21, N'2021-04-25 12:23:28.000', N'H5P.MarkTheWords', N'Mark the Words', 1, 9, 15, 1, 0, N'iframe',
        N'scripts/keyboard-nav.js, scripts/xAPI-generator.js, scripts/word.js, scripts/mark-the-words.js',
        N'styles/mark-the-words.css', N'[
  {
    "label": "Task description",
    "importance": "high",
    "name": "taskDescription",
    "type": "text",
    "widget": "html",
    "description": "Describe how the user should solve the task.",
    "placeholder": "Click on all the verbs in the text that follows.",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  },
  {
    "label": "Textfield",
    "importance": "high",
    "name": "textField",
    "type": "text",
    "widget": "html",
    "tags": [
      "p",
      "br",
      "strong",
      "em",
      "code"
    ],
    "placeholder": "This is an answer: *answer*.",
    "description": "",
    "important": {
      "description": "<ul><li>Correct words are marked with asterisks (*) before and after the word.</li><li>Asterisks can be added within marked words by adding another asterisk, *correctword*** =&gt; correctword*.</li><li>Only words may be marked as correct. Not phrases.</li></ul>",
      "example": "The correct words are marked like this: *correctword*, an asterisk is written like this: *correctword***."
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "label": "Text for \"Check\" button",
    "importance": "low",
    "name": "checkAnswerButton",
    "type": "text",
    "default": "Check",
    "common": true
  },
  {
    "label": "Text for \"Retry\" button",
    "importance": "low",
    "name": "tryAgainButton",
    "type": "text",
    "default": "Retry",
    "common": true
  },
  {
    "label": "Text for \"Show solution\" button",
    "importance": "low",
    "name": "showSolutionButton",
    "type": "text",
    "default": "Show solution",
    "common": true
  },
  {
    "name": "behaviour",
    "importance": "low",
    "type": "group",
    "label": "Behavioural settings.",
    "description": "These options will let you control how the task behaves.",
    "optional": true,
    "fields": [
      {
        "name": "enableRetry",
        "type": "boolean",
        "label": "Enable \"Retry\"",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableSolutionsButton",
        "type": "boolean",
        "label": "Enable \"Show solution\" button",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableCheckButton",
        "type": "boolean",
        "label": "Enable \"Check\" button",
        "widget": "none",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "name": "showScorePoints",
        "type": "boolean",
        "label": "Show score points",
        "description": "Show points earned for each answer.",
        "importance": "low",
        "default": true
      }
    ]
  },
  {
    "label": "Correct answer text",
    "importance": "low",
    "name": "correctAnswer",
    "type": "text",
    "default": "Correct!",
    "description": "Text used to indicate that an answer is correct",
    "common": true
  },
  {
    "label": "Incorrect answer text",
    "importance": "low",
    "name": "incorrectAnswer",
    "type": "text",
    "default": "Incorrect!",
    "description": "Text used to indicate that an answer is incorrect",
    "common": true
  },
  {
    "label": "Missed answer text",
    "importance": "low",
    "name": "missedAnswer",
    "type": "text",
    "default": "Answer not found!",
    "description": "Text used to indicate that an answer is missing",
    "common": true
  },
  {
    "label": "Description for Display Solution",
    "importance": "low",
    "name": "displaySolutionDescription",
    "type": "text",
    "default": "Task is updated to contain the solution.",
    "description": "This text tells the user that the tasks has been updated with the solution.",
    "common": true
  },
  {
    "name": "scoreBarLabel",
    "type": "text",
    "label": "Textual representation of the score bar for those using a readspeaker",
    "default": "You got :num out of :total points",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yFullTextLabel",
    "type": "text",
    "label": "Label for the full readable text for assistive technologies",
    "default": "Full readable text",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yClickableTextLabel",
    "type": "text",
    "label": "Label for the text where words can be marked for assistive technologies",
    "default": "Full text where words can be marked",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11ySolutionModeHeader",
    "type": "text",
    "label": "Solution mode header for assistive technologies",
    "default": "Solution mode",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yCheckingHeader",
    "type": "text",
    "label": "Checking mode header for assistive technologies",
    "default": "Checking mode",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yCheck",
    "type": "text",
    "label": "Assistive technology description for \"Check\" button",
    "default": "Check the answers. The responses will be marked as correct, incorrect, or unanswered.",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yShowSolution",
    "type": "text",
    "label": "Assistive technology description for \"Show Solution\" button",
    "default": "Show the solution. The task will be marked with its correct solution.",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yRetry",
    "type": "text",
    "label": "Assistive technology description for \"Retry\" button",
    "default": "Retry the task. Reset all responses and start the task over again.",
    "importance": "low",
    "common": true
  }
]', N'', 1, null),
       (22, N'2021-04-25 12:23:28.000', N'H5P.MultiChoice', N'Multiple Choice', 1, 14, 7, 1, 0, N'iframe',
        N'js/multichoice.js', N'css/multichoice.css', N'[
  {
    "name": "media",
    "type": "group",
    "label": "Media",
    "importance": "medium",
    "fields": [
      {
        "name": "type",
        "type": "library",
        "label": "Type",
        "importance": "medium",
        "options": [
          "H5P.Image 1.1",
          "H5P.Video 1.5"
        ],
        "optional": true,
        "description": "Optional media to display above the question."
      },
      {
        "name": "disableImageZooming",
        "type": "boolean",
        "label": "Disable image zooming",
        "importance": "low",
        "default": false,
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "type",
              "equals": "H5P.Image 1.1"
            }
          ]
        }
      }
    ]
  },
  {
    "name": "question",
    "type": "text",
    "importance": "medium",
    "widget": "html",
    "label": "Question",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "sub",
      "sup",
      "h2",
      "h3",
      "pre",
      "code"
    ]
  },
  {
    "name": "answers",
    "type": "list",
    "importance": "high",
    "label": "Available options",
    "entity": "option",
    "min": 1,
    "defaultNum": 2,
    "field": {
      "name": "answer",
      "type": "group",
      "label": "Option",
      "importance": "high",
      "fields": [
        {
          "name": "text",
          "type": "text",
          "importance": "medium",
          "widget": "html",
          "label": "Text",
          "tags": [
            "strong",
            "em",
            "sub",
            "sup",
            "code"
          ]
        },
        {
          "name": "correct",
          "type": "boolean",
          "label": "Correct",
          "importance": "low"
        },
        {
          "name": "tipsAndFeedback",
          "type": "group",
          "label": "Tips and feedback",
          "importance": "low",
          "optional": true,
          "fields": [
            {
              "name": "tip",
              "type": "text",
              "widget": "html",
              "label": "Tip text",
              "importance": "low",
              "description": "Hint for the user. This will appear before user checks his answer/answers.",
              "optional": true,
              "tags": [
                "p",
                "br",
                "strong",
                "em",
                "a",
                "code"
              ]
            },
            {
              "name": "chosenFeedback",
              "type": "text",
              "widget": "html",
              "label": "Message displayed if answer is selected",
              "importance": "low",
              "description": "Message will appear below the answer on \"check\" if this answer is selected.",
              "optional": true,
              "tags": [
                "strong",
                "em",
                "sub",
                "sup",
                "a",
                "code"
              ]
            },
            {
              "name": "notChosenFeedback",
              "type": "text",
              "widget": "html",
              "label": "Message displayed if answer is not selected",
              "importance": "low",
              "description": "Message will appear below the answer on \"check\" if this answer is not selected.",
              "optional": true,
              "tags": [
                "strong",
                "em",
                "sub",
                "sup",
                "a",
                "code"
              ]
            }
          ]
        }
      ]
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "name": "UI",
    "type": "group",
    "label": "User interface translations for multichoice",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "name": "checkAnswerButton",
        "type": "text",
        "label": "Check answer button label",
        "importance": "low",
        "default": "Check"
      },
      {
        "name": "showSolutionButton",
        "type": "text",
        "label": "Show solution button label",
        "importance": "low",
        "default": "Show solution"
      },
      {
        "name": "tryAgainButton",
        "type": "text",
        "label": "Retry button label",
        "importance": "low",
        "default": "Retry",
        "optional": true
      },
      {
        "name": "tipsLabel",
        "type": "text",
        "label": "Tip label",
        "importance": "low",
        "default": "Show tip",
        "optional": true
      },
      {
        "name": "scoreBarLabel",
        "type": "text",
        "label": "Textual representation of the score bar for those using a readspeaker",
        "description": "Available variables are :num and :total",
        "importance": "low",
        "default": "You got :num out of :total points",
        "optional": true
      },
      {
        "name": "tipAvailable",
        "type": "text",
        "label": "Tip Available (not displayed)",
        "importance": "low",
        "default": "Tip available",
        "description": "Accessibility text used for readspeakers",
        "optional": true
      },
      {
        "name": "feedbackAvailable",
        "type": "text",
        "label": "Feedback Available (not displayed)",
        "importance": "low",
        "default": "Feedback available",
        "description": "Accessibility text used for readspeakers",
        "optional": true
      },
      {
        "name": "readFeedback",
        "type": "text",
        "label": "Read Feedback (not displayed)",
        "importance": "low",
        "default": "Read feedback",
        "description": "Accessibility text used for readspeakers",
        "optional": true,
        "deprecated": true
      },
      {
        "name": "wrongAnswer",
        "type": "text",
        "label": "Wrong Answer (not displayed)",
        "importance": "low",
        "default": "Wrong answer",
        "description": "Accessibility text used for readspeakers",
        "optional": true,
        "deprecated": true
      },
      {
        "name": "correctAnswer",
        "type": "text",
        "label": "Correct Answer (not displayed)",
        "importance": "low",
        "default": "Correct answer",
        "description": "Accessibility text used for readspeakers",
        "optional": true
      },
      {
        "name": "shouldCheck",
        "type": "text",
        "label": "Option should have been checked",
        "importance": "low",
        "default": "Should have been checked",
        "optional": true
      },
      {
        "name": "shouldNotCheck",
        "type": "text",
        "label": "Option should not have been checked",
        "importance": "low",
        "default": "Should not have been checked",
        "optional": true
      },
      {
        "label": "Text for \"Requires answer\" message",
        "importance": "low",
        "name": "noInput",
        "type": "text",
        "default": "Please answer before viewing the solution",
        "optional": true
      },
      {
        "name": "a11yCheck",
        "type": "text",
        "label": "Assistive technology description for \"Check\" button",
        "default": "Check the answers. The responses will be marked as correct, incorrect, or unanswered.",
        "importance": "low",
        "common": true
      },
      {
        "name": "a11yShowSolution",
        "type": "text",
        "label": "Assistive technology description for \"Show Solution\" button",
        "default": "Show the solution. The task will be marked with its correct solution.",
        "importance": "low",
        "common": true
      },
      {
        "name": "a11yRetry",
        "type": "text",
        "label": "Assistive technology description for \"Retry\" button",
        "default": "Retry the task. Reset all responses and start the task over again.",
        "importance": "low",
        "common": true
      }
    ]
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "optional": true,
    "fields": [
      {
        "name": "enableRetry",
        "type": "boolean",
        "label": "Enable \"Retry\" button",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "name": "enableSolutionsButton",
        "type": "boolean",
        "label": "Enable \"Show Solution\" button",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "name": "enableCheckButton",
        "type": "boolean",
        "label": "Enable \"Check\" button",
        "widget": "none",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "name": "type",
        "type": "select",
        "label": "Question Type",
        "importance": "low",
        "description": "Select the look and behaviour of the question.",
        "default": "auto",
        "options": [
          {
            "value": "auto",
            "label": "Automatic"
          },
          {
            "value": "multi",
            "label": "Multiple Choice (Checkboxes)"
          },
          {
            "value": "single",
            "label": "Single Choice (Radio Buttons)"
          }
        ]
      },
      {
        "name": "singlePoint",
        "type": "boolean",
        "label": "Give one point for the whole task",
        "importance": "low",
        "description": "Enable to give a total of one point for multiple correct answers. This will not be an option in \"Single answer\" mode.",
        "default": false
      },
      {
        "name": "randomAnswers",
        "type": "boolean",
        "label": "Randomize answers",
        "importance": "low",
        "description": "Enable to randomize the order of the answers on display.",
        "default": true
      },
      {
        "label": "Require answer before the solution can be viewed",
        "importance": "low",
        "name": "showSolutionsRequiresInput",
        "type": "boolean",
        "default": true,
        "optional": true
      },
      {
        "label": "Show confirmation dialog on \"Check\"",
        "importance": "low",
        "name": "confirmCheckDialog",
        "type": "boolean",
        "default": false
      },
      {
        "label": "Show confirmation dialog on \"Retry\"",
        "importance": "low",
        "name": "confirmRetryDialog",
        "type": "boolean",
        "default": false
      },
      {
        "label": "Automatically check answers",
        "importance": "low",
        "name": "autoCheck",
        "type": "boolean",
        "default": false,
        "description": "Enabling this option will make accessibility suffer, make sure you know what you''re doing."
      },
      {
        "label": "Pass percentage",
        "name": "passPercentage",
        "type": "number",
        "description": "This setting often won''t have any effect. It is the percentage of the total score required for getting 1 point when one point for the entire task is enabled, and for getting result.success in xAPI statements.",
        "min": 0,
        "max": 100,
        "step": 1,
        "default": 100
      },
      {
        "name": "showScorePoints",
        "type": "boolean",
        "label": "Show score points",
        "description": "Show points earned for each answer. This will not be an option in ''Single answer'' mode or if ''Give one point for the whole task'' option is enabled.",
        "importance": "low",
        "default": true
      }
    ]
  },
  {
    "label": "Check confirmation dialog",
    "importance": "low",
    "name": "confirmCheck",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Header text",
        "importance": "low",
        "name": "header",
        "type": "text",
        "default": "Finish ?"
      },
      {
        "label": "Body text",
        "importance": "low",
        "name": "body",
        "type": "text",
        "default": "Are you sure you wish to finish ?",
        "widget": "html",
        "enterMode": "p",
        "tags": [
          "strong",
          "em",
          "del",
          "u",
          "code"
        ]
      },
      {
        "label": "Cancel button label",
        "importance": "low",
        "name": "cancelLabel",
        "type": "text",
        "default": "Cancel"
      },
      {
        "label": "Confirm button label",
        "importance": "low",
        "name": "confirmLabel",
        "type": "text",
        "default": "Finish"
      }
    ]
  },
  {
    "label": "Retry confirmation dialog",
    "importance": "low",
    "name": "confirmRetry",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Header text",
        "importance": "low",
        "name": "header",
        "type": "text",
        "default": "Retry ?"
      },
      {
        "label": "Body text",
        "importance": "low",
        "name": "body",
        "type": "text",
        "default": "Are you sure you wish to retry ?",
        "widget": "html",
        "enterMode": "p",
        "tags": [
          "strong",
          "em",
          "del",
          "u",
          "code"
        ]
      },
      {
        "label": "Cancel button label",
        "importance": "low",
        "name": "cancelLabel",
        "type": "text",
        "default": "Cancel"
      },
      {
        "label": "Confirm button label",
        "importance": "low",
        "name": "confirmLabel",
        "type": "text",
        "default": "Confirm"
      }
    ]
  }
]', N'', 1, null),
       (23, N'2021-04-25 12:23:28.000', N'H5P.Nil', N'Label', 1, 0, 14, 0, 0, N'', N'', N'', N'[
  {
    "name": "nil",
    "type": "boolean",
    "widget": "none",
    "optional": true
  }
]
', N'', 0, N'{"disable":true,"disableExtraTitleField":true}'),
       (24, N'2021-04-25 12:23:28.000', N'H5P.OpenEndedQuestion', N'Open Ended Question', 1, 0, 20, 0, 0, N'',
        N'dist/dist.js', N'dist/styles.css', N'[
  {
    "name": "question",
    "label": "Question or description",
    "importance": "high",
    "type": "text"
  },
  {
    "name": "placeholderText",
    "label": "Placeholder text",
    "default": "Start writing...",
    "importance": "low",
    "description": "Text that initially will be shown in the input field. Will be removed automatically when the user starts writing.",
    "type": "text",
    "optional": true
  },
  {
    "name": "inputRows",
    "label": "Input rows",
    "type": "select",
    "importance": "high",
    "description": "Determines the height of the input field.",
    "options": [
      {
        "value": "1",
        "label": "1 line"
      },
      {
        "value": "2",
        "label": "2 lines"
      },
      {
        "value": "3",
        "label": "3 lines"
      },
      {
        "value": "10",
        "label": "10 lines"
      }
    ],
    "default": "1"
  }
]', N'', 0, null),
       (25, N'2021-04-25 12:23:28.000', N'H5P.Question', N'Question', 1, 4, 8, 0, 0, N'',
        N'scripts/question.js, scripts/explainer.js, scripts/score-points.js',
        N'styles/question.css, styles/explainer.css', N'', N'', 0, null),
       (26, N'2021-04-25 12:23:28.000', N'H5P.Questionnaire', N'Questionnaire', 1, 3, 2, 1, 0, N'iframe',
        N'dist/dist.js', N'dist/styles.css', N'[
  {
    "name": "questionnaireElements",
    "label": "Questionnaire elements",
    "importance": "high",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default",
        "importance": "high"
      }
    ],
    "entity": "element",
    "min": 1,
    "defaultNum": 1,
    "field": {
      "name": "libraryGroup",
      "label": "Choose library",
      "importance": "high",
      "type": "group",
      "fields": [
        {
          "name": "library",
          "type": "library",
          "label": "Library",
          "importance": "high",
          "description": "Choose a library",
          "options": [
            "H5P.OpenEndedQuestion 1.0",
            "H5P.SimpleMultiChoice 1.1"
          ]
        },
        {
          "name": "requiredField",
          "type": "boolean",
          "label": "Required field",
          "importance": "low",
          "default": false
        }
      ]
    }
  },
  {
    "name": "successScreenOptions",
    "label": "Success screen options",
    "importance": "low",
    "type": "group",
    "fields": [
      {
        "name": "enableSuccessScreen",
        "label": "Enable success screen",
        "importance": "low",
        "type": "boolean",
        "default": true
      },
      {
        "name": "successScreenImage",
        "label": "Add success screen image",
        "importance": "low",
        "type": "group",
        "fields": [
          {
            "name": "successScreenImage",
            "label": "Replace success icon with image",
            "importance": "low",
            "type": "library",
            "optional": true,
            "options": [
              "H5P.Image 1.1"
            ]
          }
        ]
      },
      {
        "name": "successMessage",
        "type": "text",
        "label": "Text to display on submit",
        "importance": "low",
        "default": "You have completed the questionnaire."
      }
    ]
  },
  {
    "name": "uiElements",
    "label": "UI Elements",
    "importance": "low",
    "type": "group",
    "fields": [
      {
        "name": "buttonLabels",
        "type": "group",
        "label": "Button labels",
        "importance": "low",
        "fields": [
          {
            "name": "prevLabel",
            "type": "text",
            "label": "Previous button label",
            "importance": "low",
            "default": "Back"
          },
          {
            "name": "continueLabel",
            "type": "text",
            "label": "Continue button label",
            "importance": "low",
            "default": "Continue"
          },
          {
            "name": "nextLabel",
            "type": "text",
            "label": "Next button label",
            "importance": "low",
            "default": "Next"
          },
          {
            "name": "submitLabel",
            "type": "text",
            "label": "Submit button label",
            "importance": "low",
            "default": "Submit"
          }
        ]
      },
      {
        "name": "accessibility",
        "type": "group",
        "label": "Accessibility",
        "importance": "low",
        "fields": [
          {
            "name": "requiredTextExitLabel",
            "type": "text",
            "label": "Required message exit button label",
            "importance": "low",
            "default": "Close error message"
          },
          {
            "name": "progressBarText",
            "type": "text",
            "label": "Progress bar text",
            "importance": "low",
            "default": "Question %current of %max",
            "description": "Used to tell assistive technologies what question it is. Variables: [ %current, %max ]"
          }
        ]
      },
      {
        "name": "requiredMessage",
        "type": "text",
        "label": "Required message",
        "importance": "low",
        "default": "This question requires an answer",
        "description": "Will display if this field is unanswered and required by a wrapper content type"
      },
      {
        "name": "requiredText",
        "type": "text",
        "label": "Required symbol text",
        "importance": "low",
        "default": "required",
        "description": "Text that will accompany an asterisk to signal that a question is required"
      },
      {
        "name": "submitScreenTitle",
        "type": "text",
        "label": "Title for the submit screen",
        "importance": "low",
        "default": "You successfully answered all of the questions"
      },
      {
        "name": "submitScreenSubtitle",
        "type": "text",
        "label": "Subtitle for the submit screen",
        "importance": "low",
        "default": "Click below to submit your answers"
      }
    ]
  }
]', N'', 1, null),
       (27, N'2021-04-25 12:23:28.000', N'H5P.SimpleMultiChoice', N'Simple Multi Choice', 1, 1, 15, 0, 0, N'',
        N'dist/dist.js', N'dist/styles.css', N'[
  {
    "name": "question",
    "label": "Question",
    "importance": "high",
    "type": "text"
  },
  {
    "name": "inputType",
    "label": "Multiple choice type",
    "importance": "high",
    "type": "select",
    "options": [
      {
        "label": "Multiple answers",
        "value": "checkbox"
      },
      {
        "label": "Single answer",
        "value": "radio"
      }
    ],
    "default": "checkbox"
  },
  {
    "name": "alternatives",
    "label": "Answer alternatives",
    "type": "list",
    "importance": "high",
    "entity": "Alternative",
    "min": 2,
    "field": {
      "type": "group",
      "name": "alternative",
      "label": "Alternative",
      "fields": [
        {
          "name": "text",
          "label": "Text",
          "importance": "high",
          "type": "text"
        },
        {
          "name": "feedback",
          "type": "group",
          "label": "Feedback",
          "importance": "low",
          "optional": true,
          "fields": [
            {
              "name": "chosenFeedback",
              "type": "text",
              "widget": "html",
              "label": "Message displayed if answer is selected",
              "importance": "low",
              "description": "Message will appear below the answer on \"continue\" if this answer is selected.",
              "optional": true,
              "tags": [
                "strong",
                "em",
                "sub",
                "sup",
                "a",
                "code"
              ]
            },
            {
              "name": "notChosenFeedback",
              "type": "text",
              "widget": "html",
              "label": "Message displayed if answer is not selected",
              "importance": "low",
              "description": "Message will appear below the answer on \"continue\" if this answer is not selected.",
              "optional": true,
              "tags": [
                "strong",
                "em",
                "sub",
                "sup",
                "a",
                "code"
              ]
            }
          ]
        }
      ]
    }
  }
]
', N'', 0, null),
       (28, N'2021-04-25 12:23:29.000', N'H5P.SingleChoiceSet', N'Single Choice Set', 1, 11, 14, 1, 0, N'iframe',
        N'scripts/stop-watch.js, scripts/sound-effects.js, scripts/xapi-event-builder.js, scripts/result-slide.js, scripts/solution-view.js, scripts/single-choice-alternative.js, scripts/single-choice.js, scripts/single-choice-set.js',
        N'styles/single-choice-set.css', N'[
  {
    "name": "choices",
    "type": "list",
    "label": "List of questions",
    "importance": "high",
    "entity": "question",
    "min": 1,
    "defaultNum": 2,
    "widgets": [
      {
        "name": "ListEditor",
        "label": "Default"
      },
      {
        "name": "SingleChoiceSetTextualEditor",
        "label": "Textual"
      }
    ],
    "field": {
      "name": "choice",
      "type": "group",
      "isSubContent": true,
      "label": "Question & alternatives",
      "importance": "high",
      "fields": [
        {
          "name": "question",
          "type": "text",
          "widget": "html",
          "tags": [
            "p",
            "br",
            "strong",
            "em",
            "code"
          ],
          "label": "Question",
          "importance": "high"
        },
        {
          "name": "answers",
          "type": "list",
          "label": "Alternatives - first alternative is the correct one.",
          "importance": "medium",
          "entity": "answer",
          "min": 2,
          "max": 4,
          "defaultNum": 2,
          "field": {
            "name": "answer",
            "type": "text",
            "widget": "html",
            "tags": [
              "p",
              "br",
              "strong",
              "em",
              "code"
            ],
            "label": "Alternative",
            "importance": "medium"
          }
        }
      ]
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "fields": [
      {
        "name": "autoContinue",
        "type": "boolean",
        "label": "Auto continue",
        "description": "Automatically go to next question when alternative is selected",
        "default": true
      },
      {
        "name": "timeoutCorrect",
        "type": "number",
        "label": "Timeout on correct answers",
        "importance": "low",
        "description": "Value in milliseconds",
        "default": 2000,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "autoContinue",
              "equals": true
            }
          ]
        }
      },
      {
        "name": "timeoutWrong",
        "type": "number",
        "label": "Timeout on wrong answers",
        "importance": "low",
        "description": "Value in milliseconds",
        "default": 3000,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "autoContinue",
              "equals": true
            }
          ]
        }
      },
      {
        "name": "soundEffectsEnabled",
        "type": "boolean",
        "label": "Enable sound effects",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableRetry",
        "type": "boolean",
        "label": "Enable retry button",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableSolutionsButton",
        "type": "boolean",
        "label": "Enable show solution button",
        "importance": "low",
        "default": true
      },
      {
        "name": "passPercentage",
        "type": "number",
        "label": "Pass percentage",
        "description": "Percentage of Total score required for passing the quiz.",
        "min": 0,
        "max": 100,
        "step": 1,
        "default": 100
      }
    ]
  },
  {
    "name": "l10n",
    "type": "group",
    "label": "Localize single choice set",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "name": "nextButtonLabel",
        "type": "text",
        "label": "Label for the \"Next\" button",
        "importance": "low",
        "default": "Next question"
      },
      {
        "name": "showSolutionButtonLabel",
        "type": "text",
        "label": "Label for the \"Show solution\" button",
        "importance": "low",
        "default": "Show solution"
      },
      {
        "name": "retryButtonLabel",
        "type": "text",
        "label": "Label for the \"Retry\" button",
        "importance": "low",
        "default": "Retry"
      },
      {
        "name": "solutionViewTitle",
        "type": "text",
        "label": "Title for the show solution view",
        "importance": "low",
        "default": "Solution list"
      },
      {
        "name": "correctText",
        "type": "text",
        "label": "Readspeaker text for correct answer",
        "importance": "low",
        "default": "Correct!"
      },
      {
        "name": "incorrectText",
        "type": "text",
        "label": "Readspeaker text for incorrect answer",
        "importance": "low",
        "default": "Incorrect!"
      },
      {
        "name": "muteButtonLabel",
        "type": "text",
        "label": "Label for the \"mute\" button, to disable feedback sound",
        "importance": "low",
        "default": "Mute feedback sound"
      },
      {
        "name": "closeButtonLabel",
        "type": "text",
        "label": "Label for the \"Close\" button",
        "importance": "low",
        "default": "Close"
      },
      {
        "name": "slideOfTotal",
        "type": "text",
        "label": "Slide number text",
        "importance": "low",
        "description": "Announces current slide and total number of slides, variables are :num and :total",
        "default": "Slide :num of :total"
      },
      {
        "name": "scoreBarLabel",
        "type": "text",
        "label": "Textual representation of the score bar for those using a readspeaker",
        "default": "You got :num out of :total points",
        "importance": "low"
      },
      {
        "name": "solutionListQuestionNumber",
        "type": "text",
        "label": "Label for the question number in the solution list",
        "importance": "low",
        "description": "Announces current question index in solution list, variables are :num",
        "default": "Question :num"
      },
      {
        "name": "a11yShowSolution",
        "type": "text",
        "label": "Assistive technology description for \"Show Solution\" button",
        "default": "Show the solution. The task will be marked with its correct solution.",
        "importance": "low"
      },
      {
        "name": "a11yRetry",
        "type": "text",
        "label": "Assistive technology description for \"Retry\" button",
        "default": "Retry the task. Reset all responses and start the task over again.",
        "importance": "low"
      }
    ]
  }
]', N'', 1, null),
       (29, N'2021-04-25 12:23:29.000', N'H5P.SoundJS', N'Sound js api', 1, 0, 2, 0, 0, N'', N'soundjs-0.6.2.min.js',
        N'', N'', N'', 0, null),
       (30, N'2021-04-25 12:23:29.000', N'H5P.Summary', N'Summary', 1, 10, 11, 1, 0, N'iframe',
        N'js/stop-watch.js, js/xapi-event-builder.js, js/summary.js', N'css/summary.css', N'[
  {
    "name": "intro",
    "type": "text",
    "widget": "html",
    "label": "Introduction text",
    "importance": "high",
    "default": "Choose the correct statement.",
    "description": "Will be displayed above the summary task.",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ],
    "common": false
  },
  {
    "name": "summaries",
    "importance": "high",
    "type": "list",
    "widgets": [
      {
        "name": "ListEditor",
        "label": "Default"
      },
      {
        "name": "SummaryTextualEditor",
        "label": "Textual"
      }
    ],
    "label": "Summary",
    "entity": "statements",
    "max": 100,
    "min": 1,
    "field": {
      "name": "statements",
      "type": "group",
      "label": "Set of statements",
      "importance": "high",
      "isSubContent": true,
      "fields": [
        {
          "name": "summary",
          "type": "list",
          "label": "List of statements for the summary - the first statement is correct.",
          "entity": "statement",
          "importance": "medium",
          "min": 2,
          "field": {
            "name": "text",
            "type": "text",
            "label": "Statement",
            "importance": "medium",
            "widget": "html",
            "enterMode": "p",
            "tags": []
          }
        },
        {
          "name": "tip",
          "type": "group",
          "label": "Tip",
          "importance": "low",
          "optional": true,
          "fields": [
            {
              "name": "tip",
              "label": "Tip text",
              "importance": "low",
              "type": "text",
              "widget": "html",
              "tags": [
                "p",
                "br",
                "strong",
                "em",
                "code"
              ],
              "optional": true
            }
          ]
        }
      ]
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "name": "solvedLabel",
    "type": "text",
    "label": "Text displayed before number of statements solved in the summary task.",
    "importance": "low",
    "default": "Progress:",
    "description": "Will be displayed above the statements. Example: ''Progress: 2/5''",
    "common": true
  },
  {
    "name": "scoreLabel",
    "type": "text",
    "label": "Text displayed before number of wrong statements selected in the summary task.",
    "importance": "low",
    "default": "Wrong answers:",
    "description": "Will be displayed above the statements. Example: ''Wrong answers: 4''",
    "common": true
  },
  {
    "name": "resultLabel",
    "type": "text",
    "label": "Summary feedback header",
    "importance": "low",
    "default": "Your result",
    "description": "Will be displayed above the summary feedback.",
    "common": true
  },
  {
    "name": "labelCorrect",
    "type": "text",
    "label": "Readspeaker text for correct answer",
    "importance": "low",
    "default": "Correct.",
    "common": true
  },
  {
    "name": "labelIncorrect",
    "type": "text",
    "label": "Readspeaker text for announcing incorrect answer",
    "importance": "low",
    "default": "Incorrect! Please try again.",
    "common": true
  },
  {
    "name": "alternativeIncorrectLabel",
    "type": "text",
    "label": "Readspeaker label for incorrect answer",
    "importance": "low",
    "default": "Incorrect",
    "common": true
  },
  {
    "name": "labelCorrectAnswers",
    "type": "text",
    "label": "Label list of correct answers",
    "importance": "low",
    "default": "Correct answers.",
    "common": true
  },
  {
    "name": "tipButtonLabel",
    "type": "text",
    "label": "Label for the show tip button",
    "importance": "low",
    "default": "Show tip",
    "common": true
  },
  {
    "name": "scoreBarLabel",
    "type": "text",
    "label": "Textual representation of the score bar for those using a readspeaker",
    "description": ":num and :total are special keywords which are programmatically updated",
    "default": "You got :num out of :total points",
    "importance": "low",
    "common": true
  },
  {
    "name": "progressText",
    "type": "text",
    "label": "Text used for readspeakers to communicate progress",
    "description": ":num and :total are special keywords which are programmatically updated",
    "default": "Progress :num of :total",
    "importance": "low",
    "common": true
  }
]
', N'', 1, null),
       (31, N'2021-04-25 12:23:29.000', N'H5P.Table', N'Table', 1, 1, 16, 0, 0, N'', N'scripts/table.js',
        N'styles/table.css', N'[
  {
    "name": "text",
    "type": "text",
    "widget": "html",
    "label": "Table",
    "importance": "high",
    "default": "<table class=\"h5p-table\"><thead><tr><th scope=\"col\">Heading Column 1</th><th scope=\"col\">Heading Column 2</th></tr></thead><tbody><tr><td>Row 1 Col 1</td><td>Row 1 Col 2</td></tr><tr><td>Row 2 Col 1</td><td>Row 2 Col 2</td></tr></tbody></table>",
    "tags": [
      "strong",
      "em",
      "del",
      "a",
      "table",
      "code"
    ],
    "font": {
      "color": true
    }
  }
]
', N'', 0, null),
       (32, N'2021-04-25 12:23:29.000', N'H5P.Text', N'Text', 1, 1, 15, 0, 0, N'', N'scripts/text.js',
        N'styles/text.css', N'[
  {
    "name": "text",
    "type": "text",
    "widget": "html",
    "importance": "high",
    "label": "Text",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "del",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  }
]
', N'', 0, N'{"disable":false,"disableExtraTitleField":true}'),
       (33, N'2021-04-25 12:23:29.000', N'H5P.TextUtilities', N'Text Utilities', 1, 3, 0, 0, 0, N'',
        N'scripts/text-utilities.js', N'', N'', N'', 0, null),
       (34, N'2021-04-25 12:23:29.000', N'H5P.Transition', N'Transition', 1, 0, 4, 0, 0, N'', N'transition.js', N'',
        N'', N'', 0, null),
       (35, N'2021-04-25 12:23:29.000', N'H5P.TrueFalse', N'True/False Question', 1, 6, 7, 1, 0, N'iframe',
        N'scripts/h5p-true-false.js, scripts/h5p-true-false-answer-group.js, scripts/h5p-true-false-answer.js',
        N'styles/h5p-true-false.css', N'[
  {
    "name": "media",
    "type": "group",
    "label": "Media",
    "importance": "medium",
    "fields": [
      {
        "name": "type",
        "type": "library",
        "label": "Type",
        "importance": "medium",
        "options": [
          "H5P.Image 1.1",
          "H5P.Video 1.5"
        ],
        "optional": true,
        "description": "Optional media to display above the question."
      },
      {
        "name": "disableImageZooming",
        "type": "boolean",
        "label": "Disable image zooming",
        "importance": "low",
        "default": false,
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "type",
              "equals": "H5P.Image 1.1"
            }
          ]
        }
      }
    ]
  },
  {
    "name": "question",
    "type": "text",
    "widget": "html",
    "label": "Question",
    "importance": "high",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "sub",
      "sup",
      "h2",
      "h3",
      "pre",
      "code"
    ]
  },
  {
    "name": "correct",
    "type": "select",
    "widget": "radioGroup",
    "alignment": "horizontal",
    "label": "Correct answer",
    "importance": "high",
    "options": [
      {
        "value": "true",
        "label": "True"
      },
      {
        "value": "false",
        "label": "False"
      }
    ],
    "default": "true"
  },
  {
    "name": "l10n",
    "type": "group",
    "common": true,
    "label": "User interface translations for True/False Questions",
    "importance": "low",
    "fields": [
      {
        "name": "trueText",
        "type": "text",
        "label": "Label for true button",
        "importance": "low",
        "default": "True"
      },
      {
        "name": "falseText",
        "type": "text",
        "label": "Label for false button",
        "importance": "low",
        "default": "False"
      },
      {
        "label": "Feedback text",
        "importance": "low",
        "name": "score",
        "type": "text",
        "default": "You got @score of @total points",
        "description": "Feedback text, variables available: @score and @total. Example: ''You got @score of @total possible points''"
      },
      {
        "label": "Text for \"Check\" button",
        "importance": "low",
        "name": "checkAnswer",
        "type": "text",
        "default": "Check"
      },
      {
        "label": "Text for \"Show solution\" button",
        "importance": "low",
        "name": "showSolutionButton",
        "type": "text",
        "default": "Show solution"
      },
      {
        "label": "Text for \"Retry\" button",
        "importance": "low",
        "name": "tryAgain",
        "type": "text",
        "default": "Retry"
      },
      {
        "name": "wrongAnswerMessage",
        "type": "text",
        "label": "Wrong Answer",
        "importance": "low",
        "default": "Wrong answer"
      },
      {
        "name": "correctAnswerMessage",
        "type": "text",
        "label": "Correct Answer",
        "importance": "low",
        "default": "Correct answer"
      },
      {
        "name": "scoreBarLabel",
        "type": "text",
        "label": "Textual representation of the score bar for those using a readspeaker",
        "default": "You got :num out of :total points",
        "importance": "low"
      },
      {
        "name": "a11yCheck",
        "type": "text",
        "label": "Assistive technology description for \"Check\" button",
        "default": "Check the answers. The responses will be marked as correct, incorrect, or unanswered.",
        "importance": "low"
      },
      {
        "name": "a11yShowSolution",
        "type": "text",
        "label": "Assistive technology description for \"Show Solution\" button",
        "default": "Show the solution. The task will be marked with its correct solution.",
        "importance": "low"
      },
      {
        "name": "a11yRetry",
        "type": "text",
        "label": "Assistive technology description for \"Retry\" button",
        "default": "Retry the task. Reset all responses and start the task over again.",
        "importance": "low"
      }
    ]
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "fields": [
      {
        "name": "enableRetry",
        "type": "boolean",
        "label": "Enable \"Retry\" button",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableSolutionsButton",
        "type": "boolean",
        "label": "Enable \"Show Solution\" button",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableCheckButton",
        "type": "boolean",
        "label": "Enable \"Check\" button",
        "widget": "none",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "label": "Show confirmation dialog on \"Check\"",
        "importance": "low",
        "name": "confirmCheckDialog",
        "type": "boolean",
        "default": false
      },
      {
        "label": "Show confirmation dialog on \"Retry\"",
        "importance": "low",
        "name": "confirmRetryDialog",
        "type": "boolean",
        "default": false
      },
      {
        "label": "Automatically check answer",
        "importance": "low",
        "description": "Note that accessibility will suffer if enabling this option",
        "name": "autoCheck",
        "type": "boolean",
        "default": false
      },
      {
        "name": "feedbackOnCorrect",
        "label": "Feedback on correct answer",
        "importance": "low",
        "description": "This will override the default feedback text. Variables available: @score and @total",
        "type": "text",
        "maxLength": 2048,
        "optional": true
      },
      {
        "name": "feedbackOnWrong",
        "label": "Feedback on wrong answer",
        "importance": "low",
        "description": "This will override the default feedback text. Variables available: @score and @total",
        "type": "text",
        "maxLength": 2048,
        "optional": true
      }
    ]
  },
  {
    "label": "Check confirmation dialog",
    "importance": "low",
    "name": "confirmCheck",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Header text",
        "importance": "low",
        "name": "header",
        "type": "text",
        "default": "Finish ?"
      },
      {
        "label": "Body text",
        "importance": "low",
        "name": "body",
        "type": "text",
        "default": "Are you sure you wish to finish ?",
        "widget": "html",
        "enterMode": "p",
        "tags": [
          "strong",
          "em",
          "del",
          "u",
          "code"
        ]
      },
      {
        "label": "Cancel button label",
        "importance": "low",
        "name": "cancelLabel",
        "type": "text",
        "default": "Cancel"
      },
      {
        "label": "Confirm button label",
        "importance": "low",
        "name": "confirmLabel",
        "type": "text",
        "default": "Finish"
      }
    ]
  },
  {
    "label": "Retry confirmation dialog",
    "importance": "low",
    "name": "confirmRetry",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Header text",
        "importance": "low",
        "name": "header",
        "type": "text",
        "default": "Retry ?"
      },
      {
        "label": "Body text",
        "importance": "low",
        "name": "body",
        "type": "text",
        "default": "Are you sure you wish to retry ?",
        "widget": "html",
        "enterMode": "p",
        "tags": [
          "strong",
          "em",
          "del",
          "u",
          "code"
        ]
      },
      {
        "label": "Cancel button label",
        "importance": "low",
        "name": "cancelLabel",
        "type": "text",
        "default": "Cancel"
      },
      {
        "label": "Confirm button label",
        "importance": "low",
        "name": "confirmLabel",
        "type": "text",
        "default": "Confirm"
      }
    ]
  }
]', N'', 1, null),
       (36, N'2021-04-25 12:23:29.000', N'H5P.Video', N'Video', 1, 5, 14, 0, 0, N'',
        N'scripts/youtube.js, scripts/panopto.js, scripts/html5.js, scripts/flash.js, scripts/video.js',
        N'styles/video.css', N'[
  {
    "name": "sources",
    "type": "video",
    "label": "Video sources",
    "importance": "high",
    "description": "To ensure that the video works in all browsers you should add both WebM and MP4 formatted sources.",
    "disableCopyright": true
  },
  {
    "name": "visuals",
    "type": "group",
    "label": "Visuals",
    "importance": "medium",
    "fields": [
      {
        "name": "poster",
        "type": "image",
        "label": "Poster image",
        "importance": "low"
      },
      {
        "name": "fit",
        "type": "boolean",
        "label": "Fit video player to use all available space",
        "importance": "low",
        "default": true,
        "description": "If not set the video player will have the same aspect ratio as the video."
      },
      {
        "name": "controls",
        "type": "boolean",
        "label": "Show video player controls",
        "importance": "low",
        "default": true,
        "description": "Add controls to the video player. This allows users to play, pause, etc."
      }
    ]
  },
  {
    "name": "playback",
    "type": "group",
    "label": "Playback",
    "importance": "medium",
    "fields": [
      {
        "name": "autoplay",
        "type": "boolean",
        "label": "Auto-play video",
        "importance": "low",
        "default": false,
        "description": "Start playing the video automatically. May not work on mobile devices."
      },
      {
        "name": "loop",
        "type": "boolean",
        "label": "Loop video",
        "importance": "low",
        "default": false,
        "description": "Automatically start the video over again when it ends."
      }
    ]
  },
  {
    "name": "l10n",
    "type": "group",
    "label": "Video localization",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "name": "name",
        "type": "text",
        "label": "Name",
        "importance": "low",
        "default": "Video",
        "description": "Helps identify content of this type."
      },
      {
        "name": "loading",
        "type": "text",
        "label": "Loading",
        "importance": "low",
        "default": "Video player loading..."
      },
      {
        "name": "noPlayers",
        "type": "text",
        "label": "No players found",
        "importance": "low",
        "default": "Found no video players that supports the given video format."
      },
      {
        "name": "noSources",
        "type": "text",
        "label": "No sources",
        "importance": "low",
        "default": "Video is missing sources."
      },
      {
        "name": "aborted",
        "type": "text",
        "label": "Aborted",
        "importance": "low",
        "default": "Media playback has been aborted."
      },
      {
        "name": "networkFailure",
        "type": "text",
        "label": "Network failure",
        "importance": "low",
        "default": "Network failure."
      },
      {
        "name": "cannotDecode",
        "type": "text",
        "label": "Cannot decode video source",
        "importance": "low",
        "default": "Unable to decode media."
      },
      {
        "name": "formatNotSupported",
        "type": "text",
        "label": "Format not supported",
        "importance": "low",
        "default": "Video format not supported."
      },
      {
        "name": "mediaEncrypted",
        "type": "text",
        "label": "Media encrypted",
        "importance": "low",
        "default": "Media encrypted."
      },
      {
        "name": "unknownError",
        "type": "text",
        "label": "Unknown error",
        "importance": "low",
        "default": "Unknown error."
      },
      {
        "name": "invalidYtId",
        "type": "text",
        "label": "Invalid YouTube ID",
        "importance": "low",
        "default": "Invalid YouTube ID."
      },
      {
        "name": "unknownYtId",
        "type": "text",
        "label": "Unknown YouTube ID",
        "importance": "low",
        "default": "Unable to find video with the given YouTube ID."
      },
      {
        "name": "restrictedYt",
        "type": "text",
        "label": "Restricted YouTube video",
        "importance": "low",
        "default": "The owner of this video does not allow it to be embedded."
      }
    ]
  },
  {
    "name": "a11y",
    "type": "group",
    "label": "Accessibility",
    "importance": "medium",
    "fields": [
      {
        "name": "videoTrack",
        "type": "list",
        "label": "Add video track",
        "importance": "low",
        "optional": true,
        "entity": "Track",
        "min": 0,
        "field": {
          "name": "track",
          "type": "group",
          "label": "Track",
          "importance": "low",
          "expanded": false,
          "fields": [
            {
              "name": "label",
              "type": "text",
              "label": "Track label",
              "importance": "low",
              "optional": true
            },
            {
              "name": "kind",
              "type": "select",
              "label": "Type kind, refer to <a target=''_blank'' href=https://html.spec.whatwg.org/multipage/embedded-content.html#the-track-element>HTML living standard</a>",
              "importance": "low",
              "default": "descriptions",
              "options": [
                {
                  "value": "subtitles",
                  "label": "Subtitles"
                },
                {
                  "value": "captions",
                  "label": "Captions"
                },
                {
                  "value": "descriptions",
                  "label": "Descriptions"
                },
                {
                  "value": "chapters",
                  "label": "Chapters"
                }
              ]
            },
            {
              "name": "srcLang",
              "type": "text",
              "label": "Source language, must be defined for subtitles",
              "importance": "low",
              "default": "en",
              "description": "Must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined."
            },
            {
              "name": "track",
              "type": "file",
              "label": "Track file (WebVTT)",
              "importance": "low"
            }
          ]
        }
      }
    ]
  }
]
', N'', 0, null),
       (37, N'2021-04-25 12:23:29.000', N'H5PEditor.ColorSelector', N'H5PEditor.ColorSelector', 1, 2, 6, 0, 0, N'',
        N'scripts/spectrum.js, scripts/color-selector.js', N'styles/spectrum.css, styles/color-selector.css', N'', N'',
        0, null),
       (38, N'2021-04-25 12:23:29.000', N'H5PEditor.DragQuestion', N'Drag Question Editor', 1, 10, 13, 0, 0, N'',
        N'H5PEditor.DragQuestion.js, H5PEditor.DynamicCheckboxes.js', N'H5PEditor.DragQuestion.css', N'', N'', 0, null),
       (39, N'2021-04-25 12:23:29.000', N'H5PEditor.Duration', N'H5PEditor.Duration', 1, 1, 12, 0, 0, N'',
        N'scripts/duration.js', N'styles/duration.css', N'', N'', 0, null),
       (40, N'2021-04-25 12:23:29.000', N'H5PEditor.InteractiveVideo', N'Interactive Video Editor', 1, 22, 2, 0, 0, N'',
        N'Scripts/image-radio-button-group.js, Scripts/interactive-video-editor.js, Scripts/guided-tours.js, Scripts/require-completion.js',
        N'styles/image-radio-button-group.css, styles/interactive-video-editor.css, styles/require-completion.css', N'',
        N'', 0, null),
       (41, N'2021-04-25 12:23:29.000', N'H5PEditor.RadioGroup', N'H5PEditor.RadioGroup', 1, 1, 4, 0, 0, N'',
        N'radio-group.js', N'radio-group.css', N'', N'', 0, null),
       (42, N'2021-04-25 12:23:29.000', N'H5PEditor.RangeList', N'H5P Editor Range List', 1, 0, 11, 0, 0, N'',
        N'h5p-editor-range-list.js', N'h5p-editor-range-list.css', N'', N'', 0, null),
       (43, N'2021-04-25 12:23:29.000', N'H5PEditor.SelectToggleFields',
        N'Toggle visibility of fields when selecting options in list', 1, 1, 1, 0, 0, N'', N'select-toggle-fields.js',
        N'select-toggle-fields.css', N'', N'', 0, null),
       (44, N'2021-04-25 12:23:29.000', N'H5PEditor.ShowWhen', N'Toggle visibility of a field based on rules', 1, 0, 5,
        0, 0, N'', N'h5p-show-when.js', N'h5p-show-when.css', N'', N'', 0, null),
       (45, N'2021-04-25 12:23:29.000', N'H5PEditor.SingleChoiceSetTextualEditor',
        N'H5P Editor Single Choice Set Textual Editor', 1, 0, 8, 0, 0, N'', N'h5peditor-ssc-editor.js',
        N'h5peditor-ssc-editor.css', N'', N'', 0, null),
       (46, N'2021-04-25 12:23:29.000', N'H5PEditor.SummaryTextualEditor', N'H5P Editor Summary Textual Editor', 1, 1,
        10, 0, 0, N'', N'summary-textual-editor.js', N'styles/H5PEditor.SummaryTextualEditor.css', N'', N'', 0, null),
       (47, N'2021-04-25 12:23:29.000', N'H5PEditor.TableList', N'H5P Editor Table List', 1, 0, 4, 0, 0, N'',
        N'h5p-editor-table-list.js', N'h5p-editor-table-list.css', N'', N'', 0, null),
       (48, N'2021-04-25 12:23:29.000', N'H5PEditor.Timecode', N'Timecode Editor', 1, 2, 12, 0, 0, N'', N'timecode.js',
        N'timecode.css', N'', N'', 0, null),
       (49, N'2021-04-25 12:23:29.000', N'H5PEditor.UrlField', N'Url Field', 1, 2, 2, 0, 0, N'', N'link-widget.js',
        N'link-widget.css', N'', N'', 0, null),
       (50, N'2021-04-25 12:23:29.000', N'H5PEditor.VerticalTabs', N'H5P Editor Vertical Tabs', 1, 3, 7, 0, 0, N'',
        N'vertical-tabs.js', N'styles/css/vertical-tabs.css', N'', N'', 0, null),
       (51, N'2021-04-25 12:23:29.000', N'H5PEditor.Wizard', N'H5PEditor.Wizard', 1, 2, 15, 0, 0, N'',
        N'Scripts/Wizard.js', N'Styles/Wizard.css', N'', N'', 0, null),
       (52, N'2021-04-25 12:23:29.000', N'Shepherd', N'Shepherd', 1, 0, 3, 0, 0, N'', N'scripts/shepherd.js',
        N'styles/shepherd-theme-arrows.css', N'', N'', 0, null),
       (53, N'2021-04-25 12:23:29.000', N'Tether', N'Tether', 1, 0, 2, 0, 0, N'', N'scripts/tether.min.js',
        N'styles/tether.min.css', N'', N'', 0, null),
       (54, N'2021-04-25 12:23:29.000', N'flowplayer', N'Flowplayer', 1, 0, 5, 0, 0, N'',
        N'scripts/flowplayer-3.2.12.min.js', N'', N'', N'', 0, null),
       (55, N'2021-04-25 12:23:29.000', N'jQuery.ui', N'UI', 1, 10, 19, 0, 0, N'', N'h5p-jquery-ui.js',
        N'h5p-jquery-ui.css', N'', N'', 0, null),
       (56, N'2021-04-25 12:24:10.000', N'H5P.AppearIn', N'appear.in for Chat and Talk', 1, 0, 14, 1, 0, N'',
        N'h5p-appear-in.js', N'', N'[
  {
    "label": "Room name",
    "name": "appearRoom",
    "importance": "high",
    "type": "text",
    "default": "h5p",
    "description": "Name of the appear.in room"
  },
  {
    "label": "Fit to container",
    "name": "fitToContainer",
    "importance": "low",
    "type": "boolean",
    "default": true,
    "description": "Make the room fit its container, will override any height and width defined with 100% values."
  },
  {
    "label": "Height",
    "importance": "low",
    "name": "appearHeight",
    "type": "number",
    "default": "400",
    "description": "Set Height of chat/talk room"
  },
  {
    "label": "Width",
    "importance": "low",
    "name": "appearWidth",
    "type": "number",
    "default": "550",
    "description": "Set Width of chat/talk room"
  }
]', N'', 1, null),
       (57, N'2021-04-25 12:24:10.000', N'H5P.Audio', N'Audio', 1, 4, 5, 1, 0, N'iframe', N'scripts/audio.js',
        N'styles/audio.css', N'[
  {
    "name": "files",
    "type": "audio",
    "importance": "high",
    "label": "Source files",
    "disableCopyright": true
  },
  {
    "name": "playerMode",
    "type": "select",
    "importance": "low",
    "label": "Player mode",
    "description": "Select the layout of the player.",
    "options": [
      {
        "value": "minimalistic",
        "label": "Minimalistic"
      },
      {
        "value": "full",
        "label": "Full"
      },
      {
        "value": "transparent",
        "label": "Transparent"
      }
    ],
    "default": "minimalistic"
  },
  {
    "name": "fitToWrapper",
    "type": "boolean",
    "importance": "low",
    "label": "Fit to wrapper",
    "default": false,
    "descriptions": "Adjust audioplayer size to use available space"
  },
  {
    "name": "controls",
    "type": "boolean",
    "importance": "low",
    "label": "Enable controls",
    "default": true,
    "description": "Controls allow the user to for instance pause the audio"
  },
  {
    "name": "autoplay",
    "type": "boolean",
    "importance": "low",
    "label": "Enable autoplay",
    "description": "With autoplay the audio starts to play immediately. If autoplay is disabled the user presses a play button to start the audio."
  },
  {
    "name": "playAudio",
    "type": "text",
    "importance": "low",
    "label": "Play audio (Readspeaker)",
    "common": true,
    "default": "Play audio"
  },
  {
    "name": "pauseAudio",
    "type": "text",
    "importance": "low",
    "label": "Pause audio (Readspeaker)",
    "common": true,
    "default": "Pause audio"
  },
  {
    "name": "contentName",
    "type": "text",
    "importance": "low",
    "label": "Audio content name",
    "common": true,
    "default": "Audio"
  },
  {
    "name": "audioNotSupported",
    "type": "text",
    "label": "Audio not supported message",
    "importance": "low",
    "common": true,
    "default": "Your browser does not support this audio"
  }
]
', N'', 0, null),
       (58, N'2021-04-25 12:24:10.000', N'H5P.ContinuousText', N'Continuous Text', 1, 2, 14, 0, 0, N'',
        N'scripts/ct.js', N'', N'[
  {
    "name": "text",
    "type": "text",
    "importance": "high",
    "widget": "html",
    "label": "Text",
    "tags": [
      "strong",
      "em",
      "del",
      "br",
      "p",
      "a",
      "h2",
      "h3",
      "pre",
      "code"
    ]
  }
]
', N'', 0, null),
       (59, N'2021-04-25 12:24:10.000', N'H5P.CoursePresentation', N'Course Presentation', 1, 22, 3, 1, 1, N'iframe',
        N'dist/h5p-course-presentation.js', N'dist/h5p-course-presentation.css', N'[
  {
    "name": "presentation",
    "type": "group",
    "importance": "high",
    "widget": "coursepresentation",
    "fields": [
      {
        "name": "slides",
        "importance": "high",
        "type": "list",
        "field": {
          "name": "slide",
          "importance": "high",
          "type": "group",
          "fields": [
            {
              "name": "elements",
              "importance": "high",
              "type": "list",
              "field": {
                "name": "element",
                "importance": "high",
                "type": "group",
                "fields": [
                  {
                    "name": "x",
                    "importance": "low",
                    "type": "number",
                    "widget": "none"
                  },
                  {
                    "name": "y",
                    "importance": "low",
                    "type": "number",
                    "widget": "none"
                  },
                  {
                    "name": "width",
                    "importance": "low",
                    "type": "number",
                    "widget": "none",
                    "optional": true
                  },
                  {
                    "name": "height",
                    "importance": "low",
                    "type": "number",
                    "widget": "none",
                    "optional": true
                  },
                  {
                    "name": "action",
                    "type": "library",
                    "importance": "high",
                    "options": [
                      "H5P.AdvancedText 1.1",
                      "H5P.Link 1.3",
                      "H5P.Image 1.1",
                      "H5P.Shape 1.0",
                      "H5P.Video 1.5",
                      "H5P.Audio 1.4",
                      "H5P.Blanks 1.12",
                      "H5P.SingleChoiceSet 1.11",
                      "H5P.MultiChoice 1.14",
                      "H5P.TrueFalse 1.6",
                      "H5P.DragQuestion 1.13",
                      "H5P.Summary 1.10",
                      "H5P.DragText 1.8",
                      "H5P.MarkTheWords 1.9",
                      "H5P.Dialogcards 1.8",
                      "H5P.ContinuousText 1.2",
                      "H5P.ExportableTextArea 1.3",
                      "H5P.Table 1.1",
                      "H5P.InteractiveVideo 1.22",
                      "H5P.TwitterUserFeed 1.0"
                    ],
                    "optional": true
                  },
                  {
                    "name": "solution",
                    "type": "text",
                    "widget": "html",
                    "optional": true,
                    "label": "Comments",
                    "importance": "low",
                    "description": "The comments are shown when the user displays the suggested answers for all slides.",
                    "enterMode": "p",
                    "tags": [
                      "strong",
                      "em",
                      "del",
                      "a",
                      "ul",
                      "ol",
                      "h2",
                      "h3",
                      "hr",
                      "pre",
                      "code"
                    ]
                  },
                  {
                    "name": "alwaysDisplayComments",
                    "type": "boolean",
                    "label": "Always display comments",
                    "importance": "low",
                    "optional": true
                  },
                  {
                    "name": "backgroundOpacity",
                    "type": "number",
                    "label": "Background Opacity",
                    "importance": "low",
                    "min": 0,
                    "max": 100,
                    "step": 5,
                    "default": 0,
                    "optional": true
                  },
                  {
                    "name": "displayAsButton",
                    "type": "boolean",
                    "label": "Display as button",
                    "importance": "medium",
                    "default": false,
                    "optional": true
                  },
                  {
                    "name": "buttonSize",
                    "type": "select",
                    "label": "Button size",
                    "importance": "low",
                    "optional": false,
                    "default": "big",
                    "options": [
                      {
                        "value": "small",
                        "label": "Small"
                      },
                      {
                        "value": "big",
                        "label": "Big"
                      }
                    ]
                  },
                  {
                    "name": "title",
                    "type": "text",
                    "optional": true,
                    "label": "Title",
                    "importance": "medium"
                  },
                  {
                    "name": "goToSlideType",
                    "type": "select",
                    "label": "Go to",
                    "importance": "medium",
                    "optional": false,
                    "options": [
                      {
                        "value": "specified",
                        "label": "Specific slide number"
                      },
                      {
                        "value": "next",
                        "label": "Next slide"
                      },
                      {
                        "value": "previous",
                        "label": "Previous slide"
                      }
                    ],
                    "default": "specified"
                  },
                  {
                    "name": "goToSlide",
                    "type": "number",
                    "label": "Specific slide number",
                    "description": "Only applicable when ''Specific slide number'' is selected",
                    "importance": "low",
                    "min": 1,
                    "optional": true
                  },
                  {
                    "name": "invisible",
                    "type": "boolean",
                    "label": "Invisible",
                    "importance": "low",
                    "description": "Default cursor, no title and no tab index. Warning: Users with disabilities or keyboard only users will have trouble using this element.",
                    "default": false
                  }
                ]
              }
            },
            {
              "name": "keywords",
              "importance": "low",
              "type": "list",
              "optional": true,
              "field": {
                "name": "keyword",
                "importance": "low",
                "type": "group",
                "optional": true,
                "fields": [
                  {
                    "name": "main",
                    "importance": "low",
                    "type": "text",
                    "optional": true
                  },
                  {
                    "name": "subs",
                    "importance": "low",
                    "type": "list",
                    "optional": true,
                    "field": {
                      "name": "keyword",
                      "importance": "low",
                      "type": "text"
                    }
                  }
                ]
              }
            },
            {
              "name": "slideBackgroundSelector",
              "importance": "medium",
              "type": "group",
              "widget": "radioSelector",
              "fields": [
                {
                  "name": "imageSlideBackground",
                  "type": "image",
                  "label": "Image",
                  "importance": "medium",
                  "optional": true,
                  "description": "Image background should have a 2:1 width to height ratio to avoid stretching. High resolution images will display better on larger screens."
                },
                {
                  "name": "fillSlideBackground",
                  "importance": "medium",
                  "type": "text",
                  "widget": "colorSelector",
                  "label": "Pick a color",
                  "spectrum": {
                    "flat": true,
                    "showInput": true,
                    "allowEmpty": true,
                    "showButtons": false
                  },
                  "default": null,
                  "optional": true
                }
              ]
            }
          ]
        }
      },
      {
        "name": "ct",
        "importance": "low",
        "type": "text",
        "widget": "none",
        "optional": true,
        "tags": [
          "strong",
          "em",
          "del",
          "br",
          "p",
          "a",
          "h2",
          "h3",
          "pre",
          "code"
        ]
      },
      {
        "name": "keywordListEnabled",
        "type": "boolean",
        "label": "Keyword list",
        "importance": "low",
        "default": true
      },
      {
        "name": "keywordListAlwaysShow",
        "type": "boolean",
        "label": "Always show",
        "importance": "low",
        "default": false
      },
      {
        "name": "keywordListAutoHide",
        "type": "boolean",
        "label": "Auto hide",
        "importance": "low",
        "default": false
      },
      {
        "name": "keywordListOpacity",
        "type": "number",
        "label": "Opacity",
        "importance": "low",
        "min": 0,
        "max": 100,
        "default": 90
      },
      {
        "name": "globalBackgroundSelector",
        "importance": "medium",
        "type": "group",
        "widget": "radioSelector",
        "fields": [
          {
            "name": "imageGlobalBackground",
            "type": "image",
            "label": "Image",
            "importance": "medium",
            "optional": true,
            "description": "Image background should have a 2:1 width to height ratio to avoid stretching. High resolution images will display better on larger screens."
          },
          {
            "name": "fillGlobalBackground",
            "type": "text",
            "widget": "colorSelector",
            "label": "Pick a color",
            "importance": "medium",
            "spectrum": {
              "flat": true,
              "showInput": true,
              "allowEmpty": true,
              "showButtons": false
            },
            "default": null,
            "optional": true
          }
        ]
      }
    ]
  },
  {
    "name": "l10n",
    "type": "group",
    "label": "Localize",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "name": "slide",
        "type": "text",
        "label": "Translation for \"Slide\"",
        "importance": "low",
        "default": "Slide"
      },
      {
        "name": "score",
        "type": "text",
        "label": "Translation for \"Score\"",
        "importance": "low",
        "default": "Score"
      },
      {
        "name": "yourScore",
        "type": "text",
        "label": "Translation for \"Your Score\"",
        "importance": "low",
        "default": "Your Score"
      },
      {
        "name": "maxScore",
        "type": "text",
        "label": "Translation for \"Max Score\"",
        "importance": "low",
        "default": "Max Score"
      },
      {
        "name": "total",
        "type": "text",
        "label": "Translation for \"Total\"",
        "importance": "low",
        "default": "Total"
      },
      {
        "name": "totalScore",
        "type": "text",
        "label": "Translation for \"Total Score\"",
        "importance": "low",
        "default": "Total Score"
      },
      {
        "name": "showSolutions",
        "type": "text",
        "label": "Title for show solutions button",
        "importance": "low",
        "default": "Show solutions"
      },
      {
        "name": "retry",
        "type": "text",
        "label": "Text for the retry button",
        "importance": "low",
        "default": "Retry",
        "optional": true
      },
      {
        "name": "exportAnswers",
        "type": "text",
        "label": "Text for the export text button",
        "importance": "low",
        "default": "Export text"
      },
      {
        "name": "hideKeywords",
        "type": "text",
        "label": "Hide sidebar navigation menu button title",
        "importance": "low",
        "default": "Hide sidebar navigation menu"
      },
      {
        "name": "showKeywords",
        "type": "text",
        "label": "Show sidebar navigation menu button title",
        "importance": "low",
        "default": "Show sidebar navigation menu"
      },
      {
        "name": "fullscreen",
        "type": "text",
        "label": "Fullscreen label",
        "importance": "low",
        "default": "Fullscreen"
      },
      {
        "name": "exitFullscreen",
        "type": "text",
        "label": "Exit fullscreen label",
        "importance": "low",
        "default": "Exit fullscreen"
      },
      {
        "name": "prevSlide",
        "type": "text",
        "label": "Previous slide label",
        "importance": "low",
        "default": "Previous slide"
      },
      {
        "name": "nextSlide",
        "type": "text",
        "label": "Next slide label",
        "importance": "low",
        "default": "Next slide"
      },
      {
        "name": "currentSlide",
        "type": "text",
        "label": "Current slide label",
        "importance": "low",
        "default": "Current slide"
      },
      {
        "name": "lastSlide",
        "type": "text",
        "label": "Last slide label",
        "importance": "low",
        "default": "Last slide"
      },
      {
        "name": "solutionModeTitle",
        "type": "text",
        "label": "Exit solution mode text",
        "importance": "low",
        "default": "Exit solution mode"
      },
      {
        "name": "solutionModeText",
        "type": "text",
        "label": "Solution mode text",
        "importance": "low",
        "default": "Solution Mode"
      },
      {
        "name": "summaryMultipleTaskText",
        "type": "text",
        "label": "Text when multiple tasks on a page",
        "importance": "low",
        "default": "Multiple tasks"
      },
      {
        "name": "scoreMessage",
        "type": "text",
        "label": "Score message text",
        "importance": "low",
        "default": "You achieved:"
      },
      {
        "name": "shareFacebook",
        "type": "text",
        "label": "Share to Facebook text",
        "importance": "low",
        "default": "Share on Facebook"
      },
      {
        "name": "shareTwitter",
        "type": "text",
        "label": "Share to Twitter text",
        "importance": "low",
        "default": "Share on Twitter"
      },
      {
        "name": "shareGoogle",
        "type": "text",
        "label": "Share to Google text",
        "importance": "low",
        "default": "Share on Google+"
      },
      {
        "name": "summary",
        "type": "text",
        "label": "Title for summary slide",
        "importance": "low",
        "default": "Summary"
      },
      {
        "name": "solutionsButtonTitle",
        "type": "text",
        "label": "Title for the comments icon",
        "importance": "low",
        "default": "Show comments"
      },
      {
        "name": "printTitle",
        "type": "text",
        "label": "Title for print button",
        "importance": "low",
        "default": "Print"
      },
      {
        "name": "printIngress",
        "type": "text",
        "label": "Print dialog ingress",
        "importance": "low",
        "default": "How would you like to print this presentation?"
      },
      {
        "name": "printAllSlides",
        "type": "text",
        "label": "Label for \"Print all slides\" button",
        "importance": "low",
        "default": "Print all slides"
      },
      {
        "name": "printCurrentSlide",
        "type": "text",
        "label": "Label for \"Print current slide\" button",
        "importance": "low",
        "default": "Print current slide"
      },
      {
        "name": "noTitle",
        "type": "text",
        "label": "Label for slides without a title",
        "importance": "low",
        "default": "No title"
      },
      {
        "name": "accessibilitySlideNavigationExplanation",
        "type": "text",
        "label": "Explanation of slide navigation for assistive technologies",
        "importance": "low",
        "default": "Use left and right arrow to change slide in that direction whenever canvas is selected."
      },
      {
        "name": "accessibilityCanvasLabel",
        "type": "text",
        "label": "Canvas label for assistive technologies",
        "importance": "low",
        "default": "Presentation canvas. Use left and right arrow to move between slides."
      },
      {
        "name": "containsNotCompleted",
        "type": "text",
        "label": "Label for uncompleted interactions",
        "importance": "low",
        "default": "@slideName contains not completed interaction"
      },
      {
        "name": "containsCompleted",
        "type": "text",
        "label": "Label for completed interactions",
        "importance": "low",
        "default": "@slideName contains completed interaction"
      },
      {
        "name": "slideCount",
        "type": "text",
        "label": "Label for slide counter. Variables are @index, @total",
        "importance": "low",
        "default": "Slide @index of @total"
      },
      {
        "name": "containsOnlyCorrect",
        "type": "text",
        "label": "Label for slides that only contains correct answers",
        "importance": "low",
        "default": "@slideName only has correct answers"
      },
      {
        "name": "containsIncorrectAnswers",
        "type": "text",
        "label": "Label for slides that has incorrect answers",
        "importance": "low",
        "default": "@slideName has incorrect answers"
      },
      {
        "name": "shareResult",
        "type": "text",
        "label": "Label for social sharing bar",
        "importance": "low",
        "default": "Share Result"
      },
      {
        "name": "accessibilityTotalScore",
        "type": "text",
        "label": "Total score announcement for assistive technologies",
        "default": "You got @score of @maxScore points in total",
        "description": "Available variables are @score and @maxScore"
      },
      {
        "name": "accessibilityEnteredFullscreen",
        "type": "text",
        "label": "Entered fullscreen announcement for assistive technologies",
        "default": "Entered fullscreen"
      },
      {
        "name": "accessibilityExitedFullscreen",
        "type": "text",
        "label": "Exited fullscreen announcement for assistive technologies",
        "default": "Exited fullscreen"
      }
    ]
  },
  {
    "name": "override",
    "type": "group",
    "label": "Behaviour settings.",
    "importance": "low",
    "description": "These options will let you override behaviour settings.",
    "optional": true,
    "fields": [
      {
        "name": "activeSurface",
        "type": "boolean",
        "widget": "disposableBoolean",
        "label": "Activate Active Surface Mode",
        "importance": "low",
        "description": "Removes navigation controls for the end user. Use Go To Slide to navigate.",
        "default": false
      },
      {
        "name": "hideSummarySlide",
        "type": "boolean",
        "label": "Hide Summary Slide",
        "importance": "low",
        "description": "Hides the summary slide.",
        "default": false
      },
      {
        "name": "showSolutionButton",
        "type": "select",
        "label": "Override \"Show Solution\" button",
        "importance": "low",
        "description": "This option determines if the \"Show Solution\" button will be configured for each question individually (default) shown for all questions (Enabled) or disabled for all questions (Disabled) ",
        "optional": true,
        "options": [
          {
            "value": "on",
            "label": "Enabled"
          },
          {
            "value": "off",
            "label": "Disabled"
          }
        ]
      },
      {
        "name": "retryButton",
        "type": "select",
        "label": "Override \"Retry\" button",
        "importance": "low",
        "description": "This option determines if the \"Retry\" button will be configured for each question individually (default) shown for all questions (Enabled) or disabled for all questions (Disabled)",
        "optional": true,
        "options": [
          {
            "value": "on",
            "label": "Enabled"
          },
          {
            "value": "off",
            "label": "Disabled"
          }
        ]
      },
      {
        "name": "summarySlideSolutionButton",
        "type": "boolean",
        "label": "Show \"Show solution\" button in the summary slide",
        "description": "If enabled, the learner will be able to show the solutions for all question when they reach the summary slide",
        "default": true,
        "importance": "low",
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "hideSummarySlide",
              "equals": false
            }
          ]
        }
      },
      {
        "name": "summarySlideRetryButton",
        "type": "boolean",
        "label": "Show \"Retry\" button in the summary slide",
        "description": "If enabled, the learner will be able to retry all questions when they reach the summary slide. Be advised that by refreshing the page the learners will be able to retry even if this button isn''t showing.",
        "default": true,
        "importance": "low",
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "hideSummarySlide",
              "equals": false
            }
          ]
        }
      },
      {
        "name": "enablePrintButton",
        "type": "boolean",
        "label": "Enable print button",
        "importance": "low",
        "description": "Enables the print button.",
        "default": false
      },
      {
        "name": "social",
        "type": "group",
        "label": "Social Settings",
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "hideSummarySlide",
              "equals": false
            }
          ]
        },
        "importance": "low",
        "description": "These options will let you override social behaviour settings. Empty values will be filled in automatically if a link is provided, otherwise all values will be generated.",
        "optional": true,
        "fields": [
          {
            "name": "showFacebookShare",
            "type": "boolean",
            "label": "Display Facebook share icon",
            "importance": "low",
            "default": false
          },
          {
            "name": "facebookShare",
            "importance": "low",
            "type": "group",
            "expanded": true,
            "label": "Facebook share settings",
            "widget": "showWhen",
            "showWhen": {
              "rules": [
                {
                  "field": "showFacebookShare",
                  "equals": true
                }
              ]
            },
            "fields": [
              {
                "name": "url",
                "type": "text",
                "label": "Share to Facebook link",
                "importance": "low",
                "default": "@currentpageurl"
              },
              {
                "name": "quote",
                "type": "text",
                "label": "Share to Facebook quote",
                "importance": "low",
                "default": "I scored @score out of @maxScore on a task at @currentpageurl."
              }
            ]
          },
          {
            "name": "showTwitterShare",
            "type": "boolean",
            "label": "Display Twitter share icon",
            "importance": "low",
            "default": false
          },
          {
            "name": "twitterShare",
            "importance": "low",
            "type": "group",
            "expanded": true,
            "label": "Twitter share settings",
            "widget": "showWhen",
            "showWhen": {
              "rules": [
                {
                  "field": "showTwitterShare",
                  "equals": true
                }
              ]
            },
            "fields": [
              {
                "name": "statement",
                "type": "text",
                "label": "Share to Twitter statement",
                "importance": "low",
                "default": "I scored @score out of @maxScore on a task at @currentpageurl."
              },
              {
                "name": "url",
                "type": "text",
                "label": "Share to Twitter link",
                "importance": "low",
                "default": "@currentpageurl"
              },
              {
                "name": "hashtags",
                "type": "text",
                "label": "Share to Twitter hashtags",
                "importance": "low",
                "default": "h5p, course"
              }
            ]
          },
          {
            "name": "showGoogleShare",
            "type": "boolean",
            "label": "Display Google+ share icon",
            "importance": "low",
            "default": false
          },
          {
            "name": "googleShareUrl",
            "type": "text",
            "label": "Share to Google link",
            "importance": "low",
            "default": "@currentpageurl",
            "widget": "showWhen",
            "showWhen": {
              "rules": [
                {
                  "field": "showGoogleShare",
                  "equals": true
                }
              ]
            }
          }
        ]
      }
    ]
  }
]', N'', 1, null),
       (60, N'2021-04-25 12:24:10.000', N'H5P.Dialogcards', N'Dialog Cards', 1, 8, 6, 1, 0, N'iframe',
        N'dist/h5p-dialogcards.js', N'dist/h5p-dialogcards.css', N'[
  {
    "name": "title",
    "type": "text",
    "widget": "html",
    "label": "Heading",
    "importance": "high",
    "optional": true,
    "tags": [
      "p",
      "br",
      "strong",
      "em",
      "code"
    ]
  },
  {
    "name": "mode",
    "type": "select",
    "label": "Mode",
    "description": "Mode of presenting the dialog cards",
    "importance": "medium",
    "options": [
      {
        "value": "normal",
        "label": "Normal"
      },
      {
        "value": "repetition",
        "label": "Repetition"
      }
    ],
    "default": "normal"
  },
  {
    "name": "description",
    "type": "text",
    "widget": "html",
    "label": "Task description",
    "importance": "medium",
    "default": "",
    "optional": true,
    "tags": [
      "p",
      "br",
      "strong",
      "em",
      "code"
    ]
  },
  {
    "name": "dialogs",
    "type": "list",
    "importance": "high",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "label": "Dialogs",
    "entity": "dialog",
    "min": 1,
    "defaultNum": 1,
    "field": {
      "name": "question",
      "type": "group",
      "label": "Question",
      "importance": "high",
      "fields": [
        {
          "name": "text",
          "type": "text",
          "widget": "html",
          "tags": [
            "p",
            "br",
            "strong",
            "em",
            "code"
          ],
          "label": "Text",
          "importance": "high",
          "description": "Hint for the first part of the dialogue"
        },
        {
          "name": "answer",
          "type": "text",
          "widget": "html",
          "tags": [
            "p",
            "br",
            "strong",
            "em",
            "code"
          ],
          "label": "Answer",
          "importance": "high",
          "description": "Hint for the second part of the dialogue"
        },
        {
          "name": "image",
          "type": "image",
          "label": "Image",
          "importance": "high",
          "optional": true,
          "description": "Optional image for the card. (The card may use just an image, just a text or both)"
        },
        {
          "name": "imageAltText",
          "type": "text",
          "label": "Alternative text for the image",
          "importance": "high",
          "optional": true
        },
        {
          "name": "audio",
          "type": "audio",
          "label": "Audio files",
          "importance": "low",
          "optional": true
        },
        {
          "name": "tips",
          "type": "group",
          "label": "Tips",
          "importance": "low",
          "fields": [
            {
              "name": "front",
              "type": "text",
              "label": "Tip for text",
              "importance": "low",
              "optional": true,
              "description": "Tip for the first part of the dialogue"
            },
            {
              "name": "back",
              "type": "text",
              "label": "Tip for answer",
              "importance": "low",
              "optional": true,
              "description": "Tip for the second part of the dialogue"
            }
          ]
        }
      ]
    }
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings.",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "optional": true,
    "fields": [
      {
        "name": "enableRetry",
        "type": "boolean",
        "label": "Enable \"Retry\" button",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "name": "disableBackwardsNavigation",
        "type": "boolean",
        "label": "Disable backwards navigation",
        "importance": "low",
        "description": "This option will only allow you to move forward with Dialog Cards",
        "optional": true,
        "default": false,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "../mode",
              "equals": "normal"
            }
          ]
        }
      },
      {
        "name": "scaleTextNotCard",
        "type": "boolean",
        "label": "Scale the text to fit inside the card",
        "importance": "low",
        "description": "Unchecking this option will make the card adapt its size to the size of the text",
        "default": false
      },
      {
        "name": "randomCards",
        "type": "boolean",
        "label": "Randomize cards",
        "importance": "low",
        "description": "Enable to randomize the order of cards on display.",
        "default": false,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "../mode",
              "equals": "normal"
            }
          ]
        }
      },
      {
        "name": "maxProficiency",
        "type": "number",
        "label": "Maximum proficiency level",
        "importance": "low",
        "default": 5,
        "min": 3,
        "max": 7,
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "../mode",
              "equals": "repetition"
            }
          ]
        }
      },
      {
        "name": "quickProgression",
        "type": "boolean",
        "label": "Allow quick progression",
        "description": "If activated, learners can decide to indicate that they know a card without turning it",
        "importance": "low",
        "default": false,
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "../mode",
              "equals": "repetition"
            }
          ]
        }
      }
    ]
  },
  {
    "label": "Text for the turn button",
    "importance": "low",
    "name": "answer",
    "type": "text",
    "default": "Turn",
    "common": true
  },
  {
    "label": "Text for the next button",
    "importance": "low",
    "type": "text",
    "name": "next",
    "default": "Next",
    "common": true
  },
  {
    "name": "prev",
    "type": "text",
    "label": "Text for the previous button",
    "importance": "low",
    "default": "Previous",
    "common": true
  },
  {
    "name": "retry",
    "type": "text",
    "label": "Text for the retry button",
    "importance": "low",
    "default": "Retry",
    "common": true
  },
  {
    "name": "correctAnswer",
    "type": "text",
    "label": "Text for the \"correct answer\" button",
    "importance": "low",
    "default": "I got it right!",
    "common": true
  },
  {
    "name": "incorrectAnswer",
    "type": "text",
    "label": "Text for the \"incorrect answer\" button",
    "importance": "low",
    "default": "I got it wrong",
    "common": true
  },
  {
    "name": "round",
    "type": "text",
    "label": "Text for \"Round\" message below cards and on the summary screen",
    "description": "@round will be replaced by the number of the current round",
    "importance": "low",
    "default": "Round @round",
    "common": true
  },
  {
    "name": "cardsLeft",
    "type": "text",
    "label": "Text for \"Cards left\" message",
    "description": "@number will be replaced by the number of cards left in this round",
    "importance": "low",
    "default": "Cards left: @number",
    "common": true
  },
  {
    "name": "nextRound",
    "type": "text",
    "label": "Text for the \"next round\" button",
    "description": "@round will be replaced by the round number",
    "importance": "low",
    "default": "Proceed to round @round",
    "common": true
  },
  {
    "name": "startOver",
    "type": "text",
    "label": "Text for the \"Start over\" button",
    "importance": "low",
    "default": "Start over",
    "common": true
  },
  {
    "name": "showSummary",
    "type": "text",
    "label": "Text for the \"show summary\" button",
    "importance": "low",
    "default": "Next",
    "common": true
  },
  {
    "name": "summary",
    "type": "text",
    "label": "Title text for the summary page",
    "importance": "low",
    "default": "Summary",
    "common": true
  },
  {
    "name": "summaryCardsRight",
    "type": "text",
    "label": "Text for \"Cards you got right:\"",
    "importance": "low",
    "default": "Cards you got right:",
    "common": true
  },
  {
    "name": "summaryCardsWrong",
    "type": "text",
    "label": "Text for \"Cards you got wrong:\"",
    "importance": "low",
    "default": "Cards you got wrong:",
    "common": true
  },
  {
    "name": "summaryCardsNotShown",
    "type": "text",
    "label": "Text for \"Cards not shown:\"",
    "importance": "low",
    "default": "Cards in pool not shown:",
    "common": true
  },
  {
    "name": "summaryOverallScore",
    "type": "text",
    "label": "Text for \"Overall Score\"",
    "importance": "low",
    "default": "Overall Score",
    "common": true
  },
  {
    "name": "summaryCardsCompleted",
    "type": "text",
    "label": "Text for \"Cards completed\"",
    "importance": "low",
    "default": "Cards you have completed learning:",
    "common": true
  },
  {
    "name": "summaryCompletedRounds",
    "type": "text",
    "label": "Text for \"Completed rounds:\"",
    "importance": "low",
    "default": "Completed rounds:",
    "common": true
  },
  {
    "name": "summaryAllDone",
    "type": "text",
    "label": "Message when all cards have been learned proficiently",
    "description": "@cards will be replaced by the number of all cards in the pool. @max will be replaced by the maximum proficiency level - 1.",
    "importance": "low",
    "default": "Well done! You got all @cards cards correct @max times in a row!",
    "common": true
  },
  {
    "name": "progressText",
    "type": "text",
    "label": "Progress text",
    "importance": "low",
    "description": "Available variables are @card and @total.",
    "default": "Card @card of @total",
    "common": true
  },
  {
    "name": "cardFrontLabel",
    "type": "text",
    "label": "Label for card text",
    "importance": "low",
    "description": "Used for accessibility by assistive technologies",
    "default": "Card front",
    "common": true
  },
  {
    "name": "cardBackLabel",
    "type": "text",
    "label": "Label for card back",
    "importance": "low",
    "description": "Used for accessibility by assistive technologies",
    "default": "Card back",
    "common": true
  },
  {
    "name": "tipButtonLabel",
    "type": "text",
    "label": "Label for the show tip button",
    "importance": "low",
    "default": "Show tip",
    "common": true
  },
  {
    "name": "audioNotSupported",
    "type": "text",
    "label": "Audio not supported message",
    "importance": "low",
    "common": true,
    "default": "Your browser does not support this audio"
  },
  {
    "name": "confirmStartingOver",
    "type": "group",
    "label": "Confirm starting over dialog",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "name": "header",
        "type": "text",
        "label": "Header text",
        "importance": "low",
        "default": "Start over?"
      },
      {
        "name": "body",
        "type": "text",
        "label": "Body text",
        "importance": "low",
        "default": "All progress will be lost. Are you sure you want to start over?",
        "widget": "html",
        "enterMode": "p",
        "tags": [
          "strong",
          "em",
          "del",
          "u",
          "code"
        ]
      },
      {
        "name": "cancelLabel",
        "type": "text",
        "label": "Cancel button label",
        "importance": "low",
        "default": "Cancel"
      },
      {
        "name": "confirmLabel",
        "type": "text",
        "label": "Confirm button label",
        "importance": "low",
        "default": "Start over"
      }
    ]
  }
]
', N'', 1, null),
       (61, N'2021-04-25 12:24:10.000', N'H5P.ExportableTextArea', N'Exportable Text Area', 1, 3, 11, 0, 0, N'',
        N'scripts/eta.js', N'css/eta.css', N'[
  {
    "name": "label",
    "type": "text",
    "widget": "html",
    "label": "Label",
    "importance": "high",
    "description": "Label/heading for answer when user exports all answers",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  },
  {
    "name": "index",
    "type": "number",
    "widget": "none"
  },
  {
    "name": "exportNotSupported",
    "type": "text",
    "importance": "low",
    "label": "Export not supported label",
    "default": "Export not supported on your device",
    "common": true
  },
  {
    "name": "exportComments",
    "type": "boolean",
    "importance": "low",
    "label": "Include comments in the exported document",
    "optional": true,
    "default": false
  }
]
', N'', 0, N'{"disable":false,"disableExtraTitleField":true}'),
       (62, N'2021-04-25 12:24:10.000', N'H5P.Shape', N'Shapes', 1, 0, 3, 0, 0, N'', N'js/h5p-shape.js',
        N'css/h5p-shape.css', N'[
  {
    "name": "type",
    "type": "select",
    "label": "Type",
    "importance": "low",
    "widget": "radioGroup",
    "alignment": "horizontal",
    "options": [
      {
        "value": "rectangle",
        "label": "Rectangle"
      },
      {
        "value": "circle",
        "label": "Circle"
      },
      {
        "value": "vertical-line",
        "label": "Vertical line"
      },
      {
        "value": "horizontal-line",
        "label": "Horizontal line"
      }
    ],
    "default": "rectangle"
  },
  {
    "type": "group",
    "name": "shape",
    "widget": "showWhen",
    "expanded": true,
    "showWhen": {
      "rules": [
        {
          "field": "type",
          "equals": [
            "rectangle",
            "circle"
          ]
        }
      ]
    },
    "fields": [
      {
        "name": "fillColor",
        "type": "text",
        "label": "Fill color",
        "importance": "medium",
        "optional": true,
        "default": "#ffffff",
        "widget": "colorSelector",
        "showAplha": true,
        "spectrum": {
          "showInput": true,
          "showAlpha": true,
          "preferredFormat": "rgb"
        },
        "optional": true
      },
      {
        "name": "borderColor",
        "type": "text",
        "label": "Border color",
        "importance": "medium",
        "optional": true,
        "default": "#000000",
        "widget": "colorSelector",
        "spectrum": {
          "showInput": true,
          "showAlpha": true,
          "preferredFormat": "rgb"
        },
        "optional": true
      },
      {
        "name": "borderWidth",
        "type": "select",
        "label": "Border width",
        "importance": "low",
        "default": "0",
        "optional": false,
        "options": [
          {
            "value": "0",
            "label": "0"
          },
          {
            "value": "1",
            "label": "1"
          },
          {
            "value": "2",
            "label": "2"
          },
          {
            "value": "3",
            "label": "3"
          },
          {
            "value": "4",
            "label": "4"
          },
          {
            "value": "5",
            "label": "5"
          },
          {
            "value": "6",
            "label": "6"
          },
          {
            "value": "7",
            "label": "7"
          },
          {
            "value": "8",
            "label": "8"
          },
          {
            "value": "9",
            "label": "9"
          },
          {
            "value": "10",
            "label": "10"
          },
          {
            "value": "11",
            "label": "11"
          },
          {
            "value": "12",
            "label": "12"
          },
          {
            "value": "13",
            "label": "13"
          },
          {
            "value": "14",
            "label": "14"
          },
          {
            "value": "15",
            "label": "15"
          },
          {
            "value": "16",
            "label": "16"
          },
          {
            "value": "17",
            "label": "17"
          },
          {
            "value": "18",
            "label": "18"
          },
          {
            "value": "19",
            "label": "19"
          },
          {
            "value": "20",
            "label": "20"
          },
          {
            "value": "21",
            "label": "21"
          },
          {
            "value": "22",
            "label": "22"
          },
          {
            "value": "23",
            "label": "23"
          },
          {
            "value": "24",
            "label": "24"
          }
        ]
      },
      {
        "name": "borderStyle",
        "type": "select",
        "label": "Border style",
        "importance": "low",
        "default": "solid",
        "optional": false,
        "options": [
          {
            "value": "solid",
            "label": "Solid"
          },
          {
            "value": "dotted",
            "label": "Dotted"
          },
          {
            "value": "dashed",
            "label": "Dashed"
          },
          {
            "value": "double",
            "label": "Double"
          },
          {
            "value": "inset",
            "label": "Inset"
          },
          {
            "value": "outset",
            "label": "Outset"
          }
        ]
      },
      {
        "name": "borderRadius",
        "type": "select",
        "label": "Border radius",
        "importance": "low",
        "default": "0",
        "optional": false,
        "options": [
          {
            "value": "0",
            "label": "0"
          },
          {
            "value": "1",
            "label": "1"
          },
          {
            "value": "2",
            "label": "2"
          },
          {
            "value": "3",
            "label": "3"
          },
          {
            "value": "4",
            "label": "4"
          },
          {
            "value": "5",
            "label": "5"
          },
          {
            "value": "6",
            "label": "6"
          },
          {
            "value": "7",
            "label": "7"
          },
          {
            "value": "8",
            "label": "8"
          },
          {
            "value": "9",
            "label": "9"
          },
          {
            "value": "10",
            "label": "10"
          },
          {
            "value": "11",
            "label": "11"
          },
          {
            "value": "12",
            "label": "12"
          },
          {
            "value": "13",
            "label": "13"
          },
          {
            "value": "14",
            "label": "14"
          },
          {
            "value": "15",
            "label": "15"
          },
          {
            "value": "16",
            "label": "16"
          },
          {
            "value": "17",
            "label": "17"
          },
          {
            "value": "18",
            "label": "18"
          },
          {
            "value": "19",
            "label": "19"
          },
          {
            "value": "20",
            "label": "20"
          }
        ],
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "../type",
              "equals": "rectangle"
            }
          ]
        }
      }
    ]
  },
  {
    "type": "group",
    "name": "line",
    "widget": "showWhen",
    "expanded": true,
    "showWhen": {
      "rules": [
        {
          "field": "type",
          "equals": [
            "vertical-line",
            "horizontal-line"
          ]
        }
      ]
    },
    "fields": [
      {
        "name": "borderColor",
        "type": "text",
        "label": "Line color",
        "importance": "medium",
        "optional": true,
        "default": "#000000",
        "widget": "colorSelector",
        "optional": true,
        "spectrum": {
          "showInput": true,
          "showAlpha": true,
          "preferredFormat": "rgb"
        }
      },
      {
        "name": "borderWidth",
        "type": "select",
        "label": "Line width",
        "importance": "low",
        "default": "1",
        "optional": false,
        "options": [
          {
            "value": "1",
            "label": "1"
          },
          {
            "value": "2",
            "label": "2"
          },
          {
            "value": "3",
            "label": "3"
          },
          {
            "value": "4",
            "label": "4"
          },
          {
            "value": "5",
            "label": "5"
          },
          {
            "value": "6",
            "label": "6"
          },
          {
            "value": "7",
            "label": "7"
          },
          {
            "value": "8",
            "label": "8"
          },
          {
            "value": "9",
            "label": "9"
          },
          {
            "value": "10",
            "label": "10"
          },
          {
            "value": "11",
            "label": "11"
          },
          {
            "value": "12",
            "label": "12"
          },
          {
            "value": "13",
            "label": "13"
          },
          {
            "value": "14",
            "label": "14"
          },
          {
            "value": "15",
            "label": "15"
          },
          {
            "value": "16",
            "label": "16"
          },
          {
            "value": "17",
            "label": "17"
          },
          {
            "value": "18",
            "label": "18"
          },
          {
            "value": "19",
            "label": "19"
          },
          {
            "value": "20",
            "label": "20"
          },
          {
            "value": "21",
            "label": "21"
          },
          {
            "value": "22",
            "label": "22"
          },
          {
            "value": "23",
            "label": "23"
          },
          {
            "value": "24",
            "label": "24"
          }
        ]
      },
      {
        "name": "borderStyle",
        "type": "select",
        "label": "Line style",
        "importance": "low",
        "default": "solid",
        "optional": false,
        "options": [
          {
            "value": "solid",
            "label": "Solid"
          },
          {
            "value": "dotted",
            "label": "Dotted"
          },
          {
            "value": "dashed",
            "label": "Dashed"
          },
          {
            "value": "double",
            "label": "Double"
          }
        ]
      }
    ]
  }
]
', N'', 0, N'{"disable":true,"disableExtraTitleField":true}'),
       (63, N'2021-04-25 12:24:10.000', N'H5P.TwitterUserFeed', N'Twitter User Feed', 1, 0, 20, 1, 0, N'',
        N'twitter-user-feed.js', N'twitter-user-feed.css', N'[
  {
    "label": "Username on Twitter",
    "importance": "high",
    "name": "userName",
    "type": "text",
    "description": "The username we''ll be fetching tweets from"
  },
  {
    "label": "Show replies",
    "importance": "low",
    "name": "showReplies",
    "type": "boolean"
  },
  {
    "label": "Number of tweets",
    "importance": "medium",
    "name": "numTweets",
    "type": "number",
    "default": 5,
    "min": 1,
    "max": 20
  }
]
', N'', 1, N'{"disable":true,"disableExtraTitleField":true}'),
       (64, N'2021-04-25 12:24:11.000', N'H5PEditor.CoursePresentation', N'Course Presentation Editor', 1, 22, 2, 0, 0,
        N'', N'scripts/disposable-boolean.js, scripts/cp-editor.js, scripts/slide-selector.js, scripts/bg-selector.js',
        N'styles/cp-editor.css, styles/slide-selector.css, styles/bg-selector.css, styles/toolbar.css', N'', N'', 0,
        null),
       (65, N'2021-04-25 12:24:11.000', N'H5PEditor.RadioSelector', N'H5PEditor.RadioSelector', 1, 2, 2, 0, 0, N'',
        N'radio-selector.js', N'radio-selector.css', N'', N'', 0, null),
       (66, N'2021-04-25 12:24:11.000', N'H5PEditor.Shape', N'H5PEditor.Shape', 1, 0, 0, 0, 0, N'', N'',
        N'styles/shape.css', N'', N'', 0, null),
       (67, N'2021-04-25 12:24:11.000', N'blob', N'Blob', 1, 0, 6, 0, 0, N'', N'scripts/Blob.js', N'', N'', N'', 0,
        null),
       (68, N'2021-04-25 12:24:11.000', N'downloadify', N'Downloadify', 1, 0, 3, 0, 0, N'', N'scripts/downloadify.js',
        N'', N'', N'', 0, null),
       (69, N'2021-04-25 12:24:11.000', N'filesaver', N'FileSaver', 1, 0, 6, 0, 0, N'', N'scripts/FileSaver.js', N'',
        N'', N'', 0, null),
       (70, N'2021-04-25 12:24:11.000', N'swfobject', N'SwfObject', 1, 0, 2, 0, 0, N'', N'scripts/swfobject.js', N'',
        N'', N'', 0, null),
       (71, N'2021-04-25 12:24:27.000', N'H5P.QuestionSet', N'Question Set', 1, 17, 5, 1, 0, N'iframe',
        N'js/questionset.js', N'css/questionset.css', N'[
  {
    "name": "introPage",
    "type": "group",
    "label": "Quiz introduction",
    "importance": "medium",
    "fields": [
      {
        "name": "showIntroPage",
        "type": "boolean",
        "label": "Display introduction",
        "importance": "low"
      },
      {
        "name": "title",
        "type": "text",
        "label": "Title",
        "importance": "high",
        "optional": true,
        "description": "This title will be displayed above the introduction text.",
        "tags": [
          "sub",
          "sup",
          "strong",
          "em",
          "code"
        ]
      },
      {
        "name": "introduction",
        "type": "text",
        "widget": "html",
        "label": "Introduction text",
        "importance": "medium",
        "optional": true,
        "description": "This text will be displayed before the quiz starts.",
        "enterMode": "p",
        "tags": [
          "sub",
          "sup",
          "strong",
          "em",
          "p",
          "code"
        ]
      },
      {
        "name": "startButtonText",
        "type": "text",
        "label": "Start button text",
        "importance": "low",
        "optional": true,
        "default": "Start Quiz"
      },
      {
        "name": "backgroundImage",
        "type": "image",
        "label": "Background image",
        "importance": "low",
        "optional": true,
        "description": "An optional background image for the introduction."
      }
    ]
  },
  {
    "name": "backgroundImage",
    "type": "image",
    "label": "Background image",
    "importance": "low",
    "optional": true,
    "description": "An optional background image for the Question set."
  },
  {
    "name": "progressType",
    "type": "select",
    "label": "Progress indicator",
    "importance": "low",
    "description": "Question set progress indicator style.",
    "options": [
      {
        "value": "textual",
        "label": "Textual"
      },
      {
        "value": "dots",
        "label": "Dots"
      }
    ],
    "default": "dots"
  },
  {
    "name": "passPercentage",
    "type": "number",
    "label": "Pass percentage",
    "importance": "low",
    "description": "Percentage of Total score required for passing the quiz.",
    "min": 0,
    "max": 100,
    "step": 1,
    "default": 50
  },
  {
    "name": "questions",
    "label": "Questions",
    "importance": "high",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      },
      {
        "name": "QuestionSetTextualEditor",
        "label": "Textual"
      }
    ],
    "min": 1,
    "entity": "question",
    "field": {
      "name": "question",
      "type": "library",
      "label": "Question type",
      "importance": "high",
      "description": "Library for this question.",
      "options": [
        "H5P.MultiChoice 1.14",
        "H5P.DragQuestion 1.13",
        "H5P.Blanks 1.12",
        "H5P.MarkTheWords 1.9",
        "H5P.DragText 1.8",
        "H5P.TrueFalse 1.6",
        "H5P.Essay 1.2"
      ]
    }
  },
  {
    "name": "texts",
    "type": "group",
    "label": "Interface texts in quiz",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "name": "prevButton",
        "type": "text",
        "label": "Back button",
        "importance": "low",
        "default": "Previous question"
      },
      {
        "name": "nextButton",
        "type": "text",
        "label": "Next button",
        "importance": "low",
        "default": "Next question"
      },
      {
        "name": "finishButton",
        "type": "text",
        "label": "Finish button",
        "importance": "low",
        "default": "Finish"
      },
      {
        "name": "textualProgress",
        "type": "text",
        "label": "Progress text",
        "importance": "low",
        "description": "Text used if textual progress is selected.",
        "default": "Question: @current of @total questions",
        "tags": [
          "strong",
          "em",
          "code"
        ]
      },
      {
        "name": "jumpToQuestion",
        "type": "text",
        "label": "Label for jumping to a certain question",
        "importance": "low",
        "description": "You must use the placeholder ''%d'' instead of the question number, and %total instead of total amount of questions.",
        "default": "Question %d of %total"
      },
      {
        "name": "questionLabel",
        "type": "text",
        "label": "Copyright dialog question label",
        "importance": "low",
        "default": "Question"
      },
      {
        "name": "readSpeakerProgress",
        "type": "text",
        "label": "Readspeaker progress",
        "importance": "low",
        "description": "May use @current and @total question variables",
        "default": "Question @current of @total"
      },
      {
        "name": "unansweredText",
        "type": "text",
        "label": "Unanswered question text",
        "importance": "low",
        "default": "Unanswered"
      },
      {
        "name": "answeredText",
        "type": "text",
        "label": "Answered question text",
        "importance": "low",
        "default": "Answered"
      },
      {
        "name": "currentQuestionText",
        "type": "text",
        "label": "Current question text",
        "importance": "low",
        "default": "Current question"
      }
    ]
  },
  {
    "name": "disableBackwardsNavigation",
    "type": "boolean",
    "label": "Disable backwards navigation",
    "importance": "low",
    "description": "This option will only allow you to move forward in Question Set",
    "optional": true,
    "default": false
  },
  {
    "name": "randomQuestions",
    "type": "boolean",
    "label": "Randomize questions",
    "importance": "low",
    "description": "Enable to randomize the order of questions on display.",
    "default": false
  },
  {
    "name": "poolSize",
    "type": "number",
    "min": 1,
    "label": "Number of questions to be shown:",
    "importance": "low",
    "description": "Create a randomized batch of questions from the total.",
    "optional": true
  },
  {
    "name": "endGame",
    "type": "group",
    "label": "Quiz finished",
    "importance": "medium",
    "fields": [
      {
        "name": "showResultPage",
        "type": "boolean",
        "label": "Display results",
        "importance": "low",
        "default": true
      },
      {
        "name": "showSolutionButton",
        "type": "boolean",
        "label": "Display solution button",
        "default": true
      },
      {
        "name": "showRetryButton",
        "type": "boolean",
        "label": "Display retry button",
        "default": true
      },
      {
        "name": "noResultMessage",
        "type": "text",
        "label": "No results message",
        "importance": "low",
        "description": "Text displayed on end page when \"Display results\" is disabled",
        "default": "Finished",
        "optional": true
      },
      {
        "name": "message",
        "type": "text",
        "label": "Feedback heading",
        "importance": "low",
        "default": "Your result:",
        "description": "This heading will be displayed at the end of the quiz when the user has answered all questions.",
        "tags": [
          "strong",
          "em",
          "code"
        ]
      },
      {
        "name": "overallFeedback",
        "type": "group",
        "label": "Overall Feedback",
        "importance": "low",
        "expanded": true,
        "fields": [
          {
            "name": "overallFeedback",
            "type": "list",
            "widgets": [
              {
                "name": "RangeList",
                "label": "Default"
              }
            ],
            "importance": "high",
            "label": "Define custom feedback for any score range",
            "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
            "entity": "range",
            "min": 1,
            "defaultNum": 1,
            "optional": true,
            "field": {
              "name": "overallFeedback",
              "type": "group",
              "importance": "low",
              "fields": [
                {
                  "name": "from",
                  "type": "number",
                  "label": "Score Range",
                  "min": 0,
                  "max": 100,
                  "default": 0,
                  "unit": "%"
                },
                {
                  "name": "to",
                  "type": "number",
                  "min": 0,
                  "max": 100,
                  "default": 100,
                  "unit": "%"
                },
                {
                  "name": "feedback",
                  "type": "text",
                  "label": "Feedback for defined score range",
                  "importance": "low",
                  "placeholder": "Fill in the feedback",
                  "optional": true
                }
              ]
            }
          }
        ]
      },
      {
        "name": "oldFeedback",
        "type": "group",
        "label": "Old Feedback",
        "importance": "low",
        "deprecated": true,
        "fields": [
          {
            "name": "successGreeting",
            "type": "text",
            "label": "Quiz passed greeting",
            "importance": "low",
            "optional": true,
            "description": "This text will be displayed above the score if the user has successfully passed the quiz.",
            "tags": [
              "strong",
              "em",
              "code"
            ]
          },
          {
            "name": "successComment",
            "type": "text",
            "widget": "html",
            "label": "Passed comment",
            "importance": "low",
            "optional": true,
            "description": "This comment will be displayed after the score if the user has successfully passed the quiz.",
            "tags": [
              "sub",
              "sup",
              "strong",
              "em",
              "a",
              "p",
              "code"
            ]
          },
          {
            "name": "failGreeting",
            "type": "text",
            "label": "Quiz failed title",
            "importance": "low",
            "optional": true,
            "description": "This text will be displayed above the score if the user has failed the quiz.",
            "tags": [
              "strong",
              "em",
              "code"
            ]
          },
          {
            "name": "failComment",
            "type": "text",
            "widget": "html",
            "label": "Failed comment",
            "importance": "low",
            "optional": true,
            "description": "This comment will be displayed after the score if the user has failed the quiz.",
            "tags": [
              "sub",
              "sup",
              "strong",
              "em",
              "a",
              "p",
              "code"
            ]
          }
        ]
      },
      {
        "name": "solutionButtonText",
        "type": "text",
        "label": "Solution button label",
        "importance": "low",
        "default": "Show solution",
        "description": "Text for the solution button."
      },
      {
        "name": "retryButtonText",
        "type": "text",
        "label": "Retry button label",
        "importance": "low",
        "default": "Retry",
        "description": "Text for the retry button."
      },
      {
        "name": "finishButtonText",
        "type": "text",
        "label": "Finish button text",
        "importance": "low",
        "default": "Finish"
      },
      {
        "name": "showAnimations",
        "type": "boolean",
        "label": "Display video before quiz results",
        "importance": "low"
      },
      {
        "name": "skippable",
        "type": "boolean",
        "label": "Enable skip video button",
        "importance": "low"
      },
      {
        "name": "skipButtonText",
        "type": "text",
        "label": "Skip video button label",
        "importance": "low",
        "default": "Skip video"
      },
      {
        "name": "successVideo",
        "type": "video",
        "label": "Passed video",
        "importance": "low",
        "optional": true,
        "description": "This video will be played if the user successfully passed the quiz."
      },
      {
        "name": "failVideo",
        "type": "video",
        "label": "Fail video",
        "importance": "low",
        "optional": true,
        "description": "This video will be played if the user fails the quiz."
      }
    ]
  },
  {
    "name": "override",
    "type": "group",
    "label": "Settings for \"Check\", \"Show solution\" and \"Retry\"",
    "importance": "low",
    "optional": true,
    "fields": [
      {
        "name": "checkButton",
        "type": "boolean",
        "label": "Show \"Check\" buttons",
        "importance": "low",
        "description": "This option determines if the \"Check\" button will be shown for all questions.",
        "optional": true,
        "default": true
      },
      {
        "name": "showSolutionButton",
        "type": "select",
        "label": "Override \"Show Solution\" button",
        "importance": "low",
        "description": "This option determines if the \"Show Solution\" button will be shown for all questions, disabled for all or configured for each question individually.",
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "checkButton",
              "equals": true
            }
          ]
        },
        "options": [
          {
            "value": "on",
            "label": "Enabled"
          },
          {
            "value": "off",
            "label": "Disabled"
          }
        ]
      },
      {
        "name": "retryButton",
        "type": "select",
        "label": "Override \"Retry\" button",
        "importance": "low",
        "description": "This option determines if the \"Retry\" button will be shown for all questions, disabled for all or configured for each question individually.",
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "checkButton",
              "equals": true
            }
          ]
        },
        "options": [
          {
            "value": "on",
            "label": "Enabled"
          },
          {
            "value": "off",
            "label": "Disabled"
          }
        ]
      }
    ]
  }
]
', N'', 1, null),
       (72, N'2021-04-25 12:24:27.000', N'H5PEditor.QuestionSetTextualEditor',
        N'H5P Editor Question Set Textual Editor', 1, 3, 11, 0, 0, N'', N'dist/question-set-textual-editor.js', N'',
        N'', N'', 0, null),
       (73, N'2021-04-25 12:25:27.000', N'H5P.AdventCalendar', N'Advent Calendar (beta)', 0, 2, 3, 1, 0, N'iframe',
        N'dist/h5p-advent-calendar.js', N'dist/h5p-advent-calendar.css', N'[
  {
    "name": "doors",
    "type": "list",
    "label": "Doors",
    "entity": "door",
    "min": 24,
    "max": 24,
    "field": {
      "name": "contentGroup",
      "type": "group",
      "fields": [
        {
          "name": "doorCover",
          "type": "image",
          "label": "Door image",
          "description": "Image that will be used for the door. Needs to have a size ratio of 1:1 if you want the the left half fit the right half."
        },
        {
          "name": "previewImage",
          "type": "image",
          "label": "Background image",
          "description": "Image that should appear inside the door. Will be the door''s number by default."
        },
        {
          "name": "type",
          "type": "select",
          "label": "Content type",
          "description": "Content type that shoud optionally pop up when the door is opened.",
          "options": [
            {
              "value": "audio",
              "label": "Audio"
            },
            {
              "value": "image",
              "label": "Image"
            },
            {
              "value": "link",
              "label": "Link"
            },
            {
              "value": "text",
              "label": "Text"
            },
            {
              "value": "video",
              "label": "Video"
            }
          ]
        },
        {
          "name": "audio",
          "type": "audio",
          "label": "Audio",
          "widget": "showWhen",
          "showWhen": {
            "rules": [
              {
                "field": "type",
                "equals": "audio"
              }
            ]
          }
        },
        {
          "name": "image",
          "type": "library",
          "label": "Image",
          "options": [
            "H5P.Image 1.1"
          ],
          "widget": "showWhen",
          "showWhen": {
            "rules": [
              {
                "field": "type",
                "equals": "image"
              }
            ]
          }
        },
        {
          "name": "link",
          "type": "library",
          "label": "Link",
          "options": [
            "H5P.Link 1.3"
          ],
          "widget": "showWhen",
          "showWhen": {
            "rules": [
              {
                "field": "type",
                "equals": "link"
              }
            ]
          }
        },
        {
          "name": "text",
          "type": "library",
          "label": "Text",
          "options": [
            "H5P.AdvancedText 1.1"
          ],
          "widget": "showWhen",
          "showWhen": {
            "rules": [
              {
                "field": "type",
                "equals": "text"
              }
            ]
          }
        },
        {
          "name": "video",
          "type": "video",
          "label": "Video",
          "widget": "showWhen",
          "showWhen": {
            "rules": [
              {
                "field": "type",
                "equals": "video"
              }
            ]
          }
        },
        {
          "name": "autoplay",
          "type": "boolean",
          "label": "Autoplay",
          "default": false,
          "widget": "showWhen",
          "showWhen": {
            "type": "or",
            "rules": [
              {
                "field": "type",
                "equals": "audio"
              },
              {
                "field": "type",
                "equals": "video"
              }
            ]
          }
        }
      ]
    },
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ]
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "description": "These options will let you override behaviour settings.",
    "importance": "low",
    "fields": [
      {
        "name": "backgroundImage",
        "type": "image",
        "label": "Calendar background image",
        "optional": true
      },
      {
        "name": "backgroundMusic",
        "type": "audio",
        "label": "Background music",
        "optional": true
      },
      {
        "name": "autoplay",
        "type": "boolean",
        "label": "Autoplay background music",
        "description": "If set, the background music will play automatically once the content is opened. Please note: Some browsers'' media policy may prevent autoplay.",
        "default": false,
        "optional": true
      },
      {
        "name": "snow",
        "type": "boolean",
        "label": "Let it snow",
        "description": "Will add some snow falling in front of the calendar. It never rains in Southern California, it never snows on IE11.",
        "default": false,
        "optional": true
      },
      {
        "name": "doorImageTemplate",
        "type": "image",
        "label": "Door image template",
        "description": "If an image is set, it will be used for every door unless a specific door image is set for a single door.",
        "optional": true
      },
      {
        "name": "hideDoorBorder",
        "type": "boolean",
        "label": "Hide door border",
        "default": false,
        "optional": true
      },
      {
        "name": "hideNumbers",
        "type": "boolean",
        "label": "Hide door numbers",
        "default": false,
        "optional": true
      },
      {
        "name": "hideDoorKnobs",
        "type": "boolean",
        "label": "Hide door knobs",
        "default": false,
        "optional": true
      },
      {
        "name": "hideDoorFrame",
        "type": "boolean",
        "label": "Hide door frame",
        "default": false,
        "optional": true
      },
      {
        "name": "randomize",
        "type": "boolean",
        "label": "Random order",
        "description": "Shuffle the order of the doors. If the \"save content state\" option is set in the H5P settings, that order will stay the same when the user returns later.",
        "default": false,
        "optional": true
      },
      {
        "name": "keepImageOrder",
        "type": "boolean",
        "label": "Keep order of images",
        "description": "Shuffle doors, but keep the door cover images at their fixed positions starting with 1 in the upper left corner down to 24 in the lower right corner.",
        "default": false,
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "randomize",
              "equals": true
            }
          ]
        }
      },
      {
        "name": "designMode",
        "type": "boolean",
        "label": "Design mode",
        "description": "When in design mode, all doors can be opened. Otherwise, the doors can only be opened in December on and after the respective day indicated by the door number.",
        "default": true,
        "optional": true
      }
    ]
  },
  {
    "name": "l10n",
    "type": "group",
    "common": true,
    "label": "Localization",
    "importance": "low",
    "fields": [
      {
        "name": "nothingToSee",
        "type": "text",
        "label": "Nothing to see",
        "importance": "low",
        "default": "There is nothing to see here!\ud83c\udf84"
      },
      {
        "name": "dummy",
        "type": "text",
        "label": "Dummy",
        "importance": "low",
        "default": "Dummy",
        "widget": "none"
      }
    ]
  },
  {
    "name": "a11y",
    "type": "group",
    "common": true,
    "label": "Accessibility",
    "importance": "low",
    "fields": [
      {
        "name": "door",
        "type": "text",
        "label": "Door",
        "importance": "low",
        "default": "Door"
      },
      {
        "name": "locked",
        "type": "text",
        "label": "Locked",
        "importance": "low",
        "default": "Locked. It is not time to open this one yet."
      },
      {
        "name": "content",
        "description": "Announce the content. @door is a variable and will be replaced with the related door description.",
        "type": "text",
        "label": "Content of",
        "importance": "low",
        "default": "Content of @door"
      },
      {
        "name": "mute",
        "type": "text",
        "label": "Mute audio",
        "importance": "low",
        "default": "Mute audio"
      },
      {
        "name": "unmute",
        "type": "text",
        "label": "Unmute audio",
        "importance": "low",
        "default": "Unmute audio"
      },
      {
        "name": "closeWindow",
        "type": "text",
        "label": "Close window",
        "importance": "low",
        "default": "Close window"
      }
    ]
  }
]
', N'', 1, null),
       (74, N'2021-04-25 12:25:34.000', N'H5P.KewArCode', N'KewAr Code', 0, 2, 1, 1, 0, N'iframe',
        N'dist/h5p-kewar-code.js', N'dist/h5p-kewar-code.css', N'[
  {
    "name": "codeType",
    "type": "select",
    "label": "Code type",
    "description": "Select what kind of code you want to generate",
    "options": [
      {
        "value": "contact",
        "label": "Contact"
      },
      {
        "value": "event",
        "label": "Event"
      },
      {
        "value": "email",
        "label": "Email address"
      },
      {
        "value": "h5p",
        "label": "H5P"
      },
      {
        "value": "location",
        "label": "Location"
      },
      {
        "value": "phone",
        "label": "Phone number"
      },
      {
        "value": "sms",
        "label": "SMS"
      },
      {
        "value": "text",
        "label": "Text"
      },
      {
        "value": "url",
        "label": "URL"
      }
    ],
    "default": "url"
  },
  {
    "name": "contact",
    "type": "group",
    "label": "Contact",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "name",
        "type": "text",
        "label": "Name",
        "placeholder": "John Smith",
        "maxLength": 150
      },
      {
        "name": "organization",
        "type": "text",
        "label": "Organization",
        "placeholder": "H5P fan club",
        "optional": true,
        "maxLength": 150
      },
      {
        "name": "title",
        "type": "text",
        "label": "Title",
        "placeholder": "Master of None",
        "optional": true,
        "maxLength": 100
      },
      {
        "name": "number",
        "type": "text",
        "label": "Phone number",
        "description": "Phone number (please use the format +12 345 67890)",
        "placeholder": "+12 345 67890",
        "optional": true,
        "regexp": {
          "pattern": "^\\+[0-9]{1,3}[\\ ]?[0-9]{1,4}[\\ ]?[0-9]{1,8}$",
          "modifiers": ""
        }
      },
      {
        "name": "email",
        "type": "text",
        "label": "Email address",
        "description": "Email address to write message to",
        "placeholder": "john@fictional-h5p-fan-club.org",
        "optional": true,
        "maxLength": 150,
        "regexp": {
          "pattern": "^[A-Z0-9\\._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$",
          "modifiers": "i"
        }
      },
      {
        "name": "address",
        "type": "group",
        "label": "Address",
        "importance": "medium",
        "expanded": true,
        "fields": [
          {
            "name": "extended",
            "type": "text",
            "label": "Extended address",
            "description": "c/o information, etc.",
            "placeholder": "c/o H5P Fan Club",
            "optional": true,
            "maxLength": 150
          },
          {
            "name": "street",
            "type": "text",
            "label": "Street",
            "description": "Street including number",
            "placeholder": "1308 W. Dayton Street",
            "optional": true,
            "maxLength": 150
          },
          {
            "name": "locality",
            "type": "text",
            "label": "Locality",
            "description": "City name, etc.",
            "placeholder": "Madison",
            "optional": true,
            "maxLength": 100
          },
          {
            "name": "region",
            "type": "text",
            "label": "Region",
            "description": "Federal state, county, etc.",
            "placeholder": "WI",
            "optional": true,
            "maxLength": 100
          },
          {
            "name": "zip",
            "type": "text",
            "label": "ZIP code",
            "description": "ZIP code",
            "placeholder": "53715",
            "optional": true,
            "maxLength": 50
          },
          {
            "name": "country",
            "type": "text",
            "label": "Country",
            "description": "Country",
            "placeholder": "USA",
            "optional": true,
            "maxLength": 100
          }
        ]
      },
      {
        "name": "url",
        "type": "text",
        "label": "Website",
        "description": "Website to link to (must start with https:// or http://)",
        "placeholder": "https://fictional-h5p-fan-club.org",
        "regexp": {
          "pattern": "https?://([0-9a-z.-]+).[a-z.]{2,}([0-9a-z.-_]*)*/?",
          "modifiers": "i"
        },
        "optional": true,
        "maxLength": 300
      },
      {
        "name": "note",
        "type": "text",
        "label": "Note",
        "description": "Note",
        "placeholder": "John loves H5P.",
        "optional": true,
        "maxLength": 500
      }
    ],
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "codeType",
          "equals": "contact"
        }
      ]
    }
  },
  {
    "name": "event",
    "type": "group",
    "label": "Event",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "title",
        "type": "text",
        "label": "Title",
        "description": "Title for the calendar event",
        "placeholder": "H5P Conference 2020",
        "maxLength": 200
      },
      {
        "name": "allDay",
        "type": "boolean",
        "label": "All day event",
        "description": "Check if event will be valid all day long"
      },
      {
        "name": "dateStart",
        "type": "text",
        "label": "Start date",
        "description": "Start date of the event (please use the format yyyy/mm/dd)",
        "placeholder": "2020/05/18",
        "regexp": {
          "pattern": "^[0-9]{4,}/0*([1-9]|1[0-2])/0*([1-9]|[12][0-9]|3[01])$",
          "modifiers": ""
        }
      },
      {
        "name": "timeStart",
        "type": "text",
        "label": "Start time",
        "description": "Start time of the event (please use the format hh:mm)",
        "placeholder": "09:00",
        "regexp": {
          "pattern": "^0*([1-9]|1[0-9]|2[0-3]):0*([0-9]|[1-4][0-9]|5[0-9])$",
          "modifiers": ""
        },
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "allDay",
              "equals": false
            }
          ]
        }
      },
      {
        "name": "dateEnd",
        "type": "text",
        "label": "End date",
        "description": "End date of the event (please use the format yyyy/mm/dd)",
        "placeholder": "2020/05/20",
        "regexp": {
          "pattern": "^[0-9]{4,}/0*([1-9]|1[0-2])/0*([1-9]|[12][0-9]|3[01])$",
          "modifiers": ""
        }
      },
      {
        "name": "timeEnd",
        "type": "text",
        "label": "End time",
        "description": "End time of the event (please use the format hh:mm)",
        "placeholder": "16:00",
        "regexp": {
          "pattern": "^0*([1-9]|1[0-9]|2[0-3]):0*([0-9]|[1-4][0-9]|5[0-9])$",
          "modifiers": ""
        },
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "allDay",
              "equals": false
            }
          ]
        }
      },
      {
        "name": "timezone",
        "type": "select",
        "label": "Timezone",
        "description": "Select the time zone the event is supposed to take place in",
        "options": [
          {
            "value": "-12:00",
            "label": "UTC-12:00"
          },
          {
            "value": "-11:00",
            "label": "UTC-11:00"
          },
          {
            "value": "-10:00",
            "label": "UTC-10:00"
          },
          {
            "value": "-9:30",
            "label": "UTC-9:30"
          },
          {
            "value": "-9:00",
            "label": "UTC-9:00"
          },
          {
            "value": "-8:00",
            "label": "UTC-8:00"
          },
          {
            "value": "-7:00",
            "label": "UTC-7:00"
          },
          {
            "value": "-6:00",
            "label": "UTC-6:00"
          },
          {
            "value": "-5:00",
            "label": "UTC-5:00"
          },
          {
            "value": "-4:00",
            "label": "UTC-4:00"
          },
          {
            "value": "-3:30",
            "label": "UTC-3:30"
          },
          {
            "value": "-3:00",
            "label": "UTC-3:00"
          },
          {
            "value": "-2:00",
            "label": "UTC-2:00"
          },
          {
            "value": "-1:00",
            "label": "UTC-1:00"
          },
          {
            "value": "0:00",
            "label": "UTC"
          },
          {
            "value": "1:00",
            "label": "UTC+1:00"
          },
          {
            "value": "2:00",
            "label": "UTC+2:00"
          },
          {
            "value": "3:00",
            "label": "UTC+3:00"
          },
          {
            "value": "3:30",
            "label": "UTC+3:30"
          },
          {
            "value": "4:00",
            "label": "UTC+4:00"
          },
          {
            "value": "4:00",
            "label": "UTC+4:30"
          },
          {
            "value": "5:00",
            "label": "UTC+5:00"
          },
          {
            "value": "5:30",
            "label": "UTC+5:30"
          },
          {
            "value": "5:45",
            "label": "UTC+5:45"
          },
          {
            "value": "6:00",
            "label": "UTC+6:00"
          },
          {
            "value": "6:30",
            "label": "UTC+6:30"
          },
          {
            "value": "7:00",
            "label": "UTC+7:00"
          },
          {
            "value": "8:00",
            "label": "UTC+8:00"
          },
          {
            "value": "9:00",
            "label": "UTC+9:00"
          },
          {
            "value": "9:30",
            "label": "UTC+9:30"
          },
          {
            "value": "10:00",
            "label": "UTC+10:00"
          },
          {
            "value": "10:30",
            "label": "UTC+10:30"
          },
          {
            "value": "11:00",
            "label": "UTC+11:00"
          },
          {
            "value": "12:00",
            "label": "UTC+12:00"
          },
          {
            "value": "12:45",
            "label": "UTC+12:45"
          },
          {
            "value": "13:00",
            "label": "UTC+13:00"
          },
          {
            "value": "14:00",
            "label": "UTC+14:00"
          }
        ],
        "default": "0:00",
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "allDay",
              "equals": false
            }
          ]
        }
      },
      {
        "name": "daylightSavings",
        "type": "boolean",
        "label": "Daylight savings",
        "description": "Check if location that the event is taking place in uses daylight savings time",
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "allDay",
              "equals": false
            }
          ]
        }
      },
      {
        "name": "location",
        "type": "text",
        "label": "Location",
        "description": "Name the location",
        "placeholder": "Madison, USA",
        "optional": true,
        "maxLength": 200
      },
      {
        "name": "description",
        "type": "text",
        "label": "Description",
        "description": "Add a description for the event",
        "placeholder": "3rd H5P conference",
        "optional": true,
        "maxLength": 1500
      }
    ],
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "codeType",
          "equals": "event"
        }
      ]
    }
  },
  {
    "name": "email",
    "type": "group",
    "label": "Email address",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "email",
        "type": "text",
        "label": "Email address",
        "description": "Email address to write message to",
        "placeholder": "john@fictional-h5p-fan-club.org",
        "maxLength": 2000,
        "regexp": {
          "pattern": "^[A-Z0-9\\._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$",
          "modifiers": "i"
        }
      }
    ],
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "codeType",
          "equals": "email"
        }
      ]
    }
  },
  {
    "name": "h5p",
    "type": "group",
    "label": "H5P content",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "h5p",
        "type": "library",
        "label": "H5P content",
        "description": "H5P content to display",
        "options": [
          "H5P.Accordion 1.0",
          "H5P.Agamotto 1.4",
          "H5P.Audio 1.4",
          "H5P.AudioRecorder 1.0",
          "H5P.Blanks 1.12",
          "H5P.Chart 1.2",
          "H5P.Collage 0.3",
          "H5P.CoursePresentation 1.21",
          "H5P.Dialogcards 1.8",
          "H5P.DocumentationTool 1.7",
          "H5P.DragQuestion 1.13",
          "H5P.DragText 1.8",
          "H5P.Essay 1.2",
          "H5P.GuessTheAnswer 1.4",
          "H5P.Table 1.1",
          "H5P.AdvancedText 1.1",
          "H5P.IFrameEmbed 1.0",
          "H5P.Image 1.1",
          "H5P.ImageHotspots 1.8",
          "H5P.ImageHotspotQuestion 1.8",
          "H5P.ImageSlider 1.0",
          "H5P.InteractiveVideo 1.21",
          "H5P.Link 1.3",
          "H5P.MarkTheWords 1.9",
          "H5P.MemoryGame 1.2",
          "H5P.MultiChoice 1.14",
          "H5P.Questionnaire 1.2",
          "H5P.QuestionSet 1.17",
          "H5P.SingleChoiceSet 1.11",
          "H5P.Summary 1.10",
          "H5P.Timeline 1.1",
          "H5P.TrueFalse 1.6",
          "H5P.TwitterUserFeed 1.0",
          "H5P.Video 1.5"
        ]
      }
    ],
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "codeType",
          "equals": "h5p"
        }
      ]
    }
  },
  {
    "name": "location",
    "type": "group",
    "label": "Location",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "latitude",
        "type": "text",
        "label": "Latitude",
        "description": "Latitude (please use the format 53.864462)",
        "placeholder": "69.646007",
        "regexp": {
          "pattern": "^((-?0*([0-9]|[1-7][0-9]|8[0-9])(\\.[0-9]{1,6})?)|(-?90))$",
          "modifiers": ""
        }
      },
      {
        "name": "longitude",
        "type": "text",
        "label": "Longitude",
        "description": "Longitude (please use the format 10.663792)",
        "placeholder": "18.954036",
        "regexp": {
          "pattern": "^((-?0*([0-9]|[1-8][0-9]|9[0-9]|1[0-6][0-9]|17[0-9])(\\.[0-9]{1,6})?)|-?180)$",
          "modifiers": ""
        }
      }
    ],
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "codeType",
          "equals": "location"
        }
      ]
    }
  },
  {
    "name": "phone",
    "type": "group",
    "label": "Phone number",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "number",
        "type": "text",
        "label": "Phone number",
        "description": "Phone number to call (please use the format +12 345 67890)",
        "placeholder": "+12 345 67890",
        "regexp": {
          "pattern": "^\\+[0-9]{1,3}[\\ ]?[0-9]{1,4}[\\ ]?[0-9]{1,8}$",
          "modifiers": ""
        }
      }
    ],
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "codeType",
          "equals": "phone"
        }
      ]
    }
  },
  {
    "name": "sms",
    "type": "group",
    "label": "SMS",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "number",
        "type": "text",
        "label": "Phone number",
        "description": "Phone number to send to (please use the format +12 345 67890)",
        "placeholder": "+12 345 67890",
        "regexp": {
          "pattern": "^\\+[0-9]{1,3}[\\ ]?[0-9]{1,4}[\\ ]?[0-9]{1,8}$",
          "modifiers": ""
        }
      },
      {
        "name": "message",
        "type": "text",
        "label": "Message",
        "description": "Message to send",
        "placeholder": "Please fetch milk and bread!",
        "maxLength": 2000
      }
    ],
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "codeType",
          "equals": "sms"
        }
      ]
    }
  },
  {
    "name": "text",
    "type": "group",
    "label": "Text",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "text",
        "type": "text",
        "label": "Text",
        "description": "Text to encode",
        "placeholder": "Please fetch\n* milk\n* bread",
        "widget": "textarea",
        "maxLength": 2000
      }
    ],
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "codeType",
          "equals": "text"
        }
      ]
    }
  },
  {
    "name": "url",
    "type": "group",
    "label": "URL",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "url",
        "type": "text",
        "label": "URL",
        "description": "URL to link to (must start with https:// or http://)",
        "placeholder": "https://fictional-h5p-fan-club.org",
        "maxLength": 2000,
        "regexp": {
          "pattern": "https?://([0-9a-z.-]+).[a-z.]{2,}([0-9a-z.-_]*)*/?",
          "modifiers": "i"
        }
      }
    ],
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "codeType",
          "equals": "url"
        }
      ]
    }
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "description": "These options will let you control how the task behaves.",
    "importance": "low",
    "fields": [
      {
        "name": "codeColor",
        "type": "text",
        "label": "Code color",
        "importance": "medium",
        "optional": true,
        "default": "#000000",
        "widget": "colorSelector",
        "spectrum": {
          "showInput": true
        }
      },
      {
        "name": "backgroundColor",
        "type": "text",
        "label": "Background color",
        "importance": "medium",
        "optional": true,
        "default": "#ffffff",
        "widget": "colorSelector",
        "spectrum": {
          "showInput": true,
          "showAlpha": true,
          "preferredFormat": "rgb"
        }
      },
      {
        "name": "maxSize",
        "type": "text",
        "label": "Maximum size",
        "description": "Maximum size for the code given in CSS notation (pixels by default if only a number is given)",
        "importance": "medium",
        "optional": true,
        "regexp": {
            "pattern": "^(([1-9]+.[0-9]+)|[0-9]+)(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)?$",
            "modifiers": "i"
          }
      },
      {
        "name": "alignment",
        "type": "select",
        "label": "Horizontal alignment",
        "description": "Set horizontal alignment if you set a maximum size",
        "options": [
          {
            "value": "left",
            "label": "left"
          },
          {
            "value": "center",
            "label": "center"
          },
          {
            "value": "right",
            "label": "right"
          }
        ],
        "default": "center"
      }
    ]
  },
  {
    "name": "l10n",
    "type": "group",
    "common": true,
    "label": "User interface",
    "importance": "low",
    "fields": [
      {
        "name": "address",
        "type": "text",
        "label": "Address",
        "importance": "low",
        "default": "Address"
      },
      {
        "name": "contact",
        "type": "text",
        "label": "Contact",
        "importance": "low",
        "default": "Contact"
      },
      {
        "name": "country",
        "type": "text",
        "label": "Country",
        "importance": "low",
        "default": "Country"
      },
      {
        "name": "dateEnd",
        "type": "text",
        "label": "End date",
        "importance": "low",
        "default": "End date"
      },
      {
        "name": "dateStart",
        "type": "text",
        "label": "Start date",
        "importance": "low",
        "default": "Start date"
      },
      {
        "name": "description",
        "type": "text",
        "label": "Description",
        "importance": "low",
        "default": "Description"
      },
      {
        "name": "email",
        "type": "text",
        "label": "Email",
        "importance": "low",
        "default": "Email"
      },
      {
        "name": "event",
        "type": "text",
        "label": "Event",
        "importance": "low",
        "default": "Event"
      },
      {
        "name": "extended",
        "type": "text",
        "label": "Extended address",
        "importance": "low",
        "default": "Extended address"
      },
      {
        "name": "latitude",
        "type": "text",
        "label": "Latitude",
        "importance": "low",
        "default": "Latitude"
      },
      {
        "name": "locality",
        "type": "text",
        "label": "Locality",
        "importance": "low",
        "default": "Locality"
      },
      {
        "name": "location",
        "type": "text",
        "label": "Location",
        "importance": "low",
        "default": "Location"
      },
      {
        "name": "longitude",
        "type": "text",
        "label": "Longitude",
        "importance": "low",
        "default": "Longitude"
      },
      {
        "name": "message",
        "type": "text",
        "label": "Message",
        "importance": "low",
        "default": "Message"
      },
      {
        "name": "name",
        "type": "text",
        "label": "Name",
        "importance": "low",
        "default": "Name"
      },
      {
        "name": "note",
        "type": "text",
        "label": "Note",
        "importance": "low",
        "default": "Note"
      },
      {
        "name": "organization",
        "type": "text",
        "label": "Organization",
        "importance": "low",
        "default": "Organization"
      },
      {
        "name": "phone",
        "type": "text",
        "label": "Phone",
        "importance": "low",
        "default": "Phone"
      },
      {
        "name": "region",
        "type": "text",
        "label": "Region",
        "importance": "low",
        "default": "Region"
      },
      {
        "name": "sms",
        "type": "text",
        "label": "SMS",
        "importance": "low",
        "default": "SMS"
      },
      {
        "name": "street",
        "type": "text",
        "label": "Street",
        "importance": "low",
        "default": "Street"
      },
      {
        "name": "text",
        "type": "text",
        "label": "Text",
        "importance": "low",
        "default": "Text"
      },
      {
        "name": "title",
        "type": "text",
        "label": "Title",
        "importance": "low",
        "default": "Title"
      },
      {
        "name": "url",
        "type": "text",
        "label": "URL",
        "importance": "low",
        "default": "URL"
      },
      {
        "name": "zip",
        "type": "text",
        "label": "ZIP code",
        "importance": "low",
        "default": "ZIP code"
      }
    ]
  },
  {
    "name": "a11y",
    "type": "group",
    "common": true,
    "label": "Readspeaker",
    "importance": "low",
    "fields": [
      {
        "name": "openCodeInformation",
        "type": "text",
        "label": "QRCode. Display information (Text for Readspeakers)",
        "importance": "low",
        "default": "QRCode. Display information."
      },
      {
        "name": "closeCodeInformation",
        "type": "text",
        "label": "Hide information (Text for Readspeakers)",
        "importance": "low",
        "default": "Hide information."
      }
    ]
  }
]
', N'', 1, null),
       (75, N'2021-04-25 12:26:36.000', N'H5P.GoToScene', N'Go To Scene', 0, 1, 0, 0, 0, N'', N'scripts/go-to-scene.js',
        N'', N'[
  {
    "name": "nextSceneId",
    "type": "number",
    "label": "Go to scene with ID",
    "importance": "high",
    "description": "ID of the scene that we will jump to"
  }
]', N'', 0, null),
       (76, N'2021-04-25 12:26:36.000', N'H5P.ThreeImage', N'Virtual Tour (360)', 0, 4, 10, 1, 1, N'iframe',
        N'dist/three-image.js', N'', N'[
  {
    "name": "threeImage",
    "type": "group",
    "widget": "threeImage",
    "label": "Three Image Editor",
    "importance": "high",
    "fields": [
      {
        "name": "scenes",
        "type": "list",
        "label": "Scenes",
        "entity": "Scene",
        "min": 0,
        "field": {
          "name": "scene",
          "type": "group",
          "fields": [
            {
              "name": "sceneType",
              "type": "select",
              "label": "Scene type",
              "widget": "radioGroup",
              "alignment": "horizontal",
              "options": [
                {
                  "value": "360",
                  "label": "360 image"
                },
                {
                  "value": "static",
                  "label": "Static image"
                }
              ],
              "default": "360"
            },
            {
              "name": "showBackButton",
              "type": "boolean",
              "label": "Display \"Back\" button",
              "description": "Display button for navigating back to your previous scene",
              "default": true,
              "widget": "showWhen",
              "showWhen": {
                "rules": [
                  {
                    "field": "sceneType",
                    "equals": "static"
                  }
                ]
              }
            },
            {
              "name": "sceneId",
              "type": "number"
            },
            {
              "name": "scenename",
              "type": "text",
              "label": "Scene Title",
              "description": "Used to identify the scene"
            },
            {
              "name": "scenesrc",
              "type": "image",
              "label": "Scene Background"
            },
            {
              "name": "scenedescription",
              "type": "text",
              "widget": "html",
              "label": "Scene Description",
              "description": "A text that can describe the scene for the end-user",
              "optional": true,
              "tags": [
                "p",
                "br",
                "strong",
                "em",
                "code"
              ]
            },
            {
              "name": "cameraStartPosition",
              "type": "text"
            },
            {
              "name": "interactions",
              "type": "list",
              "min": 0,
              "field": {
                "name": "interaction",
                "type": "group",
                "fields": [
                  {
                    "name": "labelText",
                    "type": "text",
                    "label": "Label",
                    "optional": true,
                    "description": "If left blank no label will be displayed and we''ll try to use the title field for screen readers"
                  },
                  {
                    "name": "label",
                    "type": "group",
                    "label": "Label Settings",
                    "importance": "low",
                    "fields": [
                      {
                        "name": "labelPosition",
                        "type": "select",
                        "label": "Label position",
                        "description": "Choose where the label should appear",
                        "options": [
                          {
                            "value": "inherit",
                            "label": "Use behavioral setting"
                          },
                          {
                            "value": "right",
                            "label": "Right aligned"
                          },
                          {
                            "value": "left",
                            "label": "Left aligned"
                          },
                          {
                            "value": "top",
                            "label": "Top aligned"
                          },
                          {
                            "value": "bottom",
                            "label": "Bottom aligned"
                          }
                        ],
                        "default": "inherit"
                      },
                      {
                        "name": "showLabel",
                        "type": "select",
                        "label": "Display Label",
                        "description": "If hidden - labels will show only on mouse over",
                        "options": [
                          {
                            "value": "inherit",
                            "label": "Use behavioral setting"
                          },
                          {
                            "value": "show",
                            "label": "Show"
                          },
                          {
                            "value": "hide",
                            "label": "Hide"
                          }
                        ],
                        "default": "inherit"
                      }
                    ]
                  },
                  {
                    "name": "action",
                    "type": "library",
                    "options": [
                      "H5P.GoToScene 0.1",
                      "H5P.AdvancedText 1.1",
                      "H5P.Image 1.1",
                      "H5P.Audio 1.4",
                      "H5P.Video 1.5",
                      "H5P.Summary 1.10",
                      "H5P.SingleChoiceSet 1.11"
                    ]
                  },
                  {
                    "name": "interactionpos",
                    "type": "text"
                  }
                ]
              }
            },
            {
              "name": "iconType",
              "type": "select",
              "label": "Button style",
              "description": "Decide how buttons pointing to this scene should look. For scenes that are static and does not lead to new scenes, we recommend the \"More information\" button.",
              "widget": "radioGroup",
              "alignment": "horizontal",
              "options": [
                {
                  "value": "arrow",
                  "label": "New scene (arrow)"
                },
                {
                  "value": "plus",
                  "label": "More information (plus)"
                }
              ],
              "default": "arrow"
            },
            {
              "name": "audio",
              "type": "audio",
              "label": "Audio Track",
              "description": "Add an audio track that''s specific for this scene.",
              "optional": true,
              "widgetExtensions": [
                "AudioRecorder"
              ]
            }
          ]
        }
      },
      {
        "name": "startSceneId",
        "type": "number",
        "default": 0
      },
      {
        "name": "audio",
        "type": "audio",
        "label": "Audio track",
        "optional": true
      }
    ]
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioral settings",
    "importance": "low",
    "description": "These options will let you control how the world behaves.",
    "fields": [
      {
        "name": "audio",
        "type": "audio",
        "label": "Global Audio",
        "description": "Add an audio track that''s available for all of the scenes by default.",
        "optional": true,
        "widgetExtensions": [
          "AudioRecorder"
        ]
      },
      {
        "name": "sceneRenderingQuality",
        "type": "select",
        "label": "Scene rendering quality",
        "description": "Choose the amount of width and height segments used to render a scene. This directly affects the quality level of the scene, try increasing the quality if a scene looks \"blocky\" or \"waves\" are seen within the scenes. Note that higher quality rendering takes more time to load.",
        "options": [
          {
            "value": "high",
            "label": "High Quality (128x128)"
          },
          {
            "value": "medium",
            "label": "Medium Quality (64x64)"
          },
          {
            "value": "low",
            "label": "Low Quality (16x16)"
          }
        ],
        "default": "high"
      },
      {
        "name": "label",
        "type": "group",
        "label": "Label settings",
        "importance": "low",
        "expanded": true,
        "fields": [
          {
            "name": "labelPosition",
            "type": "select",
            "label": "Label position",
            "description": "The default label position. The position may be overriden per interaction",
            "options": [
              {
                "value": "right",
                "label": "Right aligned"
              },
              {
                "value": "left",
                "label": "Left aligned"
              },
              {
                "value": "top",
                "label": "Top aligned"
              },
              {
                "value": "bottom",
                "label": "Bottom aligned"
              }
            ],
            "default": "right"
          },
          {
            "name": "showLabel",
            "type": "boolean",
            "label": "Display Labels",
            "description": "If unchecked - labels will show only on mouse over",
            "default": true
          }
        ]
      }
    ]
  },
  {
    "name": "l10n",
    "type": "group",
    "common": true,
    "label": "Localize",
    "fields": [
      {
        "name": "title",
        "type": "text",
        "label": "Aria label for content type",
        "default": "Virtual Tour"
      },
      {
        "name": "playAudioTrack",
        "type": "text",
        "label": "Label for to play audio",
        "default": "Play Audio Track"
      },
      {
        "name": "pauseAudioTrack",
        "type": "text",
        "label": "Label to pause audio",
        "default": "Pause Audio Track"
      },
      {
        "name": "sceneDescription",
        "type": "text",
        "label": "Title to scene dialog",
        "default": "Scene Description"
      },
      {
        "name": "resetCamera",
        "type": "text",
        "label": "Label for button to reset camera",
        "default": "Reset Camera"
      },
      {
        "name": "submitDialog",
        "type": "text",
        "label": "Label for the submit dialog button",
        "default": "Submit Dialog"
      },
      {
        "name": "closeDialog",
        "type": "text",
        "label": "Label for the close dialog button",
        "default": "Close Dialog"
      },
      {
        "name": "expandButtonAriaLabel",
        "type": "text",
        "label": "Aria label for the expand label button",
        "default": "Expand the visual label"
      },
      {
        "name": "backgroundLoading",
        "type": "text",
        "label": "Label for when background image is loading in 360 scene",
        "default": "Loading background image..."
      },
      {
        "name": "noContent",
        "type": "text",
        "label": "Label for when there is no content",
        "default": "No content"
      }
    ]
  }
]', N'', 1, null),
       (77, N'2021-04-25 12:26:36.000', N'H5P.ThreeJS', N'three.js', 1, 0, 103, 0, 0, N'', N'three.min.js', N'', N'',
        N'', 0, null),
       (78, N'2021-04-25 12:26:36.000', N'H5P.ThreeSixty', N'Three Sixty', 0, 3, 5, 0, 0, N'',
        N'scripts/three-sixty.js', N'styles/three-sixty.css', N'', N'', 0, null),
       (79, N'2021-04-25 12:26:36.000', N'H5PEditor.AudioRecorder', N'H5P Editor Audio Recorder', 1, 0, 6, 0, 0, N'',
        N'dist/h5p-editor-audio-recorder.js', N'', N'', N'', 0, null),
       (80, N'2021-04-25 12:26:36.000', N'H5PEditor.ThreeImage', N'Three Image Editor', 0, 4, 7, 0, 0, N'',
        N'dist/editor-three-image.js', N'', N'', N'', 0, null),
       (81, N'2021-04-25 12:27:57.000', N'H5P.Collage', N'Collage', 0, 3, 16, 1, 0, N'',
        N'collage.js, template.js, clip.js', N'collage.css', N'[
  {
    "name": "collage",
    "label": "Preview",
    "importance": "high",
    "type": "group",
    "widget": "collage",
    "description": "You can move(pan) the images around by dragging them. You can also select an image and then use the + or - keys on your keyboard to zoom or simply hold down the Z key while moving your mouse wheel.",
    "fields": [
      {
        "name": "template",
        "label": "Layout",
        "importance": "high",
        "type": "select",
        "options": [
          {
            "value": "1",
            "label": "1"
          },
          {
            "value": "1-1",
            "label": "1-1"
          },
          {
            "value": "2",
            "label": "2"
          },
          {
            "value": "2-1",
            "label": "2-1"
          },
          {
            "value": "1-2",
            "label": "1-2"
          },
          {
            "value": "2-2",
            "label": "2-2"
          },
          {
            "value": "3-1",
            "label": "3-1"
          },
          {
            "value": "1-3",
            "label": "1-3"
          },
          {
            "value": "2-3",
            "label": "2-3"
          },
          {
            "value": "3-2",
            "label": "3-2"
          },
          {
            "value": "3-3",
            "label": "3-3"
          }
        ],
        "default": "2-1"
      },
      {
        "name": "options",
        "label": "Display options",
        "importance": "low",
        "type": "group",
        "fields": [
          {
            "name": "heightRatio",
            "label": "Height",
            "importance": "low",
            "type": "number",
            "decimals": 2,
            "min": 0.1,
            "max": 2,
            "default": 0.75
          },
          {
            "name": "spacing",
            "label": "Spacing",
            "importance": "low",
            "type": "number",
            "decimals": 2,
            "min": 0,
            "max": 2,
            "default": 0.5
          },
          {
            "name": "frame",
            "label": "Frame",
            "importance": "low",
            "type": "boolean",
            "default": true
          }
        ]
      },
      {
        "name": "clips",
        "label": "Clips",
        "importance": "low",
        "type": "list",
        "min": 1,
        "entity": "clip",
        "field": {
          "name": "clip",
          "label": "Clip",
          "importance": "low",
          "type": "group",
          "fields": [
            {
              "name": "image",
              "type": "image",
              "label": "Image",
              "importance": "low"
            },
            {
              "name": "offset",
              "label": "Offset",
              "importance": "low",
              "type": "group",
              "fields": [
                {
                  "name": "top",
                  "label": "Top",
                  "importance": "low",
                  "type": "number",
                  "default": 0
                },
                {
                  "name": "left",
                  "label": "Left",
                  "importance": "low",
                  "type": "number",
                  "default": 0
                }
              ]
            },
            {
              "name": "alt",
              "type": "text",
              "label": "Alternative text",
              "importance": "high",
              "description": "Required. If the browser can''t load the image this text will be displayed instead. Also used by readspeakers."
            },
            {
              "name": "title",
              "type": "text",
              "label": "Hover text",
              "importance": "low",
              "description": "Optional. This text is displayed when the user hovers his pointing device over the image.",
              "optional": true
            },
            {
              "name": "scale",
              "label": "Scale",
              "importance": "low",
              "type": "number",
              "decimals": 2,
              "min": 0.01,
              "default": 1
            }
          ]
        }
      }
    ]
  }
]
', N'', 1, null),
       (82, N'2021-04-25 12:27:57.000', N'H5PEditor.Collage', N'Collage Editor', 0, 3, 15, 0, 0, N'',
        N'collage-editor.js, layout-selector.js, clip-editor.js', N'collage-editor.css', N'', N'', 0, null),
       (83, N'2021-04-25 12:28:08.000', N'H5P.GuessTheAnswer', N'Guess the Answer', 1, 4, 10, 1, 0, N'iframe',
        N'guess-the-answer.js', N'guess-the-answer.css', N'[
  {
    "label": "Task description",
    "importance": "medium",
    "name": "taskDescription",
    "type": "text",
    "widget": "html",
    "description": "Describe how the user should solve the task.",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ],
    "optional": true
  },
  {
    "name": "media",
    "type": "group",
    "label": "Media",
    "importance": "medium",
    "fields": [
      {
        "name": "type",
        "type": "library",
        "label": "Type",
        "importance": "medium",
        "options": [
          "H5P.Image 1.1",
          "H5P.Video 1.5"
        ],
        "optional": true,
        "description": "Optional media to display above the question."
      }
    ]
  },
  {
    "label": "Descriptive solution label",
    "importance": "low",
    "name": "solutionLabel",
    "type": "text",
    "widget": "textarea",
    "default": "Click to see the answer.",
    "description": "Clickable text area where the solution will be displayed.",
    "optional": true
  },
  {
    "label": "Solution text",
    "importance": "high",
    "name": "solutionText",
    "type": "text",
    "widget": "textarea",
    "description": "The solution for the picture."
  }
]
', N'', 1, null),
       (84, N'2021-04-25 12:28:28.000', N'H5P.Dictation', N'Dictation', 1, 0, 7, 1, 0, N'iframe',
        N'dist/h5p-dictation.js', N'dist/h5p-dictation.css', N'[
  {
    "name": "media",
    "type": "group",
    "label": "Media",
    "importance": "medium",
    "fields": [
      {
        "name": "type",
        "type": "library",
        "label": "Type",
        "importance": "medium",
        "options": [
          "H5P.Image 1.1",
          "H5P.Video 1.5"
        ],
        "optional": true,
        "description": "Optional media to display above the question."
      },
      {
        "name": "disableImageZooming",
        "type": "boolean",
        "label": "Disable image zooming",
        "importance": "low",
        "default": false,
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "type",
              "equals": "H5P.Image 1.1"
            }
          ]
        }
      }
    ]
  },
  {
    "name": "taskDescription",
    "label": "Task description",
    "type": "text",
    "widget": "html",
    "importance": "high",
    "description": "Describe your task here.",
    "placeholder": "Please listen carefully and write what you hear.",
    "enterMode": "div",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  },
  {
    "name": "sentences",
    "label": "Sentences",
    "importance": "high",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "min": 1,
    "entity": "Sentence",
    "field": {
      "name": "sentence",
      "type": "group",
      "label": "Sentence",
      "fields": [
        {
          "name": "description",
          "type": "text",
          "label": "Description",
          "description": "You can optionally put a simple description above the text input field, useful e.g. for dialogues.",
          "importance": "medium",
          "optional": true
        },
        {
          "name": "sample",
          "type": "audio",
          "label": "Sound sample",
          "description": "Sentence spoken in normal speed",
          "importance": "medium",
          "widgetExtensions": ["AudioRecorder"]
        },
        {
          "name": "sampleAlternative",
          "type": "audio",
          "label": "Sound sample slow",
          "description": "Sentence spoken in slow speed",
          "importance": "medium",
          "optional": true,
          "widgetExtensions": ["AudioRecorder"]
        },
        {
          "name": "text",
          "type": "text",
          "label": "Text",
          "description": "Text that should be written. You can add alternate spellings to a word by adding a vertical line (|) behind followed by an alternative.",
          "importance": "medium",
          "maxLength": 1000
        }
      ]
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "fields": [
      {
        "name": "tries",
        "type": "number",
        "label": "Maximum tries",
        "description": "Will limit the number of times the samples for each sentence can be listened to.",
        "optional": true,
        "min": 1
      },
      {
        "name": "triesAlternative",
        "type": "number",
        "label": "Maximum tries for slow speed",
        "description": "Will limit the number of times the slow samples for each sentence can be listened to.",
        "optional": true,
        "min": 1
      },
      {
        "name": "ignorePunctuation",
        "type": "boolean",
        "label": "Ignore Punctuation marks",
        "description": "If checked, punctuation marks will not be considerd for scoring.",
        "optional": false,
        "default": true
      },
      {
        "name": "zeroMistakeMode",
        "type": "boolean",
        "label": "Zero mistakes mode",
        "description": "If checked, only correct answers will be considered for scoring. Mistakes will not be punished.",
        "default": false,
        "optional": false
      },
      {
        "name": "customTypoDisplay",
        "type": "boolean",
        "label": "Custom typo display",
        "description": "If checked, typos will be displayed in a custom style distinguishing them from clear mistakes.",
        "default": false,
        "optional": false
      },
      {
        "name": "typoFactor",
        "type": "select",
        "label": "Value of typos",
        "description": "Determine to which extent typing errors (word with 3-9 characters: up to 1 mistake, word with more than 9 characters: up to 2 mistakes) count as a real mistake.",
        "options": [
            {
              "value": "100",
              "label": "100 %"
            },
            {
              "value": "50",
              "label": "50 %"
            },
            {
              "value": "0",
              "label": "0 %"
            }
          ],
        "default": "100"
      },
      {
        "name": "alternateSolution",
        "type": "select",
        "label": "Presentation of alternate solutions",
        "description": "Define which alternatives should be presented for wrong or missing words in the solution.",
        "options": [
          {
            "value": "first",
            "label": "Show only first alternative"
          },
          {
            "value": "all",
            "label": "Show all alternatives"
          }
        ],
        "default": "first"
      },
      {
        "name": "overrideRTL",
        "type": "select",
        "label": "Writing direction",
        "description": "Set whether the sentences'' language is right-to-left or left-to-right.",
        "options": [
          {
            "value": "auto",
            "label": "Automatic detection"
          },
          {
            "value": "on",
            "label": "Right-to-left"
          },
          {
            "value": "off",
            "label": "Left-to-right"
          }
        ],
        "default": "auto"
      },
      {
        "name": "autosplit",
        "type": "boolean",
        "label": "Splitting of characters",
        "description": "Activate if particular characters (e.g. Chinese Han characters) should be split into separate words automatically.",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableRetry",
        "label": "Enable \"Retry\"",
        "type": "boolean",
        "importance": "low",
        "default": true,
        "optional": true
      },
      {
        "name": "enableSolution",
        "label": "Enable \"Show solution\" button",
        "type": "boolean",
        "importance": "low",
        "default": true,
        "optional": true
      }
    ]
  },
  {
    "name": "l10n",
    "type": "group",
    "common": true,
    "label": "User interface",
    "importance": "low",
    "fields": [
      {
        "name": "generalFeedback",
        "type": "text",
        "label": "General feedback",
        "description": "You can use several placeholders that will be replaced with the adequate number: @matches = number of matches, @total = total mistakes, @capped = capped total mistakes, @wrong = wrong words, @added = additional words, @missing = missing words, @typo = typing errors",
        "importance": "low",
        "default": "You have made @total mistake(s)."
      },
      {
        "name": "generalFeedbackZeroMistakesMode",
        "type": "text",
        "label": "General feedback (zero mistakes mode)",
        "description": "You can use several placeholders that will be replaced with the adequate number: @matches = number of matches, @total = total score, @wrong = wrong words, @added = additional words, @missing = missing words, @typo = typing errors",
        "importance": "low",
        "default": "You have entered @total word(s) correctly and @typo word(s) with minor mistakes."
      },
      {
        "name": "checkAnswer",
        "type": "text",
        "label": "Text for \"Check\" button",
        "importance": "low",
        "default": "Check"
      },
      {
        "name": "tryAgain",
        "label": "Text for \"Retry\" button",
        "type": "text",
        "importance": "low",
        "default": "Retry"
      },
      {
        "name": "showSolution",
        "type": "text",
        "label": "Text for \"Show solution\" button",
        "importance": "low",
        "default": "Show solution"
      },
      {
        "name": "audioNotSupported",
        "type": "text",
        "label": "Audio not supported message",
        "importance": "low",
        "default": "Your browser does not support this audio."
      }
    ]
  },
  {
    "name": "a11y",
    "type": "group",
    "common": true,
    "label": "Readspeaker",
    "importance": "low",
    "fields": [
      {
        "name": "check",
        "type": "text",
        "label": "Assistive technology description for \"Check\" button",
        "importance": "low",
        "default": "Check the answers. The responses will be marked as correct, incorrect, or unanswered."
      },
      {
        "name": "showSolution",
        "type": "text",
        "label": "Assistive technology description for \"Show Solution\" button",
        "importance": "low",
        "default": "Show the solution. The task will be marked with its correct solution."
      },
      {
        "name": "retry",
        "type": "text",
        "label": "Assistive technology description for \"Retry\" button",
        "importance": "low",
        "default": "Retry the task. Reset all responses and start the task over again."
      },
      {
        "name": "play",
        "type": "text",
        "label": "Play button",
        "importance": "low",
        "default": "Play"
      },
      {
        "name": "playSlowly",
        "type": "text",
        "label": "Play slowly button",
        "importance": "low",
        "default": "Play slowly"
      },
      {
        "name": "triesLeft",
        "type": "text",
        "label": "Tries left (text for readspeakers and hover text)",
        "description": "@number will be replaced by the current number of tries left.",
        "importance": "low",
        "default": "Number of tries left: @number"
      },
      {
        "name": "infinite",
        "type": "text",
        "label": "Infinite (text for readspeakers and hover text)",
        "importance": "low",
        "default": "infinite"
      },
      {
        "name": "enterText",
        "type": "text",
        "label": "Enter text field",
        "importance": "low",
        "default": "Enter what you have heard."
      },
      {
        "name": "yourResult",
        "type": "text",
        "label": "Your result",
        "description": "@score will be replaced by the number of points. @total will be replaced by the maximum possible points.",
        "importance": "low",
        "default": "You got @score out of @total points"
      },
      {
        "name": "solution",
        "type": "text",
        "label": "Solution",
        "importance": "low",
        "default": "Solution"
      },
      {
        "name": "sentence",
        "type": "text",
        "label": "Sentence",
        "importance": "low",
        "default": "Sentence"
      },
      {
        "name": "item",
        "type": "text",
        "label": "Item",
        "importance": "low",
        "default": "Item"
      },
      {
        "name": "correct",
        "type": "text",
        "label": "Correct",
        "importance": "low",
        "default": "correct"
      },
      {
        "name": "wrong",
        "type": "text",
        "label": "Wrong",
        "importance": "low",
        "default": "wrong"
      },
      {
        "name": "typo",
        "type": "text",
        "label": "Small mistake",
        "importance": "low",
        "default": "small mistake"
      },
      {
        "name": "missing",
        "type": "text",
        "label": "Missing word or symbol",
        "importance": "low",
        "default": "missing"
      },
      {
        "name": "added",
        "type": "text",
        "label": "Added word or symbol",
        "importance": "low",
        "default": "added"
      },
      {
        "name": "shouldHaveBeen",
        "type": "text",
        "label": "CorrectSolution",
        "importance": "low",
        "default": "Should have been"
      },
      {
        "name": "or",
        "type": "text",
        "label": "Or",
        "importance": "low",
        "default": "or"
      },
      {
        "name": "point",
        "type": "text",
        "label": "Point",
        "importance": "low",
        "default": "point"
      },
      {
        "name": "points",
        "type": "text",
        "label": "Points",
        "importance": "low",
        "default": "points"
      },
      {
        "name": "period",
        "type": "text",
        "label": "Period",
        "importance": "low",
        "default": "period"
      },
      {
        "name": "exclamationPoint",
        "type": "text",
        "label": "Exclamation point",
        "importance": "low",
        "default": "exclamation point"
      },
      {
        "name": "questionMark",
        "type": "text",
        "label": "Question mark",
        "importance": "low",
        "default": "question mark"
      },
      {
        "name": "comma",
        "type": "text",
        "label": "Comma",
        "importance": "low",
        "default": "comma"
      },
      {
        "name": "singleQuote",
        "type": "text",
        "label": "Single quote",
        "importance": "low",
        "default": "single quote"
      },
      {
        "name": "doubleQuote",
        "type": "text",
        "label": "Double quote",
        "importance": "low",
        "default": "double quote"
      },
      {
        "name": "colon",
        "type": "text",
        "label": "Colon",
        "importance": "low",
        "default": "colon"
      },
      {
        "name": "semicolon",
        "type": "text",
        "label": "Semicolon",
        "importance": "low",
        "default": "semicolon"
      },
      {
        "name": "plus",
        "type": "text",
        "label": "Plus",
        "importance": "low",
        "default": "plus"
      },
      {
        "name": "minus",
        "type": "text",
        "label": "Minus",
        "importance": "low",
        "default": "minus"
      },
      {
        "name": "asterisk",
        "type": "text",
        "label": "Asterisk",
        "importance": "low",
        "default": "asterisk"
      },
      {
        "name": "forwardSlash",
        "type": "text",
        "label": "Forward slash",
        "importance": "low",
        "default": "forward slash"
      }
    ]
  }
]
', N'', 1, null),
       (85, N'2021-04-25 12:28:43.000', N'H5P.AudioRecorder', N'Audio Recorder', 1, 0, 20, 1, 0, N'iframe',
        N'dist/h5p-audio-recorder.js', N'fonts/h5p-audio-recorder-font-open-sans.css', N'[
  {
    "label": "Task Description",
    "importance": "high",
    "name": "title",
    "type": "text",
    "widget": "textarea",
    "description": "Optional text to display above the audio recorder",
    "optional": true
  },
  {
    "label": "Localization",
    "name": "l10n",
    "type": "group",
    "common": true,
    "fields": [
      {
        "name": "recordAnswer",
        "label": "Record button text",
        "type": "text",
        "default": "Record"
      },
      {
        "name": "pause",
        "label": "Pause button text",
        "type": "text",
        "default": "Pause"
      },
      {
        "name": "continue",
        "label": "Continue button text",
        "type": "text",
        "default": "Continue"
      },
      {
        "name": "download",
        "label": "Download button text",
        "type": "text",
        "default": "Download"
      },
      {
        "name": "done",
        "label": "Done button text",
        "type": "text",
        "default": "Done"
      },
      {
        "name": "retry",
        "label": "Retry button text",
        "type": "text",
        "default": "Retry"
      },
      {
        "name": "microphoneNotSupported",
        "label": "Microphone not supported error message",
        "type": "text",
        "default": "Microphone not supported. Make sure you are using a browser that allows microphone recording."
      },
      {
        "name": "microphoneInaccessible",
        "label": "Microphone inaccessible error message",
        "type": "text",
        "default": "Microphone is not accessible. Make sure that the browser microphone is enabled."
      },
      {
        "name": "insecureNotAllowed",
        "type": "text",
        "label": "Message displayed when insecure access is not allowed",
        "description": "Some browsers do not allow using the microphone when the page is served using HTTP. This message will be displayed if that is the case",
        "default": "Access to microphone is not allowed in your browser since this page is not served using HTTPS. Please contact the author, and ask him to make this available using HTTPS"
      },
      {
        "name": "statusReadyToRecord",
        "label": "Ready to record status message",
        "type": "text",
        "default": "Press a button below to record your answer."
      },
      {
        "name": "statusRecording",
        "label": "Recording status message",
        "type": "text",
        "default": "Recording..."
      },
      {
        "name": "statusPaused",
        "label": "Paused status message",
        "type": "text",
        "default": "Recording paused. Press a button to continue recording."
      },
      {
        "name": "statusFinishedRecording",
        "label": "Finished recording status message",
        "type": "text",
        "default": "You have successfully recorded your answer! Listen to the recording below."
      },
      {
        "name": "downloadRecording",
        "label": "Download recording message",
        "type": "text",
        "default": "Download this recording or retry."
      },
      {
        "name": "retryDialogHeaderText",
        "label": "Retry dialog header text",
        "type": "text",
        "default": "Retry recording?"
      },
      {
        "name": "retryDialogBodyText",
        "label": "Retry dialog body text",
        "type": "text",
        "default": "By pressing \"Retry\" you will lose your current recording."
      },
      {
        "name": "retryDialogConfirmText",
        "label": "Retry dialog confirm text",
        "type": "text",
        "default": "Retry"
      },
      {
        "name": "retryDialogCancelText",
        "label": "Retry dialog cancel text",
        "type": "text",
        "default": "Cancel"
      },
      {
        "name": "statusCantCreateTheAudioFile",
        "label": "Can''t create audio file status message",
        "type": "text",
        "default": "Can''t create the audio file."
      }
    ]
  }
]
', N'', 1, null),
       (86, N'2021-04-25 12:28:53.000', N'H5P.FindTheWords', N'Find The Words', 1, 4, 4, 1, 0, N'iframe',
        N'scripts/h5p-find-the-words.js, scripts/h5p-find-the-words-word-grid.js, scripts/h5p-find-the-words-vocabulary.js, scripts/h5p-find-the-words-timer.js, scripts/h5p-find-the-words-counter.js',
        N'styles/h5p-find-the-words.css', N'[
  {
    "label": "Task description",
    "name": "taskDescription",
    "type": "text",
    "description": "Description of the Game",
    "default": "Find the words from the grid",
    "importance": "high"
  },
  {
    "name": "wordList",
    "type": "text",
    "label": "Word list",
    "description": "Comma Separated list of words. Special Characters, White Spaces and Numbers Not allowed",
    "default": "one,two,three",
    "regexp": {
      "pattern": "^(?!(?:.*[\"!#$%&./:;<=>?@\\[\\]^_`\\{|}~''()\\-*+\\d]|^[,])).*$"
    },
    "importance": "high"
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the game behaves.",
    "optional": true,
    "fields": [
      {
        "name": "orientations",
        "type": "group",
        "label": "Orientations",
        "description": "An array containing the names of the word directions that should be used when creating the puzzle",
        "fields": [
          {
            "name": "horizontal",
            "type": "boolean",
            "label": "Horizontal- left to right",
            "default": true
          },
          {
            "name": "horizontalBack",
            "type": "boolean",
            "label": "Horizontal- right to left",
            "default": true
          },
          {
            "name": "vertical",
            "type": "boolean",
            "label": "Vertical downwards",
            "default": true
          },
          {
            "name": "verticalUp",
            "type": "boolean",
            "label": "Vertical upwards",
            "default": true
          },
          {
            "name": "diagonal",
            "type": "boolean",
            "label": "Diagonal downwards- left to right",
            "default": true
          },
          {
            "name": "diagonalBack",
            "type": "boolean",
            "label": "Diagonal downwards- right to left",
            "default": true
          },
          {
            "name": "diagonalUp",
            "type": "boolean",
            "label": "Diagonal upwards- left to right",
            "default": true
          },
          {
            "name": "diagonalUpBack",
            "type": "boolean",
            "label": "Diagonal upwards- right to left",
            "default": true
          }
        ]
      },
      {
        "name": "fillPool",
        "type": "text",
        "label": "Vertical downwards",
        "description": "pool of letters from which the blanks to be filled",
        "default": "abcdefghijklmnopqrstuvwxyz",
        "regexp": {
          "pattern": "^[^\t\n .<>?;:\"''`!@#$%^&*()\\[\\]{}_+=|\\-]*$"
        }
      },
      {
        "name": "preferOverlap",
        "type": "boolean",
        "label": "Prefer overlap",
        "description": "Determines how wordfind decides where to place a word within the puzzle.   When true, it randomly selects amongst the positions the highest number of letters that overlap creating a more compact puzzle.   When false, it randomly selects amongst all valid positions creating a less compact puzzle.",
        "default": true
      },
      {
        "name": "showVocabulary",
        "type": "boolean",
        "label": "Show vocabulary",
        "description": "Determines whether to show vocabularies to the player",
        "default": true
      },
      {
        "name": "enableShowSolution",
        "type": "boolean",
        "label": "Enable show solution",
        "description": "Add a show solution button for the game",
        "default": true
      },
      {
        "name": "enableRetry",
        "type": "boolean",
        "label": "Enable retry",
        "description": "Add a retry button for the game",
        "default": true
      }
    ]
  },
  {
    "label": "Localization",
    "importance": "low",
    "name": "l10n",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Text for \"Check\" button",
        "importance": "low",
        "name": "check",
        "type": "text",
        "default": "Check"
      },
      {
        "label": "Text for \"Retry\" button",
        "importance": "low",
        "name": "tryAgain",
        "type": "text",
        "default": "Retry"
      },
      {
        "label": "Text for \"Show Solution\" button",
        "importance": "low",
        "name": "showSolution",
        "type": "text",
        "default": "Show Solution"
      },
      {
        "label": "Counter text",
        "importance": "low",
        "name": "found",
        "type": "text",
        "default": "@found of @totalWords found",
        "description": "Feedback text, variables available: @found and @totalWords. Example: ''@found of @totalWords found''"
      },
      {
        "label": "Time spent text",
        "importance": "low",
        "name": "timeSpent",
        "type": "text",
        "default": "Time Spent",
        "description": "label for showing the time spent while playing the game"
      },
      {
        "label": "Feedback text",
        "importance": "low",
        "name": "score",
        "type": "text",
        "default": "You got @score of @total points",
        "description": "Feedback text, variables available: @score and @total. Example: ''You got @score of @total possible points''"
      },
      {
        "label": "Word list header",
        "importance": "low",
        "name": "wordListHeader",
        "type": "text",
        "default": "Find the words",
        "maxLength": 20
      }
    ]
  }
]
', N'', 1, null),
       (87, N'2021-04-25 12:28:53.000', N'H5P.Timer', N'Timer', 0, 4, 2, 0, 0, N'', N'scripts/timer.js', N'', N'', N'',
        0, null),
       (88, N'2021-04-25 12:29:05.000', N'H5P.ImageHotspotQuestion', N'Find the Hotspot', 1, 8, 12, 1, 0, N'',
        N'image-hotspot-question.js', N'image-hotspot-question.css', N'[
  {
    "name": "imageHotspotQuestion",
    "type": "group",
    "widget": "wizard",
    "label": "Image Hotspot Question Editor",
    "importance": "high",
    "fields": [
      {
        "name": "backgroundImageSettings",
        "type": "group",
        "label": "Background image",
        "importance": "high",
        "fields": [
          {
            "name": "backgroundImage",
            "type": "image",
            "label": "Background image",
            "importance": "high",
            "description": "Select an image to use as background the image hotspot question."
          }
        ]
      },
      {
        "name": "hotspotSettings",
        "type": "group",
        "label": "Hotspots",
        "importance": "high",
        "widget": "imageHotspotQuestion",
        "description": "Drag and drop the desired figure from the toolbar to create a new hotspot. Double-click to edit an existing hotspot. Drag the hotspot to move it. Pull the resize handler in the lower right corner to resize.",
        "fields": [
          {
            "name": "taskDescription",
            "type": "text",
            "label": "Task description",
            "importance": "high",
            "description": "Instructions to the user.",
            "optional": true
          },
          {
            "name": "hotspot",
            "type": "list",
            "label": "Hotspot",
            "importance": "high",
            "entity": "Hotspot",
            "field": {
              "type": "group",
              "label": "Hotspot",
              "importance": "high",
              "fields": [
                {
                  "name": "userSettings",
                  "type": "group",
                  "label": "userSettings",
                  "importance": "low",
                  "fields": [
                    {
                      "name": "correct",
                      "type": "boolean",
                      "label": "Correct",
                      "importance": "low",
                      "description": "There can be multiple correct hotspots. However, the user gets correct/incorrect feedback immediately after first click."
                    },
                    {
                      "name": "feedbackText",
                      "type": "text",
                      "label": "Feedback",
                      "importance": "low",
                      "optional": true
                    }
                  ]
                },
                {
                  "name": "computedSettings",
                  "type": "group",
                  "label": "computedSettings",
                  "importance": "low",
                  "fields": [
                    {
                      "name": "x",
                      "type": "number",
                      "optional": true
                    },
                    {
                      "name": "y",
                      "type": "number",
                      "optional": true
                    },
                    {
                      "name": "width",
                      "type": "number",
                      "optional": true
                    },
                    {
                      "name": "height",
                      "type": "number",
                      "optional": true
                    },
                    {
                      "name": "figure",
                      "type": "text",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "noneSelectedFeedback",
            "type": "text",
            "label": "Feedback if the user selects an empty spot:",
            "importance": "low",
            "placeholder": "You didn''t locate any hotspots, try again!",
            "optional": true
          },
          {
            "name": "showFeedbackAsPopup",
            "type": "boolean",
            "label": "Show feedback as a popup",
            "importance": "low",
            "default": true,
            "optional": true
          },
          {
            "label": "Localization",
            "name": "l10n",
            "type": "group",
            "fields": [
              {
                "name": "retryText",
                "label": "Retry button text",
                "type": "text",
                "default": "Retry",
                "optional": true
              },
              {
                "name": "closeText",
                "label": "Close button text",
                "type": "text",
                "default": "Close",
                "optional": true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "scoreBarLabel",
    "type": "text",
    "label": "Textual representation of the score bar for those using a readspeaker",
    "default": "You got :num out of :total points",
    "importance": "low",
    "common": true
  },
  {
    "name": "a11yRetry",
    "type": "text",
    "label": "Assistive technology description for \"Retry\" button",
    "default": "Retry the task. Reset all responses and start the task over again.",
    "importance": "low",
    "common": true
  }
]', N'', 1, null),
       (89, N'2021-04-25 12:29:05.000', N'H5PEditor.ImageHotspotQuestion', N'Image Hotspot Question Editor', 1, 8, 10,
        0, 0, N'', N'image-hotspot-question-editor.js', N'image-hotspot-question-editor.css', N'', N'', 0, null),
       (90, N'2021-04-25 12:29:34.000', N'H5P.DragNBar', N'Drag N Bar', 1, 4, 8, 0, 0, N'',
        N'scripts/drag-n-bar.js, scripts/context-menu.js, scripts/dialog.js, scripts/drag-n-bar-element.js',
        N'styles/drag-n-bar.css, styles/dialog.css, styles/context-menu.css', N'', N'', 0, null),
       (91, N'2021-04-25 12:29:34.000', N'H5P.ImageMultipleHotspotQuestion', N'Find Multiple Hotspots', 1, 0, 1, 1, 0,
        N'', N'image-multiple-hotspot-question.js', N'image-multiple-hotspot-question.css', N'[
  {
    "name": "imageMultipleHotspotQuestion",
    "type": "group",
    "widget": "wizard",
    "label": "Image Multiple Hotspot Question Editor",
    "importance": "high",
    "fields": [
      {
        "name": "backgroundImageSettings",
        "type": "group",
        "label": "Background image",
        "importance": "high",
        "fields": [
          {
            "name": "questionTitle",
            "type": "text",
            "label": "The title of this question",
            "importance": "high",
            "default": "Image hotspot question",
            "description": "Used in summaries, statistics etc."
          },
          {
            "name": "backgroundImage",
            "type": "image",
            "label": "Background image",
            "importance": "high",
            "description": "Select an image to use as background the image hotspot question."
          }
        ]
      },
      {
        "name": "hotspotSettings",
        "type": "group",
        "label": "Hotspots",
        "importance": "high",
        "widget": "imageMultipleHotspotQuestion",
        "description": "Choose appropriate figure for your hotspot, configure it, then drag and resize it into place.",
        "fields": [
          {
            "name": "taskDescription",
            "type": "text",
            "label": "Task description",
            "importance": "high",
            "description": "Instructions to the user.",
            "optional": true
          },
          {
            "name": "hotspotName",
            "type": "text",
            "label": "Hotspot Name",
            "importance": "high",
            "description": "Please enter what the user is trying to find i.e. risks, objects, errors (this will be used in feedback statements).",
            "optional": true
          },
          {
            "name": "numberHotspots",
            "type": "number",
            "label": "Number of correct hotspots that need to be found for question completion",
            "importance": "high",
            "description": "If left blank, will default to the number of correct hotspots created.",
            "optional": true
          },
          {
            "name": "hotspot",
            "type": "list",
            "label": "Hotspot",
            "importance": "high",
            "entity": "Hotspot",
            "field": {
              "type": "group",
              "label": "Hotspot",
              "importance": "high",
              "fields": [
                {
                  "name": "userSettings",
                  "type": "group",
                  "label": "userSettings",
                  "importance": "low",
                  "fields": [
                    {
                      "name": "correct",
                      "type": "boolean",
                      "label": "Correct",
                      "importance": "low",
                      "description": "There can be multiple correct hotspots. The user gets correct/incorrect feedback immediately after each click. The feedback will be displayed in the form of - (Text entered below) (Number of hotspots found) of (Correct hotspots needed) (Hotspot Name entered above)."
                    },
                    {
                      "name": "feedbackText",
                      "type": "text",
                      "label": "Feedback",
                      "importance": "low",
                      "placeholder": "Correct, you have found",
                      "optional": true
                    }
                  ]
                },
                {
                  "name": "computedSettings",
                  "type": "group",
                  "label": "computedSettings",
                  "importance": "low",
                  "fields": [
                    {
                      "name": "x",
                      "type": "number",
                      "optional": true
                    },
                    {
                      "name": "y",
                      "type": "number",
                      "optional": true
                    },
                    {
                      "name": "width",
                      "type": "number",
                      "optional": true
                    },
                    {
                      "name": "height",
                      "type": "number",
                      "optional": true
                    },
                    {
                      "name": "figure",
                      "type": "text",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "noneSelectedFeedback",
            "type": "text",
            "label": "Feedback if the user selects an empty spot:",
            "importance": "low",
            "placeholder": "You didn''t locate any hotspots, try again!",
            "optional": true
          },
          {
            "name": "alreadySelectedFeedback",
            "type": "text",
            "label": "Feedback if the user selects an already found hotspot:",
            "placeholder": "You have already found this one!",
            "importance": "low",
            "optional": true
          }
        ]
      }
    ]
  }
]
', N'', 0, null),
       (92, N'2021-04-25 12:29:34.000', N'H5PEditor.ImageMultipleHotspotQuestion',
        N'Image Multiple Hotspot Question Editor', 1, 0, 0, 0, 0, N'', N'image-multiple-hotspot-question-editor.js',
        N'image-multiple-hotspot-question-editor.css', N'', N'', 0, null),
       (93, N'2021-04-25 12:29:45.000', N'H5P.Essay', N'Essay', 1, 2, 3, 1, 0, N'iframe',
        N'scripts/essay.js, scripts/inputfield.js', N'styles/essay.css', N'[
  {
    "name": "media",
    "type": "group",
    "label": "Media",
    "importance": "medium",
    "fields": [
      {
        "name": "type",
        "type": "library",
        "label": "Type",
        "importance": "medium",
        "options": [
          "H5P.Image 1.1",
          "H5P.Video 1.5"
        ],
        "optional": true,
        "description": "Optional media to display above the question."
      },
      {
        "name": "disableImageZooming",
        "type": "boolean",
        "label": "Disable image zooming",
        "importance": "low",
        "default": false,
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "type",
              "equals": "H5P.Image 1.1"
            }
          ]
        }
      }
    ]
  },
  {
    "name": "taskDescription",
    "label": "Task description",
    "type": "text",
    "widget": "html",
    "importance": "high",
    "description": "Describe your task here. The task description will appear above text input area.",
    "placeholder": "Summarize the book in 500 characters ...",
    "enterMode": "div",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  },
  {
    "name": "placeholderText",
    "label": "Help text",
    "type": "text",
    "description": "This text should help the user to get started.",
    "placeholder": "This book is about ...",
    "importance": "low",
    "optional": true
  },
  {
    "name": "solution",
    "type": "group",
    "label": "Sample solution",
    "importance": "high",
    "expanded": true,
    "description": "You can optionally add a sample solution that''s shown after the student created a text. It''s called sample solution because there probably is not only one solution",
    "fields": [
      {
        "name": "introduction",
        "type": "text",
        "label": "Introduction",
        "importance": "low",
        "description": "You can optionally leave the students some explanations about your example. The explanation will only show up if you add an example, too.",
        "placeholder": "Please remember that you were not expected to come up with the exact same solution. It''s just a good example.",
        "optional": true,
        "widget": "html",
        "enterMode": "div",
        "tags": [
          "strong",
          "em",
          "u",
          "a",
          "ul",
          "ol",
          "hr",
          "code"
        ]
      },
      {
        "name": "sample",
        "type": "text",
        "label": "Sample solution text",
        "importance": "low",
        "description": "The student will see a \"Show solution\" button after submitting if you provide some text here.",
        "optional": true,
        "widget": "html",
        "enterMode": "div",
        "tags": [
          "strong",
          "a"
        ]
      }
    ]
  },
  {
    "name": "keywords",
    "label": "Keywords",
    "importance": "high",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "min": 1,
    "entity": "Keyword",
    "field": {
      "name": "groupy",
      "type": "group",
      "label": "Keyword",
      "fields": [
        {
          "name": "keyword",
          "type": "text",
          "label": "Keyword",
          "description": "Keyword or phrase to look for. Use an asterisk ''*'' as a wildcard for one or more characters. Use a slash ''/'' at the beginning and the end to use a regular expression.",
          "importance": "medium"
        },
        {
          "name": "alternatives",
          "type": "list",
          "label": "Variations",
          "description": "Add optional variations for this keyword. Example: For a ''city'' add alternatives ''town'', ''municipality'' etc. Points will be awarded if the user includes any of the specified alternatives.",
          "importance": "medium",
          "entity": "variation",
          "optional": true,
          "min": 0,
          "field": {
            "name": "alternative",
            "type": "text",
            "label": "Keyword variation"
          }
        },
        {
          "name": "options",
          "type": "group",
          "label": "Points, Options and Feedback",
          "importance": "low",
          "fields": [
            {
              "name": "points",
              "type": "number",
              "label": "Points",
              "default": 1,
              "description": "Points that the user will get if he/she includes this keyword or its alternatives in the answer.",
              "min": 1
            },
            {
              "name": "occurrences",
              "type": "number",
              "label": "Occurrences",
              "default": 1,
              "description": "Define how many occurrences of the keyword or its variations should be awarded with points.",
              "min": 1
            },
            {
              "name": "caseSensitive",
              "type": "boolean",
              "label": "Case sensitive",
              "default": true,
              "description": "Makes sure the user input has to be exactly the same as the answer."
            },
            {
              "name": "forgiveMistakes",
              "type": "boolean",
              "label": "Forgive minor mistakes",
              "description": "This will accept minor spelling mistakes (3-9 characters: 1 mistake, more than 9 characters: 2 mistakes)."
            },
            {
              "name": "feedbackIncluded",
              "type": "text",
              "label": "Feedback if keyword included",
              "description": "This feedback will be displayed if the user includes this keyword or its alternatives in the answer.",
              "optional": true,
              "maxLength": 1000
            },
            {
              "name": "feedbackMissed",
              "type": "text",
              "label": "Feedback if keyword missing",
              "description": "This feedback will be displayed if the user doesn’t include this keyword or its alternatives in the answer.",
              "optional": true,
              "maxLength": 1000
            },
            {
              "name": "feedbackIncludedWord",
              "type": "select",
              "label": "Feedback word shown if keyword included",
              "importance": "low",
              "description": "This option allows you to specify which word should be shown in front of your feedback if a keyword was found in the text.",
              "optional": false,
              "default": "keyword",
              "options": [
                {
                  "value": "keyword",
                  "label": "keyword"
                },
                {
                  "value": "alternative",
                  "label": "alternative found"
                },
                {
                  "value": "answer",
                  "label": "answer given"
                },
                {
                  "value": "none",
                  "label": "none"
                }
              ]
            },
            {
              "name": "feedbackMissedWord",
              "type": "select",
              "label": "Feedback word shown if keyword missing",
              "importance": "low",
              "description": "This option allows you to specify which word should be shown in front of your feedback if a keyword was not found in the text.",
              "optional": false,
              "default": "none",
              "options": [
                {
                  "value": "keyword",
                  "label": "keyword"
                },
                {
                  "value": "none",
                  "label": "none"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "fields": [
      {
        "name": "minimumLength",
        "label": "Minimum number of characters",
        "type": "number",
        "description": "Specify the minimum number of characters that the user must enter.",
        "importance": "low",
        "optional": true,
        "min": "0"
      },
      {
        "name": "maximumLength",
        "label": "Maximum number of characters",
        "type": "number",
        "description": "Specify the maximum number of characters that the user can enter.",
        "importance": "low",
        "optional": true,
        "min": "0"
      },
      {
        "name": "inputFieldSize",
        "label": "Input field size",
        "type": "select",
        "importance": "low",
        "description": "The size of the input field in amount of lines it will cover",
        "options": [
          {
            "value": "1",
            "label": "1 line"
          },
          {
            "value": "3",
            "label": "3 lines"
          },
          {
            "value": "10",
            "label": "10 lines"
          }
        ],
        "default": "10"
      },
      {
        "name": "enableRetry",
        "label": "Enable \"Retry\"",
        "type": "boolean",
        "importance": "low",
        "description": "If checked, learners can retry the task.",
        "default": true,
        "optional": true
      },
      {
        "name": "ignoreScoring",
        "label": "Ignore scoring",
        "type": "boolean",
        "importance": "low",
        "description": "If checked, learners will only see the feedback that you provided for the keywords, but no score.",
        "default": false,
        "optional": true
      },
      {
        "name": "pointsHost",
        "label": "Points in host environment",
        "type": "number",
        "importance": "low",
        "description": "Used to award points in host environment merely for answering (not shown to learner).",
        "min": 0,
        "default": 1,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "ignoreScoring",
              "equals": true
            }
          ]
        }
      },
      {
        "name": "percentagePassing",
        "type": "number",
        "label": "Passing percentage",
        "description": "Percentage that''s necessary for passing",
        "optional": true,
        "min": 0,
        "max": 100,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "ignoreScoring",
              "equals": false
            }
          ]
        }
      },
      {
        "name": "percentageMastering",
        "type": "number",
        "label": "Mastering percentage",
        "description": "Percentage that''s necessary for mastering. Setting the mastering percentage below 100 % will lower the maximum possible score accordingly. It''s intended to give some leeway to students, not to \"graciously accept\" solutions that do not contain all keywords.",
        "optional": true,
        "min": 0,
        "max": 100,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "ignoreScoring",
              "equals": false
            }
          ]
        }
      },
      {
        "name": "overrideCaseSensitive",
        "type": "select",
        "label": "Override case sensitive",
        "importance": "low",
        "description": "This option determines if the \"Case sensitive\" option will be activated for all keywords.",
        "optional": true,
        "options": [
          {
            "value": "on",
            "label": "Enabled"
          },
          {
            "value": "off",
            "label": "Disabled"
          }
        ]
      },
      {
        "name": "overrideForgiveMistakes",
        "type": "select",
        "label": "Override forgive mistakes",
        "importance": "low",
        "description": "This option determines if the \"Forgive mistakes\" option will be activated for all keywords.",
        "optional": true,
        "options": [
          {
            "value": "on",
            "label": "Enabled"
          },
          {
            "value": "off",
            "label": "Disabled"
          }
        ]
      }
    ]
  },
  {
    "name": "checkAnswer",
    "type": "text",
    "label": "Text for \"Check\" button",
    "importance": "low",
    "default": "Check",
    "common": true
  },
  {
    "name": "tryAgain",
    "label": "Text for \"Retry\" button",
    "type": "text",
    "importance": "low",
    "default": "Retry",
    "common": true
  },
  {
    "name": "showSolution",
    "type": "text",
    "label": "Text for \"Show solution\" button",
    "importance": "low",
    "default": "Show solution",
    "common": true
  },
  {
    "name": "feedbackHeader",
    "type": "text",
    "label": "Header for panel containing feedback for included/missing keywords",
    "importance": "low",
    "default": "Feedback",
    "common": true
  },
  {
    "name": "solutionTitle",
    "type": "text",
    "label": "Label for solution",
    "importance": "low",
    "default": "Sample solution",
    "common": true
  },
  {
    "name": "remainingChars",
    "type": "text",
    "label": "Remaining characters",
    "importance": "low",
    "common": true,
    "default": "Remaining characters: @chars",
    "description": "Message for remaining characters. You can use @chars which will be replaced by the corresponding number."
  },
  {
    "name": "notEnoughChars",
    "type": "text",
    "label": "Not enough characters",
    "importance": "low",
    "common": true,
    "default": "You must enter at least @chars characters!",
    "description": "Message to indicate that the text doesn''t contain enough characters. You can use @chars which will be replaced by the corresponding number."
  },
  {
    "name": "messageSave",
    "type": "text",
    "label": "Save message",
    "description": "Message indicating that the text has been saved",
    "importance": "low",
    "common": true,
    "default": "saved"
  },
  {
    "name": "ariaYourResult",
    "type": "text",
    "label": "Your result (not displayed)",
    "description": "Accessibility text used for readspeakers. @score will be replaced by the number of points. @total will be replaced by the maximum possible points.",
    "importance": "low",
    "common": true,
    "default": "You got @score out of @total points"
  },
  {
    "name": "ariaNavigatedToSolution",
    "type": "text",
    "label": "Navigation message (not displayed)",
    "description": "Accessibility text used for readspeakers",
    "importance": "low",
    "common": true,
    "default": "Navigated to newly included sample solution after textarea."
  }
]
', N'', 1, null),
       (94, N'2021-04-25 12:30:01.000', N'H5P.ImageSlide', N'Image Slide', 1, 1, 2, 0, 0, N'', N'image-slide.js',
        N'image-slide.css', N'[
  {
    "label": "Image",
    "name": "image",
    "type": "library",
    "options": [
      "H5P.Image 1.1"
    ]
  }
]', N'', 0, null),
       (95, N'2021-04-25 12:30:01.000', N'H5P.ImageSlider', N'Image Slider', 1, 1, 1, 1, 1, N'iframe',
        N'image-slider.js', N'image-slider.css', N'[
  {
    "label": "Images",
    "name": "imageSlides",
    "type": "list",
    "field": {
      "label": "Image Slide",
      "name": "imageSlide",
      "type": "group",
      "fields": [
        {
          "label": "Image Slide",
          "name": "imageSlide",
          "type": "library",
          "options": [
            "H5P.ImageSlide 1.1"
          ]
        }
      ]
    }
  },
  {
    "label": "Aspect ratio",
    "name": "aspectRatioMode",
    "type": "select",
    "description": "Automatic means fixed aspect ratio automatically determined based on the images",
    "default": "auto",
    "options": [
      {
        "value": "auto",
        "label": "Automatic"
      },
      {
        "value": "custom",
        "label": "Custom"
      },
      {
        "value": "notFixed",
        "label": "Not fixed"
      }
    ]
  },
  {
    "label": "Aspect Ratio Settings",
    "name": "aspectRatio",
    "type": "group",
    "widget": "showWhen",
    "expanded": true,
    "showWhen": {
      "rules": [
        {
          "field": "aspectRatioMode",
          "equals": "custom"
        }
      ]
    },
    "fields": [
      {
        "label": "Aspect ratio width",
        "name": "aspectWidth",
        "type": "number",
        "default": 4,
        "description": "If you use 4 here, and 3 for the height the aspect ratio will be 4:3"
      },
      {
        "label": "Aspect ratio height",
        "name": "aspectHeight",
        "type": "number",
        "default": 3,
        "description": "If you use 3 here, and 4 for the width the aspect ratio will be 4:3"
      }
    ]
  },
  {
    "name": "a11y",
    "type": "group",
    "label": "Image slider accessibility",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "name": "nextSlide",
        "type": "text",
        "label": "Label for next slide buttons",
        "importance": "low",
        "default": "Next Image",
        "description": "This is only used for read-speakers. It won''t be displayed."
      },
      {
        "name": "prevSlide",
        "type": "text",
        "label": "Label for previous slide buttons",
        "importance": "low",
        "default": "Previous Image",
        "description": "This is only used for read-speakers. It won''t be displayed."
      },
      {
        "name": "gotoSlide",
        "type": "text",
        "label": "Label for slide buttons",
        "importance": "low",
        "default": "Go to image %slide",
        "description": "This is only used for read-speakers. It won''t be displayed. %slide is a variable and will be replaced with the image number."
      }
    ]
  }
]', N'', 1, null),
       (96, N'2021-04-25 12:30:16.000', N'H5P.DocumentExportPage', N'Document Export Page', 1, 5, 7, 0, 0, N'',
        N'document-export-page.js, create-document.js', N'document-export-page.css', N'[
  {
    "name": "description",
    "label": "Description",
    "importance": "medium",
    "type": "text",
    "widget": "html",
    "description": "Description of the export page.",
    "default": "On this page you can choose to export your text, goals and goals assessments.",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ],
    "optional": true
  },
  {
    "name": "createDocumentLabel",
    "label": "Create document button label",
    "importance": "low",
    "type": "text",
    "description": "Text that will be displayed on the \"Create document\"-button.",
    "default": "Create document"
  },
  {
    "name": "submitTextLabel",
    "label": "Submit text button",
    "importance": "low",
    "type": "text",
    "description": "Text that will be displayed on the \"Submit\"-button.",
    "default": "Submit"
  },
  {
    "name": "submitSuccessTextLabel",
    "type": "text",
    "label": "Submit success label",
    "optional": false,
    "default": "Your report was submitted successfully!"
  },
  {
    "name": "selectAllTextLabel",
    "label": "Select all exportable text button label",
    "importance": "low",
    "type": "text",
    "description": "Text that will be displayed on the \"Select all text\"-button.",
    "default": "Select"
  },
  {
    "name": "exportTextLabel",
    "label": "Export text button label",
    "importance": "low",
    "type": "text",
    "description": "Text that will be displayed on the \"Export text\"-button.",
    "default": "Export"
  },
  {
    "name": "helpTextLabel",
    "label": "Label for help text",
    "importance": "low",
    "type": "text",
    "description": "Label for showing additional helpful information to the user.",
    "default": "More information"
  },
  {
    "name": "helpText",
    "label": "Fill in additional help information",
    "importance": "low",
    "type": "text",
    "widget": "html",
    "description": "Here you can fill in additional helpful information for the user.",
    "enterMode": "p",
    "optional": true,
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  },
  {
    "name": "requiresInputErrorMessage",
    "label": "Required input missing text",
    "importance": "low",
    "type": "text",
    "description": "An error message which will be displayed if one or more required input fields have not been filled. @pages will be replaced with the titles of affected pages.",
    "default": "The following pages contain required fields that need to be filled in order to review or submit this document: @pages"
  }
]
', N'', 0, null),
       (97, N'2021-04-25 12:30:16.000', N'H5P.DocumentationTool', N'Documentation Tool', 1, 8, 7, 1, 0, N'iframe',
        N'navigation-menu.js, documentation-tool.js', N'navigation-menu.css, documentation-tool.css', N'[
  {
    "name": "taskDescription",
    "label": "Heading",
    "importance": "high",
    "type": "text",
    "default": "Documentation tool",
    "description": "Title for the documentation tool.",
    "optional": true
  },
  {
    "name": "pagesList",
    "label": "Elements",
    "importance": "high",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "min": 1,
    "entity": "page",
    "field": {
      "name": "page",
      "type": "library",
      "label": "Page type",
      "importance": "high",
      "description": "Library for this slide.",
      "options": [
        "H5P.StandardPage 1.5",
        "H5P.GoalsPage 1.5",
        "H5P.GoalsAssessmentPage 1.4",
        "H5P.DocumentExportPage 1.5"
      ]
    }
  },
  {
    "label": "Localize documentation tool buttons",
    "name": "i10n",
    "type": "group",
    "common": true,
    "collapsed": true,
    "importance": "low",
    "fields": [
      {
        "label": "Previous button label",
        "name": "previousLabel",
        "type": "text",
        "default": "Previous",
        "importance": "low"
      },
      {
        "label": "Next button label",
        "name": "nextLabel",
        "type": "text",
        "default": "Next",
        "importance": "low"
      },
      {
        "label": "Close button label",
        "name": "closeLabel",
        "type": "text",
        "default": "Close",
        "importance": "low"
      }
    ]
  }
]
', N'', 1, null),
       (98, N'2021-04-25 12:30:16.000', N'H5P.ExportPage', N'Export page', 1, 1, 3, 0, 0, N'', N'export-page.js',
        N'export-page.css', N'', N'', 0, null),
       (99, N'2021-04-25 12:30:16.000', N'H5P.GoalsAssessmentPage', N'Goals assessment page', 1, 4, 8, 0, 0, N'',
        N'goals-assessment-page.js', N'goals-assessment-page.css', N'[
  {
    "name": "description",
    "label": "Description",
    "importance": "medium",
    "type": "text",
    "widget": "html",
    "description": "Description of the goals assessment page.",
    "default": "Rate the goals that you have chosen in the goals page.",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ],
    "optional": true
  },
  {
    "name": "lowRating",
    "label": "Low rating text",
    "importance": "low",
    "type": "text",
    "description": "Text for worst rating.",
    "default": "Learned little"
  },
  {
    "name": "midRating",
    "label": "Medium rating text",
    "importance": "low",
    "type": "text",
    "description": "Text for middle rating.",
    "default": "Learned something"
  },
  {
    "name": "highRating",
    "label": "High rating text",
    "importance": "low",
    "type": "text",
    "description": "Text for great rating.",
    "default": "Learned a lot"
  },
  {
    "name": "noGoalsText",
    "label": "No goals text",
    "importance": "low",
    "type": "text",
    "description": "Feedback text when no goals have been created.",
    "default": "You have not chosen any goals yet."
  },
  {
    "name": "helpTextLabel",
    "label": "Label for help text",
    "importance": "low",
    "type": "text",
    "description": "Label for showing additional helpful information to the user.",
    "default": "More information"
  },
  {
    "name": "helpText",
    "label": "Fill in additional help information",
    "importance": "low",
    "type": "text",
    "widget": "html",
    "description": "Here you can fill in additional helpful information for the user.",
    "enterMode": "p",
    "optional": true,
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  }
]
', N'', 0, null),
       (100, N'2021-04-25 12:30:16.000', N'H5P.GoalsPage', N'Goals page', 1, 5, 8, 0, 0, N'',
        N'goals-page.js, goal-instance.js', N'goals-page.css', N'[
  {
    "name": "description",
    "label": "Description",
    "importance": "medium",
    "type": "text",
    "widget": "html",
    "description": "Description of the goals page.",
    "default": "Insert the goals that you have chosen to work with.",
    "enterMode": "p",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ],
    "optional": true
  },
  {
    "name": "defineGoalText",
    "label": "Define goal link text",
    "importance": "low",
    "type": "text",
    "description": "Text that will be displayed on the button for creating a new goal.",
    "default": "Create a new goal"
  },
  {
    "name": "definedGoalLabel",
    "label": "Label for a user defined goal",
    "importance": "low",
    "type": "text",
    "description": "Text that will be displayed as label on a user created goal.",
    "default": "User defined goal"
  },
  {
    "name": "defineGoalPlaceholder",
    "label": "Define goal placeholder",
    "importance": "low",
    "type": "text",
    "description": "Text that will be displayed as a placeholder when creating a new goal.",
    "default": "Write here..."
  },
  {
    "name": "goalsAddedText",
    "label": "Text indicating how many goals has been added",
    "importance": "low",
    "type": "text",
    "default": "Goals added:",
    "description": "This text will follow after the amount of goals that is currently created, example: ''Goals added: 5'' where ''Goals added:'' is this text."
  },
  {
    "name": "specifyGoalText",
    "label": "Text for \"Specify goal\"-button",
    "importance": "low",
    "type": "text",
    "default": "Specification"
  },
  {
    "name": "removeGoalText",
    "label": "Text for \"Remove goal\"-button",
    "importance": "low",
    "type": "text",
    "default": "Remove"
  },
  {
    "name": "helpTextLabel",
    "label": "Label for help text",
    "importance": "low",
    "type": "text",
    "description": "Label for showing additional helpful information to the user.",
    "default": "More information"
  },
  {
    "name": "helpText",
    "label": "Fill in additional help information",
    "importance": "low",
    "type": "text",
    "widget": "html",
    "description": "Here you can fill in additional helpful information for the user.",
    "enterMode": "p",
    "optional": true,
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  },
  {
    "name": "goalDeletionConfirmation",
    "type": "group",
    "common": true,
    "importance": "low",
    "label": "Localize goal deletion confirmation",
    "fields": [
      {
        "name": "header",
        "type": "text",
        "label": "Header",
        "optional": false,
        "default": "Confirm deletion"
      },
      {
        "name": "message",
        "type": "text",
        "label": "Message",
        "optional": false,
        "default": "Are you sure you want to delete this goal?"
      },
      {
        "name": "cancelLabel",
        "type": "text",
        "label": "Cancel button label",
        "optional": false,
        "default": "Cancel"
      },
      {
        "name": "confirmLabel",
        "type": "text",
        "label": "Confirm button label",
        "optional": false,
        "default": "Confirm"
      }
    ]
  }
]
', N'', 0, null),
       (101, N'2021-04-25 12:30:17.000', N'H5P.StandardPage', N'Standard page', 1, 5, 5, 0, 0, N'', N'standard-page.js',
        N'standard-page.css', N'[
  {
    "name": "elementList",
    "label": "Elements",
    "importance": "high",
    "type": "list",
    "entity": "element",
    "field": {
      "name": "element",
      "type": "library",
      "label": "Element type",
      "importance": "high",
      "description": "Library for this page.",
      "options": [
        "H5P.Text 1.1",
        "H5P.TextInputField 1.2",
        "H5P.Image 1.1"
      ]
    }
  },
  {
    "name": "helpTextLabel",
    "label": "Label for help text",
    "importance": "low",
    "type": "text",
    "description": "Label for showing additional helpful information to the user.",
    "default": "More information"
  },
  {
    "name": "helpText",
    "label": "Fill in additional help information",
    "importance": "low",
    "type": "text",
    "widget": "html",
    "description": "Here you can fill in additional information for the user, which will be available when clicked.",
    "enterMode": "p",
    "optional": true,
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ]
  }
]
', N'', 0, null),
       (102, N'2021-04-25 12:30:17.000', N'H5P.TextInputField', N'Text input field editor element', 1, 2, 6, 0, 0, N'',
        N'text-input-field.js, xapi-generator.js', N'text-input-field.css', N'[
  {
    "name": "taskDescription",
    "label": "Description of inputfield",
    "type": "text",
    "widget": "html",
    "importance": "high",
    "description": "Description of what the user should input.",
    "enterMode": "div",
    "tags": [
      "strong",
      "em",
      "u",
      "a",
      "ul",
      "ol",
      "h2",
      "h3",
      "hr",
      "pre",
      "code"
    ],
    "optional": true
  },
  {
    "name": "placeholderText",
    "label": "Placeholder text",
    "type": "text",
    "description": "A placeholder text for the user.",
    "importance": "low",
    "optional": true
  },
  {
    "name": "maximumLength",
    "label": "Maximum text length",
    "type": "number",
    "description": "Maximum number of characters for the text.",
    "importance": "low",
    "optional": true,
    "min": "0"
  },
  {
    "name": "inputFieldSize",
    "label": "Input field size",
    "type": "select",
    "importance": "low",
    "description": "The size of the input field in amount of lines it will cover.",
    "options": [
      {
        "value": "1",
        "label": "1 line"
      },
      {
        "value": "3",
        "label": "3 lines"
      },
      {
        "value": "10",
        "label": "10 lines"
      }
    ],
    "default": "1"
  },
  {
    "name": "requiredField",
    "label": "Required field",
    "type": "boolean",
    "importance": "low",
    "default": false,
    "optional": true,
    "description": "Check to make this field required, the user must answer all required fields to be able to export a document."
  },
  {
    "name": "remainingChars",
    "type": "text",
    "label": "Remaining characters",
    "importance": "low",
    "common": true,
    "default": "Remaining characters: @chars",
    "description": "Message for remaining characters. You can use @chars which will be replaced by the corresponding number."
  }
]
', N'', 0, N'{"disable":true,"disableExtraTitleField":true}'),
       (103, N'2021-04-25 12:30:17.000', N'MustacheJS', N'Mustache JS', 1, 0, 2, 0, 0, N'', N'mustache.js', N'', N'',
        N'', 0, null),
       (104, N'2021-04-25 12:30:17.000', N'docxgenJS', N'Docxgen JS', 1, 0, 3, 0, 0, N'',
        N'docxgen.min.js, jszip.min.js, jszip-utils.js', N'', N'', N'', 0, null),
       (105, N'2021-04-25 12:30:29.000', N'H5P.MemoryGame', N'Memory Game', 1, 3, 6, 1, 0, N'',
        N'memory-game.js, card.js, counter.js, popup.js, timer.js', N'memory-game.css', N'[
  {
    "name": "cards",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "label": "Cards",
    "importance": "high",
    "entity": "card",
    "min": 2,
    "max": 100,
    "field": {
      "type": "group",
      "name": "card",
      "label": "Card",
      "importance": "high",
      "fields": [
        {
          "name": "image",
          "type": "image",
          "label": "Image",
          "importance": "high",
          "ratio": 1
        },
        {
          "name": "imageAlt",
          "type": "text",
          "label": "Alternative text for Image",
          "importance": "high",
          "description": "Describe what can be seen in the photo. The text is read by text-to-speech tools needed by visually impaired users."
        },
        {
          "name": "audio",
          "type": "audio",
          "importance": "high",
          "label": "Audio Track",
          "description": "An optional sound that plays when the card is turned.",
          "optional": true,
          "widgetExtensions": ["AudioRecorder"]
        },
        {
          "name": "match",
          "type": "image",
          "label": "Matching Image",
          "importance": "low",
          "optional": true,
          "description": "An optional image to match against instead of using two cards with the same image.",
          "ratio": 1
        },
        {
          "name": "matchAlt",
          "type": "text",
          "label": "Alternative text for Matching Image",
          "importance": "low",
          "optional": true,
          "description": "Describe what can be seen in the photo. The text is read by text-to-speech tools needed by visually impaired users."
        },
        {
          "name": "matchAudio",
          "type": "audio",
          "importance": "low",
          "label": "Matching Audio Track",
          "description": "An optional sound that plays when the second card is turned.",
          "optional": true,
          "widgetExtensions": ["AudioRecorder"]
        },
        {
          "name": "description",
          "type": "text",
          "label": "Description",
          "importance": "low",
          "maxLength": 150,
          "optional": true,
          "description": "An optional short text that will pop up once the two matching cards are found."
        }
      ]
    }
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the game behaves.",
    "optional": true,
    "fields": [
      {
        "name": "useGrid",
        "type": "boolean",
        "label": "Position the cards in a square",
        "description": "Will try to match the number of columns and rows when laying out the cards. Afterward, the cards will be scaled to fit the container.",
        "importance": "low",
        "default": true
      },
      {
        "name": "numCardsToUse",
        "type": "number",
        "label": "Number of cards to use",
        "description": "Setting this to a number greater than 2 will make the game pick random cards from the list of cards.",
        "importance": "low",
        "optional": true,
        "min": 2
      },
      {
        "name": "allowRetry",
        "type": "boolean",
        "label": "Add button for retrying when the game is over",
        "importance": "low",
        "default": true
      }
    ]
  },
  {
    "name": "lookNFeel",
    "type": "group",
    "label": "Look and feel",
    "importance": "low",
    "description": "Control the visuals of the game.",
    "optional": true,
    "fields": [
      {
        "name": "themeColor",
        "type": "text",
        "label": "Theme Color",
        "importance": "low",
        "description": "Choose a color to create a theme for your card game.",
        "optional": true,
        "default": "#909090",
        "widget": "colorSelector",
        "spectrum": {
          "showInput": true
        }
      },
      {
        "name": "cardBack",
        "type": "image",
        "label": "Card Back",
        "importance": "low",
        "optional": true,
        "description": "Use a custom back for your cards.",
        "ratio": 1
      }
    ]
  },
  {
    "label": "Localization",
    "importance": "low",
    "name": "l10n",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Card turns text",
        "importance": "low",
        "name": "cardTurns",
        "type": "text",
        "default": "Card turns"
      },
      {
        "label": "Time spent text",
        "importance": "low",
        "name": "timeSpent",
        "type": "text",
        "default": "Time spent"
      },
      {
        "label": "Feedback text",
        "importance": "low",
        "name": "feedback",
        "type": "text",
        "default": "Good work!"
      },
      {
        "label": "Try again button text",
        "importance": "low",
        "name": "tryAgain",
        "type": "text",
        "default": "Reset"
      },
      {
        "label": "Close button label",
        "importance": "low",
        "name": "closeLabel",
        "type": "text",
        "default": "Close"
      },
      {
        "label": "Game label",
        "importance": "low",
        "name": "label",
        "type": "text",
        "default": "Memory Game. Find the matching cards."
      },
      {
        "label": "Game finished label",
        "importance": "low",
        "name": "done",
        "type": "text",
        "default": "All of the cards have been found."
      },
      {
        "label": "Card indexing label",
        "importance": "low",
        "name": "cardPrefix",
        "type": "text",
        "default": "Card %num:"
      },
      {
        "label": "Card unturned label",
        "importance": "low",
        "name": "cardUnturned",
        "type": "text",
        "default": "Unturned."
      },
      {
        "label": "Card matched label",
        "importance": "low",
        "name": "cardMatched",
        "type": "text",
        "default": "Match found."
      }
    ]
  }
]
', N'', 1, null),
       (106, N'2021-04-25 12:30:40.000', N'H5P.Accordion', N'Accordion', 1, 0, 26, 1, 0, N'iframe', N'h5p-accordion.js',
        N'h5p-accordion.css', N'[
  {
    "name": "panels",
    "type": "list",
    "label": "Panels",
    "entity": "panel",
    "max": 100,
    "min": 1,
    "field": {
      "name": "content",
      "type": "group",
      "label": "Content",
      "importance": "high",
      "entity": "content",
      "fields": [
        {
          "name": "title",
          "type": "text",
          "label": "Title",
          "importance": "high"
        },
        {
          "name": "content",
          "type": "library",
          "label": "Content type",
          "importance": "medium",
          "entity": "content",
          "options": [
            "H5P.AdvancedText 1.1"
          ]
        }
      ]
    }
  },
  {
    "name": "hTag",
    "type": "select",
    "label": "H tags for labels (does not affect the size of the label)",
    "importance": "low",
    "description": "The h tag used on the labels. Normally H2 but if this belongs under an H2 heading use H3. Does not affect the size of the labels, only used for semantical purposes.",
    "options": [
      {
        "value": "h2",
        "label": "H2"
      },
      {
        "value": "h3",
        "label": "H3"
      },
      {
        "value": "h4",
        "label": "H4"
      }
    ],
    "default": "h2"
  }
]
', N'', 1, null),
       (107, N'2021-04-25 12:31:30.000', N'H5P.Agamotto', N'Agamotto', 1, 5, 2, 1, 0, N'iframe',
        N'dist/h5p-agamotto.js', N'dist/h5p-agamotto.css', N'[
  {
    "name": "title",
    "label": "Heading",
    "importance": "high",
    "type": "text",
    "optional": true,
    "placeholder": "Here you can add an optional heading.",
    "description": "The heading you''d like to show above the image"
  },
  {
    "name": "items",
    "type": "list",
    "label": "Items",
    "entity": "item",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "importance": "medium",
    "min": 2,
    "max": 50,
    "field": {
      "name": "item",
      "type": "group",
      "label": "Item",
      "importance": "low",
      "expanded": true,
      "fields": [
        {
          "name": "image",
          "type": "library",
          "label": "Image",
          "importance": "low",
          "options": [
            "H5P.Image 1.1"
          ],
          "optional": false
        },
        {
          "name": "labelText",
          "label": "Label",
          "importance": "low",
          "type": "text",
          "optional": true,
          "description": "Optional label for a tick. Please make sure it''s not too long, or it will be hidden."
        },
        {
          "name": "description",
          "type": "text",
          "importance": "low",
          "widget": "html",
          "label": "Description",
          "optional": true,
          "placeholder": "My image description ...",
          "description": "Optional description for the image",
          "enterMode": "p",
          "tags": [
            "strong",
            "em",
            "sub",
            "sup",
            "h3",
            "h4",
            "ul",
            "ol",
            "a",
            "pre",
            "code"
          ]
        }
      ]
    }
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the task behaves.",
    "fields": [
      {
        "name": "startImage",
        "importance": "medium",
        "type": "number",
        "label": "Start image",
        "description": "Set the number of the image to start with.",
        "default": 1,
        "min": 1,
        "max": 50
      },
      {
        "name": "snap",
        "importance": "medium",
        "type": "boolean",
        "label": "Snap slider",
        "description": "If activated, the slider will snap to an image''s position.",
        "default": true
      },
      {
        "name": "ticks",
        "importance": "medium",
        "type": "boolean",
        "label": "Display tick marks",
        "description": "If activated, the slider bar will display a tick mark for each image.",
        "default": false
      },
      {
        "name": "labels",
        "importance": "medium",
        "type": "boolean",
        "label": "Display labels",
        "description": "If activated, the slider bar will display a label instead of/in addition to tick marks.",
        "default": false
      },
      {
        "name": "transparencyReplacementColor",
        "importance": "medium",
        "type": "text",
        "label": "Transparency Replacement Color",
        "description": "Set the color that will replace transparent areas of the images.",
        "optional": true,
        "default": "#000000",
        "widget": "colorSelector",
        "spectrum": {
          "showInput": true
        }
      }
    ]
  },
  {
    "name": "a11y",
    "type": "group",
    "common": true,
    "label": "Readspeaker",
    "importance": "low",
    "fields": [
      {
        "name": "image",
        "type": "text",
        "label": "Image",
        "importance": "low",
        "default": "Image"
      },
      {
        "name": "imageSlider",
        "type": "text",
        "label": "Image Slider",
        "importance": "low",
        "default": "Image Slider"
      }
    ]
  }
]
', N'', 1, null),
       (108, N'2021-04-25 12:31:31.000', N'H5P.Column', N'Column', 1, 13, 1, 1, 0, N'iframe', N'scripts/h5p-column.js',
        N'styles/h5p-column.css', N'[
  {
    "name": "content",
    "label": "List of Column Content",
    "importance": "high",
    "type": "list",
    "min": 1,
    "entity": "content",
    "field": {
      "name": "content",
      "type": "group",
      "fields": [
        {
          "name": "content",
          "type": "library",
          "importance": "high",
          "label": "Content",
          "options": [
            "H5P.Accordion 1.0",
            "H5P.Agamotto 1.5",
            "H5P.Audio 1.4",
            "H5P.AudioRecorder 1.0",
            "H5P.Blanks 1.12",
            "H5P.Chart 1.2",
            "H5P.Collage 0.3",
            "H5P.CoursePresentation 1.22",
            "H5P.Dialogcards 1.8",
            "H5P.DocumentationTool 1.8",
            "H5P.DragQuestion 1.13",
            "H5P.DragText 1.8",
            "H5P.Essay 1.2",
            "H5P.GuessTheAnswer 1.4",
            "H5P.Table 1.1",
            "H5P.AdvancedText 1.1",
            "H5P.IFrameEmbed 1.0",
            "H5P.Image 1.1",
            "H5P.ImageHotspots 1.8",
            "H5P.ImageHotspotQuestion 1.8",
            "H5P.ImageSlider 1.1",
            "H5P.InteractiveVideo 1.22",
            "H5P.Link 1.3",
            "H5P.MarkTheWords 1.9",
            "H5P.MemoryGame 1.3",
            "H5P.MultiChoice 1.14",
            "H5P.Questionnaire 1.3",
            "H5P.QuestionSet 1.17",
            "H5P.SingleChoiceSet 1.11",
            "H5P.Summary 1.10",
            "H5P.Timeline 1.1",
            "H5P.TrueFalse 1.6",
            "H5P.TwitterUserFeed 1.0",
            "H5P.Video 1.5"
          ]
        },
        {
          "name": "useSeparator",
          "type": "select",
          "importance": "low",
          "label": "Separate content with a horizontal ruler",
          "default": "auto",
          "options": [
            {
              "value": "auto",
              "label": "Automatic (default)"
            },
            {
              "value": "disabled",
              "label": "Never use ruler above"
            },
            {
              "value": "enabled",
              "label": "Always use ruler above"
            }
          ]
        }
      ]
    }
  }
]
', N'', 1, null),
       (109, N'2021-04-25 12:31:31.000', N'H5P.IFrameEmbed', N'Iframe Embedder', 1, 0, 26, 1, 1, N'',
        N'iframe-embed.js', N'', N'[
  {
    "label": "Width",
    "importance": "high",
    "name": "width",
    "type": "text",
    "description": "Width of iFrame in CSS compliant format. Default: \"500px\""
  },
  {
    "label": "Minimum width",
    "importance": "high",
    "name": "minWidth",
    "type": "text",
    "description": "Minimum width of iFrame in CSS compliant format. Default: \"300px\""
  },
  {
    "label": "Height",
    "name": "height",
    "type": "text",
    "description": "Height of iFrame in CSS compliant format. Default: \"500px\""
  },
  {
    "label": "Source",
    "importance": "high",
    "name": "source",
    "type": "text",
    "description": "URI to external document, or path to document found inside H5P (under /content)"
  },
  {
    "name": "resizeSupported",
    "type": "boolean",
    "label": "Resize supported",
    "importance": "medium",
    "description": "If enabled, fullscreen button will be displayed, and H5P will be resized to fit its surroundings",
    "default": true
  }
]
', N'', 1, null),
       (110, N'2021-04-25 12:31:31.000', N'H5P.ImageHotspots', N'Image Hotspots', 1, 8, 3, 1, 1, N'iframe',
        N'scripts/image-hotspots.js, scripts/hotspot.js, scripts/popup.js', N'styles/image-hotspots.css', N'[
  {
    "label": "Background image",
    "importance": "high",
    "name": "image",
    "type": "image",
    "description": "Image shown on background."
  },
  {
    "name": "backgroundImageAltText",
    "type": "text",
    "label": "Alternative text for background image",
    "description": "If the browser can''t load the image this text will be displayed instead. Also used by assistive technologies.",
    "optional": true
  },
  {
    "name": "iconType",
    "type": "select",
    "label": "Hotspot Icon",
    "options": [
      {
        "value": "icon",
        "label": "Predefined icon"
      },
      {
        "value": "image",
        "label": "Uploaded image"
      }
    ],
    "default": "icon"
  },
  {
    "name": "icon",
    "type": "select",
    "label": "Predefined icon",
    "importance": "medium",
    "description": "Using a predefined icon for the hotspot.",
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "iconType",
          "equals": [
            "icon"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "plus",
        "label": "Plus"
      },
      {
        "value": "minus",
        "label": "Minus"
      },
      {
        "value": "times",
        "label": "Times"
      },
      {
        "value": "check",
        "label": "Check"
      },
      {
        "value": "question",
        "label": "Question"
      },
      {
        "value": "info",
        "label": "Info"
      },
      {
        "value": "exclamation",
        "label": "Exclamation"
      }
    ],
    "default": "plus"
  },
  {
    "name": "iconImage",
    "type": "image",
    "label": "Uploaded image",
    "optional": false,
    "description": "Use your own image for the hotspot icon.<br>75px by 75px is recommended for your image.",
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "iconType",
          "equals": [
            "image"
          ]
        }
      ]
    }
  },
  {
    "name": "color",
    "type": "text",
    "label": "Hotspot color",
    "importance": "medium",
    "description": "The color of the hotspots",
    "optional": true,
    "default": "#981d99",
    "widget": "showWhen",
    "spectrum": {
      "showInput": true
    },
    "showWhen": {
      "widget": "colorSelector",
      "rules": [
        {
          "field": "iconType",
          "equals": [
            "icon"
          ]
        }
      ]
    }
  },
  {
    "name": "hotspots",
    "type": "list",
    "entity": "hotspot",
    "label": "Hotspots",
    "importance": "high",
    "min": 1,
    "defaultNum": 1,
    "field": {
      "name": "hotspot",
      "type": "group",
      "label": "Hotspot",
      "importance": "high",
      "fields": [
        {
          "name": "position",
          "type": "group",
          "widget": "imageCoordinateSelector",
          "imageFieldPath": "../../image",
          "label": "Hotspot position",
          "importance": "high",
          "description": "Click on the thumbnail image to place the hotspot",
          "fields": [
            {
              "name": "x",
              "type": "number"
            },
            {
              "name": "y",
              "type": "number"
            },
            {
              "name": "legacyPositioning",
              "type": "boolean"
            }
          ]
        },
        {
          "name": "alwaysFullscreen",
          "type": "boolean",
          "label": "Cover entire background image",
          "importance": "low",
          "description": "When the user clicks the hotspot the popup will cover the entire background image"
        },
        {
          "name": "header",
          "type": "text",
          "label": "Header",
          "importance": "low",
          "description": "Optional header for the popup",
          "optional": true
        },
        {
          "name": "content",
          "type": "list",
          "label": "Popup content",
          "importance": "medium",
          "field": {
            "name": "action",
            "type": "library",
            "label": "Content Item",
            "options": [
              "H5P.Text 1.1",
              "H5P.Video 1.5",
              "H5P.Image 1.1"
            ]
          }
        }
      ]
    }
  },
  {
    "name": "hotspotNumberLabel",
    "type": "text",
    "label": "Hotspot label for assistive technologies",
    "default": "Hotspot #num",
    "description": "Will help announce what hotspot element has been navigated to if there is no header specified for a hotspot. #num can be used to replace the hotspot number.",
    "common": true
  },
  {
    "name": "closeButtonLabel",
    "type": "text",
    "label": "Close button label for assistive technologies",
    "default": "Close",
    "common": true
  }
]
', N'', 1, null),
       (111, N'2021-04-25 12:31:31.000', N'H5P.Timeline', N'Timeline', 1, 1, 21, 1, 1, N'iframe', N'timeline.js',
        N'timeline.css', N'[
  {
    "name": "timeline",
    "label": "Timeline",
    "importance": "high",
    "type": "group",
    "expanded": true,
    "fields": [
      {
        "name": "headline",
        "type": "text",
        "label": "Headline",
        "importance": "high",
        "description": "Main timeline heading goes here (first page)"
      },
      {
        "name": "text",
        "type": "text",
        "label": "Body Text",
        "importance": "medium",
        "widget": "html",
        "description": "The main timeline body goes here (first page).",
        "optional": true,
        "tags": [
          "strong",
          "em",
          "del",
          "a",
          "ul",
          "ol",
          "hr",
          "code"
        ]
      },
      {
        "name": "defaultZoomLevel",
        "type": "text",
        "label": "Default zoom level",
        "importance": "low",
        "default": "0",
        "optional": true,
        "description": "This will tweak the default zoom level. Equivilent to pressing the zoom in or zoom out button the specified number of times. Negative numbers zoom out. default is 0"
      },
      {
        "name": "backgroundImage",
        "type": "image",
        "label": "Background image",
        "importance": "low",
        "optional": true,
        "description": "An image to display as background."
      },
      {
        "name": "height",
        "type": "number",
        "label": "Height",
        "importance": "low",
        "description": "The height in pixels",
        "default": 600
      },
      {
        "name": "asset",
        "type": "group",
        "label": "Asset",
        "importance": "low",
        "description": "Here you can add an asset to your timeline \"front page\"",
        "optional": true,
        "fields": [
          {
            "name": "media",
            "type": "text",
            "label": "Media",
            "importance": "low",
            "description": "Link to media URL (Twitter, YouTube, Flickr, Vimeo, Google Maps and SoundCloud are currently supported)",
            "optional": true
          },
          {
            "name": "credit",
            "type": "text",
            "label": "Credits",
            "importance": "low",
            "description": "Credits to the media",
            "optional": true
          },
          {
            "name": "caption",
            "type": "text",
            "label": "Caption",
            "importance": "low",
            "description": "Caption description goes here",
            "optional": true
          }
        ]
      },
      {
        "name": "date",
        "type": "list",
        "label": "Dates",
        "importance": "medium",
        "min": 1,
        "description": "Add some dates to your timeline!",
        "field": {
          "name": "adate",
          "type": "group",
          "label": "Date",
          "importance": "medium",
          "description": "Date",
          "fields": [
            {
              "name": "startDate",
              "type": "text",
              "label": "Start date",
              "importance": "medium",
              "description": "YYYY,MM,DD (Minimum YYYY required)",
              "regexp": {
                "pattern": "^-?\\d{1,}(,(1[012]|[0]?[1-9])(,([12][0-9]|3[01]|[0]?[1-9]))?)?$"
              }
            },
            {
              "name": "endDate",
              "type": "text",
              "label": "End date",
              "importance": "medium",
              "description": "YYYY,MM,DD (Minimum YYYY required)",
              "optional": true,
              "regexp": {
                "pattern": "^-?\\d{1,}(,(1[012]|[0]?[1-9])(,([12][0-9]|3[01]|[0]?[1-9]))?)?$"
              }
            },
            {
              "name": "headline",
              "type": "text",
              "label": "Headline",
              "importance": "medium",
              "description": "Headline for the date entry"
            },
            {
              "name": "text",
              "type": "text",
              "label": "Body text",
              "importance": "medium",
              "widget": "html",
              "optional": true,
              "description": "Body for the date entry",
              "tags": [
                "strong",
                "em",
                "del",
                "a",
                "ul",
                "ol",
                "h2",
                "h3",
                "hr",
                "pre",
                "code"
              ]
            },
            {
              "name": "tag",
              "type": "text",
              "label": "Tags",
              "importance": "medium",
              "description": "Enter Tags (categories)",
              "optional": true
            },
            {
              "name": "asset",
              "type": "group",
              "label": "Asset",
              "importance": "low",
              "description": "",
              "optional": true,
              "fields": [
                {
                  "name": "media",
                  "type": "text",
                  "label": "Media",
                  "importance": "low",
                  "description": "URL to the media (Twitter, YouTube, Flickr, Vimeo, Wikipedia, Google Maps and SoundCloud are currently supported).",
                  "optional": true
                },
                {
                  "name": "thumbnail",
                  "type": "image",
                  "label": "Thumbnail",
                  "importance": "low",
                  "description": "Add a thumbnail if needed, 32x32",
                  "optional": true
                },
                {
                  "name": "credit",
                  "type": "text",
                  "label": "Credit",
                  "importance": "low",
                  "description": "Credits to the media",
                  "optional": true
                },
                {
                  "name": "caption",
                  "type": "text",
                  "label": "Caption",
                  "importance": "low",
                  "description": "Caption text",
                  "optional": true
                }
              ]
            }
          ]
        }
      },
      {
        "name": "era",
        "type": "list",
        "label": "Eras",
        "importance": "medium",
        "description": "Add an era to your timeline",
        "min": 0,
        "optional": true,
        "field": {
          "name": "anera",
          "type": "group",
          "label": "Era",
          "importance": "medium",
          "description": "",
          "fields": [
            {
              "name": "startDate",
              "type": "text",
              "label": "Start date",
              "importance": "medium",
              "description": "YYYY,MM,DD (Minimum YYYY required)",
              "regexp": {
                "pattern": "^-?\\d{1,}(,(1[012]|[0]?[1-9])(,([12][0-9]|3[01]|[0]?[1-9]))?)?$"
              }
            },
            {
              "name": "endDate",
              "type": "text",
              "label": "End date",
              "importance": "medium",
              "description": "YYYY,MM,DD (Minimum YYYY required)",
              "optional": true,
              "regexp": {
                "pattern": "^-?\\d{1,}(,(1[012]|[0]?[1-9])(,([12][0-9]|3[01]|[0]?[1-9]))?)?$"
              }
            },
            {
              "name": "headline",
              "type": "text",
              "label": "Headline",
              "importance": "medium",
              "description": "Era headline"
            },
            {
              "name": "text",
              "type": "text",
              "label": "Text",
              "importance": "medium",
              "widget": "html",
              "optional": true,
              "description": "Era body",
              "tags": [
                "strong",
                "em",
                "del",
                "a",
                "ul",
                "ol",
                "hr",
                "code"
              ]
            },
            {
              "name": "tag",
              "type": "text",
              "label": "Tag",
              "importance": "medium",
              "description": "Era tags (categories)",
              "optional": true
            }
          ]
        }
      },
      {
        "name": "language",
        "type": "select",
        "label": "Language",
        "importance": "medium",
        "optional": true,
        "description": "The language of the user interface",
        "options": [
          {
            "value": "af",
            "label": "Afrikaans"
          },
          {
            "value": "ar",
            "label": "Arabic"
          },
          {
            "value": "hy",
            "label": "Armenian"
          },
          {
            "value": "eu",
            "label": "Basque"
          },
          {
            "value": "bg",
            "label": "Bulgarian"
          },
          {
            "value": "ca",
            "label": "Catalan"
          },
          {
            "value": "zh-cn",
            "label": "Chinese"
          },
          {
            "value": "hr",
            "label": "Croatian / Hrvatski"
          },
          {
            "value": "cz",
            "label": "Czech"
          },
          {
            "value": "da",
            "label": "Danish"
          },
          {
            "value": "nl",
            "label": "Dutch"
          },
          {
            "value": "en",
            "label": "English"
          },
          {
            "value": "en-24hr",
            "label": "English (24-hour time)"
          },
          {
            "value": "eo",
            "label": "Esperanto"
          },
          {
            "value": "et",
            "label": "Estonian"
          },
          {
            "value": "fo",
            "label": "Faroese"
          },
          {
            "value": "fa",
            "label": "Farsi"
          },
          {
            "value": "fi",
            "label": "Finnish"
          },
          {
            "value": "fr",
            "label": "French"
          },
          {
            "value": "gl",
            "label": "Galician"
          },
          {
            "value": "ka",
            "label": "Georgian"
          },
          {
            "value": "de",
            "label": "German / Deutsch"
          },
          {
            "value": "el",
            "label": "Greek"
          },
          {
            "value": "he",
            "label": "Hebrew"
          },
          {
            "value": "hu",
            "label": "Hungarian"
          },
          {
            "value": "is",
            "label": "Icelandic"
          },
          {
            "value": "id",
            "label": "Indonesian"
          },
          {
            "value": "it",
            "label": "Italian"
          },
          {
            "value": "ja",
            "label": "Japanese"
          },
          {
            "value": "ko",
            "label": "Korean"
          },
          {
            "value": "lv",
            "label": "Latvian"
          },
          {
            "value": "lt",
            "label": "Lithuanian"
          },
          {
            "value": "lb",
            "label": "Luxembourgish"
          },
          {
            "value": "ms",
            "label": "Malay"
          },
          {
            "value": "ne",
            "label": "Nepali"
          },
          {
            "value": "no",
            "label": "Norwegian"
          },
          {
            "value": "pl",
            "label": "Polish"
          },
          {
            "value": "pt",
            "label": "Portuguese"
          },
          {
            "value": "pt-br",
            "label": "Portuguese (Brazilian)"
          },
          {
            "value": "rm",
            "label": "Romansh"
          },
          {
            "value": "ru",
            "label": "Russian"
          },
          {
            "value": "sr-cy",
            "label": "Serbian - Cyrillic"
          },
          {
            "value": "sr",
            "label": "Serbian - Latin"
          },
          {
            "value": "si",
            "label": "Sinhalese"
          },
          {
            "value": "sk",
            "label": "Slovak"
          },
          {
            "value": "sl",
            "label": "Slovenian"
          },
          {
            "value": "es",
            "label": "Spanish"
          },
          {
            "value": "sv",
            "label": "Swedish"
          },
          {
            "value": "tl",
            "label": "Tagalog"
          },
          {
            "value": "ta",
            "label": "Tamil"
          },
          {
            "value": "zh-tw",
            "label": "Taiwanese"
          },
          {
            "value": "te",
            "label": "Telugu"
          },
          {
            "value": "tr",
            "label": "Turkish"
          },
          {
            "value": "uk",
            "label": "Ukrainian"
          }
        ],
        "default": "en"
      }
    ]
  }
]
', N'', 1, null),
       (112, N'2021-04-25 12:31:31.000', N'H5PEditor.ImageCoordinateSelector', N'H5PEditor.ImageCoordinateSelector', 1,
        2, 5, 0, 0, N'', N'scripts/image-coordinate-selector.js', N'styles/image-coordinate-selector.css', N'', N'', 0,
        null),
       (113, N'2021-04-25 12:31:31.000', N'TimelineJS', N'TimelineJS', 1, 1, 1, 0, 0, N'',
        N'js/storyjs-embed.js, timeline.js', N'', N'', N'', 0, null),
       (114, N'2021-04-25 12:32:32.000', N'H5P.ImageHotspots', N'Image Hotspots', 1, 9, 4, 1, 1, N'iframe',
        N'scripts/image-hotspots.js, scripts/hotspot.js, scripts/popup.js', N'styles/image-hotspots.css', N'[
  {
    "label": "Background image",
    "importance": "high",
    "name": "image",
    "type": "image",
    "description": "Image shown on background."
  },
  {
    "name": "backgroundImageAltText",
    "type": "text",
    "label": "Alternative text for background image",
    "description": "If the browser can''t load the image this text will be displayed instead. Also used by assistive technologies.",
    "optional": true
  },
  {
    "name": "iconType",
    "type": "select",
    "label": "Hotspot Icon",
    "options": [
      {
        "value": "icon",
        "label": "Predefined icon"
      },
      {
        "value": "image",
        "label": "Uploaded image"
      }
    ],
    "default": "icon"
  },
  {
    "name": "icon",
    "type": "select",
    "label": "Predefined icon",
    "importance": "medium",
    "description": "Using a predefined icon for the hotspot.",
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "iconType",
          "equals": [
            "icon"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "plus",
        "label": "Plus"
      },
      {
        "value": "minus",
        "label": "Minus"
      },
      {
        "value": "times",
        "label": "Times"
      },
      {
        "value": "check",
        "label": "Check"
      },
      {
        "value": "question",
        "label": "Question"
      },
      {
        "value": "info",
        "label": "Info"
      },
      {
        "value": "exclamation",
        "label": "Exclamation"
      }
    ],
    "default": "plus"
  },
  {
    "name": "iconImage",
    "type": "image",
    "label": "Uploaded image",
    "optional": false,
    "description": "Use your own image for the hotspot icon.<br>75px by 75px is recommended for your image.",
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "iconType",
          "equals": [
            "image"
          ]
        }
      ]
    }
  },
  {
    "name": "color",
    "type": "text",
    "label": "Hotspot color",
    "importance": "medium",
    "description": "The color of the hotspots",
    "optional": true,
    "default": "#981d99",
    "widget": "showWhen",
    "spectrum": {
      "showInput": true
    },
    "showWhen": {
      "widget": "colorSelector",
      "rules": [
        {
          "field": "iconType",
          "equals": [
            "icon"
          ]
        }
      ]
    }
  },
  {
    "name": "hotspots",
    "type": "list",
    "entity": "hotspot",
    "label": "Hotspots",
    "importance": "high",
    "min": 1,
    "defaultNum": 1,
    "field": {
      "name": "hotspot",
      "type": "group",
      "label": "Hotspot",
      "importance": "high",
      "fields": [
        {
          "name": "position",
          "type": "group",
          "widget": "imageCoordinateSelector",
          "imageFieldPath": "../../image",
          "label": "Hotspot position",
          "importance": "high",
          "description": "Click on the thumbnail image to place the hotspot",
          "fields": [
            {
              "name": "x",
              "type": "number"
            },
            {
              "name": "y",
              "type": "number"
            },
            {
              "name": "legacyPositioning",
              "type": "boolean"
            }
          ]
        },
        {
          "name": "alwaysFullscreen",
          "type": "boolean",
          "label": "Cover entire background image",
          "importance": "low",
          "description": "When the user clicks the hotspot the popup will cover the entire background image"
        },
        {
          "name": "header",
          "type": "text",
          "label": "Header",
          "importance": "low",
          "description": "Optional header for the popup",
          "optional": true
        },
        {
          "name": "content",
          "type": "list",
          "label": "Popup content",
          "importance": "medium",
          "field": {
            "name": "action",
            "type": "library",
            "label": "Content Item",
            "options": [
              "H5P.Text 1.1",
              "H5P.Video 1.5",
              "H5P.Image 1.1"
            ]
          }
        }
      ]
    }
  },
  {
    "name": "hotspotNumberLabel",
    "type": "text",
    "label": "Hotspot label for assistive technologies",
    "default": "Hotspot #num",
    "description": "Will help announce what hotspot element has been navigated to if there is no header specified for a hotspot. #num can be used to replace the hotspot number.",
    "common": true
  },
  {
    "name": "closeButtonLabel",
    "type": "text",
    "label": "Close button label for assistive technologies",
    "default": "Close",
    "common": true
  }
]
', N'', 1, null),
       (115, N'2021-04-25 12:32:32.000', N'H5PEditor.ColorSelector', N'H5PEditor.ColorSelector', 1, 3, 0, 0, 0, N'',
        N'scripts/spectrum.js, scripts/color-selector.js', N'styles/spectrum.css, styles/color-selector.css', N'', N'',
        0, null),
       (116, N'2021-04-25 12:32:52.000', N'H5P.Flashcards', N'Flashcards', 1, 5, 19, 1, 0, N'iframe',
        N'js/xapi.js, js/flashcards.js', N'css/flashcards.css', N'[
  {
    "name": "description",
    "type": "text",
    "label": "Task description",
    "importance": "high"
  },
  {
    "name": "cards",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "label": "Cards",
    "entity": "card",
    "importance": "high",
    "min": 1,
    "defaultNum": 1,
    "field": {
      "name": "card",
      "type": "group",
      "label": "Card",
      "importance": "high",
      "fields": [
        {
          "name": "text",
          "type": "text",
          "label": "Question",
          "importance": "high",
          "optional": true,
          "description": "Optional textual question for the card. (The card may use just an image, just a text or both)"
        },
        {
          "name": "answer",
          "type": "text",
          "label": "Answer",
          "importance": "high",
          "optional": true,
          "description": "Optional answer(solution) for the card."
        },
        {
          "name": "image",
          "type": "image",
          "label": "Image",
          "importance": "high",
          "optional": true,
          "description": "Optional image for the card. (The card may use just an image, just a text or both)"
        },
        {
          "name": "imageAltText",
          "type": "text",
          "label": "Alternative text for image",
          "importance": "high",
          "optional": true
        },
        {
          "name": "tip",
          "type": "group",
          "label": "Tip",
          "importance": "low",
          "optional": true,
          "fields": [
            {
              "name": "tip",
              "label": "Tip text",
              "importance": "low",
              "type": "text",
              "widget": "html",
              "tags": [
                "p",
                "br",
                "strong",
                "em",
                "code"
              ],
              "optional": true
            }
          ]
        }
      ]
    }
  },
  {
    "label": "Progress text",
    "name": "progressText",
    "type": "text",
    "default": "Card @card of @total",
    "importance": "low",
    "description": "Progress text, variables available: @card and @total. Example: ''Card @card of @total''",
    "common": true
  },
  {
    "label": "Text for the next button",
    "name": "next",
    "type": "text",
    "default": "Next",
    "importance": "low",
    "common": true
  },
  {
    "label": "Text for the previous button",
    "name": "previous",
    "type": "text",
    "default": "Previous",
    "importance": "low",
    "common": true
  },
  {
    "label": "Text for the check answers button",
    "name": "checkAnswerText",
    "type": "text",
    "default": "Check",
    "importance": "low",
    "common": true
  },
  {
    "label": "Require user input before the solution can be viewed",
    "name": "showSolutionsRequiresInput",
    "type": "boolean",
    "default": true,
    "importance": "low",
    "optional": true
  },
  {
    "label": "Text for the answer input field",
    "name": "defaultAnswerText",
    "type": "text",
    "default": "Your answer",
    "importance": "low",
    "common": true
  },
  {
    "label": "Text for correct answer",
    "name": "correctAnswerText",
    "type": "text",
    "default": "Correct",
    "importance": "low",
    "common": true
  },
  {
    "label": "Text for incorrect answer",
    "name": "incorrectAnswerText",
    "type": "text",
    "default": "Incorrect",
    "importance": "low",
    "common": true
  },
  {
    "label": "Show solution text",
    "name": "showSolutionText",
    "type": "text",
    "default": "Correct answer",
    "importance": "low",
    "common": true
  },
  {
    "label": "Text for results title",
    "name": "results",
    "type": "text",
    "default": "Results",
    "importance": "low",
    "common": true
  },
  {
    "label": "Text for number of correct",
    "name": "ofCorrect",
    "type": "text",
    "default": "@score of @total correct",
    "importance": "low",
    "description": "Result text, variables available: @score and @total. Example: ''@score of @total correct''",
    "common": true
  },
  {
    "label": "Text for show results",
    "name": "showResults",
    "type": "text",
    "default": "Show results",
    "importance": "low",
    "common": true
  },
  {
    "label": "Text for short answer label",
    "name": "answerShortText",
    "type": "text",
    "default": "A:",
    "importance": "low",
    "common": true
  },
  {
    "label": "Text for \"retry\" button",
    "name": "retry",
    "type": "text",
    "default": "Retry",
    "importance": "low",
    "common": true
  },
  {
    "label": "Case sensitive",
    "name": "caseSensitive",
    "type": "boolean",
    "default": false,
    "description": "Makes sure the user input has to be exactly the same as the answer."
  },
  {
    "label": "Incorrect text for assistive technologies",
    "name": "cardAnnouncement",
    "type": "text",
    "default": "Incorrect answer. Correct answer was @answer",
    "description": "Text that will be announced to assistive technologies. Use @answer as variable.",
    "common": true
  },
  {
    "label": "Card change for assistive technologies",
    "name": "pageAnnouncement",
    "type": "text",
    "default": "Page @current of @total",
    "description": "Text that will be announced to assistive technologies when navigating between cards. Use @current and @total as variables.",
    "common": true
  }
]
', N'', 1, null),
       (117, N'2021-04-25 12:33:06.000', N'H5P.ArithmeticQuiz', N'Arithmetic Quiz', 1, 1, 14, 1, 0, N'iframe',
        N'js/algebra.min.js, js/arithmetic-quiz.js, js/sound-effects.js, js/countdown-widget.js, js/timer-widget.js, js/intro-page.js, js/qe-generator.js, js/qa-generator.js, js/game-page.js, js/result-page.js',
        N'css/arithmetic-quiz.css', N'[
  {
    "name": "intro",
    "type": "text",
    "label": "Intro",
    "importance": "high",
    "description": "The intro text (maximum 100 characters)",
    "maxLength": 100,
    "optional": true
  },
  {
    "name": "quizType",
    "type": "select",
    "label": "Quiz type",
    "importance": "high",
    "options": [
      {
        "value": "arithmetic",
        "label": "Arithmetic Operations Quiz"
      },
      {
        "value": "linearEquation",
        "label": "Linear Equations Quiz"
      }
    ],
    "default": "arithmetic"
  },
  {
    "name": "arithmeticType",
    "type": "select",
    "label": "Arithmetic type",
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "quizType",
          "equals": [
            "arithmetic"
          ]
        }
      ]
    },
    "importance": "high",
    "options": [
      {
        "value": "addition",
        "label": "Addition"
      },
      {
        "value": "subtraction",
        "label": "Subtraction"
      },
      {
        "value": "multiplication",
        "label": "Multiplication"
      },
      {
        "value": "division",
        "label": "Division"
      }
    ],
    "default": "addition"
  },
  {
    "name": "equationType",
    "type": "select",
    "label": "Equation type",
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "quizType",
          "equals": [
            "linearEquation"
          ]
        }
      ]
    },
    "importance": "high",
    "options": [
      {
        "value": "basic",
        "label": "Basic [ 3x = 12 ]"
      },
      {
        "value": "intermediate",
        "label": "Intermediate [ 4x - 3 = 13 ]"
      },
      {
        "value": "advanced",
        "label": "Advanced [ 5x + 3 = 3x + 15 ]"
      }
    ],
    "default": "intermediate"
  },
  {
    "name": "useFractions",
    "type": "boolean",
    "label": "Enable fractions",
    "description": "Enable to allow fractions in equations.",
    "default": false,
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "quizType",
          "equals": [
            "linearEquation"
          ]
        }
      ]
    }
  },
  {
    "name": "maxQuestions",
    "type": "number",
    "label": "Max number of questions",
    "importance": "medium",
    "default": 20,
    "min": 2,
    "max": 100
  },
  {
    "name": "UI",
    "type": "group",
    "label": "User interface translations",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "name": "score",
        "type": "text",
        "label": "Scoring during quiz",
        "importance": "low",
        "default": "Score:"
      },
      {
        "name": "time",
        "type": "text",
        "label": "Time",
        "importance": "low",
        "default": "Time: @time"
      },
      {
        "name": "resultPageHeader",
        "type": "text",
        "label": "Result page header",
        "importance": "low",
        "default": "Finished!"
      },
      {
        "name": "go",
        "type": "text",
        "label": "Go label",
        "importance": "low",
        "default": "GO!"
      },
      {
        "name": "startButton",
        "type": "text",
        "label": "Start button label",
        "importance": "low",
        "default": "Start"
      },
      {
        "name": "retryButton",
        "type": "text",
        "label": "Retry button label",
        "importance": "low",
        "default": "Retry"
      },
      {
        "name": "correctText",
        "type": "text",
        "label": "Readspeaker text for correct answer",
        "importance": "low",
        "default": "Correct"
      },
      {
        "name": "incorrectText",
        "type": "text",
        "label": "Readspeaker text for incorrect answer",
        "importance": "low",
        "default": "Incorrect. Correct answer was :num"
      },
      {
        "name": "durationLabel",
        "type": "text",
        "label": "Readspeaker label for the timer",
        "importance": "low",
        "default": "Duration in hours, minutes and seconds."
      },
      {
        "name": "humanizedQuestion",
        "type": "text",
        "label": "Readspeaker text for question",
        "importance": "low",
        "default": "What does :arithmetic equal?"
      },
      {
        "name": "humanizedEquation",
        "type": "text",
        "label": "Readspeaker text for equation question",
        "importance": "low",
        "default": "For the equation :equation, what does :item equal?"
      },
      {
        "name": "humanizedVariable",
        "type": "text",
        "label": "Readspeaker text for equation variable",
        "importance": "low",
        "default": "What does :item equal?"
      },
      {
        "name": "plusOperator",
        "type": "text",
        "label": "Plus operator text",
        "importance": "low",
        "default": "plus"
      },
      {
        "name": "subtractionOperator",
        "type": "text",
        "label": "Subtraction operator text",
        "importance": "low",
        "default": "minus"
      },
      {
        "name": "multiplicationOperator",
        "type": "text",
        "label": "Multiplication operator text",
        "importance": "low",
        "default": "times"
      },
      {
        "name": "divisionOperator",
        "type": "text",
        "label": "Division operator text",
        "importance": "low",
        "default": "delt på"
      },
      {
        "name": "equalitySign",
        "type": "text",
        "label": "Equality sign text",
        "importance": "low",
        "default": "equals"
      },
      {
        "name": "slideOfTotal",
        "type": "text",
        "label": "Slide number text",
        "importance": "low",
        "description": "Announces current slide and total number of slides, variables are :num and :total",
        "default": "Slide :num of :total"
      }
    ]
  }
]
', N'', 1, null),
       (118, N'2021-04-25 12:33:06.000', N'Odometer', N'Odometer', 1, 0, 3, 0, 0, N'', N'odometer.min.js',
        N'themes/odometer-theme-default.css', N'', N'', 0, null),
       (119, N'2021-04-25 12:33:28.000', N'H5P.SpeakTheWords', N'Speak the Words', 1, 3, 11, 1, 0, N'iframe',
        N'dist/dist.js', N'', N'[
  {
    "name": "question",
    "label": "Describe task",
    "type": "text",
    "placeholder": "How do you say ''Yes'' in Spanish?"
  },
  {
    "name": "acceptedAnswers",
    "label": "Accepted answers",
    "type": "list",
    "min": 1,
    "field": {
      "name": "acceptedAnswer",
      "label": "Accepted answer",
      "type": "text"
    }
  },
  {
    "name": "incorrectAnswerText",
    "label": "Incorrect answer text",
    "type": "text",
    "default": "Incorrect answer"
  },
  {
    "name": "correctAnswerText",
    "label": "Correct answer text",
    "type": "text",
    "default": "Correct answer"
  },
  {
    "name": "inputLanguage",
    "label": "Language of speech input",
    "type": "select",
    "options": [
      {
        "label": "Afrikaans",
        "value": "af-ZA"
      },
      {
        "label": "Amharic",
        "value": "am-ET"
      },
      {
        "label": "Arabic (Algeria)",
        "value": "ar-DZ"
      },
      {
        "label": "Arabic (Bahrain)",
        "value": "ar-BH"
      },
      {
        "label": "Arabic (Egypt)",
        "value": "ar-EG"
      },
      {
        "label": "Arabic (Iraq)",
        "value": "ar-IQ"
      },
      {
        "label": "Arabic (Jordan)",
        "value": "ar-JO"
      },
      {
        "label": "Arabic (Kuwait)",
        "value": "ar-KW"
      },
      {
        "label": "Arabic (Lebanon)",
        "value": "ar-LB"
      },
      {
        "label": "Arabic (Lybia)",
        "value": "ar-LY"
      },
      {
        "label": "Arabic (Morocco)",
        "value": "ar-MA"
      },
      {
        "label": "Arabic (Oman)",
        "value": "ar-OM"
      },
      {
        "label": "Arabic (Qatar)",
        "value": "ar-QA"
      },
      {
        "label": "Arabic (Saudi Arabia)",
        "value": "ar-SA"
      },
      {
        "label": "Arabic (Tunisia)",
        "value": "ar-TN"
      },
      {
        "label": "Arabic (UAE)",
        "value": "ar-AE"
      },
      {
        "label": "Arabic (Yemen)",
        "value": "ar-YE"
      },
      {
        "label": "Armenian",
        "value": "hy-AM"
      },
      {
        "label": "Azerbaijani",
        "value": "az-AZ"
      },
      {
        "label": "Basque",
        "value": "eu-ES"
      },
      {
        "label": "Bengali (Bangladesh)",
        "value": "bn-BD"
      },
      {
        "label": "Bengali (India)",
        "value": "bn-IN"
      },
      {
        "label": "Bulgarian",
        "value": "bg-BG"
      },
      {
        "label": "Catalan",
        "value": "ca-ES"
      },
      {
        "label": "Central Khmer",
        "value": "km-KH"
      },
      {
        "label": "Chinese, Mandarin (Traditional, Taiwan)",
        "value": "cmn-Hant-TW"
      },
      {
        "label": "Chinese, Cantonese (Traditional, Hong Kong)",
        "value": "yue-Hant-HK"
      },
      {
        "label": "Chinese, Mandarin (Simplified, China)",
        "value": "cmn-Hans-CN"
      },
      {
        "label": "Chinese, Mandarin (Simplified, Hong Kong)",
        "value": "cmn-Hans-HK"
      },
      {
        "label": "Croatian",
        "value": "hr-HR"
      },
      {
        "label": "Czech",
        "value": "cs-CZ"
      },
      {
        "label": "Danish",
        "value": "da-DK"
      },
      {
        "label": "Dutch",
        "value": "nl-NL"
      },
      {
        "label": "English (Australia)",
        "value": "en-AU"
      },
      {
        "label": "English (Canada)",
        "value": "en-CA"
      },
      {
        "label": "English (Ghana)",
        "value": "en-GH"
      },
      {
        "label": "English (India)",
        "value": "en-IN"
      },
      {
        "label": "English (Kenya)",
        "value": "en-KE"
      },
      {
        "label": "English (New Zealand)",
        "value": "en-NZ"
      },
      {
        "label": "English (Nigeria)",
        "value": "en-NG"
      },
      {
        "label": "English (Philippines)",
        "value": "en-PH"
      },
      {
        "label": "English (South Africa)",
        "value": "en-ZA"
      },
      {
        "label": "English (Tanzania)",
        "value": "en-TZ"
      },
      {
        "label": "English(UK)",
        "value": "en-GB"
      },
      {
        "label": "English(US)",
        "value": "en-US"
      },
      {
        "label": "Filipino",
        "value": "fil-PH"
      },
      {
        "label": "Finnish",
        "value": "fi-FI"
      },
      {
        "label": "French",
        "value": "fr-FR"
      },
      {
        "label": "Galician",
        "value": "gl-ES"
      },
      {
        "label": "Georgian",
        "value": "ka-GE"
      },
      {
        "label": "German",
        "value": "de-DE"
      },
      {
        "label": "Greek",
        "value": "el-GR"
      },
      {
        "label": "Gujarati",
        "value": "gu-IN"
      },
      {
        "label": "Hebrew",
        "value": "he"
      },
      {
        "label": "Hindi (India)",
        "value": "hi-IN"
      },
      {
        "label": "Hungarian",
        "value": "hu"
      },
      {
        "label": "Icelandic",
        "value": "is"
      },
      {
        "label": "Indonesian",
        "value": "id-ID"
      },
      {
        "label": "Italian",
        "value": "it-IT"
      },
      {
        "label": "Italian (Switzerland)",
        "value": "it-CH"
      },
      {
        "label": "Japanese",
        "value": "ja"
      },
      {
        "label": "Javanese",
        "value": "jv-ID"
      },
      {
        "label": "Kannada",
        "value": "kn-IN"
      },
      {
        "label": "Korean",
        "value": "ko"
      },
      {
        "label": "Lao",
        "value": "lo-LA"
      },
      {
        "label": "Latin",
        "value": "la"
      },
      {
        "label": "Latvian",
        "value": "lv-LV"
      },
      {
        "label": "Lithuanian",
        "value": "lt-LT"
      },
      {
        "label": "Malayalam",
        "value": "ml-IN"
      },
      {
        "label": "Malaysian",
        "value": "ms-MY"
      },
      {
        "label": "Mandarin Chinese",
        "value": "zh-CN"
      },
      {
        "label": "Marathi",
        "value": "mr-IN"
      },
      {
        "label": "Nepali",
        "value": "ne-NP"
      },
      {
        "label": "Norwegian",
        "value": "nb-NO"
      },
      {
        "label": "Pig Latin",
        "value": "xx-piglatin"
      },
      {
        "label": "Polish",
        "value": "pl"
      },
      {
        "label": "Portuguese",
        "value": "pt-PT"
      },
      {
        "label": "Portuguese (Brazil)",
        "value": "pt-BR"
      },
      {
        "label": "Romanian",
        "value": "ro-RO"
      },
      {
        "label": "Russian",
        "value": "ru"
      },
      {
        "label": "Serbian",
        "value": "sr-SP"
      },
      {
        "label": "Sinhalese",
        "value": "si-LK"
      },
      {
        "label": "Slovak",
        "value": "sk"
      },
      {
        "label": "Slovenian",
        "value": "sl-SI"
      },
      {
        "label": "Spanish (Argentina)",
        "value": "es-AR"
      },
      {
        "label": "Spanish (Bolivia)",
        "value": "es-BO"
      },
      {
        "label": "Spanish (Chile)",
        "value": "es-CL"
      },
      {
        "label": "Spanish (Colombia)",
        "value": "es-CO"
      },
      {
        "label": "Spanish (Costa Rica)",
        "value": "es-CR"
      },
      {
        "label": "Spanish (Dominican Republic)",
        "value": "es-DO"
      },
      {
        "label": "Spanish (Ecuador)",
        "value": "es-EC"
      },
      {
        "label": "Spanish (El Salvador)",
        "value": "es-SV"
      },
      {
        "label": "Spanish (Guatemala)",
        "value": "es-GT"
      },
      {
        "label": "Spanish (Honduras)",
        "value": "es-HN"
      },
      {
        "label": "Spanish (Mexico)",
        "value": "es-MX"
      },
      {
        "label": "Spanish (Nicaragua)",
        "value": "es-NI"
      },
      {
        "label": "Spanish (Panama)",
        "value": "es-PA"
      },
      {
        "label": "Spanish (Paraguay)",
        "value": "es-PY"
      },
      {
        "label": "Spanish (Peru)",
        "value": "es-PE"
      },
      {
        "label": "Spanish (Puerto Rico)",
        "value": "es-PR"
      },
      {
        "label": "Spanish (Spain)",
        "value": "es-ES"
      },
      {
        "label": "Spanish (US)",
        "value": "es-US"
      },
      {
        "label": "Spanish (Uruguay)",
        "value": "es-UY"
      },
      {
        "label": "Spanish (Venezuela)",
        "value": "es-VE"
      },
      {
        "label": "Sundanese",
        "value": "su-ID"
      },
      {
        "label": "Swahili (Kenya)",
        "value": "sw-KE"
      },
      {
        "label": "Swahili (Tanzania)",
        "value": "sw-TZ"
      },
      {
        "label": "Swedish",
        "value": "sv-SE"
      },
      {
        "label": "Tamil (India)",
        "value": "ta-IN"
      },
      {
        "label": "Tamil (Malaysia)",
        "value": "ta-MY"
      },
      {
        "label": "Tamil (Singapore)",
        "value": "ta-SG"
      },
      {
        "label": "Tamil (Sri Lanka)",
        "value": "ta-LK"
      },
      {
        "label": "Telugu",
        "value": "te-IN"
      },
      {
        "label": "Thai (Thailand)",
        "value": "th-TH"
      },
      {
        "label": "Traditional Taiwan",
        "value": "zh-TW"
      },
      {
        "label": "Turkish",
        "value": "tr"
      },
      {
        "label": "Ukrainian (Ukraine)",
        "value": "uk-UA"
      },
      {
        "label": "Urdu (India)",
        "value": "ur-IN"
      },
      {
        "label": "Urdu (Pakistan)",
        "value": "ur-PK"
      },
      {
        "label": "Vietnamese",
        "value": "vi-VN"
      },
      {
        "label": "Yue Chinese (Traditional Hong Kong)",
        "value": "zh-yue"
      },
      {
        "label": "Zulu",
        "value": "zu"
      }
    ],
    "default": "en-US"
  },
  {
    "name": "l10n",
    "label": "Speak The Words labels and texts",
    "type": "group",
    "common": true,
    "fields": [
      {
        "name": "retryLabel",
        "label": "\"Retry\"-button label",
        "type": "text",
        "default": "Retry"
      },
      {
        "name": "showSolutionLabel",
        "label": "\"Show solution\"-button label",
        "type": "text",
        "default": "Show solution"
      },
      {
        "name": "speakLabel",
        "label": "\"Speak\"-button label",
        "type": "text",
        "default": "Push to speak"
      },
      {
        "name": "listeningLabel",
        "label": "\"Speak\"-button label when listening",
        "type": "text",
        "default": "Listening..."
      },
      {
        "name": "correctAnswersText",
        "label": "Text preceding the correct answers in solution mode",
        "type": "text",
        "default": "The correct answer(s):"
      },
      {
        "name": "userAnswersText",
        "label": "Text telling the user what his answer was interpreted as",
        "type": "text",
        "default": "Your answer(s) was interpreted as:"
      },
      {
        "name": "noSound",
        "label": "Text to display when no sound was registered from user",
        "type": "text",
        "default": "I could not hear you, make sure your microphone is enabled"
      },
      {
        "name": "unsupportedBrowserHeader",
        "label": "Header text to display if browser does not support speech recognition",
        "type": "text",
        "default": "It looks like your browser does not support speech recognition"
      },
      {
        "name": "unsupportedBrowserDetails",
        "label": "Body text to display if browser does not support speech recognition",
        "type": "text",
        "default": "Please try again in a browser like Chrome"
      },
      {
        "name": "a11yShowSolution",
        "type": "text",
        "label": "Assistive technology description for \"Show Solution\" button",
        "default": "Show the solution. The task will be marked with its correct solution.",
        "importance": "low"
      },
      {
        "name": "a11yRetry",
        "type": "text",
        "label": "Assistive technology description for \"Retry\" button",
        "default": "Retry the task. Reset all responses and start the task over again.",
        "importance": "low"
      }
    ]
  }
]', N'', 1, null),
       (120, N'2021-04-25 12:33:28.000', N'H5P.SpeakTheWordsSet', N'Speak the Words Set', 1, 1, 10, 1, 0, N'iframe',
        N'dist/dist.js', N'', N'[
  {
    "name": "introduction",
    "label": "Introduction",
    "type": "group",
    "fields": [
      {
        "name": "showIntroPage",
        "type": "boolean",
        "optional": true,
        "default": false,
        "label": "Display introduction",
        "importance": "low"
      },
      {
        "name": "introductionImage",
        "type": "image",
        "label": "Introduction image",
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "showIntroPage",
              "equals": true
            }
          ]
        }
      },
      {
        "name": "introductionImageAltText",
        "type": "text",
        "label": "Alternative text for introduction image",
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "showIntroPage",
              "equals": true
            }
          ]
        }
      },
      {
        "name": "introductionTitle",
        "type": "text",
        "label": "Title",
        "optional": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "showIntroPage",
              "equals": true
            }
          ]
        }
      },
      {
        "name": "introductionText",
        "type": "text",
        "label": "Introduction text",
        "optional": true,
        "description": "This title will be displayed above the introduction text.",
        "widget": "showWhen",
        "showWhen": {
          "widget": "html",
          "rules": [
            {
              "field": "showIntroPage",
              "equals": true
            }
          ]
        },
        "tags": [
          "sub",
          "sup",
          "strong",
          "em",
          "code"
        ]
      }
    ]
  },
  {
    "name": "questions",
    "label": "Questions",
    "importance": "high",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "min": 1,
    "entity": "Question",
    "field": {
      "name": "question",
      "type": "library",
      "label": "Question",
      "importance": "high",
      "options": [
        "H5P.SpeakTheWords 1.3"
      ]
    }
  },
  {
    "name": "overallFeedback",
    "type": "group",
    "label": "Overall Feedback",
    "importance": "low",
    "expanded": true,
    "fields": [
      {
        "name": "overallFeedback",
        "type": "list",
        "widgets": [
          {
            "name": "RangeList",
            "label": "Default"
          }
        ],
        "importance": "high",
        "label": "Define custom feedback for any score range",
        "description": "Click the \"Add range\" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!",
        "entity": "range",
        "min": 1,
        "defaultNum": 1,
        "optional": true,
        "field": {
          "name": "overallFeedback",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "from",
              "type": "number",
              "label": "Score Range",
              "min": 0,
              "max": 100,
              "default": 0,
              "unit": "%"
            },
            {
              "name": "to",
              "type": "number",
              "min": 0,
              "max": 100,
              "default": 100,
              "unit": "%"
            },
            {
              "name": "feedback",
              "type": "text",
              "label": "Feedback for defined score range",
              "importance": "low",
              "placeholder": "Fill in the feedback",
              "optional": true
            }
          ]
        }
      }
    ]
  },
  {
    "name": "l10n",
    "type": "group",
    "label": "Speak The Words Set labels and texts",
    "importance": "low",
    "common": true,
    "fields": [
      {
        "name": "introductionButtonLabel",
        "label": "Introduction button label",
        "type": "text",
        "default": "Start Course!"
      },
      {
        "name": "solutionScreenResultsLabel",
        "label": "Solution screen results label",
        "type": "text",
        "default": "Your results:"
      },
      {
        "name": "showSolutionsButtonLabel",
        "label": "Show solutions button label",
        "type": "text",
        "default": "Show solution"
      },
      {
        "name": "retryButtonLabel",
        "label": "Retry button label",
        "type": "text",
        "default": "Retry"
      },
      {
        "name": "nextQuestionAriaLabel",
        "label": "Next question accessibility label",
        "type": "text",
        "default": "Next question"
      },
      {
        "name": "previousQuestionAriaLabel",
        "label": "Previous question accessibility label",
        "type": "text",
        "default": "Previous question"
      },
      {
        "name": "navigationBarTitle",
        "label": "Navigation bar title",
        "description": "Titles for questions in navigation bar. \":num\" will be replaced with the actual slide number.",
        "type": "text",
        "default": "Slide :num"
      },
      {
        "name": "answeredSlideAriaLabel",
        "label": "Answered slide accessibility label",
        "type": "text",
        "default": "Answered"
      },
      {
        "name": "activeSlideAriaLabel",
        "label": "Active slide accessibility label",
        "type": "text",
        "default": "Currently active"
      }
    ]
  }
]
', N'', 1, null),
       (121, N'2021-04-25 12:33:40.000', N'H5P.Audio', N'Audio', 1, 2, 14, 1, 0, N'iframe', N'scripts/audio.js',
        N'styles/audio.css', N'[
  {
    "name": "files",
    "type": "audio",
    "importance": "high",
    "label": "Source files"
  },
  {
    "name": "playerMode",
    "type": "select",
    "importance": "low",
    "label": "Player mode",
    "description": "Select the layout of the player.",
    "options": [
      {
        "value": "minimalistic",
        "label": "Minimalistic"
      },
      {
        "value": "full",
        "label": "Full"
      },
      {
        "value": "transparent",
        "label": "Transparent"
      }
    ],
    "default": "minimalistic"
  },
  {
    "name": "fitToWrapper",
    "type": "boolean",
    "importance": "low",
    "label": "Fit to wrapper",
    "default": false,
    "descriptions": "Adjust audioplayer size to use available space"
  },
  {
    "name": "controls",
    "type": "boolean",
    "importance": "low",
    "label": "Enable controls",
    "default": true,
    "description": "Controls allow the user to for instance pause the audio"
  },
  {
    "name": "autoplay",
    "type": "boolean",
    "importance": "low",
    "label": "Enable autoplay",
    "description": "With autoplay the audio starts to play immediately. If autoplay is disabled the user presses a play button to start the audio."
  },
  {
    "name": "copyright",
    "type": "group",
    "importance": "low",
    "label": "Copyright information",
    "deprecated": true,
    "optional": true,
    "fields": [
      {
        "name": "title",
        "type": "text",
        "label": "Title",
        "placeholder": "Für Elise",
        "optional": true
      },
      {
        "name": "author",
        "type": "text",
        "label": "Author",
        "placeholder": "Ludwig van Beethoven",
        "optional": true
      },
      {
        "name": "source",
        "type": "text",
        "label": "Source",
        "placeholder": "http://en.wikipedia.org/wiki/F%C3%BCr_Elise",
        "optional": true,
        "regexp": {
          "pattern": "^http[s]?://.+",
          "modifiers": "i"
        }
      },
      {
        "name": "license",
        "type": "select",
        "label": "License",
        "default": "U",
        "options": [
          {
            "value": "U",
            "label": "Undisclosed"
          },
          {
            "value": "CC BY",
            "label": "Attribution"
          },
          {
            "value": "CC BY-SA",
            "label": "Attribution-ShareAlike"
          },
          {
            "value": "CC BY-ND",
            "label": "Attribution-NoDerivs"
          },
          {
            "value": "CC BY-NC",
            "label": "Attribution-NonCommercial"
          },
          {
            "value": "CC BY-NC-SA",
            "label": "Attribution-NonCommercial-ShareAlike"
          },
          {
            "value": "CC BY-NC-ND",
            "label": "Attribution-NonCommercial-NoDerivs"
          },
          {
            "value": "GNU GPL",
            "label": "General Public License"
          },
          {
            "value": "PD",
            "label": "Public Domain"
          },
          {
            "value": "ODC PDDL",
            "label": "Public Domain Dedication and Licence"
          },
          {
            "value": "CC PDM",
            "label": "Public Domain Mark"
          },
          {
            "value": "C",
            "label": "Copyright"
          }
        ]
      }
    ]
  },
  {
    "name": "contentName",
    "type": "text",
    "importance": "low",
    "label": "Audio content name",
    "common": true,
    "default": "Audio"
  },
  {
    "name": "audioNotSupported",
    "type": "text",
    "label": "Audio not supported message",
    "importance": "low",
    "common": true,
    "default": "Your browser does not support this audio"
  }
]', N'', 0, null),
       (122, N'2021-04-25 12:33:40.000', N'H5P.ImageSequencing', N'Image Sequencing', 1, 1, 0, 1, 0, N'iframe',
        N'scripts/h5p-image-sequencing.js, scripts/h5p-image-sequencing-card.js, scripts/h5p-image-sequencing-counter.js, scripts/h5p-image-sequencing-timer.js',
        N'styles/h5p-image-sequencing.css', N'[
  {
    "label": "Task Description",
    "name": "taskDescription",
    "type": "text",
    "default": "Drag to arrange the images in the correct sequence",
    "description": "A guide telling the user how to solve this task.",
    "importance": "high"
  },
  {
    "label": "Alternate Task Description",
    "name": "altTaskDescription",
    "type": "text",
    "default": "Make the following list be ordered correctly. Use the cursor keys to navigate through the list items, use space to activate or deactivate an item and the cursor keys to move it",
    "description": "A guide intended for visually impaired users on how to solve this task.",
    "importance": "high"
  },
  {
    "name": "sequenceImages",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "label": "Images",
    "importance": "high",
    "entity": "image",
    "min": 3,
    "field": {
      "type": "group",
      "name": "imageElement",
      "label": "Image Element",
      "importance": "high",
      "fields": [
        {
          "name": "image",
          "type": "image",
          "label": "Image",
          "importance": "high"
        },
        {
          "name": "imageDescription",
          "type": "text",
          "label": "Image Description",
          "importance": "low",
          "description": "An image description for users who cannot recognize the image"
        },
        {
          "name": "audio",
          "description": "An optional audio for the card to play",
          "type": "audio",
          "label": "Audio files",
          "importance": "low",
          "optional": true
        }
      ]
    }
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the game behaves.",
    "optional": true,
    "fields": [
      {
        "name": "enableSolution",
        "type": "boolean",
        "label": "Add a show solution button for the game",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableRetry",
        "type": "boolean",
        "label": "Add button for retrying when the game is over",
        "importance": "low",
        "default": true
      },
      {
        "name": "enableResume",
        "type": "boolean",
        "label": "Add button for resuming from the current state ",
        "importance": "low",
        "default": true
      }
    ]
  },
  {
    "label": "Localization",
    "importance": "low",
    "name": "l10n",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Total Moves text",
        "importance": "low",
        "name": "totalMoves",
        "type": "text",
        "default": "Total Moves"
      },
      {
        "label": "Time spent text",
        "importance": "low",
        "name": "timeSpent",
        "type": "text",
        "default": "Time spent"
      },
      {
        "label": "Feedback text",
        "importance": "low",
        "name": "score",
        "type": "text",
        "default": "You got @score of @total points",
        "description": "Feedback text, variables available: @score and @total. Example: ''You got @score of @total possible points''"
      },
      {
        "label": "Text for \"Check\" button",
        "importance": "low",
        "name": "checkAnswer",
        "type": "text",
        "default": "Check"
      },
      {
        "label": "Text for \"Retry\" button",
        "importance": "low",
        "name": "tryAgain",
        "type": "text",
        "default": "Retry"
      },
      {
        "label": "Text for \"Show Solution\" button",
        "importance": "low",
        "name": "showSolution",
        "type": "text",
        "default": "ShowSolution"
      },
      {
        "label": "Text for \"Resume\" button",
        "importance": "low",
        "name": "resume",
        "type": "text",
        "default": "Resume"
      },
      {
        "name": "audioNotSupported",
        "type": "text",
        "label": "Audio not supported message",
        "importance": "low",
        "common": true,
        "default": "Audio Error"
      },
      {
        "name": "ariaPlay",
        "type": "text",
        "label": "Play button (text for readspeakers)",
        "importance": "low",
        "common": true,
        "default": "Play the corresponding audio"
      },
      {
        "name": "ariaMoveDescription",
        "type": "text",
        "label": "Card moving description (text for readspeakers)",
        "description": "@posSrc : card initial position, @posDes : card final position",
        "importance": "low",
        "common": true,
        "default": "Moved @cardDesc from @posSrc to @posDes"
      },
      {
        "name": "ariaCardDesc",
        "type": "text",
        "label": "Default Card Description (text for readspeakers)",
        "importance": "low",
        "common": true,
        "default": "sequencing item"
      }
    ]
  }
]
', N'', 1, null),
       (123, N'2021-04-25 12:35:10.000', N'H5P.PersonalityQuiz', N'Personality Quiz', 1, 0, 8, 1, 0, N'iframe',
        N'js/personalityQuiz.js, js/wheelAnimation.js', N'css/personalityQuiz.css', N'[
    {
        "name": "titleScreen",
        "type": "group",
        "label": "Title Screen",
        "expanded": true,
        "fields": [
            {
                "name": "title",
                "type": "group",
                "label": "Title",
                "expanded": true,
                "fields": [
                    {
                        "name": "text",
                        "type": "text",
                        "label": "Title"
                    },
                    {
                        "name": "display",
                        "type": "boolean",
                        "label": "Display Title",
                        "description": "Wether or not to show the title as a headline at the start of the personality quiz.",
                        "default": true
                    }
                ]
            },
            {
                "name": "image",
                "type": "group",
                "label": "Optional: Image",
                "optional": true,
                "fields": [
                    {
                        "name": "file",
                        "type": "image",
                        "label": "File"
                    },
                    {
                        "name": "alt",
                        "type": "text",
                        "label": "Alt text",
                        "description": "Alternative text if the browser is unable to load the image."
                    }
                ]
            },
            {
                "name": "skip",
                "label": "Skip",
                "type": "boolean",
                "description": "Select if you want the quiz to start on the first question instead of the title screen.",
                "default": false
            }
        ]
    },
    {
        "name": "resultScreen",
        "type": "group",
        "label": "Result screen",
        "fields": [
            {
                "name": "animation",
                "type": "select",
                "label": "Animation",
                "description": "The Wheel of Fortune animation will only use the images associated with personalities if ALL personalities has an image associated with them.",
                "default": "none",
                "options": [
                    {
                        "label": "None",
                        "value": "none"
                    },
                    {
                        "label": "Fade in",
                        "value": "fade-in"
                    },
                    {
                        "label": "Wheel of Fortune",
                        "value": "wheel"
                    }
                ]
            },
            {
                "name": "displayTitle",
                "type": "boolean",
                "label": "Display personality title?",
                "default": true
            },
            {
                "name": "displayDescription",
                "type": "boolean",
                "label": "Display description?",
                "default": true
            },
            {
                "name": "imagePosition",
                "type": "select",
                "label": "Personality Image Position",
                "description": "Choose how to display the image, if there is any, of the result personality. Background will fill the entire H5P container and center the image. Inline will put the image as an image element between the result personality name and description.",
                "default": "background",
                "options": [
                    {
                        "value": "background",
                        "label": "Background"
                    },
                    {
                        "value": "inline",
                        "label": "Inline"
                    }
                ]
            }
        ]
    },
    {
        "name": "personalities",
        "type": "list",
        "label": "Personality",
        "entity": "personality",
        "min": 2,
        "max": 10,
        "field": {
            "name": "personality",
            "type": "group",
            "label": "Personality",
            "fields": [
                {
                    "name": "name",
                    "type": "text",
                    "label": "Personality name",
                    "description": "The personality name will be used to associate answers with their respective personalities."
                },
                {
                    "name": "description",
                    "type": "text",
                    "label": "Description",
                    "maxLength": 450,
                    "widget": "textarea"
                },
                {
                    "name": "image",
                    "type": "group",
                    "label": "Optional: Image",
                    "optional": true,
                    "fields": [
                        {
                            "name": "file",
                            "type": "image",
                            "label": "Image",
                            "description": "An image to display on the result screen."
                        },
                        {
                            "name": "alt",
                            "type": "text",
                            "label": "Alt text",
                            "description": "Alternative text if the browser is unable to load the image."
                        }
                    ]
                }
            ]
        }
    },
    {
        "name": "questions",
        "type": "list",
        "label": "Questions",
        "entity": "question",
        "field": {
            "name": "question",
            "type": "group",
            "label": "Question",
            "fields": [
                {
                    "name": "text",
                    "type": "text",
                    "label": "Question"
                },
                {
                    "name": "image",
                    "type": "group",
                    "label": "Optional: Image",
                    "description": "Image displayed at the top of the screen above or below the question text.",
                    "optional": true,
                    "fields": [
                        {
                            "name": "file",
                            "type": "image",
                            "label": "File"
                        },
                        {
                            "name": "alt",
                            "type": "text",
                            "label": "Alt text",
                            "description": "Alternative text if the browser is unable to load the image."
                        }
                    ]
                },
                {
                    "name": "answers",
                    "type": "list",
                    "label": "Answers",
                    "entity": "answer",
                    "min": 2,
                    "max": 6,
                    "field": {
                        "name": "answer",
                        "type": "group",
                        "label": "Answer",
                        "fields": [
                            {
                                "name": "text",
                                "type": "text",
                                "label": "text"
                            },
                            {
                                "name": "personality",
                                "type": "text",
                                "label": "Personalities",
                                "description": "A comma separated list of personality names associated with this answer."
                            },
                            {
                                "name": "image",
                                "type": "group",
                                "description": "Images associated with answers will not show up unless all answers associated with a question has an image attached.",
                                "label": "Optional: Image",
                                "optional": true,
                                "fields": [
                                    {
                                        "name": "file",
                                        "type": "image",
                                        "label": "File"
                                    },
                                    {
                                        "name": "alt",
                                        "type": "text",
                                        "label": "Alt text",
                                        "description": "Alternative text if the browser is unable to load the image."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "label": "Start",
        "name": "startText",
        "type": "text",
        "default": "Start",
        "description": "Text displayed on the start quiz button on the title card."
    },
    {
        "label": "Progress text",
        "name": "progressText",
        "type": "text",
        "default": "@question of @total",
        "description": "Progress text, variables available: @question and @total. Example: ''@question of @total''"
    },
    {
        "name": "retakeText",
        "label": "Retake",
        "type": "text",
        "default": "Retake the quiz",
        "description": "Retake text"
    },
    {
        "name": "animation",
        "type": "boolean",
        "label": "Animation",
        "default": true,
        "description": "Uncheck to turn off all animation"
    },
    {
        "name": "buttonColor",
        "type": "text",
        "label": "Button Accent",
        "description": "Change the color of the button borders and the animation color fill",
        "default": "4D5DAA",
        "widget": "colorSelector"
    },
    {
        "name": "progressbarColor",
        "type": "text",
        "label": "Progressbar Color",
        "description": "Determines the color of the progress bar",
        "default": "38B755",
        "widget": "colorSelector"
    }
]
', N'', 0, null),
       (124, N'2021-04-25 12:35:10.000', N'H5PEditor.ColorSelector', N'H5PEditor.ColorSelector', 1, 0, 3, 0, 0, N'',
        N'scripts/spectrum.js, scripts/color-selector.js', N'styles/spectrum.css, styles/color-selector.css', N'', N'',
        0, null),
       (125, N'2021-04-25 12:36:09.000', N'H5P.Chart', N'Chart', 1, 2, 18, 1, 0, N'iframe',
        N'chart.js, d3.js, pie.js, bar.js', N'chart.css', N'[
  {
    "name": "graphMode",
    "type": "select",
    "label": "Type of chart",
    "importance": "high",
    "options": [
      {
        "value": "pieChart",
        "label": "Pie Chart"
      },
      {
        "value": "barChart",
        "label": "Bar Chart"
      }
    ],
    "default": "pieChart"
  },
  {
    "name": "listOfTypes",
    "type": "list",
    "label": "Data elements",
    "importance": "high",
    "entity": "option",
    "min": 1,
    "defaultNum": 2,
    "field": {
      "name": "type",
      "type": "group",
      "label": "Data element",
      "importance": "high",
      "fields": [
        {
          "name": "text",
          "type": "text",
          "label": "Name",
          "importance": "medium"
        },
        {
          "name": "value",
          "type": "number",
          "label": "Value",
          "importance": "low",
          "default": 1,
          "min": 0.0001,
          "decimals": 4
        },
        {
          "name": "color",
          "type": "text",
          "widget": "colorSelector",
          "label": "Color",
          "importance": "low",
          "default": "#000",
          "optional": true,
          "spectrum": {
            "showInput": true,
            "preferredFormat": "hex"
          }
        },
        {
          "name": "fontColor",
          "type": "text",
          "widget": "colorSelector",
          "label": "Font Color",
          "importance": "low",
          "default": "#fff",
          "optional": true,
          "spectrum": {
            "showInput": true,
            "preferredFormat": "hex"
          }
        }
      ]
    }
  },
  {
    "name": "figureDefinition",
    "type": "text",
    "label": "Text read by readspeakers defining the figure as a chart.",
    "importance": "low",
    "default": "Chart",
    "common": true
  }
]
', N'', 1, null),
       (126, N'2021-04-25 12:38:35.000', N'H5P.BranchingQuestion', N'Branching Question', 1, 0, 7, 0, 0, N'',
        N'branchingQuestion.js', N'branchingQuestion.css', N'[
  {
    "name": "branchingQuestion",
    "type": "group",
    "widget": "branchingQuestion",
    "label": "Branching Question Editor",
    "importance": "high",
    "fields": [
      {
        "name": "question",
        "type": "text",
        "importance": "medium",
        "widget": "html",
        "label": "Question",
        "enterMode": "p",
        "tags": [
          "strong",
          "em",
          "sub",
          "sup",
          "h2",
          "h3",
          "pre",
          "code"
        ]
      },
      {
        "name": "alternatives",
        "type": "list",
        "importance": "high",
        "label": "Available alternatives",
        "entity": "alternative",
        "min": 2,
        "defaultNum": 2,
        "field": {
          "name": "answer",
          "type": "group",
          "label": "Alternative",
          "importance": "high",
          "fields": [
            {
              "name": "text",
              "type": "text",
              "importance": "medium",
              "label": "Text"
            },
            {
              "name": "nextContentId",
              "type": "number",
              "label": "Next Content ID (end screens are defined by negative numbers)",
              "importance": "high",
              "default": -1
            },
            {
              "name": "feedback",
              "type": "group",
              "label": "Feedback",
              "fields": [
                {
                  "name": "title",
                  "type": "text",
                  "label": "Feedback title",
                  "optional": true
                },
                {
                  "name": "subtitle",
                  "type": "text",
                  "label": "Feedback text",
                  "optional": true,
                  "widget": "html",
                  "enterMode": "p",
                  "tags": [
                    "strong",
                    "em",
                    "del",
                    "code"
                  ]
                },
                {
                  "name": "image",
                  "type": "image",
                  "label": "Feedback image",
                  "optional": true
                },
                {
                  "name": "endScreenScore",
                  "type": "number",
                  "label": "Score for this scenario",
                  "description": "The score will be sent to any LMS, LRS or any other connected service that receives scores from H5P for users who reach this scenario",
                  "optional": true
                }
              ]
            }
          ]
        }
      }
    ]
  }
]
', N'', 0, null),
       (127, N'2021-04-25 12:38:35.000', N'H5P.BranchingScenario', N'Branching Scenario (beta)', 1, 2, 2, 1, 0,
        N'iframe', N'dist/dist.js',
        N'styles/branchingScenario.css, styles/branchingQuestion.css, styles/genericScreen.css, styles/libraryScreen.css', N'[
  {
    "name": "branchingScenario",
    "type": "group",
    "widget": "branchingScenario",
    "label": "Branching Scenario Editor",
    "importance": "high",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "importance": "high"
      },
      {
        "name": "startScreen",
        "label": "Start screen",
        "type": "group",
        "importance": "low",
        "fields": [
          {
            "name": "startScreenTitle",
            "label": "Course Title",
            "placeholder": "Title for your course",
            "type": "text",
            "importance": "medium",
            "optional": true
          },
          {
            "name": "startScreenSubtitle",
            "label": "Course Details",
            "placeholder": "Details about the course",
            "type": "text",
            "importance": "medium",
            "optional": true
          },
          {
            "name": "startScreenImage",
            "label": "Course image",
            "type": "image",
            "optional": true,
            "importance": "medium"
          }
        ]
      },
      {
        "name": "endScreens",
        "label": "List of end screens",
        "type": "list",
        "importance": "medium",
        "field": {
          "name": "endScreen",
          "label": "End screen",
          "type": "group",
          "importance": "low",
          "fields": [
            {
              "name": "endScreenTitle",
              "label": "Title",
              "type": "text",
              "importance": "medium",
              "optional": true
            },
            {
              "name": "endScreenSubtitle",
              "label": "Text",
              "type": "text",
              "importance": "medium",
              "optional": true
            },
            {
              "name": "endScreenImage",
              "label": "Image",
              "type": "image",
              "importance": "medium",
              "optional": true
            },
            {
              "name": "endScreenScore",
              "label": "Score",
              "description": "The score will be sent to any LMS, LRS or any other connected service that receives scores from H5P for users who reach the default end scenario",
              "type": "number",
              "default": 0,
              "optional": true
            },
            {
              "name": "contentId",
              "label": "Content ID",
              "type": "number",
              "max": 0,
              "widget": "none"
            }
          ]
        }
      },
      {
        "name": "content",
        "label": "List of branching scenario content",
        "importance": "high",
        "type": "list",
        "min": 1,
        "entity": "content",
        "field": {
          "name": "content",
          "type": "group",
          "fields": [
            {
              "name": "type",
              "type": "library",
              "importance": "high",
              "options": [
                "H5P.BranchingQuestion 1.0",
                "H5P.CoursePresentation 1.22",
                "H5P.AdvancedText 1.1",
                "H5P.Image 1.1",
                "H5P.ImageHotspots 1.8",
                "H5P.InteractiveVideo 1.22",
                "H5P.Video 1.5"
              ]
            },
            {
              "name": "showContentTitle",
              "label": "Show content title in view",
              "description": "If selected, the user will see the content title in the top bar above this content",
              "type": "boolean",
              "importance": "high"
            },
            {
              "name": "nextContentId",
              "label": "Next Content ID (end screens are defined by negative numbers)",
              "type": "number",
              "importance": "high",
              "widget": "none"
            },
            {
              "name": "feedback",
              "type": "group",
              "label": "Feedback",
              "fields": [
                {
                  "name": "title",
                  "type": "text",
                  "label": "Feedback title",
                  "optional": true
                },
                {
                  "name": "subtitle",
                  "type": "text",
                  "label": "Feedback text",
                  "optional": true,
                  "widget": "html",
                  "enterMode": "p",
                  "tags": [
                    "strong",
                    "em",
                    "del",
                    "code"
                  ]
                },
                {
                  "name": "image",
                  "type": "image",
                  "label": "Feedback image",
                  "optional": true
                },
                {
                  "name": "endScreenScore",
                  "type": "number",
                  "label": "Score for this scenario",
                  "description": "The score will be sent to any LMS, LRS or any other connected service that receives scores from H5P for users who reach this scenario",
                  "optional": true
                }
              ]
            }
          ]
        }
      },
      {
        "name": "scoringOption",
        "type": "group",
        "label": "Scoring options",
        "importance": "low",
        "fields": [
          {
            "name": "scoringOption",
            "label": "Scoring options",
            "type": "select",
            "description": "Select type of scoring",
            "options": [
              {
                "value": "static-end-score",
                "label": "Statically set score for each end scenario"
              },
              {
                "value": "dynamic-score",
                "label": "Dynamically calculate score from user answers"
              },
              {
                "value": "no-score",
                "label": "No scoring"
              }
            ],
            "default": "no-score"
          }
        ]
      },
      {
        "name": "l10n",
        "type": "group",
        "label": "Localization",
        "importance": "low",
        "common": true,
        "fields": [
          {
            "name": "startScreenButtonText",
            "label": "Text for the button on the start screen",
            "type": "text",
            "importance": "low",
            "default": "Start the course"
          },
          {
            "name": "endScreenButtonText",
            "label": "Text for the button on the end screen",
            "type": "text",
            "importance": "low",
            "default": "Restart the course"
          },
          {
            "name": "proceedButtonText",
            "label": "Text for the button on each of the library screens",
            "type": "text",
            "importance": "low",
            "default": "Proceed"
          },
          {
            "name": "scoreText",
            "label": "Label for score on the end screen",
            "type": "text",
            "importance": "low",
            "default": "Your score:"
          }
        ]
      }
    ]
  }
]', N'', 1, null),
       (128, N'2021-04-25 12:38:35.000', N'H5P.MaterialDesignIcons', N'Material Design Icons', 1, 0, 0, 0, 0, N'', N'',
        N'h5p-material-icons.css', N'', N'', 0, null),
       (129, N'2021-04-25 12:38:35.000', N'H5PEditor.BranchingQuestion', N'Branching Question Editor', 1, 0, 1, 0, 0,
        N'', N'index.js', N'', N'', N'', 0, null),
       (130, N'2021-04-25 12:38:35.000', N'H5PEditor.BranchingScenario', N'Branching Scenario Editor', 1, 2, 0, 0, 0,
        N'', N'dist/dist.js', N'', N'', N'', 0, null),
       (131, N'2021-04-25 12:39:19.000', N'H5P.ImageJuxtaposition', N'Image Juxtaposition', 1, 4, 1, 1, 1, N'iframe',
        N'dist/h5p-image-juxtaposition.js', N'dist/h5p-image-juxtaposition.css', N'[
  {
    "name": "title",
    "label": "Heading",
    "importance": "high",
    "type": "text",
    "optional": true,
    "placeholder": "Here you can add an optional heading.",
    "description": "The heading you''d like to show before the befort/after image"
  },
  {
    "name": "imageBefore",
    "type": "group",
    "label": "First image",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "imageBefore",
        "label": "First image",
        "importance": "low",
        "type": "library",
        "options": [
          "H5P.Image 1.1"
        ],
        "optional": false,
        "description": "The first image. Please make sure that it has the same size as the second image."
      },
      {
        "name": "labelBefore",
        "label": "Label for first image",
        "importance": "low",
        "type": "text",
        "optional": true,
        "description": "Label to put over first image"
      }
    ]
  },
  {
    "name": "imageAfter",
    "type": "group",
    "label": "Second image",
    "importance": "high",
    "expanded": true,
    "fields": [
      {
        "name": "imageAfter",
        "label": "Second image",
        "importance": "low",
        "type": "library",
        "options": [
          "H5P.Image 1.1"
        ],
        "optional": false,
        "description": "The second image. Please make sure that it has the same size as the first image."
      },
      {
        "name": "labelAfter",
        "label": "Label for second image",
        "importance": "low",
        "type": "text",
        "optional": true,
        "description": "Label to put over second image"
      }
    ]
  },
  {
    "name": "behavior",
    "type": "group",
    "label": "Behavioral settings",
    "importance": "low",
    "description": "These options will let you set some details",
    "optional": true,
    "fields": [
      {
        "name": "startingPosition",
        "type": "number",
        "label": "Slider start position in %",
        "description": "Sets the start position of the slider",
        "default": 50,
        "min": 0,
        "max": 100,
        "optional": false
      },
      {
        "name": "sliderOrientation",
        "type": "select",
        "label": "Slider orientation",
        "description": "Horizontal will move left and right, vertical will move up and down.",
        "options": [
          {
            "value": "horizontal",
            "label": "Horizontal"
          },
          {
            "value": "vertical",
            "label": "Vertical"
          }
        ],
        "default": "horizontal"
      },
      {
        "name": "sliderColor",
        "type": "text",
        "label": "Slider color",
        "importance": "medium",
        "optional": true,
        "default": "#f3f3f3",
        "widget": "colorSelector",
        "spectrum": {
          "showInput": true
        }
      }
    ]
  }
]
', N'', 0, null),
       (132, N'2021-04-25 12:39:55.000', N'H5P.ImagePair', N'Image Pair', 1, 4, 0, 1, 0, N'iframe',
        N'h5p-image-pair.js, h5p-image-pair-card.js', N'h5p-image-pair.css', N'[
  {
    "label": "Task Description",
    "name": "taskDescription",
    "type": "text",
    "default": "Drag images from the left to match them with corresponding images on the right",
    "description": "A guide telling the user how to solve this task.",
    "importance": "high"
  },
  {
    "name": "cards",
    "type": "list",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "label": "Cards",
    "importance": "high",
    "entity": "card",
    "min": 2,
    "max": 100,
    "field": {
      "type": "group",
      "name": "card",
      "label": "Card",
      "importance": "high",
      "fields": [
        {
          "name": "image",
          "type": "image",
          "label": "Image",
          "importance": "high",
          "ratio": 1
        },
        {
          "name": "imageAlt",
          "type": "text",
          "label": "Alternative text for Image",
          "importance": "high",
          "description": "Describe what can be seen in the photo. The text is read by text-to-speech tools needed by visually impaired users."
        },
        {
          "name": "match",
          "type": "image",
          "label": "Matching Image",
          "importance": "low",
          "optional": true,
          "description": "An optional image to match against instead of using two cards with the same image.",
          "ratio": 1
        },
        {
          "name": "matchAlt",
          "type": "text",
          "label": "Alternative text for Matching Image",
          "importance": "low",
          "optional": true,
          "description": "Describe what can be seen in the photo. The text is read by text-to-speech tools needed by visually impaired users."
        }
      ]
    }
  },
  {
    "name": "behaviour",
    "type": "group",
    "label": "Behavioural settings",
    "importance": "low",
    "description": "These options will let you control how the game behaves.",
    "optional": true,
    "fields": [
      {
        "name": "allowRetry",
        "type": "boolean",
        "label": "Add button for retrying when the game is over",
        "importance": "low",
        "default": true
      }
    ]
  },
  {
    "label": "Localization",
    "importance": "low",
    "name": "l10n",
    "type": "group",
    "common": true,
    "fields": [
      {
        "label": "Text for \"Check\" button",
        "importance": "low",
        "name": "checkAnswer",
        "type": "text",
        "default": "Check"
      },
      {
        "label": "Text for \"Retry\" button",
        "importance": "low",
        "name": "tryAgain",
        "type": "text",
        "default": "Retry"
      },
      {
        "label": "Text for \"ShowSolution\" button",
        "importance": "low",
        "name": "showSolution",
        "type": "text",
        "default": "Show Solution"
      },
      {
        "label": "Feedback text",
        "importance": "low",
        "name": "score",
        "type": "text",
        "default": "You got @score of @total points",
        "description": "Feedback text, variables available: @score and @total. Example: ''You got @score of @total possible points''"
      }
    ]
  }
]
', N'', 1, null),
       (133, N'2021-04-25 12:40:18.000', N'H5P.InteractiveBook', N'Interactive Book', 1, 3, 1, 1, 1, N'iframe',
        N'dist/h5p-interactive-book.js', N'', N'[
  {
    "name": "showCoverPage",
    "type": "boolean",
    "label": "Enable book cover",
    "description": "A cover that shows info regarding the book before access",
    "importance": "low",
    "default": false
  },
  {
    "name": "bookCover",
    "type": "group",
    "label": "Cover Page",
    "importance": "medium",
    "widget": "showWhen",
    "showWhen": {
      "rules": [
        {
          "field": "showCoverPage",
          "equals": true
        }
      ]
    },
    "fields": [
      {
        "name": "coverDescription",
        "type": "text",
        "widget": "html",
        "label": "Cover description",
        "importance": "medium",
        "optional": true,
        "description": "This text will be the description of your book.",
        "enterMode": "p",
        "tags": [
          "sub",
          "sup",
          "strong",
          "em",
          "p",
          "code"
        ]
      },
      {
        "name": "coverImage",
        "type": "image",
        "label": "Cover image",
        "importance": "low",
        "optional": true,
        "description": "An optional background image for the introduction."
      },
      {
        "name": "coverAltText",
        "type": "text",
        "label": "Cover image alternative text",
        "importance": "low",
        "optional": true,
        "description": "An alternative text for the cover image"
      }
    ]
  },
  {
    "name": "chapters",
    "type": "list",
    "label": "Pages",
    "entity": "Page",
    "widgets": [
      {
        "name": "VerticalTabs",
        "label": "Default"
      }
    ],
    "importance": "high",
    "min": 1,
    "max": 50,
    "field": {
      "name": "item",
      "type": "group",
      "label": "Item",
      "importance": "low",
      "expanded": true,
      "fields": [
        {
          "label": "Page",
          "name": "chapter",
          "type": "library",
          "options": [
            "H5P.Column 1.13"
          ]
        }
      ]
    }
  },
  {
    "name": "behaviour",
    "type": "group",
    "importance": "low",
    "label": "Behavioural settings",
    "fields": [
      {
        "name": "defaultTableOfContents",
        "type": "boolean",
        "label": "Display table of contents as default",
        "description": "When enabled the table of contents is showed when opening the book",
        "default": true
      },
      {
        "name": "progressIndicators",
        "type": "boolean",
        "label": "Display Progress Indicators",
        "description": "When enabled there will be indicators per page showing the user if he is done with the page or not.",
        "default": true
      },
      {
        "name": "progressAuto",
        "type": "boolean",
        "label": "Enable automatic progress",
        "description": "If enabled a page without tasks is considered done when viewed. A page with tasks when all tasks are done. If disabled there will be a button at the bottom of every page for the user to click when done with the page.",
        "default": true,
        "widget": "showWhen",
        "showWhen": {
          "rules": [
            {
              "field": "progressIndicators",
              "equals": true
            }
          ]
        }
      },
      {
        "name": "displaySummary",
        "type": "boolean",
        "label": "Display summary",
        "description": "When enabled the user can see a summary and submit the progress/answers",
        "default": true
      }
    ]
  },
  {
    "name": "read",
    "type": "text",
    "label": "Translation for \"Read\"",
    "importance": "low",
    "default": "Read",
    "common": true,
    "optional": true
  },
  {
    "name": "displayTOC",
    "type": "text",
    "label": "Translation for \"Display ''Table of contents''\"",
    "importance": "low",
    "default": "Display ''Table of contents''",
    "common": true,
    "optional": true
  },
  {
    "name": "hideTOC",
    "type": "text",
    "label": "Translation for \"Hide ''Table of contents''\"",
    "importance": "low",
    "default": "Hide ''Table of contents''",
    "common": true,
    "optional": true
  },
  {
    "name": "nextPage",
    "type": "text",
    "label": "Translation for \"Next page\"",
    "importance": "low",
    "default": "Next page",
    "common": true,
    "optional": true
  },
  {
    "name": "previousPage",
    "type": "text",
    "label": "Translation for \"Previous page\"",
    "importance": "low",
    "default": "Previous page",
    "common": true,
    "optional": true
  },
  {
    "name": "chapterCompleted",
    "type": "text",
    "label": "Translation for \"Page completed!\"",
    "importance": "low",
    "default": "Page completed!",
    "common": true,
    "optional": true
  },
  {
    "name": "partCompleted",
    "type": "text",
    "label": "Translation for \"@pages of @total completed\" (@pages and @total will be replaced by actual values)",
    "importance": "low",
    "default": "@pages of @total completed",
    "common": true,
    "optional": true
  },
  {
    "name": "incompleteChapter",
    "type": "text",
    "label": "Translation for \"Incomplete page\"",
    "importance": "low",
    "default": "Incomplete page",
    "common": true,
    "optional": true
  },
  {
    "name": "navigateToTop",
    "type": "text",
    "label": "Translation for \"Navigate to the top\"",
    "importance": "low",
    "default": "Navigate to the top",
    "common": true,
    "optional": true
  },
  {
    "name": "markAsFinished",
    "type": "text",
    "importance": "low",
    "label": "Translation for \"I have finished this page\"",
    "default": "I have finished this page",
    "common": true,
    "optional": true
  },
  {
    "name": "fullscreen",
    "type": "text",
    "importance": "low",
    "label": "Fullscreen button label",
    "default": "Fullscreen",
    "common": true,
    "optional": true
  },
  {
    "name": "exitFullscreen",
    "type": "text",
    "importance": "low",
    "label": "Exit fullscreen button label",
    "default": "Exit fullscreen",
    "common": true,
    "optional": true
  },
  {
    "name": "bookProgressSubtext",
    "type": "text",
    "importance": "low",
    "label": "Page progress in book",
    "description": "\"@count\" will be replaced by page count, and \"@total\" with the total number of pages",
    "default": "@count of @total pages",
    "common": true,
    "optional": true
  },
  {
    "name": "interactionsProgressSubtext",
    "type": "text",
    "importance": "low",
    "label": "Interaction progress",
    "description": "\"@count\" will be replaced by interaction count, and \"@total\" with the total number of interactions",
    "default": "@count of @total interactions",
    "common": true,
    "optional": true
  },
  {
    "name": "submitReport",
    "type": "text",
    "importance": "low",
    "label": "Translation for \"Submit report\"",
    "default": "Submit Report",
    "common": true,
    "optional": true
  },
  {
    "name": "restartLabel",
    "type": "text",
    "importance": "low",
    "label": "Label for \"restart\" button",
    "default": "Restart",
    "common": true,
    "optional": true
  },
  {
    "name": "summaryHeader",
    "type": "text",
    "importance": "low",
    "label": "Summary header",
    "default": "Summary",
    "common": true,
    "optional": true
  },
  {
    "name": "allInteractions",
    "type": "text",
    "importance": "low",
    "label": "Translation for \"All interactions\"",
    "default": "All interactions",
    "common": true,
    "optional": true
  },
  {
    "name": "unansweredInteractions",
    "type": "text",
    "importance": "low",
    "label": "Translation for \"Unanswered interactions\"",
    "default": "Unanswered interactions",
    "common": true,
    "optional": true
  },
  {
    "name": "scoreText",
    "type": "text",
    "importance": "low",
    "label": "Score",
    "description": "\"@score\" will be replaced with current score, and \"@maxscore\" will be replaced with max achievable score",
    "default": "@score / @maxscore",
    "common": true,
    "optional": true
  },
  {
    "name": "leftOutOfTotalCompleted",
    "type": "text",
    "importance": "low",
    "label": "Per page interactions completion",
    "description": "\"@left\" will be replaced with remaining interactions, and \"@max\" will be replaced with total number of interactions on the page",
    "default": "@left of @max interactions completed",
    "common": true,
    "optional": true
  },
  {
    "name": "noInteractions",
    "type": "text",
    "importance": "low",
    "label": "Translation for \"No interactions\"",
    "default": "No interactions",
    "common": true,
    "optional": true
  },
  {
    "name": "score",
    "type": "text",
    "importance": "low",
    "label": "Translation for \"Score\"",
    "default": "Score",
    "common": true,
    "optional": true
  },
  {
    "name": "summaryAndSubmit",
    "type": "text",
    "importance": "low",
    "label": "Label for \"Summary & submit\" button",
    "default": "Summary & submit",
    "common": true,
    "optional": true
  },
  {
    "name": "noChapterInteractionBoldText",
    "type": "text",
    "importance": "low",
    "label": "Translation for \"You have not interacted with any pages.\"",
    "default": "You have not interacted with any pages.",
    "common": true,
    "optional": true
  },
  {
    "name": "noChapterInteractionText",
    "type": "text",
    "importance": "low",
    "label": "Translation for \"You have to interact with at least one page before you can see the summary.\"",
    "default": "You have to interact with at least one page before you can see the summary.",
    "common": true,
    "optional": true
  },
  {
    "name": "yourAnswersAreSubmittedForReview",
    "type": "text",
    "importance": "low",
    "label": "Translation for \"Your answers are submitted for review!\"",
    "default": "Your answers are submitted for review!",
    "common": true,
    "optional": true
  },
  {
    "name": "bookProgress",
    "type": "text",
    "importance": "low",
    "label": "Summary progress label",
    "default": "Book progress",
    "common": true,
    "optional": true
  },
  {
    "name": "interactionsProgress",
    "type": "text",
    "importance": "low",
    "label": "Interactions progress label",
    "default": "Interactions progress",
    "common": true,
    "optional": true
  },
  {
    "name": "totalScoreLabel",
    "type": "text",
    "importance": "low",
    "label": "Total score label",
    "default": "Total score",
    "common": true,
    "optional": true
  },
  {
    "name": "a11y",
    "type": "group",
    "label": "Accessibility texts",
    "common": true,
    "fields": [
      {
        "name": "progress",
        "type": "text",
        "label": "Page progress textual alternative",
        "description": "An alternative text for the visual page progress. @page and @total variables available.",
        "default": "Page @page of @total."
      },
      {
        "name": "menu",
        "type": "text",
        "label": "Label for expanding/collapsing navigation menu",
        "default": "Toggle navigation menu"
      }
    ]
  }
]
', N'', 1, null);
import {Backdrop, Button, CircularProgress, Container, CssBaseline, Snackbar, TextField} from '@material-ui/core';
import {useCallback, useEffect, useState} from "react";
import api from "../service";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function EditContent() {
    const history = useHistory();
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const token = useSelector(state => state.token)
    const [loading, setLoading] = useState(false)
    const toEditContent = useSelector(state => state.toEditContent)
    if (toEditContent) window.contentID = toEditContent.id
    if (!window.contentID) {
        history.push('/')
    }
    const [snackbar, setSnackbar] = useState({open: false, message: ''});
    const containerRef = useCallback((container) => {
        if (!container) return;
        const base_url = `${process.env.REACT_APP_WEBSITE_URL}`
        const css = ['/cache/core/core.min.css', '/cache/editor/editor.min.css']
        const js = ['/cache/core/core.min.js', '/cache/editor/editor.min.js']

        function load_js(url) {
            const script = document.createElement('script')
            script.src = `${base_url}${url}`
            const promise = new Promise(((resolve, reject) => {
                script.onload = () => resolve()
                script.onerror = reject
            }))
            container.appendChild(script)
            return promise
        }

        function load_css(url) {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = `${base_url}${url}`
            container.appendChild(link)
        }

        async function load_asset(type, asset_array) {
            switch (type) {
                case 'css':
                    for (const url of asset_array) {
                        load_css(url)
                    }
                    break
                case 'js':
                default:
                    for (const url of asset_array) {
                        await load_js(url)
                    }
                    break
            }
        }

        const script = document.createElement('script')
        script.innerHTML = `window.H5PIntegration = {
           "baseUrl": \`${process.env.REACT_APP_WEBSITE_URL}\`,
        // "ajax": {
        //     "contentUserData": "/contentUserData",
        //     "setFinished": "/setFinished"
        // },
        "ajaxPath": \`${process.env.REACT_APP_WEBSITE_URL}/api\`,
        "editor": {
            "ajaxPath": \`${process.env.REACT_APP_WEBSITE_URL}/api\`,
            "apiVersion": {
                "majorVersion": 1,
                "minorVersion": 24
            },
           "assets": {
            "css": [
                '${process.env.REACT_APP_WEBSITE_URL}/cache/core/core.min.css',
                '${process.env.REACT_APP_WEBSITE_URL}/cache/editor/editor.min.css',
            ],
            "js": [
                '${process.env.REACT_APP_WEBSITE_URL}/cache/core/core.min.js',
                '${process.env.REACT_APP_WEBSITE_URL}/cache/editor/editor.min.js',
            ]
        },
            "filesPath": "/temp",
            "libraryUrl": "${process.env.REACT_APP_WEBSITE_URL}/scripts/editor/",
            "copyrightSemantics": {
            "name": "copyright",
            "type": "group",
            "label": "Copyright information",
            "fields": [{
                "name": "title",
                "type": "text",
                "label": "Title",
                "placeholder": "",
                "optional": true
            }, {
                "name": "author",
                "type": "text",
                "label": "Author",
                "placeholder": "",
                "optional": true
            }, {
                "name": "year",
                "type": "text",
                "label": "Year(s)",
                "placeholder": "",
                "optional": true
            }, {
                "name": "source",
                "type": "text",
                "label": "Source",
                "placeholder": "",
                "optional": true,
                "regexp": {"pattern": "^http[s]?:\/\/.+", "modifiers": "i"}
            }, {
                "name": "license",
                "type": "select",
                "label": "License",
                "default": "U",
                "options": [{"value": "U", "label": "Undisclosed"}, {
                    "value": "CC BY",
                    "label": "Attribution",
                    "versions": [{"value": "4.0", "label": "4.0 International"}, {
                        "value": "3.0",
                        "label": "3.0 Unported"
                    }, {"value": "2.5", "label": "2.5 Generic"}, {
                        "value": "2.0",
                        "label": "2.0 Generic"
                    }, {"value": "1.0", "label": "1.0 Generic"}]
                }, {
                    "value": "CC BY-SA",
                    "label": "Attribution-ShareAlike",
                    "versions": [{"value": "4.0", "label": "4.0 International"}, {
                        "value": "3.0",
                        "label": "3.0 Unported"
                    }, {"value": "2.5", "label": "2.5 Generic"}, {
                        "value": "2.0",
                        "label": "2.0 Generic"
                    }, {"value": "1.0", "label": "1.0 Generic"}]
                }, {
                    "value": "CC BY-ND",
                    "label": "Attribution-NoDerivs",
                    "versions": [{"value": "4.0", "label": "4.0 International"}, {
                        "value": "3.0",
                        "label": "3.0 Unported"
                    }, {"value": "2.5", "label": "2.5 Generic"}, {
                        "value": "2.0",
                        "label": "2.0 Generic"
                    }, {"value": "1.0", "label": "1.0 Generic"}]
                }, {
                    "value": "CC BY-NC",
                    "label": "Attribution-NonCommercial",
                    "versions": [{"value": "4.0", "label": "4.0 International"}, {
                        "value": "3.0",
                        "label": "3.0 Unported"
                    }, {"value": "2.5", "label": "2.5 Generic"}, {
                        "value": "2.0",
                        "label": "2.0 Generic"
                    }, {"value": "1.0", "label": "1.0 Generic"}]
                }, {
                    "value": "CC BY-NC-SA",
                    "label": "Attribution-NonCommercial-ShareAlike",
                    "versions": [{"value": "4.0", "label": "4.0 International"}, {
                        "value": "3.0",
                        "label": "3.0 Unported"
                    }, {"value": "2.5", "label": "2.5 Generic"}, {
                        "value": "2.0",
                        "label": "2.0 Generic"
                    }, {"value": "1.0", "label": "1.0 Generic"}]
                }, {
                    "value": "CC BY-NC-ND",
                    "label": "Attribution-NonCommercial-NoDerivs",
                    "versions": [{"value": "4.0", "label": "4.0 International"}, {
                        "value": "3.0",
                        "label": "3.0 Unported"
                    }, {"value": "2.5", "label": "2.5 Generic"}, {
                        "value": "2.0",
                        "label": "2.0 Generic"
                    }, {"value": "1.0", "label": "1.0 Generic"}]
                }, {
                    "value": "GNU GPL",
                    "label": "General Public License",
                    "versions": [{"value": "v3", "label": "Version 3"}, {
                        "value": "v2",
                        "label": "Version 2"
                    }, {"value": "v1", "label": "Version 1"}]
                }, {
                    "value": "PD",
                    "label": "Public Domain",
                    "versions": [{"value": "-", "label": "-"}, {
                        "value": "CC0 1.0",
                        "label": "CC0 1.0 Universal"
                    }, {"value": "CC PDM", "label": "Public Domain Mark"}]
                }, {"value": "C", "label": "Copyright"}]
            }, {"name": "version", "type": "select", "label": "License Version", "options": []}]
        },
            "metadataSemantics": [
                {
                    "name": "a11yTitle",
                    "type": "text",
                    "label": "a11yTitle",
                    "placeholder": ""
                },
                {
                    "name": "title",
                    "type": "text",
                    "label": "Title",
                    "placeholder": ""
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
                            "type": "optgroup",
                            "label": "Creative Commons",
                            "options": [
                                {
                                    "value": "CC BY",
                                    "label": "Attribution (CC BY)",
                                    "versions": [
                                        {
                                            "value": "4.0",
                                            "label": "4.0 International"
                                        },
                                        {
                                            "value": "3.0",
                                            "label": "3.0 Unported"
                                        },
                                        {
                                            "value": "2.5",
                                            "label": "2.5 Generic"
                                        },
                                        {
                                            "value": "2.0",
                                            "label": "2.0 Generic"
                                        },
                                        {
                                            "value": "1.0",
                                            "label": "1.0 Generic"
                                        }
                                    ]
                                },
                                {
                                    "value": "CC BY-SA",
                                    "label": "Attribution-ShareAlike (CC BY-SA)",
                                    "versions": [
                                        {
                                            "value": "4.0",
                                            "label": "4.0 International"
                                        },
                                        {
                                            "value": "3.0",
                                            "label": "3.0 Unported"
                                        },
                                        {
                                            "value": "2.5",
                                            "label": "2.5 Generic"
                                        },
                                        {
                                            "value": "2.0",
                                            "label": "2.0 Generic"
                                        },
                                        {
                                            "value": "1.0",
                                            "label": "1.0 Generic"
                                        }
                                    ]
                                },
                                {
                                    "value": "CC BY-ND",
                                    "label": "Attribution-NoDerivs (CC BY-ND)",
                                    "versions": [
                                        {
                                            "value": "4.0",
                                            "label": "4.0 International"
                                        },
                                        {
                                            "value": "3.0",
                                            "label": "3.0 Unported"
                                        },
                                        {
                                            "value": "2.5",
                                            "label": "2.5 Generic"
                                        },
                                        {
                                            "value": "2.0",
                                            "label": "2.0 Generic"
                                        },
                                        {
                                            "value": "1.0",
                                            "label": "1.0 Generic"
                                        }
                                    ]
                                },
                                {
                                    "value": "CC BY-NC",
                                    "label": "Attribution-NonCommercial (CC BY-NC)",
                                    "versions": [
                                        {
                                            "value": "4.0",
                                            "label": "4.0 International"
                                        },
                                        {
                                            "value": "3.0",
                                            "label": "3.0 Unported"
                                        },
                                        {
                                            "value": "2.5",
                                            "label": "2.5 Generic"
                                        },
                                        {
                                            "value": "2.0",
                                            "label": "2.0 Generic"
                                        },
                                        {
                                            "value": "1.0",
                                            "label": "1.0 Generic"
                                        }
                                    ]
                                },
                                {
                                    "value": "CC BY-NC-SA",
                                    "label": "Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)",
                                    "versions": [
                                        {
                                            "value": "4.0",
                                            "label": "4.0 International"
                                        },
                                        {
                                            "value": "3.0",
                                            "label": "3.0 Unported"
                                        },
                                        {
                                            "value": "2.5",
                                            "label": "2.5 Generic"
                                        },
                                        {
                                            "value": "2.0",
                                            "label": "2.0 Generic"
                                        },
                                        {
                                            "value": "1.0",
                                            "label": "1.0 Generic"
                                        }
                                    ]
                                },
                                {
                                    "value": "CC BY-NC-ND",
                                    "label": "Attribution-NonCommercial-NoDerivs (CC BY-NC-ND)",
                                    "versions": [
                                        {
                                            "value": "4.0",
                                            "label": "4.0 International"
                                        },
                                        {
                                            "value": "3.0",
                                            "label": "3.0 Unported"
                                        },
                                        {
                                            "value": "2.5",
                                            "label": "2.5 Generic"
                                        },
                                        {
                                            "value": "2.0",
                                            "label": "2.0 Generic"
                                        },
                                        {
                                            "value": "1.0",
                                            "label": "1.0 Generic"
                                        }
                                    ]
                                },
                                {
                                    "value": "CC0 1.0",
                                    "label": "Public Domain Dedication (CC0)"
                                },
                                {
                                    "value": "CC PDM",
                                    "label": "Public Domain Mark (PDM)"
                                }
                            ]
                        },
                        {
                            "value": "GNU GPL",
                            "label": "General Public License v3"
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
                            "value": "C",
                            "label": "Copyright"
                        }
                    ]
                },
                {
                    "name": "licenseVersion",
                    "type": "select",
                    "label": "License Version",
                    "options": [
                        {
                            "value": "4.0",
                            "label": "4.0 International"
                        },
                        {
                            "value": "3.0",
                            "label": "3.0 Unported"
                        },
                        {
                            "value": "2.5",
                            "label": "2.5 Generic"
                        },
                        {
                            "value": "2.0",
                            "label": "2.0 Generic"
                        },
                        {
                            "value": "1.0",
                            "label": "1.0 Generic"
                        }
                    ],
                    "optional": true
                },
                {
                    "name": "yearFrom",
                    "type": "number",
                    "label": "Years (from)",
                    "placeholder": "",
                    "min": "-9999",
                    "max": "9999",
                    "optional": true
                },
                {
                    "name": "yearTo",
                    "type": "number",
                    "label": "Years (to)",
                    "placeholder": "",
                    "min": "-9999",
                    "max": "9999",
                    "optional": true
                },
                {
                    "name": "source",
                    "type": "text",
                    "label": "Source",
                    "placeholder": "",
                    "optional": true
                },
                {
                    "name": "authors",
                    "type": "list",
                    "field": {
                        "name": "author",
                        "type": "group",
                        "fields": [
                            {
                                "label": "Author's name",
                                "name": "name",
                                "optional": true,
                                "type": "text"
                            },
                            {
                                "name": "role",
                                "type": "select",
                                "label": "Author's role",
                                "default": "Author",
                                "options": [
                                    {
                                        "value": "Author",
                                        "label": "Author"
                                    },
                                    {
                                        "value": "Editor",
                                        "label": "Editor"
                                    },
                                    {
                                        "value": "Licensee",
                                        "label": "Licensee"
                                    },
                                    {
                                        "value": "Originator",
                                        "label": "Originator"
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "licenseExtras",
                    "type": "text",
                    "widget": "textarea",
                    "label": "License Extras",
                    "optional": true,
                    "description": "Any additional information about the license"
                },
                {
                    "name": "changes",
                    "type": "list",
                    "field": {
                        "name": "change",
                        "type": "group",
                        "label": "Changelog",
                        "fields": [
                            {
                                "name": "date",
                                "type": "text",
                                "label": "Date",
                                "optional": true
                            },
                            {
                                "name": "author",
                                "type": "text",
                                "label": "Changed by",
                                "optional": true
                            },
                            {
                                "name": "log",
                                "type": "text",
                                "widget": "textarea",
                                "label": "Description of change",
                                "placeholder": "",
                                "optional": true
                            }
                        ]
                    }
                },
                {
                    "name": "authorComments",
                    "type": "text",
                    "widget": "textarea",
                    "label": "Author comments",
                    "description": "Comments for the editor of the content (This text will not be published as a part of copyright info)",
                    "optional": true
                },
                {
                    "name": "contentType",
                    "type": "text",
                    "widget": "none"
                }
            ],
            "language": "fa"
        },
        "hubIsEnabled": true,
        "l10n": {
            "H5P": {
                 "fullscreen": "تمام صفحه",
                "disableFullscreen": "غیرفعال سازی تمام صفحه",
                "size": "اندازه",
                "showAdvanced": "نمایش پیشرفته",
                "hideAdvanced": "پنهان سازی حالت پیشرفته",
                "close": "بستن",
                "title": "عنوان",
                "source": "منبع",
                "contentChanged": "این محتوا از آخرین باری که مشاهده کرده اید تغییر کرده است",
                "startingOver": "شما از اول شروع می کنید",
                "by": "توسط",
                "showMore": "نمایش بیشتر",
                "showLess": "نمایش کمتر",
                "subLevel": "زیرمرحله",
                "confirmDialogHeader": "تایید واکنش",
                "confirmDialogBody": "لطفا برای ادامه کار تایید کنید. این عمل غیرقابل بازگشت می باشد",
                "cancelLabel": "لغو",
                "confirmLabel": "تایید",        
                "contentType": "نوع محتو",
                "changes": "تغییرات",
                "contentCopied": "محتوا کپی شد",
                "connectionLost": "ارتباط قطع شد.نتایج زمانی که ارتباط برقرار شود مجددا ارسال می شود",
                "connectionReestablished": "ارتباط برقرار شد",
                "resubmitScores": "در حال تلاش برای ارسال نتایج...",
                "offlineDialogHeader": "ارتباط با سرور قطع شد",
                "offlineDialogBody": "اطلاعات ارسال نشد لطفا اینترنت خود را بررسی کنید.",
                "offlineDialogRetryMessage": "در حال اتصال :num....",
                "offlineDialogRetryButtonLabel": "در حال تلاش مجدد",
                "offlineSuccessfulSubmit": "نتایج با موفقیت ارسال شد."
            }
        },
        "postUserStatistics": false,
        "saveFreq": false,
        "libraryUrl": "/scripts/core",
        // "url": "/h5p",
        "fullscreenDisabled": 0,
        // "user": {
        //     "mail": "test@example.com",
        //     "name": "Firstname Surname",
        //     "id": "1"
        // }
        }`
        container.appendChild(script)
        load_asset('css', css).then(() => {
            load_asset('js', js).then(() => {
                const scr = document.createElement('script')
                scr.innerHTML = `
        if(!ns){
              let ns = H5PEditor;
        }
    (function($) {
        H5PEditor.init = function() {
            H5PEditor.$ = H5P.jQuery;
            H5PEditor.basePath = H5PIntegration.editor.libraryUrl;
            H5PEditor.fileIcon = H5PIntegration.editor.fileIcon;
            H5PEditor.ajaxPath = H5PIntegration.editor.ajaxPath;
            H5PEditor.filesPath = H5PIntegration.editor.filesPath;
            H5PEditor.apiVersion = H5PIntegration.editor.apiVersion;
            H5PEditor.contentLanguage = H5PIntegration.editor.language;

            H5PEditor.copyrightSemantics = H5PIntegration.editor.copyrightSemantics;
            H5PEditor.metadataSemantics = H5PIntegration.editor.metadataSemantics;

            H5PEditor.assets = H5PIntegration.editor.assets;
            H5PEditor.baseUrl = \`${process.env.REACT_APP_WEBSITE_URL}\`;

            if (H5PIntegration.editor.nodeVersionId !== undefined) {
                H5PEditor.contentId = H5PIntegration.editor.nodeVersionId;
            }

            let $type = $('input[name="action"]');
            let $upload = $('.h5p-upload');
            let $create = $('.h5p-create').hide();
            let $editor = $('.h5p-editor');
            let $library = $('input[name="library"]');
            let $params = $('input[name="parameters"]');

            $upload.hide();
            if (window.editor === undefined) {
                if(window.contentID){
                    $.ajax({
                        error: function(res) {
                            window.editor = new ns.Editor(undefined, undefined, $editor[0]);
                            $create.show();
                        },
                        success: function(res) {
                            window.editor = new ns.Editor(
                                res.library,
                                res.params,
                                $editor[0]
                            );
                            $create.show();
                            // $type.change();
                        },
                        type: 'GET',
                        url: '${process.env.REACT_APP_API_URL}/params/' + window.contentID + '?token=${token}'
                    });
                } else {
                    window.editor = new ns.Editor(undefined, undefined, $editor[0]);
                    $create.show();
                }
            }
            $create.show();

            if ($type.filter(':checked').val() === 'upload') {
                $type.change();
            } else {
                $type.filter('input[value="create"]')
                    .attr('checked', true)
                    .change();
            }

            // Title label
            let $title = $('#h5p-content-form #title');
            let $label = $title.prev();
            $title.focus(function() {
                    $label.addClass('screen-reader-text');
                })
                .blur(function() {
                    if ($title.val() === '') {
                        $label.removeClass('screen-reader-text');
                    }
                })
                .focus();

            // Delete confirm
            $('.submitdelete').click(function() {
                return confirm(H5PIntegration.editor.deleteMessage);
            });
        };

        H5PEditor.getAjaxUrl = function (action, parameters) {
            let url = H5PIntegration.editor.ajaxPath;
            
            switch (action) {
                case 'content-type-cache':
                    url += '/content_types'
                    break
                case 'libraries':
                    url += '/libraries'
                    break
                case 'single-library':
                    url += '/single_library'
                    break
                case 'files':
                    url += '/upload_file'
                    break
                case 'translations':
                    url += '/translations'
                    break
                default:
                    return
            }
            url += '?token=${token}'
            if (parameters !== undefined) {
                for (let property in parameters) {
                    if (parameters.hasOwnProperty(property)) {
                        url += '&' + property + '=' + parameters[property];
                    }
                }
            }
            return url;
        };

        $(document).ready(H5PEditor.init);
    })(H5P.jQuery);`
                container.appendChild(scr)
            })
        })
    }, [])
    useEffect(() => {
        return () => delete window.editor
    }, [])

    function submit(e) {
        e.preventDefault()
        setLoading(true)
        api().put('/contents', {
            contentId: window.contentID,
            title: toEditContent.title,
            user_id: user.id,
            library: window.editor.getLibrary(),
            params: window.editor.getParams()
        }).then(res => {
            setLoading(false)
            if (!res.data.error) {
                history.push('/')
            } else {
                setSnackbar({message: res.data.error, open: true});
            }
        }).catch(err => {
            setLoading(false)
            console.log(err)
            setSnackbar({message: 'ویرایش اطلاعات با خطا مواجه شد', open: true});
        })
    }

    return (
        <>
            <CssBaseline/>
            <Container ref={containerRef} maxWidth={"md"}>
                <form method="post" encType="multipart/form-data" id="h5p-content-form">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: '1rem',
                        height: '3rem'
                    }}>
                        <TextField margin="normal" label="عنوان محتوا" type="text" inputProps={{maxLength: 50}}
                                   fullWidth
                                   value={toEditContent ? toEditContent.title : ''} required={true}
                                   onChange={e => dispatch({
                                       type: 'SET_TO_EDIT_CONTENT',
                                       payload: {...toEditContent, title: e.target.value}
                                   })}/>
                        <Button id="save-h5p" type={'submit'} name="submit" onClick={submit} color="primary"
                                style={{height: '2rem', marginRight: '1rem'}}
                                variant="contained" className="button button-primary button-large">ذخیره</Button>
                    </div>
                    <div id="post-body-content">
                        <div className="h5p-create">
                            <div className="h5p-editor"></div>
                        </div>
                    </div>
                </form>
            </Container>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={snackbar.open}
                      autoHideDuration={2000} onClose={() => setSnackbar({...snackbar, open: false})}
                      message={snackbar.message}/>
            <Backdrop open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    );
}
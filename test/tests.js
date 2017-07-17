let assert = require('chai').assert;

let Jovo = require('../lib/jovo');
let RequestBuilderAlexaSkill = require('./requestBuilderAlexaSkill').RequestBuilderAlexaSkill;
let RequestBuilderGoogleAction = require('./requestBuilderGoogleAction').RequestBuilderGoogleAction;

const webhookAlexaIntentRequestResponseJSON = '{"domain":null,"_events":{},"_eventsCount":1,"output":[],"outputEncodings":[],"outputCallbacks":[],"outputSize":0,"writable":true,"_last":false,"upgrading":false,"chunkedEncoding":false,"shouldKeepAlive":true,"useChunkedEncodingByDefault":true,"sendDate":true,"_removedHeader":{},"_contentLength":null,"_hasBody":true,"_trailer":"","finished":false,"_headerSent":false,"socket":{"connecting":false,"_hadError":false,"_handle":{"bytesRead":2006,"_externalStream":{},"fd":-1,"reading":true,"owner":"~socket","onconnection":null,"writeQueueSize":0},"_parent":null,"_host":null,"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":true,"ended":false,"endEmitted":false,"reading":true,"sync":false,"needReadable":true,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"domain":null,"_events":{"end":[null,null],"drain":[null,null],"close":[null,null]},"_eventsCount":10,"_writableState":{"objectMode":false,"highWaterMark":16384,"needDrain":false,"ending":false,"ended":false,"finished":false,"decodeStrings":false,"defaultEncoding":"utf8","length":0,"writing":false,"corked":0,"sync":true,"bufferProcessing":false,"writecb":null,"writelen":0,"bufferedRequest":null,"lastBufferedRequest":null,"pendingcb":0,"prefinished":false,"errorEmitted":false,"bufferedRequestCount":0,"corkedRequestsFree":{"next":null,"entry":null}},"writable":true,"allowHalfOpen":true,"destroyed":false,"_bytesDispatched":0,"_sockname":null,"_pendingData":null,"_pendingEncoding":"","server":{"domain":null,"_events":{},"_eventsCount":2,"_connections":1,"_handle":{"bytesRead":0,"_externalStream":{},"fd":-1,"reading":false,"owner":"~socket~server","onread":null,"writeQueueSize":0},"_usingSlaves":false,"_slaves":[],"_unref":false,"allowHalfOpen":true,"pauseOnConnect":false,"httpAllowHalfOpen":false,"timeout":120000,"_pendingResponseData":0,"_connectionKey":"6::::3000"},"_server":"~socket~server","_idleTimeout":120000,"_idleNext":{"_idleNext":"~socket","_idlePrev":"~socket","_timer":{"_list":"~socket~_idleNext"},"_unrefed":true,"msecs":120000},"_idlePrev":"~socket~_idleNext","_idleStart":8664,"parser":{"_headers":[],"_url":"","_consumed":true,"socket":"~socket","incoming":{"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":true,"ended":true,"endEmitted":true,"reading":false,"sync":false,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":false,"domain":null,"_events":{},"_eventsCount":0,"socket":"~socket","connection":"~socket","httpVersionMajor":1,"httpVersionMinor":1,"httpVersion":"1.1","complete":true,"headers":{"content-type":"application/json; charset=utf-8","accept":"application/json","accept-charset":"utf-8","signature":"aZyyXmQqNdcUTJ1Z7T7TTsJsTO58oRGVg1uBgpU5luS2+HIVmk+NMAs/ocp0T/IL7lGOJ3TtjIiDTHQs5FlndJhdTN7bjyYtpqfc6XgqZNXVuzBeu2rKJyc4iEI6dkiKusF5BXrArGVsKOv0El52Obi9lB5XEOJatpDRHL9pl+42hYHN6h1GTSIZdtkqPN0DeMbrmaK+SYGSvb0AjaEz07hie9Sf89R2Yw1PGvMp6Uk/2Y4YuD3xcYn+KfIix0UMfI2tLFm828mHNhabMAGbGAZ5iQLDW35kXvpRZ/PEWvmbIxGgsqXpeaXa1SXyp+U9qKUofubRk+t9ndzWf5XdGw==","signaturecertchainurl":"https://s3.amazonaws.com/echo.api/echo-api-cert-4.pem","content-length":"1290","host":"31bdcaa9.ngrok.io","user-agent":"Apache-HttpClient/4.5.x (Java/1.8.0_112)","x-forwarded-proto":"https","x-forwarded-for":"72.21.217.175"},"rawHeaders":["Content-Type","application/json; charset=utf-8","Accept","application/json","Accept-Charset","utf-8","Signature","aZyyXmQqNdcUTJ1Z7T7TTsJsTO58oRGVg1uBgpU5luS2+HIVmk+NMAs/ocp0T/IL7lGOJ3TtjIiDTHQs5FlndJhdTN7bjyYtpqfc6XgqZNXVuzBeu2rKJyc4iEI6dkiKusF5BXrArGVsKOv0El52Obi9lB5XEOJatpDRHL9pl+42hYHN6h1GTSIZdtkqPN0DeMbrmaK+SYGSvb0AjaEz07hie9Sf89R2Yw1PGvMp6Uk/2Y4YuD3xcYn+KfIix0UMfI2tLFm828mHNhabMAGbGAZ5iQLDW35kXvpRZ/PEWvmbIxGgsqXpeaXa1SXyp+U9qKUofubRk+t9ndzWf5XdGw==","SignatureCertChainUrl","https://s3.amazonaws.com/echo.api/echo-api-cert-4.pem","Content-Length","1290","Host","31bdcaa9.ngrok.io","User-Agent","Apache-HttpClient/4.5.x (Java/1.8.0_112)","X-Forwarded-Proto","https","X-Forwarded-For","72.21.217.175"],"trailers":{},"rawTrailers":[],"upgrade":false,"url":"/webhook","method":"POST","statusCode":null,"statusMessage":null,"client":"~socket","_consuming":true,"_dumped":false,"baseUrl":"","originalUrl":"/webhook","_parsedUrl":{"protocol":null,"slashes":null,"auth":null,"host":null,"port":null,"hostname":null,"hash":null,"search":null,"query":null,"pathname":"/webhook","path":"/webhook","href":"/webhook","_raw":"/webhook"},"params":{},"query":{},"res":"~","body":{"version":"1.0","session":{"new":true,"sessionId":"amzn1.echo-api.session.ce892f42-d6be-4097-a684-6f01f1bf31be","application":{"applicationId":"amzn1.ask.skill.da189077-4646-4d7f-9b90-722a59a8e6c4"},"user":{"userId":"amzn1.ask.account.AFO32TGCNESUA3D5SUYB3YAMT5WVPYYZENYDI7IXZUJQCNOZLFMQFS7EXOSJ5HIRGDN5NO7MFXG4TC37GNG6HTHRRYKQLUF2BVV3LSKZNDU57T3F7ADY2LICCXV7LVL5LIZS5IWWENFM3NKG4AP4P4QRH3GSJJ4DIO65R6JVXOGX2V4CLDUCT4K735WZILHGUDKQATPHZQIMW4Y"}},"context":{"AudioPlayer":{"playerActivity":"STOPPED"},"System":{"application":{"applicationId":"amzn1.ask.skill.da189077-4646-4d7f-9b90-722a59a8e6c4"},"user":{"userId":"amzn1.ask.account.AFO32TGCNESUA3D5SUYB3YAMT5WVPYYZENYDI7IXZUJQCNOZLFMQFS7EXOSJ5HIRGDN5NO7MFXG4TC37GNG6HTHRRYKQLUF2BVV3LSKZNDU57T3F7ADY2LICCXV7LVL5LIZS5IWWENFM3NKG4AP4P4QRH3GSJJ4DIO65R6JVXOGX2V4CLDUCT4K735WZILHGUDKQATPHZQIMW4Y"},"device":{"deviceId":"amzn1.ask.device.AHTBHAUKNGBO44QH6IDG4UHF2VHTKD4B7ZLLZVUQHTNNNSGBHABNZWMRXNDJJKKGB5A4QKZ4D72XEHVG4HKCRTR73XH7TPIVB3RTCQJZC4FQZPFG3DXKB4KXB3ZDTUACJ3VOZTUQCZDHY5Y62RUMMW5YN7EA","supportedInterfaces":{"AudioPlayer":{}}},"apiEndpoint":"https://api.amazonalexa.com"}},"request":{"type":"LaunchRequest","requestId":"amzn1.echo-api.request.4812a2af-8a96-47fb-9c1d-00b46c85cb12","timestamp":"2017-06-12T15:41:07Z","locale":"en-US"}},"_body":true,"route":{"path":"/webhook","stack":[{"name":"<anonymous>","keys":[],"regexp":{"fast_star":false,"fast_slash":false},"method":"post"}],"methods":{"post":true}}},"outgoing":null,"maxHeaderPairs":2000},"_paused":false,"_consuming":true,"_httpMessage":"~"},"connection":"~socket","_header":null,"_headers":{"x-powered-by":"Express"},"_headerNames":{"x-powered-by":"X-Powered-By"},"req":"~socket~parser~incoming","locals":{}}';
let response = JSON.parse(webhookAlexaIntentRequestResponseJSON);
// workaround
response.json = function(json) {};


describe('Jovo Class - Alexa Webhook tests', function() {
    let app = new Jovo.Jovo();

    let request = (new RequestBuilderAlexaSkill()).intentRequest().build();

    describe('handleRequest method', function() {
        describe('AlexaSkill', function() {
            let app = new Jovo.Jovo();

            let request = (new RequestBuilderAlexaSkill())
                .intentRequest()
                .build();

            app.handleRequest(request, response, {
                'HelloWorld': function() {
                },
            });

            it('should return alexa as platform type', function() {
                assert(
                    app.getPlatform().getType() ===
                    Jovo.PLATFORM_ENUM.ALEXA_SKILL,
                    'Wrong platform type');
            });

            it('should return INTENT_REQUEST as request type', function() {
                assert(
                    app.getPlatform().getRequestType() ===
                    Jovo.REQUEST_TYPE_ENUM.INTENT,
                    'Wrong request type');
            });
        });

        describe('GoogleAction', function() {
            let app = new Jovo.Jovo();

            let request = (new RequestBuilderGoogleAction())
                .intentRequest()
                .build();

            app.handleRequest(request, response, {
                'HelloWorld': function() {
                },
            });


            it('should return google action as platform type', function() {
                assert(
                    app.getPlatform().getType() === Jovo.PLATFORM_ENUM.GOOGLE_ACTION,
                    'Wrong platform type');
            });

            it('should return INTENT_REQUEST as request type', function() {
                assert(
                    app.getPlatform().getRequestType() === Jovo.REQUEST_TYPE_ENUM.INTENT,
                    'Wrong request type');
            });
        });
    });

    describe('validateHandler(handler)', function() {
        it('should be at least one intent in the handler', function() {
            assert.throws(
                function() {
                    let handlers = {};
                    Jovo.Jovo.validateHandlers(handlers);
                },
                Error,
                'There should be at least one intent in the handler.'
            );
        });

        it('should be the correct type', function() {
            assert.throws(
                function() {
                    let handlers = {
                        'test': 'test',
                    };
                    Jovo.Jovo.validateHandlers(handlers);
                },
                Error,
                'Wrong handler types. Should be object for a state or a function for an intent.'
            );
        });

        it('should be at least one intent in the state', function() {
            assert.throws(
                function() {
                    let handlers = {
                        'state': {},
                    };
                    Jovo.Jovo.validateHandlers(handlers);
                },
                Error,
                'There should be at least one intent in the state.'
            );
        });

        it('should be a function in the state', function() {
            assert.throws(
                function() {
                    let handlers = {
                        'state': {
                            'intent': 'test',
                        },
                    };
                    Jovo.Jovo.validateHandlers(handlers);
                },
                Error,
                'IntentHandler inside of a state should be a function'
            );


            assert.throws(
                function() {
                    let handlers = {
                        'state': {
                            'intent': {},
                        },
                    };
                    Jovo.Jovo.validateHandlers(handlers);
                },
                Error,
                'IntentHandler inside of a state should be a function'
            );
        });
    });

    describe('getIntentName', function() {
        app.handleRequest(request, response, {
            'HelloWorldIntent': function() {
            },
        });

        it('should return NameIntent', function() {
            assert(
                app.getIntentName() === 'NameIntent',
                'Wrong intent');
        });

        it.skip('should return mapped intent (standard)', function() {
            // TODO: test standard intents (AMAZON.StopIntent)
        });

        it('should return mapped intent (custom)', function() {
            app.setIntentMap({
                'NameIntent': 'HelloWorldIntent',
            });

            assert(
                app.getIntentName() === 'HelloWorldIntent',
                'Wrong intent mapped');
        });
    });

    describe('tell', function() {
        describe('AlexaSkill', function() {
            it('should return valid tell with inputs ("name":"John Doe") response', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>Hey John Doe</speak>',
                        'tell with slots');
                    assert(
                        responseObj.response.shouldEndSession === true,
                        'session ended');
                    done();
                });


                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .addSlot('name', 'John Doe')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.tell('Hey ' + app.getInput('name'));
                    },
                });
                app.execute();
            });

            it('should return valid tell with a simple card', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>Hello World</speak>',
                        'tell with slots');
                    assert(
                        responseObj.response.shouldEndSession === true,
                        'session ended');
                    assert(
                        responseObj.response.card.type === 'Simple',
                        'card type simple');
                    assert(
                        responseObj.response.card.title === 'Foo',
                        'card title foo');
                    assert(
                        responseObj.response.card.content === 'Bar',
                        'card content Bar');
                    done();
                });


                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addSimpleCard('Foo', 'Bar')
                            .tell('Hello World');
                    },
                });
                app.execute();
            });

            it('should return valid tell with an image card', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>Hello World</speak>',
                        'tell with slots');
                    assert(
                        responseObj.response.shouldEndSession === true,
                        'session ended');
                    assert(
                        responseObj.response.card.type === 'Standard',
                        'card type simple');
                    assert(
                        responseObj.response.card.title === 'Foo',
                        'card title foo');
                    assert(
                        responseObj.response.card.text === 'Bar',
                        'card text Bar');
                    assert(
                        responseObj.response.card.image.smallImageUrl === 'https://any.url.com/image.jpg',
                        'card small image');
                    assert(
                        responseObj.response.card.image.largeImageUrl === 'https://any.url.com/image.jpg',
                        'card small image');
                    done();
                });


                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addImageCard('Foo', 'Bar', 'https://any.url.com/image.jpg')
                            .tell('Hello World');
                    },
                });
                app.execute();
            });
        });
        describe('GoogleAction', function() {
            it('should return valid tell with inputs ("name":"John Doe") response', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.speech === '<speak>Hey John Doe</speak>',
                        'tell with slots');
                    assert(
                        responseObj.data.google.expectUserResponse === false, // eslint-disable-line
                        'expected user response false');
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>Hey John Doe</speak>', // eslint-disable-line
                        'tell with slots');
                    done();
                });


                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .addParameter('name', 'John Doe')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.tell('Hey ' + app.getInput('name'));
                    },
                });
                app.execute();
            });

            it('should return valid tell with a simple card', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.speech === '<speak>Hello World</speak>',
                        'tell');
                    assert(
                        responseObj.data.google.expectUserResponse === false, // eslint-disable-line
                        'expected user response false');
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>Hello World</speak>', // eslint-disable-line
                        'tell with slots');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.title === 'Foo', // eslint-disable-line
                        'foo card title');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.formattedText === 'Bar', // eslint-disable-line
                        'bar card content');
                    done();
                });


                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addSimpleCard('Foo', 'Bar')
                            .tell('Hello World');
                    },
                });
                app.execute();
            });

            it('should return valid tell with an image card', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.speech === '<speak>Hello World</speak>',
                        'tell');
                    assert(
                        responseObj.data.google.expectUserResponse === false, // eslint-disable-line
                        'expected user response false');
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>Hello World</speak>', // eslint-disable-line
                        'tell with slots');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.title === 'Foo', // eslint-disable-line
                        'foo card title');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.formattedText === 'Bar', // eslint-disable-line
                        'bar card content');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.image.url === 'https://any.url.com/image.jpg', // eslint-disable-line
                        'image url');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.image.accessibilityText === 'Foo', // eslint-disable-line
                        'accessibilityText');

                    done();
                });


                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addImageCard('Foo', 'Bar', 'https://any.url.com/image.jpg')
                            .tell('Hello World');
                    },
                });
                app.execute();
            });
        });
    });

    describe('ask', function() {
        describe('AlexaSkill', function() {
            it('should return valid simple ask ("What is your name?","Your name please") response', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>What is your name?</speak>',
                        'speech ssml');
                    assert(
                        responseObj.response.reprompt.outputSpeech.ssml === '<speak>Your name please</speak>',
                        'reprompt ssml');
                    assert(
                        responseObj.response.shouldEndSession === false,
                        'session not ended');
                    done();
                });

                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.ask('What is your name?', 'Your name please');
                    },
                });
                app.execute();
            });

            it('should return valid ask with a simple card', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>What is your name?</speak>',
                        'speech ssml');
                    assert(
                        responseObj.response.reprompt.outputSpeech.ssml === '<speak>Your name please</speak>',
                        'reprompt ssml');
                    assert(
                        responseObj.response.shouldEndSession === false,
                        'session not ended');
                    assert(
                        responseObj.response.card.type === 'Simple',
                        'card type simple');
                    assert(
                        responseObj.response.card.title === 'Foo',
                        'card title foo');
                    assert(
                        responseObj.response.card.content === 'Bar',
                        'card content Bar');
                    done();
                });


                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addSimpleCard('Foo', 'Bar')
                            .ask('What is your name?', 'Your name please');
                    },
                });
                app.execute();
            });

            it('should return valid ask with an image card', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>What is your name?</speak>',
                        'speech ssml');
                    assert(
                        responseObj.response.reprompt.outputSpeech.ssml === '<speak>Your name please</speak>',
                        'reprompt ssml');
                    assert(
                        responseObj.response.card.type === 'Standard',
                        'card type simple');
                    assert(
                        responseObj.response.card.title === 'Foo',
                        'card title foo');
                    assert(
                        responseObj.response.card.text === 'Bar',
                        'card text Bar');
                    assert(
                        responseObj.response.card.image.smallImageUrl === 'https://any.url.com/image.jpg',
                        'card small image');
                    assert(
                        responseObj.response.card.image.largeImageUrl === 'https://any.url.com/image.jpg',
                        'card small image');
                    done();
                });


                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addImageCard('Foo', 'Bar', 'https://any.url.com/image.jpg')
                            .ask('What is your name?', 'Your name please');
                    },
                });
                app.execute();
            });
        });

        describe('GoogleAction', function() {
            it('should return valid simple ask ("What is your name?","Your name please") response', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.speech === '<speak>What is your name?</speak>',
                        'tell');
                    assert(
                        responseObj.data.google.expectUserResponse === true, // eslint-disable-line
                        'expected user response false');
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>What is your name?</speak>', // eslint-disable-line
                        'tell');
                    assert(
                        responseObj.data.google.noInputPrompts[0].ssml === '<speak>Your name please</speak>', // eslint-disable-line
                        'no input prompts');


                    done();
                });

                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.ask('What is your name?', 'Your name please');
                    },
                });
                app.execute();
            });

            it('should return valid ask with a simple card', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.speech === '<speak>What is your name?</speak>',
                        'tell');
                    assert(
                        responseObj.data.google.expectUserResponse === true, // eslint-disable-line
                        'expected user response false');
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>What is your name?</speak>', // eslint-disable-line
                        'tell');
                    assert(
                        responseObj.data.google.noInputPrompts[0].ssml === '<speak>Your name please</speak>', // eslint-disable-line
                        'no input prompts');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.title === 'Foo', // eslint-disable-line
                        'foo card title');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.formattedText === 'Bar', // eslint-disable-line
                        'bar card content');
                    done();
                });


                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addSimpleCard('Foo', 'Bar')
                            .ask('What is your name?', 'Your name please');
                    },
                });
                app.execute();
            });

            it('should return valid ask with an image card', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();

                    assert(
                        responseObj.speech === '<speak>What is your name?</speak>',
                        'tell');
                    assert(
                        responseObj.data.google.expectUserResponse === true, // eslint-disable-line
                        'expected user response false');
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>What is your name?</speak>', // eslint-disable-line
                        'tell');
                    assert(
                        responseObj.data.google.noInputPrompts[0].ssml === '<speak>Your name please</speak>', // eslint-disable-line
                        'no input prompts');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.title === 'Foo', // eslint-disable-line
                        'foo card title');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.formattedText === 'Bar', // eslint-disable-line
                        'bar card content');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.image.url === 'https://any.url.com/image.jpg', // eslint-disable-line
                        'image url');
                    assert(
                        responseObj.data.google.richResponse.items[1].basicCard.image.accessibilityText === 'Foo', // eslint-disable-line
                        'accessibilityText');
                    done();
                });


                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addImageCard('Foo', 'Bar', 'https://any.url.com/image.jpg')
                            .ask('What is your name?', 'Your name please');
                    },
                });
                app.execute();
            });
        });
    });


    describe('play', function() {
        describe('AlexaSkill', function() {
            it('should return simple play response', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak><audio src="https://any.url.com/file.mp3"/></speak>',
                        'play ');
                    done();
                });

                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.play('https://any.url.com/file.mp3');
                    },
                });
                app.execute();
            });
        });

        describe('GoogleAction', function() {
            it('should return simple play response', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak><audio src="https://any.url.com/file.mp3">FallbackText</audio></speak>', // eslint-disable-line
                        'tell');
                    done();
                });

                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.play('https://any.url.com/file.mp3', 'FallbackText');
                    },
                });
                app.execute();
            });
        });
    });

    describe('toIntent', function() { // TODO works for all platforms?
        it('should skip the intent from the request and call the intent in the arguments', function(done) {
            this.timeout(1000);

            let app = new Jovo.Jovo();

            app.on('respond', function(app) {
                let responseObj = app.getPlatform().getResponseObject();
                assert(
                    responseObj.response.outputSpeech.ssml === '<speak>Hello John Doe</speak>',
                    '<speak>Hello John Doe</speak> returned');
                done();
            });


            let request = (new RequestBuilderAlexaSkill())
                .intentRequest()
                .setIntentName('HelloWorldIntent')
                .build();

            app.handleRequest(request, response, {
                'HelloWorldIntent': function() {
                    assert.throws(
                        function() {
                            app.toIntent('OtherIntents', 'John Doe');
                        },
                        Error,
                        'OtherIntents could not be found in your handler'
                    );

                    app.toIntent('OtherIntent', 'John Doe');
                },
                'OtherIntent': function(arg) {
                    app.tell('Hello ' + arg);
                },
            });
            app.execute();
        });
    });

    describe('followUpState', function() {
        describe('AlexaSkill', function() {
            it('should set the session attribute STATE with the given state', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>Hello World!</speak>',
                        '<speak>Hello World!</speak> returned');
                    assert(
                        responseObj.sessionAttributes.STATE === 'TestState',
                        'Session attribute STATE is set');
                    done();
                });

                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        assert.throws(
                            function() {
                                app.followUpState('TestStateABC').tell('Hello World!');
                            },
                            Error,
                            'State TestStateABC could not be found in your handler'
                        );
                        app.followUpState('TestState').tell('Hello World!');
                    },
                    'TestState': {
                        'OtherIntent': function(arg) {
                            // do nothing
                        },
                    },
                });
                app.execute();
            });

            it('should go to an intent inside the follow up state', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>Hello World</speak>',
                        '<speak>Hello World</speak> returned');
                    done();
                });


                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('YesIntent')
                    .addSessionAttribute('STATE', 'TestState')
                    .build();

                app.handleRequest(request, response, {
                    'YesIntent': function() {
                        // should not go here
                    },
                    'TestState': {
                        'YesIntent': function() {
                            app.tell('Hello World');
                        },
                    },
                });
                app.execute();
            });
        });
        describe('GoogleAction', function() {
            it('should set the session attribute state with the given state', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();

                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>Hello World!</speak>', // eslint-disable-line
                        'tell');

                    let found = false;
                    for (let i = 0; i < responseObj.contextOut.length; i++) {
                        if (responseObj.contextOut[i].name === 'session' &&
                            responseObj.contextOut[i].parameters['state'] === 'TestState') {
                            found = true;
                        }
                    }
                    assert(found, 'State found');

                    done();
                });

                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        assert.throws(
                            function() {
                                app.followUpState('TestStateABC').tell('Hello World!');
                            },
                            Error,
                            'State TestStateABC could not be found in your handler'
                        );
                        app.followUpState('TestState').tell('Hello World!');
                    },
                    'TestState': {
                        'OtherIntent': function(arg) {
                            // do nothing
                        },
                    },
                });
                app.execute();
            });

            it('should go to an intent inside the follow up state', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>Hello World</speak>', // eslint-disable-line
                        'tell');
                    done();
                });


                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('YesIntent')
                    .addContextParameter('session', 'state', 'TestState')
                    .build();

                app.handleRequest(request, response, {
                    'YesIntent': function() {
                        // should not go here
                    },
                    'TestState': {
                        'YesIntent': function() {
                            app.tell('Hello World');
                        },
                    },
                });
                app.execute();
            });
        });
    });

    describe('toStateIntent', function() { // TODO works for all platforms?
        it('should skip the intent from the request and call the state-intent in the arguments', function(done) {
            this.timeout(1000);

            let app = new Jovo.Jovo();

            app.on('respond', function(app) {
                let responseObj = app.getPlatform().getResponseObject();
                assert(
                    responseObj.response.outputSpeech.ssml === '<speak>Hello John Doe</speak>',
                    '<speak>Hello John Doe</speak> returned');
                done();
            });


            let request = (new RequestBuilderAlexaSkill())
                .intentRequest()
                .setIntentName('HelloWorldIntent')
                .build();

            app.handleRequest(request, response, {
                'HelloWorldIntent': function() {
                    assert.throws(
                        function() {
                            app.toStateIntent('TestStateABC', 'OtherIntents', 'John Doe');
                        },
                        Error,
                        'State TestStateABC could not be found in your handler'
                    );

                    assert.throws(
                        function() {
                            app.toStateIntent('TestState', 'OtherIntents', 'John Doe');
                        },
                        Error,
                        'TestState-OtherIntents could not be found in your handler'
                    );
                    app.toStateIntent('TestState', 'OtherIntent', 'John Doe');
                },
                'TestState': {
                    'OtherIntent': function(arg) {
                        app.tell('Hello ' + arg);
                    },
                },
            });
            app.execute();
        });
    });

    describe('Session attributes', function() {
        describe('AlexaSkill', function() {
            it('should set the session attribute ', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>Hello World!</speak>',
                        '<speak>Hello World!</speak> returned');
                    assert(
                        responseObj.sessionAttributes.name === 'John Doe',
                        'Session is set');
                    done();
                });


                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addSessionAttribute('name', 'John Doe').tell('Hello World!');
                    },
                });
                app.execute();
            });

            it('should get the session attribute ', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>Hello John Doe</speak>',
                        '<speak>Hello John Doe</speak> returned');
                    done();
                });


                let request = (new RequestBuilderAlexaSkill())
                    .intentRequest()
                    .setIntentName('AnotherIntent')
                    .addSessionAttribute('name', 'John Doe')
                    .build();

                app.handleRequest(request, response, {
                    'AnotherIntent': function() {
                        assert.throws(
                            function() {
                                app.tell('Hello ' + app.getSessionAttribute('firstname'));
                            },
                            Error,
                            'Session attribute firstname not found'
                        );

                        app.tell('Hello ' + app.getSessionAttribute('name'));
                    },
                });
                app.execute();
            });
        });

        describe('GoogleAction', function() {
            it('should set the session attribute ', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>Hello World!</speak>', // eslint-disable-line
                        'tell');
                    let found = false;
                    for (let i = 0; i < responseObj.contextOut.length; i++) {
                        if (responseObj.contextOut[i].name === 'session' &&
                            responseObj.contextOut[i].parameters['name'] === 'John Doe') {
                            found = true;
                        }
                    }
                    assert(found, 'Session attribute found');

                    done();
                });


                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('HelloWorldIntent')
                    .build();

                app.handleRequest(request, response, {
                    'HelloWorldIntent': function() {
                        app.addSessionAttribute('name', 'John Doe').tell('Hello World!');
                    },
                });
                app.execute();
            });

            it('should get the session attribute ', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>Hello John Doe</speak>', // eslint-disable-line
                        'tell');
                    done();
                });


                let request = (new RequestBuilderGoogleAction())
                    .intentRequest()
                    .setIntentName('AnotherIntent')
                    .addContextParameter('session', 'name', 'John Doe')
                    .build();

                app.handleRequest(request, response, {
                    'AnotherIntent': function() {
                        assert.throws(
                            function() {
                                app.tell('Hello ' + app.getSessionAttribute('firstname'));
                            },
                            Error,
                            'Session attribute firstname not found'
                        );

                        app.tell('Hello ' + app.getSessionAttribute('name'));
                    },
                });
                app.execute();
            });
        });

    });


    describe('LaunchRequest', function() {
        describe('AlexaSkill', function() {
            it('should call LAUNCH ', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.response.outputSpeech.ssml === '<speak>Hello World!</speak>',
                        '<speak>Hello World!</speak> returned');
                    done();
                });

                let request = (new RequestBuilderAlexaSkill())
                    .launchRequest()
                    .build();

                app.handleRequest(request, response, {
                    'LAUNCH': function() {
                        app.tell('Hello World!');
                    },
                });
                app.execute();
            });
        });

        describe('GoogleAction', function() {
            it('should call LAUNCH ', function(done) {
                this.timeout(1000);

                let app = new Jovo.Jovo();

                app.on('respond', function(app) {
                    let responseObj = app.getPlatform().getResponseObject();
                    assert(
                        responseObj.data.google.richResponse.items[0].simpleResponse.ssml === '<speak>Hello World!</speak>', // eslint-disable-line
                        'tell');
                    done();
                });

                let request = (new RequestBuilderGoogleAction())
                    .launchRequest()
                    .build();

                app.handleRequest(request, response, {
                    'LAUNCH': function() {
                        app.tell('Hello World!');
                    },
                });
                app.execute();
            });
        });
    });

    describe('EndRequest', function() { // TODO Nothing for GoogleAction?
        it('should call END from Amazon.StopIntent ', function(done) {
            this.timeout(1000);

            let app = new Jovo.Jovo();

            app.on('respond', function(app) {
                let responseObj = app.getPlatform().getResponseObject();
                assert(
                    responseObj.response.outputSpeech.ssml === '<speak>Hello World!</speak>',
                    '<speak>Hello World!</speak> returned');
                done();
            });


            let request = (new RequestBuilderAlexaSkill())
                .intentRequest()
                .setIntentName('AMAZON.StopIntent')
                .build();

            app.handleRequest(request, response, {
                'END': function() {
                    app.tell('Hello World!');
                },
            });
            app.execute();
        });
        it('should call END - empty response if no END defined ', function(done) {
            this.timeout(1000);

            let app = new Jovo.Jovo();

            app.on('respond', function(app) {
                let responseObj = app.getPlatform().getResponseObject();
                assert(
                    responseObj.response.shouldEndSession === true,
                    'empty response');
                assert(
                    !responseObj.response.outputSpeech,
                    'empty response');
                done();
            });


            let request = (new RequestBuilderAlexaSkill())
                .intentRequest()
                .setIntentName('AMAZON.StopIntent')
                .build();

            app.handleRequest(request, response, {
                'LAUNCH': function() {
                    // Do nothing
                },
            });
            app.execute();
        });
    });
});


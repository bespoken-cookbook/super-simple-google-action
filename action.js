var bst = require("bespoken-tools");

var simpleFunction = function (request, response) {
    console.log("Request: " + request);
    var intent = request.body.inputs[0].intent;

    // var responseJSON = {
    //     "conversation_token": "[]",
    //     "expect_user_response": false,
    //     "final_response": {
    //         "rich_response": {
    //             "items": [
    //                 {
    //                     "simple_response": {
    //                         "text_to_speech": "Hi there",
    //                         "display_text": "Hi there"
    //                     }
    //                 }
    //             ]
    //         }
    //     }
    // };

    var responseJSON = {
        "conversationToken": "{\"state\":null,\"data\":{}}",
        "expectUserResponse": true,
        "expectedInputs": [
            {
                "inputPrompt": {
                    "richInitialPrompt": {
                        "items": [
                            {
                                "simpleResponse": {
                                    "textToSpeech": "Howdy! I can tell you fun facts about almost any number, like 42. What do you have in mind?",
                                    "displayText": "Howdy! I can tell you fun facts about almost any number. What do you have in mind?"
                                }
                            }
                        ],
                        "suggestions": []
                    }
                },
                "possibleIntents": [
                    {
                        "intent": "actions.intent.TEXT"
                    },
                    {
                        "intent": "assistant.intent.action.MAIN"
                    }
                ]
            }
        ],
        "response_metadata": {
            "status": {
                "code": 200
            },
            "query_match_info": {
                "query_matched": true,
                "intent": "Hello"
            }
        }
    }

    response.json(responseJSON);
};

exports.simpleFunction = bst.Logless.capture("d05a3ed5-9676-4ed5-80cb-32d572bd993b", simpleFunction);
//exports.simpleFunction = simpleFunction;
/*jshint node:true*/

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };
const bodyParser = require('body-parser');

module.exports = function(app) {
  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended:true}));

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });

  app.get('/api/students', function(req, res){
    return res.status(200).json({
      students: [
        {id: 1, name: 'Howie', age: 21},
        {id: 2, name: 'Hela', age: 23},
        {id: 3, name: 'Felix', age: 1}
      ]
    });
  });

  app.get('/api/templates/1', function(req, res){
    return res.status(200).json({
      id: 1,
      header: [
        {
          parent_id: "",
          label: "Patient Information",
          options: {},
          type: "section",
          item_id: "60481281-E7F3-4EC3-8737-CED632C3C708"
        },
        {
          parent_id: "60481281-E7F3-4EC3-8737-CED632C3C708",
          label: "Medical Record Number:",
          options: {},
          type: "textsingle",
          item_id: "f3245d46-ea77-11e1-aff1-0800200c9a66"
        },
        {
          parent_id: "60481281-E7F3-4EC3-8737-CED632C3C708",
          label: "Patient Name:",
          options: {},
          type: "textsingle",
          item_id: "f3245d41-ea77-11e1-aff1-0800200c9a66"
        },
        {
          parent_id: "60481281-E7F3-4EC3-8737-CED632C3C708",
          label: "Type of Surgery:",
          options: {},
          type: "textsingle",
          item_id: "f3245d40-ea77-11e1-aff1-0800200c9a66"
        },
        {
          parent_id: "60481281-E7F3-4EC3-8737-CED632C3C708",
          label: "Date/Time of Surgery:",
          options: {},
          type: "datetime",
          item_id: "f3245d42-ea77-11e1-aff1-0800200c9a66"
        },
        {
          parent_id: "60481281-E7F3-4EC3-8737-CED632C3C708",
          label: "Surgeon:",
          options: {},
          type: "textsingle",
          item_id: "f3245d43-ea77-11e1-aff1-0800200c9a66"
        },
        {
          parent_id: "60481281-E7F3-4EC3-8737-CED632C3C708",
          label: "Location:",
          options: {},
          type: "address",
          item_id: "f3245d44-ea77-11e1-aff1-0800200c9a66"
        },
        {
          parent_id: "60481281-E7F3-4EC3-8737-CED632C3C708",
          label: "Assisting Personnel:",
          options: {},
          type: "text",
          item_id: "f3245d45-ea77-11e1-aff1-0800200c9a66"
        }
      ],
      items: [
        {
          parent_id: "",
          label: "Before induction of anaesthesia",
          options: {},
          type: "section",
          item_id: "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D"
        },
        {
          parent_id: "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
          label: "Has the patient confirmed his/her identity, site, procedure, and consent?",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "A0393E5E-A736-4A2D-8AD7-C4BF39C59266"
        },
        {
          parent_id: "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
          label: "Is the site marked?",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "D1BAD0A2-B283-44AD-94A7-E5F072C09F00"
        },
        {
          parent_id: "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
          label: "Is the anaesthesia machine and medication check complete? ",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "ABED4CCB-866A-4299-8106-14D14625B401"
        },
        {
          parent_id: "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
          label: "Is the pulse oximeter on the patient and functioning?",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "FF89D3F5-86B2-4A0F-89C5-BDE298C3D336"
        },
        {
          parent_id: "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
          label: "Does the patient have a:",
          options: {
            visible_in_report: true,
            visible_in_audit: true
          },
          type: "information",
          item_id: "7B95D560-6F71-44B9-B07E-C5EBB8DDE1E4"
        },
        {
          parent_id: "7B95D560-6F71-44B9-B07E-C5EBB8DDE1E4",
          label: "Known allergy?",
          options: {
            response_set: "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
          },
          type: "question",
          item_id: "BB76C7EB-0436-457A-B649-FA3170469B8B"
        },
        {
          parent_id: "7B95D560-6F71-44B9-B07E-C5EBB8DDE1E4",
          label: "Difficult airway or aspiration risk?",
          options: {
            response_set: "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
          },
          type: "question",
          item_id: "8D3FCCD6-1CA7-4FD0-9878-4FE8ACC5661D"
        },
        {
          parent_id: "7B95D560-6F71-44B9-B07E-C5EBB8DDE1E4",
          label: "Risk of >500ml blood loss (7ml/kg in children)?",
          options: {
            response_set: "6F2CC6F0-57CC-43A1-A9A2-594A8C8F03FF"
          },
          type: "question",
          item_id: "6BB6A0D0-1A61-4B70-9814-721F8875BE27"
        },
        {
          parent_id: "",
          label: "Before skin incision",
          options: {},
          type: "section",
          item_id: "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7"
        },
        {
          parent_id: "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
          label: "Confirm all team members have introduced themselves by name and role",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "712A99A3-F133-4CD6-B93D-0AFCE44375CC"
        },
        {
          parent_id: "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
          label: "Confirm the patient's name, procedure, and where the incision will be made",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "55959514-7746-4AA0-95E6-89863434C1E5"
        },
        {
          parent_id: "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
          label: "Had antibiotic prophylaxis have been given within the last 60 minutes? ",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "9E582846-0A5F-47EA-963C-DBFCC8D1391A"
        },
        {
          parent_id: "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
          label: "To Anaesthetist:",
          options: {
            visible_in_report: true,
            visible_in_audit: true
          },
          type: "information",
          item_id: "491869B2-9B40-4872-AD5E-146F783235DC"
        },
        {
          parent_id: "491869B2-9B40-4872-AD5E-146F783235DC",
          label: "Are there any patient specific concerns? ",
          options: {
            response_set: "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
          },
          type: "question",
          item_id: "FD802B6B-C817-4EF5-A0F2-10900E315E23"
        },
        {
          parent_id: "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
          label: "To Nursing Team:",
          options: {
            visible_in_report: true,
            visible_in_audit: true
          },
          type: "information",
          item_id: "BBF7D0AD-E3B6-48AD-82E2-47C4265683EA"
        },
        {
          parent_id: "BBF7D0AD-E3B6-48AD-82E2-47C4265683EA",
          label: "Has sterility (including indicator results) been confirmed?",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "8411A6A2-42C6-4423-8F9E-5CDAAAD9BC9D"
        },
        {
          parent_id: "BBF7D0AD-E3B6-48AD-82E2-47C4265683EA",
          label: "Are there equipment issues or any concerns?",
          options: {
            response_set: "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
          },
          type: "question",
          item_id: "6F3C8310-6C2F-4915-B13E-83F813C45332"
        },
        {
          parent_id: "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
          label: "Is essential imaging displayed?",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "E8A627FA-8477-46B5-B049-97BE2100A2B5"
        },
        {
          parent_id: "",
          label: "Before patient leaves operating room",
          options: {},
          type: "section",
          item_id: "88A53348-B6F9-448D-84D1-D82B4C2A318C"
        },
        {
          parent_id: "88A53348-B6F9-448D-84D1-D82B4C2A318C",
          label: "Nurse Verbally Confirms:",
          options: {
            visible_in_report: true,
            visible_in_audit: true
          },
          type: "information",
          item_id: "00F76492-3912-4FC0-895A-6D7DDD7D0CD3"
        },
        {
          parent_id: "00F76492-3912-4FC0-895A-6D7DDD7D0CD3",
          label: "The name of the procedure?",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "D5C6C594-339A-40C4-8760-0660C1210C1C"
        },
        {
          parent_id: "00F76492-3912-4FC0-895A-6D7DDD7D0CD3",
          label: "Completion of instrument, sponge and needle counts",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "4A75A5FB-FC73-4217-B471-1DC2B96D81AF"
        },
        {
          parent_id: "00F76492-3912-4FC0-895A-6D7DDD7D0CD3",
          label: "Specimen labelling (read specimen labels aloud, including patient name)",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "337E516E-C69B-42E5-915E-F050C470DEE6"
        },
        {
          parent_id: "00F76492-3912-4FC0-895A-6D7DDD7D0CD3",
          label: "Whether there are any equipment problems to be addressed",
          options: {
            response_set: "91674924-55B0-42B5-B8BF-4740F9D05E08"
          },
          type: "question",
          item_id: "FAD6E66E-C8B8-43A8-94C0-DDD46E99E739"
        },
        {
          parent_id: "88A53348-B6F9-448D-84D1-D82B4C2A318C",
          label: "To Surgeon, Anaesthetist and Nurse:",
          options: {
            visible_in_report: true,
            visible_in_audit: true
          },
          type: "information",
          item_id: "F9D846B9-7B4D-4031-A1FB-085CE3589D87"
        },
        {
          parent_id: "F9D846B9-7B4D-4031-A1FB-085CE3589D87",
          label: "Are there any key concerns for recovery and management of this patient? ",
          options: {
            response_set: "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
          },
          type: "question",
          item_id: "B839C4D3-198F-41AC-BE59-AE1A535B8102"
        }
      ],
      revision_key: "1E90D7E7-BF20-4BD8-9027-EBD1E1D8ACA0",
      server_revision_key: "1DB7BC39-DDD7-4018-8FF0-9FB9B0F8124B",
      template_id: "template_4A2F5535DE4F4913924760E0F68C3D79",
      template_data: {
        authorship: {
          author: {
            id: "user_bfc3130d00bd4b0c91cfbaa5bc5eaa20",
            name: "Tania Clarke",
            context: "user"
          },
          owner: {
            id: "user_bfc3130d00bd4b0c91cfbaa5bc5eaa20",
            name: "Tania Clarke",
            context: "user"
          },
          country: "au",
          date_downloaded: null,
          device_id: "E17CD591-7BB1-4C3F-B486-60D70F1E8A08",
          date_created: "2015-07-15T04:21:55.000Z",
          version: "2.0i",
          date_modified: "2015-07-16T03:36:15.000Z",
          language: "en",
          date_synced: null
        },
        response_sets: {
          "6F2CC6F0-57CC-43A1-A9A2-594A8C8F03FF": {
            id: "6F2CC6F0-57CC-43A1-A9A2-594A8C8F03FF",
            type: "question",
            responses: [
              {
                colour: "61,192,139",
                score: 1,
                id: "D1AFE52C-FF48-4F7F-A37B-CA0A23915F50",
                enable_score: true,
                image: "",
                short_label: "",
                label: "No",
                type: "text"
              },
              {
                colour: "61,192,139",
                score: 1,
                id: "FC8BB5C1-6AB2-4149-883C-AD5B813ECE11",
                enable_score: true,
                image: "",
                short_label: "",
                label: "Yes & 2 IV/central access & fluids planned",
                type: "text"
              }
            ]
          },
          "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC": {
            id: "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC",
            type: "question",
            responses: [
              {
                colour: "61,192,139",
                score: 1,
                id: "69713794-C273-4322-B903-1650692B2860",
                enable_score: true,
                image: "",
                short_label: "",
                label: "No",
                type: "text"
              },
              {
                colour: "255,0,21",
                score: 0,
                id: "A71844D0-4DC5-4133-B38F-A8D99A593C4E",
                enable_score: true,
                image: "",
                short_label: "",
                label: "Yes",
                type: "text"
              }
            ]
          },
          "91674924-55B0-42B5-B8BF-4740F9D05E08": {
            id: "91674924-55B0-42B5-B8BF-4740F9D05E08",
            type: "question",
            responses: [
              {
                colour: "61,192,139",
                score: 1,
                id: "B6B46442-3788-410D-81E5-92DEC01EA25A",
                enable_score: true,
                image: "",
                short_label: "",
                label: "Yes",
                type: "text"
              },
              {
                colour: "255,0,21",
                score: 0,
                id: "4155621E-25F7-4EEE-B2BF-AC4D9BC8283C",
                enable_score: true,
                image: "",
                short_label: "",
                label: "No",
                type: "text"
              }
            ]
          }
        },
        media: {
          "447CE849-45DD-4258-B8B2-144EFFA3E517": {
            media_id: "447CE849-45DD-4258-B8B2-144EFFA3E517",
            date_created: "2015-07-15T06:55:45.000Z",
            file_ext: "jpg",
            label: "Template Image"
          }
        },
        mandatory_mark_as_complete: false,
        metrics: {
          est_duration: -1,
          avg_duration: -1,
          date_last_used: -1,
          use_count: 0,
          rating: -1
        },
        in_trash_can: false,
        metadata: {
          doc_no: "[number]",
          doc_no_prefix: "",
          subindustry: 2,
          image: "447CE849-45DD-4258-B8B2-144EFFA3E517",
          doc_no_suffix: "",
          description: "The WHO Surgical Safety Checklist was developed after extensive consult" +
          "ation aiming to decrease errors and adverse events, and increase teamwork and communication in surgery.<br/><br/>The surgical checklist has gone on to show significant reduction in both morbidity and mortality and is now used by a majority of surgical providers around the world. The checklist is not intended to be comprehensive. Additions and modifications to fit local practice are encouraged. ",
          "industry": 10,
          name: "World Health Organization Surgical Safety Checklist"
        }
      },
      type: "template",
      deleted: false,
      trashed: false,
      name: "World Health Organization Surgical Safety Checklist",
      _id: "template_4A2F5535DE4F4913924760E0F68C3D79",
      libraryId: "template_4A2F5535DE4F4913924760E0F68C3D79"
    });
  });
};

import * as React from "react";
import { Everything } from "./interfaces";
import { noop } from "lodash";

export class Wrapper extends React.Component<any, any> {
  render() {
    return <div> {this.props.children} </div>;
  }
}

/** Factory function for empty state object. */
export function fakeState(dispatcher: Function = noop): Everything {
  return {
    "router": {
      push: noop
    },
    "peripherals": {
      "isEditing": true
    },
    "dispatch": dispatcher,
    "location": {
      pathname: "/app",
      search: "?id=twowing-silverbell&p1=SpeciesInfo",
      hash: "sdasd",
      action: "PUSH",
      key: "foo0",
      query: { "foo": "bar" }
    },
    "auth": {
      "token": {
        "unencoded": {
          "sub": "admin@admin.com",
          "iat": 1493125497,
          "jti": "e47900e1-9e4e-4b57-84bf-b3653dc8965b",
          "iss": "//localhost:3000",
          "exp": 1496581497,
          "mqtt": "0.0.0.0",
          "os_update_server": "https://api.github.com/repos/farmbot/farmbot_os/releases/latest",
          "fw_update_server": "https://api.github.com/repos/FarmBot/farmbot-arduino-firmware/releases/latest",
          "bot": "device_169"
        },
        "encoded": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE0OTMxMjU0OTcsImp0aSI6ImU0NzkwMGUxLTllNGUtNGI1Ny04NGJmLWIzNjUzZGM4OTY1YiIsImlzcyI6Ii8vbG9jYWxob3N0OjMwMDAiLCJleHAiOjE0OTY1ODE0OTcsIm1xdHQiOiIwLjAuMC4wIiwib3NfdXBkYXRlX3NlcnZlciI6Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvZmFybWJvdC9mYXJtYm90X29zL3JlbGVhc2VzL2xhdGVzdCIsImZ3X3VwZGF0ZV9zZXJ2ZXIiOiJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL0Zhcm1Cb3QvZmFybWJvdC1hcmR1aW5vLWZpcm13YXJlL3JlbGVhc2VzL2xhdGVzdCIsImJvdCI6ImRldmljZV8xNjkifQ.cx9Kz-__VSBtTTZ5OMiSM8m4IOuBkeJxDcxbHn1oIgLMEkzwP6UDxMH2yVKgsaADKTuJ1mG5Hl8NfpTpRiOq4pwFDdGo3GiWocgLC7rA-g3EclugnmJhrlhveAJ1BYYMKjb3Dng_0EOOtjR9jEHdDovJ09oEPsyzYQQJ0DBJq_2EmeFp3krdccK1cq8eLSVtBNoyFvK8Ci7TIkGPTUQvprWkkFH_dah_HmDr60ll2hry0ipR37cgtEpqZeRWWSG_AqCxpLewJlDVIZE21J7lXFGiv6qHuuN_h3EozEmG98TBiPpKgqP4FfHfT7akHjytZNyGMEbyqYfkXmFYEOtP3g"
      },
      "user": {
        "id": 110,
        "device_id": 169,
        "name": "Administrator",
        "email": "admin@admin.com",
        "created_at": "2017-04-25T12:17:28.853Z",
        "updated_at": "2017-04-25T12:21:43.538Z",
      }
    },
    "bot": {
      "stepSize": 100,
      "hardware": {
        "mcu_params": {},
        "location": [
          -1,
          -1,
          -1
        ],
        "pins": {},
        "configuration": {},
        "informational_settings": {},
        "user_env": {},
        "process_info": {
          "farmwares": [],
          "regimens": [],
          "farm_events": []
        }
      },
      "dirty": false,
      "currentOSVersion": "3.1.3"
    },
    "config": {
      "host": "localhost",
      "port": "3000"
    },
    "draggable": {
      "dataTransfer": {}
    },
    "resources": {
      "consumers": {
        "regimens": {
          "dailyOffsetMs": 300000,
          "weeks": [
            {
              "days": {
                "day1": false,
                "day2": false,
                "day3": false,
                "day4": false,
                "day5": false,
                "day6": false,
                "day7": false
              }
            }
          ]
        },
        "sequences": {
          current: undefined
        },
        "farm_designer": {
          "selectedPlant": undefined,
          "cropSearchQuery": "",
          "cropSearchResults": []
        }
      },
      "loaded": [
        "device",
        "plants",
        "farm_events",
        "images",
        "logs",
        "peripherals",
        "points",
        "regimens",
        "sequences",
        "tools",
        "tool_slots"
      ],
      "index": {
        "all": [
          "device.169.0",
          "plants.52.1",
          "plants.53.2",
          "plants.54.3",
          "farm_events.12.4",
          "farm_events.11.5",
          "images.23.6",
          "images.22.7",
          "logs.92.8",
          "logs.93.9",
          "logs.94.10",
          "logs.95.11",
          "logs.96.12",
          "logs.97.13",
          "logs.98.14",
          "logs.99.15",
          "logs.100.16",
          "logs.101.17",
          "logs.102.18",
          "logs.103.19",
          "logs.104.20",
          "logs.105.21",
          "logs.106.22",
          "logs.107.23",
          "logs.108.24",
          "logs.109.25",
          "logs.110.26",
          "logs.111.27",
          "logs.112.28",
          "logs.113.29",
          "logs.114.30",
          "logs.115.31",
          "logs.116.32",
          "logs.117.33",
          "logs.118.34",
          "logs.119.35",
          "logs.120.36",
          "logs.121.37",
          "logs.122.38",
          "logs.123.39",
          "logs.124.40",
          "logs.125.41",
          "logs.126.42",
          "peripherals.7.43",
          "points.116.44",
          "points.117.45",
          "points.118.46",
          "points.119.47",
          "points.120.48",
          "points.121.49",
          "points.122.50",
          "points.123.51",
          "points.124.52",
          "points.125.53",
          "points.126.54",
          "points.127.55",
          "points.128.56",
          "points.129.57",
          "points.130.58",
          "points.131.59",
          "points.132.60",
          "points.133.61",
          "points.134.62",
          "points.135.63",
          "points.136.64",
          "points.137.65",
          "points.138.66",
          "points.139.67",
          "points.140.68",
          "points.141.69",
          "points.142.70",
          "points.143.71",
          "points.144.72",
          "points.145.73",
          "points.146.74",
          "points.147.75",
          "points.148.76",
          "points.149.77",
          "points.150.78",
          "points.151.79",
          "points.152.80",
          "points.153.81",
          "points.154.82",
          "points.155.83",
          "points.156.84",
          "points.157.85",
          "points.158.86",
          "points.159.87",
          "points.160.88",
          "points.161.89",
          "points.162.90",
          "points.163.91",
          "points.164.92",
          "points.165.93",
          "points.166.94",
          "points.167.95",
          "points.168.96",
          "points.169.97",
          "points.170.98",
          "points.171.99",
          "points.172.100",
          "points.173.101",
          "points.174.102",
          "points.175.103",
          "points.176.104",
          "points.177.105",
          "points.178.106",
          "points.179.107",
          "points.180.108",
          "points.181.109",
          "points.182.110",
          "points.183.111",
          "points.184.112",
          "points.185.113",
          "points.186.114",
          "points.187.115",
          "points.188.116",
          "points.189.117",
          "points.190.118",
          "points.191.119",
          "points.192.120",
          "points.193.121",
          "points.194.122",
          "points.195.123",
          "points.196.124",
          "points.197.125",
          "points.198.126",
          "points.199.127",
          "points.200.128",
          "points.201.129",
          "points.202.130",
          "points.203.131",
          "points.204.132",
          "points.205.133",
          "points.206.134",
          "points.207.135",
          "points.208.136",
          "points.209.137",
          "points.210.138",
          "points.211.139",
          "points.212.140",
          "points.213.141",
          "points.214.142",
          "points.215.143",
          "regimens.13.144",
          "sequences.74.145",
          "sequences.75.146",
          "tools.33.148",
          "tool_slots.39.149",
          "crops.0.150",
          "crops.0.151",
          "crops.0.152"
        ],
        "byKind": {
          "device": [
            "device.169.0"
          ],
          "farm_events": [
            "farm_events.12.4",
            "farm_events.11.5"
          ],
          "images": [
            "images.23.6",
            "images.22.7"
          ],
          "logs": [
            "logs.92.8",
            "logs.93.9",
            "logs.94.10",
            "logs.95.11",
            "logs.96.12",
            "logs.97.13",
            "logs.98.14",
            "logs.99.15",
            "logs.100.16",
            "logs.101.17",
            "logs.102.18",
            "logs.103.19",
            "logs.104.20",
            "logs.105.21",
            "logs.106.22",
            "logs.107.23",
            "logs.108.24",
            "logs.109.25",
            "logs.110.26",
            "logs.111.27",
            "logs.112.28",
            "logs.113.29",
            "logs.114.30",
            "logs.115.31",
            "logs.116.32",
            "logs.117.33",
            "logs.118.34",
            "logs.119.35",
            "logs.120.36",
            "logs.121.37",
            "logs.122.38",
            "logs.123.39",
            "logs.124.40",
            "logs.125.41",
            "logs.126.42"
          ],
          "peripherals": [
            "peripherals.7.43"
          ],
          "plants": [
            "plants.52.1",
            "plants.53.2",
            "plants.54.3"
          ],
          "crops": [
            "crops.0.150",
            "crops.0.151",
            "crops.0.152"
          ],
          "points": [
            "points.116.44",
            "points.117.45",
            "points.118.46",
            "points.119.47",
            "points.120.48",
            "points.121.49",
            "points.122.50",
            "points.123.51",
            "points.124.52",
            "points.125.53",
            "points.126.54",
            "points.127.55",
            "points.128.56",
            "points.129.57",
            "points.130.58",
            "points.131.59",
            "points.132.60",
            "points.133.61",
            "points.134.62",
            "points.135.63",
            "points.136.64",
            "points.137.65",
            "points.138.66",
            "points.139.67",
            "points.140.68",
            "points.141.69",
            "points.142.70",
            "points.143.71",
            "points.144.72",
            "points.145.73",
            "points.146.74",
            "points.147.75",
            "points.148.76",
            "points.149.77",
            "points.150.78",
            "points.151.79",
            "points.152.80",
            "points.153.81",
            "points.154.82",
            "points.155.83",
            "points.156.84",
            "points.157.85",
            "points.158.86",
            "points.159.87",
            "points.160.88",
            "points.161.89",
            "points.162.90",
            "points.163.91",
            "points.164.92",
            "points.165.93",
            "points.166.94",
            "points.167.95",
            "points.168.96",
            "points.169.97",
            "points.170.98",
            "points.171.99",
            "points.172.100",
            "points.173.101",
            "points.174.102",
            "points.175.103",
            "points.176.104",
            "points.177.105",
            "points.178.106",
            "points.179.107",
            "points.180.108",
            "points.181.109",
            "points.182.110",
            "points.183.111",
            "points.184.112",
            "points.185.113",
            "points.186.114",
            "points.187.115",
            "points.188.116",
            "points.189.117",
            "points.190.118",
            "points.191.119",
            "points.192.120",
            "points.193.121",
            "points.194.122",
            "points.195.123",
            "points.196.124",
            "points.197.125",
            "points.198.126",
            "points.199.127",
            "points.200.128",
            "points.201.129",
            "points.202.130",
            "points.203.131",
            "points.204.132",
            "points.205.133",
            "points.206.134",
            "points.207.135",
            "points.208.136",
            "points.209.137",
            "points.210.138",
            "points.211.139",
            "points.212.140",
            "points.213.141",
            "points.214.142",
            "points.215.143"
          ],
          "regimens": [
            "regimens.13.144"
          ],
          "sequences": [
            "sequences.74.145",
            "sequences.75.146"
          ],
          "tool_slots": [
            "tool_slots.39.149"
          ],
          "tools": [
            "tools.33.148"
          ],
          "users": []
        },
        "byKindAndId": {
          "device.169": "device.169.0",
          "plants.52": "plants.52.1",
          "plants.53": "plants.53.2",
          "plants.54": "plants.54.3",
          "farm_events.12": "farm_events.12.4",
          "farm_events.11": "farm_events.11.5",
          "images.23": "images.23.6",
          "images.22": "images.22.7",
          "logs.92": "logs.92.8",
          "logs.93": "logs.93.9",
          "logs.94": "logs.94.10",
          "logs.95": "logs.95.11",
          "logs.96": "logs.96.12",
          "logs.97": "logs.97.13",
          "logs.98": "logs.98.14",
          "logs.99": "logs.99.15",
          "logs.100": "logs.100.16",
          "logs.101": "logs.101.17",
          "logs.102": "logs.102.18",
          "logs.103": "logs.103.19",
          "logs.104": "logs.104.20",
          "logs.105": "logs.105.21",
          "logs.106": "logs.106.22",
          "logs.107": "logs.107.23",
          "logs.108": "logs.108.24",
          "logs.109": "logs.109.25",
          "logs.110": "logs.110.26",
          "logs.111": "logs.111.27",
          "logs.112": "logs.112.28",
          "logs.113": "logs.113.29",
          "logs.114": "logs.114.30",
          "logs.115": "logs.115.31",
          "logs.116": "logs.116.32",
          "logs.117": "logs.117.33",
          "logs.118": "logs.118.34",
          "logs.119": "logs.119.35",
          "logs.120": "logs.120.36",
          "logs.121": "logs.121.37",
          "logs.122": "logs.122.38",
          "logs.123": "logs.123.39",
          "logs.124": "logs.124.40",
          "logs.125": "logs.125.41",
          "logs.126": "logs.126.42",
          "peripherals.7": "peripherals.7.43",
          "points.116": "points.116.44",
          "points.117": "points.117.45",
          "points.118": "points.118.46",
          "points.119": "points.119.47",
          "points.120": "points.120.48",
          "points.121": "points.121.49",
          "points.122": "points.122.50",
          "points.123": "points.123.51",
          "points.124": "points.124.52",
          "points.125": "points.125.53",
          "points.126": "points.126.54",
          "points.127": "points.127.55",
          "points.128": "points.128.56",
          "points.129": "points.129.57",
          "points.130": "points.130.58",
          "points.131": "points.131.59",
          "points.132": "points.132.60",
          "points.133": "points.133.61",
          "points.134": "points.134.62",
          "points.135": "points.135.63",
          "points.136": "points.136.64",
          "points.137": "points.137.65",
          "points.138": "points.138.66",
          "points.139": "points.139.67",
          "points.140": "points.140.68",
          "points.141": "points.141.69",
          "points.142": "points.142.70",
          "points.143": "points.143.71",
          "points.144": "points.144.72",
          "points.145": "points.145.73",
          "points.146": "points.146.74",
          "points.147": "points.147.75",
          "points.148": "points.148.76",
          "points.149": "points.149.77",
          "points.150": "points.150.78",
          "points.151": "points.151.79",
          "points.152": "points.152.80",
          "points.153": "points.153.81",
          "points.154": "points.154.82",
          "points.155": "points.155.83",
          "points.156": "points.156.84",
          "points.157": "points.157.85",
          "points.158": "points.158.86",
          "points.159": "points.159.87",
          "points.160": "points.160.88",
          "points.161": "points.161.89",
          "points.162": "points.162.90",
          "points.163": "points.163.91",
          "points.164": "points.164.92",
          "points.165": "points.165.93",
          "points.166": "points.166.94",
          "points.167": "points.167.95",
          "points.168": "points.168.96",
          "points.169": "points.169.97",
          "points.170": "points.170.98",
          "points.171": "points.171.99",
          "points.172": "points.172.100",
          "points.173": "points.173.101",
          "points.174": "points.174.102",
          "points.175": "points.175.103",
          "points.176": "points.176.104",
          "points.177": "points.177.105",
          "points.178": "points.178.106",
          "points.179": "points.179.107",
          "points.180": "points.180.108",
          "points.181": "points.181.109",
          "points.182": "points.182.110",
          "points.183": "points.183.111",
          "points.184": "points.184.112",
          "points.185": "points.185.113",
          "points.186": "points.186.114",
          "points.187": "points.187.115",
          "points.188": "points.188.116",
          "points.189": "points.189.117",
          "points.190": "points.190.118",
          "points.191": "points.191.119",
          "points.192": "points.192.120",
          "points.193": "points.193.121",
          "points.194": "points.194.122",
          "points.195": "points.195.123",
          "points.196": "points.196.124",
          "points.197": "points.197.125",
          "points.198": "points.198.126",
          "points.199": "points.199.127",
          "points.200": "points.200.128",
          "points.201": "points.201.129",
          "points.202": "points.202.130",
          "points.203": "points.203.131",
          "points.204": "points.204.132",
          "points.205": "points.205.133",
          "points.206": "points.206.134",
          "points.207": "points.207.135",
          "points.208": "points.208.136",
          "points.209": "points.209.137",
          "points.210": "points.210.138",
          "points.211": "points.211.139",
          "points.212": "points.212.140",
          "points.213": "points.213.141",
          "points.214": "points.214.142",
          "points.215": "points.215.143",
          "regimens.13": "regimens.13.144",
          "sequences.74": "sequences.74.145",
          "sequences.75": "sequences.75.146",
          "tools.33": "tools.33.148",
          "tool_slots.39": "tool_slots.39.149"
        },
        "references": {
          "device.169.0": {
            "kind": "device",
            "body": {
              "id": 169,
              "name": "laminal-bird-407",
              "webcam_url": "foo.jpg"
            },
            "uuid": "device.169.0"
          },
          "plants.52.1": {
            "kind": "plants",
            "body": {
              "id": 52,
              "x": 348,
              "y": 499,
              "radius": 31,
              "name": "contorted-fire-1965",
              "img_url": "http://placehold.it/200x150",
              "openfarm_slug": "carrot",
              "created_at": "2017-04-25T12:17:31.990Z",
              "device_id": 169,
              "planting_area_id": undefined
            },
            "uuid": "plants.52.1"
          },
          "plants.53.2": {
            "kind": "plants",
            "body": {
              "id": 53,
              "x": 201,
              "y": 434,
              "radius": 12,
              "name": "exstipulate-shadow-5128",
              "img_url": "http://placehold.it/200x150",
              "openfarm_slug": "radish",
              "created_at": "2017-04-25T12:17:32.023Z",
              "device_id": 169,
              "planting_area_id": undefined
            },
            "uuid": "plants.53.2"
          },
          "plants.54.3": {
            "kind": "plants",
            "body": {
              "id": 54,
              "x": 162,
              "y": 424,
              "radius": 28,
              "name": "fenestrate-wave-4052",
              "img_url": "http://placehold.it/200x150",
              "openfarm_slug": "tomato",
              "created_at": "2017-04-25T12:17:32.068Z",
              "device_id": 169,
              "planting_area_id": undefined
            },
            "uuid": "plants.54.3"
          },
          "farm_events.12.4": {
            "kind": "farm_events",
            "body": {
              "id": 12,
              "start_time": "2017-04-22T05:00:00.000Z",
              "end_time": "2017-04-30T05:00:00.000Z",
              "repeat": 3,
              "time_unit": "daily",
              "executable_id": 75,
              "executable_type": "Sequence",
              "calendar": [
                "2017-04-28T05:00:00.000Z"
              ]
            },
            "uuid": "farm_events.12.4"
          },
          "farm_events.11.5": {
            "kind": "farm_events",
            "body": {
              "id": 11,
              "start_time": "2017-04-21T05:00:00.000Z",
              "end_time": "2017-05-01T05:00:00.000Z",
              "repeat": 2,
              "time_unit": "daily",
              "executable_id": 74,
              "executable_type": "Sequence",
              "calendar": [
                "2017-04-27T05:00:00.000Z",
                "2017-04-29T05:00:00.000Z"
              ]
            },
            "uuid": "farm_events.11.5"
          },
          "images.23.6": {
            "kind": "images",
            "body": {
              "id": 23,
              "device_id": 169,
              "attachment_processed_at": undefined,
              "updated_at": "2017-04-25T12:17:30.460Z",
              "created_at": "2017-04-25T12:17:30.460Z",
              "attachment_url": "http://placehold.it/640%3Ftext=Processing...",
              "meta": {
                "x": 78,
                "y": 75,
                "z": 265
              }
            },
            "uuid": "images.23.6"
          },
          "images.22.7": {
            "kind": "images",
            "body": {
              "id": 22,
              "device_id": 169,
              "attachment_processed_at": undefined,
              "updated_at": "2017-04-25T12:17:30.184Z",
              "created_at": "2017-04-25T12:17:30.184Z",
              "attachment_url": "http://placehold.it/640%3Ftext=Processing...",
              "meta": {
                "x": 309,
                "y": 395,
                "z": 331
              }
            },
            "uuid": "images.22.7"
          },
          "logs.92.8": {
            "kind": "logs",
            "body": {
              "id": 92,
              "created_at": 1493122649,
              "message": "deploy customized e-services",
              "meta": {
                "type": [
                  "info"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.92.8"
          },
          "logs.93.9": {
            "kind": "logs",
            "body": {
              "id": 93,
              "created_at": 1493122650,
              "message": "incubate back-end metrics",
              "meta": {
                "type": [
                  "busy"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.93.9"
          },
          "logs.94.10": {
            "kind": "logs",
            "body": {
              "id": 94,
              "created_at": 1493122650,
              "message": "benchmark ubiquitous functionalities",
              "meta": {
                "type": [
                  "warn"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.94.10"
          },
          "logs.95.11": {
            "kind": "logs",
            "body": {
              "id": 95,
              "created_at": 1493122650,
              "message": "whiteboard front-end e-tailers",
              "meta": {
                "type": [
                  "success"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.95.11"
          },
          "logs.96.12": {
            "kind": "logs",
            "body": {
              "id": 96,
              "created_at": 1493122650,
              "message": "architect open-source vortals",
              "meta": {
                "type": [
                  "info"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.96.12"
          },
          "logs.97.13": {
            "kind": "logs",
            "body": {
              "id": 97,
              "created_at": 1493122650,
              "message": "brand wireless mindshare",
              "meta": {
                "type": [
                  "warn"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.97.13"
          },
          "logs.98.14": {
            "kind": "logs",
            "body": {
              "id": 98,
              "created_at": 1493122650,
              "message": "visualize cross-media vortals",
              "meta": {
                "type": [
                  "error"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.98.14"
          },
          "logs.99.15": {
            "kind": "logs",
            "body": {
              "id": 99,
              "created_at": 1493122650,
              "message": "orchestrate bricks-and-clicks supply-chains",
              "meta": {
                "type": [
                  "info"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.99.15"
          },
          "logs.100.16": {
            "kind": "logs",
            "body": {
              "id": 100,
              "created_at": 1493122650,
              "message": "morph killer applications",
              "meta": {
                "type": [
                  "warn"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.100.16"
          },
          "logs.101.17": {
            "kind": "logs",
            "body": {
              "id": 101,
              "created_at": 1493122650,
              "message": "target back-end markets",
              "meta": {
                "type": [
                  "error"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.101.17"
          },
          "logs.102.18": {
            "kind": "logs",
            "body": {
              "id": 102,
              "created_at": 1493122650,
              "message": "streamline sexy infrastructures",
              "meta": {
                "type": [
                  "busy"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.102.18"
          },
          "logs.103.19": {
            "kind": "logs",
            "body": {
              "id": 103,
              "created_at": 1493122650,
              "message": "synergize sticky web services",
              "meta": {
                "type": [
                  "warn"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.103.19"
          },
          "logs.104.20": {
            "kind": "logs",
            "body": {
              "id": 104,
              "created_at": 1493122650,
              "message": "seize end-to-end applications",
              "meta": {
                "type": [
                  "error"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.104.20"
          },
          "logs.105.21": {
            "kind": "logs",
            "body": {
              "id": 105,
              "created_at": 1493122650,
              "message": "deploy magnetic channels",
              "meta": {
                "type": [
                  "info"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.105.21"
          },
          "logs.106.22": {
            "kind": "logs",
            "body": {
              "id": 106,
              "created_at": 1493122650,
              "message": "recontextualize e-business interfaces",
              "meta": {
                "type": [
                  "busy"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.106.22"
          },
          "logs.107.23": {
            "kind": "logs",
            "body": {
              "id": 107,
              "created_at": 1493122650,
              "message": "engage plug-and-play initiatives",
              "meta": {
                "type": [
                  "info"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.107.23"
          },
          "logs.108.24": {
            "kind": "logs",
            "body": {
              "id": 108,
              "created_at": 1493122650,
              "message": "envisioneer virtual paradigms",
              "meta": {
                "type": [
                  "fun"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.108.24"
          },
          "logs.109.25": {
            "kind": "logs",
            "body": {
              "id": 109,
              "created_at": 1493122650,
              "message": "generate real-time deliverables",
              "meta": {
                "type": [
                  "busy"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.109.25"
          },
          "logs.110.26": {
            "kind": "logs",
            "body": {
              "id": 110,
              "created_at": 1493122650,
              "message": "embrace 24/7 e-tailers",
              "meta": {
                "type": [
                  "info"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.110.26"
          },
          "logs.111.27": {
            "kind": "logs",
            "body": {
              "id": 111,
              "created_at": 1493122650,
              "message": "monetize enterprise paradigms",
              "meta": {
                "type": [
                  "success"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.111.27"
          },
          "logs.112.28": {
            "kind": "logs",
            "body": {
              "id": 112,
              "created_at": 1493122650,
              "message": "e-enable collaborative infomediaries",
              "meta": {
                "type": [
                  "error"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.112.28"
          },
          "logs.113.29": {
            "kind": "logs",
            "body": {
              "id": 113,
              "created_at": 1493122650,
              "message": "engage frictionless convergence",
              "meta": {
                "type": [
                  "error"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.113.29"
          },
          "logs.114.30": {
            "kind": "logs",
            "body": {
              "id": 114,
              "created_at": 1493122650,
              "message": "facilitate 24/365 infomediaries",
              "meta": {
                "type": [
                  "success"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.114.30"
          },
          "logs.115.31": {
            "kind": "logs",
            "body": {
              "id": 115,
              "created_at": 1493122650,
              "message": "innovate sexy platforms",
              "meta": {
                "type": [
                  "warn"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.115.31"
          },
          "logs.116.32": {
            "kind": "logs",
            "body": {
              "id": 116,
              "created_at": 1493122650,
              "message": "cultivate 24/7 ROI",
              "meta": {
                "type": [
                  "fun"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.116.32"
          },
          "logs.117.33": {
            "kind": "logs",
            "body": {
              "id": 117,
              "created_at": 1493122650,
              "message": "redefine open-source supply-chains",
              "meta": {
                "type": [
                  "success"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.117.33"
          },
          "logs.118.34": {
            "kind": "logs",
            "body": {
              "id": 118,
              "created_at": 1493122650,
              "message": "productize e-business architectures",
              "meta": {
                "type": [
                  "busy"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.118.34"
          },
          "logs.119.35": {
            "kind": "logs",
            "body": {
              "id": 119,
              "created_at": 1493122650,
              "message": "syndicate visionary synergies",
              "meta": {
                "type": [
                  "info"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.119.35"
          },
          "logs.120.36": {
            "kind": "logs",
            "body": {
              "id": 120,
              "created_at": 1493122650,
              "message": "unleash viral models",
              "meta": {
                "type": [
                  "fun"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.120.36"
          },
          "logs.121.37": {
            "kind": "logs",
            "body": {
              "id": 121,
              "created_at": 1493122650,
              "message": "cultivate 24/7 platforms",
              "meta": {
                "type": [
                  "fun"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.121.37"
          },
          "logs.122.38": {
            "kind": "logs",
            "body": {
              "id": 122,
              "created_at": 1493122650,
              "message": "orchestrate interactive markets",
              "meta": {
                "type": [
                  "info"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.122.38"
          },
          "logs.123.39": {
            "kind": "logs",
            "body": {
              "id": 123,
              "created_at": 1493122650,
              "message": "matrix robust e-tailers",
              "meta": {
                "type": [
                  "fun"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.123.39"
          },
          "logs.124.40": {
            "kind": "logs",
            "body": {
              "id": 124,
              "created_at": 1493122650,
              "message": "enable rich solutions",
              "meta": {
                "type": [
                  "fun"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.124.40"
          },
          "logs.125.41": {
            "kind": "logs",
            "body": {
              "id": 125,
              "created_at": 1493122650,
              "message": "maximize cutting-edge e-services",
              "meta": {
                "type": [
                  "success"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.125.41"
          },
          "logs.126.42": {
            "kind": "logs",
            "body": {
              "id": 126,
              "created_at": 1493122650,
              "message": "deploy collaborative applications",
              "meta": {
                "type": [
                  "info"
                ]
              },
              "channels": [
                "toast"
              ]
            },
            "uuid": "logs.126.42"
          },
          "peripherals.7.43": {
            "kind": "peripherals",
            "body": {
              "id": 7,
              "pin": 13,
              "mode": 0,
              "label": "LED"
            },
            "uuid": "peripherals.7.43"
          },
          "points.116.44": {
            "kind": "points",
            "body": {
              "id": 116,
              "x": 237,
              "y": 237,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:32.318Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.116.44"
          },
          "points.117.45": {
            "kind": "points",
            "body": {
              "id": 117,
              "x": 144,
              "y": 179,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:32.795Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.117.45"
          },
          "points.118.46": {
            "kind": "points",
            "body": {
              "id": 118,
              "x": 246,
              "y": 270,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:32.833Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.118.46"
          },
          "points.119.47": {
            "kind": "points",
            "body": {
              "id": 119,
              "x": 186,
              "y": 146,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:32.878Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.119.47"
          },
          "points.120.48": {
            "kind": "points",
            "body": {
              "id": 120,
              "x": 185,
              "y": 283,
              "z": 5,
              "radius": 1,
              "created_at": "2017-04-25T12:17:32.912Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.120.48"
          },
          "points.121.49": {
            "kind": "points",
            "body": {
              "id": 121,
              "x": 203,
              "y": 228,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:32.944Z",
              "meta": {
                "color": "pink",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.121.49"
          },
          "points.122.50": {
            "kind": "points",
            "body": {
              "id": 122,
              "x": 203,
              "y": 385,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:32.989Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.122.50"
          },
          "points.123.51": {
            "kind": "points",
            "body": {
              "id": 123,
              "x": 374,
              "y": 232,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:33.022Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.123.51"
          },
          "points.124.52": {
            "kind": "points",
            "body": {
              "id": 124,
              "x": 116,
              "y": 137,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:33.055Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.124.52"
          },
          "points.125.53": {
            "kind": "points",
            "body": {
              "id": 125,
              "x": 153,
              "y": 259,
              "z": 5,
              "radius": 1,
              "created_at": "2017-04-25T12:17:33.100Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.125.53"
          },
          "points.126.54": {
            "kind": "points",
            "body": {
              "id": 126,
              "x": 234,
              "y": 201,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:33.133Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.126.54"
          },
          "points.127.55": {
            "kind": "points",
            "body": {
              "id": 127,
              "x": 302,
              "y": 255,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:33.177Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.127.55"
          },
          "points.128.56": {
            "kind": "points",
            "body": {
              "id": 128,
              "x": 213,
              "y": 251,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:33.211Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.128.56"
          },
          "points.129.57": {
            "kind": "points",
            "body": {
              "id": 129,
              "x": 198,
              "y": 215,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:33.244Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.129.57"
          },
          "points.130.58": {
            "kind": "points",
            "body": {
              "id": 130,
              "x": 290,
              "y": 312,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:33.288Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.130.58"
          },
          "points.131.59": {
            "kind": "points",
            "body": {
              "id": 131,
              "x": 219,
              "y": 120,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:33.322Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.131.59"
          },
          "points.132.60": {
            "kind": "points",
            "body": {
              "id": 132,
              "x": 394,
              "y": 107,
              "z": 5,
              "radius": 5,
              "created_at": "2017-04-25T12:17:33.355Z",
              "meta": {
                "color": "pink",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.132.60"
          },
          "points.133.61": {
            "kind": "points",
            "body": {
              "id": 133,
              "x": 70,
              "y": 234,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:33.399Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.133.61"
          },
          "points.134.62": {
            "kind": "points",
            "body": {
              "id": 134,
              "x": 174,
              "y": 394,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:33.432Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.134.62"
          },
          "points.135.63": {
            "kind": "points",
            "body": {
              "id": 135,
              "x": 151,
              "y": 137,
              "z": 5,
              "radius": 0,
              "created_at": "2017-04-25T12:17:33.466Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.135.63"
          },
          "points.136.64": {
            "kind": "points",
            "body": {
              "id": 136,
              "x": 280,
              "y": 428,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:33.499Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.136.64"
          },
          "points.137.65": {
            "kind": "points",
            "body": {
              "id": 137,
              "x": 261,
              "y": 251,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:33.543Z",
              "meta": {
                "color": "pink",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.137.65"
          },
          "points.138.66": {
            "kind": "points",
            "body": {
              "id": 138,
              "x": 252,
              "y": 113,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:33.588Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.138.66"
          },
          "points.139.67": {
            "kind": "points",
            "body": {
              "id": 139,
              "x": 283,
              "y": 319,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:33.632Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.139.67"
          },
          "points.140.68": {
            "kind": "points",
            "body": {
              "id": 140,
              "x": 224,
              "y": 227,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:33.688Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.140.68"
          },
          "points.141.69": {
            "kind": "points",
            "body": {
              "id": 141,
              "x": 211,
              "y": 229,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:33.721Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.141.69"
          },
          "points.142.70": {
            "kind": "points",
            "body": {
              "id": 142,
              "x": 221,
              "y": 272,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:33.765Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.142.70"
          },
          "points.143.71": {
            "kind": "points",
            "body": {
              "id": 143,
              "x": 223,
              "y": 177,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:33.799Z",
              "meta": {
                "color": "blue",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.143.71"
          },
          "points.144.72": {
            "kind": "points",
            "body": {
              "id": 144,
              "x": 58,
              "y": 78,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:33.843Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.144.72"
          },
          "points.145.73": {
            "kind": "points",
            "body": {
              "id": 145,
              "x": 104,
              "y": 204,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:33.865Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.145.73"
          },
          "points.146.74": {
            "kind": "points",
            "body": {
              "id": 146,
              "x": 282,
              "y": 209,
              "z": 5,
              "radius": 10,
              "created_at": "2017-04-25T12:17:33.910Z",
              "meta": {
                "color": "blue",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.146.74"
          },
          "points.147.75": {
            "kind": "points",
            "body": {
              "id": 147,
              "x": 258,
              "y": 173,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:33.954Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.147.75"
          },
          "points.148.76": {
            "kind": "points",
            "body": {
              "id": 148,
              "x": 314,
              "y": 335,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:33.987Z",
              "meta": {
                "color": "green",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.148.76"
          },
          "points.149.77": {
            "kind": "points",
            "body": {
              "id": 149,
              "x": 234,
              "y": 213,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:34.021Z",
              "meta": {
                "color": "green",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.149.77"
          },
          "points.150.78": {
            "kind": "points",
            "body": {
              "id": 150,
              "x": 326,
              "y": 250,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:34.054Z",
              "meta": {
                "color": "pink",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.150.78"
          },
          "points.151.79": {
            "kind": "points",
            "body": {
              "id": 151,
              "x": 407,
              "y": 345,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:34.098Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.151.79"
          },
          "points.152.80": {
            "kind": "points",
            "body": {
              "id": 152,
              "x": 131,
              "y": 257,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:34.132Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.152.80"
          },
          "points.153.81": {
            "kind": "points",
            "body": {
              "id": 153,
              "x": 217,
              "y": 222,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:34.165Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.153.81"
          },
          "points.154.82": {
            "kind": "points",
            "body": {
              "id": 154,
              "x": 293,
              "y": 346,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:34.198Z",
              "meta": {
                "color": "pink",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.154.82"
          },
          "points.155.83": {
            "kind": "points",
            "body": {
              "id": 155,
              "x": 154,
              "y": 276,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:34.232Z",
              "meta": {
                "color": "pink",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.155.83"
          },
          "points.156.84": {
            "kind": "points",
            "body": {
              "id": 156,
              "x": 235,
              "y": 334,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:34.276Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.156.84"
          },
          "points.157.85": {
            "kind": "points",
            "body": {
              "id": 157,
              "x": 169,
              "y": 358,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:34.309Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.157.85"
          },
          "points.158.86": {
            "kind": "points",
            "body": {
              "id": 158,
              "x": 113,
              "y": 253,
              "z": 5,
              "radius": 2,
              "created_at": "2017-04-25T12:17:34.365Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.158.86"
          },
          "points.159.87": {
            "kind": "points",
            "body": {
              "id": 159,
              "x": 197,
              "y": 127,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:34.398Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.159.87"
          },
          "points.160.88": {
            "kind": "points",
            "body": {
              "id": 160,
              "x": 331,
              "y": 272,
              "z": 5,
              "radius": 1,
              "created_at": "2017-04-25T12:17:34.442Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.160.88"
          },
          "points.161.89": {
            "kind": "points",
            "body": {
              "id": 161,
              "x": 311,
              "y": 200,
              "z": 5,
              "radius": 3,
              "created_at": "2017-04-25T12:17:34.476Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.161.89"
          },
          "points.162.90": {
            "kind": "points",
            "body": {
              "id": 162,
              "x": 307,
              "y": 289,
              "z": 5,
              "radius": 5,
              "created_at": "2017-04-25T12:17:34.510Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.162.90"
          },
          "points.163.91": {
            "kind": "points",
            "body": {
              "id": 163,
              "x": 128,
              "y": 188,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:34.564Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.163.91"
          },
          "points.164.92": {
            "kind": "points",
            "body": {
              "id": 164,
              "x": 210,
              "y": 152,
              "z": 5,
              "radius": 12,
              "created_at": "2017-04-25T12:17:34.609Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.164.92"
          },
          "points.165.93": {
            "kind": "points",
            "body": {
              "id": 165,
              "x": 313,
              "y": 154,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:34.653Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.165.93"
          },
          "points.166.94": {
            "kind": "points",
            "body": {
              "id": 166,
              "x": 219,
              "y": 252,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:34.720Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.166.94"
          },
          "points.167.95": {
            "kind": "points",
            "body": {
              "id": 167,
              "x": 249,
              "y": 150,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:34.851Z",
              "meta": {
                "color": "green",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.167.95"
          },
          "points.168.96": {
            "kind": "points",
            "body": {
              "id": 168,
              "x": 328,
              "y": 122,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:34.897Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.168.96"
          },
          "points.169.97": {
            "kind": "points",
            "body": {
              "id": 169,
              "x": 365,
              "y": 103,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:34.931Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.169.97"
          },
          "points.170.98": {
            "kind": "points",
            "body": {
              "id": 170,
              "x": 54,
              "y": 99,
              "z": 5,
              "radius": 12,
              "created_at": "2017-04-25T12:17:34.986Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.170.98"
          },
          "points.171.99": {
            "kind": "points",
            "body": {
              "id": 171,
              "x": 221,
              "y": 152,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:35.286Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.171.99"
          },
          "points.172.100": {
            "kind": "points",
            "body": {
              "id": 172,
              "x": 230,
              "y": 203,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:35.319Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.172.100"
          },
          "points.173.101": {
            "kind": "points",
            "body": {
              "id": 173,
              "x": 113,
              "y": 363,
              "z": 5,
              "radius": 12,
              "created_at": "2017-04-25T12:17:35.352Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.173.101"
          },
          "points.174.102": {
            "kind": "points",
            "body": {
              "id": 174,
              "x": 246,
              "y": 181,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:35.397Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.174.102"
          },
          "points.175.103": {
            "kind": "points",
            "body": {
              "id": 175,
              "x": 77,
              "y": 248,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:35.441Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.175.103"
          },
          "points.176.104": {
            "kind": "points",
            "body": {
              "id": 176,
              "x": 355,
              "y": 126,
              "z": 5,
              "radius": 5,
              "created_at": "2017-04-25T12:17:35.486Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.176.104"
          },
          "points.177.105": {
            "kind": "points",
            "body": {
              "id": 177,
              "x": 200,
              "y": 340,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:35.530Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.177.105"
          },
          "points.178.106": {
            "kind": "points",
            "body": {
              "id": 178,
              "x": 139,
              "y": 337,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:35.574Z",
              "meta": {
                "color": "blue",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.178.106"
          },
          "points.179.107": {
            "kind": "points",
            "body": {
              "id": 179,
              "x": 187,
              "y": 34,
              "z": 5,
              "radius": 12,
              "created_at": "2017-04-25T12:17:35.630Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.179.107"
          },
          "points.180.108": {
            "kind": "points",
            "body": {
              "id": 180,
              "x": 36,
              "y": 93,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:35.663Z",
              "meta": {
                "color": "pink",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.180.108"
          },
          "points.181.109": {
            "kind": "points",
            "body": {
              "id": 181,
              "x": 290,
              "y": 222,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:35.708Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.181.109"
          },
          "points.182.110": {
            "kind": "points",
            "body": {
              "id": 182,
              "x": 207,
              "y": 110,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:35.752Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.182.110"
          },
          "points.183.111": {
            "kind": "points",
            "body": {
              "id": 183,
              "x": 144,
              "y": 183,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:35.785Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.183.111"
          },
          "points.184.112": {
            "kind": "points",
            "body": {
              "id": 184,
              "x": 146,
              "y": 126,
              "z": 5,
              "radius": 5,
              "created_at": "2017-04-25T12:17:35.829Z",
              "meta": {
                "color": undefined,
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.184.112"
          },
          "points.185.113": {
            "kind": "points",
            "body": {
              "id": 185,
              "x": 271,
              "y": 145,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:35.874Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.185.113"
          },
          "points.186.114": {
            "kind": "points",
            "body": {
              "id": 186,
              "x": 117,
              "y": 220,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:35.918Z",
              "meta": {
                "color": "pink",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.186.114"
          },
          "points.187.115": {
            "kind": "points",
            "body": {
              "id": 187,
              "x": 187,
              "y": 359,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:35.952Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.187.115"
          },
          "points.188.116": {
            "kind": "points",
            "body": {
              "id": 188,
              "x": 207,
              "y": 386,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:35.997Z",
              "meta": {
                "color": "blue",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.188.116"
          },
          "points.189.117": {
            "kind": "points",
            "body": {
              "id": 189,
              "x": 197,
              "y": 238,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:36.040Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.189.117"
          },
          "points.190.118": {
            "kind": "points",
            "body": {
              "id": 190,
              "x": 317,
              "y": 340,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:36.074Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.190.118"
          },
          "points.191.119": {
            "kind": "points",
            "body": {
              "id": 191,
              "x": 166,
              "y": 167,
              "z": 5,
              "radius": 7,
              "created_at": "2017-04-25T12:17:36.107Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.191.119"
          },
          "points.192.120": {
            "kind": "points",
            "body": {
              "id": 192,
              "x": 92,
              "y": 399,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:36.151Z",
              "meta": {
                "color": "pink",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.192.120"
          },
          "points.193.121": {
            "kind": "points",
            "body": {
              "id": 193,
              "x": 338,
              "y": 197,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:36.185Z",
              "meta": {
                "color": "blue",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.193.121"
          },
          "points.194.122": {
            "kind": "points",
            "body": {
              "id": 194,
              "x": 289,
              "y": 215,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:36.241Z",
              "meta": {
                "color": "blue",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.194.122"
          },
          "points.195.123": {
            "kind": "points",
            "body": {
              "id": 195,
              "x": 77,
              "y": 276,
              "z": 5,
              "radius": 5,
              "created_at": "2017-04-25T12:17:36.286Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.195.123"
          },
          "points.196.124": {
            "kind": "points",
            "body": {
              "id": 196,
              "x": 164,
              "y": 224,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:36.318Z",
              "meta": {
                "color": "green",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.196.124"
          },
          "points.197.125": {
            "kind": "points",
            "body": {
              "id": 197,
              "x": 95,
              "y": 229,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:36.362Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.197.125"
          },
          "points.198.126": {
            "kind": "points",
            "body": {
              "id": 198,
              "x": 83,
              "y": 242,
              "z": 5,
              "radius": 12,
              "created_at": "2017-04-25T12:17:36.408Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.198.126"
          },
          "points.199.127": {
            "kind": "points",
            "body": {
              "id": 199,
              "x": 311,
              "y": 386,
              "z": 5,
              "radius": 10,
              "created_at": "2017-04-25T12:17:36.440Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.199.127"
          },
          "points.200.128": {
            "kind": "points",
            "body": {
              "id": 200,
              "x": 186,
              "y": 326,
              "z": 5,
              "radius": 3,
              "created_at": "2017-04-25T12:17:36.473Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.200.128"
          },
          "points.201.129": {
            "kind": "points",
            "body": {
              "id": 201,
              "x": 301,
              "y": 123,
              "z": 5,
              "radius": 5,
              "created_at": "2017-04-25T12:17:36.529Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.201.129"
          },
          "points.202.130": {
            "kind": "points",
            "body": {
              "id": 202,
              "x": 254,
              "y": 394,
              "z": 5,
              "radius": 5,
              "created_at": "2017-04-25T12:17:36.562Z",
              "meta": {
                "color": "yellow",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.202.130"
          },
          "points.203.131": {
            "kind": "points",
            "body": {
              "id": 203,
              "x": 372,
              "y": 170,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:36.595Z",
              "meta": {
                "color": "orange",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.203.131"
          },
          "points.204.132": {
            "kind": "points",
            "body": {
              "id": 204,
              "x": 255,
              "y": 190,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:36.640Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.204.132"
          },
          "points.205.133": {
            "kind": "points",
            "body": {
              "id": 205,
              "x": 169,
              "y": 261,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:36.674Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.205.133"
          },
          "points.206.134": {
            "kind": "points",
            "body": {
              "id": 206,
              "x": 181,
              "y": 264,
              "z": 5,
              "radius": 5,
              "created_at": "2017-04-25T12:17:36.717Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.206.134"
          },
          "points.207.135": {
            "kind": "points",
            "body": {
              "id": 207,
              "x": 99,
              "y": 216,
              "z": 5,
              "radius": 5,
              "created_at": "2017-04-25T12:17:36.763Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.207.135"
          },
          "points.208.136": {
            "kind": "points",
            "body": {
              "id": 208,
              "x": 145,
              "y": 223,
              "z": 5,
              "radius": 11,
              "created_at": "2017-04-25T12:17:36.806Z",
              "meta": {
                "color": "blue",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.208.136"
          },
          "points.209.137": {
            "kind": "points",
            "body": {
              "id": 209,
              "x": 182,
              "y": 215,
              "z": 5,
              "radius": 8,
              "created_at": "2017-04-25T12:17:36.850Z",
              "meta": {
                "color": "gray",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.209.137"
          },
          "points.210.138": {
            "kind": "points",
            "body": {
              "id": 210,
              "x": 46,
              "y": 292,
              "z": 5,
              "radius": 14,
              "created_at": "2017-04-25T12:17:36.884Z",
              "meta": {
                "color": "green",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.210.138"
          },
          "points.211.139": {
            "kind": "points",
            "body": {
              "id": 211,
              "x": 386,
              "y": 306,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:36.917Z",
              "meta": {
                "color": "purple",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.211.139"
          },
          "points.212.140": {
            "kind": "points",
            "body": {
              "id": 212,
              "x": 121,
              "y": 199,
              "z": 5,
              "radius": 4,
              "created_at": "2017-04-25T12:17:36.961Z",
              "meta": {
                "color": "green",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.212.140"
          },
          "points.213.141": {
            "kind": "points",
            "body": {
              "id": 213,
              "x": 155,
              "y": 235,
              "z": 5,
              "radius": 3,
              "created_at": "2017-04-25T12:17:37.006Z",
              "meta": {
                "color": "green",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.213.141"
          },
          "points.214.142": {
            "kind": "points",
            "body": {
              "id": 214,
              "x": 96,
              "y": 237,
              "z": 5,
              "radius": 6,
              "created_at": "2017-04-25T12:17:37.062Z",
              "meta": {
                "color": "red",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.214.142"
          },
          "points.215.143": {
            "kind": "points",
            "body": {
              "id": 215,
              "x": 367,
              "y": 70,
              "z": 5,
              "radius": 9,
              "created_at": "2017-04-25T12:17:37.106Z",
              "meta": {
                "color": "blue",
                "created_by": "plant-detection"
              }
            },
            "uuid": "points.215.143"
          },
          "regimens.13.144": {
            "kind": "regimens",
            "body": {
              "id": 13,
              "name": "Test Regimen 456",
              "color": "gray",
              "device_id": 169,
              "regimen_items": [
                {
                  "id": 14,
                  "regimen_id": 13,
                  "sequence_id": 74,
                  "time_offset": 300000
                },
                {
                  "id": 15,
                  "regimen_id": 13,
                  "sequence_id": 74,
                  "time_offset": 173100000
                },
                {
                  "id": 16,
                  "regimen_id": 13,
                  "sequence_id": 74,
                  "time_offset": 345900000
                }
              ]
            },
            "uuid": "regimens.13.144"
          },
          "sequences.74.145": {
            "kind": "sequences",
            "body": {
              "id": 74,
              "name": "Goto 0, 0, 0",
              "color": "gray",
              "body": [
                {
                  "kind": "move_absolute",
                  "args": {
                    "location": {
                      "kind": "coordinate",
                      "args": {
                        "x": 0,
                        "y": 0,
                        "z": 0
                      }
                    },
                    "offset": {
                      "kind": "coordinate",
                      "args": {
                        "x": 0,
                        "y": 0,
                        "z": 0
                      }
                    },
                    "speed": 800
                  }
                }
              ],
              "args": {
                "is_outdated": false,
                "version": 4
              },
              "kind": "sequence"
            },
            "uuid": "sequences.74.145"
          },
          "sequences.75.146": {
            "kind": "sequences",
            "body": {
              "id": 75,
              "name": "Every Node",
              "color": "gray",
              "body": [
                {
                  "kind": "move_absolute",
                  "args": {
                    "offset": {
                      "kind": "coordinate",
                      "args": {
                        "x": 0,
                        "y": 0,
                        "z": 0
                      }
                    },
                    "speed": 800,
                    "location": {
                      "args": {
                        "tool_id": 33
                      },
                      "kind": "tool"
                    }
                  }
                },
                {
                  "kind": "move_relative",
                  "args": {
                    "x": 4,
                    "y": 5,
                    "z": 6,
                    "speed": 800
                  }
                },
                {
                  "kind": "write_pin",
                  "args": {
                    "pin_number": 1,
                    "pin_value": 2,
                    "pin_mode": 0
                  }
                },
                {
                  "kind": "read_pin",
                  "args": {
                    "pin_number": 4,
                    "pin_mode": 0,
                    "label": "foo"
                  }
                },
                {
                  "kind": "wait",
                  "args": {
                    "milliseconds": 4
                  }
                },
                {
                  "kind": "send_message",
                  "args": {
                    "message": "Bot is at position {{ x }}, {{ y }}, {{ z }}.",
                    "message_type": "success"
                  }
                },
                {
                  "kind": "_if",
                  "args": {
                    "lhs": "x",
                    "op": "is",
                    "rhs": 0,
                    "_then": {
                      "kind": "execute",
                      "args": {
                        "sequence_id": 74
                      }
                    },
                    "_else": {
                      "kind": "nothing",
                      "args": {}
                    }
                  }
                },
                {
                  "kind": "execute",
                  "args": {
                    "sequence_id": 74
                  }
                },
                {
                  "kind": "execute_script",
                  "args": {
                    "label": "plant-detection"
                  }
                },
                {
                  "kind": "take_photo",
                  "args": {}
                },
                {
                  "kind": "move_absolute",
                  "args": {
                    "offset": {
                      "kind": "coordinate",
                      "args": {
                        "x": 0,
                        "y": 0,
                        "z": 0
                      }
                    },
                    "speed": 800,
                    "location": {
                      "args": {
                        "x": 1,
                        "y": 2,
                        "z": 3
                      },
                      "kind": "coordinate"
                    }
                  }
                }
              ],
              "args": {
                "is_outdated": false,
                "version": 4
              },
              "kind": "sequence"
            },
            "uuid": "sequences.75.146"
          },
          "tools.33.148": {
            "kind": "tools",
            "body": {
              "id": 33,
              "name": "Trench Digging Tool",
              "status": "active"
            },
            "uuid": "tools.33.148"
          },
          "tool_slots.39.149": {
            "kind": "tool_slots",
            "body": {
              "id": 39,
              "tool_id": 33,
              "name": "Slot One.",
              "x": 10,
              "y": 10,
              "z": 10
            },
            "uuid": "tool_slots.39.149"
          },
          "crops.0.150": {
            "kind": "crops",
            "body": {
              "name": "Carrot",
              "slug": "carrot",
              "binomial_name": "Daucus carota",
              "common_names": [
                "Scarlet Nantes"
              ],
              "description": "",
              "sun_requirements": "Full Sun",
              "sowing_method": "Direct Seed",
              "spread": 5,
              "row_spacing": 1,
              "height": 1,
              "processing_pictures": 0,
              "guides_count": 4,
              "main_image_path": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58c312395865650004000000.jpg?1489179191",
              "taxon": undefined,
              "tags_array": [],
              "growing_degree_days": undefined,
              "svg_icon": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 200 200\" style=\"enable-background:new 0 0 200 200;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n\t.st0{fill:#90C400;}\n\t.st1{fill:#2B6000;}\n\t.st2{fill:#90C400;stroke:#2B6000;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st3{fill:#90C400;stroke:#2B6000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st4{fill:#68AB19;}\n\t.st5{fill:#074004;}\n\t.st6{fill:#94466D;stroke:#311538;stroke-width:3;stroke-miterlimit:10;}\n\t.st7{fill:#00FFFF;}\n\t.st8{fill:none;stroke:#311538;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st9{fill:#F08A06;stroke:#DA5C00;stroke-width:3;stroke-miterlimit:10;}\n\t.st10{fill:none;stroke:#DA5C00;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st11{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st12{fill:#FFFFFF;}\n\t.st13{fill:none;stroke:#074004;stroke-width:3;stroke-miterlimit:10;}\n\t.st14{fill:none;stroke:#A9C500;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st15{fill:#F08A06;}\n\t.st16{fill:#DA5C00;}\n\t.st17{fill:#94466D;}\n\t.st18{fill:#311538;}\n\t.st19{fill:#8DA54A;}\n\t.st20{fill:#3B6014;}\n\t.st21{fill:none;stroke:#F08A06;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st22{display:none;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st23{display:none;fill:#FFFFFF;}\n\t.st24{fill:none;stroke:#311538;stroke-width:3;stroke-miterlimit:10;}\n\t.st25{fill:#3A7800;}\n\t.st26{fill:#A9C500;}\n\t.st27{fill:#105409;}\n\t.st28{fill:#A9C500;stroke:#2B6000;stroke-width:3;stroke-miterlimit:10;}\n\t.st29{fill:#A9C500;stroke:#2B6000;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st30{fill:#A9C500;stroke:#2B6000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st31{fill:#A9C500;stroke:#2B6000;stroke-width:9.5263;stroke-miterlimit:10;}\n</style>\n<path class=\"st15\" d=\"M15.3,193.1c0,0,78-41.5,120.7-84.2c13.4-13.4,17.7-29.3,3.2-43.8c0,0,0,0,0,0c-14.5-14.5-30.2-10.4-43.8,3.2\n\tC46.1,117.6,11.2,189,11.2,189C9.2,191.7,12.6,195.1,15.3,193.1z\"/>\n<path class=\"st16\" d=\"M142.9,61.8c-15-15-33.4-13.9-50.4,3.2C44.9,112.6,10.2,181.3,7.5,186.6c-1.9,3-1.6,6.9,1,9.5\n\tc1.5,1.5,3.4,2.2,5.4,2.2c1.5,0,2.9-0.4,4.2-1.3c2.4-1.3,21.2-11.4,44.4-26.1c22.9-14.5,54.8-36.4,77.2-58.8\n\tC156.8,95.2,157.9,76.8,142.9,61.8z M128.9,109.6c-3.3-4.2-7-8.4-10.8-12.5c-0.6-0.6-1.6-0.7-2.2-0.1c-0.6,0.6-0.7,1.6-0.1,2.2\n\tc3.9,4.1,7.5,8.3,10.8,12.5c-3.2,2.9-6.5,5.9-9.9,8.8c-3.3-4.2-7-8.5-10.9-12.6c-0.6-0.6-1.6-0.7-2.2-0.1c-0.6,0.6-0.7,1.6-0.1,2.2\n\tc3.9,4.1,7.5,8.3,10.8,12.5c-3.4,2.8-6.9,5.6-10.5,8.4c-3.1-3.8-6.4-7.6-9.9-11.4c-0.6-0.6-1.6-0.7-2.2-0.1s-0.7,1.6-0.1,2.2\n\tc3.4,3.6,6.7,7.4,9.7,11.1c-3.5,2.7-7,5.3-10.6,7.8c-2.7-3.2-5.5-6.4-8.4-9.5c-0.6-0.6-1.6-0.7-2.2-0.1s-0.7,1.6-0.1,2.2\n\tc2.9,3,5.6,6.1,8.2,9.2c-3.6,2.6-7.2,5.1-10.8,7.5c-2.1-2.5-4.3-4.9-6.6-7.3c-0.6-0.6-1.6-0.7-2.2-0.1c-0.6,0.6-0.7,1.6-0.1,2.2\n\tc2.2,2.3,4.2,4.6,6.3,7c-3.8,2.5-7.5,5-11.1,7.3c-1.9-2.2-3.9-4.3-5.9-6.4c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2\n\tc1.9,1.9,3.7,3.9,5.5,5.9c-3.9,2.5-7.7,4.9-11.3,7.1c-1.2-1.3-2.4-2.6-3.7-3.9c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2\n\tc1.1,1.1,2.1,2.2,3.2,3.4c-4.1,2.5-8,4.9-11.6,7c-0.7-0.7-1.3-1.4-2-2c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2\n\tc0.5,0.5,1,1,1.4,1.5c-6.1,3.5-11,6.3-14.3,8.2c4-7.7,12.8-23.9,25-43.1c2.1,1.9,4.3,3.8,6.4,5.9c0.3,0.3,0.7,0.4,1.1,0.4\n\tc0.4,0,0.8-0.2,1.1-0.5c0.6-0.6,0.6-1.6,0-2.2c-2.2-2.2-4.5-4.3-6.8-6.3c2.3-3.6,4.8-7.3,7.3-11.1c2,1.7,3.9,3.4,5.9,5.2\n\tc0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.2,1.2-0.5c0.6-0.6,0.5-1.6-0.1-2.2c-2-1.9-4.1-3.7-6.2-5.5c2.4-3.6,5-7.2,7.6-10.8\n\tc2.7,2.2,5.4,4.6,8,7c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.2,1.1-0.5c0.6-0.6,0.5-1.6-0.1-2.2c-2.7-2.5-5.5-5-8.3-7.3\n\tc2.6-3.5,5.2-7,7.9-10.5c3.3,2.6,6.6,5.5,9.8,8.5c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.2,1.2-0.5c0.6-0.6,0.5-1.6-0.1-2.2\n\tc-3.3-3-6.6-5.9-10-8.6c2.8-3.5,5.6-7,8.5-10.4c3.8,3,7.6,6.2,11.3,9.7c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.2,1.1-0.5\n\tc0.6-0.6,0.5-1.6-0.1-2.2c-3.8-3.5-7.6-6.7-11.4-9.7c2.8-3.3,5.7-6.5,8.7-9.6c4.3,3.3,8.6,6.9,12.9,10.9c0.3,0.3,0.7,0.4,1.1,0.4\n\tc0.4,0,0.8-0.2,1.1-0.5c0.6-0.6,0.5-1.6-0.1-2.2c-4.2-3.9-8.5-7.5-12.8-10.9c1.4-1.5,2.8-2.9,4.2-4.3c1.8-1.8,3.7-3.5,5.5-4.8\n\tc4.1,3.4,8.3,6.9,12.3,10.5c0.3,0.3,0.7,0.4,1,0.4c0.4,0,0.9-0.2,1.2-0.5c0.6-0.6,0.5-1.6-0.1-2.2c-3.8-3.4-7.8-6.8-11.8-10\n\tc3.6-2.3,7.2-3.7,10.6-4.1c0.7-0.1,1.5-0.1,2.2-0.1c5.6,0,11,2.6,16.1,7.8c8.9,8.9,10.1,18.5,3.6,28.8c-3.2-3.9-6.6-7.8-10.1-11.6\n\tc-0.6-0.6-1.6-0.7-2.2-0.1c-0.6,0.6-0.7,1.6-0.1,2.2c3.6,3.9,7.1,8.1,10.5,12.2c-1.4,1.9-3.1,3.8-5,5.7\n\tC131.7,106.9,130.3,108.2,128.9,109.6z\"/>\n<path class=\"st12\" d=\"M111.2,79.3c-0.4,0-0.7-0.1-1-0.4c-2.7-2.4-3-2.7-5.8-4.9c-0.7-0.5-0.8-1.5-0.3-2.2c0.5-0.7,1.5-0.8,2.2-0.3\n\tc2.9,2.3,3.2,2.6,6,5c0.6,0.6,0.7,1.6,0.1,2.2C112.1,79.1,111.7,79.3,111.2,79.3z\"/>\n<path class=\"st12\" d=\"M99.3,90.7c-0.4,0-0.7-0.1-1-0.4l-1.2-1.1C96.9,89,96.9,89,96.8,89c-0.2-0.1-0.5-0.3-1.6-1.3\n\tc-0.7-0.5-0.8-1.5-0.3-2.2c0.5-0.7,1.5-0.8,2.2-0.3c1.1,0.9,1.4,1.1,1.5,1.2c0.2,0.1,0.2,0.1,0.6,0.5l1.2,1c0.7,0.6,0.7,1.6,0.1,2.2\n\tC100.2,90.5,99.8,90.7,99.3,90.7z\"/>\n<ellipse transform=\"matrix(0.6437 -0.7653 0.7653 0.6437 -45.7002 102.4801)\" class=\"st12\" cx=\"87.2\" cy=\"100.3\" rx=\"1.6\" ry=\"1.6\"/>\n<g>\n\t<path class=\"st4\" d=\"M186.2,37c-0.2,0.1-20.6,9.7-47.7,35.7l-7.8-7.7c0.3-0.3,32.7-35.5,45.4-55.8l9.3,5.8\n\t\tc-2.6,4.2-6.8,10.1-11,15.6c3.9-2.3,7-3.5,7.4-3.7L186.2,37z\"/>\n</g>\n<path class=\"st27\" d=\"M193.6,31.9l-3.2-7.1c-0.2-0.5-0.5-1-0.8-1.4c0.7-1.1,1.4-2.2,2.1-3.2c1.3-2.1,1.7-4.7,1.2-7.1\n\ts-2.1-4.5-4.2-5.8L182,3.1c-1.5-1-3.3-1.4-5-1.4c-3.1,0-6.2,1.6-8,4.4c-9.2,14.8-28.7,37.1-38.1,47.4c1.9,0.8,3.8,1.8,5.6,3.1\n\tc-3.7,4.2-6.2,6.8-6.2,6.9c-1.2,1.2-1.1,3.2,0.1,4.4l5.6,5.5c0.6,0.6,1.4,0.9,2.2,0.9c0.8,0,1.6-0.3,2.2-0.9\n\tc2.4-2.3,4.7-4.4,6.9-6.4c1.3,1.8,2.4,3.6,3.3,5.5c18-16.4,32.7-25.5,38.4-28.1C193.7,42.1,195.7,36.6,193.6,31.9z M167.9,36.7\n\tc0,0,6.4-4.5,13.9-8.1l3.2,7.1c-27.8,17-46.7,35.3-46.7,35.3l-5.6-5.5c0,0,22.5-23.2,44.3-54.6l6.6,4.1\n\tC176.3,26.6,167.9,36.7,167.9,36.7z\"/>\n</svg>"
            },
            "uuid": "crops.0.150"
          },
          "crops.0.151": {
            "kind": "crops",
            "body": {
              "name": "Radish",
              "slug": "radish",
              "binomial_name": "Raphanus sativus",
              "common_names": [
                "cultivated radish"
              ],
              "description": undefined,
              "sun_requirements": "Full Sun",
              "sowing_method": undefined,
              "spread": undefined,
              "row_spacing": undefined,
              "height": undefined,
              "processing_pictures": 0,
              "guides_count": 2,
              "main_image_path": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54a9dda633316500020b0000.jpg?1420418467",
              "taxon": undefined,
              "tags_array": [],
              "growing_degree_days": undefined,
              "svg_icon": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 1000 1000\" style=\"enable-background:new 0 0 1000 1000;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n\t.st0{fill:#77A45B;}\n\t.st1{fill:#3D710C;}\n\t.st2{fill:#00FFFF;}\n\t.st3{fill:#E50F4F;}\n\t.st4{fill:#5A8700;}\n\t.st5{fill:#9D9F01;}\n\t.st6{fill:none;stroke:#BFBF04;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st7{fill:none;stroke:#CAD058;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st8{fill:#E21039;stroke:#930019;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st9{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st10{fill:#77A45B;stroke:#3D710C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st11{fill:none;stroke:#77A45B;stroke-width:3;stroke-miterlimit:10;}\n\t.st12{opacity:0.5;fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st13{opacity:0.7;fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st14{opacity:0.9;fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st15{opacity:0.3;fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st16{opacity:0.2;fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st17{fill:#E21039;}\n\t.st18{fill:#930019;}\n\t.st19{fill:#F4E5E8;}\n\t.st20{fill:#DEB2BA;}\n\t.st21{fill:#C8818D;}\n\t.st22{fill:#B14D5F;}\n\t.st23{fill:#FFFFFF;}\n</style>\n<path class=\"st17\" d=\"M421,739.9c-89.6-35.4-155.9-101.9-156.3-203.6c-0.4-101.4,75.2-186.9,174.9-205.2\n\tc156-28.6,295.6,54.7,295.6,204.2c0,102.5-66.8,166.6-157.2,204.9L502.5,814L421,739.9z\"/>\n<path class=\"st18\" d=\"M457.4,810.2c-4.9-22.3-21.1-40.4-44.5-49.7C303.5,717.3,243,637.7,242.6,536.4c-0.2-54,19.4-106.7,55.3-148.3\n\tc35.3-41,84.3-68.9,137.8-78.7c46.1-8.4,91-7.9,133.3,1.5c41.8,9.3,79.8,27.5,109.9,52.6c24.7,20.6,44.1,45.5,57.4,74\n\tc13.9,29.8,21,62.7,21,97.9c0,53.7-16.8,101-49.8,140.7c-28.5,34.2-69.2,62.7-120.9,84.6c-23.3,9.9-39.4,27.9-44.1,49.6L457.4,810.2\n\tz M500,347.7c-18.5,0-37.4,1.7-56.3,5.2c-43.7,8-83.5,30.8-112.2,64.1c-28.9,33.5-44.7,75.9-44.5,119.2c0.2,43.1,13.5,81,39.6,112.7\n\tc24.2,29.4,58.7,53.1,102.7,70.4c35.8,14.2,62.1,43.4,70.8,78.5c8.6-34.6,33.7-62.9,69.5-78c45.1-19.1,80.1-43.4,104.1-72.1\n\tc26.3-31.5,39.6-69.3,39.6-112.4c0-56.2-21.6-103.9-62.5-137.9c-24.7-20.6-56.2-35.6-91.2-43.4C540.5,349.8,520.5,347.7,500,347.7z\"\n\t/>\n<path class=\"st0\" d=\"M528.1,361.7c0.6-3.6,9.6-58.7-12.8-123.1c17.5-34.3,31.5-61.5,3.6-106.5c-32.5-52.3-101-98.4-136.6-76.4\n\ts-24.7,104,7.7,156.3c25.7,41.5,55.9,43.6,89.4,43.7c17.2,52.5,10.3,103,9.8,106C489.3,361.7,510.5,373.7,528.1,361.7z\"/>\n<path class=\"st1\" d=\"M556.6,108.7c-16.2-26.1-39.4-50.8-65.3-69.7c-20.9-15.2-53-33.3-87.5-33.3c-16.6,0-31.7,4.1-44.8,12.3\n\tc-17.7,11-30.7,28.7-37.4,51.3c-5,16.6-6.7,35.6-5,56.6c2.9,37.5,16,77.3,35.9,109.4c17,27.4,37.8,45.5,63.5,55.4\n\tc9.6,3.7,19,5.9,28.3,7.2c0.5,3.4,1,6.6,1.3,9.7c12.3-1.9,24.5-3.2,36.6-3.8c3.5,32.2-0.2,56.3-0.2,56.6c-0.5,3.1,0.9,6.1,3.6,7.6\n\tc0.7,0.4,11.4,6.3,24.6,6.3c7,0,14.7-1.6,22-6.6c1.7-1.1,2.8-2.9,3.1-4.9c0.6-3.7,4.1-25.9,1.5-57.5c10.9,1.2,21.6,3,32.2,5.4\n\tc1.7,0.4,3.5,0.8,5.2,1.2c-1.1-20.1-4.2-44-11.3-69.6c6.9-14.4,12.9-29.8,15.2-47.4C581.9,166.3,574.8,138.1,556.6,108.7z\n\t M521.3,357.1c-8.8,4.4-18.6,2-24.1,0c1.5-15.3,4-58.7-10.7-103.8c-1-3-3.8-5.1-7-5.1c-34.1-0.1-60.1-3-83.2-40.2\n\tc-15.5-24.9-26-57.1-28.3-86.2c-2.3-29.5,4.3-51.4,18.2-59.9c13.9-8.6,36.4-4.8,61.8,10.3c25,14.9,49.2,38.7,64.6,63.6\n\tc25.7,41.4,13.3,65.7-3.9,99.3c-0.9,1.8-1.1,3.9-0.4,5.8C527.4,295.7,523,344.2,521.3,357.1z\"/>\n<path class=\"st19\" d=\"M521.9,937.7l4.3-26.4h-52.3l4.3,26.4c1.7,10.7,11,18.6,21.9,18.6C510.9,956.3,520.1,948.4,521.9,937.7z\"/>\n<polygon class=\"st20\" points=\"533.5,866.3 466.5,866.3 473.8,911.3 526.2,911.3 \"/>\n<polygon class=\"st21\" points=\"540.8,821.3 459.2,821.3 466.5,866.3 533.5,866.3 \"/>\n<path class=\"st22\" d=\"M507.9,776.3c-3.4,6.9-6,14.1-7.9,21.6c-1.9-7.5-4.5-14.7-7.9-21.6H438c9.8,9.2,16.6,20.9,19.4,33.9l1.8,11.1\n\th81.6l1.8-11c2.8-12.9,9.7-24.6,19.7-34H507.9z\"/>\n<g>\n\t<g>\n\t\t<g>\n\t\t\t<path class=\"st23\" d=\"M357.9,475.4c-1.3,0-2.7-0.4-3.9-1.1c-3.5-2.1-4.6-6.7-2.4-10.1c16.4-26.7,42-47.9,72-59.5\n\t\t\t\tc3.8-1.5,8.1,0.4,9.6,4.2c1.5,3.8-0.4,8.1-4.2,9.5c-27,10.5-50,29.5-64.8,53.5C362.8,474.2,360.4,475.4,357.9,475.4z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<circle class=\"st23\" cx=\"343.4\" cy=\"501.3\" r=\"7.4\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>"
            },
            "uuid": "crops.0.151"
          },
          "crops.0.152": {
            "kind": "crops",
            "body": {
              "name": "Tomato",
              "slug": "tomato",
              "binomial_name": "Solanum lycopersicum",
              "common_names": [
                "Tomato",
                "Tomate"
              ],
              "description": "The species originated in South America, while its use as a food developed in Mexico. It's a hugely popular plant in many cuisines in the world.",
              "sun_requirements": "Full Sun",
              "sowing_method": "by seed",
              "spread": 60,
              "row_spacing": 75,
              "height": 90,
              "processing_pictures": 0,
              "guides_count": 23,
              "main_image_path": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54ffce343134350003880200.jpg?1426050603",
              "taxon": "Species",
              "tags_array": [],
              "growing_degree_days": undefined,
              "svg_icon": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 64 64;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n\t.st0{fill:#22B573;stroke:#184C28;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st1{fill:#EE0000;}\n\t.st2{fill:#9A0601;}\n\t.st3{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st4{fill:#6FAD4C;}\n\t.st5{fill:#FCAA54;stroke:#8CC63F;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st6{fill:none;stroke:#8D5733;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st7{fill:#184C28;}\n\t.st8{fill:#82C64E;}\n\t.st9{fill:none;stroke:#497726;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st10{fill:#497726;}\n\t.st11{opacity:0.2;}\n\t.st12{fill:#748C8B;}\n\t.st13{fill:#434D42;}\n\t.st14{fill:#EFC11E;}\n\t.st15{fill:#C9292F;}\n\t.st16{fill:#802D2D;}\n\t.st17{fill:#C9292F;stroke:#802D2D;stroke-width:2.5473;stroke-miterlimit:10;}\n\t.st18{opacity:0.4;}\n\t.st19{fill:none;stroke:#FFFFFF;stroke-width:2.5473;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st20{fill:none;stroke:#006837;stroke-width:2.5473;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st21{fill:#FFFFFF;}\n\t.st22{fill:#C9292F;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st23{filter:url(#Adobe_OpacityMaskFilter);}\n\t.st24{opacity:0.8;mask:url(#SVGID_1_);}\n\t.st25{fill:#00FFFF;}\n\t.st26{fill:#2E368F;}\n\t.st27{fill:#5860A5;}\n\t.st28{fill:#161542;}\n\t.st29{fill:none;stroke:#434D42;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st30{fill:#54665F;}\n\t.st31{fill:#54665F;stroke:#434D42;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st32{fill:#748C8B;stroke:#434D42;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st33{clip-path:url(#SVGID_3_);}\n\t.st34{fill:#194C28;}\n\t.st35{fill:#82C64E;stroke:#184C28;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st36{fill:none;stroke:#184C28;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st37{fill:#FCAA54;}\n\t.st38{fill:#8D5733;}\n\t.st39{fill:#406D2A;}\n\t.st40{fill:none;stroke:#8D5733;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st41{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st42{clip-path:url(#SVGID_5_);}\n\t.st43{fill:#EE0000;stroke:#9A0601;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st44{fill:#C1272D;}\n\t.st45{fill:#184C28;stroke:#184C28;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st46{fill:none;stroke:#FDD6AD;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st47{fill:none;stroke:#FCAA54;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st48{fill:#9B0D91;}\n\t.st49{fill:#1B631A;}\n\t.st50{fill:#22153F;}\n\t.st51{fill:#95CC63;stroke:#517B39;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st52{fill:none;stroke:#517B39;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st53{fill:#22B573;}\n\t.st54{display:none;}\n\t.st55{display:inline;fill:none;stroke:#00FFFF;stroke-width:0.1;stroke-miterlimit:10;}\n</style>\n<g id=\"Layer_2\">\n\t<path class=\"st53\" d=\"M17.8,12.9c-2.3-1.9-4-4.1-4.6-6.5c0,0,6.4,2.7,14.2,3.6L32,1.9l4.5,8C44.1,9,50.8,6.4,50.8,6.4\n\t\tc-0.8,2.2-2.2,4.2-3.9,5.8l-14.1-1.9L17.8,12.9z\"/>\n\t<path class=\"st7\" d=\"M16.3,13.5c-2.2-2-3.9-4.3-4.5-6.7c-0.2-0.6,0-1.1,0.5-1.5c0.4-0.4,1-0.5,1.6-0.3c0.1,0,5.8,2.4,12.8,3.3\n\t\tl4.1-7.2C31,0.7,31.5,0.4,32,0.4s1,0.3,1.3,0.8l4,7.1C44.2,7.3,50.2,5,50.3,5c0.5-0.2,1.2-0.1,1.6,0.3c0.4,0.4,0.6,1,0.4,1.6\n\t\tc-0.8,2.1-2,4-3.6,5.7l-3.3-1C46.2,10.8,47,10,47.7,9c-2.7,0.8-6.7,1.8-11,2.4c0,0-1.5-0.7-1.5-0.7L32,4.9l-3.3,5.8l-5.2,0.2\n\t\tc-2.9-0.5-5.4-1.2-7.3-1.8c0.8,1.1,1.9,2.2,3.2,3.1L16.3,13.5z\"/>\n\t<g>\n\t\t<path class=\"st1\" d=\"M2.1,36.2c0,14.3,13.5,25.9,30.1,25.9c17.2,0,30.1-10.4,30.1-24.1c0-18-9.4-27.9-26.6-27.9\n\t\t\tC35.7,10.1,2.1,7.4,2.1,36.2z\"/>\n\t</g>\n\t<path class=\"st2\" d=\"M35.7,8.6L35.7,8.6c-1.2,0-2.5,0-3.8,0.1c-7.1,0.5-14.5,1.6-20.6,5.3C4.2,18.5,0.6,25.9,0.6,36.2\n\t\tc0,15.1,14.2,27.4,31.6,27.4c8.4,0,16.3-2.4,22.1-6.9c6.2-4.7,9.6-11.4,9.6-18.8C63.8,12.5,46.2,8.6,35.7,8.6z M3.6,36.2\n\t\tc0-17.2,10.8-22,22-23.7c-1.8,1.2-3.5,3-4.8,5.9c-0.1,0.3,0,0.5,0.3,0.7c0.3,0.1,0.5,0,0.7-0.3c2.4-5.4,6.2-6.8,9.9-7.4\n\t\tC34,11,36,11.5,37.8,13c4.1,3.5,6.2,11.9,6.2,25.2c0,13.1-5.4,23-12.5,23c-3.6,0-7.1-3.2-9.5-8.8c-0.1-0.3-0.4-0.4-0.7-0.3\n\t\tc-0.3,0.1-0.4,0.4-0.3,0.7c1.4,3.3,3.2,5.8,5.2,7.4C13.3,57.8,3.6,48,3.6,36.2z M36.8,60.4c4.9-3.5,8.1-11.8,8.1-22.2\n\t\tc0-13.5-2.2-22.3-6.6-25.9c-0.2-0.2-0.4-0.3-0.7-0.5c11.7,0.6,23.1,6.4,23.1,26.3C60.8,50.1,50.4,58.8,36.8,60.4z\"/>\n\t<g>\n\t\t<g>\n\t\t\t<path class=\"st21\" d=\"M8.9,27.9c-0.1,0-0.1,0-0.2,0c-0.3-0.1-0.4-0.4-0.3-0.6c1.3-3.4,3.4-5.9,6.6-7.8c0.2-0.1,0.5-0.1,0.7,0.2\n\t\t\t\tc0.1,0.2,0.1,0.5-0.2,0.7c-2.9,1.7-4.9,4.1-6.1,7.3C9.3,27.8,9.1,27.9,8.9,27.9z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path class=\"st21\" d=\"M48.9,27.4c-0.2,0-0.5-0.2-0.5-0.4c-0.4-3.2-1-6.1-1.8-8.5c-0.1-0.3,0.1-0.5,0.3-0.6\n\t\t\t\tc0.3-0.1,0.5,0.1,0.6,0.3c0.8,2.5,1.4,5.4,1.8,8.7C49.4,27.1,49.2,27.3,48.9,27.4C48.9,27.4,48.9,27.4,48.9,27.4z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path class=\"st21\" d=\"M23.3,26.3C23.3,26.3,23.3,26.3,23.3,26.3c-0.4-0.1-0.5-0.3-0.5-0.6c0.9-5,2.5-8.2,4.9-9.8\n\t\t\t\tc0.2-0.2,0.5-0.1,0.7,0.1c0.2,0.2,0.1,0.5-0.1,0.7c-2.2,1.4-3.6,4.4-4.5,9.1C23.8,26.1,23.6,26.3,23.3,26.3z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<circle class=\"st21\" cx=\"22.9\" cy=\"29.2\" r=\"0.5\"/>\n\t\t</g>\n\t</g>\n</g>\n<g id=\"Layer_1\" class=\"st54\">\n</g>\n</svg>"
            },
            "uuid": "crops.0.152"
          }
        }
      }
    }
  }
}

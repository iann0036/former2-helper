AWS.apiLoader.services["location"] = {};

AWS.Location = AWS.Service.defineService("location", [ "2020-11-19" ]);

AWS.apiLoader.services["location"]["2020-11-19"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-11-19",
        endpointPrefix: "geo",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "Amazon Location Service",
        serviceId: "Location",
        signatureVersion: "v4",
        signingName: "geo",
        uid: "location-2020-11-19"
    },
    operations: {
        AssociateTrackerConsumer: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/consumers",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ConsumerArn", "TrackerName" ],
                members: {
                    ConsumerArn: {},
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        BatchDeleteGeofence: {
            http: {
                requestUri: "/geofencing/v0/collections/{CollectionName}/delete-geofences",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "GeofenceIds" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    GeofenceIds: {
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Errors" ],
                members: {
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Error", "GeofenceId" ],
                            members: {
                                Error: {
                                    shape: "Sb"
                                },
                                GeofenceId: {}
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        BatchEvaluateGeofences: {
            http: {
                requestUri: "/geofencing/v0/collections/{CollectionName}/positions",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "DevicePositionUpdates" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    DevicePositionUpdates: {
                        type: "list",
                        member: {
                            shape: "Sg"
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Errors" ],
                members: {
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "DeviceId", "Error", "SampleTime" ],
                            members: {
                                DeviceId: {},
                                Error: {
                                    shape: "Sb"
                                },
                                SampleTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        BatchGetDevicePosition: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/get-positions",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "DeviceIds", "TrackerName" ],
                members: {
                    DeviceIds: {
                        type: "list",
                        member: {}
                    },
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DevicePositions", "Errors" ],
                members: {
                    DevicePositions: {
                        shape: "Sr"
                    },
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "DeviceId", "Error" ],
                            members: {
                                DeviceId: {},
                                Error: {
                                    shape: "Sb"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        BatchPutGeofence: {
            http: {
                requestUri: "/geofencing/v0/collections/{CollectionName}/put-geofences",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "Entries" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "GeofenceId", "Geometry" ],
                            members: {
                                GeofenceId: {},
                                Geometry: {
                                    shape: "Sy"
                                }
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Errors", "Successes" ],
                members: {
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Error", "GeofenceId" ],
                            members: {
                                Error: {
                                    shape: "Sb"
                                },
                                GeofenceId: {}
                            }
                        }
                    },
                    Successes: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "GeofenceId", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                GeofenceId: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        BatchUpdateDevicePosition: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/positions",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TrackerName", "Updates" ],
                members: {
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    },
                    Updates: {
                        type: "list",
                        member: {
                            shape: "Sg"
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Errors" ],
                members: {
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "DeviceId", "Error", "SampleTime" ],
                            members: {
                                DeviceId: {},
                                Error: {
                                    shape: "Sb"
                                },
                                SampleTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        CreateGeofenceCollection: {
            http: {
                requestUri: "/geofencing/v0/collections",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "PricingPlan" ],
                members: {
                    CollectionName: {},
                    Description: {},
                    PricingPlan: {},
                    PricingPlanDataSource: {}
                }
            },
            output: {
                type: "structure",
                required: [ "CollectionArn", "CollectionName", "CreateTime" ],
                members: {
                    CollectionArn: {},
                    CollectionName: {},
                    CreateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            },
            idempotent: true
        },
        CreateMap: {
            http: {
                requestUri: "/maps/v0/maps",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Configuration", "MapName", "PricingPlan" ],
                members: {
                    Configuration: {
                        shape: "S1g"
                    },
                    Description: {},
                    MapName: {},
                    PricingPlan: {}
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "MapArn", "MapName" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    MapArn: {},
                    MapName: {}
                }
            },
            endpoint: {
                hostPrefix: "maps."
            },
            idempotent: true
        },
        CreatePlaceIndex: {
            http: {
                requestUri: "/places/v0/indexes",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "DataSource", "IndexName", "PricingPlan" ],
                members: {
                    DataSource: {},
                    DataSourceConfiguration: {
                        shape: "S1k"
                    },
                    Description: {},
                    IndexName: {},
                    PricingPlan: {}
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "IndexArn", "IndexName" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    IndexArn: {},
                    IndexName: {}
                }
            },
            endpoint: {
                hostPrefix: "places."
            },
            idempotent: true
        },
        CreateTracker: {
            http: {
                requestUri: "/tracking/v0/trackers",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "PricingPlan", "TrackerName" ],
                members: {
                    Description: {},
                    PricingPlan: {},
                    PricingPlanDataSource: {},
                    TrackerName: {}
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "TrackerArn", "TrackerName" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    TrackerArn: {},
                    TrackerName: {}
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            },
            idempotent: true
        },
        DeleteGeofenceCollection: {
            http: {
                method: "DELETE",
                requestUri: "/geofencing/v0/collections/{CollectionName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "geofencing."
            },
            idempotent: true
        },
        DeleteMap: {
            http: {
                method: "DELETE",
                requestUri: "/maps/v0/maps/{MapName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "MapName" ],
                members: {
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "maps."
            },
            idempotent: true
        },
        DeletePlaceIndex: {
            http: {
                method: "DELETE",
                requestUri: "/places/v0/indexes/{IndexName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "IndexName" ],
                members: {
                    IndexName: {
                        location: "uri",
                        locationName: "IndexName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "places."
            },
            idempotent: true
        },
        DeleteTracker: {
            http: {
                method: "DELETE",
                requestUri: "/tracking/v0/trackers/{TrackerName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TrackerName" ],
                members: {
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "tracking."
            },
            idempotent: true
        },
        DescribeGeofenceCollection: {
            http: {
                method: "GET",
                requestUri: "/geofencing/v0/collections/{CollectionName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CollectionArn", "CollectionName", "CreateTime", "Description", "PricingPlan", "UpdateTime" ],
                members: {
                    CollectionArn: {},
                    CollectionName: {},
                    CreateTime: {
                        shape: "Sj"
                    },
                    Description: {},
                    PricingPlan: {},
                    PricingPlanDataSource: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        DescribeMap: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "MapName" ],
                members: {
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Configuration", "CreateTime", "DataSource", "Description", "MapArn", "MapName", "PricingPlan", "UpdateTime" ],
                members: {
                    Configuration: {
                        shape: "S1g"
                    },
                    CreateTime: {
                        shape: "Sj"
                    },
                    DataSource: {},
                    Description: {},
                    MapArn: {},
                    MapName: {},
                    PricingPlan: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        DescribePlaceIndex: {
            http: {
                method: "GET",
                requestUri: "/places/v0/indexes/{IndexName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "IndexName" ],
                members: {
                    IndexName: {
                        location: "uri",
                        locationName: "IndexName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "DataSource", "DataSourceConfiguration", "Description", "IndexArn", "IndexName", "PricingPlan", "UpdateTime" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    DataSource: {},
                    DataSourceConfiguration: {
                        shape: "S1k"
                    },
                    Description: {},
                    IndexArn: {},
                    IndexName: {},
                    PricingPlan: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "places."
            }
        },
        DescribeTracker: {
            http: {
                method: "GET",
                requestUri: "/tracking/v0/trackers/{TrackerName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TrackerName" ],
                members: {
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "Description", "PricingPlan", "TrackerArn", "TrackerName", "UpdateTime" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    Description: {},
                    PricingPlan: {},
                    PricingPlanDataSource: {},
                    TrackerArn: {},
                    TrackerName: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        DisassociateTrackerConsumer: {
            http: {
                method: "DELETE",
                requestUri: "/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ConsumerArn", "TrackerName" ],
                members: {
                    ConsumerArn: {
                        location: "uri",
                        locationName: "ConsumerArn"
                    },
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        GetDevicePosition: {
            http: {
                method: "GET",
                requestUri: "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "DeviceId", "TrackerName" ],
                members: {
                    DeviceId: {
                        location: "uri",
                        locationName: "DeviceId"
                    },
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Position", "ReceivedTime", "SampleTime" ],
                members: {
                    DeviceId: {},
                    Position: {
                        shape: "Sh"
                    },
                    ReceivedTime: {
                        shape: "Sj"
                    },
                    SampleTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        GetDevicePositionHistory: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "DeviceId", "TrackerName" ],
                members: {
                    DeviceId: {
                        location: "uri",
                        locationName: "DeviceId"
                    },
                    EndTimeExclusive: {
                        shape: "Sj"
                    },
                    NextToken: {},
                    StartTimeInclusive: {
                        shape: "Sj"
                    },
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DevicePositions" ],
                members: {
                    DevicePositions: {
                        shape: "Sr"
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        GetGeofence: {
            http: {
                method: "GET",
                requestUri: "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "GeofenceId" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    GeofenceId: {
                        location: "uri",
                        locationName: "GeofenceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "GeofenceId", "Geometry", "Status", "UpdateTime" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    GeofenceId: {},
                    Geometry: {
                        shape: "Sy"
                    },
                    Status: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        GetMapGlyphs: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "FontStack", "FontUnicodeRange", "MapName" ],
                members: {
                    FontStack: {
                        location: "uri",
                        locationName: "FontStack"
                    },
                    FontUnicodeRange: {
                        location: "uri",
                        locationName: "FontUnicodeRange"
                    },
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Blob: {
                        type: "blob"
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    }
                },
                payload: "Blob"
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        GetMapSprites: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}/sprites/{FileName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "FileName", "MapName" ],
                members: {
                    FileName: {
                        location: "uri",
                        locationName: "FileName"
                    },
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Blob: {
                        type: "blob"
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    }
                },
                payload: "Blob"
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        GetMapStyleDescriptor: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}/style-descriptor",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "MapName" ],
                members: {
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Blob: {
                        type: "blob"
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    }
                },
                payload: "Blob"
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        GetMapTile: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "MapName", "X", "Y", "Z" ],
                members: {
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    },
                    X: {
                        location: "uri",
                        locationName: "X"
                    },
                    Y: {
                        location: "uri",
                        locationName: "Y"
                    },
                    Z: {
                        location: "uri",
                        locationName: "Z"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Blob: {
                        type: "blob"
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    }
                },
                payload: "Blob"
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        ListGeofenceCollections: {
            http: {
                requestUri: "/geofencing/v0/list-collections",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CollectionName", "CreateTime", "Description", "PricingPlan", "UpdateTime" ],
                            members: {
                                CollectionName: {},
                                CreateTime: {
                                    shape: "Sj"
                                },
                                Description: {},
                                PricingPlan: {},
                                PricingPlanDataSource: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        ListGeofences: {
            http: {
                requestUri: "/geofencing/v0/collections/{CollectionName}/list-geofences",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "GeofenceId", "Geometry", "Status", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                GeofenceId: {},
                                Geometry: {
                                    shape: "Sy"
                                },
                                Status: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        ListMaps: {
            http: {
                requestUri: "/maps/v0/list-maps",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "DataSource", "Description", "MapName", "PricingPlan", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                DataSource: {},
                                Description: {},
                                MapName: {},
                                PricingPlan: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        ListPlaceIndexes: {
            http: {
                requestUri: "/places/v0/list-indexes",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "DataSource", "Description", "IndexName", "PricingPlan", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                DataSource: {},
                                Description: {},
                                IndexName: {},
                                PricingPlan: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "places."
            }
        },
        ListTrackerConsumers: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/list-consumers",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TrackerName" ],
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {},
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ConsumerArns" ],
                members: {
                    ConsumerArns: {
                        type: "list",
                        member: {}
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        ListTrackers: {
            http: {
                requestUri: "/tracking/v0/list-trackers",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "Description", "PricingPlan", "TrackerName", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                Description: {},
                                PricingPlan: {},
                                PricingPlanDataSource: {},
                                TrackerName: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        PutGeofence: {
            http: {
                method: "PUT",
                requestUri: "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "GeofenceId", "Geometry" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    GeofenceId: {
                        location: "uri",
                        locationName: "GeofenceId"
                    },
                    Geometry: {
                        shape: "Sy"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "GeofenceId", "UpdateTime" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    GeofenceId: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        SearchPlaceIndexForPosition: {
            http: {
                requestUri: "/places/v0/indexes/{IndexName}/search/position",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "IndexName", "Position" ],
                members: {
                    IndexName: {
                        location: "uri",
                        locationName: "IndexName"
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    Position: {
                        shape: "Sh"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Results", "Summary" ],
                members: {
                    Results: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Place" ],
                            members: {
                                Place: {
                                    shape: "S3r"
                                }
                            }
                        }
                    },
                    Summary: {
                        type: "structure",
                        required: [ "DataSource", "Position" ],
                        members: {
                            DataSource: {},
                            MaxResults: {
                                type: "integer"
                            },
                            Position: {
                                shape: "Sh"
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "places."
            }
        },
        SearchPlaceIndexForText: {
            http: {
                requestUri: "/places/v0/indexes/{IndexName}/search/text",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "IndexName", "Text" ],
                members: {
                    BiasPosition: {
                        shape: "Sh"
                    },
                    FilterBBox: {
                        shape: "S3v"
                    },
                    FilterCountries: {
                        shape: "S3w"
                    },
                    IndexName: {
                        location: "uri",
                        locationName: "IndexName"
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    Text: {
                        type: "string",
                        sensitive: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Results", "Summary" ],
                members: {
                    Results: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Place" ],
                            members: {
                                Place: {
                                    shape: "S3r"
                                }
                            }
                        }
                    },
                    Summary: {
                        type: "structure",
                        required: [ "DataSource", "Text" ],
                        members: {
                            BiasPosition: {
                                shape: "Sh"
                            },
                            DataSource: {},
                            FilterBBox: {
                                shape: "S3v"
                            },
                            FilterCountries: {
                                shape: "S3w"
                            },
                            MaxResults: {
                                type: "integer"
                            },
                            ResultBBox: {
                                shape: "S3v"
                            },
                            Text: {
                                type: "string",
                                sensitive: true
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "places."
            }
        }
    },
    shapes: {
        Sb: {
            type: "structure",
            members: {
                Code: {},
                Message: {}
            }
        },
        Sg: {
            type: "structure",
            required: [ "DeviceId", "Position", "SampleTime" ],
            members: {
                DeviceId: {},
                Position: {
                    shape: "Sh"
                },
                SampleTime: {
                    shape: "Sj"
                }
            }
        },
        Sh: {
            type: "list",
            member: {
                type: "double"
            },
            sensitive: true
        },
        Sj: {
            type: "timestamp",
            timestampFormat: "iso8601"
        },
        Sr: {
            type: "list",
            member: {
                type: "structure",
                required: [ "Position", "ReceivedTime", "SampleTime" ],
                members: {
                    DeviceId: {},
                    Position: {
                        shape: "Sh"
                    },
                    ReceivedTime: {
                        shape: "Sj"
                    },
                    SampleTime: {
                        shape: "Sj"
                    }
                }
            }
        },
        Sy: {
            type: "structure",
            members: {
                Polygon: {
                    type: "list",
                    member: {
                        type: "list",
                        member: {
                            shape: "Sh"
                        }
                    }
                }
            }
        },
        S1g: {
            type: "structure",
            required: [ "Style" ],
            members: {
                Style: {}
            }
        },
        S1k: {
            type: "structure",
            members: {
                IntendedUse: {}
            }
        },
        S3r: {
            type: "structure",
            required: [ "Geometry" ],
            members: {
                AddressNumber: {},
                Country: {},
                Geometry: {
                    type: "structure",
                    members: {
                        Point: {
                            shape: "Sh"
                        }
                    }
                },
                Label: {},
                Municipality: {},
                Neighborhood: {},
                PostalCode: {},
                Region: {},
                Street: {},
                SubRegion: {}
            }
        },
        S3v: {
            type: "list",
            member: {
                type: "double"
            },
            sensitive: true
        },
        S3w: {
            type: "list",
            member: {}
        }
    },
    paginators: {
        GetDevicePositionHistory: {
            input_token: "NextToken",
            output_token: "NextToken",
            result_key: "DevicePositions"
        },
        ListGeofenceCollections: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Entries"
        },
        ListGeofences: {
            input_token: "NextToken",
            output_token: "NextToken",
            result_key: "Entries"
        },
        ListMaps: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Entries"
        },
        ListPlaceIndexes: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Entries"
        },
        ListTrackerConsumers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "ConsumerArns"
        },
        ListTrackers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Entries"
        }
    }
};

AWS.apiLoader.services["wellarchitected"] = {};

AWS.WellArchitected = AWS.Service.defineService("wellarchitected", [ "2020-03-31" ]);

AWS.apiLoader.services["wellarchitected"]["2020-03-31"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-03-31",
        endpointPrefix: "wellarchitected",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "Well-Architected",
        serviceFullName: "AWS Well-Architected Tool",
        serviceId: "WellArchitected",
        signatureVersion: "v4",
        signingName: "wellarchitected",
        uid: "wellarchitected-2020-03-31"
    },
    operations: {
        AssociateLenses: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/associateLenses"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAliases" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAliases: {
                        shape: "S3"
                    }
                }
            }
        },
        CreateMilestone: {
            http: {
                requestUri: "/workloads/{WorkloadId}/milestones"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "MilestoneName", "ClientRequestToken" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    MilestoneName: {},
                    ClientRequestToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    }
                }
            }
        },
        CreateWorkload: {
            http: {
                requestUri: "/workloads"
            },
            input: {
                type: "structure",
                required: [ "WorkloadName", "Description", "Environment", "ReviewOwner", "Lenses", "ClientRequestToken" ],
                members: {
                    WorkloadName: {},
                    Description: {},
                    Environment: {},
                    AccountIds: {
                        shape: "Se"
                    },
                    AwsRegions: {
                        shape: "Sg"
                    },
                    NonAwsRegions: {
                        shape: "Si"
                    },
                    PillarPriorities: {
                        shape: "Sk"
                    },
                    ArchitecturalDesign: {},
                    ReviewOwner: {},
                    IndustryType: {},
                    Industry: {},
                    Lenses: {
                        shape: "Sq"
                    },
                    Notes: {},
                    ClientRequestToken: {
                        idempotencyToken: true
                    },
                    Tags: {
                        shape: "Ss"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    WorkloadArn: {}
                }
            }
        },
        CreateWorkloadShare: {
            http: {
                requestUri: "/workloads/{WorkloadId}/shares"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "SharedWith", "PermissionType", "ClientRequestToken" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    SharedWith: {},
                    PermissionType: {},
                    ClientRequestToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    ShareId: {}
                }
            }
        },
        DeleteWorkload: {
            http: {
                method: "DELETE",
                requestUri: "/workloads/{WorkloadId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "ClientRequestToken" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "ClientRequestToken"
                    }
                }
            }
        },
        DeleteWorkloadShare: {
            http: {
                method: "DELETE",
                requestUri: "/workloads/{WorkloadId}/shares/{ShareId}"
            },
            input: {
                type: "structure",
                required: [ "ShareId", "WorkloadId", "ClientRequestToken" ],
                members: {
                    ShareId: {
                        location: "uri",
                        locationName: "ShareId"
                    },
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "ClientRequestToken"
                    }
                }
            }
        },
        DisassociateLenses: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/disassociateLenses"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAliases" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAliases: {
                        shape: "S3"
                    }
                }
            }
        },
        GetAnswer: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias", "QuestionId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    QuestionId: {
                        location: "uri",
                        locationName: "QuestionId"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensAlias: {},
                    Answer: {
                        shape: "S18"
                    }
                }
            }
        },
        GetLensReview: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensReview: {
                        shape: "S1n"
                    }
                }
            }
        },
        GetLensReviewReport: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/report"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensReviewReport: {
                        type: "structure",
                        members: {
                            LensAlias: {},
                            Base64String: {}
                        }
                    }
                }
            }
        },
        GetLensVersionDifference: {
            http: {
                method: "GET",
                requestUri: "/lenses/{LensAlias}/versionDifference"
            },
            input: {
                type: "structure",
                required: [ "LensAlias", "BaseLensVersion" ],
                members: {
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    BaseLensVersion: {
                        location: "querystring",
                        locationName: "BaseLensVersion"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    LensAlias: {},
                    BaseLensVersion: {},
                    LatestLensVersion: {},
                    VersionDifferences: {
                        type: "structure",
                        members: {
                            PillarDifferences: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        PillarId: {},
                                        DifferenceStatus: {},
                                        QuestionDifferences: {
                                            type: "list",
                                            member: {
                                                type: "structure",
                                                members: {
                                                    QuestionId: {},
                                                    QuestionTitle: {},
                                                    DifferenceStatus: {}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        GetMilestone: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/milestones/{MilestoneNumber}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "MilestoneNumber" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    MilestoneNumber: {
                        location: "uri",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    Milestone: {
                        type: "structure",
                        members: {
                            MilestoneNumber: {
                                type: "integer"
                            },
                            MilestoneName: {},
                            RecordedAt: {
                                type: "timestamp"
                            },
                            Workload: {
                                shape: "S2d"
                            }
                        }
                    }
                }
            }
        },
        GetWorkload: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Workload: {
                        shape: "S2d"
                    }
                }
            }
        },
        ListAnswers: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    PillarId: {
                        location: "querystring",
                        locationName: "PillarId"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensAlias: {},
                    AnswerSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                QuestionId: {},
                                PillarId: {},
                                QuestionTitle: {},
                                Choices: {
                                    shape: "S1d"
                                },
                                SelectedChoices: {
                                    shape: "S1i"
                                },
                                IsApplicable: {
                                    type: "boolean"
                                },
                                Risk: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListLensReviewImprovements: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    PillarId: {
                        location: "querystring",
                        locationName: "PillarId"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensAlias: {},
                    ImprovementSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                QuestionId: {},
                                PillarId: {},
                                QuestionTitle: {},
                                Risk: {},
                                ImprovementPlanUrl: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListLensReviews: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensReviewSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                LensAlias: {},
                                LensVersion: {},
                                LensName: {},
                                LensStatus: {},
                                UpdatedAt: {
                                    type: "timestamp"
                                },
                                RiskCounts: {
                                    shape: "S1u"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListLenses: {
            http: {
                method: "GET",
                requestUri: "/lenses"
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    LensSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                LensAlias: {},
                                LensVersion: {},
                                LensName: {},
                                Description: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListMilestones: {
            http: {
                requestUri: "/workloads/{WorkloadId}/milestonesSummaries"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                MilestoneNumber: {
                                    type: "integer"
                                },
                                MilestoneName: {},
                                RecordedAt: {
                                    type: "timestamp"
                                },
                                WorkloadSummary: {
                                    shape: "S37"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListNotifications: {
            http: {
                requestUri: "/notifications"
            },
            input: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NotificationSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Type: {},
                                LensUpgradeSummary: {
                                    type: "structure",
                                    members: {
                                        WorkloadId: {},
                                        WorkloadName: {},
                                        LensAlias: {},
                                        CurrentLensVersion: {},
                                        LatestLensVersion: {}
                                    }
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListShareInvitations: {
            http: {
                method: "GET",
                requestUri: "/shareInvitations"
            },
            input: {
                type: "structure",
                members: {
                    WorkloadNamePrefix: {
                        location: "querystring",
                        locationName: "WorkloadNamePrefix"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ShareInvitationSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ShareInvitationId: {},
                                SharedBy: {},
                                SharedWith: {},
                                PermissionType: {},
                                WorkloadName: {},
                                WorkloadId: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{WorkloadArn}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadArn" ],
                members: {
                    WorkloadArn: {
                        location: "uri",
                        locationName: "WorkloadArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Tags: {
                        shape: "Ss"
                    }
                }
            }
        },
        ListWorkloadShares: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/shares"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    SharedWithPrefix: {
                        location: "querystring",
                        locationName: "SharedWithPrefix"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    WorkloadShareSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ShareId: {},
                                SharedWith: {},
                                PermissionType: {},
                                Status: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListWorkloads: {
            http: {
                requestUri: "/workloadsSummaries"
            },
            input: {
                type: "structure",
                members: {
                    WorkloadNamePrefix: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadSummaries: {
                        type: "list",
                        member: {
                            shape: "S37"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{WorkloadArn}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadArn", "Tags" ],
                members: {
                    WorkloadArn: {
                        location: "uri",
                        locationName: "WorkloadArn"
                    },
                    Tags: {
                        shape: "Ss"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags/{WorkloadArn}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadArn", "TagKeys" ],
                members: {
                    WorkloadArn: {
                        location: "uri",
                        locationName: "WorkloadArn"
                    },
                    TagKeys: {
                        location: "querystring",
                        locationName: "tagKeys",
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateAnswer: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias", "QuestionId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    QuestionId: {
                        location: "uri",
                        locationName: "QuestionId"
                    },
                    SelectedChoices: {
                        shape: "S1i"
                    },
                    Notes: {},
                    IsApplicable: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    LensAlias: {},
                    Answer: {
                        shape: "S18"
                    }
                }
            }
        },
        UpdateLensReview: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    LensNotes: {},
                    PillarNotes: {
                        type: "map",
                        key: {},
                        value: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    LensReview: {
                        shape: "S1n"
                    }
                }
            }
        },
        UpdateShareInvitation: {
            http: {
                method: "PATCH",
                requestUri: "/shareInvitations/{ShareInvitationId}"
            },
            input: {
                type: "structure",
                required: [ "ShareInvitationId", "ShareInvitationAction" ],
                members: {
                    ShareInvitationId: {
                        location: "uri",
                        locationName: "ShareInvitationId"
                    },
                    ShareInvitationAction: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ShareInvitation: {
                        type: "structure",
                        members: {
                            ShareInvitationId: {},
                            WorkloadId: {}
                        }
                    }
                }
            }
        },
        UpdateWorkload: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    WorkloadName: {},
                    Description: {},
                    Environment: {},
                    AccountIds: {
                        shape: "Se"
                    },
                    AwsRegions: {
                        shape: "Sg"
                    },
                    NonAwsRegions: {
                        shape: "Si"
                    },
                    PillarPriorities: {
                        shape: "Sk"
                    },
                    ArchitecturalDesign: {},
                    ReviewOwner: {},
                    IsReviewOwnerUpdateAcknowledged: {
                        type: "boolean"
                    },
                    IndustryType: {},
                    Industry: {},
                    Notes: {},
                    ImprovementStatus: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Workload: {
                        shape: "S2d"
                    }
                }
            }
        },
        UpdateWorkloadShare: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/shares/{ShareId}"
            },
            input: {
                type: "structure",
                required: [ "ShareId", "WorkloadId", "PermissionType" ],
                members: {
                    ShareId: {
                        location: "uri",
                        locationName: "ShareId"
                    },
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    PermissionType: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    WorkloadShare: {
                        type: "structure",
                        members: {
                            ShareId: {},
                            SharedBy: {},
                            SharedWith: {},
                            PermissionType: {},
                            Status: {},
                            WorkloadName: {},
                            WorkloadId: {}
                        }
                    }
                }
            }
        },
        UpgradeLensReview: {
            http: {
                method: "PUT",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias", "MilestoneName" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    MilestoneName: {},
                    ClientRequestToken: {}
                }
            }
        }
    },
    shapes: {
        S3: {
            type: "list",
            member: {}
        },
        Se: {
            type: "list",
            member: {}
        },
        Sg: {
            type: "list",
            member: {}
        },
        Si: {
            type: "list",
            member: {}
        },
        Sk: {
            type: "list",
            member: {}
        },
        Sq: {
            type: "list",
            member: {}
        },
        Ss: {
            type: "map",
            key: {},
            value: {}
        },
        S18: {
            type: "structure",
            members: {
                QuestionId: {},
                PillarId: {},
                QuestionTitle: {},
                QuestionDescription: {},
                ImprovementPlanUrl: {},
                HelpfulResourceUrl: {},
                Choices: {
                    shape: "S1d"
                },
                SelectedChoices: {
                    shape: "S1i"
                },
                IsApplicable: {
                    type: "boolean"
                },
                Risk: {},
                Notes: {}
            }
        },
        S1d: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    ChoiceId: {},
                    Title: {},
                    Description: {}
                }
            }
        },
        S1i: {
            type: "list",
            member: {}
        },
        S1n: {
            type: "structure",
            members: {
                LensAlias: {},
                LensVersion: {},
                LensName: {},
                LensStatus: {},
                PillarReviewSummaries: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            PillarId: {},
                            PillarName: {},
                            Notes: {},
                            RiskCounts: {
                                shape: "S1u"
                            }
                        }
                    }
                },
                UpdatedAt: {
                    type: "timestamp"
                },
                Notes: {},
                RiskCounts: {
                    shape: "S1u"
                },
                NextToken: {}
            }
        },
        S1u: {
            type: "map",
            key: {},
            value: {
                type: "integer"
            }
        },
        S2d: {
            type: "structure",
            members: {
                WorkloadId: {},
                WorkloadArn: {},
                WorkloadName: {},
                Description: {},
                Environment: {},
                UpdatedAt: {
                    type: "timestamp"
                },
                AccountIds: {
                    shape: "Se"
                },
                AwsRegions: {
                    shape: "Sg"
                },
                NonAwsRegions: {
                    shape: "Si"
                },
                ArchitecturalDesign: {},
                ReviewOwner: {},
                ReviewRestrictionDate: {
                    type: "timestamp"
                },
                IsReviewOwnerUpdateAcknowledged: {
                    type: "boolean"
                },
                IndustryType: {},
                Industry: {},
                Notes: {},
                ImprovementStatus: {},
                RiskCounts: {
                    shape: "S1u"
                },
                PillarPriorities: {
                    shape: "Sk"
                },
                Lenses: {
                    shape: "Sq"
                },
                Owner: {},
                ShareInvitationId: {},
                Tags: {
                    shape: "Ss"
                }
            }
        },
        S37: {
            type: "structure",
            members: {
                WorkloadId: {},
                WorkloadArn: {},
                WorkloadName: {},
                Owner: {},
                UpdatedAt: {
                    type: "timestamp"
                },
                Lenses: {
                    shape: "Sq"
                },
                RiskCounts: {
                    shape: "S1u"
                },
                ImprovementStatus: {}
            }
        }
    },
    paginators: {
        ListAnswers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListLensReviewImprovements: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListLensReviews: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListLenses: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListMilestones: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListNotifications: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListShareInvitations: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListWorkloadShares: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListWorkloads: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};

AWS.apiLoader.services["lexmodelsv2"] = {};

AWS.LexModelsV2 = AWS.Service.defineService("lexmodelsv2", [ "2020-08-07" ]);

_xamzrequire = function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof _xamzrequire == "function" && _xamzrequire;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof _xamzrequire == "function" && _xamzrequire;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    99: [ function(require, module, exports) {
        var AWS = require("../core");
        AWS.util.update(AWS.LexModelsV2.prototype, {
            setupRequestListeners: function setupRequestListeners(request) {
                request.addListener("build", this.modifyContentType);
            },
            modifyContentType: function modifyContentType(request) {
                if (request.httpRequest.headers["Content-Type"] === "application/json") {
                    request.httpRequest.headers["Content-Type"] = "application/x-amz-json-1.1";
                }
            }
        });
    }, {
        "../core": 39
    } ]
}, {}, [ 99 ]);

AWS.apiLoader.services["lexmodelsv2"]["2020-08-07"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-08-07",
        endpointPrefix: "models-v2-lex",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "Lex Models V2",
        serviceFullName: "Amazon Lex Model Building V2",
        serviceId: "Lex Models V2",
        signatureVersion: "v4",
        signingName: "lex",
        uid: "models.lex.v2-2020-08-07"
    },
    operations: {
        BuildBotLocale: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    botLocaleStatus: {},
                    lastBuildSubmittedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateBot: {
            http: {
                method: "PUT",
                requestUri: "/bots/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botName", "roleArn", "dataPrivacy", "idleSessionTTLInSeconds" ],
                members: {
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botTags: {
                        shape: "Sf"
                    },
                    testBotAliasTags: {
                        shape: "Sf"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    botTags: {
                        shape: "Sf"
                    },
                    testBotAliasTags: {
                        shape: "Sf"
                    }
                }
            }
        },
        CreateBotAlias: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botaliases/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botAliasName", "botId" ],
                members: {
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    tags: {
                        shape: "Sf"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasId: {},
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botAliasStatus: {},
                    botId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    tags: {
                        shape: "Sf"
                    }
                }
            }
        },
        CreateBotLocale: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId", "nluIntentConfidenceThreshold" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {},
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeName: {},
                    localeId: {},
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    },
                    botLocaleStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateBotVersion: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersionLocaleSpecification" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    description: {},
                    botVersionLocaleSpecification: {
                        shape: "S1h"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    description: {},
                    botVersion: {},
                    botVersionLocaleSpecification: {
                        shape: "S1h"
                    },
                    botStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateIntent: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "intentName", "botId", "botVersion", "localeId" ],
                members: {
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    intentId: {},
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateSlot: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotName", "slotTypeId", "valueElicitationSetting", "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotId: {},
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentId: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateSlotType: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotTypeName", "valueSelectionSetting", "botId", "botVersion", "localeId" ],
                members: {
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
                    },
                    parentSlotTypeSignature: {},
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotTypeId: {},
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
                    },
                    parentSlotTypeSignature: {},
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DeleteBot: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    skipResourceInUseCheck: {
                        location: "querystring",
                        locationName: "skipResourceInUseCheck",
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botStatus: {}
                }
            }
        },
        DeleteBotAlias: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botaliases/{botAliasId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botAliasId", "botId" ],
                members: {
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    skipResourceInUseCheck: {
                        location: "querystring",
                        locationName: "skipResourceInUseCheck",
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasId: {},
                    botId: {},
                    botAliasStatus: {}
                }
            }
        },
        DeleteBotLocale: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    botLocaleStatus: {}
                }
            }
        },
        DeleteBotVersion: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    skipResourceInUseCheck: {
                        location: "querystring",
                        locationName: "skipResourceInUseCheck",
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    botStatus: {}
                }
            }
        },
        DeleteIntent: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "intentId", "botId", "botVersion", "localeId" ],
                members: {
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            }
        },
        DeleteSlot: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "slotId", "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    slotId: {
                        location: "uri",
                        locationName: "slotId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    }
                }
            }
        },
        DeleteSlotType: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "slotTypeId", "botId", "botVersion", "localeId" ],
                members: {
                    slotTypeId: {
                        location: "uri",
                        locationName: "slotTypeId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    skipResourceInUseCheck: {
                        location: "querystring",
                        locationName: "skipResourceInUseCheck",
                        type: "boolean"
                    }
                }
            }
        },
        DescribeBot: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeBotAlias: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botaliases/{botAliasId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botAliasId", "botId" ],
                members: {
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasId: {},
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botAliasHistoryEvents: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                botVersion: {},
                                startDate: {
                                    type: "timestamp"
                                },
                                endDate: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    botAliasStatus: {},
                    botId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeBotLocale: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    localeName: {},
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    },
                    intentsCount: {
                        type: "integer"
                    },
                    slotTypesCount: {
                        type: "integer"
                    },
                    botLocaleStatus: {},
                    failureReasons: {
                        shape: "S41"
                    },
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    },
                    lastBuildSubmittedDateTime: {
                        type: "timestamp"
                    },
                    botLocaleHistoryEvents: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "event", "eventDate" ],
                            members: {
                                event: {},
                                eventDate: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            }
        },
        DescribeBotVersion: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botName: {},
                    botVersion: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botStatus: {},
                    failureReasons: {
                        shape: "S41"
                    },
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeIntent: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "intentId", "botId", "botVersion", "localeId" ],
                members: {
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    intentId: {},
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    slotPriorities: {
                        shape: "S4a"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeSlot: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotId", "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    slotId: {
                        location: "uri",
                        locationName: "slotId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotId: {},
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeSlotType: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotTypeId", "botId", "botVersion", "localeId" ],
                members: {
                    slotTypeId: {
                        location: "uri",
                        locationName: "slotTypeId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotTypeId: {},
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
                    },
                    parentSlotTypeSignature: {},
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        ListBotAliases: {
            http: {
                requestUri: "/bots/{botId}/botaliases/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                botAliasId: {},
                                botAliasName: {},
                                description: {},
                                botVersion: {},
                                botAliasStatus: {},
                                creationDateTime: {
                                    type: "timestamp"
                                },
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {},
                    botId: {}
                }
            }
        },
        ListBotLocales: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S4u"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    nextToken: {},
                    botLocaleSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                localeId: {},
                                localeName: {},
                                description: {},
                                botLocaleStatus: {},
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                },
                                lastBuildSubmittedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            }
        },
        ListBotVersions: {
            http: {
                requestUri: "/bots/{botId}/botversions/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersionSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                botName: {},
                                botVersion: {},
                                description: {},
                                botStatus: {},
                                creationDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListBots: {
            http: {
                requestUri: "/bots/",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S4u"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                botId: {},
                                botName: {},
                                description: {},
                                botStatus: {},
                                latestBotVersion: {},
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListBuiltInIntents: {
            http: {
                requestUri: "/builtins/locales/{localeId}/intents/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "localeId" ],
                members: {
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    builtInIntentSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                intentSignature: {},
                                description: {}
                            }
                        }
                    },
                    nextToken: {},
                    localeId: {}
                }
            }
        },
        ListBuiltInSlotTypes: {
            http: {
                requestUri: "/builtins/locales/{localeId}/slottypes/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "localeId" ],
                members: {
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    builtInSlotTypeSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                slotTypeSignature: {},
                                description: {}
                            }
                        }
                    },
                    nextToken: {},
                    localeId: {}
                }
            }
        },
        ListIntents: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S4u"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                intentId: {},
                                intentName: {},
                                description: {},
                                parentIntentSignature: {},
                                inputContexts: {
                                    shape: "S2f"
                                },
                                outputContexts: {
                                    shape: "S2h"
                                },
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListSlotTypes: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S4u"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    slotTypeSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                slotTypeId: {},
                                slotTypeName: {},
                                description: {},
                                parentSlotTypeSignature: {},
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListSlots: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S4u"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentId: {},
                    slotSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                slotId: {},
                                slotName: {},
                                description: {},
                                slotConstraint: {},
                                slotTypeId: {},
                                valueElicitationPromptSpecification: {
                                    shape: "S1t"
                                },
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceARN}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceARN" ],
                members: {
                    resourceARN: {
                        location: "uri",
                        locationName: "resourceARN"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    tags: {
                        shape: "Sf"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceARN}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceARN", "tags" ],
                members: {
                    resourceARN: {
                        location: "uri",
                        locationName: "resourceARN"
                    },
                    tags: {
                        shape: "Sf"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags/{resourceARN}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceARN", "tagKeys" ],
                members: {
                    resourceARN: {
                        location: "uri",
                        locationName: "resourceARN"
                    },
                    tagKeys: {
                        location: "querystring",
                        locationName: "tagKeys",
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateBot: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botName", "roleArn", "dataPrivacy", "idleSessionTTLInSeconds" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateBotAlias: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botaliases/{botAliasId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botAliasId", "botAliasName", "botId" ],
                members: {
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasId: {},
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botAliasStatus: {},
                    botId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateBotLocale: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId", "nluIntentConfidenceThreshold" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    localeName: {},
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    },
                    botLocaleStatus: {},
                    failureReasons: {
                        shape: "S41"
                    },
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateIntent: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "intentId", "intentName", "botId", "botVersion", "localeId" ],
                members: {
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    },
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    slotPriorities: {
                        shape: "S4a"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    intentId: {},
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    slotPriorities: {
                        shape: "S4a"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateSlot: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotId", "slotName", "slotTypeId", "valueElicitationSetting", "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    slotId: {
                        location: "uri",
                        locationName: "slotId"
                    },
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotId: {},
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateSlotType: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "slotTypeId", "slotTypeName", "valueSelectionSetting", "botId", "botVersion", "localeId" ],
                members: {
                    slotTypeId: {
                        location: "uri",
                        locationName: "slotTypeId"
                    },
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
                    },
                    parentSlotTypeSignature: {},
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotTypeId: {},
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
                    },
                    parentSlotTypeSignature: {},
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        }
    },
    shapes: {
        Sc: {
            type: "structure",
            required: [ "childDirected" ],
            members: {
                childDirected: {
                    type: "boolean"
                }
            }
        },
        Sf: {
            type: "map",
            key: {},
            value: {}
        },
        Sm: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                required: [ "enabled" ],
                members: {
                    enabled: {
                        type: "boolean"
                    },
                    codeHookSpecification: {
                        type: "structure",
                        required: [ "lambdaCodeHook" ],
                        members: {
                            lambdaCodeHook: {
                                type: "structure",
                                required: [ "lambdaARN", "codeHookInterfaceVersion" ],
                                members: {
                                    lambdaARN: {},
                                    codeHookInterfaceVersion: {}
                                }
                            }
                        }
                    }
                }
            }
        },
        St: {
            type: "structure",
            members: {
                textLogSettings: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "enabled", "destination" ],
                        members: {
                            enabled: {
                                type: "boolean"
                            },
                            destination: {
                                type: "structure",
                                required: [ "cloudWatch" ],
                                members: {
                                    cloudWatch: {
                                        type: "structure",
                                        required: [ "cloudWatchLogGroupArn", "logPrefix" ],
                                        members: {
                                            cloudWatchLogGroupArn: {},
                                            logPrefix: {}
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                audioLogSettings: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "enabled", "destination" ],
                        members: {
                            enabled: {
                                type: "boolean"
                            },
                            destination: {
                                type: "structure",
                                required: [ "s3Bucket" ],
                                members: {
                                    s3Bucket: {
                                        type: "structure",
                                        required: [ "s3BucketArn", "logPrefix" ],
                                        members: {
                                            kmsKeyArn: {},
                                            s3BucketArn: {},
                                            logPrefix: {}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        S16: {
            type: "structure",
            required: [ "detectSentiment" ],
            members: {
                detectSentiment: {
                    type: "boolean"
                }
            }
        },
        S1c: {
            type: "structure",
            required: [ "voiceId" ],
            members: {
                voiceId: {}
            }
        },
        S1h: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                required: [ "sourceBotVersion" ],
                members: {
                    sourceBotVersion: {}
                }
            }
        },
        S1n: {
            type: "list",
            member: {
                type: "structure",
                required: [ "utterance" ],
                members: {
                    utterance: {}
                }
            }
        },
        S1q: {
            type: "structure",
            required: [ "enabled" ],
            members: {
                enabled: {
                    type: "boolean"
                }
            }
        },
        S1r: {
            type: "structure",
            required: [ "enabled" ],
            members: {
                enabled: {
                    type: "boolean"
                }
            }
        },
        S1s: {
            type: "structure",
            required: [ "promptSpecification", "declinationResponse" ],
            members: {
                promptSpecification: {
                    shape: "S1t"
                },
                declinationResponse: {
                    shape: "S2d"
                }
            }
        },
        S1t: {
            type: "structure",
            required: [ "messageGroups", "maxRetries" ],
            members: {
                messageGroups: {
                    shape: "S1u"
                },
                maxRetries: {
                    type: "integer"
                },
                allowInterrupt: {
                    type: "boolean"
                }
            }
        },
        S1u: {
            type: "list",
            member: {
                type: "structure",
                required: [ "message" ],
                members: {
                    message: {
                        shape: "S1w"
                    },
                    variations: {
                        type: "list",
                        member: {
                            shape: "S1w"
                        }
                    }
                }
            }
        },
        S1w: {
            type: "structure",
            members: {
                plainTextMessage: {
                    type: "structure",
                    required: [ "value" ],
                    members: {
                        value: {}
                    }
                },
                customPayload: {
                    type: "structure",
                    required: [ "value" ],
                    members: {
                        value: {}
                    }
                },
                ssmlMessage: {
                    type: "structure",
                    required: [ "value" ],
                    members: {
                        value: {}
                    }
                },
                imageResponseCard: {
                    type: "structure",
                    required: [ "title" ],
                    members: {
                        title: {},
                        subtitle: {},
                        imageUrl: {},
                        buttons: {
                            type: "list",
                            member: {
                                type: "structure",
                                required: [ "text", "value" ],
                                members: {
                                    text: {},
                                    value: {}
                                }
                            }
                        }
                    }
                }
            }
        },
        S2d: {
            type: "structure",
            required: [ "messageGroups" ],
            members: {
                messageGroups: {
                    shape: "S1u"
                },
                allowInterrupt: {
                    type: "boolean"
                }
            }
        },
        S2e: {
            type: "structure",
            required: [ "closingResponse" ],
            members: {
                closingResponse: {
                    shape: "S2d"
                }
            }
        },
        S2f: {
            type: "list",
            member: {
                type: "structure",
                required: [ "name" ],
                members: {
                    name: {}
                }
            }
        },
        S2h: {
            type: "list",
            member: {
                type: "structure",
                required: [ "name", "timeToLiveInSeconds", "turnsToLive" ],
                members: {
                    name: {},
                    timeToLiveInSeconds: {
                        type: "integer"
                    },
                    turnsToLive: {
                        type: "integer"
                    }
                }
            }
        },
        S2l: {
            type: "structure",
            required: [ "kendraIndex" ],
            members: {
                kendraIndex: {},
                queryFilterStringEnabled: {
                    type: "boolean"
                },
                queryFilterString: {}
            }
        },
        S2r: {
            type: "structure",
            required: [ "slotConstraint" ],
            members: {
                defaultValueSpecification: {
                    type: "structure",
                    required: [ "defaultValueList" ],
                    members: {
                        defaultValueList: {
                            type: "list",
                            member: {
                                type: "structure",
                                required: [ "defaultValue" ],
                                members: {
                                    defaultValue: {}
                                }
                            }
                        }
                    }
                },
                slotConstraint: {},
                promptSpecification: {
                    shape: "S1t"
                },
                sampleUtterances: {
                    shape: "S1n"
                },
                waitAndContinueSpecification: {
                    type: "structure",
                    required: [ "waitingResponse", "continueResponse" ],
                    members: {
                        waitingResponse: {
                            shape: "S2d"
                        },
                        continueResponse: {
                            shape: "S2d"
                        },
                        stillWaitingResponse: {
                            type: "structure",
                            required: [ "messageGroups", "frequencyInSeconds", "timeoutInSeconds" ],
                            members: {
                                messageGroups: {
                                    shape: "S1u"
                                },
                                frequencyInSeconds: {
                                    type: "integer"
                                },
                                timeoutInSeconds: {
                                    type: "integer"
                                },
                                allowInterrupt: {
                                    type: "boolean"
                                }
                            }
                        }
                    }
                }
            }
        },
        S31: {
            type: "structure",
            required: [ "obfuscationSettingType" ],
            members: {
                obfuscationSettingType: {}
            }
        },
        S35: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    sampleValue: {
                        shape: "S37"
                    },
                    synonyms: {
                        type: "list",
                        member: {
                            shape: "S37"
                        }
                    }
                }
            }
        },
        S37: {
            type: "structure",
            required: [ "value" ],
            members: {
                value: {}
            }
        },
        S3a: {
            type: "structure",
            required: [ "resolutionStrategy" ],
            members: {
                resolutionStrategy: {},
                regexFilter: {
                    type: "structure",
                    required: [ "pattern" ],
                    members: {
                        pattern: {}
                    }
                }
            }
        },
        S41: {
            type: "list",
            member: {}
        },
        S4a: {
            type: "list",
            member: {
                type: "structure",
                required: [ "priority", "slotId" ],
                members: {
                    priority: {
                        type: "integer"
                    },
                    slotId: {}
                }
            }
        },
        S4u: {
            type: "list",
            member: {}
        }
    },
    paginators: {
        ListBotAliases: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBotLocales: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBotVersions: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBots: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBuiltInIntents: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBuiltInSlotTypes: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListIntents: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListSlotTypes: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListSlots: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        }
    }
};

AWS.apiLoader.services["lexruntimev2"] = {};

AWS.LexRuntimeV2 = AWS.Service.defineService("lexruntimev2", [ "2020-08-07" ]);

AWS.apiLoader.services["lexruntimev2"]["2020-08-07"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-08-07",
        endpointPrefix: "runtime-v2-lex",
        jsonVersion: "1.1",
        protocol: "rest-json",
        protocolSettings: {
            h2: "eventstream"
        },
        serviceAbbreviation: "Lex Runtime V2",
        serviceFullName: "Amazon Lex Runtime V2",
        serviceId: "Lex Runtime V2",
        signatureVersion: "v4",
        signingName: "lex",
        uid: "runtime.lex.v2-2020-08-07"
    },
    operations: {
        DeleteSession: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "sessionId", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botAliasId: {},
                    localeId: {},
                    sessionId: {}
                }
            }
        },
        GetSession: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "localeId", "sessionId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    sessionId: {},
                    messages: {
                        shape: "Sa"
                    },
                    interpretations: {
                        shape: "Sl"
                    },
                    sessionState: {
                        shape: "Sz"
                    }
                }
            }
        },
        PutSession: {
            http: {
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "localeId", "sessionState", "sessionId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    messages: {
                        shape: "Sa"
                    },
                    sessionState: {
                        shape: "Sz"
                    },
                    requestAttributes: {
                        shape: "S1a"
                    },
                    responseContentType: {
                        location: "header",
                        locationName: "ResponseContentType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    contentType: {
                        location: "header",
                        locationName: "Content-Type"
                    },
                    messages: {
                        location: "header",
                        locationName: "x-amz-lex-messages"
                    },
                    sessionState: {
                        location: "header",
                        locationName: "x-amz-lex-session-state"
                    },
                    requestAttributes: {
                        location: "header",
                        locationName: "x-amz-lex-request-attributes"
                    },
                    sessionId: {
                        location: "header",
                        locationName: "x-amz-lex-session-id"
                    },
                    audioStream: {
                        shape: "S1e"
                    }
                },
                payload: "audioStream"
            }
        },
        RecognizeText: {
            http: {
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "localeId", "text", "sessionId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    text: {
                        shape: "Sc"
                    },
                    sessionState: {
                        shape: "Sz"
                    },
                    requestAttributes: {
                        shape: "S1a"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    messages: {
                        shape: "Sa"
                    },
                    sessionState: {
                        shape: "Sz"
                    },
                    interpretations: {
                        shape: "Sl"
                    },
                    requestAttributes: {
                        shape: "S1a"
                    },
                    sessionId: {}
                }
            }
        },
        RecognizeUtterance: {
            http: {
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "localeId", "requestContentType", "sessionId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    sessionState: {
                        shape: "S1i",
                        location: "header",
                        locationName: "x-amz-lex-session-state"
                    },
                    requestAttributes: {
                        shape: "S1i",
                        location: "header",
                        locationName: "x-amz-lex-request-attributes"
                    },
                    requestContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    },
                    responseContentType: {
                        location: "header",
                        locationName: "Response-Content-Type"
                    },
                    inputStream: {
                        shape: "S1e"
                    }
                },
                payload: "inputStream"
            },
            output: {
                type: "structure",
                members: {
                    inputMode: {
                        location: "header",
                        locationName: "x-amz-lex-input-mode"
                    },
                    contentType: {
                        location: "header",
                        locationName: "Content-Type"
                    },
                    messages: {
                        location: "header",
                        locationName: "x-amz-lex-messages"
                    },
                    interpretations: {
                        location: "header",
                        locationName: "x-amz-lex-interpretations"
                    },
                    sessionState: {
                        location: "header",
                        locationName: "x-amz-lex-session-state"
                    },
                    requestAttributes: {
                        location: "header",
                        locationName: "x-amz-lex-request-attributes"
                    },
                    sessionId: {
                        location: "header",
                        locationName: "x-amz-lex-session-id"
                    },
                    inputTranscript: {
                        location: "header",
                        locationName: "x-amz-lex-input-transcript"
                    },
                    audioStream: {
                        shape: "S1e"
                    }
                },
                payload: "audioStream"
            },
            authtype: "v4-unsigned-body"
        }
    },
    shapes: {
        Sa: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    content: {
                        shape: "Sc"
                    },
                    contentType: {},
                    imageResponseCard: {
                        type: "structure",
                        required: [ "title" ],
                        members: {
                            title: {},
                            subtitle: {},
                            imageUrl: {},
                            buttons: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    required: [ "text", "value" ],
                                    members: {
                                        text: {},
                                        value: {}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        Sc: {
            type: "string",
            sensitive: true
        },
        Sl: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    nluConfidence: {
                        type: "structure",
                        members: {
                            score: {
                                type: "double"
                            }
                        }
                    },
                    sentimentResponse: {
                        type: "structure",
                        members: {
                            sentiment: {},
                            sentimentScore: {
                                type: "structure",
                                members: {
                                    positive: {
                                        type: "double"
                                    },
                                    negative: {
                                        type: "double"
                                    },
                                    neutral: {
                                        type: "double"
                                    },
                                    mixed: {
                                        type: "double"
                                    }
                                }
                            }
                        }
                    },
                    intent: {
                        shape: "Ss"
                    }
                }
            }
        },
        Ss: {
            type: "structure",
            required: [ "name" ],
            members: {
                name: {},
                slots: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            value: {
                                type: "structure",
                                required: [ "interpretedValue" ],
                                members: {
                                    originalValue: {},
                                    interpretedValue: {},
                                    resolvedValues: {
                                        type: "list",
                                        member: {}
                                    }
                                }
                            }
                        }
                    }
                },
                state: {},
                confirmationState: {}
            }
        },
        Sz: {
            type: "structure",
            members: {
                dialogAction: {
                    type: "structure",
                    required: [ "type" ],
                    members: {
                        type: {},
                        slotToElicit: {}
                    }
                },
                intent: {
                    shape: "Ss"
                },
                activeContexts: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "name", "timeToLive" ],
                        members: {
                            name: {},
                            timeToLive: {
                                type: "structure",
                                required: [ "timeToLiveInSeconds", "turnsToLive" ],
                                members: {
                                    timeToLiveInSeconds: {
                                        type: "integer"
                                    },
                                    turnsToLive: {
                                        type: "integer"
                                    }
                                }
                            },
                            contextAttributes: {
                                type: "map",
                                key: {},
                                value: {
                                    shape: "Sc"
                                }
                            }
                        }
                    }
                },
                sessionAttributes: {
                    shape: "S1a"
                },
                originatingRequestId: {}
            }
        },
        S1a: {
            type: "map",
            key: {},
            value: {}
        },
        S1e: {
            type: "blob",
            streaming: true
        },
        S1i: {
            type: "string",
            sensitive: true
        }
    },
    paginators: {}
};

AWS.apiLoader.services["fis"] = {};

AWS.Fis = AWS.Service.defineService("fis", [ "2020-12-01" ]);

AWS.apiLoader.services["fis"]["2020-12-01"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-12-01",
        endpointPrefix: "fis",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "FIS",
        serviceFullName: "AWS Fault Injection Simulator",
        serviceId: "fis",
        signatureVersion: "v4",
        signingName: "fis",
        uid: "fis-2020-12-01"
    },
    operations: {
        CreateExperimentTemplate: {
            http: {
                requestUri: "/experimentTemplates",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "clientToken", "description", "stopConditions", "actions", "roleArn" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    description: {},
                    stopConditions: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "source" ],
                            members: {
                                source: {},
                                value: {}
                            }
                        }
                    },
                    targets: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            required: [ "resourceType", "selectionMode" ],
                            members: {
                                resourceType: {},
                                resourceArns: {
                                    shape: "Sc"
                                },
                                resourceTags: {
                                    shape: "Se"
                                },
                                filters: {
                                    shape: "Sh"
                                },
                                selectionMode: {}
                            }
                        }
                    },
                    actions: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            required: [ "actionId" ],
                            members: {
                                actionId: {},
                                description: {},
                                parameters: {
                                    shape: "Ss"
                                },
                                targets: {
                                    shape: "Sv"
                                },
                                startAfter: {
                                    shape: "Sx"
                                }
                            }
                        }
                    },
                    roleArn: {},
                    tags: {
                        shape: "Se"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experimentTemplate: {
                        shape: "S11"
                    }
                }
            }
        },
        DeleteExperimentTemplate: {
            http: {
                method: "DELETE",
                requestUri: "/experimentTemplates/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experimentTemplate: {
                        shape: "S11"
                    }
                }
            }
        },
        GetAction: {
            http: {
                method: "GET",
                requestUri: "/actions/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    action: {
                        type: "structure",
                        members: {
                            id: {},
                            description: {},
                            parameters: {
                                type: "map",
                                key: {},
                                value: {
                                    type: "structure",
                                    members: {
                                        description: {},
                                        required: {
                                            type: "boolean"
                                        }
                                    }
                                }
                            },
                            targets: {
                                shape: "S1o"
                            },
                            tags: {
                                shape: "Se"
                            }
                        }
                    }
                }
            }
        },
        GetExperiment: {
            http: {
                method: "GET",
                requestUri: "/experiments/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experiment: {
                        shape: "S1v"
                    }
                }
            }
        },
        GetExperimentTemplate: {
            http: {
                method: "GET",
                requestUri: "/experimentTemplates/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experimentTemplate: {
                        shape: "S11"
                    }
                }
            }
        },
        ListActions: {
            http: {
                method: "GET",
                requestUri: "/actions",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    actions: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                id: {},
                                description: {},
                                targets: {
                                    shape: "S1o"
                                },
                                tags: {
                                    shape: "Se"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListExperimentTemplates: {
            http: {
                method: "GET",
                requestUri: "/experimentTemplates",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experimentTemplates: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                id: {},
                                description: {},
                                creationTime: {
                                    type: "timestamp"
                                },
                                lastUpdateTime: {
                                    type: "timestamp"
                                },
                                tags: {
                                    shape: "Se"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListExperiments: {
            http: {
                method: "GET",
                requestUri: "/experiments",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experiments: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                id: {},
                                experimentTemplateId: {},
                                state: {
                                    shape: "S1w"
                                },
                                creationTime: {
                                    type: "timestamp"
                                },
                                tags: {
                                    shape: "Se"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    tags: {
                        shape: "Se"
                    }
                }
            }
        },
        StartExperiment: {
            http: {
                requestUri: "/experiments",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "clientToken", "experimentTemplateId" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    experimentTemplateId: {},
                    tags: {
                        shape: "Se"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experiment: {
                        shape: "S1v"
                    }
                }
            }
        },
        StopExperiment: {
            http: {
                method: "DELETE",
                requestUri: "/experiments/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experiment: {
                        shape: "S1v"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "Se"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tagKeys: {
                        location: "querystring",
                        locationName: "tagKeys",
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateExperimentTemplate: {
            http: {
                method: "PATCH",
                requestUri: "/experimentTemplates/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    },
                    description: {},
                    stopConditions: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "source" ],
                            members: {
                                source: {},
                                value: {}
                            }
                        }
                    },
                    targets: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            required: [ "resourceType", "selectionMode" ],
                            members: {
                                resourceType: {},
                                resourceArns: {
                                    shape: "Sc"
                                },
                                resourceTags: {
                                    shape: "Se"
                                },
                                filters: {
                                    shape: "Sh"
                                },
                                selectionMode: {}
                            }
                        }
                    },
                    actions: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            members: {
                                actionId: {},
                                description: {},
                                parameters: {
                                    shape: "Ss"
                                },
                                targets: {
                                    shape: "Sv"
                                },
                                startAfter: {
                                    shape: "Sx"
                                }
                            }
                        }
                    },
                    roleArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    experimentTemplate: {
                        shape: "S11"
                    }
                }
            }
        }
    },
    shapes: {
        Sc: {
            type: "list",
            member: {}
        },
        Se: {
            type: "map",
            key: {},
            value: {}
        },
        Sh: {
            type: "list",
            member: {
                type: "structure",
                required: [ "path", "values" ],
                members: {
                    path: {},
                    values: {
                        shape: "Sk"
                    }
                }
            }
        },
        Sk: {
            type: "list",
            member: {}
        },
        Ss: {
            type: "map",
            key: {},
            value: {}
        },
        Sv: {
            type: "map",
            key: {},
            value: {}
        },
        Sx: {
            type: "list",
            member: {}
        },
        S11: {
            type: "structure",
            members: {
                id: {},
                description: {},
                targets: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            resourceType: {},
                            resourceArns: {
                                shape: "Sc"
                            },
                            resourceTags: {
                                shape: "Se"
                            },
                            filters: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        path: {},
                                        values: {
                                            shape: "Sk"
                                        }
                                    }
                                }
                            },
                            selectionMode: {}
                        }
                    }
                },
                actions: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            actionId: {},
                            description: {},
                            parameters: {
                                shape: "Ss"
                            },
                            targets: {
                                shape: "Sv"
                            },
                            startAfter: {
                                shape: "Sx"
                            }
                        }
                    }
                },
                stopConditions: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            source: {},
                            value: {}
                        }
                    }
                },
                creationTime: {
                    type: "timestamp"
                },
                lastUpdateTime: {
                    type: "timestamp"
                },
                roleArn: {},
                tags: {
                    shape: "Se"
                }
            }
        },
        S1o: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                members: {
                    resourceType: {}
                }
            }
        },
        S1v: {
            type: "structure",
            members: {
                id: {},
                experimentTemplateId: {},
                roleArn: {},
                state: {
                    shape: "S1w"
                },
                targets: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            resourceType: {},
                            resourceArns: {
                                shape: "Sc"
                            },
                            resourceTags: {
                                shape: "Se"
                            },
                            filters: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        path: {},
                                        values: {
                                            type: "list",
                                            member: {}
                                        }
                                    }
                                }
                            },
                            selectionMode: {}
                        }
                    }
                },
                actions: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            actionId: {},
                            description: {},
                            parameters: {
                                type: "map",
                                key: {},
                                value: {}
                            },
                            targets: {
                                type: "map",
                                key: {},
                                value: {}
                            },
                            startAfter: {
                                type: "list",
                                member: {}
                            },
                            state: {
                                type: "structure",
                                members: {
                                    status: {},
                                    reason: {}
                                }
                            }
                        }
                    }
                },
                stopConditions: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            source: {},
                            value: {}
                        }
                    }
                },
                creationTime: {
                    type: "timestamp"
                },
                startTime: {
                    type: "timestamp"
                },
                endTime: {
                    type: "timestamp"
                },
                tags: {
                    shape: "Se"
                }
            }
        },
        S1w: {
            type: "structure",
            members: {
                status: {},
                reason: {}
            }
        }
    },
    paginators: {
        ListActions: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListExperimentTemplates: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListExperiments: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        }
    }
};

AWS.apiLoader.services["lookoutmetrics"] = {};

AWS.LookoutMetrics = AWS.Service.defineService("lookoutmetrics", [ "2017-07-25" ]);

_xamzrequire = function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof _xamzrequire == "function" && _xamzrequire;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof _xamzrequire == "function" && _xamzrequire;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    100: [ function(require, module, exports) {
        var AWS = require("../core");
        AWS.util.update(AWS.LookoutMetrics.prototype, {
            setupRequestListeners: function setupRequestListeners(request) {
                request.addListener("build", this.modifyContentType);
            },
            modifyContentType: function modifyContentType(request) {
                if (request.httpRequest.headers["Content-Type"] === "application/json") {
                    request.httpRequest.headers["Content-Type"] = "application/x-amz-json-1.1";
                }
            }
        });
    }, {
        "../core": 39
    } ]
}, {}, [ 100 ]);

AWS.apiLoader.services["lookoutmetrics"]["2017-07-25"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2017-07-25",
        endpointPrefix: "lookoutmetrics",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "LookoutMetrics",
        serviceFullName: "Amazon Lookout for Metrics",
        serviceId: "LookoutMetrics",
        signatureVersion: "v4",
        signingName: "lookoutmetrics",
        uid: "lookoutmetrics-2017-07-25"
    },
    operations: {
        ActivateAnomalyDetector: {
            http: {
                requestUri: "/ActivateAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        BackTestAnomalyDetector: {
            http: {
                requestUri: "/BackTestAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        CreateAlert: {
            http: {
                requestUri: "/CreateAlert"
            },
            input: {
                type: "structure",
                required: [ "AlertName", "AlertSensitivityThreshold", "AnomalyDetectorArn", "Action" ],
                members: {
                    AlertName: {},
                    AlertSensitivityThreshold: {
                        type: "integer"
                    },
                    AlertDescription: {},
                    AnomalyDetectorArn: {},
                    Action: {
                        shape: "Sa"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AlertArn: {}
                }
            }
        },
        CreateAnomalyDetector: {
            http: {
                requestUri: "/CreateAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorName", "AnomalyDetectorConfig" ],
                members: {
                    AnomalyDetectorName: {},
                    AnomalyDetectorDescription: {},
                    AnomalyDetectorConfig: {
                        shape: "Sk"
                    },
                    KmsKeyArn: {},
                    Tags: {
                        shape: "Sd"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {}
                }
            }
        },
        CreateMetricSet: {
            http: {
                requestUri: "/CreateMetricSet"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "MetricSetName", "MetricList", "MetricSource" ],
                members: {
                    AnomalyDetectorArn: {},
                    MetricSetName: {},
                    MetricSetDescription: {},
                    MetricList: {
                        shape: "Sr"
                    },
                    Offset: {
                        type: "integer"
                    },
                    TimestampColumn: {
                        shape: "Sx"
                    },
                    DimensionList: {
                        shape: "Sz"
                    },
                    MetricSetFrequency: {},
                    MetricSource: {
                        shape: "S10"
                    },
                    Timezone: {},
                    Tags: {
                        shape: "Sd"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    MetricSetArn: {}
                }
            }
        },
        DeleteAlert: {
            http: {
                requestUri: "/DeleteAlert"
            },
            input: {
                type: "structure",
                required: [ "AlertArn" ],
                members: {
                    AlertArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteAnomalyDetector: {
            http: {
                requestUri: "/DeleteAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DescribeAlert: {
            http: {
                requestUri: "/DescribeAlert"
            },
            input: {
                type: "structure",
                required: [ "AlertArn" ],
                members: {
                    AlertArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Alert: {
                        type: "structure",
                        members: {
                            Action: {
                                shape: "Sa"
                            },
                            AlertDescription: {},
                            AlertArn: {},
                            AnomalyDetectorArn: {},
                            AlertName: {},
                            AlertSensitivityThreshold: {
                                type: "integer"
                            },
                            AlertType: {},
                            AlertStatus: {},
                            LastModificationTime: {
                                type: "timestamp"
                            },
                            CreationTime: {
                                type: "timestamp"
                            }
                        }
                    }
                }
            }
        },
        DescribeAnomalyDetectionExecutions: {
            http: {
                requestUri: "/DescribeAnomalyDetectionExecutions"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {},
                    Timestamp: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ExecutionList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Timestamp: {},
                                Status: {},
                                FailureReason: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeAnomalyDetector: {
            http: {
                requestUri: "/DescribeAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {},
                    AnomalyDetectorName: {},
                    AnomalyDetectorDescription: {},
                    AnomalyDetectorConfig: {
                        type: "structure",
                        members: {
                            AnomalyDetectorFrequency: {}
                        }
                    },
                    CreationTime: {
                        type: "timestamp"
                    },
                    LastModificationTime: {
                        type: "timestamp"
                    },
                    Status: {},
                    FailureReason: {},
                    KmsKeyArn: {}
                }
            }
        },
        DescribeMetricSet: {
            http: {
                requestUri: "/DescribeMetricSet"
            },
            input: {
                type: "structure",
                required: [ "MetricSetArn" ],
                members: {
                    MetricSetArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    MetricSetArn: {},
                    AnomalyDetectorArn: {},
                    MetricSetName: {},
                    MetricSetDescription: {},
                    CreationTime: {
                        type: "timestamp"
                    },
                    LastModificationTime: {
                        type: "timestamp"
                    },
                    Offset: {
                        type: "integer"
                    },
                    MetricList: {
                        shape: "Sr"
                    },
                    TimestampColumn: {
                        shape: "Sx"
                    },
                    DimensionList: {
                        shape: "Sz"
                    },
                    MetricSetFrequency: {},
                    Timezone: {},
                    MetricSource: {
                        shape: "S10"
                    }
                }
            }
        },
        GetAnomalyGroup: {
            http: {
                requestUri: "/GetAnomalyGroup"
            },
            input: {
                type: "structure",
                required: [ "AnomalyGroupId", "AnomalyDetectorArn" ],
                members: {
                    AnomalyGroupId: {},
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyGroup: {
                        type: "structure",
                        members: {
                            StartTime: {},
                            EndTime: {},
                            AnomalyGroupId: {},
                            AnomalyGroupScore: {
                                type: "double"
                            },
                            PrimaryMetricName: {},
                            MetricLevelImpactList: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        MetricName: {},
                                        NumTimeSeries: {
                                            type: "integer"
                                        },
                                        ContributionMatrix: {
                                            type: "structure",
                                            members: {
                                                DimensionContributionList: {
                                                    type: "list",
                                                    member: {
                                                        type: "structure",
                                                        members: {
                                                            DimensionName: {},
                                                            DimensionValueContributionList: {
                                                                type: "list",
                                                                member: {
                                                                    type: "structure",
                                                                    members: {
                                                                        DimensionValue: {},
                                                                        ContributionScore: {
                                                                            type: "double"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        GetFeedback: {
            http: {
                requestUri: "/GetFeedback"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "AnomalyGroupTimeSeriesFeedback" ],
                members: {
                    AnomalyDetectorArn: {},
                    AnomalyGroupTimeSeriesFeedback: {
                        type: "structure",
                        required: [ "AnomalyGroupId" ],
                        members: {
                            AnomalyGroupId: {},
                            TimeSeriesId: {}
                        }
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyGroupTimeSeriesFeedback: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                TimeSeriesId: {},
                                IsAnomaly: {
                                    type: "boolean"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        GetSampleData: {
            http: {
                requestUri: "/GetSampleData"
            },
            input: {
                type: "structure",
                members: {
                    S3SourceConfig: {
                        type: "structure",
                        required: [ "RoleArn", "FileFormatDescriptor" ],
                        members: {
                            RoleArn: {},
                            TemplatedPathList: {
                                shape: "S12"
                            },
                            HistoricalDataPathList: {
                                shape: "S14"
                            },
                            FileFormatDescriptor: {
                                shape: "S16"
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    HeaderValues: {
                        type: "list",
                        member: {}
                    },
                    SampleRows: {
                        type: "list",
                        member: {
                            type: "list",
                            member: {}
                        }
                    }
                }
            }
        },
        ListAlerts: {
            http: {
                requestUri: "/ListAlerts"
            },
            input: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AlertSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                AlertArn: {},
                                AnomalyDetectorArn: {},
                                AlertName: {},
                                AlertSensitivityThreshold: {
                                    type: "integer"
                                },
                                AlertType: {},
                                AlertStatus: {},
                                LastModificationTime: {
                                    type: "timestamp"
                                },
                                CreationTime: {
                                    type: "timestamp"
                                },
                                Tags: {
                                    shape: "Sd"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListAnomalyDetectors: {
            http: {
                requestUri: "/ListAnomalyDetectors"
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyDetectorSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                AnomalyDetectorArn: {},
                                AnomalyDetectorName: {},
                                AnomalyDetectorDescription: {},
                                CreationTime: {
                                    type: "timestamp"
                                },
                                LastModificationTime: {
                                    type: "timestamp"
                                },
                                Status: {},
                                Tags: {
                                    shape: "Sd"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListAnomalyGroupSummaries: {
            http: {
                requestUri: "/ListAnomalyGroupSummaries"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "SensitivityThreshold" ],
                members: {
                    AnomalyDetectorArn: {},
                    SensitivityThreshold: {
                        type: "integer"
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyGroupSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                StartTime: {},
                                EndTime: {},
                                AnomalyGroupId: {},
                                AnomalyGroupScore: {
                                    type: "double"
                                },
                                PrimaryMetricName: {}
                            }
                        }
                    },
                    AnomalyGroupStatistics: {
                        type: "structure",
                        members: {
                            EvaluationStartDate: {},
                            TotalCount: {
                                type: "integer"
                            },
                            ItemizedMetricStatsList: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        MetricName: {},
                                        OccurrenceCount: {
                                            type: "integer"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListAnomalyGroupTimeSeries: {
            http: {
                requestUri: "/ListAnomalyGroupTimeSeries"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "AnomalyGroupId", "MetricName" ],
                members: {
                    AnomalyDetectorArn: {},
                    AnomalyGroupId: {},
                    MetricName: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyGroupId: {},
                    MetricName: {},
                    TimestampList: {
                        type: "list",
                        member: {}
                    },
                    NextToken: {},
                    TimeSeriesList: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "TimeSeriesId", "DimensionList", "MetricValueList" ],
                            members: {
                                TimeSeriesId: {},
                                DimensionList: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        required: [ "DimensionName", "DimensionValue" ],
                                        members: {
                                            DimensionName: {},
                                            DimensionValue: {}
                                        }
                                    }
                                },
                                MetricValueList: {
                                    type: "list",
                                    member: {
                                        type: "double"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        ListMetricSets: {
            http: {
                requestUri: "/ListMetricSets"
            },
            input: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    MetricSetSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                MetricSetArn: {},
                                AnomalyDetectorArn: {},
                                MetricSetDescription: {},
                                MetricSetName: {},
                                CreationTime: {
                                    type: "timestamp"
                                },
                                LastModificationTime: {
                                    type: "timestamp"
                                },
                                Tags: {
                                    shape: "Sd"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ResourceArn" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Tags: {
                        shape: "Sd",
                        locationName: "Tags"
                    }
                }
            }
        },
        PutFeedback: {
            http: {
                requestUri: "/PutFeedback"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "AnomalyGroupTimeSeriesFeedback" ],
                members: {
                    AnomalyDetectorArn: {},
                    AnomalyGroupTimeSeriesFeedback: {
                        type: "structure",
                        required: [ "AnomalyGroupId", "TimeSeriesId", "IsAnomaly" ],
                        members: {
                            AnomalyGroupId: {},
                            TimeSeriesId: {},
                            IsAnomaly: {
                                type: "boolean"
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "Tags" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    Tags: {
                        shape: "Sd",
                        locationName: "tags"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags/{resourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "TagKeys" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    TagKeys: {
                        location: "querystring",
                        locationName: "tagKeys",
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateAnomalyDetector: {
            http: {
                requestUri: "/UpdateAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {},
                    KmsKeyArn: {},
                    AnomalyDetectorDescription: {},
                    AnomalyDetectorConfig: {
                        shape: "Sk"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {}
                }
            }
        },
        UpdateMetricSet: {
            http: {
                requestUri: "/UpdateMetricSet"
            },
            input: {
                type: "structure",
                required: [ "MetricSetArn" ],
                members: {
                    MetricSetArn: {},
                    MetricSetDescription: {},
                    MetricList: {
                        shape: "Sr"
                    },
                    Offset: {
                        type: "integer"
                    },
                    TimestampColumn: {
                        shape: "Sx"
                    },
                    DimensionList: {
                        shape: "Sz"
                    },
                    MetricSetFrequency: {},
                    MetricSource: {
                        shape: "S10"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    MetricSetArn: {}
                }
            }
        }
    },
    shapes: {
        Sa: {
            type: "structure",
            members: {
                SNSConfiguration: {
                    type: "structure",
                    required: [ "RoleArn", "SnsTopicArn" ],
                    members: {
                        RoleArn: {},
                        SnsTopicArn: {}
                    }
                },
                LambdaConfiguration: {
                    type: "structure",
                    required: [ "RoleArn", "LambdaArn" ],
                    members: {
                        RoleArn: {},
                        LambdaArn: {}
                    }
                }
            }
        },
        Sd: {
            type: "map",
            key: {},
            value: {}
        },
        Sk: {
            type: "structure",
            members: {
                AnomalyDetectorFrequency: {}
            }
        },
        Sr: {
            type: "list",
            member: {
                type: "structure",
                required: [ "MetricName", "AggregationFunction" ],
                members: {
                    MetricName: {},
                    AggregationFunction: {},
                    Namespace: {}
                }
            }
        },
        Sx: {
            type: "structure",
            members: {
                ColumnName: {},
                ColumnFormat: {}
            }
        },
        Sz: {
            type: "list",
            member: {}
        },
        S10: {
            type: "structure",
            members: {
                S3SourceConfig: {
                    type: "structure",
                    required: [ "RoleArn" ],
                    members: {
                        RoleArn: {},
                        TemplatedPathList: {
                            shape: "S12"
                        },
                        HistoricalDataPathList: {
                            shape: "S14"
                        },
                        FileFormatDescriptor: {
                            shape: "S16"
                        }
                    }
                },
                AppFlowConfig: {
                    type: "structure",
                    required: [ "RoleArn", "FlowName" ],
                    members: {
                        RoleArn: {},
                        FlowName: {}
                    }
                },
                CloudWatchConfig: {
                    type: "structure",
                    required: [ "RoleArn" ],
                    members: {
                        RoleArn: {}
                    }
                },
                RDSSourceConfig: {
                    type: "structure",
                    required: [ "DBInstanceIdentifier", "DatabaseHost", "DatabasePort", "SecretManagerArn", "DatabaseName", "TableName", "RoleArn", "VpcConfiguration" ],
                    members: {
                        DBInstanceIdentifier: {},
                        DatabaseHost: {},
                        DatabasePort: {
                            type: "integer"
                        },
                        SecretManagerArn: {},
                        DatabaseName: {},
                        TableName: {},
                        RoleArn: {},
                        VpcConfiguration: {
                            shape: "S1q"
                        }
                    }
                },
                RedshiftSourceConfig: {
                    type: "structure",
                    required: [ "ClusterIdentifier", "DatabaseHost", "DatabasePort", "SecretManagerArn", "DatabaseName", "TableName", "RoleArn", "VpcConfiguration" ],
                    members: {
                        ClusterIdentifier: {},
                        DatabaseHost: {},
                        DatabasePort: {
                            type: "integer"
                        },
                        SecretManagerArn: {},
                        DatabaseName: {},
                        TableName: {},
                        RoleArn: {},
                        VpcConfiguration: {
                            shape: "S1q"
                        }
                    }
                }
            }
        },
        S12: {
            type: "list",
            member: {}
        },
        S14: {
            type: "list",
            member: {}
        },
        S16: {
            type: "structure",
            members: {
                CsvFormatDescriptor: {
                    type: "structure",
                    members: {
                        FileCompression: {},
                        Charset: {},
                        ContainsHeader: {
                            type: "boolean"
                        },
                        Delimiter: {},
                        HeaderList: {
                            type: "list",
                            member: {}
                        },
                        QuoteSymbol: {}
                    }
                },
                JsonFormatDescriptor: {
                    type: "structure",
                    members: {
                        FileCompression: {},
                        Charset: {}
                    }
                }
            }
        },
        S1q: {
            type: "structure",
            required: [ "SubnetIdList", "SecurityGroupIdList" ],
            members: {
                SubnetIdList: {
                    type: "list",
                    member: {}
                },
                SecurityGroupIdList: {
                    type: "list",
                    member: {}
                }
            }
        }
    },
    paginators: {
        DescribeAnomalyDetectionExecutions: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        GetFeedback: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListAlerts: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListAnomalyDetectors: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListAnomalyGroupSummaries: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListAnomalyGroupTimeSeries: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListMetricSets: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};

AWS.apiLoader.services["mgn"] = {};

AWS.Mgn = AWS.Service.defineService("mgn", [ "2020-02-26" ]);

AWS.apiLoader.services["mgn"]["2020-02-26"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-02-26",
        endpointPrefix: "mgn",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "mgn",
        serviceFullName: "Application Migration Service",
        serviceId: "mgn",
        signatureVersion: "v4",
        signingName: "mgn",
        uid: "mgn-2020-02-26"
    },
    operations: {
        ChangeServerLifeCycleState: {
            http: {
                requestUri: "/ChangeServerLifeCycleState",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "lifeCycle", "sourceServerID" ],
                members: {
                    lifeCycle: {
                        type: "structure",
                        required: [ "state" ],
                        members: {
                            state: {}
                        }
                    },
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        CreateReplicationConfigurationTemplate: {
            http: {
                requestUri: "/CreateReplicationConfigurationTemplate",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "associateDefaultSecurityGroup", "bandwidthThrottling", "createPublicIP", "dataPlaneRouting", "defaultLargeStagingDiskType", "ebsEncryption", "replicationServerInstanceType", "replicationServersSecurityGroupsIDs", "stagingAreaSubnetId", "stagingAreaTags", "useDedicatedReplicationServer" ],
                members: {
                    associateDefaultSecurityGroup: {
                        type: "boolean"
                    },
                    bandwidthThrottling: {
                        type: "long"
                    },
                    createPublicIP: {
                        type: "boolean"
                    },
                    dataPlaneRouting: {},
                    defaultLargeStagingDiskType: {},
                    ebsEncryption: {},
                    ebsEncryptionKeyArn: {},
                    replicationServerInstanceType: {},
                    replicationServersSecurityGroupsIDs: {
                        shape: "S1j"
                    },
                    stagingAreaSubnetId: {},
                    stagingAreaTags: {
                        shape: "S1c"
                    },
                    tags: {
                        shape: "S1c"
                    },
                    useDedicatedReplicationServer: {
                        type: "boolean"
                    }
                }
            },
            output: {
                shape: "S1m"
            }
        },
        DeleteJob: {
            http: {
                requestUri: "/DeleteJob",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "jobID" ],
                members: {
                    jobID: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteReplicationConfigurationTemplate: {
            http: {
                requestUri: "/DeleteReplicationConfigurationTemplate",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "replicationConfigurationTemplateID" ],
                members: {
                    replicationConfigurationTemplateID: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteSourceServer: {
            http: {
                requestUri: "/DeleteSourceServer",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DescribeJobLogItems: {
            http: {
                requestUri: "/DescribeJobLogItems",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "jobID" ],
                members: {
                    jobID: {},
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    items: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                event: {},
                                eventData: {
                                    type: "structure",
                                    members: {
                                        conversionServerID: {},
                                        rawError: {},
                                        sourceServerID: {},
                                        targetInstanceID: {}
                                    }
                                },
                                logDateTime: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DescribeJobs: {
            http: {
                requestUri: "/DescribeJobs",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "filters" ],
                members: {
                    filters: {
                        type: "structure",
                        members: {
                            fromDate: {},
                            jobIDs: {
                                type: "list",
                                member: {}
                            },
                            toDate: {}
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    items: {
                        type: "list",
                        member: {
                            shape: "S27"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DescribeReplicationConfigurationTemplates: {
            http: {
                requestUri: "/DescribeReplicationConfigurationTemplates",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "replicationConfigurationTemplateIDs" ],
                members: {
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    replicationConfigurationTemplateIDs: {
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    items: {
                        type: "list",
                        member: {
                            shape: "S1m"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DescribeSourceServers: {
            http: {
                requestUri: "/DescribeSourceServers",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "filters" ],
                members: {
                    filters: {
                        type: "structure",
                        members: {
                            isArchived: {
                                type: "boolean"
                            },
                            sourceServerIDs: {
                                type: "list",
                                member: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    items: {
                        type: "list",
                        member: {
                            shape: "S5"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DisconnectFromService: {
            http: {
                requestUri: "/DisconnectFromService",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        FinalizeCutover: {
            http: {
                requestUri: "/FinalizeCutover",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        GetLaunchConfiguration: {
            http: {
                requestUri: "/GetLaunchConfiguration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S2q"
            }
        },
        GetReplicationConfiguration: {
            http: {
                requestUri: "/GetReplicationConfiguration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S2w"
            }
        },
        InitializeService: {
            http: {
                requestUri: "/InitializeService",
                responseCode: 204
            },
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    tags: {
                        shape: "S1c"
                    }
                }
            }
        },
        MarkAsArchived: {
            http: {
                requestUri: "/MarkAsArchived",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        RetryDataReplication: {
            http: {
                requestUri: "/RetryDataReplication",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        StartCutover: {
            http: {
                requestUri: "/StartCutover",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "sourceServerIDs" ],
                members: {
                    sourceServerIDs: {
                        type: "list",
                        member: {}
                    },
                    tags: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    job: {
                        shape: "S27"
                    }
                }
            }
        },
        StartTest: {
            http: {
                requestUri: "/StartTest",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "sourceServerIDs" ],
                members: {
                    sourceServerIDs: {
                        type: "list",
                        member: {}
                    },
                    tags: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    job: {
                        shape: "S27"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "S1c"
                    }
                }
            },
            idempotent: true
        },
        TerminateTargetInstances: {
            http: {
                requestUri: "/TerminateTargetInstances",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "sourceServerIDs" ],
                members: {
                    sourceServerIDs: {
                        type: "list",
                        member: {}
                    },
                    tags: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    job: {
                        shape: "S27"
                    }
                }
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tagKeys" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tagKeys: {
                        location: "querystring",
                        locationName: "tagKeys",
                        type: "list",
                        member: {},
                        sensitive: true
                    }
                }
            },
            idempotent: true
        },
        UpdateLaunchConfiguration: {
            http: {
                requestUri: "/UpdateLaunchConfiguration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    copyPrivateIp: {
                        type: "boolean"
                    },
                    copyTags: {
                        type: "boolean"
                    },
                    launchDisposition: {},
                    licensing: {
                        shape: "S2s"
                    },
                    name: {},
                    sourceServerID: {},
                    targetInstanceTypeRightSizingMethod: {}
                }
            },
            output: {
                shape: "S2q"
            },
            idempotent: true
        },
        UpdateReplicationConfiguration: {
            http: {
                requestUri: "/UpdateReplicationConfiguration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    associateDefaultSecurityGroup: {
                        type: "boolean"
                    },
                    bandwidthThrottling: {
                        type: "long"
                    },
                    createPublicIP: {
                        type: "boolean"
                    },
                    dataPlaneRouting: {},
                    defaultLargeStagingDiskType: {},
                    ebsEncryption: {},
                    ebsEncryptionKeyArn: {},
                    name: {},
                    replicatedDisks: {
                        shape: "S2x"
                    },
                    replicationServerInstanceType: {},
                    replicationServersSecurityGroupsIDs: {
                        shape: "S1j"
                    },
                    sourceServerID: {},
                    stagingAreaSubnetId: {},
                    stagingAreaTags: {
                        shape: "S1c"
                    },
                    useDedicatedReplicationServer: {
                        type: "boolean"
                    }
                }
            },
            output: {
                shape: "S2w"
            },
            idempotent: true
        },
        UpdateReplicationConfigurationTemplate: {
            http: {
                requestUri: "/UpdateReplicationConfigurationTemplate",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "replicationConfigurationTemplateID" ],
                members: {
                    arn: {},
                    associateDefaultSecurityGroup: {
                        type: "boolean"
                    },
                    bandwidthThrottling: {
                        type: "long"
                    },
                    createPublicIP: {
                        type: "boolean"
                    },
                    dataPlaneRouting: {},
                    defaultLargeStagingDiskType: {},
                    ebsEncryption: {},
                    ebsEncryptionKeyArn: {},
                    replicationConfigurationTemplateID: {},
                    replicationServerInstanceType: {},
                    replicationServersSecurityGroupsIDs: {
                        shape: "S1j"
                    },
                    stagingAreaSubnetId: {},
                    stagingAreaTags: {
                        shape: "S1c"
                    },
                    useDedicatedReplicationServer: {
                        type: "boolean"
                    }
                }
            },
            output: {
                shape: "S1m"
            }
        }
    },
    shapes: {
        S5: {
            type: "structure",
            members: {
                arn: {},
                dataReplicationInfo: {
                    type: "structure",
                    members: {
                        dataReplicationError: {
                            type: "structure",
                            members: {
                                error: {},
                                rawError: {}
                            }
                        },
                        dataReplicationInitiation: {
                            type: "structure",
                            members: {
                                nextAttemptDateTime: {},
                                startDateTime: {},
                                steps: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        members: {
                                            name: {},
                                            status: {}
                                        }
                                    }
                                }
                            }
                        },
                        dataReplicationState: {},
                        etaDateTime: {},
                        lagDuration: {},
                        replicatedDisks: {
                            type: "list",
                            member: {
                                type: "structure",
                                members: {
                                    backloggedStorageBytes: {
                                        type: "long"
                                    },
                                    deviceName: {},
                                    replicatedStorageBytes: {
                                        type: "long"
                                    },
                                    rescannedStorageBytes: {
                                        type: "long"
                                    },
                                    totalStorageBytes: {
                                        type: "long"
                                    }
                                }
                            }
                        }
                    }
                },
                isArchived: {
                    type: "boolean"
                },
                launchedInstance: {
                    type: "structure",
                    members: {
                        ec2InstanceID: {},
                        firstBoot: {},
                        jobID: {}
                    }
                },
                lifeCycle: {
                    type: "structure",
                    members: {
                        addedToServiceDateTime: {},
                        elapsedReplicationDuration: {},
                        firstByteDateTime: {},
                        lastCutover: {
                            type: "structure",
                            members: {
                                finalized: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {}
                                    }
                                },
                                initiated: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {},
                                        jobID: {}
                                    }
                                },
                                reverted: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {}
                                    }
                                }
                            }
                        },
                        lastSeenByServiceDateTime: {},
                        lastTest: {
                            type: "structure",
                            members: {
                                finalized: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {}
                                    }
                                },
                                initiated: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {},
                                        jobID: {}
                                    }
                                },
                                reverted: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {}
                                    }
                                }
                            }
                        },
                        state: {}
                    }
                },
                sourceProperties: {
                    type: "structure",
                    members: {
                        cpus: {
                            type: "list",
                            member: {
                                type: "structure",
                                members: {
                                    cores: {
                                        type: "long"
                                    },
                                    modelName: {}
                                }
                            }
                        },
                        disks: {
                            type: "list",
                            member: {
                                type: "structure",
                                members: {
                                    bytes: {
                                        type: "long"
                                    },
                                    deviceName: {}
                                }
                            }
                        },
                        identificationHints: {
                            type: "structure",
                            members: {
                                awsInstanceID: {},
                                fqdn: {},
                                hostname: {},
                                vmWareUuid: {}
                            }
                        },
                        lastUpdatedDateTime: {},
                        networkInterfaces: {
                            type: "list",
                            member: {
                                type: "structure",
                                members: {
                                    ips: {
                                        type: "list",
                                        member: {}
                                    },
                                    isPrimary: {
                                        type: "boolean"
                                    },
                                    macAddress: {}
                                }
                            }
                        },
                        os: {
                            type: "structure",
                            members: {
                                fullString: {}
                            }
                        },
                        ramBytes: {
                            type: "long"
                        },
                        recommendedInstanceType: {}
                    }
                },
                sourceServerID: {},
                tags: {
                    shape: "S1c"
                }
            }
        },
        S1c: {
            type: "map",
            key: {},
            value: {},
            sensitive: true
        },
        S1j: {
            type: "list",
            member: {}
        },
        S1m: {
            type: "structure",
            required: [ "replicationConfigurationTemplateID" ],
            members: {
                arn: {},
                associateDefaultSecurityGroup: {
                    type: "boolean"
                },
                bandwidthThrottling: {
                    type: "long"
                },
                createPublicIP: {
                    type: "boolean"
                },
                dataPlaneRouting: {},
                defaultLargeStagingDiskType: {},
                ebsEncryption: {},
                ebsEncryptionKeyArn: {},
                replicationConfigurationTemplateID: {},
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                    shape: "S1j"
                },
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                    shape: "S1c"
                },
                tags: {
                    shape: "S1c"
                },
                useDedicatedReplicationServer: {
                    type: "boolean"
                }
            }
        },
        S27: {
            type: "structure",
            required: [ "jobID" ],
            members: {
                arn: {},
                creationDateTime: {},
                endDateTime: {},
                initiatedBy: {},
                jobID: {},
                participatingServers: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            launchStatus: {},
                            sourceServerID: {}
                        }
                    }
                },
                status: {},
                tags: {
                    shape: "S1c"
                },
                type: {}
            }
        },
        S2q: {
            type: "structure",
            members: {
                copyPrivateIp: {
                    type: "boolean"
                },
                copyTags: {
                    type: "boolean"
                },
                ec2LaunchTemplateID: {},
                launchDisposition: {},
                licensing: {
                    shape: "S2s"
                },
                name: {},
                sourceServerID: {},
                targetInstanceTypeRightSizingMethod: {}
            }
        },
        S2s: {
            type: "structure",
            members: {
                osByol: {
                    type: "boolean"
                }
            }
        },
        S2w: {
            type: "structure",
            members: {
                associateDefaultSecurityGroup: {
                    type: "boolean"
                },
                bandwidthThrottling: {
                    type: "long"
                },
                createPublicIP: {
                    type: "boolean"
                },
                dataPlaneRouting: {},
                defaultLargeStagingDiskType: {},
                ebsEncryption: {},
                ebsEncryptionKeyArn: {},
                name: {},
                replicatedDisks: {
                    shape: "S2x"
                },
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                    shape: "S1j"
                },
                sourceServerID: {},
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                    shape: "S1c"
                },
                useDedicatedReplicationServer: {
                    type: "boolean"
                }
            }
        },
        S2x: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    deviceName: {},
                    iops: {
                        type: "long"
                    },
                    isBootDisk: {
                        type: "boolean"
                    },
                    stagingDiskType: {}
                }
            }
        }
    },
    paginators: {
        DescribeJobLogItems: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "items"
        },
        DescribeJobs: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "items"
        },
        DescribeReplicationConfigurationTemplates: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "items"
        },
        DescribeSourceServers: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "items"
        }
    }
};

AWS.apiLoader.services["lookoutequipment"] = {};

AWS.LookoutEquipment = AWS.Service.defineService("lookoutequipment", [ "2020-12-15" ]);

AWS.apiLoader.services["lookoutequipment"]["2020-12-15"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-12-15",
        endpointPrefix: "lookoutequipment",
        jsonVersion: "1.0",
        protocol: "json",
        serviceAbbreviation: "LookoutEquipment",
        serviceFullName: "Amazon Lookout for Equipment",
        serviceId: "LookoutEquipment",
        signatureVersion: "v4",
        targetPrefix: "AWSLookoutEquipmentFrontendService",
        uid: "lookoutequipment-2020-12-15"
    },
    operations: {
        CreateDataset: {
            input: {
                type: "structure",
                required: [ "DatasetName", "DatasetSchema", "ClientToken" ],
                members: {
                    DatasetName: {},
                    DatasetSchema: {
                        shape: "S3"
                    },
                    ServerSideKmsKeyId: {},
                    ClientToken: {
                        idempotencyToken: true
                    },
                    Tags: {
                        shape: "S7"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    DatasetName: {},
                    DatasetArn: {},
                    Status: {}
                }
            }
        },
        CreateInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "ModelName", "InferenceSchedulerName", "DataUploadFrequency", "DataInputConfiguration", "DataOutputConfiguration", "RoleArn", "ClientToken" ],
                members: {
                    ModelName: {},
                    InferenceSchedulerName: {},
                    DataDelayOffsetInMinutes: {
                        type: "long"
                    },
                    DataUploadFrequency: {},
                    DataInputConfiguration: {
                        shape: "Sj"
                    },
                    DataOutputConfiguration: {
                        shape: "Sr"
                    },
                    RoleArn: {},
                    ServerSideKmsKeyId: {},
                    ClientToken: {
                        idempotencyToken: true
                    },
                    Tags: {
                        shape: "S7"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    InferenceSchedulerArn: {},
                    InferenceSchedulerName: {},
                    Status: {}
                }
            }
        },
        CreateModel: {
            input: {
                type: "structure",
                required: [ "ModelName", "DatasetName", "ClientToken" ],
                members: {
                    ModelName: {},
                    DatasetName: {},
                    DatasetSchema: {
                        shape: "S3"
                    },
                    LabelsInputConfiguration: {
                        shape: "Sz"
                    },
                    ClientToken: {
                        idempotencyToken: true
                    },
                    TrainingDataStartTime: {
                        type: "timestamp"
                    },
                    TrainingDataEndTime: {
                        type: "timestamp"
                    },
                    EvaluationDataStartTime: {
                        type: "timestamp"
                    },
                    EvaluationDataEndTime: {
                        type: "timestamp"
                    },
                    RoleArn: {},
                    DataPreProcessingConfiguration: {
                        shape: "S12"
                    },
                    ServerSideKmsKeyId: {},
                    Tags: {
                        shape: "S7"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelArn: {},
                    Status: {}
                }
            }
        },
        DeleteDataset: {
            input: {
                type: "structure",
                required: [ "DatasetName" ],
                members: {
                    DatasetName: {}
                }
            }
        },
        DeleteInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {}
                }
            }
        },
        DeleteModel: {
            input: {
                type: "structure",
                required: [ "ModelName" ],
                members: {
                    ModelName: {}
                }
            }
        },
        DescribeDataIngestionJob: {
            input: {
                type: "structure",
                required: [ "JobId" ],
                members: {
                    JobId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    JobId: {},
                    DatasetArn: {},
                    IngestionInputConfiguration: {
                        shape: "S1e"
                    },
                    RoleArn: {},
                    CreatedAt: {
                        type: "timestamp"
                    },
                    Status: {},
                    FailedReason: {}
                }
            }
        },
        DescribeDataset: {
            input: {
                type: "structure",
                required: [ "DatasetName" ],
                members: {
                    DatasetName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    DatasetName: {},
                    DatasetArn: {},
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Status: {},
                    Schema: {
                        jsonvalue: true
                    },
                    ServerSideKmsKeyId: {},
                    IngestionInputConfiguration: {
                        shape: "S1e"
                    }
                }
            }
        },
        DescribeInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelArn: {},
                    ModelName: {},
                    InferenceSchedulerName: {},
                    InferenceSchedulerArn: {},
                    Status: {},
                    DataDelayOffsetInMinutes: {
                        type: "long"
                    },
                    DataUploadFrequency: {},
                    CreatedAt: {
                        type: "timestamp"
                    },
                    UpdatedAt: {
                        type: "timestamp"
                    },
                    DataInputConfiguration: {
                        shape: "Sj"
                    },
                    DataOutputConfiguration: {
                        shape: "Sr"
                    },
                    RoleArn: {},
                    ServerSideKmsKeyId: {}
                }
            }
        },
        DescribeModel: {
            input: {
                type: "structure",
                required: [ "ModelName" ],
                members: {
                    ModelName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelName: {},
                    ModelArn: {},
                    DatasetName: {},
                    DatasetArn: {},
                    Schema: {
                        jsonvalue: true
                    },
                    LabelsInputConfiguration: {
                        shape: "Sz"
                    },
                    TrainingDataStartTime: {
                        type: "timestamp"
                    },
                    TrainingDataEndTime: {
                        type: "timestamp"
                    },
                    EvaluationDataStartTime: {
                        type: "timestamp"
                    },
                    EvaluationDataEndTime: {
                        type: "timestamp"
                    },
                    RoleArn: {},
                    DataPreProcessingConfiguration: {
                        shape: "S12"
                    },
                    Status: {},
                    TrainingExecutionStartTime: {
                        type: "timestamp"
                    },
                    TrainingExecutionEndTime: {
                        type: "timestamp"
                    },
                    FailedReason: {},
                    ModelMetrics: {
                        jsonvalue: true
                    },
                    LastUpdatedTime: {
                        type: "timestamp"
                    },
                    CreatedAt: {
                        type: "timestamp"
                    },
                    ServerSideKmsKeyId: {}
                }
            }
        },
        ListDataIngestionJobs: {
            input: {
                type: "structure",
                members: {
                    DatasetName: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    Status: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    DataIngestionJobSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                JobId: {},
                                DatasetName: {},
                                DatasetArn: {},
                                IngestionInputConfiguration: {
                                    shape: "S1e"
                                },
                                Status: {}
                            }
                        }
                    }
                }
            }
        },
        ListDatasets: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    DatasetNameBeginsWith: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    DatasetSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                DatasetName: {},
                                DatasetArn: {},
                                Status: {},
                                CreatedAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            }
        },
        ListInferenceExecutions: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    InferenceSchedulerName: {},
                    DataStartTimeAfter: {
                        type: "timestamp"
                    },
                    DataEndTimeBefore: {
                        type: "timestamp"
                    },
                    Status: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    InferenceExecutionSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ModelName: {},
                                ModelArn: {},
                                InferenceSchedulerName: {},
                                InferenceSchedulerArn: {},
                                ScheduledStartTime: {
                                    type: "timestamp"
                                },
                                DataStartTime: {
                                    type: "timestamp"
                                },
                                DataEndTime: {
                                    type: "timestamp"
                                },
                                DataInputConfiguration: {
                                    shape: "Sj"
                                },
                                DataOutputConfiguration: {
                                    shape: "Sr"
                                },
                                CustomerResultObject: {
                                    type: "structure",
                                    required: [ "Bucket", "Key" ],
                                    members: {
                                        Bucket: {},
                                        Key: {}
                                    }
                                },
                                Status: {},
                                FailedReason: {}
                            }
                        }
                    }
                }
            }
        },
        ListInferenceSchedulers: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    InferenceSchedulerNameBeginsWith: {},
                    ModelName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    InferenceSchedulerSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ModelName: {},
                                ModelArn: {},
                                InferenceSchedulerName: {},
                                InferenceSchedulerArn: {},
                                Status: {},
                                DataDelayOffsetInMinutes: {
                                    type: "long"
                                },
                                DataUploadFrequency: {}
                            }
                        }
                    }
                }
            }
        },
        ListModels: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    Status: {},
                    ModelNameBeginsWith: {},
                    DatasetNameBeginsWith: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    ModelSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ModelName: {},
                                ModelArn: {},
                                DatasetName: {},
                                DatasetArn: {},
                                Status: {},
                                CreatedAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            }
        },
        ListTagsForResource: {
            input: {
                type: "structure",
                required: [ "ResourceArn" ],
                members: {
                    ResourceArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Tags: {
                        shape: "S7"
                    }
                }
            }
        },
        StartDataIngestionJob: {
            input: {
                type: "structure",
                required: [ "DatasetName", "IngestionInputConfiguration", "RoleArn", "ClientToken" ],
                members: {
                    DatasetName: {},
                    IngestionInputConfiguration: {
                        shape: "S1e"
                    },
                    RoleArn: {},
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    JobId: {},
                    Status: {}
                }
            }
        },
        StartInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelArn: {},
                    ModelName: {},
                    InferenceSchedulerName: {},
                    InferenceSchedulerArn: {},
                    Status: {}
                }
            }
        },
        StopInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelArn: {},
                    ModelName: {},
                    InferenceSchedulerName: {},
                    InferenceSchedulerArn: {},
                    Status: {}
                }
            }
        },
        TagResource: {
            input: {
                type: "structure",
                required: [ "ResourceArn", "Tags" ],
                members: {
                    ResourceArn: {},
                    Tags: {
                        shape: "S7"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            input: {
                type: "structure",
                required: [ "ResourceArn", "TagKeys" ],
                members: {
                    ResourceArn: {},
                    TagKeys: {
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {},
                    DataDelayOffsetInMinutes: {
                        type: "long"
                    },
                    DataUploadFrequency: {},
                    DataInputConfiguration: {
                        shape: "Sj"
                    },
                    DataOutputConfiguration: {
                        shape: "Sr"
                    },
                    RoleArn: {}
                }
            }
        }
    },
    shapes: {
        S3: {
            type: "structure",
            members: {
                InlineDataSchema: {
                    jsonvalue: true
                }
            }
        },
        S7: {
            type: "list",
            member: {
                type: "structure",
                required: [ "Key", "Value" ],
                members: {
                    Key: {},
                    Value: {}
                }
            }
        },
        Sj: {
            type: "structure",
            members: {
                S3InputConfiguration: {
                    type: "structure",
                    required: [ "Bucket" ],
                    members: {
                        Bucket: {},
                        Prefix: {}
                    }
                },
                InputTimeZoneOffset: {},
                InferenceInputNameConfiguration: {
                    type: "structure",
                    members: {
                        TimestampFormat: {},
                        ComponentTimestampDelimiter: {}
                    }
                }
            }
        },
        Sr: {
            type: "structure",
            required: [ "S3OutputConfiguration" ],
            members: {
                S3OutputConfiguration: {
                    type: "structure",
                    required: [ "Bucket" ],
                    members: {
                        Bucket: {},
                        Prefix: {}
                    }
                },
                KmsKeyId: {}
            }
        },
        Sz: {
            type: "structure",
            required: [ "S3InputConfiguration" ],
            members: {
                S3InputConfiguration: {
                    type: "structure",
                    required: [ "Bucket" ],
                    members: {
                        Bucket: {},
                        Prefix: {}
                    }
                }
            }
        },
        S12: {
            type: "structure",
            members: {
                TargetSamplingRate: {}
            }
        },
        S1e: {
            type: "structure",
            required: [ "S3InputConfiguration" ],
            members: {
                S3InputConfiguration: {
                    type: "structure",
                    required: [ "Bucket" ],
                    members: {
                        Bucket: {},
                        Prefix: {}
                    }
                }
            }
        }
    },
    paginators: {
        ListDataIngestionJobs: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListDatasets: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListInferenceExecutions: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListInferenceSchedulers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListModels: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};

AWS.apiLoader.services["nimble"] = {};

AWS.Nimble = AWS.Service.defineService("nimble", [ "2020-08-01" ]);

AWS.apiLoader.services["nimble"]["2020-08-01"] = {
    metadata: {
        apiVersion: "2020-08-01",
        endpointPrefix: "nimble",
        signingName: "nimble",
        serviceFullName: "AmazonNimbleStudio",
        serviceId: "nimble",
        protocol: "rest-json",
        jsonVersion: "1.1",
        uid: "nimble-2020-08-01",
        signatureVersion: "v4"
    },
    operations: {
        AcceptEulas: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/eula-acceptances",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    eulaIds: {
                        shape: "S3",
                        locationName: "eulaIds"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    eulaAcceptances: {
                        shape: "S6",
                        locationName: "eulaAcceptances"
                    }
                }
            }
        },
        CreateLaunchProfile: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    description: {
                        locationName: "description"
                    },
                    ec2SubnetIds: {
                        shape: "Sd",
                        locationName: "ec2SubnetIds"
                    },
                    launchProfileProtocolVersions: {
                        shape: "Sf",
                        locationName: "launchProfileProtocolVersions"
                    },
                    name: {
                        locationName: "name"
                    },
                    streamConfiguration: {
                        shape: "Si",
                        locationName: "streamConfiguration"
                    },
                    studioComponentIds: {
                        shape: "Sp",
                        locationName: "studioComponentIds"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                },
                required: [ "ec2SubnetIds", "studioComponentIds", "studioId", "launchProfileProtocolVersions", "name", "streamConfiguration" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    }
                }
            }
        },
        CreateStreamingImage: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    description: {
                        locationName: "description"
                    },
                    ec2ImageId: {
                        locationName: "ec2ImageId"
                    },
                    name: {
                        locationName: "name"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                },
                required: [ "studioId", "name", "ec2ImageId" ]
            },
            output: {
                type: "structure",
                members: {
                    streamingImage: {
                        shape: "S12",
                        locationName: "streamingImage"
                    }
                }
            }
        },
        CreateStreamingSession: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    ec2InstanceType: {
                        locationName: "ec2InstanceType"
                    },
                    launchProfileId: {
                        locationName: "launchProfileId"
                    },
                    streamingImageId: {
                        locationName: "streamingImageId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    session: {
                        shape: "S1c",
                        locationName: "session"
                    }
                }
            }
        },
        CreateStreamingSessionStream: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    expirationInSeconds: {
                        locationName: "expirationInSeconds",
                        type: "integer"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "sessionId" ]
            },
            output: {
                type: "structure",
                members: {
                    stream: {
                        shape: "S1j",
                        locationName: "stream"
                    }
                }
            }
        },
        CreateStudio: {
            http: {
                requestUri: "/2020-08-01/studios",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    adminRoleArn: {
                        locationName: "adminRoleArn"
                    },
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    displayName: {
                        locationName: "displayName"
                    },
                    studioEncryptionConfiguration: {
                        shape: "S1o",
                        locationName: "studioEncryptionConfiguration"
                    },
                    studioName: {
                        locationName: "studioName"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    },
                    userRoleArn: {
                        locationName: "userRoleArn"
                    }
                },
                required: [ "displayName", "studioName", "userRoleArn", "adminRoleArn" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        CreateStudioComponent: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/studio-components",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    configuration: {
                        shape: "S1y",
                        locationName: "configuration"
                    },
                    description: {
                        locationName: "description"
                    },
                    ec2SecurityGroupIds: {
                        shape: "S2c",
                        locationName: "ec2SecurityGroupIds"
                    },
                    initializationScripts: {
                        shape: "S2e",
                        locationName: "initializationScripts"
                    },
                    name: {
                        locationName: "name"
                    },
                    scriptParameters: {
                        shape: "S2k",
                        locationName: "scriptParameters"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    subtype: {
                        locationName: "subtype"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    },
                    type: {
                        locationName: "type"
                    }
                },
                required: [ "studioId", "name", "type" ]
            },
            output: {
                type: "structure",
                members: {
                    studioComponent: {
                        shape: "S2r",
                        locationName: "studioComponent"
                    }
                }
            }
        },
        DeleteLaunchProfile: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    }
                }
            }
        },
        DeleteLaunchProfileMember: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "principalId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteStreamingImage: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    streamingImageId: {
                        location: "uri",
                        locationName: "streamingImageId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "streamingImageId" ]
            },
            output: {
                type: "structure",
                members: {
                    streamingImage: {
                        shape: "S12",
                        locationName: "streamingImage"
                    }
                }
            }
        },
        DeleteStreamingSession: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "sessionId" ]
            },
            output: {
                type: "structure",
                members: {
                    session: {
                        shape: "S1c",
                        locationName: "session"
                    }
                }
            }
        },
        DeleteStudio: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        DeleteStudioComponent: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    studioComponentId: {
                        location: "uri",
                        locationName: "studioComponentId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "studioComponentId" ]
            },
            output: {
                type: "structure",
                members: {
                    studioComponent: {
                        shape: "S2r",
                        locationName: "studioComponent"
                    }
                }
            }
        },
        DeleteStudioMember: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "principalId" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        GetEula: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/eulas/{eulaId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    eulaId: {
                        location: "uri",
                        locationName: "eulaId"
                    }
                },
                required: [ "eulaId" ]
            },
            output: {
                type: "structure",
                members: {
                    eula: {
                        shape: "S3b",
                        locationName: "eula"
                    }
                }
            }
        },
        GetLaunchProfile: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    }
                }
            }
        },
        GetLaunchProfileDetails: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/details",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    },
                    streamingImages: {
                        shape: "S3h",
                        locationName: "streamingImages"
                    },
                    studioComponentSummaries: {
                        locationName: "studioComponentSummaries",
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                createdAt: {
                                    shape: "S8",
                                    locationName: "createdAt"
                                },
                                createdBy: {
                                    locationName: "createdBy"
                                },
                                description: {
                                    locationName: "description"
                                },
                                name: {
                                    locationName: "name"
                                },
                                studioComponentId: {
                                    locationName: "studioComponentId"
                                },
                                subtype: {
                                    locationName: "subtype"
                                },
                                type: {
                                    locationName: "type"
                                },
                                updatedAt: {
                                    shape: "S8",
                                    locationName: "updatedAt"
                                },
                                updatedBy: {
                                    locationName: "updatedBy"
                                }
                            }
                        }
                    }
                }
            }
        },
        GetLaunchProfileInitialization: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/init",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    launchProfileProtocolVersions: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "launchProfileProtocolVersions"
                    },
                    launchPurpose: {
                        location: "querystring",
                        locationName: "launchPurpose"
                    },
                    platform: {
                        location: "querystring",
                        locationName: "platform"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileProtocolVersions", "launchPurpose", "launchProfileId", "platform" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfileInitialization: {
                        locationName: "launchProfileInitialization",
                        type: "structure",
                        members: {
                            activeDirectory: {
                                locationName: "activeDirectory",
                                type: "structure",
                                members: {
                                    computerAttributes: {
                                        shape: "S20",
                                        locationName: "computerAttributes"
                                    },
                                    directoryId: {
                                        locationName: "directoryId"
                                    },
                                    directoryName: {
                                        locationName: "directoryName"
                                    },
                                    dnsIpAddresses: {
                                        locationName: "dnsIpAddresses",
                                        type: "list",
                                        member: {}
                                    },
                                    organizationalUnitDistinguishedName: {
                                        locationName: "organizationalUnitDistinguishedName"
                                    },
                                    studioComponentId: {
                                        locationName: "studioComponentId"
                                    },
                                    studioComponentName: {
                                        locationName: "studioComponentName"
                                    }
                                }
                            },
                            ec2SecurityGroupIds: {
                                locationName: "ec2SecurityGroupIds",
                                type: "list",
                                member: {}
                            },
                            launchProfileId: {
                                locationName: "launchProfileId"
                            },
                            launchProfileProtocolVersion: {
                                locationName: "launchProfileProtocolVersion"
                            },
                            launchPurpose: {
                                locationName: "launchPurpose"
                            },
                            name: {
                                locationName: "name"
                            },
                            platform: {
                                locationName: "platform"
                            },
                            systemInitializationScripts: {
                                shape: "S3t",
                                locationName: "systemInitializationScripts"
                            },
                            userInitializationScripts: {
                                shape: "S3t",
                                locationName: "userInitializationScripts"
                            }
                        }
                    }
                }
            }
        },
        GetLaunchProfileMember: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "principalId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    member: {
                        shape: "S3x",
                        locationName: "member"
                    }
                }
            }
        },
        GetStreamingImage: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    streamingImageId: {
                        location: "uri",
                        locationName: "streamingImageId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "streamingImageId" ]
            },
            output: {
                type: "structure",
                members: {
                    streamingImage: {
                        shape: "S12",
                        locationName: "streamingImage"
                    }
                }
            }
        },
        GetStreamingSession: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "sessionId" ]
            },
            output: {
                type: "structure",
                members: {
                    session: {
                        shape: "S1c",
                        locationName: "session"
                    }
                }
            }
        },
        GetStreamingSessionStream: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams/{streamId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    streamId: {
                        location: "uri",
                        locationName: "streamId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "streamId", "sessionId" ]
            },
            output: {
                type: "structure",
                members: {
                    stream: {
                        shape: "S1j",
                        locationName: "stream"
                    }
                }
            }
        },
        GetStudio: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        GetStudioComponent: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    studioComponentId: {
                        location: "uri",
                        locationName: "studioComponentId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "studioComponentId" ]
            },
            output: {
                type: "structure",
                members: {
                    studioComponent: {
                        shape: "S2r",
                        locationName: "studioComponent"
                    }
                }
            }
        },
        GetStudioMember: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "principalId" ]
            },
            output: {
                type: "structure",
                members: {
                    member: {
                        shape: "S4b",
                        locationName: "member"
                    }
                }
            }
        },
        ListEulaAcceptances: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/eula-acceptances",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    eulaIds: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "eulaIds"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    eulaAcceptances: {
                        shape: "S6",
                        locationName: "eulaAcceptances"
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListEulas: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/eulas",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    eulaIds: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "eulaIds"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    eulas: {
                        locationName: "eulas",
                        type: "list",
                        member: {
                            shape: "S3b"
                        }
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListLaunchProfileMembers: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    members: {
                        locationName: "members",
                        type: "list",
                        member: {
                            shape: "S3x"
                        }
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListLaunchProfiles: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    principalId: {
                        location: "querystring",
                        locationName: "principalId"
                    },
                    states: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "states"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfiles: {
                        locationName: "launchProfiles",
                        type: "list",
                        member: {
                            shape: "Ss"
                        }
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListStreamingImages: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    owner: {
                        location: "querystring",
                        locationName: "owner"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {
                        locationName: "nextToken"
                    },
                    streamingImages: {
                        shape: "S3h",
                        locationName: "streamingImages"
                    }
                }
            }
        },
        ListStreamingSessions: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    createdBy: {
                        location: "querystring",
                        locationName: "createdBy"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    sessionIds: {
                        location: "querystring",
                        locationName: "sessionIds"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {
                        locationName: "nextToken"
                    },
                    sessions: {
                        locationName: "sessions",
                        type: "list",
                        member: {
                            shape: "S1c"
                        }
                    }
                }
            }
        },
        ListStudioComponents: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/studio-components",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    states: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "states"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    types: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "types"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {
                        locationName: "nextToken"
                    },
                    studioComponents: {
                        locationName: "studioComponents",
                        type: "list",
                        member: {
                            shape: "S2r"
                        }
                    }
                }
            }
        },
        ListStudioMembers: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/membership",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    members: {
                        locationName: "members",
                        type: "list",
                        member: {
                            shape: "S4b"
                        }
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListStudios: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {
                        locationName: "nextToken"
                    },
                    studios: {
                        locationName: "studios",
                        type: "list",
                        member: {
                            shape: "S1t"
                        }
                    }
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    }
                },
                required: [ "resourceArn" ]
            },
            output: {
                type: "structure",
                members: {
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                }
            }
        },
        PutLaunchProfileMembers: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    identityStoreId: {
                        locationName: "identityStoreId"
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    members: {
                        locationName: "members",
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                persona: {
                                    locationName: "persona"
                                },
                                principalId: {
                                    locationName: "principalId"
                                }
                            },
                            required: [ "persona", "principalId" ]
                        }
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "members", "launchProfileId", "identityStoreId" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        PutStudioMembers: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/membership",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    identityStoreId: {
                        locationName: "identityStoreId"
                    },
                    members: {
                        locationName: "members",
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                persona: {
                                    locationName: "persona"
                                },
                                principalId: {
                                    locationName: "principalId"
                                }
                            },
                            required: [ "persona", "principalId" ]
                        }
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "members", "identityStoreId" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        StartStudioSSOConfigurationRepair: {
            http: {
                method: "PUT",
                requestUri: "/2020-08-01/studios/{studioId}/sso-configuration",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/2020-08-01/tags/{resourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                },
                required: [ "resourceArn" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/tags/{resourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tagKeys: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "tagKeys"
                    }
                },
                required: [ "tagKeys", "resourceArn" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateLaunchProfile: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    description: {
                        locationName: "description"
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    launchProfileProtocolVersions: {
                        shape: "Sf",
                        locationName: "launchProfileProtocolVersions"
                    },
                    name: {
                        locationName: "name"
                    },
                    streamConfiguration: {
                        shape: "Si",
                        locationName: "streamConfiguration"
                    },
                    studioComponentIds: {
                        shape: "Sp",
                        locationName: "studioComponentIds"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    }
                }
            }
        },
        UpdateLaunchProfileMember: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    persona: {
                        locationName: "persona"
                    },
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "persona", "principalId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    member: {
                        shape: "S3x",
                        locationName: "member"
                    }
                }
            }
        },
        UpdateStreamingImage: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    description: {
                        locationName: "description"
                    },
                    name: {
                        locationName: "name"
                    },
                    streamingImageId: {
                        location: "uri",
                        locationName: "streamingImageId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "streamingImageId" ]
            },
            output: {
                type: "structure",
                members: {
                    streamingImage: {
                        shape: "S12",
                        locationName: "streamingImage"
                    }
                }
            }
        },
        UpdateStudio: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    adminRoleArn: {
                        locationName: "adminRoleArn"
                    },
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    displayName: {
                        locationName: "displayName"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    userRoleArn: {
                        locationName: "userRoleArn"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        UpdateStudioComponent: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    configuration: {
                        shape: "S1y",
                        locationName: "configuration"
                    },
                    description: {
                        locationName: "description"
                    },
                    ec2SecurityGroupIds: {
                        shape: "S2c",
                        locationName: "ec2SecurityGroupIds"
                    },
                    initializationScripts: {
                        shape: "S2e",
                        locationName: "initializationScripts"
                    },
                    name: {
                        locationName: "name"
                    },
                    scriptParameters: {
                        shape: "S2k",
                        locationName: "scriptParameters"
                    },
                    studioComponentId: {
                        location: "uri",
                        locationName: "studioComponentId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    subtype: {
                        locationName: "subtype"
                    },
                    type: {
                        locationName: "type"
                    }
                },
                required: [ "studioId", "studioComponentId" ]
            },
            output: {
                type: "structure",
                members: {
                    studioComponent: {
                        shape: "S2r",
                        locationName: "studioComponent"
                    }
                }
            }
        }
    },
    shapes: {
        S3: {
            type: "list",
            member: {}
        },
        S6: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    acceptedAt: {
                        shape: "S8",
                        locationName: "acceptedAt"
                    },
                    acceptedBy: {
                        locationName: "acceptedBy"
                    },
                    accepteeId: {
                        locationName: "accepteeId"
                    },
                    eulaAcceptanceId: {
                        locationName: "eulaAcceptanceId"
                    },
                    eulaId: {
                        locationName: "eulaId"
                    }
                }
            }
        },
        S8: {
            type: "timestamp",
            timestampFormat: "iso8601"
        },
        Sd: {
            type: "list",
            member: {}
        },
        Sf: {
            type: "list",
            member: {}
        },
        Si: {
            type: "structure",
            members: {
                clipboardMode: {
                    locationName: "clipboardMode"
                },
                ec2InstanceTypes: {
                    shape: "Sk",
                    locationName: "ec2InstanceTypes"
                },
                maxSessionLengthInMinutes: {
                    locationName: "maxSessionLengthInMinutes",
                    type: "integer"
                },
                streamingImageIds: {
                    shape: "Sn",
                    locationName: "streamingImageIds"
                }
            },
            required: [ "clipboardMode", "streamingImageIds", "ec2InstanceTypes" ]
        },
        Sk: {
            type: "list",
            member: {}
        },
        Sn: {
            type: "list",
            member: {}
        },
        Sp: {
            type: "list",
            member: {}
        },
        Sq: {
            type: "map",
            key: {},
            value: {}
        },
        Ss: {
            type: "structure",
            members: {
                arn: {
                    locationName: "arn"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                createdBy: {
                    locationName: "createdBy"
                },
                description: {
                    locationName: "description"
                },
                ec2SubnetIds: {
                    shape: "Sd",
                    locationName: "ec2SubnetIds"
                },
                launchProfileId: {
                    locationName: "launchProfileId"
                },
                launchProfileProtocolVersions: {
                    shape: "Sf",
                    locationName: "launchProfileProtocolVersions"
                },
                name: {
                    locationName: "name"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                streamConfiguration: {
                    locationName: "streamConfiguration",
                    type: "structure",
                    members: {
                        clipboardMode: {
                            locationName: "clipboardMode"
                        },
                        ec2InstanceTypes: {
                            shape: "Sk",
                            locationName: "ec2InstanceTypes"
                        },
                        maxSessionLengthInMinutes: {
                            locationName: "maxSessionLengthInMinutes",
                            type: "integer"
                        },
                        streamingImageIds: {
                            shape: "Sn",
                            locationName: "streamingImageIds"
                        }
                    }
                },
                studioComponentIds: {
                    shape: "Sp",
                    locationName: "studioComponentIds"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                },
                updatedBy: {
                    locationName: "updatedBy"
                }
            }
        },
        S12: {
            type: "structure",
            members: {
                arn: {
                    locationName: "arn"
                },
                description: {
                    locationName: "description"
                },
                ec2ImageId: {
                    locationName: "ec2ImageId"
                },
                encryptionConfiguration: {
                    locationName: "encryptionConfiguration",
                    type: "structure",
                    members: {
                        keyArn: {
                            locationName: "keyArn"
                        },
                        keyType: {
                            locationName: "keyType"
                        }
                    },
                    required: [ "keyType" ]
                },
                eulaIds: {
                    shape: "S3",
                    locationName: "eulaIds"
                },
                name: {
                    locationName: "name"
                },
                owner: {
                    locationName: "owner"
                },
                platform: {
                    locationName: "platform"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                streamingImageId: {
                    locationName: "streamingImageId"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                }
            }
        },
        S1c: {
            type: "structure",
            members: {
                arn: {
                    locationName: "arn"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                createdBy: {
                    locationName: "createdBy"
                },
                ec2InstanceType: {
                    locationName: "ec2InstanceType"
                },
                launchProfileId: {
                    locationName: "launchProfileId"
                },
                sessionId: {
                    locationName: "sessionId"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                streamingImageId: {
                    locationName: "streamingImageId"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                },
                terminateAt: {
                    shape: "S8",
                    locationName: "terminateAt"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                },
                updatedBy: {
                    locationName: "updatedBy"
                }
            }
        },
        S1j: {
            type: "structure",
            members: {
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                createdBy: {
                    locationName: "createdBy"
                },
                expiresAt: {
                    shape: "S8",
                    locationName: "expiresAt"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                streamId: {
                    locationName: "streamId"
                },
                url: {
                    locationName: "url"
                }
            }
        },
        S1o: {
            type: "structure",
            members: {
                keyArn: {
                    locationName: "keyArn"
                },
                keyType: {
                    locationName: "keyType"
                }
            },
            required: [ "keyType" ]
        },
        S1t: {
            type: "structure",
            members: {
                adminRoleArn: {
                    locationName: "adminRoleArn"
                },
                arn: {
                    locationName: "arn"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                displayName: {
                    locationName: "displayName"
                },
                homeRegion: {
                    locationName: "homeRegion"
                },
                ssoClientId: {
                    locationName: "ssoClientId"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                studioEncryptionConfiguration: {
                    shape: "S1o",
                    locationName: "studioEncryptionConfiguration"
                },
                studioId: {
                    locationName: "studioId"
                },
                studioName: {
                    locationName: "studioName"
                },
                studioUrl: {
                    locationName: "studioUrl"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                },
                userRoleArn: {
                    locationName: "userRoleArn"
                }
            }
        },
        S1y: {
            type: "structure",
            members: {
                activeDirectoryConfiguration: {
                    locationName: "activeDirectoryConfiguration",
                    type: "structure",
                    members: {
                        computerAttributes: {
                            shape: "S20",
                            locationName: "computerAttributes"
                        },
                        directoryId: {
                            locationName: "directoryId"
                        },
                        organizationalUnitDistinguishedName: {
                            locationName: "organizationalUnitDistinguishedName"
                        }
                    }
                },
                computeFarmConfiguration: {
                    locationName: "computeFarmConfiguration",
                    type: "structure",
                    members: {
                        activeDirectoryUser: {
                            locationName: "activeDirectoryUser"
                        },
                        endpoint: {
                            locationName: "endpoint"
                        }
                    }
                },
                licenseServiceConfiguration: {
                    locationName: "licenseServiceConfiguration",
                    type: "structure",
                    members: {
                        endpoint: {
                            locationName: "endpoint"
                        }
                    }
                },
                sharedFileSystemConfiguration: {
                    locationName: "sharedFileSystemConfiguration",
                    type: "structure",
                    members: {
                        endpoint: {
                            locationName: "endpoint"
                        },
                        fileSystemId: {
                            locationName: "fileSystemId"
                        },
                        linuxMountPoint: {
                            locationName: "linuxMountPoint"
                        },
                        shareName: {
                            locationName: "shareName"
                        },
                        windowsMountDrive: {
                            locationName: "windowsMountDrive"
                        }
                    }
                }
            },
            union: true
        },
        S20: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    name: {
                        locationName: "name"
                    },
                    value: {
                        locationName: "value"
                    }
                }
            }
        },
        S2c: {
            type: "list",
            member: {}
        },
        S2e: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    launchProfileProtocolVersion: {
                        locationName: "launchProfileProtocolVersion"
                    },
                    platform: {
                        locationName: "platform"
                    },
                    runContext: {
                        locationName: "runContext"
                    },
                    script: {
                        locationName: "script"
                    }
                }
            }
        },
        S2k: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    key: {
                        locationName: "key"
                    },
                    value: {
                        locationName: "value"
                    }
                }
            }
        },
        S2r: {
            type: "structure",
            members: {
                arn: {
                    locationName: "arn"
                },
                configuration: {
                    shape: "S1y",
                    locationName: "configuration"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                createdBy: {
                    locationName: "createdBy"
                },
                description: {
                    locationName: "description"
                },
                ec2SecurityGroupIds: {
                    shape: "S2c",
                    locationName: "ec2SecurityGroupIds"
                },
                initializationScripts: {
                    shape: "S2e",
                    locationName: "initializationScripts"
                },
                name: {
                    locationName: "name"
                },
                scriptParameters: {
                    shape: "S2k",
                    locationName: "scriptParameters"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                studioComponentId: {
                    locationName: "studioComponentId"
                },
                subtype: {
                    locationName: "subtype"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                },
                type: {
                    locationName: "type"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                },
                updatedBy: {
                    locationName: "updatedBy"
                }
            }
        },
        S3b: {
            type: "structure",
            members: {
                content: {
                    locationName: "content"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                eulaId: {
                    locationName: "eulaId"
                },
                name: {
                    locationName: "name"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                }
            }
        },
        S3h: {
            type: "list",
            member: {
                shape: "S12"
            }
        },
        S3l: {
            type: "list",
            member: {}
        },
        S3t: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    script: {
                        locationName: "script"
                    },
                    studioComponentId: {
                        locationName: "studioComponentId"
                    },
                    studioComponentName: {
                        locationName: "studioComponentName"
                    }
                }
            }
        },
        S3x: {
            type: "structure",
            members: {
                identityStoreId: {
                    locationName: "identityStoreId"
                },
                persona: {
                    locationName: "persona"
                },
                principalId: {
                    locationName: "principalId"
                }
            }
        },
        S4b: {
            type: "structure",
            members: {
                identityStoreId: {
                    locationName: "identityStoreId"
                },
                persona: {
                    locationName: "persona"
                },
                principalId: {
                    locationName: "principalId"
                }
            }
        }
    },
    paginators: {
        ListEulaAcceptances: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "eulaAcceptances"
        },
        ListEulas: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "eulas"
        },
        ListLaunchProfileMembers: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "members"
        },
        ListLaunchProfiles: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "launchProfiles"
        },
        ListStreamingImages: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "streamingImages"
        },
        ListStreamingSessions: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "sessions"
        },
        ListStudioComponents: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "studioComponents"
        },
        ListStudioMembers: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "members"
        },
        ListStudios: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "studios"
        }
    }
};
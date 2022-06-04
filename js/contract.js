var SmartContractABI =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_questionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "addNoBet",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_questionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "addYesBet",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_question",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_resolverUrl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_endTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_yesImageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_noImageUrl",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_CreatorSide",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_CreatorVoteValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_CreatorRecieveUserFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Catalog",
				"type": "uint256"
			}
		],
		"name": "createQuestion",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_questionId",
				"type": "uint256"
			}
		],
		"name": "CreatorModifyQuestion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_questionId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "eventOutcome",
				"type": "bool"
			}
		],
		"name": "distributeWinningAmount",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_qID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_question",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_resolverUrl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_endTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_eventCompleted",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "_yesImageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_noImageUrl",
				"type": "string"
			}
		],
		"name": "mQuestion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_questionId",
				"type": "uint256"
			}
		],
		"name": "RefundQuestion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_AllowUserCreateQuestion",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_AllowCreatorFee",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_contractFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_CreatorFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_CreatorMinTradeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_UserMinTradeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_CreateQuestionFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_CreatorMaxRecieveFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_QuestionMinEndtime",
				"type": "uint256"
			}
		],
		"name": "Setting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_polyToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "question",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "createdBy",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalYesAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalNoAmount",
				"type": "uint256"
			}
		],
		"name": "QuestionCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			}
		],
		"name": "TransferETH",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "AllowCreatorFee",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "AllowUserCreateQuestion",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_StringMaxLen",
				"type": "uint256"
			}
		],
		"name": "CheckContentString",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			}
		],
		"name": "CheckURLString",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CreateQuestionFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CreatorFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CreatorMaxRecieveFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CreatorMinRecieveFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CreatorMinTradeAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_questionId",
				"type": "uint256"
			}
		],
		"name": "getGraphData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct Polymarket.AmountAdded[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct Polymarket.AmountAdded[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_questionId",
				"type": "uint256"
			}
		],
		"name": "getTotalGraphData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "TotalYes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "TotalNo",
						"type": "uint256"
					}
				],
				"internalType": "struct Polymarket.TotalAdded[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LockHours",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "polyToken",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "QuestionDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "CreatorRecieveUserFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "QuestionStatus",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Catalog",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "QuestionMinEndtime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "questions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "question",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "createdBy",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalYesAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalNoAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "eventCompleted",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "resolverUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "yesImageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "noImageUrl",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ShowAllOrders",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTimestamp",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "createdBy",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "timestamp",
								"type": "uint256"
							}
						],
						"internalType": "struct Polymarket.AmountAdded[]",
						"name": "yesCount",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "timestamp",
								"type": "uint256"
							}
						],
						"internalType": "struct Polymarket.AmountAdded[]",
						"name": "noCount",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "timestamp",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "TotalYes",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "TotalNo",
								"type": "uint256"
							}
						],
						"internalType": "struct Polymarket.TotalAdded[]",
						"name": "TotalCount",
						"type": "tuple[]"
					},
					{
						"internalType": "uint256",
						"name": "totalAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalYesAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalNoAmount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "eventCompleted",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "resolverUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "yesImageUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "noImageUrl",
						"type": "string"
					}
				],
				"internalType": "struct Polymarket.Questions[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "LastOrders",
				"type": "uint256"
			}
		],
		"name": "ShowLastOrders",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTimestamp",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "createdBy",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "timestamp",
								"type": "uint256"
							}
						],
						"internalType": "struct Polymarket.AmountAdded[]",
						"name": "yesCount",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "timestamp",
								"type": "uint256"
							}
						],
						"internalType": "struct Polymarket.AmountAdded[]",
						"name": "noCount",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "timestamp",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "TotalYes",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "TotalNo",
								"type": "uint256"
							}
						],
						"internalType": "struct Polymarket.TotalAdded[]",
						"name": "TotalCount",
						"type": "tuple[]"
					},
					{
						"internalType": "uint256",
						"name": "totalAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalYesAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalNoAmount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "eventCompleted",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "resolverUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "yesImageUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "noImageUrl",
						"type": "string"
					}
				],
				"internalType": "struct Polymarket.Questions[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			}
		],
		"name": "stringLen",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalQuestions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UserMinTradeAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winningAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "winningAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var SmartContractAddress = "";

var CurrentTokenDecimals=18;
//////////////////
///Token Contract
//////////////////
var RopstenTokenAddress="0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7";
var KovanTokenAddress="0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7";

var binanceTokenAddress="0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7"; 
var polygonTokenAddress="0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7"; 
var fantomTokenAddress="0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7"; 


//////////////////
///Fuction Contract
//////////////////
var RopstenAddress="0xf35fb8b80a96A77ee32F22872B79894864d0fA76"; //v2
var KovanAddress="0xf35fb8b80a96A77ee32F22872B79894864d0fA76"; 

var BinanceTestContractAddress =  "0xf35fb8b80a96A77ee32F22872B79894864d0fA76"; 



var EthereumContractAddress = "0xf35fb8b80a96A77ee32F22872B79894864d0fA76";//v2

var HuobiContractAddress = "0xf35fb8b80a96A77ee32F22872B79894864d0fA76";//v2

var BinanceContractAddress = "0xf35fb8b80a96A77ee32F22872B79894864d0fA76"; //v2  
 
//
var PolygonContractAddress = "0xf35fb8b80a96A77ee32F22872B79894864d0fA76";//v2

var FantomContractAddress = "0xf35fb8b80a96A77ee32F22872B79894864d0fA76"; //v2

//var KucoinTestContractAddress = "0xd03BaD9FE91Ab8fc68B6A9ADC6c8E824702EE054";

var AvalancheContractAddress="0xf35fb8b80a96A77ee32F22872B79894864d0fA76";

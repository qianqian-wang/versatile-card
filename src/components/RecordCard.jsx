import React, { useEffect, useRef ,useState} from 'react';
import {FoldIcon} from "./Icons"
const processDataForCard = (visualData) => {
    const visual = visualData.visuals[0]
    let data = visual.data;
    // 获取属性名列表
    const propertyNames = Object.keys(data);

    // 转换成所需的数组对象形式
    const result = data[propertyNames[0]].map((_, index) => {
        const newObj = {};
        propertyNames.forEach(propertyName => {
            newObj[propertyName] = data[propertyName][index];
        });
        return newObj;
    });
  
    return {result}
};
const visualData={
    "visuals": [
        {
            "vid": "",
            "title": "",
            "databasequery": "",
            "interpretations": [],
            "spec": {
                "columns": [
                    {
                        "techtext": "location_id",
                        "column": "location_id",
                        "dtype": "int"
                    },
                    {
                        "techtext": "address_1",
                        "column": "address_1",
                        "dtype": "str"
                    },
                    {
                        "techtext": "address_2",
                        "column": "address_2",
                        "dtype": "str"
                    },
                    {
                        "techtext": "city",
                        "column": "city",
                        "dtype": "str"
                    },
                    {
                        "techtext": "state_province",
                        "column": "state_province",
                        "dtype": "str"
                    },
                    {
                        "techtext": "postal_code",
                        "column": "postal_code",
                        "dtype": "str"
                    },
                    {
                        "techtext": "country",
                        "column": "country",
                        "dtype": "str"
                    }
                ],
                "dimensions": [
                    {
                        "column": "address_1"
                    },
                    {
                        "column": "address_2"
                    },
                    {
                        "column": "city"
                    },
                    {
                        "column": "state_province"
                    },
                    {
                        "column": "postal_code"
                    },
                    {
                        "column": "country"
                    }
                ],
                "metrics": [
                    {
                        "column": "location_id"
                    }
                ],
                "category": [],
                "commands": [],
                "vtype": {
                    "vtype": "RECORDCARD",
                    "alternatives": [],
                    "resistence_to_transit": 0.875
                },
                "visualaction": "",
                "networkspec": {
                    "nodes": [],
                    "edges": [],
                    "config": {
                        "node_label": {},
                        "node_image": {}
                    }
                },
                "cardspec": [
                    {
                        "column": "location_id",
                        "is_front": true,
                        "is_primary": true,
                        "is_boolean": false,
                        "is_badge": false,
                        "is_image": false
                    },
                    {
                        "column": "address_1",
                        "is_front": true,
                        "is_primary": false,
                        "is_boolean": false,
                        "is_badge": false,
                        "is_image": false
                    },
                    {
                        "column": "address_2",
                        "is_front": true,
                        "is_primary": false,
                        "is_boolean": true,
                        "is_badge": false,
                        "is_image": false
                    },
                    {
                        "column": "city",
                        "is_front": true,
                        "is_primary": false,
                        "is_boolean": true,
                        "is_badge": false,
                        "is_image": false
                    },
                    {
                        "column": "state_province",
                        "is_front": true,
                        "is_primary": false,
                        "is_boolean": true,
                        "is_badge": false,
                        "is_image": false
                    },
                    {
                        "column": "postal_code",
                        "is_front": true,
                        "is_primary": false,
                        "is_boolean": false,
                        "is_badge": false,
                        "is_image": false
                    },
                    {
                        "column": "country",
                        "is_front": false,
                        "is_primary": false,
                        "is_boolean": true,
                        "is_badge": false,
                        "is_image": false
                    }
                ]
            },
            "data": {
                "location_id": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18
                ],
                "address_1": [
                    "2600 Middlefield Road",
                    "24 Second Avenue",
                    "24 Second Avenue",
                    "24 Second Avenue",
                    "24 Second Avenue",
                    "800 Middle Avenue",
                    "500 Arbor Road",
                    "800 Middle Avenue",
                    "2510 Middlefield Road",
                    "1044 Middlefield Road",
                    "2140 Euclid Avenue.",
                    "1044 Middlefield Road",
                    "399 Marine Parkway.",
                    "660 Veterans Blvd.",
                    "1500 Valencia Street",
                    "1161 South Bernardo",
                    "409 South Spruce Avenue",
                    "114 Fifth Avenue"
                ],
                "address_2": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "2nd Floor",
                    "2nd Floor",
                    "2nd Floor",
                    "2nd Floor",
                    "2nd Floor",
                    "2nd Floor",
                    ""
                ],
                "city": [
                    "Redwood City",
                    "San Mateo",
                    "San Mateo",
                    "San Mateo",
                    "San Mateo",
                    "Menlo Park",
                    "Menlo Park",
                    "Menlo Park",
                    "Redwood City",
                    "Redwood City",
                    "Redwood City",
                    "Redwood City",
                    "Redwood City",
                    "Redwood City",
                    "San Francisco",
                    "Sunnyvale",
                    "South San Francisco",
                    "Redwood City"
                ],
                "state_province": [
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA",
                    "CA"
                ],
                "postal_code": [
                    "94063",
                    "94401",
                    "94403",
                    "94401",
                    "94401",
                    "94025-9881",
                    "94025",
                    "94025-9881",
                    "94063",
                    "94063",
                    "94061",
                    "94063",
                    "94065",
                    "94063",
                    "94110",
                    "94087",
                    "94080",
                    "94063"
                ],
                "country": [
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US",
                    "US"
                ]
            },
            "suggestions": {},
            "computationsetting": []
        }
    ],
    "commands": [],
    "networks": [],
    "network_generation_plans": [],
    "profiles": [],
    "ambiguity": null,
    "error": {
        "code": 0,
        "message": "",
        "debugmsg": ""
    }
}
 
const RecordCard = () => {
  const { result } = processDataForCard(visualData)
  const cardspec= visualData.visuals[0].spec.cardspec
  let isImage= cardspec.filter((item)=>{return item.is_primary===true&&item.is_image===true})
  let isPrimary= cardspec.filter((item)=>{return item.is_primary===true&&item.is_image!==true})

  const [cardVisibility, setCardVisibility] = useState(result.map(() => true));

  let isText1= cardspec.filter((item)=>{return item.is_primary===false&&item.is_boolean===false&&item.is_badge===false})
  let isBoolean1= cardspec.filter((item)=>{return item.is_boolean===true})
  let isBadge1= cardspec.filter((item)=>{return item.is_badge===true})
  
  let isText= cardspec.filter((item)=>{return item.is_primary===false&&item.is_boolean===false&&item.is_badge===false&&item.is_front===true})
  let isBoolean= cardspec.filter((item)=>{return item.is_boolean===true&&item.is_front===true})
  let isBadge= cardspec.filter((item)=>{return item.is_badge===true&&item.is_front===true})

  let isFold= cardspec.filter((item)=>{return item.is_front===false})

  const handleButtonClick = (index) => {
    const updatedVisibility = [...cardVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setCardVisibility(updatedVisibility);
  };
  const [width, setWidth] = useState('w-[136px]');
  const [text, setText] = useState('text-[9px]');
//   useEffect(() => {
//     setWidth(currentType==='WebCard'?'w-[400px]':'w-[136px]')
//     setText(currentType==='WebCard'?'text-[18px]':'text-[9px]')
//   }, [currentType]);
    const color= [
        "#0e9ab0",
        "#26b2e4",
        "#4acbff",
        "#86e9ff",
        "#b6ffec",
        "#e6ffd4",
        "#ffffb8",
        "#14a0bd",
        "#2cb8f1",
        "#56d1FF",
        "#92EFFE",
        "#C2FFE6",
        "#E5FBC7",
        "#FFF5A8",
        "#1AA6CA",
        "#32BEFE",
        "#6EDDFF",
        "#9EF5F8",
        "#CEFFE0",
        "#E6F7B9",
        "#FFF28E",
        "#20ACD7",
        "#3EC5FF",
        "#7AE3FF",
        "#AAFBF2",
        "#DAFFDA",
        "#E9F2AB",
        "#FFEE69",
        "#FFEB51"
    ]
  return (
    <div className='flex flex-wrap gap-2 items-start' >
          {
          result.map((item, no) => (
            <div key={no}  className={`${width} bg-white rounded-[10px] border flex-col justify-start items-center inline-flex relative pb-1`}>
                <div className="flex-col justify-start items-start gap-1 inline-flex ">
                    {/* 最顶部图片逻辑：'is_primary=True' means that this cell is shown in the main display area (the top) in the card, see figma. */}
                    <div className={`w-full h-20 rounded-t-[10px] flex bg-indigo-50  font-bold  justify-center items-center ${text}`}  
                    style={{
                        backgroundImage: isImage[0] ? `url(${item[isImage[0].column]})` : 'none', 
                        backgroundColor: isImage[0] ? 'transparent' : color[no], 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        color: 'white'
                    }}>
                     {isPrimary.map((items,nos)=>{
                        return <div key={nos}>{item[items.column]}</div>
                     })}
                    </div>
                    {/* is_front=True' means that this cell is visible by default and shown below the main display area. If it's False, then FE do not need to display the content of this column. */}
                    {(cardVisibility[no]?isText:isText1)?.map((front,frno)=>(
                        <div key={frno} className={`${width} px-1 flex flex-row items-center justify-between`}>
                            <div className={`text-zinc-600  font-normal font-['Inter'] leading-normal ${text}`}>{front.column}</div>
                            <div className={`text-right text-slate-800 font-normal font-['Inter'] leading-normal ${text}`}>{item[front.column]}</div>
                        </div>
                    ))}
                  
                    {/* 'is_badge=True' means that FE should display this cell as a pill-button (like a label).  */}
                    <div className="pl-1 pr-8 py-px rounded-[20px] justify-start items-center inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 inline-flex">
                            {(cardVisibility[no]?isBadge:isBadge1)?.map((badge,bno)=>(
                                <div key={bno} className="px-1.5 py-1  bg-indigo-50 rounded-md justify-center items-center flex">
                                    <div className="text-slate-800 text-[8px] font-normal font-['Inter'] leading-tight">{item[badge.column]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 'is_boolean=True' means that FE should apply a checkbox method to display this cell */}
                    <div>
                        {(cardVisibility[no]?isBoolean:isBoolean1)?.map((bool,blno)=>(
                            <div  key={blno} className={`${width} px-1  flex flex-row items-center justify-between`}>
                                <div className={`${text} font-normal`}>{bool.column}</div>
                                {item[bool.column]?<div className="w-4 h-4 bg-emerald-500 rounded-full shadow-inner" />:<div className="w-4 h-4 bg-slate-200 rounded-full shadow-inner" />} 
                             </div>
                        ))}
                    </div>
                </div>
                {isFold.length>0 && <div className={cardVisibility[no]?'absolute bottom-[-12px]  cursor-pointer':'absolute bottom-[-12px]  cursor-pointer transform rotate-180'}  onClick={() => handleButtonClick(no)}>
                     <FoldIcon></FoldIcon>
                </div>}
            </div>
          ))}
       </div>
  )

};

export default RecordCard;

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, TreePine, Snowflake, Stars } from 'lucide-react';

const ChristmasGiftWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const meanings = {
    '合作': '象徵團隊精神與共同努力',
    '合用': '強調實用性與日常便利',
    '合拍': '代表和諧與默契',
    '結合': '表達多功能與靈活性',
    '合適': '意味著恰到好處的選擇',
    '契合': '象徵完美配合',
    '合宜': '代表得體與適當',
    '調和': '表現平衡與融合',
    '融合': '象徵多元包容',
    '整合': '代表全面性與完整性',
    '統合': '表達系統性與組織性',
    '綜合': '意味著多樣化選擇',
    '合家': '象徵家庭共享',
    '合歡': '代表歡樂氣氛',
    '協合': '表達互助與便利'
  };

  const categories = {
    '保溫用品': ['隨身保溫杯', '保溫便當袋', '真空保溫瓶', '保溫食物罐', '車用保溫杯'],
    '文具用品': ['中性筆套組', '精美筆記本', '便利貼組合', '摺疊剪刀', '文件收納夾'],
    '家用小物': ['香氛蠟燭', '小型擴香器', '居家香氛', '香氛掛飾', '香氛禮盒'],
    '收納用品': ['桌面收納盒', '多功能收納包', '摺疊收納箱', '衣物收納袋', '化妝品收納盒'],
    '零食飲品': ['綜合堅果組', '手工餅乾', '花茶禮盒', '精選咖啡包', '果乾禮盒'],
    '健康小物': ['按摩滾輪', '舒壓眼罩', '運動毛巾', '瑜珈球', '計步手環'],
    '旅行配件': ['頸枕', '行李吊牌', '盥洗包', '行李秤', '旅行分裝瓶'],
    '日常配件': ['質感皮夾', '帆布包', '防曬帽', '時尚襪子', '造型手帕'],
    '家居布置': ['小型盆栽', '壁掛式時鐘', '相框', '裝飾燈串', '香氛擺飾'],
    '休閒用品': ['益智拼圖', '撲克牌', '運動水壺', '迷你風扇', '野餐墊'],
    '廚房小物': ['計時器', '料理工具組', '環保餐具', '調味罐', '隔熱手套'],
    '生活工具': ['迷你工具組', '隨身手電筒', '多功能開瓶器', '便攜剪刀', '指甲剪組'],
    '隨身小物': ['行動電源', '耳機收納包', '鑰匙圈', '零錢包', '卡片夾'],
    '衛浴用品': ['紓壓沐浴組', '香氛皂禮盒', '牙刷組合', '毛巾禮盒', '乾髮帽'],
    '飲具組': ['玻璃隨手瓶', '環保吸管組', '茶具組', '咖啡濾杯', '手搖杯']
  };

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const getRandomKey = (obj) => Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];

  const spinWheel = () => {
    setIsSpinning(true);
    
    setTimeout(() => {
      const meaningKey = getRandomKey(meanings);
      const categoryKey = getRandomKey(categories);
      
      setResult({
        meaning: meaningKey,
        category: categoryKey,
        explanation: meanings[meaningKey],
        examples: categories[categoryKey]
      });
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-green-100 p-4">
      <Card className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur">
        <CardHeader className="bg-red-700 text-white rounded-t-lg">
          <CardTitle className="text-center flex items-center justify-center gap-2 py-2">
            <TreePine className="w-6 h-6" />
            聖誕禮物輪盤選擇器
            <Gift className="w-6 h-6" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 relative">
          {/* Snowflakes Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <Snowflake
                key={i}
                className="absolute text-blue-100 animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          <div className="relative mb-8">
            {/* Wheel Animation */}
            <div className={`w-48 h-48 mx-auto border-8 border-red-600 rounded-full 
              bg-gradient-to-br from-green-500 to-red-500
              ${isSpinning ? 'animate-spin' : ''}`}>
              <div className="w-full h-full flex items-center justify-center text-white font-bold">
                {!result && !isSpinning && "點擊下方按鈕開始"}
                {isSpinning && "選擇中..."}
              </div>
            </div>
          </div>

          {result && (
            <div className="space-y-6">
              <div className="text-center text-xl font-bold border-b border-red-200 pb-4 text-red-700">
                {result.meaning} × {result.category}
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold mb-2 text-red-700 flex items-center gap-2">
                  <Stars className="w-5 h-5" />
                  「合」主題寓意
                </h3>
                <p className="text-red-600">{result.explanation}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold mb-2 text-green-700 flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  推薦禮物範例
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {result.examples.map((example, index) => (
                    <li key={index} className="text-green-600">{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <Button 
            onClick={spinWheel}
            disabled={isSpinning}
            className="w-full mt-6 bg-red-700 hover:bg-red-800 text-white font-bold"
          >
            {isSpinning ? '輪盤旋轉中...' : '開始選擇禮物'}
          </Button>
        </CardContent>
      </Card>

      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ChristmasGiftWheel;

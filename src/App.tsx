/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, RefreshCcw, Sparkles, Quote, Info, Heart, Settings2, BarChart3 } from "lucide-react";
import { questions as allQuestions, results_info, AnimalType, Dimension } from "./data";

// Helper to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper for Radar Chart lines and polygons
const RadarChart = ({ data, color }: { data: Record<Dimension, number>; color: string }) => {
  const size = 160;
  const center = size / 2;
  const radius = center - 20;
  
  const dimensions = [
    { key: Dimension.ENERGY, label: "能量" },
    { key: Dimension.LOGIC, label: "智性" },
    { key: Dimension.SOCIAL, label: "共振" },
    { key: Dimension.ADAPT, label: "多变" }
  ];

  const points = dimensions.map((d, i) => {
    const angle = (i * 2 * Math.PI) / dimensions.length - Math.PI / 2;
    // Scale max value based on total possible (approx 15-20 here)
    const value = Math.max(0.1, Math.min(1, data[d.key as Dimension] / 15)); 
    const x = center + radius * value * Math.cos(angle);
    const y = center + radius * value * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="relative flex flex-col items-center">
      <svg width={size} height={size} className="overflow-visible">
        {/* Background Grids */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((step, i) => (
          <polygon
            key={i}
            points={dimensions.map((_, j) => {
              const angle = (j * 2 * Math.PI) / dimensions.length - Math.PI / 2;
              const x = center + radius * step * Math.cos(angle);
              const y = center + radius * step * Math.sin(angle);
              return `${x},${y}`;
            }).join(" ")}
            className="fill-none stroke-secondary/5"
            strokeWidth="1"
          />
        ))}
        {/* Axes */}
        {dimensions.map((_, i) => {
          const angle = (i * 2 * Math.PI) / dimensions.length - Math.PI / 2;
          return (
            <line
              key={i}
              x1={center} y1={center}
              x2={center + radius * Math.cos(angle)}
              y2={center + radius * Math.sin(angle)}
              className="stroke-secondary/10"
              strokeDasharray="2 2"
            />
          );
        })}
        {/* Data Shape */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          points={points}
          fill={color}
          fillOpacity={0.2}
          stroke={color}
          strokeWidth={3}
          strokeLinejoin="round"
        />
        {/* Labels */}
        {dimensions.map((d, i) => {
          const angle = (i * 2 * Math.PI) / dimensions.length - Math.PI / 2;
          const x = center + (radius + 22) * Math.cos(angle);
          const y = center + (radius + 22) * Math.sin(angle);
          return (
            <text
              key={i}
              x={x} y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[10px] font-bold fill-secondary/40 uppercase tracking-tighter"
            >
              {d.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default function App() {
  const [step, setStep] = useState<"welcome" | "quiz" | "result">("welcome");
  const [quizQuestions, setQuizQuestions] = useState(allQuestions.slice(0, 10));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState<Record<Dimension, number>>({
    [Dimension.ENERGY]: 0,
    [Dimension.LOGIC]: 0,
    [Dimension.SOCIAL]: 0,
    [Dimension.ADAPT]: 0
  });

  const currentDominant = useMemo(() => {
    const entries = Object.entries(scores) as [Dimension, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    if (sorted[0][1] === 0) return null;
    return sorted[0][0] as Dimension;
  }, [scores]);

  const moodColor = useMemo(() => {
    if (!currentDominant) return { 
      bg: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)", 
      accent: "#1a1a1a",
      border: "rgba(255,255,255,1)",
      blobs: ["#f0f0f0", "#e0e0e0", "#ffffff"]
    };
    
    switch (currentDominant) {
      case Dimension.ENERGY: return { 
        bg: "linear-gradient(135deg, #fff5f5 0%, #fed7d7 50%, #feb2b2 100%)", 
        accent: "#C53030", 
        border: "#FEB2B2",
        blobs: ["#fc8181", "#f56565", "#e53e3e"]
      };
      case Dimension.LOGIC: return { 
        bg: "linear-gradient(135deg, #ebf8ff 0%, #bee3f8 50%, #90cdf4 100%)", 
        accent: "#2B6CB0", 
        border: "#90CDF4",
        blobs: ["#63b3ed", "#4299e1", "#3182ce"]
      };
      case Dimension.SOCIAL: return { 
        bg: "linear-gradient(135deg, #f0fff4 0%, #c6f6d5 50%, #9ae6b4 100%)", 
        accent: "#2F855A", 
        border: "#9AE6B4",
        blobs: ["#68d391", "#48bb78", "#38a169"]
      };
      case Dimension.ADAPT: return { 
        bg: "linear-gradient(135deg, #fffaf0 0%, #feebc8 50%, #fbd38d 100%)", 
        accent: "#C05621", 
        border: "#FBD38D",
        blobs: ["#f6ad55", "#ed8936", "#dd6b20"]
      };
      default: return { 
        bg: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)", 
        accent: "#1a1a1a",
        border: "#ffffff",
        blobs: ["#f0f0f0", "#e0e0e0", "#ffffff"]
      };
    }
  }, [currentDominant]);

  const startQuiz = () => {
    const randomized = shuffleArray(allQuestions).slice(0, 10);
    setQuizQuestions(randomized);
    setStep("quiz");
    setCurrentIdx(0);
    setScores({
      [Dimension.ENERGY]: 0,
      [Dimension.LOGIC]: 0,
      [Dimension.SOCIAL]: 0,
      [Dimension.ADAPT]: 0
    });
  };

  // Sound feedback utility
  const playDing = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContext();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
      oscillator.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      console.warn("Audio Context not supported or blocked", e);
    }
  };

  const dimColors: Record<Dimension, { accent: string; muted: string }> = {
    [Dimension.ENERGY]: { accent: "#E53E3E", muted: "#FFF5F5" },
    [Dimension.LOGIC]: { accent: "#3182CE", muted: "#EBF8FF" },
    [Dimension.SOCIAL]: { accent: "#38A169", muted: "#F0FFF4" },
    [Dimension.ADAPT]: { accent: "#DD6B20", muted: "#FFFAF0" },
  };

  const handleAnswer = (dimension: Dimension, value: number) => {
    playDing();
    const newScores = { ...scores, [dimension]: scores[dimension] + value };
    setScores(newScores);
    
    // Tiny delay to let the 'jump' animation and sound be felt
    setTimeout(() => {
      if (currentIdx < quizQuestions.length - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        setStep("result");
      }
    }, 250);
  };

  const restart = () => {
    setStep("welcome");
    setCurrentIdx(0);
    setScores({
      [Dimension.ENERGY]: 0,
      [Dimension.LOGIC]: 0,
      [Dimension.SOCIAL]: 0,
      [Dimension.ADAPT]: 0
    });
  };

  const getResult = () => {
    const { ENERGY, LOGIC, SOCIAL, ADAPT } = scores;
    
    // Core Logic
    if (ENERGY >= 12) return AnimalType.LION;
    if (LOGIC >= 12) return AnimalType.OWL;
    if (SOCIAL >= 12) return AnimalType.DOLPHIN;
    if (ADAPT >= 12) return AnimalType.FOX;
    
    // Combination Animals (Higher threshold)
    if (ENERGY >= 8 && LOGIC >= 8) return AnimalType.HAWK;
    if (ENERGY >= 7 && LOGIC >= 7) return AnimalType.DRAGON;
    if (SOCIAL >= 7 && ADAPT >= 7) return AnimalType.PEACOCK;
    if (LOGIC >= 7 && ADAPT >= 7) return AnimalType.TIGER;
    if (ENERGY >= 7 && ADAPT >= 7) return AnimalType.WOLF;
    if (LOGIC >= 7 && SOCIAL >= 7) return AnimalType.ELEPHANT;
    
    // New Tier 2 Combinations
    if (ENERGY >= 8 && ADAPT <= 3) return AnimalType.POLAR_BEAR;
    if (SOCIAL >= 6 && ADAPT >= 6) return AnimalType.DEER;
    if (LOGIC >= 5 && SOCIAL >= 8) return AnimalType.BEE;
    if (ADAPT >= 8 && ENERGY >= 4) return AnimalType.CAT;
    
    if (ENERGY >= 4 && LOGIC >= 4 && SOCIAL >= 4 && ADAPT >= 4) return AnimalType.PANDA;

    const sorted = (Object.entries(scores) as [Dimension, number][]).sort((a, b) => b[1] - a[1]);
    const topDim = sorted[0][0] as Dimension;
    
    switch(topDim) {
      case Dimension.ENERGY: return AnimalType.LION;
      case Dimension.LOGIC: return AnimalType.OWL;
      case Dimension.SOCIAL: return AnimalType.BADGER;
      case Dimension.ADAPT: return AnimalType.FOX;
      default: return AnimalType.LION;
    }
  };

  const resultType = step === "result" ? getResult() : AnimalType.LION;
  const currentResult = results_info[resultType];

  return (
    <div className="min-h-screen p-0 sm:p-4 lg:p-8 flex items-center justify-center transition-all duration-1000 relative overflow-hidden"
         style={{ background: step === "result" ? `linear-gradient(135deg, white 0%, ${currentResult.theme}20 100%)` : moodColor.bg }}>
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: moodColor.blobs[0] }}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: moodColor.blobs[1] }}
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-1/3 h-1/3 rounded-full blur-[100px]"
          style={{ backgroundColor: moodColor.blobs[2] }}
        />
      </div>

      <div className="w-full max-w-7xl min-h-screen sm:min-h-[90vh] bg-white/70 backdrop-blur-md border-0 sm:border-[12px] shadow-2xl flex flex-col p-6 md:p-12 relative overflow-x-hidden transition-all duration-700 z-10"
            style={{ borderColor: step === "result" ? currentResult.theme : moodColor.border }}>
        
        {/* Header decoration */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a]">
              灵魂原型动物测试
            </h1>
            <p className="text-secondary mt-2 text-sm font-medium opacity-70">
              {step === "result" ? "基于隐喻心理学模型的深度人格解析" : "探索你潜意识中的原始动物力量"}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 font-mono">
            {step === "quiz" && (
                <div 
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold transition-colors"
                  style={{ backgroundColor: `${moodColor.accent}15`, color: moodColor.accent }}
                >
                    <Settings2 size={12} className="animate-spin-slow" />
                    人格偏移: {currentDominant ? (currentDominant === Dimension.ENERGY ? "能量" : currentDominant === Dimension.LOGIC ? "逻辑" : currentDominant === Dimension.SOCIAL ? "社交" : "适应") : "稳定中..."}
                </div>
            )}
            <div className="btn-outline cursor-default whitespace-nowrap">
              {step === "welcome" ? "唤醒中" : step === "quiz" ? `旅程: ${currentIdx + 1}/${quizQuestions.length}` : "觉醒完成"}
            </div>
          </div>
        </header>

        <main className="flex-grow flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            {step === "welcome" && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-2xl mx-auto text-center space-y-10 py-12"
              >
                <div className="space-y-6">
                  <div className="flex justify-center mb-6">
                     <span className="text-7xl animate-pulse">✨</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-serif font-light leading-tight tracking-tight text-[#1a1a1a]">
                    荒野足迹 <br />
                    <span className="italic" style={{ color: "#740001" }}>灵魂唤醒</span>
                  </h2>
                  <p className="text-base md:text-lg text-secondary font-light max-w-md mx-auto leading-relaxed">
                    在潜意识的森林深处，你的每一次抉择都将唤醒一个沉睡的原型。探索这10个关键时刻。
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startQuiz}
                  className="px-12 py-5 bg-[#1a1a1a] text-white text-sm font-bold uppercase tracking-[0.4em] rounded-full hover:bg-accent transition-colors flex items-center gap-2 mx-auto"
                >
                  开始魂启之旅 <ChevronRight size={14} />
                </motion.button>
              </motion.div>
            )}

            {step === "quiz" && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-4xl mx-auto space-y-12"
              >
                <div className="space-y-10">
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                      style={{ backgroundColor: moodColor.accent }}
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight text-[#1a1a1a]">
                    <span className="italic mr-4" style={{ color: moodColor.accent }}>Q{quizQuestions[currentIdx].id}</span>
                    {quizQuestions[currentIdx].question}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {quizQuestions[currentIdx].options.map((opt, i) => {
                      const colors = dimColors[opt.dimension];
                      return (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: i * 0.08 
                          }}
                          whileHover={{ 
                            y: -5, 
                            scale: 1.02,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
                            borderColor: colors.accent,
                            backgroundColor: colors.muted
                          }}
                          whileTap={{ 
                            scale: 0.96, 
                            y: -15,
                            backgroundColor: `${colors.accent}20`,
                            transition: { type: "spring", stiffness: 600, damping: 10 }
                          }}
                          onClick={() => handleAnswer(opt.dimension, opt.value)}
                          className="group relative flex items-center justify-between p-5 rounded-[20px] border border-secondary/10 bg-white shadow-sm text-left transition-all overflow-hidden"
                        >
                          <motion.div 
                            className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity"
                            style={{ backgroundColor: `${colors.accent}10` }}
                          />
                          <span className="text-sm md:text-base font-light text-secondary group-hover:text-black transition-colors leading-tight pr-4 z-10">
                            {opt.text}
                          </span>
                          <span 
                            className="hidden xs:block text-[8px] font-bold transition-colors shrink-0 flex items-center gap-1 uppercase tracking-tighter"
                            style={{ color: `${colors.accent}60` }}
                          >
                            <Sparkles size={10} className="animate-pulse" />
                            解析中...
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {step === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6"
              >
                {/* Result Reveal Section */}
                <div className="md:col-span-1 lg:col-span-4 lg:row-span-3 bento-card flex flex-col justify-between relative overflow-hidden min-h-[350px] md:min-h-[400px] border-2 transition-all duration-1000"
                     style={{ borderColor: currentResult.theme, backgroundColor: `${currentResult.theme}10` }}>
                  <div className="z-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3"
                       style={{ color: currentResult.theme }}>灵魂图谱映射</p>
                    <div className="flex items-center gap-4 flex-wrap">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#1a1a1a]">{currentResult.name}</h2>
                      <span className="text-4xl md:text-5xl">{currentResult.emoji}</span>
                    </div>
                    <p className="text-secondary mt-4 opacity-70 font-medium text-sm">
                       原型动物 / 系统检测到极强的 {currentResult.keywords[0]} 倾向
                    </p>
                  </div>
                  
                  <div className="absolute -right-16 -bottom-16 opacity-[0.05] rotate-12 pointer-events-none" style={{ color: currentResult.theme }}>
                     <span className="text-[180px] md:text-[240px]">{currentResult.emoji}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 z-10 pt-8">
                    {currentResult.keywords.map((tag, i) => (
                      <span key={i} className="px-3 md:px-5 py-1.5 md:py-2 bg-white text-secondary text-[10px] rounded-full border border-secondary/10 italic font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Radar Chart Section */}
                <div className="md:col-span-1 lg:col-span-4 lg:row-span-3 bento-card flex flex-col items-center justify-center bg-white/40 border-dashed border min-h-[300px]">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-6"
                     style={{ color: currentResult.theme }}>心理向量侧写</p>
                  <div className="scale-90 md:scale-100">
                    <RadarChart data={scores} color={currentResult.theme} />
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-2">
                    {(Object.entries(scores) as [Dimension, number][]).map(([dim, val]) => (
                        <div key={dim} className="flex items-center justify-between gap-4">
                            <span className="text-[9px] md:text-[10px] text-secondary font-bold uppercase">{dim}</span>
                            <span className="text-xs font-mono" style={{ color: currentResult.theme }}>{val.toFixed(1)}</span>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Core Insight */}
                <div className="md:col-span-1 lg:col-span-4 lg:row-span-1 bento-card flex flex-col border-l-4"
                     style={{ borderColor: currentResult.theme }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2"
                     style={{ color: currentResult.theme }}>
                    <Quote size={12} /> 原始箴言 / 魂之咒语
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#1a1a1a] font-serif italic">
                    {currentResult.insight}
                  </p>
                </div>

                {/* Soulmate Block */}
                <div className="md:col-span-1 lg:col-span-4 lg:row-span-1 bento-card flex flex-col justify-between bg-bg-base border-2 group hover:shadow-xl transition-all"
                     style={{ borderColor: `${currentResult.theme}40` }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-1"
                         style={{ color: currentResult.theme }}>灵魂契合</p>
                      <h3 className="text-xl font-serif">灵魂伴侣</h3>
                    </div>
                    <Heart size={24} className="text-accent animate-pulse fill-accent/10" />
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-secondary/10 text-2xl">
                      {currentResult.soulmate.includes('狮') ? '🦁' : 
                       currentResult.soulmate.includes('鹰') ? '🦅' :
                       currentResult.soulmate.includes('枭') || currentResult.soulmate.includes('头') ? '🦉' :
                       currentResult.soulmate.includes('獾') ? '🦡' :
                       currentResult.soulmate.includes('狐') ? '🦊' :
                       currentResult.soulmate.includes('狼') ? '🐺' :
                       currentResult.soulmate.includes('豚') ? '🐬' :
                       currentResult.soulmate.includes('象') ? '🐘' :
                       currentResult.soulmate.includes('蛇') ? '🐍' :
                       currentResult.soulmate.includes('猫') ? '🐈' :
                       currentResult.soulmate.includes('熊') ? '🐻‍❄️' :
                       currentResult.soulmate.includes('鹿') ? '🦌' :
                       currentResult.soulmate.includes('蜂') ? '🐝' : '✨'}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1a1a1a]">{currentResult.soulmate.split(' (')[0]}</p>
                      <p className="text-[10px] text-secondary opacity-60 uppercase tracking-widest">Recommended Alignment</p>
                    </div>
                  </div>
                  <p className="text-[11px] leading-relaxed text-secondary mt-4 line-clamp-2 md:line-clamp-none">
                    {currentResult.soulmate.split(' (')[1]?.replace(')', '') || "天生契合的选择"}
                  </p>
                </div>

                {/* Detail Blocks */}
                <div className="md:col-span-1 lg:col-span-4 lg:row-span-1 bento-card flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1"
                       style={{ color: currentResult.theme }}>Strengths & Gifts</p>
                    <h3 className="text-xl font-serif">天赋能力</h3>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 gap-2">
                    {currentResult.pros?.map((pro, i) => (
                      <li key={i} className="text-sm text-secondary flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: currentResult.theme }} /> {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-1 lg:col-span-4 lg:row-span-1 bento-card flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1"
                        style={{ color: currentResult.theme }}>Shadow Side</p>
                        <h3 className="text-xl font-serif">阴影人格</h3>
                    </div>
                    <Info size={20} className="opacity-20" />
                   </div>
                  <p className="text-sm leading-relaxed text-secondary italic mt-3">
                    “{currentResult.minefield}”
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="sm:col-span-2 lg:col-span-12 bento-card bg-[#1a1a1a] text-secondary p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 shadow-2xl">
                  <div className="space-y-4 max-w-xl text-center md:text-left">
                    <h4 className="text-bg-base font-serif text-xl md:text-2xl italic">觉醒已完成。</h4>
                    <p className="text-[10px] text-secondary/60 uppercase tracking-widest leading-relaxed">
                      基于本轮 {quizQuestions.length} 项维度交叉验证。Archetype 已为您更新了最新的心理向量图谱。每一次测试都是对灵魂边界的再次确认。
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-4 w-full md:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={restart}
                      className="w-full md:w-auto px-10 py-4 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transition-all"
                      style={{ backgroundColor: currentResult.theme }}
                    >
                      重新魂启
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="text-[10px] text-secondary opacity-50 uppercase tracking-[0.3em]">
            原型测试 / 多维度心理图谱
          </div>
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
             <span className="text-[10px] text-[#1a1a1a] font-bold uppercase tracking-widest">
               心理理论架构已备案
             </span>
          </div>
        </footer>

        {step === "welcome" && (
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full -z-10 pointer-events-none" />
        )}
      </div>
    </div>
  );
}

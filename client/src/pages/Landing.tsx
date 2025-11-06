import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Mic, Zap, Star } from "lucide-react";
import { SEO, generateWebPageStructuredData } from "@/components/SEO";
const heroImage = "/images/AI_rap_battle_landing_872131b2.png";

export default function Landing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Battle Rap AI",
    "description": "Epic voice-powered rap battles against advanced AI opponents with real-time transcription and professional scoring",
    "url": "https://rapbots.online/",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Real-time voice recognition",
      "AI opponents with distinct personalities",
      "Professional battle scoring",
      "Text-to-speech synthesis",
      "Tournament system",
      "Battle history tracking",
      "Clone yourself system",
      "Fine-tuning AI models"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247",
      "bestRating": "5"
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Battle Rap AI - Epic Voice-Powered Rap Battles Against AI"
        description="Experience the ultimate voice-powered freestyle battles against advanced AI opponents with real-time rap scoring. Master your flow, perfect your rhymes, and climb the leaderboard in this revolutionary battle rap game online."
        keywords={['rap battle AI', 'voice battle game', 'freestyle rap game', 'AI rap opponent', 'battle rap online', 'voice recognition rap', 'hip hop battle game', 'rap scoring AI', 'freestyle battle simulator']}
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center" aria-labelledby="hero-title">
        <div className="mb-8 relative">
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="relative z-10">
            <h1 id="hero-title" className="text-6xl font-bold text-white mb-4">
              Battle Rap AI: Face Off Against the Future of <span className="text-purple-400">Flow</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the ultimate voice-powered freestyle battles against advanced AI opponents with real-time rap scoring. 
            Master your flow, perfect your rhymes, and climb the leaderboard in this revolutionary battle rap game online.
          </p>
          
          {/* YouTube Video Embed */}
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-purple-600">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0RspT9qVNpY?autoplay=1&mute=0&controls=1"
                title="Battle Rap AI Demo - Watch epic AI rap battles in action"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="max-w-full"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
              onClick={() => window.location.href = '/api/login'}
            >
              <Mic className="mr-2 h-5 w-5" />
              Start Battling
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg"
              onClick={() => window.location.href = '/tournaments'}
            >
              View Leaderboard
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400 max-w-3xl mx-auto">
            <Badge variant="secondary" className="bg-green-900 text-green-300">
              ✓ Earn Real USDC
            </Badge>
            <Badge variant="secondary" className="bg-blue-900 text-blue-300">
              ✓ 24 Training Lessons
            </Badge>
            <Badge variant="secondary" className="bg-purple-900 text-purple-300">
              ✓ Skill-Based Tournaments
            </Badge>
            <Badge variant="secondary" className="bg-amber-900 text-amber-300">
              ✓ Arc Blockchain
            </Badge>
          </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 bg-slate-800/50 rounded-2xl mx-4 mb-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          How AI Rap Battles Work
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">1. Voice-Powered Input</h3>
            <p className="text-gray-300">
              Speak your bars directly into the mic with real-time voice recognition. 
              Our advanced AI transcription captures every word, flow, and rhythm instantly.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">2. AI Battle Response</h3>
            <p className="text-gray-300">
              Watch as our AI opponent analyzes your verse and fires back with devastating counter-attacks. 
              Each AI has unique personalities and battle styles to keep you on your toes.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">3. Professional Scoring</h3>
            <p className="text-gray-300">
              Get instant feedback with our professional battle rap scoring system. 
              Track rhyme density, flow quality, wordplay complexity, and crowd-pleasing punchlines.
            </p>
          </div>
        </div>
      </section>

      {/* Why RapBots Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Play to Earn Real Money Through Skill
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-400">💰 Earn USDC Cryptocurrency</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              RapBots is the first skill-based rap battle game where you earn <strong className="text-green-400">real USDC cryptocurrency</strong> on Circle's Arc L1 blockchain. Win battles, place in tournaments, and withdraw your earnings anytime - no middleman, no restrictions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-yellow-400">Free Rewards:</strong> Earn $0.10 USDC per win. <br/>
              <strong className="text-yellow-400">Tournaments:</strong> $5-$250 USDC prize pools. <br/>
              <strong className="text-yellow-400">Competitive Stakes:</strong> Challenge opponents with real USDC on the line - winner takes all (skill-based, not gambling).
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-400">🎓 Master Your Craft</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Level up with our <strong className="text-blue-400">24-lesson training program</strong> covering everything from basic flow to advanced wordplay. Each lesson includes practice battles and rewards XP + currency.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-blue-400">6 Categories:</strong> Basics • Rhyme Schemes • Flow • Wordplay • Battle Tactics • Advanced<br/>
              Track your progress, unlock new lessons, and compete with an <strong className="text-purple-400">ELO-based matchmaking system</strong> that pairs you with equal-skill opponents for fair competition.
            </p>
          </div>
        </div>
      </section>

      {/* Currency System Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-slate-800/50 to-purple-900/30 rounded-2xl mx-4 mb-16">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Three Ways to Earn & Progress
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          RapBots features a transparent three-tier reward system. Earn through gameplay, compete for prizes, and withdraw real cryptocurrency.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-slate-900/80 border-blue-500/30 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <Star className="h-5 w-5" />
                Store Credits
              </CardTitle>
              <CardDescription className="text-gray-400">Virtual Currency for Cosmetics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-gray-300">Start with <strong className="text-green-400">$1,000 free credits</strong></p>
              <p className="text-gray-300">• Buy avatar items & effects</p>
              <p className="text-gray-300">• Earn from promotions & referrals</p>
              <p className="text-gray-300">• Cannot be withdrawn (like V-Bucks)</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/80 border-purple-500/30 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <Zap className="h-5 w-5" />
                Battle XP & Currency
              </CardTitle>
              <CardDescription className="text-gray-400">Earned Through Gameplay</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-gray-300">• Win battles → <strong className="text-yellow-400">500 XP</strong></p>
              <p className="text-gray-300">• Training lessons → <strong className="text-yellow-400">100 XP</strong></p>
              <p className="text-gray-300">• Daily challenges → <strong className="text-yellow-400">200 XP</strong></p>
              <p className="text-gray-300">• Level up & unlock content</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-green-500 text-white transform scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Crown className="h-5 w-5" />
                USDC Cryptocurrency
                <Badge className="bg-green-600 text-white text-xs">REAL MONEY</Badge>
              </CardTitle>
              <CardDescription className="text-green-200">Arc Blockchain Rewards</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-gray-100">• Win battles → <strong className="text-green-300">$0.10 USDC</strong></p>
              <p className="text-gray-100">• Tournaments → <strong className="text-green-300">$5-$250 USDC</strong></p>
              <p className="text-gray-100">• Competitive stakes → <strong className="text-green-300">Winner takes all</strong></p>
              <p className="text-gray-100 font-semibold">✓ Fully withdrawable anytime</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            <strong className="text-purple-400">Legal Classification:</strong> RapBots operates as a skill-based competitive gaming platform (like esports tournaments), not gambling. 
            Outcomes are determined by rap quality scored by our AI algorithm, with ELO matchmaking ensuring fair competition.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Choose Your Battle Plan
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-gray-400" />
                Free
              </CardTitle>
              <CardDescription className="text-gray-400">
                Perfect for getting started
              </CardDescription>
              <div className="text-3xl font-bold">$0<span className="text-sm text-gray-400">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li>✓ 3 battles per day</li>
                <li>✓ Basic AI opponents</li>
                <li>✓ Standard voices</li>
                <li>✓ Battle history</li>
                <li className="text-gray-500">✗ Advanced analysis</li>
                <li className="text-gray-500">✗ Premium voices</li>
              </ul>
              <Button 
                className="w-full mt-6 bg-gray-600 hover:bg-gray-700"
                onClick={() => window.location.href = '/api/login'}
              >
                Start Free
              </Button>
            </CardContent>
          </Card>

          {/* Premium Tier */}
          <Card className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 text-white transform scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                Premium
                <Badge className="bg-yellow-500 text-black text-xs">POPULAR</Badge>
              </CardTitle>
              <CardDescription className="text-purple-200">
                For serious battle rappers
              </CardDescription>
              <div className="text-3xl font-bold">$9.99<span className="text-sm text-purple-200">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li>✓ 25 battles per day</li>
                <li>✓ Advanced AI opponents</li>
                <li>✓ Premium voices</li>
                <li>✓ Battle analysis</li>
                <li>✓ No ads</li>
                <li>✓ Monthly tournaments</li>
              </ul>
              <Button 
                className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                onClick={() => window.location.href = '/api/login'}
              >
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>

          {/* Pro Tier */}
          <Card className="bg-slate-800 border-amber-500 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-amber-500" />
                Pro
              </CardTitle>
              <CardDescription className="text-gray-400">
                For championship contenders
              </CardDescription>
              <div className="text-3xl font-bold">$19.99<span className="text-sm text-gray-400">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li>✓ Unlimited battles</li>
                <li>✓ All AI opponents</li>
                <li>✓ Custom voices</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority support</li>
                <li>✓ Tournament mode</li>
              </ul>
              <Button 
                className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                onClick={() => window.location.href = '/api/login'}
              >
                Go Pro
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Battle Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Voice Recording</h3>
            <p className="text-gray-400 text-sm">Record your verses with studio-quality audio</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">AI Opponents</h3>
            <p className="text-gray-400 text-sm">Battle against intelligent AI with unique personalities</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Real-time Analysis</h3>
            <p className="text-gray-400 text-sm">Get instant feedback on rhyme schemes and flow</p>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Tournaments</h3>
            <p className="text-gray-400 text-sm">
              <a href="/tournaments" className="text-purple-400 hover:text-purple-300 underline">
                Compete in ranked battles
              </a> and climb the leaderboard
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Battle Rap AI. Level up your battle skills.</p>
          <div className="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-600 max-w-md mx-auto">
            <p className="text-sm text-gray-300 mb-2">New to Replit? Get started with hosting!</p>
            <a 
              href="https://replit.com/~" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm underline"
            >
              Sign up to Replit with my referral link
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, Search, Users, Mail, Phone, MessageCircle } from "lucide-react"

export default function StevenKwokWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#538df2] to-[#33ab53] text-white py-3">
        <div className="container mx-auto px-4 text-center text-sm">
          🎯 專業媒體購買服務 | 免費諮詢預約中 | 立即提升您的廣告效果 →
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Steven Kwok</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-[#538df2] transition-colors">
              服務項目
            </a>
            <a href="#experience" className="text-gray-600 hover:text-[#538df2] transition-colors">
              專業經驗
            </a>
            <a href="#results" className="text-gray-600 hover:text-[#538df2] transition-colors">
              成功案例
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#538df2] transition-colors">
              聯絡我們
            </a>
          </div>
          <Button className="bg-[#538df2] hover:bg-[#4678d8]">免費諮詢</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              專注效果導向的
              <br />
              <span className="text-[#538df2]">媒體購買專家</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              4年豐富經驗，專精Google Ads、Facebook Ads及SEO優化
              <br />
              為您的業務帶來更多高質量潛在客戶，提升投資回報率
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#538df2] hover:bg-[#4678d8] px-8 py-3">
                立即獲取免費分析
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#f9bc0b] text-[#f9bc0b] hover:bg-[#f9bc0b]/10 px-8 py-3"
              >
                查看成功案例
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-gray-500 mb-8">
              已協助超過 <span className="font-semibold text-[#538df2]">100+</span> 家企業提升廣告效果
            </div>

            {/* Company Logos Placeholder */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-gray-200 px-6 py-3 rounded">企業客戶A</div>
              <div className="bg-gray-200 px-6 py-3 rounded">企業客戶B</div>
              <div className="bg-gray-200 px-6 py-3 rounded">企業客戶C</div>
              <div className="bg-gray-200 px-6 py-3 rounded">企業客戶D</div>
              <div className="bg-gray-200 px-6 py-3 rounded">企業客戶E</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#538df2]/10 text-[#538df2]">專業服務</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">全方位數位行銷解決方案</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">運用數據驅動的策略，為您的業務創造可衡量的成長</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg hover:border-[#538df2]/30 transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#538df2]/10 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-[#538df2]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads 管理</h3>
                <p className="text-gray-600 mb-6">
                  精準關鍵字策略、廣告文案優化、競價管理，確保每一分預算都發揮最大效益
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 關鍵字研究與選擇</li>
                  <li>• 廣告文案撰寫優化</li>
                  <li>• 競價策略調整</li>
                  <li>• 轉換追蹤設定</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg hover:border-[#538df2]/30 transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#eb4535]/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-[#eb4535]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Facebook Ads 投放</h3>
                <p className="text-gray-600 mb-6">精準受眾定位、創意素材製作、廣告投放優化，提升品牌曝光與轉換率</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 受眾分析與定位</li>
                  <li>• 廣告創意設計</li>
                  <li>• A/B測試優化</li>
                  <li>• 像素追蹤設定</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg hover:border-[#538df2]/30 transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#33ab53]/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-[#33ab53]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO 搜尋優化</h3>
                <p className="text-gray-600 mb-6">網站結構優化、內容策略規劃、技術SEO改善，提升自然搜尋排名</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 網站技術優化</li>
                  <li>• 內容策略規劃</li>
                  <li>• 關鍵字排名提升</li>
                  <li>• 競爭對手分析</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[#538df2]/10 text-[#538df2]">專業經驗</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">4年實戰經驗，數據說話</h2>
            <p className="text-xl text-gray-600 mb-12">累積豐富的媒體購買經驗，為各行各業客戶創造卓越成果</p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#538df2] mb-2">300%</div>
                <div className="text-gray-600">平均ROI提升</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#538df2] mb-2">100+</div>
                <div className="text-gray-600">成功專案</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#538df2] mb-2">50%</div>
                <div className="text-gray-600">廣告成本降低</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">核心專長領域</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">付費廣告管理</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Google Ads 認證專家</li>
                    <li>• Facebook Blueprint 認證</li>
                    <li>• 跨平台廣告策略整合</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">數據分析優化</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Google Analytics 專家</li>
                    <li>• 轉換追蹤設定</li>
                    <li>• 數據驅動決策制定</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#538df2]/10 text-[#538df2]">成功案例</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">客戶成功故事</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">真實案例見證，用數據證明我們的專業能力</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#538df2]/10 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-[#538df2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">電商零售業</h3>
                    <p className="text-gray-600">線上購物平台</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-[#33ab53]">+250%</div>
                    <div className="text-sm text-gray-600">銷售額增長</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#538df2]">-40%</div>
                    <div className="text-sm text-gray-600">獲客成本降低</div>
                  </div>
                </div>
                <p className="text-gray-600">透過精準的Google Ads和Facebook Ads策略，3個月內實現銷售額大幅提升</p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f9bc0b]/10 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-[#f9bc0b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">服務業</h3>
                    <p className="text-gray-600">專業諮詢公司</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-[#33ab53]">+180%</div>
                    <div className="text-sm text-gray-600">潛在客戶增加</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#538df2]">+320%</div>
                    <div className="text-sm text-gray-600">網站流量提升</div>
                  </div>
                </div>
                <p className="text-gray-600">結合SEO優化與付費廣告，大幅提升品牌知名度與客戶諮詢量</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">準備提升您的廣告效果？</h2>
            <p className="text-xl text-gray-600 mb-8">立即預約免費諮詢，讓我們為您的業務制定專屬的媒體購買策略</p>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4">免費策略諮詢預約</h3>
                <p className="text-gray-600 mb-6">獲得專業的廣告帳戶分析與優化建議</p>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="您的姓名" />
                    <Input placeholder="公司名稱" />
                  </div>
                  <Input type="email" placeholder="電子郵件" />
                  <Input placeholder="聯絡電話" />
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md resize-none"
                    rows={4}
                    placeholder="請簡述您的需求或目前遇到的廣告挑戰..."
                  ></textarea>
                  <Button className="w-full bg-[#538df2] hover:bg-[#4678d8] py-3">立即預約免費諮詢</Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5 text-[#538df2]" />
                      <span className="text-sm text-gray-600">steven@example.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5 text-[#538df2]" />
                      <span className="text-sm text-gray-600">+852 1234 5678</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MessageCircle className="w-5 h-5 text-[#538df2]" />
                      <span className="text-sm text-gray-600">WhatsApp 諮詢</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Steven Kwok</div>
            <p className="text-gray-400 mb-6">專業媒體購買專家 | 4年實戰經驗</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">© 2024 Steven Kwok. 版權所有</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

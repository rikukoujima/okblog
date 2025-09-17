import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Company Info */}
            <div className="md:col-span-1">
              <Link href="/" className="flex flex-col mb-4">
                <div className="h-16 w-24 relative">
                  <Image
                    src={`/bg-remove-vertical.png`}
                    alt="AI-DX"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="text-sm text-gray-600 mt-4">
                〒160-0023
                <br />
                東京都新宿区西新宿三丁目3番13号
                <br />
                西新宿水間ビル6階
              </p>
            </div>

            {/* Site Map */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company */}
                <div>
                  <h3 className="font-medium mb-4 text-sm uppercase">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/company" className="text-sm text-gray-600 hover:text-gray-900">
                        会社概要
                      </Link>
                    </li>
                    <li>
                      <Link href="/company#mission" className="text-sm text-gray-600 hover:text-gray-900">
                        ミッション
                      </Link>
                    </li>
                    <li>
                      <Link href="/company#message" className="text-sm text-gray-600 hover:text-gray-900">
                        代表メッセージ
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-medium mb-4 text-sm uppercase">Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">
                        サービス一覧
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#image-recognition" className="text-sm text-gray-600 hover:text-gray-900">
                        画像認識
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#voice-recognition" className="text-sm text-gray-600 hover:text-gray-900">
                        音声認識
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#generative-ai" className="text-sm text-gray-600 hover:text-gray-900">
                        生成AI
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Other Pages */}
                <div>
                  <h3 className="font-medium mb-4 text-sm uppercase">Information</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                        ブログ
                      </Link>
                    </li>
                    <li>
                      <Link href="/news" className="text-sm text-gray-600 hover:text-gray-900">
                        ニュース
                      </Link>
                    </li>
                    <li>
                      <Link href="/example" className="text-sm text-gray-600 hover:text-gray-900">
                        事例
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                        お問い合わせ
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                        プライバシーポリシー
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} アイデックス株式会社 All Rights Reserved.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
                利用規約
              </Link>
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-900">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

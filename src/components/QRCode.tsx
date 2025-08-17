import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function QRCode() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Quick Access</h2>
          <p className="text-xl text-gray-600 mb-12">
            Scan the QR code to view our digital menu and place your order online
          </p>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <Card className="w-80 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-amber-800">Scan to Order</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center pb-8">
                <div className="w-48 h-48 border-4 border-gray-300 flex items-center justify-center bg-gray-50">
                  {/* Simple QR Code representation */}
                  <div className="grid grid-cols-8 gap-1 w-40 h-40">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${
                          Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-left max-w-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Order Ahead & Skip the Line
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Browse our full menu
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Customize your order
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Pay securely online
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Pick up when ready
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
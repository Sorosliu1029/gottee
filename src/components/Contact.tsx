import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Come experience our cozy atmosphere and exceptional coffee
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader>
              <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <CardTitle className="text-white">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Modera Midtown
                <br />
                95 8th St NW
                <br />
                Atlanta, Georgia 30309
              </p>
            </CardContent>
          </Card>

          <Card className="hidden bg-gray-800 border-gray-700 text-center">
            <CardHeader>
              <Phone className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <CardTitle className="text-white">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                (555) 123-BREW
                <br />
                (555) 123-2739
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader>
              <Clock className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <CardTitle className="text-white">Hours</CardTitle>
              <CardDescription className="text-gray-400">Better with appointments via email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Mon-Fri: 8:00 AM - 8:00 PM
                <br />
                Sat-Sun: 9:00 AM - 9:00 PM
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader>
              <Mail className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <CardTitle className="text-white">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                yang-liu@gatech.edu
                <br />
                soros.liu1029@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

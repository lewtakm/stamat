import { Button } from "@/components";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, TrendingUp, Users, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = async () => (
  <section className="-m-4 md:-m-6 2xl:-m-10">
    <section className="w-full py-12 md:py-24 dark:bg-gradient-to-b from-[#1c2434] to-[#2a3447]">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none s">
              Przygotuj się do egzaminu ósmoklasisty z{" "}
              <span className="text-[#4CAF50]">StaMat</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Interaktywna platforma z bogatą bazą pytań, zadaniami i
              odpowiedziami w formie wideo. Osiągnij sukces z naszym wsparciem!
            </p>
          </div>
          <div className="flex gap-3 space-x-4">
            <Button>Rozpocznij naukę</Button>
            <Button variant="secondary">Dowiedz się więcej</Button>
          </div>
        </div>
      </div>
    </section>
    <section
      className="w-full py-12 md:py-24 lg:py-32 dark:bg-[#2a3447]"
      id="features"
    >
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 ">
          Dlaczego <span className="text-[#4CAF50]">StaMat</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="dark:bg-[#1c2434] border-[#4CAF50]">
            <CardContent className="flex flex-col items-center p-6">
              <CheckCircle className="h-12 w-12 text-[#4CAF50] mb-4" />
              <h3 className="text-xl font-bold mb-2 ">
                Interaktywna baza pytań
              </h3>
              <p className="text-gray-400 text-center">
                Tysiące pytań i zadań dostosowanych do egzaminu ósmoklasisty.
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-[#1c2434] border-[#FF5722]">
            <CardContent className="flex flex-col items-center p-6">
              <Video className="h-12 w-12 text-[#FF5722] mb-4" />
              <h3 className="text-xl font-bold mb-2 ">Odpowiedzi wideo</h3>
              <p className="text-gray-400 text-center">
                Szczegółowe wyjaśnienia w formie wideo dla lepszego zrozumienia.
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-[#1c2434] border-[#2196F3]">
            <CardContent className="flex flex-col items-center p-6">
              <Users className="h-12 w-12 text-[#2196F3] mb-4" />
              <h3 className="text-xl font-bold mb-2 ">
                Konsultacje z nauczycielami
              </h3>
              <p className="text-gray-400 text-center">
                Indywidualne sesje z doświadczonymi nauczycielami matematyki.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-[#1c2434]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  mb-4">
              Twoja droga do <span className="text-[#4CAF50]">sukcesu</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Z StaMat, przygotowanie do egzaminu ósmoklasisty staje się
              prostsze i efektywniejsze. Nasza platforma oferuje:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Star className="h-5 w-5 text-[#FFC107] mr-2" />
                Spersonalizowane ścieżki nauki
              </li>
              <li className="flex items-center text-gray-300">
                <TrendingUp className="h-5 w-5 text-[#4CAF50] mr-2" />
                Śledzenie postępów w czasie rzeczywistym
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="h-5 w-5 text-[#2196F3] mr-2" />
                Regularne testy i symulacje egzaminów
              </li>
            </ul>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] rounded-lg transform rotate-3"></div>
            <Image
              alt="Uczeń korzystający z platformy StaMat"
              className="relative z-10 rounded-lg shadow-lg"
              height={400}
              src="assets/images/placeholder.svg"
              width={600}
            />
          </div>
        </div>
      </div>
    </section>
    <section
      className="w-full py-12 md:py-24 lg:py-32 dark:bg-[#1c2434]"
      id="pricing"
    >
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 ">
          Wybierz plan dla siebie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="dark:bg-[#1c2434] border-[#4CAF50]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2 ">Jednorazowy dostęp</h3>
              <p className="text-3xl font-bold mb-4 text-[#4CAF50]">199 zł</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#4CAF50] mr-2" />
                  Pełny dostęp do bazy pytań
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#4CAF50] mr-2" />
                  Odpowiedzi wideo
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#4CAF50] mr-2" />
                  Dożywotni dostęp
                </li>
              </ul>
              <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] ">
                Wybierz plan
              </Button>
            </CardContent>
          </Card>
          <Card className="dark:bg-[#1c2434] border-[#2196F3]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2 ">Abonament miesięczny</h3>
              <p className="text-3xl font-bold mb-4 text-[#2196F3]">
                39 zł / miesiąc
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#2196F3] mr-2" />
                  Pełny dostęp do bazy pytań
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#2196F3] mr-2" />
                  Odpowiedzi wideo
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#2196F3] mr-2" />
                  Możliwość anulowania w dowolnym momencie
                </li>
              </ul>
              <Button className="w-full bg-[#2196F3] hover:bg-[#1e88e5] ">
                Wybierz plan
              </Button>
            </CardContent>
          </Card>
        </div>
        <p className="text-center mt-8 text-gray-400">
          Chcesz skorzystać z prywatnych konsultacji?{" "}
          <Link className="text-[#4CAF50] hover:underline" href="#contact">
            Skontaktuj się z nami
          </Link>
        </p>
      </div>
    </section>
    {/* <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#1c2434]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 ">
              Skontaktuj się z nami
            </h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input placeholder="Imię i nazwisko" className="bg-[#2a3447]  border-[#4CAF50]" />
                <Input type="email" placeholder="Adres e-mail" className="bg-[#2a3447]  border-[#4CAF50]" />
                <Input type="tel" placeholder="Numer telefonu" className="bg-[#2a3447]  border-[#4CAF50]" />
                <textarea
                  className="w-full h-32 px-3 py-2  bg-[#2a3447] border border-neutral-200 border-[#4CAF50] rounded-lg focus:outline-none focus:border-[#45a049] dark:border-neutral-800"
                  placeholder="Twoja wiadomość"
                ></textarea>
                <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] ">Wyślij wiadomość</Button>
              </form>
            </div>
          </div>
        </section> */}
  </section>
);

export default Home;

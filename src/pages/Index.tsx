import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [code, setCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!code.trim()) return;
    
    setIsGenerating(true);
    // Имитация генерации дубликата
    setTimeout(() => {
      setIsGenerating(false);
      // Здесь будет логика генерации
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-glass-blue/20 via-transparent to-glass-pink/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glass-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glass-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            <span className="holographic-text">Генератор дубликатов</span>
          </h1>
          <h2 className="text-4xl font-bold text-white mb-4">Честного знака</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Быстро и бесплатно создавайте дубликаты кодов маркировки без регистрации. 
            Просто введите код и получите готовый дубликат для печати.
          </p>
        </div>

        {/* Главная форма */}
        <div className="max-w-4xl mx-auto mb-24">
          <Card className="glass-card p-8 border-2 border-glass-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white mb-2">Генерировать дубликат</CardTitle>
              <p className="text-slate-300">Введите код Честного знака из сканера или вручную</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Введите или вставьте код Честного знака..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="glass-card text-white placeholder:text-slate-400 border-glass-border h-14 text-lg"
                  />
                </div>
                <Button
                  onClick={handleGenerate}
                  disabled={!code.trim() || isGenerating}
                  className="glass-button h-14 px-8 text-lg min-w-[200px]"
                >
                  {isGenerating ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Генерация...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={20} />
                      Создать дубликат
                    </div>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Как это работает */}
        <div className="max-w-6xl mx-auto mb-24">
          <h3 className="text-4xl font-bold text-center text-white mb-16">Как это работает</h3>
          <p className="text-xl text-slate-300 text-center mb-12">Всего 3 простых шага до готового дубликата</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Считать код',
                description: 'Сканируйте или введите код Честного знака',
                icon: 'Scan'
              },
              {
                step: '2', 
                title: 'Распечатать',
                description: 'Получите готовый дубликат для печати',
                icon: 'Printer'
              },
              {
                step: '3',
                title: 'Наклеить',
                description: 'Разместите дубликат на товаре',
                icon: 'Package'
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card text-center p-8 hover:scale-105 transition-all duration-300">
                <div className="pearl-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={item.icon} size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold holographic-text mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-slate-300">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Преимущества */}
        <div className="max-w-6xl mx-auto mb-24">
          <h3 className="text-4xl font-bold text-center text-white mb-16">Почему выбирают нас</h3>
          <p className="text-xl text-slate-300 text-center mb-12">Максимум удобства без лишних сложностей</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Бесплатно',
                description: 'Никаких скрытых платежей и подписок',
                icon: 'Heart'
              },
              {
                title: 'Мгновенно',
                description: 'Генерация дубликата за секунды',
                icon: 'Zap'
              },
              {
                title: 'Без регистрации',
                description: 'Никаких форм и личных данных',
                icon: 'Shield'
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card text-center p-8 hover:scale-105 transition-all duration-300">
                <div className="pearl-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={item.icon} size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-semibold text-white mb-4">{item.title}</h4>
                <p className="text-slate-300 text-lg">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="text-center mb-16">
          <Card className="glass-card max-w-4xl mx-auto p-12">
            <h3 className="text-4xl font-bold text-white mb-6">Попробуйте прямо сейчас</h3>
            <p className="text-xl text-slate-300 mb-8">
              Генерируйте дубликаты кодов Честного знака мгновенно и абсолютно бесплатно
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="glass-button text-xl px-12 py-4"
            >
              <Icon name="ArrowUp" size={24} className="mr-2" />
              Создать дубликат
            </Button>
          </Card>
        </div>

        {/* Футер */}
        <footer className="text-center pt-16 border-t border-glass-border">
          <div className="mb-8">
            <h4 className="text-2xl font-bold holographic-text mb-2">Честный Дубликат</h4>
          </div>
          <p className="text-slate-400">
            © 2024 Честный Дубликат. Бесплатная генерация дубликатов кодов маркировки.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
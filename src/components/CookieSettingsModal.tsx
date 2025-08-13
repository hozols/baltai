import React from 'react';
import { X, Shield, BarChart3, Megaphone, Settings, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useCookies } from '@/contexts/CookieContext';

const CookieSettingsModal: React.FC = () => {
  const { 
    preferences, 
    updatePreferences, 
    isModalOpen, 
    closeModal, 
    acceptAllCookies, 
    rejectAllCookies 
  } = useCookies();

  const cookieTypes = [
    {
      key: 'necessary' as const,
      title: 'Nepieciešamās sīkdatnes',
      description: 'Šīs sīkdatnes ir nepieciešamas, lai mājaslapa darbotos pareizi. Tās nevar izslēgt.',
      icon: <Shield className="h-5 w-5 text-blue-500" />,
      disabled: true,
    },
    {
      key: 'functional' as const,
      title: 'Funkcionālās sīkdatnes',
      description: 'Šīs sīkdatnes ļauj mājaslapai atcerēties jūsu izvēles un sniegt uzlabotas funkcionalitātes.',
      icon: <Settings className="h-5 w-5 text-green-500" />,
      disabled: false,
    },
    {
      key: 'analytics' as const,
      title: 'Analītikas sīkdatnes',
      description: 'Šīs sīkdatnes palīdz mums saprast, kā mājaslapa tiek izmantota, lai mēs varētu to uzlabot.',
      icon: <BarChart3 className="h-5 w-5 text-purple-500" />,
      disabled: false,
    },
    {
      key: 'marketing' as const,
      title: 'Mārketinga sīkdatnes',
      description: 'Šīs sīkdatnes tiek izmantotas, lai jums parādītu personalizētu reklāmu un saturu.',
      icon: <Megaphone className="h-5 w-5 text-orange-500" />,
      disabled: false,
    },
  ];

  const handleSavePreferences = () => {
    closeModal();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Shield className="h-6 w-6 text-primary" />
            Sīkdatņu iestatījumi
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 h-8 w-8 p-0"
            onClick={closeModal}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Introduction */}
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  Mēs izmantojam sīkdatnes, lai uzlabotu jūsu pieredzi mājaslapā. 
                  Jūs varat izvēlēties, kuras sīkdatnes atļaut.
                </p>
                <p>
                  <strong>Nepieciešamās sīkdatnes</strong> vienmēr ir ieslēgtas, 
                  jo tās ir nepieciešamas mājaslapas darbībai.
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Type Settings */}
          <div className="space-y-4">
            {cookieTypes.map((cookieType) => (
              <div key={cookieType.key} className="border rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="mt-1">{cookieType.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Label 
                          htmlFor={cookieType.key}
                          className="text-base font-medium text-foreground cursor-pointer"
                        >
                          {cookieType.title}
                        </Label>
                        {cookieType.disabled && (
                          <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                            Obligāti
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cookieType.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    id={cookieType.key}
                    checked={preferences[cookieType.key]}
                    onCheckedChange={(checked) => 
                      updatePreferences({ [cookieType.key]: checked })
                    }
                    disabled={cookieType.disabled}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={rejectAllCookies}
              className="flex-1"
            >
              Noraidīt visas
            </Button>
            <Button 
              variant="outline" 
              onClick={acceptAllCookies}
              className="flex-1"
            >
              Pieņemt visas
            </Button>
            <Button 
              onClick={handleSavePreferences}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Saglabāt iestatījumus
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-xs text-muted-foreground text-center space-y-2">
            <p>
              Jūsu iestatījumi tiks saglabāti uz 1 gadu. 
              Jūs varat mainīt šos iestatījumus jebkurā laikā.
            </p>
            <p>
              Lai uzzinātu vairāk par to, kā mēs izmantojam sīkdatnes, 
              lūdzu, lasiet mūsu{' '}
              <a href="/privacy" className="text-primary hover:underline">
                Privātuma politiku
              </a>
              .
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettingsModal; 
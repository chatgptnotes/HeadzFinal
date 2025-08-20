"use client";

import { useState, useRef, type ChangeEvent } from 'react';
import Image from 'next/image';
import { applyWigToImage } from '@/ai/flows/apply-wig-to-image';
import { wigs, type Wig } from '@/app/wigs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { UploadCloud, Download, Sparkles, Loader2, X } from 'lucide-react';
import { cn } from '@/lib/utils';



export function WigStyler() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedWig, setSelectedWig] = useState<Wig | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({ title: "Invalid File", description: "Please upload an image file.", variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target?.result as string);
        setGeneratedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!originalImage || !selectedWig) {
      toast({ title: "Missing inputs", description: "Please upload a photo and select a wig.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    setGeneratedImage(null);

    try {
      const result = await applyWigToImage({
        photoDataUri: originalImage,
        wigStyle: selectedWig.name,
      });
      setGeneratedImage(result.modifiedPhotoDataUri);
    } catch (error) {
      toast({ title: "Generation Failed", description: "Could not apply the wig. Please try another photo or wig.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setOriginalImage(null);
    setGeneratedImage(null);
    setSelectedWig(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="py-4 px-4 md:px-8 border-b sticky top-0 bg-background/80 backdrop-blur-sm z-30">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Virtual Wig Styler</h1>
           {generatedImage && (
             <a href={generatedImage} download="wig-styler-result.png">
                <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download Image
                </Button>
             </a>
           )}
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <div className="relative aspect-video w-full rounded-lg border bg-muted/30 flex items-center justify-center overflow-hidden">
                {isLoading && (
                    <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center z-20 backdrop-blur-sm transition-opacity">
                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                        <p className="mt-4 text-lg font-medium">Applying wig...</p>
                        <p className="text-sm text-muted-foreground">This may take a moment.</p>
                    </div>
                )}
                
                {generatedImage ? (
                  <Image src={generatedImage} alt="Image with wig" layout="fill" objectFit="contain" className="animate-in fade-in"/>
                ) : originalImage ? (
                  <Image src={originalImage} alt="Original photo" layout="fill" objectFit="contain" />
                ) : (
                  <div className="text-center text-muted-foreground p-8">
                    <UploadCloud className="mx-auto h-12 w-12" />
                    <p className="mt-4 text-sm">Upload a photo to get started</p>
                  </div>
                )}

                {(originalImage || generatedImage) && (
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 rounded-full bg-background/50 hover:bg-background/80" onClick={reset}>
                        <X className="h-4 w-4" />
                        <span className="sr-only">Start Over</span>
                    </Button>
                )}
            </div>
            
            {(originalImage && !generatedImage) && (
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary text-secondary-foreground">
                    <Sparkles className="h-6 w-6 text-primary shrink-0"/>
                    <div>
                        <h3 className="font-semibold">Ready to style!</h3>
                        <p className="text-sm text-secondary-foreground/80">Now, select a wig from the catalog on the right.</p>
                    </div>
                </div>
            )}
          </div>
          
          <div className="flex flex-col gap-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>1. Upload Photo</CardTitle>
                <CardDescription>Select an image of a person.</CardDescription>
              </CardHeader>
              <CardContent>
                  <Input id="file-upload" type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} disabled={!!originalImage}/>
              </CardContent>
            </Card>

            <Card className={cn("w-full transition-opacity", !originalImage && "opacity-50 pointer-events-none")}>
              <CardHeader>
                <CardTitle>2. Select a Wig</CardTitle>
                <CardDescription>Choose a style to try on.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {wigs.map((wig) => (
                    <button
                      key={wig.id}
                      onClick={() => setSelectedWig(wig)}
                      disabled={!originalImage}
                      className={cn(
                        "rounded-lg overflow-hidden border-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all",
                        selectedWig?.id === wig.id ? 'border-primary' : 'border-card hover:border-primary/50'
                      )}
                      aria-label={`Select ${wig.name} wig`}
                    >
                      <div className="relative w-full h-40 bg-muted overflow-hidden rounded-t-lg">
                        <Image 
                          src={wig.src} 
                          alt={wig.name} 
                          fill
                          data-ai-hint={wig.hint} 
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 50vw, 33vw"
                          style={{
                            objectPosition: wig.id === 'curly-top' ? 'center 30%' : 'center center'
                          }}
                          onError={(e) => {
                            console.error(`Failed to load wig image: ${wig.name}`);
                          }}
                        />
                      </div>
                      <p className="text-xs text-center p-1.5 bg-secondary font-medium">{wig.name}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                  <Button onClick={handleGenerate} disabled={isLoading || !selectedWig} className="w-full">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" /> }
                    {isLoading ? 'Applying...' : 'Apply Wig'}
                  </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

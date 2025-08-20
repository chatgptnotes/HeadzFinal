'use server';
/**
 * @fileOverview Applies a selected wig to an uploaded image of a bald person using generative AI.
 *
 * - applyWigToImage - A function that handles the wig application process.
 * - ApplyWigToImageInput - The input type for the applyWigToImage function.
 * - ApplyWigToImageOutput - The return type for the applyWigToImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ApplyWigToImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a bald person, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  wigStyle: z.string().describe('The style of the wig to apply.'),
});
export type ApplyWigToImageInput = z.infer<typeof ApplyWigToImageInputSchema>;

const ApplyWigToImageOutputSchema = z.object({
  modifiedPhotoDataUri: z
    .string()
    .describe("The photo with the wig applied, as a data URI."),
});
export type ApplyWigToImageOutput = z.infer<typeof ApplyWigToImageOutputSchema>;

export async function applyWigToImage(input: ApplyWigToImageInput): Promise<ApplyWigToImageOutput> {
  return applyWigToImageFlow(input);
}

const applyWigToImageFlow = ai.defineFlow(
  {
    name: 'applyWigToImageFlow',
    inputSchema: ApplyWigToImageInputSchema,
    outputSchema: ApplyWigToImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: [
        {media: {url: input.photoDataUri}},
        {text: `Give the person in the photo a ${input.wigStyle} hairstyle.`},
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image with wig applied.');
    }

    return {modifiedPhotoDataUri: media.url};
  }
);

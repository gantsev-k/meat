'use server';

/**
 * @fileOverview Enhances product descriptions using AI to improve SEO and customer engagement.
 *
 * - enhanceProductDescription - A function that takes a product name and existing description and returns an enhanced description.
 * - EnhanceProductDescriptionInput - The input type for the enhanceProductDescription function.
 * - EnhanceProductDescriptionOutput - The return type for the enhanceProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  existingDescription: z.string().describe('The existing description of the product.'),
});
export type EnhanceProductDescriptionInput = z.infer<typeof EnhanceProductDescriptionInputSchema>;

const EnhanceProductDescriptionOutputSchema = z.object({
  enhancedDescription: z.string().describe('The enhanced product description.'),
});
export type EnhanceProductDescriptionOutput = z.infer<typeof EnhanceProductDescriptionOutputSchema>;

export async function enhanceProductDescription(input: EnhanceProductDescriptionInput): Promise<EnhanceProductDescriptionOutput> {
  return enhanceProductDescriptionFlow(input);
}

const enhanceProductDescriptionPrompt = ai.definePrompt({
  name: 'enhanceProductDescriptionPrompt',
  input: {schema: EnhanceProductDescriptionInputSchema},
  output: {schema: EnhanceProductDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating compelling and SEO-friendly product descriptions for a local meat store.

  Given the product name and existing description, generate an enhanced product description that is more engaging, informative, and optimized for search engines. Focus on highlighting the quality, freshness, and unique characteristics of the product. Incorporate relevant keywords to improve search engine visibility.

  Product Name: {{{productName}}}
  Existing Description: {{{existingDescription}}}
  Enhanced Description:`, // Removed Handlebars await keyword.
});

const enhanceProductDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceProductDescriptionFlow',
    inputSchema: EnhanceProductDescriptionInputSchema,
    outputSchema: EnhanceProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await enhanceProductDescriptionPrompt(input);
    return output!;
  }
);

# RNA Transcription

My solution to Exercism's RNA Transcription problem on the JavaScript track:

Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U

## Testing the code.

- example input: `const dna = "ACGT"`

- Regex Example: `console.log(toRnaRegex(dna))` // returns "UGCA"

- Mapping Example: `console.log(mapToRna(dna))` // returns "UGCA"

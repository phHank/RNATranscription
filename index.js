// Converts a given DNA strand to its RNA complement using Regex.

const toRnaRegex = dna => {
        const replacer = dna => dna === 'A' ? 'U' : dna === 'T' ? 'A' : dna === 'G' ? 'C' : dna === 'C' ? 'G' : "";
        return dna.replace(/(A)|(T)|(G)|(C)/g, replacer);
};


//  Another solution using mapping a DNA to it's RNA nucleotide

const mapToRna = dna => {
        const nucleotides = {
                A: 'U',
                T: 'A',
                G: 'C',
                C: 'G'
        };

        const dnaArr = dna.split('');

        const rnaArr = dnaArr.map(dnaNucleotide => nucleotides[dnaNucleotide]);

        return rnaArr.join('');
};

Ross Lagoy
A4. BCB 502
02.26.15
github.com/rlag
openprocessing.org/user/46418

Describe the design of the visualization - what was considered for representing insertions, deletions, and substitutions? What happens if the sequences are longer than the display size?

The visualization was designed to have a simple user interface; inputting two DNA or protein sequences, and visualizing the output in ways of physical sequence alignment and colors. Each score between the two sequences is represented as a match (= and green square), mismatch (! and blue square), and gap (‘ ‘ and white square). I thought the Squish Visualization was the most efficient way to represent alignment, especially useful for long sequences and getting an overall idea of the alignment score (calculated on screen). The images are word-wrapped so the alignment will fit within the browser screen, and the user could scroll in the y direction if needed. The Alignment Visualization allows for a more detailed representation of the scores. The user can scroll in the x direction to visualize the sequence and scores (the next update will word-wrap this alignment, but was challenging to do with the three lines and I haven’t figured it out yet).

Identify the source of the code if you start with code that you found.
I followed and implemented both links below as tutorials to write this complex algorithm (having no experience with dynamic programming).

http://www.avatar.se/molbioinfo2001/dynprog/dynamic.html
https://github.com/ahupowerdns/nwunsch/blob/master/nwunsch.js

For the free-form (beyond the requirements) component:
Describe the biological significance of the additions you make.

I think that the ‘Squish Visualization’ of match, mismatch, and gaps is biologically significant and ‘useful’, especially from a biologist perspective. I was inspired by the BLAST alignment color coded visualization that guided this design. This approach is useful to get a simple and complete idea of the alignment: i.e. more green is good! It also allows for more investigation to where the gaps and mismatches are shown in the Alignment Visualization. I’ll definitely use this myself in the future! I also linked to a useful site for translating and transcribing sequences, now integrating a few tools into one useful site-directory. I’d like to develop this tool further, adding some integration between the two visualizations by hovering and highlighting, etc. (beyond my sills right now).

Describe the technical significance of the additions you make.

I learned how to use javascript for this project (technically challenging itself). I also practiced my html and css skills to make a clean and well-designed user interface requiring little instructions for use. It took a bit to figure out that I needed to make a new image each time the Squish Alignment visual was called; before I was just calling the image from the html page, learned this was possible, but it only loaded one of each gap, match, and mismatch image.

Provide instructions on running your program.
You can click on the following link and input any two sequence lengths of your choice! Two sequence examples are provided below (from the protein I study in the lab): 

http://users.wpi.edu/~rosslagoy/nwunsch.html

tgtctgccgacgcatacttcctgtgcattcttttctttcttttcacaatgcacttgtttctaattgaactcctacagagataatgcattcgactacgtctaaaattttaaaactagagccacgtggccagctaatctctttcagaaactaccgtccataatttacctctgaatcaggggtgcgcggcatttaaaaatttccggcaatcggcaatttcggcaattgccgaaaatttgatttacgagcacccctgatctgaatcggtaatacgtggtttcgaaatttttacttcacaagcagtttttgtgaattttagactgtagaaaactatcgtgacatcaaactaaagtaaacgtttattgcaccaatttttataagtcaaacttcggcgggaatctgcgacagcacgttgatcattcgagtatttttccaaatagaagcgctttggaattttaaaaaatcagggagacgtttctattataataacaactctaatcgcaatacaaaataaatatttagttttcagatattttttcgatgcgataatataggcataacataaaactgaatactaaaataacttggaataatattattttattcatttctcattttcacttgcttcactcatttcatgagcttgagctaatcaggaaatgagaaaatgatgatgatgctcttcatgctttttcttagtctttttctatttcttcatctccacattcagtttttcctgagattcatggccatgtgtttacttagtagactaaaaaatgaattagaatatctcatttcctttcagaacacatgtgaaaccaaaacaagcagtctaacaaatgtgattacagtcacttgattgaggctcctttatgctatatatttttttgcaaataccaatattctagttatttaagcagttaattagatttcctaataaaaagaggaacaaaacaaaaatgtcaatcttattattttaaaaagagggaatgcggaaaaaggcttactaagaggaaacttgaaatgatgtcgtttgagcacacttgaaaaatctcaagtctgcattatactacgtcgtatactacagttgaaacctctacttcaat

tgtctgccgacgcatacttcctgtgcattcttttctttcttttcacaatgcacttgtttctaattgaactcctacagagataatgcattcgactacgtctaaaattttaaaactagagccacgtggccagctaatctctttcagaaactaccgtccataatttacctctgaatcaggggtgcgcggcatttaaaaatttccggcaatcggcaatttcggcaattgccgaaaatttgatttacgagcacccctgatctgaactgatgtcgtagctagtcgaaatttttacttcacaagcagtttttgtgaattttagactgtagaaaactatcgtgacatcaaactaaagtaaacgtttattgcaccaatttttataagtcaaacttcggcgggaatctgcgacagcacgttgatcattcgagtatttttccaaatagaagcgctttggaattttaaaaaatcagggagacgtttctattataataacaactctaatcgcaatacaaaataaatatttagttttcagatattttttcgatgcgataatataggcataacataaaactgaatactaaaataacttggaataatattatttgtagatagtagggtgtcagtcagtcagtactgctttttcttaagaacacatgtgaaaccaaaacaagcagtctaacaaatgtgattacagtcacttgattgaggctcctttatgctatatatttttttgcaaataccaatattctagttatttaagcagttaattagatttcctaataaaaagaggaacaaaacaaaaatgtcaatcttattatttcccatacgacgacaaaaaaagactgcagtacgtattgaaacttgaaatgatgtcgtttgagcacacttgaaaaatctcaagtctgcattatactacgtcgtatactacagttgaaacctctacttcaat

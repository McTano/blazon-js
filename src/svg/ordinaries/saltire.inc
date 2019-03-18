<?php /* Copyright 2010 Karl R. Wilcox 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. */

if ( existModifierWithKeyterm($node, 'nowy')) // special handling for some linetypes
  $ordinary['body'] = '<path d="m 64.801,-76.6 -141.401,141.401 306.17,306.169 a 300,300 0 0 0 -29.57,129.03 300,300 0 0 0 29.51,129.09 l -386.11,386.11 141.401,141.4 386.169,-386.17 a 300,300 0 0 0 129.03,29.57 300,300 0 0 0 129.09,-29.51 l 386.11,386.11 141.4,-141.4 -386.17,-386.17 a 300,300 0 0 0 29.57,-129.03 300,300 0 0 0 -29.51,-129.09 l 306.11,-306.109 -141.4,-141.401 -306.17,306.17 a 300,300 0 0 0 -129.03,-29.57 300,300 0 0 0 -129.09,29.51 z" />';
elseif ( existModifierWithKeyterm($node, 'quadrate')) // special handling for some linetypes
  $ordinary['body'] = '<path d="m 64.801,-76.6 -141.401,141.401 293.77,293.769 -141.434,141.43 141.434,141.43 -373.77,373.77 141.401,141.4 373.769,-373.77 141.43,141.43 141.43,-141.43 373.77,373.77 141.4,-141.4 -373.77,-373.77 141.43,-141.43 -141.43,-141.43 293.77,-293.769 -141.4,-141.401 -293.77,293.77 -141.43,-141.434 -141.43,141.434 z" />';
else
  $ordinary['shape_spec'] = array ( 'NC' => 'X500Y358.6H615.5b200D615.5B615.5d200F615.5D615.5f200H615.5F615.5h200B615.5',
			                        'CH' => 'X500Y597.6H615.5b200D615.5B615.5d200F615.5D615.5f200H615.5F615.5h200B615.5' );


if ( existModifierWithKeyterm($node,'compony1') )
  $ordinary['body2'] = array ( 'NC' => '<path d="M 941,684 690,935 815,1060 1070,810 z M 314,935 62.7,684 -62.7,810 188,1060 314,935 M 314,57.3 62.7,308 -62.7,183 188,-68.1 314,57.3 m 376,0 L 815,-68.1 1070,183 941,308 z M 439,183 l -63,63 0,-1 -125,126 -63,63 63,62 -63,63 251,251 63,-63 62,63 251,-251 -63,-63 63,-62 -63,-62 1,-1 -126,-126 -1,1 -62,-63 -62,63 -63,-63 z m 63,188 125,125 0,0 -125,126 -126,-126 63,-62 63,-63 z" />',
                               'CH' => '<path d="m 941,924 -251,256 125,120 255,-250 z M 314,1180 62.7,924 -62.7,1050 188,1300 314,1180 M 314,297 62.7,548 -62.7,423 188,172 314,297 m 376,0 125,-125 255,251 -129,125 z m -251,126 -63,63 0,-1 -125,126 -63,63 63,62 -63,63 251,251 63,-63 62,63 251,-251 -63,-63 63,-62 -63,-62 1,-1 -126,-126 -1,1 -62,-63 -62,63 z m 63,188 125,125 0,0 -125,126 -126,-126 63,-62 z" />', );
elseif (existModifierWithKeyterm($node,'compony2') )
  $ordinary['body2'] = array ( 'NC' => '<path d="M 941,57.3 815,-68.1 941,-194 1070,-68.1 941,57.3 M 62.7,57.3 -62.7,-68.1 62.7,-194 188,-68.1 z M 941,935 815,1060 941,1190 1070,1060 z M 815,183 941,308 1070,183 941,57.3 815,183 M 690,308 564,183 690,57.3 815,183 z M 188,183 62.7,308 -62.7,183 62.7,57.3 z M 314,308 439,183 314,57.3 188,183 z M 815,810 941,684 1070,810 941,935 z M 690,684 564,810 690,935 815,810 z m 0,-376 -126,126 63,62 -63,63 L 690,684 815,559 752,496 815,434 690,308 z M 62.7,935 188,1060 62.7,1190 -62.7,1060 62.7,935 M 188,810 62.7,684 -62.7,810 62.7,935 z M 314,684 439,810 314,935 188,810 314,684 m 0,-376 -126,126 63,62 -63,63 126,125 125,-125 -63,-63 63,-62 -125,-126 z m 188,188 -63,63 63,63 62,-63 z m -63,-62 63,62 62,-62 -62,-63 -63,63" />',
                               'CH' => '<path d="M 941,297 815,172 941,46 1070,172 941,297 M 62.7,297 -62.7,172 62.7,46 188,172 z m 878.3,883 -126,120 126,130 129,-130 z M 815,423 941,548 1070,423 941,297 815,423 M 690,548 564,423 690,297 815,423 z M 188,423 62.7,548 -62.7,423 62.7,297 z M 314,548 439,423 314,297 188,423 z m 501,502 126,-126 129,126 -129,130 z M 690,924 564,1050 690,1180 815,1050 z m 0,-376 -126,126 63,62 -63,63 126,125 125,-125 -63,-63 63,-62 z M 62.7,1180 188,1300 62.7,1430 -62.7,1300 62.7,1180 M 188,1050 62.7,924 -62.7,1050 62.7,1180 z M 314,924 439,1050 314,1180 188,1050 314,924 m 0,-376 -126,126 63,62 -63,63 126,125 125,-125 -63,-63 63,-62 z m 188,188 -63,63 63,63 62,-63 z m -63,-62 63,62 62,-62 -62,-63 -63,63" />', );

$ordinary['chargesOn'] = chiefPresent() ? '500,700,160,160/500,700,160,450,45:500,700,160,450,-45/x/250,450,160,160,-45:750,450,,,45:750,950,,,-45:250,950,,,45/500,740,160,160,0:250,490,,,-45:750,490,,,45:750,990,,,-45:250,990,,,45/x' :
  '500,500,160,160/500,500,180,650,45:500,500,180,650,-45/x/250,250,160,160,-45:750,250,,,45:750,750,,,-45:250,750,,,45/500,500,160,160,0:250,250,,,-45:750,250,,,45:750,750,,,-45:250,750,,,45/x';

$ordinary['chargesWithin'] = chiefPresent() ? 'x///150,700,180,180:850,700:500,380,140,140:500,1050,180,180/x/x' : 'x///150,500,180,180:850,500:500,150:500,850/x/x';
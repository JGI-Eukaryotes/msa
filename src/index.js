import { fasta, clustal, gff } from 'bio.io'
import MSA from './msa'
import './msa.css'

const MSAWrapper = function() {
  var msa = function(args) {
    return MSA.apply(this, args)
  }
  msa.prototype = MSA.prototype
  return new msa(arguments)
}

export { model } from './model'
export { menu } from './menu'
export { utils } from './utils'
export { selection } from  './g/selection/Selection'
export { default as selcol } from './g/selection/SelectionCol'
export { default as view } from 'backbone-viewj'
export { default as boneView } from 'backbone-childs'
export { default as $ } from 'jbone'
export const io = {
    xhr: require('xhr'),
    fasta: fasta,
    clustal: clustal,
    gff: gff
}
export { MSA as msa }
export default MSAWrapper

if (process.env.NODE_ENV === 'development' ) window.msa = MSA

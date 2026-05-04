// @ts-nocheck
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ListChecks,
  ListTodo,
  Mail,
  MoreHorizontal,
  Pencil,
  Plus,
  Thermometer,
  Trash2,
  User,
  UserPlus,
  X,
} from 'lucide-react'
// Auto-generated from Paper MCP (file 01KQS2731HNA3X6FK0K2H5TP97 / page 1-0, artboard "Frame").
// After re-exporting get_jsx into this file, run: npm run strip-paper — removes bogus borders and fixes SVG preserveAspectRatio none → meet (squished icons).
// Lucide: ChevronLeft ChevronRight ListChecks Heart ListTodo Plus Thermometer; toolbar UserPlus / MoreHorizontal / Pencil / Trash2; modals X / Mail / User.

const BULK_CHIP_SUGGESTION_POOL = [
  { label: 'краставици +', value: 'краставици' },
  { label: 'портокали +', value: 'портокали' },
  { label: 'ягоди +', value: 'ягоди' },
  { label: 'вино +', value: 'вино' },
  { label: 'зелена салата +', value: 'зелена салата' },
  { label: 'бира +', value: 'бира' },
  { label: 'кафе +', value: 'кафе' },
  { label: 'мляко +', value: 'мляко' },
  { label: 'хляб +', value: 'хляб' },
  { label: 'яйца +', value: 'яйца' },
  { label: 'сирене +', value: 'сирене' },
  { label: 'кашкавал +', value: 'кашкавал' },
  { label: 'домати +', value: 'домати' },
  { label: 'банани +', value: 'банани' },
  { label: 'картофи +', value: 'картофи' },
  { label: 'лук +', value: 'лук' },
  { label: 'моркови +', value: 'моркови' },
  { label: 'шоколад +', value: 'шоколад' },
  { label: 'вода +', value: 'вода' },
  { label: 'сок +', value: 'сок' },
  { label: 'масло +', value: 'масло' },
  { label: 'кисело мляко +', value: 'кисело мляко' },
  { label: 'ориз +', value: 'ориз' },
  { label: 'паста +', value: 'паста' },
  { label: 'зехтин +', value: 'зехтин' },
]

function pickRandomBulkChips(excludeLowercased) {
  const ex = new Set((excludeLowercased || []).map((s) => String(s).toLocaleLowerCase('bg-BG')))
  let pool = BULK_CHIP_SUGGESTION_POOL.filter((t) => !ex.has(t.value.toLocaleLowerCase('bg-BG')))
  if (pool.length < 3) pool = [...BULK_CHIP_SUGGESTION_POOL]
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 3)
}

const EBAG_BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')
const ebagProductImage = (imageId) => `https://www.ebag.bg/products/images/${imageId}/800`
const productBananasImgStatic = `${EBAG_BASE}product-bananas.png`
const productEggsImgStatic = `${EBAG_BASE}product-eggs.png`

/** 20 demo SKUs: titles aligned to eBag CDN shots where verified (President butter, Eliaz bread); bananas/eggs use local assets. */
const SHOP_PRODUCTS = [
  {
    id: 'p1',
    category: 'Млечни и яйца',
    name: 'Краве масло President 82% безсолно 250 г',
    priceEur: 7.92,
    image: ebagProductImage(105312),
    weightLabel: '250 г',
    expiryMeta: 'Годност до: 09/03/2027',
  },
  {
    id: 'p2',
    category: 'Млечни и яйца',
    name: 'Прясно мляко Верея 3,6% 1 л',
    priceEur: 2.49,
    image: ebagProductImage(175299),
    weightLabel: '1 л · 3,6%',
    expiryMeta: 'Годност до: 30/12/2026',
  },
  {
    id: 'p3',
    category: 'Млечни и яйца',
    name: 'Кисело мляко Верея Чудно 5% 680 г',
    priceEur: 1.69,
    image: ebagProductImage(175303),
    weightLabel: '680 г',
    expiryMeta: 'Годност до: 24/05/2026',
  },
  {
    id: 'p4',
    category: 'Млечни и яйца',
    name: 'Яйца М, 10 бр.',
    priceEur: 3.59,
    image: productEggsImgStatic,
    weightLabel: '10 бр.',
    expiryMeta: 'Годност до: 15/11/2026',
  },
  {
    id: 'p5',
    category: 'Млечни и яйца',
    name: 'Сирене бяло вакуум 400 г',
    priceEur: 4.59,
    image: ebagProductImage(191120),
    weightLabel: '400 г',
    expiryMeta: 'Годност до: 18/08/2026',
  },
  {
    id: 'p6',
    category: 'Млечни и яйца',
    name: 'Кашкавал вакуум 400 г',
    priceEur: 6.99,
    image: ebagProductImage(190826),
    weightLabel: '400 г',
    expiryMeta: 'Годност до: 02/01/2027',
  },
  {
    id: 'p7',
    category: 'Плодове и зеленчуци',
    name: 'Банани Еквадор 1 кг',
    priceEur: 2.19,
    image: productBananasImgStatic,
    weightLabel: '1 кг',
    expiryMeta: 'Годност до: 15/11/2026',
  },
  {
    id: 'p8',
    category: 'Плодове и зеленчуци',
    name: 'Портокали 1 кг',
    priceEur: 2.99,
    image: ebagProductImage(185720),
    weightLabel: '1 кг',
    expiryMeta: 'Годност до: 24/09/2026',
  },
  {
    id: 'p9',
    category: 'Плодове и зеленчуци',
    name: 'Домати cherry 250 г',
    priceEur: 3.19,
    image: ebagProductImage(190552),
    weightLabel: '250 г',
    expiryMeta: 'Годност до: 12/06/2026',
  },
  {
    id: 'p10',
    category: 'Плодове и зеленчуци',
    name: 'Домати розови 1 кг',
    priceEur: 2.39,
    image: ebagProductImage(190547),
    weightLabel: '1 кг',
    expiryMeta: 'Годност до: 07/05/2026',
  },
  {
    id: 'p11',
    category: 'Плодове и зеленчуци',
    name: 'Краставици български 500 г',
    priceEur: 1.99,
    image: ebagProductImage(189766),
    weightLabel: '500 г',
    expiryMeta: 'Годност до: 06/05/2026',
  },
  {
    id: 'p12',
    category: 'Хляб и хлебни',
    name: 'Хляб Елиаз типов нарязан 600 г',
    priceEur: 1.09,
    image: ebagProductImage(30288),
    weightLabel: '600 г',
    expiryMeta: 'Годност до: 18/08/2026',
  },
  {
    id: 'p13',
    category: 'Месо и риба',
    name: 'Пуешко филе КФМ слайс 120 г',
    priceEur: 6.29,
    image: ebagProductImage(97524),
    weightLabel: '120 г',
    expiryMeta: 'Годност до: 12/06/2026',
  },
  {
    id: 'p14',
    category: 'Месо и риба',
    name: 'Кайма смесена 500 г',
    priceEur: 5.49,
    image: ebagProductImage(96595),
    weightLabel: '500 г',
    expiryMeta: 'Годност до: 07/05/2026',
  },
  {
    id: 'p15',
    category: 'Бакалия',
    name: 'Ориз кръгъл 1 кг',
    priceEur: 2.29,
    image: ebagProductImage(194482),
    weightLabel: '1 кг',
    expiryMeta: 'Годност до: 31/12/2026',
  },
  {
    id: 'p16',
    category: 'Бакалия',
    name: 'Спагети 500 г',
    priceEur: 1.79,
    image: ebagProductImage(192678),
    weightLabel: '500 г',
    expiryMeta: 'Годност до: 30/12/2027',
  },
  {
    id: 'p17',
    category: 'Бакалия',
    name: 'Зехтин extra virgin 500 мл',
    priceEur: 12.99,
    image: ebagProductImage(188480),
    weightLabel: '500 мл',
    expiryMeta: 'Годност до: 02/01/2027',
  },
  {
    id: 'p18',
    category: 'Бакалия',
    name: 'Захар бяла 1 кг',
    priceEur: 2.09,
    image: ebagProductImage(185960),
    weightLabel: '1 кг',
    expiryMeta: 'Годност до: 31/10/2026',
  },
  {
    id: 'p19',
    category: 'Напитки',
    name: 'Минерална вода 6×1.5 л',
    priceEur: 4.49,
    image: ebagProductImage(191458),
    weightLabel: '6×1,5 л',
    expiryMeta: 'Годност до: 24/09/2026',
  },
  {
    id: 'p20',
    category: 'Сладко и солено',
    name: 'Шоколад млечен 100 г',
    priceEur: 1.89,
    image: ebagProductImage(194495),
    weightLabel: '100 г',
    expiryMeta: 'Годност до: 31/08/2026',
  },
]

const SHOP_BY_ID = new Map(SHOP_PRODUCTS.map((p) => [p.id, p]))

const LIST_CATEGORY_ORDER = [
  'Млечни и яйца',
  'Плодове и зеленчуци',
  'Хляб и хлебни',
  'Месо и риба',
  'Бакалия',
  'Напитки',
  'Сладко и солено',
]

function MagnifierSvg({ size = 16, color = '#020202' }) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" width={512} height={512} xmlns="http://www.w3.org/2000/svg" style={{ height: size, width: size, flexShrink: 0 }}>
      <path
        fill={color}
        d="M368 208a160 160 0 1 0 -320 0 160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"
      />
    </svg>
  )
}

function ModalSearchBar({ value, onChange, placeholder, id, ariaLabel }) {
  const hasQuery = String(value || '').trim().length > 0
  return (
    <div style={{ boxSizing: 'border-box', marginTop: '16px', position: 'relative', width: '100%' }}>
      <div style={{ boxSizing: 'border-box', height: '40px', position: 'relative', width: '100%' }}>
        <div
          className="paper-header-hit paper-header-hit--light paper-modal-search-hit"
          style={{
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: '2048px',
            boxSizing: 'border-box',
            display: 'flex',
            height: '100%',
            overflow: 'hidden',
            paddingBlock: '8px',
            paddingInline: '20px',
            paddingRight: '94px',
            width: '100%',
          }}
        >
          <input
            id={id}
            type="text"
            role="searchbox"
            enterKeyHint="search"
            autoComplete="off"
            className="paper-modal-search-input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            aria-label={ariaLabel}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              boxSizing: 'border-box',
              color: '#020202',
              flex: 1,
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '18px',
              minWidth: 0,
              outline: 'none',
              width: '100%',
            }}
          />
        </div>
        <div
          style={{
            alignItems: 'center',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            gap: '6px',
            justifyContent: 'flex-end',
            pointerEvents: 'none',
            position: 'absolute',
            right: '4px',
            top: '4px',
          }}
        >
          {hasQuery ? (
            <button
              type="button"
              className="paper-modal-search-clear"
              aria-label="Изчисти търсенето"
              onClick={() => onChange('')}
              style={{
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                border: 'none',
                borderRadius: '2048px',
                boxShadow: '#353535 0px 0px 0px 1px inset',
                boxSizing: 'border-box',
                color: '#020202',
                cursor: 'pointer',
                display: 'flex',
                flexShrink: 0,
                height: '32px',
                justifyContent: 'center',
                padding: 0,
                pointerEvents: 'auto',
                width: '32px',
              }}
            >
              <X size={16} color="#020202" strokeWidth={2} aria-hidden />
            </button>
          ) : null}
          <div
            className="paper-header-hit paper-header-hit--yellow"
            style={{
              alignItems: 'center',
              backgroundColor: '#F5BF47',
              borderRadius: '2048px',
              boxSizing: 'border-box',
              display: 'flex',
              flexShrink: 0,
              height: '32px',
              justifyContent: 'center',
              pointerEvents: 'none',
              width: '48px',
            }}
          >
            <MagnifierSvg size={16} color="#020202" />
          </div>
        </div>
      </div>
    </div>
  )
}

/** Same inset chips as empty list CTA; `justifyContent` e.g. center vs flex-start for filled list. */
function ListQuickActionChips({ justifyContent = 'center', marginTop = '4px', onFavorites, onBulk, onCatalog }) {
  const pill = {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    border: 'none',
    borderRadius: '2048px',
    boxShadow: '#353535 0px 0px 0px 1px inset',
    boxSizing: 'border-box',
    color: '#020202',
    display: 'flex',
    fontFamily: '"Inter", system-ui, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    gap: '8px',
    height: '40px',
    justifyContent: 'center',
    lineHeight: 'round(up, 136%, 1px)',
    paddingBlock: '8px',
    paddingInline: '20px',
  }
  return (
    <div
      style={{
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent,
        marginTop,
        width: '100%',
      }}
    >
      <button type="button" className="paper-btn-pill-inset" onClick={onFavorites} style={pill}>
        <Heart size={16} color="#020202" strokeWidth={2} aria-hidden style={{ flexShrink: 0 }} />
        Добави от любими
      </button>
      <button type="button" className="paper-btn-pill-inset" onClick={onBulk} style={pill}>
        <Pencil size={16} color="#020202" strokeWidth={2} aria-hidden style={{ flexShrink: 0 }} />
        Напиши какво ти трябва
      </button>
      <button type="button" className="paper-btn-pill-inset" onClick={onCatalog} style={pill}>
        <MagnifierSvg size={16} color="#020202" />
        Търси в Ebag
      </button>
    </div>
  )
}

/* eslint-disable */
export default function PaperDesign() {
  const [listSearchOpen, setListSearchOpen] = useState(false)
  const [favoritesOpen, setFavoritesOpen] = useState(false)
  const [ebagCatalogOpen, setEbagCatalogOpen] = useState(false)
  const [favoritesSearchQuery, setFavoritesSearchQuery] = useState('')
  const [catalogSearchQuery, setCatalogSearchQuery] = useState('')
  const [bulkListText, setBulkListText] = useState('')
  const [bulkSuggestionChips, setBulkSuggestionChips] = useState(() => [
    { label: 'краставици +', value: 'краставици' },
    { label: 'портокали +', value: 'портокали' },
    { label: 'ягоди +', value: 'ягоди' },
  ])
  const [bulkResultsOpen, setBulkResultsOpen] = useState(false)
  const [bulkResultsLines, setBulkResultsLines] = useState([])
  const [inviteOpen, setInviteOpen] = useState(false)
  const [inviteStep, setInviteStep] = useState<'form' | 'success'>('form')
  const [inviteName, setInviteName] = useState('')
  const [inviteEmail, setInviteEmail] = useState('')

  const inviteDemoUrl = `https://www.ebag.bg/lists/invite/${encodeURIComponent(inviteEmail.trim() || 'demo')}`

  const openInviteModal = () => {
    setInviteStep('form')
    setInviteName('')
    setInviteEmail('')
    setInviteOpen(true)
  }

  const closeInviteModal = () => {
    setInviteOpen(false)
    setInviteStep('form')
  }

  const submitInvite = () => {
    if (!inviteEmail.trim()) return
    setInviteStep('success')
  }

  const copyInviteLink = () => {
    void navigator.clipboard?.writeText(inviteDemoUrl).catch(() => {})
  }

  const [listName, setListName] = useState('За вкъщи')
  /** { productId, qty } merged by productId */
  const [listLines, setListLines] = useState([])
  /** Checkout cart in header — separate from shopping list */
  const [cartLines, setCartLines] = useState([])
  const [removeTargetId, setRemoveTargetId] = useState(null)
  const [moreMenuOpen, setMoreMenuOpen] = useState(false)
  const moreMenuWrapRef = useRef(null)
  const [renameOpen, setRenameOpen] = useState(false)
  const [renameDraft, setRenameDraft] = useState('')
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [membersOpen, setMembersOpen] = useState(false)
  const [members, setMembers] = useState(() => [
    {
      id: 'you',
      initials: 'VB',
      displayName: 'Velina Baeva (ти)',
      role: 'Собственик',
      bg: '#E4F6F6',
      isYou: true,
    },
    {
      id: 'peer',
      initials: 'ММ',
      displayName: 'Мартин Маринов',
      role: 'Участник',
      bg: '#F5BF47',
      isYou: false,
    },
  ])

  useEffect(() => {
    if (!moreMenuOpen) return
    const onDoc = (e) => {
      if (moreMenuWrapRef.current && !moreMenuWrapRef.current.contains(e.target)) {
        setMoreMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [moreMenuOpen])

  const BGN_PER_EUR = 1.95583
  const listItemCount = listLines.reduce((s, l) => s + l.qty, 0)
  const cartItemCount = cartLines.reduce((s, l) => s + l.qty, 0)
  const headerCartEur = cartLines.reduce((s, l) => {
    const pr = SHOP_BY_ID.get(l.productId)
    return s + (pr ? pr.priceEur * l.qty : 0)
  }, 0)
  const formatPriceEur = (eur) =>
    `${Number(eur).toLocaleString('bg-BG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
  const formatPriceLev = (eur) =>
    `${Number(eur * BGN_PER_EUR).toLocaleString('bg-BG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} лв.`

  const favoriteProducts = SHOP_PRODUCTS
  const oftenBoughtProducts = SHOP_PRODUCTS

  const addProductToList = (p) => {
    setListLines((prev) => {
      const i = prev.findIndex((x) => x.productId === p.id)
      if (i >= 0) {
        const next = [...prev]
        next[i] = { ...next[i], qty: next[i].qty + 1 }
        return next
      }
      return [...prev, { productId: p.id, qty: 1 }]
    })
  }

  const mergeListIntoCart = () => {
    setCartLines((prev) => {
      const map = new Map(prev.map((l) => [l.productId, l.qty]))
      for (const line of listLines) {
        map.set(line.productId, (map.get(line.productId) || 0) + line.qty)
      }
      return [...map.entries()].map(([productId, qty]) => ({ productId, qty }))
    })
  }

  const setLineQtyByProductId = (productId, nextQty) => {
    setListLines((prev) => {
      if (nextQty <= 0) return prev.filter((l) => l.productId !== productId)
      const i = prev.findIndex((l) => l.productId === productId)
      if (i < 0) return prev
      const next = [...prev]
      next[i] = { ...next[i], qty: nextQty }
      return next
    })
  }

  const removeCategoryFromList = (category) => {
    const ids = new Set(SHOP_PRODUCTS.filter((pr) => pr.category === category).map((pr) => pr.id))
    setListLines((prev) => prev.filter((l) => !ids.has(l.productId)))
  }

  const listGroupedByCategory = useMemo(() => {
    const m = new Map()
    for (const line of listLines) {
      const pr = SHOP_BY_ID.get(line.productId)
      if (!pr) continue
      const cat = pr.category
      if (!m.has(cat)) m.set(cat, [])
      m.get(cat).push({ ...line, product: pr })
    }
    const entries = [...m.entries()].sort((a, b) => {
      const ia = LIST_CATEGORY_ORDER.indexOf(a[0])
      const ib = LIST_CATEGORY_ORDER.indexOf(b[0])
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib)
    })
    return entries
  }, [listLines])

  const nameMatchesQuery = (name, query) => {
    const q = query.trim().toLocaleLowerCase('bg-BG')
    if (!q) return true
    return String(name).toLocaleLowerCase('bg-BG').includes(q)
  }

  const filteredFavorites = favoriteProducts.filter((p) => nameMatchesQuery(p.name, favoritesSearchQuery))
  const filteredCatalog = oftenBoughtProducts.filter((p) => nameMatchesQuery(p.name, catalogSearchQuery))

  const expiryForProductId = (id) => {
    const dates = ['24/09/2026', '15/11/2026', '02/01/2027', '18/08/2026', '30/12/2026']
    let h = 0
    for (let i = 0; i < id.length; i++) h = (h + id.charCodeAt(i) * (i + 1)) % 503
    return `Годно до: ${dates[h % dates.length]}`
  }

  const weightLabelFromProduct = (p) => {
    if (p.weightLabel) return p.weightLabel
    const n = p.name
    if (/10\s*бр/i.test(n)) return '10 бр.'
    if (/минерална вода/i.test(n) && /×/i.test(n)) {
      const m = n.match(/(\d+\s*×\s*[\d.,]+\s*л)/i)
      if (m) return m[1].replace('.', ',')
    }
    if (/\d+(?:[.,]\d+)?\s*%/.test(n) && /мляко|кисело/i.test(n)) {
      const pct = n.match(/(\d+(?:[.,]\d+)?)\s*%/i)
      return pct ? `1 л · ${pct[1].replace('.', ',')}%` : '1 л'
    }
    const g = n.match(/(\d+(?:[.,]\d+)?)\s*(кг|г|мл|л)\b/i)
    if (g) return `${g[1].replace('.', ',')} ${g[2]}`
    return '500 г'
  }

  const renderCatalogProductCard = (p) => {
    const weight = weightLabelFromProduct(p)
    const expiry = p.expiryMeta ?? expiryForProductId(p.id)
    const imgSrc = p.image ?? ebagProductImage(105312)
    const listQty = listLines.find((l) => l.productId === p.id)?.qty ?? 0
    const inList = listQty > 0
    return (
      <div
        key={p.id}
        className="paper-product-card"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E6E6E6',
          borderRadius: '14px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            boxSizing: 'border-box',
            display: 'flex',
            height: '168px',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '10px',
            position: 'relative',
            width: '100%',
          }}
        >
          <img
            src={imgSrc}
            alt=""
            loading="lazy"
            decoding="async"
            style={{
              boxSizing: 'border-box',
              height: 'auto',
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              width: 'auto',
            }}
          />
          {inList ? (
            <>
              <div
                aria-hidden
                style={{
                  background: 'linear-gradient(to top, rgba(2, 2, 2, 0.62) 0%, rgba(2, 2, 2, 0.28) 52%, transparent 100%)',
                  bottom: 0,
                  boxSizing: 'border-box',
                  height: '55%',
                  left: 0,
                  pointerEvents: 'none',
                  position: 'absolute',
                  right: 0,
                }}
              />
              <div
                style={{
                  bottom: '10px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  left: 0,
                  pointerEvents: 'none',
                  position: 'absolute',
                  right: 0,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '17px', fontWeight: 700, lineHeight: 1.2 }}>{listQty} бр.</div>
                <div style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.25, marginTop: '2px', opacity: 0.95 }}>в списъка</div>
              </div>
            </>
          ) : null}
        </div>
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            gap: '8px',
            padding: '12px 14px 14px',
            textAlign: 'left',
          }}
        >
          <span
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#FFFFFF',
              borderRadius: '2048px',
              boxShadow: 'inset 0 0 0 1px #CCCCCC',
              boxSizing: 'border-box',
              color: '#020202',
              display: 'inline-block',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              lineHeight: 'round(up, 136%, 1px)',
              paddingBlock: '4px',
              paddingInline: '10px',
            }}
          >
            {weight}
          </span>
          <div
            style={{
              boxSizing: 'border-box',
              color: '#020202',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '15px',
              fontWeight: 700,
              lineHeight: 1.35,
            }}
          >
            {p.name}
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              color: '#666666',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {expiry}
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '4px' }}>
            <span style={{ color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, lineHeight: 1.2 }}>
              {formatPriceEur(p.priceEur)}
            </span>
            <span style={{ color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: 700, lineHeight: 1.2 }}>
              {formatPriceLev(p.priceEur)}
            </span>
          </div>
          <div style={{ boxSizing: 'border-box', marginTop: 'auto', paddingTop: '12px', width: '100%' }}>
            {inList ? (
              <div
                style={{
                  alignItems: 'center',
                  backgroundColor: '#F5F0E8',
                  borderRadius: '12px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'space-between',
                  minWidth: 0,
                  paddingBlock: '6px',
                  paddingInline: '8px',
                  width: '100%',
                }}
              >
                  <button
                    type="button"
                    className="paper-tool-inset"
                    aria-label="Премахни от списъка"
                    onClick={() => setLineQtyByProductId(p.id, 0)}
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#FFFFFF',
                      border: 'none',
                      borderRadius: '2048px',
                      boxShadow: '#353535 0px 0px 0px 1px inset',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                      display: 'flex',
                      flexShrink: 0,
                      height: '34px',
                      justifyContent: 'center',
                      padding: 0,
                      width: '34px',
                    }}
                  >
                    <Trash2 size={16} color="#020202" strokeWidth={2} aria-hidden />
                  </button>
                  <div
                    style={{
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      color: '#020202',
                      display: 'flex',
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontSize: '14px',
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 600,
                      gap: '4px',
                      justifyContent: 'center',
                      minWidth: 0,
                    }}
                  >
                    <span>{listQty}</span>
                    <span style={{ color: '#676767', fontWeight: 500 }}>бр.</span>
                  </div>
                  <button
                    type="button"
                    aria-label="Добави още в списъка"
                    onClick={() => addProductToList(p)}
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#138484',
                      border: 'none',
                      borderRadius: '2048px',
                      boxSizing: 'border-box',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      display: 'flex',
                      flexShrink: 0,
                      height: '34px',
                      justifyContent: 'center',
                      padding: 0,
                      width: '34px',
                    }}
                  >
                    <Plus size={18} color="#FFFFFF" strokeWidth={2.5} aria-hidden />
                  </button>
              </div>
            ) : (
              <button
                type="button"
                className="paper-btn-pill-inset"
                onClick={() => addProductToList(p)}
                style={{
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  border: 'none',
                  borderRadius: '2048px',
                  boxShadow: '#353535 0px 0px 0px 1px inset',
                  boxSizing: 'border-box',
                  color: '#020202',
                  display: 'flex',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  gap: '8px',
                  height: '40px',
                  justifyContent: 'center',
                  lineHeight: 'round(up, 136%, 1px)',
                  paddingBlock: '8px',
                  paddingInline: '12px',
                  width: '100%',
                }}
              >
                <ListTodo size={16} color="#020202" strokeWidth={2} aria-hidden style={{ flexShrink: 0 }} />
                Добави в {listName}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  const appendBulkLine = (line: string) => {
    setBulkListText((prev) => {
      const next = prev ? `${prev}\n${line}` : line
      const exclude = next
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(Boolean)
        .map((l) => l.toLocaleLowerCase('bg-BG'))
      setBulkSuggestionChips(pickRandomBulkChips(exclude))
      return next
    })
  }

  const uniqShopProducts = SHOP_PRODUCTS

  const matchProductsForBulkLine = (line) => {
    const q = String(line).trim().toLocaleLowerCase('bg-BG')
    if (!q) return []
    const out = []
    const seen = new Set()
    const push = (arr) => {
      for (const p of arr) {
        if (!p || seen.has(p.id)) continue
        seen.add(p.id)
        out.push(p)
      }
    }
    push(uniqShopProducts.filter((p) => p.name.toLocaleLowerCase('bg-BG').includes(q)))
    if (out.length < 6) {
      for (const part of q.split(/\s+/).filter((w) => w.length >= 2)) {
        push(uniqShopProducts.filter((p) => p.name.toLocaleLowerCase('bg-BG').includes(part)))
        if (out.length >= 10) break
      }
    }
    if (out.length === 0) return [...uniqShopProducts].sort(() => Math.random() - 0.5).slice(0, 6)
    return out.slice(0, 12)
  }

  const scrollBulkCategoryRow = (idx, dir) => {
    const el = typeof document !== 'undefined' ? document.getElementById(`bulk-cat-scroll-${idx}`) : null
    if (el) el.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <>
<div style={{ backgroundColor: '#FFFFFF', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '24px', height: '1177px', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', paddingBlock: '16px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', paddingBlock: 0, paddingInline: 0, width: 'fit-content' }}>
        <div style={{ alignItems: 'flex-start', backgroundColor: '#138484', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '24px', height: '80px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1664px', paddingBlock: '20px', paddingInline: '28px', width: '1440px' }}>
          <div style={{ boxSizing: 'border-box', flexShrink: '0', WebkitTextDecorationsInEffect: 'underline' }}>
            <a href="https://www.ebag.bg/" className="paper-logo-link" style={{ display: 'inline-flex', lineHeight: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="40" fill="none" color="#020202" viewBox="0 0 87 40" style={{ height: '40px', verticalAlign: 'middle', width: '87px', WebkitTextDecorationsInEffect: 'none', overflow: 'clip' }}>
              <g fill="#FFFFFF" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }}>
                <path d="M3.424 13.732H.101C.035 14.352 0 14.974 0 15.583c0 9.44 7.737 17.12 17.249 17.12 7.541 0 14.295-4.976 16.498-12.125H30.4c-2.08 5.379-7.351 8.984-13.15 8.984-7.235 0-13.255-5.381-14.006-12.518l-.017-.172h30.712v-3.14h-3.515v-.335C30.423 6.01 24.367 0 16.924 0c-7.443 0-13.5 6.01-13.5 13.397v.335Zm3.167-.335c0-5.655 4.635-10.257 10.333-10.257S27.256 7.74 27.256 13.397v.335H6.591v-.335ZM36.582 13.732v11.367l.004.078h.002c.144 4.157 3.649 7.528 7.847 7.528s7.854-3.498 7.854-7.796c0-4.299-3.523-7.797-7.854-7.797a7.861 7.861 0 0 0-5.137 1.905v-5.285h-2.717Zm7.854 6.077c2.832 0 5.137 2.287 5.137 5.1 0 2.811-2.305 5.098-5.137 5.098-2.833 0-5.138-2.287-5.138-5.099 0-2.811 2.304-5.1 5.138-5.1ZM61.417 32.705a7.864 7.864 0 0 0 5.137-1.905v1.901h2.715v-7.4l-.006-.057c.005-.11.006-.223.006-.335 0-4.3-3.522-7.796-7.852-7.796s-7.854 3.497-7.854 7.796c0 4.3 3.523 7.796 7.854 7.796Zm0-12.896c2.832 0 5.137 2.288 5.137 5.1s-2.305 5.099-5.137 5.099c-2.832 0-5.139-2.288-5.139-5.1 0-2.81 2.306-5.099 5.139-5.099ZM70.843 24.908c0 4.3 3.523 7.796 7.854 7.796 1.892 0 3.709-.674 5.137-1.904v1.404c0 2.811-2.304 5.098-5.137 5.098-2.27 0-4.298-1.513-4.932-3.68l-.017-.056h-2.784l.018.092C71.684 37.333 74.928 40 78.697 40c4.15 0 7.577-3.2 7.837-7.299h.017v-7.4l-.007-.057c.005-.11.007-.223.007-.335 0-4.3-3.523-7.797-7.854-7.797-4.33 0-7.854 3.498-7.854 7.797Zm7.854-5.1c2.834 0 5.137 2.288 5.137 5.1s-2.304 5.1-5.137 5.1c-2.834 0-5.139-2.288-5.139-5.1 0-2.811 2.305-5.1 5.139-5.1Z" color="#020202" fill="#FFFFFF" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
              </g>
            </svg>
            </a>
          </div>
          <div className="paper-header-hit paper-header-hit--dark" style={{ alignItems: 'center', backgroundColor: '#0F6262', borderRadius: '80px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', height: '40px', justifyContent: 'space-between', paddingInline: '16px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
              <svg viewBox="0 0 448 512" aria-hidden="true" color="#FFFFFF" width="448" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                <path fill="#FFFFFF" d="M0 88C0 74.7 10.7 64 24 64l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 112C10.7 112 0 101.3 0 88zM0 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24zM448 424c0 13.3-10.7 24-24 24L24 448c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0c13.3 0 24 10.7 24 24z" color="#FFFFFF" style={{ caretColor: '#fff', columnRuleColor: '#fff', fontSize: '16px', outlineColor: '#fff', textAlign: 'center', textDecorationColor: '#fff', textEmphasisColor: '#fff', transformOrigin: '0px 0px', WebkitTextFillColor: '#fff', WebkitTextStrokeColor: '#fff' }} />
              </svg>
              <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)', textAlign: 'center' }}>
                Категории
              </div>
            </div>
            <div style={{ boxSizing: 'border-box' }}>
              <svg viewBox="0 0 448 512" aria-hidden="true" color="#FFFFFF" width="448" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', height: '20px', verticalAlign: '-2px', width: '20px' }}>
                <path fill="#FFFFFF" d="M207.5 409c9.4 9.4 24.6 9.4 33.9 0l200-200c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-183 183-183-183c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l200 200z" color="#FFFFFF" style={{ caretColor: '#fff', columnRuleColor: '#fff', fontSize: '16px', outlineColor: '#fff', textAlign: 'center', textDecorationColor: '#fff', textEmphasisColor: '#fff', transformOrigin: '0px 0px', WebkitTextFillColor: '#fff', WebkitTextStrokeColor: '#fff' }} />
              </svg>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', gap: '8px', height: '40px', position: 'relative', width: '100%' }}>
            <div style={{ alignItems: 'start', alignSelf: 'stretch', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', gap: 0, paddingBlock: 0, paddingInline: 0 }}>
              <div className="paper-header-hit paper-header-hit--light" style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', height: '100%', overflow: 'clip', paddingBlock: '8px', paddingInline: '24px', width: '100%' }}>
                <div style={{ boxSizing: 'border-box', height: 'fit-content', overflow: 'clip', whiteSpaceCollapse: 'preserve', width: '100%' }}>
                  <div style={{ boxSizing: 'border-box', color: '#9CA3AF', display: '-webkit-box', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '18px', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: '1' }}>
                    Намери всичко в eBag
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '6px', justifyContent: 'center', position: 'absolute', right: '4px', top: '4px' }}>
              <div className="paper-header-hit paper-header-hit--yellow" style={{ alignItems: 'center', backgroundColor: '#F5BF47', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '32px', justifyContent: 'center', width: '48px' }}>
                <svg viewBox="0 0 512 512" aria-hidden="true" color="#020202" width="512" height="512" xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', verticalAlign: '-1.75px', width: '16px', flexShrink: '0' }}>
                  <path fill="#020202" d="M368 208a160 160 0 1 0 -320 0 160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '14px', fontWeight: '600', outlineColor: '#020202', textAlign: 'center', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                </svg>
              </div>
            </div>
          </div>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '8px' }}>
            <div
              className="paper-header-hit paper-header-hit--teal-ghost"
              style={{
                alignItems: 'center',
                borderRadius: '2048px',
                boxSizing: 'border-box',
                display: 'flex',
                flexShrink: 0,
                height: '40px',
                justifyContent: 'center',
                paddingInline: '8px',
                position: 'relative',
                width: '40px',
              }}
            >
              <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', height: '16px', justifyContent: 'center', position: 'relative' }}>
                <svg viewBox="0 0 512 512" aria-hidden="true" color="#FFFFFF" width="512" height="512" xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', verticalAlign: '-2px', width: '16px', flexShrink: '0' }}>
                  <path fill="#FFFFFF" d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" color="#FFFFFF" style={{ caretColor: '#fff', columnRuleColor: '#fff', fontSize: '16px', fontWeight: '500', outlineColor: '#fff', textDecorationColor: '#fff', textEmphasisColor: '#fff', transformOrigin: '0px 0px', WebkitTextFillColor: '#fff', WebkitTextStrokeColor: '#fff' }} />
                </svg>
              </div>
            </div>
            <button
              type="button"
              className="paper-header-hit paper-header-hit--teal-ghost"
              aria-label="Списъци за пазар"
              style={{
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '2048px',
                boxSizing: 'border-box',
                cursor: 'pointer',
                display: 'flex',
                flexShrink: 0,
                height: '40px',
                justifyContent: 'center',
                padding: 0,
                position: 'relative',
                width: '40px',
              }}
            >
              <ListTodo size={18} color="#FFFFFF" strokeWidth={2} aria-hidden style={{ flexShrink: 0 }} />
            </button>
          </div>
          <div className="paper-header-hit paper-header-hit--teal-ghost" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', justifyContent: 'center', paddingInline: '8px', position: 'relative', width: '40px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '16px', justifyContent: 'center', position: 'relative', width: '16px' }}>
              <svg viewBox="0 0 448 512" aria-hidden="true" color="#FFFFFF" width="448" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', verticalAlign: '-2px', width: '16px', flexShrink: '0' }}>
                <path fill="#FFFFFF" d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z" color="#FFFFFF" style={{ caretColor: '#fff', columnRuleColor: '#fff', fontSize: '16px', fontWeight: '500', outlineColor: '#fff', textDecorationColor: '#fff', textEmphasisColor: '#fff', transformOrigin: '0px 0px', WebkitTextFillColor: '#fff', WebkitTextStrokeColor: '#fff' }} />
              </svg>
            </div>
          </div>
          <div className="paper-header-hit paper-header-hit--teal-ghost" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', paddingInline: '12px', position: 'relative' }}>
            <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
              <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '10px', lineHeight: 'round(up, 124%, 1px)', textAlign: 'center', textTransform: 'uppercase' }}>
                Първи свободен час
              </div>
              <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, lineHeight: 'round(up, 124%, 1px)', textAlign: 'center', textTransform: 'uppercase' }}>
                Днес 14:00 - 15:00
              </div>
            </div>
          </div>
          <div className="paper-header-hit paper-header-hit--dark" style={{ alignItems: 'center', backgroundColor: '#0F6262', borderRadius: '80px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', justifyContent: 'center', paddingBlock: '12px', paddingInline: '12px', position: 'relative', width: '150px' }}>
            <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
              <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <svg viewBox="0 0 512 512" aria-hidden="true" color="#FFFFFF" width="512" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', verticalAlign: '-3px', width: '30px', flexShrink: '0' }}>
                    <path fill="#FFFFFF" d="M42.6 72.4c0-11.8 9.6-21.3 21.3-21.3l36.4 0c30.5 0 56.8 21.5 62.8 51.5l7.6 38.1 234.5 0c40.1 0 70.4 36.5 62.9 76l-19 121.1c-2.6 13.1-9.7 25-20.2 33.4c-10.4 8.4-23.3 12.8-36.7 12.6l-173.2 0c-13.3 .2-26.3-4.3-36.7-12.6c-10.4-8.4-17.6-20.2-20.2-33.4L132.5 167c-.1-.6-.2-1.1-.3-1.7l-10.9-54.4c-2-10-10.7-17.2-20.9-17.2l-36.4 0c-11.8 0-21.3-9.6-21.3-21.3zM179.3 183.3l24.9 146.1c.7 3.3 2.5 6.3 5.1 8.5s5.9 3.2 9.3 3.2l.4 0 173.6 0 .4 0c3.4 .1 6.6-1.1 9.3-3.2c2.6-2.1 4.4-5.1 5.1-8.4l18.9-120.9c2.5-13.1-7.6-25.3-21-25.3l-226 0zM187.5 453a26.7 26.7 0 1 1 53.3 0 26.7 26.7 0 1 1 -53.3 0zm166.1 0a26.7 26.7 0 1 1 53.3 0 26.7 26.7 0 1 1 -53.3 0z" color="#FFFFFF" style={{ caretColor: '#fff', columnRuleColor: '#fff', fontSize: '24px', outlineColor: '#fff', textDecorationColor: '#fff', textEmphasisColor: '#fff', transformOrigin: '0px 0px', WebkitTextFillColor: '#fff', WebkitTextStrokeColor: '#fff' }} />
                  </svg>
                  <div style={{ alignItems: 'center', backgroundColor: '#F5BF47', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', height: '15px', justifyContent: 'center', minWidth: '20px', paddingBlock: '4px', paddingInline: '4px', position: 'absolute', right: '-8px', top: '-6px' }}>
                    <div style={{ boxSizing: 'border-box', color: '#020202', display: 'flex', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '10px', fontWeight: 500, lineHeight: 'round(up, 100%, 1px)' }}>
                      {cartItemCount}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    alignItems: 'flex-start',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <div
                    style={{
                      boxSizing: 'border-box',
                      color: '#FFFFFF',
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontSize: '14px',
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 600,
                      lineHeight: 'round(up, 100%, 1px)',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {formatPriceEur(headerCartEur)}
                  </div>
                  <div
                    style={{
                      boxSizing: 'border-box',
                      color: '#FFFFFF',
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontSize: '14px',
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 600,
                      lineHeight: 'round(up, 100%, 1px)',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {formatPriceLev(headerCartEur)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 0, paddingBlock: 0, paddingInline: 0, width: 'fit-content' }}>
          <div style={{ alignItems: 'center', backgroundColor: '#FFFFFF', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '59px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1664px', paddingBlock: '8px', paddingInline: '28px', position: 'relative', width: '1440px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex' }}>
              <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', gap: '8px', height: '40px', justifyContent: 'space-between', overflow: 'clip' }}>
                <div style={{ boxSizing: 'border-box', minWidth: 'max-content' }}>
                  <div className="paper-subnav-pill" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', paddingBlock: '8px', paddingInline: '12px' }}>
                    <div style={{ aspectRatio: 'auto 24 / 24', backgroundImage: 'url(https://app.paper.design/file-assets/01KQS2731HNA3X6FK0K2H5TP97/1DRK5NM8D89ZQ1AB0KR9MZ05TP.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'round(100%, 0.5px) round(100%, 0.5px)', boxSizing: 'border-box', flexShrink: '0', height: '24px', maxWidth: '100%', overflow: 'clip', verticalAlign: 'middle', width: '24px' }} />
                    <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: 'round(up, 100%, 1px)' }}>
                      Нови
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box', minWidth: 'max-content' }}>
                  <div className="paper-subnav-pill" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', paddingBlock: '8px', paddingInline: '12px' }}>
                    <div style={{ aspectRatio: 'auto 24 / 24', backgroundImage: 'url(https://app.paper.design/file-assets/01KQS2731HNA3X6FK0K2H5TP97/3CD7DDFE756R1N8482BW04VQQB.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'round(100%, 0.5px) round(100%, 0.5px)', boxSizing: 'border-box', flexShrink: '0', height: '24px', maxWidth: '100%', overflow: 'clip', verticalAlign: 'middle', width: '24px' }} />
                    <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: 'round(up, 100%, 1px)' }}>
                      Оферти
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box', minWidth: 'max-content' }}>
                  <div className="paper-subnav-pill" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', paddingBlock: '8px', paddingInline: '12px' }}>
                    <div style={{ aspectRatio: 'auto 24 / 24', backgroundImage: 'url(https://app.paper.design/file-assets/01KQS2731HNA3X6FK0K2H5TP97/1VWS8V91YJ1QGB77K99GFPMHBR.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'round(100%, 0.5px) round(100%, 0.5px)', boxSizing: 'border-box', flexShrink: '0', height: '24px', maxWidth: '100%', overflow: 'clip', verticalAlign: 'middle', width: '24px' }} />
                    <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: 'round(up, 100%, 1px)' }}>
                      Лимитирани
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box', minWidth: 'max-content' }}>
                  <div className="paper-subnav-pill" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', paddingBlock: '8px', paddingInline: '12px' }}>
                    <div style={{ aspectRatio: 'auto 24 / 24', backgroundImage: 'url(https://app.paper.design/file-assets/01KQS2731HNA3X6FK0K2H5TP97/3SPGVJ47D8QCV93K5F39TR14YE.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'round(100%, 0.5px) round(100%, 0.5px)', boxSizing: 'border-box', flexShrink: '0', height: '24px', maxWidth: '100%', overflow: 'clip', verticalAlign: 'middle', width: '24px' }} />
                    <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: 'round(up, 100%, 1px)' }}>
                      Аптека BENU
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box', minWidth: 'max-content' }}>
                  <div className="paper-subnav-pill" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', paddingBlock: '8px', paddingInline: '12px' }}>
                    <div style={{ aspectRatio: 'auto 24 / 24', backgroundImage: 'url(https://app.paper.design/file-assets/01KQS2731HNA3X6FK0K2H5TP97/2V6RPJ1ZXA66T36BM5Q1BR52CC.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'round(100%, 0.5px) round(100%, 0.5px)', boxSizing: 'border-box', flexShrink: '0', height: '24px', maxWidth: '100%', overflow: 'clip', verticalAlign: 'middle', width: '24px' }} />
                    <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: 'round(up, 100%, 1px)' }}>
                      Шеф меню
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box', minWidth: 'max-content' }}>
                  <div className="paper-subnav-pill" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', paddingBlock: '8px', paddingInline: '12px' }}>
                    <div style={{ aspectRatio: 'auto 24 / 24', backgroundImage: 'url(https://app.paper.design/file-assets/01KQS2731HNA3X6FK0K2H5TP97/25MK9K4GD05ZZFV76B18WVH9ZP.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'round(100%, 0.5px) round(100%, 0.5px)', boxSizing: 'border-box', flexShrink: '0', height: '24px', maxWidth: '100%', overflow: 'clip', verticalAlign: 'middle', width: '24px' }} />
                    <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: 'round(up, 100%, 1px)' }}>
                      Рецепти
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box', minWidth: 'max-content' }}>
                  <div className="paper-subnav-pill" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', paddingBlock: '8px', paddingInline: '12px' }}>
                    <div style={{ aspectRatio: 'auto 24 / 24', backgroundImage: 'url(https://app.paper.design/file-assets/01KQS2731HNA3X6FK0K2H5TP97/4CZ69BYJ3N5TNN8RATRY8BTNKK.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'round(100%, 0.5px) round(100%, 0.5px)', boxSizing: 'border-box', flexShrink: '0', height: '24px', maxWidth: '100%', overflow: 'clip', verticalAlign: 'middle', width: '24px' }} />
                    <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: 'round(up, 100%, 1px)' }}>
                      Коктейл бар
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box', minWidth: 'max-content' }}>
                  <div className="paper-subnav-pill" style={{ alignItems: 'center', borderRadius: '2048px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '8px', height: '40px', paddingBlock: '8px', paddingInline: '12px' }}>
                    <div style={{ aspectRatio: 'auto 24 / 24', backgroundImage: 'url(https://app.paper.design/file-assets/01KQS2731HNA3X6FK0K2H5TP97/03S9RP0VWPNNEDQRH9Q03GX19M.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'round(100%, 0.5px) round(100%, 0.5px)', boxSizing: 'border-box', flexShrink: '0', height: '24px', maxWidth: '100%', overflow: 'clip', verticalAlign: 'middle', width: '24px' }} />
                    <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: 'round(up, 100%, 1px)' }}>
                      Подаръчен ваучер
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box', minWidth: 'max-content' }}>
                  <button
                    type="button"
                    className="paper-subnav-pill paper-subnav-pill--shopping-list"
                    style={{
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '2048px',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                      display: 'flex',
                      flexShrink: '0',
                      gap: '8px',
                      height: '40px',
                      paddingBlock: '8px',
                      paddingInline: '12px',
                    }}
                  >
                    <div
                      style={{
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexShrink: '0',
                        height: '24px',
                        justifyContent: 'center',
                        width: '24px',
                      }}
                    >
                      <ListTodo size={22} color="#DAA328" strokeWidth={2} aria-hidden style={{ flexShrink: 0 }} />
                    </div>
                    <div
                      style={{
                        boxSizing: 'border-box',
                        color: '#020202',
                        fontFamily: '"Inter", system-ui, sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: 'round(up, 100%, 1px)',
                      }}
                    >
                      Списъци за пазар
                    </div>
                  </button>
                </div>
              </div>
              <div style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '24px', justifyContent: 'center', marginLeft: '8px', visibility: 'hidden', width: '24px' }}>
                <svg viewBox="0 0 448 512" aria-hidden="true" color="#020202" width="448" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', verticalAlign: '-1.75px', width: '16px', flexShrink: '0' }}>
                  <path fill="#020202" d="M207.5 409c9.4 9.4 24.6 9.4 33.9 0l200-200c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-183 183-183-183c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '14px', fontWeight: '600', outlineColor: '#020202', textAlign: 'center', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1664px', paddingInline: '28px', width: '100%' }}>
        <div style={{ borderRightColor: '#CCCCCC', borderRightStyle: 'solid', borderRightWidth: '1px', boxSizing: 'border-box', display: 'flex', flexBasis: '408px', flexDirection: 'column', gap: '24px', minWidth: '280px', paddingRight: '28px', width: '100%' }}>
          <div style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 12px', paddingBlock: '16px', paddingInline: '16px', wordBreak: 'break-all' }}>
            <div style={{ alignItems: 'center', backgroundColor: '#E6E6E6', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '64px', justifyContent: 'center', width: '64px' }}>
              <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQS2731HNA3X6FK0K2H5TP97/1B7TCJSBV2HN827NKHGH3QNHE8.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'round(100%, 0.5px) round(100%, 0.5px)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', height: '100%', maxWidth: '100%', overflow: 'clip', verticalAlign: 'middle', width: '100%' }} />
            </div>
            <div style={{ boxSizing: 'border-box' }}>
              <div style={{ boxSizing: 'border-box', color: '#9A9A9A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '-0.28px', lineHeight: 'round(up, 136%, 1px)' }}>
                Здравей,
              </div>
              <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.4px', lineHeight: 'round(up, 124%, 1px)' }}>
                Velina
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box' }}>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 640 512" aria-hidden="true" color="#020202" width="640" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M0 8C0-5.3 10.7-16 24-16l45.3 0c27.1 0 50.3 19.4 55.1 46l.4 2 399.9 0c25.1 0 44 22.9 39.3 47.6L537.6 216.6c-8 41.4-44.2 71.4-86.4 71.4l-279.8 0 5.1 28.3c2.1 11.4 12 19.7 23.6 19.7L456 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-255.9 0c-34.8 0-64.6-24.9-70.8-59.1L77.2 38.6c-.7-3.8-4-6.6-7.9-6.6L24 32C10.7 32 0 21.3 0 8zM162.6 240l288.6 0c19.2 0 35.7-13.6 39.3-32.4L514.9 80 133.5 80 162.6 240zM208 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm224 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Поръчки
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row paper-sidebar-row--active" style={{ alignItems: 'center', backgroundColor: '#E4F6F6', borderRadius: '8px', boxShadow: '#138484 0px 0px 0px 2px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <ListChecks size={20} color="#020202" strokeWidth={2} aria-hidden style={{ flexShrink: '0', verticalAlign: '-2px' }} />
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Списъци за пазар
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 512 512" aria-hidden="true" color="#020202" width="512" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Любими
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 576 512" aria-hidden="true" color="#020202" width="576" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Оцени ни
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 448 512" aria-hidden="true" color="#020202" width="448" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M224 0c-13.3 0-24 10.7-24 24l0 9.7C118.6 45.3 56 115.4 56 200l0 14.5c0 37.7-10 74.7-29 107.3L5.1 359.2C1.8 365 0 371.5 0 378.2 0 399.1 16.9 416 37.8 416l372.4 0c20.9 0 37.8-16.9 37.8-37.8 0-6.7-1.8-13.3-5.1-19L421 321.7c-19-32.6-29-69.6-29-107.3l0-14.5c0-84.6-62.6-154.7-144-166.3l0-9.7c0-13.3-10.7-24-24-24zM392.4 368l-336.9 0 12.9-22.1C91.7 306 104 260.6 104 214.5l0-14.5c0-66.3 53.7-120 120-120s120 53.7 120 120l0 14.5c0 46.2 12.3 91.5 35.5 131.4L392.4 368zM156.1 464c9.9 28 36.6 48 67.9 48s58-20 67.9-48l-135.8 0z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Известия
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: '#F5F5F5', boxSizing: 'border-box', marginBottom: '24px', marginTop: '24px', paddingBlock: '8px', paddingInline: '16px', width: '100%' }}>
              <div style={{ boxSizing: 'border-box', color: '#676767', fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif', fontFeatureSettings: '"locl" 0', fontSize: '14px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                Моят профил
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 448 512" aria-hidden="true" color="#020202" width="448" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm128-80a128 128 0 1 1 -256 0 128 128 0 1 1 256 0zM193.5 304l61 0c9.7 0 17.5 7.8 17.5 17.5 0 4.2-1.5 8.2-4.2 11.4l-27.4 32 18.4 68.2 56.2-102.5C321 319.5 334.7 315 346.1 320.3 406.2 348.3 448 409.2 448 480l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8c0-43.4-21.6-81.8-54.7-105L277 499.5c-4.2 7.7-12.3 12.5-21 12.5l-64 0c-8.8 0-16.8-4.8-21-12.5L102.7 375C69.6 398.2 48 436.6 48 480l0 8c0 13.3-10.7 24-24 24S0 501.3 0 488l0-8c0-70.8 41.8-131.7 101.9-159.7 11.5-5.3 25.1-.9 31.2 10.2l55.9 102 18.5-67.8-27.2-31.8c-2.7-3.2-4.2-7.2-4.2-11.4 0-9.7 7.8-17.5 17.5-17.5z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Служители
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 384 512" aria-hidden="true" color="#020202" width="384" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M48 188.6C48 111.7 111.7 48 192 48s144 63.7 144 140.6c0 45.6-23.8 101.5-58.9 157.1-28.3 44.8-61 84.8-85.1 112.1-24.1-27.3-56.7-67.2-85.1-112.1-35.1-55.5-58.9-111.5-58.9-157.1zM192 0C86 0 0 84.4 0 188.6 0 307.9 120.2 450.9 170.4 505.4 182.2 518.2 201.8 518.2 213.6 505.4 263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0zM160 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Адреси
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 576 512" aria-hidden="true" color="#020202" width="576" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M48 128l0 44.9c28.7 16.6 48 47.6 48 83.1s-19.3 66.6-48 83.1L48 384c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-44.9c-28.7-16.6-48-47.6-48-83.1s19.3-66.6 48-83.1l0-44.9c0-8.8-7.2-16-16-16L64 112c-8.8 0-16 7.2-16 16zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 64c0 8.8-7.4 15.7-15.7 18.6-18.8 6.5-32.3 24.4-32.3 45.4s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6l0 64c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64l0-64C0 311.2 7.4 304.3 15.7 301.4 34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192l0-64zM400 304l0-96-224 0 0 96 224 0zM128 192c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-128z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Промо кодове
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 512 512" aria-hidden="true" color="#020202" width="512" height="512" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M357.8 48c-14.9 0-28.8 7.9-36.3 20.8L286.7 128 360 128c22.1 0 40-17.9 40-40s-17.9-40-40-40l-2.2 0zM225.3 128L190.5 68.8C182.9 55.9 169.1 48 154.2 48L152 48c-22.1 0-40 17.9-40 40s17.9 40 40 40l73.3 0zM256 85.5l24.1-41C296.3 16.9 325.9 0 357.8 0L360 0c48.6 0 88 39.4 88 88 0 14.4-3.5 28-9.6 40l9.6 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l9.6 0c-6.1-12-9.6-25.6-9.6-40 0-48.6 39.4-88 88-88l2.2 0c31.9 0 61.5 16.9 77.7 44.4l24.1 41zM152 176l-88 0c-8.8 0-16 7.2-16 16l0 128 416 0 0-128c0-8.8-7.2-16-16-16l-138.4 0 31 51.7c6.8 11.4 3.1 26.1-8.2 32.9s-26.1 3.1-32.9-8.2L256 180 212.6 252.3c-6.8 11.4-21.6 15.1-32.9 8.2s-15.1-21.6-8.2-32.9l31-51.7-50.4 0zM464 384l-416 0 0 32c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-32z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Ваучери
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 448 512" aria-hidden="true" color="#020202" width="448" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M335.1 16c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.7 10.8 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.8 42.8C72.9 26 92.3 16 112.9 16l222.1 0zM48 416c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-240-352 0 0 240zM260.7 239.9c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5L223.4 372.8c-4.2 5.7-10.7 9.3-17.8 9.8-7.1 .5-14-2.2-18.9-7.3l-35.9-37.2c-9.2-9.5-8.9-24.7 .6-33.9 9.5-9.2 24.7-9 33.9 .6l16.1 16.6 59.3-81.6zM112.9 64c-5.2 0-10 2.5-13 6.7l-40.9 57.3 141 0 0-64-87.1 0zM248 128l141 0-40.9-57.3c-3-4.2-7.9-6.7-13-6.7l-87.1 0 0 64z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Моите абонаменти
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
              <div style={{ boxSizing: 'border-box' }}>
                <div className="paper-sidebar-row" style={{ alignItems: 'center', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', gap: '0 8px', paddingBlock: '16px', paddingInline: '16px' }}>
                  <svg viewBox="0 0 512 512" aria-hidden="true" color="#020202" width="512" height="512" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', verticalAlign: '-2px', width: '20px', flexShrink: '0' }}>
                    <path fill="#020202" d="M80 400a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56c-10.2-32.5-40.5-56-76.3-56-44.2 0-80 35.8-80 80s35.8 80 80 80c35.8 0 66.1-23.5 76.3-56L488 392c13.3 0 24-10.7 24-24s-10.7-24-24-24l-331.7 0zM464 144a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM355.7 120L24 120c-13.3 0-24 10.7-24 24s10.7 24 24 24l331.7 0c10.2 32.5 40.5 56 76.3 56 44.2 0 80-35.8 80-80s-35.8-80-80-80c-35.8 0-66.1 23.5-76.3 56z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                  <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)' }}>
                    Настройки
                  </div>
                  <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', marginLeft: 'auto', verticalAlign: '-2px', width: '14px', flexShrink: '0' }}>
                    <path fill="#020202" d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '16px', fontWeight: '500', outlineColor: '#020202', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            <button
              type="button"
              className="paper-btn-pill-inset"
              style={{
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                border: 'none',
                borderRadius: '2048px',
                boxShadow: '#353535 0px 0px 0px 1px inset',
                boxSizing: 'border-box',
                display: 'flex',
                flexShrink: '0',
                height: '40px',
                justifyContent: 'center',
                paddingBlock: '8px',
                paddingInline: '24px',
                width: 'fit-content',
              }}
            >
              <span style={{ boxSizing: 'border-box', color: '#020202', display: 'flex', flexShrink: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: 'round(up, 136%, 1px)', textAlign: 'center', width: 'max-content' }}>
                Изход от профил
              </span>
            </button>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '96px', width: '100%' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '48px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px', width: '100%' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px', justifyContent: 'space-between', overflow: 'visible', position: 'relative', width: '100%' }}>
              <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ boxSizing: 'border-box', color: '#020202', fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif', fontFeatureSettings: '"locl" 0', fontSize: '28px', fontWeight: 600, letterSpacing: '-0.56px', lineHeight: 'round(up, 124%, 1px)' }}>
                  {listName} ({listItemCount})
                </div>
              </div>
              <div
                className="paper-toolbar-actions"
                style={{
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexShrink: 0,
                  gap: '8px',
                  justifyContent: 'flex-end',
                  marginLeft: 'auto',
                  overflow: 'visible',
                }}
              >
                <div
                  className="paper-tip"
                  data-paper-tip="Участници в списъка"
                  tabIndex={0}
                  style={{ alignItems: 'center', alignSelf: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '40px' }}
                >
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    {members
                      .filter((m) => m.isYou)
                      .map((m) => {
                        const hasPeer = members.some((x) => !x.isYou)
                        return (
                          <div
                            key={m.id}
                            onClick={hasPeer ? undefined : () => setMembersOpen(true)}
                            onKeyDown={
                              hasPeer
                                ? undefined
                                : (e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault()
                                      setMembersOpen(true)
                                    }
                                  }
                            }
                            role={hasPeer ? undefined : 'button'}
                            tabIndex={hasPeer ? undefined : 0}
                            style={{
                              alignItems: 'center',
                              backgroundColor: m.bg,
                              border: '2px solid #FFFFFF',
                              borderRadius: '2048px',
                              boxSizing: 'border-box',
                              color: '#020202',
                              cursor: hasPeer ? 'default' : 'pointer',
                              display: 'flex',
                              flexShrink: '0',
                              fontFamily: '"Inter", system-ui, sans-serif',
                              fontSize: '13px',
                              fontWeight: 600,
                              height: '40px',
                              justifyContent: 'center',
                              position: 'relative',
                              textShadow: '0 1px 0 rgba(255, 255, 255, 0.85)',
                              width: '40px',
                              zIndex: 1,
                            }}
                          >
                            {m.initials}
                          </div>
                        )
                      })}
                    {members
                      .filter((m) => !m.isYou)
                      .map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          className="paper-avatar-mm-btn"
                          aria-label="Участници в списъка"
                          onClick={() => setMembersOpen(true)}
                          style={{
                            alignItems: 'center',
                            backgroundColor: m.bg,
                            border: '2px solid #FFFFFF',
                            borderRadius: '2048px',
                            boxSizing: 'border-box',
                            color: '#020202',
                            cursor: 'pointer',
                            display: 'flex',
                            flexShrink: '0',
                            fontFamily: '"Inter", system-ui, sans-serif',
                            fontSize: '13px',
                            fontWeight: 600,
                            height: '40px',
                            justifyContent: 'center',
                            marginLeft: '-12px',
                            padding: 0,
                            position: 'relative',
                            textShadow: '0 1px 0 rgba(255, 255, 255, 0.75)',
                            width: '40px',
                            zIndex: 2,
                          }}
                        >
                          {m.initials}
                        </button>
                      ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="paper-tool-inset paper-tip"
                  data-paper-tip="Покани участници в списъка"
                  aria-label="Покани участници в списъка"
                  onClick={openInviteModal}
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    border: 'none',
                    borderRadius: '2048px',
                    boxShadow: '#353535 0px 0px 0px 1px inset',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexShrink: '0',
                    height: '40px',
                    justifyContent: 'center',
                    padding: 0,
                    width: '40px',
                  }}
                >
                  <UserPlus size={16} color="#020202" strokeWidth={2} aria-hidden style={{ flexShrink: '0' }} />
                </button>
                <button
                  type="button"
                  className="paper-btn-primary-teal paper-toolbar-cart-btn"
                  aria-label="Купи всичко"
                  disabled={listItemCount === 0}
                  onClick={mergeListIntoCart}
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#138484',
                    border: 'none',
                    borderRadius: '2048px',
                    boxSizing: 'border-box',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexShrink: 0,
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    height: '40px',
                    justifyContent: 'center',
                    lineHeight: 'round(up, 136%, 1px)',
                    paddingBlock: '0',
                    paddingInline: '18px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Купи всичко
                </button>
                <div ref={moreMenuWrapRef} style={{ flexShrink: 0, position: 'relative' }}>
                  <button
                    type="button"
                    className="paper-tool-inset"
                    aria-expanded={moreMenuOpen}
                    aria-haspopup="menu"
                    aria-label="Още действия"
                    onClick={() => setMoreMenuOpen((o) => !o)}
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#FFFFFF',
                      border: 'none',
                      borderRadius: '2048px',
                      boxShadow: '#353535 0px 0px 0px 1px inset',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexShrink: '0',
                      height: '40px',
                      justifyContent: 'center',
                      padding: 0,
                      width: '40px',
                    }}
                  >
                    <MoreHorizontal size={16} color="#020202" strokeWidth={2} aria-hidden style={{ flexShrink: '0' }} />
                  </button>
                  {moreMenuOpen ? (
                    <div
                      className="paper-dropdown"
                      role="menu"
                      onMouseDown={(e) => e.stopPropagation()}
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '12px',
                        boxShadow: '0 12px 32px rgba(2, 2, 2, 0.14)',
                        boxSizing: 'border-box',
                        minWidth: '240px',
                        paddingBlock: '6px',
                        paddingInline: '6px',
                        position: 'absolute',
                        right: 0,
                        top: 'calc(100% + 6px)',
                        zIndex: 1005,
                      }}
                    >
                      <button
                        type="button"
                        className="paper-dropdown-item"
                        role="menuitem"
                        onClick={() => {
                          setMoreMenuOpen(false)
                          setRenameDraft(listName)
                          setRenameOpen(true)
                        }}
                        style={{
                          alignItems: 'center',
                          background: 'none',
                          border: 'none',
                          borderRadius: '8px',
                          boxSizing: 'border-box',
                          color: '#020202',
                          cursor: 'pointer',
                          display: 'flex',
                          fontFamily: '"Inter", system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: 600,
                          gap: '10px',
                          justifyContent: 'flex-start',
                          paddingBlock: '10px',
                          paddingInline: '12px',
                          textAlign: 'left',
                          width: '100%',
                        }}
                      >
                        <Pencil size={18} color="#020202" strokeWidth={2} aria-hidden />
                        Преименувай списък
                      </button>
                      <button
                        type="button"
                        className="paper-dropdown-item"
                        role="menuitem"
                        onClick={() => {
                          setMoreMenuOpen(false)
                          setDeleteConfirmOpen(true)
                        }}
                        style={{
                          alignItems: 'center',
                          background: 'none',
                          border: 'none',
                          borderRadius: '8px',
                          boxSizing: 'border-box',
                          color: '#020202',
                          cursor: 'pointer',
                          display: 'flex',
                          fontFamily: '"Inter", system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: 600,
                          gap: '10px',
                          justifyContent: 'flex-start',
                          paddingBlock: '10px',
                          paddingInline: '12px',
                          textAlign: 'left',
                          width: '100%',
                        }}
                      >
                        <Trash2 size={18} color="#020202" strokeWidth={2} aria-hidden />
                        Изтрий списък
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
              <button
                type="button"
                className="paper-back-btn"
                aria-label="Назад"
                style={{
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  border: 'none',
                  borderRadius: 'calc(infinity * 1px)',
                  boxShadow: '#CCCCCC 0px 0px 0px 1px inset',
                  boxSizing: 'border-box',
                  display: 'flex',
                  height: '40px',
                  justifyContent: 'center',
                  left: '-64px',
                  padding: 0,
                  position: 'absolute',
                  width: '40px',
                }}
              >
                <svg viewBox="0 0 320 512" aria-hidden="true" color="#020202" width="320" height="512" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', verticalAlign: '-1.75px', width: '16px', flexShrink: '0' }}>
                  <path fill="#020202" d="M7.5 239c-9.4 9.4-9.4 24.6 0 33.9l200 200c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-183-183 183-183c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7.5 239z" color="#020202" style={{ caretColor: '#020202', columnRuleColor: '#020202', fontSize: '14px', fontWeight: '600', outlineColor: '#020202', textAlign: 'center', textDecorationColor: '#020202', textEmphasisColor: '#020202', transformOrigin: '0px 0px', WebkitTextFillColor: '#020202', WebkitTextStrokeColor: '#020202' }} />
                </svg>
              </button>
            </div>
            {listLines.length === 0 ? (
            <div
              style={{
                alignItems: 'center',
                backgroundColor: '#FFF8E8',
                borderRadius: '16px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                paddingBlock: '28px',
                paddingInline: '40px',
                width: '100%',
              }}
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  color: '#020202',
                  fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.25',
                  textAlign: 'center',
                }}
              >
                Списъкът е празен
              </div>
              <div
                style={{
                  boxSizing: 'border-box',
                  color: '#676767',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: 1.45,
                  maxWidth: '560px',
                  textAlign: 'center',
                }}
              >
                Добави продукти от &bdquo;Любими&rdquo;, търси по списък наведнъж като напишеш какво ти трябва или браузвай в
                целия каталог на eBag.
              </div>
              <ListQuickActionChips
                justifyContent="center"
                marginTop="4px"
                onFavorites={() => {
                  setFavoritesSearchQuery('')
                  setFavoritesOpen(true)
                }}
                onBulk={() => setListSearchOpen(true)}
                onCatalog={() => {
                  setCatalogSearchQuery('')
                  setEbagCatalogOpen(true)
                }}
              />
            </div>
            ) : (
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '28px', width: '100%' }}>
              <ListQuickActionChips
                justifyContent="flex-start"
                marginTop="0"
                onFavorites={() => {
                  setFavoritesSearchQuery('')
                  setFavoritesOpen(true)
                }}
                onBulk={() => setListSearchOpen(true)}
                onCatalog={() => {
                  setCatalogSearchQuery('')
                  setEbagCatalogOpen(true)
                }}
              />
              {listGroupedByCategory.map(([category, rows]) => (
                <div key={category} style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '0', width: '100%' }}>
                  <div
                    style={{
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      display: 'flex',
                      gap: '10px',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      paddingInline: '2px',
                    }}
                  >
                    <div style={{ alignItems: 'center', display: 'flex', gap: '8px', minWidth: 0 }}>
                      <span
                        style={{
                          color: '#020202',
                          fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                          fontSize: '18px',
                          fontWeight: 600,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.25,
                        }}
                      >
                        {category}
                      </span>
                      <ChevronRight size={18} color="#676767" strokeWidth={2} aria-hidden style={{ flexShrink: 0 }} />
                    </div>
                    <button
                      type="button"
                      className="paper-icon-btn"
                      aria-label={`Премахни всички от ${category}`}
                      onClick={() => removeCategoryFromList(category)}
                      style={{
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#676767',
                        cursor: 'pointer',
                        display: 'flex',
                        flexShrink: 0,
                        height: '36px',
                        justifyContent: 'center',
                        padding: 0,
                        width: '36px',
                      }}
                    >
                      <Trash2 size={18} color="#676767" strokeWidth={2} aria-hidden />
                    </button>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E6E6E6',
                      borderRadius: '14px',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                  >
                    {rows.map(({ product: pr, qty }, rowIdx) => {
                      const weight = weightLabelFromProduct(pr)
                      const expiry = pr.expiryMeta ?? expiryForProductId(pr.id).replace('Годно до:', 'Годност до:')
                      const lineEur = pr.priceEur * qty
                      return (
                        <div
                          key={pr.id}
                          style={{
                            alignItems: 'center',
                            borderTop: rowIdx > 0 ? '1px solid #EFEFEF' : 'none',
                            boxSizing: 'border-box',
                            display: 'flex',
                            gap: '14px',
                            minHeight: '88px',
                            paddingBlock: '12px',
                            paddingInline: '14px',
                            width: '100%',
                          }}
                        >
                          <div
                            style={{
                              alignItems: 'center',
                              alignSelf: 'stretch',
                              backgroundColor: '#FFFFFF',
                              border: '1px solid #E6E6E6',
                              borderRadius: '10px',
                              boxSizing: 'border-box',
                              display: 'flex',
                              flexShrink: 0,
                              height: '64px',
                              justifyContent: 'center',
                              overflow: 'hidden',
                              width: '64px',
                            }}
                          >
                            <img
                              src={pr.image}
                              alt=""
                              style={{ height: '100%', maxHeight: '56px', maxWidth: '56px', objectFit: 'contain', width: '100%' }}
                            />
                          </div>
                          <div style={{ boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', gap: '8px', minWidth: 0 }}>
                            <div
                              style={{
                                color: '#020202',
                                fontFamily: '"Inter", system-ui, sans-serif',
                                fontSize: '15px',
                                fontWeight: 700,
                                lineHeight: 1.35,
                              }}
                            >
                              {pr.name}
                            </div>
                            <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                              <span
                                style={{
                                  backgroundColor: '#FFFFFF',
                                  borderRadius: '2048px',
                                  boxShadow: 'inset 0 0 0 1px #CCCCCC',
                                  color: '#020202',
                                  fontFamily: '"Inter", system-ui, sans-serif',
                                  fontSize: '12px',
                                  fontWeight: 600,
                                  lineHeight: 'round(up, 136%, 1px)',
                                  paddingBlock: '4px',
                                  paddingInline: '10px',
                                }}
                              >
                                {weight}
                              </span>
                              <span
                                style={{
                                  alignItems: 'center',
                                  backgroundColor: '#FFFFFF',
                                  borderRadius: '2048px',
                                  boxShadow: 'inset 0 0 0 1px #CCCCCC',
                                  color: '#666666',
                                  display: 'inline-flex',
                                  fontFamily: '"Inter", system-ui, sans-serif',
                                  fontSize: '12px',
                                  fontWeight: 500,
                                  gap: '6px',
                                  lineHeight: 'round(up, 136%, 1px)',
                                  paddingBlock: '4px',
                                  paddingInline: '10px',
                                }}
                              >
                                <Thermometer size={14} color="#888888" strokeWidth={2} aria-hidden />
                                {expiry}
                              </span>
                            </div>
                          </div>
                          <div style={{ alignItems: 'center', display: 'flex', flexShrink: 0, gap: '8px' }}>
                            <button
                              type="button"
                              className="paper-tool-inset"
                              aria-label={qty <= 1 ? 'Премахни' : 'Намали количеството'}
                              onClick={() => setLineQtyByProductId(pr.id, qty - 1)}
                              style={{
                                alignItems: 'center',
                                backgroundColor: '#FFFFFF',
                                border: 'none',
                                borderRadius: '2048px',
                                boxShadow: '#353535 0px 0px 0px 1px inset',
                                display: 'flex',
                                height: '36px',
                                justifyContent: 'center',
                                padding: 0,
                                width: '36px',
                              }}
                            >
                              <Trash2 size={16} color="#020202" strokeWidth={2} aria-hidden />
                            </button>
                            <div
                              style={{
                                alignItems: 'center',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #CCCCCC',
                                borderRadius: '8px',
                                boxSizing: 'border-box',
                                color: '#020202',
                                display: 'flex',
                                fontFamily: '"Inter", system-ui, sans-serif',
                                fontSize: '14px',
                                fontWeight: 600,
                                gap: '4px',
                                height: '36px',
                                justifyContent: 'center',
                                minWidth: '72px',
                                paddingInline: '10px',
                              }}
                            >
                              <span style={{ fontVariantNumeric: 'tabular-nums' }}>{qty}</span>
                              <span style={{ color: '#676767', fontWeight: 500 }}>бр.</span>
                            </div>
                            <button
                              type="button"
                              aria-label="Увеличи количеството"
                              onClick={() => setLineQtyByProductId(pr.id, qty + 1)}
                              style={{
                                alignItems: 'center',
                                backgroundColor: '#138484',
                                border: 'none',
                                borderRadius: '2048px',
                                color: '#FFFFFF',
                                cursor: 'pointer',
                                display: 'flex',
                                height: '36px',
                                justifyContent: 'center',
                                padding: 0,
                                width: '36px',
                              }}
                            >
                              <Plus size={18} color="#FFFFFF" strokeWidth={2.5} aria-hidden />
                            </button>
                          </div>
                          <div
                            style={{
                              alignItems: 'flex-end',
                              boxSizing: 'border-box',
                              display: 'flex',
                              flexDirection: 'column',
                              flexShrink: 0,
                              gap: '2px',
                              minWidth: '72px',
                              textAlign: 'right',
                            }}
                          >
                            <span style={{ color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: 700 }}>
                              {formatPriceEur(lineEur)}
                            </span>
                            <span style={{ color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 700 }}>
                              {formatPriceLev(lineEur)}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="paper-icon-btn"
                            aria-label="Премахни реда"
                            onClick={() => setLineQtyByProductId(pr.id, 0)}
                            style={{
                              alignItems: 'center',
                              alignSelf: 'center',
                              background: 'none',
                              border: 'none',
                              borderRadius: '8px',
                              color: '#B0B0B0',
                              cursor: 'pointer',
                              display: 'flex',
                              flexShrink: 0,
                              height: '32px',
                              justifyContent: 'center',
                              padding: 0,
                              width: '32px',
                            }}
                          >
                            <X size={18} strokeWidth={2} aria-hidden />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
    {favoritesOpen ? (
      <div
        role="presentation"
        onClick={() => {
          setFavoritesSearchQuery('')
          setFavoritesOpen(false)
        }}
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(2, 2, 2, 0.45)',
          boxSizing: 'border-box',
          display: 'flex',
          fontFamily: '"Inter", system-ui, sans-serif',
          inset: 0,
          justifyContent: 'center',
          padding: '24px',
          position: 'fixed',
          zIndex: 1015,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="favorites-modal-title"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(2, 2, 2, 0.12)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '90vh',
            maxWidth: '720px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            zIndex: 1,
          }}
        >
          <div style={{ boxSizing: 'border-box', flexShrink: 0, paddingBlock: '20px', paddingInline: '24px', position: 'relative' }}>
            <button
              type="button"
              className="paper-icon-btn"
              aria-label="Затвори"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setFavoritesSearchQuery('')
                setFavoritesOpen(false)
              }}
              onMouseDown={(e) => e.stopPropagation()}
              style={{
                alignItems: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '2048px',
                color: '#020202',
                display: 'flex',
                height: '40px',
                justifyContent: 'center',
                padding: 0,
                position: 'absolute',
                right: '8px',
                top: '8px',
                width: '40px',
                zIndex: 2,
              }}
            >
              <X size={20} strokeWidth={2} color="#020202" aria-hidden />
            </button>
            <h2
              id="favorites-modal-title"
              style={{
                alignItems: 'center',
                boxSizing: 'border-box',
                color: '#020202',
                display: 'flex',
                fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                fontSize: '22px',
                fontWeight: 600,
                gap: '10px',
                letterSpacing: '-0.02em',
                lineHeight: '1.25',
                margin: '0 0 8px 0',
                paddingRight: '44px',
                paddingTop: '4px',
              }}
            >
              <Heart size={22} color="#020202" strokeWidth={2} aria-hidden style={{ flexShrink: 0 }} />
              Добави от любими
            </h2>
            <p
              style={{
                boxSizing: 'border-box',
                color: '#676767',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '1.45',
                margin: 0,
              }}
            >
              Избери продукти от любимите си и ги добави към този списък.
            </p>
            <ModalSearchBar
              id="favorites-modal-search"
              value={favoritesSearchQuery}
              onChange={setFavoritesSearchQuery}
              placeholder="Намери в любими"
              ariaLabel="Търси в любими"
            />
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              flex: 1,
              minHeight: 0,
              overflowY: 'auto',
              paddingBlock: '8px 24px',
              paddingInline: '24px',
            }}
          >
            {filteredFavorites.length === 0 ? (
              <div
                style={{
                  boxSizing: 'border-box',
                  color: '#676767',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  lineHeight: 1.45,
                  paddingBlock: '24px',
                  textAlign: 'center',
                }}
              >
                Няма продукти, съвпадащи с търсенето.
              </div>
            ) : (
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'grid',
                  gap: '14px',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(216px, 1fr))',
                  paddingBottom: '8px',
                }}
              >
                {filteredFavorites.map((p) => renderCatalogProductCard(p))}
              </div>
            )}
          </div>
        </div>
      </div>
    ) : null}
    {ebagCatalogOpen ? (
      <div
        role="presentation"
        onClick={() => {
          setCatalogSearchQuery('')
          setEbagCatalogOpen(false)
        }}
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(2, 2, 2, 0.45)',
          boxSizing: 'border-box',
          display: 'flex',
          fontFamily: '"Inter", system-ui, sans-serif',
          inset: 0,
          justifyContent: 'center',
          padding: '24px',
          position: 'fixed',
          zIndex: 1020,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ebag-catalog-title"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(2, 2, 2, 0.12)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '90vh',
            maxWidth: '720px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            zIndex: 1,
          }}
        >
          <div style={{ boxSizing: 'border-box', flexShrink: 0, paddingBlock: '20px', paddingInline: '24px', position: 'relative' }}>
            <button
              type="button"
              className="paper-icon-btn"
              aria-label="Затвори"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCatalogSearchQuery('')
                setEbagCatalogOpen(false)
              }}
              onMouseDown={(e) => e.stopPropagation()}
              style={{
                alignItems: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '2048px',
                color: '#020202',
                display: 'flex',
                height: '40px',
                justifyContent: 'center',
                padding: 0,
                position: 'absolute',
                right: '8px',
                top: '8px',
                width: '40px',
                zIndex: 2,
              }}
            >
              <X size={20} strokeWidth={2} color="#020202" aria-hidden />
            </button>
            <h2
              id="ebag-catalog-title"
              style={{
                alignItems: 'center',
                boxSizing: 'border-box',
                color: '#020202',
                display: 'flex',
                fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                fontSize: '22px',
                fontWeight: 600,
                gap: '10px',
                letterSpacing: '-0.02em',
                lineHeight: '1.25',
                margin: '0 0 8px 0',
                paddingRight: '44px',
                paddingTop: '4px',
              }}
            >
              <MagnifierSvg size={22} color="#020202" />
              Търси в Ebag
            </h2>
            <p
              style={{
                boxSizing: 'border-box',
                color: '#676767',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '1.45',
                margin: 0,
              }}
            >
              Търси в каталога на eBag и добавяй продукти директно към този списък.
            </p>
            <ModalSearchBar
              id="ebag-catalog-search"
              value={catalogSearchQuery}
              onChange={setCatalogSearchQuery}
              placeholder="Намери всичко в eBag"
              ariaLabel="Търси в каталога eBag"
            />
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              flex: 1,
              minHeight: 0,
              overflowY: 'auto',
              paddingBlock: '8px 24px',
              paddingInline: '24px',
            }}
          >
            {filteredCatalog.length === 0 ? (
              <div
                style={{
                  boxSizing: 'border-box',
                  color: '#676767',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  lineHeight: 1.45,
                  paddingBlock: '24px',
                  textAlign: 'center',
                }}
              >
                Няма намерени продукти за това търсене.
              </div>
            ) : (
              <>
                <div
                  style={{
                    boxSizing: 'border-box',
                    color: '#020202',
                    fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    marginBottom: '12px',
                  }}
                >
                  {catalogSearchQuery.trim() ? 'Резултати' : 'Често купувани'}
                </div>
                <div
                  style={{
                    boxSizing: 'border-box',
                    display: 'grid',
                    gap: '14px',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(216px, 1fr))',
                    paddingBottom: '8px',
                  }}
                >
                  {filteredCatalog.map((p) => renderCatalogProductCard(p))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    ) : null}
    {listSearchOpen ? (
      <div
        role="presentation"
        onClick={() => setListSearchOpen(false)}
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(2, 2, 2, 0.45)',
          boxSizing: 'border-box',
          display: 'flex',
          fontFamily: '"Inter", system-ui, sans-serif',
          inset: 0,
          justifyContent: 'center',
          padding: '24px',
          position: 'fixed',
          zIndex: 1000,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="bulk-search-title"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(2, 2, 2, 0.12)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '90vh',
            maxWidth: '560px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            zIndex: 1,
          }}
        >
          <div style={{ boxSizing: 'border-box', paddingBlock: '20px', paddingInline: '24px', position: 'relative' }}>
            <button
              type="button"
              className="paper-icon-btn"
              aria-label="Затвори"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setListSearchOpen(false)
              }}
              onMouseDown={(e) => e.stopPropagation()}
              style={{
                alignItems: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '2048px',
                color: '#020202',
                display: 'flex',
                height: '40px',
                justifyContent: 'center',
                padding: 0,
                position: 'absolute',
                right: '8px',
                top: '8px',
                width: '40px',
                zIndex: 2,
              }}
            >
              <X size={20} strokeWidth={2} color="#020202" aria-hidden />
            </button>
            <h2
              id="bulk-search-title"
              style={{
                boxSizing: 'border-box',
                color: '#020202',
                fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                fontSize: '22px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: '1.25',
                margin: '0 0 8px 0',
                paddingRight: '44px',
                paddingTop: '4px',
              }}
            >
              Търси всички артикули наведнъж
            </h2>
            <p
              style={{
                boxSizing: 'border-box',
                color: '#676767',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '1.45',
                margin: 0,
              }}
            >
              Въведи или постави своя списък за пазаруване, за да видиш резултатите за всеки артикул на едно място.
            </p>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingBlock: '0 8px', paddingInline: '24px' }}>
            <textarea
              className="paper-modal-textarea"
              value={bulkListText}
              onChange={(e) => setBulkListText(e.target.value)}
              placeholder={'Добави неща като:\nмляко 2% масленост\nбанани\nяйца'}
              rows={8}
              style={{
                backgroundColor: '#FAFAFA',
                border: '1px solid #CCCCCC',
                borderRadius: '12px',
                boxSizing: 'border-box',
                color: '#020202',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: 1.5,
                minHeight: '160px',
                outline: 'none',
                paddingBlock: '16px',
                paddingInline: '16px',
                resize: 'vertical',
                width: '100%',
              }}
            />
            <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {bulkSuggestionChips.map((t, chipIdx) => (
                <button
                  key={`${t.value}-${chipIdx}`}
                  type="button"
                  className="paper-chip-inset"
                  onClick={() => appendBulkLine(t.value)}
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    border: 'none',
                    borderRadius: '2048px',
                    boxShadow: '#353535 0px 0px 0px 1px inset',
                    boxSizing: 'border-box',
                    color: '#020202',
                    display: 'inline-flex',
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    gap: '4px',
                    height: '36px',
                    paddingInline: '14px',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid #E6E6E6',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'flex-end',
              paddingBlock: '16px',
              paddingInline: '24px',
            }}
          >
            <button
              type="button"
              className="paper-btn-primary-teal"
              onClick={() => {
                const lines = bulkListText
                  .split(/\r?\n/)
                  .map((l) => l.trim())
                  .filter(Boolean)
                if (!lines.length) return
                setBulkResultsLines(lines)
                setListSearchOpen(false)
                setBulkResultsOpen(true)
              }}
              style={{
                alignItems: 'center',
                backgroundColor: '#138484',
                border: 'none',
                borderRadius: '2048px',
                color: '#FFFFFF',
                display: 'inline-flex',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                height: '44px',
                justifyContent: 'center',
                minWidth: '200px',
                paddingInline: '24px',
              }}
            >
              Търси всички артикули
            </button>
          </div>
        </div>
      </div>
    ) : null}
    {bulkResultsOpen ? (
      <div
        role="presentation"
        onClick={() => setBulkResultsOpen(false)}
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(2, 2, 2, 0.45)',
          boxSizing: 'border-box',
          display: 'flex',
          fontFamily: '"Inter", system-ui, sans-serif',
          inset: 0,
          justifyContent: 'center',
          padding: '24px',
          position: 'fixed',
          zIndex: 1040,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="bulk-results-title"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(2, 2, 2, 0.12)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '90vh',
            maxWidth: '720px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            zIndex: 1,
          }}
        >
          <div style={{ boxSizing: 'border-box', flexShrink: 0, paddingBlock: '20px', paddingInline: '24px', position: 'relative' }}>
            <button
              type="button"
              className="paper-icon-btn"
              aria-label="Затвори"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setBulkResultsOpen(false)
              }}
              onMouseDown={(e) => e.stopPropagation()}
              style={{
                alignItems: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '2048px',
                color: '#020202',
                display: 'flex',
                height: '40px',
                justifyContent: 'center',
                padding: 0,
                position: 'absolute',
                right: '8px',
                top: '8px',
                width: '40px',
                zIndex: 2,
              }}
            >
              <X size={20} strokeWidth={2} color="#020202" aria-hidden />
            </button>
            <h2
              id="bulk-results-title"
              style={{
                boxSizing: 'border-box',
                color: '#020202',
                fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                fontSize: '22px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: '1.25',
                margin: '0 0 8px 0',
                paddingRight: '44px',
                paddingTop: '4px',
              }}
            >
              Резултати за твоя списък
            </h2>
            <p
              style={{
                boxSizing: 'border-box',
                color: '#676767',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '1.45',
                margin: 0,
              }}
            >
              За всеки ред от списъка виж подходящи продукти от каталога на eBag. Добавяй към списъка директно от картите.
            </p>
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              flex: 1,
              minHeight: 0,
              overflowY: 'auto',
              paddingBlock: '8px 24px',
              paddingInline: '24px',
            }}
          >
            {bulkResultsLines.length === 0 ? (
              <div
                style={{
                  boxSizing: 'border-box',
                  color: '#676767',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  lineHeight: 1.45,
                  paddingBlock: '24px',
                  textAlign: 'center',
                }}
              >
                Няма редове за показване. Върни се и добави поне един артикул в текстовото поле.
              </div>
            ) : (
              bulkResultsLines.map((line, idx) => (
                <div key={`bulk-cat-${idx}-${line}`} style={{ boxSizing: 'border-box', marginBottom: idx < bulkResultsLines.length - 1 ? '28px' : '8px' }}>
                  <div
                    style={{
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px', minWidth: 0 }}>
                      <span
                        style={{
                          boxSizing: 'border-box',
                          color: '#020202',
                          fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                          fontSize: '16px',
                          fontWeight: 600,
                          letterSpacing: '-0.01em',
                          lineHeight: 1.25,
                        }}
                      >
                        &ldquo;{line}&rdquo;
                      </span>
                      <Pencil size={16} color="#676767" strokeWidth={2} aria-hidden style={{ flexShrink: 0 }} />
                    </div>
                    <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setCatalogSearchQuery(line)
                          setBulkResultsOpen(false)
                          setEbagCatalogOpen(true)
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#138484',
                          cursor: 'pointer',
                          fontFamily: '"Inter", system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: 600,
                          padding: '4px 0',
                          textDecoration: 'underline',
                          textUnderlineOffset: '2px',
                        }}
                      >
                        Виж всички
                      </button>
                      <button
                        type="button"
                        className="paper-tool-inset"
                        aria-label="Прокрути наляво"
                        onClick={() => scrollBulkCategoryRow(idx, -1)}
                        style={{
                          alignItems: 'center',
                          backgroundColor: '#FFFFFF',
                          border: 'none',
                          borderRadius: '2048px',
                          boxShadow: '#353535 0px 0px 0px 1px inset',
                          boxSizing: 'border-box',
                          display: 'flex',
                          height: '36px',
                          justifyContent: 'center',
                          padding: 0,
                          width: '36px',
                        }}
                      >
                        <ChevronLeft size={18} color="#020202" strokeWidth={2} aria-hidden />
                      </button>
                      <button
                        type="button"
                        className="paper-tool-inset"
                        aria-label="Прокрути надясно"
                        onClick={() => scrollBulkCategoryRow(idx, 1)}
                        style={{
                          alignItems: 'center',
                          backgroundColor: '#FFFFFF',
                          border: 'none',
                          borderRadius: '2048px',
                          boxShadow: '#353535 0px 0px 0px 1px inset',
                          boxSizing: 'border-box',
                          display: 'flex',
                          height: '36px',
                          justifyContent: 'center',
                          padding: 0,
                          width: '36px',
                        }}
                      >
                        <ChevronRight size={18} color="#020202" strokeWidth={2} aria-hidden />
                      </button>
                    </div>
                  </div>
                  <div
                    id={`bulk-cat-scroll-${idx}`}
                    style={{
                      boxSizing: 'border-box',
                      display: 'flex',
                      gap: '14px',
                      overflowX: 'auto',
                      paddingBottom: '6px',
                      scrollBehavior: 'smooth',
                      scrollbarWidth: 'thin',
                      WebkitOverflowScrolling: 'touch',
                    }}
                  >
                    {matchProductsForBulkLine(line).map((p) => (
                      <div key={`${idx}-${p.id}`} style={{ boxSizing: 'border-box', flexShrink: 0, maxWidth: '280px', minWidth: '260px', width: '260px' }}>
                        {renderCatalogProductCard(p)}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    ) : null}
    {inviteOpen ? (
      <div
        role="presentation"
        onClick={closeInviteModal}
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(2, 2, 2, 0.45)',
          boxSizing: 'border-box',
          display: 'flex',
          fontFamily: '"Inter", system-ui, sans-serif',
          inset: 0,
          justifyContent: 'center',
          padding: '24px',
          position: 'fixed',
          zIndex: 1010,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={inviteStep === 'form' ? 'invite-modal-title' : 'invite-success-title'}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(2, 2, 2, 0.12)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '90vh',
            maxWidth: '480px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            zIndex: 1,
          }}
        >
          <div style={{ boxSizing: 'border-box', paddingBlock: '20px', paddingInline: '24px', position: 'relative' }}>
            <button
              type="button"
              className="paper-icon-btn"
              aria-label="Затвори"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                closeInviteModal()
              }}
              onMouseDown={(e) => e.stopPropagation()}
              style={{
                alignItems: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '2048px',
                color: '#020202',
                display: 'flex',
                height: '40px',
                justifyContent: 'center',
                padding: 0,
                position: 'absolute',
                right: '8px',
                top: '8px',
                width: '40px',
                zIndex: 2,
              }}
            >
              <X size={20} strokeWidth={2} color="#020202" aria-hidden />
            </button>
            {inviteStep === 'form' ? (
              <>
                <h2
                  id="invite-modal-title"
                  style={{
                    boxSizing: 'border-box',
                    color: '#020202',
                    fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.25',
                    margin: '0 0 16px 0',
                    paddingRight: '44px',
                    paddingTop: '4px',
                  }}
                >
                  Покани участник в списъка
                </h2>
                <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input
                    type="text"
                    autoComplete="given-name"
                    value={inviteName}
                    onChange={(e) => setInviteName(e.target.value)}
                    placeholder="Име"
                    className="paper-modal-textarea"
                    style={{
                      backgroundColor: '#FAFAFA',
                      border: '1px solid #CCCCCC',
                      borderRadius: '12px',
                      boxSizing: 'border-box',
                      color: '#020202',
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      height: '48px',
                      outline: 'none',
                      paddingBlock: '0',
                      paddingInline: '16px',
                      width: '100%',
                    }}
                  />
                  <div style={{ position: 'relative', width: '100%' }}>
                    <Mail
                      size={18}
                      color="#676767"
                      strokeWidth={2}
                      aria-hidden
                      style={{ left: '14px', pointerEvents: 'none', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
                    />
                    <input
                      type="email"
                      autoComplete="email"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      placeholder="Имейл"
                      className="paper-modal-textarea"
                      style={{
                        backgroundColor: '#FAFAFA',
                        border: '1px solid #CCCCCC',
                        borderRadius: '12px',
                        boxSizing: 'border-box',
                        color: '#020202',
                        fontFamily: '"Inter", system-ui, sans-serif',
                        fontSize: '15px',
                        fontWeight: 500,
                        height: '48px',
                        outline: 'none',
                        paddingBlock: '0',
                        paddingLeft: '44px',
                        paddingRight: '16px',
                        width: '100%',
                      }}
                    />
                  </div>
                </div>
                <p
                  style={{
                    boxSizing: 'border-box',
                    color: '#676767',
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    margin: '16px 0 0 0',
                    textAlign: 'center',
                  }}
                >
                  С продължаване приемаш{' '}
                  <a href="https://www.ebag.bg/" style={{ color: '#138484', fontWeight: 600 }}>
                    политиката за поверителност
                  </a>{' '}
                  и{' '}
                  <a href="https://www.ebag.bg/" style={{ color: '#138484', fontWeight: 600 }}>
                    условията за споделен списък
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <div
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#E4F6F6',
                    borderRadius: '16px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    height: '88px',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    width: '88px',
                  }}
                >
                  <Mail size={40} color="#138484" strokeWidth={1.75} aria-hidden />
                </div>
                <h2
                  id="invite-success-title"
                  style={{
                    boxSizing: 'border-box',
                    color: '#020202',
                    fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.25',
                    margin: '0 0 8px 0',
                    paddingRight: '44px',
                    textAlign: 'center',
                  }}
                >
                  Поканата е изпратена!
                </h2>
                <p
                  style={{
                    boxSizing: 'border-box',
                    color: '#676767',
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    margin: '0 0 16px 0',
                    textAlign: 'center',
                  }}
                >
                  Ще те уведомим, когато {inviteName.trim() || 'участникът'} се присъедини. Можеш да споделиш и връзката към поканата директно.
                </p>
                <div
                  style={{
                    alignItems: 'flex-start',
                    boxSizing: 'border-box',
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '8px',
                  }}
                >
                  <User size={20} color="#020202" strokeWidth={2} aria-hidden style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ color: '#020202', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: 700 }}>
                      {inviteEmail.trim() || '—'}
                    </div>
                    <div style={{ color: '#9A9A9A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '13px', fontWeight: 500, marginTop: '4px' }}>
                      Поканата е валидна още 7 дни
                    </div>
                    <button
                      type="button"
                      onClick={closeInviteModal}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#C62828',
                        cursor: 'pointer',
                        fontFamily: '"Inter", system-ui, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        marginTop: '8px',
                        padding: 0,
                        textDecoration: 'underline',
                      }}
                    >
                      Отмени
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: '#E4F6F6',
                    borderRadius: '12px',
                    boxSizing: 'border-box',
                    color: '#0f6262',
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    lineHeight: 1.4,
                    marginBottom: '20px',
                    paddingBlock: '12px',
                    paddingInline: '14px',
                    wordBreak: 'break-all',
                  }}
                >
                  {inviteDemoUrl}
                </div>
              </>
            )}
          </div>
          {inviteStep === 'form' ? (
            <div
              style={{
                borderTop: '1px solid #E6E6E6',
                boxSizing: 'border-box',
                paddingBlock: '16px',
                paddingInline: '24px',
              }}
            >
              <button
                type="button"
                className="paper-btn-primary-teal"
                disabled={!inviteEmail.trim()}
                onClick={submitInvite}
                style={{
                  alignItems: 'center',
                  backgroundColor: '#138484',
                  border: 'none',
                  borderRadius: '2048px',
                  color: '#FFFFFF',
                  display: 'flex',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  height: '48px',
                  justifyContent: 'center',
                  opacity: inviteEmail.trim() ? 1 : 0.45,
                  paddingInline: '24px',
                  width: '100%',
                }}
              >
                Изпрати покана
              </button>
            </div>
          ) : (
            <div
              style={{
                borderTop: '1px solid #E6E6E6',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingBlock: '16px',
                paddingInline: '24px',
              }}
            >
              <button
                type="button"
                className="paper-btn-primary-teal"
                onClick={() => {
                  setInviteStep('form')
                  setInviteName('')
                  setInviteEmail('')
                }}
                style={{
                  alignItems: 'center',
                  backgroundColor: '#138484',
                  border: 'none',
                  borderRadius: '2048px',
                  color: '#FFFFFF',
                  display: 'flex',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  height: '48px',
                  justifyContent: 'center',
                  paddingInline: '24px',
                  width: '100%',
                }}
              >
                Покани друг участник
              </button>
              <button
                type="button"
                className="paper-btn-pill-muted"
                onClick={copyInviteLink}
                style={{
                  alignItems: 'center',
                  backgroundColor: '#F5F5F5',
                  border: 'none',
                  borderRadius: '2048px',
                  boxShadow: '#353535 0px 0px 0px 1px inset',
                  boxSizing: 'border-box',
                  color: '#020202',
                  display: 'flex',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  height: '48px',
                  justifyContent: 'center',
                  paddingInline: '24px',
                  width: '100%',
                }}
              >
                Копирай връзка
              </button>
            </div>
          )}
        </div>
      </div>
    ) : null}
    {renameOpen ? (
      <div
        role="presentation"
        onClick={() => setRenameOpen(false)}
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(2, 2, 2, 0.45)',
          boxSizing: 'border-box',
          display: 'flex',
          fontFamily: '"Inter", system-ui, sans-serif',
          inset: 0,
          justifyContent: 'center',
          padding: '24px',
          position: 'fixed',
          zIndex: 1020,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="rename-list-title"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(2, 2, 2, 0.12)',
            boxSizing: 'border-box',
            maxWidth: '480px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
          }}
        >
          <div style={{ boxSizing: 'border-box', paddingBlock: '20px', paddingInline: '24px', position: 'relative' }}>
            <button
              type="button"
              className="paper-icon-btn"
              aria-label="Затвори"
              onClick={() => setRenameOpen(false)}
              style={{
                alignItems: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '2048px',
                color: '#020202',
                display: 'flex',
                height: '40px',
                justifyContent: 'center',
                padding: 0,
                position: 'absolute',
                right: '8px',
                top: '8px',
                width: '40px',
                zIndex: 2,
              }}
            >
              <X size={20} strokeWidth={2} color="#020202" aria-hidden />
            </button>
            <h2
              id="rename-list-title"
              style={{
                boxSizing: 'border-box',
                color: '#020202',
                fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                fontSize: '22px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: '1.25',
                margin: '0 0 16px 0',
                paddingRight: '44px',
              }}
            >
              Преименувай списък
            </h2>
            <input
              type="text"
              value={renameDraft}
              onChange={(e) => setRenameDraft(e.target.value)}
              className="paper-modal-textarea"
              style={{
                backgroundColor: '#FAFAFA',
                border: '1px solid #CCCCCC',
                borderRadius: '12px',
                boxSizing: 'border-box',
                color: '#020202',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                height: '48px',
                outline: 'none',
                paddingInline: '16px',
                width: '100%',
              }}
            />
          </div>
          <div
            style={{
              borderTop: '1px solid #E6E6E6',
              boxSizing: 'border-box',
              display: 'flex',
              gap: '10px',
              justifyContent: 'flex-end',
              paddingBlock: '16px',
              paddingInline: '24px',
            }}
          >
            <button
              type="button"
              className="paper-btn-pill-inset"
              onClick={() => setRenameOpen(false)}
              style={{
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                border: 'none',
                borderRadius: '2048px',
                boxShadow: '#353535 0px 0px 0px 1px inset',
                color: '#020202',
                cursor: 'pointer',
                display: 'inline-flex',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                height: '44px',
                justifyContent: 'center',
                paddingInline: '20px',
              }}
            >
              Отказ
            </button>
            <button
              type="button"
              className="paper-btn-primary-teal"
              onClick={() => {
                const next = renameDraft.trim().replace(/\s*\(\d+\)\s*$/, '').trim()
                if (next) setListName(next)
                setRenameOpen(false)
              }}
              style={{
                alignItems: 'center',
                backgroundColor: '#138484',
                border: 'none',
                borderRadius: '2048px',
                color: '#FFFFFF',
                display: 'inline-flex',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                height: '44px',
                justifyContent: 'center',
                paddingInline: '24px',
              }}
            >
              Запази
            </button>
          </div>
        </div>
      </div>
    ) : null}
    {deleteConfirmOpen ? (
      <div
        role="presentation"
        onClick={() => setDeleteConfirmOpen(false)}
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(2, 2, 2, 0.45)',
          boxSizing: 'border-box',
          display: 'flex',
          fontFamily: '"Inter", system-ui, sans-serif',
          inset: 0,
          justifyContent: 'center',
          padding: '24px',
          position: 'fixed',
          zIndex: 1020,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-list-title"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(2, 2, 2, 0.12)',
            boxSizing: 'border-box',
            maxWidth: '440px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
          }}
        >
          <div style={{ boxSizing: 'border-box', paddingBlock: '20px', paddingInline: '24px', position: 'relative' }}>
            <button
              type="button"
              className="paper-icon-btn"
              aria-label="Затвори"
              onClick={() => setDeleteConfirmOpen(false)}
              style={{
                alignItems: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '2048px',
                color: '#020202',
                display: 'flex',
                height: '40px',
                justifyContent: 'center',
                padding: 0,
                position: 'absolute',
                right: '8px',
                top: '8px',
                width: '40px',
                zIndex: 2,
              }}
            >
              <X size={20} strokeWidth={2} color="#020202" aria-hidden />
            </button>
            <h2
              id="delete-list-title"
              style={{
                boxSizing: 'border-box',
                color: '#020202',
                fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                fontSize: '22px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: '1.25',
                margin: '0 0 8px 0',
                paddingRight: '44px',
              }}
            >
              Изтрий списък?
            </h2>
            <p
              style={{
                boxSizing: 'border-box',
                color: '#676767',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              Сигурни ли сте, че искате да изтриете този списък? Това действие не може да бъде отменено.
            </p>
          </div>
          <div
            style={{
              borderTop: '1px solid #E6E6E6',
              boxSizing: 'border-box',
              display: 'flex',
              gap: '10px',
              justifyContent: 'flex-end',
              paddingBlock: '16px',
              paddingInline: '24px',
            }}
          >
            <button
              type="button"
              className="paper-btn-pill-inset"
              onClick={() => setDeleteConfirmOpen(false)}
              style={{
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                border: 'none',
                borderRadius: '2048px',
                boxShadow: '#353535 0px 0px 0px 1px inset',
                color: '#020202',
                display: 'inline-flex',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                height: '44px',
                justifyContent: 'center',
                paddingInline: '20px',
              }}
            >
              Отказ
            </button>
            <button
              type="button"
              className="paper-btn-danger"
              onClick={() => {
                setListName('За вкъщи')
                setListLines([])
                setMembers([
                  {
                    id: 'you',
                    initials: 'VB',
                    displayName: 'Velina Baeva (ти)',
                    role: 'Собственик',
                    bg: '#E4F6F6',
                    isYou: true,
                  },
                  {
                    id: 'peer',
                    initials: 'ММ',
                    displayName: 'Мартин Маринов',
                    role: 'Участник',
                    bg: '#F5BF47',
                    isYou: false,
                  },
                ])
                setDeleteConfirmOpen(false)
              }}
              style={{
                alignItems: 'center',
                backgroundColor: '#C62828',
                border: 'none',
                borderRadius: '2048px',
                color: '#FFFFFF',
                display: 'inline-flex',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                height: '44px',
                justifyContent: 'center',
                paddingInline: '24px',
              }}
            >
              Изтрий
            </button>
          </div>
        </div>
      </div>
    ) : null}
    {membersOpen ? (
      <div
        role="presentation"
        onClick={() => {
          setRemoveTargetId(null)
          setMembersOpen(false)
        }}
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(2, 2, 2, 0.45)',
          boxSizing: 'border-box',
          display: 'flex',
          fontFamily: '"Inter", system-ui, sans-serif',
          inset: 0,
          justifyContent: 'center',
          padding: '24px',
          position: 'fixed',
          zIndex: 1020,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={removeTargetId ? 'remove-member-title' : 'members-modal-title'}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(2, 2, 2, 0.12)',
            boxSizing: 'border-box',
            maxHeight: '90vh',
            maxWidth: '420px',
            overflow: 'auto',
            position: 'relative',
            width: '100%',
          }}
        >
          <div style={{ boxSizing: 'border-box', paddingBlock: '20px', paddingInline: '24px', position: 'relative' }}>
            <button
              type="button"
              className="paper-icon-btn"
              aria-label="Затвори"
              onClick={() => {
                setRemoveTargetId(null)
                setMembersOpen(false)
              }}
              style={{
                alignItems: 'center',
                background: 'none',
                border: 'none',
                borderRadius: '2048px',
                color: '#020202',
                display: 'flex',
                height: '40px',
                justifyContent: 'center',
                padding: 0,
                position: 'absolute',
                right: '8px',
                top: '8px',
                width: '40px',
                zIndex: 2,
              }}
            >
              <X size={20} strokeWidth={2} color="#020202" aria-hidden />
            </button>
            {removeTargetId ? (
              <>
                <h2
                  id="remove-member-title"
                  style={{
                    boxSizing: 'border-box',
                    color: '#020202',
                    fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.25',
                    margin: '0 0 12px 0',
                    paddingRight: '44px',
                  }}
                >
                  Сигурни ли сте, че искате да премахнете участника?
                </h2>
                <p
                  style={{
                    boxSizing: 'border-box',
                    color: '#676767',
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    margin: '0 0 8px 0',
                  }}
                >
                  <strong style={{ color: '#020202' }}>
                    {members.find((x) => x.id === removeTargetId)?.displayName ?? 'Участник'}
                  </strong>{' '}
                  ще загуби достъп до този споделен списък и няма да вижда продуктите, бележките и историята на промените. Няма да може да добавя или редактира артикули от името на списъка.
                </p>
                <p
                  style={{
                    boxSizing: 'border-box',
                    color: '#676767',
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    margin: '0 0 20px 0',
                  }}
                >
                  Можете отново да поканите същия човек по-късно с нова покана. Действието влиза в сила веднага след потвърждение.
                </p>
                <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    type="button"
                    className="paper-btn-danger"
                    onClick={() => {
                      setMembers((prev) => prev.filter((x) => x.id !== removeTargetId))
                      setRemoveTargetId(null)
                    }}
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#C62828',
                      border: 'none',
                      borderRadius: '2048px',
                      color: '#FFFFFF',
                      display: 'flex',
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      height: '48px',
                      justifyContent: 'center',
                      paddingInline: '24px',
                      width: '100%',
                    }}
                  >
                    Премахни участника
                  </button>
                  <button
                    type="button"
                    className="paper-btn-pill-inset"
                    onClick={() => setRemoveTargetId(null)}
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#FFFFFF',
                      border: 'none',
                      borderRadius: '2048px',
                      boxShadow: '#353535 0px 0px 0px 1px inset',
                      color: '#020202',
                      display: 'flex',
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      height: '48px',
                      justifyContent: 'center',
                      paddingInline: '24px',
                      width: '100%',
                    }}
                  >
                    Отказ
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2
                  id="members-modal-title"
                  style={{
                    boxSizing: 'border-box',
                    color: '#020202',
                    fontFamily: '"Montserrat-SemiBold", "Montserrat", system-ui, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.25',
                    margin: '0 0 20px 0',
                    paddingRight: '44px',
                  }}
                >
                  Участници
                </h2>
                <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {members.map((m) => (
                    <div
                      key={m.id}
                      style={{
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        display: 'flex',
                        gap: '12px',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ alignItems: 'center', display: 'flex', flex: 1, gap: '12px', minWidth: 0 }}>
                        <div
                          style={{
                            alignItems: 'center',
                            backgroundColor: m.bg,
                            borderRadius: '2048px',
                            color: '#020202',
                            display: 'flex',
                            flexShrink: 0,
                            fontFamily: '"Inter", system-ui, sans-serif',
                            fontSize: '14px',
                            fontWeight: 600,
                            height: '44px',
                            justifyContent: 'center',
                            width: '44px',
                          }}
                        >
                          {m.initials}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              color: '#020202',
                              fontFamily: '"Inter", system-ui, sans-serif',
                              fontSize: '16px',
                              fontWeight: 700,
                              lineHeight: 1.3,
                            }}
                          >
                            {m.displayName}
                          </div>
                          <div
                            style={{
                              color: '#9A9A9A',
                              fontFamily: '"Inter", system-ui, sans-serif',
                              fontSize: '13px',
                              fontWeight: 500,
                              marginTop: '2px',
                            }}
                          >
                            {m.role}
                          </div>
                        </div>
                      </div>
                      {!m.isYou ? (
                        <button
                          type="button"
                          className="paper-link-remove"
                          onClick={() => setRemoveTargetId(m.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#C62828',
                            cursor: 'pointer',
                            flexShrink: 0,
                            fontFamily: '"Inter", system-ui, sans-serif',
                            fontSize: '13px',
                            fontWeight: 600,
                            padding: '4px 0',
                            textDecoration: 'underline',
                          }}
                        >
                          Премахни
                        </button>
                      ) : (
                        <span style={{ flexShrink: 0, width: '72px' }} />
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    ) : null}
    </>
  );
}

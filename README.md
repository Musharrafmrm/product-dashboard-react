
# E-Commerce Product Dashboard

A complete React-based product management dashboard with full CRUD functionality, real-time search, filtering capabilities, and performance optimizations.

## 🚀 Features

### Core Functionality
- **Product Management**: Add, edit, and delete products with comprehensive form validation
- **Real-time Search**: Debounced search across product names and descriptions (300ms delay)
- **Advanced Filtering**: Filter by category, stock status, and price range
- **Responsive Design**: Mobile-first design with CSS Grid and Flexbox
- **LocalStorage Integration**: Persistent data storage with custom hooks

### User Experience
- **Loading States**: Skeleton UI components during data loading
- **Confirmation Dialogs**: Delete confirmations to prevent accidental actions
- **Accessible Design**: ARIA labels, keyboard navigation, and screen reader support
- **Image Handling**: Lazy loading with fallback placeholders
- **Performance Optimized**: Memoized components and optimized re-renders

### Technical Features
- **TypeScript**: Full type safety with custom interfaces
- **Custom Hooks**: Reusable logic for products, filters, localStorage, and debouncing
- **Modern React**: Functional components with hooks (useState, useEffect, useMemo, useCallback)
- **Shadcn/UI**: Professional UI components with Tailwind CSS
- **Form Validation**: Comprehensive validation with user-friendly error messages

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ProductCard.tsx   # Individual product display
│   ├── AddProductForm.tsx # Product creation/editing form
│   ├── ProductFilters.tsx # Filtering interface
│   └── LoadingGrid.tsx   # Skeleton loading state
├── hooks/               # Custom React hooks
│   ├── useProducts.ts   # Product CRUD operations
│   ├── useProductFilters.ts # Filtering logic
│   ├── useLocalStorage.ts # LocalStorage management
│   └── useDebounce.ts   # Debounced search
├── pages/               # Main application pages
│   └── Index.tsx        # Product dashboard page
├── types/               # TypeScript type definitions
│   └── Product.ts       # Product interfaces
├── utils/               # Helper functions
│   ├── formatters.ts    # Price and date formatting
│   ├── validation.ts    # Form validation logic
│   └── dummyData.ts     # Sample data generation
└── App.tsx             # Main application component
```

## 🛠️ Technology Stack

- **React 18** - Modern React with functional components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality, accessible UI components
- **Lucide React** - Beautiful, customizable icons
- **React Router** - Client-side routing
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests (when implemented)

## 📋 Usage Guide

### Adding a Product
1. Click the "Add Product" button in the header
2. Fill in the required fields (name, description, price, category, stock)
3. Optionally add an image URL
4. Toggle the stock status
5. Click "Add Product" to save

### Editing a Product
1. Click the "Edit" button on any product card
2. Modify the desired fields in the form
3. Click "Update Product" to save changes

### Deleting a Product
1. Click the trash icon on any product card
2. Confirm the deletion in the dialog

### Searching and Filtering
- **Search**: Type in the search bar to find products by name or description
- **Category Filter**: Select a category from the dropdown
- **Stock Filter**: Filter by in-stock or out-of-stock products
- **Price Range**: Use the slider to set minimum and maximum prices

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) for main actions
- **Secondary**: Gray tones for backgrounds and text
- **Success**: Green for positive actions
- **Danger**: Red for delete actions

### Typography
- **Headers**: Bold, clear hierarchy
- **Body Text**: Readable with proper contrast
- **UI Text**: Subtle for supporting information

### Components
- **Cards**: Subtle shadows with hover effects
- **Buttons**: Clear states (hover, active, disabled)
- **Forms**: Proper spacing and validation feedback
- **Loading**: Skeleton animations for perceived performance

## 🔧 Customization

### Adding New Categories
Edit the `categories` array in:
- `src/components/AddProductForm.tsx`
- `src/components/ProductFilters.tsx`

### Modifying Validation Rules
Update the validation logic in `src/utils/validation.ts`

### Styling Changes
Modify Tailwind classes or extend the design system in `tailwind.config.ts`

## 🧪 Testing Strategy

### Component Testing
- Product card rendering
- Form validation
- Filter functionality
- Search behavior

### Hook Testing
- LocalStorage operations
- Product CRUD operations
- Filter state management
- Debounce functionality

### Integration Testing
- Complete user workflows
- Data persistence
- Error handling

## 🚧 Future Enhancements

### Planned Features
- [ ] Bulk operations (select multiple products)
- [ ] Undo delete functionality
- [ ] URL-based filter state
- [ ] Image upload functionality
- [ ] Export/import capabilities
- [ ] Advanced sorting options
- [ ] Product categories management
- [ ] Stock alerts and notifications

### Performance Optimizations
- [ ] Virtual scrolling for large datasets
- [ ] Image optimization and caching
- [ ] Service worker for offline support
- [ ] Progressive loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Shadcn/UI for the beautiful component library
- Lucide React for the icon set
- Tailwind CSS for the utility-first styling approach
- React team for the amazing framework

### 🙋 Author

- M.R.M Musharraf
- React Developer Intern Candidate
- GitHub Profile - https://github.com/Musharrafmrm

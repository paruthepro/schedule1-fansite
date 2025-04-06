import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const MixerPage = () => {
  const [strains, setStrains] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedStrain, setSelectedStrain] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Fetch strains + items on load
    axios.get('/api/strains').then(res => setStrains(res.data));
    axios.get('/api/items').then(res => setItems(res.data));
  }, []);

  const handleMix = async () => {
    if (!selectedStrain || selectedItems.length === 0) return;
    const response = await axios.post('/api/mix', {
      strainId: selectedStrain.value,
      itemIds: selectedItems.map(i => i.value),
    });
    setResult(response.data);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Schedule I: Mixing Calculator</h1>

      <label>Choose a Strain:</label>
      <Select
        options={strains.map(strain => ({
          value: strain.id,
          label: `${strain.name} (${strain.type})`,
        }))}
        onChange={setSelectedStrain}
        placeholder="Select a strain..."
      />

      <label style={{ marginTop: '1rem' }}>Add Items:</label>
      <Select
        isMulti
        options={items.map(item => ({
          value: item.id,
          label: `${item.name} (${item.effect_modifiers})`,
        }))}
        onChange={setSelectedItems}
        placeholder="Select items to mix..."
      />

      <button
        style={{ marginTop: '1rem', width: '100%', padding: '10px' }}
        onClick={handleMix}
        disabled={!selectedStrain || selectedItems.length === 0}
      >
        Mix
      </button>

      {result && (
        <div style={{ marginTop: '2rem', background: '#111', color: '#fff', padding: '1rem', borderRadius: '8px' }}>
          <h2>🧪 Mix Results</h2>
          <p><strong>Effects:</strong> {result.final_effects}</p>
          <p><strong>Addictiveness:</strong> {result.final_addictiveness}/100</p>
          <p><strong>Danger Level:</strong> {result.final_danger}/100</p>
          <p><strong>Cost to Make:</strong> ${result.final_cost.toFixed(2)}</p>
          <p><strong>Sale Price:</strong> ${result.final_sale_price.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default MixerPage;

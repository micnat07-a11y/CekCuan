"use client";

import { useState, useMemo, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  AreaChart,
} from "recharts";
import { Calculator, TrendingUp, Target, AlertTriangle } from "lucide-react";

function formatRupiah(value: string): string {
  const num = value.replace(/\D/g, "");
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function parseRupiah(value: string): number {
  return Number(value.replace(/\./g, "")) || 0;
}

interface BepCalculatorProps {
  usageLimit: number;
  onCalculate: () => void;
  onShowUpgrade: () => void;
}

export function BepCalculator({
  usageLimit,
  onCalculate,
  onShowUpgrade,
}: BepCalculatorProps) {
  const [modalAwal, setModalAwal] = useState("10.000.000");
  const [hpp, setHpp] = useState("15.000");
  const [hargaJual, setHargaJual] = useState("25.000");
  const [hasCalculated, setHasCalculated] = useState(false);

  const results = useMemo(() => {
    const modal = parseRupiah(modalAwal);
    const cost = parseRupiah(hpp);
    const price = parseRupiah(hargaJual);

    if (modal <= 0 || cost <= 0 || price <= 0 || price <= cost) {
      return null;
    }

    const profitPerUnit = price - cost;
    const bepUnits = Math.ceil(modal / profitPerUnit);

    return {
      profitPerUnit,
      bepUnits,
      modal,
      cost,
      price,
    };
  }, [modalAwal, hpp, hargaJual]);

  const chartData = useMemo(() => {
    if (!results) return [];
    const maxUnits = Math.ceil(results.bepUnits * 1.5);
    const step = Math.max(1, Math.floor(maxUnits / 20));
    const data = [];

    for (let i = 0; i <= maxUnits; i += step) {
      const revenue = i * results.price;
      const totalCost = results.modal + i * results.cost;
      const profit = revenue - totalCost;
      data.push({
        units: i,
        pendapatan: revenue,
        totalBiaya: totalCost,
        profit,
      });
    }
    return data;
  }, [results]);

  const handleCalculate = useCallback(() => {
    if (usageLimit <= 0) {
      onShowUpgrade();
      return;
    }
    onCalculate();
    setHasCalculated(true);
  }, [usageLimit, onCalculate, onShowUpgrade]);

  const handleInputChange = (
    setter: (value: string) => void,
    value: string
  ) => {
    setter(formatRupiah(value));
  };

  return (
    <section id="simulator" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold uppercase italic text-foreground md:text-5xl">
            <span className="text-primary">Simulator</span> BEP
          </h2>
          <p className="mt-3 text-muted-foreground">
            Masukkan data bisnis Anda dan lihat hasilnya secara real-time
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Section */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-foreground">
                  Data Bisnis
                </h3>
                <p className="text-xs text-muted-foreground">
                  Isi form berikut untuk simulasi
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="modal-awal"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Modal Awal
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
                    Rp
                  </span>
                  <input
                    id="modal-awal"
                    type="text"
                    value={modalAwal}
                    onChange={(e) =>
                      handleInputChange(setModalAwal, e.target.value)
                    }
                    className="w-full rounded-lg border border-border bg-secondary py-3 pl-10 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="hpp"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Harga Pokok Produksi (HPP) / Unit
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
                    Rp
                  </span>
                  <input
                    id="hpp"
                    type="text"
                    value={hpp}
                    onChange={(e) =>
                      handleInputChange(setHpp, e.target.value)
                    }
                    className="w-full rounded-lg border border-border bg-secondary py-3 pl-10 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="harga-jual"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Harga Jual / Unit
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
                    Rp
                  </span>
                  <input
                    id="harga-jual"
                    type="text"
                    value={hargaJual}
                    onChange={(e) =>
                      handleInputChange(setHargaJual, e.target.value)
                    }
                    className="w-full rounded-lg border border-border bg-secondary py-3 pl-10 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="mt-2 w-full rounded-lg bg-primary py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
              >
                Hitung BEP
              </button>
            </div>

            {/* Quick Results */}
            {hasCalculated && results && (
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-secondary p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      Profit / Unit
                    </span>
                  </div>
                  <p className="font-display text-xl font-bold text-primary">
                    Rp {results.profitPerUnit.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-secondary p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      Target BEP
                    </span>
                  </div>
                  <p className="font-display text-xl font-bold text-foreground">
                    {results.bepUnits.toLocaleString("id-ID")}{" "}
                    <span className="text-sm font-sans font-normal text-muted-foreground">
                      unit
                    </span>
                  </p>
                </div>
              </div>
            )}

            {hasCalculated && !results && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
                <p className="text-sm text-destructive">
                  Harga jual harus lebih besar dari HPP. Periksa kembali input
                  Anda.
                </p>
              </div>
            )}
          </div>

          {/* Chart Section */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-foreground">
                  Visualisasi
                </h3>
                <p className="text-xs text-muted-foreground">
                  Grafik titik balik modal
                </p>
              </div>
            </div>

            {hasCalculated && results && chartData.length > 0 ? (
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient
                        id="profitGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="hsl(105, 50%, 45%)"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="hsl(105, 50%, 45%)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="costGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="hsl(0, 70%, 50%)"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="hsl(0, 70%, 50%)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(150, 8%, 18%)"
                    />
                    <XAxis
                      dataKey="units"
                      stroke="hsl(80, 5%, 55%)"
                      tick={{ fontSize: 11 }}
                      label={{
                        value: "Unit Terjual",
                        position: "insideBottom",
                        offset: -5,
                        style: {
                          fill: "hsl(80, 5%, 55%)",
                          fontSize: 11,
                        },
                      }}
                    />
                    <YAxis
                      stroke="hsl(80, 5%, 55%)"
                      tick={{ fontSize: 11 }}
                      tickFormatter={(v: number) =>
                        `${(v / 1000000).toFixed(1)}jt`
                      }
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(150, 10%, 9%)",
                        border: "1px solid hsl(150, 8%, 18%)",
                        borderRadius: "8px",
                        color: "hsl(80, 10%, 92%)",
                        fontSize: 12,
                      }}
                      formatter={(value: number, name: string) => [
                        `Rp ${value.toLocaleString("id-ID")}`,
                        name === "pendapatan" ? "Pendapatan" : "Total Biaya",
                      ]}
                      labelFormatter={(label: number) =>
                        `${label} unit terjual`
                      }
                    />
                    <ReferenceLine
                      x={results.bepUnits}
                      stroke="hsl(105, 50%, 45%)"
                      strokeDasharray="5 5"
                      label={{
                        value: "BEP",
                        position: "top",
                        style: {
                          fill: "hsl(105, 50%, 45%)",
                          fontWeight: 700,
                          fontSize: 12,
                        },
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="pendapatan"
                      stroke="hsl(105, 50%, 45%)"
                      strokeWidth={2}
                      fill="url(#profitGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="totalBiaya"
                      stroke="hsl(0, 70%, 50%)"
                      strokeWidth={2}
                      fill="url(#costGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex h-80 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                  <TrendingUp className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Tekan &quot;Hitung BEP&quot; untuk melihat grafik
                </p>
              </div>
            )}

            {/* Chart Legend */}
            {hasCalculated && results && (
              <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-chart-1" />
                  <span className="text-xs text-muted-foreground">
                    Pendapatan
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-chart-2" />
                  <span className="text-xs text-muted-foreground">
                    Total Biaya
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-4 border-t-2 border-dashed border-primary" />
                  <span className="text-xs text-muted-foreground">
                    Titik BEP
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { LayerIface } from "./Layer";
import { LayerManagerEvent } from "./LayerManagerEvent";
import { LayerManagerEventListener } from "./LayerManagerEventListener";
export interface LayerManagerIface {
    /**
     * Active layer object
     */
    activeLayer: LayerIface;
    /**
     * Active layer index
     */
    activeLayerIndex: number;
    /**
     * Array of layers (copy)
     */
    readonly layers: LayerIface[];
    /**
     * Number of layers
     */
    readonly layersLength: number;
    /**
     * Find layer that contains specified object
     *
     * @param object - Fabric.js object to look for
     * @returns Layer object if found
     */
    findLayer(object: fabric.Object): LayerIface;
    /**
     * Get layer at the specified index
     *
     * @param index - Layer index
     * @returns Layer object
     */
    getLayer(index: number): LayerIface;
    /**
     * Find specified layer and return its index
     *
     * @param layer - Layer object to find
     * @returns Layer index
     */
    getLayerIndex(layer: LayerIface): number;
    /**
     * Add layer at the specified index
     *
     * @param index - Layer index to add
     * @returns Added layer
     */
    addLayer(index?: number): LayerIface;
    /**
     * Remove layer
     *
     * @param layer - Layer object to remove
     * @returns Whether the removal succeeded or not
     */
    removeLayer(layer: LayerIface): boolean;
    /**
     * Remove layer by index
     *
     * @param index - Layer index to remove
     * @returns Whether the removal succeeded or not
     */
    removeLayerByIndex(index: number): void;
    /**
     * Move layer to the specified index
     *
     * @param from - Layer index (from)
     * @param to - Layer index (to)
     * @returns Whether moving the layer succeeded or not
     */
    moveLayer(from: number, to: number): void;
    /**
     * Add event listener
     *
     * @param listener - Event listener to add
     */
    addListener(listener: LayerManagerEventListener): void;
    /**
     * Remove event listener
     *
     * @param listener - Event listener to remove
     * @returns Whether the listener was removed or not
     */
    removeListener(listener: LayerManagerEventListener): boolean;
    /**
     * Dispose this layer manager (but doesn't clear existing objects on the canvas)
     */
    dispose(): void;
}
declare class LayerManager implements LayerManagerIface {
    private canvas;
    get activeLayer(): LayerIface;
    set activeLayer(value: LayerIface);
    private _activeLayer;
    get activeLayerIndex(): number;
    set activeLayerIndex(value: number);
    private _activeLayerIndex;
    get layers(): LayerIface[];
    set layers(_value: LayerIface[]);
    private _layers;
    get layersLength(): number;
    private _listeners;
    constructor(canvas: fabric.StaticCanvas);
    findLayer(object: fabric.Object): LayerIface;
    getLayer(index: number): LayerIface;
    getLayerIndex(layer: LayerIface): number;
    addLayer(index?: number): LayerIface;
    removeLayer(layer: LayerIface): boolean;
    removeLayerByIndex(index: number): void;
    moveLayer(from: number, to: number): void;
    /**
     * Monitor object addition
     *
     * @param e - Fabric.js event
     */
    private onObjectAdd;
    /**
     * Monitor object deletion
     *
     * @param e - Fabric.js event
     */
    private onObjectRemove;
    addListener(listener: LayerManagerEventListener): void;
    removeListener(listener: LayerManagerEventListener): boolean;
    fire(e: LayerManagerEvent): void;
    dispose(): void;
}
export default LayerManager;
